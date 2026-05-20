import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "G6-1",
    submoduleCode: "G6.1",
    theory: {
      title: {
        fr: "Notion d'échelle",
        en: "Notion of scale",
        ar: "مفهوم المقياس",
        fa: "مفهوم مقیاس",
        ti: "ናይ ስኬል ሓሳብ",
        uk: "Поняття масштабу",
      },
      paragraphs: {
        fr: [
          "Une échelle est le rapport entre la mesure sur un plan (ou une carte) et la mesure réelle. Échelle = distance dessinée / distance réelle.",
          "Exemple : échelle 1:100 signifie que 1 cm sur le plan correspond à 100 cm = 1 m en réalité.",
          "Une carte à l'échelle 1:50 000 signifie que 1 cm représente 50 000 cm = 500 m = 0,5 km.",
          "Échelle de réduction : échelle < 1 (ex. plan de maison). Échelle d'agrandissement : échelle > 1 (ex. plan de cellule biologique).",
        ],
        en: [
          "A scale is the ratio of a drawn measurement to the real measurement. Scale = drawn distance / real distance.",
          "Example: 1:100 means 1 cm on the plan = 100 cm = 1 m in reality.",
          "A 1:50,000 map: 1 cm represents 500 m.",
          "Reduction scale < 1 (house plan). Enlargement scale > 1 (cell diagram).",
        ],
        ar: [
          "المقياس هو نسبة المسافة المرسومة إلى المسافة الحقيقية.",
          "مثال: 1:100 يعني 1 سم على الخطة = 100 سم = 1 م.",
          "خريطة 1:50000: 1 سم يمثل 500 م.",
          "مقياس التصغير < 1. مقياس التكبير > 1.",
        ],
        fa: [
          "مقیاس نسبت فاصله رسم‌شده به فاصله واقعی است.",
          "مثال: 1:100 یعنی 1 سانتیمتر روی نقشه = 1 متر در واقعیت.",
          "نقشه 1:50000: 1 سانتیمتر نشان‌دهنده 500 متر است.",
          "مقیاس کوچک‌سازی < 1. مقیاس بزرگ‌سازی > 1.",
        ],
        ti: [
          "ስኬል ናይ ስዕሊ ርሕቀት ናብ ናህሰ ርሕቀት ሕጊ ዩ.",
          "ምሳሌ: 1:100 ዘምልክት 1 ሰም ናብ ሰሌዳ = 100 ሰም = 1 ም ኣብ ሓቂ ዓለም.",
          "ናይ 1:50000 ካርታ: 1 ሰም 500 ም ዘርኢ ዩ.",
          "ምቕናስ ስኬል < 1. ምዕባይ ስኬል > 1.",
        ],
        uk: [
          "Масштаб — відношення відстані на плані до реальної відстані.",
          "Приклад: 1:100 означає, що 1 см на плані = 1 м у реальності.",
          "Карта 1:50 000: 1 см = 500 м.",
          "Масштаб зменшення < 1; збільшення > 1.",
        ],
      },
    },
    exercises: [
      { id: "g6-1-e1", promptFr: "Échelle 1:100. 3 cm sur le plan = combien de cm en réalité ?", type: "number", acceptable: ["300"] },
      { id: "g6-1-e2", promptFr: "Échelle 1:1000. 5 cm sur la carte = combien de m en réalité ?", type: "number", acceptable: ["50"] },
      { id: "g6-1-e3", promptFr: "Quelle est la signification de l'échelle 1:200 ?", type: "short_text", acceptable: ["1 cm = 200 cm", "1 cm = 2 m"] },
      { id: "g6-1-e4", promptFr: "Une échelle de 1:50 est-elle un agrandissement ou une réduction ?", type: "short_text", acceptable: ["réduction", "reduction"] },
      { id: "g6-1-e5", promptFr: "Échelle 1:500. 4 cm sur le plan = ? m en réalité.", type: "number", acceptable: ["20"] },
    ],
  };
