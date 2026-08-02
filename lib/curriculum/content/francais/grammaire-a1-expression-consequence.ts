import type { GrammarLesson } from "../../grammar-data";

/** Unité 77 — L'expression de la conséquence (G4.44 ; 74–76 en attente) */
export const A1_GR_EXPRESSION_CONSEQUENCE: GrammarLesson = {
  slug: "a1-gr-expression-consequence",
  code: "G4.44",
  level: "A1",
  title: "L'expression de la conséquence",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Indiquer le résultat d'un fait ou d'une action, présenté comme certain.",
        "Exemple : Vous ne supportez pas la forte chaleur ? {a}Alors{/a}, restez chez vous !",
        "Il a fait {a}si{/a} chaud {a}que{/a} les piscines sont restées ouvertes jusqu'à minuit !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes et structure",
    },
    {
      type: "highlight",
      label: "donc / alors / par conséquent",
      items: [
        "Annoncent une conséquence ; {a}par conséquent{/a} est plus formel.",
        "Il a plu toute la journée {a}alors{/a} je suis restée chez moi.",
      ],
    },
    {
      type: "highlight",
      label: "si bien que + indicatif",
      items: [
        "Annonce une conséquence.",
        "Il a plu toute la journée {a}si bien que{/a} je suis restée chez moi.",
      ],
    },
    {
      type: "highlight",
      label: "c'est pourquoi / c'est la raison pour laquelle / c'est pour ça que",
      items: [
        "Donnent une explication ; {a}c'est pour ça que{/a} est plus familier.",
        "Il fait très chaud, {a}c'est la raison pour laquelle{/a} la ville distribue de l'eau gratuitement.",
      ],
    },
    {
      type: "highlight",
      label: "Intensité / quantité",
      items: [
        "{a}tellement / si{/a} + adjectif ou adverbe + {a}que{/a}.",
        "verbe + {a}tellement{/a} + {a}que{/a} ; {a}tellement de{/a} + nom + {a}que{/a}.",
        "Il a fait {a}si{/a} chaud {a}que{/a} les piscines sont restées ouvertes jusqu'à minuit !",
        "Il pleut {a}tellement que{/a} la rue est inondée.",
        "Il y a {a}tellement de{/a} vent {a}que{/a} je ne peux pas tenir debout.",
      ],
    },
    {
      type: "note",
      text: "Au passé composé, {a}tellement{/a} se place entre l'auxiliaire et le participe. → Il a {a}tellement{/a} plu {a}que{/a} la rue est inondée.",
    },
    {
      type: "note",
      text: "Avec {a}avoir besoin/chaud/envie/faim/froid/mal/peur/sommeil{/a} et {a}faire attention/beau/chaud/froid/mal/plaisir{/a}, on utilise {a}si{/a} ou {a}tellement{/a}.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Conséquence",
      instruction: "Choisissez la forme qui convient.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il a plu toute la journée ___ je suis restée chez moi.", choices: ["alors", "avant que", "afin que", "pendant que"], correctIdx: 0 },
        { sentence: "Il a plu ___ je suis restée chez moi.", choices: ["si bien que", "avant que", "afin de", "pour que"], correctIdx: 0 },
        { sentence: "Il fait très chaud, ___ la ville distribue de l'eau.", choices: ["c'est la raison pour laquelle", "avant que", "afin que", "pendant que"], correctIdx: 0 },
        { sentence: "Il a fait ___ chaud ___ les piscines sont restées ouvertes.", choices: ["si / que", "tellement / de", "si / de", "très / que"], correctIdx: 0 },
        { sentence: "Il pleut ___ la rue est inondée.", choices: ["tellement que", "tellement de", "si de", "alors que"], correctIdx: 0 },
        { sentence: "Il y a ___ vent ___ je ne peux pas tenir debout.", choices: ["tellement de / que", "tellement / de", "si / de", "alors / que"], correctIdx: 0 },
        { sentence: "Il a ___ plu que la rue est inondée.", choices: ["tellement", "si", "alors", "donc"], correctIdx: 0 },
        { sentence: "___ est plus formel.", choices: ["Par conséquent", "Alors", "C'est pour ça que", "Donc"], correctIdx: 0 },
        { sentence: "___ est plus familier.", choices: ["C'est pour ça que", "Par conséquent", "Si bien que", "C'est pourquoi"], correctIdx: 0 },
        { sentence: "Vous avez trop chaud ? ___ , restez chez vous !", choices: ["Alors", "Avant que", "Afin que", "Pendant que"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec le mot ou l'expression de conséquence.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Il a plu toute la journée ___ je suis restée chez moi.", hint: "alors / donc", answer: "alors" },
        { sentence: "Il a plu ___ je suis restée chez moi.", hint: "si bien que", answer: "si bien que" },
        { sentence: "Il a fait ___ chaud ___ les piscines sont ouvertes.", hint: "si… que", answer: "si" },
        { sentence: "Il pleut ___ que la rue est inondée.", hint: "intensité", answer: "tellement" },
        { sentence: "Il y a ___ de vent que je ne tiens pas debout.", hint: "quantité", answer: "tellement" },
        { sentence: "Il a ___ plu que la rue est inondée.", hint: "place au PC", answer: "tellement" },
        { sentence: "Il fait chaud, ___ on boit beaucoup. (formel)", hint: "formel", answer: "par conséquent" },
        { sentence: "Il pleut, ___ je prends mon parapluie. (familier)", hint: "familier", answer: "c'est pour ça que" },
        { sentence: "Il fait ___ chaud que j'ai besoin d'eau.", hint: "si/tellement", answer: "si" },
        { sentence: "Canicule ! ___ , restez chez vous !", hint: "conséquence", answer: "Alors" },
      ],
    },
  ],
};
