import type { WritingLevel, WritingPrompt } from "./writing-prompts";

export type PeExerciseKind = "form" | "experience" | "reply" | "short" | "long" | "sentences";

export type SubmissionExercise = {
  id: string;
  kind: PeExerciseKind;
  title: string;
  maxPoints: number;
  /** Consigne / énoncé affiché au professeur */
  consigne: string;
  /** Texte ou production de l'élève */
  text: string;
  /** Prompt complet (PE) pour sourceMessage, points, etc. */
  prompt?: WritingPrompt;
  /** Métadonnées optionnelles (PO, formulaire…) */
  meta?: Record<string, unknown>;
};

export type SubmissionBundle = {
  level: WritingLevel;
  lessonCode: string;
  exercises: SubmissionExercise[];
};

export type RubricCriterion = {
  id: string;
  label: string;
  description: string;
  options: number[];
};

export type ExerciseRubric = {
  exerciseKind: PeExerciseKind;
  criteria: RubricCriterion[];
};

export type ExerciseGrading = {
  exerciseId: string;
  criteria: Array<{ id: string; points: number }>;
  total: number;
};

export type BlockAnnotation = {
  label: string;
  comment: string;
  quotedText?: string;
};

export type ExerciseBlockReview = {
  exerciseId: string;
  correctedText: string;
  annotations: BlockAnnotation[];
  points: number;
};

export type TeacherGrading = {
  exercises: ExerciseGrading[];
  blockReviews?: ExerciseBlockReview[];
  totalPoints: number;
};
