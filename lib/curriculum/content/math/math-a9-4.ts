import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_4_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-4",
    submoduleCode: "A9.4",
    theory: {
      title: {
        fr: "Réduction (termes semblables)",
        en: "Simplification (like terms)",
        ar: "التبسيط (الحدود المتشابهة)",
        fa: "ساده‌سازی (جملات مشابه)",
        ti: "ምቅናስ (ተመሳሳሊ ወጽዓ)",
        uk: "Зведення подібних доданків",
      },
      paragraphs: {
        fr: [
          "Des termes semblables sont des termes qui ont la même variable portée au même exposant. On peut les additionner ou soustraire.",
          "Règle : pour additionner des termes semblables, on additionne leurs coefficients. Les termes constants se regroupent entre eux.",
          "Exemples : 3x + 5x = 8x ; 7a − 2a = 5a ; 4x + 3 + 2x − 1 = 6x + 2.",
          "Important : 3x et 3x² ne sont PAS des termes semblables (exposants différents). 3x et 3y non plus (variables différentes).",
        ],
        en: [
          "Like terms have the same variable raised to the same exponent. They can be added or subtracted.",
          "Rule: add like terms by adding their coefficients. Constant terms group together.",
          "Examples: 3x + 5x = 8x; 7a − 2a = 5a; 4x + 3 + 2x − 1 = 6x + 2.",
          "Important: 3x and 3x² are NOT like terms (different exponents); 3x and 3y are not either.",
        ],
        ar: [
          "الحدود المتشابهة هي حدود لها نفس المتغير ونفس الأس. يمكن جمعها أو طرحها.",
          "القاعدة: اجمع معاملات الحدود المتشابهة. الحدود الثابتة تُجمع مع بعضها.",
          "أمثلة: 3x + 5x = 8x؛ 4x + 3 + 2x − 1 = 6x + 2.",
          "مهم: 3x و 3x² ليسا حدين متشابهين (أسس مختلفة).",
        ],
        fa: [
          "جملات مشابه جملاتی هستند که متغیر یکسان با توان یکسان دارند. می‌توان آن‌ها را جمع یا تفریق کرد.",
          "قانون: برای جمع جملات مشابه، ضرایبشان را جمع کن.",
          "مثال‌ها: 3x + 5x = 8x؛ 4x + 3 + 2x − 1 = 6x + 2.",
          "مهم: 3x و 3x² جملات مشابه نیستند (توان متفاوت).",
        ],
        ti: [
          "ተመሳሳሊ ወጽዓ ብሓደ ተለዋዋጢ ብሓደ ኣስፋፊሐ ዘቕርቦ ወጽዓ ዩ. ምኽፋሎምን ምጭናቕን ይከኣሉ.",
          "ሕጊ: ናይ ተመሳሳሊ ወጽዓ ኮፊሺየንት ምኽፋሎም. ቋሚ ወጽዓ ምስ ናቶም ይጥርነፉ.",
          "ምሳሌ: 3x + 5x = 8x; 4x + 3 + 2x − 1 = 6x + 2.",
          "ኣገዳሲ: 3x ን 3x² ተመሳሳሊ ወጽዓ ኣይኮኑን.",
        ],
        uk: [
          "Подібні доданки мають однакову змінну з однаковим показником. Їх можна додавати або віднімати.",
          "Правило: зводимо подібні доданки, додаючи їхні коефіцієнти.",
          "Приклади: 3x + 5x = 8x; 7a − 2a = 5a; 4x + 3 + 2x − 1 = 6x + 2.",
          "Важливо: 3x і 3x² НЕ є подібними (різні показники); 3x і 3y — теж ні.",
        ],
      },
    },
    exercises: [
      { id: "a9-4-e1", promptFr: "Réduis 5x + 3x.", type: "short_text", acceptable: ["8x"] },
      { id: "a9-4-e2", promptFr: "Réduis 7a − 2a + 4.", type: "short_text", acceptable: ["5a+4", "5a + 4"] },
      { id: "a9-4-e3", promptFr: "Réduis 3x + 2 + 4x − 5.", type: "short_text", acceptable: ["7x-3", "7x − 3"] },
      { id: "a9-4-e4", promptFr: "Réduis 6y − y.", type: "short_text", acceptable: ["5y"] },
      { id: "a9-4-e5", promptFr: "Est-ce que 4x et 4x² sont des termes semblables ? (oui/non)", type: "short_text", acceptable: ["non"] },
    ],
  };
