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
      paragraphs: {
        fr: [
          "Pour calculer une puissance, on multiplie la base par elle-même autant de fois que l'indique l'exposant.",
          "Exemples : 2⁴ = 2 × 2 × 2 × 2 = 16 ; 3³ = 27 ; 5² = 25.",
          "Propriétés des puissances (même base) : aⁿ × aᵐ = aⁿ⁺ᵐ et aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "Exemple : 2³ × 2² = 2⁵ = 32 ; 3⁵ ÷ 3² = 3³ = 27.",
        ],
        en: [
          "To compute a power, multiply the base by itself as many times as the exponent indicates.",
          "Examples: 2⁴ = 2 × 2 × 2 × 2 = 16; 3³ = 27; 5² = 25.",
          "Properties (same base): aⁿ × aᵐ = aⁿ⁺ᵐ and aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "Example: 2³ × 2² = 2⁵ = 32; 3⁵ ÷ 3² = 3³ = 27.",
        ],
        ar: [
          "لحساب أس، نضرب القاعدة في نفسها بعدد مرات يشير إليه الأس.",
          "أمثلة: 2⁴ = 16؛ 3³ = 27؛ 5² = 25.",
          "خصائص (نفس القاعدة): aⁿ × aᵐ = aⁿ⁺ᵐ وaⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "مثال: 2³ × 2² = 2⁵ = 32.",
        ],
        fa: [
          "برای محاسبه توان، پایه را به اندازه نما در خودش ضرب می‌کنیم.",
          "مثال‌ها: 2⁴ = 16؛ 3³ = 27؛ 5² = 25.",
          "خاصیت‌ها (پایه یکسان): aⁿ × aᵐ = aⁿ⁺ᵐ و aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "مثال: 2³ × 2² = 2⁵ = 32.",
        ],
        ti: [
          "ሓይሊ ቁጽሪ ክትሰልፍ ሰረቱ ብናይ ኣስፋፊሐ ቁጽሪ ናብ ናዕቤ ምርባሕ ዩ.",
          "ምሳሌ: 2⁴ = 16; 3³ = 27; 5² = 25.",
          "ንብረታት (ሓደ ሰረት): aⁿ × aᵐ = aⁿ⁺ᵐ ከምኡ aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "ምሳሌ: 2³ × 2² = 2⁵ = 32.",
        ],
        uk: [
          "Для обчислення степеня основу множать на себе стільки разів, скільки вказує показник.",
          "Приклади: 2⁴ = 16; 3³ = 27; 5² = 25.",
          "Властивості (однакова основа): aⁿ × aᵐ = aⁿ⁺ᵐ та aⁿ ÷ aᵐ = aⁿ⁻ᵐ.",
          "Приклад: 2³ × 2² = 2⁵ = 32.",
        ],
      },
    },
    exercises: [
      { id: "a8-2-e1", promptFr: "Calcule 2⁵.", type: "number", acceptable: ["32"] },
      { id: "a8-2-e2", promptFr: "Calcule 4³.", type: "number", acceptable: ["64"] },
      { id: "a8-2-e3", promptFr: "Calcule 6².", type: "number", acceptable: ["36"] },
      { id: "a8-2-e4", promptFr: "2³ × 2⁴ = 2^?", type: "number", acceptable: ["7"] },
      { id: "a8-2-e5", promptFr: "3⁶ ÷ 3² = 3^?", type: "number", acceptable: ["4"] },
    ],
  };
