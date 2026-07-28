import type { ExpressMultiQuestion } from "./express-listening-helpers";
import {
  buildExpressListeningTasks,
  scoreExpressListeningTasks,
} from "./express-listening-helpers";

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
  | {
      type: "dialogue";
      lines: Array<{ role: string; text: string; translation?: string }>;
      /** Chemin public absolu, ex. `/assets/expression/communication/A1/009.mp3` */
      audioSrc?: string;
      audioLabel?: string;
    }
  | { type: "vocab"; items: Array<{ fr: string; example: string }> }
  | {
      type: "prerequisites";
      items: Array<{ code: string; title: string; href?: string }>;
    };

/** Sous-question d'un exercice d'écoute (QCM / Vrai-Faux). */
export type ListeningItem = {
  id: string;
  prompt: string;
  choices: string[];
  answer: string;
};

/** Exercice auto-corrigé (QCM texte ou écoute). */
export type CommunicationExercise = {
  id: string;
  instruction: string;
  type: "mcq" | "listening";
  question?: string;
  choices?: string[];
  answer?: string;
  audioSrc?: string;
  audioLabel?: string;
  items?: ListeningItem[];
  /** Transcription (ampoule d'aide), style CO. */
  transcript?: string;
  /**
   * Pool de questions style CO (texte / image / saisie / vf).
   * Si présent, les questions sont tirées et formatées à l'exécution.
   */
  questionPool?: ExpressMultiQuestion[];
  questionCount?: number;
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
   * Exercices fixes (écoute, etc.). Utilisé si `exercisePool` est absent / vide.
   * Partie entraînement (une case de barre de progression par exercice).
   */
  exercises?: CommunicationExercise[];
  /**
   * Exercices d'évaluation (après la page d'annonce).
   * Si absents, les derniers exercices du pool / de `exercises` sont réaffectés.
   */
  evalExercises?: CommunicationExercise[];
  writingLevel?: "base" | "moyen" | "avance";
  /**
   * Leçons français (slugs) à valider avant d'ouvrir cette leçon d'expression.
   * Ex. `a1-conj-l00` (C1.1), `v1-nationalites` (V1.1).
   */
  prerequisiteFrenchSlugs?: string[];
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
      choices: ex.choices ? shuffle(ex.choices, rand) : undefined,
      items: ex.items?.map((item) => ({
        ...item,
        choices: shuffle(item.choices, rand),
      })),
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

export function listeningExercise(
  id: string,
  audioSrc: string,
  audioLabel: string,
  instruction: string,
  items: ListeningItem[],
): CommunicationExercise {
  return {
    id,
    type: "listening",
    instruction,
    audioSrc,
    audioLabel,
    items,
  };
}

export function listeningPoolExercise(spec: {
  id: string;
  audioSrc: string;
  audioLabel: string;
  instruction: string;
  transcript: string;
  questionPool: ExpressMultiQuestion[];
  questionCount?: number;
}): CommunicationExercise {
  return {
    id: spec.id,
    type: "listening",
    instruction: spec.instruction,
    audioSrc: spec.audioSrc,
    audioLabel: spec.audioLabel,
    transcript: spec.transcript,
    questionPool: spec.questionPool,
    questionCount: spec.questionCount ?? 4,
  };
}

type ListeningAnswerPayload = {
  seed?: string;
  answers?: Record<string, number | string | null>;
};

function parseListeningPayload(selected: string | null): ListeningAnswerPayload {
  if (!selected) return {};
  try {
    return JSON.parse(selected) as ListeningAnswerPayload;
  } catch {
    return {};
  }
}

/** Score 0–1 pour un exercice (écoute multi-items ou QCM simple). */
export function scoreCommunicationExercise(
  ex: CommunicationExercise,
  selected: string | null,
): number {
  if (ex.type === "listening" && ex.questionPool?.length) {
    const payload = parseListeningPayload(selected);
    const seed = payload.seed ?? "0";
    const tasks = buildExpressListeningTasks(
      ex.questionPool,
      ex.questionCount ?? 4,
      `${ex.id}-${seed}`,
    );
    const { correct, total } = scoreExpressListeningTasks(tasks, payload.answers ?? {});
    return total > 0 ? correct / total : 0;
  }
  if (ex.type === "listening" && ex.items?.length) {
    let parsed: Record<string, string> = {};
    try {
      parsed = selected ? (JSON.parse(selected) as Record<string, string>) : {};
    } catch {
      parsed = {};
    }
    const ok = ex.items.filter((item) => (parsed[item.id] ?? "") === item.answer).length;
    return ok / ex.items.length;
  }
  if (!ex.answer) return 0;
  return selected === ex.answer ? 1 : 0;
}

export function isCommunicationExerciseComplete(
  ex: CommunicationExercise,
  selected: string | null,
): boolean {
  // Style CO / grammaire : on peut valider sans avoir tout répondu.
  if (ex.type === "listening") return true;
  return Boolean(selected);
}
