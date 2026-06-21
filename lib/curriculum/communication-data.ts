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
    title: "Production écrite",
    description: "Apprendre à préparer, organiser, rédiger et relire un texte",
    submodules: [
      { id: "E1-1", code: "E1.1", title: "Base", available: true, lessonId: "expression-e1-1" },
      { id: "E1-2", code: "E1.2", title: "Moyen", available: true, lessonId: "expression-e1-2" },
      { id: "E1-3", code: "E1.3", title: "Avancé", available: true, lessonId: "expression-e1-3" },
    ],
  },
  {
    id: "PO",
    level: "PO",
    title: "Production orale",
    description: "Format FLE/FIDE : questions sur thèmes, description d'image, dialogue",
    submodules: [
      { id: "PO-1", code: "PO.1", title: "Base", available: true, lessonId: "production-orale-1" },
      { id: "PO-2", code: "PO.2", title: "Moyen", available: true, lessonId: "production-orale-2" },
      { id: "PO-3", code: "PO.3", title: "Avancé", available: true, lessonId: "production-orale-3" },
    ],
  },
  {
    id: "E2",
    level: "E2",
    title: "Expression orale — Base",
    description: "Débutant — interactions simples du quotidien",
    submodules: [
      { id: "E2-0", code: "E2.0", title: "Conversation IA", available: true },
      { id: "E2-1", code: "E2.1", title: "Se présenter", available: true, lessonId: "communication-e2-1" },
      { id: "E2-2", code: "E2.2", title: "Parler de sa famille", available: false },
      { id: "E2-3", code: "E2.3", title: "Décrire son logement", available: false },
      { id: "E2-4", code: "E2.4", title: "Les activités quotidiennes", available: false },
      { id: "E2-5", code: "E2.5", title: "Faire des achats", available: false },
    ],
  },
  {
    id: "E3",
    level: "E3",
    title: "Expression orale — Moyen",
    description: "Élémentaire — conversations sur des sujets familiers",
    submodules: [
      { id: "E3-1", code: "E3.1", title: "Raconter son passé", available: false },
      { id: "E3-2", code: "E3.2", title: "Parler de ses projets", available: false },
      { id: "E3-3", code: "E3.3", title: "Donner son opinion", available: false },
      { id: "E3-4", code: "E3.4", title: "Demander et donner des informations", available: false },
      { id: "E3-5", code: "E3.5", title: "Exprimer ses sentiments", available: false },
    ],
  },
  {
    id: "E4",
    level: "E4",
    title: "Expression orale — Avancé",
    description: "Intermédiaire — débats et sujets abstraits",
    submodules: [
      { id: "E4-1", code: "E4.1", title: "Argumenter et convaincre", available: false },
      { id: "E4-2", code: "E4.2", title: "Décrire des expériences", available: false },
      { id: "E4-3", code: "E4.3", title: "Donner des conseils", available: false },
      { id: "E4-4", code: "E4.4", title: "Comparer et opposer", available: false },
    ],
  },
];

const LEGACY_COMM_IDS: Record<string, string> = {
  "P1-0": "E2-0", "P1-1": "E2-1", "P1-2": "E2-2", "P1-3": "E2-3", "P1-4": "E2-4", "P1-5": "E2-5",
  "P2-1": "E3-1", "P2-2": "E3-2", "P2-3": "E3-3", "P2-4": "E3-4", "P2-5": "E3-5",
  "P3-1": "E4-1", "P3-2": "E4-2", "P3-3": "E4-3", "P3-4": "E4-4",
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
