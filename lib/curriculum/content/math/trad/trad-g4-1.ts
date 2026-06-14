import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G4_1: SubmoduleTrad = {
  submoduleId: "G4-1",
  title: {
    fr: "Aire du carré",
    en: "Area of a square",
    ar: "مساحة المربع",
    fa: "مساحت مربع",
    ti: "ናይ ካሬ ሰፊሓ",
    uk: "Площа квадрата",
  },
  paragraphs: {
    fr: [
          "L'aire mesure la surface intérieure d'une figure. Elle s'exprime en unités carrées (cm², m², km²…).",
          "Formule : A = c², où c est la longueur du côté.",
          "Exemple : carré de côté 6 cm → A = 6² = 36 cm².",
          "Pour trouver le côté connaissant l'aire : c = √A.",
        ],
    en: [
          "Area measures the interior surface of a figure, expressed in square units (cm², m²…).",
          "Formula: A = s², where s is the side length.",
          "Example: square side 6 cm → A = 36 cm².",
          "Finding the side from area: s = √A.",
        ],
    ar: [
          "المساحة تقيس السطح الداخلي. تُعبر عنها بوحدات مربعة (سم²، م²…).",
          "الصيغة: A = c².",
          "مثال: مربع بضلع 6 سم → A = 36 سم².",
          "الضلع من المساحة: c = √A.",
        ],
    fa: [
          "مساحت سطح داخلی یک شکل را اندازه می‌گیرد. با واحدهای مربعی بیان می‌شود.",
          "فرمول: A = c².",
          "مثال: مربع با ضلع 6 سانتیمتر → A = 36 سانتیمتر².",
          "ضلع از مساحت: c = √A.",
        ],
    ti: [
          "ሰፊሓ ናይ ቅርጺ ውሽጠ ሰፊሕ ዝሕሰብ ዩ. ብካሬ ኣሃዙ (ሰም², ም²…) ዝቀርብ.",
          "ቅጥዒ: A = c².",
          "ምሳሌ: ካሬ ናይ 6 ሰም ጎቦ → A = 36 ሰም².",
          "ናይ ሰፊሓ ካብ ጎቦ: c = √A.",
        ],
    uk: [
          "Площа вимірює внутрішню поверхню фігури. Виражається в квадратних одиницях.",
          "Формула: A = a².",
          "Приклад: квадрат зі стороною 6 см → A = 36 см².",
          "Сторона зі площі: a = √A.",
        ],
  },
  consignes: {
    "g3-1-e1": { fr: "Calcule l'aire d'un carré de côté 5 cm.", en: "Calculate the area of a square with side 5 cm." },
    "g3-1-e2": { fr: "Calcule l'aire d'un carré de côté 12 cm.", en: "Calculate the area of a square with side 12 cm." },
    "g3-1-e3": { fr: "Un carré a une aire de 49 cm². Quel est son côté ?", en: "A square has an area of 49 cm². What is its side length?" },
    "g3-1-e4": { fr: "Carré de côté 3,5 cm. Aire = ?", en: "Square with side 3.5 cm. Area = ?" },
    "g3-1-e5": { fr: "Un carré a une aire de 100 m². Quel est son côté ?", en: "A square has an area of 100 m². What is its side length?" },
  },
};