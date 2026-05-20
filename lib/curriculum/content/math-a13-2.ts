import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A13_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A13-2",
    submoduleCode: "A13.2",
    theory: {
      title: {
        fr: "Tableau de valeurs",
        en: "Table of values",
        ar: "جدول القيم",
        fa: "جدول مقادیر",
        ti: "ሰሌዳ ዋጋ",
        uk: "Таблиця значень",
      },
      paragraphs: {
        fr: [
          "Un tableau de valeurs liste plusieurs couples (x, f(x)). On choisit des valeurs régulières de x et on calcule f(x) pour chacune.",
          "Exemple : f(x) = 2x + 1. Pour x = −2, −1, 0, 1, 2 → f(x) = −3, −1, 1, 3, 5.",
          "Le tableau permet de tracer le graphique point par point. On place chaque point (x, f(x)) dans le repère cartésien.",
          "Conseil : choisir des valeurs entières de x et des valeurs symétriques autour de 0 pour voir la tendance globale.",
        ],
        en: [
          "A table of values lists several pairs (x, f(x)). Choose regular x-values and compute f(x) for each.",
          "Example: f(x) = 2x + 1. For x = −2, −1, 0, 1, 2 → f(x) = −3, −1, 1, 3, 5.",
          "The table enables plotting the graph point by point.",
          "Tip: choose integer x-values symmetric around 0 to see the overall trend.",
        ],
        ar: [
          "جدول القيم يسرد أزواجاً متعددة (x, f(x)). اختر قيم x منتظمة واحسب f(x) لكل منها.",
          "مثال: f(x) = 2x + 1. لـ x = −2,−1,0,1,2 → f(x) = −3,−1,1,3,5.",
          "الجدول يساعد على رسم الدالة نقطة بنقطة.",
          "نصيحة: اختر قيم صحيحة متماثلة حول 0.",
        ],
        fa: [
          "جدول مقادیر جفت‌های متعدد (x, f(x)) را فهرست می‌کند. مقادیر منظم x را انتخاب کن و f(x) را محاسبه کن.",
          "مثال: f(x) = 2x + 1. برای x = −2,−1,0,1,2 → f(x) = −3,−1,1,3,5.",
          "جدول کمک می‌کند نمودار را نقطه‌به‌نقطه رسم کنی.",
          "پیشنهاد: مقادیر صحیح متقارن حول 0 انتخاب کن.",
        ],
        ti: [
          "ናይ ዋጋ ሰሌዳ ብዙሕ ጥምረት (x, f(x)) ዝዘርዝር ዩ. ናይ x ዋጋ ምምራጽ f(x) ምሕሳብ.",
          "ምሳሌ: f(x) = 2x + 1. ምስ x = −2,−1,0,1,2 → f(x) = −3,−1,1,3,5.",
          "ሰሌዳ ስዕሊ ነጥቢ ናብ ነጥቢ ምስሳልን ይሕግዝ.",
          "ምኽሪ: ቋሚ x ዋጋ ዜሮ ዙሪያ ምምራጽ.",
        ],
        uk: [
          "Таблиця значень містить декілька пар (x, f(x)). Вибрати рівномірні значення x і обчислити f(x) для кожного.",
          "Приклад: f(x) = 2x + 1. Для x = −2,−1,0,1,2 → f(x) = −3,−1,1,3,5.",
          "Таблиця дозволяє побудувати графік точка за точкою.",
          "Порада: вибирати цілі симетричні значення навколо 0.",
        ],
      },
    },
    exercises: [
      { id: "a13-2-e1", promptFr: "Pour f(x) = 3x − 2, calcule f(0).", type: "number", acceptable: ["-2", "−2"] },
      { id: "a13-2-e2", promptFr: "Pour f(x) = 3x − 2, calcule f(2).", type: "number", acceptable: ["4"] },
      { id: "a13-2-e3", promptFr: "Pour f(x) = x² − 1, calcule f(−3).", type: "number", acceptable: ["8"] },
      { id: "a13-2-e4", promptFr: "Pour f(x) = 4 − x, quelle valeur de x donne f(x) = 0 ?", type: "number", acceptable: ["4"] },
      { id: "a13-2-e5", promptFr: "Dans une table pour f(x) = 2x, si x = 5 alors f(x) = ?", type: "number", acceptable: ["10"] },
    ],
  };
