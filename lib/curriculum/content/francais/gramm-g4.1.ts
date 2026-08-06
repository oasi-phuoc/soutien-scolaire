import type { GrammarLesson } from "../../grammar-data";

/** Unité 21 — Les articles définis et indéfinis (G4.1) */
export const A1_GR_L04: GrammarLesson = {
  slug: "a1-gr-l04",
  code: "G4.1",
  level: "A1",
  title: "Les articles définis et indéfinis",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les articles accompagnent un nom et, au singulier, indiquent son genre (masculin ou féminin).",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Articles définis",
    },
    {
      type: "plain_list",
      items: [
        "Les articles définis sont {a}le{/a}, {a}la{/a}, {a}l'{/a} et {a}les{/a}. On utilise ces articles pour parler de :",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "{a}1. Notion générale{/a}",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "La monnaie est importante.",
        "Les animaux ont besoin d'eau.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "{a}2. Personne, objet ou lieu déjà connu{/a}",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "La carte bancaire de Marie.",
        "Le directeur est dans son bureau.",
        "J'ouvre la fenêtre.",
      ],
      noBulletItems: [0, 1, 2],
    },
    {
      type: "heading",
      text: "Articles indéfinis",
    },
    {
      type: "plain_list",
      items: [
        "Les articles indéfinis sont {a}un{/a}, {a}une{/a} et {a}des{/a}. On utilise ces articles pour parler de :",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "{a}1. Personne ou chose non précise{/a}",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "C'est un client.",
        "Ce sont des billets de banque.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "{a}2. Quantité{/a}",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "{a}un{/a}/{a}une{/a} = 1 ; {a}des{/a} = une quantité indéterminée",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "Vous avez des pièces de 5 francs ?",
        "J'ai un billet de 10 francs.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "highlight",
      label: "Avec les verbes de préférence",
      items: [],
    },
    {
      type: "plain_list",
      items: [
        "On utilise toujours l'{a}article défini{/a} avec les verbes aimer, adorer, préférer, détester.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "J'aime les fruits.",
        "Elle préfère le thé.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "L'article se place devant un nom ou un groupe nominal et s'accorde en genre et en nombre.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["", "Articles définis", "Articles indéfinis"],
      boldFirstCol: true,
      colWidths: ["34%", "33%", "33%"],
      rows: [
        ["Masculin singulier", "{a}le{/a} chèque", "{a}un{/a} chèque"],
        ["Féminin singulier", "{a}la{/a} carte bancaire", "{a}une{/a} carte bancaire"],
        ["Singulier devant une voyelle ou un h muet", "{a}l'{/a}argent ; {a}l'{/a}hôtel", ""],
        ["Masculin pluriel", "{a}les{/a} billets", "{a}des{/a} billets"],
        ["Féminin pluriel", "{a}les{/a} pièces", "{a}des{/a} pièces"],
      ],
    },
  ],
  exercises: [
    {
      type: "tag2",
      title: "Genre et nombre",
      instruction: "Indiquez si l'article est Singulier (S) ou Pluriel (P), et Masculin (M) ou Féminin (F).",
      poolSize: 8,
      pool: [
        { word: "le", companion: "chat", gender: "M", number: "S" },
        { word: "le", companion: "vélo", gender: "M", number: "S" },
        { word: "le", companion: "livre", gender: "M", number: "S" },
        { word: "la", companion: "maison", gender: "F", number: "S" },
        { word: "la", companion: "table", gender: "F", number: "S" },
        { word: "la", companion: "voiture", gender: "F", number: "S" },
        { word: "les", companion: "enfants", gender: "M", number: "P" },
        { word: "les", companion: "maisons", gender: "F", number: "P" },
        { word: "un", companion: "chat", gender: "M", number: "S" },
        { word: "un", companion: "livre", gender: "M", number: "S" },
        { word: "une", companion: "maison", gender: "F", number: "S" },
        { word: "une", companion: "voiture", gender: "F", number: "S" },
        { word: "des", companion: "enfants", gender: "M", number: "P" },
        { word: "des", companion: "fleurs", gender: "F", number: "P" },
      ],
    },
    {
      type: "fill",
      title: "Articles définis",
      instruction: "Complétez avec l'article défini correct : le, la, l' ou les.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ chat est mignon.", hint: "le / la / les / l'", answer: "le" },
        { sentence: "___ chaise est confortable.", hint: "le / la / les / l'", answer: "la" },
        { sentence: "___ enfants jouent dehors.", hint: "le / la / les / l'", answer: "les" },
        { sentence: "___ euro.", hint: "élision", answer: "L'" },
        { sentence: "___ argent.", hint: "élision", answer: "L'" },
        { sentence: "___ banque de France.", hint: "fs", answer: "La" },
        { sentence: "Je n'aime pas ___ pièces de 1 centime.", hint: "préférer → défini", answer: "les" },
        { sentence: "J'adore ___ chocolat.", hint: "préférer → défini", answer: "le" },
        { sentence: "___ fleurs sont belles.", hint: "pluriel", answer: "Les" },
        { sentence: "___ carte bancaire de Marie.", hint: "fs précis", answer: "La" },
      ],
    },
    {
      type: "fill",
      title: "Articles indéfinis",
      instruction: "Complétez avec l'article indéfini correct : un, une ou des.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ billet de 20 euros.", hint: "ms", answer: "Un" },
        { sentence: "___ pièces de 1 euro.", hint: "pluriel", answer: "Des" },
        { sentence: "C'est ___ client.", hint: "ms", answer: "un" },
        { sentence: "Ce sont ___ billets de banque.", hint: "pluriel", answer: "des" },
        { sentence: "Je cherche ___ stylo.", hint: "un / une / des", answer: "un" },
        { sentence: "C'est ___ voiture.", hint: "un / une / des", answer: "une" },
        { sentence: "Il mange ___ fruits.", hint: "un / une / des", answer: "des" },
        { sentence: "Elle a ___ chat.", hint: "un / une / des", answer: "un" },
        { sentence: "Tu vois ___ maison ?", hint: "un / une / des", answer: "une" },
        { sentence: "Ils ont ___ enfants.", hint: "un / une / des", answer: "des" },
      ],
    },
  ],
  evalExercises: [
    {
      type: "qcm",
      title: "Évaluation — Question 1",
      instruction: "Choisissez l'article correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je cherche ___ appartement.", choices: ["un", "le", "la"], correctIdx: 0 },
        { sentence: "C'est ___ professeur de maths.", choices: ["le", "un", "une"], correctIdx: 0 },
        { sentence: "J'ai ___ voiture bleue.", choices: ["une", "la", "un"], correctIdx: 0 },
        { sentence: "Ouvre ___ porte, s'il te plaît.", choices: ["la", "une", "le"], correctIdx: 0 },
        { sentence: "J'aime ___ café le matin.", choices: ["le", "un", "la"], correctIdx: 0 },
        { sentence: "Nous avons ___ enfants.", choices: ["des", "les", "un"], correctIdx: 0 },
        { sentence: "Voici ___ clé de l'appartement.", choices: ["la", "une", "le"], correctIdx: 0 },
        { sentence: "C'est ___ bonne idée !", choices: ["une", "la", "un"], correctIdx: 0 },
        { sentence: "___ euro.", choices: ["L'", "Le", "La"], correctIdx: 0 },
        { sentence: "Je n'aime pas ___ pièces de 1 centime.", choices: ["les", "des", "un"], correctIdx: 0 },
      ],
    },
    {
      type: "classify",
      title: "Évaluation — Question 2",
      instruction: "Classez chaque article : défini ou indéfini.",
      categories: ["Article défini", "Article indéfini"],
      items: [],
      poolSize: 8,
      allowPartialValidation: true,
      pool: [
        { word: "le", categoryIdx: 0 },
        { word: "la", categoryIdx: 0 },
        { word: "les", categoryIdx: 0 },
        { word: "l'", categoryIdx: 0 },
        { word: "un", categoryIdx: 1 },
        { word: "une", categoryIdx: 1 },
        { word: "des", categoryIdx: 1 },
      ],
    },
  ],
};
