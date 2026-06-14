import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G6_5: SubmoduleTrad = {
  submoduleId: "G6-5",
  title: {
    fr: "Homothétie",
    en: "Dilation (homothety)",
    ar: "التمثيل المتناسب",
    fa: "همتایی (تمدد)",
    ti: "ዓቢ ምኻናን",
    uk: "Гомотетія",
  },
  paragraphs: {
    fr: [
          "Une homothétie de centre O et de rapport k associe à chaque point M le point M' tel que OM' = k × OM (sur la même droite).",
          "Si k > 1 : agrandissement. Si 0 < k < 1 : réduction. Si k < 0 : agrandissement avec retournement.",
          "Propriétés : les angles sont conservés, les longueurs sont multipliées par |k|, les aires par k².",
          "Exemple : homothétie de rapport 2 double toutes les distances au centre. Les figures sont semblables.",
        ],
    en: [
          "A dilation (homothety) with center O and ratio k maps M to M' with OM' = k × OM.",
          "k > 1: enlargement. 0 < k < 1: reduction. k < 0: reversal with scaling.",
          "Properties: angles preserved; lengths scaled by |k|; areas by k².",
          "Example: ratio 2 doubles all distances from center. Resulting figures are similar.",
        ],
    ar: [
          "التمثيل المتناسب بالمركز O ومعامل k يربط M بـ M' حيث OM' = k × OM.",
          "k > 1: تكبير. 0 < k < 1: تصغير. k < 0: قلب مع تحجيم.",
          "الخصائص: الزوايا محفوظة؛ الأطوال تُضرب بـ |k|؛ المساحات بـ k².",
          "مثال: معامل 2 يضاعف جميع المسافات.",
        ],
    fa: [
          "همتایی با مرکز O و نسبت k، M را به M' می‌فرستد که OM' = k × OM.",
          "k > 1: بزرگنمایی. 0 < k < 1: کوچک‌سازی. k < 0: انعکاس با مقیاس‌بندی.",
          "ویژگی‌ها: زوایا حفظ می‌شوند؛ طول‌ها با |k| ضرب می‌شوند؛ مساحت‌ها با k².",
          "مثال: نسبت 2 همه فاصله‌ها از مرکز را دو برابر می‌کند.",
        ],
    ti: [
          "ዓቢ ምኻናን ናይ O ማዕኸን ን k ሕጊ ነፍሲ ወከፍ M ናብ M' OM' = k × OM ዘቕርብ ዩ.",
          "k > 1: ምዕባይ. 0 < k < 1: ምቕናስ. k < 0: ምቕዋም ምስ ምዕባይ.",
          "ንብረታት: ኩርናዓት ዕቃቤ; ርዝሓ ብ|k| ምርባሕ; ሰፊሓ ብ k².",
          "ምሳሌ: ሕጊ 2 ኩሉ ርሕቀት ካብ ማዕኸን ዕጻፍ.",
        ],
    uk: [
          "Гомотетія з центром O і коефіцієнтом k відображає M в M': OM' = k × OM.",
          "k > 1: збільшення. 0 < k < 1: зменшення. k < 0: відображення зі зміною масштабу.",
          "Властивості: кути зберігаються; довжини множаться на |k|; площі на k².",
          "Приклад: k = 2 подвоює всі відстані від центра.",
        ],
  },
  consignes: {
    "g5-5-e1": { fr: "Homothétie de rapport 3 : un segment de 4 cm devient ?", en: "Dilation with scale factor 3: a 4 cm segment becomes?" },
    "g5-5-e2": { fr: "Homothétie de rapport 1/2 : un segment de 8 cm devient ?", en: "Dilation with scale factor 1/2: a 8 cm segment becomes?" },
    "g5-5-e3": { fr: "Homothétie de rapport 2 : une aire de 5 cm² devient ?", en: "Dilation with scale factor 2: an area of 5 cm? becomes?" },
    "g5-5-e4": { fr: "L'homothétie conserve-t-elle les angles ? (oui/non)", en: "Does dilation preserve angles? (yes/no)" },
    "g5-5-e5": { fr: "Un rapport k = 1 laisse la figure identique ? (oui/non)", en: "Does a scale factor k = 1 leave the figure unchanged? (yes/no)" },
  },
};