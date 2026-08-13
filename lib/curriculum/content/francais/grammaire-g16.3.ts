import type { GrammarLesson } from "../../grammar-data";

/** G16.3 — Le gérondif, enrichi avec G19.31 */
export const A1_GR_GERONDIF: GrammarLesson = {
  slug: "a1-gr-gerondif",
  code: "G16.3",
  level: "A1",
  title: "Le gérondif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Le gérondif indique que deux actions sont faites en même temps par le même sujet.",
        "Temps : Il mange en lisant.",
        "Manière : J'ai maigri en faisant un régime et du sport.",
        "Condition : En conduisant moins vite, on a moins d'accidents.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Forme",
    },
    {
      type: "text",
      items: [
        "Formation : {a}en{/a} + participe présent.",
        "Participe présent : même radical que le {a}nous{/a} du présent + {a}-ant{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Verbe", "nous (présent)", "Participe", "Gérondif"],
      boldFirstCol: true,
      rows: [
        ["lire", "nous lisons", "lisant", "en lisant"],
        ["faire", "nous faisons", "faisant", "en faisant"],
        ["avancer", "nous avançons", "avançant", "en avançant"],
        ["manger", "nous mangeons", "mangeant", "en mangeant"],
      ],
    },
    {
      type: "grid",
      headers: ["Exception", "Participe", "Gérondif"],
      boldFirstCol: true,
      rows: [
        ["avoir", "ayant", "en ayant"],
        ["être", "étant", "en étant"],
        ["savoir", "sachant", "en sachant"],
      ],
    },
    {
      type: "note",
      text: "Forme invariable. Le sujet du gérondif = sujet du verbe principal. → Il écoute de la musique en courant.",
    },
    {
      type: "note",
      text: "Négation : {a}en ne{/a} + participe + {a}pas{/a}. → En ne conduisant pas vite…",
    },
    {
      type: "heading",
      text: "Le gérondif",
      trans: { en: "The gerund", ar: "صيغة الفعل الاسمي (جيروندف)", fa: "وجه قیدی (گروندیف)", ti: "ጀሮንዲፍ", uk: "Герундій (le gérondif)" },
    },
    {
      type: "text",
      allBullets: true,
      text: "Formation : {a}en{/a} + participe présent",
      transText: {
        en: "Formation: {a}en{/a} + present participle",
        ar: "التكوين: {a}en{/a} + اسم الفاعل المضارع",
        fa: "ساختار: {a}en{/a} + اسم فاعل حال",
        ti: "ኣፈጣጥራ፦ {a}en{/a} + ህሉው ተሳታፊ",
        uk: "Утворення: {a}en{/a} + дієприкметник теперішнього часу",
      },
      items: [
        "Participe présent : radical de {a}nous{/a} au présent + {a}-ant{/a}",
        "Exemple : nous parl{a}ons{/a} → en parl{a}ant{/a}",
      ],
      transItems: {
        en: [
          "Present participle: {a}nous{/a} stem in the present + {a}-ant{/a}",
          "Example: nous parl{a}ons{/a} → en parl{a}ant{/a}",
        ],
        ar: [
          "اسم الفاعل المضارع: جذر {a}nous{/a} في المضارع + {a}-ant{/a}",
          "مثال: nous parl{a}ons{/a} → en parl{a}ant{/a}",
        ],
        fa: [
          "اسم فاعل حال: ریشه‌ی {a}nous{/a} در حال + {a}-ant{/a}",
          "مثال: nous parl{a}ons{/a} → en parl{a}ant{/a}",
        ],
        ti: [
          "ህሉው ተሳታፊ፦ መሰረት {a}nous{/a} ኣብ ህሉው + {a}-ant{/a}",
          "ኣብነት፦ nous parl{a}ons{/a} → en parl{a}ant{/a}",
        ],
        uk: [
          "Дієприкметник: основа {a}nous{/a} у теперішньому часі + {a}-ant{/a}",
          "Приклад: nous parl{a}ons{/a} → en parl{a}ant{/a}",
        ],
      },
    },
    {
      type: "heading",
      text: "Formes irrégulières",
      sub: true,
      accent: true,
      trans: { en: "Irregular forms", ar: "الصيغ الشاذة", fa: "اشکال بی‌قاعده", ti: "ዘይስሩዓት ቅርጽታት", uk: "Неправильні форми" },
    },
    {
      type: "grid",
      headers: ["Infinitif", "Gérondif"],
      boldFirstCol: true,
      rows: [
        ["être", "en {a}étant{/a}"],
        ["avoir", "en {a}ayant{/a}"],
        ["savoir", "en {a}sachant{/a}"],
      ],
      transHeaders: {
        en: ["Infinitive", "Gerund"],
        ar: ["المصدر", "جيروندف"],
        fa: ["مصدر", "گروندیف"],
        ti: ["ኢንፊኒቲቭ", "ጀሮንዲፍ"],
        uk: ["Інфінітив", "Герундій"],
      },
    },
    {
      type: "heading",
      text: "Emplois du gérondif",
      trans: { en: "Uses of the gerund", ar: "استخدامات الجيروندف", fa: "کاربردهای گروندیف", ti: "ኣጠቓቕማ ጀሮንዲፍ", uk: "Вживання герундія" },
    },
    {
      type: "grid",
      headers: ["Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Simultanéité (deux actions en même temps)", "Il {a}écoute{/a} de la musique {a}en faisant{/a} la vaisselle."],
        ["Manière (comment ?)", "Elle a réussi {a}en travaillant{/a} régulièrement."],
        ["Condition (si…)", "Tu maigriras {a}en mangeant{/a} moins."],
        ["Cause (parce que…)", "Il s'est blessé {a}en courant{/a}."],
      ],
      transHeaders: {
        en: ["Meaning", "Example"],
        ar: ["المعنى", "مثال"],
        fa: ["معنا", "مثال"],
        ti: ["ትርጉም", "ኣብነት"],
        uk: ["Значення", "Приклад"],
      },
      transRows: {
        en: [
          ["Simultaneous actions", "Il {a}écoute{/a} de la musique {a}en faisant{/a} la vaisselle. (He listens to music while doing the dishes.)"],
          ["Manner (how?)", "Elle a réussi {a}en travaillant{/a} régulièrement. (She succeeded by working regularly.)"],
          ["Condition (if…)", "Tu maigriras {a}en mangeant{/a} moins. (You will lose weight by eating less.)"],
          ["Cause (because…)", "Il s'est blessé {a}en courant{/a}. (He hurt himself while running.)"],
        ],
        ar: [
          ["فعلان في آنٍ واحد", "Il {a}écoute{/a} de la musique {a}en faisant{/a} la vaisselle. (يستمع إلى الموسيقى أثناء غسل الصحون.)"],
          ["الطريقة (كيف؟)", "Elle a réussi {a}en travaillant{/a} régulièrement. (نجحت بالعمل بانتظام.)"],
          ["الشرط (إذا…)", "Tu maigriras {a}en mangeant{/a} moins. (ستنقص وزنك إذا أكلت أقل.)"],
          ["السبب (لأن…)", "Il s'est blessé {a}en courant{/a}. (جرح نفسه أثناء الجري.)"],
        ],
        fa: [
          ["دو عمل همزمان", "Il {a}écoute{/a} de la musique {a}en faisant{/a} la vaisselle. (او در حال ظرف شستن به موسیقی گوش می‌دهد.)"],
          ["شیوه (چطور؟)", "Elle a réussi {a}en travaillant{/a} régulièrement. (او با کار منظم موفق شد.)"],
          ["شرط (اگر…)", "Tu maigriras {a}en mangeant{/a} moins. (با کمتر خوردن لاغر خواهی شد.)"],
          ["علت (چون…)", "Il s'est blessé {a}en courant{/a}. (در حین دویدن زخمی شد.)"],
        ],
        ti: [
          ["ክልተ ተግባር ኣብ ሓደ ግዜ", "Il {a}écoute{/a} de la musique {a}en faisant{/a} la vaisselle. (ምድማቕ ኣቕሑ ክልምድ፣ ሙዚቃ ይሰምዕ ኣሎ።)"],
          ["ኣገባብ (ከመይ?)", "Elle a réussi {a}en travaillant{/a} régulièrement. (ብዘወትር ምስራሕ ሰሊጥዋ።)"],
          ["ኩነት (እንተ…)", "Tu maigriras {a}en mangeant{/a} moins. (ትሒት ምእካልካ ክትቀልለካ ኢኻ።)"],
          ["ምኽንያት (ስለ…)", "Il s'est blessé {a}en courant{/a}. (ክሰርር ከሎ ቆሲሉ።)"],
        ],
        uk: [
          ["Одночасні дії", "Il {a}écoute{/a} de la musique {a}en faisant{/a} la vaisselle. (Він слухає музику, миючи посуд.)"],
          ["Спосіб (як?)", "Elle a réussi {a}en travaillant{/a} régulièrement. (Вона досягла успіху, працюючи регулярно.)"],
          ["Умова (якщо…)", "Tu maigriras {a}en mangeant{/a} moins. (Ти схуднеш, менше їдучи.)"],
          ["Причина (тому що…)", "Il s'est blessé {a}en courant{/a}. (Він поранився, бігаючи.)"],
        ],
      },
    },
    {
      type: "text",
      allBullets: true,
      label: "À retenir",
      items: [
        "Le sujet du gérondif et de la phrase principale doit être {a}le même{/a}.",
        "Correct : Elle chante {a}en cuisinant{/a}. (elle chante et elle cuisine)",
        "Incorrect : ✗ Le repas était prêt en rentrant. (sujets différents)",
      ],
      transLabel: { en: "Remember", ar: "تذكّر", fa: "یادآوری", ti: "ዘክር", uk: "Пам'ятай" },
      transItems: {
        en: ["The subject of the gerund and the main clause must be {a}the same{/a}.", "Correct: Elle chante {a}en cuisinant{/a}. (she sings and she cooks)", "Incorrect: ✗ Le repas était prêt en rentrant. (different subjects)"],
        ar: ["يجب أن يكون فاعل الجيروندف والجملة الرئيسية {a}نفس الشخص{/a}.", "صحيح: Elle chante {a}en cuisinant{/a}. (تغني وتطبخ في نفس الوقت)", "خطأ: ✗ Le repas était prêt en rentrant. (فاعلان مختلفان)"],
        fa: ["فاعل گروندیف و جمله‌ی اصلی باید {a}یکی{/a} باشند.", "درست: Elle chante {a}en cuisinant{/a}. (او آواز می‌خواند و همزمان غذا می‌پزد)", "نادرست: ✗ Le repas était prêt en rentrant. (فاعل‌های متفاوت)"],
        ti: ["ርእሰ-ሓሳብ ናይ ጀሮንዲፍን ቀንዲ ዓረፍተ-ነገርን {a}ሓደ ክኸውን{/a} ኣለዎ።", "ቅኑዕ፦ Elle chante {a}en cuisinant{/a}. (ትዝምርን ትሰርሕን ኣብ ሓደ ግዜ)", "ጌጋ፦ ✗ Le repas était prêt en rentrant. (ዝተፈላለዩ ርእሰ-ሓሳባት)"],
        uk: ["Підмет герундія і головного речення мають бути {a}однаковими{/a}.", "Правильно: Elle chante {a}en cuisinant{/a}. (вона співає і готує)", "Неправильно: ✗ Le repas était prêt en rentrant. (різні підмети)"],
      },
    },
  ],
  exercises: [],
};
