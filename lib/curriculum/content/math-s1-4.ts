import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_4_LESSON: MathSubmoduleLesson = {
  submoduleId: "S1-4",
  submoduleCode: "S1.4",
  theory: {
    title: {
      fr: "Mode",
      en: "Mode",
      ar: "المنوال",
      fa: "نما",
      ti: "ምስ ብዝሒ ዝቐርብ ክብሪ",
      uk: "Мода",
    },
    paragraphs: {
      fr: [
        "Le mode est la valeur qui apparaît le plus souvent dans une série de données. C'est la valeur d'effectif maximum.",
        "Une série peut avoir un seul mode (unimodale), deux modes (bimodale), plusieurs modes (multimodale) ou aucun mode si toutes les valeurs apparaissent le même nombre de fois.",
        "Exemple : 2, 3, 3, 5, 7, 7, 7, 9 → le mode est 7 (apparaît 3 fois). Exemple : 1, 2, 2, 3, 3 → deux modes : 2 et 3 (bimodale).",
        "Le mode est le seul indicateur de tendance centrale utilisable pour des données qualitatives (couleurs, catégories). La moyenne et la médiane ne s'appliquent qu'aux données numériques.",
        "Dans un tableau de fréquences, le mode correspond à la modalité ayant l'effectif le plus élevé.",
      ],
      en: [
        "The mode is the value that appears most often in a data set. It is the value with the highest frequency.",
        "A data set can have one mode (unimodal), two modes (bimodal), several modes (multimodal), or no mode if all values appear the same number of times.",
        "Example: 2, 3, 3, 5, 7, 7, 7, 9 → mode = 7 (appears 3 times). Example: 1, 2, 2, 3, 3 → two modes: 2 and 3 (bimodal).",
        "The mode is the only measure of central tendency usable for qualitative data (colours, categories). Mean and median only apply to numerical data.",
        "In a frequency table, the mode is the category with the highest frequency.",
      ],
      ar: [
        "المنوال هو القيمة الأكثر تكرارًا في مجموعة البيانات.",
        "قد تكون البيانات أحادية المنوال أو ثنائية المنوال أو متعددة المنوال أو بدون منوال.",
        "مثال: 2، 3، 3، 5، 7، 7، 7، 9 → المنوال = 7. مثال: 1، 2، 2، 3، 3 → منوالان: 2 و3.",
        "المنوال هو المقياس الوحيد القابل للاستخدام مع البيانات النوعية (ألوان، فئات).",
        "في جدول التكرار، المنوال هو الفئة ذات التكرار الأعلى.",
      ],
      fa: [
        "نما مقداری است که بیشترین بار در مجموعه داده‌ها ظاهر می‌شود.",
        "یک مجموعه داده می‌تواند یک نما، دو نما، چند نما یا هیچ نمایی نداشته باشد.",
        "مثال: ۲، ۳، ۳، ۵، ۷، ۷، ۷، ۹ → نما = ۷. مثال: ۱، ۲، ۲، ۳، ۳ → دو نما: ۲ و ۳.",
        "نما تنها شاخص مرکزی قابل استفاده برای داده‌های کیفی (رنگ، دسته‌بندی) است.",
        "در جدول فراوانی، نما طبقه‌ای است که بیشترین فراوانی را دارد.",
      ],
      ti: [
        "ምስ ብዝሒ ዝቐርብ ክብሪ ዝበዝሐ ጊዜ ኣብ ዳታ ጉጅለ ዝርኤ ክብሪ እዩ።",
        "ዳታ ሓደ፣ ክልተ፣ ብዙሕ ወይ ዜሮ ምስ ብዝሒ ዝቐርቡ ክብርታት ክህሉ ይኽእል።",
        "ኣብነት: 2, 3, 3, 5, 7, 7, 7, 9 → ምስ ብዝሒ ዝቐርብ = 7. ኣብነት: 1, 2, 2, 3, 3 → ክልተ ምስ ብዝሒ ዝቐርቡ: 2 ን 3.",
        "ምስ ብዝሒ ዝቐርብ ክብሪ ብዘይምቁር ዳታ (ሕብርታት፣ ዓይነታት) ዝጥቀሙሉ ሓደን ጥራይ ሞቲቭ እዩ።",
        "ኣብ ሰደቓ ድርጊት፣ ዓዕዊ ዝዓብይ ድርጊት ዘለዋ ዓይነት ምስ ብዝሒ ዝቐርብ ክብሪ እያ።",
      ],
      uk: [
        "Мода — це значення, яке з'являється найчастіше в наборі даних.",
        "Набір даних може мати одну моду (унімодальний), дві (бімодальний), кілька або не мати моди взагалі.",
        "Приклад: 2, 3, 3, 5, 7, 7, 7, 9 → мода = 7 (з'являється 3 рази). Приклад: 1, 2, 2, 3, 3 → дві моди: 2 і 3.",
        "Мода — єдиний показник центральної тенденції, застосовний до якісних даних (кольори, категорії).",
        "У таблиці частот мода — категорія з найвищою частотою.",
      ],
    },
  },
  exercises: [
    {
      id: "s1-4-e1",
      promptFr: "Trouve le mode de la série : 4, 6, 6, 8, 10, 6, 3.",
      type: "number",
      acceptable: ["6"],
    },
    {
      id: "s1-4-e2",
      promptFr: "Trouve le mode de la série : 1, 2, 2, 3, 3, 4.",
      type: "short_text",
      acceptable: ["2 et 3", "2 et 3", "2 et 3", "3 et 2"],
    },
    {
      id: "s1-4-e3",
      promptFr: "Les couleurs préférées de 20 élèves : 8 bleu, 7 rouge, 5 vert. Quelle est la couleur mode ?",
      type: "short_text",
      acceptable: ["bleu", "Bleu"],
    },
    {
      id: "s1-4-e4",
      promptFr: "Une série a les valeurs 1, 2, 3, 4, 5 (chacune une seule fois). Combien de modes a-t-elle ?",
      type: "number",
      acceptable: ["0"],
    },
    {
      id: "s1-4-e5",
      promptFr: "Dans un tableau de fréquences, la valeur 12 apparaît 5 fois, 14 apparaît 3 fois, 16 apparaît 7 fois. Quel est le mode ?",
      type: "number",
      acceptable: ["16"],
    },
  ],
};
