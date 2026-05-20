import type { MathSubmoduleLesson } from "./math-a1-types";

export const MATH_S1_1_LESSON: MathSubmoduleLesson = {
    submoduleId: "S1-1",
    submoduleCode: "S1.1",
    theory: {
      title: {
        fr: "Collecte de données et tableaux",
        en: "Data Collection and Tables",
        ar: "جمع البيانات والجداول",
        fa: "جمع‌آوری داده‌ها و جداول",
        ti: "ምእካብ ዳታን ሰደቓን",
        uk: "Збір даних та таблиці",
      },
      paragraphs: {
        fr: [
          "Les statistiques commencent par la collecte de données : enquête, mesure, observation. Chaque valeur relevée s'appelle une donnée ou une observation.",
          "Un tableau de données recense les valeurs d'une variable statistique pour une population ou un échantillon. Chaque ligne correspond à un individu.",
          "Tableau de fréquences : on regroupe les valeurs identiques et on compte leur effectif (combien de fois cette valeur apparaît).",
          "Fréquence relative = effectif de la valeur / effectif total. Elle s'exprime en fraction, en décimal ou en pourcentage. La somme des fréquences relatives = 1 (ou 100 %).",
          "Vocabulaire clé : population (ensemble étudié), individu (élément), variable (caractère observé), effectif (nombre d'occurrences), modalité (valeur possible de la variable).",
        ],
        en: [
          "Statistics begins with data collection: surveys, measurements, observations. Each recorded value is called a data point or observation.",
          "A data table lists the values of a statistical variable for a population or sample. Each row corresponds to one individual.",
          "Frequency table: group identical values and count their frequency (how many times each value appears).",
          "Relative frequency = frequency of the value / total frequency. It is expressed as a fraction, decimal or percentage. The sum of all relative frequencies = 1 (or 100%).",
          "Key vocabulary: population (set studied), individual (element), variable (observed characteristic), frequency (count), category (possible value of the variable).",
        ],
        ar: [
          "تبدأ الإحصاء بجمع البيانات: استطلاعات، قياسات، ملاحظات. كل قيمة مسجلة تسمى بيانة أو ملاحظة.",
          "جدول البيانات يُدرج قيم متغير إحصائي لمجتمع أو عينة. كل صف يمثل فردًا.",
          "جدول التكرار: نجمع القيم المتطابقة ونحسب تكرارها (عدد مرات ظهور كل قيمة).",
          "التكرار النسبي = تكرار القيمة / مجموع التكرارات. ويُعبَّر عنه بكسر أو عشري أو نسبة مئوية، ومجموعه = 1 (أو 100%).",
          "مفردات أساسية: مجتمع، فرد، متغير، تكرار، فئة (قيمة ممكنة).",
        ],
        fa: [
          "آمار با جمع‌آوری داده‌ها آغاز می‌شود: نظرسنجی، اندازه‌گیری، مشاهده. هر مقدار ثبت‌شده، داده یا مشاهده نامیده می‌شود.",
          "جدول داده‌ها مقادیر یک متغیر آماری را برای یک جامعه یا نمونه فهرست می‌کند. هر سطر به یک فرد مربوط است.",
          "جدول فراوانی: مقادیر یکسان را گروه‌بندی کرده و فراوانی آن‌ها را می‌شماریم.",
          "فراوانی نسبی = فراوانی مقدار / مجموع فراوانی‌ها. به صورت کسر، اعشاری یا درصد بیان می‌شود. مجموع فراوانی‌های نسبی = ۱ (یا ۱۰۰٪).",
          "واژگان کلیدی: جامعه، فرد، متغیر، فراوانی، طبقه (مقدار ممکن متغیر).",
        ],
        ti: [
          "ስታቲስቲክስ ካብ ምእካብ ዳታ ይጅምር: ቃለ-መጠይቕ፣ ምዕቃን፣ ምዕዛብ። ዝተቐዳሐ ዋጋ ዳታ ወይ ምዕዛብ ይበሃል።",
          "ሰደቓ ዳታ ናይ ስታቲስቲካዊ ተለዋዋጢ ክብርታት ን ሕዝቢ ወይ ናሙና ይዘርዝር። ነፍሲ ወከፍ ስፍሓት ናብ ሓደ ውልቀሰብ ይምልከት።",
          "ሰደቓ ሓደ-ዓይነት-ክብርታት: ተመሳሳሊ ክብርታት ምሕዋስ፣ ናይ ነፍሲ ወከፍ ቁጽሪ ምቑጻር።",
          "ዝምድናዊ ድርጊት = ክብሪ ድርጊት / ጠቅላላ ድርጊት። ብኩርናዕ፣ ዴሲሜሌ ወይ ሚእታዊ ሚዛን ይቐርብ። ድምሩ = 1 (ወይ 100%).",
          "ዋና ቃላት: ሕዝቢ፣ ውልቀሰብ፣ ተለዋዋጢ፣ ድርጊት፣ ዓይነት (ክፉት ክብሪ ናይ ተለዋዋጢ).",
        ],
        uk: [
          "Статистика починається зі збору даних: опитування, вимірювання, спостереження. Кожне записане значення — це дані або спостереження.",
          "Таблиця даних перераховує значення статистичної змінної для генеральної сукупності або вибірки. Кожен рядок відповідає одному елементу.",
          "Таблиця частот: групуємо однакові значення та рахуємо їхню частоту.",
          "Відносна частота = частота значення / загальна частота. Виражається у вигляді дробу, десяткового числа або відсотка. Сума всіх відносних частот = 1 (або 100%).",
          "Ключова термінологія: генеральна сукупність, елемент, змінна, частота, категорія (можливе значення змінної).",
        ],
      },
    },
    exercises: [
      {
        id: "s1-1-e1",
        promptFr: "Une classe de 30 élèves a rendu des copies. Les notes sont : 10 élèves ont eu 12, 8 ont eu 14, 12 ont eu 16. Quel est l'effectif total ?",
        type: "number",
        acceptable: ["30"],
      },
      {
        id: "s1-1-e2",
        promptFr: "Avec les données ci-dessus, quelle est la fréquence relative de la note 14 ? (Donne le résultat en fraction irréductible.)",
        type: "short_text",
        acceptable: ["8/30", "4/15"],
      },
      {
        id: "s1-1-e3",
        promptFr: "On observe les couleurs préférées de 20 élèves : 8 bleu, 7 rouge, 5 vert. La fréquence relative du bleu est …",
        type: "short_text",
        acceptable: ["8/20", "2/5", "0,4", "0.4", "40%", "40 %"],
      },
      {
        id: "s1-1-e4",
        promptFr: "Complète la phrase : dans un tableau de fréquences, la somme de toutes les fréquences relatives est égale à ___.",
        type: "number",
        acceptable: ["1"],
      },
      {
        id: "s1-1-e5",
        promptFr: "Quel terme désigne l'ensemble de tous les individus étudiés dans une étude statistique ?",
        type: "short_text",
        acceptable: ["population", "la population"],
      },
    ],
  };
