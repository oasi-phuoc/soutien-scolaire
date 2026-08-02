import type { GrammarLesson } from "../../grammar-data";

/** Unité 47 — La comparaison avec un adjectif ou un adverbe (G4.17) */
export const A1_GR_COMPARAISON_ADJ_ADV: GrammarLesson = {
  slug: "a1-gr-comparaison-adj-adv",
  code: "G4.17",
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
  ],
  exercises: [
    {
      type: "qcm",
      title: "Comparaison",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "La ville est ___ petite que Paris.", choices: ["plus", "moins", "aussi", "meilleur"], correctIdx: 0 },
        { sentence: "Les appartements sont ___ chers.", choices: ["moins", "plus", "aussi", "pire"], correctIdx: 0 },
        { sentence: "On y vit ___ bien !", choices: ["aussi", "plus", "moins", "meilleur"], correctIdx: 0 },
        { sentence: "Il y a un ___ lycée.", choices: ["meilleur", "plus bon", "mieux", "pire"], correctIdx: 0 },
        { sentence: "Dans ma ville, c'est ___ .", choices: ["pire", "plus bon", "mieux", "aussi"], correctIdx: 0 },
        { sentence: "On parle ___ vite qu'à Strasbourg.", choices: ["plus", "meilleur", "mieux", "pire"], correctIdx: 0 },
        { sentence: "Je me sens ___ à Strasbourg.", choices: ["mieux", "plus bien", "meilleur", "aussi bien que"], correctIdx: 0 },
        { sentence: "Ils parlent moins vite que ___ .", choices: ["toi", "tu", "te", "ton"], correctIdx: 0 },
        { sentence: "aussi… que = ___", choices: ["égalité", "supériorité", "infériorité", "négation"], correctIdx: 0 },
        { sentence: "moins… que = ___", choices: ["infériorité", "supériorité", "égalité", "futur"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez plus, moins, aussi, meilleur, mieux ou pire.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Strasbourg est ___ petite que Paris.", hint: ">", answer: "plus" },
        { sentence: "Les loyers sont ___ chers.", hint: "<", answer: "moins" },
        { sentence: "La ville est ___ jolie que Paris.", hint: "=", answer: "aussi" },
        { sentence: "C'est un ___ restaurant.", hint: "≠ plus bon", answer: "meilleur" },
        { sentence: "Ici, c'est ___ .", hint: "≠ plus mauvais", answer: "pire" },
        { sentence: "On parle ___ vite qu'ici.", hint: ">", answer: "plus" },
        { sentence: "Je me sens ___ maintenant.", hint: "≠ plus bien", answer: "mieux" },
        { sentence: "On vit ___ bien qu'avant.", hint: "=", answer: "aussi" },
        { sentence: "Ils parlent ___ vite que toi.", hint: "<", answer: "moins" },
        { sentence: "La situation est ___ qu'hier.", hint: "irrégulier", answer: "pire" },
      ],
    },
  ],
};
