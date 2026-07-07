import type { MathSubmoduleLesson } from "./math-a1-types";
import { MATH_G6_LESSONS } from "./math-g6";

function asG7Lesson(lesson: MathSubmoduleLesson, index: number): MathSubmoduleLesson {
  const code = `G7.${index + 1}`;
  const id = code.replace(/\./g, "-");
  return {
    ...lesson,
    submoduleId: id,
    submoduleCode: code,
    exercises: lesson.exercises.map((ex) => ({ ...ex, id: ex.id.replace(/^g6/i, "g7") })),
    exercisePool: lesson.exercisePool?.map((ex) => ({ ...ex, id: ex.id.replace(/^g6/i, "g7") })),
  };
}

export const MATH_G7_RENUMBERED_LESSONS: MathSubmoduleLesson[] = MATH_G6_LESSONS.map(asG7Lesson);
