import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_5_LESSON: MathSubmoduleLesson = {
    submoduleId: "A4-5",
    submoduleCode: "A4.5",
    theory: {
      title: { fr: "Addition/soustraction même dénominateur", en: "Add/subtract same denominator", ar: "الجمع والطرح بنفس المقام", fa: "جمع/تفریق با مخرج یکسان", ti: "ምደማር/ምቅናስ ሓደ ሚዛን", uk: "Додавання/віднімання однаковий знаменник" },
      paragraphs: {
        fr: [
          "Pour additionner ou soustraire deux fractions qui ont le même dénominateur, on additionne ou soustrait les numérateurs et on garde le même dénominateur.",
          "Exemples : 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (simplifié).",
          "On simplifie le résultat si possible en divisant par le PGCD du numérateur et du dénominateur.",
        ],
        en: [
          "To add or subtract fractions with the same denominator, add or subtract the numerators and keep the same denominator.",
          "Examples: 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (simplified).",
          "Simplify the result if possible by dividing by the GCD of numerator and denominator.",
        ],
        ar: [
          "لجمع أو طرح كسرين بنفس المقام، نجمع أو نطرح البسطين ونحتفظ بنفس المقام.",
          "أمثلة: 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (مبسّط).",
          "نبسّط الناتج إذا أمكن بالقسمة على ق.م.أ للبسط والمقام.",
        ],
        fa: [
          "برای جمع یا تفریق دو کسر با مخرج یکسان، صورت‌ها را جمع یا تفریق کنید و مخرج را نگه دارید.",
          "مثال‌ها: ۳/۷ + ۲/۷ = ۵/۷. ۵/۸ − ۳/۸ = ۲/۸ = ۱/۴ (ساده شده).",
          "در صورت امکان با تقسیم بر ب.م.م صورت و مخرج را ساده کنید.",
        ],
        ti: [
          "ሓደ ሚዛን ናይ ዘለዎም ክልተ ፍርቂ ምደማር ወይ ምቅናስ ናይ ዝለዓለ ቁጽርታት ምደማር ወይ ምቅናስ ብሓደ ሚዛን ቁጽሪ ምሓዝ ማለት እዩ።",
          "ኣብነት: 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (ቅጸ ዝሓሸ).",
          "ናይ PGCD ናይ ዝለዓለ ምስ ሚዛን ቁጽሪ ምቅጻር እንተተኻኢሉ ቅጸ ዝሓሸ.",
        ],
        uk: [
          "Щоб додати або відняти дроби з однаковим знаменником, додайте або відніміть чисельники та збережіть знаменник.",
          "Приклади: 3/7 + 2/7 = 5/7. 5/8 − 3/8 = 2/8 = 1/4 (спрощено).",
          "Спростіть результат, якщо можливо, поділивши на НСД чисельника і знаменника.",
        ],
      },
    },
    exercises: [
      { id: "a4-5-e1", promptFr: "Calculez 3/7 + 2/7.", type: "short_text", acceptable: ["5/7"] },
      { id: "a4-5-e2", promptFr: "Calculez 5/8 − 3/8 (simplifiez).", type: "short_text", acceptable: ["1/4", "2/8"] },
      { id: "a4-5-e3", promptFr: "Calculez 7/9 − 4/9.", type: "short_text", acceptable: ["3/9", "1/3"] },
      { id: "a4-5-e4", promptFr: "Calculez 2/5 + 4/5 (simplifiez).", type: "short_text", acceptable: ["6/5", "1 1/5"] },
      { id: "a4-5-e5", promptFr: "Calculez 11/12 − 5/12.", type: "short_text", acceptable: ["6/12", "1/2"] },
    ],
  };
