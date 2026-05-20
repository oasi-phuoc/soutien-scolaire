import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_3_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-3",
    submoduleCode: "S2.3",
    theory: {
      title: {
        fr: "Événement complémentaire",
        en: "Complementary Event",
        ar: "الحادثة المكملة",
        fa: "رویداد مکمل",
        ti: "ተዛማዲ ፍጻሜ",
        uk: "Доповнення події",
      },
      paragraphs: {
        fr: [
          "L'événement complémentaire de A, noté Ā ou A', est l'événement qui se réalise exactement quand A ne se réalise pas.",
          "Propriété fondamentale : P(A) + P(Ā) = 1, donc P(Ā) = 1 − P(A).",
          "Exemple : si P(pluie demain) = 0,3, alors P(pas de pluie demain) = 1 − 0,3 = 0,7.",
          "Utilité pratique : parfois il est plus facile de calculer P(Ā) et d'en déduire P(A) = 1 − P(Ā). C'est la méthode du complémentaire.",
          "Exemple d'application : P(obtenir au moins un 6 en lançant deux dés) = 1 − P(aucun 6) = 1 − (5/6)² = 1 − 25/36 = 11/36.",
        ],
        en: [
          "The complementary event of A, written Ā or A', occurs exactly when A does not occur.",
          "Fundamental property: P(A) + P(Ā) = 1, so P(Ā) = 1 − P(A).",
          "Example: if P(rain tomorrow) = 0.3, then P(no rain tomorrow) = 1 − 0.3 = 0.7.",
          "Practical use: sometimes it is easier to calculate P(Ā) and deduce P(A) = 1 − P(Ā). This is the complementary method.",
          "Application: P(at least one 6 in two dice rolls) = 1 − P(no 6) = 1 − (5/6)² = 11/36.",
        ],
        ar: [
          "الحادثة المكملة لـ A، ترمز إليها Ā، هي الحادثة التي تتحقق تمامًا حين لا تتحقق A.",
          "الخاصية الأساسية: P(A) + P(Ā) = 1، إذن P(Ā) = 1 − P(A).",
          "مثال: إذا كان P(مطر غدًا) = 0,3 فـ P(لا مطر) = 0,7.",
          "الفائدة: أحيانًا حساب P(Ā) أسهل ثم استنتاج P(A) = 1 − P(Ā).",
          "مثال: P(الحصول على 6 واحد على الأقل برميتين) = 1 − (5/6)² = 11/36.",
        ],
        fa: [
          "رویداد مکمل A، که با Ā نشان داده می‌شود، دقیقاً زمانی رخ می‌دهد که A رخ ندهد.",
          "ویژگی بنیادی: P(A) + P(Ā) = ۱، پس P(Ā) = ۱ − P(A).",
          "مثال: اگر P(باران فردا) = ۰٫۳ باشد، P(بدون باران) = ۰٫۷.",
          "کاربرد عملی: گاهی محاسبه P(Ā) آسان‌تر است و سپس P(A) = ۱ − P(Ā) به دست می‌آید.",
          "مثال: P(حداقل یک ۶ در دو تاس) = ۱ − (۵/۶)² = ۱۱/۳۶.",
        ],
        ti: [
          "ናይ A ተዛማዲ ፍጻሜ፣ Ā ዝበሃል፣ ብትኽክል ምስ A ዘይካኣል ጊዜ ዝካኣል ፍጻሜ እዩ።",
          "መሰረታዊ ባህሪ: P(A) + P(Ā) = 1, ስለዚ P(Ā) = 1 − P(A).",
          "ኣብነት: P(ናይ ጽባሕ ዝናብ) = 0,3 ምስ ዝኾን P(ዝናብ የለ) = 0,7.",
          "ምጥቃም: ሓደ ሓደ ጊዜ P(Ā) ምሕሳብ ቀሊል እዩ ድሕሪኡ P(A) = 1 − P(Ā) ትርኢ።",
          "ኣብነት: P(ሓደ ወይ ልዕሊ ሓደ 6 ኣብ ክልተ ቀለዓ) = 1 − (5/6)² = 11/36.",
        ],
        uk: [
          "Доповнення події A, позначається Ā або A', — це подія, яка відбувається саме тоді, коли A не відбувається.",
          "Основна властивість: P(A) + P(Ā) = 1, тому P(Ā) = 1 − P(A).",
          "Приклад: якщо P(дощ завтра) = 0,3, то P(без дощу) = 0,7.",
          "Практичне застосування: іноді легше обчислити P(Ā) і звідси вивести P(A) = 1 − P(Ā).",
          "Приклад: P(хоча б одна 6 при двох кидках) = 1 − (5/6)² = 11/36.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-3-e1",
        promptFr: "P(A) = 0,35. Quelle est la probabilité de l'événement complémentaire Ā ?",
        type: "short_text",
        acceptable: ["0,65", "0.65"],
      },
      {
        id: "s2-3-e2",
        promptFr: "On lance un dé. P(obtenir 1 ou 2) = 1/3. Quelle est P(ne pas obtenir 1 ni 2) ?",
        type: "short_text",
        acceptable: ["2/3"],
      },
      {
        id: "s2-3-e3",
        promptFr: "P(Ā) = 3/8. Quelle est la valeur de P(A) ?",
        type: "short_text",
        acceptable: ["5/8"],
      },
      {
        id: "s2-3-e4",
        promptFr: "Complète : P(A) + P(Ā) = ___.",
        type: "number",
        acceptable: ["1"],
      },
      {
        id: "s2-3-e5",
        promptFr: "Un sac contient 4 billes rouges et 6 billes bleues. Quelle est la probabilité de ne PAS tirer une bille bleue ?",
        type: "short_text",
        acceptable: ["4/10", "2/5", "0,4", "0.4", "40%"],
      },
    ],
  };
