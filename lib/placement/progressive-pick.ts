export function pickIndex(count: number, seed: string): number {
  if (count <= 0) return 0;
  let n = 0;
  for (const c of seed) n += c.charCodeAt(0);
  return n % count;
}

export const PROGRESSIVE_SKILL_LEVELS = ["base", "moyen", "moyen", "avance"] as const;
