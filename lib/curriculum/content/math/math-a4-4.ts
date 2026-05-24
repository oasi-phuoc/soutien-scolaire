import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A4-4",
    submoduleCode: "A4.4",
    theory: {
      title: { fr: "Addition et soustraction", en: "Addition and subtraction", ar: "الجمع والطرح", fa: "جمع و تفریق", ti: "መደመር እና መቀነስ", uk: "Додавання та віднімання" },
      paragraphs: {
        fr: [
          "Additionner ou soustraire des fractions consiste à calculer leur somme ou leur différence.",
        ],
      },

      blocks: [
      { type: "plain", fr: "Additionner ou soustraire des fractions consiste à calculer leur somme ou leur différence." },

      { type: "heading", fr: "Même dénominateur", black: true },
      { type: "plain", fr: "Pour additionner ou soustraire des fractions qui ont le même dénominateur"},
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On additionne ou soustrait les numérateurs.",
          "Et on garde le même dénominateur.",
        ],
      },
      
      {
          type: "highlight",
          fr: "Exemple",
        },

      { type: "plain", fr: "[[frac:2/7]] + [[frac:3/7]] = [[frac:5/7]]." },
      { type: "plain", fr: "[[frac:6/11]] - [[frac:4/11]] = [[frac:2/11]]." },

      { type: "heading", fr: "Dénominateur différent", black: true },
      { type: "plain", fr: "Pour additionner ou soustraire des fractions qui ont des dénominateurs différents"},
      
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On met les fractions au même dénominateur (PPMC).",
          "On multiplie le numérateur et le dénominateur de chaque fraction par le dénominateur de l’autre fraction.",
          "On additionne ou soustrait les numérateurs.",
          "On simplifie la fraction si possible.",
        ],
      },

      {
          type: "highlight",
          fr: "Exemple",
        },

      { type: "plain", fr: "[[frac:9/3]] + [[frac:6/4]]" },
      {
        type: "section",
        labelFr: "",
        itemsFr: [
          "On met au même dénominateur : [[frac:9/3]] = [[frac:36/12]] et [[frac:6/4]] = [[frac:18/12]]",
          "On additionne les numérateurs : [[frac:36/12]] + [[frac:18/12]] = [[frac:54/12]]",
          "On simplifie la fraction : [[frac:54/12]] = [[frac:9/2]].",
        ],
      },
      ],
    },
    exercises: [
    ],
  };
