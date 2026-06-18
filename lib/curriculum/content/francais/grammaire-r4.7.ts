import type { GrammarLesson } from "../../grammar-data";

export const A1_GR_L24: GrammarLesson = {
  slug: "a1-gr-l24",
  code: "R4.7",
  level: "A1",
  title: "Le comparatif et le superlatif",
  theory: [
    { type: "heading", text: "Le comparatif" },
    {
      type: "plain_list",
      items: [
        "Le comparatif permet de comparer deux éléments.",
        "Structure : {a}plus / aussi / moins + adjectif + que{/a}",
      ],
    },
    {
      type: "grid",
      headers: ["Type", "Structure", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["{a}Supériorité{/a}", "plus + adj + que", "Paris est {a}plus grande que{/a} Lyon."],
        ["{a}Égalité{/a}", "aussi + adj + que", "Ce film est {a}aussi intéressant que{/a} l'autre."],
        ["{a}Infériorité{/a}", "moins + adj + que", "Ce resto est {a}moins cher que{/a} l'autre."],
      ],
    },
    { type: "heading", text: "Comparatif de quantité (verbe ou nom)", sub: true },
    {
      type: "grid",
      headers: ["Type", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["plus de + nom", "J'ai {a}plus de{/a} temps que toi."],
        ["autant de + nom", "Elle a {a}autant de{/a} travail que moi."],
        ["moins de + nom", "Il a {a}moins d'{/a}argent que nous."],
      ],
    },
    { type: "heading", text: "Le superlatif" },
    {
      type: "plain_list",
      items: [
        "Le superlatif exprime le degré le plus élevé ou le plus bas.",
        "Structure : {a}le / la / les + plus / moins + adjectif{/a}",
      ],
    },
    {
      type: "grid",
      headers: ["Type", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["le/la/les + plus + adj", "C'est {a}le plus beau{/a} quartier de la ville."],
        ["le/la/les + moins + adj", "C'est {a}la moins chère{/a} des options."],
      ],
    },
    {
      type: "highlight",
      label: "Formes irrégulières",
      items: [
        "{a}bon{/a} → comparatif : {a}meilleur{/a} (pas : plus bon)",
        "{a}bien{/a} → comparatif : {a}mieux{/a} (pas : plus bien)",
        "{a}mauvais{/a} → comparatif : {a}pire{/a} ou {a}plus mauvais{/a}",
        "C'est {a}meilleur{/a} que ça. / Il va {a}mieux{/a} aujourd'hui.",
      ],
    },
  ],
  exercises: [],
};
