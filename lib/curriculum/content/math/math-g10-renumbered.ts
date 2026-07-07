import type { MathSubmoduleLesson } from "./math-a1-types";
import { MATH_G10_LESSONS } from "./math-g10";

function asG10Lesson(lesson: MathSubmoduleLesson, index: number): MathSubmoduleLesson {
  const code = `G10.${index + 1}`;
  const id = code.replace(/\./g, "-");
  return {
    ...lesson,
    submoduleId: id,
    submoduleCode: code,
    exercises: lesson.exercises.map((ex) => ({ ...ex, id: ex.id.replace(/^g10/i, "g10") })),
    exercisePool: lesson.exercisePool?.map((ex) => ({ ...ex, id: ex.id.replace(/^g10/i, "g10") })),
  };
}

export const MATH_G10_RENUMBERED_LESSONS: MathSubmoduleLesson[] = MATH_G10_LESSONS.map(asG10Lesson);
