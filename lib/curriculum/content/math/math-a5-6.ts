import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A5_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A5-6",
    submoduleCode: "A5.6",
    theory: {
      title: { fr: "Division de décimaux", en: "Division of decimals", ar: "قسمة الأعداد العشرية", fa: "تقسیم اعشار", ti: "ክፍፍል ቁጽሪ ቪርጉላ", uk: "Ділення десяткових" },
      blocks: [
        { type: "heading", fr: "Vocabulaire", black: true },
        {
          type: "table",
          headersFr: ["Terme", "Rôle", "Exemple"],
          accentHeader: true,
          rows: [
            ["dividende", "le nombre qu'on divise",          "82,5"],
            ["diviseur",  "le nombre par lequel on divise",  "6"],
            ["quotient",  "le résultat",                     "13,75"],
          ],
        },
        { type: "note", fr: "On ne peut PAS échanger dividende et diviseur : 82,5 ÷ 6 ≠ 6 ÷ 82,5" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Division avec décimale", black: true },
        { type: "highlight", fr: "Méthode" },
        {
          type: "section", labelFr: "", itemsFr: [
            "1. Multiplier le dividende pour supprimer la virgule (× 10, × 100…).",
            "2. Diviser comme des entiers.",
            "3. Diviser le quotient par le même facteur → replacer la virgule.",
          ],
        },
        {
          type: "div_step_cards",
          dividend: 8250,
          divisor: 6,
          steps: [
            {
              numFr: "1. On pose les nombres",
              textsFr: [
                "82,50 ÷ 6 → on enlève la virgule → 8 250 ÷ 6.",
                "On replacera la virgule à la fin (÷ 100 car × 100).",
              ],
              stepsComplete: 0,
            },
            {
              numFr: "2. Milliers : 8 ÷ 6 = 1, reste 2",
              textsFr: [
                "8 ÷ 6 = 1 → on écrit 1 dans le quotient.",
                "1 × 6 = 6 → 8 − 6 = 2.",
              ],
              stepsComplete: 1,
            },
            {
              numFr: "3. Centaines : 22 ÷ 6 = 3, reste 4",
              textsFr: [
                "On abaisse le 2 : reste 2 → 22.",
                "22 ÷ 6 = 3 → on écrit 3.",
                "3 × 6 = 18 → 22 − 18 = 4.",
              ],
              stepsComplete: 2,
            },
            {
              numFr: "4. Dizaines : 45 ÷ 6 = 7, reste 3",
              textsFr: [
                "On abaisse le 5 : reste 4 → 45.",
                "45 ÷ 6 = 7 → on écrit 7.",
                "7 × 6 = 42 → 45 − 42 = 3.",
              ],
              stepsComplete: 3,
            },
            {
              numFr: "5. Unités : 30 ÷ 6 = 5 — résultat",
              textsFr: [
                "On abaisse le 0 : reste 3 → 30.",
                "30 ÷ 6 = 5 → on écrit 5.",
                "5 × 6 = 30 → 30 − 30 = 0.",
                "8 250 ÷ 6 = 1 375",
                "Replacer la virgule (÷ 100) : 1 375 → 13,75",
              ],
              stepsComplete: 4,
            },
          ],
        },
        { type: "note", fr: "82,5 ÷ 6 = 13,75" },
        { type: "plain", fr: "" },
        { type: "heading", fr: "Vérification", black: true },
        {
          type: "section", labelFr: "", itemsFr: [
            "quotient × diviseur = dividende",
            "13,75 × 6 = 82,5 ✓",
          ],
        },
      ],
      paragraphs: { fr: [] },
    },
    exercises: [],
    exercisePool: [],
    poolSize: 5,
  };
