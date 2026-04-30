/**
 * Types de questions et modes de chronomètre — réf. structure partie 3.
 */

export type QuestionType =
  | "qcm"
  | "true_false"
  | "gap_fill"
  | "reorder"
  | "match"
  | "numeric"
  | "construction"
  | "oral"
  | "dictation"
  | "short_writing";

export type QuizTimerMode = "training" | "standard" | "flash" | "exam";

export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  qcm: "QCM",
  true_false: "Vrai / faux",
  gap_fill: "Lacunes",
  reorder: "Remise en ordre",
  match: "Association",
  numeric: "Calcul libre",
  construction: "Construction géométrique",
  oral: "Oral (micro)",
  dictation: "Dictée",
  short_writing: "Rédaction courte",
};
