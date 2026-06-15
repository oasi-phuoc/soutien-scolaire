import type { MathSubmoduleLesson } from "./math-a1-types";
import { MATH_G10_LESSONS } from "./math-g10";

function asG9Lesson(lesson: MathSubmoduleLesson, index: number): MathSubmoduleLesson {
  const code = `G9.${index + 1}`;
  const id = code.replace(/\./g, "-");
  return {
    ...lesson,
    submoduleId: id,
    submoduleCode: code,
    exercises: lesson.exercises.map((ex) => ({ ...ex, id: ex.id.replace(/^g10/i, "g9") })),
    exercisePool: lesson.exercisePool?.map((ex) => ({ ...ex, id: ex.id.replace(/^g10/i, "g9") })),
  };
}

export const MATH_G9_RENUMBERED_LESSONS: MathSubmoduleLesson[] = MATH_G10_LESSONS.map(asG9Lesson);
