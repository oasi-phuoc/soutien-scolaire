import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string) =>
  ({ fr, en, ar, fa, ti, uk });

export const TRAD_G7_6: SubmoduleTrad = {
  submoduleId: "G7-6",
  title: S("Homothétie", "Homothety", "التشابه المركزي", "همسانی", "ሆሞቴቲ", "Гомотетія"),
  blocks: [
    { text: S("Agrandir ou réduire depuis un centre", "Enlarge or reduce from a center", "التكبير أو التصغير من مركز", "بزرگ یا کوچک کردن از یک مرکز", "ካብ ማእከል ምዕባይ ወይ ምንኣስ", "Збільшити або зменшити від центра") },
    { text: S(
      "Une homothétie de centre O et de rapport k associe à M le point M' tel que OM' = |k| × OM.",
      "A homothety of center O and ratio k maps M to M' with OM' = |k| × OM.",
      "التشابه المركزي بمركز O ونسبة k يربط M بـ M' حيث OM' = |k| × OM.",
      "همسانی با مرکز O و نسبت k نقطه M را به M' می‌برد با OM' = |k| × OM.",
      "ሆሞቴቲ ናይ O ማእከልን k ሬሾን M ናብ M' የሰጋግር፣ OM' = |k| × OM።",
      "Гомотетія з центром O і коефіцієнтом k відображає M у M' так, що OM' = |k| × OM.",
    ) },
  ],
  paragraphs: {
    fr: ["Homothétie de centre O et rapport k : longueurs × |k|, aires × k²."],
    en: ["Homothety of center O and ratio k: lengths × |k|, areas × k²."],
  },
  consignes: {
    "g7-6-e1": S("Homothétie de rapport 3 : un segment de 4 cm devient ?", "Homothety ratio 3: a 4 cm segment becomes?", "تشابه بنسبة 3: قطعة 4 سم تصبح؟", "همسانی با نسبت ۳: پاره‌خط ۴ سانتی چند می‌شود؟", "ሬሾ 3 ሆሞቴቲ፡ 4 cm መስመር እንታይ ይኸውን?", "Гомотетія з k=3: відрізок 4 см стає?"),
    "g7-6-e2": S("Homothétie de rapport 1/2 : un segment de 8 cm devient ?", "Homothety ratio 1/2: an 8 cm segment becomes?", "تشابه بنسبة 1/2: قطعة 8 سم تصبح؟", "همسانی با نسبت ۱/۲: پاره‌خط ۸ سانتی؟", "ሬሾ 1/2፡ 8 cm መስመር እንታይ?", "Гомотетія з k=1/2: відрізок 8 см?"),
    "g7-6-e3": S("Homothétie de rapport 2 : une aire de 5 cm² devient ?", "Homothety ratio 2: area 5 cm² becomes?", "تشابه بنسبة 2: مساحة 5 سم² تصبح؟", "همسانی با نسبت ۲: مساحت ۵ سانتی‌مربع؟", "ሬሾ 2፡ ሰፊሕ 5 cm² እንታይ?", "Гомотетія з k=2: площа 5 см²?"),
    "g7-6-e4": S("L'homothétie conserve-t-elle les angles ? (oui/non)", "Does homothety preserve angles? (yes/no)", "هل يحفظ التشابه الزوايا؟ (نعم/لا)", "آیا همسانی زوایا را حفظ می‌کند؟ (بله/خیر)", "ሆሞቴቲ ንኩርናዓት ይሕልዮ ድዩ? (እወ/ኣይፋል)", "Чи зберігає гомотетія кути? (так/ні)"),
    "g7-6-e5": S("Un rapport k = 1 laisse la figure identique ? (oui/non)", "Does ratio k = 1 leave the figure identical? (yes/no)", "هل النسبة k = 1 تترك الشكل كما هو؟ (نعم/لا)", "آیا نسبت k = ۱ شکل را همان می‌گذارد؟ (بله/خیر)", "ሬሾ k = 1 ስእሊ ተመሳሳሊ የብቅዕ ድዩ? (እወ/ኣይፋል)", "Чи залишає k = 1 фігуру незмінною? (так/ні)"),
  },
};
