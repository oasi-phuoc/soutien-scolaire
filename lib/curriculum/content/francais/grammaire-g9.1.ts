import type { GrammarLesson } from "../../grammar-data";

/** Unité 44 — Le futur proche (G4.14) */
export const A1_GR_FUTUR_PROCHE: GrammarLesson = {
  slug: "a1-gr-futur-proche",
  code: "G4.14",
  level: "A1",
  title: "Le futur proche",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Exprimer un projet. → L'été prochain, je vais travailler dans un restaurant.",
        "Exprimer un événement immédiat. → Vite, on va rater le train ! ; Il va pleuvoir.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "text",
      items: [
        "Formation : {a}aller{/a} au présent + infinitif.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "aller", "infinitif"],
      boldFirstCol: true,
      rows: [
        ["je", "vais", "changer de travail."],
        ["tu", "vas", "partir à Bordeaux."],
        ["il / elle / on", "va", "acheter un appartement."],
        ["nous", "allons", "vivre en banlieue."],
        ["vous", "allez", "rester dans le quartier."],
        ["ils / elles", "vont", "s'installer à la campagne."],
      ],
    },
    {
      type: "heading",
      text: "Structure de la phrase",
    },
    {
      type: "text",
      items: [
        "Verbe pronominal : le pronom se place devant l'infinitif. → Nous allons nous inscrire à la visite guidée.",
        "Négation : {a}ne… pas{/a} encadre {a}aller{/a}. → Je ne vais pas rester ici. ; On ne va pas s'installer en banlieue.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Futur proche",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "L'été prochain, je ___ travailler dans un restaurant.", choices: ["vais", "vas", "va"], correctIdx: 0 },
        { sentence: "Vite, on ___ rater le train !", choices: ["va", "vais", "vas"], correctIdx: 0 },
        { sentence: "Il ___ pleuvoir.", choices: ["va", "vais", "vont"], correctIdx: 0 },
        { sentence: "Tu ___ partir à Bordeaux.", choices: ["vas", "vais", "va"], correctIdx: 0 },
        { sentence: "Nous ___ vivre en banlieue.", choices: ["allons", "allez", "vont"], correctIdx: 0 },
        { sentence: "Ils ___ s'installer à la campagne.", choices: ["vont", "allons", "allez"], correctIdx: 0 },
        { sentence: "Nous allons ___ inscrire.", choices: ["nous", "se", "me"], correctIdx: 0 },
        { sentence: "Je ___ rester ici.", choices: ["ne vais pas", "vais ne pas", "ne pas vais"], correctIdx: 0 },
        { sentence: "On ne va pas ___ en banlieue.", choices: ["s'installer", "nous installer", "installer"], correctIdx: 0 },
        { sentence: "Formation : aller au ___ + infinitif.", choices: ["présent", "imparfait", "futur"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez aller au présent ou le pronom / la négation.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ changer de travail.", hint: "aller", answer: "vais" },
        { sentence: "Tu ___ partir à Bordeaux.", hint: "aller", answer: "vas" },
        { sentence: "Elle ___ acheter un appartement.", hint: "aller", answer: "va" },
        { sentence: "Nous ___ vivre en banlieue.", hint: "aller", answer: "allons" },
        { sentence: "Vous ___ rester dans le quartier.", hint: "aller", answer: "allez" },
        { sentence: "Ils ___ s'installer à la campagne.", hint: "aller", answer: "vont" },
        { sentence: "Nous allons ___ inscrire.", hint: "pronom", answer: "nous" },
        { sentence: "Je ne ___ pas rester ici.", hint: "aller", answer: "vais" },
        { sentence: "On va ___ le train ! (rater)", hint: "infinitif", answer: "rater" },
        { sentence: "Il ___ pleuvoir.", hint: "aller", answer: "va" },
      ],
    },
  ],
};
