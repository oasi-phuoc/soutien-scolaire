import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G3_4: SubmoduleTrad = {
  submoduleId: "G3-4",
  title: {
    fr: "Aire du parallélogramme",
    en: "Area of a parallelogram",
    ar: "مساحة متوازي الأضلاع",
    fa: "مساحت متوازی‌الاضلاع",
    ti: "ናይ ፓራሌሎግራም ሰፊሓ",
    uk: "Площа паралелограма",
  },
  paragraphs: {
    fr: [
          "Formule : A = base × hauteur.",
          "La hauteur est la distance perpendiculaire entre deux côtés parallèles (pas la longueur du côté oblique).",
          "Exemple : parallélogramme de base 10 cm et hauteur 4 cm → A = 10 × 4 = 40 cm².",
          "Astuce : le parallélogramme peut être transformé en rectangle de même base et hauteur (en découpant un triangle et le déplaçant).",
        ],
    en: [
          "Formula: A = base × height.",
          "Height is the perpendicular distance between the parallel sides (not the slant side).",
          "Example: base 10 cm, height 4 cm → A = 40 cm².",
          "Tip: a parallelogram can be rearranged into a rectangle with the same base and height.",
        ],
    ar: [
          "الصيغة: A = القاعدة × الارتفاع.",
          "الارتفاع المسافة العمودية بين الضلعين المتوازيين.",
          "مثال: قاعدة 10 سم، ارتفاع 4 سم → A = 40 سم².",
          "يمكن تحويل متوازي الأضلاع إلى مستطيل.",
        ],
    fa: [
          "فرمول: A = قاعده × ارتفاع.",
          "ارتفاع فاصله عمودی بین اضلاع موازی است (نه طول ضلع مایل).",
          "مثال: قاعده 10 سانتیمتر، ارتفاع 4 سانتیمتر → A = 40 سانتیمتر².",
          "متوازی‌الاضلاع به مستطیل با قاعده و ارتفاع یکسان تبدیل می‌شود.",
        ],
    ti: [
          "ቅጥዒ: A = ሰረት × ቁመት.",
          "ቁመት ካብ ፓራሌሎ ጎቦ ናብ ቁምብዛ ቀጥታ ርሕቀት ዩ.",
          "ምሳሌ: ሰረት 10 ሰም, ቁመት 4 ሰም → A = 40 ሰም².",
          "ፓራሌሎግራም ናብ ካሬ-ሓለቃ ናህሰ ሰረት ን ቁመት ምቕያሩ ዝከኣሉ ዩ.",
        ],
    uk: [
          "Формула: A = основа × висота.",
          "Висота — перпендикулярна відстань між паралельними сторонами.",
          "Приклад: основа 10 см, висота 4 см → A = 40 см².",
          "Паралелограм можна перетворити на прямокутник із тією ж основою і висотою.",
        ],
  },
  consignes: {
    "g3-4-e1": { fr: "Aire d'un parallélogramme : base 7 cm, hauteur 4 cm.", en: "Area of a parallelogram: base 7 cm, height 4 cm." },
    "g3-4-e2": { fr: "Aire d'un parallélogramme : base 11 cm, hauteur 5 cm.", en: "Area of a parallelogram: base 11 cm, height 5 cm." },
    "g3-4-e3": { fr: "Parallélogramme d'aire 48 cm² et base 8 cm. Hauteur = ?", en: "Parallelogram with area 48 cm? and base 8 cm. Height = ?" },
    "g3-4-e4": { fr: "Un rectangle est-il un cas particulier de parallélogramme ? (oui/non)", en: "Is a rectangle a special case of a parallelogram? (yes/no)" },
    "g3-4-e5": { fr: "Aire d'un parallélogramme : base 9 cm, hauteur 6 cm.", en: "Area of a parallelogram: base 9 cm, height 6 cm." },
  },
};