import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G7_6_LESSON: MathSubmoduleLesson = {
  submoduleId: "G7-6",
  submoduleCode: "G7.6",
  theory: {
    title: { fr: "Homothétie" },
    blocks: [
      { type: "heading", fr: "Agrandir ou réduire depuis un centre", black: true },
      {
        type: "plain",
        fr: "Une **homothétie** de centre O et de rapport k associe à chaque point M le point M' tel que OM' = |k| × OM, sur la même droite (OM).",
      },
      { type: "highlight", fr: "Selon le rapport k" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "**k > 1** : agrandissement.",
          "**0 < k < 1** : réduction.",
          "**k < 0** : agrandissement (ou réduction) avec **retournement**.",
          "**k = 1** : la figure reste identique.",
        ],
      },
      { type: "highlight", fr: "Propriétés" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Les **angles** sont conservés (figures **semblables**).",
          "Les **longueurs** sont multipliées par |k|.",
          "Les **aires** sont multipliées par k².",
        ],
      },
    ],
    paragraphs: { fr: [] },
  },
  exercises: [
    { id: "g7-6-e1", promptFr: "Homothétie de rapport 3 : un segment de 4 cm devient ?", type: "number", acceptable: ["12"] },
    { id: "g7-6-e2", promptFr: "Homothétie de rapport 1/2 : un segment de 8 cm devient ?", type: "number", acceptable: ["4"] },
    { id: "g7-6-e3", promptFr: "Homothétie de rapport 2 : une aire de 5 cm² devient ?", type: "number", acceptable: ["20"] },
    { id: "g7-6-e4", promptFr: "L'homothétie conserve-t-elle les angles ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    { id: "g7-6-e5", promptFr: "Un rapport k = 1 laisse la figure identique ? (oui/non)", type: "short_text", acceptable: ["oui"] },
  ],
};
