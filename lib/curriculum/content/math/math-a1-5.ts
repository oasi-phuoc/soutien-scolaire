import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A1_5_LESSON: MathSubmoduleLesson = {
  submoduleId: "A1-5",
  submoduleCode: "A1.5",
  theory: {
    title: {
      fr: "Suites numériques",
    },
    blocks: [
      {
        type: "plain",
        fr: "Une suite de nombres est une liste ordonnée où chaque terme est obtenu en appliquant la même règle. On **ajoute** ou **enlève** toujours le **même nombre**.",
      },
      {
        type: "plain",
        fr: "Pour comprendre une suite, on regarde ce qui change entre les nombres.",
      },
      {
        type: "highlight",
        fr: "Exemple",
      },

      { type: "plain", fr: "5 ; 8 ; 11 ; 14" },
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On ajoute toujours 3.",
          "La règle pour trouver le nombre suivant est : nombre actuel + **3**",
        ],
      },
      {
        type: "highlight",
        fr: "Suite croissante",
      },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["Les nombres augmentent : 1 ; 3 ; 5 ; 7 ."],
      },
      {
        type: "highlight",
        fr: "Suite décroissante",
      },
      {
        type: "section",
        labelFr: "",
        itemsFr: ["Les nombres diminuent : 20 ; 15 ; 10 ; 5 ."],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [

  ],
  exercisePool: [

  ],
  poolSize: 5,
};
