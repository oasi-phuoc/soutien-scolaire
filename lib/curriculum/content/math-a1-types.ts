import type { PivotCode } from "@/lib/pivot-langs";

export type LocaleKey = "fr" | PivotCode;

export type MathTheoryBlock = {
  /** Titre affiché au-dessus de la théorie. */
  title: Record<LocaleKey, string>;
  /** Paragraphes (HTML évité ; retours à la ligne via \n ou plusieurs strings). */
  paragraphs: Record<LocaleKey, string[]>;
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
