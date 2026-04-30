import {
  MODULES,
  getModuleBySlug,
  type ModuleItem,
  type Track,
} from "./modules";

export type QuizChoice = { id: string; text: string };

export type QuizItem = {
  id: string;
  question: string;
  choices: QuizChoice[];
  /** id must exist in choices */
  correctId: string;
};

function hashSlug(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i);
  return Math.abs(h);
}

/** Mélange déterministe pour que l’ordre des réponses ne change pas à chaque render client. */
function shuffleDeterministic(seed: string, choices: QuizChoice[]): QuizChoice[] {
  const arr = [...choices];
  let h = hashSlug(seed);
  for (let i = arr.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) | 0;
    const j = Math.abs(h) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickDistractorTitles(mod: ModuleItem): [string, string] {
  const pool = MODULES.filter((m) => m.slug !== mod.slug).map((m) => m.titleFr);
  const h = hashSlug(mod.slug + "dist");
  const a = pool[h % pool.length] ?? "Un autre thème";
  const b = pool[(h + 11) % pool.length] ?? "Un exercice différent";
  return a === b ? [a, pool[(h + 3) % pool.length] ?? "Rien à voir"] : [a, b];
}

function trackGuessQuestion(track: Track, slugSeed: string): QuizItem {
  const rows: Record<Track, Omit<QuizItem, "choices"> & { correct: string; wrong: [string, string] }> = {
    literacy: {
      id: "guess-lit",
      question: "Dans les modules « lire et écrire », on travaille surtout :",
      correct: "Les lettres, les sons et la lecture",
      wrong: ["Le sport à l’école", "La géographie du Valais"],
    },
    fle: {
      id: "guess-fle",
      question: "Dans les thèmes de français, on apprend surtout :",
      correct: "Des mots utiles pour la vie quotidienne",
      wrong: ["Des formules de physique", "L’histoire ancienne"],
    },
    math_elem: {
      id: "guess-math",
      question: "Dans ces modules maths débutantes, on utilise souvent :",
      correct: "Des nombres, des dessins et des situations simples",
      wrong: ["Seulement de longs textes", "Uniquement de la musique"],
    },
  };
  const r = rows[track];
  return {
    id: `${slugSeed}-${r.id}`,
    question: r.question,
    choices: shuffleDeterministic(slugSeed + r.id + "x", [
      { id: "ok", text: r.correct },
      { id: "w1", text: r.wrong[0] },
      { id: "w2", text: r.wrong[1] },
    ]),
    correctId: "ok",
  };
}

/**
 * Quiz court (3 QCM). Contenu lisible niveau début ; réponses tirées du module pour rester pertinent.
 */
export function getQuizForModule(slug: string): {
  passingPercent: number;
  items: QuizItem[];
} | null {
  const mod = getModuleBySlug(slug);
  if (!mod) return null;

  const [d1, d2] = pickDistractorTitles(mod);
  const off1 = Math.max(8, mod.estimatedMinutes + 12);
  const off2 = Math.max(10, mod.estimatedMinutes + 27);

  const q1: QuizItem = {
    id: `${slug}-titre`,
    question: "Quel titre correspond à ce module ?",
    choices: shuffleDeterministic(slug + "q1", [
      { id: "ok", text: mod.titleFr },
      { id: "w1", text: d1 },
      { id: "w2", text: d2 },
    ]),
    correctId: "ok",
  };

  const q2: QuizItem = {
    id: `${slug}-duree`,
    question: "Combien de minutes environ prévoir pour ce module ?",
    choices: shuffleDeterministic(slug + "q2", [
      { id: "ok", text: `Environ ${mod.estimatedMinutes} minutes` },
      { id: "w1", text: `Environ ${off1} minutes` },
      { id: "w2", text: `Environ ${off2} minutes` },
    ]),
    correctId: "ok",
  };

  const q3 = trackGuessQuestion(mod.track, slug);

  return {
    passingPercent: 67,
    items: [q1, q2, q3],
  };
}
