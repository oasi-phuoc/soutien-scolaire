import type { GrammarLesson } from "../../grammar-data";

/** Unité 14 — Les noms composés (G2.4) */
export const A1_GR_NOMS_COMPOSES: GrammarLesson = {
  slug: "a1-gr-noms-composes",
  code: "G2.4",
  level: "A1",
  title: "Les noms composés",
  theory: [
    {
      type: "heading",
      text: "Formation",
    },
    {
      type: "plain_list",
      items: [
        "Un nom composé est formé de plusieurs mots associés (noms, adjectifs, prépositions, verbes).",
        "Reliés par un trait d'union : le sous-sol, le tire-bouchon, un ouvre-boîte.",
        "Reliés par une préposition ({a}à, de, en{/a}) : une salle de bains, le rez-de-chaussée, une chambre à coucher, un arc-en-ciel.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Les mots ne sont pas toujours reliés par un trait d'union.",
    },
    {
      type: "heading",
      text: "Orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Au singulier, le second mot peut déjà être au pluriel. → un porte-documents ; un porte-bagages ; un porte-clés ; une boîte aux lettres.",
        "Au pluriel, verbes et prépositions sont invariables ; noms et adjectifs varient. → un taille-crayon / des taille-crayons ; une grand-mère / des grands-mères ; un canapé-lit / des canapés-lits.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Exceptions (logique) : des porte-monnaie, des porte-bonheur, des pommes de terre, des après-midi. Origine étrangère : seul le second mot s'accorde — des week-ends, des night-clubs.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Noms composés",
      instruction: "Choisissez la forme plurielle correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "un ouvre-boîte → des ___", choices: ["ouvre-boîtes", "ouvres-boîtes", "ouvre-boîte", "ouvres-boîte"], correctIdx: 0 },
        { sentence: "un sac à main → des ___", choices: ["sacs à main", "sac à mains", "sacs à mains", "sac à main"], correctIdx: 0 },
        { sentence: "un taille-crayon → des ___", choices: ["taille-crayons", "tailles-crayons", "taille-crayon", "tailles-crayon"], correctIdx: 0 },
        { sentence: "une grand-mère → des ___", choices: ["grands-mères", "grand-mères", "grands-mère", "grand-mère"], correctIdx: 0 },
        { sentence: "un canapé-lit → des ___", choices: ["canapés-lits", "canapé-lits", "canapés-lit", "canapé-lit"], correctIdx: 0 },
        { sentence: "un porte-monnaie → des ___", choices: ["porte-monnaie", "portes-monnaies", "porte-monnaies", "portes-monnaie"], correctIdx: 0 },
        { sentence: "une pomme de terre → des ___", choices: ["pommes de terre", "pomme de terres", "pommes de terres", "pomme de terre"], correctIdx: 0 },
        { sentence: "un week-end → des ___", choices: ["week-ends", "weeks-end", "weeks-ends", "week-end"], correctIdx: 0 },
        { sentence: "un après-midi → des ___", choices: ["après-midi", "après-midis", "aprèses-midi", "aprèses-midis"], correctIdx: 0 },
        { sentence: "un porte-clés → des ___", choices: ["porte-clés", "portes-clés", "porte-clé", "portes-clé"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Écrivez le pluriel",
      instruction: "Donnez la forme plurielle du nom composé.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "un ouvre-boîte → des ___", hint: "verbe invariable", answer: "ouvre-boîtes" },
        { sentence: "un sac à main → des ___", hint: "nom variable", answer: "sacs à main" },
        { sentence: "une grand-mère → des ___", hint: "adjectif + nom", answer: "grands-mères" },
        { sentence: "un canapé-lit → des ___", hint: "nom + nom", answer: "canapés-lits" },
        { sentence: "un porte-monnaie → des ___", hint: "exception", answer: "porte-monnaie" },
        { sentence: "une pomme de terre → des ___", hint: "exception", answer: "pommes de terre" },
        { sentence: "un week-end → des ___", hint: "origine étrangère", answer: "week-ends" },
        { sentence: "un taille-crayon → des ___", hint: "verbe + nom", answer: "taille-crayons" },
        { sentence: "un après-midi → des ___", hint: "exception", answer: "après-midi" },
        { sentence: "un night-club → des ___", hint: "origine étrangère", answer: "night-clubs" },
      ],
    },
  ],
};
