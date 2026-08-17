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
      trans: {
        en: "Usage",
        ar: "الاستخدام",
        fa: "کاربرد",
        pt: "Utilização",
        so: "Isticmaalka",
        ti: "ኣጠቓቕማ",
        tr: "Kullanım",
        ps: "کارونه",
        uk: "Використання",
      },
    },
    {
      type: "text",
      text: "L'article partitif est utilisé pour parler d'une quantité indéterminée  — une partie de quelque chose que l'on ne peut pas compter.",
      transText: {},
    },
    {
      type: "text",
      label: "Choses concrètes",
      text: "On utilise un poulet pour représenter le poulet entier. Tandis qu'on utilise {a}du{/a} poulet pour représenter une {a}part du poulet{/a}.",
      transText: {},  
      items: [
        "{a}du{/a} poulet",
        "{a}de la{/a} pizza",
        "{a}de l'{/a}eau.",
        ],
    },
    {
      type: "text",
      label: "Choses abstraites",
      text : "",
      transText: {},  
      items: [
        "{a}du{/a} courage",
        "{a}de la{/a} chance",
        "{a}de l'{/a}amour.",
        ],
    },
    {
      type: "heading",
      text: "Formes",
    },
        {
      type: "grid",
      headers: ["Genre", "Article", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Masculin", "{a}du{/a} (de + le)", "Je mange {a}du{/a} pain."],
        ["Féminin", "{a}de la{/a}", "Je bois {a}de la{/a} limonade."],
        ["Devant voyelle", "{a}de l'{/a}", "Je bois {a}de l'{/a}eau."],
        ["Devant h", "{a}de l'{/a}", "Je rajoute {a}de l'{/a}huile."],
        ["Pluriel", "{a}des{/a}", "Je mange {a}des{/a} légumes."],
      ],
      transHeaders: {
        en: ["Gender", "Article", "Example"],
        ar: ["الجنس", "الأداة", "مثال"],
        fa: ["جنس", "حرف تعریف", "مثال"],
        ti: ["ጾታ", "መሳለጢ", "ኣብነት"],
        uk: ["Рід", "Артикль", "Приклад"],
      },
    },
    {
      type: "grid",
      headers: ["", "Devant une consonne", "Devant une voyelle ou h"],
      boldFirstCol: true,
      rows: [
        ["Masculin", "Je bois {a}du{/a} café.", "Il fait {a}de l'{/a}aviron."],
        ["Féminin", "Il mange {a}de la{/a} soupe.", "Il faut {a}de l'{/a}huile."],
      ],
    },
    {
      type: "heading",
      text: "Négation",
    },
    {
      type: "text",
      text: "À la forme négative, le partitif est remplacé par {a}de{/a} ou {a}d'{/a}. La distinction masculin et féminin disparaît.",
    },
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
    },
    {
      type: "text",
      label: "Attention",
      text : "Avec le verbe {a}être{/a}, le partitif ne change pas.",
      transText: {},  
      items: [
        "C'est du sucre. → Ce n'est pas du sucre.",
        ],
    },
  ],
  exercises: [],
};
