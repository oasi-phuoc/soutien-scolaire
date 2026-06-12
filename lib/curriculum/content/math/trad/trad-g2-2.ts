import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G2_2: SubmoduleTrad = {
  submoduleId: "G2-2",
  title: {
    fr: "Périmètre du rectangle",
    en: "Perimeter of a rectangle",
    ar: "محيط المستطيل",
    fa: "محیط مستطیل",
    ti: "ናይ ካሬ-ሓለቃ ዙሪያ",
    uk: "Периметр прямокутника",
  },
  paragraphs: {
    fr: [
          "Un rectangle a deux longueurs (L) et deux largeurs (l).",
          "Formule : P = 2L + 2l = 2(L + l).",
          "Exemple : rectangle 8 cm × 5 cm → P = 2(8 + 5) = 2 × 13 = 26 cm.",
          "Si on connaît le périmètre et la longueur : l = (P ÷ 2) − L.",
        ],
    en: [
          "A rectangle has two lengths (L) and two widths (w).",
          "Formula: P = 2L + 2w = 2(L + w).",
          "Example: 8 cm × 5 cm → P = 2(13) = 26 cm.",
          "Finding width: w = (P ÷ 2) − L.",
        ],
    ar: [
          "المستطيل له طولان (L) وعرضان (l).",
          "الصيغة: P = 2(L + l).",
          "مثال: 8 سم × 5 سم → P = 26 سم.",
          "إيجاد العرض: l = (P ÷ 2) − L.",
        ],
    fa: [
          "مستطیل دو طول (L) و دو عرض (l) دارد.",
          "فرمول: P = 2(L + l).",
          "مثال: 8 سانتیمتر × 5 سانتیمتر → P = 26 سانتیمتر.",
          "یافتن عرض: l = (P ÷ 2) − L.",
        ],
    ti: [
          "ካሬ-ሓለቃ ክልተ ቁምናኦቲ (L) ን ክልተ ወርሓዊ (l) ዘለዎ ዩ.",
          "ቅጥዒ: P = 2(L + l).",
          "ምሳሌ: 8 ሰም × 5 ሰም → P = 26 ሰም.",
          "ወርሓዊ ምርካብ: l = (P ÷ 2) − L.",
        ],
    uk: [
          "Прямокутник має дві довжини (L) і дві ширини (l).",
          "Формула: P = 2(L + l).",
          "Приклад: 8 см × 5 см → P = 26 см.",
          "Знайти ширину: l = (P ÷ 2) − L.",
        ],
  },
  consignes: {
    "g2-2-e1": { fr: "Calcule le périmètre d'un rectangle 10 cm × 4 cm.", en: "Calculate the perimeter of a rectangle 10 cm × 4 cm." },
    "g2-2-e2": { fr: "Rectangle de périmètre 30 cm et longueur 10 cm. Largeur = ?", en: "Rectangle with perimeter 30 cm et longueur 10 cm. Width = ?" },
    "g2-2-e3": { fr: "Calcule le périmètre d'un rectangle 7 m × 3 m.", en: "Calculate the perimeter of a rectangle 7 m × 3 m." },
    "g2-2-e4": { fr: "Un rectangle 6 cm × 6 cm est-il un carré ? (oui/non)", en: "Is a 6 cm ? 6 cm rectangle a square? (yes/no)" },
    "g2-2-e5": { fr: "Rectangle 12 cm × 5 cm. Calcule P.", en: "Rectangle 12 cm ? 5 cm. Calculate P." },
  },
};