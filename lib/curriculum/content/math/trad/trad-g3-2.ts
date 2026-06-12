import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G3_2: SubmoduleTrad = {
  submoduleId: "G3-2",
  title: {
    fr: "Aire du rectangle",
    en: "Area of a rectangle",
    ar: "مساحة المستطيل",
    fa: "مساحت مستطیل",
    ti: "ናይ ካሬ-ሓለቃ ሰፊሓ",
    uk: "Площа прямокутника",
  },
  paragraphs: {
    fr: [
          "Formule : A = L × l, où L est la longueur et l la largeur.",
          "Exemple : rectangle 8 cm × 5 cm → A = 8 × 5 = 40 cm².",
          "Si on connaît l'aire et la longueur : l = A ÷ L.",
          "Unités : attention aux conversions. 1 m² = 10 000 cm² ; 1 km² = 1 000 000 m².",
        ],
    en: [
          "Formula: A = L × w.",
          "Example: 8 cm × 5 cm → A = 40 cm².",
          "Finding width: w = A ÷ L.",
          "Units: 1 m² = 10,000 cm².",
        ],
    ar: [
          "الصيغة: A = L × l.",
          "مثال: 8 سم × 5 سم → A = 40 سم².",
          "العرض من المساحة: l = A ÷ L.",
          "الوحدات: 1 م² = 10 000 سم².",
        ],
    fa: [
          "فرمول: A = L × l.",
          "مثال: 8 سانتیمتر × 5 سانتیمتر → A = 40 سانتیمتر².",
          "عرض از مساحت: l = A ÷ L.",
          "واحدها: 1 م² = 10000 سانتیمتر².",
        ],
    ti: [
          "ቅጥዒ: A = L × l.",
          "ምሳሌ: 8 ሰም × 5 ሰም → A = 40 ሰም².",
          "ወርሓዊ ካብ ሰፊሓ: l = A ÷ L.",
          "ኣሃዙ: 1 ም² = 10000 ሰም².",
        ],
    uk: [
          "Формула: A = L × l.",
          "Приклад: 8 см × 5 см → A = 40 см².",
          "Ширина зі площі: l = A ÷ L.",
          "Одиниці: 1 м² = 10 000 см².",
        ],
  },
  consignes: {
    "g3-2-e1": { fr: "Aire d'un rectangle 9 cm × 4 cm.", en: "Area of a rectangle 9 cm × 4 cm." },
    "g3-2-e2": { fr: "Rectangle d'aire 60 cm² et longueur 12 cm. Largeur = ?", en: "Rectangle with area 60 cm? and length 12 cm. Width = ?" },
    "g3-2-e3": { fr: "Aire d'un rectangle 7 m × 3 m.", en: "Area of a rectangle 7 m × 3 m." },
    "g3-2-e4": { fr: "1 m² = combien de cm² ?", en: "1 m? = how many cm??" },
    "g3-2-e5": { fr: "Rectangle 15 cm × 6 cm. Aire = ?", en: "Rectangle 15 cm × 6 cm. Area = ?" },
  },
};