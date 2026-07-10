import type { MathSubmoduleLesson } from "./math-a1-types";
import { MATH_G6_LESSONS } from "./math-g6";
import { MATH_G7_REPRODUCE_LESSON } from "./math-g7-reproduce-1";

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

/** G7.1 = reproduction de figures ; G7.2–G7.8 = anciennes leçons G7.1–G7.7 (transformations). */
export const MATH_G7_RENUMBERED_LESSONS: MathSubmoduleLesson[] = [
  MATH_G7_REPRODUCE_LESSON,
  ...MATH_G6_LESSONS.map((lesson, i) => asG7Lesson(lesson, i + 1)),
];
