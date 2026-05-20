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
      paragraphs: {
        fr: [
          "Les puissances de 10 facilitent l'écriture des grands et petits nombres : 10¹ = 10, 10² = 100, 10³ = 1 000, 10⁴ = 10 000.",
          "Une puissance de 10 s'obtient en plaçant autant de zéros que l'exposant après le 1 : 10⁵ = 100 000.",
          "Les puissances de 10 négatives : 10⁻¹ = 0,1 ; 10⁻² = 0,01 ; 10⁻³ = 0,001.",
          "Notation scientifique : 4 700 000 = 4,7 × 10⁶ ; 0,000 035 = 3,5 × 10⁻⁵.",
        ],
        en: [
          "Powers of 10 simplify writing large and small numbers: 10¹ = 10, 10² = 100, 10³ = 1,000.",
          "A power of 10 is written as 1 followed by as many zeros as the exponent: 10⁵ = 100,000.",
          "Negative powers: 10⁻¹ = 0.1; 10⁻² = 0.01; 10⁻³ = 0.001.",
          "Scientific notation: 4,700,000 = 4.7 × 10⁶; 0.000035 = 3.5 × 10⁻⁵.",
        ],
        ar: [
          "قوى العشرة تسهّل كتابة الأعداد الكبيرة والصغيرة: 10¹ = 10، 10² = 100، 10³ = 1000.",
          "قوة العشرة تُكتب كـ 1 متبوعة بعدد من الأصفار يساوي الأس: 10⁵ = 100000.",
          "الأسس السالبة: 10⁻¹ = 0,1؛ 10⁻² = 0,01.",
          "الصيغة العلمية: 4 700 000 = 4,7 × 10⁶.",
        ],
        fa: [
          "توان‌های 10 نوشتن اعداد بزرگ و کوچک را آسان می‌کنند: 10² = 100، 10³ = 1000.",
          "توان 10 به صورت یک 1 با همان تعداد صفر نوشته می‌شود: 10⁵ = 100000.",
          "توان‌های منفی: 10⁻¹ = 0.1؛ 10⁻² = 0.01.",
          "نمادگذاری علمی: 4,700,000 = 4.7 × 10⁶.",
        ],
        ti: [
          "ሓይሊ 10 ንዓበይቲን ንኣሽቱን ቁጽርታት ቀሊሉ ኣቀማምጥ ዩ: 10² = 100, 10³ = 1000.",
          "ሓይሊ 10 ብ 1 ድሕሪ ብቁጽሪ ናይ ኣስፋፊሐ ዝኾኑ ዜሮታት ዝጸሓፍ ዩ.",
          "ኣሉታዊ ኣስፋፊሓት: 10⁻¹ = 0.1; 10⁻² = 0.01.",
          "ሳይንሳዊ ምልክት: 4 700 000 = 4.7 × 10⁶.",
        ],
        uk: [
          "Степені числа 10 спрощують запис великих і малих чисел: 10² = 100, 10³ = 1 000.",
          "Ступінь 10 — це одиниця з кількістю нулів, що дорівнює показнику: 10⁵ = 100 000.",
          "Від'ємні степені: 10⁻¹ = 0,1; 10⁻² = 0,01.",
          "Науковий запис: 4 700 000 = 4,7 × 10⁶.",
        ],
      },
    },
    exercises: [
      { id: "a8-3-e1", promptFr: "Calcule 10³.", type: "number", acceptable: ["1000"] },
      { id: "a8-3-e2", promptFr: "Écris 100 000 comme puissance de 10.", type: "short_text", acceptable: ["10⁵", "10^5"] },
      { id: "a8-3-e3", promptFr: "Combien de zéros a 10⁷ ?", type: "number", acceptable: ["7"] },
      { id: "a8-3-e4", promptFr: "Écris 4 500 en notation scientifique (coefficient × 10^n, donne n).", type: "number", acceptable: ["3"] },
      { id: "a8-3-e5", promptFr: "10⁻² vaut combien ?", type: "short_text", acceptable: ["0,01", "0.01"] },
    ],
  };
