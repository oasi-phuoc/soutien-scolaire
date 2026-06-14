import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G10_7: SubmoduleTrad = {
  submoduleId: "G10-7",
  title: {
    fr: "Construire un diagramme en secteurs",
    en: "Building a pie chart",
    ar: "إنشاء مخطط دائري",
    fa: "ساخت نمودار دایره‌ای",
    ti: "ናይ ዓውዲ ሰሌዳ ምህናጽ",
    uk: "Побудова кругової діаграми",
  },
  paragraphs: {
    fr: [
          "Étapes : (1) calculer le total ; (2) calculer l'angle de chaque secteur : α = (valeur / total) × 360° ; (3) tracer un cercle ; (4) dessiner les secteurs avec le rapporteur en partant d'un rayon horizontal.",
          "Exemple : 3 catégories : A=10, B=25, C=15. Total=50. Angles : A=72°, B=180°, C=108°. Vérification : 72+180+108=360° ✓.",
          "Chaque secteur est coloré différemment et légendé.",
          "Utilisation préférable quand on veut montrer des parts d'un tout.",
        ],
    en: [
          "Steps: (1) compute total; (2) angle = (value/total)×360°; (3) draw circle; (4) draw sectors with protractor from a horizontal radius.",
          "Example: A=10, B=25, C=15, total=50 → 72°, 180°, 108°.",
          "Each sector: different color + legend.",
          "Best for showing parts of a whole.",
        ],
    ar: [
          "الخطوات: (1) احسب الإجمالي؛ (2) الزاوية = (القيمة/الإجمالي)×360°؛ (3) ارسم دائرة؛ (4) ارسم القطاعات بالمنقلة.",
          "مثال: A=10, B=25, C=15, إجمالي=50 → 72°, 180°, 108°.",
          "كل قطاع لون مختلف + مفتاح.",
          "الأفضل لإظهار أجزاء من كل.",
        ],
    fa: [
          "مراحل: (1) کل را محاسبه کن؛ (2) زاویه = (مقدار/کل)×360°؛ (3) دایره رسم کن؛ (4) با نقاله قطاع‌ها را بکش.",
          "مثال: A=10، B=25، C=15، کل=50 → 72°، 180°، 108°.",
          "هر قطاع رنگ متفاوت + راهنما.",
          "بهترین برای نمایش بخش‌های یک کل.",
        ],
    ti: [
          "ስጉምቲ: (1) ምሉእ ምሕሳብ; (2) ኩርናዕ = (ዋጋ/ምሉእ)×360°; (3) ዓውዲ ምምሃዝ; (4) ናይ ዕዮ ናህሰ ሕርሚ ምምሃዝ.",
          "ምሳሌ: A=10, B=25, C=15, ምሉእ=50 → 72°, 180°, 108°.",
          "ናህሰ ዕዮ ዝተፈለዩ ቀለም + ናይ ምሓዙ ምልክት.",
          "ምቅቃሎ ምርኣይ ዝሓሸ.",
        ],
    uk: [
          "Кроки: (1) підрахувати суму; (2) кут = (значення/сума)×360°; (3) провести коло; (4) транспортиром побудувати сектори.",
          "Приклад: A=10, B=25, C=15, сума=50 → 72°, 180°, 108°.",
          "Кожен сектор — інший колір + легенда.",
          "Найкращий спосіб показати частки цілого.",
        ],
  },
};
