"use client";

import { VocabThemeStepEditor } from "./VocabThemeStepEditor";

/**
 * Éditeur vocabulaire : parcours étape par étape (1, 6, 7, 10).
 */
export function VocabThemeFields({
  value,
  setValue,
}: {
  value: unknown;
  setValue: (next: unknown, history?: "debounce" | "immediate") => void;
}) {
  return <VocabThemeStepEditor value={value} setValue={setValue} />;
}
