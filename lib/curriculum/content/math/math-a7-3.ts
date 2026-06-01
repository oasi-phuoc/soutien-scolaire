import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_3_LESSON: MathSubmoduleLesson = {
  submoduleId: "A7-3",
  submoduleCode: "A7.3",
  theory: {
    title: {
      fr: "Addition et soustraction des entiers relatifs",
      en: "Addition and subtraction of relative numbers",
      ar: "جمع وطرح الأعداد النسبية",
      fa: "جمع و تفریق اعداد نسبی",
      ti: "ምደማር ምቅናስ ናይ ኣካባቢ ቁጽርታት",
      uk: "Додавання та віднімання відносних чисел",
    },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Addition des entiers relatifs", black: true },

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

      { type: "heading", fr: "Soustraction des entiers relatifs", black: true },

      {
        type: "rule",
        titleFr: "Règle fondamentale",
        itemsFr: [
          "Soustraire un nombre revient à additionner son opposé.",
          "a − b = a + (−b)",
        ],
      },

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

      { type: "highlight", fr: "Signes contraires" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "(+6) − (−3) = (+6) + (+3) = +9",
          "(−6) − (+3) = (−6) + (−3) = −9",
        ],
      },

      {
        type: "note",
        fr: "Méthode : transformer toujours la soustraction en addition de l'opposé, puis appliquer la règle d'addition.",
      },
    ],
  },
  exercises: [],
  exercisePool: [],
  poolSize: 0,
};
