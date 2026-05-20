import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "A12-3",
    submoduleCode: "A12.3",
    theory: {
      title: {
        fr: "Problèmes à deux inconnues",
        en: "Problems with two unknowns",
        ar: "مسائل بمجهولين",
        fa: "مسائل با دو مجهول",
        ti: "ጸገማት ምስ ክልተ ዘይፍለጥ",
        uk: "Задачі з двома невідомими",
      },
      paragraphs: {
        fr: [
          "Pour résoudre un problème à deux inconnues : (1) nommer x et y les deux quantités cherchées ; (2) traduire les deux conditions de l'énoncé en deux équations ; (3) résoudre le système ; (4) répondre.",
          "Exemple : « Des billets d'adulte coûtent 8 € et d'enfant 5 €. 10 personnes paient 68 €. Combien d'adultes ? » → x + y = 10 ; 8x + 5y = 68. Substitution : x = 10 − y → 8(10 − y) + 5y = 68 → 80 − 3y = 68 → y = 4 (enfants). x = 6 adultes.",
          "Exemple grandeurs liées : « 2 stylos + 3 cahiers = 8,50 € ; 4 stylos + 1 cahier = 9 €. » → 2x + 3y = 8,50 ; 4x + y = 9. Élimination : …",
          "Toujours exprimer clairement ce que représentent x et y avant de poser les équations.",
        ],
        en: [
          "To solve a two-unknown problem: (1) name x and y; (2) write two equations from the two conditions; (3) solve the system; (4) answer.",
          "Example: adult tickets = 8 €, child = 5 €, 10 people pay 68 €. → x + y = 10; 8x + 5y = 68 → 6 adults.",
          "Always clearly state what x and y represent before writing the equations.",
        ],
        ar: [
          "لحل مسألة بمجهولين: (1) اسمِّ x وy؛ (2) اكتب معادلتين؛ (3) حل النظام؛ (4) أجب.",
          "مثال: تذاكر بالغ 8 €، طفل 5 €، 10 أشخاص يدفعون 68 €. → x + y = 10؛ 8x + 5y = 68 → 6 بالغين.",
          "عبّر دائماً بوضوح عمّا يمثله x وy قبل كتابة المعادلات.",
        ],
        fa: [
          "برای حل مسئله با دو مجهول: (1) x و y را نام‌گذاری کن؛ (2) دو معادله بنویس؛ (3) دستگاه را حل کن؛ (4) جواب بده.",
          "مثال: بلیط بزرگسال 8 €، بچه 5 €، 10 نفر 68 € می‌پردازند. → 6 بزرگسال.",
          "همیشه x و y را قبل از نوشتن معادلات به وضوح تعریف کن.",
        ],
        ti: [
          "ጸገም ምስ ክልተ ዘይፍለጥ ምፍታሕ: (1) x ን y ምስማዩ; (2) ክልተ ምዕርርያ ምጽሓፍ; (3) ስርዓት ምፍታሕ; (4) ምምላስ.",
          "ምሳሌ: ናይ ዓቢ ሸቀልቲ 8 €, ቆልዓ 5 €, 10 ሰባት 68 € ክፈሉ → 6 ዓበይቲ.",
          "x ን y ቅድሚ ምዕርርያ ምጽሓፍ ብሩህ ምምሓዳሮም.",
        ],
        uk: [
          "Розв'язання задачі з двома невідомими: (1) назвати x і y; (2) скласти два рівняння з умов; (3) розв'язати систему; (4) відповісти.",
          "Приклад: квиток дорослого 8 €, дитини 5 €, 10 осіб платять 68 €. → 6 дорослих.",
          "Завжди чітко описувати, що означають x і y, перед складанням рівнянь.",
        ],
      },
    },
    exercises: [
      { id: "a12-3-e1", promptFr: "La somme de deux nombres est 15 et leur différence est 3. Quel est le plus grand ?", type: "number", acceptable: ["9"] },
      { id: "a12-3-e2", promptFr: "La somme de deux nombres est 15 et leur différence est 3. Quel est le plus petit ?", type: "number", acceptable: ["6"] },
      { id: "a12-3-e3", promptFr: "2 pommes + 3 bananes = 7 €. 4 pommes + 1 banane = 6 €. Prix d'une pomme (en €) ?", type: "number", acceptable: ["1"] },
      { id: "a12-3-e4", promptFr: "2 pommes + 3 bananes = 7 €. 4 pommes + 1 banane = 6 €. Prix d'une banane (en €) ?", type: "number", acceptable: ["2", "1.67"] },
      { id: "a12-3-e5", promptFr: "Un père a 4 fois l'âge de son fils. Dans 6 ans il aura 2 fois son âge. Quel est l'âge actuel du fils ?", type: "number", acceptable: ["6"] },
    ],
  };
