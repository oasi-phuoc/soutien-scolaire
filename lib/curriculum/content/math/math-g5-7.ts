import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G5_7_LESSON: MathSubmoduleLesson = {
    submoduleId: "G5-7",
    submoduleCode: "G5.7",
    theory: {
      title: {
        fr: "Homothétie et longueurs",
        en: "Dilation and lengths",
        ar: "التمثيل المتناسب والأطوال",
        fa: "همتایی و طول‌ها",
        ti: "ዓቢ ምኻናን ን ርዝሓ",
        uk: "Гомотетія та довжини",
      },
      paragraphs: {
        fr: [
          "Deux figures semblables ont la même forme mais pas nécessairement la même taille. Elles sont reliées par une homothétie.",
          "Coefficient de similitude k : rapport des longueurs correspondantes. k = longueur image / longueur originale.",
          "Rapport des périmètres : k. Rapport des aires : k². Exemple : k = 3 → périmètres × 3, aires × 9.",
          "Application : plans et maquettes (k < 1 pour une réduction, k > 1 pour un agrandissement).",
        ],
        en: [
          "Similar figures have the same shape but not necessarily the same size. They are related by a dilation.",
          "Similarity ratio k = image length / original length.",
          "Perimeter ratio: k. Area ratio: k². Example: k = 3 → perimeters ×3, areas ×9.",
          "Applications: scale drawings (k < 1 for reduction, k > 1 for enlargement).",
        ],
        ar: [
          "الأشكال المتشابهة لها نفس الشكل لكن ليس بالضرورة نفس الحجم.",
          "نسبة التشابه k = الطول الصورة / الطول الأصل.",
          "نسبة المحيطات: k. نسبة المساحات: k².",
          "تطبيقات: مقاييس الرسم (k < 1 للتصغير).",
        ],
        fa: [
          "اشکال متشابه شکل یکسان دارند اما لزوماً اندازه یکسان ندارند.",
          "نسبت تشابه k = طول تصویر / طول اصل.",
          "نسبت محیط‌ها: k. نسبت مساحت‌ها: k².",
          "کاربردها: نقشه‌های مقیاس‌دار.",
        ],
        ti: [
          "ተመሳሰልቲ ቅርጺ ሓደ ቅርጺ ዘለዎ ግን ሓደ ዓቐን ዘይብሎም ዩ.",
          "ናይ ምስምሳል ሕጊ k = ናይ ምስሊ ርዝሓ / ናህሰ ርዝሓ.",
          "ናይ ዙሪያ ሕጊ: k. ናይ ሰፊሓ ሕጊ: k².",
          "ኣሰፋ: ናይ ሸቀልቲ ስዕሊ (k < 1 ምቕናስ).",
        ],
        uk: [
          "Подібні фігури мають однакову форму, але не обов'язково однаковий розмір. Їх пов'язує гомотетія.",
          "Коефіцієнт подібності k = довжина образу / довжина оригіналу.",
          "Відношення периметрів: k. Відношення площ: k².",
          "Застосування: масштабні схеми (k < 1 зменшення).",
        ],
      },
    },
    exercises: [
      { id: "g5-7-e1", promptFr: "Deux figures semblables, k = 4. Un côté de 3 cm → côté image = ?", type: "number", acceptable: ["12"] },
      { id: "g5-7-e2", promptFr: "k = 3. Rapport des aires = ?", type: "number", acceptable: ["9"] },
      { id: "g5-7-e3", promptFr: "k = 2. Périmètre original = 10 cm. Périmètre image = ?", type: "number", acceptable: ["20"] },
      { id: "g5-7-e4", promptFr: "k = 1/3. Un côté de 9 cm → côté image = ?", type: "number", acceptable: ["3"] },
      { id: "g5-7-e5", promptFr: "k = 2. Aire originale = 8 cm². Aire image = ?", type: "number", acceptable: ["32"] },
    ],
  };
