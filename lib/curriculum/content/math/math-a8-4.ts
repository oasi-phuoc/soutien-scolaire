import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A8_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A8-4",
    submoduleCode: "A8.4",
    theory: {
      title: {
        fr: "Racine carrée (carrés parfaits)",
        en: "Square root (perfect squares)",
        ar: "الجذر التربيعي (مربعات تامة)",
        fa: "جذر مربع (مربعات کامل)",
        ti: "ስርወ-ካሬ (ፍጹም ካሬታት)",
        uk: "Квадратний корінь (точні квадрати)",
      },
      paragraphs: {
        fr: [
          "La racine carrée est l'opération inverse de la puissance 2. √a est le nombre positif tel que (√a)² = a.",
          "Question : quel nombre multiplié par lui-même donne ce nombre ? Exemple : √9 = 3 car 3 × 3 = 9.",
          "Carrés parfaits courants : √1 = 1, √4 = 2, √9 = 3, √16 = 4, √25 = 5, √36 = 6, √49 = 7, √64 = 8, √81 = 9, √100 = 10.",
          "Propriété : √(a × b) = √a × √b. Exemple : √36 = √(4 × 9) = √4 × √9 = 2 × 3 = 6.",
        ],
        en: [
          "The square root is the inverse of squaring. √a is the positive number such that (√a)² = a.",
          "Question: which number, multiplied by itself, gives this number? Example: √9 = 3 because 3 × 3 = 9.",
          "Common perfect squares: √1=1, √4=2, √9=3, √16=4, √25=5, √36=6, √49=7, √64=8, √81=9, √100=10.",
          "Property: √(a × b) = √a × √b. Example: √36 = √4 × √9 = 2 × 3 = 6.",
        ],
        ar: [
          "الجذر التربيعي هو العملية العكسية للتربيع. √a هو العدد الموجب الذي (√a)² = a.",
          "السؤال: أي عدد مضروب في نفسه يعطي هذا العدد؟ مثال: √9 = 3 لأن 3 × 3 = 9.",
          "مربعات تامة شائعة: √1=1, √4=2, √9=3, √16=4, √25=5.",
          "الخاصية: √(a × b) = √a × √b.",
        ],
        fa: [
          "جذر مربع عملیات معکوس توان دوم است. √a عدد مثبتی است که (√a)² = a.",
          "سوال: کدام عدد ضربدر خودش این عدد را می‌دهد؟ مثال: √9 = 3 چون 3 × 3 = 9.",
          "مربعات کامل رایج: √1=1، √4=2، √9=3، √16=4، √25=5.",
          "ویژگی: √(a × b) = √a × √b.",
        ],
        ti: [
          "ስርወ-ካሬ ናይ ካሬ ድርብ ተቃራኒ ስራሕ ዩ. √a ናይ ኣወንታ ቁጽሪ ዩ ክኸውን ዘለዎ (√a)² = a.",
          "ሕቶ: ናብ ናዕቤ ዝምልስ ቁጽሪ ምስ ናዕቤ ዝኸውን ዩ? ምሳሌ: √9 = 3 ምክንያቱ 3 × 3 = 9.",
          "ናይ ፍጹም ካሬ ቁጽርታት: √1=1, √4=2, √9=3, √16=4, √25=5.",
          "ንብረት: √(a × b) = √a × √b.",
        ],
        uk: [
          "Квадратний корінь — операція, обернена до зведення в квадрат. √a — це додатне число таке, що (√a)² = a.",
          "Питання: яке число, помножене саме на себе, дає це число? Приклад: √9 = 3, бо 3 × 3 = 9.",
          "Поширені точні квадрати: √1=1, √4=2, √9=3, √16=4, √25=5, √36=6, √49=7, √64=8, √81=9, √100=10.",
          "Властивість: √(a × b) = √a × √b.",
        ],
      },
    },
    exercises: [
      { id: "a8-4-e1", promptFr: "Calcule √25.", type: "number", acceptable: ["5"] },
      { id: "a8-4-e2", promptFr: "Calcule √81.", type: "number", acceptable: ["9"] },
      { id: "a8-4-e3", promptFr: "Calcule √49.", type: "number", acceptable: ["7"] },
      { id: "a8-4-e4", promptFr: "√(4 × 25) = √4 × √25 = ?", type: "number", acceptable: ["10"] },
      { id: "a8-4-e5", promptFr: "Quel est le plus petit carré parfait supérieur à 50 ?", type: "number", acceptable: ["64"] },
    ],
  };
