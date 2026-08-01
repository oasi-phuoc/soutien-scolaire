import { listeningPoolExercise, type CommunicationLesson } from "./express-types";
import { E8_1_EVAL } from "./express-e8-1-listening";

export const EXPRESS_E8_1: CommunicationLesson = {
  id: "E8-1",
  code: "E8.1",
  title: "Bilan A1",
  prerequisiteFrenchSlugs: [],
  prerequisiteCommIds: ["E7-3"],
  theory: [],
  exerciseCount: 0,
  exercises: [],
  evalExercises: E8_1_EVAL.map((a) =>
    listeningPoolExercise({
      id: a.id,
      audioSrc: a.audioSrc,
      audioLabel: a.audioLabel,
      instruction: a.instruction,
      transcript: a.transcript,
      questionPool: a.pool,
      questionCount: a.questionCount,
    }),
  ),
};
