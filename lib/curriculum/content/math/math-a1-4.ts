import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A1_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "A1-4",
  submoduleCode: "A1.4",

  theory: {
    title: {
      fr: "Droite numérique",
    },

    blocks: [
      {
        type: "plain",
        fr: "Sur une droite numérique, les nombres sont placés dans l'ordre du plus petit au plus grand, de gauche à droite. L'espacement entre deux nombres consécutifs peut être 1, 2, 5, 10, 100… selon l'échelle.",
      },

      {
        type: "heading",
        fr: "Nombres pairs et impairs",
        black: true,
      },

      {
        type: "plain",
        fr: "Pour savoir si un nombre est **pair** ou **impair**, on regarde seulement le dernier chiffre.",
      },

      {
        type: "highlight",
        fr: "Pair",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Un nombre pair peut être partagé en 2 parts égales.",
          "Il se termine par **0**, **2**, **4**, **6** ou **8**.",
          "4, 12, 38, 100…",
        ],
      },

      {
        type: "highlight",
        fr: "Impair",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Un nombre impair ne peut pas être partagé en 2 parts exactement égales.",
          "Il se termine par **1**, **3**, **5**, **7** ou **9**.",
          "3, 17, 45, 99…",
        ],
      },
    ],

    paragraphs: {
      fr: [
      ],
    },
  },

  exercises: [

  ],

  poolSize: 5,
};
