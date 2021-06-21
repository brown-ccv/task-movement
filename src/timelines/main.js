import preamble from "./preamble";
import movingDot from '../trials/movingDot'
import eyesTask from  '../trials/eyesTask'
import fixation from '../trials/fixation'
import { instructions, initialInstructions } from '../trials/instructions'
import { cameraStart, cameraEnd } from "../trials/camera"
import { lang, config } from "../config/main";
import { showMessage } from "@brown-ccv/behavioral-task-trials";



let primaryTimeline = [
  preamble,
  initialInstructions(),
  movingDot('left'),
  movingDot('right'),
  movingDot('up'),
  movingDot('down'),
  instructions(lang.instructions.blink),
  eyesTask('blink'),
  instructions(lang.instructions.close_eyes),
  eyesTask('close'),
  instructions(lang.instructions.fixate),
  fixation(91000),
  showMessage(config, {
    duration: 5000,
    message: lang.task.end,
  })
];

if (config.USE_CAMERA) {
  primaryTimeline.splice(1,0,cameraStart())
  primaryTimeline.push(cameraEnd(10000))
}

const mturkTimeline = [
  preamble,
];

export const tl = config.USE_MTURK ? mturkTimeline : primaryTimeline;
