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
      type: "text",
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
        { sentence: "Je ___ français. (être)", choices: ["suis", "es", "est"], correctIdx: 0 },
        { sentence: "Elle ___ un livre. (avoir)", choices: ["a", "as", "ai"], correctIdx: 0 },
        { sentence: "Nous ___ au cinéma. (aller)", choices: ["allons", "allez", "vont"], correctIdx: 0 },
        { sentence: "___ maison est grande. (possessif)", choices: ["Ma", "Mon", "Mes"], correctIdx: 0 },
        { sentence: "Tu ___ pas ici. (négation, être)", choices: ["n'es", "ne es", "n'est"], correctIdx: 0 },
        { sentence: "___ est-ce que tu habites ?", choices: ["Où", "Quand", "Qui"], correctIdx: 0 },
        { sentence: "C'est ___ ami. (article)", choices: ["un", "une", "le"], correctIdx: 0 },
        { sentence: "Ils ___ du sport. (faire)", choices: ["font", "faisent", "fait"], correctIdx: 0 },
        { sentence: "Je ___ me lever tôt. (devoir)", choices: ["dois", "doit", "devons"], correctIdx: 0 },
        { sentence: "___ chat dort. (démonstratif)", choices: ["Ce", "Cette", "Ces"], correctIdx: 0 },
      ],
    },
  ],
};
