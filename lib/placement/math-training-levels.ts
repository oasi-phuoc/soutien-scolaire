import {
  PLACEMENT_MATH_EXERCISES,
  type PlacementMathExerciseMeta,
} from "./math-exercises";

import type { MathTrainingLevel } from "./types";

export type { MathTrainingLevel };

/** Anciens identifiants romains → codes de classe. */
const LEGACY_MATH_LEVEL: Record<string, MathTrainingLevel> = {
  I: "CSC",
  II: "CFR",
  III: "CAF",
  IV: "CAP",
};

export const MATH_TRAINING_LEVEL_TOGGLE: { id: MathTrainingLevel; label: string }[] = [
  { id: "CSC", label: "CSC" },
  { id: "CFR", label: "CFR" },
  { id: "CAF", label: "CAF" },
  { id: "CAP", label: "CAP" },
];

export const MATH_TRAINING_RANGES: Record<MathTrainingLevel, { min: number; max: number }> = {
  CSC: { min: 1, max: 7 },
  CFR: { min: 8, max: 15 },
  CAF: { min: 16, max: 27 },
  CAP: { min: 28, max: 38 },
};

/** Libellé court pour en-têtes / boutons. */
export const MATH_TRAINING_LEVEL_LABELS: Record<MathTrainingLevel, string> = {
  CSC: "CSC — Additions et soustractions",
  CFR: "CFR — Multiplications, divisions, périmètre et aire du rectangle",
  CAF: "CAF — Décimaux, fractions, périmètre et aire",
  CAP: "CAP — Puissances, racines, relatifs, fractions, équations, périmètre et aire",
};

/** Contenu pédagogique affiché sur la page d’annonce. */
export const MATH_TRAINING_LEVEL_TOPICS: Record<MathTrainingLevel, string[]> = {
  CSC: ["Additions et soustractions"],
  CFR: ["Multiplications et divisions", "Périmètre et aire du rectangle"],
  CAF: ["Opérations avec nombres décimaux", "Fractions", "Périmètre et aire"],
  CAP: [
    "Puissances et racines",
    "Nombres relatifs",
    "Fractions et équations",
    "Périmètre et aire",
  ],
};

/** Durée d’entraînement par niveau (secondes). */
export const MATH_TRAINING_TIMER_SECONDS: Record<MathTrainingLevel, number> = {
  CSC: 10 * 60,
  CFR: 15 * 60,
  CAF: 25 * 60,
  CAP: 40 * 60,
};

/** Durée du test de placement maths complet. */
export const MATH_PLACEMENT_TIMER_SECONDS = 90 * 60;

export function levelFromMathParam(value: string | null): MathTrainingLevel | null {
  if (!value) return null;
  if (value === "CSC" || value === "CFR" || value === "CAF" || value === "CAP") return value;
  return LEGACY_MATH_LEVEL[value] ?? null;
}

export function getMathExercisesForLevel(level: MathTrainingLevel): PlacementMathExerciseMeta[] {
  const { min, max } = MATH_TRAINING_RANGES[level];
  return PLACEMENT_MATH_EXERCISES.filter((e) => e.id >= min && e.id <= max);
}

export function mathTrainingMinutes(level: MathTrainingLevel): number {
  return MATH_TRAINING_TIMER_SECONDS[level] / 60;
}
