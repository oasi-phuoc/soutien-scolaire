import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G5_7: SubmoduleTrad = {
  submoduleId: "G5-7",
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
  consignes: {
    "g5-7-e1": { fr: "Deux figures semblables, k = 4. Un côté de 3 cm → côté image = ?", en: "Two similar figures, k = 4. A side of 3 cm ? image side = ?" },
    "g5-7-e2": { fr: "k = 3. Rapport des aires = ?", en: "k = 3. Area ratio = ?" },
    "g5-7-e3": { fr: "k = 2. Périmètre original = 10 cm. Périmètre image = ?", en: "k = 2. Original perimeter = 10 cm. Image perimeter = ?" },
    "g5-7-e4": { fr: "k = 1/3. Un côté de 9 cm → côté image = ?", en: "k = 1/3. A side of 9 cm ? image side = ?" },
    "g5-7-e5": { fr: "k = 2. Aire originale = 8 cm². Aire image = ?", en: "k = 2. Original area = 8 cm². Image area = ?" },
  },
};