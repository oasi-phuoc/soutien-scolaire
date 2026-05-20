import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A6_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A6-2",
    submoduleCode: "A6.2",
    theory: {
      title: { fr: "Pourcentage d'un nombre", en: "Percentage of a number", ar: "نسبة مئوية من عدد", fa: "درصدی از یک عدد", ti: "ቁጽሪ ናይ ሚእቲ ክፋል", uk: "Відсоток від числа" },
      paragraphs: {
        fr: [
          "Pour calculer p% d'un nombre N, on multiplie N par p/100 (ou par le décimal équivalent).",
          "Formule : p% de N = N × p/100 = N × (p ÷ 100).",
          "Exemples : 20% de 150 = 150 × 20/100 = 150 × 0,2 = 30. 15% de 80 = 80 × 0,15 = 12.",
        ],
        en: [
          "To calculate p% of a number N, multiply N by p/100 (or by the decimal equivalent).",
          "Formula: p% of N = N × p/100 = N × (p ÷ 100).",
          "Examples: 20% of 150 = 150 × 0.2 = 30. 15% of 80 = 80 × 0.15 = 12.",
        ],
        ar: [
          "لحساب ص% من عدد ن، نضرب ن في ص/100 (أو في المكافئ العشري).",
          "الصيغة: ص% من ن = ن × ص/100.",
          "أمثلة: 20% من 150 = 150 × 0,2 = 30. 15% من 80 = 80 × 0,15 = 12.",
        ],
        fa: [
          "برای محاسبه p٪ از عدد N، عدد N را در p/100 ضرب کنید.",
          "فرمول: p٪ از N = N × p/100.",
          "مثال‌ها: ۲۰٪ از ۱۵۰ = ۱۵۰ × ۰,۲ = ۳۰. ۱۵٪ از ۸۰ = ۸۰ × ۰,۱۵ = ۱۲.",
        ],
        ti: [
          "ናይ ሓደ ቁጽሪ N p% ምሕሳብ N ብ p/100 ምዝርፋፍ ማለት እዩ።",
          "ቅጥዒ: p% ናይ N = N × p/100.",
          "ኣብነት: 20% ናይ 150 = 150 × 0,2 = 30. 15% ናይ 80 = 80 × 0,15 = 12.",
        ],
        uk: [
          "Щоб обчислити p% від числа N, множимо N на p/100.",
          "Формула: p% від N = N × p/100.",
          "Приклади: 20% від 150 = 150 × 0,2 = 30. 15% від 80 = 80 × 0,15 = 12.",
        ],
      },
    },
    exercises: [
      { id: "a6-2-e1", promptFr: "Calculez 20% de 150.", type: "number", acceptable: ["30"] },
      { id: "a6-2-e2", promptFr: "Calculez 15% de 80.", type: "number", acceptable: ["12"] },
      { id: "a6-2-e3", promptFr: "Calculez 25% de 200.", type: "number", acceptable: ["50"] },
      { id: "a6-2-e4", promptFr: "Calculez 10% de 340.", type: "number", acceptable: ["34"] },
      { id: "a6-2-e5", promptFr: "Calculez 5% de 60.", type: "number", acceptable: ["3"] },
    ],
  };
