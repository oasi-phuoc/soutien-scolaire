import type { CommunicationLesson } from "./content/communication/communication-p1-1";

export type { CommunicationLesson };

export type CommunicationSubmodule = {
  id: string; // "E1-1"
  code: string; // "E1.1"
  title: string;
  available: boolean;
  lessonId?: string; // "communication-p1-1" — used to load the lesson
};

export type CommunicationModule = {
  id: string; // "E1"
  level: string; // "E1"
  title: string;
  description: string;
  submodules: CommunicationSubmodule[];
};

export const COMM_MODULES: CommunicationModule[] = [
  {
    id: "E1",
    level: "E1",
    title: "Expression orale - Base",
    description: "D\u00e9butant - interactions simples du quotidien",
    submodules: [
      { id: "E1-0", code: "E1.0", title: "Conversation IA", available: false },
      { id: "E1-1", code: "E1.1", title: "Se pr\u00e9senter", available: false, lessonId: "communication-e2-1" },
      { id: "E1-2", code: "E1.2", title: "Parler de sa famille", available: false },
      { id: "E1-3", code: "E1.3", title: "D\u00e9crire son logement", available: false },
      { id: "E1-4", code: "E1.4", title: "Les activit\u00e9s quotidiennes", available: false },
      { id: "E1-5", code: "E1.5", title: "Faire des achats", available: false },
    ],
  },
  {
    id: "E2",
    level: "E2",
    title: "Expression orale - Moyen",
    description: "\u00c9l\u00e9mentaire - conversations sur des sujets familiers",
    submodules: [
      { id: "E2-1", code: "E2.1", title: "Raconter son pass\u00e9", available: false },
      { id: "E2-2", code: "E2.2", title: "Parler de ses projets", available: false },
      { id: "E2-3", code: "E2.3", title: "Donner son opinion", available: false },
      { id: "E2-4", code: "E2.4", title: "Demander et donner des informations", available: false },
      { id: "E2-5", code: "E2.5", title: "Exprimer ses sentiments", available: false },
    ],
  },
  {
    id: "E3",
    level: "E3",
    title: "Expression orale - Avanc\u00e9",
    description: "Interm\u00e9diaire - d\u00e9bats et sujets abstraits",
    submodules: [
      { id: "E3-1", code: "E3.1", title: "Argumenter et convaincre", available: false },
      { id: "E3-2", code: "E3.2", title: "D\u00e9crire des exp\u00e9riences", available: false },
      { id: "E3-3", code: "E3.3", title: "Donner des conseils", available: false },
      { id: "E3-4", code: "E3.4", title: "Comparer et opposer", available: false },
    ],
  },
];

const LEGACY_COMM_IDS: Record<string, string> = {
  "P1-0": "E1-0", "P1-1": "E1-1", "P1-2": "E1-2", "P1-3": "E1-3", "P1-4": "E1-4", "P1-5": "E1-5",
  "P2-1": "E2-1", "P2-2": "E2-2", "P2-3": "E2-3", "P2-4": "E2-4", "P2-5": "E2-5",
  "P3-1": "E3-1", "P3-2": "E3-2", "P3-3": "E3-3", "P3-4": "E3-4",
  "E2-0": "E1-0", "E2-1": "E1-1", "E2-2": "E1-2", "E2-3": "E1-3", "E2-4": "E1-4", "E2-5": "E1-5",
  "E3-1": "E2-1", "E3-2": "E2-2", "E3-3": "E2-3", "E3-4": "E2-4", "E3-5": "E2-5",
  "E4-1": "E3-1", "E4-2": "E3-2", "E4-3": "E3-3", "E4-4": "E3-4",
};

export function normalizeCommunicationProgress(progress: Record<string, boolean>): Record<string, boolean> {
  const normalized = { ...progress };
  for (const [legacyId, expressionId] of Object.entries(LEGACY_COMM_IDS)) {
    if (progress[legacyId]) normalized[expressionId] = true;
  }
  return normalized;
}

export function getCommModule(id: string): CommunicationModule | undefined {
  return COMM_MODULES.find((m) => m.id === id);
}
