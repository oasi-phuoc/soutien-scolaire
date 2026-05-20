import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A4_9_LESSON: MathSubmoduleLesson = {
  submoduleId: "A4-9",
  submoduleCode: "A4.9",
  theory: {
    title: { fr: "Fractions et décimaux", en: "Fractions and decimals", ar: "الكسور والأعداد العشرية", fa: "کسرها و اعشار", ti: "ፍርቂ ምስ ቁጽሪ ቪርጉላ", uk: "Дроби і десяткові числа" },
    paragraphs: {
      fr: [
        "Pour transformer une fraction en nombre décimal, on divise le numérateur par le dénominateur. Exemple : 3/4 = 3 ÷ 4 = 0,75.",
        "Quelques conversions utiles : 1/2 = 0,5 ; 1/4 = 0,25 ; 3/4 = 0,75 ; 1/3 ≈ 0,333… ; 2/3 ≈ 0,667…",
        "Pour transformer un nombre décimal en fraction, on écrit le nombre sans virgule au numérateur, et une puissance de 10 au dénominateur selon le nombre de décimales. Exemple : 0,75 = 75/100 = 3/4 (simplifié).",
      ],
      en: [
        "To convert a fraction to a decimal, divide the numerator by the denominator. Example: 3/4 = 3 ÷ 4 = 0.75.",
        "Useful conversions: 1/2=0.5; 1/4=0.25; 3/4=0.75; 1/3≈0.333…; 2/3≈0.667…",
        "To convert a decimal to a fraction, write the number without decimal point as the numerator, and a power of 10 as the denominator based on the number of decimal places. Example: 0.75 = 75/100 = 3/4.",
      ],
      ar: [
        "لتحويل كسر إلى عدد عشري، نقسم البسط على المقام. مثال: 3/4 = 3 ÷ 4 = 0,75.",
        "تحويلات مفيدة: 1/2=0,5 ; 1/4=0,25 ; 3/4=0,75 ; 1/3≈0,333… ; 2/3≈0,667…",
        "لتحويل عدد عشري إلى كسر، نكتب العدد بدون فاصلة في البسط وقوة من 10 في المقام حسب عدد الخانات العشرية. مثال: 0,75 = 75/100 = 3/4.",
      ],
      fa: [
        "برای تبدیل کسر به عدد اعشاری، صورت را بر مخرج تقسیم کنید. مثال: ۳/۴ = ۳ ÷ ۴ = ۰٫۷۵.",
        "تبدیل‌های مفید: ۱/۲=۰٫۵؛ ۱/۴=۰٫۲۵؛ ۳/۴=۰٫۷۵؛ ۱/۳≈۰٫۳۳۳…؛ ۲/۳≈۰٫۶۶۷…",
        "برای تبدیل عدد اعشاری به کسر، عدد بدون اعشار را صورت کنید و توانی از ۱۰ را بر اساس تعداد اعشار به عنوان مخرج قرار دهید. مثال: ۰٫۷۵ = ۷۵/۱۰۰ = ۳/۴.",
      ],
      ti: [
        "ፍርቂ ናብ ቁጽሪ ቪርጉላ ምቅያር ዝለዓለ ቁጽሪ ብሚዛን ቁጽሪ ምካፋፍ ማለት እዩ። ኣብነት: 3/4 = 3 ÷ 4 = 0,75.",
        "ጠቃሚ ቅያሮ: 1/2=0,5; 1/4=0,25; 3/4=0,75; 1/3≈0,333…; 2/3≈0,667…",
        "ቁጽሪ ቪርጉላ ናብ ፍርቂ ምቅያር ቪርጉላ ዘይብሉ ቁጽሪ ዝለዓለ ቁጽሪ ናይ ሚዛን ቁጽሪ ናይ ዓሰርተ ሓይሊ ብቁጽሪ ቪርጉላ። ኣብነት: 0,75 = 75/100 = 3/4.",
      ],
      uk: [
        "Щоб перетворити дріб у десятковий дріб, поділіть чисельник на знаменник. Приклад: 3/4 = 3 ÷ 4 = 0,75.",
        "Корисні перетворення: 1/2=0,5; 1/4=0,25; 3/4=0,75; 1/3≈0,333…; 2/3≈0,667…",
        "Щоб перетворити десятковий дріб у звичайний, запишіть число без коми як чисельник, і степінь 10 (за кількістю десяткових знаків) як знаменник. Приклад: 0,75 = 75/100 = 3/4.",
      ],
    },
  },
  exercises: [
    { id: "a4-9-e1", promptFr: "Transformez 3/4 en nombre décimal.", type: "number", acceptable: ["0.75", "0,75"] },
    { id: "a4-9-e2", promptFr: "Transformez 1/2 en nombre décimal.", type: "number", acceptable: ["0.5", "0,5"] },
    { id: "a4-9-e3", promptFr: "Transformez 0,25 en fraction simplifiée.", type: "short_text", acceptable: ["1/4"] },
    { id: "a4-9-e4", promptFr: "Transformez 0,6 en fraction (puis simplifiez).", type: "short_text", acceptable: ["3/5", "6/10"] },
    { id: "a4-9-e5", promptFr: "Transformez 1/5 en nombre décimal.", type: "number", acceptable: ["0.2", "0,2"] },
  ],
};
