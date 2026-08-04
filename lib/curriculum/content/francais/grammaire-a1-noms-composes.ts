import type { GrammarLesson } from "../../grammar-data";

/** Unité 14 — Les noms composés (G2.4) */
export const A1_GR_NOMS_COMPOSES: GrammarLesson = {
  slug: "a1-gr-noms-composes",
  code: "G2.4",
  level: "A1",
  title: "Les noms composés",
  theory: [
    {
      type: "plain_list",
      items: [
        "Un nom composé est un nom formé de deux ou plusieurs mots qui créent ensemble un seul nom. Les mots peuvent être reliés par un trait d'union ou par une préposition ({a}à{/a}, {a}de{/a}, {a}en{/a} ou {a}aux{/a}).",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "Par un trait d'union",
      items: [
        "le sous-sol",
        "un ouvre-boîte",
        "un coffre-fort",
        "un tire-bouchon",
        "une grand-mère",
      ],
      noBulletItems: [0, 1, 2, 3, 4],
    },
    {
      type: "highlight",
      label: "Par une préposition",
      items: [
        "une salle de bains",
        "une chambre à coucher",
        "le rez-de-chaussée",
        "un arc-en-ciel",
      ],
      noBulletItems: [0, 1, 2, 3],
    },
    {
      type: "heading",
      text: "Orthographe",
    },
    {
      type: "plain_list",
      items: [
        "Le second mot peut déjà être au pluriel lorsqu'il désigne ce que contient ou ce à quoi sert l'objet.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un porte-documents",
        "un porte-bagages",
        "un porte-clés",
        "une boîte aux lettres",
      ],
      noBulletItems: [0, 1, 2, 3],
    },
    {
      type: "highlight",
      label: "Au pluriel",
      items: [],
    },
    {
      type: "plain_list",
      items: [
        "Les mots varient ou pas selon le type des mots.",
      ],
      noBulletItems: [0],
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} Les verbes restent invariables.",
        "{a}2.{/a} Les prépositions restent invariables.",
        "{a}3.{/a} Les noms prennent un {a}-s{/a} si le sens le permet.",
        "{a}4.{/a} Les adjectifs s'accordent avec le nom.",
      ],
      noBulletItems: [0, 1, 2, 3],
    },
    {
      type: "grid",
      headers: ["", "Singulier", "Pluriel"],
      boldFirstCol: true,
      rows: [
        ["verbe + nom", "un taille-crayon", "des taille-crayons"],
        ["adjectif + nom", "une grand-mère", "des grands-mères"],
        ["nom + nom", "un canapé-lit", "des canapés-lits"],
      ],
    },
    {
      type: "highlight",
      label: "Exception",
      items: [],
    },
    {
      type: "plain_list",
      items: [
        "Certains noms composés ne suivent pas la règle générale.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "des porte-monnaie",
        "des porte-bonheur",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "plain_list",
      items: [
        "En général, seul le dernier mot s'accorde pour les mots d'origine étrangère.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un week-end → des week-ends",
        "un night-club → des night-clubs",
      ],
      noBulletItems: [0, 1],
      inlineArrows: true,
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
