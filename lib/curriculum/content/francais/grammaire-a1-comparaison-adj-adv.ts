import type { GrammarLesson } from "../../grammar-data";
import { A2_GR_L39 } from "./grammaire-r4.27";

/** Unité 47 — La comparaison avec un adjectif ou un adverbe (G10.1) */
export const A1_GR_COMPARAISON_ADJ_ADV: GrammarLesson = {
  slug: "a1-gr-comparaison-adj-adv",
  code: "G10.1",
  level: "A1",
  title: "La comparaison avec un adjectif ou un adverbe",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "On compare des personnes, des choses, des actions ou des qualités avec un adjectif, un adverbe, un nom ou un verbe.",
        "La comparaison peut exprimer la supériorité (>), l'infériorité (<) ou l'égalité (=).",
        "Exemple : Les appartements sont moins chers, la ville est plus petite et on y vit aussi bien !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes avec un adjectif",
    },
    {
      type: "plain_list",
      items: [
        "Même structure pour adjectif et adverbe, avec {a}que{/a} / {a}qu'{/a}.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        [">", "plus… que", "plus petite que Paris"],
        ["<", "moins… que", "moins chère que Paris"],
        ["=", "aussi… que", "aussi jolie que Paris"],
      ],
    },
    {
      type: "note",
      text: "✗ plus bon(ne)(s) → ✓ {a}meilleur(e)(s){/a}. → Il y a un meilleur lycée.",
    },
    {
      type: "note",
      text: "{a}Plus mauvais{/a} ou {a}pire{/a}. → Dans ma ville, c'est pire.",
    },
    {
      type: "heading",
      text: "Formes avec un adverbe",
    },
    {
      type: "grid",
      headers: ["", "Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        [">", "plus… que", "plus vite qu'à Strasbourg"],
        ["<", "moins… que", "moins vite qu'à Strasbourg"],
        ["=", "aussi… que", "aussi vite qu'à Strasbourg"],
      ],
    },
    {
      type: "note",
      text: "✗ plus bien → ✓ {a}mieux{/a}. → Je me sens mieux à Strasbourg.",
    },
    {
      type: "note",
      text: "Pour comparer des personnes, on emploie souvent un pronom tonique. → Ils parlent moins vite que toi.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Liaison après {a}plus{/a} et {a}moins{/a} devant voyelle ou {a}h{/a} muet. → plus agréable ; moins intéressante.",
      ],
      noBulletItems: [0],
    },
    ...A2_GR_L39.theory,
  ],
  exercises: [],
};
