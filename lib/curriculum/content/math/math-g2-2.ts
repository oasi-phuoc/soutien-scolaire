import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_2_LESSON: MathSubmoduleLesson = {
  submoduleId: "G2-2",
  submoduleCode: "G2.2",
  theory: {
    title: { fr: "Unités de capacité, de masse et de temps" },
    paragraphs: { fr: [] },
    blocks: [
      { type: "heading", fr: "Unités de capacité (liquides)", black: true },
      {
        type: "plain",
        fr: "Les unités de capacité sont organisées autour du **litre (L)**. Chaque unité est **10 fois** plus grande que la suivante.",
      },
      {
        type: "table",
        headersFr: ["kL", "hL", "daL", "L", "dL", "cL", "mL"],
        accentHeader: true,
        rows: [
          ["1 000 L", "100 L", "10 L", "1 L", "0,1 L", "0,01 L", "0,001 L"],
        ],
        captionFr: "Lien : 1 L = 1 dm³. 1 mL = 1 cm³.",
      },
      {
        type: "rule",
        titleFr: "Règle de conversion — capacité",
        itemsFr: [
          "Vers la droite → × 10 à chaque rang",
          "Vers la gauche → ÷ 10 à chaque rang",
          "Ex. 3,5 L = 35 dL = 350 cL = 3 500 mL",
        ],
      },
      {
        type: "example",
        fr: "2 L = 200 cL    |    500 mL = 0,5 L    |    1,5 hL = 150 L",
      },

      { type: "heading", fr: "Unités de masse", black: true },
      {
        type: "plain",
        fr: "Les unités de masse sont organisées autour du **gramme (g)**. En pratique, on utilise surtout la tonne (t), le kilogramme (kg) et le gramme (g).",
      },
      {
        type: "table",
        headersFr: ["t", "q", "kg", "hg", "dag", "g", "dg", "cg", "mg"],
        accentHeader: true,
        rows: [
          ["1 000 000 g", "100 000 g", "1 000 g", "100 g", "10 g", "1 g", "0,1 g", "0,01 g", "0,001 g"],
        ],
        captionFr: "t = tonne, q = quintal, kg = kilogramme, g = gramme, mg = milligramme.",
      },
      {
        type: "rule",
        titleFr: "Règle de conversion — masse",
        itemsFr: [
          "1 t = 1 000 kg = 1 000 000 g",
          "1 kg = 1 000 g",
          "Vers la droite → × 10. Vers la gauche → ÷ 10.",
          "Ex. 2,5 kg = 2 500 g    |    750 g = 0,75 kg",
        ],
      },
      {
        type: "example",
        fr: "3 t = 3 000 kg    |    4,2 kg = 4 200 g    |    500 mg = 0,5 g",
      },

      { type: "heading", fr: "Unités de temps", black: true },
      {
        type: "plain",
        fr: "Contrairement aux autres unités, le temps **ne se divise pas en 10** mais en 60 (minutes/secondes) et 24 (heures/jours).",
      },
      {
        type: "table",
        headersFr: ["siècle", "décennie", "an", "mois", "semaine", "jour (j)", "heure (h)", "minute (min)", "seconde (s)"],
        accentHeader: true,
        rows: [
          ["100 ans", "10 ans", "12 mois", "4 sem.", "7 jours", "24 h", "60 min", "60 s", "—"],
        ],
      },
      {
        type: "rule",
        titleFr: "Conversions clés — temps",
        itemsFr: [
          "1 h = 60 min = 3 600 s",
          "1 min = 60 s",
          "1 jour = 24 h = 1 440 min",
          "1 an = 365 jours (366 les années bissextiles)",
        ],
      },
      {
        type: "example",
        fr: "2 h 30 min = 150 min = 9 000 s    |    3 600 s = 60 min = 1 h",
      },
      {
        type: "note",
        fr: "Attention : on ne peut pas convertir les heures comme les autres unités (pas de virgule). On écrit 1 h 30 min, et non 1,30 h.",
      },
    ],
  },
  exercises: [
    {
      id: "g2-2-ex1",
      promptFr: "Convertis : 2 L = _____ mL",
      type: "number",
      acceptable: ["2000"],
      hintFr: "1 L = 1 000 mL → 2 × 1 000 = 2 000",
    },
    {
      id: "g2-2-ex2",
      promptFr: "Convertis : 3,5 kg = _____ g",
      type: "number",
      acceptable: ["3500"],
      hintFr: "1 kg = 1 000 g → 3,5 × 1 000 = 3 500",
    },
    {
      id: "g2-2-ex3",
      promptFr: "Convertis : 2 h = _____ min",
      type: "number",
      acceptable: ["120"],
      hintFr: "1 h = 60 min → 2 × 60 = 120",
    },
    {
      id: "g2-2-ex4",
      promptFr: "Convertis : 500 mL = _____ L",
      type: "short_text",
      acceptable: ["0.5", "0,5"],
      hintFr: "1 000 mL = 1 L → 500 ÷ 1 000 = 0,5",
    },
    {
      id: "g2-2-ex5",
      promptFr: "Convertis : 1 min 30 s = _____ s",
      type: "number",
      acceptable: ["90"],
      hintFr: "1 min = 60 s → 60 + 30 = 90 s",
    },
  ],
  exercisePool: [
    {
      id: "g2-2-pool1",
      promptFr: "5 L = _____ cL",
      type: "number",
      acceptable: ["500"],
    },
    {
      id: "g2-2-pool2",
      promptFr: "250 cL = _____ L",
      type: "short_text",
      acceptable: ["2.5", "2,5"],
    },
    {
      id: "g2-2-pool3",
      promptFr: "4 kg = _____ g",
      type: "number",
      acceptable: ["4000"],
    },
    {
      id: "g2-2-pool4",
      promptFr: "2 500 g = _____ kg",
      type: "short_text",
      acceptable: ["2.5", "2,5"],
    },
    {
      id: "g2-2-pool5",
      promptFr: "3 h = _____ min",
      type: "number",
      acceptable: ["180"],
    },
    {
      id: "g2-2-pool6",
      promptFr: "90 min = _____ h _____ min (écrire les heures)",
      type: "number",
      acceptable: ["1"],
    },
    {
      id: "g2-2-pool7",
      promptFr: "1 t = _____ kg",
      type: "number",
      acceptable: ["1000"],
    },
    {
      id: "g2-2-pool8",
      promptFr: "3 600 s = _____ h",
      type: "number",
      acceptable: ["1"],
    },
  ],
  poolSize: 5,
};
