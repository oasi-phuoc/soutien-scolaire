import type { GrammarLesson } from "../../grammar-data";

/** G13.1 — Bilan A2 */
export const A1_GR_BILAN_A2: GrammarLesson = {
  slug: "a1-gr-bilan-a2",
  code: "G13.1",
  level: "A2",
  title: "Bilan A2",
  theory: [
    {
      type: "heading",
      text: "Révision A2",
    },
    {
      type: "text",
      items: [
        "Passé composé, imparfait, plus-que-parfait.",
        "Futur proche, futur simple, futur antérieur.",
        "Comparaison et superlatif.",
        "Pronoms (toniques, COD/COI, en, y, relatifs…).",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Ce bilan vérifie les acquis des modules G7 à G12.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Bilan A2",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Hier, j'___ au cinéma. (aller, PC)", choices: ["suis allé", "ai allé", "allais"], correctIdx: 0 },
        { sentence: "Quand j'étais petit, je ___ beaucoup. (jouer)", choices: ["jouais", "ai joué", "jouerai"], correctIdx: 0 },
        { sentence: "Demain, je ___ . (partir, futur simple)", choices: ["partirai", "pars", "suis parti"], correctIdx: 0 },
        { sentence: "Ce livre est ___ intéressant ___ celui-là.", choices: ["plus / que", "plus / de", "aussi / de"], correctIdx: 0 },
        { sentence: "Je ___ vois demain. (pronom COD, le)", choices: ["le", "lui", "y"], correctIdx: 0 },
        { sentence: "J'___ ai trois. (pronom quantité)", choices: ["en", "y", "le"], correctIdx: 0 },
        { sentence: "Je vais ___ Paris. (futur proche)", choices: ["aller à", "allé à", "allais à"], correctIdx: 0 },
        { sentence: "La femme ___ parle est ma mère. (relatif)", choices: ["qui", "que", "dont"], correctIdx: 0 },
        { sentence: "Il est ___ intelligent de la classe.", choices: ["le plus", "plus", "le mieux"], correctIdx: 0 },
        { sentence: "Je lui ___ le livre. (donner, PC)", choices: ["ai donné", "suis donné", "donnais"], correctIdx: 0 },
      ],
    },
  ],
};
