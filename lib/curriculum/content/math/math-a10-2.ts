import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "A10-2",
  submoduleCode: "A10.2",
  theory: {
    title: { fr: "Équations avec fractions" },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Éliminer les fractions", black: true },
      {
        type: "plain",
        fr: "Pour résoudre une équation contenant des fractions, on peut supprimer les dénominateurs en multipliant **tous les termes des deux membres** par un même nombre.",
      },
      {
        type: "rule",
        titleFr: "Méthode",
        itemsFr: [
          "**1.** Repérer tous les dénominateurs.",
          "**2.** Trouver leur PPMC.",
          "**3.** Multiplier chaque terme des deux côtés par ce PPMC.",
          "**4.** Simplifier les fractions, puis résoudre l'équation obtenue.",
          "**5.** Vérifier la solution dans l'équation de départ.",
        ],
      },
      { type: "highlight", fr: "Exemple avec un seul dénominateur" },
      {
        type: "section",
        labelFr: "x/2 + 3 = 7",
        itemsFr: [
          "On multiplie tous les termes par 2 : x + 6 = 14.",
          "On enlève 6 : x = 8.",
          "Vérification : 8/2 + 3 = 4 + 3 = 7 ✓",
        ],
      },
      { type: "highlight", fr: "Exemple avec deux dénominateurs" },
      {
        type: "section",
        labelFr: "x/3 + x/6 = 5",
        itemsFr: [
          "Le PPMC de 3 et 6 est 6.",
          "On multiplie tous les termes par 6 : 2x + x = 30.",
          "3x = 30, donc x = 10.",
        ],
      },
      {
        type: "note",
        fr: "Il faut multiplier chaque terme par le dénominateur commun, y compris les nombres entiers placés hors des fractions.",
      },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 5,
};
