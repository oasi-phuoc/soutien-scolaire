import type { GrammarLesson } from "../../grammar-data";

/** G5.5 — La négation */
export const A1_GR_NEGATION_NE_PAS: GrammarLesson = {
  slug: "a1-gr-negation-ne-pas",
  code: "G5.5",
  level: "A1",
  title: "La négation",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "La phrase négative exprime le contraire d'une phrase affirmative.",
        "Je suis marié. ≠ Je ne suis pas marié.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      label: "ne… pas",
      items: [
        "La négation est composée de deux mots placés de part et d'autre du verbe conjugué : {a}ne{/a} + verbe + {a}pas{/a}.",
        "Je ne suis pas célibataire.",
        "Tu ne travailles pas dans une banque.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "text",
      label: "ne… pas de",
      items: [
        "L'article indéfini {a}un{/a}, {a}une{/a}, {a}des{/a} est remplacé par {a}de{/a} / {a}d'{/a}.",
        "Il a un frère ? → Non, il n'a pas de frère.",
        "Tu as une sœur ? → Non, je n'ai pas de sœur.",
        "Vous avez des petits-enfants ? → Non, nous n'avons pas de petits-enfants.",
      ],
      noBulletItems: [1, 2, 3],
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "text",
      items: [
        "{a}Ne{/a} → {a}n'{/a} devant une voyelle ou un h muet. → Il n'est pas marié. ; Il n'habite pas à Lyon.",
        "{a}Pas de{/a} → {a}pas d'{/a} devant une voyelle ou un h muet. → Il n'a pas d'enfants.",
        "À l'oral, on ne prononce pas toujours le {a}e{/a} de {a}ne{/a}, ni parfois le {a}ne{/a} entier. → On (ne) joue pas au foot.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "La forme négative",
      trans: { en: "The negative form", ar: "الصيغة المنفية", fa: "شکل منفی", ti: "ቅጺ ምኽሓድ", uk: "Заперечна форма" },
    },
    {
      type: "text",
      text: "La structure de la négation utilise {a}ne{/a} + {a}pas{/a}.",
      transText: {
        en: "The negation structure uses {a}ne{/a} + {a}pas{/a}.",
        ar: "بنية النفي تستخدم {a}ne{/a} + {a}pas{/a}.",
        fa: "ساختار نفی از {a}ne{/a} + {a}pas{/a} استفاده می‌کند.",
        ti: "ዝምድና ምኽሓድ {a}ne{/a} + {a}pas{/a} ይጥቀም.",
        uk: "Структура заперечення використовує {a}ne{/a} + {a}pas{/a}.",
      },
      items: [
        "Sujet + {a}ne{/a} + verbe + {a}pas{/a}",
      ],
      transItems: {
        en: [
          "Subject + {a}ne{/a} + verb + {a}pas{/a}",
        ],
        ar: [
          "الفاعل + {a}ne{/a} + الفعل + {a}pas{/a}",
        ],
        fa: [
          "فاعل + {a}ne{/a} + فعل + {a}pas{/a}",
        ],
        ti: [
          "ሓካይ + {a}ne{/a} + ግሲ + {a}pas{/a}",
        ],
        uk: [
          "Підмет + {a}ne{/a} + дієслово + {a}pas{/a}",
        ],
      },
    },
    {
      type: "selector",
      buttonCols: 3,
      tabs: [
        {
          label: "être",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "être",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne suis pas" },
                    { pronoun: "tu", form: "n'es pas" },
                    { pronoun: "il / elle / on", form: "n'est pas" },
                    { pronoun: "nous", form: "ne sommes pas" },
                    { pronoun: "vous", form: "n'êtes pas" },
                    { pronoun: "ils / elles", form: "ne sont pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "avoir",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "avoir",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "n'ai pas" },
                    { pronoun: "tu", form: "n'as pas" },
                    { pronoun: "il / elle / on", form: "n'a pas" },
                    { pronoun: "nous", form: "n'avons pas" },
                    { pronoun: "vous", form: "n'avez pas" },
                    { pronoun: "ils / elles", form: "n'ont pas" },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "parler",
          content: [
            {
              type: "table",
              tables: [
                {
                  verb: "parler",
                  accentForms: true,
                  rows: [
                    { pronoun: "je", form: "ne parle pas" },
                    { pronoun: "tu", form: "ne parles pas" },
                    { pronoun: "il / elle / on", form: "ne parle pas" },
                    { pronoun: "nous", form: "ne parlons pas" },
                    { pronoun: "vous", form: "ne parlez pas" },
                    { pronoun: "ils / elles", form: "ne parlent pas" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "text",
      label: "Attention",
      transLabel: { en: "Note", ar: "ملاحظة", fa: "توجه", ti: "ኣስተውዕል", uk: "Увага" },
      inlineArrows: true,
      noBulletItems: [0],
      items: [
        "Quand le verbe commence par une voyelle ou un h, {a}ne{/a} devient {a}n'{/a}.",
        "il n{s}e{/s} est pas là → il n'est pas là",
        "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans",
      ],
      transItems: {
        en: ["When the verb begins with a vowel or h, {a}ne{/a} becomes {a}n'{/a}.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
        ar: ["عندما يبدأ الفعل بحرف علة أو h، يصبح {a}ne{/a} {a}n'{/a}.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
        fa: ["وقتی فعل با یک حرف صدادار یا h شروع می‌شود، {a}ne{/a} به {a}n'{/a} تبدیل می‌شود.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
        ti: ["ግሲ ብሞዓዝ ወይ h ምስ ዝጅምር፣ {a}ne{/a} {a}n'{/a} ይኸውን.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
        uk: ["Коли дієслово починається з голосної або h, {a}ne{/a} стає {a}n'{/a}.", "il n{s}e{/s} est pas là → il n'est pas là", "je n{s}e{/s} ai pas 5 ans → je n'ai pas 5 ans"],
      },
    },
    { type: "heading", text: "Aller plus loin : ne…plus, ne…que", trans: { en: "Going further: ne…plus, ne…que", ar: "لمزيد من التعمق: ne…plus, ne…que", fa: "بیشتر بدانیم: ne…plus, ne…que", ti: "ብዝያዳ፦ ne…plus, ne…que", uk: "Поглиблення: ne…plus, ne…que" } },
    {
      type: "grid",
      headers: ["Négation", "Sens", "Exemple"],
      transHeaders: {
        en: ["Negation", "Meaning", "Example"],
        ar: ["النفي", "المعنى", "مثال"],
        fa: ["نفی", "معنا", "مثال"],
        ti: ["ኣሉታ", "ትርጉም", "ኣብነት"],
        uk: ["Заперечення", "Значення", "Приклад"],
      },
      boldFirstCol: true,
      rows: [
        ["{a}ne … pas{/a}", "action inexistante / absente", "Je {a}ne{/a} parle {a}pas{/a} espagnol."],
        ["{a}ne … plus{/a}", "action qui a cessé", "Il {a}ne{/a} travaille {a}plus{/a} ici."],
        ["{a}ne … que{/a}", "restriction (= seulement)", "Je {a}ne{/a} mange {a}que{/a} des légumes."],
      ],
      transRows: {
        en: [["{a}ne … pas{/a}", "non-existent / absent action", "Je {a}ne{/a} parle {a}pas{/a} espagnol. (I don't speak Spanish.)"], ["{a}ne … plus{/a}", "action that has stopped", "Il {a}ne{/a} travaille {a}plus{/a} ici. (He no longer works here.)"], ["{a}ne … que{/a}", "restriction (= only)", "Je {a}ne{/a} mange {a}que{/a} des légumes. (I only eat vegetables.)"]],
        ar: [["{a}ne … pas{/a}", "فعل غير موجود / غائب", "Je {a}ne{/a} parle {a}pas{/a} espagnol. (لا أتكلم الإسبانية.)"], ["{a}ne … plus{/a}", "فعل توقف", "Il {a}ne{/a} travaille {a}plus{/a} ici. (لم يعد يعمل هنا.)"], ["{a}ne … que{/a}", "تقييد (= فقط)", "Je {a}ne{/a} mange {a}que{/a} des légumes. (لا آكل إلا الخضار.)"]],
        fa: [["{a}ne … pas{/a}", "کنش ناموجود / غایب", "Je {a}ne{/a} parle {a}pas{/a} espagnol. (اسپانیایی صحبت نمی‌کنم.)"], ["{a}ne … plus{/a}", "کنشی که متوقف شده", "Il {a}ne{/a} travaille {a}plus{/a} ici. (دیگر اینجا کار نمی‌کند.)"], ["{a}ne … que{/a}", "محدودیت (= فقط)", "Je {a}ne{/a} mange {a}que{/a} des légumes. (فقط سبزیجات می‌خورم.)"]],
        ti: [["{a}ne … pas{/a}", "ዘይህሉ / ዘየለ ተግባር", "Je {a}ne{/a} parle {a}pas{/a} espagnol. (ስጳኛ ኣይዛረብን።)"], ["{a}ne … plus{/a}", "ደው ዝበለ ተግባር", "Il {a}ne{/a} travaille {a}plus{/a} ici. (ኣብዚ ደጊም ኣይሰርሕን።)"], ["{a}ne … que{/a}", "ድረታ (= ጥራይ)", "Je {a}ne{/a} mange {a}que{/a} des légumes. (ኣሕምልቲ ጥራይ እበልዕ።)"]],
        uk: [["{a}ne … pas{/a}", "неіснуюча / відсутня дія", "Je {a}ne{/a} parle {a}pas{/a} espagnol. (Я не розмовляю іспанською.)"], ["{a}ne … plus{/a}", "дія, що припинилася", "Il {a}ne{/a} travaille {a}plus{/a} ici. (Він більше тут не працює.)"], ["{a}ne … que{/a}", "обмеження (= лише)", "Je {a}ne{/a} mange {a}que{/a} des légumes. (Я їм лише овочі.)"]],
      },
    },
    { type: "heading", text: "Ne … plus", sub: true, accent: true, trans: { en: "Ne … plus", ar: "Ne … plus", fa: "Ne … plus", ti: "Ne … plus", uk: "Ne … plus" } },
    {
      type: "text",
      text: "{a}ne … plus{/a} signifie que l'action s'est arrêtée.",
      transText: {
        en: "{a}ne … plus{/a} means that the action has stopped.",
        ar: "{a}ne … plus{/a} تعني أن الفعل توقف.",
        fa: "{a}ne … plus{/a} یعنی کنش متوقف شده است.",
        ti: "{a}ne … plus{/a} እቲ ተግባር ደው ከም ዝበለ የመልክት።",
        uk: "{a}ne … plus{/a} означає, що дія припинилася.",
      },
      items: [
        "Implique qu'avant c'était le cas, maintenant non.",
      ],
      transItems: {
        en: [
          "It implies that before it was the case, now it isn't.",
        ],
        ar: [
          "تشير إلى أنه كان كذلك من قبل، أما الآن فلا.",
        ],
        fa: [
          "اشاره دارد که قبلاً چنین بود، اکنون نه.",
        ],
        ti: [
          "ቀደም ከምኡ ከም ዝነበረ፣ ሕጂ ግን ከም ዘይኮነ የመልክት።",
        ],
        uk: [
          "Це означає, що раніше так було, а тепер ні.",
        ],
      },
    },
    {
      type: "grid",
      headers: ["Affirmatif (avant)", "Négatif (maintenant)"],
      transHeaders: {
        en: ["Affirmative (before)", "Negative (now)"],
        ar: ["إثبات (قبل)", "نفي (الآن)"],
        fa: ["مثبت (قبلاً)", "منفی (اکنون)"],
        ti: ["ኣወንታዊ (ቀደም)", "ኣሉታዊ (ሕጂ)"],
        uk: ["Стверджувальна (раніше)", "Заперечна (тепер)"],
      },
      rows: [
        ["Je fume.", "Je {a}ne{/a} fume {a}plus{/a}."],
        ["Il habite ici.", "Il {a}n'{/a}habite {a}plus{/a} ici."],
        ["Elle boit du café.", "Elle {a}ne{/a} boit {a}plus{/a} de café."],
      ],
      transRows: {
        en: [["Je fume. (I smoke.)", "Je {a}ne{/a} fume {a}plus{/a}. (I no longer smoke.)"], ["Il habite ici. (He lives here.)", "Il {a}n'{/a}habite {a}plus{/a} ici. (He no longer lives here.)"], ["Elle boit du café. (She drinks coffee.)", "Elle {a}ne{/a} boit {a}plus{/a} de café. (She no longer drinks coffee.)"]],
        ar: [["Je fume. (أدخّن.)", "Je {a}ne{/a} fume {a}plus{/a}. (لم أعد أدخّن.)"], ["Il habite ici. (يسكن هنا.)", "Il {a}n'{/a}habite {a}plus{/a} ici. (لم يعد يسكن هنا.)"], ["Elle boit du café. (تشرب القهوة.)", "Elle {a}ne{/a} boit {a}plus{/a} de café. (لم تعد تشرب القهوة.)"]],
        fa: [["Je fume. (سیگار می‌کشم.)", "Je {a}ne{/a} fume {a}plus{/a}. (دیگر سیگار نمی‌کشم.)"], ["Il habite ici. (اینجا زندگی می‌کند.)", "Il {a}n'{/a}habite {a}plus{/a} ici. (دیگر اینجا زندگی نمی‌کند.)"], ["Elle boit du café. (قهوه می‌نوشد.)", "Elle {a}ne{/a} boit {a}plus{/a} de café. (دیگر قهوه نمی‌نوشد.)"]],
        ti: [["Je fume. (ሽጋራ እትክኽ።)", "Je {a}ne{/a} fume {a}plus{/a}. (ደጊም ሽጋራ ኣይትክኽን።)"], ["Il habite ici. (ኣብዚ ይነብር።)", "Il {a}n'{/a}habite {a}plus{/a} ici. (ደጊም ኣብዚ ኣይነብርን።)"], ["Elle boit du café. (ቡን ትሰቲ።)", "Elle {a}ne{/a} boit {a}plus{/a} de café. (ደጊም ቡን ኣይትሰትን።)"]],
        uk: [["Je fume. (Я палю.)", "Je {a}ne{/a} fume {a}plus{/a}. (Я більше не палю.)"], ["Il habite ici. (Він живе тут.)", "Il {a}n'{/a}habite {a}plus{/a} ici. (Він більше тут не живе.)"], ["Elle boit du café. (Вона п'є каву.)", "Elle {a}ne{/a} boit {a}plus{/a} de café. (Вона більше не п'є каву.)"]],
      },
    },
    { type: "heading", text: "Ne … que (restriction)", sub: true, accent: true, trans: { en: "Ne … que (restriction)", ar: "Ne … que (تقييد)", fa: "Ne … que (محدودیت)", ti: "Ne … que (ድረታ)", uk: "Ne … que (обмеження)" } },
    {
      type: "text",
      text: "{a}ne … que{/a} = seulement. Ce n'est {a}pas une vraie négation{/a} — le sens est positif mais limité.",
      transText: {
        en: "{a}ne … que{/a} = only. It is {a}not a real negation{/a} — the meaning is positive but limited.",
        ar: "{a}ne … que{/a} = فقط. إنه {a}ليس نفياً حقيقياً{/a} — المعنى إيجابي لكنه محدود.",
        fa: "{a}ne … que{/a} = فقط. این {a}یک نفی واقعی نیست{/a} — معنا مثبت اما محدود است.",
        ti: "{a}ne … que{/a} = ጥራይ። እዚ {a}ናይ ሓቂ ኣሉታ ኣይኮነን{/a} — ትርጉሙ ኣወንታዊ ግን ድሩት እዩ።",
        uk: "{a}ne … que{/a} = лише. Це {a}не справжнє заперечення{/a} — значення позитивне, але обмежене.",
      },
      items: [
        "que se place juste avant l'élément restreint.",
      ],
      transItems: {
        en: [
          "que is placed just before the restricted element.",
        ],
        ar: [
          "que يوضع مباشرة قبل العنصر المقيَّد.",
        ],
        fa: [
          "que درست پیش از عنصر محدودشده قرار می‌گیرد.",
        ],
        ti: [
          "que ልክዕ ቅድሚ እቲ ድሩት ነገር ይቕመጥ።",
        ],
        uk: [
          "que ставиться безпосередньо перед обмеженим елементом.",
        ],
      },
    },
    {
      type: "grid",
      headers: ["Avec seulement", "Avec ne … que"],
      transHeaders: {
        en: ["With seulement", "With ne … que"],
        ar: ["مع seulement", "مع ne … que"],
        fa: ["با seulement", "با ne … que"],
        ti: ["ምስ seulement", "ምስ ne … que"],
        uk: ["З seulement", "З ne … que"],
      },
      rows: [
        ["Je mange seulement des légumes.", "Je {a}ne{/a} mange {a}que{/a} des légumes."],
        ["Il reste seulement 5 minutes.", "Il {a}ne{/a} reste {a}que{/a} 5 minutes."],
        ["Elle a seulement 20 ans.", "Elle {a}n'{/a}a {a}que{/a} 20 ans."],
      ],
      transRows: {
        en: [["Je mange seulement des légumes. (I only eat vegetables.)", "Je {a}ne{/a} mange {a}que{/a} des légumes."], ["Il reste seulement 5 minutes. (There are only 5 minutes left.)", "Il {a}ne{/a} reste {a}que{/a} 5 minutes."], ["Elle a seulement 20 ans. (She is only 20 years old.)", "Elle {a}n'{/a}a {a}que{/a} 20 ans."]],
        ar: [["Je mange seulement des légumes. (آكل الخضار فقط.)", "Je {a}ne{/a} mange {a}que{/a} des légumes."], ["Il reste seulement 5 minutes. (بقيت 5 دقائق فقط.)", "Je {a}ne{/a} reste {a}que{/a} 5 minutes."], ["Elle a seulement 20 ans. (عمرها 20 سنة فقط.)", "Elle {a}n'{/a}a {a}que{/a} 20 ans."]],
        fa: [["Je mange seulement des légumes. (فقط سبزیجات می‌خورم.)", "Je {a}ne{/a} mange {a}que{/a} des légumes."], ["Il reste seulement 5 minutes. (فقط ۵ دقیقه مانده است.)", "Il {a}ne{/a} reste {a}que{/a} 5 minutes."], ["Elle a seulement 20 ans. (او فقط ۲۰ سال دارد.)", "Elle {a}n'{/a}a {a}que{/a} 20 ans."]],
        ti: [["Je mange seulement des légumes. (ኣሕምልቲ ጥራይ እበልዕ።)", "Je {a}ne{/a} mange {a}que{/a} des légumes."], ["Il reste seulement 5 minutes. (5 ደቒቕ ጥራይ ተሪፉ።)", "Il {a}ne{/a} reste {a}que{/a} 5 minutes."], ["Elle a seulement 20 ans. (20 ዓመት ጥራይ እዩ ዕድሚኣ።)", "Elle {a}n'{/a}a {a}que{/a} 20 ans."]],
        uk: [["Je mange seulement des légumes. (Я їм лише овочі.)", "Je {a}ne{/a} mange {a}que{/a} des légumes."], ["Il reste seulement 5 minutes. (Залишилося лише 5 хвилин.)", "Il {a}ne{/a} reste {a}que{/a} 5 minutes."], ["Elle a seulement 20 ans. (Їй лише 20 років.)", "Elle {a}n'{/a}a {a}que{/a} 20 ans."]],
      },
    },
    {
      type: "text",
      label: "Articles après la négation",
      items: [
        "Avec {a}ne…pas / ne…plus{/a} : un/une/des/du/de la → {a}de{/a} (ou d' devant voyelle).",
        "Je mange du pain → Je {a}ne{/a} mange {a}pas de{/a} pain.",
        "Avec {a}ne…que{/a} : l'article ne change pas.",
        "Je mange {a}que du{/a} pain. (que garde l'article)",
      ],
      noBulletItems: [0],
      transLabel: { en: "Articles after the negation", ar: "أدوات التعريف بعد النفي", fa: "حروف تعریف پس از نفی", ti: "ኣንቀጽ ድሕሪ ኣሉታ", uk: "Артиклі після заперечення" },
      transItems: {
        en: ["With {a}ne…pas / ne…plus{/a}: un/une/des/du/de la → {a}de{/a} (or d' before a vowel).", "Je mange du pain → Je {a}ne{/a} mange {a}pas de{/a} pain.", "With {a}ne…que{/a}: the article does not change.", "Je mange {a}que du{/a} pain. (que keeps the article)"],
        ar: ["مع {a}ne…pas / ne…plus{/a}: un/une/des/du/de la ← {a}de{/a} (أو d' قبل حرف علة).", "Je mange du pain ← Je {a}ne{/a} mange {a}pas de{/a} pain.", "مع {a}ne…que{/a}: أداة التعريف لا تتغير.", "Je mange {a}que du{/a} pain. (que يحتفظ بأداة التعريف)"],
        fa: ["با {a}ne…pas / ne…plus{/a}: un/une/des/du/de la ← {a}de{/a} (یا d' پیش از صدادار).", "Je mange du pain ← Je {a}ne{/a} mange {a}pas de{/a} pain.", "با {a}ne…que{/a}: حرف تعریف تغییر نمی‌کند.", "Je mange {a}que du{/a} pain. (que حرف تعریف را نگه می‌دارد)"],
        ti: ["ምስ {a}ne…pas / ne…plus{/a}፦ un/une/des/du/de la → {a}de{/a} (ወይ d' ቅድሚ ድምጻዊ ፊደል)።", "Je mange du pain → Je {a}ne{/a} mange {a}pas de{/a} pain.", "ምስ {a}ne…que{/a}፦ እቲ ኣንቀጽ ኣይቅየርን።", "Je mange {a}que du{/a} pain. (que ነቲ ኣንቀጽ ይዕቅቦ)"],
        uk: ["З {a}ne…pas / ne…plus{/a}: un/une/des/du/de la → {a}de{/a} (або d' перед голосною).", "Je mange du pain → Je {a}ne{/a} mange {a}pas de{/a} pain.", "З {a}ne…que{/a}: артикль не змінюється.", "Je mange {a}que du{/a} pain. (que зберігає артикль)"],
      },
    },
  ],
  exercises: [
    // ── Exercise 1 — QCM toggle: Affirmative / Négative ──────────────────────
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Sélectionnez la forme de la phrase.",
      transInstruction: { en: "Select the form of the sentence.", ar: "اختر صيغة الجملة.", fa: "صورت جمله را انتخاب کنید.", ti: "ቅርጺ ናይቲ ሓሳብ ምረጽ።", uk: "Оберіть форму речення." },
      toggleChoices: true,
      items: [],
      pool: [
        // être — affirmative
        { sentence: "Je suis content.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Tu es à l'école.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Il est médecin.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Elle est fatiguée.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Nous sommes en France.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Vous êtes en retard.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Ils sont heureux.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Elles sont ici.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        // être — négative
        { sentence: "Je ne suis pas triste.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Tu n'es pas à la maison.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Il n'est pas absent.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Elle n'est pas contente.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Nous ne sommes pas prêts.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Vous n'êtes pas en vacances.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Ils ne sont pas là.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        // avoir — affirmative
        { sentence: "J'ai faim.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Tu as raison.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Il a soif.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Elle a peur.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Nous avons chaud.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Vous avez tort.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Ils ont froid.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Elles ont envie.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        // avoir — négative
        { sentence: "Je n'ai pas faim.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Tu n'as pas raison.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Il n'a pas soif.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Elle n'a pas peur.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Nous n'avons pas froid.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Vous n'avez pas tort.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Ils n'ont pas chaud.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        // -er — affirmative
        { sentence: "Je parle français.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Tu aimes la musique.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Il travaille beaucoup.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Elle chante bien.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Nous mangeons ensemble.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Vous regardez la télé.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Ils jouent au foot.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        { sentence: "Elles dansent souvent.", choices: ["Affirmative", "Négative"], correctIdx: 0 },
        // -er — négative
        { sentence: "Je ne parle pas anglais.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Tu n'aimes pas les légumes.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Il ne travaille pas le dimanche.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Elle ne chante pas le matin.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Nous ne mangeons pas de viande.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Vous ne regardez pas les infos.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
        { sentence: "Ils ne jouent pas au tennis.", choices: ["Affirmative", "Négative"], correctIdx: 1 },
      ],
      poolSize: 8,
    },
    // ── Exercise 2 — Fill: Mettez à la forme négative ────────────────────────
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Mettez la phrase à la forme négative.",
      transInstruction: { en: "Put the sentence in the negative form.", ar: "حوّل الجملة إلى صيغة النفي.", fa: "جمله را به‌صورت منفی بنویسید.", ti: "ነቲ ሓሳብ ናብ ኣሉታዊ ቅርጺ ቀይር።", uk: "Поставте речення у заперечній формі." },
      items: [],
      pool: [
        // être (15)
        { sentence: "Je suis étudiant. → Je ___ étudiant.", hint: "ne … pas", answer: "ne suis pas" },
        { sentence: "Tu es debout. → Tu ___ debout.", hint: "ne … pas", answer: "n'es pas" },
        { sentence: "Il est grand. → Il ___ grand.", hint: "ne … pas", answer: "n'est pas" },
        { sentence: "Elle est petite. → Elle ___ petite.", hint: "ne … pas", answer: "n'est pas" },
        { sentence: "Nous sommes prêts. → Nous ___ prêts.", hint: "ne … pas", answer: "ne sommes pas" },
        { sentence: "Vous êtes à l'heure. → Vous ___ à l'heure.", hint: "ne … pas", answer: "n'êtes pas" },
        { sentence: "Ils sont d'accord. → Ils ___ d'accord.", hint: "ne … pas", answer: "ne sont pas" },
        { sentence: "Elles sont contentes. → Elles ___ contentes.", hint: "ne … pas", answer: "ne sont pas" },
        { sentence: "Je suis malade. → Je ___ malade.", hint: "ne … pas", answer: "ne suis pas" },
        { sentence: "Tu es gentil. → Tu ___ gentil.", hint: "ne … pas", answer: "n'es pas" },
        { sentence: "Il est fort. → Il ___ fort.", hint: "ne … pas", answer: "n'est pas" },
        { sentence: "Elle est sérieuse. → Elle ___ sérieuse.", hint: "ne … pas", answer: "n'est pas" },
        { sentence: "Nous sommes ensemble. → Nous ___ ensemble.", hint: "ne … pas", answer: "ne sommes pas" },
        { sentence: "Vous êtes sages. → Vous ___ sages.", hint: "ne … pas", answer: "n'êtes pas" },
        { sentence: "Ils sont présents. → Ils ___ présents.", hint: "ne … pas", answer: "ne sont pas" },
        // avoir (15)
        { sentence: "J'ai soif. → Je ___ soif.", hint: "ne … pas", answer: "n'ai pas" },
        { sentence: "Tu as sommeil. → Tu ___ sommeil.", hint: "ne … pas", answer: "n'as pas" },
        { sentence: "Il a honte. → Il ___ honte.", hint: "ne … pas", answer: "n'a pas" },
        { sentence: "Elle a de la chance. → Elle ___ de la chance.", hint: "ne … pas", answer: "n'a pas" },
        { sentence: "Nous avons le temps. → Nous ___ le temps.", hint: "ne … pas", answer: "n'avons pas" },
        { sentence: "Vous avez confiance. → Vous ___ confiance.", hint: "ne … pas", answer: "n'avez pas" },
        { sentence: "Ils ont faim. → Ils ___ faim.", hint: "ne … pas", answer: "n'ont pas" },
        { sentence: "Elles ont raison. → Elles ___ raison.", hint: "ne … pas", answer: "n'ont pas" },
        { sentence: "J'ai peur. → Je ___ peur.", hint: "ne … pas", answer: "n'ai pas" },
        { sentence: "Tu as tort. → Tu ___ tort.", hint: "ne … pas", answer: "n'as pas" },
        { sentence: "Il a chaud. → Il ___ chaud.", hint: "ne … pas", answer: "n'a pas" },
        { sentence: "Elle a froid. → Elle ___ froid.", hint: "ne … pas", answer: "n'a pas" },
        { sentence: "Nous avons envie. → Nous ___ envie.", hint: "ne … pas", answer: "n'avons pas" },
        { sentence: "Vous avez honte. → Vous ___ honte.", hint: "ne … pas", answer: "n'avez pas" },
        { sentence: "Ils ont sommeil. → Ils ___ sommeil.", hint: "ne … pas", answer: "n'ont pas" },
        // -er verbs (15)
        { sentence: "Tu regardes la télé. → Tu ___ la télé.", hint: "ne … pas", answer: "ne regardes pas" },
        { sentence: "Il mange trop. → Il ___ trop.", hint: "ne … pas", answer: "ne mange pas" },
        { sentence: "Elle chante le soir. → Elle ___ le soir.", hint: "ne … pas", answer: "ne chante pas" },
        { sentence: "Nous habitons ici. → Nous ___ ici.", hint: "ne … pas", answer: "n'habitons pas" },
        { sentence: "Vous écoutez la radio. → Vous ___ la radio.", hint: "ne … pas", answer: "n'écoutez pas" },
        { sentence: "Ils jouent dehors. → Ils ___ dehors.", hint: "ne … pas", answer: "ne jouent pas" },
        { sentence: "Elles dansent le vendredi. → Elles ___ le vendredi.", hint: "ne … pas", answer: "ne dansent pas" },
        { sentence: "Je travaille tard. → Je ___ tard.", hint: "ne … pas", answer: "ne travaille pas" },
        { sentence: "Tu aimes le sport. → Tu ___ le sport.", hint: "ne … pas", answer: "n'aimes pas" },
        { sentence: "Il prépare le repas. → Il ___ le repas.", hint: "ne … pas", answer: "ne prépare pas" },
        { sentence: "Elle voyage souvent. → Elle ___ souvent.", hint: "ne … pas", answer: "ne voyage pas" },
        { sentence: "Nous marchons vite. → Nous ___ vite.", hint: "ne … pas", answer: "ne marchons pas" },
        { sentence: "Vous chantez ensemble. → Vous ___ ensemble.", hint: "ne … pas", answer: "ne chantez pas" },
        { sentence: "Ils cherchent la sortie. → Ils ___ la sortie.", hint: "ne … pas", answer: "ne cherchent pas" },
        { sentence: "Elles parlent anglais. → Elles ___ anglais.", hint: "ne … pas", answer: "ne parlent pas" },
      ],
      poolSize: 8,
    },
    // ── Exercise 3 — Classify: S / V / C (phrases négatives) ─────────────────
    {
      type: "classify",
      title: "Exercice 3",
      instruction: "Classez chaque mot ou groupe en gras dans la bonne catégorie.",
      transInstruction: { en: "Sort each word or group in bold into the correct category.", ar: "صنّف كل كلمة أو مجموعة بالخط العريض في الفئة الصحيحة.", fa: "هر کلمه یا گروه پررنگ را در دسته‌ی درست قرار دهید.", ti: "ነፍሲ ወከፍ ብትር ዘሎ ቃል ወይ ጉጅለ ናብ ቅኑዕ ምድብ ኣእቱ.", uk: "Розподіліть кожне слово або групу, виділені жирним, у правильну категорію." },
      categories: ["Sujet", "Verbe", "Complément"],
      items: [],
      pool: [
        { word: "{a}Marie{/a} ne parle pas anglais.", categoryIdx: 0 },
        { word: "Marie {a}ne parle pas{/a} anglais.", categoryIdx: 1 },
        { word: "Marie ne parle pas {a}anglais{/a}.", categoryIdx: 2 },
        { word: "{a}Les enfants{/a} ne jouent pas dans le parc.", categoryIdx: 0 },
        { word: "Les enfants {a}ne jouent pas{/a} dans le parc.", categoryIdx: 1 },
        { word: "Les enfants ne jouent pas {a}dans le parc{/a}.", categoryIdx: 2 },
        { word: "{a}Il{/a} n'est pas médecin.", categoryIdx: 0 },
        { word: "Il {a}n'est pas{/a} médecin.", categoryIdx: 1 },
        { word: "Il n'est pas {a}médecin{/a}.", categoryIdx: 2 },
        { word: "{a}Nous{/a} n'avons pas faim.", categoryIdx: 0 },
        { word: "Nous {a}n'avons pas{/a} faim.", categoryIdx: 1 },
        { word: "Nous n'avons pas {a}faim{/a}.", categoryIdx: 2 },
        { word: "{a}Elle{/a} ne mange pas de salade.", categoryIdx: 0 },
        { word: "Elle {a}ne mange pas{/a} de salade.", categoryIdx: 1 },
        { word: "Elle ne mange pas {a}de salade{/a}.", categoryIdx: 2 },
      ],
      poolSize: 6,
    },
    // ── Exercise 4 — Word order (phrases négatives) ───────────────────────────
    {
      type: "word_order",
      title: "Exercice 4",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase négative correcte.",
      transInstruction: { en: "Put the words back in the correct order to form a correct negative sentence.", ar: "أعد ترتيب الكلمات لتكوين جملة سلبية صحيحة.", fa: "کلمات را به ترتیب درست بچینید تا جمله‌ی منفی درست بسازید.", ti: "ነተን ቃላት ቅኑዕ ኣሉታዊ ሓሳብ ንምግባር ብቅኑዕ ስርዓት መድብ።", uk: "Розставте слова у правильному порядку, щоб утворити правильне заперечне речення." },
      items: [],
      poolSize: 5,
      pool: [
        // A1 — 4-6 mots, ne…pas avec être/avoir/-er simple
        { sentence: "Je ne parle pas français.", words: ["Je", "ne", "parle", "pas", "français"] },
        { sentence: "Elle n'est pas médecin.", words: ["Elle", "n'est", "pas", "médecin"] },
        { sentence: "Nous n'avons pas faim.", words: ["Nous", "n'avons", "pas", "faim"] },
        { sentence: "Tu ne danses pas souvent.", words: ["Tu", "ne", "danses", "pas", "souvent"] },
        { sentence: "Il ne mange pas de viande.", words: ["Il", "ne", "mange", "pas", "de", "viande"] },
        { sentence: "Ils ne sont pas là.", words: ["Ils", "ne", "sont", "pas", "là"] },
        { sentence: "Je n'ai pas soif.", words: ["Je", "n'ai", "pas", "soif"] },
        { sentence: "Elle ne chante pas bien.", words: ["Elle", "ne", "chante", "pas", "bien"] },
        { sentence: "Vous n'êtes pas prêts.", words: ["Vous", "n'êtes", "pas", "prêts"] },
        { sentence: "Tu n'as pas raison.", words: ["Tu", "n'as", "pas", "raison"] },
        // A2 — 6-7 mots, vocabulaire courant, contexte quotidien
        { sentence: "Nous ne travaillons pas le dimanche.", words: ["Nous", "ne", "travaillons", "pas", "le", "dimanche"] },
        { sentence: "Elle n'habite pas à Genève.", words: ["Elle", "n'habite", "pas", "à", "Genève"] },
        { sentence: "Je ne comprends pas toujours bien.", words: ["Je", "ne", "comprends", "pas", "toujours", "bien"] },
        { sentence: "Ils ne jouent pas au tennis.", words: ["Ils", "ne", "jouent", "pas", "au", "tennis"] },
        { sentence: "Tu n'aimes pas les légumes.", words: ["Tu", "n'aimes", "pas", "les", "légumes"] },
        { sentence: "Vous n'avez pas d'enfants.", words: ["Vous", "n'avez", "pas", "d'enfants"] },
        { sentence: "Elle ne regarde pas la télé.", words: ["Elle", "ne", "regarde", "pas", "la", "télé"] },
        { sentence: "Je n'étudie pas chaque soir.", words: ["Je", "n'étudie", "pas", "chaque", "soir"] },
        { sentence: "Ils ne parlent pas anglais.", words: ["Ils", "ne", "parlent", "pas", "anglais"] },
        { sentence: "On n'est pas fatigués du tout.", words: ["On", "n'est", "pas", "fatigués", "du", "tout"] },
        // B1 — 7-9 mots, vocabulaire précis, nuances
        { sentence: "Je ne comprends pas encore toutes les règles.", words: ["Je", "ne", "comprends", "pas", "encore", "toutes", "les", "règles"] },
        { sentence: "Ils ne participent pas aux réunions du quartier.", words: ["Ils", "ne", "participent", "pas", "aux", "réunions", "du", "quartier"] },
        { sentence: "Elle ne travaille pas dans ce domaine.", words: ["Elle", "ne", "travaille", "pas", "dans", "ce", "domaine"] },
        { sentence: "Nous ne sommes pas encore habitués au climat.", words: ["Nous", "ne", "sommes", "pas", "encore", "habitués", "au", "climat"] },
        { sentence: "Tu n'as pas les documents nécessaires.", words: ["Tu", "n'as", "pas", "les", "documents", "nécessaires"] },
        { sentence: "Vous ne connaissez pas bien cette procédure.", words: ["Vous", "ne", "connaissez", "pas", "bien", "cette", "procédure"] },
        { sentence: "Ils ne trouvent pas de logement facilement.", words: ["Ils", "ne", "trouvent", "pas", "de", "logement", "facilement"] },
        { sentence: "Je ne parle pas encore couramment le français.", words: ["Je", "ne", "parle", "pas", "encore", "couramment", "le", "français"] },
        { sentence: "Elle ne s'adapte pas facilement au nouveau système.", words: ["Elle", "ne", "s'adapte", "pas", "facilement", "au", "nouveau", "système"] },
        { sentence: "Nous n'avons pas accès aux mêmes ressources.", words: ["Nous", "n'avons", "pas", "accès", "aux", "mêmes", "ressources"] },
      ],
    },
    // ── Exercise 5 — Color highlight (phrases négatives) ─────────────────────
    {
      type: "color_highlight",
      title: "Exercice 5",
      instruction: "Sélectionnez une couleur, puis cliquez sur chaque mot pour l'identifier : Sujet (jaune), Verbe (rouge), Complément (vert).",
      transInstruction: { en: "Select a color, then click each word to identify it: Subject (yellow), Verb (red), Complement (green).", ar: "اختر لوناً، ثم انقر على كل كلمة لتحديدها: الفاعل (أصفر)، الفعل (أحمر)، المتمّم (أخضر).", fa: "یک رنگ انتخاب کنید، سپس روی هر کلمه کلیک کنید: فاعل (زرد)، فعل (قرمز)، متمم (سبز).", ti: "ሕብሪ ምረጽ፣ ድሕሪኡ ነፍሲ ወከፍ ቃል ፍለ፦ ርእሲ (ብጫ)፣ ግሲ (ቀይሕ)፣ መመላእታ (ቀጠልያ).", uk: "Виберіть колір, потім натисніть на кожне слово: Підмет (жовтий), Дієслово (червоний), Додаток (зелений)." },
      colors: ["Sujet", "Verbe", "Complément"],
      items: [
        {
          words: ["Je", "ne", "parle", "pas", "français."],
          answers: [0, 1, 1, 1, 2],
        },
        {
          words: ["Il", "n'est", "pas", "médecin."],
          answers: [0, 1, 1, 2],
        },
        {
          words: ["Nous", "n'avons", "pas", "faim."],
          answers: [0, 1, 1, 2],
        },
      ],
    },
    // ── Exercise 6 — Write negative sentence with given verb ──────────────────
    {
      type: "write",
      title: "Exercice 6",
      instruction: "Écrivez une phrase négative avec le verbe proposé.\nLa phrase doit avoir un sujet, un verbe à la forme négative (ne … pas) et un complément.\nElle commence par une majuscule et se termine par un point.",
      transInstruction: { en: "Write a negative sentence with the verb provided.\nThe sentence must have a subject, a verb in the negative form (ne … pas) and a complement.\nIt starts with a capital letter and ends with a full stop.", ar: "اكتب جملة سلبية باستخدام الفعل المقترح.\nيجب أن تحتوي الجملة على فاعل وفعل بصيغة النفي (ne … pas) ومتمّم.\nتبدأ بحرف كبير وتنتهي بنقطة.", fa: "یک جمله‌ی منفی با فعل پیشنهادی بنویسید.\nجمله باید فاعل، فعل به‌صورت منفی (ne … pas) و متمم داشته باشد.\nبا حرف بزرگ شروع و با نقطه تمام می‌شود.", ti: "ሓደ ኣሉታዊ ሓሳብ ብእቲ ዝቐረበ ግሲ ጽሓፍ።\nእቲ ሓሳብ ርእሲ፣ ኣሉታዊ ግሲ (ne … pas)ን መመላእታን ክህልዎ ኣለዎ።\nብዓብዪ ፊደል ይጅምር ብነጥቢ ይውዳእ።", uk: "Напишіть заперечне речення із запропонованим дієсловом.\nРечення повинно мати підмет, дієслово у заперечній формі (ne … pas) та додаток.\nВоно починається з великої літери і закінчується крапкою." },
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
};
