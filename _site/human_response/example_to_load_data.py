from __future__ import print_function, division
import argparse
import os
import copy
import numpy as np
from PIL import Image
import torch
import torch.nn as nn
import torch.nn.functional as F
import re
import glob
import torchvision
import cv2


DEVICE = 'cuda'
maindir = 'path to the selected kitti 2015 dataset'
datasetName = ["1_KITTI"]
# csvprename={'KITTI', 'vkitti','MPI','VIPER','Spring','Monkaa','MHOF','Driving','FT3D' ,'TartanAir'};


datasetN = len(datasetName)
sessionN = 12
movN = 2
frameN = 15


def load_image(imfile):
    img = np.array(Image.open(imfile)).astype(np.uint8)
    if len(img.shape) == 2:
        img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR)
    cv2.imshow('image', img[:, :, [2, 1, 0]] / 255.0)
    img = torch.from_numpy(img).permute(2, 0, 1).float()
    return img[None].to(DEVICE)


def save_video(flo, img, writer):
    # map flow to rgb image
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    flo = cv2.cvtColor(flo, cv2.COLOR_BGR2RGB)
    print(flo.shape)
    img_flo = np.concatenate([img, flo], axis=0).astype(np.uint8)
    writer.write(img_flo)


def demo(args):
    for dataset in range(datasetN):  # ten dataset in total
        for session in range(1, sessionN + 1):
            destination_folder = os.path.join(maindir, datasetName[dataset], f'session{session:03d}')
            video_file = os.path.join(destination_folder, f'session{session:03d}.mp4')

            out = None
            for file in glob.glob(os.path.join(destination_folder, 'flow_*.mat')):
                os.remove(file)

            for mov in range(1, movN + 1):
                image_list_ = glob.glob(os.path.join(destination_folder, f'Mov{mov}_F*.jpg'))

                if len(image_list_) == 0:
                    image_list_ = glob.glob(os.path.join(destination_folder, f'Mov{mov}_F*.png'))
                image_list_.sort(key=lambda x: int(re.sub('\D', '', x)))

                print(image_list_)

                # load all images
                image_list = [load_image(img) for img in image_list_]
                # resize the image to that divisible by 8
                image_size_ori = image_list[0].shape[-2:]
                image_size = [(image_size_ori[0] // 8 + 1) * 8, (image_size_ori[1] // 8 + 1) * 8]
                image_list_resize = [F.interpolate(img, size=image_size, mode='bicubic', align_corners=True) for img in
                                     image_list]


if __name__ == '__main__':
    demo()
