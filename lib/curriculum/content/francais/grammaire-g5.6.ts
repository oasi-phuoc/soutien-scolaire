import type { GrammarLesson } from "../../grammar-data";

/** G5.6 — Les autres négations */
export const A1_GR_AUTRES_NEGATIONS: GrammarLesson = {
  slug: "a1-gr-autres-negations",
  code: "G5.6",
  level: "A1",
  title: "Les autres négations",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "D'autres négations que {a}ne… pas{/a} précisent le temps, les personnes ou les choses.",
        "Temps : Je ne joue jamais aux échecs. ; Nous ne sommes pas encore prêts.",
        "Personnes / choses : Il n'y a personne. ; Je ne vois rien.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Ne… jamais, ne… plus, ne… pas encore",
    },
    {
      type: "text",
      label: "Ne… jamais",
      items: [
        "Pas une seule fois. Négation de toujours, souvent, quelquefois, déjà.",
        "Il n'envoie jamais de cartes postales.",
        "— Tu prends souvent le métro ? — Non, je ne le prends jamais !",
      ],
      bulletItems: [0],
    },
    {
      type: "text",
      label: "Ne… plus",
      items: [
        "Avant oui, maintenant c'est fini. Négation de encore / toujours (= encore).",
        "— Tu habites encore à Paris ? — Non, je n'habite plus en France.",
        "À l'oral, le {a}s{/a} de {a}plus{/a} est muet dans ce sens. → Je ne fume plus.",
      ],
      bulletItems: [0],
    },
    {
      type: "text",
      label: "Ne… pas encore",
      items: [
        "L'action n'a pas encore eu lieu. Négation de déjà.",
        "Le musée n'est pas encore ouvert. (= il va ouvrir plus tard)",
        "— Tu as déjà visité ce quartier ? — Non, pas encore.",
      ],
      bulletItems: [0],
    },
    {
      type: "heading",
      text: "Ne… personne / personne ne…, ne… rien / rien ne…",
    },
    {
      type: "text",
      items: [
        "{a}Personne{/a} : pas une seule personne (≠ quelqu'un, tout le monde). Sujet ou complément. → Je ne connais personne. ; Personne ne me connaît.",
        "{a}Rien{/a} : pas une seule chose (≠ quelque chose, tout). → Je n'ai rien compris. ; Rien ne m'intéresse !",
      ],
    },
    {
      type: "heading",
      text: "Ne… que, ne… ni… ni",
    },
    {
      type: "text",
      items: [
        "{a}Ne… que{/a} = seulement. → Je ne parle que français !",
        "{a}Ne… ni… ni{/a} : négation de et / ou. → Je n'aime ni le rock ni le rap.",
      ],
    },
    { type: "heading", text: "Négation totale : jamais, rien, personne", trans: { en: "Total negation: jamais, rien, personne", ar: "النفي التام: jamais، rien، personne", fa: "نفی کامل: jamais، rien، personne", ti: "ምሉእ ኣሉታ፦ jamais፣ rien፣ personne", uk: "Повне заперечення: jamais, rien, personne" } },
    {
      type: "grid",
      headers: ["Négation", "Sens", "Contraire affirmatif"],
      transHeaders: {
        en: ["Negation", "Meaning", "Affirmative opposite"],
        ar: ["النفي", "المعنى", "النقيض الإثباتي"],
        fa: ["نفی", "معنا", "متضاد مثبت"],
        ti: ["ኣሉታ", "ትርጉም", "ኣወንታዊ ተጻይ"],
        uk: ["Заперечення", "Значення", "Стверджувальний відповідник"],
      },
      boldFirstCol: true,
      rows: [
        ["{a}ne … jamais{/a}", "à aucun moment", "toujours / souvent / parfois"],
        ["{a}ne … rien{/a}", "aucune chose", "quelque chose / tout"],
        ["{a}ne … personne{/a}", "aucune personne", "quelqu'un / tout le monde"],
      ],
      transRows: {
        en: [["{a}ne … jamais{/a}", "at no time", "toujours / souvent / parfois (always / often / sometimes)"], ["{a}ne … rien{/a}", "nothing", "quelque chose / tout (something / everything)"], ["{a}ne … personne{/a}", "nobody", "quelqu'un / tout le monde (someone / everyone)"]],
        ar: [["{a}ne … jamais{/a}", "في أي وقت", "toujours / souvent / parfois (دائماً / غالباً / أحياناً)"], ["{a}ne … rien{/a}", "لا شيء", "quelque chose / tout (شيء ما / كل شيء)"], ["{a}ne … personne{/a}", "لا أحد", "quelqu'un / tout le monde (شخص ما / الجميع)"]],
        fa: [["{a}ne … jamais{/a}", "هرگز", "toujours / souvent / parfois (همیشه / اغلب / گاهی)"], ["{a}ne … rien{/a}", "هیچ‌چیز", "quelque chose / tout (چیزی / همه‌چیز)"], ["{a}ne … personne{/a}", "هیچ‌کس", "quelqu'un / tout le monde (کسی / همه)"]],
        ti: [["{a}ne … jamais{/a}", "ኣብ ዝኾነ ግዜ", "toujours / souvent / parfois (ኩሉ ግዜ / ብተደጋጋሚ / ሓሓሊፉ)"], ["{a}ne … rien{/a}", "ዋላ ሓንቲ ነገር", "quelque chose / tout (ገለ ነገር / ኩሉ)"], ["{a}ne … personne{/a}", "ዋላ ሓደ ሰብ", "quelqu'un / tout le monde (ገለ ሰብ / ኩሉ ሰብ)"]],
        uk: [["{a}ne … jamais{/a}", "ніколи", "toujours / souvent / parfois (завжди / часто / іноді)"], ["{a}ne … rien{/a}", "нічого", "quelque chose / tout (щось / усе)"], ["{a}ne … personne{/a}", "нікого", "quelqu'un / tout le monde (хтось / усі)"]],
      },
    },
    { type: "heading", text: "Au présent", sub: true, accent: true, trans: { en: "In the present", ar: "في المضارع", fa: "در زمان حال", ti: "ኣብ ሕጂ", uk: "У теперішньому часі" } },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      transHeaders: {
        en: ["Affirmative", "Negative"],
        ar: ["إثبات", "نفي"],
        fa: ["مثبت", "منفی"],
        ti: ["ኣወንታዊ", "ኣሉታዊ"],
        uk: ["Стверджувальна", "Заперечна"],
      },
      rows: [
        ["Je mange toujours de la viande.", "Je {a}ne{/a} mange {a}jamais{/a} de viande."],
        ["Je fais quelque chose ce soir.", "Je {a}ne{/a} fais {a}rien{/a} ce soir."],
        ["Je connais quelqu'un ici.", "Je {a}ne{/a} connais {a}personne{/a} ici."],
      ],
      transRows: {
        en: [["Je mange toujours de la viande. (I always eat meat.)", "Je {a}ne{/a} mange {a}jamais{/a} de viande."], ["Je fais quelque chose ce soir. (I'm doing something tonight.)", "Je {a}ne{/a} fais {a}rien{/a} ce soir."], ["Je connais quelqu'un ici. (I know someone here.)", "Je {a}ne{/a} connais {a}personne{/a} ici."]],
        ar: [["Je mange toujours de la viande. (آكل اللحم دائماً.)", "Je {a}ne{/a} mange {a}jamais{/a} de viande."], ["Je fais quelque chose ce soir. (سأفعل شيئاً الليلة.)", "Je {a}ne{/a} fais {a}rien{/a} ce soir."], ["Je connais quelqu'un ici. (أعرف شخصاً هنا.)", "Je {a}ne{/a} connais {a}personne{/a} ici."]],
        fa: [["Je mange toujours de la viande. (همیشه گوشت می‌خورم.)", "Je {a}ne{/a} mange {a}jamais{/a} de viande."], ["Je fais quelque chose ce soir. (امشب کاری انجام می‌دهم.)", "Je {a}ne{/a} fais {a}rien{/a} ce soir."], ["Je connais quelqu'un ici. (کسی را اینجا می‌شناسم.)", "Je {a}ne{/a} connais {a}personne{/a} ici."]],
        ti: [["Je mange toujours de la viande. (ኩሉ ግዜ ስጋ እበልዕ።)", "Je {a}ne{/a} mange {a}jamais{/a} de viande."], ["Je fais quelque chose ce soir. (ሎሚ ምሸት ገለ ክገብር እየ።)", "Je {a}ne{/a} fais {a}rien{/a} ce soir."], ["Je connais quelqu'un ici. (ኣብዚ ገለ ሰብ እፈልጥ።)", "Je {a}ne{/a} connais {a}personne{/a} ici."]],
        uk: [["Je mange toujours de la viande. (Я завжди їм м'ясо.)", "Je {a}ne{/a} mange {a}jamais{/a} de viande."], ["Je fais quelque chose ce soir. (Я щось роблю сьогодні ввечері.)", "Je {a}ne{/a} fais {a}rien{/a} ce soir."], ["Je connais quelqu'un ici. (Я знаю когось тут.)", "Je {a}ne{/a} connais {a}personne{/a} ici."]],
      },
    },
    { type: "heading", text: "Au passé composé", sub: true, accent: true, trans: { en: "In the passé composé", ar: "في الماضي المركّب", fa: "در ماضی نقلی", ti: "ኣብ passé composé", uk: "У passé composé" } },
    {
      type: "text",
      allBullets: true,
      text: "{a}jamais et rien{/a} se placent entre l'auxiliaire et le participe.",
      transText: {
        en: "{a}jamais and rien{/a} are placed between the auxiliary and the participle.",
        ar: "{a}jamais و rien{/a} يوضعان بين الفعل المساعد واسم المفعول.",
        fa: "{a}jamais و rien{/a} میان فعل کمکی و وجه وصفی قرار می‌گیرند.",
        ti: "{a}jamais ከምኡውን rien{/a} ኣብ መንጎ ሓጋዚን ኣካፋዊን ይቕመጡ።",
        uk: "{a}jamais та rien{/a} ставляться між допоміжним дієсловом і дієприкметником.",
      },
      items: [
        "{a}personne{/a} se place après le participe.",
      ],
      transItems: {
        en: [
          "{a}personne{/a} is placed after the participle.",
        ],
        ar: [
          "{a}personne{/a} يوضع بعد اسم المفعول.",
        ],
        fa: [
          "{a}personne{/a} پس از وجه وصفی قرار می‌گیرد.",
        ],
        ti: [
          "{a}personne{/a} ድሕሪ ኣካፋዊ ይቕመጥ።",
        ],
        uk: [
          "{a}personne{/a} ставиться після дієприкметника.",
        ],
      },
    },
    {
      type: "grid",
      headers: ["Négation", "Exemple au passé composé"],
      transHeaders: {
        en: ["Negation", "Example in the passé composé"],
        ar: ["النفي", "مثال في الماضي المركّب"],
        fa: ["نفی", "مثال در ماضی نقلی"],
        ti: ["ኣሉታ", "ኣብነት ኣብ passé composé"],
        uk: ["Заперечення", "Приклад у passé composé"],
      },
      boldFirstCol: true,
      rows: [
        ["{a}jamais{/a}", "Je {a}n'{/a}ai {a}jamais{/a} voyagé."],
        ["{a}rien{/a}", "Il {a}n'{/a}a {a}rien{/a} dit."],
        ["{a}personne{/a}", "Nous {a}n'{/a}avons vu {a}personne{/a}."],
      ],
      transRows: {
        en: [["{a}jamais{/a}", "Je {a}n'{/a}ai {a}jamais{/a} voyagé. (I have never travelled.)"], ["{a}rien{/a}", "Il {a}n'{/a}a {a}rien{/a} dit. (He said nothing.)"], ["{a}personne{/a}", "Nous {a}n'{/a}avons vu {a}personne{/a}. (We saw nobody.)"]],
        ar: [["{a}jamais{/a}", "Je {a}n'{/a}ai {a}jamais{/a} voyagé. (لم أسافر قط.)"], ["{a}rien{/a}", "Il {a}n'{/a}a {a}rien{/a} dit. (لم يقل شيئاً.)"], ["{a}personne{/a}", "Nous {a}n'{/a}avons vu {a}personne{/a}. (لم نرَ أحداً.)"]],
        fa: [["{a}jamais{/a}", "Je {a}n'{/a}ai {a}jamais{/a} voyagé. (هرگز سفر نکرده‌ام.)"], ["{a}rien{/a}", "Il {a}n'{/a}a {a}rien{/a} dit. (هیچ نگفت.)"], ["{a}personne{/a}", "Nous {a}n'{/a}avons vu {a}personne{/a}. (هیچ‌کس را ندیدیم.)"]],
        ti: [["{a}jamais{/a}", "Je {a}n'{/a}ai {a}jamais{/a} voyagé. (ፈጺመ ተጓዒዘ ኣይፈልጥን።)"], ["{a}rien{/a}", "Il {a}n'{/a}a {a}rien{/a} dit. (ዋላ ሓንቲ ኣይበለን።)"], ["{a}personne{/a}", "Nous {a}n'{/a}avons vu {a}personne{/a}. (ዋላ ሓደ ሰብ ኣይረኣናን።)"]],
        uk: [["{a}jamais{/a}", "Je {a}n'{/a}ai {a}jamais{/a} voyagé. (Я ніколи не подорожував.)"], ["{a}rien{/a}", "Il {a}n'{/a}a {a}rien{/a} dit. (Він нічого не сказав.)"], ["{a}personne{/a}", "Nous {a}n'{/a}avons vu {a}personne{/a}. (Ми нікого не бачили.)"]],
      },
    },
    { type: "heading", text: "Rien et Personne comme sujets", sub: true, accent: true, trans: { en: "Rien and Personne as subjects", ar: "Rien وPersonne كفاعلين", fa: "Rien و Personne به‌عنوان فاعل", ti: "Rien ከምኡውን Personne ከም ባዕልታት", uk: "Rien і Personne як підмети" } },
    {
      type: "text",
      text: "Quand {a}rien{/a} ou {a}personne{/a} est sujet, il se place en tête de phrase, et le verbe garde {a}ne{/a}.",
      transText: {
        en: "When {a}rien{/a} or {a}personne{/a} is the subject, it is placed at the start of the sentence, and the verb keeps {a}ne{/a}.",
        ar: "عندما يكون {a}rien{/a} أو {a}personne{/a} فاعلاً، يوضع في بداية الجملة، ويحتفظ الفعل بـ{a}ne{/a}.",
        fa: "وقتی {a}rien{/a} یا {a}personne{/a} فاعل باشد، در ابتدای جمله قرار می‌گیرد و فعل {a}ne{/a} را نگه می‌دارد.",
        ti: "{a}rien{/a} ወይ {a}personne{/a} ባዕሉ ኮይኑ እንተሎ፣ ኣብ መጀመርታ ሓረግ ይቕመጥ፣ እቲ ግሲ ድማ {a}ne{/a} ይዕቅብ።",
        uk: "Коли {a}rien{/a} або {a}personne{/a} є підметом, він ставиться на початку речення, а дієслово зберігає {a}ne{/a}.",
      },
    },
    {
      type: "grid",
      headers: ["Structure", "Exemple"],
      transHeaders: {
        en: ["Structure", "Example"],
        ar: ["البنية", "مثال"],
        fa: ["ساختار", "مثال"],
        ti: ["ቅርጺ", "ኣብነት"],
        uk: ["Структура", "Приклад"],
      },
      rows: [
        ["{a}Rien{/a} + ne + verbe", "{a}Rien{/a} n'est impossible."],
        ["{a}Personne{/a} + ne + verbe", "{a}Personne{/a} ne parle."],
        ["{a}Rien{/a} + n'a + participe", "{a}Rien{/a} n'a changé."],
      ],
      transRows: {
        en: [["{a}Rien{/a} + ne + verb", "{a}Rien{/a} n'est impossible. (Nothing is impossible.)"], ["{a}Personne{/a} + ne + verb", "{a}Personne{/a} ne parle. (Nobody is speaking.)"], ["{a}Rien{/a} + n'a + participle", "{a}Rien{/a} n'a changé. (Nothing has changed.)"]],
        ar: [["{a}Rien{/a} + ne + الفعل", "{a}Rien{/a} n'est impossible. (لا شيء مستحيل.)"], ["{a}Personne{/a} + ne + الفعل", "{a}Personne{/a} ne parle. (لا أحد يتكلم.)"], ["{a}Rien{/a} + n'a + اسم المفعول", "{a}Rien{/a} n'a changé. (لم يتغير شيء.)"]],
        fa: [["{a}Rien{/a} + ne + فعل", "{a}Rien{/a} n'est impossible. (هیچ‌چیز ناممکن نیست.)"], ["{a}Personne{/a} + ne + فعل", "{a}Personne{/a} ne parle. (هیچ‌کس صحبت نمی‌کند.)"], ["{a}Rien{/a} + n'a + وجه وصفی", "{a}Rien{/a} n'a changé. (هیچ‌چیز تغییر نکرده است.)"]],
        ti: [["{a}Rien{/a} + ne + ግሲ", "{a}Rien{/a} n'est impossible. (ዋላ ሓንቲ ዘይከኣል የለን።)"], ["{a}Personne{/a} + ne + ግሲ", "{a}Personne{/a} ne parle. (ዋላ ሓደ ኣይዛረብን።)"], ["{a}Rien{/a} + n'a + ኣካፋዊ", "{a}Rien{/a} n'a changé. (ዋላ ሓንቲ ኣይተቐየረን።)"]],
        uk: [["{a}Rien{/a} + ne + дієслово", "{a}Rien{/a} n'est impossible. (Немає нічого неможливого.)"], ["{a}Personne{/a} + ne + дієслово", "{a}Personne{/a} ne parle. (Ніхто не говорить.)"], ["{a}Rien{/a} + n'a + дієприкметник", "{a}Rien{/a} n'a changé. (Нічого не змінилося.)"]],
      },
    },
    {
      type: "text",
      allBullets: true,
      label: "Cumul de négations",
      items: [
        "On peut combiner {a}ne…jamais…rien{/a} ou {a}ne…jamais…personne{/a}.",
        "Je {a}ne{/a} vois {a}jamais{/a} {a}personne{/a} ici.",
        "Il {a}ne{/a} fait {a}jamais{/a} {a}rien{/a}.",
        "En français, le double négatif {a}renforce{/a} la négation (contrairement à l'anglais).",
      ],
      transLabel: { en: "Combining negations", ar: "تراكم النفي", fa: "ترکیب نفی‌ها", ti: "ምድርራብ ኣሉታታት", uk: "Поєднання заперечень" },
      transItems: {
        en: ["You can combine {a}ne…jamais…rien{/a} or {a}ne…jamais…personne{/a}.", "Je {a}ne{/a} vois {a}jamais{/a} {a}personne{/a} ici. (I never see anyone here.)", "Il {a}ne{/a} fait {a}jamais{/a} {a}rien{/a}. (He never does anything.)", "In French, the double negative {a}reinforces{/a} the negation (unlike in English)."],
        ar: ["يمكنك الجمع بين {a}ne…jamais…rien{/a} أو {a}ne…jamais…personne{/a}.", "Je {a}ne{/a} vois {a}jamais{/a} {a}personne{/a} ici. (لا أرى أحداً هنا أبداً.)", "Il {a}ne{/a} fait {a}jamais{/a} {a}rien{/a}. (لا يفعل شيئاً أبداً.)", "في الفرنسية، النفي المزدوج {a}يقوّي{/a} النفي (عكس الإنجليزية)."],
        fa: ["می‌توانید {a}ne…jamais…rien{/a} یا {a}ne…jamais…personne{/a} را ترکیب کنید.", "Je {a}ne{/a} vois {a}jamais{/a} {a}personne{/a} ici. (هرگز کسی را اینجا نمی‌بینم.)", "Il {a}ne{/a} fait {a}jamais{/a} {a}rien{/a}. (هرگز کاری انجام نمی‌دهد.)", "در فرانسوی، نفی دوگانه نفی را {a}تقویت{/a} می‌کند (برخلاف انگلیسی)."],
        ti: ["{a}ne…jamais…rien{/a} ወይ {a}ne…jamais…personne{/a} ከተደራርብ ትኽእል።", "Je {a}ne{/a} vois {a}jamais{/a} {a}personne{/a} ici. (ኣብዚ ፈጺመ ዋላ ሓደ ሰብ ኣይርኢን።)", "Il {a}ne{/a} fait {a}jamais{/a} {a}rien{/a}. (ፈጺሙ ዋላ ሓንቲ ኣይገብርን።)", "ብፈረንሳ ቋንቋ፣ ድርብ ኣሉታ ነቲ ኣሉታ {a}የደልድል{/a} (ብኣንጻር እንግሊዝኛ)።"],
        uk: ["Можна поєднувати {a}ne…jamais…rien{/a} або {a}ne…jamais…personne{/a}.", "Je {a}ne{/a} vois {a}jamais{/a} {a}personne{/a} ici. (Я ніколи нікого тут не бачу.)", "Il {a}ne{/a} fait {a}jamais{/a} {a}rien{/a}. (Він ніколи нічого не робить.)", "У французькій мові подвійне заперечення {a}посилює{/a} заперечення (на відміну від англійської)."],
      },
    },
  ],
  // Former a2-gr-l42 exercise array is empty; generatedGrammarExercises supplies its migrated pool.
  exercises: [],
};
