"use client";

import type { MathSubmoduleLesson } from "@/lib/curriculum/content/math/math-a1-types";
import { MathLessonStepEditor } from "./MathLessonStepEditor";

/**
 * Éditeur maths : parcours étape par étape (infos, intro, blocs, exercices).
 */
export function MathLessonFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  void (value as MathSubmoduleLesson);
  return <MathLessonStepEditor value={value} setValue={setValue} />;
}
