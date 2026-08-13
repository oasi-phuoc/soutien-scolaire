import type { GrammarLesson } from "../../grammar-data";

/** Unité 24 — L'expression de la quantité (G3.4) */
export const A1_GR_EXPRESSION_QUANTITE: GrammarLesson = {
  slug: "a1-gr-expression-quantite",
  code: "G3.4",
  level: "A1",
  title: "L'expression de la quantité : un peu, beaucoup, assez, trop",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Quantités indéterminées : articles partitifs ({a}du{/a}, {a}de la{/a}, {a}de l'{/a}) ou indéfini ({a}des{/a}). → Je veux du beurre et de la confiture. ; Tu bois de l'eau. ; Je veux des frites.",
        "Quantités précises (ou relatives) : autres expressions. → Je voudrais un peu de café. ; Je mange beaucoup de chocolat.",
      ],
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      allBullets: true,
      label: "Quantités globales",
      items: [
        "{a}trop de{/a} = quantité excessive",
        "{a}beaucoup de{/a} = grande quantité",
        "{a}assez de{/a} = quantité suffisante",
        "{a}un peu de{/a} = petite quantité",
        "{a}pas assez de{/a} = quantité insuffisante",
      ],
    },
    {
      type: "note",
      text: "Le nom qui suit peut être singulier ou pluriel et ne prend {a}pas{/a} d'article. → Je veux un peu de pain (pas un peu du pain). ; Je mange beaucoup d'oranges (pas beaucoup des oranges).",
    },
    {
      type: "text",
      text: "Quantités précises : {a}un kilo de{/a}, {a}une bouteille de{/a}, {a}un morceau de{/a}, {a}un litre de{/a}, etc.",
    },
    {
      type: "heading",
      text: "Prononciation et orthographe",
    },
    {
      type: "text",
      items: [
        "Devant une voyelle ou un h muet, {a}de{/a} devient {a}d'{/a}. → un kilo d'oranges ; une bouteille d'huile.",
        "À l'oral, le {a}e{/a} de {a}de{/a} est souvent muet. → Il mange beaucoup de pommes.",
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Expressions de quantité",
      instruction: "Choisissez la formulation correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ frites. (quantité excessive)", choices: ["Trop de", "Trop des", "Trop du"], correctIdx: 0 },
        { sentence: "___ frites. (quantité insuffisante)", choices: ["Pas assez de", "Pas assez des", "Pas assez du"], correctIdx: 0 },
        { sentence: "Je veux ___ pain.", choices: ["un peu de", "un peu du", "un peu des"], correctIdx: 0 },
        { sentence: "Je mange ___ oranges.", choices: ["beaucoup d'", "beaucoup des", "beaucoup de les"], correctIdx: 0 },
        { sentence: "Je mange ___ chocolat.", choices: ["beaucoup de", "beaucoup du", "beaucoup des"], correctIdx: 0 },
        { sentence: "Je voudrais ___ café.", choices: ["un peu de", "un peu du", "un peu le"], correctIdx: 0 },
        { sentence: "Il y a ___ sucre.", choices: ["assez de", "assez du", "assez des"], correctIdx: 0 },
        { sentence: "___ oranges.", choices: ["Un kilo d'", "Un kilo des", "Un kilo du"], correctIdx: 0 },
        { sentence: "___ huile.", choices: ["Une bouteille d'", "Une bouteille de l'", "Une bouteille du"], correctIdx: 0 },
        { sentence: "Je veux ___ beurre.", choices: ["du", "un peu du", "beaucoup du"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez de, d' ou l'expression complète demandée.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je veux un peu ___ pain.", hint: "pas d'article", answer: "de" },
        { sentence: "Je mange beaucoup ___ oranges.", hint: "élision", answer: "d'" },
        { sentence: "Trop ___ frites.", hint: "pas d'article", answer: "de" },
        { sentence: "Pas assez ___ frites.", hint: "pas d'article", answer: "de" },
        { sentence: "assez ___ sucre", hint: "pas d'article", answer: "de" },
        { sentence: "un kilo ___ oranges", hint: "élision", answer: "d'" },
        { sentence: "une bouteille ___ huile", hint: "élision", answer: "d'" },
        { sentence: "un litre ___ lait", hint: "consonne", answer: "de" },
        { sentence: "un morceau ___ fromage", hint: "consonne", answer: "de" },
        { sentence: "Je mange beaucoup ___ chocolat.", hint: "pas d'article", answer: "de" },
      ],
    },
  ],
};
