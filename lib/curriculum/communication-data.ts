import type { CommLesson } from "./content/communication/comm-a1-1-se-presenter";

export type { CommLesson };

export type CommSubmodule = {
  id: string; // "A1-1"
  code: string; // "A1.1"
  title: string;
  available: boolean;
  lessonId?: string; // "comm-a1-1-se-presenter" — used to load the lesson
};

export type CommModule = {
  id: string; // "A1"
  level: string; // "A1"
  title: string;
  description: string;
  submodules: CommSubmodule[];
};

export const COMM_MODULES: CommModule[] = [
  {
    id: "A1",
    level: "A1",
    title: "Communication A1",
    description: "Débutant — interactions simples du quotidien",
    submodules: [
      { id: "A1-1", code: "A1.1", title: "Se présenter", available: true, lessonId: "comm-a1-1-se-presenter" },
      { id: "A1-2", code: "A1.2", title: "Parler de sa famille", available: false },
      { id: "A1-3", code: "A1.3", title: "Décrire son logement", available: false },
      { id: "A1-4", code: "A1.4", title: "Les activités quotidiennes", available: false },
      { id: "A1-5", code: "A1.5", title: "Faire des achats", available: false },
    ],
  },
  {
    id: "A2",
    level: "A2",
    title: "Communication A2",
    description: "Élémentaire — conversations sur des sujets familiers",
    submodules: [
      { id: "A2-1", code: "A2.1", title: "Raconter son passé", available: false },
      { id: "A2-2", code: "A2.2", title: "Parler de ses projets", available: false },
      { id: "A2-3", code: "A2.3", title: "Donner son opinion", available: false },
      { id: "A2-4", code: "A2.4", title: "Demander et donner des informations", available: false },
      { id: "A2-5", code: "A2.5", title: "Exprimer ses sentiments", available: false },
    ],
  },
  {
    id: "B1",
    level: "B1",
    title: "Communication B1",
    description: "Intermédiaire — débats et sujets abstraits",
    submodules: [
      { id: "B1-1", code: "B1.1", title: "Argumenter et convaincre", available: false },
      { id: "B1-2", code: "B1.2", title: "Décrire des expériences", available: false },
      { id: "B1-3", code: "B1.3", title: "Donner des conseils", available: false },
      { id: "B1-4", code: "B1.4", title: "Comparer et opposer", available: false },
    ],
  },
];

export function getCommModule(id: string): CommModule | undefined {
  return COMM_MODULES.find((m) => m.id === id);
}
