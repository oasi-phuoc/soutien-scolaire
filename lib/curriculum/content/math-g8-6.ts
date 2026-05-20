import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-6",
    submoduleCode: "G8.6",
    theory: {
      title: {
        fr: "Volume du prisme",
        en: "Volume of a prism",
        ar: "حجم المنشور",
        fa: "حجم منشور",
        ti: "ናይ ፕሪዝም ዓቐን",
        uk: "Об'єм призми",
      },
      paragraphs: {
        fr: [
          "Volume d'un prisme : V = Aire de la base × hauteur = B × h.",
          "La base peut être n'importe quel polygone. La hauteur est la distance perpendiculaire entre les deux bases.",
          "Exemple — prisme triangulaire : base = triangle de base 6 cm et hauteur 4 cm → B = (6×4)/2 = 12 cm². Hauteur du prisme = 10 cm. V = 12 × 10 = 120 cm³.",
          "Le pavé droit est un prisme rectangulaire : B = L × l, donc V = L × l × h.",
        ],
        en: [
          "Volume of a prism: V = base area × height = B × h.",
          "Base can be any polygon. Height = perpendicular distance between bases.",
          "Example — triangular prism: triangle base 6 cm, height 4 cm → B = 12 cm². Prism height 10 cm → V = 120 cm³.",
          "A cuboid is a rectangular prism: V = L × w × h.",
        ],
        ar: [
          "حجم المنشور: V = مساحة القاعدة × الارتفاع = B × h.",
          "القاعدة أي مضلع. الارتفاع المسافة العمودية.",
          "مثال: منشور مثلثي: B = 12 سم²، ارتفاع = 10 → V = 120 سم³.",
          "متوازي المستطيلات منشور مستطيل.",
        ],
        fa: [
          "حجم منشور: V = مساحت قاعده × ارتفاع = B × h.",
          "قاعده می‌تواند هر چندضلعی باشد.",
          "مثال: منشور مثلثی: B = 12 سانتیمتر²، ارتفاع = 10 → V = 120 سانتیمتر³.",
          "مکعب مستطیل منشور مستطیلی است.",
        ],
        ti: [
          "ናይ ፕሪዝም ዓቐን: V = ሰረት ሰፊሓ × ቁመት = B × h.",
          "ሰረት ዝኾነ ብዙ-ጎቦ ክኸውን ዝኽእሉ.",
          "ምሳሌ: ናይ ሰለስ-ጎቦ ፕሪዝም: B = 12 ሰም², ቁመት = 10 → V = 120 ሰም³.",
          "ፓቬ ደርቢ ናይ ካሬ-ሓለቃ ፕሪዝም ዩ.",
        ],
        uk: [
          "Об'єм призми: V = площа основи × висота = B × h.",
          "Основа — будь-який многокутник. Висота — перпендикулярна відстань між основами.",
          "Приклад — трикутна призма: B = 12 см², висота = 10 → V = 120 см³.",
          "Прямокутний паралелепіпед — прямокутна призма.",
        ],
      },
    },
    exercises: [
      { id: "g8-6-e1", promptFr: "Prisme à base triangulaire (B = 15 cm²), hauteur 8 cm. V = ?", type: "number", acceptable: ["120"] },
      { id: "g8-6-e2", promptFr: "Prisme à base carrée (côté 4 cm), hauteur 6 cm. V = ?", type: "number", acceptable: ["96"] },
      { id: "g8-6-e3", promptFr: "Prisme : B = 20 cm², V = 100 cm³. h = ?", type: "number", acceptable: ["5"] },
      { id: "g8-6-e4", promptFr: "Prisme triangulaire : triangle base 8, hauteur 6 cm ; prisme h = 10 cm. V = ?", type: "number", acceptable: ["240"] },
      { id: "g8-6-e5", promptFr: "Prisme à base hexagonale (B = 24 cm²), hauteur 5 cm. V = ?", type: "number", acceptable: ["120"] },
    ],
  };
