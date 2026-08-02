import type { GrammarLesson } from "../../grammar-data";

/** Unité 49 — Le superlatif (G4.19) */
export const A1_GR_SUPERLATIF: GrammarLesson = {
  slug: "a1-gr-superlatif",
  code: "G4.19",
  level: "A1",
  title: "Le superlatif",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Le superlatif exprime le degré maximum ou minimum d'une intensité, d'une quantité ou d'une qualité.",
        "C'est le meilleur pâtissier de France. (= il n'y a pas de pâtissier meilleur que lui.)",
        "C'est l'émission qui a le plus de spectateurs.",
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
        "Avec un adjectif : C'est la région la moins visitée.",
        "Avec un adverbe : C'est l'émission qui dure le plus longtemps.",
        "Avec un nom : C'est la région où il y a le plus de soleil.",
        "Avec un verbe : C'est la région où il pleut le moins.",
        "Complément introduit par {a}de / de la / de l' / du / des{/a}. → La plus belle région de France. ; Le plus grand cabaret du monde.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Remarques",
    },
    {
      type: "plain_list",
      items: [
        "Adjectif après le nom : on répète l'article. → C'est le programme le moins intéressant de la soirée.",
        "Adjectif avant le nom : deux possibilités. → C'est la région la plus belle de France. / C'est la plus belle région de France.",
        "✗ le plus bon → ✓ {a}le / la / les meilleur(e)(s){/a}. → Ce cuisinier est le meilleur.",
        "✗ le plus bien → ✓ {a}le mieux{/a}. → C'est lui qui cuisine le mieux.",
        "Pour un aspect négatif : {a}le / la / les pire(s){/a}. → C'est la pire émission de la semaine.",
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
        "Quand {a}plus{/a} est le dernier mot de la phrase, on prononce généralement le {a}s{/a}. → C'est le programme qui intéresse le plus !",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Superlatif",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "C'est ___ pâtissier de France.", choices: ["le meilleur", "le plus bon", "le mieux", "le pire"], correctIdx: 0 },
        { sentence: "C'est la région ___ visitée.", choices: ["la moins", "le moins", "la plus de", "moins"], correctIdx: 0 },
        { sentence: "C'est l'émission qui dure ___ longtemps.", choices: ["le plus", "la plus", "le mieux", "le pire"], correctIdx: 0 },
        { sentence: "Il y a ___ de soleil.", choices: ["le plus", "la plus", "le mieux", "le pire"], correctIdx: 0 },
        { sentence: "C'est là où il pleut ___ .", choices: ["le moins", "la moins", "le mieux", "moins de"], correctIdx: 0 },
        { sentence: "La plus belle région ___ France.", choices: ["de", "du", "des", "à"], correctIdx: 0 },
        { sentence: "Le plus grand cabaret ___ monde.", choices: ["du", "de", "des", "au"], correctIdx: 0 },
        { sentence: "C'est lui qui cuisine ___ .", choices: ["le mieux", "le plus bien", "le meilleur", "le pire"], correctIdx: 0 },
        { sentence: "C'est ___ émission de la semaine.", choices: ["la pire", "la plus mauvaise", "le mieux", "la plus bonne"], correctIdx: 0 },
        { sentence: "C'est le programme ___ intéressant.", choices: ["le moins", "la moins", "moins", "pire"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le, la, les, plus, moins, meilleur, mieux ou pire.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "C'est ___ meilleure pâtisserie.", hint: "article", answer: "la" },
        { sentence: "C'est le ___ pâtissier.", hint: "≠ plus bon", answer: "meilleur" },
        { sentence: "La région la ___ visitée.", hint: "minimum", answer: "moins" },
        { sentence: "L'émission qui dure le ___ longtemps.", hint: "maximum", answer: "plus" },
        { sentence: "Il y a le plus ___ soleil.", hint: "de", answer: "de" },
        { sentence: "Il pleut le ___ .", hint: "minimum", answer: "moins" },
        { sentence: "Il cuisine le ___ .", hint: "≠ plus bien", answer: "mieux" },
        { sentence: "C'est la ___ émission.", hint: "négatif", answer: "pire" },
        { sentence: "Les maisons les ___ originales.", hint: "maximum", answer: "plus" },
        { sentence: "Le ___ grand cabaret du monde.", hint: "article", answer: "plus" },
      ],
    },
  ],
};
