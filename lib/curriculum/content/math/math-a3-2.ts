import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-2",
    submoduleCode: "A3.2",
    theory: {
    title: {
      fr: "Multiplication en colonnes",
      en: "",
      ar: "",
      fa: "",
      ti: "",
      uk: "",
      pt: "",
    },
    blocks: [
      {
        type: "plain",
        fr: "La multiplication en colonne permet de multiplier des nombres plus grands en organisant les calculs étape par étape.",
      },
      { type: "highlight", fr: "Principe" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On multiplie chaque chiffre du nombre du bas par chaque chiffre du nombre du haut, en commençant par les unités.",
        ],
      },
      { type: "heading", fr: "Multiplication à 1 chiffre" },
      { type: "highlight", fr: "374 × 2" },
      {
        type: "mul_step_cards",
        a: [0, 3, 7, 4],
        b: [0, 0, 0, 2],
        op: "×",
        steps: [
          {
            numFr: "1. On pose les nombres",
            textsFr: [
              "On pose en colonne en alignant les unités, les dizaines, les centaines.",
            ],
            carries: [null, null, null, null],
            result:  [null, null, null, null],
          },
          {
            numFr: "2. Multiplier les unités",
            textsFr: [
              "2 × 4 = 8",
              "On écrit 8 dans la colonne des unités.",
            ],
            carries: [null, null, null, null],
            result:  [null, null, null, 8],
          },
          {
            numFr: "3. Multiplier les dizaines",
            textsFr: [
              "2 × 7 = 14",
              "14 = 1 dizaine et 4 unités.",
              "On écrit 4 dans la colonne des dizaines.",
              "On retient 1 centaine.",
            ],
            carries: [null, 1, null, null],
            result:  [null, null, 4, 8],
          },
          {
            numFr: "4. Multiplier les centaines",
            textsFr: [
              "2 × 3 = 6",
              "On ajoute la retenue :",
              "6 + 1 = 7",
              "On écrit 7 dans la colonne des centaines.",
            ],
            carries: [null, 1, null, null],
            result:  [null, 7, 4, 8],
          },
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [],
  exercisePool: [
    { id: "a3-2-ep01", promptFr: "Calculez 24 × 3.", type: "number", acceptable: ["72"] },
    { id: "a3-2-ep02", promptFr: "Calculez 45 × 6.", type: "number", acceptable: ["270"] },
    { id: "a3-2-ep03", promptFr: "Calculez 123 × 4.", type: "number", acceptable: ["492"] },
    { id: "a3-2-ep04", promptFr: "Calculez 36 × 7.", type: "number", acceptable: ["252"] },
    { id: "a3-2-ep05", promptFr: "Calculez 52 × 8.", type: "number", acceptable: ["416"] },
    { id: "a3-2-ep06", promptFr: "Calculez 67 × 9.", type: "number", acceptable: ["603"] },
    { id: "a3-2-ep07", promptFr: "Calculez 21 × 15.", type: "number", acceptable: ["315"] },
    { id: "a3-2-ep08", promptFr: "Calculez 34 × 12.", type: "number", acceptable: ["408"] },
    { id: "a3-2-ep09", promptFr: "Calculez 48 × 11.", type: "number", acceptable: ["528"] },
    { id: "a3-2-ep10", promptFr: "Calculez 75 × 4.", type: "number", acceptable: ["300"] },
    { id: "a3-2-ep11", promptFr: "123 × 0 = ?", type: "number", acceptable: ["0"] },
    { id: "a3-2-ep12", promptFr: "5 × 6 × 2 = ? (calculer dans n'importe quel ordre)", type: "number", acceptable: ["60"] },
  ],
  poolSize: 5,
};
