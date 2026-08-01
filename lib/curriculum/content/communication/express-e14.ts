import {
  A2,
  dialogueBlock,
  lessonFromListening,
  phraseBankToDialogue,
  prereqItems,
  t,
} from "./express-lesson-factory";
import { E14_1_TRAINING, E14_1_EVAL } from "./express-e14-listening";
import type { CommunicationLesson } from "./express-types";

export const EXPRESS_E14_1: CommunicationLesson = lessonFromListening({
  id: "E14-1",
  code: "E14.1",
  title: "Bilan A2",
  prerequisiteCommIds: ["E13-5"],
  theory: [],
  training: E14_1_TRAINING,
  evalAudios: E14_1_EVAL,
});

export const EXPRESS_E14_LESSONS: CommunicationLesson[] = [
  EXPRESS_E14_1,
];
