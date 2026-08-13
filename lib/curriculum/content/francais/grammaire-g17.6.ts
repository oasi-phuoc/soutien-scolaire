import type { GrammarLesson } from "../../grammar-data";

/** Unité 81 — L'expression de l'hypothèse avec si et de la condition (G4.51) */
export const A1_GR_HYPOTHESE_CONDITION: GrammarLesson = {
  slug: "a1-gr-hypothese-condition",
  code: "G4.51",
  level: "A1",
  title: "L'expression de l'hypothèse avec si et de la condition",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "text",
      items: [
        "Hypothèse : imaginer des possibilités ou une réalité différente. → Si j'avais le temps, je ferais plus de choses.",
        "Condition : un événement doit se produire pour qu'un autre ait lieu. → Je viendrai {a}à condition que{/a} tu m'appelles.",
      ],
    },
    {
      type: "heading",
      text: "Hypothèse avec si",
    },
    {
      type: "grid",
      headers: ["Structure", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Si + présent → futur", "possibilité future", "Si j'ai beaucoup d'argent, je partirai loin."],
        ["Si + imparfait → conditionnel présent", "présent différent", "Si j'avais le temps, je ferais plus de choses."],
        ["Si + plus-que-parfait → conditionnel", "passé différent", "S'il était parti plus tôt, il serait arrivé à l'heure."],
      ],
    },
    {
      type: "note",
      text: "Aussi : {a}si{/a} + présent → impératif. → Si vous avez un problème, prévenez-moi.",
    },
    {
      type: "note",
      text: "Écrire {a}s'il / s'ils{/a} (pas : si il / si ils). Jamais de futur ni de conditionnel dans la subordonnée en {a}si{/a}.",
    },
    {
      type: "note",
      text: "On peut remplacer la subordonnée en {a}si{/a} par {a}en cas de{/a} + nom. → Je t'appelle {a}en cas de{/a} problème.",
    },
    {
      type: "heading",
      text: "Expression de la condition",
    },
    {
      type: "text",
      items: [
        "{a}Si{/a} + présent → futur. → Si j'ai le temps, je viendrai.",
        "{a}À condition que{/a} + subjonctif. → … à condition que mon train n'ait pas de retard.",
        "Même sujet : {a}à condition de{/a} + infinitif {a}ou{/a} à condition que + subjonctif. → … à condition de partir plus tôt / à condition que je parte plus tôt.",
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Hypothèse et condition",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Si j'ai beaucoup d'argent, je ___ loin.", choices: ["partirai", "partirais", "partais"], correctIdx: 0 },
        { sentence: "Si j'avais le temps, je ___ plus de choses.", choices: ["ferais", "ferai", "fais"], correctIdx: 0 },
        { sentence: "S'il était parti plus tôt, il ___ à l'heure.", choices: ["serait arrivé", "arrivera", "arrive"], correctIdx: 0 },
        { sentence: "Si vous avez un problème, ___ -moi.", choices: ["prévenez", "préviendrez", "préviendriez"], correctIdx: 0 },
        { sentence: "___ avait le temps… (élision)", choices: ["S'il", "Si il", "Si'il"], correctIdx: 0 },
        { sentence: "Dans la subordonnée en si, on n'emploie pas le ___ .", choices: ["futur", "présent", "imparfait"], correctIdx: 0 },
        { sentence: "Je t'appelle ___ problème.", choices: ["en cas de", "à condition que", "si de"], correctIdx: 0 },
        { sentence: "J'arriverai à l'heure ___ mon train n'ait pas de retard.", choices: ["à condition que", "si que", "en cas que"], correctIdx: 0 },
        { sentence: "Même sujet : à condition ___ partir plus tôt.", choices: ["de", "que", "à"], correctIdx: 0 },
        { sentence: "Si j'ai le temps, je ___ .", choices: ["viendrai", "viendrais", "venais"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Complétez avec la forme attendue.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Si j'ai de l'argent, je ___ . (partir)", hint: "futur", answer: "partirai" },
        { sentence: "Si j'avais le temps, je ___ plus. (faire)", hint: "conditionnel", answer: "ferais" },
        { sentence: "S'il ___ plus tôt, il serait arrivé. (partir, PQP)", hint: "plus-que-parfait", answer: "était parti" },
        { sentence: "___ avait un problème… (élision)", hint: "s'il", answer: "S'il" },
        { sentence: "Je t'appelle ___ problème.", hint: "nom", answer: "en cas de" },
        { sentence: "J'arriverai à l'heure ___ mon train n'ait pas de retard.", hint: "subjonctif", answer: "à condition que" },
        { sentence: "… à condition ___ partir plus tôt. (même sujet)", hint: "infinitif", answer: "de" },
        { sentence: "Si vous avez un problème, ___ -moi. (prévenir)", hint: "impératif", answer: "prévenez" },
        { sentence: "Si j'ai le temps, je ___ . (venir)", hint: "futur", answer: "viendrai" },
        { sentence: "Si j'avais le temps, je t'___ avec plaisir ! (aider)", hint: "conditionnel", answer: "aiderais" },
      ],
    },
  ],
};
