import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-5",
    submoduleCode: "A9.5",
    theory: {
      title: {
        fr: "Développement simple",
        en: "Simple expansion",
        ar: "التوسيع البسيط",
        fa: "توسعه ساده",
        ti: "ቀሊል ምስፋሕ",
        uk: "Просте розкриття дужок",
      },
      paragraphs: {
        fr: [
          "Développer signifie supprimer les parenthèses en distribuant la multiplication. Propriété distributive : a(b + c) = ab + ac.",
          "Exemples : 3(x + 4) = 3x + 12 ; 2(a − 5) = 2a − 10 ; −3(2x + 1) = −6x − 3.",
          "Quand le facteur est négatif, tous les signes changent : −2(x − 3) = −2x + 6.",
          "Développement de (a + b)(c + d) = ac + ad + bc + bd (double distribution).",
        ],
        en: [
          "Expanding means removing parentheses by distributing multiplication. Distributive property: a(b + c) = ab + ac.",
          "Examples: 3(x + 4) = 3x + 12; 2(a − 5) = 2a − 10; −3(2x + 1) = −6x − 3.",
          "When the factor is negative, all signs change: −2(x − 3) = −2x + 6.",
          "Expansion of (a + b)(c + d) = ac + ad + bc + bd.",
        ],
        ar: [
          "التوسيع يعني إزالة الأقواس بتوزيع الضرب. الخاصية التوزيعية: a(b + c) = ab + ac.",
          "أمثلة: 3(x + 4) = 3x + 12؛ −3(2x + 1) = −6x − 3.",
          "عندما يكون العامل سالباً تتغير جميع الإشارات: −2(x − 3) = −2x + 6.",
          "(a + b)(c + d) = ac + ad + bc + bd.",
        ],
        fa: [
          "توسعه یعنی حذف پرانتز با توزیع ضرب. ویژگی توزیعی: a(b + c) = ab + ac.",
          "مثال‌ها: 3(x + 4) = 3x + 12؛ −3(2x + 1) = −6x − 3.",
          "وقتی ضریب منفی است همه علائم عوض می‌شوند: −2(x − 3) = −2x + 6.",
          "(a + b)(c + d) = ac + ad + bc + bd.",
        ],
        ti: [
          "ምስፋሕ ዘምልክት ምርባሕ ብምስፋሕ ቅርሕ ምኹናን ዩ. ናይ ምክፋል ንብረት: a(b + c) = ab + ac.",
          "ምሳሌ: 3(x + 4) = 3x + 12; −3(2x + 1) = −6x − 3.",
          "ምስ ኣሉታዊ ኮፊሺየንት ኩሉ ምልክት ይቐይር: −2(x − 3) = −2x + 6.",
          "(a + b)(c + d) = ac + ad + bc + bd.",
        ],
        uk: [
          "Розкрити дужки — означає прибрати їх, розподіляючи множення. Розподільна властивість: a(b + c) = ab + ac.",
          "Приклади: 3(x + 4) = 3x + 12; −3(2x + 1) = −6x − 3.",
          "Якщо множник від'ємний, усі знаки змінюються: −2(x − 3) = −2x + 6.",
          "(a + b)(c + d) = ac + ad + bc + bd.",
        ],
      },
    },
    exercises: [
      { id: "a9-5-e1", promptFr: "Développe 4(x + 3).", type: "short_text", acceptable: ["4x+12", "4x + 12"] },
      { id: "a9-5-e2", promptFr: "Développe 2(3a − 5).", type: "short_text", acceptable: ["6a-10", "6a − 10"] },
      { id: "a9-5-e3", promptFr: "Développe −3(x + 2).", type: "short_text", acceptable: ["-3x-6", "−3x − 6"] },
      { id: "a9-5-e4", promptFr: "Développe et réduis 2(x + 1) + 3x.", type: "short_text", acceptable: ["5x+2", "5x + 2"] },
      { id: "a9-5-e5", promptFr: "Développe −2(x − 4).", type: "short_text", acceptable: ["-2x+8", "−2x + 8"] },
    ],
  };
