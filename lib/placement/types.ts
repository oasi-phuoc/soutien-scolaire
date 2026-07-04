export type PlacementLevel = "base" | "moyen" | "avance";

export type FrenchBatteryKind = "placement" | "training";

export type PlacementZone = "CSC" | "CFR" | "CAF" | "CAP";

export type PlacementSkill = "ce" | "co" | "pe" | "po";

export const PLACEMENT_LEVEL_LABELS: Record<PlacementLevel, string> = {
  base: "A1 — Base",
  moyen: "A2 — Moyen",
  avance: "B1 — Avancé",
};

export const PLACEMENT_LEVEL_FACTOR: Record<PlacementLevel, number> = {
  base: 0.6,
  moyen: 0.8,
  avance: 1,
};

export type PlacementMathAttempt = {
  date: string;
  points: number;
  maxPoints: number;
  percent: number;
  scores: Array<{ exerciseId: number; label: string; points: number; maxPoints: number }>;
};

export type PlacementFrenchSession = {
  id: string;
  date: string;
  kind?: FrenchBatteryKind;
  progressive?: boolean;
  level: PlacementLevel;
  ce: number;
  co: number;
  pe: number | null;
  po: number | null;
  peSubmissionId?: string | null;
  poSubmissionId?: string | null;
  peSent: boolean;
  poSent: boolean;
  rawTotal: number;
  countedTotal: number;
  status: "in_progress" | "partial" | "complete";
};

export type PlacementProfile = {
  mathLatest: PlacementMathAttempt | null;
  frenchBest: PlacementFrenchSession | null;
  mathCounted: number;
  frenchCounted: number;
  total: number;
  pendingFrench: number;
  zone: PlacementZone;
  updatedAt: string;
};

export type PlacementTotalSnapshot = {
  date: string;
  total: number;
  mathCounted: number;
  frenchCounted: number;
  zone: PlacementZone;
};

export type PlacementSkillResult = {
  skill: PlacementSkill;
  points: number;
  maxPoints: number;
  pendingTeacher?: boolean;
  submissionId?: string;
  sent?: boolean;
};

export type PlacementFrenchDraft = {
  sessionId: string;
  kind?: FrenchBatteryKind;
  progressive?: boolean;
  level: PlacementLevel;
  seed: number;
  step: "ce" | "co" | "pe" | "po" | "recap";
  ce?: number;
  co?: number;
  peSent?: boolean;
  poSent?: boolean;
  peSubmissionId?: string;
  poSubmissionId?: string;
  updatedAt: string;
};

export type PendingPeSubmission = {
  id: string;
  sessionId: string;
  teacherId: string;
  lessonCode: string;
  level: PlacementLevel;
  text: string;
  aiFeedback: unknown[];
  prompt: {
    id: string;
    title: string;
    situation: string;
    instruction: string;
    points: string[];
    minWords: number;
    maxWords: number;
  };
  createdAt: string;
};

export type PendingPoSubmission = {
  id: string;
  sessionId: string;
  teacherId: string;
  lessonCode: string;
  level: PlacementLevel;
  prompt: {
    id: string;
    level: PlacementLevel;
    themes: Array<{ word: string; example?: string }>;
    imageDescription: string;
    dialogueContext: string;
    dialoguePrompts: string[];
  };
  dialogue: Array<{ role: "app" | "student"; text: string }>;
  aiFeedback: unknown[];
  createdAt: string;
};

export type PendingPlacementSubmission =
  | ({ kind: "pe" } & PendingPeSubmission)
  | ({ kind: "po" } & PendingPoSubmission);

export function lessonIdForPlacement(skill: PlacementSkill, level: PlacementLevel): string {
  const n = level === "base" ? "1" : level === "moyen" ? "2" : "3";
  return `${skill.toUpperCase()}-${n}`;
}

export function placementLessonCode(skill: "pe" | "po", level: PlacementLevel): string {
  const suffix = level === "base" ? "base" : level === "moyen" ? "moyen" : "avance";
  return `PLACEMENT-${skill.toUpperCase()}-${suffix}`;
}
