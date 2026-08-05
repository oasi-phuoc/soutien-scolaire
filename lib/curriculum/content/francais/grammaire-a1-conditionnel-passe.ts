import type { GrammarLesson } from "../../grammar-data";

/** Unité 75 — Le conditionnel passé (G4.45) */
export const A1_GR_CONDITIONNEL_PASSE: GrammarLesson = {
  slug: "a1-gr-conditionnel-passe",
  code: "G4.45",
  level: "A1",
  title: "Le conditionnel passé",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "highlight",
      label: "Regret",
      items: [
        "Souvent avec {a}aimer{/a}, {a}préférer{/a}, {a}souhaiter{/a}, {a}vouloir{/a}.",
        "J'{a}aurais voulu{/a} t'appeler mais je n'avais pas de téléphone.",
      ],
    },
    {
      type: "highlight",
      label: "Reproche",
      items: [
        "Souvent avec {a}devoir{/a}, {a}pouvoir{/a}, {a}falloir{/a}.",
        "Tu {a}aurais dû{/a} me prévenir.",
        "Aussi : À ta place, j'{a}aurais téléphoné{/a}.",
      ],
    },
    {
      type: "note",
      text: "Aussi dans les phrases hypothétiques (unité 81).",
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "plain_list",
      items: [
        "Temps composé : auxiliaire {a}avoir{/a} ou {a}être{/a} au conditionnel présent + participe passé.",
        "Choix de l'auxiliaire et accord : mêmes règles qu'au passé composé.",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "Exemples",
      items: [
        "Tu {a}aurais dû{/a} me prévenir.",
        "À ta place, je {a}serais arrivé{/a} plus tôt.",
        "À votre place, nous {a}nous serions inquiétés{/a}.",
      ],
    },
    {
      type: "note",
      text: "Négation : {a}pas{/a} entre l'auxiliaire et le participe. → Vous n'auriez {a}pas{/a} dû arriver si tard !",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Conditionnel passé",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Tu ___ me prévenir. (devoir)", choices: ["aurais dû", "as dû", "auras dû"], correctIdx: 0 },
        { sentence: "J'___ t'appeler. (vouloir, regret)", choices: ["aurais voulu", "ai voulu", "voudrais"], correctIdx: 0 },
        { sentence: "À ta place, je ___ plus tôt. (arriver, être)", choices: ["serais arrivé", "suis arrivé", "arriverais"], correctIdx: 0 },
        { sentence: "À votre place, nous ___ . (s'inquiéter)", choices: ["nous serions inquiétés", "nous sommes inquiétés", "nous inquiéterions"], correctIdx: 0 },
        { sentence: "Vous n'auriez ___ dû arriver si tard !", choices: ["pas", "point", "jamais de"], correctIdx: 0 },
        { sentence: "Formation : auxiliaire au ___ + participe passé.", choices: ["conditionnel présent", "imparfait", "futur"], correctIdx: 0 },
        { sentence: "À ta place, j'___ . (téléphoner)", choices: ["aurais téléphoné", "ai téléphoné", "téléphonerais"], correctIdx: 0 },
        { sentence: "Regret : souvent avec ___ .", choices: ["aimer / vouloir", "aller / venir", "être / avoir seulement"], correctIdx: 0 },
        { sentence: "Reproche : souvent avec ___ .", choices: ["devoir / pouvoir", "aimer / préférer", "aller / venir"], correctIdx: 0 },
        { sentence: "Elle ___ venir. (pouvoir, reproche)", choices: ["aurait pu", "a pu", "pourrait"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez le verbe au conditionnel passé.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Tu ___ me prévenir. (devoir)", hint: "reproche", answer: "aurais dû" },
        { sentence: "J'___ t'appeler. (vouloir)", hint: "regret", answer: "aurais voulu" },
        { sentence: "À ta place, je ___ plus tôt. (arriver)", hint: "être", answer: "serais arrivé" },
        { sentence: "À votre place, nous ___ . (s'inquiéter)", hint: "pronominal", answer: "nous serions inquiétés" },
        { sentence: "Vous n'auriez ___ dû arriver si tard !", hint: "négation", answer: "pas" },
        { sentence: "À ta place, j'___ . (téléphoner)", hint: "avoir", answer: "aurais téléphoné" },
        { sentence: "Elle ___ venir. (pouvoir)", hint: "reproche", answer: "aurait pu" },
        { sentence: "J'___ rester. (préférer)", hint: "regret", answer: "aurais préféré" },
        { sentence: "Ils ___ partir plus tôt. (devoir)", hint: "reproche", answer: "auraient dû" },
        { sentence: "Nous ___ être là. (vouloir)", hint: "regret", answer: "aurions voulu" },
      ],
    },
  ],
};
