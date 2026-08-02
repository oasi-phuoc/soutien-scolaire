import type { GrammarLesson } from "../../grammar-data";

/** G6.1 — Bilan A1 */
export const A1_GR_BILAN_A1: GrammarLesson = {
  slug: "a1-gr-bilan-a1",
  code: "G6.1",
  level: "A1",
  title: "Bilan A1",
  theory: [
    {
      type: "heading",
      text: "Révision A1",
    },
    {
      type: "plain_list",
      items: [
        "Présent (être, avoir, -er, pronominaux, modaux…).",
        "Noms et adjectifs : genre, nombre, place.",
        "Déterminants : articles, démonstratifs, possessifs, indéfinis.",
        "Structure de la phrase : questions, négation, exclamation.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Ce bilan vérifie les acquis des modules G1 à G5.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Bilan A1",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ français. (être)", choices: ["suis", "es", "est", "sommes"], correctIdx: 0 },
        { sentence: "Elle ___ un livre. (avoir)", choices: ["a", "as", "ai", "ont"], correctIdx: 0 },
        { sentence: "Nous ___ au cinéma. (aller)", choices: ["allons", "allez", "vont", "va"], correctIdx: 0 },
        { sentence: "___ maison est grande. (possessif)", choices: ["Ma", "Mon", "Mes", "Ton"], correctIdx: 0 },
        { sentence: "Tu ___ pas ici. (négation, être)", choices: ["n'es", "ne es", "n'est", "ne suis"], correctIdx: 0 },
        { sentence: "___ est-ce que tu habites ?", choices: ["Où", "Quand", "Qui", "Quoi"], correctIdx: 0 },
        { sentence: "C'est ___ ami. (article)", choices: ["un", "une", "le", "des"], correctIdx: 0 },
        { sentence: "Ils ___ du sport. (faire)", choices: ["font", "faisent", "fait", "faisons"], correctIdx: 0 },
        { sentence: "Je ___ me lever tôt. (devoir)", choices: ["dois", "doit", "devons", "devez"], correctIdx: 0 },
        { sentence: "___ chat dort. (démonstratif)", choices: ["Ce", "Cette", "Ces", "Cet"], correctIdx: 0 },
      ],
    },
  ],
};
