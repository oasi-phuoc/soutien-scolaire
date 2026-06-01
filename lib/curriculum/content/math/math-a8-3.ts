import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-3",
    submoduleCode: "A8.3",
    theory: {
      title: {
        fr: "Puissances de 10",
        en: "Powers of 10",
        ar: "قوى العشرة",
        fa: "توان‌های 10",
        ti: "ሓይሊ 10",
        uk: "Степені числа 10",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Les puissances de 10",
          black: true,
        },
        {
          type: "plain",
          fr: "Les puissances de 10 facilitent l'écriture des grands nombres. Une puissance de 10 s'obtient en plaçant autant de zéros que l'exposant après le chiffre 1.",
        },
        {
          type: "table",
          headersFr: ["Puissance", "Valeur", "Nombre de zéros"],
          accentHeader: true,
          rows: [
            ["10¹", "10", "1"],
            ["10²", "100", "2"],
            ["10³", "1 000", "3"],
            ["10⁴", "10 000", "4"],
            ["10⁵", "100 000", "5"],
            ["10⁶", "1 000 000", "6"],
          ],
        },
        {
          type: "heading",
          fr: "Puissances de 10 négatives",
          black: true,
        },
        {
          type: "plain",
          fr: "Les puissances négatives de 10 donnent des nombres décimaux (inférieurs à 1).",
        },
        {
          type: "table",
          headersFr: ["Puissance", "Valeur", "Lecture"],
          accentHeader: true,
          rows: [
            ["10⁻¹", "0,1", "un dixième"],
            ["10⁻²", "0,01", "un centième"],
            ["10⁻³", "0,001", "un millième"],
          ],
        },
        {
          type: "heading",
          fr: "Notation scientifique",
          black: true,
        },
        {
          type: "plain",
          fr: "La notation scientifique s'écrit sous la forme : a × 10ⁿ, où 1 ≤ a < 10. Elle permet d'exprimer très grands et très petits nombres de façon compacte.",
        },
        {
          type: "section",
          labelFr: "Exemples",
          itemsFr: [
            "4 700 000 = 4,7 × 10⁶",
            "0,000 035 = 3,5 × 10⁻⁵",
            "300 000 = 3 × 10⁵",
          ],
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a8-3-ep01", promptFr: "10² = ?", type: "number", acceptable: ["100"] },
      { id: "a8-3-ep02", promptFr: "10³ = ?", type: "number", acceptable: ["1000"] },
      { id: "a8-3-ep03", promptFr: "10⁴ = ?", type: "number", acceptable: ["10000"] },
      { id: "a8-3-ep04", promptFr: "10⁻¹ = ?", type: "number", acceptable: ["0.1"] },
      { id: "a8-3-ep05", promptFr: "10⁻² = ?", type: "number", acceptable: ["0.01"] },
      { id: "a8-3-ep06", promptFr: "3 × 10² = ?", type: "number", acceptable: ["300"] },
      { id: "a8-3-ep07", promptFr: "2 × 10³ = ?", type: "number", acceptable: ["2000"] },
      { id: "a8-3-ep08", promptFr: "5 × 10⁴ = ?", type: "number", acceptable: ["50000"] },
      { id: "a8-3-ep09", promptFr: "7 × 10¹ = ?", type: "number", acceptable: ["70"] },
      { id: "a8-3-ep10", promptFr: "4 × 10² = ?", type: "number", acceptable: ["400"] },
    ],
    poolSize: 5,
  };
