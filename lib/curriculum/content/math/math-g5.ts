import type { MathSubmoduleLesson } from "./math-a1-types";
import { MATH_G9_LESSONS } from "./math-g9";

function asG5Lesson(lesson: MathSubmoduleLesson, index: number): MathSubmoduleLesson {
  const code = `G5.${index + 1}`;
  const id = code.replace(/\./g, "-");
  return {
    ...lesson,
    submoduleId: id,
    submoduleCode: code,
    exercises: index < 3 ? [] : lesson.exercises.map((ex) => ({ ...ex, id: ex.id.replace(/^g9/i, "g5").replace(/^g8/i, "g5") })),
    exercisePool: index < 3 ? [] : lesson.exercisePool?.map((ex) => ({ ...ex, id: ex.id.replace(/^g9/i, "g5").replace(/^g8/i, "g5") })),
  };
}

export const MATH_G5_LESSONS: MathSubmoduleLesson[] = MATH_G9_LESSONS.map(asG5Lesson);
