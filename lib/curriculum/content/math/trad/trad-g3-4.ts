import type { SubmoduleTrad } from "./trad-types";

export const TRAD_G3_4: SubmoduleTrad = {
  submoduleId: "G3-4",
  title: {
    fr: "Périmètre des polygones réguliers",
    en: "Perimeter of regular polygons",
    ar: "محيط المضلعات المنتظمة",
    fa: "محیط چندضلعی‌های منتظم",
    ti: "ናይ ዕኩል ብዙ-ጎቦ ዙሪያ",
    uk: "Периметр правильних многокутників",
  },
  paragraphs: {
    fr: [
          "Un polygone régulier a tous ses côtés de même longueur. Son périmètre est : P = n × c, où n est le nombre de côtés et c la longueur d'un côté.",
          "Exemples : pentagone régulier de côté 6 cm → P = 5 × 6 = 30 cm ; hexagone régulier de côté 4 cm → P = 6 × 4 = 24 cm.",
          "Pour tout polygone non régulier : P = somme de tous les côtés.",
          "Application : un terrain hexagonal régulier de côté 10 m a un périmètre de 60 m.",
        ],
    en: [
          "A regular polygon has all equal sides. Perimeter: P = n × s, where n = number of sides and s = side length.",
          "Examples: regular pentagon side 6 cm → P = 30 cm; regular hexagon side 4 cm → P = 24 cm.",
          "For irregular polygons: P = sum of all sides.",
        ],
    ar: [
          "المضلع المنتظم كل أضلاعه متساوية. محيطه: P = n × c.",
          "أمثلة: خماسي منتظم بضلع 6 سم → P = 30 سم.",
          "لأي مضلع: P = مجموع الأضلاع.",
        ],
    fa: [
          "چندضلعی منتظم همه اضلاعش مساوی هستند. محیط: P = n × c.",
          "مثال: پنتاگون منتظم با ضلع 6 سانتیمتر → P = 30 سانتیمتر.",
          "برای هر چندضلعی: P = مجموع همه اضلاع.",
        ],
    ti: [
          "ዕኩል ብዙ-ጎቦ ኩሉ ዕኩል ጎቦ ዘለዎ ዩ. ዙሪያ: P = n × c.",
          "ምሳሌ: ናይ 5 ጎቦ ዕኩል ቅርጺ ናይ 6 ሰም ጎቦ → P = 30 ሰም.",
          "ንዝኾነ ብዙ-ጎቦ: P = ናይ ኩሎም ጎቦ ድምር.",
        ],
    uk: [
          "Правильний многокутник має всі рівні сторони. Периметр: P = n × a.",
          "Приклади: правильний п'ятикутник зі стороною 6 см → P = 30 см.",
          "Для будь-якого многокутника: P = сума всіх сторін.",
        ],
  },
  consignes: {
    "g2-4-e1": { fr: "Périmètre d'un hexagone régulier de côté 5 cm.", en: "Perimeter of a regular hexagone with side 5 cm." },
    "g2-4-e2": { fr: "Périmètre d'un octogone régulier de côté 3 cm.", en: "Perimeter of a regular octogone with side 3 cm." },
    "g2-4-e3": { fr: "Un polygone régulier a un périmètre de 40 cm et des côtés de 8 cm. Combien de côtés ?", en: "A regular polygon has a perimeter of 40 cm and sides of 8 cm. How many sides?" },
    "g2-4-e4": { fr: "Périmètre d'un pentagone régulier de côté 7 cm.", en: "Perimeter of a regular pentagone with side 7 cm." },
    "g2-4-e5": { fr: "Périmètre d'un triangle équilatéral de côté 9 cm.", en: "Perimeter of an equilateral triangle with side 9 cm." },
  },
};