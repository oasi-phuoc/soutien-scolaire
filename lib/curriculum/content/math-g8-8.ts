import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_8_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-8",
    submoduleCode: "G8.8",
    theory: {
      title: {
        fr: "Volume de la pyramide",
        en: "Volume of a pyramid",
        ar: "حجم الهرم",
        fa: "حجم هرم",
        ti: "ናይ ፒራሚድ ዓቐን",
        uk: "Об'єм піраміди",
      },
      paragraphs: {
        fr: [
          "Volume de la pyramide : V = (1/3) × Aire de la base × hauteur = B × h / 3.",
          "La hauteur est la distance perpendiculaire du sommet à la base.",
          "Exemple : pyramide à base carrée de côté 6 cm et hauteur 9 cm → B = 36 cm². V = 36 × 9 / 3 = 108 cm³.",
          "Le volume d'une pyramide est exactement 1/3 du volume du prisme de même base et hauteur.",
        ],
        en: [
          "Pyramid volume: V = (1/3) × base area × height = B × h / 3.",
          "Height = perpendicular distance from apex to base.",
          "Example: square base side 6 cm, height 9 cm → B=36. V = 36×9/3 = 108 cm³.",
          "A pyramid's volume is 1/3 of a prism with the same base and height.",
        ],
        ar: [
          "حجم الهرم: V = (1/3) × مساحة القاعدة × الارتفاع.",
          "الارتفاع المسافة العمودية من الرأس للقاعدة.",
          "مثال: قاعدة مربعة 6 سم، ارتفاع 9 سم → V = 108 سم³.",
          "حجم الهرم ثلث حجم المنشور.",
        ],
        fa: [
          "حجم هرم: V = (1/3) × مساحت قاعده × ارتفاع.",
          "ارتفاع: فاصله عمودی از رأس تا قاعده.",
          "مثال: قاعده مربع 6 سانتیمتر، ارتفاع 9 سانتیمتر → V = 108 سانتیمتر³.",
          "حجم هرم یک سوم منشور با همان قاعده و ارتفاع است.",
        ],
        ti: [
          "ናይ ፒራሚድ ዓቐን: V = (1/3) × ሰረት ሰፊሓ × ቁመት.",
          "ቁመት ካብ ርእሲ ናብ ሰረት ቀጥታ ርሕቀት ዩ.",
          "ምሳሌ: ናይ ካሬ ሰረት 6 ሰም, ቁመት 9 ሰም → V = 108 ሰም³.",
          "ናይ ፒራሚድ ዓቐን ናህሰ ሰረት ን ቁመት ዘለዎ ፕሪዝም ሓደ-ሰለስ ዩ.",
        ],
        uk: [
          "Об'єм піраміди: V = (1/3) × площа основи × висота.",
          "Висота — перпендикулярна відстань від вершини до основи.",
          "Приклад: квадратна основа 6 см, висота 9 см → V = 108 см³.",
          "Об'єм піраміди — 1/3 об'єму призми з тією ж основою і висотою.",
        ],
      },
    },
    exercises: [
      { id: "g8-8-e1", promptFr: "Pyramide à base carrée 4 cm, hauteur 6 cm. V = ?", type: "number", acceptable: ["32"] },
      { id: "g8-8-e2", promptFr: "Pyramide à base rectangulaire 6×4 cm, hauteur 9 cm. V = ?", type: "number", acceptable: ["72"] },
      { id: "g8-8-e3", promptFr: "Pyramide B = 30 cm², h = 6 cm. V = ?", type: "number", acceptable: ["60"] },
      { id: "g8-8-e4", promptFr: "Pyramide triangulaire (tétraèdre) : B = 12 cm², h = 5 cm. V = ?", type: "number", acceptable: ["20"] },
      { id: "g8-8-e5", promptFr: "Si un prisme a V = 90 cm³, la pyramide de même base et hauteur a V = ?", type: "number", acceptable: ["30"] },
    ],
  };
