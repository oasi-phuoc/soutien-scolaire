import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "G6-2",
    submoduleCode: "G6.2",
    theory: {
      title: {
        fr: "Lire une échelle",
        en: "Reading a scale",
        ar: "قراءة المقياس",
        fa: "خواندن مقیاس",
        ti: "ስኬል ምንባብ",
        uk: "Читання масштабу",
      },
      paragraphs: {
        fr: [
          "Lire une échelle consiste à retrouver la distance réelle à partir d'une mesure sur le dessin, ou inversement.",
          "Formule : distance réelle = distance dessinée × dénominateur de l'échelle.",
          "Exemple : plan échelle 1:50. Longueur sur le plan = 6 cm → longueur réelle = 6 × 50 = 300 cm = 3 m.",
          "Inversement : trouver la distance dessinée → distance dessinée = distance réelle ÷ dénominateur.",
        ],
        en: [
          "Reading a scale means finding the real distance from a drawing measurement, or vice versa.",
          "Formula: real distance = drawn distance × denominator.",
          "Example: scale 1:50, 6 cm → 6 × 50 = 300 cm = 3 m.",
          "Reverse: drawn = real ÷ denominator.",
        ],
        ar: [
          "قراءة المقياس: إيجاد المسافة الحقيقية من المسافة المرسومة أو العكس.",
          "الصيغة: المسافة الحقيقية = المسافة المرسومة × مقام المقياس.",
          "مثال: مقياس 1:50، 6 سم → 300 سم = 3 م.",
          "العكس: المرسومة = الحقيقية ÷ المقام.",
        ],
        fa: [
          "خواندن مقیاس یعنی یافتن فاصله واقعی از فاصله رسم‌شده یا برعکس.",
          "فرمول: فاصله واقعی = فاصله رسم‌شده × مخرج مقیاس.",
          "مثال: مقیاس 1:50، 6 سانتیمتر → 300 سانتیمتر = 3 متر.",
          "برعکس: رسم‌شده = واقعی ÷ مخرج.",
        ],
        ti: [
          "ናይ ስኬል ምንባብ ዘምልክት ካብ ናይ ምስሳሉ ርሕቀት ናህሰ ርሕቀት ምርካብ ዩ.",
          "ቅጥዒ: ናህሰ ርሕቀት = ናይ ምስሳሉ ርሕቀት × ናይ ስኬል ቀሪባ.",
          "ምሳሌ: ስኬል 1:50, 6 ሰም → 300 ሰም = 3 ም.",
          "ኣንጻር: ናይ ምስሳሉ = ናህሰ ÷ ናይ ስኬል ቀሪባ.",
        ],
        uk: [
          "Читати масштаб — знаходити реальну відстань з відстані на кресленні або навпаки.",
          "Формула: реальна відстань = відстань на кресленні × знаменник масштабу.",
          "Приклад: масштаб 1:50, 6 см → 300 см = 3 м.",
          "Зворотне: відстань на кресленні = реальна ÷ знаменник.",
        ],
      },
    },
    exercises: [
      { id: "g6-2-e1", promptFr: "Échelle 1:100. Dessin : 4,5 cm. Réalité : ? cm.", type: "number", acceptable: ["450"] },
      { id: "g6-2-e2", promptFr: "Échelle 1:200. Réalité : 600 cm. Dessin : ? cm.", type: "number", acceptable: ["3"] },
      { id: "g6-2-e3", promptFr: "Échelle 1:50. Dessin : 8 cm. Réalité : ? m.", type: "number", acceptable: ["4"] },
      { id: "g6-2-e4", promptFr: "Échelle 1:1000. Dessin : 3 cm. Réalité : ? m.", type: "number", acceptable: ["30"] },
      { id: "g6-2-e5", promptFr: "Échelle 1:25. Réalité : 75 cm. Dessin : ? cm.", type: "number", acceptable: ["3"] },
    ],
  };
