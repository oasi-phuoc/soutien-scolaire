import type { GrammarLesson } from "../../grammar-data";

/** Unité 61 — Les pronoms relatifs qui, que, où (G4.31) */
export const A1_GR_PRONOMS_RELATIFS_QUI_QUE_OU: GrammarLesson = {
  slug: "a1-gr-pronoms-relatifs-qui-que-ou",
  code: "G4.31",
  level: "A1",
  title: "Les pronoms relatifs qui, que, où",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les pronoms relatifs remplacent un nom et permettent de réunir deux phrases.",
        "Tu connais cette fille ? Elle sort avec Lucas. → Tu connais cette fille qui sort avec Lucas ?",
        "Le choix dépend de la fonction du pronom par rapport au verbe qui suit.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "highlight",
      label: "Qui",
      items: [
        "Personne ou chose ; sujet du second verbe. → les jeunes mariés qui habitent à côté ; un appartement qui donne sur un parc.",
      ],
    },
    {
      type: "highlight",
      label: "Que",
      items: [
        "Personne ou chose ; COD du second verbe. → le couple que nous avons rencontré ; un studio que ses parents ont acheté.",
      ],
    },
    {
      type: "highlight",
      label: "Où",
      items: [
        "Complément de lieu ou de temps. → l'université où j'ai terminé mes études ; le jour où j'ai soutenu ma thèse.",
      ],
    },
    {
      type: "plain_list",
      items: [
        "{a}Qui{/a} et {a}que{/a} peuvent remplacer un pronom tonique. → C'est toi qui m'as présenté cette fille ? ; C'est elle que je connais le mieux.",
        "Avec {a}qui{/a}, le verbe s'accorde avec la personne du pronom.",
        "{a}Que → qu'{/a} devant voyelle ou {a}h{/a} muet. → une ville qu'il adore.",
        "{a}Qui{/a} ne s'élide pas. → la fille qui est là.",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Qui, que, où",
      instruction: "Choisissez le pronom relatif correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "La fille ___ sort avec Lucas.", choices: ["qui", "que", "où"], correctIdx: 0 },
        { sentence: "La fille ___ on a vue au cinéma.", choices: ["qu'", "qui", "où"], correctIdx: 0 },
        { sentence: "Un appartement ___ donne sur un parc.", choices: ["qui", "que", "où"], correctIdx: 0 },
        { sentence: "Le couple ___ nous avons rencontré.", choices: ["que", "qui", "où"], correctIdx: 0 },
        { sentence: "L'université ___ j'ai terminé mes études.", choices: ["où", "qui", "que"], correctIdx: 0 },
        { sentence: "Le jour ___ j'ai soutenu ma thèse.", choices: ["où", "qui", "que"], correctIdx: 0 },
        { sentence: "C'est toi ___ m'as présenté cette fille.", choices: ["qui", "que", "où"], correctIdx: 0 },
        { sentence: "C'est elle ___ je connais le mieux.", choices: ["que", "qui", "où"], correctIdx: 0 },
        { sentence: "Une ville ___ il adore.", choices: ["qu'", "qui", "où"], correctIdx: 0 },
        { sentence: "La fille ___ est là.", choices: ["qui", "qu'", "où"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez qui, que, qu' ou où.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Les voisins ___ habitent à côté.", hint: "sujet", answer: "qui" },
        { sentence: "Le studio ___ ses parents ont acheté.", hint: "COD", answer: "que" },
        { sentence: "Le parc ___ je me promène.", hint: "lieu", answer: "où" },
        { sentence: "Le jour ___ nous nous sommes rencontrés.", hint: "temps", answer: "où" },
        { sentence: "C'est moi ___ ai appelé.", hint: "sujet", answer: "qui" },
        { sentence: "C'est lui ___ j'ai vu.", hint: "COD", answer: "que" },
        { sentence: "La ville ___ il adore.", hint: "élision", answer: "qu'" },
        { sentence: "La fille ___ on a vue.", hint: "élision", answer: "qu'" },
        { sentence: "L'homme ___ travaille ici.", hint: "sujet", answer: "qui" },
        { sentence: "Le film ___ tu as recommandé.", hint: "COD", answer: "que" },
      ],
    },
  ],
};
