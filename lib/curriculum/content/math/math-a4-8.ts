import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_8_LESSON: MathSubmoduleLesson = {
  submoduleId: "A4-8",
  submoduleCode: "A4.8",
  theory: {
    title: { fr: "Division de fractions (inverse)", en: "Division of fractions (inverse)", ar: "قسمة الكسور (المعكوس)", fa: "تقسیم کسرها (معکوس)", ti: "ክፍፍል ፍርቂ (ተቃራኒ)", uk: "Ділення дробів (обернений дріб)" },
    paragraphs: {
      fr: [
        "L'inverse (ou réciproque) d'une fraction a/b est b/a. On échange numérateur et dénominateur. Exemple : l'inverse de 3/4 est 4/3.",
        "Pour diviser une fraction par une autre, on multiplie par l'inverse du diviseur. (a/b) ÷ (c/d) = (a/b) × (d/c) = (a×d)/(b×c).",
        "Exemple : (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
      ],
      en: [
        "The inverse (reciprocal) of a/b is b/a. Swap numerator and denominator. Example: inverse of 3/4 is 4/3.",
        "To divide one fraction by another, multiply by the reciprocal of the divisor. (a/b) ÷ (c/d) = (a/b) × (d/c).",
        "Example: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
      ],
      ar: [
        "معكوس الكسر a/b هو b/a. نبدّل البسط والمقام. مثال: معكوس 3/4 هو 4/3.",
        "لقسمة كسر على آخر، نضرب في معكوس المقسوم عليه. (a/b) ÷ (c/d) = (a/b) × (d/c).",
        "مثال: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
      ],
      fa: [
        "معکوس کسر a/b عبارت است از b/a. صورت و مخرج را جابجا کنید. مثال: معکوس ۳/۴ عبارت است از ۴/۳.",
        "برای تقسیم یک کسر بر کسر دیگر، در معکوس مقسوم‌علیه ضرب کنید. (a/b) ÷ (c/d) = (a/b) × (d/c).",
        "مثال: (۳/۴) ÷ (۲/۵) = (۳/۴) × (۵/۲) = ۱۵/۸.",
      ],
      ti: [
        "ተቃራኒ ናይ a/b b/a እዩ። ዝለዓለ ምስ ሚዛን ቁጽሪ ቅደም ቅይሮ። ኣብነት: ተቃራኒ ናይ 3/4 4/3 እዩ.",
        "ሓደ ፍርቂ ብካሊእ ምካፋፍ ብተቃራኒ ናይ ካፋሊ ምዝርፋፍ ማለት እዩ። (a/b) ÷ (c/d) = (a/b) × (d/c).",
        "ኣብነት: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
      ],
      uk: [
        "Обернений дріб (обернений) до a/b — це b/a. Міняємо чисельник і знаменник. Приклад: обернений до 3/4 — це 4/3.",
        "Щоб поділити один дріб на інший, множимо на обернений дільник. (a/b) ÷ (c/d) = (a/b) × (d/c).",
        "Приклад: (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8.",
      ],
    },
  },
  exercises: [
    { id: "a4-8-e1", promptFr: "Quel est l'inverse de 3/4 ?", type: "short_text", acceptable: ["4/3"] },
    { id: "a4-8-e2", promptFr: "Calculez (3/4) ÷ (2/5).", type: "short_text", acceptable: ["15/8"] },
    { id: "a4-8-e3", promptFr: "Calculez (2/3) ÷ (4/9).", type: "short_text", acceptable: ["3/2", "18/12"] },
    { id: "a4-8-e4", promptFr: "Calculez (5/6) ÷ (5/3).", type: "short_text", acceptable: ["1/2", "15/30"] },
    { id: "a4-8-e5", promptFr: "Calculez (7/8) ÷ (7/4).", type: "short_text", acceptable: ["1/2", "28/56"] },
  ],
};
