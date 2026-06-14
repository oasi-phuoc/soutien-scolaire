import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_CEST: GrammarLesson = {
  slug: "a1-gr-cest-il-est",
  code: "R1.9",
  level: "A1",
  title: "C'est ou il est ?",
  theory: [
    // ── Intro ──────────────────────────────────────────────────────────────────
    {
      type: "plain_list",
      items: [
        "Les expressions {a}c'est{/a} et {a}il est{/a} servent toutes les deux à présenter ou décrire quelqu'un ou quelque chose, mais elles ne s'utilisent pas de la même manière.",
      ],
      transItems: {
        en: ["The expressions {a}c'est{/a} and {a}il est{/a} both serve to present or describe someone or something, but they are not used in the same way."],
        ar: ["تُستخدم عبارتا {a}c'est{/a} و{a}il est{/a} كلتاهما لتقديم شخص أو شيء أو وصفه، لكنهما لا تُستخدمان بنفس الطريقة."],
        fa: ["هر دو عبارت {a}c'est{/a} و {a}il est{/a} برای معرفی یا توصیف کسی یا چیزی به کار می‌روند، اما به یک شکل استفاده نمی‌شوند."],
        ti: ["ክልቲኤን ቃላት {a}c'est{/a} ከምኡ'ውን {a}il est{/a} ሰብ ወይ ነገር ንምቕራብ ወይ ንምግላጽ ይጠቅማ፣ ግን ብሓደ መንገዲ ኣይጥቀማሉን።"],
        uk: ["Вирази {a}c'est{/a} та {a}il est{/a} обидва служать для представлення або опису когось чи чогось, але вживаються по-різному."],
      },
    },

    // ── C'EST ──────────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Quand utiliser c'est",
      sub: true,
      trans: { en: "When to use c'est", ar: "متى نستخدم c'est", fa: "چه وقت از c'est استفاده کنیم", ti: "መዓዝ c'est ንጠቀም", uk: "Коли вживати c'est" },
    },

    {
      type: "plain_list",
      items: [
        "On utilise c'est pour identifier, présenter ou donner une information générale.",
      ],
      noBulletItems: [0],
      transItems: {
        en: ["We use c'est to identify, introduce or give general information."],
        ar: ["نستخدم c'est للتعريف أو التقديم أو لإعطاء معلومة عامة."],
        fa: ["از c'est برای شناسایی، معرفی یا دادن اطلاعات کلی استفاده می‌کنیم."],
        ti: ["c'est ንምፍላይ፣ ንምቕራብ ወይ ሓፈሻዊ ሓበሬታ ምሃብ ንጠቕሞ።"],
        uk: ["Ми використовуємо c'est для ідентифікації, представлення або надання загальної інформації."],
      },
    },

    {
      type: "highlight",
      label: "Devant un nom avec article",
      items: [
        "C'est {a}un{/a} professeur.",
        "C'est {a}la{/a} pharmacie.",
      ],
      noBulletItems: [0, 1],
      transLabel: { en: "Before a noun with an article", ar: "قبل اسم مع مقال", fa: "قبل از اسم با حرف تعریف", ti: "ቅድሚ ስም ምስ ናይ ዓንቀጽ", uk: "Перед іменником з артиклем" },
    },

    {
      type: "highlight",
      label: "Devant un prénom ou un nom propre",
      items: [
        "C'est {a}Alona{/a}.",
        "C'est {a}M. Mohammed Safi{/a}.",
      ],
      noBulletItems: [0, 1],
      transLabel: { en: "Before a first name or proper noun", ar: "قبل اسم شخص أو اسم علم", fa: "قبل از اسم کوچک یا اسم خاص", ti: "ቅድሚ ስም ሰብ ወይ ናይ ኣቦ ስም", uk: "Перед іменем або власною назвою" },
    },

    {
      type: "highlight",
      label: "Devant un pronom",
      items: [
        "C'est {a}moi{/a}.",
        "C'est {a}elle{/a}.",
      ],
      noBulletItems: [0, 1],
      transLabel: { en: "Before a pronoun", ar: "قبل ضمير", fa: "قبل از ضمیر", ti: "ቅድሚ ተካኢ ስም", uk: "Перед займенником" },
    },

    {
      type: "highlight",
      label: "Pour donner une date ou une heure",
      items: [
        "C'est {a}le 15 mars{/a}.",
        "C'est {a}trois heures{/a}.",
      ],
      noBulletItems: [0, 1],
      transLabel: { en: "To give a date or time", ar: "لإعطاء تاريخ أو وقت", fa: "برای دادن تاریخ یا ساعت", ti: "ዕለት ወይ ሰዓት ንምሃብ", uk: "Для зазначення дати або часу" },
    },

    // ── IL EST ────────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Quand utiliser il est / elle est",
      sub: true,
      trans: { en: "When to use il est / elle est", ar: "متى نستخدم il est / elle est", fa: "چه وقت از il est / elle est استفاده کنیم", ti: "መዓዝ il est / elle est ንጠቀም", uk: "Коли вживати il est / elle est" },
    },

    {
      type: "plain_list",
      items: [
        "Il est / Elle est sert à décrire une personne ou une chose.",
      ],
      noBulletItems: [0],
      transItems: {
        en: ["Il est / Elle est is used to describe a person or a thing."],
        ar: ["تُستخدم il est / elle est لوصف شخص أو شيء ما."],
        fa: ["il est / elle est برای توصیف یک شخص یا یک چیز به کار می‌رود."],
        ti: ["il est / elle est ሰብ ወይ ነገር ንምግላጽ ይጠቅም።"],
        uk: ["Il est / Elle est використовується для опису людини або речі."],
      },
    },

    {
      type: "highlight",
      label: "Devant un adjectif",
      items: [
        "Il est {a}grand{/a}.",
        "Il est {a}malade{/a}.",
      ],
      noBulletItems: [0, 1],
      transLabel: { en: "Before an adjective", ar: "قبل صفة", fa: "قبل از صفت", ti: "ቅድሚ ቅጽል", uk: "Перед прикметником" },
    },

    {
      type: "highlight",
      label: "Devant une profession (sans article)",
      items: [
        "Il est {a}professeur{/a}.",
        "Elle est {a}infirmière{/a}.",
      ],
      noBulletItems: [0, 1],
      transLabel: { en: "Before a profession (no article)", ar: "قبل مهنة (بدون مقال)", fa: "قبل از شغل (بدون حرف تعریف)", ti: "ቅድሚ ስራሕ (ብዘይ ናይ ዓንቀጽ)", uk: "Перед назвою професії (без артикля)" },
    },

    {
      type: "highlight",
      label: "Devant une nationalité",
      items: [
        "Il est {a}suisse{/a}.",
        "Elle est {a}ukrainienne{/a}.",
      ],
      noBulletItems: [0, 1],
      transLabel: { en: "Before a nationality", ar: "قبل جنسية", fa: "قبل از ملیت", ti: "ቅድሚ ዜግነት", uk: "Перед назвою національності" },
    },

    {
      type: "highlight",
      label: "Devant une religion",
      items: [
        "Il est {a}musulman{/a}.",
        "Il est {a}bouddhiste{/a}.",
      ],
      noBulletItems: [0, 1],
      transLabel: { en: "Before a religion", ar: "قبل دين", fa: "قبل از دین", ti: "ቅድሚ ሃይማኖት", uk: "Перед назвою релігії" },
    },

    // ── COMPARAISON ────────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Comparaison",
      sub: true,
      trans: { en: "Comparison", ar: "مقارنة", fa: "مقایسه", ti: "ምስምስ", uk: "Порівняння" },
    },

    {
      type: "grid",
      headers: ["C'est …", "Il est / Elle est …"],
      equalCols: true,
      rows: [
        ["C'est {a}un{/a} professeur.", "Il est {a}professeur{/a}."],
        ["C'est {a}une{/a} infirmière.", "Elle est {a}infirmière{/a}."],
        ["C'est {a}Sophie{/a}.", "Elle est {a}gentille{/a}."],
        ["C'est {a}mon{/a} frère.", "Il est {a}grand{/a}."],
        ["C'est {a}une{/a} voiture.", "Elle est {a}rapide{/a}."],
      ],
    },

    // ── AVEC UN ADJECTIF ───────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Avec un adjectif",
      sub: true,
      trans: { en: "With an adjective", ar: "مع صفة", fa: "با صفت", ti: "ምስ ቅጽል", uk: "З прикметником" },
    },

    {
      type: "plain_list",
      items: [
        "Quand on désigne une personne avec un nom + adjectif, utilise {a}c'est{/a}.",
      ],
      noBulletItems: [0],
      transItems: {
        en: ["When referring to a person with a noun + adjective, use {a}c'est{/a}."],
        ar: ["عند الإشارة إلى شخص باستخدام اسم + صفة، استخدم {a}c'est{/a}."],
        fa: ["وقتی با اسم + صفت به یک شخص اشاره می‌کنید، از {a}c'est{/a} استفاده کنید."],
        ti: ["ሰብ ብስም + ቅጽል ምስ እትጠቅሶ፣ {a}c'est{/a} ጠቀም።"],
        uk: ["Коли позначаєте особу іменником + прикметником, використовуйте {a}c'est{/a}."],
      },
    },

    {
      type: "highlight",
      label: "",
      items: [
        "C'est un homme {a}gentil{/a}.",
        "C'est une grande {a}voiture{/a}.",
      ],
      noBulletItems: [0, 1],
    },

    // ── MÉTHODE RAPIDE ─────────────────────────────────────────────────────────
    {
      type: "heading",
      text: "Méthode rapide",
      sub: true,
      trans: { en: "Quick method", ar: "الطريقة السريعة", fa: "روش سریع", ti: "ቅልጡፍ መምርሒ", uk: "Швидкий метод" },
    },

    {
      type: "highlight",
      label: "Qui est-ce ? → C'est",
      items: [
        "Qui est-ce ? → C'est le médecin.",
        "Qui est-ce ? → C'est Ali.",
        "Qui est-ce ? → C'est un professeur.",
      ],
      noBulletItems: [0, 1, 2],
      inlineArrows: true,
      transLabel: { en: "Who is it? → C'est", ar: "من هذا/هذه؟ → C'est", fa: "این کیست؟ → C'est", ti: "መን እዩ/እያ? → C'est", uk: "Хто це? → C'est" },
    },

    {
      type: "highlight",
      label: "Comment est-il / elle ? → Il est / Elle est",
      items: [
        "Comment est-il ? → Il est gentil.",
        "Comment est-elle ? → Elle est médecin.",
        "Comment est-il ? → Il est suisse.",
      ],
      noBulletItems: [0, 1, 2],
      inlineArrows: true,
      transLabel: { en: "What is he/she like? → Il est / Elle est", ar: "كيف هو/هي؟ → Il est / Elle est", fa: "او چطور است؟ → Il est / Elle est", ti: "ከመይ ኣሎ/ኣላ? → Il est / Elle est", uk: "Який він/яка вона? → Il est / Elle est" },
    },
  ],
  exercises: [
    // ── Exercice 1 — Classify ──────────────────────────────────────────────────
    {
      type: "classify",
      title: "Exercice 1",
      instruction: "Classez chaque phrase : identification ou description.",
      categories: ["Identification (C'est)", "Description (Il / Elle est)"],
      items: [],
      poolSize: 5,
      pool: [
        { word: "C'est une étudiante en médecine.",  categoryIdx: 0 },
        { word: "Il est très patient.",              categoryIdx: 1 },
        { word: "C'est mon livre de grammaire.",     categoryIdx: 0 },
        { word: "Elle est italienne.",               categoryIdx: 1 },
        { word: "C'est le train pour Paris.",        categoryIdx: 0 },
        { word: "Il est architecte.",                categoryIdx: 1 },
        { word: "C'est une bonne idée !",            categoryIdx: 0 },
        { word: "Elle est très intelligente.",       categoryIdx: 1 },
        { word: "C'est mon voisin.",                 categoryIdx: 0 },
        { word: "Il est fatigué.",                   categoryIdx: 1 },
        { word: "C'est la tour Eiffel.",             categoryIdx: 0 },
        { word: "Elle est médecin.",                 categoryIdx: 1 },
        { word: "C'est un beau tableau.",            categoryIdx: 0 },
        { word: "Il est suisse.",                    categoryIdx: 1 },
        { word: "C'est ma sœur.",                    categoryIdx: 0 },
        { word: "Elle est contente.",                categoryIdx: 1 },
        { word: "C'est le directeur.",               categoryIdx: 0 },
        { word: "Il est grand et sportif.",          categoryIdx: 1 },
        { word: "C'est une belle journée !",         categoryIdx: 0 },
        { word: "Elle est ukrainienne.",             categoryIdx: 1 },
      ],
    },

    // ── Exercice 2 — QCM (C'est / Il est / Elle est + contexte) ───────────────
    {
      type: "qcm",
      title: "Exercice 2",
      instruction: "Choisissez C'est ou Il / Elle est.",
      items: [],
      poolSize: 5,
      pool: [
        // ── Choix simples ──────────────────────────────────────────────────────
        { sentence: "___ professeur de français.",             choices: ["Il est",   "C'est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ un ami de Thomas.",                   choices: ["C'est",   "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ intelligente et curieuse.",           choices: ["Elle est", "C'est",  "Il est",   "C'est une"], correctIdx: 0 },
        { sentence: "___ la maison de mes parents.",           choices: ["C'est",   "Il est",  "Elle est", "C'est la"],  correctIdx: 0 },
        { sentence: "___ une bonne idée !",                   choices: ["C'est",   "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ français et il parle bien anglais.", choices: ["Il est",   "C'est",  "C'est un", "Elle est"],  correctIdx: 0 },
        { sentence: "___ médecin.",                           choices: ["Il est",   "C'est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ ma sœur.",                           choices: ["C'est",   "Il est",  "Elle est", "C'est une"], correctIdx: 0 },
        { sentence: "___ grande et élégante.",                choices: ["Elle est", "C'est",  "Il est",   "C'est une"], correctIdx: 0 },
        { sentence: "___ le directeur de l'école.",           choices: ["C'est",   "Il est",  "Elle est", "C'est le"],  correctIdx: 0 },
        { sentence: "___ un bon restaurant.",                 choices: ["C'est",   "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ architecte.",                        choices: ["Il est",   "C'est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ très sérieuse.",                     choices: ["Elle est", "C'est",  "Il est",   "C'est une"], correctIdx: 0 },
        { sentence: "___ la pharmacie du quartier.",          choices: ["C'est",   "Il est",  "Elle est", "C'est la"],  correctIdx: 0 },
        { sentence: "___ suisse.",                            choices: ["Il est",   "C'est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ infirmière.",                        choices: ["Elle est", "C'est",  "Il est",   "C'est une"], correctIdx: 0 },
        { sentence: "___ fatigué ce soir.",                   choices: ["Il est",   "C'est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ mon voisin.",                        choices: ["C'est",   "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "___ ukrainienne.",                       choices: ["Elle est", "C'est",  "Il est",   "C'est une"], correctIdx: 0 },
        { sentence: "___ un étudiant en médecine.",           choices: ["C'est",   "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        // ── Contexte double ───────────────────────────────────────────────────
        { sentence: "Ahmed est médecin. ___ très connu dans la ville.",       choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 1 },
        { sentence: "Voici Ahmed. ___ mon médecin.",                          choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "Marie est française. ___ très gentille.",                choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 2 },
        { sentence: "Voici Marie. ___ ma voisine.",                           choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 0 },
        { sentence: "Paul est professeur. ___ très patient.",                 choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 1 },
        { sentence: "Voici Paul. ___ le nouveau professeur.",                 choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "Sofia est étudiante. ___ très sérieuse.",               choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 2 },
        { sentence: "Voici Sofia. ___ ma camarade de classe.",                choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 0 },
        { sentence: "Ali est sportif. ___ très rapide.",                      choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 1 },
        { sentence: "Voici Ali. ___ un bon joueur.",                          choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "Leila est infirmière. ___ très compétente.",             choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 2 },
        { sentence: "Voici Leila. ___ mon infirmière.",                       choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 0 },
        { sentence: "Omar est architecte. ___ très créatif.",                 choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 1 },
        { sentence: "Voici Omar. ___ un architecte célèbre.",                 choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "Nadia est médecin. ___ très dévouée.",                   choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 2 },
        { sentence: "Voici Nadia. ___ ma médecin de famille.",                choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 0 },
        { sentence: "Carlos est cuisinier. ___ très talentueux.",             choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 1 },
        { sentence: "Voici Carlos. ___ le chef du restaurant.",               choices: ["C'est", "Il est",  "Elle est", "C'est un"],  correctIdx: 0 },
        { sentence: "Anna est professeure. ___ très stricte.",                choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 2 },
        { sentence: "Voici Anna. ___ ma professeure de français.",            choices: ["C'est", "Il est",  "Elle est", "C'est une"], correctIdx: 0 },
      ],
    },

    // ── Exercice 3 — Fill (c'est / il est) ────────────────────────────────────
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Complétez avec c'est ou il est.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ un médecin.",            hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ très gentil.",           hint: "c'est / il est", answer: "il est" },
        { sentence: "___ ma sœur.",               hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ fatigué aujourd'hui.",   hint: "c'est / il est", answer: "il est" },
        { sentence: "___ un grand bâtiment.",     hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ malade.",                hint: "c'est / il est", answer: "il est" },
        { sentence: "___ mon ami.",               hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ grand et fort.",         hint: "c'est / il est", answer: "il est" },
        { sentence: "___ le directeur.",          hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ professeur.",            hint: "c'est / il est", answer: "il est" },
        { sentence: "___ une bonne idée.",        hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ suisse.",                hint: "c'est / il est", answer: "il est" },
        { sentence: "___ mon père.",              hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ très intelligent.",      hint: "c'est / il est", answer: "il est" },
        { sentence: "___ un beau tableau.",       hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ architecte.",            hint: "c'est / il est", answer: "il est" },
        { sentence: "___ le train de 8h.",        hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ content.",               hint: "c'est / il est", answer: "il est" },
        { sentence: "___ un étudiant sérieux.",   hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ chauffeur de bus.",      hint: "c'est / il est", answer: "il est" },
      ],
    },

    // ── Exercice 4 — Fill (C'est / Il est / Elle est) ─────────────────────────
    {
      type: "fill",
      title: "Exercice 4",
      instruction: "Complétez avec C'est, Il est ou Elle est.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ mon frère. ___ étudiant.",              hint: "identifier puis décrire",       answer: "c'est"    },
        { sentence: "Regarde cette voiture ! ___ belle.",        hint: "décrire avec adjectif",         answer: "elle est" },
        { sentence: "___ un très bon restaurant.",               hint: "identifier avec article",       answer: "c'est"    },
        { sentence: "Ma mère ? ___ médecin.",                   hint: "profession sans article",       answer: "elle est" },
        { sentence: "___ le directeur de l'école.",             hint: "identifier avec article défini", answer: "c'est"   },
        { sentence: "Tu connais Ali ? ___ mon cousin.",          hint: "identifier avec possessif",     answer: "c'est"    },
        { sentence: "Mon professeur ? ___ très patient.",        hint: "décrire avec adjectif",         answer: "il est"   },
        { sentence: "Sofia ? ___ ma meilleure amie.",            hint: "identifier avec possessif",     answer: "c'est"    },
        { sentence: "___ une bonne élève.",                      hint: "identifier avec article",       answer: "c'est"    },
        { sentence: "Cette robe ? ___ magnifique.",              hint: "décrire avec adjectif",         answer: "elle est" },
        { sentence: "Paul ? ___ un artiste.",                    hint: "identifier avec article",       answer: "c'est"    },
        { sentence: "___ très intelligente.",                    hint: "décrire avec adjectif",         answer: "elle est" },
        { sentence: "Voici un cadeau. ___ pour toi.",            hint: "identifier (neutre)",           answer: "c'est"    },
        { sentence: "___ infirmière dans un grand hôpital.",     hint: "profession sans article",       answer: "elle est" },
        { sentence: "___ le nouveau voisin.",                    hint: "identifier avec article défini", answer: "c'est"   },
        { sentence: "Ton ami Ahmed ? ___ très sympa.",           hint: "décrire avec adjectif",         answer: "il est"   },
        { sentence: "___ une bonne nouvelle !",                  hint: "identifier avec article",       answer: "c'est"    },
        { sentence: "Le parc ? ___ loin d'ici.",                 hint: "décrire une chose",             answer: "il est"   },
        { sentence: "___ mon oncle. ___ chauffeur.",             hint: "identifier puis profession",    answer: "c'est"    },
        { sentence: "Cette fille ? ___ vraiment gentille.",      hint: "décrire avec adjectif",         answer: "elle est" },
      ],
    },

    // ── Exercice 5 — Word order ────────────────────────────────────────────────
    {
      type: "word_order",
      title: "Exercice 5",
      instruction: "Remettez les mots dans le bon ordre.",
      items: [
        { sentence: "C'est une bonne professeure.",    words: ["C'est",  "une",   "bonne",   "professeure"]                  },
        { sentence: "Il est grand et sportif.",        words: ["Il",     "est",   "grand",   "et",      "sportif"]           },
        { sentence: "C'est la voiture de mon père.",   words: ["C'est",  "la",    "voiture", "de",      "mon",  "père"]      },
        { sentence: "Elle est très gentille.",         words: ["Elle",   "est",   "très",    "gentille"]                     },
        { sentence: "C'est mon voisin de palier.",     words: ["C'est",  "mon",   "voisin",  "de",      "palier"]            },
      ],
    },

    // ── Exercice 6 — Write (transformer avec c'est) ────────────────────────────
    {
      type: "write",
      title: "Exercice 6",
      instruction: "Transformez les phrases avec c'est. Écrivez la phrase complète.\nExemple : Il est mon ami. → C'est mon ami.",
      prompts: [
        "Il est mon frère. →",
        "Il est mon voisin. →",
        "Elle est ma sœur. →",
        "Elle est ma collègue. →",
        "Il est mon professeur. →",
      ],
    },

    // ── Exercice 7 — Write (transformer avec il est / elle est) ───────────────
    {
      type: "write",
      title: "Exercice 7",
      instruction: "Transformez avec il est / elle est. Écrivez la phrase complète.\nExemple : C'est un homme gentil. → Il est gentil.",
      prompts: [
        "C'est une femme sympathique. →",
        "C'est un garçon intelligent. →",
        "C'est un enfant calme. →",
        "C'est une élève sérieuse. →",
        "C'est un sportif courageux. →",
      ],
    },

    // ── Exercice 8 — Write (phrase libre) ─────────────────────────────────────
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Écrivez une phrase avec les mots proposés.",
      prompts: [
        "Alona :",
        "Ma mère :",
        "Un grand garçon :",
      ],
    },
  ],
};
