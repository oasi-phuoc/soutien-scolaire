import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L39: GrammarLesson = {
  slug: "a2-gr-l39",
  code: "G4.27",
  level: "A2",
  title: "Le comparatif",
  theory: [
    { type: "heading", text: "Le comparatif" },
    {
      type: "plain_list",
      items: [
        "Le comparatif sert à {a}comparer{/a} deux éléments.",
        "Il existe 3 degrés : {a}supériorité, égalité, infériorité{/a}.",
      ],
    },
    {
      type: "grid",
      headers: ["Degré", "Avec adjectif / adverbe", "Avec verbe", "Avec nom"],
      boldFirstCol: true,
      rows: [
        ["{a}Supériorité{/a}", "{a}plus … que{/a}", "verbe + {a}plus que{/a}", "{a}plus de … que{/a}"],
        ["{a}Égalité{/a}", "{a}aussi … que{/a}", "verbe + {a}autant que{/a}", "{a}autant de … que{/a}"],
        ["{a}Infériorité{/a}", "{a}moins … que{/a}", "verbe + {a}moins que{/a}", "{a}moins de … que{/a}"],
      ],
    },
    { type: "heading", text: "Comparatif d'adjectifs", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Degré", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Supériorité", "Paris est {a}plus grande que{/a} Lyon."],
        ["Égalité", "Cette ville est {a}aussi belle que{/a} l'autre."],
        ["Infériorité", "Ce restaurant est {a}moins cher que{/a} celui-là."],
      ],
    },
    { type: "heading", text: "Comparatif de verbes", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Degré", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Supériorité", "Je travaille {a}plus que{/a} toi."],
        ["Égalité", "Il dort {a}autant que{/a} moi."],
        ["Infériorité", "Elle mange {a}moins que{/a} lui."],
      ],
    },
    { type: "heading", text: "Comparatif de noms (quantité)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Degré", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Supériorité", "Il a {a}plus de{/a} patience {a}que{/a} moi."],
        ["Égalité", "J'ai {a}autant de{/a} travail {a}que{/a} toi."],
        ["Infériorité", "Elle gagne {a}moins d'{/a}argent {a}que{/a} lui."],
      ],
    },
    { type: "heading", text: "Formes irrégulières (à mémoriser)", sub: true, accent: true },
    {
      type: "grid",
      headers: ["Adjectif / adverbe", "Comparatif de supériorité", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}bon(ne){/a}", "{a}meilleur(e)(s){/a} que", "Ce vin est {a}meilleur que{/a} l'autre. ({s}plus bon{/s})"],
        ["{a}mauvais(e){/a}", "{a}pire{/a} que (ou plus mauvais)", "C'est {a}pire que{/a} je pensais."],
        ["{a}bien{/a}", "{a}mieux{/a} que", "Elle parle {a}mieux que{/a} lui. ({s}plus bien{/s})"],
        ["{a}peu{/a}", "{a}moins{/a} que", "Je dors {a}moins que{/a} toi."],
      ],
    },
    {
      type: "highlight",
      label: "Le superlatif (pour aller plus loin)",
      items: [
        "Superlatif relatif : le / la / les + {a}plus / moins{/a} + adj.",
        "C'est {a}le plus beau{/a} film de l'année.",
        "Elle est {a}la moins rapide{/a} du groupe.",
        "Superlatif de bon : {a}le meilleur / la meilleure{/a}.",
      ],
    },
  ],
  exercises: [],
};
