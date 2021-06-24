import preamble from "./preamble";
import movingDot from '../trials/movingDot'
import eyesTask from  '../trials/eyesTask'
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
  instructions(lang.instructions.yawn),
  eyesTask('yawn'),
  instructions(lang.instructions.yawn),
  eyesTask('yawn'),
  
];
for (let i = 0; i < lang.instructions.events.length; i++) {
  primaryTimeline.push(instructions(lang.instructions.events[i]));
  primaryTimeline.push(eyesTask('events',i))
}
primaryTimeline.push(showMessage(config, {
  duration: 5000,
  message: lang.task.end,
}))
if (config.USE_CAMERA) {
  primaryTimeline.splice(1,0,cameraStart())
  primaryTimeline.push(cameraEnd(5000))
}

const mturkTimeline = [
  preamble,
];

export const tl = config.USE_MTURK ? mturkTimeline : primaryTimeline;
