import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_L39: GrammarLesson = {
  slug: "a2-gr-l39",
  code: "R8.1",
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
  ],
  exercises: [],
};
