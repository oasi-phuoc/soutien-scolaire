import type { GrammarLesson } from "../../grammar-data";

export const A2_GR_BON_BIEN: GrammarLesson = {
  slug: "a2-gr-bon-bien-meilleur-mieux",
  code: "R8.2",
  level: "A2",
  title: "Bon ou bien, meilleur ou mieux ?",
  theory: [
    { type: "heading", text: "Adjectif ou adverbe ?" },
    {
      type: "grid",
      headers: ["Mot", "Nature et emploi", "Comparatif", "Superlatif"],
      rows: [
        ["bon, bonne, bons, bonnes", "adjectif : accompagne un nom", "meilleur(e)(s)", "le/la/les meilleur(e)(s)"],
        ["bien", "adverbe : accompagne un verbe", "mieux", "le mieux"],
        ["mauvais", "adjectif", "pire ou plus mauvais", "le pire ou le plus mauvais"],
      ],
      boldFirstCol: true,
    },
    { type: "highlight", label: "Exemples", items: ["C'est un {a}bon{/a} livre, mais celui-ci est {a}meilleur{/a}.", "Elle chante {a}bien{/a}, mais sa sœur chante {a}mieux{/a}.", "C'est la {a}pire{/a} erreur."] },
  ],
  exercises: [],
};
