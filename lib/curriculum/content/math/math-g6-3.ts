import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G6_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "G6-3",
    submoduleCode: "G6.3",
    theory: {
      title: {
        fr: "Distance réelle",
        en: "Real distance",
        ar: "المسافة الحقيقية",
        fa: "فاصله واقعی",
        ti: "ናህሰ ርሕቀት",
        uk: "Реальна відстань",
      },
      paragraphs: {
        fr: [
          "Pour trouver une distance réelle à partir d'une carte ou d'un plan : mesurer la distance sur le dessin (en cm) puis multiplier par le dénominateur de l'échelle.",
          "Attention aux conversions : si l'échelle est 1:50 000, 1 cm sur la carte = 50 000 cm = 500 m = 0,5 km.",
          "Tableau de conversions : 1 km = 1 000 m = 100 000 cm. 1 m = 100 cm. 1 cm = 10 mm.",
          "Exemple : sur une carte 1:25 000, deux villes séparées de 8 cm → distance réelle = 8 × 25 000 = 200 000 cm = 2 km.",
        ],
        en: [
          "To find a real distance: measure on the drawing (cm) then multiply by the scale denominator.",
          "Unit care: 1:50,000 means 1 cm = 500 m = 0.5 km.",
          "Conversions: 1 km = 1,000 m = 100,000 cm.",
          "Example: 8 cm on a 1:25,000 map → 200,000 cm = 2 km.",
        ],
        ar: [
          "لإيجاد المسافة الحقيقية: قس على الرسم (سم) ثم اضرب في مقام المقياس.",
          "تحويل: 1:50000 → 1 سم = 500 م = 0.5 كم.",
          "1 كم = 1000 م = 100000 سم.",
          "مثال: 8 سم على خريطة 1:25000 → 2 كم.",
        ],
        fa: [
          "برای یافتن فاصله واقعی: فاصله روی نقشه (سانتیمتر) را اندازه بگیر، سپس در مخرج مقیاس ضرب کن.",
          "توجه: 1:50000 یعنی 1 سانتیمتر = 500 متر = 0.5 کیلومتر.",
          "تبدیل: 1 کیلومتر = 1000 متر = 100000 سانتیمتر.",
          "مثال: 8 سانتیمتر روی نقشه 1:25000 → 2 کیلومتر.",
        ],
        ti: [
          "ናህሰ ርሕቀት ምርካብ: ናይ ምስሳሉ ርሕቀት (ሰም) ዕቃቤ ብናይ ስኬል ቀሪባ ምርባሕ.",
          "ምቕያር: 1:50000 → 1 ሰም = 500 ም = 0.5 ኪ.ሜ.",
          "1 ኪ.ሜ = 1000 ም = 100000 ሰም.",
          "ምሳሌ: 8 ሰም ናብ 1:25000 ካርታ → 2 ኪ.ሜ.",
        ],
        uk: [
          "Для знаходження реальної відстані: виміряти на кресленні (в см), помножити на знаменник масштабу.",
          "Перетворення: 1:50 000 → 1 см = 500 м = 0,5 км.",
          "1 км = 1 000 м = 100 000 см.",
          "Приклад: 8 см на карті 1:25 000 → 2 км.",
        ],
      },
    },
    exercises: [
      { id: "g6-3-e1", promptFr: "Carte 1:50000. Distance sur carte : 3 cm. Distance réelle en km ?", type: "number", acceptable: ["1,5", "1.5"] },
      { id: "g6-3-e2", promptFr: "Carte 1:25000. Distance sur carte : 4 cm. Distance réelle en m ?", type: "number", acceptable: ["1000"] },
      { id: "g6-3-e3", promptFr: "Plan 1:200. Longueur dessinée : 7 cm. Longueur réelle en m ?", type: "number", acceptable: ["14"] },
      { id: "g6-3-e4", promptFr: "Carte 1:100000. 2 cm sur la carte. Réalité en km ?", type: "number", acceptable: ["2"] },
      { id: "g6-3-e5", promptFr: "1 km = combien de cm ?", type: "number", acceptable: ["100000"] },
    ],
  };
