import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S2_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "S2-1",
    submoduleCode: "S2.1",
    theory: {
      title: {
        fr: "Expérience aléatoire et univers",
        en: "Random Experiment and Sample Space",
        ar: "التجربة العشوائية وفضاء العينة",
        fa: "آزمایش تصادفی و فضای نمونه",
        ti: "ናይ ዕድል ፈተነን ዓለምን",
        uk: "Випадковий дослід і простір елементарних подій",
      },
      paragraphs: {
        fr: [
          "Une expérience aléatoire est une expérience dont le résultat ne peut pas être prédit avec certitude à l'avance, même si l'on connaît toutes les conditions.",
          "L'univers (ou espace échantillonnal), noté Ω, est l'ensemble de tous les résultats possibles de l'expérience.",
          "Un événement est un sous-ensemble de Ω. L'événement certain = Ω (toujours réalisé). L'événement impossible = ∅ (jamais réalisé).",
          "Exemples d'univers : lancer un dé à 6 faces → Ω = {1, 2, 3, 4, 5, 6}. Lancer une pièce → Ω = {pile, face}. Tirer une carte dans un jeu de 52 → Ω a 52 éléments.",
          "Un événement élémentaire est composé d'un seul résultat. Un événement composé en regroupe plusieurs.",
        ],
        en: [
          "A random experiment is one whose outcome cannot be predicted with certainty in advance, even if all conditions are known.",
          "The sample space, written Ω, is the set of all possible outcomes of the experiment.",
          "An event is a subset of Ω. The certain event = Ω (always occurs). The impossible event = ∅ (never occurs).",
          "Examples: rolling a 6-sided die → Ω = {1, 2, 3, 4, 5, 6}. Flipping a coin → Ω = {heads, tails}. Drawing a card from 52 → Ω has 52 elements.",
          "An elementary event has one outcome. A compound event groups several outcomes.",
        ],
        ar: [
          "التجربة العشوائية هي تجربة لا يمكن التنبؤ بنتيجتها مسبقًا حتى مع معرفة جميع الظروف.",
          "فضاء العينة (Ω) هو مجموعة جميع النتائج الممكنة للتجربة.",
          "الحادثة هي مجموعة جزئية من Ω. الحادثة المؤكدة = Ω. الحادثة المستحيلة = ∅.",
          "أمثلة: رمي حجر نرد → Ω = {1, 2, 3, 4, 5, 6}. قلب عملة → Ω = {صورة، كتابة}.",
          "الحادثة الأولية تحتوي على نتيجة واحدة. الحادثة المركبة تضم عدة نتائج.",
        ],
        fa: [
          "آزمایش تصادفی آزمایشی است که نتیجه آن حتی با دانستن همه شرایط قابل پیش‌بینی نیست.",
          "فضای نمونه (Ω) مجموعه تمام نتایج ممکن آزمایش است.",
          "رویداد یک زیرمجموعه از Ω است. رویداد قطعی = Ω. رویداد محال = ∅.",
          "مثال‌ها: انداختن تاس ۶ وجهی → Ω = {۱، ۲، ۳، ۴، ۵، ۶}. انداختن سکه → Ω = {شیر، خط}.",
          "رویداد ابتدایی فقط یک نتیجه دارد. رویداد مرکب چندین نتیجه را گرد می‌آورد.",
        ],
        ti: [
          "ናይ ዕድል ፈተነ ውጽኢቱ ቅድሚ ምምጽኡ ዝፍለጥ ዘይኮነ ፈተነ እዩ።",
          "ዓለም (Ω) ናይ ፈተነ ኩሎም ክኾኑ ዝኽእሉ ውጽኢታት ጉጅለ እዩ።",
          "ፍጻሜ ናይ Ω ንኡስ-ጉጅለ እዩ። ዘይተርፍ ፍጻሜ = Ω. ዘይካኣል ፍጻሜ = ∅.",
          "ኣብነታት: ሽዱሽተ-ሸነኽ ቀለዓ ምእካብ → Ω = {1, 2, 3, 4, 5, 6}. ናይ ሳንቲም ምድርባይ → Ω = {ርእሲ፣ ጭዳ}.",
          "መሰረታዊ ፍጻሜ ሓደ ውጽኢት ዘለዎ እዩ። ሓቢሩ ዝቐርብ ፍጻሜ ብዙሕ ውጽኢታት ዘለዎ እዩ።",
        ],
        uk: [
          "Випадковий дослід — це дослід, результат якого не можна передбачити наперед, навіть якщо відомі всі умови.",
          "Простір елементарних подій (Ω) — це множина всіх можливих результатів досліду.",
          "Подія — це підмножина Ω. Достовірна подія = Ω. Неможлива подія = ∅.",
          "Приклади: кидання кубика → Ω = {1, 2, 3, 4, 5, 6}. Підкидання монети → Ω = {орел, решка}.",
          "Елементарна подія містить один результат. Складна подія об'єднує кілька результатів.",
        ],
      },
    },
    exercises: [
      {
        id: "s2-1-e1",
        promptFr: "On lance un dé à 6 faces. Écris l'univers Ω (liste tous les résultats possibles entre accolades).",
        type: "short_text",
        acceptable: ["{1,2,3,4,5,6}", "{1, 2, 3, 4, 5, 6}"],
      },
      {
        id: "s2-1-e2",
        promptFr: "On lance une pièce. Combien d'éléments contient l'univers Ω ?",
        type: "number",
        acceptable: ["2"],
      },
      {
        id: "s2-1-e3",
        promptFr: "On tire une carte dans un jeu de 52 cartes. Combien d'éléments contient Ω ?",
        type: "number",
        acceptable: ["52"],
      },
      {
        id: "s2-1-e4",
        promptFr: "L'événement 'obtenir un 7 en lançant un dé à 6 faces' est-il impossible ou certain ?",
        type: "short_text",
        acceptable: ["impossible", "Impossible"],
      },
      {
        id: "s2-1-e5",
        promptFr: "L'événement 'obtenir un nombre entre 1 et 6 en lançant un dé' est-il impossible, certain ou ni l'un ni l'autre ?",
        type: "short_text",
        acceptable: ["certain", "Certain"],
      },
    ],
  };
