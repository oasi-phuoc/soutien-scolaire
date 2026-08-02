import type { GrammarLesson } from "../../grammar-data";

/** Unité 39 — L'imparfait (G4.9) */
export const A1_GR_IMPARFAIT: GrammarLesson = {
  slug: "a1-gr-imparfait",
  code: "G4.9",
  level: "A1",
  title: "L'imparfait",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Décrire une situation passée, souvent en contraste avec le présent. → Avant, les trains étaient à vapeur. Maintenant, les trains sont électriques.",
        "Décrire une habitude passée. → Quand j'étais enfant, tous les dimanches, nous allions chez mes grands-parents.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "plain_list",
      items: [
        "L'imparfait est très régulier : radical du {a}nous{/a} au présent + terminaisons.",
        "Terminaisons : {a}-ais, -ais, -ait, -ions, -iez, -aient{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Infinitif", "nous (présent)", "Imparfait"],
      boldFirstCol: true,
      rows: [
        ["détester", "nous détestons", "je détestais la lecture"],
        ["aller", "nous allons", "tu allais chez tes grands-parents"],
        ["vivre", "nous vivons", "il / elle / on vivait à la campagne"],
        ["avoir", "nous avons", "nous avions une petite voiture"],
        ["habiter", "nous habitons", "vous habitiez dans un studio"],
        ["dormir", "nous dormons", "ils / elles dormaient dans la même chambre"],
      ],
    },
    {
      type: "note",
      text: "{a}Être{/a} a un radical irrégulier : {a}ét-{/a}. → étaient.",
    },
    {
      type: "note",
      text: "Verbes impersonnels : il faut → il fallait ; il pleut → il pleuvait.",
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Les terminaisons {a}-ais{/a}, {a}-ait{/a} et {a}-aient{/a} se prononcent pareil.",
        "Ne pas confondre présent / imparfait : j'habite ≠ j'habitais ; nous buvons ≠ nous buvions.",
        "Ne pas confondre passé composé / imparfait : il a habité ≠ il habitait.",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "Orthographe — cas particuliers",
      items: [
        "Verbes en {a}-ger{/a} : un {a}e{/a} devant {a}a{/a}. → je voyageais ; il mangeait.",
        "Verbes en {a}-cer{/a} : {a}c → ç{/a} devant {a}a{/a}. → je commençais ; il commençait.",
        "Verbes en {a}-yer{/a} : on garde {a}y{/a} devant {a}i{/a}. → nous payions ; vous essuyiez.",
        "Radical en {a}-i{/a} : double {a}i{/a}. → nous riions ; vous étudiiez.",
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "L'imparfait",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Avant, les trains ___ à vapeur.", choices: ["étaient", "ont été", "sont", "seront"], correctIdx: 0 },
        { sentence: "Quand j'___ enfant, nous allions chez mes grands-parents.", choices: ["étais", "ai été", "suis", "serai"], correctIdx: 0 },
        { sentence: "Tu ___ chez tes grands-parents.", choices: ["allais", "es allé", "vas", "iras"], correctIdx: 0 },
        { sentence: "Nous ___ une petite voiture.", choices: ["avions", "avons eu", "avons", "aurons"], correctIdx: 0 },
        { sentence: "Ils ___ dans la même chambre.", choices: ["dormaient", "ont dormi", "dorment", "dormiront"], correctIdx: 0 },
        { sentence: "Il ___ partir tôt. (falloir)", choices: ["fallait", "a fallu", "faut", "faudra"], correctIdx: 0 },
        { sentence: "Je ___ souvent. (voyager)", choices: ["voyageais", "voyagais", "ai voyagé", "voyage"], correctIdx: 0 },
        { sentence: "Il ___ à 8 heures. (commencer)", choices: ["commençait", "commencait", "a commencé", "commence"], correctIdx: 0 },
        { sentence: "Nous ___ toujours. (payer)", choices: ["payions", "payons", "avons payé", "paierions"], correctIdx: 0 },
        { sentence: "-ais, -ait et -aient se prononcent ___ .", choices: ["pareil", "différemment", "comme -ons", "comme -ez"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le verbe à l'imparfait.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Avant, les trains ___ électriques. (être)", hint: "3e pl.", answer: "étaient" },
        { sentence: "Je ___ la lecture. (détester)", hint: "je", answer: "détestais" },
        { sentence: "Il ___ à la campagne. (vivre)", hint: "il", answer: "vivait" },
        { sentence: "Vous ___ dans un studio. (habiter)", hint: "vous", answer: "habitiez" },
        { sentence: "Il ___ . (pleuvoir)", hint: "impersonnel", answer: "pleuvait" },
        { sentence: "Je ___ beaucoup. (manger)", hint: "-ger", answer: "mangeais" },
        { sentence: "Ils ___ à midi. (commencer)", hint: "-cer", answer: "commençaient" },
        { sentence: "Nous ___ ensemble. (rire)", hint: "double i", answer: "riions" },
        { sentence: "Vous ___ le soir. (étudier)", hint: "double i", answer: "étudiiez" },
        { sentence: "Nous ___ cash. (payer)", hint: "-yer", answer: "payions" },
      ],
    },
  ],
};
