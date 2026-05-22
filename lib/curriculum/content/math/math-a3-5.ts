import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A3_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A3-5",
    submoduleCode: "A3.5",
    theory: {
      title: {
        fr: "Les multiples",
      },

      blocks: [
      { type: "plain", fr: "Un nombre est un multiple d’un autre nombre lorsqu’on peut l’obtenir en le multipliant par un nombre entier." },
      { type: "plain", fr: "12 est un multiple de 4 car : " },
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "**4** × 3 = 12",
        ],
      },

      { type: "heading", fr: "Les diviseurs", black: true },
      
      { type: "plain", fr: "Un nombre est un diviseur d’un autre nombre si la division donne un résultat entier, sans reste." },
      { type: "plain", fr: "4 est un diviseur de 12 car : " },
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "12 ÷ **4** = 3",
        ],
      },

      { type: "highlight", fr: "Relations" },
      { type: "plain", fr: "Si 12 = 3 × 4 alors : " },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "12 est un multiple de 3 et de 4.",
          "3 et 4 sont des diviseurs de 12."
        ],
      },
      
      { type: "heading", fr: "Critères de divisibilité", black: true },
      
      { type: "plain", fr: "Les critères de divisibilité permettent de savoir rapidement si un nombre est divisible par un autre, sans poser la division." },
      
      {
        type: "table",
        headersFr: ["Diviseur", "Critère"],
        accentHeader: true,
        rows: [
          ["2", " Le dernier chiffre est pair."],
          ["3", "La somme des chiffres est divisible par 3. \n Exemple : 123 \n 1 + 2 + 3 = 6 \n 6 est divisible par 3 \n Donc 123 est divisible par 3."],
          ["4", "Le nombre formé par les deux derniers chiffres est divisible par 4. \n Exemple : 324 \n Les deux derniers chiffres sont 24. \n 24 est divisible par 4 \n Donc 324 est divisible par 4."],
          ["5", "Le dernier chiffre est 0 ou 5."],
          ["6", "Le nombre est divisible par 2 et par 3."],
          ["9", "La somme des chiffres est divisible par 9. \n Exemple : 729 \n 7 + 2 + 9 = 18 \n 18 est divisible par 9 \n Donc 729 est divisible par 9."],
          ["10", "Le dernier chiffre est 0."],
        ],
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