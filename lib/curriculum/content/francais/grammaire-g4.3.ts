import type { GrammarLesson } from "../../grammar-data";

/** Unité 23 — L'article partitif (G4.3) */
export const A1_GR_ARTICLE_PARTITIF: GrammarLesson = {
  slug: "a1-gr-article-partitif",
  code: "G4.3",
  level: "A1",
  title: "L'article partitif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "L'article partitif indique une quantité indéterminée (non comptable), pour des choses concrètes ou abstraites.",
        "Concret : {a}du{/a} poulet ; {a}de la{/a} pizza ; {a}de l'{/a}eau.",
        "Abstrait : {a}du{/a} courage ; {a}de la{/a} chance ; {a}de l'{/a}amour.",
        "Avec {a}faire{/a} pour parler d'un sport ou d'une activité artistique. → faire du sport ; faire de la danse.",
      ],
      allBullets: true,
    },
    {
      type: "text",
      text: "Comparaison : {a}un{/a} poulet (= le poulet entier) ≠ {a}du{/a} poulet (= une part) ; {a}une{/a} pizza ≠ {a}de la{/a} pizza.",
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "grid",
      headers: ["", "Devant une consonne", "Devant une voyelle / h muet"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "Je bois du café.", "Il fait de l'aviron."],
        ["Féminin singulier", "Il mange de la soupe.", "Il faut de l'huile."],
      ],
    },
    {
      type: "text",
      label: "Négation",
      items: [
        "À la forme négative, le partitif est remplacé par {a}de{/a} / {a}d'{/a}. La distinction masculin/féminin disparaît.",
        "Il y a du vent. → Il n'y a pas de vent.",
        "Elle a de la chance. → Elle n'a pas de chance.",
        "Ils ont de l'expérience. → Ils n'ont pas d'expérience.",
      ],
      bulletItems: [0],
    },
    {
      type: "note",
      text: "Avec le verbe {a}être{/a} à la négative, le partitif ne change pas. → C'est du sucre. / Ce n'est pas du sucre.",
    },
    { type: "heading", text: "Les articles partitifs", trans: { en: "Partitive articles", ar: "أدوات التجزئة", fa: "حروف تعریف تبعیضی", ti: "ናይ ክፍሊ መሳለጥቲ", uk: "Партитивні артиклі" } },
    {
      type: "text",
      text: "Les articles partitifs expriment une quantité indéterminée — une partie de quelque chose.",
      transText: {
        en: "Partitive articles express an undetermined quantity — a part of something.",
        ar: "أدوات التجزئة تعبّر عن كمية غير محددة — جزء من شيء ما.",
        fa: "حروف تعریف تبعیضی بیانگر مقداری نامعین هستند — بخشی از چیزی.",
        ti: "ናይ ክፍሊ መሳለጥቲ ዘይተወሰነ መጠን የመልክቱ — ክፋል ናይ ገለ ነገር።",
        uk: "Партитивні артиклі виражають невизначену кількість — частину чогось.",
      },
    },
    {
      type: "grid",
      headers: ["Genre", "Article", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin singulier", "{a}du{/a} (de + le)", "Je mange {a}du{/a} pain."],
        ["Féminin singulier", "{a}de la{/a}", "Je bois {a}de la{/a} limonade."],
        ["Devant voyelle", "{a}de l'{/a}", "Je bois {a}de l'{/a}eau."],
        ["Pluriel", "{a}des{/a}", "Je mange {a}des{/a} légumes."],
      ],
      transHeaders: {
        en: ["Gender", "Article", "Example"],
        ar: ["الجنس", "الأداة", "مثال"],
        fa: ["جنس", "حرف تعریف", "مثال"],
        ti: ["ጾታ", "መሳለጢ", "ኣብነት"],
        uk: ["Рід", "Артикль", "Приклад"],
      },
      transRows: {
        en: [["Masculine singular", "{a}du{/a} (de + le)", "Je mange {a}du{/a} pain. (I eat (some) bread.)"], ["Feminine singular", "{a}de la{/a}", "Je bois {a}de la{/a} limonade. (I drink (some) lemonade.)"], ["Before a vowel", "{a}de l'{/a}", "Je bois {a}de l'{/a}eau. (I drink (some) water.)"], ["Plural", "{a}des{/a}", "Je mange {a}des{/a} légumes. (I eat (some) vegetables.)"]],
        ar: [["مذكر مفرد", "{a}du{/a} (de + le)", "Je mange {a}du{/a} pain. (آكل بعض الخبز.)"], ["مؤنث مفرد", "{a}de la{/a}", "Je bois {a}de la{/a} limonade. (أشرب بعض الليموناضة.)"], ["قبل حرف علة", "{a}de l'{/a}", "Je bois {a}de l'{/a}eau. (أشرب بعض الماء.)"], ["جمع", "{a}des{/a}", "Je mange {a}des{/a} légumes. (آكل بعض الخضار.)"]],
        fa: [["مذکر مفرد", "{a}du{/a} (de + le)", "Je mange {a}du{/a} pain. (مقداری نان می‌خورم.)"], ["مؤنث مفرد", "{a}de la{/a}", "Je bois {a}de la{/a} limonade. (مقداری لیموناد می‌نوشم.)"], ["قبل از حرف صدادار", "{a}de l'{/a}", "Je bois {a}de l'{/a}eau. (مقداری آب می‌نوشم.)"], ["جمع", "{a}des{/a}", "Je mange {a}des{/a} légumes. (مقداری سبزیجات می‌خورم.)"]],
        ti: [["ተባዕታይ ነጠላ", "{a}du{/a} (de + le)", "Je mange {a}du{/a} pain. (ቁሩብ ባኒ እበልዕ።)"], ["ኣንስታይ ነጠላ", "{a}de la{/a}", "Je bois {a}de la{/a} limonade. (ቁሩብ ሊሞናድ እሰቲ።)"], ["ቅድሚ ድምጺ ፊደል", "{a}de l'{/a}", "Je bois {a}de l'{/a}eau. (ቁሩብ ማይ እሰቲ።)"], ["ብዙሕ", "{a}des{/a}", "Je mange {a}des{/a} légumes. (ቁሩብ ኣሕምልቲ እበልዕ።)"]],
        uk: [["Чоловічий рід однини", "{a}du{/a} (de + le)", "Je mange {a}du{/a} pain. (Я їм (трохи) хліба.)"], ["Жіночий рід однини", "{a}de la{/a}", "Je bois {a}de la{/a} limonade. (Я п'ю (трохи) лимонаду.)"], ["Перед голосною", "{a}de l'{/a}", "Je bois {a}de l'{/a}eau. (Я п'ю (трохи) води.)"], ["Множина", "{a}des{/a}", "Je mange {a}des{/a} légumes. (Я їм (трохи) овочів.)"]],
      },
    },
    { type: "heading", text: "Partitif vs défini", sub: true, trans: { en: "Partitive vs definite", ar: "التجزئة مقابل التعريف", fa: "تبعیضی در برابر معرفه", ti: "ክፍሊ ኣንጻር ፍሉጥ", uk: "Партитивний проти означеного" } },
    {
      type: "grid",
      headers: ["Partitif (quantité indéterminée)", "Défini (chose précise)"],
      rows: [
        ["Je mange {a}du{/a} pain.", "Je mange {a}le{/a} pain que tu as fait."],
        ["Elle boit {a}de la{/a} soupe.", "Elle boit {a}la{/a} soupe de sa mère."],
      ],
      transHeaders: {
        en: ["Partitive (undetermined quantity)", "Definite (specific thing)"],
        ar: ["التجزئة (كمية غير محددة)", "التعريف (شيء محدد)"],
        fa: ["تبعیضی (مقدار نامعین)", "معرفه (چیز مشخص)"],
        ti: ["ክፍሊ (ዘይተወሰነ መጠን)", "ፍሉጥ (ውሱን ነገር)"],
        uk: ["Партитивний (невизначена кількість)", "Означений (конкретна річ)"],
      },
      transRows: {
        en: [["Je mange {a}du{/a} pain. (I eat (some) bread.)", "Je mange {a}le{/a} pain que tu as fait. (I eat the bread you made.)"], ["Elle boit {a}de la{/a} soupe. (She drinks (some) soup.)", "Elle boit {a}la{/a} soupe de sa mère. (She drinks her mother's soup.)"]],
        ar: [["Je mange {a}du{/a} pain. (آكل بعض الخبز.)", "Je mange {a}le{/a} pain que tu as fait. (آكل الخبز الذي صنعتَه.)"], ["Elle boit {a}de la{/a} soupe. (تشرب بعض الحساء.)", "Elle boit {a}la{/a} soupe de sa mère. (تشرب حساء أمها.)"]],
        fa: [["Je mange {a}du{/a} pain. (مقداری نان می‌خورم.)", "Je mange {a}le{/a} pain que tu as fait. (نانی را که درست کردی می‌خورم.)"], ["Elle boit {a}de la{/a} soupe. (مقداری سوپ می‌نوشد.)", "Elle boit {a}la{/a} soupe de sa mère. (سوپ مادرش را می‌نوشد.)"]],
        ti: [["Je mange {a}du{/a} pain. (ቁሩብ ባኒ እበልዕ።)", "Je mange {a}le{/a} pain que tu as fait. (ነቲ ዝሰራሕካዮ ባኒ እበልዕ።)"], ["Elle boit {a}de la{/a} soupe. (ቁሩብ መረቕ ትሰቲ።)", "Elle boit {a}la{/a} soupe de sa mère. (ናይ ኣዲኣ መረቕ ትሰቲ።)"]],
        uk: [["Je mange {a}du{/a} pain. (Я їм (трохи) хліба.)", "Je mange {a}le{/a} pain que tu as fait. (Я їм хліб, який ти спекла.)"], ["Elle boit {a}de la{/a} soupe. (Вона п'є (трохи) супу.)", "Elle boit {a}la{/a} soupe de sa mère. (Вона п'є суп своєї матері.)"]],
      },
    },
    { type: "heading", text: "Négation : partitif → de / d'", sub: true, accent: true, trans: { en: "Negation: partitive → de / d'", ar: "النفي: التجزئة ← de / d'", fa: "نفی: تبعیضی ← de / d'", ti: "ኣሉታ፦ ክፍሊ → de / d'", uk: "Заперечення: партитив → de / d'" } },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je mange du pain.", "Je ne mange {a}pas de{/a} pain."],
        ["Tu bois de la soupe.", "Tu ne bois {a}pas de{/a} soupe."],
        ["Elle prend de l'huile.", "Elle ne prend {a}pas d'{/a}huile."],
        ["Ils ont des enfants.", "Ils n'ont {a}pas d'{/a}enfants."],
      ],
      transHeaders: {
        en: ["Affirmative", "Negative"],
        ar: ["مثبت", "منفي"],
        fa: ["مثبت", "منفی"],
        ti: ["ኣረጋጋጺ", "ኣሉታዊ"],
        uk: ["Стверджувальний", "Заперечний"],
      },
      transRows: {
        en: [["Je mange du pain. (I eat bread.)", "Je ne mange {a}pas de{/a} pain. (I don't eat bread.)"], ["Tu bois de la soupe. (You drink soup.)", "Tu ne bois {a}pas de{/a} soupe. (You don't drink soup.)"], ["Elle prend de l'huile. (She takes oil.)", "Elle ne prend {a}pas d'{/a}huile. (She doesn't take oil.)"], ["Ils ont des enfants. (They have children.)", "Ils n'ont {a}pas d'{/a}enfants. (They don't have children.)"]],
        ar: [["Je mange du pain. (آكل الخبز.)", "Je ne mange {a}pas de{/a} pain. (لا آكل الخبز.)"], ["Tu bois de la soupe. (تشرب الحساء.)", "Tu ne bois {a}pas de{/a} soupe. (لا تشرب الحساء.)"], ["Elle prend de l'huile. (تأخذ الزيت.)", "Elle ne prend {a}pas d'{/a}huile. (لا تأخذ الزيت.)"], ["Ils ont des enfants. (لديهم أطفال.)", "Ils n'ont {a}pas d'{/a}enfants. (ليس لديهم أطفال.)"]],
        fa: [["Je mange du pain. (نان می‌خورم.)", "Je ne mange {a}pas de{/a} pain. (نان نمی‌خورم.)"], ["Tu bois de la soupe. (سوپ می‌نوشی.)", "Tu ne bois {a}pas de{/a} soupe. (سوپ نمی‌نوشی.)"], ["Elle prend de l'huile. (روغن برمی‌دارد.)", "Elle ne prend {a}pas d'{/a}huile. (روغن برنمی‌دارد.)"], ["Ils ont des enfants. (آن‌ها بچه دارند.)", "Ils n'ont {a}pas d'{/a}enfants. (آن‌ها بچه ندارند.)"]],
        ti: [["Je mange du pain. (ባኒ እበልዕ።)", "Je ne mange {a}pas de{/a} pain. (ባኒ ኣይበልዕን።)"], ["Tu bois de la soupe. (መረቕ ትሰቲ።)", "Tu ne bois {a}pas de{/a} soupe. (መረቕ ኣይትሰትን።)"], ["Elle prend de l'huile. (ዘይቲ ትወስድ።)", "Elle ne prend {a}pas d'{/a}huile. (ዘይቲ ኣይትወስድን።)"], ["Ils ont des enfants. (ቆልዑ ኣለዉዎም።)", "Ils n'ont {a}pas d'{/a}enfants. (ቆልዑ የብሎምን።)"]],
        uk: [["Je mange du pain. (Я їм хліб.)", "Je ne mange {a}pas de{/a} pain. (Я не їм хліба.)"], ["Tu bois de la soupe. (Ти п'єш суп.)", "Tu ne bois {a}pas de{/a} soupe. (Ти не п'єш супу.)"], ["Elle prend de l'huile. (Вона бере олію.)", "Elle ne prend {a}pas d'{/a}huile. (Вона не бере олії.)"], ["Ils ont des enfants. (У них є діти.)", "Ils n'ont {a}pas d'{/a}enfants. (У них немає дітей.)"]],
      },
    },
    { type: "heading", text: "La quantité déterminée", sub: true, trans: { en: "Determined quantity", ar: "الكمية المحددة", fa: "مقدار معین", ti: "ዝተወሰነ መጠን", uk: "Визначена кількість" } },
    {
      type: "text",
      text: "Avec une quantité précise : {a}quantité + de + nom{/a} (sans article).",
      transText: {
        en: "With a precise quantity: {a}quantity + de + noun{/a} (without article).",
        ar: "مع كمية محددة: {a}الكمية + de + الاسم{/a} (بدون أداة).",
        fa: "با مقدار مشخص: {a}مقدار + de + اسم{/a} (بدون حرف تعریف).",
        ti: "ምስ ውሱን መጠን፦ {a}መጠን + de + ስም{/a} (ብዘይ መሳለጢ)።",
        uk: "З точною кількістю: {a}кількість + de + іменник{/a} (без артикля).",
      },
    },
    {
      type: "text",
      allBullets: true,
      label: "Exemples",
      items: [
        "un kilo {a}de{/a} pommes",
        "une bouteille {a}d'{/a}eau",
        "beaucoup {a}de{/a} lait",
        "un peu {a}de{/a} sucre",
        "assez {a}de{/a} pain",
        "trop {a}de{/a} sel",
      ],
      transLabel: { en: "Examples", ar: "أمثلة", fa: "مثال‌ها", ti: "ኣብነታት", uk: "Приклади" },
      transItems: {
        en: ["a kilo {a}of{/a} apples", "a bottle {a}of{/a} water", "a lot {a}of{/a} milk", "a little {a}of{/a} sugar", "enough {a}of{/a} bread", "too much {a}of{/a} salt"],
        ar: ["كيلو {a}من{/a} التفاح", "زجاجة {a}من{/a} الماء", "كثير {a}من{/a} الحليب", "قليل {a}من{/a} السكر", "ما يكفي {a}من{/a} الخبز", "كثير جداً {a}من{/a} الملح"],
        fa: ["یک کیلو {a}از{/a} سیب", "یک بطری {a}از{/a} آب", "مقدار زیادی {a}از{/a} شیر", "کمی {a}از{/a} شکر", "به اندازه‌ی کافی {a}از{/a} نان", "بیش از حد {a}از{/a} نمک"],
        ti: ["ሓደ ኪሎ {a}ናይ{/a} ቱፋሕ", "ሓደ ጥርሙዝ {a}ናይ{/a} ማይ", "ብዙሕ {a}ናይ{/a} ጸባ", "ቁሩብ {a}ናይ{/a} ሽኮር", "እኹል {a}ናይ{/a} ባኒ", "ኣዝዩ ብዙሕ {a}ናይ{/a} ጨው"],
        uk: ["кілограм яблук", "пляшка води", "багато молока", "трохи цукру", "достатньо хліба", "забагато солі"],
      },
    },
  ],
  exercises: [],
};
