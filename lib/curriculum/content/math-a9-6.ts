import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A9_6_LESSON: MathSubmoduleLesson = {
    submoduleId: "A9-6",
    submoduleCode: "A9.6",
    theory: {
      title: {
        fr: "Factorisation simple",
        en: "Simple factoring",
        ar: "التحليل البسيط",
        fa: "فاکتورگیری ساده",
        ti: "ቀሊል ምፍራድ",
        uk: "Просте винесення за дужки",
      },
      paragraphs: {
        fr: [
          "Factoriser est l'opération inverse du développement : on met en facteur commun.",
          "Méthode : identifier le plus grand facteur commun (GCF) des termes, le mettre devant une parenthèse.",
          "Exemples : 6x + 9 = 3(2x + 3) ; 10a − 15 = 5(2a − 3) ; 4x² + 8x = 4x(x + 2).",
          "Vérification : en développant, on doit retrouver l'expression de départ.",
        ],
        en: [
          "Factoring is the inverse of expanding: we extract a common factor.",
          "Method: identify the greatest common factor (GCF) of all terms, place it before a bracket.",
          "Examples: 6x + 9 = 3(2x + 3); 10a − 15 = 5(2a − 3); 4x² + 8x = 4x(x + 2).",
          "Check: by expanding, you should get back the original expression.",
        ],
        ar: [
          "التحليل هو العكس من التوسيع: نستخرج العامل المشترك.",
          "الطريقة: حدد أكبر قاسم مشترك لجميع الحدود وضعه أمام قوس.",
          "أمثلة: 6x + 9 = 3(2x + 3)؛ 4x² + 8x = 4x(x + 2).",
          "تحقق: بالتوسيع يجب أن تعود إلى التعبير الأصلي.",
        ],
        fa: [
          "فاکتورگیری عکس توسعه است: عامل مشترک را بیرون می‌آوریم.",
          "روش: بزرگ‌ترین عامل مشترک همه جملات را پیدا کن و جلوی پرانتز بگذار.",
          "مثال‌ها: 6x + 9 = 3(2x + 3)؛ 4x² + 8x = 4x(x + 2).",
          "تأیید: با توسعه باید به عبارت اولیه برگردی.",
        ],
        ti: [
          "ምፍራድ ናይ ምስፋሕ ተቃራኒ ዩ: ናይ ሓባር ሰረት ምሃብ.",
          "ኣፈጻጽማ: ዝለቀ ናይ ሓባር ሰረት ኩሉ ወጽዓ ምርካብ ቅድሚ ቅርሕ ምስፋሕ.",
          "ምሳሌ: 6x + 9 = 3(2x + 3); 4x² + 8x = 4x(x + 2).",
          "ፍተሻ: ምስ ምስፋሕ ናብ ናህሰ ኣዝማሪ ምምላስ.",
        ],
        uk: [
          "Факторизація — операція, обернена до розкриття дужок: виносимо спільний множник.",
          "Метод: знайти НСД усіх доданків і винести його за дужки.",
          "Приклади: 6x + 9 = 3(2x + 3); 10a − 15 = 5(2a − 3); 4x² + 8x = 4x(x + 2).",
          "Перевірка: після розкриття дужок має вийти початковий вираз.",
        ],
      },
    },
    exercises: [
      { id: "a9-6-e1", promptFr: "Factorise 4x + 8.", type: "short_text", acceptable: ["4(x+2)", "4(x + 2)"] },
      { id: "a9-6-e2", promptFr: "Factorise 9a − 12.", type: "short_text", acceptable: ["3(3a-4)", "3(3a − 4)"] },
      { id: "a9-6-e3", promptFr: "Factorise 6x² + 9x.", type: "short_text", acceptable: ["3x(2x+3)", "3x(2x + 3)"] },
      { id: "a9-6-e4", promptFr: "Quel est le facteur commun de 10x + 15 ?", type: "number", acceptable: ["5"] },
      { id: "a9-6-e5", promptFr: "Factorise 8a − 4.", type: "short_text", acceptable: ["4(2a-1)", "4(2a − 1)"] },
    ],
  };
