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
    exercisePool: [],
    poolSize: 0,
  };
