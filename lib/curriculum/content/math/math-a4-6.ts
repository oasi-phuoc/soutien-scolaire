import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_6_LESSON: MathSubmoduleLesson = {
  submoduleId: "A4-6",
  submoduleCode: "A4.6",

  theory: {
    title: {
      fr: "Division de fractions",
      en: "Division of fractions",
      ar: "قسمة الكسور",
      fa: "تقسیم کسرها",
      ti: "ምክፍፋል ክፍሊታት",
      uk: "Ділення дробів",
    },

    paragraphs: {
      fr: [
        "Diviser des fractions consiste à multiplier par l’inverse de la deuxième fraction.",
      ],
    },

    blocks: [
      {
        type: "plain",
        fr: "Diviser des fractions consiste à multiplier par l’inverse de la deuxième fraction.",
      },

      {
        type: "heading",
        fr: "Règle de division",
        black: true,
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On garde la première fraction.",
          "On remplace la division par une multiplication.",
          "On inverse la deuxième fraction.",
          "On multiplie comme dans les multiplications de fractions.",
        ],
      },

      {
        type: "highlight",
        fr: "Exemple",
      },

      {
        type: "plain",
        fr: "[[frac:2/3]] ÷ [[frac:4/5]]",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On transforme la division en multiplication : [[frac:2/3]] × [[frac:5/4]]",
          "On multiplie : 2 × 5 = 10 et 3 × 4 = 12",
          "Résultat : [[frac:10/12]]",
          "On simplifie : [[frac:10/12]] = [[frac:5/6]]",
        ],
      },

      {
        type: "highlight",
        fr: "Exemple avec simplification avant calcul",
      },

      {
        type: "plain",
        fr: "[[frac:6/10]] ÷ [[frac:3/5]]",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On transforme : [[frac:6/10]] × [[frac:5/3]]",
          "On simplifie avant de calculer : 6 et 3 → 2 et 1, 5 et 10 → 1 et 2",
          "On obtient : [[frac:2/2]] × [[frac:1/1]]",
          "Résultat : 1",
        ],
      },

      {
        type: "highlight",
        fr: "À retenir",
      },

      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "Diviser par une fraction = multiplier par son inverse.",
          "Toujours simplifier si possible avant ou après le calcul.",
        ],
      },
    ],
  },

  exercises: [],
};