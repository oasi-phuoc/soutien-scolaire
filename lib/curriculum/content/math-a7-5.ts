import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A7_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A7-5",
    submoduleCode: "A7.5",
    theory: {
      title: { fr: "Valeur absolue", en: "Absolute value", ar: "القيمة المطلقة", fa: "قدر مطلق", ti: "ናይ ቁጽሪ ዋጋ", uk: "Абсолютна величина" },
      paragraphs: {
        fr: [
          "La valeur absolue d'un nombre est sa distance à 0 sur la droite numérique. Elle est toujours positive ou nulle. Notation : |a|.",
          "Exemples : |−5| = 5. |+5| = 5. |0| = 0. |−3,7| = 3,7.",
          "La valeur absolue permet de mesurer la « grandeur » d'un nombre sans tenir compte du signe. Exemple : −8 et +8 ont la même valeur absolue (8), mais sont opposés.",
        ],
        en: [
          "The absolute value of a number is its distance from 0 on the number line. It is always positive or zero. Notation: |a|.",
          "Examples: |−5| = 5. |+5| = 5. |0| = 0. |−3.7| = 3.7.",
          "Absolute value measures the 'size' of a number regardless of sign. Example: −8 and +8 have the same absolute value (8) but are opposites.",
        ],
        ar: [
          "القيمة المطلقة لعدد هي مسافته من 0 على محور الأعداد. هي دائمًا موجبة أو صفرية. الرمز: |a|.",
          "أمثلة: |−5| = 5. |+5| = 5. |0| = 0. |−3,7| = 3,7.",
          "القيمة المطلقة تقيس 'حجم' العدد بصرف النظر عن إشارته. مثال: −8 و+8 لهما نفس القيمة المطلقة (8) لكنهما متعاكسان.",
        ],
        fa: [
          "قدر مطلق یک عدد فاصله آن از ۰ روی محور عددی است. همیشه مثبت یا صفر است. نماد: |a|.",
          "مثال‌ها: |−۵| = ۵. |+۵| = ۵. |۰| = ۰. |−۳,۷| = ۳,۷.",
          "قدر مطلق «اندازه» یک عدد را بدون توجه به علامت اندازه می‌گیرد. مثال: −۸ و +۸ قدر مطلق یکسانی دارند (۸) اما مخالف هستند.",
        ],
        ti: [
          "ናይ ሓደ ቁጽሪ ናይ ቁጽሪ ዋጋ ካብ 0 ናይ ቁጽሪ ሰሌዳ ምርቀቱ እዩ። ኩሉ ጊዜ ንጉስ ወይ ዜሮ እዩ። ምልክቱ: |a|.",
          "ኣብነት: |−5| = 5. |+5| = 5. |0| = 0. |−3,7| = 3,7.",
          "ናይ ቁጽሪ ዋጋ ናይ ምልክት ዘይቈጽር 'ዓቐን' ናይ ቁጽሪ ዝዕቅን እዩ። ኣብነት: −8 ምስ +8 ሓደ ናይ ቁጽሪ ዋጋ (8) ኣለዎ ኮነ ተቃርኒ እዮም።",
        ],
        uk: [
          "Абсолютна величина числа — це його відстань від 0 на числовій прямій. Завжди невід'ємна. Позначення: |a|.",
          "Приклади: |−5| = 5. |+5| = 5. |0| = 0. |−3,7| = 3,7.",
          "Абсолютна величина вимірює «розмір» числа незалежно від знаку. Приклад: −8 і +8 мають однакову абсолютну величину (8), але протилежні.",
        ],
      },
    },
    exercises: [
      { id: "a7-5-e1", promptFr: "Calculez |−5|.", type: "number", acceptable: ["5"] },
      { id: "a7-5-e2", promptFr: "Calculez |+8|.", type: "number", acceptable: ["8"] },
      { id: "a7-5-e3", promptFr: "Calculez |−3,7|.", type: "short_text", acceptable: ["3,7", "3.7"] },
      { id: "a7-5-e4", promptFr: "Quel nombre a la même valeur absolue que −12 ?", type: "number", acceptable: ["12", "+12"] },
      { id: "a7-5-e5", promptFr: "Est-ce que |−9| = |+9| ? (oui/non)", type: "short_text", acceptable: ["oui", "yes"] },
    ],
  };
