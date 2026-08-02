import type { GrammarLesson } from "../../grammar-data";

/** Unité 22 — Les articles contractés (G3.2) */
export const A1_GR_ARTICLES_CONTRACTES: GrammarLesson = {
  slug: "a1-gr-articles-contractes",
  code: "G3.2",
  level: "A1",
  title: "Les articles contractés",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les articles définis ({a}le{/a}, {a}la{/a}, {a}l'{/a}, {a}les{/a}) sont souvent utilisés après les prépositions {a}à{/a} et {a}de{/a}.",
        "Pour indiquer un lieu. → Je suis à la gare. ; Il habite à côté de la Poste.",
        "Pour relier deux noms. → Le bureau de l'assistante est à droite.",
        "Avec certains verbes : {a}jouer à{/a} (+ sport/jeu), {a}jouer de{/a} (+ instrument), {a}avoir mal à{/a}… → Il joue à la balle. ; Elle joue de la flûte. ; J'ai mal à la tête.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "{a}Le{/a} et {a}les{/a} se contractent avec {a}à{/a} et {a}de{/a}. {a}La{/a} et {a}l'{/a} ne se contractent jamais.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Contraction", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["à + le → au", "Elle est au supermarché. (pas à la gare / à l'église)"],
        ["à + les → aux", "Elle est aux toilettes."],
        ["de + le → du", "Le couloir du métro. (pas de la gare / de l'assistante)"],
        ["de + les → des", "La salle des professeurs."],
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "{a}Au{/a} et {a}aux{/a} se prononcent de la même façon. → Elle a mal au dos. ; Il a mal aux dents.",
        "Liaison avec {a}aux{/a} et {a}des{/a} devant une voyelle ou un h muet. → Il a mal aux oreilles. ; La résidence des étudiants.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Articles contractés",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je suis ___ supermarché.", choices: ["au", "à le", "à la", "aux"], correctIdx: 0 },
        { sentence: "Dans le couloir ___ métro.", choices: ["du", "de le", "de la", "des"], correctIdx: 0 },
        { sentence: "Elle est ___ toilettes.", choices: ["aux", "à les", "au", "à la"], correctIdx: 0 },
        { sentence: "La salle ___ professeurs.", choices: ["des", "de les", "du", "de la"], correctIdx: 0 },
        { sentence: "Je suis ___ gare.", choices: ["à la", "au", "à le", "aux"], correctIdx: 0 },
        { sentence: "Le bureau ___ assistante.", choices: ["de l'", "du", "de le", "des"], correctIdx: 0 },
        { sentence: "Il joue ___ balle.", choices: ["à la", "au", "à le", "de la"], correctIdx: 0 },
        { sentence: "Elle joue ___ flûte.", choices: ["de la", "du", "à la", "des"], correctIdx: 0 },
        { sentence: "J'ai mal ___ tête.", choices: ["à la", "au", "à le", "de la"], correctIdx: 0 },
        { sentence: "Il a mal ___ dos.", choices: ["au", "à le", "à la", "aux"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Contractez",
      instruction: "Écrivez la forme contractée correcte (au, aux, du, des…).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Elle est ___ supermarché. (à + le)", hint: "à + le", answer: "au" },
        { sentence: "Elle est ___ toilettes. (à + les)", hint: "à + les", answer: "aux" },
        { sentence: "Le couloir ___ métro. (de + le)", hint: "de + le", answer: "du" },
        { sentence: "La salle ___ professeurs. (de + les)", hint: "de + les", answer: "des" },
        { sentence: "Je suis ___ gare. (à + la)", hint: "pas de contraction", answer: "à la" },
        { sentence: "Il habite à côté ___ Poste. (de + la)", hint: "pas de contraction", answer: "de la" },
        { sentence: "Le bureau ___ assistante. (de + l')", hint: "pas de contraction", answer: "de l'" },
        { sentence: "Elle est ___ église. (à + l')", hint: "pas de contraction", answer: "à l'" },
        { sentence: "Il a mal ___ dents. (à + les)", hint: "à + les", answer: "aux" },
        { sentence: "La résidence ___ étudiants. (de + les)", hint: "de + les", answer: "des" },
      ],
    },
  ],
};
