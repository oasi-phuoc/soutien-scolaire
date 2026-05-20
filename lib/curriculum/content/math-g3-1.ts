import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-1",
    submoduleCode: "G3.1",
    theory: {
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
    },
    exercises: [
      { id: "g3-1-e1", promptFr: "Calcule l'aire d'un carré de côté 5 cm.", type: "number", acceptable: ["25"] },
      { id: "g3-1-e2", promptFr: "Calcule l'aire d'un carré de côté 12 cm.", type: "number", acceptable: ["144"] },
      { id: "g3-1-e3", promptFr: "Un carré a une aire de 49 cm². Quel est son côté ?", type: "number", acceptable: ["7"] },
      { id: "g3-1-e4", promptFr: "Carré de côté 3,5 cm. Aire = ?", type: "number", acceptable: ["12,25", "12.25"] },
      { id: "g3-1-e5", promptFr: "Un carré a une aire de 100 m². Quel est son côté ?", type: "number", acceptable: ["10"] },
    ],
  };
