import type { GrammarLesson } from "../../grammar-data";

/** Unité 50 — L'expression du temps : moment précis ou habitude (G4.20) */
export const A1_GR_EXPRESSION_TEMPS_MOMENT: GrammarLesson = {
  slug: "a1-gr-expression-temps-moment",
  code: "G4.20",
  level: "A1",
  title: "L'expression du temps : moment précis ou habitude",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "On utilise des expressions de temps pour indiquer le moment précis d'une action ou pour parler d'une habitude.",
        "Exemple : Rendez-vous à la gare du Nord, le 22 mars à 17 heures 15.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Moment précis",
    },
    {
      type: "grid",
      headers: ["", "Préposition / forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["une heure", "à", "Il arrive à 9 heures."],
        ["un jour", "nom sans article", "Nous avons une réunion lundi."],
        ["une date", "le", "On est le 25 mai."],
        ["un mois, une année", "en", "On est en mars, en 2015."],
        ["une saison", "au / en", "au printemps ; en été ; en automne ; en hiver"],
        ["un siècle", "au", "Nous sommes au XXIe siècle."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Période liée au moment présent : adjectif démonstratif {a}ce, cet, cette, ces{/a}. → ce matin ; cet après-midi ; cette semaine ; ces jours-ci.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Habitude",
    },
    {
      type: "plain_list",
      items: [
        "Articles {a}le, la, l', les{/a} avec les jours et les moments de la journée.",
        "Le samedi, je vais à la piscine. (= tous les samedis)",
        "Je ne travaille pas la nuit. ; J'ai beaucoup de réunions l'après-midi. ; Je travaille souvent les jours fériés.",
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
        "Liaison avec {a}en{/a} devant mois ou saisons en voyelle ou {a}h{/a} muet. → en avril ; en août ; en octobre ; en été ; en automne ; en hiver.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Expression du temps",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il arrive ___ 9 heures.", choices: ["à", "en", "le", "au"], correctIdx: 0 },
        { sentence: "Nous avons une réunion ___ .", choices: ["lundi", "le lundi", "en lundi", "au lundi"], correctIdx: 0 },
        { sentence: "On est ___ 25 mai.", choices: ["le", "à", "en", "au"], correctIdx: 0 },
        { sentence: "On est ___ mars.", choices: ["en", "à", "le", "au"], correctIdx: 0 },
        { sentence: "On est ___ 2015.", choices: ["en", "à", "le", "au"], correctIdx: 0 },
        { sentence: "___ printemps, les fleurs poussent.", choices: ["Au", "En", "Le", "À"], correctIdx: 0 },
        { sentence: "Nous sommes ___ XXIe siècle.", choices: ["au", "en", "le", "à"], correctIdx: 0 },
        { sentence: "J'ai eu des rendez-vous ___ matin.", choices: ["ce", "le", "en", "à"], correctIdx: 0 },
        { sentence: "___ samedi, je vais à la piscine. (habitude)", choices: ["Le", "En", "À", "Ce"], correctIdx: 0 },
        { sentence: "Je ne travaille pas ___ nuit.", choices: ["la", "en", "à", "ce"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez à, en, le, la, l', les, au, ce, cet ou cette.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Rendez-vous ___ 17 heures.", hint: "heure", answer: "à" },
        { sentence: "On est ___ 22 mars.", hint: "date", answer: "le" },
        { sentence: "On est ___ été.", hint: "saison", answer: "en" },
        { sentence: "___ printemps, je voyage.", hint: "saison", answer: "Au" },
        { sentence: "J'ai beaucoup de réunions ___ après-midi. (habitude)", hint: "article", answer: "l'" },
        { sentence: "Je travaille ___ jours fériés.", hint: "habitude", answer: "les" },
        { sentence: "J'ai eu des rendez-vous ___ semaine.", hint: "démonstratif", answer: "cette" },
        { sentence: "___ après-midi, je suis libre.", hint: "démonstratif", answer: "Cet" },
        { sentence: "Nous sommes ___ XXIe siècle.", hint: "siècle", answer: "au" },
        { sentence: "___ nuit, je dors mal. (habitude)", hint: "article", answer: "La" },
      ],
    },
  ],
};
