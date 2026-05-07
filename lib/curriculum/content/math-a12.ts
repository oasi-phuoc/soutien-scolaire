import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_A12_LESSONS: MathSubmoduleLesson[] = [
  {
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
  },
  {
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
  },
  {
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
  },
];
