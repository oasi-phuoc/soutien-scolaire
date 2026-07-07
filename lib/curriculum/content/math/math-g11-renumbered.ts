import type { MathSubmoduleLesson } from "./math-a1-types";
import { MATH_G11_LESSONS } from "./math-g11";

function asG11Lesson(lesson: MathSubmoduleLesson, index: number): MathSubmoduleLesson {
  const code = `G11.${index + 1}`;
  const id = code.replace(/\./g, "-");
  return {
    ...lesson,
    submoduleId: id,
    submoduleCode: code,
    exercises: lesson.exercises.map((ex) => ({ ...ex, id: ex.id.replace(/^g11/i, "g11") })),
    exercisePool: lesson.exercisePool?.map((ex) => ({ ...ex, id: ex.id.replace(/^g11/i, "g11") })),
  };
}

export const MATH_G11_RENUMBERED_LESSONS: MathSubmoduleLesson[] = MATH_G11_LESSONS.map(asG11Lesson);
