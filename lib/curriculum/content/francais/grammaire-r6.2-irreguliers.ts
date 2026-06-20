import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_IMPARFAIT_IRREGULIERS: GrammarLesson = {
  slug: "a2-gr-imparfait-irreguliers",
  code: "R5.9",
  level: "A2",
  title: "Les verbes irréguliers à l'imparfait",
  theory: [
    { type: "heading", text: "Les verbes irréguliers à l'imparfait", trans: { en: "Irregular verbs in the imparfait", ar: "الأفعال الشاذة في الماضي الناقص", fa: "افعال بی‌قاعده در ماضی استمراری", ti: "ዘይስሩዓት ግሲታት ኣብ ሕሉፍ ቀጻሊ", uk: "Неправильні дієслова в imparfait" } },
    {
      type: "plain_list",
      items: [
        "La plupart des verbes utilisent la base de {a}nous{/a} au présent, même quand leur infinitif est irrégulier.",
        "Le seul verbe avec une base totalement irrégulière est {a}être{/a} : ét-.",
      ],
      transItems: {
        en: ["Most verbs use the {a}nous{/a} stem of the present, even when their infinitive is irregular.", "The only verb with a totally irregular stem is {a}être{/a}: ét-."],
        ar: ["معظم الأفعال تستخدم جذر {a}nous{/a} في المضارع، حتى عندما يكون مصدرها شاذاً.", "الفعل الوحيد بجذر شاذ تماماً هو {a}être{/a}: ét-."],
        fa: ["بیشتر افعال از ریشه‌ی {a}nous{/a} در حال استفاده می‌کنند، حتی وقتی مصدرشان بی‌قاعده باشد.", "تنها فعل با ریشه‌ی کاملاً بی‌قاعده {a}être{/a} است: ét-."],
        ti: ["መብዛሕትኦም ግሲታት ናይ {a}nous{/a} መሰረት ናይ ህሉው ይጥቀሙ፣ መሰረታዊ ግሶም ዘይስሩዕ እኳ እንተኾነ።", "እቲ ብምሉእ ዘይስሩዕ መሰረት ዘለዎ እንኮ ግሲ {a}être{/a} እዩ፦ ét-።"],
        uk: ["Більшість дієслів використовують основу {a}nous{/a} теперішнього часу, навіть коли їхній інфінітив неправильний.", "Єдине дієслово з повністю неправильною основою — {a}être{/a}: ét-."],
      },
    },
    {
      type: "grid",
      headers: ["Verbe", "Base", "Exemple"],
      rows: [
        ["être", "ét-", "j'étais, nous étions"],
        ["avoir", "av-", "j'avais, ils avaient"],
        ["faire", "fais-", "tu faisais"],
        ["aller", "all-", "elle allait"],
        ["venir", "ven-", "vous veniez"],
        ["prendre", "pren-", "nous prenions"],
      ],
      boldFirstCol: true,
      transHeaders: {
        en: ["Verb", "Stem", "Example"],
        ar: ["الفعل", "الجذر", "مثال"],
        fa: ["فعل", "ریشه", "مثال"],
        ti: ["ግሲ", "መሰረት", "ኣብነት"],
        uk: ["Дієслово", "Основа", "Приклад"],
      },
    },
    {
      type: "highlight",
      label: "Orthographe",
      items: [
        "Les verbes en -ger gardent le e devant a : je mangeais, ils voyageaient.",
        "Les verbes en -cer prennent ç devant a : je commençais, ils avançaient.",
      ],
      transLabel: { en: "Spelling", ar: "الإملاء", fa: "املا", ti: "ኣጻሕፋ", uk: "Правопис" },
      transItems: {
        en: ["-ger verbs keep the e before a: je mangeais, ils voyageaient.", "-cer verbs take ç before a: je commençais, ils avançaient."],
        ar: ["أفعال -ger تحتفظ بـ e قبل a: je mangeais, ils voyageaient.", "أفعال -cer تأخذ ç قبل a: je commençais, ils avançaient."],
        fa: ["افعال -ger حرف e را پیش از a حفظ می‌کنند: je mangeais, ils voyageaient.", "افعال -cer پیش از a حرف ç می‌گیرند: je commençais, ils avançaient."],
        ti: ["ግሲታት -ger ቅድሚ a እቲ e ይዕቅቡ፦ je mangeais, ils voyageaient.", "ግሲታት -cer ቅድሚ a ç ይወስዱ፦ je commençais, ils avançaient."],
        uk: ["Дієслова на -ger зберігають e перед a: je mangeais, ils voyageaient.", "Дієслова на -cer беруть ç перед a: je commençais, ils avançaient."],
      },
    },
  ],
  exercises: [],
};
