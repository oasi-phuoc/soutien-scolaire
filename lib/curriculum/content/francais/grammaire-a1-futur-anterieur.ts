import type { GrammarLesson } from "../../grammar-data";

/** Unité 46 — Le futur antérieur (G4.16) */
export const A1_GR_FUTUR_ANTERIEUR: GrammarLesson = {
  slug: "a1-gr-futur-anterieur",
  code: "G4.16",
  level: "A1",
  title: "Le futur antérieur",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Le futur antérieur indique qu'une action secondaire a lieu {a}avant{/a} l'action principale.",
        "Exemple : Tu jugeras (action 1) quand il aura terminé (action 2) !",
        "Le verbe de la proposition principale est au futur simple ou à l'impératif.",
        "L'action secondaire est souvent introduite par {a}quand{/a}, {a}lorsque{/a}, {a}dès que{/a}… → Appelez-moi dès que vous aurez reçu le contrat.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "plain_list",
      items: [
        "Temps composé : auxiliaire {a}avoir{/a} ou {a}être{/a} au futur simple + participe passé.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Exemple"],
      rows: [
        ["J'aurai fini"],
        ["Tu seras arrivé(e)"],
        ["Il / elle / on aura terminé"],
        ["Nous serons parti(e)s"],
        ["Vous aurez couru"],
        ["Ils / elles se seront arrêté(e)s"],
      ],
    },
    {
      type: "note",
      text: "Verbe pronominal : On continuera quand tu te seras excusé(e).",
    },
    {
      type: "note",
      text: "Négation : Je n'aurai pas fini avant midi.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Futur antérieur",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Tu jugeras quand il ___ terminé.", choices: ["aura", "a", "avait", "va"], correctIdx: 0 },
        { sentence: "Appelez-moi dès que vous ___ reçu le contrat.", choices: ["aurez", "avez", "aviez", "aurez eu"], correctIdx: 0 },
        { sentence: "J'___ fini avant midi.", choices: ["aurai", "ai", "avais", "serai"], correctIdx: 0 },
        { sentence: "Tu ___ arrivé(e) demain.", choices: ["seras", "auras", "es", "vas"], correctIdx: 0 },
        { sentence: "Nous ___ partis avant midi.", choices: ["serons", "aurons", "sommes", "allons"], correctIdx: 0 },
        { sentence: "On continuera quand tu te ___ excusé(e).", choices: ["seras", "auras", "es", "seras été"], correctIdx: 0 },
        { sentence: "Je n'___ pas fini avant midi.", choices: ["aurai", "ai", "avais", "serai"], correctIdx: 0 },
        { sentence: "Formation : auxiliaire au ___ + participe.", choices: ["futur simple", "présent", "imparfait", "passé composé"], correctIdx: 0 },
        { sentence: "Conjunction fréquente : ___", choices: ["dès que", "parce que", "mais", "donc"], correctIdx: 0 },
        { sentence: "Ils se ___ arrêtés.", choices: ["seront", "auront", "sont", "vont"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'auxiliaire au futur ou le participe.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il ___ terminé bientôt.", hint: "avoir", answer: "aura" },
        { sentence: "Tu ___ arrivée demain.", hint: "être", answer: "seras" },
        { sentence: "Nous ___ partis tôt.", hint: "être", answer: "serons" },
        { sentence: "Vous aurez ___ le contrat. (recevoir)", hint: "PP", answer: "reçu" },
        { sentence: "J'aurai ___ avant midi. (finir)", hint: "PP", answer: "fini" },
        { sentence: "Ils se seront ___ . (arrêter)", hint: "PP mp", answer: "arrêtés" },
        { sentence: "Je n'aurai pas ___ . (finir)", hint: "PP", answer: "fini" },
        { sentence: "Dès que vous ___ mangé, partez.", hint: "avoir", answer: "aurez" },
        { sentence: "Quand elle ___ sortie, téléphone.", hint: "être", answer: "sera" },
        { sentence: "On continuera quand tu te seras ___ . (excuser)", hint: "PP", answer: "excusé" },
      ],
    },
  ],
};
