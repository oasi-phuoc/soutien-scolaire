import type { GrammarLesson } from "../../grammar-data";

/** G8.5 — L'imparfait */
export const A1_GR_IMPARFAIT: GrammarLesson = {
  slug: "a1-gr-imparfait",
  code: "G8.5",
  level: "A1",
  title: "L'imparfait",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Décrire une situation passée, souvent en contraste avec le présent. → Avant, les trains étaient à vapeur. Maintenant, les trains sont électriques.",
        "Décrire une habitude passée. → Quand j'étais enfant, tous les dimanches, nous allions chez mes grands-parents.",
      ],
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "text",
      items: [
        "L'imparfait est très régulier : radical du {a}nous{/a} au présent + terminaisons.",
        "Terminaisons : {a}-ais, -ais, -ait, -ions, -iez, -aient{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: [
        "Infinitif",
        "nous (présent)",
        "Imparfait",
      ],
      boldFirstCol: true,
      rows: [
        [
          "détester",
          "nous détestons",
          "je détestais la lecture",
        ],
        [
          "aller",
          "nous allons",
          "tu allais chez tes grands-parents",
        ],
        [
          "vivre",
          "nous vivons",
          "il / elle / on vivait à la campagne",
        ],
        [
          "avoir",
          "nous avons",
          "nous avions une petite voiture",
        ],
        [
          "habiter",
          "nous habitons",
          "vous habitiez dans un studio",
        ],
        [
          "dormir",
          "nous dormons",
          "ils / elles dormaient dans la même chambre",
        ],
      ],
    },
    {
      type: "note",
      text: "{a}Être{/a} a un radical irrégulier : {a}ét-{/a}. → étaient.",
    },
    {
      type: "note",
      text: "Verbes impersonnels : il faut → il fallait ; il pleut → il pleuvait.",
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "text",
      items: [
        "Les terminaisons {a}-ais{/a}, {a}-ait{/a} et {a}-aient{/a} se prononcent pareil.",
        "Ne pas confondre présent / imparfait : j'habite ≠ j'habitais ; nous buvons ≠ nous buvions.",
        "Ne pas confondre passé composé / imparfait : il a habité ≠ il habitait.",
      ],
      allBullets: true,
    },
    {
      type: "text",
      label: "Orthographe — cas particuliers",
      items: [
        "Verbes en {a}-ger{/a} : un {a}e{/a} devant {a}a{/a}. → je voyageais ; il mangeait.",
        "Verbes en {a}-cer{/a} : {a}c → ç{/a} devant {a}a{/a}. → je commençais ; il commençait.",
        "Verbes en {a}-yer{/a} : on garde {a}y{/a} devant {a}i{/a}. → nous payions ; vous essuyiez.",
        "Radical en {a}-i{/a} : double {a}i{/a}. → nous riions ; vous étudiiez.",
      ],
    },
    {
      type: "heading",
      text: "Les verbes irréguliers à l'imparfait",
      trans: {
        en: "Irregular verbs in the imparfait",
        ar: "الأفعال الشاذة في الماضي الناقص",
        fa: "افعال بی‌قاعده در ماضی استمراری",
        ti: "ዘይስሩዓት ግሲታት ኣብ ሕሉፍ ቀጻሊ",
        uk: "Неправильні дієслова в imparfait",
      },
    },
    {
      type: "text",
      allBullets: true,
      text: "La plupart des verbes utilisent la base de {a}nous{/a} au présent, même quand leur infinitif est irrégulier.",
      transText: {
        en: "Most verbs use the {a}nous{/a} stem of the present, even when their infinitive is irregular.",
        ar: "معظم الأفعال تستخدم جذر {a}nous{/a} في المضارع، حتى عندما يكون مصدرها شاذاً.",
        fa: "بیشتر افعال از ریشه‌ی {a}nous{/a} در حال استفاده می‌کنند، حتی وقتی مصدرشان بی‌قاعده باشد.",
        ti: "መብዛሕትኦም ግሲታት ናይ {a}nous{/a} መሰረት ናይ ህሉው ይጥቀሙ፣ መሰረታዊ ግሶም ዘይስሩዕ እኳ እንተኾነ።",
        uk: "Більшість дієслів використовують основу {a}nous{/a} теперішнього часу, навіть коли їхній інфінітив неправильний.",
      },
      items: [
        "Le seul verbe avec une base totalement irrégulière est {a}être{/a} : ét-.",
      ],
      transItems: {
        en: [
          "The only verb with a totally irregular stem is {a}être{/a}: ét-.",
        ],
        ar: [
          "الفعل الوحيد بجذر شاذ تماماً هو {a}être{/a}: ét-.",
        ],
        fa: [
          "تنها فعل با ریشه‌ی کاملاً بی‌قاعده {a}être{/a} است: ét-.",
        ],
        ti: [
          "እቲ ብምሉእ ዘይስሩዕ መሰረት ዘለዎ እንኮ ግሲ {a}être{/a} እዩ፦ ét-።",
        ],
        uk: [
          "Єдине дієслово з повністю неправильною основою — {a}être{/a}: ét-.",
        ],
      },
    },
    {
      type: "grid",
      headers: [
        "Verbe",
        "Base",
        "Exemple",
      ],
      rows: [
        [
          "être",
          "ét-",
          "j'étais, nous étions",
        ],
        [
          "avoir",
          "av-",
          "j'avais, ils avaient",
        ],
        [
          "faire",
          "fais-",
          "tu faisais",
        ],
        [
          "aller",
          "all-",
          "elle allait",
        ],
        [
          "venir",
          "ven-",
          "vous veniez",
        ],
        [
          "prendre",
          "pren-",
          "nous prenions",
        ],
      ],
      boldFirstCol: true,
      transHeaders: {
        en: [
          "Verb",
          "Stem",
          "Example",
        ],
        ar: [
          "الفعل",
          "الجذر",
          "مثال",
        ],
        fa: [
          "فعل",
          "ریشه",
          "مثال",
        ],
        ti: [
          "ግሲ",
          "መሰረት",
          "ኣብነት",
        ],
        uk: [
          "Дієслово",
          "Основа",
          "Приклад",
        ],
      },
    },
    {
      type: "text",
      allBullets: true,
      label: "Orthographe",
      items: [
        "Les verbes en -ger gardent le e devant a : je mangeais, ils voyageaient.",
        "Les verbes en -cer prennent ç devant a : je commençais, ils avançaient.",
      ],
      transLabel: {
        en: "Spelling",
        ar: "الإملاء",
        fa: "املا",
        ti: "ኣጻሕፋ",
        uk: "Правопис",
      },
      transItems: {
        en: [
          "-ger verbs keep the e before a: je mangeais, ils voyageaient.",
          "-cer verbs take ç before a: je commençais, ils avançaient.",
        ],
        ar: [
          "أفعال -ger تحتفظ بـ e قبل a: je mangeais, ils voyageaient.",
          "أفعال -cer تأخذ ç قبل a: je commençais, ils avançaient.",
        ],
        fa: [
          "افعال -ger حرف e را پیش از a حفظ می‌کنند: je mangeais, ils voyageaient.",
          "افعال -cer پیش از a حرف ç می‌گیرند: je commençais, ils avançaient.",
        ],
        ti: [
          "ግሲታት -ger ቅድሚ a እቲ e ይዕቅቡ፦ je mangeais, ils voyageaient.",
          "ግሲታት -cer ቅድሚ a ç ይወስዱ፦ je commençais, ils avançaient.",
        ],
        uk: [
          "Дієслова на -ger зберігають e перед a: je mangeais, ils voyageaient.",
          "Дієслова на -cer беруть ç перед a: je commençais, ils avançaient.",
        ],
      },
    },
    {
      type: "heading",
      text: "Entraînement conjugaison",
    },
    {
      type: "heading",
      text: "L'imparfait : formation",
      trans: {
        en: "The imparfait: how it is formed",
        ar: "الماضي الناقص: التكوين",
        fa: "ماضی استمراری: ساخت",
        ti: "ኢምፓርፌ: ኣፈጣጥራ",
        uk: "Imparfait: утворення",
      },
    },
    {
      type: "text",
      allBullets: true,
      text: "Formation : {a}base « nous »{/a} au présent + terminaisons de l'imparfait.",
      transText: {
        en: "Formation: the {a}\"nous\" stem{/a} in the present + the imparfait endings.",
        ar: "التكوين: {a}جذع « nous »{/a} في المضارع + نهايات الماضي الناقص.",
        fa: "ساخت: {a}ریشهٔ « nous »{/a} در زمان حال + پایانه‌های ماضی استمراری.",
        ti: "ኣፈጣጥራ: ኣብ ህሉው {a}መሰረት « nous »{/a} + ናይ ኢምፓርፌ መወዳእታታት።",
        uk: "Утворення: {a}основа « nous »{/a} в теперішньому часі + закінчення imparfait.",
      },
      items: [
        "Terminaisons : {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
        "La même série de terminaisons s'utilise pour les verbes réguliers en -er, -ir et -re.",
      ],
      transItems: {
        en: [
          "Endings: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
          "The same set of endings is used for regular verbs in -er, -ir and -re.",
        ],
        ar: [
          "النهايات: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
          "تُستعمل المجموعة نفسها من النهايات للأفعال المنتظمة في -er و -ir و -re.",
        ],
        fa: [
          "پایانه‌ها: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
          "همین مجموعه پایانه‌ها برای افعال باقاعدهٔ -er و -ir و -re به کار می‌رود.",
        ],
        ti: [
          "መወዳእታታት: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
          "እዚ ሓደ ዓይነት መወዳእታታት ንስሩዓት ግስታት -er ከምኡ'ውን -ir ከምኡ'ውን -re ይጥቀም።",
        ],
        uk: [
          "Закінчення: {a}-ais / -ais / -ait / -ions / -iez / -aient{/a}",
          "Той самий набір закінчень використовується для правильних дієслів на -er, -ir та -re.",
        ],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (base : nous parlons → parl-)",
          accentForms: true,
          rows: [
            {
              pronoun: "je",
              form: "parlais",
            },
            {
              pronoun: "tu",
              form: "parlais",
            },
            {
              pronoun: "il / elle / on",
              form: "parlait",
            },
            {
              pronoun: "nous",
              form: "parlions",
            },
            {
              pronoun: "vous",
              form: "parliez",
            },
            {
              pronoun: "ils / elles",
              form: "parlaient",
            },
          ],
        },
      ],
    },
    {
      type: "text",
      label: "Exemples de bases régulières",
      transLabel: {
        en: "Examples of regular stems",
        ar: "أمثلة على الجذوع المنتظمة",
        fa: "نمونه‌های ریشهٔ باقاعده",
        ti: "ኣብነታት ስሩዓት መሰረታት",
        uk: "Приклади правильних основ",
      },
      items: [
        "finir : nous finissons → je {a}finissais{/a}",
        "prendre : nous prenons → tu {a}prenais{/a}",
        "attendre : nous attendons → ils {a}attendaient{/a}",
      ],
      transItems: {
        en: [
          "finir: nous finissons → je {a}finissais{/a}",
          "prendre: nous prenons → tu {a}prenais{/a}",
          "attendre: nous attendons → ils {a}attendaient{/a}",
        ],
        ar: [
          "finir: nous finissons → je {a}finissais{/a}",
          "prendre: nous prenons → tu {a}prenais{/a}",
          "attendre: nous attendons → ils {a}attendaient{/a}",
        ],
        fa: [
          "finir: nous finissons → je {a}finissais{/a}",
          "prendre: nous prenons → tu {a}prenais{/a}",
          "attendre: nous attendons → ils {a}attendaient{/a}",
        ],
        ti: [
          "finir: nous finissons → je {a}finissais{/a}",
          "prendre: nous prenons → tu {a}prenais{/a}",
          "attendre: nous attendons → ils {a}attendaient{/a}",
        ],
        uk: [
          "finir: nous finissons → je {a}finissais{/a}",
          "prendre: nous prenons → tu {a}prenais{/a}",
          "attendre: nous attendons → ils {a}attendaient{/a}",
        ],
      },
    },
  ],
  exercises: [],
};
