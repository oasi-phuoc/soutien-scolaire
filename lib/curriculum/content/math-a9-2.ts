import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-2",
    submoduleCode: "A9.2",
    theory: {
      title: {
        fr: "Lire et écrire une expression algébrique",
        en: "Reading and writing an algebraic expression",
        ar: "قراءة وكتابة تعبير جبري",
        fa: "خواندن و نوشتن عبارت جبری",
        ti: "ናይ ኣልጀብራ ኣዝማሪ ምንባብን ምጽሓፍን",
        uk: "Читання та запис алгебраїчного виразу",
      },
      paragraphs: {
        fr: [
          "Une expression algébrique est une combinaison de nombres, de variables et d'opérations. Exemples : 3x + 2 ; 5a − b ; x² + 4x − 7.",
          "Conventions d'écriture : on omet le signe × entre un nombre et une variable (3x signifie 3 × x). On écrit le coefficient avant la variable.",
          "Vocabulaire : terme (partie séparée par + ou −), coefficient (nombre devant la variable), terme constant (sans variable).",
          "Exemples : dans 4x² − 3x + 7, les termes sont 4x², −3x, et 7. Les coefficients sont 4 et −3. 7 est le terme constant.",
        ],
        en: [
          "An algebraic expression is a combination of numbers, variables, and operations. Examples: 3x + 2; 5a − b; x² + 4x − 7.",
          "Writing conventions: omit the × sign between a number and a variable (3x means 3 × x). Write the coefficient before the variable.",
          "Vocabulary: term (part separated by + or −), coefficient (number in front of variable), constant term (no variable).",
          "Examples: in 4x² − 3x + 7, the terms are 4x², −3x, and 7; coefficients are 4 and −3; 7 is constant.",
        ],
        ar: [
          "التعبير الجبري هو تركيبة من أعداد ومتغيرات وعمليات. أمثلة: 3x + 2؛ x² + 4x − 7.",
          "قواعد الكتابة: نحذف علامة × بين عدد ومتغير (3x تعني 3 × x). يُكتب المعامل قبل المتغير.",
          "مفردات: حد (قسم يفصله + أو −)، معامل (عدد أمام المتغير)، حد ثابت (بدون متغير).",
          "مثال: في 4x² − 3x + 7، الحدود هي 4x² و −3x و 7. المعاملات 4 و−3.",
        ],
        fa: [
          "عبارت جبری ترکیبی از اعداد، متغیرها و عملگرهاست. مثال: 3x + 2؛ x² + 4x − 7.",
          "قراردادهای نوشتن: علامت × بین عدد و متغیر حذف می‌شود (3x یعنی 3 × x).",
          "واژگان: جمله (بخشی که با + یا − جدا می‌شود)، ضریب (عدد جلوی متغیر)، جمله ثابت (بدون متغیر).",
          "مثال: در 4x² − 3x + 7، جملات 4x²، −3x، و 7 هستند.",
        ],
        ti: [
          "ናይ ኣልጀብራ ኣዝማሪ ናይ ቁጽርታትን ተለዋዋጢን ናይ ስራሕ ጥምረት ዩ. ምሳሌ: 3x + 2; x² + 4x − 7.",
          "ናይ ምጽሓፍ ስምምዕ: × ምልክት ካብ ቁጽርን ተለዋዋጢ ጊዜ ይምሕዶ (3x ዘምልክት 3 × x ዩ).",
          "ቃለ-ቃለ: ወጽዓ (ካብ + ወይ − ዝፈለ ክፋል), ኮፊሺየንት (ቁጽሪ ቅድሚ ተለዋዋጢ), ቋሚ ወጽዓ (ብዘይ ተለዋዋጢ).",
          "ምሳሌ: 4x² − 3x + 7 ዘሎ ወጽዓ 4x², −3x, 7 ዩ.",
        ],
        uk: [
          "Алгебраїчний вираз — це поєднання чисел, змінних і операцій. Приклади: 3x + 2; x² + 4x − 7.",
          "Правила запису: знак × між числом і змінною опускається (3x означає 3 × x). Коефіцієнт пишуть перед змінною.",
          "Словник: доданок (частина, відділена + або −), коефіцієнт (число перед змінною), вільний член (без змінної).",
          "Приклад: у 4x² − 3x + 7 доданки: 4x², −3x, 7; коефіцієнти: 4 і −3; 7 — вільний член.",
        ],
      },
    },
    exercises: [
      { id: "a9-2-e1", promptFr: "Dans 5x − 3, quel est le coefficient de x ?", type: "number", acceptable: ["5"] },
      { id: "a9-2-e2", promptFr: "Dans 7x² + 2x − 9, quel est le terme constant ?", type: "number", acceptable: ["-9", "−9"] },
      { id: "a9-2-e3", promptFr: "Combien de termes a l'expression 4a + 3b − 1 ?", type: "number", acceptable: ["3"] },
      { id: "a9-2-e4", promptFr: "Écris 'deux fois x plus cinq' comme expression.", type: "short_text", acceptable: ["2x+5", "2x + 5"] },
      { id: "a9-2-e5", promptFr: "Dans 6y, quel est le coefficient ?", type: "number", acceptable: ["6"] },
    ],
  };
