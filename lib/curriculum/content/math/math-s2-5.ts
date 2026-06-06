import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-5",
    submoduleCode: "S2.5",
    theory: {
      title: {
        fr: "Arbre de probabilité à deux étapes",
      },
      paragraphs: {
        fr: [
          "Un arbre de probabilité modélise une expérience en plusieurs étapes. Chaque branche représente un résultat possible à cette étape avec sa probabilité.",
          "Règle du produit : la probabilité d'un chemin (suite de branches) est le produit des probabilités de chaque branche du chemin.",
          "Règle de la somme : si un événement peut se réaliser par plusieurs chemins (incompatibles), sa probabilité est la somme des probabilités de chacun de ces chemins.",
          "Exemple : on lance un dé puis une pièce. P(obtenir 6 ET face) = P(6) × P(face) = 1/6 × 1/2 = 1/12.",
          "Vérification : la somme des probabilités de tous les chemins finaux doit être égale à 1.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-5-e1",
        promptFr: "On lance deux pièces équilibrées. Quelle est la probabilité d'obtenir deux fois face ?",
        type: "short_text",
        acceptable: ["1/4", "0,25", "0.25"],
      },
      {
        id: "s2-5-e2",
        promptFr: "On lance un dé puis une pièce. Quelle est la probabilité d'obtenir un 6 ET pile ?",
        type: "short_text",
        acceptable: ["1/12"],
      },
      {
        id: "s2-5-e3",
        promptFr: "Avec deux pièces équilibrées, quelle est la probabilité d'obtenir exactement une face (une face et un pile) ?",
        type: "short_text",
        acceptable: ["1/2", "2/4", "0,5", "0.5"],
      },
      {
        id: "s2-5-e4",
        promptFr: "Dans un arbre à deux étapes, toutes les probabilités des chemins finaux sont : 1/6, 2/6, 1/6, 2/6. Quelle est leur somme ?",
        type: "number",
        acceptable: ["1"],
      },
      {
        id: "s2-5-e5",
        promptFr: "On tire deux fois une bille d'un sac (avec remise) qui contient 3 rouges et 7 bleues. Quelle est la probabilité d'obtenir deux billes rouges ?",
        type: "short_text",
        acceptable: ["9/100", "0,09", "0.09"],
      },
    ],
  };
