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
        textAlignRows: "left",
        rows: [
          ["2", "Le dernier chiffre est pair."],
          ["3", "La somme des chiffres est divisible par 3.\nExemple : 123\n1 + 2 + 3 = 6\n6 est divisible par 3\nDonc 123 est divisible par 3."],
          ["4", "Le nombre formé par les deux derniers chiffres est divisible par 4.\nExemple : 324\nLes deux derniers chiffres sont 24.\n24 est divisible par 4\nDonc 324 est divisible par 4."],
          ["5", "Le dernier chiffre est 0 ou 5."],
          ["6", "Le nombre est divisible par 2 et par 3."],
          ["9", "La somme des chiffres est divisible par 9.\nExemple : 729\n7 + 2 + 9 = 18\n18 est divisible par 9\nDonc 729 est divisible par 9."],
          ["10", "Le dernier chiffre est 0."],
        ],
      },
    ],
    paragraphs: { fr: [] },
  },

  exercises: [],
  exercisePool: [
    { id: "a3-5-ep01", promptFr: "Quel est le 5ème multiple de 4 ?", type: "number", acceptable: ["20"] },
    { id: "a3-5-ep02", promptFr: "Quel est le 8ème multiple de 7 ?", type: "number", acceptable: ["56"] },
    { id: "a3-5-ep03", promptFr: "Combien de diviseurs a le nombre 12 ? (1, 2, 3, 4, 6, 12)", type: "number", acceptable: ["6"] },
    { id: "a3-5-ep04", promptFr: "Quel est le plus grand diviseur de 18 différent de 18 ?", type: "number", acceptable: ["9"] },
    { id: "a3-5-ep05", promptFr: "Le dernier chiffre de 346 est 6 (pair). 346 est-il divisible par 2 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-5-ep06", promptFr: "La somme des chiffres de 123 est 1+2+3=6. 123 est-il divisible par 3 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-5-ep07", promptFr: "Le dernier chiffre de 475 est 5. 475 est-il divisible par 5 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-5-ep08", promptFr: "Quel est le 6ème multiple de 9 ?", type: "number", acceptable: ["54"] },
    { id: "a3-5-ep09", promptFr: "Quel est le plus grand diviseur de 36 différent de 36 ?", type: "number", acceptable: ["18"] },
    { id: "a3-5-ep10", promptFr: "Le nombre 720 se termine par 0. Est-il divisible par 10 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-5-ep11", promptFr: "12 est-il un multiple de 4 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
    { id: "a3-5-ep12", promptFr: "7 est-il un diviseur de 49 ? (oui/non)", type: "short_text", acceptable: ["oui", "Oui", "OUI"] },
  ],
  poolSize: 5,
};