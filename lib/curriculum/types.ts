/** Marqueurs pédagogiques de la structure officielle. */
export type PedagogicMarker = "prerequisite" | "cross_ref" | "quiz";

/** Compétences CECRL / PER (français). */
export type CompetenceCode = "CO" | "CE" | "PO" | "PE";

export type FrenchSection = "ALPHA" | "A0" | "A1" | "A2" | "B1" | "B2";

export type FrenchTheme = {
  id: string;
  slug: string;
  code: string;
  title: string;
  section: FrenchSection;
  summary: string;
  markers: PedagogicMarker[];
  /** Seuil de passage vers la section suivante (ex. Alpha → A0). */
  milestoneExit?: boolean;
  prerequisiteSlugs?: string[];
};

export type MathBranch = "algebra" | "geometry" | "stats";

export type MathSubmodule = {
  id: string;
  code: string;
  title: string;
};

export type MathModule = {
  id: string;
  code: string;
  title: string;
  branch: MathBranch;
  submodules: MathSubmodule[];
  prerequisiteIds: string[];
  /** Références vers modules algèbre utiles (affichage tags). */
  algebraRefs?: string[];
  description?: string;
};

export type ModuleProgressState =
  | "locked"
  | "available"
  | "in_progress"
  | "completed";

export type MedalTier = "bronze" | "silver" | "gold";

export type MathModuleProgress = {
  state: ModuleProgressState;
  /** 0–1 sous-modules complétés (approximation). */
  subProgress: number;
  subTotal: number;
  /** Note sur 6 après quiz module, si terminé. */
  grade?: number;
  medal?: MedalTier;
  /** ISO date dernier quiz. */
  lastEvalAt?: string;
  evaluationAttempts?: number;
  reviewFlag?: boolean;
};

/** v1 : ancienne numérotation algèbre A1–A12. v2 : A2 add./soust., A3–A13 (anciennement A2–A12). */
export type StoredProgressV1 = {
  version: 1 | 2;
  math: Record<string, MathModuleProgress>;
  /** Dernier module maths terminé (pour règle 1). */
  lastCompletedMathModuleId?: string;
  lastActivityAt: string;
  /** Note du dernier quiz par module (maths). */
  lastQuizGrades: Record<string, number>;
  frenchLevel: FrenchSection | "PA";
  /** Heure à partir de laquelle repasser une éval après échec (<4). */
  /** ISO : masquer le bloc évaluation jusqu'à cette date. */
  evaluationSnoozeUntil?: Record<string, string>;
};
