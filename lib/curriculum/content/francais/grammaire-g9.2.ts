import type { GrammarLesson } from "../../grammar-data";

/** G9.2 — Le futur simple */
export const A1_GR_FUTUR_SIMPLE: GrammarLesson = {
  slug: "a1-gr-futur-simple",
  code: "G9.2",
  level: "A1",
  title: "Le futur simple",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Le futur simple sert pour des événements futurs, dans des situations de communication précises, souvent avec une idée de certitude.",
        "Prévision : Demain, il pleuvra dans toutes les régions.",
        "Promesse / résolution : Je te téléphonerai demain à 8 heures.",
        "Consigne ou refus catégorique : Vous prendrez ce médicament pendant un mois. ; Je ne partirai pas avec toi !",
        "Programme / horaire : Ce voyage commencera à Athènes.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "text",
      items: [
        "Infinitif (radical) + terminaisons {a}-ai, -as, -a, -ons, -ez, -ont{/a}. → je commencerai ; je partirai.",
      ],
    },
    {
      type: "grid",
      headers: [
        "",
        "radical",
        "terminaison",
        "suite",
      ],
      boldFirstCol: true,
      rows: [
        [
          "je",
          "changer",
          "ai",
          "d'habitudes alimentaires.",
        ],
        [
          "tu",
          "manger",
          "as",
          "moins.",
        ],
        [
          "il / elle / on",
          "préparer",
          "a",
          "des repas légers.",
        ],
        [
          "nous",
          "marcher",
          "ons",
          "une heure par jour.",
        ],
        [
          "vous",
          "choisir",
          "ez",
          "des produits frais.",
        ],
        [
          "ils / elles",
          "maigrir",
          "ont",
          "sûrement.",
        ],
      ],
    },
    {
      type: "note",
      text: "Verbes en {a}-e{/a} : on enlève le {a}e{/a} avant les terminaisons. → prendre → je prendrai.",
    },
    {
      type: "text",
      label: "Cas particuliers (-er)",
      items: [
        "{a}-oyer / -uyer{/a} : y → i. → nettoyer → tu nettoieras.",
        "{a}-ayer{/a} : deux formes possibles. → payer → on paiera / on payera.",
        "{a}-eter / -eler{/a} : à partir du {a}je{/a} du présent + {a}r{/a} + terminaison. → appeler → j'appellerai ; acheter → nous achèterons.",
      ],
    },
    {
      type: "heading",
      text: "Radicaux irréguliers",
    },
    {
      type: "grid",
      headers: [
        "Infinitif",
        "Exemple",
      ],
      boldFirstCol: true,
      rows: [
        [
          "aller",
          "il ira",
        ],
        [
          "avoir",
          "nous aurons",
        ],
        [
          "courir",
          "tu courras",
        ],
        [
          "devoir",
          "elle devra",
        ],
        [
          "envoyer",
          "j'enverrai",
        ],
        [
          "être",
          "vous serez",
        ],
        [
          "faire",
          "nous ferons",
        ],
        [
          "falloir",
          "il faudra",
        ],
        [
          "mourir",
          "on mourra",
        ],
        [
          "pleuvoir",
          "il pleuvra",
        ],
        [
          "pouvoir",
          "je pourrai",
        ],
        [
          "recevoir",
          "on recevra",
        ],
        [
          "savoir",
          "tu sauras",
        ],
        [
          "tenir",
          "elle tiendra",
        ],
        [
          "venir",
          "je viendrai",
        ],
        [
          "voir",
          "ils verront",
        ],
        [
          "vouloir",
          "elles voudront",
        ],
      ],
    },
    {
      type: "note",
      text: "Attention à la différence entre futur proche et futur simple.",
    },
    {
      type: "heading",
      text: "Les bases irrégulières du futur simple",
      trans: {
        en: "Irregular stems of the simple future",
        ar: "الجذور الشاذة للمستقبل البسيط",
        fa: "ریشه‌های بی‌قاعده‌ی آینده‌ی ساده",
        ti: "ዘይስሩዓት መሰረታት ናይ ቀሊል መጻኢ",
        uk: "Неправильні основи простого майбутнього",
      },
    },
    {
      type: "text",
      text: "La base change, mais les terminaisons restent toujours -ai, -as, -a, -ons, -ez, -ont.",
      transText: {
        en: "The stem changes, but the endings always stay -ai, -as, -a, -ons, -ez, -ont.",
        ar: "يتغير الجذر، لكن النهايات تبقى دائماً -ai, -as, -a, -ons, -ez, -ont.",
        fa: "ریشه تغییر می‌کند، اما پایانه‌ها همیشه -ai, -as, -a, -ons, -ez, -ont باقی می‌مانند.",
        ti: "እቲ መሰረት ይቕየር፣ ግን እቶም መወዳእታታት ኩሉ ግዜ -ai, -as, -a, -ons, -ez, -ont ኮይኖም ይተርፉ።",
        uk: "Основа змінюється, але закінчення завжди залишаються -ai, -as, -a, -ons, -ez, -ont.",
      },
    },
    {
      type: "grid",
      headers: [
        "Verbe",
        "Base",
        "Exemple",
      ],
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
      rows: [
        [
          "être",
          "ser-",
          "je serai",
        ],
        [
          "avoir",
          "aur-",
          "tu auras",
        ],
        [
          "aller",
          "ir-",
          "il ira",
        ],
        [
          "courir",
          "courr-",
          "nous courrons",
        ],
        [
          "devoir",
          "devr-",
          "vous devrez",
        ],
        [
          "envoyer",
          "enverr-",
          "ils enverront",
        ],
        [
          "faire",
          "fer-",
          "je ferai",
        ],
        [
          "falloir",
          "faudr-",
          "il faudra",
        ],
        [
          "pouvoir",
          "pourr-",
          "tu pourras",
        ],
        [
          "recevoir",
          "recevr-",
          "elle recevra",
        ],
        [
          "savoir",
          "saur-",
          "nous saurons",
        ],
        [
          "tenir",
          "tiendr-",
          "vous tiendrez",
        ],
        [
          "venir",
          "viendr-",
          "ils viendront",
        ],
        [
          "voir",
          "verr-",
          "je verrai",
        ],
        [
          "vouloir",
          "voudr-",
          "tu voudras",
        ],
      ],
      boldFirstCol: true,
    },
    {
      type: "heading",
      text: "Entraînement conjugaison",
    },
    {
      type: "heading",
      text: "Le futur simple : formation",
      trans: {
        en: "The simple future: how it is formed",
        ar: "المستقبل البسيط: التكوين",
        fa: "آیندهٔ ساده: ساخت",
        ti: "ቀሊል መጻኢ: ኣፈጣጥራ",
        uk: "Futur simple: утворення",
      },
    },
    {
      type: "text",
      allBullets: true,
      text: "Formation régulière : {a}infinitif{/a} + terminaisons du futur.",
      transText: {
        en: "Regular formation: {a}infinitive{/a} + the future endings.",
        ar: "التكوين المنتظم: {a}المصدر{/a} + نهايات المستقبل.",
        fa: "ساخت باقاعده: {a}مصدر{/a} + پایانه‌های آینده.",
        ti: "ስሩዕ ኣፈጣጥራ: {a}ስም-ግሲ{/a} + ናይ መጻኢ መወዳእታታት።",
        uk: "Правильне утворення: {a}інфінітив{/a} + закінчення майбутнього часу.",
      },
      items: [
        "Terminaisons : {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
        "Pour les verbes en -re : supprimer le -e final avant d'ajouter les terminaisons.",
      ],
      transItems: {
        en: [
          "Endings: {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
          "For verbs in -re: drop the final -e before adding the endings.",
        ],
        ar: [
          "النهايات: {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
          "للأفعال في -re: احذف الـ -e النهائية قبل إضافة النهايات.",
        ],
        fa: [
          "پایانه‌ها: {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
          "برای افعال -re: پیش از افزودن پایانه‌ها، -e پایانی را حذف کنید.",
        ],
        ti: [
          "መወዳእታታት: {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
          "ንግስታት -re: መወዳእታታት ቅድሚ ምውሳኽ እቲ ናይ መወዳእታ -e ኣወግድ።",
        ],
        uk: [
          "Закінчення: {a}-ai / -as / -a / -ons / -ez / -ont{/a}",
          "Для дієслів на -re: відкиньте кінцеве -e перед додаванням закінчень.",
        ],
      },
    },
    {
      type: "table",
      tables: [
        {
          verb: "parler (futur simple)",
          accentForms: true,
          rows: [
            {
              pronoun: "je",
              form: "parlerai",
            },
            {
              pronoun: "tu",
              form: "parleras",
            },
            {
              pronoun: "il / elle / on",
              form: "parlera",
            },
            {
              pronoun: "nous",
              form: "parlerons",
            },
            {
              pronoun: "vous",
              form: "parlerez",
            },
            {
              pronoun: "ils / elles",
              form: "parleront",
            },
          ],
        },
        {
          verb: "finir (futur simple)",
          accentForms: true,
          rows: [
            {
              pronoun: "je",
              form: "finirai",
            },
            {
              pronoun: "tu",
              form: "finiras",
            },
            {
              pronoun: "il / elle / on",
              form: "finira",
            },
            {
              pronoun: "nous",
              form: "finirons",
            },
            {
              pronoun: "vous",
              form: "finirez",
            },
            {
              pronoun: "ils / elles",
              form: "finiront",
            },
          ],
        },
      ],
    },
    {
      type: "text",
      label: "Particularités orthographiques",
      transLabel: {
        en: "Spelling particularities",
        ar: "خصوصيات إملائية",
        fa: "ویژگی‌های املایی",
        ti: "ናይ ኣጸሓሕፋ ፍሉያት",
        uk: "Орфографічні особливості",
      },
      items: [
        "Les verbes en -re perdent leur e final : prendre → je prendrai.",
        "Les verbes en -yer : le y devient i (nettoyer → je nettoierai), sauf envoyer → j'enverrai.",
        "Certains verbes en -eler et -eter doublent la consonne : appeler → j'appellerai ; jeter → je jetterai.",
        "Exception : acheter → j'achèterai.",
      ],
      transItems: {
        en: [
          "Verbs in -re lose their final e: prendre → je prendrai.",
          "-yer verbs: y becomes i (nettoyer → je nettoierai), except envoyer → j'enverrai.",
          "Some verbs in -eler and -eter double the consonant: appeler → j'appellerai; jeter → je jetterai.",
          "Exception: acheter → j'achèterai.",
        ],
        ar: [
          "تفقد الأفعال في -re الـ e النهائية: prendre → je prendrai.",
          "أفعال -yer: y تصبح i، ما عدا envoyer → j'enverrai.",
          "بعض الأفعال في -eler و -eter تضاعف الحرف الساكن.",
          "استثناء: acheter → j'achèterai.",
        ],
        fa: [
          "افعال -re حرف e پایانی خود را از دست می‌دهند: prendre → je prendrai.",
          "افعال -yer: y به i تبدیل می‌شود، به‌جز envoyer → j'enverrai.",
          "برخی افعال -eler و -eter صامت را دو برابر می‌کنند.",
          "استثنا: acheter → j'achèterai.",
        ],
        ti: [
          "ግስታት -re ናይ መወዳእታ e ይስእኑ: prendre → je prendrai.",
          "ግስታት -yer: y ናብ i ትቕየር፣ ሓደ ሓደ ከም envoyer → j'enverrai ግድን።",
          "ገሊኦም ግስታት -eler ከምኡ'ውን -eter ነቲ ተነባቢ የብዝሑ።",
          "ብዘይካ: acheter → j'achèterai.",
        ],
        uk: [
          "Дієслова на -re втрачають кінцеве e: prendre → je prendrai.",
          "Дієслова на -yer: y стає i, крім envoyer → j'enverrai.",
          "Деякі дієслова на -eler та -eter подвоюють приголосний.",
          "Виняток: acheter → j'achèterai.",
        ],
      },
    },
    {
      type: "note",
      text: "Attention : il s'agit de généralités. Il y a des exceptions (par exemple : courir → je courrai). Quand vous apprenez un nouveau verbe, vérifiez sa forme au futur simple.",
    },
  ],
  exercises: [],
};
