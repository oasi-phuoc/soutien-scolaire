import type { GrammarLesson } from "../../grammar-data";

/** Unité 79 — L'expression du but (G4.49) */
export const A1_GR_EXPRESSION_BUT: GrammarLesson = {
  slug: "a1-gr-expression-but",
  code: "G4.49",
  level: "A1",
  title: "L'expression du but",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Exprimer une intention, un objectif, un résultat souhaité.",
        "Exemple : Je ferai tout mon possible {a}pour{/a} être là, {a}pour que{/a} nous soyons tous ensemble !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes et structure",
    },
    {
      type: "text",
      items: [
        "{a}pour{/a} / {a}afin de{/a} + infinitif.",
        "{a}pour que{/a} / {a}afin que{/a} + subjonctif.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Sujets", "Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["différents", "pour que / afin que + subjonctif", "… pour que nous soyons tous ensemble."],
        ["identiques", "pour / afin de + infinitif", "… pour / afin d'être là."],
      ],
    },
    {
      type: "note",
      text: "{a}Afin que{/a} et {a}afin de{/a} : langue soutenue.",
    },
    {
      type: "note",
      text: "Deux buts : on ne répète pas {a}pour que{/a}/{a}afin que{/a} → {a}que{/a} ; ni {a}afin de{/a} → {a}de{/a}. → … pour que nous soyons ensemble et {a}que{/a} nous fassions la fête. / … afin d'être avec vous et {a}de{/a} faire la fête.",
    },
    {
      type: "note",
      text: "Négation : {a}ne pas{/a} devant l'infinitif. → Je viendrai pour {a}ne pas{/a} manquer cette fête.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Expression du but",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ferai tout mon possible ___ être là. (même sujet)", choices: ["pour", "pour que", "afin que"], correctIdx: 0 },
        { sentence: "Je ferai tout mon possible ___ nous soyons tous ensemble.", choices: ["pour que", "pour", "afin de"], correctIdx: 0 },
        { sentence: "Je ferai tout ___ d'être là. (soutenu, même sujet)", choices: ["afin", "pour que", "afin que"], correctIdx: 0 },
        { sentence: "… pour que nous soyons ensemble et ___ nous fassions la fête.", choices: ["que", "pour que", "afin que"], correctIdx: 0 },
        { sentence: "… afin d'être avec vous et ___ faire la fête.", choices: ["de", "afin de", "pour"], correctIdx: 0 },
        { sentence: "Je viendrai pour ___ manquer cette fête.", choices: ["ne pas", "pas ne", "ne"], correctIdx: 0 },
        { sentence: "Sujets différents → ___ + subjonctif.", choices: ["pour que", "pour", "afin de"], correctIdx: 0 },
        { sentence: "Même sujet → ___ + infinitif.", choices: ["pour", "pour que", "afin que"], correctIdx: 0 },
        { sentence: "___ / afin de : langue soutenue.", choices: ["Afin que", "Alors", "Donc"], correctIdx: 0 },
        { sentence: "Je ferai tout pour que nous ___ tous ensemble. (être)", choices: ["soyons", "sommes", "serons"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec la forme de but attendue.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ferai tout mon possible ___ être là.", hint: "même sujet", answer: "pour" },
        { sentence: "Je ferai tout mon possible ___ nous soyons ensemble.", hint: "sujets différents", answer: "pour que" },
        { sentence: "Je ferai tout ___ d'être là. (soutenu)", hint: "afin", answer: "afin" },
        { sentence: "… pour que nous soyons ensemble et ___ nous fassions la fête.", hint: "2e but", answer: "que" },
        { sentence: "… afin d'être avec vous et ___ faire la fête.", hint: "2e but", answer: "de" },
        { sentence: "Je viendrai pour ___ manquer cette fête.", hint: "négation", answer: "ne pas" },
        { sentence: "Je ferai tout pour que nous ___ ensemble. (être)", hint: "subjonctif", answer: "soyons" },
        { sentence: "Je ferai tout ___ être à l'heure. (soutenu)", hint: "afin de", answer: "afin d'" },
        { sentence: "Il parle fort ___ tout le monde entende. (pour que)", hint: "but", answer: "pour que" },
        { sentence: "Elle étudie ___ réussir. (même sujet)", hint: "infinitif", answer: "pour" },
      ],
    },
  ],
};
