import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L14: GrammarLesson = {
  slug: "a1-gr-l14",
  code: "R3.1",
  level: "A1",
  title: "Les articles partitifs et la quantité",
  theory: [
    { type: "heading", text: "Les articles partitifs" },
    {
      type: "plain_list",
      items: [
        "Les articles partitifs expriment une quantité indéterminée — une partie de quelque chose.",
      ],
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
    },
    { type: "heading", text: "Partitif vs défini", sub: true },
    {
      type: "grid",
      headers: ["Partitif (quantité indéterminée)", "Défini (chose précise)"],
      rows: [
        ["Je mange {a}du{/a} pain.", "Je mange {a}le{/a} pain que tu as fait."],
        ["Elle boit {a}de la{/a} soupe.", "Elle boit {a}la{/a} soupe de sa mère."],
      ],
    },
    { type: "heading", text: "Négation : partitif → de / d'", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Affirmatif", "Négatif"],
      rows: [
        ["Je mange du pain.", "Je ne mange {a}pas de{/a} pain."],
        ["Tu bois de la soupe.", "Tu ne bois {a}pas de{/a} soupe."],
        ["Elle prend de l'huile.", "Elle ne prend {a}pas d'{/a}huile."],
        ["Ils ont des enfants.", "Ils n'ont {a}pas d'{/a}enfants."],
      ],
    },
    { type: "heading", text: "La quantité déterminée", sub: true },
    {
      type: "plain_list",
      items: ["Avec une quantité précise : {a}quantité + de + nom{/a} (sans article)."],
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "un kilo {a}de{/a} pommes",
        "une bouteille {a}d'{/a}eau",
        "beaucoup {a}de{/a} lait",
        "un peu {a}de{/a} sucre",
        "assez {a}de{/a} pain",
        "trop {a}de{/a} sel",
      ],
    },
  ],
  exercises: [],
};
