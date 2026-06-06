import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G1_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G1-2",
    submoduleCode: "G1.2",
    theory: {
      title: {
        fr: "Propriétés et symétrie",
      },
      paragraphs: {
        fr: [
          "La symétrie axiale : une figure est symétrique par rapport à un axe si elle se superpose à elle-même lorsqu'on la plie le long de cet axe. L'axe est appelé axe de symétrie.",
          "Exemples : le rectangle a 2 axes de symétrie ; le carré en a 4 ; le cercle en a une infinité ; le triangle équilatéral en a 3.",
          "Propriété : deux figures symétriques par rapport à une droite sont superposables (on peut retourner l'une pour obtenir l'autre).",
          "Utilité : la symétrie permet de prouver des propriétés (ex. : les diagonales d'un carré se coupent à angle droit).",
        ],
      },
    },
    exercises: [
      { id: "g1-2-e1", promptFr: "Combien d'axes de symétrie a un carré ?", type: "number", acceptable: ["4"] },
      { id: "g1-2-e2", promptFr: "Combien d'axes de symétrie a un rectangle (non carré) ?", type: "number", acceptable: ["2"] },
      { id: "g1-2-e3", promptFr: "Combien d'axes de symétrie a un triangle équilatéral ?", type: "number", acceptable: ["3"] },
      { id: "g1-2-e4", promptFr: "Une figure avec 0 axe de symétrie est-elle symétrique ? (oui/non)", type: "short_text", acceptable: ["non"] },
      { id: "g1-2-e5", promptFr: "Combien d'axes de symétrie a un cercle ? (beaucoup/infini/zéro)", type: "short_text", acceptable: ["infini", "infinité"] },
    ],
  };
