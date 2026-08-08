import type { GrammarLesson } from "../../grammar-data";

/** G18.1 — Bilan B1 */
export const A1_GR_BILAN_B1: GrammarLesson = {
  slug: "a1-gr-bilan-b1",
  code: "G18.1",
  level: "A2",
  title: "Bilan B1",
  theory: [
    {
      type: "heading",
      text: "Révision B1",
    },
    {
      type: "plain_list",
      items: [
        "Adverbes et mots de liaison.",
        "Impératif, passif, gérondif, subjonctif, conditionnel.",
        "Cause, conséquence, but, opposition, hypothèse, discours indirect.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Ce bilan vérifie les acquis des modules G14 à G17.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Bilan B1",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il faut que tu ___ . (venir, subjonctif)", choices: ["viennes", "viens", "viendras"], correctIdx: 0 },
        { sentence: "Je ___ m'apporter de l'eau ? (pouvoir, conditionnel)", choices: ["pourriez", "pouvez", "pourrez"], correctIdx: 0 },
        { sentence: "Ils maigrissent ___ du sport.", choices: ["en faisant", "faisant", "à faire"], correctIdx: 0 },
        { sentence: "Je reste ___ je suis fatigué.", choices: ["parce que", "afin que", "pour que"], correctIdx: 0 },
        { sentence: "Il pleut ___ je prends mon parapluie.", choices: ["alors", "avant que", "afin que"], correctIdx: 0 },
        { sentence: "Je travaille ___ réussir.", choices: ["pour", "pour que", "afin que"], correctIdx: 0 },
        { sentence: "Bien que ce ___ difficile…", choices: ["soit", "est", "sera"], correctIdx: 0 },
        { sentence: "Si j'avais le temps, je ___ .", choices: ["viendrais", "viendrai", "viens"], correctIdx: 0 },
        { sentence: "Elle dit ___ elle a du retard.", choices: ["que", "si", "de"], correctIdx: 0 },
        { sentence: "___ , puis, enfin…", choices: ["D'abord", "Donc", "Parce que"], correctIdx: 0 },
      ],
    },
  ],
};
