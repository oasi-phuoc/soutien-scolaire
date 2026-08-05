import type { GrammarLesson } from "../../grammar-data";

/** Unité 41 — L'imparfait / Le passé composé (G4.11) */
export const A1_GR_IMPARFAIT_PASSE_COMPOSE: GrammarLesson = {
  slug: "a1-gr-imparfait-passe-compose",
  code: "G4.11",
  level: "A1",
  title: "L'imparfait / Le passé composé",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Pour raconter un événement passé, on combine souvent l'imparfait et le passé composé.",
        "Exemple : Nous étions dans le bus, il y avait beaucoup de monde, je lisais. Soudain, le chauffeur a freiné et elle est tombée sur moi !",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "L'imparfait",
      items: [
        "Circonstances, décor, description. → Nous étions dans le bus ; j'étais assis ; Chloé était debout.",
        "Habitude passée. → Avant, j'allais au bureau en voiture.",
        "Action en cours : {a}être en train de{/a} à l'imparfait. → J'étais en train de lire (= je lisais) quand elle est tombée.",
      ],
    },
    {
      type: "highlight",
      label: "Le passé composé",
      items: [
        "Action avec un début et une fin. → Soudain, le chauffeur a freiné et Chloé est tombée sur moi.",
        "Action qui met fin à une habitude. → Un jour, j'ai eu un accident.",
      ],
    },
    {
      type: "heading",
      text: "Expressions de temps",
    },
    {
      type: "plain_list",
      items: [
        "Souvent avec l'imparfait : {a}pendant que{/a}. → Elle est tombée sur moi pendant que je lisais.",
        "Souvent avec le passé composé : {a}quand, tout à coup, soudain, brusquement, à ce moment-là, un jour…{/a} → Soudain, le chauffeur a freiné.",
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
        "Ne pas confondre passé composé et imparfait des verbes en {a}-er{/a} avec {a}je{/a}. → J'ai marché. ≠ Je marchais.",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Imparfait ou passé composé ?",
      instruction: "Choisissez le temps qui convient.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Nous ___ dans le bus. (décor)", choices: ["étions", "avons été", "sommes"], correctIdx: 0 },
        { sentence: "Je ___ un livre. (en cours)", choices: ["lisais", "ai lu", "lis"], correctIdx: 0 },
        { sentence: "Soudain, le chauffeur ___ .", choices: ["a freiné", "freinait", "freine"], correctIdx: 0 },
        { sentence: "Elle ___ sur moi !", choices: ["est tombée", "tombait", "tombe"], correctIdx: 0 },
        { sentence: "Avant, j'___ au bureau en voiture. (habitude)", choices: ["allais", "suis allé", "vais"], correctIdx: 0 },
        { sentence: "Un jour, j'___ un accident. (fin d'habitude)", choices: ["ai eu", "avais", "ai"], correctIdx: 0 },
        { sentence: "J'___ en train de lire quand elle est tombée.", choices: ["étais", "ai été", "suis"], correctIdx: 0 },
        { sentence: "Elle est tombée ___ je lisais.", choices: ["pendant que", "soudain", "tout à coup"], correctIdx: 0 },
        { sentence: "___ , le chauffeur a freiné.", choices: ["Soudain", "Pendant que", "Avant"], correctIdx: 0 },
        { sentence: "J'ai marché. ≠ Je ___ .", choices: ["marchais", "marche", "marcherai"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le verbe à l'imparfait ou au passé composé.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il y ___ beaucoup de monde. (avoir, décor)", hint: "imparfait", answer: "avait" },
        { sentence: "Je ___ assis. (être)", hint: "imparfait", answer: "étais" },
        { sentence: "Le chauffeur a ___ . (freiner)", hint: "PC", answer: "freiné" },
        { sentence: "Elle est ___ sur moi. (tomber)", hint: "PC + être", answer: "tombée" },
        { sentence: "Avant, j'___ en voiture. (aller)", hint: "habitude", answer: "allais" },
        { sentence: "Un jour, j'ai ___ un accident. (avoir)", hint: "PC", answer: "eu" },
        { sentence: "J'étais en train de ___ . (lire)", hint: "infinitif", answer: "lire" },
        { sentence: "Pendant que je ___ , elle est tombée. (lire)", hint: "imparfait", answer: "lisais" },
        { sentence: "Soudain, il a ___ . (crier)", hint: "PC", answer: "crié" },
        { sentence: "Nous ___ dans le bus. (être)", hint: "imparfait", answer: "étions" },
      ],
    },
  ],
};
