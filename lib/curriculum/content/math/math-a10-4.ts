import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A10_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A10-4",
    submoduleCode: "A10.4",
    theory: {
      title: {
        fr: "Équations avec parenthèses",
        en: "Equations with parentheses",
        ar: "معادلات بالأقواس",
        fa: "معادلات با پرانتز",
        ti: "ምዕርርያ ምስ ቅርሕ",
        uk: "Рівняння з дужками",
      },
      paragraphs: {
        fr: [
          "Quand une équation contient des parenthèses, on commence par les développer, puis on réduit, puis on résout.",
          "Exemple : 3(2x + 1) = 21 → 6x + 3 = 21 → 6x = 18 → x = 3.",
          "Exemple plus complexe : 2(x + 3) − (x − 1) = 8 → 2x + 6 − x + 1 = 8 → x + 7 = 8 → x = 1.",
          "Attention au signe − devant une parenthèse : −(x − 5) = −x + 5.",
        ],
        en: [
          "When an equation contains parentheses, first expand them, then simplify, then solve.",
          "Example: 3(2x + 1) = 21 → 6x + 3 = 21 → 6x = 18 → x = 3.",
          "More complex: 2(x + 3) − (x − 1) = 8 → 2x + 6 − x + 1 = 8 → x = 1.",
          "Caution: −(x − 5) = −x + 5.",
        ],
        ar: [
          "عندما تحتوي المعادلة على أقواس، نوسعها أولاً ثم نبسط ثم نحل.",
          "مثال: 3(2x + 1) = 21 → 6x + 3 = 21 → x = 3.",
          "أكثر تعقيداً: 2(x + 3) − (x − 1) = 8 → x + 7 = 8 → x = 1.",
          "تنبه: −(x − 5) = −x + 5.",
        ],
        fa: [
          "وقتی معادله‌ای حاوی پرانتز است، ابتدا توسعه دهید، سپس ساده کنید، سپس حل کنید.",
          "مثال: 3(2x + 1) = 21 → 6x + 3 = 21 → x = 3.",
          "پیچیده‌تر: 2(x + 3) − (x − 1) = 8 → x + 7 = 8 → x = 1.",
          "توجه: −(x − 5) = −x + 5.",
        ],
        ti: [
          "ምዕርርያ ቅርሕ ምስ ዘሎ ቅድም ምስፋሕ ድሕሪ ምቅናስ ድሕሪ ምፍታሕ.",
          "ምሳሌ: 3(2x + 1) = 21 → 6x + 3 = 21 → x = 3.",
          "ዝኸበደ: 2(x + 3) − (x − 1) = 8 → x + 7 = 8 → x = 1.",
          "ጥንቃቐ: −(x − 5) = −x + 5.",
        ],
        uk: [
          "Якщо рівняння містить дужки, спочатку розкрити їх, потім звести подібні, потім розв'язати.",
          "Приклад: 3(2x + 1) = 21 → 6x + 3 = 21 → x = 3.",
          "Складніший: 2(x + 3) − (x − 1) = 8 → x + 7 = 8 → x = 1.",
          "Увага: −(x − 5) = −x + 5.",
        ],
      },
    },
    exercises: [
      { id: "a10-4-e1", promptFr: "Résous 2(x + 3) = 14.", type: "number", acceptable: ["4"] },
      { id: "a10-4-e2", promptFr: "Résous 3(2x − 1) = 15.", type: "number", acceptable: ["3"] },
      { id: "a10-4-e3", promptFr: "Résous 4(x + 2) − 3 = 21.", type: "number", acceptable: ["4"] },
      { id: "a10-4-e4", promptFr: "Résous 2(x + 5) − (x + 3) = 9.", type: "number", acceptable: ["2"] },
      { id: "a10-4-e5", promptFr: "Développe −(2x − 4) puis résous −(2x − 4) = 6.", type: "number", acceptable: ["-1", "−1"] },
    ],
  };
