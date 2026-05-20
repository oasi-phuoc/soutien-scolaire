import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_2_LESSON: MathSubmoduleLesson = {
    submoduleId: "A12-2",
    submoduleCode: "A12.2",
    theory: {
      title: {
        fr: "Méthode d'addition / soustraction",
        en: "Addition / subtraction method (elimination)",
        ar: "طريقة الجمع والطرح (الحذف)",
        fa: "روش جمع / تفریق (حذف)",
        ti: "ኣፈጻጽማ ምኽፋሎ / ምቕናስ",
        uk: "Метод додавання / віднімання (виключення)",
      },
      paragraphs: {
        fr: [
          "La méthode d'élimination (ou par combinaison linéaire) consiste à additionner ou soustraire les équations pour éliminer une inconnue.",
          "Étapes : (1) si nécessaire, multiplier une équation (ou les deux) pour que les coefficients d'une inconnue soient opposés ; (2) additionner les équations membre à membre ; (3) résoudre l'équation résultante ; (4) trouver la deuxième inconnue.",
          "Exemple : { 2x + 3y = 12 ; 2x − y = 4 }. Soustraction : (2x + 3y) − (2x − y) = 12 − 4 → 4y = 8 → y = 2. Puis 2x + 6 = 12 → x = 3.",
          "Si les coefficients ne s'éliminent pas directement : { 3x + 2y = 7 ; x − y = 1 }. Multiplie la 2ᵉ par 2 → { 3x + 2y = 7 ; 2x − 2y = 2 }. Addition : 5x = 9 → x = 9/5.",
        ],
        en: [
          "The elimination method adds or subtracts equations to remove one unknown.",
          "Steps: (1) if needed, multiply equations so one unknown's coefficients are opposites; (2) add equations; (3) solve; (4) find the second unknown.",
          "Example: { 2x + 3y = 12; 2x − y = 4 }. Subtract: 4y = 8 → y = 2. Then 2x + 6 = 12 → x = 3.",
          "When coefficients don't cancel directly, multiply first: { 3x + 2y = 7; x − y = 1 } → multiply 2nd by 2 → add → 5x = 9.",
        ],
        ar: [
          "طريقة الحذف تجمع المعادلتين أو تطرحهما للتخلص من مجهول.",
          "الخطوات: (1) إذا لزم اضرب معادلة لجعل معاملات مجهول متضادة؛ (2) اجمع؛ (3) حل؛ (4) أوجد المجهول الثاني.",
          "مثال: { 2x + 3y = 12؛ 2x − y = 4 }. الطرح: 4y = 8 → y = 2 → x = 3.",
          "عند عدم التطابق المباشر اضرب أولاً.",
        ],
        fa: [
          "روش حذف معادلات را جمع یا تفریق می‌کند تا یک مجهول حذف شود.",
          "مراحل: (1) در صورت لزوم یک معادله را ضرب کن؛ (2) جمع کن؛ (3) حل کن؛ (4) مجهول دوم را بیاب.",
          "مثال: { 2x + 3y = 12؛ 2x − y = 4 } → 4y = 8 → y = 2 → x = 3.",
          "اگر ضرایب مستقیم حذف نشدند، ابتدا در عدد ضرب کن.",
        ],
        ti: [
          "ናይ ምኽፋሎ ኣፈጻጽማ ምዕርርያ ምኽፋሎ ወይ ምቕናስ ሓደ ዘይፍለጥ ንምኻናን.",
          "ስጉምቲ: (1) ምስ ዘድሊ ናይ ምዕርርያ ኮፊሺየንት ተቃራኒ ንምግባር ምርባሕ; (2) ምኽፋሎ; (3) ምፍታሕ; (4) ካልኣይ ዘይፍለጥ ምርካብ.",
          "ምሳሌ: { 2x + 3y = 12; 2x − y = 4 } → 4y = 8 → y = 2 → x = 3.",
          "ቀጥታዊ ምኻናን ዘይከኣሉ ምስ ዝኸውን ቅድም ምርባሕ.",
        ],
        uk: [
          "Метод виключення — додавання або віднімання рівнянь для усунення однієї невідомої.",
          "Кроки: (1) за потреби домножити рівняння; (2) скласти рівняння; (3) розв'язати; (4) знайти другу невідому.",
          "Приклад: { 2x + 3y = 12; 2x − y = 4 } → 4y = 8 → y = 2 → x = 3.",
          "Якщо не скорочуються напряму — спочатку помножити.",
        ],
      },
    },
    exercises: [
      { id: "a12-2-e1", promptFr: "Résous par élimination : { x + y = 8 ; x − y = 2 }. Trouve x.", type: "number", acceptable: ["5"] },
      { id: "a12-2-e2", promptFr: "Résous par élimination : { x + y = 8 ; x − y = 2 }. Trouve y.", type: "number", acceptable: ["3"] },
      { id: "a12-2-e3", promptFr: "Résous : { 3x + 2y = 10 ; 3x − 2y = 2 }. Trouve x.", type: "number", acceptable: ["2"] },
      { id: "a12-2-e4", promptFr: "Résous : { 3x + 2y = 10 ; 3x − 2y = 2 }. Trouve y.", type: "number", acceptable: ["2"] },
      { id: "a12-2-e5", promptFr: "Résous : { 2x + y = 9 ; x + y = 6 }. Trouve x.", type: "number", acceptable: ["3"] },
    ],
  };
