import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_PHRASES: GrammarLesson = {
  slug: "a1-gr-phrases",
  code: "R1.6",
  level: "A1",
  title: "Les phrases",
  theory: [
    { type: "heading", text: "La structure de la phrase", trans: { en: "The structure of the sentence", ar: "بنية الجملة", fa: "ساختار جمله", ti: "ቅርጺ ሓሳብ", uk: "Структура речення" } },
    {
      type: "text",
      text: "En français, une phrase simple suit l'ordre : {su}Sujet{/su} + {ve}Verbe{/ve} + {co}Complément{/co}.",
      transText: {
        en: "In French, a simple sentence follows this order: {su}Subject{/su} + {ve}Verb{/ve} + {co}Complement{/co}.",
        ar: "في الفرنسية، تتبع الجملة البسيطة الترتيب التالي: {su}الفاعل{/su} + {ve}الفعل{/ve} + {co}المتمم{/co}.",
        fa: "در زبان فرانسوی، یک جملهٔ ساده از این ترتیب پیروی می‌کند: {su}فاعل{/su} + {ve}فعل{/ve} + {co}متمم{/co}.",
        pt: "Em francês, uma frase simples segue a seguinte ordem: {su}Sujeito{/su} + {ve}Verbo{/ve} + {co}Complemento{/co}.",
        so: "Faransiiska, jumlad fudud waxay raacdaa nidaamkan: {su}Falka{/su} + {ve}Falka{/ve} + {co}Dhammaystirka{/co}.",
        ti: "ኣብ ቋንቋ ፈረንሳይ፣ ሓንቲ ቀላል ሓረግ ነዚ ቅደም ተኸተል ትኽተል፦ {su}ተገባሪ{/su} + {ve}ግሲ{/ve} + {co}መላእታ{/co}.",
        tr: "Fransızcada basit bir cümle şu sırayı izler: {su}Özne{/su} + {ve}Fiil{/ve} + {co}Tümleç{/co}.",
        ps: "په فرانسوي ژبه کې ساده جمله دا ترتیب تعقیبوي: {su}فاعل{/su} + {ve}فعل{/ve} + {co}متمم{/co}.",
        uk: "У французькій мові просте речення має такий порядок: {su}Підмет{/su} + {ve}Дієслово{/ve} + {co}Додаток{/co}.",
      },
    },
    {
      type: "grid",
      headers: ["Sujet", "Verbe", "Complément"],
      equalCols: true,
      rows: [
        ["Paul", "mange", "une pomme."],
        ["Elle", "habite", "à Paris."],
        ["Les enfants", "jouent", "dans le parc."],
      ],
      transHeaders: {
        en: ["Subject", "Verb", "Complement"],
        ar: ["الفاعل", "الفعل", "المتمم"],
        fa: ["فاعل", "فعل", "متمم"],
        pt: ["Sujeito", "Verbo", "Complemento"],
        so: ["Falka", "Fal", "Dhammaystir"],
        ti: ["ተገባሪ", "ግሲ", "መላእታ"],
        tr: ["Özne", "Fiil", "Tümleç"],
        ps: ["فاعل", "فعل", "متمم"],
        uk: ["Підмет", "Дієслово", "Додаток"],
      },
    },
    { 
      type: "heading", 
      text: "Le sujet",
      trans: {
        en: "The subject",
        ar: "الفاعل",
        fa: "فاعل",
        pt: "O sujeito",
        so: "Falka",
        ti: "እቲ ጉዳይ",
        tr: "Özne",
        ps: "فاعل",
        uk: "Підмет",
      },
    },
    {
      type: "text",
      text: "Le {a}sujet{/a} indique la personne ou la chose qui {a}fait l'action{/a} ou qui {a}est dans un état{/a}.\n On peut poser la question : {a}Qui ?{/a} ou {a}Qu'est-ce qui ?{/a}",
      transText: {
        en: "The {a}subject{/a} indicates the person or thing that {a}performs the action{/a} or {a}is in a state{/a}.\nWe can ask the question: {a}Who?{/a} or {a}What?{/a}",
        ar: "يشير {a}الفاعل{/a} إلى الشخص أو الشيء الذي {a}يقوم بالفعل{/a} أو الذي {a}يكون في حالة{/a}.\nيمكننا طرح السؤال: {a}مَن؟{/a} أو {a}ما الذي؟{/a}",
        fa: "{a}فاعل{/a} شخص یا چیزی را نشان می‌دهد که {a}عمل را انجام می‌دهد{/a} یا {a}در حالتی قرار دارد{/a}.\nمی‌توان این پرسش را مطرح کرد: {a}چه کسی؟{/a} یا {a}چه چیزی؟{/a}",
        pt: "O {a}sujeito{/a} indica a pessoa ou a coisa que {a}faz a ação{/a} ou que {a}está num estado{/a}.\nPodemos fazer a pergunta: {a}Quem?{/a} ou {a}O que?{/a}",
        so: "{a}Falka{/a} wuxuu tilmaamaa qofka ama shayga {a}sameeya falka{/a} ama {a}ku jira xaalad{/a}.\nWaxaan weydiin karnaa: {a}Yaa?{/a} ama {a}Maxaa?{/a}",
        ti: "{a}ተገባሪ{/a} ነቲ {a}ተግባር ዝፍጽም{/a} ወይ {a}ኣብ ሓደ ኩነታት ዝርከብ{/a} ሰብ ወይ ነገር የመልክት።\nነዚ ሕቶ ክንሓትት ንኽእል፦ {a}መን?{/a} ወይ {a}እንታይ እዩ?{/a}",
        tr: "{a}Özne{/a}, {a}eylemi yapan{/a} veya {a}bir durumda bulunan{/a} kişiyi ya da şeyi belirtir.\nŞu soruları sorabiliriz: {a}Kim?{/a} veya {a}Ne?{/a}",
        ps: "{a}فاعل{/a} هغه کس یا شی ښيي چې {a}عمل ترسره کوي{/a} یا {a}په یوه حالت کې وي{/a}.\nموږ دا پوښتنه کولی شو: {a}څوک؟{/a} یا {a}څه شی؟{/a}",
        uk: "{a}Підмет{/a} позначає особу або предмет, який {a}виконує дію{/a} або {a}перебуває в певному стані{/a}.\nМожна поставити запитання: {a}Хто?{/a} або {a}Що?{/a}",
      },
      items: [
        "Paul mange une pomme. → Qui mange ? → {a}Paul{/a}.",
        "Le chat dort. → Qui dort ? → {a}Le chat{/a}.",
        "Elle travaille. → Qui travaille ? → {a}Elle{/a}."
      ],
      noBulletItems:[0,1,2],
    },
    {
      type: "text",
      text : "Le {a}sujet{/a} peut avoir plusieurs formes.",
      transText : {

      },
    },
    {
      type: "grid",
      headers: ["Forme", "Exemple"],
      colWidths : ["35%","65%"],
      boldFirstCol : true,
      rows: [
        ["Nom", "{a}Isabelle{/a} travaille tous les jours."],
        ["Pronom", "{a}Nous{/a} jouons au football."],
        ["Groupe de mots", "{a}Les enfants{/a} courent dans la maison."],
      ],
      transHeaders: {
      },
    },
    { type: "heading", 
      text: "Le verbe",
      trans: { 
      }
    },
    {
      type: "text",
      text: "Le {a}verbe{/a} est essentiel dans la phrase. Le verbe indique {a}ce que fait le sujet{/a} ou {a}dans quel état{/a} il se trouve. Il {a}s'accorde{/a} toujours avec le sujet.",
      transText: {
      },
      items: [
        "Melina {a}boit{/a} du café.",
        "Elle {a}est{/a} heureuse.",
      ],
    },
    
    { 
      type: "heading", 
      text: "Le complément",
      trans: {
      }
    },
    {
      type: "text",
      text: "Le {a}complément{/a} donne des informations supplémentaires sur l'action ou l'état. Le complément n'est {a}pas toujours obligatoire{/a}.\n On peut poser différentes questions :",
      transText: {
      },
    },
    {
      type: "text",
      label: "COD — Complément d'Objet Direct",
      text: "Le complément répond à la question {a}quoi ?{/a} ou  {a}qui ?{/a}",
      transText: {

      },
      items: [
        "Je mange une pomme. → Je mange quoi ? →  {a}une pomme{/a}.",
      ],
      noBulletItems: [0],
      transLabel: {
      
      },
      transItems: {
      },
    },
    {
      type: "text",
      label: "COI — Complément d'Objet Indirect",
      text: "Le complément répond à la question {a}à qui ?{/a} ou  {a}à quoi ?{/a}",
      transText : {

      },
      items: [
        "Je parle à Marie → Je parle à qui ? → {a}à Marie{/a}.",
      ],
      noBulletItems: [0],
      transLabel: {
       
      },
      transItems: {
      },
    },
    {
      type: "text",
      label: "CC — Complément Circonstanciel",
      text : "Le complément répond à la question {a}où ?{/a}, {a}quand ?{/a} ou {a}comment ?{/a}",
      transText : {

      },
      items: [
        "Je vais à l'école. → Je vais où ? → {a}à l'école{/a}",
        "Je travaille le matin. → Je travaille quand ? → {a}le matin{/a}",
        "Il marche lentement → Il marche comment ? → {a}lentement{/(a)} ",

      ],
      noBulletItems: [0],
      transLabel: {

      },
      transItems: {
      
      },
    },
  ],
  exercises: [
    {
      type: "classify",
      title: "Exercice 1",
      instruction: "Classez chaque mot en gras dans la bonne catégorie.",
      transInstruction: { en: "Sort each word in bold into the correct category.", ar: "صنّف كل كلمة بالخط العريض في الفئة الصحيحة.", fa: "هر کلمه‌ی پررنگ را در دسته‌ی درست قرار دهید.", ti: "ነፍሲ ወከፍ ብትር ዘሎ ቃል ናብ ቅኑዕ ምድብ ኣእቱ.", uk: "Розподіліть кожне виділене жирним слово у правильну категорію." },
      categories: ["Sujet", "Verbe", "Complément"],
      items: [
        { word: "Marie {a}mange{/a} une salade.", categoryIdx: 1 },
        { word: "{a}Marie{/a} mange une salade.", categoryIdx: 0 },
        { word: "Marie mange {a}une salade{/a}.", categoryIdx: 2 },
        { word: "{a}Les enfants{/a} jouent dans le parc.", categoryIdx: 0 },
        { word: "Je {a}parle{/a} à Marie.", categoryIdx: 1 },
      ],
    },
    {
      type: "classify",
      title: "Exercice 2",
      instruction: "Identifiez le type du complément en gras.",
      transInstruction: { en: "Identify the type of the complement in bold.", ar: "حدّد نوع المتمّم بالخط العريض.", fa: "نوع متمم پررنگ را مشخص کنید.", ti: "ዓይነት ናይቲ ብትር ዘሎ መመላእታ ፍለ።", uk: "Визначте тип виділеного жирним додатка." },
      categories: ["COD", "COI", "CC"],
      items: [
        { word: "Je mange {a}une pomme{/a}.", categoryIdx: 0 },
        { word: "Elle parle {a}à son ami{/a}.", categoryIdx: 1 },
        { word: "Nous habitons {a}à Lyon{/a}.", categoryIdx: 2 },
        { word: "Il regarde {a}un film{/a}.", categoryIdx: 0 },
        { word: "Tu téléphones {a}à ta mère{/a}.", categoryIdx: 1 },
        { word: "Ils arrivent {a}demain{/a}.", categoryIdx: 2 },
      ],
    },
    {
      type: "word_order",
      title: "Exercice 3",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase correcte.",
      transInstruction: { en: "Put the words in the correct order to form a correct sentence.", ar: "رتب الكلمات بالترتيب الصحيح لتكوين جملة صحيحة.", fa: "کلمات را به ترتیب درست قرار دهید تا جملهٔ صحیح بسازید.", ti: "ቃላት ብትኽክለኛ ቅደም ተኸተል ኣቐምጥ ንትኽክለኛ ሓረግ ምፍጣር።", uk: "Розташуйте слова у правильному порядку, щоб утворити правильне речення." },
      items: [],
      poolSize: 5,
      pool: [
        // A1 — 4-5 mots, vocabulaire très fréquent
        { sentence: "Marie mange une pomme.", words: ["Marie", "mange", "une", "pomme"] },
        { sentence: "Il habite à Paris.", words: ["Il", "habite", "à", "Paris"] },
        { sentence: "Tu aimes le café.", words: ["Tu", "aimes", "le", "café"] },
        { sentence: "Elle parle français.", words: ["Elle", "parle", "français"] },
        { sentence: "Nous mangeons du pain.", words: ["Nous", "mangeons", "du", "pain"] },
        { sentence: "Ils jouent au foot.", words: ["Ils", "jouent", "au", "foot"] },
        { sentence: "Je lis un livre.", words: ["Je", "lis", "un", "livre"] },
        { sentence: "Vous regardez la télé.", words: ["Vous", "regardez", "la", "télé"] },
        { sentence: "Les enfants jouent dans le jardin.", words: ["Les", "enfants", "jouent", "dans", "le", "jardin"] },
        { sentence: "Nous parlons à nos amis.", words: ["Nous", "parlons", "à", "nos", "amis"] },
        // A2 — 6-7 mots, vocabulaire courant, deux informations
        { sentence: "Nous aimons beaucoup la cuisine française.", words: ["Nous", "aimons", "beaucoup", "la", "cuisine", "française"] },
        { sentence: "Elle travaille chaque matin à l'hôpital.", words: ["Elle", "travaille", "chaque", "matin", "à", "l'hôpital"] },
        { sentence: "Tu parles bien le français.", words: ["Tu", "parles", "bien", "le", "français"] },
        { sentence: "Ils habitent dans un grand appartement.", words: ["Ils", "habitent", "dans", "un", "grand", "appartement"] },
        { sentence: "Vous cherchez un appartement pas cher.", words: ["Vous", "cherchez", "un", "appartement", "pas", "cher"] },
        { sentence: "Je prépare le repas pour la famille.", words: ["Je", "prépare", "le", "repas", "pour", "la", "famille"] },
        { sentence: "Nous étudions le français depuis six mois.", words: ["Nous", "étudions", "le", "français", "depuis", "six", "mois"] },
        { sentence: "Ils arrivent toujours en avance.", words: ["Ils", "arrivent", "toujours", "en", "avance"] },
        { sentence: "Elle écoute souvent de la musique.", words: ["Elle", "écoute", "souvent", "de", "la", "musique"] },
        { sentence: "Tu lis des livres en français.", words: ["Tu", "lis", "des", "livres", "en", "français"] },
        // B1 — 7-9 mots, vocabulaire précis, connecteurs variés
        { sentence: "Il cherche un emploi adapté à ses compétences.", words: ["Il", "cherche", "un", "emploi", "adapté", "à", "ses", "compétences"] },
        { sentence: "Ils participent régulièrement aux réunions de quartier.", words: ["Ils", "participent", "régulièrement", "aux", "réunions", "de", "quartier"] },
        { sentence: "Elle travaille dans un service social depuis deux ans.", words: ["Elle", "travaille", "dans", "un", "service", "social", "depuis", "deux", "ans"] },
        { sentence: "Vous comprenez parfaitement les règles de grammaire.", words: ["Vous", "comprenez", "parfaitement", "les", "règles", "de", "grammaire"] },
        { sentence: "Je consulte régulièrement mon assistante sociale.", words: ["Je", "consulte", "régulièrement", "mon", "assistante", "sociale"] },
        { sentence: "Ils intègrent progressivement les habitudes culturelles locales.", words: ["Ils", "intègrent", "progressivement", "les", "habitudes", "culturelles", "locales"] },
        { sentence: "Elle accompagne ses enfants à l'école chaque matin.", words: ["Elle", "accompagne", "ses", "enfants", "à", "l'école", "chaque", "matin"] },
        { sentence: "Nous construisons ensemble un avenir meilleur.", words: ["Nous", "construisons", "ensemble", "un", "avenir", "meilleur"] },
        { sentence: "Tu t'exprimes clairement malgré les difficultés linguistiques.", words: ["Tu", "t'exprimes", "clairement", "malgré", "les", "difficultés", "linguistiques"] },
        { sentence: "Ils fréquentent régulièrement les cours de français.", words: ["Ils", "fréquentent", "régulièrement", "les", "cours", "de", "français"] },
      ],
    },
    {
      type: "color_highlight",
      title: "Exercice 4",
      instruction: "Sélectionnez une couleur, puis cliquez sur chaque mot pour l'identifier : Sujet (jaune), Verbe (rouge), Complément (vert).",
      transInstruction: { en: "Select a color, then click each word to identify it: Subject (yellow), Verb (red), Complement (green).", ar: "اختر لوناً، ثم انقر على كل كلمة لتحديدها: الفاعل (أصفر)، الفعل (أحمر)، المتمّم (أخضر).", fa: "یک رنگ انتخاب کنید، سپس روی هر کلمه کلیک کنید: فاعل (زرد)، فعل (قرمز)، متمم (سبز).", ti: "ሕብሪ ምረጽ፣ ድሕሪኡ ነፍሲ ወከፍ ቃል ፍለ፦ ርእሲ (ብጫ)፣ ግሲ (ቀይሕ)፣ መመላእታ (ቀጠልያ).", uk: "Виберіть колір, потім натисніть на кожне слово: Підмет (жовтий), Дієслово (червоний), Додаток (зелений)." },
      colors: ["Sujet", "Verbe", "Complément"],
      items: [
        {
          words: ["Marie", "mange", "une", "salade."],
          answers: [0, 1, 2, 2],
        },
        {
          words: ["Je", "parle", "à", "Marie."],
          answers: [0, 1, 2, 2],
        },
        {
          words: ["Il", "habite", "à", "Paris."],
          answers: [0, 1, 2, 2],
        },
      ],
    },
    {
      type: "write",
      title: "Exercice 5",
      instruction: "Écrivez une phrase avec le verbe proposé.\nLa phrase doit avoir un sujet, un verbe et un complément.\nElle commence par une majuscule et se termine par un point.",
      transInstruction: { en: "Write a sentence with the verb provided.\nThe sentence must have a subject, a verb and a complement.\nIt starts with a capital letter and ends with a full stop.", ar: "اكتب جملة باستخدام الفعل المقترح.\nيجب أن تحتوي الجملة على فاعل وفعل ومتمّم.\nتبدأ بحرف كبير وتنتهي بنقطة.", fa: "یک جمله با فعل پیشنهادی بنویسید.\nجمله باید فاعل، فعل و متمم داشته باشد.\nبا حرف بزرگ شروع و با نقطه تمام می‌شود.", ti: "ሓደ ሓሳብ ብእቲ ዝቐረበ ግሲ ጽሓፍ።\nእቲ ሓሳብ ርእሲ፣ ግሲን መመላእታን ክህልዎ ኣለዎ።\nብዓብዪ ፊደል ይጅምር ብነጥቢ ይውዳእ።", uk: "Напишіть речення із запропонованим дієсловом.\nРечення повинно мати підмет, дієслово та додаток.\nВоно починається з великої літери і закінчується крапкою." },
      verbPool: [
        "parler", "manger", "habiter", "aimer", "écouter",
        "regarder", "travailler", "chanter", "danser", "jouer",
        "chercher", "marcher", "oublier", "penser", "porter",
        "rester", "tomber", "voyager", "arriver", "préparer",
        "cuisiner", "dessiner", "laver", "rentrer", "nager",
      ],
      verbPoolSize: 5,
    },
  ],
  evalExercises: [
    {
      type: "word_order",
      title: "Évaluation — Question 1",
      instruction: "Remettez les mots dans le bon ordre.",
      transInstruction: { en: "Put the words back in the correct order.", ar: "أعد ترتيب الكلمات.", fa: "کلمات را به ترتیب صحیح بگذارید.", ti: "ቃላት ናብ ቅኑዕ ቅደም-ሰዓብ ምለሶም።", uk: "Розставте слова в правильному порядку." },
      allowPartialValidation: true,
      items: [],
      poolSize: 4,
      pool: [
        { sentence: "Je mange une pomme.",           words: ["Je",    "mange",     "une",    "pomme"]          },
        { sentence: "Elle habite à Paris.",          words: ["Elle",  "habite",    "à",      "Paris"]          },
        { sentence: "Nous aimons le français.",      words: ["Nous",  "aimons",    "le",     "français"]       },
        { sentence: "Il travaille chaque jour.",     words: ["Il",    "travaille", "chaque", "jour"]           },
        { sentence: "Tu parles bien le français.",   words: ["Tu",    "parles",    "bien",   "le", "français"] },
        { sentence: "Ils arrivent le matin.",        words: ["Ils",   "arrivent",  "le",     "matin"]          },
        { sentence: "Vous cherchez un appartement.", words: ["Vous",  "cherchez",  "un",     "appartement"]    },
        { sentence: "Elle étudie à l'université.",  words: ["Elle",  "étudie",    "à",      "l'université"]   },
      ],
    },
    {
      type: "classify",
      title: "Évaluation — Question 2",
      instruction: "Classez chaque élément : Sujet, Verbe ou Complément.",
      transInstruction: { en: "Sort each element: Subject, Verb or Complement.", ar: "صنّف كل عنصر: فاعل، فعل أو متمّم.", fa: "هر عنصر را دسته‌بندی کنید: فاعل، فعل یا متمم.", ti: "ነፍሲ ወከፍ ኣካል ሸነኽ፦ ርእሲ፣ ግሲ ወይ መመላእታ።", uk: "Розсортуйте кожен елемент: Підмет, Дієслово чи Додаток." },
      categories: ["Sujet", "Verbe", "Complément"],
      items: [],
      poolSize: 6,
      allowPartialValidation: true,
      pool: [
        { word: "{a}Ali{/a} parle français.",           categoryIdx: 0 },
        { word: "Ali {a}parle{/a} français.",           categoryIdx: 1 },
        { word: "Ali parle {a}français{/a}.",           categoryIdx: 2 },
        { word: "{a}Elle{/a} habite à Genève.",         categoryIdx: 0 },
        { word: "Elle {a}habite{/a} à Genève.",         categoryIdx: 1 },
        { word: "Elle habite {a}à Genève{/a}.",         categoryIdx: 2 },
        { word: "{a}Nous{/a} mangeons ensemble.",       categoryIdx: 0 },
        { word: "Nous {a}mangeons{/a} ensemble.",       categoryIdx: 1 },
        { word: "Nous mangeons {a}ensemble{/a}.",       categoryIdx: 2 },
      ],
    },
  ],
};
