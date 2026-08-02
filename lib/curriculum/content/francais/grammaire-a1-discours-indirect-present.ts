import type { GrammarLesson } from "../../grammar-data";

/** Unité 82 — Le discours indirect au présent (G4.52) */
export const A1_GR_DISCOURS_INDIRECT_PRESENT: GrammarLesson = {
  slug: "a1-gr-discours-indirect-present",
  code: "G4.52",
  level: "A1",
  title: "Le discours indirect au présent",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Rapporter les paroles de quelqu'un.",
        "« Mon train a du retard. » → Elle dit que son train a du retard.",
        "Elle demande de ne pas l'attendre.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "highlight",
      label: "Dire que (affirmation)",
      items: [
        "« Je prendrai un taxi. » → Elle dit qu'elle prendra un taxi.",
        "Répéter {a}que{/a} devant chaque verbe. → … qu'elle prendra un taxi et {a}qu'{/a}elle n'arrivera pas…",
      ],
    },
    {
      type: "highlight",
      label: "Demander si / ce que / où… (questions)",
      items: [
        "Oui/non : « Est-ce que l'avion a du retard ? » → Elle demande {a}si{/a} l'avion a du retard.",
        "Qu'est-ce que : « Qu'est-ce que vous attendez ? » → Elle me demande {a}ce que{/a} j'attends.",
        "Où, quand, pourquoi… : on garde le mot interrogatif. → Elle me demande {a}où{/a} je pars.",
        "Répéter l'adverbe interrogatif devant chaque verbe ; {a}s'il / s'ils{/a}.",
        "Aussi : {a}se demander{/a}, {a}vouloir savoir{/a}.",
      ],
    },
    {
      type: "highlight",
      label: "Dire / demander de (ordre)",
      items: [
        "Verbe introducteur + {a}de{/a} + infinitif.",
        "« Attendez-moi ! » → Elle nous demande {a}de l'attendre{/a}.",
        "« Ne m'attendez pas ! » → Elle me dit {a}de ne pas{/a} l'attendre.",
        "Répéter {a}de{/a} devant chaque infinitif ; {a}ne pas{/a} devant l'infinitif.",
      ],
    },
    {
      type: "heading",
      text: "Remarques",
    },
    {
      type: "plain_list",
      items: [
        "On supprime la ponctuation du discours direct (?, !, guillemets).",
        "Adapter pronoms personnels et possessifs.",
        "« Tu peux me prêter ta valise ? » → Elle me demande si je peux {a}lui{/a} prêter {a}ma{/a} valise.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Discours indirect",
      instruction: "Choisissez la transformation correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "« Mon train a du retard. » → Elle dit ___ son train a du retard.", choices: ["que", "si", "de", "ce que"], correctIdx: 0 },
        { sentence: "« Est-ce que l'avion a du retard ? » → Elle demande ___ l'avion a du retard.", choices: ["si", "que", "de", "ce que"], correctIdx: 0 },
        { sentence: "« Qu'est-ce que vous attendez ? » → Elle me demande ___ j'attends.", choices: ["ce que", "si", "que", "de"], correctIdx: 0 },
        { sentence: "« Attendez-moi ! » → Elle nous demande ___ .", choices: ["de l'attendre", "que nous l'attendions", "si on l'attend", "qu'on attend"], correctIdx: 0 },
        { sentence: "« Ne m'attendez pas ! » → Elle me dit ___ l'attendre.", choices: ["de ne pas", "que ne pas", "ne pas de", "de pas"], correctIdx: 0 },
        { sentence: "Elle dit qu'elle prendra un taxi et ___ elle n'arrivera pas.", choices: ["qu'", "si", "de", "ce qu'"], correctIdx: 0 },
        { sentence: "« Où pars-tu ? » → Elle me demande ___ je pars.", choices: ["où", "si", "que", "ce que"], correctIdx: 0 },
        { sentence: "On enlève les ___ du discours direct.", choices: ["guillemets / ? / !", "pronoms", "verbes", "sujets"], correctIdx: 0 },
        { sentence: "« Tu peux me prêter ta valise ? » → … si je peux ___ prêter ___ valise.", choices: ["lui / ma", "me / ta", "lui / ta", "me / ma"], correctIdx: 0 },
        { sentence: "« Je prendrai un taxi. » → Elle dit qu'elle ___ un taxi.", choices: ["prendra", "prenne", "prendrait", "prendre"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez le discours indirect.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Elle dit ___ son train a du retard.", hint: "affirmation", answer: "que" },
        { sentence: "Elle demande ___ l'avion a du retard.", hint: "oui/non", answer: "si" },
        { sentence: "Elle me demande ___ j'attends.", hint: "qu'est-ce que", answer: "ce que" },
        { sentence: "Elle nous demande ___ l'attendre.", hint: "ordre", answer: "de" },
        { sentence: "Elle me dit de ___ l'attendre.", hint: "négation", answer: "ne pas" },
        { sentence: "Elle dit qu'elle prendra un taxi et ___ elle arrivera tard.", hint: "répétition", answer: "qu'" },
        { sentence: "Elle me demande ___ je pars.", hint: "où", answer: "où" },
        { sentence: "Elle me demande si je peux ___ prêter ma valise.", hint: "pronom", answer: "lui" },
        { sentence: "C'est Lisa. Elle dit que son train ___ du retard. (avoir)", hint: "présent", answer: "a" },
        { sentence: "Elle demande de ne pas ___ . (l'attendre)", hint: "infinitif", answer: "l'attendre" },
      ],
    },
  ],
};
