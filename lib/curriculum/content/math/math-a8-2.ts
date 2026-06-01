import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-2",
    submoduleCode: "A8.2",
    theory: {
      title: {
        fr: "Calcul de puissances",
        en: "Computing powers",
        ar: "حساب الأس",
        fa: "محاسبه توان",
        ti: "ኣሰላልፋ ሓይሊ",
        uk: "Обчислення степенів",
      },
      paragraphs: { fr: [] },
      blocks: [
        {
          type: "heading",
          fr: "Comment calculer une puissance",
          black: true,
        },
        {
          type: "plain",
          fr: "Pour calculer une puissance, on multiplie la base par elle-même autant de fois que l'indique l'exposant.",
        },
        {
          type: "table",
          headersFr: ["Puissance", "Développement", "Résultat"],
          accentHeader: true,
          rows: [
            ["2⁴", "2 × 2 × 2 × 2", "16"],
            ["3³", "3 × 3 × 3", "27"],
            ["5²", "5 × 5", "25"],
            ["10³", "10 × 10 × 10", "1 000"],
          ],
        },
        {
          type: "heading",
          fr: "Propriétés des puissances (même base)",
          black: true,
        },
        {
          type: "rule",
          titleFr: "Règles de calcul",
          itemsFr: [
            "aⁿ × aᵐ = aⁿ⁺ᵐ  (on **additionne** les exposants)",
            "aⁿ ÷ aᵐ = aⁿ⁻ᵐ  (on **soustrait** les exposants)",
          ],
        },
        {
          type: "highlight",
          fr: "Exemples d'application",
        },
        {
          type: "section",
          labelFr: "",
          itemsFr: [
            "2³ × 2² = 2³⁺² = 2⁵ = 32",
            "3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27",
            "5⁴ × 5¹ = 5⁵ = 3 125",
          ],
        },
        {
          type: "note",
          fr: "Ces règles ne s'appliquent que lorsque les bases sont identiques. On ne peut pas simplifier 2³ × 3² directement avec ces règles.",
        },
      ],
    },
    exercises: [],
    exercisePool: [
      { id: "a8-2-ep01", promptFr: "2² × 2³ = ?", type: "number", acceptable: ["32"] },
      { id: "a8-2-ep02", promptFr: "3² × 3² = ?", type: "number", acceptable: ["81"] },
      { id: "a8-2-ep03", promptFr: "2⁵ ÷ 2³ = ?", type: "number", acceptable: ["4"] },
      { id: "a8-2-ep04", promptFr: "4⁴ ÷ 4² = ?", type: "number", acceptable: ["16"] },
      { id: "a8-2-ep05", promptFr: "(2³)² = ?", type: "number", acceptable: ["64"] },
      { id: "a8-2-ep06", promptFr: "(3²)² = ?", type: "number", acceptable: ["81"] },
      { id: "a8-2-ep07", promptFr: "2³ × 2⁴ = ?", type: "number", acceptable: ["128"] },
      { id: "a8-2-ep08", promptFr: "5³ ÷ 5² = ?", type: "number", acceptable: ["5"] },
      { id: "a8-2-ep09", promptFr: "4² × 4 = ?", type: "number", acceptable: ["64"] },
      { id: "a8-2-ep10", promptFr: "3³ × 3² = ?", type: "number", acceptable: ["243"] },
    ],
    poolSize: 5,
  };
