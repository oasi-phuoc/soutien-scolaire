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
      transItems: {
        en: ["C'est {a}un{/a} professeur. (This is a teacher.)", "C'est {a}la{/a} pharmacie. (This is the pharmacy.)"],
        ar: ["C'est {a}un{/a} professeur. (هذا أستاذ.)", "C'est {a}la{/a} pharmacie. (هذه الصيدلية.)"],
        fa: ["C'est {a}un{/a} professeur. (این یک معلم است.)", "C'est {a}la{/a} pharmacie. (این داروخانه است.)"],
        ti: ["C'est {a}un{/a} professeur. (ምምህር እዩ።)", "C'est {a}la{/a} pharmacie. (ፋርማሲ እያ።)"],
        uk: ["C'est {a}un{/a} professeur. (Це вчитель.)", "C'est {a}la{/a} pharmacie. (Це аптека.)"],
      },
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
      transItems: {
        en: ["C'est {a}Alona{/a}. (This is Alona.)", "C'est {a}M. Mohammed Safi{/a}. (This is Mr. Mohammed Safi.)"],
        ar: ["C'est {a}Alona{/a}. (هذه ألونا.)", "C'est {a}M. Mohammed Safi{/a}. (هذا السيد محمد صافي.)"],
        fa: ["C'est {a}Alona{/a}. (این آلونا است.)", "C'est {a}M. Mohammed Safi{/a}. (این آقای محمد صافی است.)"],
        ti: ["C'est {a}Alona{/a}. (ኣሎና እያ።)", "C'est {a}M. Mohammed Safi{/a}. (ሚስተር መሓመድ ሳፊ እዩ።)"],
        uk: ["C'est {a}Alona{/a}. (Це Алона.)", "C'est {a}M. Mohammed Safi{/a}. (Це пан Мохаммед Сафі.)"],
      },
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
      transItems: {
        en: ["C'est {a}moi{/a}. (It's me.)", "C'est {a}elle{/a}. (It's her.)"],
        ar: ["C'est {a}moi{/a}. (أنا.)", "C'est {a}elle{/a}. (إنها هي.)"],
        fa: ["C'est {a}moi{/a}. (این منم.)", "C'est {a}elle{/a}. (این اوست.)"],
        ti: ["C'est {a}moi{/a}. (ኣነ እየ።)", "C'est {a}elle{/a}. (ንሳ እያ።)"],
        uk: ["C'est {a}moi{/a}. (Це я.)", "C'est {a}elle{/a}. (Це вона.)"],
      },
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
      transItems: {
        en: ["C'est {a}le 15 mars{/a}. (It's March 15th.)", "C'est {a}trois heures{/a}. (It's three o'clock.)"],
        ar: ["C'est {a}le 15 mars{/a}. (إنه الخامس عشر من مارس.)", "C'est {a}trois heures{/a}. (الساعة الثالثة.)"],
        fa: ["C'est {a}le 15 mars{/a}. (پانزدهم مارس است.)", "C'est {a}trois heures{/a}. (ساعت سه است.)"],
        ti: ["C'est {a}le 15 mars{/a}. (15 መጋቢት እዩ།)", "C'est {a}trois heures{/a}. (ሰዓት ሰለስተ እዩ།)"],
        uk: ["C'est {a}le 15 mars{/a}. (Сьогодні 15 березня.)", "C'est {a}trois heures{/a}. (Зараз три години.)"],
      },
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
      transItems: {
        en: ["Il est {a}grand{/a}. (He is tall.)", "Il est {a}malade{/a}. (He is sick.)"],
        ar: ["Il est {a}grand{/a}. (هو طويل.)", "Il est {a}malade{/a}. (هو مريض.)"],
        fa: ["Il est {a}grand{/a}. (او بلند است.)", "Il est {a}malade{/a}. (او مریض است.)"],
        ti: ["Il est {a}grand{/a}. (ነዊሕ እዩ།)", "Il est {a}malade{/a}. (ሕሙም እዩ།)"],
        uk: ["Il est {a}grand{/a}. (Він високий.)", "Il est {a}malade{/a}. (Він хворий.)"],
      },
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
      transItems: {
        en: ["Il est {a}professeur{/a}. (He is a teacher.)", "Elle est {a}infirmière{/a}. (She is a nurse.)"],
        ar: ["Il est {a}professeur{/a}. (هو أستاذ.)", "Elle est {a}infirmière{/a}. (هي ممرضة.)"],
        fa: ["Il est {a}professeur{/a}. (او معلم است.)", "Elle est {a}infirmière{/a}. (او پرستار است.)"],
        ti: ["Il est {a}professeur{/a}. (ምምህር እዩ།)", "Elle est {a}infirmière{/a}. (ነርስ እያ།)"],
        uk: ["Il est {a}professeur{/a}. (Він вчитель.)", "Elle est {a}infirmière{/a}. (Вона медсестра.)"],
      },
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
      transItems: {
        en: ["Il est {a}suisse{/a}. (He is Swiss.)", "Elle est {a}ukrainienne{/a}. (She is Ukrainian.)"],
        ar: ["Il est {a}suisse{/a}. (هو سويسري.)", "Elle est {a}ukrainienne{/a}. (هي أوكرانية.)"],
        fa: ["Il est {a}suisse{/a}. (او سوئیسی است.)", "Elle est {a}ukrainienne{/a}. (او اوکراینی است.)"],
        ti: ["Il est {a}suisse{/a}. (ሽወደናዊ እዩ།)", "Elle est {a}ukrainienne{/a}. (ዩክሬናዊት እያ།)"],
        uk: ["Il est {a}suisse{/a}. (Він швейцарець.)", "Elle est {a}ukrainienne{/a}. (Вона українка.)"],
      },
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
      transItems: {
        en: ["Il est {a}musulman{/a}. (He is Muslim.)", "Il est {a}bouddhiste{/a}. (He is Buddhist.)"],
        ar: ["Il est {a}musulman{/a}. (هو مسلم.)", "Il est {a}bouddhiste{/a}. (هو بوذي.)"],
        fa: ["Il est {a}musulman{/a}. (او مسلمان است.)", "Il est {a}bouddhiste{/a}. (او بودایی است.)"],
        ti: ["Il est {a}musulman{/a}. (ሙስሊም እዩ།)", "Il est {a}bouddhiste{/a}. (ቡዲስት እዩ།)"],
        uk: ["Il est {a}musulman{/a}. (Він мусульманин.)", "Il est {a}bouddhiste{/a}. (Він буддист.)"],
      },
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
      transRows: {
        en: [
          ["C'est {a}un{/a} professeur. (This is a teacher.)", "Il est {a}professeur{/a}. (He is a teacher.)"],
          ["C'est {a}une{/a} infirmière. (This is a nurse.)", "Elle est {a}infirmière{/a}. (She is a nurse.)"],
          ["C'est {a}Sophie{/a}. (This is Sophie.)", "Elle est {a}gentille{/a}. (She is kind.)"],
          ["C'est {a}mon{/a} frère. (This is my brother.)", "Il est {a}grand{/a}. (He is tall.)"],
          ["C'est {a}une{/a} voiture. (This is a car.)", "Elle est {a}rapide{/a}. (It is fast.)"],
        ],
        ar: [
          ["C'est {a}un{/a} professeur. (هذا أستاذ.)", "Il est {a}professeur{/a}. (هو أستاذ.)"],
          ["C'est {a}une{/a} infirmière. (هذه ممرضة.)", "Elle est {a}infirmière{/a}. (هي ممرضة.)"],
          ["C'est {a}Sophie{/a}. (هذه سوفي.)", "Elle est {a}gentille{/a}. (هي لطيفة.)"],
          ["C'est {a}mon{/a} frère. (هذا أخي.)", "Il est {a}grand{/a}. (هو طويل.)"],
          ["C'est {a}une{/a} voiture. (هذه سيارة.)", "Elle est {a}rapide{/a}. (إنها سريعة.)"],
        ],
        fa: [
          ["C'est {a}un{/a} professeur. (این یک معلم است.)", "Il est {a}professeur{/a}. (او معلم است.)"],
          ["C'est {a}une{/a} infirmière. (این یک پرستار است.)", "Elle est {a}infirmière{/a}. (او پرستار است.)"],
          ["C'est {a}Sophie{/a}. (این سوفی است.)", "Elle est {a}gentille{/a}. (او مهربان است.)"],
          ["C'est {a}mon{/a} frère. (این برادر من است.)", "Il est {a}grand{/a}. (او بلند است.)"],
          ["C'est {a}une{/a} voiture. (این یک ماشین است.)", "Elle est {a}rapide{/a}. (سریع است.)"],
        ],
        ti: [
          ["C'est {a}un{/a} professeur. (ምምህር እዩ።)", "Il est {a}professeur{/a}. (ምምህር እዩ།)"],
          ["C'est {a}une{/a} infirmière. (ነርስ እያ።)", "Elle est {a}infirmière{/a}. (ነርስ እያ།)"],
          ["C'est {a}Sophie{/a}. (ሶፊ እያ።)", "Elle est {a}gentille{/a}. (ሕብቲ እያ།)"],
          ["C'est {a}mon{/a} frère. (ሓወይ እዩ።)", "Il est {a}grand{/a}. (ነዊሕ እዩ།)"],
          ["C'est {a}une{/a} voiture. (መኪና እያ።)", "Elle est {a}rapide{/a}. (ቅልጡፍ እያ།)"],
        ],
        uk: [
          ["C'est {a}un{/a} professeur. (Це вчитель.)", "Il est {a}professeur{/a}. (Він вчитель.)"],
          ["C'est {a}une{/a} infirmière. (Це медсестра.)", "Elle est {a}infirmière{/a}. (Вона медсестра.)"],
          ["C'est {a}Sophie{/a}. (Це Соф'ї.)", "Elle est {a}gentille{/a}. (Вона добра.)"],
          ["C'est {a}mon{/a} frère. (Це мій брат.)", "Il est {a}grand{/a}. (Він високий.)"],
          ["C'est {a}une{/a} voiture. (Це машина.)", "Elle est {a}rapide{/a}. (Вона швидка.)"],
        ],
      },
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
      transItems: {
        en: ["C'est un homme {a}gentil{/a}. (He is a kind man.)", "C'est une grande {a}voiture{/a}. (It is a big car.)"],
        ar: ["C'est un homme {a}gentil{/a}. (هو رجل لطيف.)", "C'est une grande {a}voiture{/a}. (إنها سيارة كبيرة.)"],
        fa: ["C'est un homme {a}gentil{/a}. (او مردی مهربان است.)", "C'est une grande {a}voiture{/a}. (این یک ماشین بزرگ است.)"],
        ti: ["C'est un homme {a}gentil{/a}. (ሕቡን ሰብኣይ እዩ།)", "C'est une grande {a}voiture{/a}. (ዓቢ መኪና እያ།)"],
        uk: ["C'est un homme {a}gentil{/a}. (Він добрий чоловік.)", "C'est une grande {a}voiture{/a}. (Це великий автомобіль.)"],
      },
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
      transItems: {
        en: ["Who is it? → C'est le médecin.", "Who is it? → C'est Ali.", "Who is it? → C'est un professeur."],
        ar: ["من هذا؟ → C'est le médecin.", "من هذا؟ → C'est Ali.", "من هذا؟ → C'est un professeur."],
        fa: ["این کیست؟ → C'est le médecin.", "این کیست؟ → C'est Ali.", "این کیست؟ → C'est un professeur."],
        ti: ["መን እዩ? → C'est le médecin.", "መን እዩ? → C'est Ali.", "መን እዩ? → C'est un professeur."],
        uk: ["Хто це? → C'est le médecin.", "Хто це? → C'est Ali.", "Хто це? → C'est un professeur."],
      },
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
      transItems: {
        en: ["What is he like? → Il est gentil.", "What is she like? → Elle est médecin.", "What is he like? → Il est suisse."],
        ar: ["كيف هو؟ → Il est gentil.", "كيف هي؟ → Elle est médecin.", "كيف هو؟ → Il est suisse."],
        fa: ["او چطور است؟ → Il est gentil.", "او چطور است؟ → Elle est médecin.", "او چطور است؟ → Il est suisse."],
        ti: ["ከመይ ኣሎ? → Il est gentil.", "ከመይ ኣላ? → Elle est médecin.", "ከመይ ኣሎ? → Il est suisse."],
        uk: ["Який він? → Il est gentil.", "Яка вона? → Elle est médecin.", "Який він? → Il est suisse."],
      },
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Choisissez C'est ou Il/Elle est.",
      items: [
        { sentence: "___ professeur de français.", choices: ["Il est", "C'est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ un ami de Thomas.", choices: ["C'est", "Il est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ intelligente et curieuse.", choices: ["Elle est", "C'est", "Il est", "C'est une"], correctIdx: 0 },
        { sentence: "___ la maison de mes parents.", choices: ["C'est", "Il est", "Elle est", "C'est une"], correctIdx: 0 },
        { sentence: "___ une bonne idée !", choices: ["C'est", "Il est", "Elle est", "C'est un"], correctIdx: 0 },
        { sentence: "___ français et il parle bien anglais.", choices: ["Il est", "C'est", "C'est un", "Elle est"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Complétez avec C'est, Il est ou Elle est.",
      items: [
        { sentence: "___ (C'est / Il est) mon frère. ___ (C'est / Il est) étudiant.", hint: "identifier puis décrire", answer: "c'est" },
        { sentence: "Regarde cette voiture ! ___ (C'est / Elle est) belle.", hint: "décrire avec adjectif", answer: "elle est" },
        { sentence: "___ (C'est / Il est) un très bon restaurant.", hint: "identifier avec article", answer: "c'est" },
        { sentence: "Ma mère ? ___ (C'est / Elle est) médecin.", hint: "profession sans article", answer: "elle est" },
        { sentence: "___ (C'est / Il est) le directeur de l'école.", hint: "identifier avec article défini", answer: "c'est" },
      ],
    },
    {
      type: "classify",
      title: "Exercice 3",
      instruction: "Classez chaque phrase : identification ou description.",
      categories: ["Identification (C'est)", "Description (Il/Elle est)"],
      items: [
        { word: "C'est une étudiante en médecine.",   categoryIdx: 0 },
        { word: "Il est très patient.",               categoryIdx: 1 },
        { word: "C'est mon livre de grammaire.",      categoryIdx: 0 },
        { word: "Elle est italienne.",                categoryIdx: 1 },
        { word: "C'est le train pour Paris.",         categoryIdx: 0 },
        { word: "Il est architecte.",                 categoryIdx: 1 },
      ],
    },
    {
      type: "word_order",
      title: "Exercice 4",
      instruction: "Remettez les mots dans le bon ordre.",
      items: [
        {
          sentence: "C'est une bonne professeure.",
          words: ["C'est", "une", "bonne", "professeure"],
        },
        {
          sentence: "Il est grand et sportif.",
          words: ["Il", "est", "grand", "et", "sportif"],
        },
        {
          sentence: "C'est la voiture de mon père.",
          words: ["C'est", "la", "voiture", "de", "mon", "père"],
        },
      ],
    },

    // ── Exercice 5 ─────────────────────────────────────────────────────────────
    {
      type: "fill",
      title: "Exercice 5",
      instruction: "Complétez avec c'est ou il est.",
      items: [
        { sentence: "___ un médecin.",          hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ très gentil.",          hint: "c'est / il est", answer: "il est" },
        { sentence: "___ ma sœur.",              hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ fatigué aujourd'hui.",  hint: "c'est / il est", answer: "il est" },
        { sentence: "___ un grand bâtiment.",    hint: "c'est / il est", answer: "c'est"  },
        { sentence: "___ malade.",               hint: "c'est / il est", answer: "il est" },
      ],
    },

    // ── Exercice 6 ─────────────────────────────────────────────────────────────
    {
      type: "qcm",
      title: "Exercice 6",
      instruction: "Choisissez la bonne réponse.",
      toggleChoices: true,
      items: [
        { sentence: "___ professeur.",           choices: ["C'est", "Il est"], correctIdx: 1 },
        { sentence: "___ mon professeur.",       choices: ["C'est", "Il est"], correctIdx: 0 },
        { sentence: "___ intelligent.",          choices: ["C'est", "Il est"], correctIdx: 1 },
        { sentence: "___ un homme intelligent.", choices: ["C'est", "Il est"], correctIdx: 0 },
        { sentence: "___ Paul.",                 choices: ["C'est", "Il est"], correctIdx: 0 },
        { sentence: "___ français.",             choices: ["C'est", "Il est"], correctIdx: 1 },
      ],
    },

    // ── Exercice 7 ─────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 7",
      instruction: "Transformez les phrases avec c'est. Écrivez la phrase complète.\nExemple : Il est mon ami. → C'est mon ami.",
      prompts: [
        "Il est mon frère. →",
        "Il est mon voisin. →",
        "Elle est ma sœur. →",
        "Elle est ma collègue. →",
        "Il est mon professeur. →",
      ],
    },

    // ── Exercice 8 ─────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Transformez avec il est / elle est. Écrivez la phrase complète.\nExemple : C'est un homme gentil. → Il est gentil.",
      prompts: [
        "C'est une femme sympathique. →",
        "C'est un garçon intelligent. →",
        "C'est un enfant calme. →",
        "C'est une élève sérieuse. →",
        "C'est un sportif courageux. →",
      ],
    },

    // ── Exercice 9 ─────────────────────────────────────────────────────────────
    {
      type: "write",
      title: "Exercice 9",
      instruction: "Écrivez une phrase avec les mots proposés.",
      prompts: [
        "Alona :",
        "Ma mère :",
        "Un grand garçon :",
      ],
    },

    // ── Exercice 10 ────────────────────────────────────────────────────────────
    {
      type: "qcm",
      title: "Exercice 10",
      instruction: "Sélectionnez la bonne réponse.",
      items: [
        { sentence: "Ahmed est médecin. ___ très connu dans la ville.", choices: ["C'est", "Il est", "Elle est"], correctIdx: 1 },
        { sentence: "Voici Ahmed. ___ mon médecin.",                    choices: ["C'est", "Il est", "Elle est"], correctIdx: 0 },
        { sentence: "Marie est française. ___ très gentille.",          choices: ["C'est", "Il est", "Elle est"], correctIdx: 2 },
        { sentence: "Voici Marie. ___ ma voisine.",                     choices: ["C'est", "Il est", "Elle est"], correctIdx: 0 },
        { sentence: "Paul est professeur. ___ très patient.",           choices: ["C'est", "Il est", "Elle est"], correctIdx: 1 },
        { sentence: "Voici Paul. ___ le nouveau professeur.",           choices: ["C'est", "Il est", "Elle est"], correctIdx: 0 },
      ],
    },
  ],
};
