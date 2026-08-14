/**
 * RNG déterministe pour l'impression :
 * même seed ⇒ même série (feuille élève + corrigé).
 * Patche aussi Math.random pendant la seed active, pour les
 * exercices de leçons qui n'utilisent pas encore placementRandom().
 */
let activeSeed: number | null = null;
let activeIndex = 0;

const realRandom = Math.random.bind(Math);

function nextUnit(): number {
  if (activeSeed == null) return realRandom();
  // xorshift-ish hash : stable pour (seed, index)
  let h = (activeSeed ^ Math.imul(activeIndex + 1, 0x9e3779b9)) >>> 0;
  activeIndex += 1;
  h = Math.imul(h ^ (h >>> 16), 0x7feb352d);
  h = Math.imul(h ^ (h >>> 15), 0x846ca68b);
  h = (h ^ (h >>> 16)) >>> 0;
  return h / 0x100000000;
}

export function beginPlacementPrintSeed(seed: number) {
  activeSeed = seed >>> 0;
  activeIndex = 0;
  Math.random = nextUnit;
}

export function endPlacementPrintSeed() {
  activeSeed = null;
  activeIndex = 0;
  Math.random = realRandom;
}

/** Seed déterministe par exercice (refresh = incrémenter le nonce de cet id). */
export function printExerciseSeed(baseSeed: number, exerciseId: string, nonce = 0): number {
  let h = baseSeed >>> 0;
  for (let i = 0; i < exerciseId.length; i++) {
    h = Math.imul(h ^ exerciseId.charCodeAt(i), 0x9e3779b9) >>> 0;
  }
  return (h ^ Math.imul(nonce + 1, 0x85ebca6b)) >>> 0;
}

type PrintBundleSeedCtx = { base: number; nonces: Record<string, number> };
let bundleSeedCtx: PrintBundleSeedCtx | null = null;

export function runWithPrintBundleSeed<T>(
  base: number,
  nonces: Record<string, number>,
  fn: () => T,
): T {
  const prev = bundleSeedCtx;
  bundleSeedCtx = { base: base >>> 0, nonces };
  try {
    return fn();
  } finally {
    bundleSeedCtx = prev;
  }
}

export function currentPrintExerciseSeed(exerciseId: string, fallbackBase?: number): number {
  const base = bundleSeedCtx?.base ?? fallbackBase ?? 1;
  const nonce = bundleSeedCtx?.nonces[exerciseId] ?? 0;
  return printExerciseSeed(base, exerciseId, nonce);
}

export function printExerciseNoncesKey(nonces: Record<string, number>): string {
  return Object.keys(nonces)
    .sort()
    .filter((id) => (nonces[id] ?? 0) > 0)
    .map((id) => `${id}:${nonces[id]}`)
    .join(",");
}

export function currentPrintBundleBaseSeed(): number {
  return bundleSeedCtx?.base ?? 1;
}

export function withPrintSeed<T>(seed: number, fn: () => T): T {
  beginPlacementPrintSeed(seed);
  try {
    return fn();
  } finally {
    endPlacementPrintSeed();
  }
}

export function placementRandom(): number {
  return nextUnit();
}

export function placementRandInt(min: number, max: number): number {
  return Math.floor(nextUnit() * (max - min + 1)) + min;
}

export function placementShuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(nextUnit() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}
