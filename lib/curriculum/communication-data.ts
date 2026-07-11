import type { CommunicationLesson } from "./content/communication/express-types";

export type { CommunicationLesson };

export type CommunicationSubmodule = {
  id: string; // "E1-1"
  code: string; // "E1.1"
  title: string;
  available: boolean;
  lessonId?: string;
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
    title: "Expression orale — Découverte",
    description: "Interactions simples du quotidien",
    submodules: [
      { id: "E1-0", code: "E1.0", title: "Conversation IA", available: true },
      { id: "E1-1", code: "E1.1", title: "Se présenter", available: true },
      { id: "E1-2", code: "E1.2", title: "Parler de sa famille", available: true },
      { id: "E1-3", code: "E1.3", title: "Décrire son logement", available: true },
      { id: "E1-4", code: "E1.4", title: "Les activités quotidiennes", available: true },
      { id: "E1-5", code: "E1.5", title: "Faire des achats", available: true },
    ],
  },
  {
    id: "E2",
    level: "E2",
    title: "Expression orale — Approfondissement",
    description: "Conversations sur des sujets familiers",
    submodules: [
      { id: "E2-1", code: "E2.1", title: "Raconter son passé", available: true },
      { id: "E2-2", code: "E2.2", title: "Parler de ses projets", available: true },
      { id: "E2-3", code: "E2.3", title: "Donner son opinion", available: true },
      { id: "E2-4", code: "E2.4", title: "Demander et donner des informations", available: true },
      { id: "E2-5", code: "E2.5", title: "Exprimer ses sentiments", available: true },
    ],
  },
  {
    id: "E3",
    level: "E3",
    title: "Expression orale — Maîtrise",
    description: "Débats, conseils et sujets plus abstraits",
    submodules: [
      { id: "E3-1", code: "E3.1", title: "Argumenter et convaincre", available: true },
      { id: "E3-2", code: "E3.2", title: "Décrire des expériences", available: true },
      { id: "E3-3", code: "E3.3", title: "Donner des conseils", available: true },
      { id: "E3-4", code: "E3.4", title: "Comparer et opposer", available: true },
    ],
  },
];

const LEGACY_COMM_IDS: Record<string, string> = {
  "P1-0": "E1-0", "P1-1": "E1-1", "P1-2": "E1-2", "P1-3": "E1-3", "P1-4": "E1-4", "P1-5": "E1-5",
  "P2-1": "E2-1", "P2-2": "E2-2", "P2-3": "E2-3", "P2-4": "E2-4", "P2-5": "E2-5",
  "P3-1": "E3-1", "P3-2": "E3-2", "P3-3": "E3-3", "P3-4": "E3-4",
  "E4-1": "E3-1", "E4-2": "E3-2", "E4-3": "E3-3", "E4-4": "E3-4",
  "AI-1": "E1-0",
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
