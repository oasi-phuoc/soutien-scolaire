import type { SubmoduleTrad } from "./trad-types";

const S = (fr: string, en: string, ar: string, fa: string, ti: string, uk: string) =>
  ({ fr, en, ar, fa, ti, uk });

export const TRAD_G7_8: SubmoduleTrad = {
  submoduleId: "G7-8",
  title: S("Homothétie et longueurs", "Homothety and lengths", "التشابه والأطوال", "همسانی و طول‌ها", "ሆሞቴቲን ውሓታትን", "Гомотетія і довжини"),
  blocks: [
    { text: S("Figures semblables", "Similar figures", "أشكال متشابهة", "شکل‌های متشابه", "ተመሳሳሊ ስእልታት", "Подібні фігури") },
    { text: S(
      "Deux figures semblables ont la même forme. Coefficient k = longueur image / longueur originale. Aires × k².",
      "Similar figures have the same shape. Ratio k = image length / original length. Areas × k².",
      "الأشكال المتشابهة لها نفس الشكل. النسبة k = طول الصورة / الطول الأصلي. المساحات × k².",
      "شکل‌های متشابه همان شکل را دارند. نسبت k = طول تصویر / طول اصلی. مساحت‌ها × k².",
      "ተመሳሳሊ ስእልታት ተመሳሳሊ ቅርጺ ኣለዎም። ሬሾ k = ናይ ምስሊ ውሓት / ኦሪጅናል። ሰፊሓት × k²።",
      "Подібні фігури мають ту саму форму. Коефіцієнт k = довжина образу / оригіналу. Площі × k².",
    ) },
  ],
  paragraphs: {
    fr: ["Figures semblables : périmètres × k, aires × k²."],
    en: ["Similar figures: perimeters × k, areas × k²."],
  },
  consignes: {
    "g7-8-e1": S("k = 4. Un côté de 3 cm → côté image = ?", "k = 4. A 3 cm side → image side = ?", "k = 4. ضلع 3 سم → ضلع الصورة = ؟", "k = ۴. ضلع ۳ سانتی → ضلع تصویر؟", "k = 4። 3 cm ጎኒ → ናይ ምስሊ = ?", "k = 4. Сторона 3 см → образ = ?"),
    "g7-8-e2": S("k = 3. Rapport des aires = ?", "k = 3. Area ratio = ?", "k = 3. نسبة المساحات = ؟", "k = ۳. نسبت مساحت‌ها؟", "k = 3። ናይ ሰፊሓት ሬሾ = ?", "k = 3. Відношення площ = ?"),
    "g7-8-e3": S("k = 2. Périmètre original = 10 cm. Périmètre image = ?", "k = 2. Original perimeter = 10 cm. Image = ?", "k = 2. المحيط الأصلي = 10 سم. محيط الصورة = ؟", "k = ۲. محیط اصلی = ۱۰ سانتی. محیط تصویر؟", "k = 2። ኦሪጅናል ዙሪያ = 10 cm። ምስሊ = ?", "k = 2. Периметр оригіналу = 10 см. Образ = ?"),
    "g7-8-e4": S("k = 1/3. Un côté de 9 cm → côté image = ?", "k = 1/3. A 9 cm side → image = ?", "k = 1/3. ضلع 9 سم → الصورة = ؟", "k = ۱/۳. ضلع ۹ سانتی → تصویر؟", "k = 1/3። 9 cm ጎኒ → ምስሊ = ?", "k = 1/3. Сторона 9 см → образ = ?"),
    "g7-8-e5": S("k = 2. Aire originale = 8 cm². Aire image = ?", "k = 2. Original area = 8 cm². Image = ?", "k = 2. المساحة الأصلية = 8 سم². مساحة الصورة = ؟", "k = ۲. مساحت اصلی = ۸ سانتی‌مربع. تصویر؟", "k = 2። ኦሪጅናል ሰፊሕ = 8 cm²። ምስሊ = ?", "k = 2. Площа оригіналу = 8 см². Образ = ?"),
  },
};
