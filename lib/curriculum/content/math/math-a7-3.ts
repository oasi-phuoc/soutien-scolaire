import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_3_LESSON: MathSubmoduleLesson = {
  submoduleId: "A7-3",
  submoduleCode: "A7.3",
  theory: {
    title: {
      fr: "Addition et soustraction de nombres relatifs",
    },
    paragraphs: { fr: [] },
    blocks: [
      {
        type: "theory_toggle",
        labelA: "Addition",
        labelB: "Soustraction",
        blocksA: [
          { type: "highlight", fr: "Mêmes signes → conserver le signe" },
          {
            type: "section",
            labelFr: "",
            itemsFr: [
              "Additionner les valeurs absolues et conserver le signe commun.",
              "(+6) + (+3) = +9",
              "(−6) + (−3) = −9",
            ],
          },
          { type: "plain", fr: "" },
          { type: "highlight", fr: "Signes contraires → signe du plus grand" },
          {
            type: "section",
            labelFr: "",
            itemsFr: [
              "Soustraire les valeurs absolues et prendre le signe du nombre ayant la plus grande valeur absolue.",
              "(+6) + (−3) = +3   (|6| > |3| → signe +)",
              "(−6) + (+3) = −3   (|6| > |3| → signe −)",
            ],
          },
        ],
        blocksB: [
          {
            type: "rule",
            titleFr: "Règle fondamentale",
            itemsFr: [
              "Soustraire un nombre revient à additionner son opposé.",
              "a − b = a + (−b)",
            ],
          },
          { type: "plain", fr: "" },
          { type: "highlight", fr: "Mêmes signes" },
          {
            type: "section",
            labelFr: "",
            itemsFr: [
              "(+6) − (+3) = (+6) + (−3) = +3",
              "(+3) − (+6) = (+3) + (−6) = −3",
              "(−6) − (−3) = (−6) + (+3) = −3",
              "(−3) − (−6) = (−3) + (+6) = +3",
            ],
          },
          { type: "plain", fr: "" },
          { type: "highlight", fr: "Signes contraires" },
          {
            type: "section",
            labelFr: "",
            itemsFr: [
              "(+6) − (−3) = (+6) + (+3) = +9",
              "(−6) − (+3) = (−6) + (−3) = −9",
            ],
          },
          { type: "plain", fr: "" },
          {
            type: "note",
            fr: "Méthode : transformer toujours la soustraction en addition de l'opposé, puis appliquer la règle d'addition.",
          },
        ],
      },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
