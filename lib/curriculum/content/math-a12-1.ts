import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "A12-1",
    submoduleCode: "A12.1",
    theory: {
      title: {
        fr: "Méthode de substitution",
        en: "Substitution method",
        ar: "طريقة الإحلال",
        fa: "روش جایگذاری",
        ti: "ኣፈጻጽማ ምትካእ",
        uk: "Метод підстановки",
      },
      paragraphs: {
        fr: [
          "Un système de deux équations à deux inconnues admet généralement une solution unique (x, y). La méthode de substitution consiste à exprimer une inconnue en fonction de l'autre, puis à substituer.",
          "Étapes : (1) exprimer x (ou y) depuis l'équation la plus simple ; (2) substituer dans l'autre équation ; (3) résoudre ; (4) trouver la deuxième inconnue ; (5) vérifier dans les deux équations.",
          "Exemple : { x + y = 7 ; 2x − y = 2 }. De la 1ʳᵉ : x = 7 − y. Substitue dans la 2ᵉ : 2(7 − y) − y = 2 → 14 − 2y − y = 2 → 3y = 12 → y = 4. Puis x = 7 − 4 = 3. Solution : (3, 4).",
          "Vérification : 3 + 4 = 7 ✓ ; 2(3) − 4 = 2 ✓.",
        ],
        en: [
          "A system of two equations with two unknowns usually has exactly one solution (x, y). Substitution expresses one unknown in terms of the other, then substitutes.",
          "Steps: (1) express x (or y) from the simpler equation; (2) substitute into the other; (3) solve; (4) find the second unknown; (5) check in both equations.",
          "Example: { x + y = 7; 2x − y = 2 }. From 1st: x = 7 − y. Substitute: 14 − 3y = 2 → y = 4 → x = 3. Solution: (3, 4).",
          "Check: 3 + 4 = 7 ✓; 2(3) − 4 = 2 ✓.",
        ],
        ar: [
          "نظام معادلتين بمجهولين له عادةً حل وحيد (x, y). طريقة الإحلال تعبّر عن مجهول بدلالة الآخر ثم تحله.",
          "الخطوات: (1) عبّر عن x من المعادلة الأبسط؛ (2) عوّض في الأخرى؛ (3) حل؛ (4) أوجد المجهول الثاني؛ (5) تحقق.",
          "مثال: { x + y = 7؛ 2x − y = 2 }. x = 7 − y → y = 4 → x = 3. الحل: (3, 4).",
          "تحقق: 3 + 4 = 7 ✓؛ 6 − 4 = 2 ✓.",
        ],
        fa: [
          "یک دستگاه دو معادله با دو مجهول معمولاً یک جواب منحصربه‌فرد (x, y) دارد. روش جایگذاری یک مجهول را بر حسب دیگری بیان می‌کند.",
          "مراحل: (1) x را از معادله ساده‌تر بیان کن؛ (2) در معادله دیگر جایگذاری کن؛ (3) حل کن؛ (4) مجهول دوم را بیاب؛ (5) تأیید کن.",
          "مثال: { x + y = 7؛ 2x − y = 2 } → y = 4, x = 3. جواب: (3, 4).",
          "تأیید: 3 + 4 = 7 ✓؛ 6 − 4 = 2 ✓.",
        ],
        ti: [
          "ክልተ ምዕርርያ ምስ ክልተ ዘይፍለጥ ዘቕርቦ ብዙሕ ጊዜ ሓደ ፍትሒ (x, y) ዩ. ናይ ምትካእ ኣፈጻጽማ ሓደ ዘይፍለጥ ብናይ ካልኣይ ምቕርጽ.",
          "ስጉምቲ: (1) x ካብ ቀሊል ምዕርርያ; (2) ኣብ ካልኣይ ምትካእ; (3) ምፍታሕ; (4) ካልኣይ ዘይፍለጥ ምርካብ; (5) ምፍተሻ.",
          "ምሳሌ: { x + y = 7; 2x − y = 2 } → y = 4, x = 3. ፍትሒ: (3, 4).",
          "ፍተሻ: 3 + 4 = 7 ✓; 6 − 4 = 2 ✓.",
        ],
        uk: [
          "Система двох рівнянь із двома невідомими зазвичай має один розв'язок (x, y). Метод підстановки: виразити одну невідому через іншу, потім підставити.",
          "Кроки: (1) виразити x з простішого рівняння; (2) підставити в інше; (3) розв'язати; (4) знайти другу невідому; (5) перевірити в обох рівняннях.",
          "Приклад: { x + y = 7; 2x − y = 2 } → y = 4, x = 3. Розв'язок: (3, 4).",
          "Перевірка: 3 + 4 = 7 ✓; 6 − 4 = 2 ✓.",
        ],
      },
    },
    exercises: [
      { id: "a12-1-e1", promptFr: "Résous par substitution : { x + y = 10 ; x − y = 4 }. Trouve x.", type: "number", acceptable: ["7"] },
      { id: "a12-1-e2", promptFr: "Résous par substitution : { x + y = 10 ; x − y = 4 }. Trouve y.", type: "number", acceptable: ["3"] },
      { id: "a12-1-e3", promptFr: "Résous : { 2x + y = 7 ; x = 3 }. Trouve y.", type: "number", acceptable: ["1"] },
      { id: "a12-1-e4", promptFr: "Résous : { x + 2y = 8 ; x = 2y }. Trouve y.", type: "number", acceptable: ["2"] },
      { id: "a12-1-e5", promptFr: "Résous : { x + y = 5 ; y = 2x − 1 }. Trouve x.", type: "number", acceptable: ["2"] },
    ],
  };
