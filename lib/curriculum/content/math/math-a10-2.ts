import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "A10-2",
  submoduleCode: "A10.2",
  theory: {
    title: { fr: "Équations avec fractions" },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Résoudre une équation avec fractions", black: true },
      {
        type: "plain",
        fr: "Une équation avec fractions se résout comme une équation normale, mais on commence souvent par **supprimer les dénominateurs**.",
      },
      { type: "highlight", fr: "Idée principale" },
      {
        type: "section",
        labelFr: "Même dénominateur",
        itemsFr: [
          "On transforme tous les termes pour avoir un dénominateur commun.",
          "Ensuite, on multiplie toute l'équation par ce dénominateur.",
          "Les fractions disparaissent et on obtient une équation sans fractions.",
        ],
      },
      {
        type: "rule",
        titleFr: "Méthode",
        itemsFr: [
          "**1.** Repérer tous les dénominateurs.",
          "**2.** Chercher un dénominateur commun, souvent le PPMC.",
          "**3.** Écrire chaque terme avec ce même dénominateur.",
          "**4.** Multiplier toute l'équation par ce dénominateur.",
          "**5.** Réduire, isoler x, puis donner l'ensemble solution.",
        ],
      },
      { type: "heading", fr: "Exemple simple", black: true },
      {
        type: "section",
        labelFr: "Équation",
        itemsFr: [
          "x/2 + 3 = 7",
          "Le dénominateur est 2.",
          "On multiplie tous les termes par 2.",
          "x + 6 = 14",
          "x = 8",
          "**S = {8}**",
        ],
      },
      { type: "heading", fr: "Exemple avec plusieurs fractions", black: true },
      {
        type: "section",
        labelFr: "Équation",
        itemsFr: [
          "x/3 + x/6 = 5",
          "Le dénominateur commun de 3 et 6 est 6.",
          "On multiplie tous les termes par 6.",
          "2x + x = 30",
          "3x = 30",
          "x = 10",
          "**S = {10}**",
        ],
      },
      {
        type: "table",
        headersFr: ["Situation", "Action"],
        accentHeader: true,
        rows: [
          ["Un terme entier est présent", "Il faut aussi le multiplier par le dénominateur commun."],
          ["Il y a x dans une fraction", "On enlève d'abord la fraction, puis on résout."],
          ["Il y a une fraction négative", "On garde bien le signe - pendant toute la résolution."],
          ["La solution est une fraction", "On la simplifie si possible."],
        ],
      },
      {
        type: "note",
        fr: "Attention : quand on multiplie une équation pour supprimer les fractions, il faut multiplier **tous les termes des deux membres**, pas seulement les fractions.",
      },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
