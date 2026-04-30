import type { PivotCode } from "@/lib/pivot-langs";

export type LocaleKey = "fr" | PivotCode;

export type LegendTone = "red" | "gray" | "black";

/** Section « lire / compter » (table + légende couleurs + audio). */
export type TheoryReadAloud = {
  headingFr: string;
  introFr?: string[];
  /** Même idée que introFr, affichée sous « Traduire » (une langue pivot à la fois). */
  introPivot?: Partial<Record<PivotCode, string[]>>;
  rows: {
    col1: { num: string; word: string };
    col2: { num: string; word: string };
    col3: { num: string; word: string };
  }[];
  /** Colonne 1 = rouge, 2 = gris, 3 = noir (cf. matériel CSC). */
  columnTones: [LegendTone, LegendTone, LegendTone];
  legendFr: { tone: LegendTone; labelFr: string }[];
};

export type MathTheoryBlock = {
  /** Titre principal toujours affiché en français (langue d’étude). */
  title: Record<LocaleKey, string>;
  /** Paragraphes : français + traductions pivot (sous « Traduire » uniquement). */
  paragraphs: Record<LocaleKey, string[]>;
  readAloud?: TheoryReadAloud;
  /** Référence matériels CSC / fichiers source (affichage informatif). */
  cscRefs?: string[];
  /** Chemin public optionnel si vous copiez la vidéo dans /public. */
  mediaHint?: { fr: string; publicPath?: string };
};

export type MathExerciseItem = {
  id: string;
  /** Énoncé en français (langue d’apprentissage maths). */
  promptFr: string;
  /** Énoncé traduit selon la langue pivot (si absent → promptFr). */
  promptPivot?: Partial<Record<PivotCode, string>>;
  type: "short_text" | "number";
  /** Réponses acceptées après normalisation (voir normalizeMathAnswer). */
  acceptable: string[];
};

export type MathSubmoduleLesson = {
  submoduleId: string;
  submoduleCode: string;
  theory: MathTheoryBlock;
  exercises: MathExerciseItem[];
};

export function normalizeMathAnswer(raw: string): string {
  let s = raw.trim().toLowerCase();
  try {
    s = s.normalize("NFD").replace(/\u0300-\u036f/g, "");
  } catch {
    /* ignore */
  }
  return s.replace(/\s+/g, "").replace(/,/g, ".");
}

export function answerMatches(user: string, acceptable: string[]): boolean {
  const n = normalizeMathAnswer(user);
  if (!n) return false;
  return acceptable.some((a) => normalizeMathAnswer(a) === n);
}

export function pickTheoryForPivot(
  pivot: PivotCode,
  block: MathTheoryBlock,
): { title: string; paragraphs: string[] } {
  const title = block.title[pivot] ?? block.title.fr;
  const paragraphs = block.paragraphs[pivot] ?? block.paragraphs.fr;
  return { title, paragraphs };
}

/** Titre et texte français (affichage principal). */
export function pickTheoryFrench(block: MathTheoryBlock): { title: string; paragraphs: string[] } {
  return { title: block.title.fr, paragraphs: block.paragraphs.fr };
}

/** Traduction pivot pour zone sous le français (si présente). */
export function pickTheoryPivotTranslation(
  pivot: PivotCode,
  block: MathTheoryBlock,
): string[] | null {
  const t = block.paragraphs[pivot];
  if (!t) return null;
  const fr = block.paragraphs.fr;
  if (t.length === fr.length && t.every((line, i) => line === fr[i])) return null;
  return t;
}
