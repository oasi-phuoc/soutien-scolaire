import type { ConjLesson } from "../../conjugation-data";

export const A1_CONJ_L27: ConjLesson = {
  slug: "a1-conj-l27",
  code: "R4.2",
  level: "A1",
  title: "Pronominaux réfléchis et réciproques",
  theory: [
    {
      type: "heading",
      text: "Les verbes pronominaux",
      trans: { en: "Reflexive verbs", ar: "الأفعال الانعكاسية", fa: "افعال انعکاسی", ti: "ርእሰ-ጠቓሚ ግሳት", uk: "Зворотні дієслова" },
    },
    {
      type: "plain_list",
      items: [
        "Un verbe pronominal s'utilise avec un {a}pronom réfléchi{/a} (me, te, se, nous, vous, se).",
        "Le pronom réfléchi change selon le sujet.",
        "À l'infinitif : {a}se{/a} laver, {a}se{/a} lever, {a}s'{/a}appeler…",
      ],
      transItems: {
        en: [
          "A reflexive verb is used with a {a}reflexive pronoun{/a} (me, te, se, nous, vous, se).",
          "The reflexive pronoun changes according to the subject.",
          "In the infinitive: {a}se{/a} laver, {a}se{/a} lever, {a}s'{/a}appeler…",
        ],
        ar: [
          "يُستخدم الفعل الانعكاسي مع {a}ضمير انعكاسي{/a} (me, te, se, nous, vous, se).",
          "يتغير الضمير الانعكاسي حسب الفاعل.",
          "في المصدر: {a}se{/a} laver، {a}se{/a} lever، {a}s'{/a}appeler…",
        ],
        fa: [
          "فعل انعکاسی با {a}ضمیر انعکاسی{/a} (me, te, se, nous, vous, se) به‌کار می‌رود.",
          "ضمیر انعکاسی بسته به فاعل تغییر می‌کند.",
          "در مصدر: {a}se{/a} laver، {a}se{/a} lever، {a}s'{/a}appeler…",
        ],
        ti: [
          "ርእሰ-ጠቓሚ ግሲ ምስ {a}ናይ ርእሲ ጸጋ ቃል{/a} (me, te, se, nous, vous, se) ይጥቀም።",
          "ናይ ርእሲ ጸጋ ቃል ብኣንጻረ ርእሲ ይቕየር።",
          "ኣብ መሰረታዊ ግሲ፦ {a}se{/a} laver፣ {a}se{/a} lever፣ {a}s'{/a}appeler…",
        ],
        uk: [
          "Зворотне дієслово вживається з {a}зворотним займенником{/a} (me, te, se, nous, vous, se).",
          "Зворотний займенник змінюється залежно від підмета.",
          "В інфінітиві: {a}se{/a} laver, {a}se{/a} lever, {a}s'{/a}appeler…",
        ],
      },
    },
    {
      type: "heading",
      text: "Conjugaison : se laver",
      sub: true,
      accent: true,
      trans: { en: "Conjugation: se laver", ar: "التصريف: se laver", fa: "صرف: se laver", ti: "ምጥቃም፦ se laver", uk: "Відмінювання: se laver" },
    },
    {
      type: "table",
      tables: [
        {
          verb: "se laver",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "me lave" },
            { pronoun: "tu", form: "te laves" },
            { pronoun: "il / elle / on", form: "se lave" },
            { pronoun: "nous", form: "nous lavons" },
            { pronoun: "vous", form: "vous lavez" },
            { pronoun: "ils / elles", form: "se lavent" },
          ],
        },
        {
          verb: "s'appeler",
          accentForms: true,
          rows: [
            { pronoun: "je", form: "m'appelle" },
            { pronoun: "tu", form: "t'appelles" },
            { pronoun: "il / elle / on", form: "s'appelle" },
            { pronoun: "nous", form: "nous appelons" },
            { pronoun: "vous", form: "vous appelez" },
            { pronoun: "ils / elles", form: "s'appellent" },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Réfléchis vs réciproques",
      sub: true,
      accent: true,
      trans: { en: "Reflexive vs reciprocal", ar: "انعكاسي مقابل تبادلي", fa: "انعکاسی در برابر متقابل", ti: "ርእሰ-ጠቓሚ ከምኡ ድማ ተዋሳእታዊ", uk: "Зворотні та взаємні" },
    },
    {
      type: "grid",
      headers: ["Type", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Réfléchi", "Le sujet agit sur lui-même.", "Je {a}me{/a} regarde dans le miroir."],
        ["Réciproque", "Les sujets agissent l'un sur l'autre.", "Nous {a}nous{/a} regardons. (each other)"],
      ],
      transHeaders: {
        en: ["Type", "Meaning", "Example"],
        ar: ["النوع", "المعنى", "مثال"],
        fa: ["نوع", "معنا", "مثال"],
        ti: ["ዓይነት", "ትርጉም", "ኣብነት"],
        uk: ["Тип", "Значення", "Приклад"],
      },
      transRows: {
        en: [
          ["Reflexive", "The subject acts on itself.", "Je {a}me{/a} regarde dans le miroir. (I look at myself in the mirror.)"],
          ["Reciprocal", "The subjects act on each other.", "Nous {a}nous{/a} regardons. (We look at each other.)"],
        ],
        ar: [
          ["انعكاسي", "الفاعل يتصرّف على نفسه.", "Je {a}me{/a} regarde dans le miroir. (أنظر إلى نفسي في المرآة.)"],
          ["تبادلي", "الفاعلون يتصرّفون على بعضهم.", "Nous {a}nous{/a} regardons. (ننظر إلى بعضنا.)"],
        ],
        fa: [
          ["انعکاسی", "فاعل بر خودش عمل می‌کند.", "Je {a}me{/a} regarde dans le miroir. (به آینه نگاه می‌کنم.)"],
          ["متقابل", "فاعل‌ها بر یکدیگر عمل می‌کنند.", "Nous {a}nous{/a} regardons. (به یکدیگر نگاه می‌کنیم.)"],
        ],
        ti: [
          ["ርእሰ-ጠቓሚ", "ርእሲ ኣብ ነብሱ ይሰርሕ።", "Je {a}me{/a} regarde dans le miroir. (ኣብ መስትያት ነብሰይ እርእይ።)"],
          ["ተዋሳእታዊ", "ርእስያት ኣብ ሓድሕዶም ይሰርሑ።", "Nous {a}nous{/a} regardons. (ሓድሕድና ንርእይ።)"],
        ],
        uk: [
          ["Зворотний", "Підмет діє на себе.", "Je {a}me{/a} regarde dans le miroir. (Я дивлюся на себе в дзеркалі.)"],
          ["Взаємний", "Підмети діють один на одного.", "Nous {a}nous{/a} regardons. (Ми дивимося один на одного.)"],
        ],
      },
    },
    {
      type: "highlight",
      label: "Verbes pronominaux courants",
      items: [
        "se lever — se coucher — se réveiller (routine quotidienne)",
        "se laver — se coiffer — s'habiller (hygiène)",
        "se souvenir — s'ennuyer — se sentir (état)",
        "se parler — se voir — s'écrire (réciproques)",
      ],
      transLabel: { en: "Common reflexive verbs", ar: "أفعال انعكاسية شائعة", fa: "افعال انعکاسی رایج", ti: "ተደጋጋሚ ርእሰ-ጠቓሚ ግሳት", uk: "Поширені зворотні дієслова" },
      transItems: {
        en: [
          "se lever — se coucher — se réveiller (daily routine)",
          "se laver — se coiffer — s'habiller (hygiene)",
          "se souvenir — s'ennuyer — se sentir (state)",
          "se parler — se voir — s'écrire (reciprocal)",
        ],
        ar: [
          "se lever — se coucher — se réveiller (الروتين اليومي)",
          "se laver — se coiffer — s'habiller (النظافة)",
          "se souvenir — s'ennuyer — se sentir (الحالة)",
          "se parler — se voir — s'écrire (تبادلي)",
        ],
        fa: [
          "se lever — se coucher — se réveiller (روال روزانه)",
          "se laver — se coiffer — s'habiller (بهداشت)",
          "se souvenir — s'ennuyer — se sentir (حالت)",
          "se parler — se voir — s'écrire (متقابل)",
        ],
        ti: [
          "se lever — se coucher — se réveiller (መዓልታዊ ልማድ)",
          "se laver — se coiffer — s'habiller (ንጽሕና)",
          "se souvenir — s'ennuyer — se sentir (ኩነታት)",
          "se parler — se voir — s'écrire (ተዋሳእታዊ)",
        ],
        uk: [
          "se lever — se coucher — se réveiller (щоденна рутина)",
          "se laver — se coiffer — s'habiller (гігієна)",
          "se souvenir — s'ennuyer — se sentir (стан)",
          "se parler — se voir — s'écrire (взаємні)",
        ],
      },
    },
    {
      type: "heading",
      text: "Forme négative",
      sub: true,
      accent: true,
      trans: { en: "Negative form", ar: "صيغة النفي", fa: "صورت منفی", ti: "ኣሉታዊ ቅርጺ", uk: "Заперечна форма" },
    },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je me lève.", "Je {a}ne{/a} me lève {a}pas{/a}."],
        ["Il se rase.", "Il {a}ne{/a} se rase {a}pas{/a}."],
        ["Nous nous voyons.", "Nous {a}ne{/a} nous voyons {a}pas{/a}."],
      ],
      transHeaders: {
        en: ["Affirmative", "Negative"],
        ar: ["إيجابي", "سلبي"],
        fa: ["مثبت", "منفی"],
        ti: ["ኣረጋግጺ", "ኣሉታዊ"],
        uk: ["Стверджувальна", "Заперечна"],
      },
      transRows: {
        en: [
          ["Je me lève. (I get up.)", "Je {a}ne{/a} me lève {a}pas{/a}. (I don't get up.)"],
          ["Il se rase. (He shaves.)", "Il {a}ne{/a} se rase {a}pas{/a}. (He doesn't shave.)"],
          ["Nous nous voyons. (We see each other.)", "Nous {a}ne{/a} nous voyons {a}pas{/a}. (We don't see each other.)"],
        ],
        ar: [
          ["Je me lève. (أستيقظ.)", "Je {a}ne{/a} me lève {a}pas{/a}. (لا أستيقظ.)"],
          ["Il se rase. (يحلق.)", "Il {a}ne{/a} se rase {a}pas{/a}. (لا يحلق.)"],
          ["Nous nous voyons. (نرى بعضنا.)", "Nous {a}ne{/a} nous voyons {a}pas{/a}. (لا نرى بعضنا.)"],
        ],
        fa: [
          ["Je me lève. (بلند می‌شوم.)", "Je {a}ne{/a} me lève {a}pas{/a}. (بلند نمی‌شوم.)"],
          ["Il se rase. (اصلاح می‌کند.)", "Il {a}ne{/a} se rase {a}pas{/a}. (اصلاح نمی‌کند.)"],
          ["Nous nous voyons. (همدیگر را می‌بینیم.)", "Nous {a}ne{/a} nous voyons {a}pas{/a}. (همدیگر را نمی‌بینیم.)"],
        ],
        ti: [
          ["Je me lève. (ተንሲአ.)", "Je {a}ne{/a} me lève {a}pas{/a}. (ኣይተንሲእኩን.)"],
          ["Il se rase. (ይሓጽብ.)", "Il {a}ne{/a} se rase {a}pas{/a}. (ኣይሓጽብን.)"],
          ["Nous nous voyons. (ሓድሕድና ንርእይ.)", "Nous {a}ne{/a} nous voyons {a}pas{/a}. (ሓድሕድና ኣይንርእይን.)"],
        ],
        uk: [
          ["Je me lève. (Я встаю.)", "Je {a}ne{/a} me lève {a}pas{/a}. (Я не встаю.)"],
          ["Il se rase. (Він голиться.)", "Il {a}ne{/a} se rase {a}pas{/a}. (Він не голиться.)"],
          ["Nous nous voyons. (Ми бачимо одне одного.)", "Nous {a}ne{/a} nous voyons {a}pas{/a}. (Ми не бачимо одне одного.)"],
        ],
      },
    },
  ],
  exercises: [],
};
