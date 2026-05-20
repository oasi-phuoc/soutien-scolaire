import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-4",
    submoduleCode: "G8.4",
    theory: {
      title: {
        fr: "Volume du cube",
        en: "Volume of a cube",
        ar: "حجم المكعب",
        fa: "حجم مکعب",
        ti: "ናይ ኩብ ዓቐን",
        uk: "Об'єм куба",
      },
      paragraphs: {
        fr: [
          "Le volume mesure l'espace occupé par un solide. Il s'exprime en unités cubiques (cm³, m³, L…).",
          "Volume du cube : V = c³ (côté au cube).",
          "Exemple : cube de côté 4 cm → V = 4³ = 64 cm³.",
          "Conversions : 1 L = 1 dm³ = 1 000 cm³ ; 1 m³ = 1 000 L = 1 000 000 cm³.",
        ],
        en: [
          "Volume measures the space occupied by a solid, in cubic units (cm³, m³…).",
          "Cube volume: V = s³.",
          "Example: side 4 cm → V = 64 cm³.",
          "Conversions: 1 L = 1 dm³ = 1,000 cm³; 1 m³ = 1,000,000 cm³.",
        ],
        ar: [
          "الحجم يقيس الفراغ الذي يشغله مجسم. يُعبر عنه بوحدات مكعبة.",
          "حجم المكعب: V = c³.",
          "مثال: ضلع 4 سم → V = 64 سم³.",
          "تحويلات: 1 ل = 1 دم³ = 1000 سم³.",
        ],
        fa: [
          "حجم فضایی که جسم اشغال می‌کند را اندازه می‌گیرد. با واحدهای مکعب بیان می‌شود.",
          "حجم مکعب: V = c³.",
          "مثال: ضلع 4 سانتیمتر → V = 64 سانتیمتر³.",
          "تبدیل: 1 لیتر = 1 دسی‌متر³ = 1000 سانتیمتر³.",
        ],
        ti: [
          "ዓቐን ናይ ደቂቅ ዝዓርፎ ቦታ ዝሕሰብ ዩ. ብካሬ ናህሰ ኣሃዝ ዩ.",
          "ናይ ኩብ ዓቐን: V = c³.",
          "ምሳሌ: ጎቦ 4 ሰም → V = 64 ሰም³.",
          "ምቕያር: 1 ሊ = 1 ዲ.ሜ³ = 1000 ሰም³.",
        ],
        uk: [
          "Об'єм вимірює простір, зайнятий тілом. Виражається в кубічних одиницях.",
          "Об'єм куба: V = a³.",
          "Приклад: сторона 4 см → V = 64 см³.",
          "Перетворення: 1 л = 1 дм³ = 1 000 см³.",
        ],
      },
    },
    exercises: [
      { id: "g8-4-e1", promptFr: "Volume d'un cube de côté 3 cm.", type: "number", acceptable: ["27"] },
      { id: "g8-4-e2", promptFr: "Volume d'un cube de côté 5 cm.", type: "number", acceptable: ["125"] },
      { id: "g8-4-e3", promptFr: "Un cube de volume 8 cm³. Quel est son côté ?", type: "number", acceptable: ["2"] },
      { id: "g8-4-e4", promptFr: "1 dm³ = combien de cm³ ?", type: "number", acceptable: ["1000"] },
      { id: "g8-4-e5", promptFr: "Volume d'un cube de côté 10 cm en litres.", type: "number", acceptable: ["1"] },
    ],
  };
