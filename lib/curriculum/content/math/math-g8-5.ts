import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_G8_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "G8-5",
    submoduleCode: "G8.5",
    theory: {
      title: {
        fr: "Pavé droit (cuboid)",
        en: "Rectangular parallelepiped (cuboid)",
        ar: "متوازي المستطيلات",
        fa: "مکعب مستطیل",
        ti: "ፓቬ ደርቢ (ኩቦይድ)",
        uk: "Прямокутний паралелепіпед",
      },
      paragraphs: {
        fr: [
          "Volume du pavé droit : V = L × l × h.",
          "Exemple : pavé 6 cm × 4 cm × 3 cm → V = 6 × 4 × 3 = 72 cm³.",
          "Applications : volume d'une boîte, d'un container, d'une pièce.",
          "Trouver une dimension : h = V / (L × l).",
        ],
        en: [
          "Volume of a cuboid: V = L × w × h.",
          "Example: 6×4×3 cm → V = 72 cm³.",
          "Applications: boxes, rooms, containers.",
          "Finding a dimension: h = V / (L × w).",
        ],
        ar: [
          "حجم متوازي المستطيلات: V = L × l × h.",
          "مثال: 6 × 4 × 3 سم → V = 72 سم³.",
          "تطبيقات: صندوق، حجرة، حاوية.",
          "إيجاد بُعد: h = V / (L × l).",
        ],
        fa: [
          "حجم مکعب مستطیل: V = L × l × h.",
          "مثال: 6 × 4 × 3 سانتیمتر → V = 72 سانتیمتر³.",
          "کاربردها: جعبه، اتاق، مخزن.",
          "یافتن ارتفاع: h = V / (L × l).",
        ],
        ti: [
          "ናይ ፓቬ ዓቐን: V = L × l × h.",
          "ምሳሌ: 6 × 4 × 3 ሰም → V = 72 ሰም³.",
          "ኣሰፋ: ካሬ, ክፍሊ, ካርጎ.",
          "ቁምና ምርካብ: h = V / (L × l).",
        ],
        uk: [
          "Об'єм прямокутного паралелепіпеда: V = L × l × h.",
          "Приклад: 6 × 4 × 3 см → V = 72 см³.",
          "Застосування: коробки, кімнати, контейнери.",
          "Знайти розмір: h = V / (L × l).",
        ],
      },
    },
    exercises: [
      { id: "g8-5-e1", promptFr: "Volume d'un pavé 5 × 3 × 4 cm.", type: "number", acceptable: ["60"] },
      { id: "g8-5-e2", promptFr: "Volume d'un pavé 10 × 6 × 2 cm.", type: "number", acceptable: ["120"] },
      { id: "g8-5-e3", promptFr: "Pavé V = 120 cm³, L = 5, l = 4. h = ?", type: "number", acceptable: ["6"] },
      { id: "g8-5-e4", promptFr: "Volume d'une pièce 4 m × 3 m × 2,5 m (en m³).", type: "number", acceptable: ["30"] },
      { id: "g8-5-e5", promptFr: "Pavé 8 × 8 × 8 cm. C'est un cube ? (oui/non)", type: "short_text", acceptable: ["oui"] },
    ],
  };
