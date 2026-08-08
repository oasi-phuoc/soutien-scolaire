import type { GrammarLesson } from "../../grammar-data";

/** Unité 22 — Les articles contractés (G4.2) */
export const A1_GR_ARTICLES_CONTRACTES: GrammarLesson = {
  slug: "a1-gr-articles-contractes",
  code: "G4.2",
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
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "{a}Lieu{/a}",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "Pour indiquer un lieu, on utilise la préposition {a}à{/a} ou {a}de{/a}.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "Je suis à la gare.",
        "Il habite à côté de la Poste.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "{a}Noms{/a}",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "Pour relier deux noms ensemble, on utilise la préposition {a}de{/a}.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "Le bureau de la maîtresse",
        "La salle de sport",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "{a}Verbes{/a}",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "Certains verbes ont besoin de ces prépositions.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "Exemple"],
      boldFirstCol: true,
      colWidths: ["42%", "58%"],
      rows: [
        ["Jouer {a}à{/a} + sport", "Marie joue à la balle."],
        ["Jouer {a}de{/a} + instrument", "Julie joue de la flûte."],
        ["Avoir mal {a}à{/a} + partie du corps", "Nous avons mal à la tête."],
      ],
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "Quand les prépositions {a}à{/a} et {a}de{/a} sont suivies de l'article {a}le{/a} ou {a}les{/a}, elles se contractent obligatoirement. {a}La{/a} et {a}l'{/a} ne se contractent jamais.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "Contraction", "Exemple"],
      boldFirstCol: true,
      colWidths: ["28%", "24%", "48%"],
      rows: [
        ["à + le", "{a}au{/a}", "Elle est au supermarché."],
        ["à + les", "{a}aux{/a}", "Elle est aux toilettes."],
        ["de + le", "{a}du{/a}", "Le couloir du métro."],
        ["de + les", "{a}des{/a}", "La salle des professeurs."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "{a}La{/a} et {a}l'{/a} ne se contractent jamais.",
      ],
      noBulletItems: [0],
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
        { sentence: "Je suis ___ supermarché.", choices: ["au", "à le", "à la"], correctIdx: 0 },
        { sentence: "Dans le couloir ___ métro.", choices: ["du", "de le", "de la"], correctIdx: 0 },
        { sentence: "Elle est ___ toilettes.", choices: ["aux", "à les", "au"], correctIdx: 0 },
        { sentence: "La salle ___ professeurs.", choices: ["des", "de les", "du"], correctIdx: 0 },
        { sentence: "Je suis ___ gare.", choices: ["à la", "au", "à le"], correctIdx: 0 },
        { sentence: "Le bureau ___ assistante.", choices: ["de l'", "du", "de le"], correctIdx: 0 },
        { sentence: "Il joue ___ balle.", choices: ["à la", "au", "à le"], correctIdx: 0 },
        { sentence: "Elle joue ___ flûte.", choices: ["de la", "du", "à la"], correctIdx: 0 },
        { sentence: "J'ai mal ___ tête.", choices: ["à la", "au", "à le"], correctIdx: 0 },
        { sentence: "Il a mal ___ dos.", choices: ["au", "à le", "à la"], correctIdx: 0 },
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
