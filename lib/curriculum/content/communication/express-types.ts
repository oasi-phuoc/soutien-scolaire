/**
 * Types partagés — Expression orale (modules E1 / E2 / E3).
 * Mise en forme alignée sur les autres leçons (heading / highlight / section / bullets / note / table).
 */

export type CommunicationTheoryBlock =
  | { type: "heading"; text: string; black?: boolean }
  | { type: "subheading"; text: string }
  | { type: "plain"; text: string }
  | { type: "numbered"; items: string[] }
  | { type: "section"; text?: string; items?: string[]; label?: string }
  | { type: "bullets"; items: string[]; label?: string }
  | { type: "table"; headers: string[]; rows: string[][]; accentHeader?: boolean }
  | { type: "note"; text: string }
  | { type: "highlight"; title: string; items?: string[] }
  | { type: "dialogue"; lines: Array<{ role: string; text: string; translation?: string }> }
  | { type: "vocab"; items: Array<{ fr: string; example: string }> };

/** Exercice auto-corrigé (QCM). */
export type CommunicationExercise = {
  id: string;
  instruction: string;
  type: "mcq";
  question: string;
  choices: string[];
  answer: string;
};

/**
 * Élément du pool dynamique.
 * `tier` 1 = plus facile … 5 = plus complexe (progression dans la leçon).
 */
export type ExpressPoolItem = CommunicationExercise & {
  tier: 1 | 2 | 3 | 4 | 5;
};

export type CommunicationLesson = {
  id: string;
  code: string;
  title: string;
  theory: CommunicationTheoryBlock[];
  /** Pool dynamique — les exercices affichés sont tirés et ordonnés par difficulté. */
  exercisePool?: ExpressPoolItem[];
  /** Nombre d'exercices présentés (défaut 8). */
  exerciseCount?: number;
  /**
   * @deprecated Conservé pour PE (production écrite). Les leçons E1–E3 n'utilisent plus d'exercices fixes.
   */
  exercises?: CommunicationExercise[];
  writingLevel?: "base" | "moyen" | "avance";
};

function mulberry32(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rand: () => number): T[] {
  const out = [...arr];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/**
 * Construit une série progressive : du plus facile au plus complexe.
 * Répartit les slots sur les tiers disponibles, mélange dans chaque tier.
 */
export function pickProgressiveExercises(
  pool: ExpressPoolItem[],
  count: number,
  seed: number,
): CommunicationExercise[] {
  if (pool.length === 0 || count <= 0) return [];
  const rand = mulberry32(Math.abs(seed) + 1);
  const byTier = new Map<number, ExpressPoolItem[]>();
  for (const item of pool) {
    const list = byTier.get(item.tier) ?? [];
    list.push(item);
    byTier.set(item.tier, list);
  }
  const tiers = [...byTier.keys()].sort((a, b) => a - b);
  if (tiers.length === 0) return [];

  // Plan de progression : slots croissants sur les tiers
  const plan: number[] = [];
  for (let i = 0; i < count; i++) {
    const t = tiers[Math.min(Math.floor((i / count) * tiers.length), tiers.length - 1)]!;
    plan.push(t);
  }

  const used = new Set<string>();
  const picked: CommunicationExercise[] = [];

  for (const tier of plan) {
    const candidates = shuffle(
      (byTier.get(tier) ?? []).filter((x) => !used.has(x.id)),
      rand,
    );
    let chosen = candidates[0];
    if (!chosen) {
      // Repli : n'importe quel item non utilisé, en privilégiant un tier proche
      const fallback = shuffle(
        pool.filter((x) => !used.has(x.id)),
        rand,
      ).sort((a, b) => Math.abs(a.tier - tier) - Math.abs(b.tier - tier))[0];
      chosen = fallback;
    }
    if (!chosen) break;
    used.add(chosen.id);
    const { tier: _t, ...ex } = chosen;
    picked.push({
      ...ex,
      choices: shuffle(ex.choices, rand),
    });
  }

  return picked;
}

export function mcq(
  id: string,
  tier: 1 | 2 | 3 | 4 | 5,
  question: string,
  answer: string,
  distractors: string[],
  instruction = "Choisissez la bonne réponse.",
): ExpressPoolItem {
  return {
    id,
    tier,
    instruction,
    type: "mcq",
    question,
    choices: [answer, ...distractors],
    answer,
  };
}
