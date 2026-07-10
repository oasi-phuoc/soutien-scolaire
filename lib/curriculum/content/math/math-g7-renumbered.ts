import type { MathSubmoduleLesson } from "./math-a1-types";
import { MATH_G6_LESSONS } from "./math-g6";
import { MATH_G7_REPRODUCE_LESSON } from "./math-g7-reproduce-1";
import { MATH_G7_2_LESSON } from "./math-g7-2";

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

/** G7.1 = reproduction ; G7.2 = axes de symétrie ; G7.3+ = anciennes leçons G6.2+. */
export const MATH_G7_RENUMBERED_LESSONS: MathSubmoduleLesson[] = [
  MATH_G7_REPRODUCE_LESSON,
  MATH_G7_2_LESSON,
  ...MATH_G6_LESSONS.slice(1).map((lesson, i) => asG7Lesson(lesson, i + 2)),
];
