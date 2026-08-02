import type { GrammarLesson } from "../../grammar-data";

/** Unité 78 — Les conjonctions de temps (G4.48) */
export const A1_GR_CONJONCTIONS_TEMPS: GrammarLesson = {
  slug: "a1-gr-conjonctions-temps",
  code: "G4.48",
  level: "A1",
  title: "Les conjonctions de temps",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Situer deux événements l'un par rapport à l'autre.",
        "Exemple : {a}Au moment où{/a} je vous parle, les négociations se poursuivent. Aucun syndicat ne reprendra le travail {a}jusqu'à ce qu'{/a}un accord soit signé.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Deux événements en même temps",
    },
    {
      type: "highlight",
      label: "quand / lorsque (formel) + indicatif",
      items: [
        "Deux actions en même temps, ou une action pendant une autre.",
        "Les gens marchent beaucoup {a}quand{/a} il y a une grève de transports.",
        "Tous les employés étaient là {a}lorsqu'{/a}ils se sont réunis.",
      ],
    },
    {
      type: "highlight",
      label: "au moment où + indicatif",
      items: [
        "Insiste sur un moment précis.",
        "{a}Au moment où{/a} la grève a commencé, j'étais dans le métro.",
      ],
    },
    {
      type: "highlight",
      label: "pendant que + indicatif",
      items: [
        "Insiste sur la durée ou le déroulement.",
        "{a}Pendant que{/a} la négociation avait lieu, les grévistes sont entrés dans la salle.",
      ],
    },
    {
      type: "heading",
      text: "Deux événements l'un après l'autre",
    },
    {
      type: "highlight",
      label: "après que + indicatif",
      items: [
        "Introduit l'action 1 (la première).",
        "La grève a été annoncée {a}après qu'{/a}ils ont pris le train.",
      ],
    },
    {
      type: "highlight",
      label: "avant que + subjonctif",
      items: [
        "Introduit l'action 2 (la seconde).",
        "Ils ont pris le train {a}avant que{/a} la grève soit annoncée.",
      ],
    },
    {
      type: "note",
      text: "Même sujet → {a}avant de{/a} + infinitif. → {a}Avant de{/a} partir, on n'a pas écouté la radio.",
    },
    {
      type: "highlight",
      label: "dès que / aussitôt que + indicatif",
      items: [
        "Actions qui se suivent immédiatement ; introduit l'action 1.",
        "Le trafic reprendra {a}dès que{/a} la grève prendra fin.",
      ],
    },
    {
      type: "highlight",
      label: "jusqu'à ce que + subjonctif",
      items: [
        "L'action 1 dure jusqu'au début de l'action 2.",
        "Les négociations continueront {a}jusqu'à ce qu'{/a}un accord soit trouvé.",
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Conjonctions de temps",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Les gens marchent ___ il y a une grève.", choices: ["quand", "avant que", "afin que", "si bien que"], correctIdx: 0 },
        { sentence: "___ la grève a commencé, j'étais dans le métro.", choices: ["Au moment où", "Avant que", "Afin que", "Si bien que"], correctIdx: 0 },
        { sentence: "___ la négociation avait lieu, les grévistes sont entrés.", choices: ["Pendant que", "Avant que", "Dès que", "Afin que"], correctIdx: 0 },
        { sentence: "La grève a été annoncée ___ ils ont pris le train.", choices: ["après qu'", "avant que", "jusqu'à ce qu'", "afin que"], correctIdx: 0 },
        { sentence: "Ils ont pris le train ___ la grève soit annoncée.", choices: ["avant que", "après que", "dès que", "quand"], correctIdx: 0 },
        { sentence: "Même sujet : ___ partir, on n'a pas écouté la radio.", choices: ["Avant de", "Avant que", "Après que", "Dès que"], correctIdx: 0 },
        { sentence: "Le trafic reprendra ___ la grève prendra fin.", choices: ["dès que", "avant que", "afin que", "jusqu'à ce que"], correctIdx: 0 },
        { sentence: "Les négociations continueront ___ un accord soit trouvé.", choices: ["jusqu'à ce qu'", "après qu'", "dès que", "pendant que"], correctIdx: 0 },
        { sentence: "avant que + ___", choices: ["subjonctif", "indicatif", "infinitif", "impératif"], correctIdx: 0 },
        { sentence: "après que + ___", choices: ["indicatif", "subjonctif", "infinitif", "impératif"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec la conjonction ou la forme verbale attendue.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Les gens marchent ___ il y a une grève.", hint: "simultanéité", answer: "quand" },
        { sentence: "___ la grève a commencé, j'étais dans le métro.", hint: "moment précis", answer: "Au moment où" },
        { sentence: "___ la négociation avait lieu, ils sont entrés.", hint: "durée", answer: "Pendant que" },
        { sentence: "Ils ont pris le train ___ la grève soit annoncée.", hint: "subjonctif", answer: "avant que" },
        { sentence: "___ partir, on n'a pas écouté la radio.", hint: "même sujet", answer: "Avant de" },
        { sentence: "Le trafic reprendra ___ la grève prendra fin.", hint: "immédiat", answer: "dès que" },
        { sentence: "Les négociations continueront ___ un accord soit trouvé.", hint: "subjonctif", answer: "jusqu'à ce qu'" },
        { sentence: "Ils ont pris le train avant que la grève ___ . (annoncer)", hint: "subjonctif", answer: "soit annoncée" },
        { sentence: "Les négociations continueront jusqu'à ce qu'un accord ___ . (être trouvé)", hint: "subjonctif", answer: "soit trouvé" },
        { sentence: "La grève a été annoncée après qu'ils ___ le train. (prendre)", hint: "indicatif", answer: "ont pris" },
      ],
    },
  ],
};
