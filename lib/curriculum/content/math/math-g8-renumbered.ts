import type { MathSubmoduleLesson } from "./math-a1-types";
import { MATH_G7_LESSONS } from "./math-g7";

function asG8Lesson(lesson: MathSubmoduleLesson, index: number): MathSubmoduleLesson {
  const code = `G8.${index + 1}`;
  const id = code.replace(/\./g, "-");
  return {
    ...lesson,
    submoduleId: id,
    submoduleCode: code,
    exercises: lesson.exercises.map((ex) => ({ ...ex, id: ex.id.replace(/^g7/i, "g8") })),
    exercisePool: lesson.exercisePool?.map((ex) => ({ ...ex, id: ex.id.replace(/^g7/i, "g8") })),
  };
}

export const MATH_G8_RENUMBERED_LESSONS: MathSubmoduleLesson[] = MATH_G7_LESSONS.map(asG8Lesson);
