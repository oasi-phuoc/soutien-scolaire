import { seededShuffle } from "@/lib/placement/progressive-pick";

/** Mélange Fisher–Yates avec Math.random (ordre des choix QCM). */
export function randomShuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

/** Permutation aléatoire des indices 0..n-1. */
export function randomIndexOrder(n: number): number[] {
  return randomShuffle(Array.from({ length: n }, (_, i) => i));
}

/**
 * Mélange les choix QCM (Math.random) et recalcule l’index de la bonne réponse.
 * À n’utiliser que côté client après montage (évite les écarts SSR).
 */
export function shuffleQcmChoices<T extends { label: string; image?: string }>(
  choices: readonly T[],
  correct: number,
): { choices: T[]; correct: number } {
  const indexed = choices.map((c, i) => ({ c, i }));
  const shuffled = randomShuffle(indexed);
  return {
    choices: shuffled.map((x) => x.c),
    correct: shuffled.findIndex((x) => x.i === correct),
  };
}

/**
 * Variante déterministe (seed) — safe SSR / impression.
 * La bonne réponse peut quand même être en a, b ou c selon la seed.
 */
export function shuffleQcmChoicesSeeded<T extends { label: string; image?: string }>(
  choices: readonly T[],
  correct: number,
  seed: string,
): { choices: T[]; correct: number } {
  const indexed = choices.map((c, i) => ({ c, i }));
  const shuffled = seededShuffle(indexed, seed);
  return {
    choices: shuffled.map((x) => x.c),
    correct: shuffled.findIndex((x) => x.i === correct),
  };
}
