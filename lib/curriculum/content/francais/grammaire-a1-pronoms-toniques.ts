import type { GrammarLesson } from "../../grammar-data";

/** Unité 52 — Les pronoms toniques (G4.22) */
export const A1_GR_PRONOMS_TONIQUES: GrammarLesson = {
  slug: "a1-gr-pronoms-toniques",
  code: "G4.22",
  level: "A1",
  title: "Les pronoms toniques",
  theory: [
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "grid",
      headers: ["Pronom sujet", "Pronom tonique", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["je", "moi", "— Qui est là ? — Moi !"],
        ["tu", "toi", "Je suis français. Et toi ?"],
        ["il", "lui", "Stéphane, c'est lui !"],
        ["elle", "elle", "Il habite chez elle."],
        ["on", "nous", "— Vous êtes suisses ? — Non, nous, on est belges."],
        ["nous", "nous", "Tu aimes Paris ? Nous aussi !"],
        ["vous", "vous", "J'ai un message pour vous."],
        ["ils", "eux", "Tu travailles avec eux ?"],
        ["elles", "elles", "Ces valises sont à elles."],
      ],
    },
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les pronoms toniques remplacent seulement des personnes. Ils ne sont pas sujets du verbe.",
        "Répondre rapidement ou compléter une information. → Qui est italien ? — Nous ! ; J'ai faim ! — Moi aussi !",
        "Insister sur une différence. → Je suis parisien et toi ? — Moi, je suis lyonnais.",
        "Présenter une personne. → C'est Jérôme ? — Oui, c'est lui.",
        "Après une préposition ({a}avec, pour, chez…{/a}). → Je voyage avec eux. ; J'habite chez elle.",
        "Possession : {a}être + à + pronom tonique{/a}. → La valise noire est à lui.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Liaison avec {a}chez{/a}. → J'habite chez elle.",
        "Enchaînement avec {a}avec{/a} et {a}pour{/a}. → Je voyage avec eux. ; Il travaille pour elle.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms toniques",
      instruction: "Choisissez le pronom correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "— Qui est là ? — ___ !", choices: ["Moi", "Je", "Me", "Lui"], correctIdx: 0 },
        { sentence: "Je suis français. Et ___ ?", choices: ["toi", "tu", "te", "lui"], correctIdx: 0 },
        { sentence: "Stéphane, c'est ___ !", choices: ["lui", "il", "le", "eux"], correctIdx: 0 },
        { sentence: "Il habite chez ___ .", choices: ["elle", "la", "lui", "ils"], correctIdx: 0 },
        { sentence: "Tu travailles avec ___ ?", choices: ["eux", "ils", "les", "leur"], correctIdx: 0 },
        { sentence: "Ces valises sont à ___ .", choices: ["elles", "ils", "les", "leur"], correctIdx: 0 },
        { sentence: "J'ai un message pour ___ .", choices: ["vous", "tu", "te", "votre"], correctIdx: 0 },
        { sentence: "— J'ai faim ! — ___ aussi !", choices: ["Moi", "Je", "Me", "Lui"], correctIdx: 0 },
        { sentence: "La valise est à ___ .", choices: ["lui", "il", "le", "son"], correctIdx: 0 },
        { sentence: "___ , je suis lyonnais.", choices: ["Moi", "Je", "Me", "Mon"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez moi, toi, lui, elle, nous, vous, eux ou elles.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "— Qui est italien ? — ___ !", hint: "1re pl.", answer: "Nous" },
        { sentence: "C'est Jérôme ? — Oui, c'est ___ .", hint: "il", answer: "lui" },
        { sentence: "Je voyage avec ___ . (Hélène et Jacques)", hint: "ils", answer: "eux" },
        { sentence: "J'habite chez ___ . (une amie)", hint: "elle", answer: "elle" },
        { sentence: "Tu aimes Paris ? ___ aussi !", hint: "nous", answer: "Nous" },
        { sentence: "Ces valises sont à ___ . (mes sœurs)", hint: "elles", answer: "elles" },
        { sentence: "Je suis parisien et ___ ?", hint: "tu", answer: "toi" },
        { sentence: "Non, ce n'est pas ___ ; c'est lui.", hint: "je", answer: "moi" },
        { sentence: "J'ai un message pour ___ .", hint: "vous", answer: "vous" },
        { sentence: "Elle est à ___ . (Stéphane)", hint: "il", answer: "lui" },
      ],
    },
  ],
};
