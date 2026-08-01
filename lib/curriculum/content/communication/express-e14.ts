import { lessonFromListening } from "./express-lesson-factory";
import { E14_1_TRAINING, E14_1_EVAL } from "./express-e14-listening";
import { E14_1_CE, E14_1_PO, E14_1_PE } from "./express-e14-cpe";
import type { CommunicationLesson } from "./express-types";

export const EXPRESS_E14_1: CommunicationLesson = lessonFromListening({
  id: "E14-1",
  code: "E14.1",
  title: "Bilan A2",
  prerequisiteCommIds: ["E13-5"],
  theory: [],
  training: E14_1_TRAINING,
  evalAudios: E14_1_EVAL,
  ceExercise: E14_1_CE,
  poDialogues: E14_1_PO,
  pePrompts: E14_1_PE,
});

export const EXPRESS_E14_LESSONS: CommunicationLesson[] = [
  EXPRESS_E14_1,
];
