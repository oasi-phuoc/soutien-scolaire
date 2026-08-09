import type { GrammarLesson } from "../../grammar-data";

/** G8.6 — Le passé récent */
export const A1_GR_PASSE_RECENT: GrammarLesson = {
  slug: "a1-gr-passe-recent",
  code: "G4.10",
  level: "A1",
  title: "Le passé récent",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Le passé récent exprime une action qui s'est produite très peu de temps avant le moment où l'on parle.",
        "Exemple : Je viens de rentrer à la maison. (= je suis rentré(e) il y a quelques minutes)",
        "On peut ajouter {a}juste{/a} pour renforcer la proximité : {a}venir juste de{/a}. → Il vient juste de partir.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "text",
      items: [
        "Formation : {a}venir{/a} (présent) + {a}de{/a} / {a}d'{/a} + infinitif.",
      ],
      noBulletItems: [
        0,
      ],
    },
    {
      type: "grid",
      headers: [
        "",
        "venir",
        "de / d'",
        "infinitif",
      ],
      boldFirstCol: true,
      rows: [
        [
          "je",
          "viens",
          "d'",
          "allumer la radio.",
        ],
        [
          "tu",
          "viens",
          "de",
          "brancher l'appareil.",
        ],
        [
          "il / elle / on",
          "vient",
          "d'",
          "éteindre la tablette.",
        ],
        [
          "nous",
          "venons",
          "de",
          "regarder le journal télévisé.",
        ],
        [
          "vous",
          "venez",
          "de",
          "débrancher le téléphone.",
        ],
        [
          "ils / elles",
          "viennent",
          "de",
          "mettre un DVD.",
        ],
      ],
    },
    {
      type: "heading",
      text: "Remarques",
    },
    {
      type: "text",
      items: [
        "On n'emploie pas le passé récent avec une indication de temps précise → passé composé. ✗ Le film vient de commencer il y a 3 minutes. → ✓ Le film a commencé il y a 3 minutes.",
        "Ne pas confondre {a}venir de{/a} (passé récent) et {a}venir{/a} seul. → Je viens de la gare. (= provenance) ≠ Je viens de rentrer de la gare. (= passé récent)",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "text",
      items: [
        "Devant une voyelle : {a}de → d'{/a}. → Nous venons d'arriver.",
        "Devant une consonne, le {a}e{/a} de {a}de{/a} est souvent muet à l'oral. → On vient de manger. ; Il vient de partir.",
        "Ne pas confondre : Il vient de dîner. (= passé récent) ≠ Il vient dîner. (= il arrive pour dîner)",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Passé récent",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        {
          sentence: "Le train ___ partir !",
          choices: [
            "vient de",
            "vient",
            "a",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Je ___ rentrer à la maison.",
          choices: [
            "viens de",
            "viens",
            "suis",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Nous ___ regarder le journal.",
          choices: [
            "venons de",
            "venons",
            "avons",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Ils ___ mettre un DVD.",
          choices: [
            "viennent de",
            "viennent",
            "ont",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Nous venons ___ arriver.",
          choices: [
            "d'",
            "de",
            "à",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Il vient ___ partir. (consonne)",
          choices: [
            "de",
            "d'",
            "à",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Le film ___ il y a 3 minutes. (temps précis)",
          choices: [
            "a commencé",
            "vient de commencer",
            "commençait",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Je viens de la gare. = ___",
          choices: [
            "provenance",
            "passé récent",
            "futur",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Je viens de rentrer. = ___",
          choices: [
            "passé récent",
            "provenance",
            "futur proche",
          ],
          correctIdx: 0,
        },
        {
          sentence: "Il vient juste de partir. → « juste » renforce ___ .",
          choices: [
            "la proximité",
            "le futur",
            "l'habitude",
          ],
          correctIdx: 0,
        },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez venir (présent), de ou d'.",
      items: [],
      poolSize: 5,
      pool: [
        {
          sentence: "Je ___ d'allumer la radio.",
          hint: "venir",
          answer: "viens",
        },
        {
          sentence: "Tu viens ___ brancher l'appareil.",
          hint: "de/d'",
          answer: "de",
        },
        {
          sentence: "Elle vient ___ éteindre la tablette.",
          hint: "voyelle",
          answer: "d'",
        },
        {
          sentence: "Nous ___ de regarder le journal.",
          hint: "venir",
          answer: "venons",
        },
        {
          sentence: "Vous ___ de débrancher le téléphone.",
          hint: "venir",
          answer: "venez",
        },
        {
          sentence: "Ils ___ de mettre un DVD.",
          hint: "venir",
          answer: "viennent",
        },
        {
          sentence: "Nous venons ___ arriver.",
          hint: "voyelle",
          answer: "d'",
        },
        {
          sentence: "Il ___ juste de partir.",
          hint: "venir",
          answer: "vient",
        },
        {
          sentence: "Je viens ___ rentrer.",
          hint: "consonne",
          answer: "de",
        },
        {
          sentence: "On vient ___ manger.",
          hint: "consonne",
          answer: "de",
        },
      ],
    },
    {
      type: "fill",
      title: "Exercice 1",
      instruction: "Complétez avec la bonne forme de « venir de ».",
      transInstruction: {
        en: "Complete with the correct form of « venir de ».",
        ar: "أكمل بالصيغة الصحيحة من « venir de ».",
        fa: "با صورت درست « venir de » کامل کنید.",
        ti: "ብቅኑዕ ቅርጺ « venir de » ምላእ።",
        uk: "Доповніть правильною формою « venir de ».",
      },
      items: [],
      pool: [
        {
          sentence: "Je ___ manger.",
          hint: "venir de (je)",
          answer: "viens de",
        },
        {
          sentence: "Tu ___ arriver.",
          hint: "venir de (tu)",
          answer: "viens de",
        },
        {
          sentence: "Il ___ téléphoner.",
          hint: "venir de (il)",
          answer: "vient de",
        },
        {
          sentence: "Elle ___ sortir.",
          hint: "venir de (elle)",
          answer: "vient de",
        },
        {
          sentence: "Nous ___ finir la réunion.",
          hint: "venir de (nous)",
          answer: "venons de",
        },
        {
          sentence: "Vous ___ prendre votre décision.",
          hint: "venir de (vous)",
          answer: "venez de",
        },
        {
          sentence: "Ils ___ partir.",
          hint: "venir de (ils)",
          answer: "viennent de",
        },
        {
          sentence: "Elles ___ rentrer.",
          hint: "venir de (elles)",
          answer: "viennent de",
        },
        {
          sentence: "J'___ apprendre une nouvelle.",
          hint: "venir de + voyelle",
          answer: "viens d'",
        },
        {
          sentence: "On ___ ouvrir le magasin.",
          hint: "venir de (on)",
          answer: "vient d'",
        },
      ],
      poolSize: 6,
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Complétez avec « être en train de » (ou d') suivi de l'infinitif.",
      transInstruction: {
        en: "Complete with « être en train de » (or d') followed by the infinitive.",
        ar: "أكمل بـ « être en train de » (أو d') متبوعاً بالمصدر.",
        fa: "با « être en train de » (یا d') به‌علاوه‌ی مصدر کامل کنید.",
        ti: "ብ « être en train de » (ወይ d') ተኸታሊ ኢንፊኒቲቭ ምላእ።",
        uk: "Доповніть « être en train de » (або d') з інфінітивом.",
      },
      items: [],
      pool: [
        {
          sentence: "Je ___ travailler sur ce projet.",
          hint: "suis en train de",
          answer: "suis en train de",
        },
        {
          sentence: "Tu ___ lire un livre.",
          hint: "es en train de",
          answer: "es en train de",
        },
        {
          sentence: "Il ___ dormir.",
          hint: "est en train de",
          answer: "est en train de",
        },
        {
          sentence: "Elle ___ préparer le dîner.",
          hint: "est en train de",
          answer: "est en train de",
        },
        {
          sentence: "Nous ___ cuisiner.",
          hint: "sommes en train de",
          answer: "sommes en train de",
        },
        {
          sentence: "Vous ___ attendre le bus.",
          hint: "êtes en train d'",
          answer: "êtes en train d'",
        },
        {
          sentence: "Ils ___ étudier pour l'examen.",
          hint: "sont en train d'",
          answer: "sont en train d'",
        },
        {
          sentence: "Elles ___ discuter du projet.",
          hint: "sont en train de",
          answer: "sont en train de",
        },
        {
          sentence: "Je ___ écrire un email.",
          hint: "suis en train d'",
          answer: "suis en train d'",
        },
        {
          sentence: "On ___ construire un nouveau bâtiment.",
          hint: "est en train de",
          answer: "est en train de",
        },
      ],
      poolSize: 6,
    },
    {
      type: "classify",
      title: "Exercice 3",
      instruction: "Classez chaque phrase dans la bonne catégorie.",
      transInstruction: {
        en: "Sort each sentence into the correct category.",
        ar: "صنّف كل جملة في الفئة الصحيحة.",
        fa: "هر جمله را در دسته‌ی درست قرار دهید.",
        ti: "ነፍሲ ወከፍ ሓሳብ ናብ ቅኑዕ ምድብ ኣእቱ.",
        uk: "Розподіліть кожне речення у правильну категорію.",
      },
      categories: [
        "Passé récent",
        "Présent continu",
        "Futur proche",
      ],
      items: [],
      pool: [
        {
          word: "Je viens de finir mon travail.",
          categoryIdx: 0,
        },
        {
          word: "Elle est en train de téléphoner.",
          categoryIdx: 1,
        },
        {
          word: "Nous allons partir en vacances.",
          categoryIdx: 2,
        },
        {
          word: "Ils viennent d'arriver.",
          categoryIdx: 0,
        },
        {
          word: "Tu es en train de manger.",
          categoryIdx: 1,
        },
        {
          word: "Il va pleuvoir demain.",
          categoryIdx: 2,
        },
        {
          word: "Elle vient de prendre sa décision.",
          categoryIdx: 0,
        },
        {
          word: "Vous êtes en train d'attendre.",
          categoryIdx: 1,
        },
        {
          word: "On vient de recevoir les résultats.",
          categoryIdx: 0,
        },
        {
          word: "Ils sont en train de construire.",
          categoryIdx: 1,
        },
        {
          word: "Je vais changer de travail.",
          categoryIdx: 2,
        },
      ],
      poolSize: 6,
    },
    {
      type: "word_order",
      title: "Exercice 4",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase correcte.",
      transInstruction: {
        en: "Put the words back in the correct order to form a correct sentence.",
        ar: "أعد ترتيب الكلمات لتكوين جملة صحيحة.",
        fa: "کلمات را به ترتیب درست بچینید تا جمله‌ی درستی بسازید.",
        ti: "ነተን ቃላት ቅኑዕ ሓሳብ ንምግባር ብቅኑዕ ስርዓት መድብ።",
        uk: "Розставте слова у правильному порядку, щоб утворити правильне речення.",
      },
      items: [],
      pool: [
        {
          sentence: "Je viens de manger.",
          words: [
            "Je",
            "viens",
            "de",
            "manger.",
          ],
        },
        {
          sentence: "Elle est en train de travailler.",
          words: [
            "Elle",
            "est",
            "en",
            "train",
            "de",
            "travailler.",
          ],
        },
        {
          sentence: "Nous venons d'apprendre la nouvelle.",
          words: [
            "Nous",
            "venons",
            "d'apprendre",
            "la",
            "nouvelle.",
          ],
        },
        {
          sentence: "Ils sont en train d'étudier.",
          words: [
            "Ils",
            "sont",
            "en",
            "train",
            "d'étudier.",
          ],
        },
        {
          sentence: "Tu viens de finir ton travail.",
          words: [
            "Tu",
            "viens",
            "de",
            "finir",
            "ton",
            "travail.",
          ],
        },
        {
          sentence: "Il est en train de dormir.",
          words: [
            "Il",
            "est",
            "en",
            "train",
            "de",
            "dormir.",
          ],
        },
        {
          sentence: "Vous venez de prendre votre décision.",
          words: [
            "Vous",
            "venez",
            "de",
            "prendre",
            "votre",
            "décision.",
          ],
        },
      ],
      poolSize: 5,
    },
    {
      type: "write",
      title: "Exercice 5",
      instruction: "Écrivez une phrase avec « venir de » ou « être en train de ».\nUtilisez le verbe proposé.",
      transInstruction: {
        en: "Write a sentence with « venir de » or « être en train de ».\nUse the verb provided.",
        ar: "اكتب جملة بـ « venir de » أو « être en train de ».\nاستخدم الفعل المقترح.",
        fa: "یک جمله با « venir de » یا « être en train de » بنویسید.\nاز فعل پیشنهادی استفاده کنید.",
        ti: "ሓደ ሓሳብ ብ « venir de » ወይ « être en train de » ጽሓፍ።\nእቲ ዝቐረበ ግሲ ተጠቐም።",
        uk: "Напишіть речення з « venir de » або « être en train de ».\nВикористайте запропоноване дієслово.",
      },
      verbPool: [
        "manger",
        "travailler",
        "arriver",
        "finir",
        "partir",
        "étudier",
        "lire",
        "cuisiner",
      ],
      verbPoolSize: 3,
    },
  ],
};
