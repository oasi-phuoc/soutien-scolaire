/** FNV-1a 32-bit — répartition uniforme pour les tirages pseudo-aléatoires déterministes. */
export function hashSeedString(seed: string | number): number {
  const text = String(seed);
  let h = 2166136261;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function pickIndex(count: number, seed: string): number {
  if (count <= 0) return 0;
  return hashSeedString(seed) % count;
}

export function pickFromPool<T>(items: readonly T[], seed: string): T {
  if (!items.length) throw new Error("pickFromPool: pool vide");
  return items[pickIndex(items.length, seed)]!;
}

export function seededShuffle<T>(items: readonly T[], seed: string): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = pickIndex(i + 1, `${seed}-shuffle-${i}`);
    [arr[i], arr[j]] = [arr[j]!, arr[i]!];
  }
  return arr;
}

export const PROGRESSIVE_SKILL_LEVELS = ["base", "moyen", "moyen", "avance"] as const;
