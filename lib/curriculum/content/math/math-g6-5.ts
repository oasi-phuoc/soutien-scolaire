import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G6-5",
    submoduleCode: "G6.5",
    theory: {
      title: {
        fr: "Agrandir et réduire",
        en: "Enlarging and reducing",
        ar: "التكبير والتصغير",
        fa: "بزرگ و کوچک کردن",
        ti: "ምዕባይ ን ምቕናስ",
        uk: "Збільшення та зменшення",
      },
      paragraphs: {
        fr: [
          "Agrandir une figure : multiplier toutes ses dimensions par un facteur k > 1. Réduire : multiplier par 0 < k < 1.",
          "Les angles sont conservés. Les longueurs sont multipliées par k. Les aires sont multipliées par k².",
          "Exemple : agrandir une photo 10 cm × 15 cm avec k = 2 → photo 20 cm × 30 cm. Aire : 150 cm² → 600 cm² (× 4 = k²).",
          "En pratique : photocopieuse (%, ex. 150% = agrandir × 1,5 ; 75% = réduire × 0,75).",
        ],
        en: [
          "Enlarging: multiply all dimensions by k > 1. Reducing: multiply by 0 < k < 1.",
          "Angles preserved. Lengths ×k. Areas ×k².",
          "Example: 10×15 cm photo with k=2 → 20×30 cm. Area: 150 → 600 cm² (×4).",
          "Photocopier: 150% = ×1.5 (enlarge); 75% = ×0.75 (reduce).",
        ],
        ar: [
          "التكبير: ضرب جميع الأبعاد بـ k > 1. التصغير: ضرب بـ 0 < k < 1.",
          "الزوايا محفوظة. الأطوال × k. المساحات × k².",
          "مثال: صورة 10×15 سم مع k=2 → 20×30 سم.",
          "آلة النسخ: 150% تكبير؛ 75% تصغير.",
        ],
        fa: [
          "بزرگ‌سازی: همه ابعاد را در k > 1 ضرب کن. کوچک‌سازی: در 0 < k < 1.",
          "زوایا حفظ می‌شوند. طول‌ها ×k. مساحت‌ها ×k².",
          "مثال: عکس 10×15 سانتیمتر با k=2 → 20×30 سانتیمتر.",
          "کپی‌ساز: 150% بزرگ‌سازی؛ 75% کوچک‌سازی.",
        ],
        ti: [
          "ምዕባይ: ኩሉ ዓቐን ብ k > 1 ምርባሕ. ምቕናስ: ብ 0 < k < 1 ምርባሕ.",
          "ኩርናዓት ዕቃቤ. ርዝሓ × k. ሰፊሓ × k².",
          "ምሳሌ: ስዕሊ 10×15 ሰም ምስ k=2 → 20×30 ሰም.",
          "ናይ ፎቶ-ኮፒ ሜሽን: 150% ምዕባይ; 75% ምቕናስ.",
        ],
        uk: [
          "Збільшення: усі розміри × k (k > 1). Зменшення: × k (0 < k < 1).",
          "Кути зберігаються. Довжини ×k. Площі ×k².",
          "Приклад: фото 10×15 см, k=2 → 20×30 см. Площа: 150 → 600 см² (×4).",
          "Ксерокс: 150% = збільшення ×1,5; 75% = зменшення ×0,75.",
        ],
      },
    },
    exercises: [
      { id: "g6-5-e1", promptFr: "k = 3. Côté 4 cm → côté image = ?", type: "number", acceptable: ["12"] },
      { id: "g6-5-e2", promptFr: "k = 0,5. Côté 10 cm → côté image = ?", type: "number", acceptable: ["5"] },
      { id: "g6-5-e3", promptFr: "k = 2. Aire = 9 cm² → aire image = ?", type: "number", acceptable: ["36"] },
      { id: "g6-5-e4", promptFr: "Photocopie à 200%. k = ?", type: "number", acceptable: ["2"] },
      { id: "g6-5-e5", promptFr: "k = 4. Les angles sont-ils conservés ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
