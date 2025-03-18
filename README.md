

# HuPerFlow

HuPerFlow is a benchmark for human-perceived optical flow in natural scenes. As AI models become more intertwined with applications involving human interaction—such as driving assistance—aligning machine vision with human perception is increasingly essential. While many optical flow datasets provide ground truth information, human-perceived flow remains underexplored. HuPerFlow fills this gap by offering the first large-scale benchmark for comparing human-perceived motion with algorithmic predictions.

## Overview

- **What is HuPerFlow?**  
  HuPerFlow is a benchmark containing human-perceived optical flow data measured at 2,400 locations selected from ten representative optical flow datasets. Our dataset was collected via online psychophysical experiments, resulting in approximately 38,400 response vectors from 480 participant instances.

- **Why HuPerFlow?**  
  The benchmark demonstrates that human-perceived optical flow aligns with ground truth in spatiotemporally smooth regions, yet shows systematic deviations under complex environmental conditions. It provides a unique opportunity to assess and enhance the alignment between computer vision models and human perception.

## Key Features

- **Diverse Data Sources:**  
  Our benchmark integrates images and labels from ten widely recognized optical flow datasets:
  1. KITTI  
  2. Virtual KITTI 2  
  3. MPI Sintel (NV version)  
  4. VIPER  
  5. Spring  
  6. Monkaa  
  7. MHOF  
  8. Driving  
  9. FlyingThings3D  
  10. TartanAir

- **Human-Centric Evaluation:**  
  By incorporating human response vectors, HuPerFlow offers insight into how optical flow is perceived in natural scenes—information that is critical for developing more human-aligned AI systems.

- **Algorithm Benchmarking:**  
  We evaluated several optical flow algorithms against human perception, uncovering both parallels and distinct differences that highlight the unique aspects of human motion perception.

## Dataset Details

- **Data Collection:**  
  The human-perceived flow data was gathered via online psychophysical experiments with 480 participants. Each participant provided responses at selected image locations, resulting in a comprehensive dataset of ~38,400 response vectors.

- **Third-Party Data Notice:**  
  The images and labels utilized in HuPerFlow are sourced from the above ten optical flow benchmarks. **Important:** Before using any images or labels, please review and adhere to the respective licenses and usage agreements provided on each dataset's official website.

## Experimental Methodology

- **Participants:**  
  480 participant instances contributed to the dataset, ensuring a robust sampling of human perception.

- **Measurement:**  
  Response vectors were collected at 2,400 distinct locations across various natural scenes. These measurements allow us to analyze where human perception aligns with or diverges from the ground truth optical flow.

- **Evaluation Metrics:**  
  Our analysis compared human response data against ground truth and algorithm outputs, focusing on spatiotemporal smoothness and systematic perceptual errors induced by environmental factors.

## Usage Guidelines

- **Licensing:**  
  All third-party images and labels are subject to their original usage agreements. Please ensure you consult the following official websites for each dataset before reuse:
  1. **KITTI:** [http://www.cvlibs.net/datasets/kitti/](http://www.cvlibs.net/datasets/kitti/)  
  2. **Virtual KITTI 2:** [https://europe.naverlabs.com/Research/Computer-Vision/Proxy-Virtual-Worlds/Virtual-KITTI-2](https://europe.naverlabs.com/Research/Computer-Vision/Proxy-Virtual-Worlds/Virtual-KITTI-2)  
  3. **MPI Sintel:** [https://sintel.is.tue.mpg.de/](https://sintel.is.tue.mpg.de/)  
  4. **VIPER:** [https://playing-for-benchmarks.org/dataset_viper.html](https://playing-for-benchmarks.org/dataset_viper.html)  
  5. **Spring:** [https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html](https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html)  
  6. **Monkaa:** [https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html](https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html)  
  7. **MHOF:** *Refer to the official documentation for licensing details.*  
  8. **Driving:** [https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html](https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html)  
  9. **FlyingThings3D:** [https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html](https://lmb.informatik.uni-freiburg.de/resources/datasets/SceneFlowDatasets.en.html)  
  10. **TartanAir:** [https://theairlab.org/tartanair-dataset/](https://theairlab.org/tartanair-dataset/)

- **Citation:**  
  If you use HuPerFlow or any of its derivatives in your research, please cite our work appropriately. A sample citation might be:
  ```bibtex
  
  @inproceedings{Yang2025Huperflow,
  author    = {Yung-hao Yang and Zitang Sun and Taiki Fukiage and Shin’ya Nishida},
  title     = {Huperflow: A Comprehensive Benchmark for Human vs. Machine Motion Estimation Comparison},
  booktitle = {Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)},
  year      = {2025},
  note      = {In press}
}

    
  ```

## How to Access the Data

The HuPerFlow dataset, along with the corresponding human-perceived response vectors and additional project resources, is available at: [Link to Repository or Data Archive](https://huggingface.co/datasets/sunana/Huperflow)].


## Acknowledgements

We extend our thanks to the 480 participants who contributed their responses, as well as to the developers and maintainers of the ten benchmark optical flow datasets. Their contributions have been invaluable to the development of HuPerFlow.


