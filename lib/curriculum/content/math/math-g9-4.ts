import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G9_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G9-4",
    submoduleCode: "G9.4",
    theory: {
      title: {
        fr: "Diagramme en secteurs (camembert)",
      },
      paragraphs: {
        fr: [
          "Un diagramme en secteurs (camembert) représente des proportions. Chaque secteur correspond à une partie du total. La somme des angles vaut 360°.",
          "Calcul de l'angle d'un secteur : α = (valeur / total) × 360°.",
          "Exemple : sur 50 élèves, 20 aiment le foot. α = (20/50) × 360° = 144°.",
          "Utilisation : montrer des répartitions (parts de marché, emploi du temps, votes…).",
        ],
      },
    },
    exercises: [
      { id: "g9-4-e1", promptFr: "Dans un camembert de total 100, valeur 25 → angle = ?°", type: "number", acceptable: ["90"] },
      { id: "g9-4-e2", promptFr: "Dans un camembert de total 60, valeur 15 → angle = ?°", type: "number", acceptable: ["90"] },
      { id: "g9-4-e3", promptFr: "La somme de tous les angles d'un camembert vaut ?°", type: "number", acceptable: ["360"] },
      { id: "g9-4-e4", promptFr: "50% du camembert représente quel angle ?°", type: "number", acceptable: ["180"] },
      { id: "g9-4-e5", promptFr: "Un secteur de 72° représente quelle fraction du total ?", type: "short_text", acceptable: ["1/5", "20%"] },
    ],
  };
