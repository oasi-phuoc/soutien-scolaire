import type { GrammarLesson } from "../../grammar-data";

/** Unité 68 — La forme passive (G4.38) */
export const A1_GR_FORME_PASSIVE: GrammarLesson = {
  slug: "a1-gr-forme-passive",
  code: "G4.38",
  level: "A1",
  title: "La forme passive",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Actif et passif : deux points de vue sur la même action.",
        "Actif (intérêt pour l'agent) : L'entreprise Eiffage a construit le viaduc de Millau.",
        "Passif (intérêt pour l'objet / le résultat) : Le viaduc de Millau a été construit entre 2002 et 2004 (par l'entreprise Eiffage).",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "text",
      text: "Formation : {a}être{/a} + participe passé. Le temps de {a}être{/a} donne le temps du passif.",
    },
    {
      type: "grid",
      headers: ["Temps", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Présent", "Le viaduc est construit"],
        ["Passé composé", "Le viaduc a été construit"],
        ["Imparfait", "Le viaduc était construit"],
        ["Futur simple", "Le viaduc sera construit"],
        ["Futur proche", "Le viaduc va être construit"],
        ["Passé récent", "Le viaduc vient d'être construit"],
      ],
    },
    {
      type: "note",
      text: "Agent introduit par {a}par{/a}. → construit par l'entreprise Eiffage. Pas de pronom personnel après {a}par{/a} en général.",
    },
    {
      type: "note",
      text: "Seuls les verbes avec COD peuvent se mettre au passif. ✗ J'ai été téléphoné. {a}Être{/a} et les pronominaux n'ont pas de passif.",
    },
    {
      type: "heading",
      text: "Orthographe",
    },
    {
      type: "text",
      text: "Le participe s'accorde avec le sujet. → La tour Eiffel a été construite en 1889.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Forme passive",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le viaduc ___ construit entre 2002 et 2004.", choices: ["a été", "a", "est été"], correctIdx: 0 },
        { sentence: "Le viaduc ___ construit. (présent)", choices: ["est", "a", "a été"], correctIdx: 0 },
        { sentence: "Le viaduc ___ construit. (futur)", choices: ["sera", "est", "a été"], correctIdx: 0 },
        { sentence: "Le viaduc ___ être construit. (futur proche)", choices: ["va", "vient", "est"], correctIdx: 0 },
        { sentence: "Construit ___ Eiffage.", choices: ["par", "de", "à"], correctIdx: 0 },
        { sentence: "La tour Eiffel a été ___ .", choices: ["construite", "construit", "construits"], correctIdx: 0 },
        { sentence: "Formation : ___ + participe passé.", choices: ["être", "avoir", "aller"], correctIdx: 0 },
        { sentence: "Le viaduc vient ___ être construit.", choices: ["d'", "de", "à"], correctIdx: 0 },
        { sentence: "✗ J'ai été téléphoné → parce que téléphoner n'a pas de ___ .", choices: ["COD", "sujet", "participe"], correctIdx: 0 },
        { sentence: "Les ponts ont été ___ .", choices: ["construits", "construit", "construite"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'auxiliaire ou le participe accordé.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Le viaduc ___ été construit.", hint: "PC", answer: "a" },
        { sentence: "Le viaduc ___ construit. (présent)", hint: "être", answer: "est" },
        { sentence: "Le viaduc ___ construit. (futur)", hint: "être", answer: "sera" },
        { sentence: "La tour a été ___ . (construire)", hint: "fs", answer: "construite" },
        { sentence: "Les maisons ont été ___ . (vendre)", hint: "fp", answer: "vendues" },
        { sentence: "Le film va ___ projeté.", hint: "être", answer: "être" },
        { sentence: "Le pont vient d'___ inauguré.", hint: "être", answer: "être" },
        { sentence: "Construit ___ l'entreprise.", hint: "agent", answer: "par" },
        { sentence: "Le viaduc ___ construit. (imparfait)", hint: "être", answer: "était" },
        { sentence: "Les routes ont été ___ . (refaire)", hint: "fp", answer: "refaites" },
      ],
    },
  ],
};
