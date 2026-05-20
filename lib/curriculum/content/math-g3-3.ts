import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G3_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G3-3",
    submoduleCode: "G3.3",
    theory: {
      title: {
        fr: "Aire du triangle",
        en: "Area of a triangle",
        ar: "مساحة المثلث",
        fa: "مساحت مثلث",
        ti: "ናይ ሰለስ-ጎቦ ሰፊሓ",
        uk: "Площа трикутника",
      },
      paragraphs: {
        fr: [
          "Formule : A = (base × hauteur) ÷ 2.",
          "La hauteur est la distance perpendiculaire entre la base et le sommet opposé (pas nécessairement un côté).",
          "Exemple : triangle base 10 cm, hauteur 6 cm → A = (10 × 6) ÷ 2 = 30 cm².",
          "Intuition : le triangle occupe exactement la moitié du rectangle de même base et hauteur.",
        ],
        en: [
          "Formula: A = (base × height) ÷ 2.",
          "The height is the perpendicular distance from the base to the opposite vertex.",
          "Example: base 10 cm, height 6 cm → A = (10 × 6) ÷ 2 = 30 cm².",
          "Intuition: a triangle is half the rectangle with the same base and height.",
        ],
        ar: [
          "الصيغة: A = (القاعدة × الارتفاع) ÷ 2.",
          "الارتفاع هو المسافة العمودية من القاعدة إلى الرأس المقابل.",
          "مثال: قاعدة 10 سم، ارتفاع 6 سم → A = 30 سم².",
          "حدسياً: المثلث نصف المستطيل بنفس القاعدة والارتفاع.",
        ],
        fa: [
          "فرمول: A = (قاعده × ارتفاع) ÷ 2.",
          "ارتفاع فاصله عمودی از قاعده تا رأس مقابل است.",
          "مثال: قاعده 10 سانتیمتر، ارتفاع 6 سانتیمتر → A = 30 سانتیمتر².",
          "شهود: مثلث نصف مستطیل با قاعده و ارتفاع یکسان است.",
        ],
        ti: [
          "ቅጥዒ: A = (ሰረት × ቁመት) ÷ 2.",
          "ቁመት ካብ ሰረት ናብ ዝቃወሞ ርእሲ ቀጥታ ርሕቀት ዩ.",
          "ምሳሌ: ሰረት 10 ሰም, ቁመት 6 ሰም → A = 30 ሰም².",
          "ሰለስ-ጎቦ ናይ ሓደ ሰረት ን ቁመት ዘለዎ ካሬ-ሓለቃ ፍርቂ ዩ.",
        ],
        uk: [
          "Формула: A = (основа × висота) ÷ 2.",
          "Висота — перпендикулярна відстань від основи до протилежної вершини.",
          "Приклад: основа 10 см, висота 6 см → A = 30 см².",
          "Трикутник займає рівно половину прямокутника з тією ж основою і висотою.",
        ],
      },
    },
    exercises: [
      { id: "g3-3-e1", promptFr: "Aire d'un triangle : base 8 cm, hauteur 5 cm.", type: "number", acceptable: ["20"] },
      { id: "g3-3-e2", promptFr: "Aire d'un triangle : base 12 cm, hauteur 9 cm.", type: "number", acceptable: ["54"] },
      { id: "g3-3-e3", promptFr: "Triangle d'aire 30 cm² et base 10 cm. Hauteur = ?", type: "number", acceptable: ["6"] },
      { id: "g3-3-e4", promptFr: "Aire d'un triangle rectangle : cathètes 6 et 8 cm.", type: "number", acceptable: ["24"] },
      { id: "g3-3-e5", promptFr: "Triangle équilatéral de côté 6 cm et hauteur 5,2 cm. Aire ≈ ?", type: "number", acceptable: ["15,6", "15.6"] },
    ],
  };
