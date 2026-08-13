import type { GrammarLesson } from "../../grammar-data";

/** Unité 42 — Le plus-que-parfait (G4.12) */
export const A1_GR_PLUS_QUE_PARFAIT: GrammarLesson = {
  slug: "a1-gr-plus-que-parfait",
  code: "G4.12",
  level: "A1",
  title: "Le plus-que-parfait",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Le plus-que-parfait exprime une action secondaire antérieure à l'action principale dans un récit au passé.",
        "L'action principale est souvent au passé composé. → Il a appelé un serrurier (action principale) parce qu'il avait oublié ses clés (action secondaire).",
        "Lien avec le temps : Le train était déjà parti quand je suis arrivé.",
        "Lien avec la cause : Il a appelé un taxi parce qu'il avait manqué le train.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Si deux actions se suivent immédiatement, on emploie deux passés composés. → Je me suis couché quand je suis rentré. (pas : … quand j'étais rentré)",
    },
    {
      type: "heading",
      text: "Conjugaison",
    },
    {
      type: "text",
      items: [
        "Temps composé : auxiliaire {a}avoir{/a} ou {a}être{/a} à l'imparfait + participe passé.",
        "Il avait oublié ses clés. ; Le train était parti. ; Je m'étais réveillé trop tard.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Négation : {a}ne{/a} et {a}pas{/a} encadrent l'auxiliaire. → Je n'avais pas pris mes clés.",
    },
    {
      type: "heading",
      text: "Passé composé, imparfait ou plus-que-parfait ?",
    },
    {
      type: "text",
      items: [
        "Quand je suis arrivé, le train était parti. → le train est parti {a}avant{/a} mon arrivée.",
        "Quand je suis arrivé, le train partait. → le train était {a}en train de{/a} partir.",
        "Quand je suis arrivé, le train est parti. → le train est parti {a}après{/a} mon arrivée.",
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Plus-que-parfait",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il a appelé un serrurier parce qu'il ___ ses clés.", choices: ["avait oublié", "a oublié", "oubliait"], correctIdx: 0 },
        { sentence: "Le train ___ déjà parti quand je suis arrivé.", choices: ["était", "est", "a"], correctIdx: 0 },
        { sentence: "Il a appelé un taxi parce qu'il ___ le train.", choices: ["avait manqué", "a manqué", "manquait"], correctIdx: 0 },
        { sentence: "Je me suis couché quand je ___ rentré. (immédiat)", choices: ["suis", "étais", "avais"], correctIdx: 0 },
        { sentence: "Je ___ pas pris mes clés.", choices: ["n'avais", "n'ai", "n'étais"], correctIdx: 0 },
        { sentence: "Formation : auxiliaire à l'___ + participe passé.", choices: ["imparfait", "présent", "passé composé"], correctIdx: 0 },
        { sentence: "Quand je suis arrivé, le train était parti. → parti ___ .", choices: ["avant", "après", "en même temps"], correctIdx: 0 },
        { sentence: "Quand je suis arrivé, le train partait. → ___ .", choices: ["en cours", "avant", "après"], correctIdx: 0 },
        { sentence: "Quand je suis arrivé, le train est parti. → parti ___ .", choices: ["après", "avant", "jamais"], correctIdx: 0 },
        { sentence: "Je m'___ réveillé trop tard.", choices: ["étais", "avais", "ai"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez l'auxiliaire à l'imparfait ou le participe.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il ___ oublié ses clés.", hint: "avoir", answer: "avait" },
        { sentence: "Le train ___ parti.", hint: "être", answer: "était" },
        { sentence: "Je n'avais pas ___ mes clés. (prendre)", hint: "PP", answer: "pris" },
        { sentence: "Je m'___ réveillé trop tard.", hint: "être", answer: "étais" },
        { sentence: "Ils ___ manqué le train.", hint: "avoir", answer: "avaient" },
        { sentence: "Nous ___ déjà mangé.", hint: "avoir", answer: "avions" },
        { sentence: "Elle ___ sortie avant nous.", hint: "être", answer: "était" },
        { sentence: "Vous ___ fini le travail.", hint: "avoir", answer: "aviez" },
        { sentence: "Il avait ___ ses clés. (oublier)", hint: "PP", answer: "oublié" },
        { sentence: "Le film ___ commencé quand nous sommes arrivés.", hint: "avoir", answer: "avait" },
      ],
    },
  ],
};
