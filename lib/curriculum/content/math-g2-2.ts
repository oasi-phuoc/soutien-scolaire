import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G2_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G2-2",
    submoduleCode: "G2.2",
    theory: {
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
    },
    exercises: [
      { id: "g2-2-e1", promptFr: "Calcule le périmètre d'un rectangle 10 cm × 4 cm.", type: "number", acceptable: ["28"] },
      { id: "g2-2-e2", promptFr: "Rectangle de périmètre 30 cm et longueur 10 cm. Largeur = ?", type: "number", acceptable: ["5"] },
      { id: "g2-2-e3", promptFr: "Calcule le périmètre d'un rectangle 7 m × 3 m.", type: "number", acceptable: ["20"] },
      { id: "g2-2-e4", promptFr: "Un rectangle 6 cm × 6 cm est-il un carré ? (oui/non)", type: "short_text", acceptable: ["oui"] },
      { id: "g2-2-e5", promptFr: "Rectangle 12 cm × 5 cm. Calcule P.", type: "number", acceptable: ["34"] },
    ],
  };
