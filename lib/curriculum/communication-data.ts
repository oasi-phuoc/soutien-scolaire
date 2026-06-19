import type { CommunicationLesson } from "./content/communication/communication-p1-1";

export type { CommunicationLesson };

export type CommunicationSubmodule = {
  id: string; // "P1-1"
  code: string; // "P1.1"
  title: string;
  available: boolean;
  lessonId?: string; // "communication-p1-1" — used to load the lesson
};

export type CommunicationModule = {
  id: string; // "P1"
  level: string; // "P1"
  title: string;
  description: string;
  submodules: CommunicationSubmodule[];
};

export const COMM_MODULES: CommunicationModule[] = [
  {
    id: "P1",
    level: "P1",
    title: "Parler P1",
    description: "Débutant — interactions simples du quotidien",
    submodules: [
      { id: "P1-0", code: "P1.0", title: "Conversation IA", available: true },
      { id: "P1-1", code: "P1.1", title: "Se présenter", available: true, lessonId: "communication-p1-1" },
      { id: "P1-2", code: "P1.2", title: "Parler de sa famille", available: false },
      { id: "P1-3", code: "P1.3", title: "Décrire son logement", available: false },
      { id: "P1-4", code: "P1.4", title: "Les activités quotidiennes", available: false },
      { id: "P1-5", code: "P1.5", title: "Faire des achats", available: false },
    ],
  },
  {
    id: "P2",
    level: "P2",
    title: "Parler P2",
    description: "Élémentaire — conversations sur des sujets familiers",
    submodules: [
      { id: "P2-1", code: "P2.1", title: "Raconter son passé", available: false },
      { id: "P2-2", code: "P2.2", title: "Parler de ses projets", available: false },
      { id: "P2-3", code: "P2.3", title: "Donner son opinion", available: false },
      { id: "P2-4", code: "P2.4", title: "Demander et donner des informations", available: false },
      { id: "P2-5", code: "P2.5", title: "Exprimer ses sentiments", available: false },
    ],
  },
  {
    id: "P3",
    level: "P3",
    title: "Parler P3",
    description: "Intermédiaire — débats et sujets abstraits",
    submodules: [
      { id: "P3-1", code: "P3.1", title: "Argumenter et convaincre", available: false },
      { id: "P3-2", code: "P3.2", title: "Décrire des expériences", available: false },
      { id: "P3-3", code: "P3.3", title: "Donner des conseils", available: false },
      { id: "P3-4", code: "P3.4", title: "Comparer et opposer", available: false },
    ],
  },
];

export function getCommModule(id: string): CommunicationModule | undefined {
  return COMM_MODULES.find((m) => m.id === id);
}
