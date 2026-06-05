import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "A7-4",
  submoduleCode: "A7.4",
  theory: {
    title: {
      fr: "Multiplication et division — règle des signes",
    },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Règle des signes", black: true },

      {
        type: "rule",
        titleFr: "À retenir",
        itemsFr: [
          "Mêmes signes → résultat **positif**",
          "Signes contraires → résultat **négatif**",
          "Valable pour × (multiplication) et ÷ (division)",
        ],
      },

      { type: "heading", fr: "Multiplication", black: true },

      { type: "highlight", fr: "Mêmes signes → positif" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "(+6) × (+3) = +18   (positif × positif)",
          "(−6) × (−3) = +18   (négatif × négatif)",
        ],
      },

      { type: "highlight", fr: "Signes contraires → négatif" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "(+6) × (−3) = −18",
          "(−6) × (+3) = −18",
        ],
      },

      { type: "heading", fr: "Division", black: true },

      { type: "highlight", fr: "Mêmes signes → positif" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "(+6) ÷ (+3) = +2",
          "(−6) ÷ (−3) = +2",
        ],
      },

      { type: "highlight", fr: "Signes contraires → négatif" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "(+6) ÷ (−3) = −2",
          "(−6) ÷ (+3) = −2",
        ],
      },

      {
        type: "table",
        headersFr: ["Signes", "Résultat"],
        accentHeader: true,
        rows: [
          ["(+) × ou ÷ (+)", "+  (positif)"],
          ["(−) × ou ÷ (−)", "+  (positif)"],
          ["(+) × ou ÷ (−)", "−  (négatif)"],
          ["(−) × ou ÷ (+)", "−  (négatif)"],
        ],
      },

      {
        type: "note",
        fr: "Astuce : deux signes identiques donnent + ; deux signes différents donnent −. « Moins fois moins égale plus. »",
      },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
