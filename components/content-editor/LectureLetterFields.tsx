"use client";

import { LectureLetterStepEditor } from "./LectureLetterStepEditor";

/**
 * Éditeur lecture : parcours étape par étape (1, 4, 5, 8, 9, 10, 12 + L6/L8).
 */
export function LectureLetterFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  return <LectureLetterStepEditor value={value} setValue={setValue} />;
}
