import {
  PLACEMENT_MATH_EXERCISES,
  type PlacementMathExerciseMeta,
} from "./math-exercises";

import type { MathTrainingLevel } from "./types";

export type { MathTrainingLevel };

export const MATH_TRAINING_LEVEL_TOGGLE: { id: MathTrainingLevel; label: string }[] = [
  { id: "I", label: "I" },
  { id: "II", label: "II" },
  { id: "III", label: "III" },
  { id: "IV", label: "IV" },
];

export const MATH_TRAINING_RANGES: Record<MathTrainingLevel, { min: number; max: number }> = {
  I: { min: 1, max: 7 },
  II: { min: 8, max: 15 },
  III: { min: 16, max: 27 },
  IV: { min: 28, max: 38 },
};

export const MATH_TRAINING_LEVEL_LABELS: Record<MathTrainingLevel, string> = {
  I: "Niveau I — Exercices 1 à 7",
  II: "Niveau II — Exercices 8 à 15",
  III: "Niveau III — Exercices 16 à 27",
  IV: "Niveau IV — Exercices 28 à 38",
};

export function levelFromMathParam(value: string | null): MathTrainingLevel | null {
  if (value === "I" || value === "II" || value === "III" || value === "IV") return value;
  return null;
}

export function getMathExercisesForLevel(level: MathTrainingLevel): PlacementMathExerciseMeta[] {
  const { min, max } = MATH_TRAINING_RANGES[level];
  return PLACEMENT_MATH_EXERCISES.filter((e) => e.id >= min && e.id <= max);
}
