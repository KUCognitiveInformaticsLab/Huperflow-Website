/******************************* 
 * Kitti_Session1_English Test *
 *******************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2022.2.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'KITTI_Session1_English';  // from the Builder filename that created this script
let expInfo = {
    'ID': `${util.pad(Number.parseFloat(util.randint(0, 999)).toFixed(0), 3)}`,
    'Name': '',
    'Age': '',
    'Gender': ["Female", "Male", "Others"],
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'pix',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
const DistanceLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(DistanceLoopLoopBegin(DistanceLoopLoopScheduler));
flowScheduler.add(DistanceLoopLoopScheduler);
flowScheduler.add(DistanceLoopLoopEnd);
flowScheduler.add(pauseRoutineBegin());
flowScheduler.add(pauseRoutineEachFrame());
flowScheduler.add(pauseRoutineEnd());
flowScheduler.add(moviedemoRoutineBegin());
flowScheduler.add(moviedemoRoutineEachFrame());
flowScheduler.add(moviedemoRoutineEnd());
flowScheduler.add(probeexplainRoutineBegin());
flowScheduler.add(probeexplainRoutineEachFrame());
flowScheduler.add(probeexplainRoutineEnd());
const probedemo_loopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(probedemo_loopLoopBegin(probedemo_loopLoopScheduler));
flowScheduler.add(probedemo_loopLoopScheduler);
flowScheduler.add(probedemo_loopLoopEnd);
flowScheduler.add(responseexplainRoutineBegin());
flowScheduler.add(responseexplainRoutineEachFrame());
flowScheduler.add(responseexplainRoutineEnd());
flowScheduler.add(pauseRoutineBegin());
flowScheduler.add(pauseRoutineEachFrame());
flowScheduler.add(pauseRoutineEnd());
const ResponseloopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(ResponseloopLoopBegin(ResponseloopLoopScheduler));
flowScheduler.add(ResponseloopLoopScheduler);
flowScheduler.add(ResponseloopLoopEnd);
flowScheduler.add(pauseRoutineBegin());
flowScheduler.add(pauseRoutineEachFrame());
flowScheduler.add(pauseRoutineEnd());
flowScheduler.add(moviestartRoutineBegin());
flowScheduler.add(moviestartRoutineEachFrame());
flowScheduler.add(moviestartRoutineEnd());
const TrainExpswitchLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrainExpswitchLoopBegin(TrainExpswitchLoopScheduler));
flowScheduler.add(TrainExpswitchLoopScheduler);
flowScheduler.add(TrainExpswitchLoopEnd);
flowScheduler.add(endthankRoutineBegin());
flowScheduler.add(endthankRoutineEachFrame());
flowScheduler.add(endthankRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'img/mov/Mov1_F15.png', 'path': 'img/mov/Mov1_F15.png'},
    {'name': 'img/demo/Demo_F09.jpg', 'path': 'img/demo/Demo_F09.jpg'},
    {'name': 'img/demo/Demo_F07.jpg', 'path': 'img/demo/Demo_F07.jpg'},
    {'name': 'img/mov/Mov1_F11.png', 'path': 'img/mov/Mov1_F11.png'},
    {'name': 'csv/DemoGTlist.csv', 'path': 'csv/DemoGTlist.csv'},
    {'name': 'img/demo/Demo_F02.jpg', 'path': 'img/demo/Demo_F02.jpg'},
    {'name': 'img/demo/Demo_F13.jpg', 'path': 'img/demo/Demo_F13.jpg'},
    {'name': 'img/mov/Mov1_F04.png', 'path': 'img/mov/Mov1_F04.png'},
    {'name': 'img/mov/Mov2_F08.png', 'path': 'img/mov/Mov2_F08.png'},
    {'name': 'img/mov/Mov2_F01.png', 'path': 'img/mov/Mov2_F01.png'},
    {'name': 'img/mov/Mov2_F14.png', 'path': 'img/mov/Mov2_F14.png'},
    {'name': 'img/mov/Mov1_F13.png', 'path': 'img/mov/Mov1_F13.png'},
    {'name': 'img/mov/Mov2_F02.png', 'path': 'img/mov/Mov2_F02.png'},
    {'name': 'img/BrownNoise.jpg', 'path': 'img/BrownNoise.jpg'},
    {'name': 'img/mov/Mov2_F11.png', 'path': 'img/mov/Mov2_F11.png'},
    {'name': 'img/demo/Demo_F01.jpg', 'path': 'img/demo/Demo_F01.jpg'},
    {'name': 'img/demo/Demo_F05.jpg', 'path': 'img/demo/Demo_F05.jpg'},
    {'name': 'img/demo/Demo_F03.jpg', 'path': 'img/demo/Demo_F03.jpg'},
    {'name': 'img/mov/Mov2_F05.png', 'path': 'img/mov/Mov2_F05.png'},
    {'name': 'img/demo/Demo_F15.jpg', 'path': 'img/demo/Demo_F15.jpg'},
    {'name': 'img/mov/Mov1_F12.png', 'path': 'img/mov/Mov1_F12.png'},
    {'name': 'img/mov/Mov1_F07.png', 'path': 'img/mov/Mov1_F07.png'},
    {'name': 'img/mov/Mov2_F15.png', 'path': 'img/mov/Mov2_F15.png'},
    {'name': 'img/mov/Mov1_F14.png', 'path': 'img/mov/Mov1_F14.png'},
    {'name': 'img/mov/Mov2_F12.png', 'path': 'img/mov/Mov2_F12.png'},
    {'name': 'img/mov/Mov2_F03.png', 'path': 'img/mov/Mov2_F03.png'},
    {'name': 'csv/KITTI_mov1.csv', 'path': 'csv/KITTI_mov1.csv'},
    {'name': 'img/procedure/Demo2.png', 'path': 'img/procedure/Demo2.png'},
    {'name': 'img/procedure/Demo1.png', 'path': 'img/procedure/Demo1.png'},
    {'name': 'img/demo/Demo_F10.jpg', 'path': 'img/demo/Demo_F10.jpg'},
    {'name': 'img/demo/Demo_F12.jpg', 'path': 'img/demo/Demo_F12.jpg'},
    {'name': 'img/procedure/Demo_allvectors.mp4', 'path': 'img/procedure/Demo_allvectors.mp4'},
    {'name': 'img/mov/Mov1_F03.png', 'path': 'img/mov/Mov1_F03.png'},
    {'name': 'img/mov/Mov1_F09.png', 'path': 'img/mov/Mov1_F09.png'},
    {'name': 'img/mov/Mov1_F01.png', 'path': 'img/mov/Mov1_F01.png'},
    {'name': 'img/mov/Mov1_F08.png', 'path': 'img/mov/Mov1_F08.png'},
    {'name': 'img/procedure/Demo_allvectors.png', 'path': 'img/procedure/Demo_allvectors.png'},
    {'name': 'img/demo/Demo_F08.jpg', 'path': 'img/demo/Demo_F08.jpg'},
    {'name': 'img/demo/Demo_F14.jpg', 'path': 'img/demo/Demo_F14.jpg'},
    {'name': 'img/mov/Mov1_F05.png', 'path': 'img/mov/Mov1_F05.png'},
    {'name': 'img/demo/Demo_F06.jpg', 'path': 'img/demo/Demo_F06.jpg'},
    {'name': 'img/BG.png', 'path': 'img/BG.png'},
    {'name': 'img/circlemasks.png', 'path': 'img/circlemasks.png'},
    {'name': 'img/mov/Mov2_F06.png', 'path': 'img/mov/Mov2_F06.png'},
    {'name': 'img/mov/Mov2_F10.png', 'path': 'img/mov/Mov2_F10.png'},
    {'name': 'img/mov/Mov1_F02.png', 'path': 'img/mov/Mov1_F02.png'},
    {'name': 'img/mov/Mov2_F04.png', 'path': 'img/mov/Mov2_F04.png'},
    {'name': 'img/mov/Mov2_F09.png', 'path': 'img/mov/Mov2_F09.png'},
    {'name': 'img/procedure/Demo1.mp4', 'path': 'img/procedure/Demo1.mp4'},
    {'name': 'img/mov/Mov2_F07.png', 'path': 'img/mov/Mov2_F07.png'},
    {'name': 'img/procedure/procedure.png', 'path': 'img/procedure/procedure.png'},
    {'name': 'img/mov/Mov1_F10.png', 'path': 'img/mov/Mov1_F10.png'},
    {'name': 'img/mov/Mov2_F13.png', 'path': 'img/mov/Mov2_F13.png'},
    {'name': 'csv/KITTI_mov2.csv', 'path': 'csv/KITTI_mov2.csv'},
    {'name': 'img/demo/Demo_F11.jpg', 'path': 'img/demo/Demo_F11.jpg'},
    {'name': 'img/demo/Demo_F04.jpg', 'path': 'img/demo/Demo_F04.jpg'},
    {'name': 'img/mov/Mov1_F06.png', 'path': 'img/mov/Mov1_F06.png'},
    {'name': 'img/procedure/Demo2.mp4', 'path': 'img/procedure/Demo2.mp4'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.2.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["ID"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var welcomeClock;
var welcome_text;
var welcome_mouse;
var frameduration;
var maincsv1;
var maincsv2;
var imagesize;
var imgCenter;
var PinkCenter;
var controlCenter;
var Pinksize;
var PinkOpacity;
var picCenterx;
var picCentery;
var Maxspeed;
var radarradius;
var EPE;
var Respcount;
var Timediff;
var Prescount;
var mouse_dX;
var mouse_dY;
var mouse1;
var mouse2;
var mouse3;
var mousehit;
var mousspotx;
var mousspoty;
var stimuliName;
var stimuliPath;
var stimuli;
var mov1list;
var mov2list;
var trainlist;
var Brownnoise;
var timeLimit;
var startTime;
var pauseClock;
var pause_text;
var DistCalibrationClock;
var ang;
var prepix;
var stepsize;
var Physz;
var Cardx;
var Cardy;
var Card_K;
var Card_T1;
var Card_G;
var Card_M;
var Card_T2;
var ShowDistanceClock;
var Dis_T;
var Dist_M;
var Dis_T_disinfo;
var Dist_T_BACK;
var Dist_T_NEXT;
var moviedemoClock;
var movie_demoClock;
var movie_demo;
var moviedemo_text1;
var moviedemo_mouse;
var vectorimage;
var moviedemo_text2;
var probeexplainClock;
var probeexplain_text1;
var probeexplain_text2;
var probe_image;
var probeexplain_mouse;
var ProbedefineClock;
var precuedemoClock;
var precuedemo_mouse;
var text;
var probedemoClock;
var probedemo_image;
var probedemo_text;
var probedemo_mouse;
var responseexplainClock;
var response_text;
var responseexplain_mouse;
var ResponseDemoClock;
var BrownMask_1;
var MouseSpot_1;
var RespDemo_M;
var RespDemo_T1;
var RespDemo_T2;
var Resp_feeedback;
var moviestartClock;
var moviestart_text;
var moviestart_mouse;
var moviedefineClock;
var instruction_text;
var instruction_mouse;
var precueClock;
var precue_text;
var movie_mouse;
var movieClock;
var BrownMask_2;
var mousespot_2;
var feedbackClock;
var trialno_text;
var FB_mouse;
var endthankClock;
var ThanksText;
var Exp_End_M;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcome_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome_text',
    text: 'Welcome to our study!\n\nIn this research, we investigate how people perceive motion.\nThe total duration of the task is approximately 20 to 30 minutes.\n\nIn this task, you will be asked to report the direction and speed of the presented motion.\nA few demonstrations and practice trials will be shown first.\n\nBefore starting the experiment, we have a request.\nTo ensure proper video presentation, please adjust your viewing distance.\nClick the mouse to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  welcome_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  welcome_mouse.mouseClock = new util.Clock();
  // Run 'Begin Experiment' code from Initial_code
  frameduration = (2 / 60);
  maincsv1 = ("csv/" + "KITTI_mov1.csv");
  maincsv2 = ("csv/" + "KITTI_mov2.csv");
  imagesize = [1238, 374];
  imgCenter = [0, 100];
  PinkCenter = [0, 100];
  controlCenter = [0, (- 170)];
  Pinksize = 2048;
  PinkOpacity = 0;
  picCenterx = ((imagesize[0] / 2) + imgCenter[0]);
  picCentery = ((imagesize[1] / 2) + imgCenter[1]);
  Maxspeed = Math.log2(21);
  radarradius = (600 / 2);
  EPE = [];
  Respcount = [];
  Timediff = [];
  Prescount = [];
  mouse_dX = 0;
  mouse_dY = 0;
  mouse1 = [];
  mouse2 = [];
  mouse3 = [];
  mousehit = 0;
  mousspotx = 0;
  mousspoty = 0;
  
  stimuliName = [];
  stimuliPath = [];
  stimuli = [];
  mov1list = [];
  mov2list = [];
  trainlist = [];
  
  // we have two movies in a block, and also different movie for training
  for (var i = 1; i<16; i++) {
      stimuliName = "Mov1_F" + i.toString().padStart(2, '0') + ".png"
      stimuliPath = "img/mov/" + stimuliName
      stimuli = new visual.ImageStim({"win": psychoJS.window, "image": stimuliPath, "imagename": "mov1_" + Number.parseInt(i), "size": imagesize, "contrast": 1, "mask": null,"pos":imgCenter, "interpolate": true, "flipHoriz": false, "flipVert": false,"autoDraw" : false});
      stimuli.opacity=1
      mov1list.push(stimuli)
      }
  
  for (var i = 1; i<16; i++) {
      stimuliName = "Mov2_F" + i.toString().padStart(2, '0') + ".png"
      stimuliPath = "img/mov/" + stimuliName
      stimuli = new visual.ImageStim({"win": psychoJS.window, "image": stimuliPath, "imagename": "mov2_" + Number.parseInt(i), "size": imagesize, "contrast": 1, "mask": null,"pos":imgCenter, "interpolate": true, "flipHoriz": false, "flipVert": false,"autoDraw" : false});
      stimuli.opacity=1
      mov2list.push(stimuli)
      }
  
  for (var i = 1; i<16; i++) {
      stimuliName = "Demo_F" + i.toString().padStart(2, '0') + ".jpg"
      stimuliPath = "img/demo/" + stimuliName
      stimuli = new visual.ImageStim({"win": psychoJS.window, "image": stimuliPath, "imagename": "train_" + Number.parseInt(i), "size": imagesize, "contrast": 1, "mask": null,"pos":imgCenter, "interpolate": true, "flipHoriz": false, "flipVert": false,"autoDraw" : false});
      stimuli.opacity=1
      trainlist.push(stimuli)
      }
  
  
  Brownnoise = new visual.ImageStim({"win": psychoJS.window, "pos": PinkCenter,"image": "img/BrownNoise.jpg","imagename": "Brownnoise", "size": [Pinksize, Pinksize], "opacity": null, "mask": null,"interpolate": true, "flipHoriz": false, "flipVert": false,"autoDraw" : false});
  
  timeLimit = 28 * 60; // 5 minutes in seconds
  startTime = performance.now(); // Record the start time
  // Initialize components for Routine "pause"
  pauseClock = new util.Clock();
  pause_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'pause_text',
    text: '',
    font: 'arial',
    units: undefined, 
    pos: [0, 0], height: 30.0,  wrapWidth: 100.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "DistCalibration"
  DistCalibrationClock = new util.Clock();
  // Run 'Begin Experiment' code from Card_C
  ang = 1;
  prepix = 50;
  stepsize = 5;
  Physz = [8.56, 5.398];
  Cardx = 428;
  Cardy = 270;
  
  Card_K = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Card_T1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Card_T1',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 320], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Card_G = new visual.Rect ({
    win: psychoJS.window, name: 'Card_G', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, (- 20)],
    lineWidth: 3.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color('white'),
    fillColor: new util.Color(undefined),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  Card_M = new core.Mouse({
    win: psychoJS.window,
  });
  Card_M.mouseClock = new util.Clock();
  Card_T2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Card_T2',
    text: "\n\nClick the mouse when you're done adjusting.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 300)], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "ShowDistance"
  ShowDistanceClock = new util.Clock();
  Dis_T = new visual.TextStim({
    win: psychoJS.window,
    name: 'Dis_T',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  Dist_M = new core.Mouse({
    win: psychoJS.window,
  });
  Dist_M.mouseClock = new util.Clock();
  Dis_T_disinfo = new visual.TextStim({
    win: psychoJS.window,
    name: 'Dis_T_disinfo',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 30], height: 100.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  Dist_T_BACK = new visual.TextStim({
    win: psychoJS.window,
    name: 'Dist_T_BACK',
    text: 'Back',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 50.0,  wrapWidth: 500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  Dist_T_NEXT = new visual.TextStim({
    win: psychoJS.window,
    name: 'Dist_T_NEXT',
    text: 'NEXT',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 50.0,  wrapWidth: 500.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "moviedemo"
  moviedemoClock = new util.Clock();
  movie_demoClock = new util.Clock();
  movie_demo = new visual.MovieStim({
    win: psychoJS.window,
    name: 'movie_demo',
    units: 'pix',
    movie: 'img/procedure/Demo_allvectors.mp4',
    pos: [0, 100],
    size: imagesize,
    ori: 0.0,
    opacity: undefined,
    loop: true,
    noAudio: true,
    });
  moviedemo_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'moviedemo_text1',
    text: 'A short movie with moving objects in different directions and speeds.\n\nPlease report your perceived motion.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 400], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  moviedemo_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  moviedemo_mouse.mouseClock = new util.Clock();
  vectorimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'vectorimage', units : undefined, 
    image : 'img/procedure/Demo_allvectors.png', mask : undefined,
    ori : 0.0, pos : [0, (- 300)], size : imagesize,
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  moviedemo_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'moviedemo_text2',
    text: 'Click the mouse to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 100], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([1, 1, 1]),  opacity: undefined,
    depth: -4.0 
  });
  
  // Initialize components for Routine "probeexplain"
  probeexplainClock = new util.Clock();
  probeexplain_text1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'probeexplain_text1',
    text: "Before each trial, a circle indicates the target motion's location.\n\nDuring a trial, a flash indicates the target motion's position and timing.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 300], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  probeexplain_text2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'probeexplain_text2',
    text: 'Click the mouse to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 500)], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  probe_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'probe_image', units : undefined, 
    image : 'img/procedure/procedure.png', mask : undefined,
    ori : 0.0, pos : [0, (- 50)], size : [850, 598],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  probeexplain_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  probeexplain_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Probedefine"
  ProbedefineClock = new util.Clock();
  // Initialize components for Routine "precuedemo"
  precuedemoClock = new util.Clock();
  precuedemo_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  precuedemo_mouse.mouseClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: "Pay attention to the circle's position.\n\nClick the mouse to continue.",
    font: 'arial',
    units: undefined, 
    pos: [0, 250], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "probedemo"
  probedemoClock = new util.Clock();
  probedemo_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'probedemo_image', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, (- 250)], size : [256, 256],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  probedemo_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'probedemo_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 400], height: 25.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -2.0 
  });
  
  probedemo_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  probedemo_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "responseexplain"
  responseexplainClock = new util.Clock();
  response_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'response_text',
    text: "Let's practice the response method.\n\nClick the mouse to continue.\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 30.0,  wrapWidth: 900.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  responseexplain_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  responseexplain_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "ResponseDemo"
  ResponseDemoClock = new util.Clock();
  BrownMask_1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BrownMask_1', units : undefined, 
    image : 'img/BG.png', mask : 'img/circlemasks.png',
    ori : 0.0, pos : [0, 0], size : [4000, 2300],
    color : new util.Color([0.0, 0.0, 0.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  MouseSpot_1 = new visual.Polygon({
    win: psychoJS.window, name: 'MouseSpot_1', 
    edges: 100, size:[5, 5],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, (- 1), 1]),
    fillColor: new util.Color([0, (- 1), 1]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  RespDemo_M = new core.Mouse({
    win: psychoJS.window,
  });
  RespDemo_M.mouseClock = new util.Clock();
  RespDemo_T1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RespDemo_T1',
    text: 'To report motion, response noise appears at the target’s location.\nMove the mouse relative to the central circle to control it.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 350], height: 30.0,  wrapWidth: 900.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  RespDemo_T2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'RespDemo_T2',
    text: "The angle represents direction, and the radius within the circle represents speed.\nClick the mouse when you're ready to proceed.\n\n",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 380)], height: 30.0,  wrapWidth: 900.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -6.0 
  });
  
  Resp_feeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'Resp_feeedback',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 500), (- 100)], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  // Initialize components for Routine "moviestart"
  moviestartClock = new util.Clock();
  moviestart_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'moviestart_text',
    text: "Now, let's begin the practice.\n\nA short movie will be shown.\nPlease watch it at least three times.\nA flash will indicate the target motion’s position and timing.\n\nMatch the noise motion to the target motion, then click the mouse again when done.\n\nClick the mouse to start the trial.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  moviestart_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  moviestart_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "moviedefine"
  moviedefineClock = new util.Clock();
  instruction_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'instruction_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  instruction_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  instruction_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "precue"
  precueClock = new util.Clock();
  precue_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'precue_text',
    text: "Pay attention to the circle's position.\n\nClick the mouse to continue.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 400], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  movie_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  movie_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "movie"
  movieClock = new util.Clock();
  BrownMask_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BrownMask_2', units : undefined, 
    image : 'img/BG.png', mask : 'img/circlemasks.png',
    ori : 0.0, pos : [0, 0], size : [4000, 2300],
    color : new util.Color([0.0, 0.0, 0.0]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  mousespot_2 = new visual.Polygon({
    win: psychoJS.window, name: 'mousespot_2', 
    edges: 100, size:[5, 5],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, 
    colorSpace: 'rgb',
    lineColor: new util.Color([0, (- 1), 1]),
    fillColor: new util.Color([0, (- 1), 1]),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  trialno_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialno_text',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, 350], height: 50.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -3.0 
  });
  
  FB_mouse = new core.Mouse({
    win: psychoJS.window,
  });
  FB_mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "endthank"
  endthankClock = new util.Clock();
  ThanksText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ThanksText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.3), 0.25], height: 40.0,  wrapWidth: 1000.0, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -1.0 
  });
  
  Exp_End_M = new core.Mouse({
    win: psychoJS.window,
  });
  Exp_End_M.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var gotValidClick;
var RGB;
var CProbe;
var Lprobe;
var Rprobe;
var Uprobe;
var Dprobe;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the welcome_mouse
    // current position of the mouse:
    welcome_mouse.x = [];
    welcome_mouse.y = [];
    welcome_mouse.leftButton = [];
    welcome_mouse.midButton = [];
    welcome_mouse.rightButton = [];
    welcome_mouse.time = [];
    gotValidClick = false; // until a click is received
    RGB = [-1,1,-1];
    CProbe = new visual.Polygon({"win": psychoJS.window, "name": "CProbe", "size": [7, 7], "edges": 100, "ori": 0.0, "pos": [0, 0], "anchor": "center", "lineWidth": 0.0, "colorSpace": "rgb", "lineColor": [1, 1, -1], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": 1.0, "depth": (- 10.0), "interpolate": true});
    Lprobe = new visual.Polygon({"win": psychoJS.window, "name": "Lprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [((- 120) / 2), 0], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [RGB[0], RGB[1], RGB[2]], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": null, "interpolate": true, "autoDraw": true});
    Rprobe = new visual.Polygon({"win": psychoJS.window, "name": "Rprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [(120 / 2), 0], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [RGB[0], RGB[1], RGB[2]], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": null, "interpolate": true, "autoDraw": true});
    Uprobe = new visual.Polygon({"win": psychoJS.window, "name": "Uprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [0, (120 / 2)], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [RGB[0], RGB[1], RGB[2]], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": null, "interpolate": true, "autoDraw": true});
    Dprobe = new visual.Polygon({"win": psychoJS.window, "name": "Dprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [0, ((- 120) / 2)], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [RGB[0], RGB[1], RGB[2]], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": null, "interpolate": true, "autoDraw": true});
    
    
    
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcome_text);
    welcomeComponents.push(welcome_mouse);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome_text* updates
    if (t >= 0.0 && welcome_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_text.tStart = t;  // (not accounting for frame time here)
      welcome_text.frameNStart = frameN;  // exact frame index
      
      welcome_text.setAutoDraw(true);
    }

    // *welcome_mouse* updates
    if (t >= 0.0 && welcome_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome_mouse.tStart = t;  // (not accounting for frame time here)
      welcome_mouse.frameNStart = frameN;  // exact frame index
      
      welcome_mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = welcome_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (welcome_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = welcome_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = welcome_mouse.getPos();
          welcome_mouse.x.push(_mouseXYs[0]);
          welcome_mouse.y.push(_mouseXYs[1]);
          welcome_mouse.leftButton.push(_mouseButtons[0]);
          welcome_mouse.midButton.push(_mouseButtons[1]);
          welcome_mouse.rightButton.push(_mouseButtons[2]);
          welcome_mouse.time.push(globalClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (welcome_mouse.x) {  psychoJS.experiment.addData('welcome_mouse.x', welcome_mouse.x[0])};
    if (welcome_mouse.y) {  psychoJS.experiment.addData('welcome_mouse.y', welcome_mouse.y[0])};
    if (welcome_mouse.leftButton) {  psychoJS.experiment.addData('welcome_mouse.leftButton', welcome_mouse.leftButton[0])};
    if (welcome_mouse.midButton) {  psychoJS.experiment.addData('welcome_mouse.midButton', welcome_mouse.midButton[0])};
    if (welcome_mouse.rightButton) {  psychoJS.experiment.addData('welcome_mouse.rightButton', welcome_mouse.rightButton[0])};
    if (welcome_mouse.time) {  psychoJS.experiment.addData('welcome_mouse.time', welcome_mouse.time[0])};
    
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var DistanceLoop;
function DistanceLoopLoopBegin(DistanceLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    DistanceLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'DistanceLoop'
    });
    psychoJS.experiment.addLoop(DistanceLoop); // add the loop to the experiment
    currentLoop = DistanceLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisDistanceLoop of DistanceLoop) {
      snapshot = DistanceLoop.getSnapshot();
      DistanceLoopLoopScheduler.add(importConditions(snapshot));
      DistanceLoopLoopScheduler.add(pauseRoutineBegin(snapshot));
      DistanceLoopLoopScheduler.add(pauseRoutineEachFrame());
      DistanceLoopLoopScheduler.add(pauseRoutineEnd(snapshot));
      DistanceLoopLoopScheduler.add(DistCalibrationRoutineBegin(snapshot));
      DistanceLoopLoopScheduler.add(DistCalibrationRoutineEachFrame());
      DistanceLoopLoopScheduler.add(DistCalibrationRoutineEnd(snapshot));
      DistanceLoopLoopScheduler.add(ShowDistanceRoutineBegin(snapshot));
      DistanceLoopLoopScheduler.add(ShowDistanceRoutineEachFrame());
      DistanceLoopLoopScheduler.add(ShowDistanceRoutineEnd(snapshot));
      DistanceLoopLoopScheduler.add(DistanceLoopLoopEndIteration(DistanceLoopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function DistanceLoopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(DistanceLoop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function DistanceLoopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var probedemo_loop;
function probedemo_loopLoopBegin(probedemo_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    probedemo_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'probedemo_loop'
    });
    psychoJS.experiment.addLoop(probedemo_loop); // add the loop to the experiment
    currentLoop = probedemo_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisProbedemo_loop of probedemo_loop) {
      snapshot = probedemo_loop.getSnapshot();
      probedemo_loopLoopScheduler.add(importConditions(snapshot));
      probedemo_loopLoopScheduler.add(ProbedefineRoutineBegin(snapshot));
      probedemo_loopLoopScheduler.add(ProbedefineRoutineEachFrame());
      probedemo_loopLoopScheduler.add(ProbedefineRoutineEnd(snapshot));
      probedemo_loopLoopScheduler.add(precuedemoRoutineBegin(snapshot));
      probedemo_loopLoopScheduler.add(precuedemoRoutineEachFrame());
      probedemo_loopLoopScheduler.add(precuedemoRoutineEnd(snapshot));
      probedemo_loopLoopScheduler.add(probedemoRoutineBegin(snapshot));
      probedemo_loopLoopScheduler.add(probedemoRoutineEachFrame());
      probedemo_loopLoopScheduler.add(probedemoRoutineEnd(snapshot));
      probedemo_loopLoopScheduler.add(probedemo_loopLoopEndIteration(probedemo_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function probedemo_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(probedemo_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function probedemo_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var Responseloop;
function ResponseloopLoopBegin(ResponseloopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Responseloop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'Responseloop'
    });
    psychoJS.experiment.addLoop(Responseloop); // add the loop to the experiment
    currentLoop = Responseloop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisResponseloop of Responseloop) {
      snapshot = Responseloop.getSnapshot();
      ResponseloopLoopScheduler.add(importConditions(snapshot));
      ResponseloopLoopScheduler.add(ResponseDemoRoutineBegin(snapshot));
      ResponseloopLoopScheduler.add(ResponseDemoRoutineEachFrame());
      ResponseloopLoopScheduler.add(ResponseDemoRoutineEnd(snapshot));
      ResponseloopLoopScheduler.add(ResponseloopLoopEndIteration(ResponseloopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function ResponseloopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Responseloop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function ResponseloopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var TrainExpswitch;
function TrainExpswitchLoopBegin(TrainExpswitchLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    TrainExpswitch = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 3, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'TrainExpswitch'
    });
    psychoJS.experiment.addLoop(TrainExpswitch); // add the loop to the experiment
    currentLoop = TrainExpswitch;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrainExpswitch of TrainExpswitch) {
      snapshot = TrainExpswitch.getSnapshot();
      TrainExpswitchLoopScheduler.add(importConditions(snapshot));
      TrainExpswitchLoopScheduler.add(moviedefineRoutineBegin(snapshot));
      TrainExpswitchLoopScheduler.add(moviedefineRoutineEachFrame());
      TrainExpswitchLoopScheduler.add(moviedefineRoutineEnd(snapshot));
      const trialsLoopScheduler = new Scheduler(psychoJS);
      TrainExpswitchLoopScheduler.add(trialsLoopBegin(trialsLoopScheduler, snapshot));
      TrainExpswitchLoopScheduler.add(trialsLoopScheduler);
      TrainExpswitchLoopScheduler.add(trialsLoopEnd);
      TrainExpswitchLoopScheduler.add(TrainExpswitchLoopEndIteration(TrainExpswitchLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: csvfile,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(precueRoutineBegin(snapshot));
      trialsLoopScheduler.add(precueRoutineEachFrame());
      trialsLoopScheduler.add(precueRoutineEnd(snapshot));
      const movie_loopLoopScheduler = new Scheduler(psychoJS);
      trialsLoopScheduler.add(movie_loopLoopBegin(movie_loopLoopScheduler, snapshot));
      trialsLoopScheduler.add(movie_loopLoopScheduler);
      trialsLoopScheduler.add(movie_loopLoopEnd);
      trialsLoopScheduler.add(pauseRoutineBegin(snapshot));
      trialsLoopScheduler.add(pauseRoutineEachFrame());
      trialsLoopScheduler.add(pauseRoutineEnd(snapshot));
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


var movie_loop;
function movie_loopLoopBegin(movie_loopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    movie_loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 999, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'movie_loop'
    });
    psychoJS.experiment.addLoop(movie_loop); // add the loop to the experiment
    currentLoop = movie_loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisMovie_loop of movie_loop) {
      snapshot = movie_loop.getSnapshot();
      movie_loopLoopScheduler.add(importConditions(snapshot));
      movie_loopLoopScheduler.add(movieRoutineBegin(snapshot));
      movie_loopLoopScheduler.add(movieRoutineEachFrame());
      movie_loopLoopScheduler.add(movieRoutineEnd(snapshot));
      movie_loopLoopScheduler.add(movie_loopLoopEndIteration(movie_loopLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function movie_loopLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(movie_loop);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function movie_loopLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


async function TrainExpswitchLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(TrainExpswitch);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TrainExpswitchLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var pauseComponents;
function pauseRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pause' ---
    t = 0;
    pauseClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(0.200000);
    // update component parameters for each repeat
    // keep track of which components have finished
    pauseComponents = [];
    pauseComponents.push(pause_text);
    
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function pauseRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pause' ---
    // get current time
    t = pauseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pause_text* updates
    if (t >= 0.0 && pause_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pause_text.tStart = t;  // (not accounting for frame time here)
      pause_text.frameNStart = frameN;  // exact frame index
      
      pause_text.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pause_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pause_text.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pauseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pauseRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pause' ---
    for (const thisComponent of pauseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var _Card_K_allKeys;
var DistCalibrationComponents;
function DistCalibrationRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'DistCalibration' ---
    t = 0;
    DistCalibrationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Card_C
    psychoJS.eventManager.clearEvents();
    
    Card_K.keys = undefined;
    Card_K.rt = undefined;
    _Card_K_allKeys = [];
    // setup some python lists for storing info about the Card_M
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    DistCalibrationComponents = [];
    DistCalibrationComponents.push(Card_K);
    DistCalibrationComponents.push(Card_T1);
    DistCalibrationComponents.push(Card_G);
    DistCalibrationComponents.push(Card_M);
    DistCalibrationComponents.push(Card_T2);
    
    for (const thisComponent of DistCalibrationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var cmPpix;
var tmpcmPpix;
var realsz;
var distance;
function DistCalibrationRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'DistCalibration' ---
    // get current time
    t = DistCalibrationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from Card_C
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = psychoJS.eventManager.getKeys();
    if (keys.length) {
        console.log(cmPpix);
        if (_pj.in_es6("right", keys)) {
            Cardx += stepsize;
        } else {
            if (_pj.in_es6("left", keys)) {
                Cardx -= stepsize;
            } else {
                if (_pj.in_es6("up", keys)) {
                    Cardy += stepsize;
                } else {
                    if (_pj.in_es6("down", keys)) {
                        Cardy -= stepsize;
                    } else {
                        if (_pj.in_es6("space", keys)) {
                            continueRoutine = false;
                            routineForceEnded = true;
                        }
                    }
                }
            }
        }
    }
    cmPpix = (((Physz[0] / Cardx) + (Physz[1] / Cardy)) / 2);
    tmpcmPpix = ((Math.round((cmPpix * 1000)) / 1000) * 10);
    realsz = (cmPpix * prepix);
    distance = (realsz / (2 * Math.tan(((pi * ang) / 360))));
    
    
    // *Card_K* updates
    if (t >= 0.0 && Card_K.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Card_K.tStart = t;  // (not accounting for frame time here)
      Card_K.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      Card_K.clock.reset();
      Card_K.start();
      Card_K.clearEvents();
    }

    if (Card_K.status === PsychoJS.Status.STARTED) {
      let theseKeys = Card_K.getKeys({keyList: ['up', 'down', 'left', 'right', 'space'], waitRelease: false});
      _Card_K_allKeys = _Card_K_allKeys.concat(theseKeys);
      if (_Card_K_allKeys.length > 0) {
        Card_K.keys = _Card_K_allKeys[_Card_K_allKeys.length - 1].name;  // just the last key pressed
        Card_K.rt = _Card_K_allKeys[_Card_K_allKeys.length - 1].rt;
      }
    }
    
    
    // *Card_T1* updates
    if (t >= 0.0 && Card_T1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Card_T1.tStart = t;  // (not accounting for frame time here)
      Card_T1.frameNStart = frameN;  // exact frame index
      
      Card_T1.setAutoDraw(true);
    }

    
    if (Card_T1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Card_T1.setText('Use the arrow keys to resize the black rectangle to match a credit card.\nThis will help calculate the optimal viewing distance.\n\n\n', false);
    }
    
    // *Card_G* updates
    if (t >= 0.0 && Card_G.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Card_G.tStart = t;  // (not accounting for frame time here)
      Card_G.frameNStart = frameN;  // exact frame index
      
      Card_G.setAutoDraw(true);
    }

    
    if (Card_G.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Card_G.setSize([Cardx, Cardy], false);
    }
    // *Card_M* updates
    if (t >= 0.0 && Card_M.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Card_M.tStart = t;  // (not accounting for frame time here)
      Card_M.frameNStart = frameN;  // exact frame index
      
      Card_M.status = PsychoJS.Status.STARTED;
      Card_M.mouseClock.reset();
      prevButtonState = Card_M.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Card_M.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = Card_M.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *Card_T2* updates
    if (t >= 0.0 && Card_T2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Card_T2.tStart = t;  // (not accounting for frame time here)
      Card_T2.frameNStart = frameN;  // exact frame index
      
      Card_T2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of DistCalibrationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function DistCalibrationRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'DistCalibration' ---
    for (const thisComponent of DistCalibrationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from Card_C
    Card_G.setAutoDraw(false);
    
    Card_K.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "DistCalibration" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Backxy;
var Nextxy;
var clicker_things;
var BackSquare;
var NextSquare;
var ShowDistanceComponents;
function ShowDistanceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ShowDistance' ---
    t = 0;
    ShowDistanceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from Dis_C_mouse
    Backxy = [(- 300), (- 250)];
    Nextxy = [300, (- 250)];
    clicker_things = [];
    
    BackSquare = new visual.Rect({"win": psychoJS.window, "name": "BackSquare", width: 175, height: 60, "ori": 0.0, "pos": Backxy, "lineWidth": 1.5, "colorSpace": "rgb", "autoDraw": true, "lineColor": new util.Color([-1,-1,-1]), "opacity": 1.0, "depth": (- 11.0), "interpolate": true, "fillColor": null});
    NextSquare = new visual.Rect({"win": psychoJS.window, "name": "NextSquare", width: 175, height: 60, "ori": 0.0, "pos": Nextxy, "lineWidth": 1.5, "colorSpace": "rgb", "autoDraw": true, "lineColor": new util.Color([-1,-1,-1]), "opacity": 1.0, "depth": (- 11.0), "interpolate": true, "fillColor": null});
    
    Dis_T.setText('Please begin the experiment by positioning yourself at the specified distance from the screen.\n\n\n\n\n\n\n\n\nIf you need to adjust your position again, click “Back.”\nWhen you’re ready, click “NEXT.”\n');
    // setup some python lists for storing info about the Dist_M
    gotValidClick = false; // until a click is received
    Dis_T_disinfo.setText((`${((Math.round(((distance / 2.54) * 10)) / 10) + " inch ")}` + `(${(Math.round(distance) + " cm)")}`));
    Dist_T_BACK.setPos(Backxy);
    Dist_T_NEXT.setPos(Nextxy);
    // keep track of which components have finished
    ShowDistanceComponents = [];
    ShowDistanceComponents.push(Dis_T);
    ShowDistanceComponents.push(Dist_M);
    ShowDistanceComponents.push(Dis_T_disinfo);
    ShowDistanceComponents.push(Dist_T_BACK);
    ShowDistanceComponents.push(Dist_T_NEXT);
    
    for (const thisComponent of ShowDistanceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var clickables;
function ShowDistanceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ShowDistance' ---
    // get current time
    t = ShowDistanceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from Dis_C_mouse
    clickables = [BackSquare, NextSquare];
    if (Dist_M.isPressedIn(clickables[0])) {
        continueRoutine = false;
    } else {
        if (Dist_M.isPressedIn(clickables[1])) {
            continueRoutine = false;
            DistanceLoop.finished = true;
        }
    }
    
    BackSquare.draw()
    NextSquare.draw()
    
    // *Dis_T* updates
    if (t >= 0.0 && Dis_T.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Dis_T.tStart = t;  // (not accounting for frame time here)
      Dis_T.frameNStart = frameN;  // exact frame index
      
      Dis_T.setAutoDraw(true);
    }

    
    // *Dis_T_disinfo* updates
    if (t >= 0.0 && Dis_T_disinfo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Dis_T_disinfo.tStart = t;  // (not accounting for frame time here)
      Dis_T_disinfo.frameNStart = frameN;  // exact frame index
      
      Dis_T_disinfo.setAutoDraw(true);
    }

    
    // *Dist_T_BACK* updates
    if (t >= 0.0 && Dist_T_BACK.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Dist_T_BACK.tStart = t;  // (not accounting for frame time here)
      Dist_T_BACK.frameNStart = frameN;  // exact frame index
      
      Dist_T_BACK.setAutoDraw(true);
    }

    
    // *Dist_T_NEXT* updates
    if (t >= 0.0 && Dist_T_NEXT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Dist_T_NEXT.tStart = t;  // (not accounting for frame time here)
      Dist_T_NEXT.frameNStart = frameN;  // exact frame index
      
      Dist_T_NEXT.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ShowDistanceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ShowDistanceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ShowDistance' ---
    for (const thisComponent of ShowDistanceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from Dis_C_square
    BackSquare.setAutoDraw(false)
    NextSquare.setAutoDraw(false)
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "ShowDistance" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var moviedemoComponents;
function moviedemoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'moviedemo' ---
    t = 0;
    moviedemoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the moviedemo_mouse
    // current position of the mouse:
    moviedemo_mouse.x = [];
    moviedemo_mouse.y = [];
    moviedemo_mouse.leftButton = [];
    moviedemo_mouse.midButton = [];
    moviedemo_mouse.rightButton = [];
    moviedemo_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    moviedemoComponents = [];
    moviedemoComponents.push(movie_demo);
    moviedemoComponents.push(moviedemo_text1);
    moviedemoComponents.push(moviedemo_mouse);
    moviedemoComponents.push(vectorimage);
    moviedemoComponents.push(moviedemo_text2);
    
    for (const thisComponent of moviedemoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function moviedemoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'moviedemo' ---
    // get current time
    t = moviedemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *movie_demo* updates
    if (t >= 0.0 && movie_demo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_demo.tStart = t;  // (not accounting for frame time here)
      movie_demo.frameNStart = frameN;  // exact frame index
      
      movie_demo.setAutoDraw(true);
      movie_demo.play();
    }

    if (movie_demo.status === PsychoJS.Status.FINISHED) {  // force-end the routine
        continueRoutine = false;
    }
    
    // *moviedemo_text1* updates
    if (t >= 0.0 && moviedemo_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moviedemo_text1.tStart = t;  // (not accounting for frame time here)
      moviedemo_text1.frameNStart = frameN;  // exact frame index
      
      moviedemo_text1.setAutoDraw(true);
    }

    // *moviedemo_mouse* updates
    if (t >= 0.0 && moviedemo_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moviedemo_mouse.tStart = t;  // (not accounting for frame time here)
      moviedemo_mouse.frameNStart = frameN;  // exact frame index
      
      moviedemo_mouse.status = PsychoJS.Status.STARTED;
      moviedemo_mouse.mouseClock.reset();
      prevButtonState = moviedemo_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (moviedemo_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = moviedemo_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = moviedemo_mouse.getPos();
          moviedemo_mouse.x.push(_mouseXYs[0]);
          moviedemo_mouse.y.push(_mouseXYs[1]);
          moviedemo_mouse.leftButton.push(_mouseButtons[0]);
          moviedemo_mouse.midButton.push(_mouseButtons[1]);
          moviedemo_mouse.rightButton.push(_mouseButtons[2]);
          moviedemo_mouse.time.push(moviedemo_mouse.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    
    // *vectorimage* updates
    if (t >= 0.0 && vectorimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      vectorimage.tStart = t;  // (not accounting for frame time here)
      vectorimage.frameNStart = frameN;  // exact frame index
      
      vectorimage.setAutoDraw(true);
    }

    
    // *moviedemo_text2* updates
    if (t >= 0.0 && moviedemo_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moviedemo_text2.tStart = t;  // (not accounting for frame time here)
      moviedemo_text2.frameNStart = frameN;  // exact frame index
      
      moviedemo_text2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of moviedemoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function moviedemoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'moviedemo' ---
    for (const thisComponent of moviedemoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    movie_demo.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (moviedemo_mouse.x) {  psychoJS.experiment.addData('moviedemo_mouse.x', moviedemo_mouse.x[0])};
    if (moviedemo_mouse.y) {  psychoJS.experiment.addData('moviedemo_mouse.y', moviedemo_mouse.y[0])};
    if (moviedemo_mouse.leftButton) {  psychoJS.experiment.addData('moviedemo_mouse.leftButton', moviedemo_mouse.leftButton[0])};
    if (moviedemo_mouse.midButton) {  psychoJS.experiment.addData('moviedemo_mouse.midButton', moviedemo_mouse.midButton[0])};
    if (moviedemo_mouse.rightButton) {  psychoJS.experiment.addData('moviedemo_mouse.rightButton', moviedemo_mouse.rightButton[0])};
    if (moviedemo_mouse.time) {  psychoJS.experiment.addData('moviedemo_mouse.time', moviedemo_mouse.time[0])};
    
    // the Routine "moviedemo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var probeexplainComponents;
function probeexplainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'probeexplain' ---
    t = 0;
    probeexplainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the probeexplain_mouse
    // current position of the mouse:
    probeexplain_mouse.x = [];
    probeexplain_mouse.y = [];
    probeexplain_mouse.leftButton = [];
    probeexplain_mouse.midButton = [];
    probeexplain_mouse.rightButton = [];
    probeexplain_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    probeexplainComponents = [];
    probeexplainComponents.push(probeexplain_text1);
    probeexplainComponents.push(probeexplain_text2);
    probeexplainComponents.push(probe_image);
    probeexplainComponents.push(probeexplain_mouse);
    
    for (const thisComponent of probeexplainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function probeexplainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'probeexplain' ---
    // get current time
    t = probeexplainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probeexplain_text1* updates
    if (t >= 0.0 && probeexplain_text1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeexplain_text1.tStart = t;  // (not accounting for frame time here)
      probeexplain_text1.frameNStart = frameN;  // exact frame index
      
      probeexplain_text1.setAutoDraw(true);
    }

    
    // *probeexplain_text2* updates
    if (t >= 0.0 && probeexplain_text2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeexplain_text2.tStart = t;  // (not accounting for frame time here)
      probeexplain_text2.frameNStart = frameN;  // exact frame index
      
      probeexplain_text2.setAutoDraw(true);
    }

    
    // *probe_image* updates
    if (t >= 0.0 && probe_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probe_image.tStart = t;  // (not accounting for frame time here)
      probe_image.frameNStart = frameN;  // exact frame index
      
      probe_image.setAutoDraw(true);
    }

    // *probeexplain_mouse* updates
    if (t >= 0.0 && probeexplain_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probeexplain_mouse.tStart = t;  // (not accounting for frame time here)
      probeexplain_mouse.frameNStart = frameN;  // exact frame index
      
      probeexplain_mouse.status = PsychoJS.Status.STARTED;
      probeexplain_mouse.mouseClock.reset();
      prevButtonState = probeexplain_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (probeexplain_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = probeexplain_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = probeexplain_mouse.getPos();
          probeexplain_mouse.x.push(_mouseXYs[0]);
          probeexplain_mouse.y.push(_mouseXYs[1]);
          probeexplain_mouse.leftButton.push(_mouseButtons[0]);
          probeexplain_mouse.midButton.push(_mouseButtons[1]);
          probeexplain_mouse.rightButton.push(_mouseButtons[2]);
          probeexplain_mouse.time.push(probeexplain_mouse.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of probeexplainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function probeexplainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'probeexplain' ---
    for (const thisComponent of probeexplainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (probeexplain_mouse.x) {  psychoJS.experiment.addData('probeexplain_mouse.x', probeexplain_mouse.x[0])};
    if (probeexplain_mouse.y) {  psychoJS.experiment.addData('probeexplain_mouse.y', probeexplain_mouse.y[0])};
    if (probeexplain_mouse.leftButton) {  psychoJS.experiment.addData('probeexplain_mouse.leftButton', probeexplain_mouse.leftButton[0])};
    if (probeexplain_mouse.midButton) {  psychoJS.experiment.addData('probeexplain_mouse.midButton', probeexplain_mouse.midButton[0])};
    if (probeexplain_mouse.rightButton) {  psychoJS.experiment.addData('probeexplain_mouse.rightButton', probeexplain_mouse.rightButton[0])};
    if (probeexplain_mouse.time) {  psychoJS.experiment.addData('probeexplain_mouse.time', probeexplain_mouse.time[0])};
    
    // the Routine "probeexplain" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var probedemomp4;
var probedemopng;
var Probedemotext;
var ProbedefineComponents;
function ProbedefineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Probedefine' ---
    t = 0;
    ProbedefineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from probedemo_code
    if ((probedemo_loop.thisN === 0)) {
        probedemomp4 = "img/procedure/Demo1.mp4";
        probedemopng = "img/procedure/Demo1.png";
        Probedemotext = ("In this case, the flash indicates that the target motion" + "\n is the white car moving to the left.");
    } else {
        if ((probedemo_loop.thisN === 1)) {
            probedemomp4 = "img/procedure/Demo2.mp4";
            probedemopng = "img/procedure/Demo2.png";
            Probedemotext = ("In this case, the flash indicates that the target motion" + "\n is the signboard moving to the right.");
        }
    }
    
    // keep track of which components have finished
    ProbedefineComponents = [];
    
    for (const thisComponent of ProbedefineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function ProbedefineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Probedefine' ---
    // get current time
    t = ProbedefineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ProbedefineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ProbedefineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Probedefine' ---
    for (const thisComponent of ProbedefineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "Probedefine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Probex;
var Probey;
var Precue_circle;
var precuedemoComponents;
function precuedemoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'precuedemo' ---
    t = 0;
    precuedemoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the precuedemo_mouse
    // current position of the mouse:
    precuedemo_mouse.x = [];
    precuedemo_mouse.y = [];
    precuedemo_mouse.leftButton = [];
    precuedemo_mouse.midButton = [];
    precuedemo_mouse.rightButton = [];
    precuedemo_mouse.time = [];
    gotValidClick = false; // until a click is received
    
    if ((probedemo_loop.thisN === 0)) {
        Probex = (385-picCenterx);
        Probey = (picCentery-235);
       } else {
        if ((probedemo_loop.thisN === 1)) {
            Probex = (922-picCenterx);
            Probey = (picCentery-211);
           }
    }
    console.log("picCenterx:" +picCenterx);
    
    console.log("Probex:" +Probex);
    console.log("Probey:" +Probey);
    
    Precue_circle = new visual.Polygon({"win": psychoJS.window, "name": "precue_circle", "size": [120, 120], "edges": 100, "ori": 0.0, "pos": [Probex, Probey], "anchor": "center", "lineWidth": 1.5, "colorSpace": "rgb", "lineColor": new util.Color([-1,1,-1]), "opacity": 1.0, "depth": (- 11.0), "interpolate": true, "fillColor": null});
    RGB = [-1,1,-1];
    CProbe = new visual.Polygon({"win": psychoJS.window, "name": "CProbe", "size": [7, 7], "edges": 100, "ori": 0.0, "pos": [Probex, Probey], "anchor": "center", "lineWidth": 0.0, "colorSpace": "rgb", "lineColor": [-1, 1, -1], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": 1.0, "depth": (- 10.0), "interpolate": true});
    
    CProbe.pos=[Probex,Probey];
    Precue_circle.pos=[Probex,Probey];
    
    // keep track of which components have finished
    precuedemoComponents = [];
    precuedemoComponents.push(precuedemo_mouse);
    precuedemoComponents.push(text);
    
    for (const thisComponent of precuedemoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function precuedemoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'precuedemo' ---
    // get current time
    t = precuedemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // *precuedemo_mouse* updates
    if (t >= 0.0 && precuedemo_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      precuedemo_mouse.tStart = t;  // (not accounting for frame time here)
      precuedemo_mouse.frameNStart = frameN;  // exact frame index
      
      precuedemo_mouse.status = PsychoJS.Status.STARTED;
      precuedemo_mouse.mouseClock.reset();
      prevButtonState = precuedemo_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (precuedemo_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = precuedemo_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = precuedemo_mouse.getPos();
          precuedemo_mouse.x.push(_mouseXYs[0]);
          precuedemo_mouse.y.push(_mouseXYs[1]);
          precuedemo_mouse.leftButton.push(_mouseButtons[0]);
          precuedemo_mouse.midButton.push(_mouseButtons[1]);
          precuedemo_mouse.rightButton.push(_mouseButtons[2]);
          precuedemo_mouse.time.push(precuedemo_mouse.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // Run 'Each Frame' code from precuedemo_code
    CProbe.draw()
    Precue_circle.draw()
    
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of precuedemoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function precuedemoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'precuedemo' ---
    for (const thisComponent of precuedemoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (precuedemo_mouse.x) {  psychoJS.experiment.addData('precuedemo_mouse.x', precuedemo_mouse.x[0])};
    if (precuedemo_mouse.y) {  psychoJS.experiment.addData('precuedemo_mouse.y', precuedemo_mouse.y[0])};
    if (precuedemo_mouse.leftButton) {  psychoJS.experiment.addData('precuedemo_mouse.leftButton', precuedemo_mouse.leftButton[0])};
    if (precuedemo_mouse.midButton) {  psychoJS.experiment.addData('precuedemo_mouse.midButton', precuedemo_mouse.midButton[0])};
    if (precuedemo_mouse.rightButton) {  psychoJS.experiment.addData('precuedemo_mouse.rightButton', precuedemo_mouse.rightButton[0])};
    if (precuedemo_mouse.time) {  psychoJS.experiment.addData('precuedemo_mouse.time', precuedemo_mouse.time[0])};
    
    // Run 'End Routine' code from precuedemo_code
    Precue_circle.setAutoDraw(false)
    CProbe.setAutoDraw(false)
    
    
    
    // the Routine "precuedemo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var probedemo_movieClock;
var probedemo_movie;
var probedemoComponents;
function probedemoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'probedemo' ---
    t = 0;
    probedemoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    probedemo_movieClock = new util.Clock();
    probedemo_movie = new visual.MovieStim({
      win: psychoJS.window,
      name: 'probedemo_movie',
      units: undefined,
      movie: probedemomp4,
      pos: [0, 100],
      size: imagesize,
      ori: 0.0,
      opacity: undefined,
      loop: true,
      noAudio: true,
      });
    probedemo_image.setImage(probedemopng);
    probedemo_text.setText(Probedemotext);
    // setup some python lists for storing info about the probedemo_mouse
    // current position of the mouse:
    probedemo_mouse.x = [];
    probedemo_mouse.y = [];
    probedemo_mouse.leftButton = [];
    probedemo_mouse.midButton = [];
    probedemo_mouse.rightButton = [];
    probedemo_mouse.time = [];
    gotValidClick = false; // until a click is received
    // Run 'Begin Routine' code from surroundprobecode
    Lprobe = new visual.Polygon({"win": psychoJS.window, "name": "Lprobe", "size": [5, 5], "edges": 100, "ori": 0.0, "pos": [Probex-60, Probey], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [RGB[0], RGB[1], RGB[2]], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": null, "interpolate": true, "autoDraw": true});
    Rprobe = new visual.Polygon({"win": psychoJS.window, "name": "Rprobe", "size": [5, 5], "edges": 100, "ori": 0.0, "pos": [Probex+60, Probey], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [RGB[0], RGB[1], RGB[2]], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": null, "interpolate": true, "autoDraw": true});
    Uprobe = new visual.Polygon({"win": psychoJS.window, "name": "Uprobe", "size": [5, 5], "edges": 100, "ori": 0.0, "pos": [Probex, Probey+60], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [RGB[0], RGB[1], RGB[2]], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": null, "interpolate": true, "autoDraw": true});
    Dprobe = new visual.Polygon({"win": psychoJS.window, "name": "Dprobe", "size": [5, 5], "edges": 100, "ori": 0.0, "pos": [Probex, Probey-60], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [RGB[0], RGB[1], RGB[2]], "fillColor": [RGB[0], RGB[1], RGB[2]], "opacity": null, "interpolate": true, "autoDraw": true});
    
    Lprobe.setAutoDraw(true);
    Rprobe.setAutoDraw(true);
    Uprobe.setAutoDraw(true);
    Dprobe.setAutoDraw(true);
    
    // keep track of which components have finished
    probedemoComponents = [];
    probedemoComponents.push(probedemo_movie);
    probedemoComponents.push(probedemo_image);
    probedemoComponents.push(probedemo_text);
    probedemoComponents.push(probedemo_mouse);
    
    for (const thisComponent of probedemoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function probedemoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'probedemo' ---
    // get current time
    t = probedemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *probedemo_movie* updates
    if (t >= 0.0 && probedemo_movie.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probedemo_movie.tStart = t;  // (not accounting for frame time here)
      probedemo_movie.frameNStart = frameN;  // exact frame index
      
      probedemo_movie.setAutoDraw(true);
      probedemo_movie.play();
    }

    
    // *probedemo_image* updates
    if (t >= 0.0 && probedemo_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probedemo_image.tStart = t;  // (not accounting for frame time here)
      probedemo_image.frameNStart = frameN;  // exact frame index
      
      probedemo_image.setAutoDraw(true);
    }

    
    // *probedemo_text* updates
    if (t >= 0.0 && probedemo_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probedemo_text.tStart = t;  // (not accounting for frame time here)
      probedemo_text.frameNStart = frameN;  // exact frame index
      
      probedemo_text.setAutoDraw(true);
    }

    // *probedemo_mouse* updates
    if (t >= 0.0 && probedemo_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      probedemo_mouse.tStart = t;  // (not accounting for frame time here)
      probedemo_mouse.frameNStart = frameN;  // exact frame index
      
      probedemo_mouse.status = PsychoJS.Status.STARTED;
      probedemo_mouse.mouseClock.reset();
      prevButtonState = probedemo_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (probedemo_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = probedemo_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = probedemo_mouse.getPos();
          probedemo_mouse.x.push(_mouseXYs[0]);
          probedemo_mouse.y.push(_mouseXYs[1]);
          probedemo_mouse.leftButton.push(_mouseButtons[0]);
          probedemo_mouse.midButton.push(_mouseButtons[1]);
          probedemo_mouse.rightButton.push(_mouseButtons[2]);
          probedemo_mouse.time.push(probedemo_mouse.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of probedemoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function probedemoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'probedemo' ---
    for (const thisComponent of probedemoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    probedemo_movie.stop();
    // store data for psychoJS.experiment (ExperimentHandler)
    if (probedemo_mouse.x) {  psychoJS.experiment.addData('probedemo_mouse.x', probedemo_mouse.x[0])};
    if (probedemo_mouse.y) {  psychoJS.experiment.addData('probedemo_mouse.y', probedemo_mouse.y[0])};
    if (probedemo_mouse.leftButton) {  psychoJS.experiment.addData('probedemo_mouse.leftButton', probedemo_mouse.leftButton[0])};
    if (probedemo_mouse.midButton) {  psychoJS.experiment.addData('probedemo_mouse.midButton', probedemo_mouse.midButton[0])};
    if (probedemo_mouse.rightButton) {  psychoJS.experiment.addData('probedemo_mouse.rightButton', probedemo_mouse.rightButton[0])};
    if (probedemo_mouse.time) {  psychoJS.experiment.addData('probedemo_mouse.time', probedemo_mouse.time[0])};
    
    // Run 'End Routine' code from surroundprobecode
    Lprobe.setAutoDraw(false);
    Rprobe.setAutoDraw(false);
    Uprobe.setAutoDraw(false);
    Dprobe.setAutoDraw(false);
    
    // the Routine "probedemo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var responseexplainComponents;
function responseexplainRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'responseexplain' ---
    t = 0;
    responseexplainClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from responsecode
    PinkCenter = [Probex, Probey];
    Brownnoise.pos = PinkCenter;
    
    // setup some python lists for storing info about the responseexplain_mouse
    // current position of the mouse:
    responseexplain_mouse.x = [];
    responseexplain_mouse.y = [];
    responseexplain_mouse.leftButton = [];
    responseexplain_mouse.midButton = [];
    responseexplain_mouse.rightButton = [];
    responseexplain_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    responseexplainComponents = [];
    responseexplainComponents.push(response_text);
    responseexplainComponents.push(responseexplain_mouse);
    
    for (const thisComponent of responseexplainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function responseexplainRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'responseexplain' ---
    // get current time
    t = responseexplainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *response_text* updates
    if (t >= 0.0 && response_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      response_text.tStart = t;  // (not accounting for frame time here)
      response_text.frameNStart = frameN;  // exact frame index
      
      response_text.setAutoDraw(true);
    }

    // *responseexplain_mouse* updates
    if (t >= 0.0 && responseexplain_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      responseexplain_mouse.tStart = t;  // (not accounting for frame time here)
      responseexplain_mouse.frameNStart = frameN;  // exact frame index
      
      responseexplain_mouse.status = PsychoJS.Status.STARTED;
      responseexplain_mouse.mouseClock.reset();
      prevButtonState = responseexplain_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (responseexplain_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = responseexplain_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = responseexplain_mouse.getPos();
          responseexplain_mouse.x.push(_mouseXYs[0]);
          responseexplain_mouse.y.push(_mouseXYs[1]);
          responseexplain_mouse.leftButton.push(_mouseButtons[0]);
          responseexplain_mouse.midButton.push(_mouseButtons[1]);
          responseexplain_mouse.rightButton.push(_mouseButtons[2]);
          responseexplain_mouse.time.push(responseexplain_mouse.mouseClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of responseexplainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function responseexplainRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'responseexplain' ---
    for (const thisComponent of responseexplainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (responseexplain_mouse.x) {  psychoJS.experiment.addData('responseexplain_mouse.x', responseexplain_mouse.x[0])};
    if (responseexplain_mouse.y) {  psychoJS.experiment.addData('responseexplain_mouse.y', responseexplain_mouse.y[0])};
    if (responseexplain_mouse.leftButton) {  psychoJS.experiment.addData('responseexplain_mouse.leftButton', responseexplain_mouse.leftButton[0])};
    if (responseexplain_mouse.midButton) {  psychoJS.experiment.addData('responseexplain_mouse.midButton', responseexplain_mouse.midButton[0])};
    if (responseexplain_mouse.rightButton) {  psychoJS.experiment.addData('responseexplain_mouse.rightButton', responseexplain_mouse.rightButton[0])};
    if (responseexplain_mouse.time) {  psychoJS.experiment.addData('responseexplain_mouse.time', responseexplain_mouse.time[0])};
    
    // the Routine "responseexplain" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tmpdelta;
var tmpspd;
var tmpphasex;
var tmpphasey;
var CircleResp;
var Responseprobe;
var ResponseDemoComponents;
function ResponseDemoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'ResponseDemo' ---
    t = 0;
    ResponseDemoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.500000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from RespDemo_C_Mouse
    document.body.style.cursor='none';
    mouse_dX = 0;
    mouse_dY = 0;
    tmpdelta = [0, 0];
    tmpspd=0;
    mousehit = 0;
    controlCenter=[0,0]
    
    tmpphasex=0;
    tmpphasey=0;
    
    Lprobe.pos=[PinkCenter[0]-60,PinkCenter[1]];
    Rprobe.pos=[PinkCenter[0]+60,PinkCenter[1]];
    Uprobe.pos=[PinkCenter[0],PinkCenter[1]+60];
    Dprobe.pos=[PinkCenter[0],PinkCenter[1]-60];
    
    Lprobe.setAutoDraw(true);
    Rprobe.setAutoDraw(true);
    Uprobe.setAutoDraw(true);
    Dprobe.setAutoDraw(true);
    BrownMask_1.setPos([PinkCenter[0], PinkCenter[1]]);
    // setup some python lists for storing info about the RespDemo_M
    gotValidClick = false; // until a click is received
    RespDemo_M.mouseClock.reset();
    CircleResp = new visual.Polygon({"win": psychoJS.window, "name": "CircleResp", "size": [radarradius*2, radarradius*2], "edges": 100, "ori": 0.0, "pos": [0,0], "anchor": "center", "lineWidth": 1.5, "colorSpace": "rgb", "autoDraw": true, "lineColor": new util.Color([0.2,0.2,0.2]), "opacity": 1.0, "depth": (- 14.0), "interpolate": true, "fillColor": null});
    Responseprobe = new visual.Polygon({"win": psychoJS.window, "name": "Dprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [0,0], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [0.2, 0.2, 0.2], "fillColor": [0.2, 0.2, 0.2], "opacity": null, "interpolate": true, "autoDraw": true});
    
    // keep track of which components have finished
    ResponseDemoComponents = [];
    ResponseDemoComponents.push(BrownMask_1);
    ResponseDemoComponents.push(MouseSpot_1);
    ResponseDemoComponents.push(RespDemo_M);
    ResponseDemoComponents.push(RespDemo_T1);
    ResponseDemoComponents.push(RespDemo_T2);
    ResponseDemoComponents.push(Resp_feeedback);
    
    for (const thisComponent of ResponseDemoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var delta;
var MouseDist;
var speedvalue;
var rad;
var pinkdirection;
var spdcontrol;
var mousespotappear;
var resptest;
var respcolor;
var xphase;
var yphase;
var routineForceEnded;
var frameTolerance;
var endTime;
var frameTime;
var frame;
var loonset;
function ResponseDemoRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'ResponseDemo' ---
    // get current time
    t = ResponseDemoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from RespDemo_C_Mouse
    [mouse_dX, mouse_dY] = RespDemo_M.getPos();
    delta = [(mouse_dX - controlCenter[0]), (mouse_dY - controlCenter[1])];
    MouseDist = Math.sqrt((Math.pow(delta[0], 2) + Math.pow(delta[1], 2)));
    speedvalue = (Math.pow(2, ((MouseDist / radarradius) * Maxspeed)) - 1);
    console.log("delta:" + delta);
    console.log("MouseDist:" + MouseDist);
    
    if ((MouseDist <= radarradius)) {
        rad = Math.atan2(delta[1], delta[0]);
        tmpdelta = delta;
        pinkdirection = (((rad * (180 / Math.PI)) + 360) % 360);
        console.log("pinkdirection:" + pinkdirection);
        console.log("speedvalue:" + speedvalue);
    
        spdcontrol=speedvalue;
        tmpspd = speedvalue;
        mousehit = 1;
        mousespotappear = 1;
        document.body.style.cursor='none';
            resptest = (((("Your response" + `
        Direction: ${(Math.round((pinkdirection * 100)) / 100)}`
        ) + "\u00b0") + `
        Speed: ${(Math.round((speedvalue * 100)) / 100)}`
        ) + "Pixels/Frame");
        respcolor=[-1,1,-1];
    } else {
        rad = Math.atan2(tmpdelta[1], tmpdelta[0]);
        spdcontrol=tmpspd;
        mousespotappear = 0;
        document.body.style.cursor='auto';
        resptest = 'Exceeding the response boundary';
        respcolor=[1,-1,-1];
        if ((mousehit === 0)) {
            pinkdirection = null;
            speedvalue = null;
        }
    }
    mousspotx = ((Math.cos(rad) * MouseDist) + controlCenter[0]);
    mousspoty = ((Math.sin(rad) * MouseDist) + controlCenter[1]);
    xphase = (Math.cos(rad) * spdcontrol);
    yphase = (Math.sin(rad) * spdcontrol);
    
    [mouse1, mouse2, mouse3] = RespDemo_M.getPressed();
    if (mouse1) {
        routineForceEnded = true;
        continueRoutine = false;
        Responseloop.finished = true;
        Brownnoise.setAutoDraw(false);
    }
    
       
    // note: Brwonise should move every 2/60 second, so within 33.33ms do nothing, but change for next 33.33ms
    frameTolerance = 0.005;
    startTime = (0-frameTolerance);
    endTime = (1 - frameTolerance);
    frameTime = frameduration;
    
    
    if ((t >= startTime) && (t <= endTime)){
        t = ResponseDemoClock.getTime();
         frame = Math.floor(((t - startTime) / frameTime));
        if (frame<=0) {
            frame=0;
        }
        if (frame==0) {
            loonset=t;
        }
     
         tmpphasex=PinkCenter[0]+xphase * (frame+1);
         tmpphasey=PinkCenter[1]+yphase * (frame+1);
         Brownnoise.pos=[tmpphasex,tmpphasey];
         Brownnoise.draw();
         BrownMask_1.draw();
    } else {
        Brownnoise.setAutoDraw(false);
        BrownMask_1.setAutoDraw(false);
    }
    
    
    // *BrownMask_1* updates
    if (t >= 0 && BrownMask_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BrownMask_1.tStart = t;  // (not accounting for frame time here)
      BrownMask_1.frameNStart = frameN;  // exact frame index
      
      BrownMask_1.setAutoDraw(true);
    }

    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (BrownMask_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      BrownMask_1.setAutoDraw(false);
    }
    
    // *MouseSpot_1* updates
    if (t >= 0.0 && MouseSpot_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MouseSpot_1.tStart = t;  // (not accounting for frame time here)
      MouseSpot_1.frameNStart = frameN;  // exact frame index
      
      MouseSpot_1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (MouseSpot_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      MouseSpot_1.setAutoDraw(false);
    }
    
    if (MouseSpot_1.status === PsychoJS.Status.STARTED){ // only update if being drawn
      MouseSpot_1.setOpacity(mousespotappear, false);
      MouseSpot_1.setPos([mousspotx, mousspoty], false);
    }
    
    // *RespDemo_T1* updates
    if (t >= 0.0 && RespDemo_T1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RespDemo_T1.tStart = t;  // (not accounting for frame time here)
      RespDemo_T1.frameNStart = frameN;  // exact frame index
      
      RespDemo_T1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RespDemo_T1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RespDemo_T1.setAutoDraw(false);
    }
    
    // *RespDemo_T2* updates
    if (t >= 0.0 && RespDemo_T2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      RespDemo_T2.tStart = t;  // (not accounting for frame time here)
      RespDemo_T2.frameNStart = frameN;  // exact frame index
      
      RespDemo_T2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (RespDemo_T2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      RespDemo_T2.setAutoDraw(false);
    }
    // Run 'Each Frame' code from RespDemo_Circle
    CircleResp.draw()
    Responseprobe.draw()
    
    // *Resp_feeedback* updates
    if (t >= 0.0 && Resp_feeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Resp_feeedback.tStart = t;  // (not accounting for frame time here)
      Resp_feeedback.frameNStart = frameN;  // exact frame index
      
      Resp_feeedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Resp_feeedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Resp_feeedback.setAutoDraw(false);
    }
    
    if (Resp_feeedback.status === PsychoJS.Status.STARTED){ // only update if being drawn
      Resp_feeedback.setColor(new util.Color(respcolor), false);
      Resp_feeedback.setText(resptest, false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ResponseDemoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ResponseDemoRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'ResponseDemo' ---
    for (const thisComponent of ResponseDemoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from RespDemo_C_Brown
    Brownnoise.setAutoDraw(false);
    BrownMask_1.setAutoDraw(false);
    Lprobe.setAutoDraw(false);
    Rprobe.setAutoDraw(false);
    Uprobe.setAutoDraw(false);
    Dprobe.setAutoDraw(false);
    // store data for psychoJS.experiment (ExperimentHandler)
    CircleResp.setAutoDraw(false)
    Responseprobe.setAutoDraw(false)
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var moviestartComponents;
function moviestartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'moviestart' ---
    t = 0;
    moviestartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // setup some python lists for storing info about the moviestart_mouse
    // current position of the mouse:
    moviestart_mouse.x = [];
    moviestart_mouse.y = [];
    moviestart_mouse.leftButton = [];
    moviestart_mouse.midButton = [];
    moviestart_mouse.rightButton = [];
    moviestart_mouse.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    moviestartComponents = [];
    moviestartComponents.push(moviestart_text);
    moviestartComponents.push(moviestart_mouse);
    
    for (const thisComponent of moviestartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function moviestartRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'moviestart' ---
    // get current time
    t = moviestartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *moviestart_text* updates
    if (t >= 0.0 && moviestart_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moviestart_text.tStart = t;  // (not accounting for frame time here)
      moviestart_text.frameNStart = frameN;  // exact frame index
      
      moviestart_text.setAutoDraw(true);
    }

    // *moviestart_mouse* updates
    if (t >= 0.0 && moviestart_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      moviestart_mouse.tStart = t;  // (not accounting for frame time here)
      moviestart_mouse.frameNStart = frameN;  // exact frame index
      
      moviestart_mouse.status = PsychoJS.Status.STARTED;
      prevButtonState = moviestart_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (moviestart_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = moviestart_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = moviestart_mouse.getPos();
          moviestart_mouse.x.push(_mouseXYs[0]);
          moviestart_mouse.y.push(_mouseXYs[1]);
          moviestart_mouse.leftButton.push(_mouseButtons[0]);
          moviestart_mouse.midButton.push(_mouseButtons[1]);
          moviestart_mouse.rightButton.push(_mouseButtons[2]);
          moviestart_mouse.time.push(globalClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of moviestartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function moviestartRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'moviestart' ---
    for (const thisComponent of moviestartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (moviestart_mouse.x) {  psychoJS.experiment.addData('moviestart_mouse.x', moviestart_mouse.x[0])};
    if (moviestart_mouse.y) {  psychoJS.experiment.addData('moviestart_mouse.y', moviestart_mouse.y[0])};
    if (moviestart_mouse.leftButton) {  psychoJS.experiment.addData('moviestart_mouse.leftButton', moviestart_mouse.leftButton[0])};
    if (moviestart_mouse.midButton) {  psychoJS.experiment.addData('moviestart_mouse.midButton', moviestart_mouse.midButton[0])};
    if (moviestart_mouse.rightButton) {  psychoJS.experiment.addData('moviestart_mouse.rightButton', moviestart_mouse.rightButton[0])};
    if (moviestart_mouse.time) {  psychoJS.experiment.addData('moviestart_mouse.time', moviestart_mouse.time[0])};
    
    // the Routine "moviestart" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Instrtext;
var csvfile;
var practicePass;
var FBtext1;
var FBtext2;
var FBtext3;
var FBcolor;
var GTDirection;
var RespDirection;
var GTlength;
var Resplength;
var Traintrial;
var Maintrial;
var trialpass;
var nopassx;
var nopassy;
var nopassangle;
var nopassspeed;
var nopasssloc;
var moviedefineComponents;
function moviedefineRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'moviedefine' ---
    t = 0;
    moviedefineClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from switch_code
    if ((TrainExpswitch.thisN === 0)) {
        Instrtext = "Let\u2019s do a bit more practice.";
        csvfile = ("csv/" + "DemoGTlist.csv");
        practicePass = 0;
        FBtext1 = "";
        FBtext2 = "";
        FBtext3 = "";
        FBcolor = [0, 0, 0];
        GTDirection = 0;
        RespDirection = 0;
        GTlength = 0;
        Resplength = 0;
        Traintrial = 0;
        Maintrial = 0;
    } else {
        if ((TrainExpswitch.thisN === 1)) {
            Instrtext = ("Starting the first experimental block." + "\n (There will be no feedback.)");
            csvfile = maincsv1;
            Maintrial = 0;
        } else {
            if ((TrainExpswitch.thisN === 2)) {
                Instrtext = ("Starting the second experimental block." + "\n (There will be no feedback.)");
                csvfile = maincsv2;
                Maintrial = 40;
            }
        }
    }
    trialpass = 1;
    nopassx = [];
    nopassy = [];
    nopassangle = [];
    nopassspeed = [];
    nopasssloc = [];
    
    instruction_text.setText(Instrtext);
    // setup some python lists for storing info about the instruction_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    moviedefineComponents = [];
    moviedefineComponents.push(instruction_text);
    moviedefineComponents.push(instruction_mouse);
    
    for (const thisComponent of moviedefineComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function moviedefineRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'moviedefine' ---
    // get current time
    t = moviedefineClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instruction_text* updates
    if (t >= 0.0 && instruction_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_text.tStart = t;  // (not accounting for frame time here)
      instruction_text.frameNStart = frameN;  // exact frame index
      
      instruction_text.setAutoDraw(true);
    }

    // *instruction_mouse* updates
    if (t >= 0.0 && instruction_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_mouse.tStart = t;  // (not accounting for frame time here)
      instruction_mouse.frameNStart = frameN;  // exact frame index
      
      instruction_mouse.status = PsychoJS.Status.STARTED;
      instruction_mouse.mouseClock.reset();
      prevButtonState = instruction_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (instruction_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = instruction_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of moviedefineComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function moviedefineRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'moviedefine' ---
    for (const thisComponent of moviedefineComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "moviedefine" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var tmpimagelist;
var Loc;
var angle;
var Speed;
var trainrepeatno;
var Precue_probe;
var precueComponents;
function precueRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'precue' ---
    t = 0;
    precueClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from ParaDefine
    tmpdelta = [175, 0];
    tmpspd = 3;
    xphase = ((((Math.cos(pi) * 2) / Pinksize) * t) * 60);
    yphase = ((((Math.sin(pi) * 2) / Pinksize) * t) * 60);
    
    
    if ((TrainExpswitch.thisN === 0)) {
            tmpimagelist = trainlist;
    } else {
        if ((TrainExpswitch.thisN === 1)) {
            tmpimagelist = mov1list;
        } else {
            if ((TrainExpswitch.thisN === 2)) {
            tmpimagelist = mov2list;
            }
        }
    }
    console.log(thisTrial["PicX"])
    
    
    
    if (trialpass ===1) {
        Probex = (thisTrial["PicX"]-picCenterx);
        Probey = (picCentery-thisTrial["PicY"]);
        Loc=thisTrial["LocationIndex"]-1;//pos is 1-10
        angle = thisTrial["GT_angle"];
        Speed = thisTrial["GT_Speed"];
        trainrepeatno=1;
    } else {
        if (trialpass ===0) {
            Probex=nopassx;
            Probey=nopassy;
            Loc=nopasssloc;
            angle=nopassangle;
            Speed=nopassspeed;
            Loc=nopasssloc;
            trainrepeatno=trainrepeatno+1;
        }
    }
    
    
    
    
    Precue_circle.pos=[Probex,Probey];
    Precue_probe = new visual.Polygon({"win": psychoJS.window, "name": "CProbe", "size": [6, 6], "edges": 100, "ori": 0.0, "pos": [Probex,Probey], "anchor": "center", "lineWidth": 0.0, "colorSpace": "rgb", "lineColor": [-1, 1, -1], "fillColor": [-1, 1, -1], "opacity": 1.0, "depth": (- 10.0), "interpolate": true});
    
    PinkCenter=[Probex,Probey];
    Brownnoise.pos = [Probex, Probey];
    CProbe = new visual.Polygon({"win": psychoJS.window, "name": "CProbe", "size": [6, 6], "edges": 100, "ori": 0.0, "pos": [Probex,Probey], "anchor": "center", "lineWidth": 0.0, "colorSpace": "rgb", "lineColor": [-1, 1, -1], "fillColor": [-1, 1, -1], "opacity": 1.0, "depth": (- 10.0), "interpolate": true});
    
    Lprobe = new visual.Polygon({"win": psychoJS.window, "name": "Lprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [Probex-60,Probey], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [-1, 1, -1], "fillColor": [-1, 1, -1], "opacity": null, "interpolate": true, "autoDraw": true});
    Rprobe = new visual.Polygon({"win": psychoJS.window, "name": "Rprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [Probex+60,Probey], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [-1, 1, -1], "fillColor": [-1, 1, -1], "opacity": null, "interpolate": true, "autoDraw": true});
    Uprobe = new visual.Polygon({"win": psychoJS.window, "name": "Uprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [Probex,Probey+60], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [-1, 1, -1], "fillColor": [-1, 1, -1], "opacity": null, "interpolate": true, "autoDraw": true});
    Dprobe = new visual.Polygon({"win": psychoJS.window, "name": "Dprobe", "size": [10, 10], "edges": 100, "ori": 0.0, "pos": [Probex,Probey-60], "anchor": "center", "lineWidth": 0.0, "depth": (- 10.0), "colorSpace": "rgb", "lineColor": [-1, 1, -1], "fillColor": [-1, 1, -1], "opacity": null, "interpolate": true, "autoDraw": true});
    Precue_circle.setAutoDraw(true)
    Precue_probe.setAutoDraw(true)
    
    document.body.style.cursor = "none";
    
    // setup some python lists for storing info about the movie_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    precueComponents = [];
    precueComponents.push(precue_text);
    precueComponents.push(movie_mouse);
    
    for (const thisComponent of precueComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function precueRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'precue' ---
    // get current time
    t = precueClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *precue_text* updates
    if (t >= 0.0 && precue_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      precue_text.tStart = t;  // (not accounting for frame time here)
      precue_text.frameNStart = frameN;  // exact frame index
      
      precue_text.setAutoDraw(true);
    }

    // *movie_mouse* updates
    if (t >= 0.0 && movie_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      movie_mouse.tStart = t;  // (not accounting for frame time here)
      movie_mouse.frameNStart = frameN;  // exact frame index
      
      movie_mouse.status = PsychoJS.Status.STARTED;
      movie_mouse.mouseClock.reset();
      prevButtonState = movie_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (movie_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = movie_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of precueComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function precueRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'precue' ---
    for (const thisComponent of precueComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Precue_circle.setAutoDraw(false)
    Precue_probe.setAutoDraw(false)
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "precue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var movieComponents;
function movieRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'movie' ---
    t = 0;
    movieClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(3.000000);
    // update component parameters for each repeat
    // Run 'Begin Routine' code from movie_mouse_code
    PinkCenter=[Probex,Probey]
    controlCenter=[0,0]
    mouse_dX = 0;
    mouse_dY = 0;
    tmpdelta = [0, 0];
    tmpspd=0;
    mouse1 = [];
    mouse2 = [];
    mouse3 = [];
    mousehit = 0;
    mousspotx = 0;
    mousspoty = 0;
    
    frame = 0;
    loonset = 0;
    
    
    tmpphasex=0;
    tmpphasey=0;
    
    BrownMask_2.setPos(PinkCenter);
    // keep track of which components have finished
    movieComponents = [];
    movieComponents.push(BrownMask_2);
    movieComponents.push(mousespot_2);
    
    for (const thisComponent of movieComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var image;
var elapsedTime;
function movieRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'movie' ---
    // get current time
    t = movieClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // Run 'Each Frame' code from circleresponse
    t = movieClock.getTime();
    if (((t <= 0.5) || (t >= 1))) {
        CircleResp.setAutoDraw(true);
        Responseprobe.setAutoDraw(true);
    } else {
        CircleResp.setAutoDraw(false);
        Responseprobe.setAutoDraw(false);
    }
    
    // Run 'Each Frame' code from movie_mouse_code
    [mouse_dX, mouse_dY] = movie_mouse.getPos();
    delta = [(mouse_dX - controlCenter[0]), (mouse_dY - controlCenter[1])];
    MouseDist = Math.sqrt((Math.pow(delta[0], 2) + Math.pow(delta[1], 2)));
    speedvalue = (Math.pow(2, ((MouseDist / radarradius) * Maxspeed)) - 1);
    if ((MouseDist <= radarradius)) {
        rad = Math.atan2(delta[1], delta[0]);
        tmpdelta = delta;
        pinkdirection = (((rad * (180 / Math.PI)) + 360) % 360);
        spdcontrol=speedvalue;
        tmpspd = speedvalue;
        mousehit = 1;
        mousespotappear = 1;
        document.body.style.cursor='none';
    } else {
        rad = Math.atan2(tmpdelta[1], tmpdelta[0]);
        spdcontrol=tmpspd;
        mousespotappear = 0;
        document.body.style.cursor='auto';
        if ((mousehit === 0)) {
            pinkdirection = null;
            speedvalue = null;
        }
    }
    mousspotx = ((Math.cos(rad) * MouseDist) + controlCenter[0]);
    mousspoty = ((Math.sin(rad) * MouseDist) + controlCenter[1]);
    xphase = (Math.cos(rad) * spdcontrol);
    yphase = (Math.sin(rad) * spdcontrol);
    [mouse1, mouse2, mouse3] = movie_mouse.getPressed();
    //only after three presentation and click then the trial can be terminated
    if (movie_loop.thisRepN>=3 && mouse1) {
        routineForceEnded = true;
        continueRoutine = false;
        movie_loop.finished = true;
        Brownnoise.setAutoDraw(false);
        for (var idx in tmpimagelist) {
            tmpimagelist[idx].setAutoDraw(false);
            }
        CProbe.setAutoDraw(false);
        Lprobe.setAutoDraw(false);
        Rprobe.setAutoDraw(false);
        Uprobe.setAutoDraw(false);
        Dprobe.setAutoDraw(false);
    }
    
    frameTolerance = 0.005;
    startTime = (0.5-frameTolerance);
    endTime = (1.005-frameTolerance);
    frameTime = frameduration;
    
    if ((t >= startTime) && (t <= endTime) && (frame < 15)){
        t = movieClock.getTime();
        frame = Math.floor(((t - startTime) / frameTime));
        if (frame<=0) {
            frame=0;
        }
      
        if (frame==0) {
            loonset=t;
        }
    
      
          if (frame<=14) {
        
            image = tmpimagelist[frame];
            image.setAutoDraw(true);
            if (frame === 7) {
                CProbe.setAutoDraw(true);
            } else {
                CProbe.setAutoDraw(false);
            }
        // here we record the frame onset time in the third presentation!
            if ((TrainExpswitch.thisN >= 1)) {
                if (movie_loop.thisN==2){
                psychoJS.experiment.addData('Hz',psychoJS.window.getActualFrameRate())
                psychoJS.experiment.addData(("TimeDiff" + frame.toString()), t-loonset-(frameTime*frame))
                }
            }
           }
    } else {
       frame = 0
        for (var idx in tmpimagelist) {
        tmpimagelist[idx].setAutoDraw(false);
        }
       
    }
    
    
    Lprobe.draw();
    Rprobe.draw();
    Uprobe.draw();
    Dprobe.draw();
    
    
    
    frameTolerance = 0.005;
    startTime = (2.0-frameTolerance);
    endTime = (2.5 - frameTolerance);
    frameTime = frameduration;
    
    
    if ((t >= startTime) && (t <= endTime)){
        t = movieClock.getTime();
         frame = Math.floor(((t - startTime) / frameTime));
        if (frame<=0) {
            frame=0;
        }
        if (frame==0) {
            loonset=t;
        }
     
         tmpphasex=Probex + xphase * (frame+1);
         tmpphasey=Probey + yphase * (frame+1);
         Brownnoise.pos=[tmpphasex,tmpphasey];
         Brownnoise.draw();
         BrownMask_2.draw();
    } else {
        Brownnoise.setAutoDraw(false);
        BrownMask_2.setAutoDraw(false);
    }
    
    
    // *BrownMask_2* updates
    if (t >= 2 && BrownMask_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BrownMask_2.tStart = t;  // (not accounting for frame time here)
      BrownMask_2.frameNStart = frameN;  // exact frame index
      
      BrownMask_2.setAutoDraw(true);
    }

    frameRemains = 2 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (BrownMask_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      BrownMask_2.setAutoDraw(false);
    }
    
    // *mousespot_2* updates
    if (t >= 0.0 && mousespot_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mousespot_2.tStart = t;  // (not accounting for frame time here)
      mousespot_2.frameNStart = frameN;  // exact frame index
      
      mousespot_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (mousespot_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      mousespot_2.setAutoDraw(false);
    }
    
    if (mousespot_2.status === PsychoJS.Status.STARTED){ // only update if being drawn
      mousespot_2.setOpacity(mousespotappear, false);
      mousespot_2.setPos([mousspotx, mousspoty], false);
    }
    elapsedTime = (performance.now() - startTime) / 1000; // Calculate elapsed time in seconds
    
    if (elapsedTime >= timeLimit) {
        continueRoutine = false; // End the current routine
        psychoJS.quit('The experiment has ended because the time limit was reached.', false); // End the experiment and save data
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of movieComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var dat;
var tmpT;
function movieRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'movie' ---
    for (const thisComponent of movieComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from circleresponse
    CircleResp.setAutoDraw(false);
    Responseprobe.setAutoDraw(false);
    
    // Run 'End Routine' code from movie_code
    for (var idx in tmpimagelist) {
            tmpimagelist[idx].setAutoDraw(false);
        }
    
    
     
    CProbe.setAutoDraw(false);
    if ((TrainExpswitch.thisN === 1)) {
        if (movie_loop.thisN==2){
            dat = psychoJS.experiment._currentTrialData
            tmpT=dat.TimeDiff1+dat.TimeDiff2+dat.TimeDiff3+dat.TimeDiff4+dat.TimeDiff5+dat.TimeDiff6+dat.TimeDiff7+dat.TimeDiff8+dat.TimeDiff9+dat.TimeDiff10+dat.TimeDiff11+dat.TimeDiff12+dat.TimeDiff13+dat.TimeDiff14;
            console.log(tmpT/15)
        }
    }
    // Run 'End Routine' code from brown_code_2
    Brownnoise.setAutoDraw(false);
    BrownMask_2.setAutoDraw(false);
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GTFBtext;
var RespFBtext;
var GTArrow;
var RespArrow;
var Passtext;
var GTu;
var GTv;
var Respu;
var Respv;
var tmpEPE;
var directDiff;
var FBtext;
var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'feedback' ---
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from FB_code
    GTFBtext = new visual.TextStim({
        win: psychoJS.window,
        name: 'GTFBtext',
        text: '',
        font: 'Arial',
        units: undefined, 
        pos: [(-500), 100], height: 30.0,  wrapWidth: 1000.0, ori: 0.0,
        languageStyle: 'LTR',
        color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
        depth: -3.0 
    });
      
    RespFBtext = new visual.TextStim({
        win: psychoJS.window,
        name: 'RespFBtext',
        text: '',
        font: 'Arial',
        units: undefined, 
        pos: [(-500), (- 100)], height: 30.0,  wrapWidth: undefined, ori: 0.0,
        languageStyle: 'LTR',
        color: new util.Color([1.0, 0.0, 0.0]),  opacity: undefined,
        depth: -4.0 
    });
      
    GTArrow = new visual.Polygon ({
        win: psychoJS.window, name: 'GTArrow', 
        edges: 4, size:[1.0, 1.0],
        ori: 1.0, pos: controlCenter,
        lineWidth: 1.0, 
        colorSpace: 'rgb',
        lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
        fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
        opacity: undefined, depth: -5, interpolate: true,
    });
    GTArrow.setVertices([[(- 0.025), 0], [0.025, 0], [0.025, 0.45], [0.1, 0.45], [0, 0.5], [(- 0.1), 0.45], [(- 0.025), 0.45]]);
    
    RespArrow = new visual.Polygon ({
        win: psychoJS.window, name: 'RespArrow', 
        edges: 4, size:[1.0, 1.0],
        ori: 1.0, pos: controlCenter,
        lineWidth: 1.0, 
        colorSpace: 'rgb',
        lineColor: new util.Color([1.0, 0.0, 0.0]),
        fillColor: new util.Color([1.0, 0.0, 0.0]),
        opacity: 0.95, depth: -6, interpolate: true,
    });
    RespArrow.setVertices([[(- 0.025), 0], [0.025, 0], [0.025, 0.45], [0.1, 0.45], [0, 0.5], [(- 0.1), 0.45], [(- 0.025), 0.45]]);
    
      
    Passtext = new visual.TextStim({
        win: psychoJS.window,
        name: 'Passtext',
        text: FBtext3,
        font: 'Arial',
        units: undefined, 
        pos: [0, 0], height: 50.0,  wrapWidth: 1000.0, ori: 0.0,
        languageStyle: 'LTR',
        color: new util.Color(FBcolor),  opacity: undefined,
        depth: -7.0 
    }); 
    // Run 'Begin Routine' code from trainFB_code
    if ((TrainExpswitch.thisN === 0)) {
        if (((speedvalue === null) || (pinkdirection === null))) {
            FBtext1 = (((("The target motion:" + `
    Direction: ${(Math.round((angle * 100)) / 100)}`
    ) + "\u00b0") + `
    Speed: ${(Math.round((Speed * 100)) / 100)}`
    ) + "pixels/frame");
            FBtext2 = "No response";
            GTDirection = (- (angle - 90));
            RespDirection = 0;
            GTlength = (((Math.log2((Speed + 1)) / Maxspeed) * radarradius) * 2);
            Resplength = 0;
        } else {
            FBtext1 = (((("The target motion:" + `
    Direction: ${(Math.round((angle * 100)) / 100)}`
    ) + "\u00b0") + `
    Speed: ${(Math.round((Speed * 100)) / 100)}`
    ) + "pixels/frame");
            FBtext2 = (((("Your response:" + `
    Direction: ${(Math.round((pinkdirection * 100)) / 100)}`
    ) + "\u00b0") + `
    Speed: ${(Math.round((speedvalue * 100)) / 100)}`
    ) + "pixels/frame");
            GTDirection = (- (angle - 90));
            GTlength = (((Math.log2((Speed + 1)) / Maxspeed) * radarradius) * 2);
            RespDirection = (- (pinkdirection - 90));
            Resplength = (((Math.log2((speedvalue + 1)) / Maxspeed) * radarradius) * 2);
        }
        GTFBtext.setText(FBtext1);
        RespFBtext.setText(FBtext2);
        GTArrow.setSize([100, GTlength]);
        GTArrow.setOri(GTDirection);
        RespArrow.setSize([100, Resplength]);
        RespArrow.setOri(RespDirection);
        GTFBtext.setAutoDraw(true);
        RespFBtext.setAutoDraw(true);
        GTArrow.setAutoDraw(true);
        RespArrow.setAutoDraw(true);
        CircleResp.setAutoDraw(true);
    }
    
    // Run 'Begin Routine' code from ExpTrainFB_code
    Lprobe.autoDraw = false;
    Rprobe.autoDraw = false;
    Uprobe.autoDraw = false;
    Dprobe.autoDraw = false;
    document.body.style.cursor = "auto";
    Brownnoise.setAutoDraw(false);
    BrownMask_2.setAutoDraw(false);
    GTu = (Math.cos(((angle / 180) * pi)) * Speed);
    GTv = (Math.sin(((angle / 180) * pi)) * Speed);
    Respu = (Math.cos(((pinkdirection / 180) * pi)) * speedvalue);
    Respv = (Math.sin(((pinkdirection / 180) * pi)) * speedvalue);
    tmpEPE = Math.sqrt((Math.pow((GTu - Respu), 2) + Math.pow((GTv - Respv), 2)));
    directDiff = Math.abs((angle - pinkdirection));
    if ((directDiff >= 180)) {
        directDiff = Math.abs((directDiff - 360));
    }
    console.log(("angleDiff:" + directDiff));
    if ((TrainExpswitch.thisN === 0)) {
        Traintrial = (Traintrial + 1);
        psychoJS.experiment.addData("Traintrial", Traintrial);
        if (((tmpEPE <= 10) & (directDiff <= 30))) {
            practicePass = (practicePass + 1);
            trialpass = 1;
            FBcolor = [(- 1), 1, (- 1)];
            FBtext = "Please proceed to the next practice trial.";
        } else {
            trialpass = 0;
            nopassx = Probex;
            nopassy = Probey;
            nopassangle = angle;
            nopassspeed = Speed;
            nopasssloc = Loc;
            FBcolor = [1, (- 1), (- 1)];
            FBtext = "Please try again.";
        }
        if ((practicePass >= 6)) {
            trials.finished = true;
            routineForceEnded = true;
            FBtext = "Practice complete.";
            FBcolor = [(- 1), (- 1), (- 1)];
        }
        if ((Traintrial >= 30)) {
            trials.finished = true;
            routineForceEnded = true;
            FBtext = "Practice complete.";
            FBcolor = [(- 1), (- 1), (- 1)];
        }
        console.log(("train:" + practicePass));
    } else {
        if ((TrainExpswitch.thisN === 1)) {
            Maintrial = (Maintrial + 1);
            psychoJS.experiment.addData("Maintrial", Maintrial);
            EPE = (EPE + tmpEPE);
            Respcount = (Respcount + 1);
            FBtext = (`Experiment: ${(trials.thisN + 1)}` + " / 80 trials");
            if ((tmpT !== NaN)) {
                Timediff = (Timediff + (tmpT / 15));
                Prescount = (Prescount + 1);
            }
            if ((trials.thisTrialN >= 40)) {
                trials.finished = true;
                routineForceEnded = true;
            }
        } else {
            if ((TrainExpswitch.thisN === 2)) {
                Maintrial = (Maintrial + 1);
                psychoJS.experiment.addData("Maintrial", Maintrial);
                EPE = (EPE + tmpEPE);
                Respcount = (Respcount + 1);
                FBtext = (`Experiment: ${Maintrial}` + " / 80 trials");
                if ((tmpT !== NaN)) {
                    Timediff = (Timediff + (tmpT / 15));
                    Prescount = (Prescount + 1);
                }
                if ((trials.thisTrialN >= 40)) {
                    trials.finished = true;
                    routineForceEnded = true;
                }
            }
        }
    }
    psychoJS.experiment.addData("GTAngle", angle);
    psychoJS.experiment.addData("GTSpeed", Speed);
    psychoJS.experiment.addData("ResAngle", pinkdirection);
    psychoJS.experiment.addData("ResSpeed", speedvalue);
    psychoJS.experiment.addData("EPE", tmpEPE);
    psychoJS.experiment.addData("timeDiff", (tmpT / 15));
    psychoJS.experiment.addData("DirectionDiff", directDiff);
    psychoJS.experiment.addData("Realloc", Loc);
    psychoJS.experiment.addData("Repeatno", trainrepeatno);
    document.body.style.cursor = "auto";
    
    trialno_text.setColor(new util.Color(FBcolor));
    trialno_text.setText(FBtext);
    // setup some python lists for storing info about the FB_mouse
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(trialno_text);
    feedbackComponents.push(FB_mouse);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'feedback' ---
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trialno_text* updates
    if (t >= 0.0 && trialno_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialno_text.tStart = t;  // (not accounting for frame time here)
      trialno_text.frameNStart = frameN;  // exact frame index
      
      trialno_text.setAutoDraw(true);
    }

    // *FB_mouse* updates
    if (t >= 0.0 && FB_mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      FB_mouse.tStart = t;  // (not accounting for frame time here)
      FB_mouse.frameNStart = frameN;  // exact frame index
      
      FB_mouse.status = PsychoJS.Status.STARTED;
      FB_mouse.mouseClock.reset();
      prevButtonState = FB_mouse.getPressed();  // if button is down already this ISN'T a new click
      }
    if (FB_mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = FB_mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'feedback' ---
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Run 'End Routine' code from trainFB_code
    GTFBtext.setAutoDraw(false);
    RespFBtext.setAutoDraw(false);
    GTArrow.setAutoDraw(false);
    RespArrow.setAutoDraw(false);
    CircleResp.setAutoDraw(false);
    
    // store data for psychoJS.experiment (ExperimentHandler)
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var meanEPE;
var meanTimediff;
var EPEText;
var TimeText;
var endtext;
var endthankComponents;
function endthankRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'endthank' ---
    t = 0;
    endthankClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    // Run 'Begin Routine' code from end_code
    meanEPE = (EPE / Respcount);
    psychoJS.experiment.addData("MeanEPE", meanEPE);
    meanTimediff = (Timediff / Prescount);
    psychoJS.experiment.addData("MeanTimeDiff", meanTimediff);
    EPEText = (`Mean End Point Error: ${(Math.round((meanEPE * 100)) / 100)}` + " pixels/frame");
    TimeText = (`Mean Refresh Rate  Error: ${(Math.round((meanTimediff * 10000)) / 10)}` + " ms");
    elapsedTime = ((performance.now() - startTime) / 1000);
    psychoJS.experiment.addData("Expduration", elapsedTime);
    endtext = ("This concludes the experiment." + "\n\n Thank you very much.");
    
    ThanksText.setText(endtext);
    // setup some python lists for storing info about the Exp_End_M
    // current position of the mouse:
    Exp_End_M.x = [];
    Exp_End_M.y = [];
    Exp_End_M.leftButton = [];
    Exp_End_M.midButton = [];
    Exp_End_M.rightButton = [];
    Exp_End_M.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    endthankComponents = [];
    endthankComponents.push(ThanksText);
    endthankComponents.push(Exp_End_M);
    
    for (const thisComponent of endthankComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function endthankRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'endthank' ---
    // get current time
    t = endthankClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ThanksText* updates
    if (t >= 0.0 && ThanksText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ThanksText.tStart = t;  // (not accounting for frame time here)
      ThanksText.frameNStart = frameN;  // exact frame index
      
      ThanksText.setAutoDraw(true);
    }

    // *Exp_End_M* updates
    if (t >= 0.0 && Exp_End_M.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Exp_End_M.tStart = t;  // (not accounting for frame time here)
      Exp_End_M.frameNStart = frameN;  // exact frame index
      
      Exp_End_M.status = PsychoJS.Status.STARTED;
      prevButtonState = Exp_End_M.getPressed();  // if button is down already this ISN'T a new click
      }
    if (Exp_End_M.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = Exp_End_M.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = Exp_End_M.getPos();
          Exp_End_M.x.push(_mouseXYs[0]);
          Exp_End_M.y.push(_mouseXYs[1]);
          Exp_End_M.leftButton.push(_mouseButtons[0]);
          Exp_End_M.midButton.push(_mouseButtons[1]);
          Exp_End_M.rightButton.push(_mouseButtons[2]);
          Exp_End_M.time.push(globalClock.getTime());
          // abort routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endthankComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endthankRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'endthank' ---
    for (const thisComponent of endthankComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    if (Exp_End_M.x) {  psychoJS.experiment.addData('Exp_End_M.x', Exp_End_M.x[0])};
    if (Exp_End_M.y) {  psychoJS.experiment.addData('Exp_End_M.y', Exp_End_M.y[0])};
    if (Exp_End_M.leftButton) {  psychoJS.experiment.addData('Exp_End_M.leftButton', Exp_End_M.leftButton[0])};
    if (Exp_End_M.midButton) {  psychoJS.experiment.addData('Exp_End_M.midButton', Exp_End_M.midButton[0])};
    if (Exp_End_M.rightButton) {  psychoJS.experiment.addData('Exp_End_M.rightButton', Exp_End_M.rightButton[0])};
    if (Exp_End_M.time) {  psychoJS.experiment.addData('Exp_End_M.time', Exp_End_M.time[0])};
    
    // the Routine "endthank" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Run 'End Experiment' code from ExpTrainFB_code
  document.body.style.cursor = "auto";
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
