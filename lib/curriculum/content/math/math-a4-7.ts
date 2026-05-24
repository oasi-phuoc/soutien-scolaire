import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_7_LESSON: MathSubmoduleLesson = {
  submoduleId: "A4-7",
  submoduleCode: "A4.7",

  theory: {
    title: {
      fr: "Fractions et nombres décimaux",
      en: "Fractions and decimals",
      ar: "الكسور والأعداد العشرية",
      fa: "کسرها و اعداد اعشاری",
      ti: "ክፍሊታት እና ዓስራዊ ቁጽሪ",
      uk: "Дроби та десяткові числа",
    },

    paragraphs: {
      fr: [
        "Une fraction et un nombre décimal représentent la même quantité sous deux écritures différentes.",
      ],
    },

    blocks: [
      {
        type: "plain",
        fr: "Une fraction et un nombre décimal représentent la même quantité sous deux écritures différentes.",
      },

      {
        type: "heading",
        fr: "1. Transformer une fraction en nombre décimal",
        black: true,
      },

      {
        type: "plain",
        fr: "Pour transformer une fraction en nombre décimal, on divise le numérateur par le dénominateur.",
      },

      {
        type: "highlight",
        fr: "Exemple",
      },

      {
        type: "plain",
        fr: "[[frac:1/2]]",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On calcule : 1 ÷ 2 = 0,5",
          "Donc : [[frac:1/2]] = 0,5",
        ],
      },

      {
        type: "plain",
        fr: "[[frac:3/4]] = 3 ÷ 4 = 0,75",
      },

      {
        type: "heading",
        fr: "2. Transformer un nombre décimal en fraction",
        black: true,
      },

      {
        type: "plain",
        fr: "Pour transformer un nombre décimal en fraction, on l’écrit avec une puissance de 10 puis on simplifie.",
      },

      {
        type: "highlight",
        fr: "Exemple",
      },

      {
        type: "plain",
        fr: "0,6",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "0,6 = 6/10",
          "On simplifie : 6/10 = 3/5",
        ],
      },

      {
        type: "plain",
        fr: "0,25",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "0,25 = 25/100",
          "On simplifie : 25/100 = 1/4",
        ],
      },

      {
        type: "heading",
        fr: "3. Fractions et décimaux équivalents",
        black: true,
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Une fraction peut toujours être écrite sous forme décimale si la division est finie.",
          "Certains nombres décimaux peuvent aussi être écrits sous forme de fractions simples.",
        ],
      },

      {
        type: "highlight",
        fr: "Exemples",
      },

      {
        type: "plain",
        fr: "[[frac:1/4]] = 0,25",
      },

      {
        type: "plain",
        fr: "[[frac:2/5]] = 0,4",
      },

      {
        type: "plain",
        fr: "[[frac:3/10]] = 0,3",
      },

      {
        type: "heading",
        fr: "À retenir",
        black: true,
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Fraction → décimal : on divise.",
          "Décimal → fraction : on écrit sur 10, 100, 1000 puis on simplifie.",
          "Les deux formes représentent la même valeur.",
        ],
      },
    ],
  },

  exercises: [],
};