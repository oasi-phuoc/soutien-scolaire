import type { GrammarLesson } from "../../grammar-data";

/** Unité 73 — Subjonctif ou infinitif ? (G4.43) */
export const A1_GR_SUBJONCTIF_OU_INFINITIF: GrammarLesson = {
  slug: "a1-gr-subjonctif-ou-infinitif",
  code: "G4.43",
  level: "A1",
  title: "Subjonctif ou infinitif ?",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Certaines expressions exigent le subjonctif.",
        "Subjonctif seulement si les sujets des deux verbes sont {a}différents{/a}.",
        "Je voudrais qu'on {a}aille{/a} à la piscine samedi. (je ≠ on)",
        "Nous sommes contents que vous {a}soyez{/a} venus. (nous ≠ vous)",
        "Même sujet → {a}infinitif{/a}. → Je voudrais {a}aller{/a} à la piscine dimanche.",
        "Nous sommes contents d'{a}être{/a} venus. (pas : que nous soyons venus)",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Remarques",
    },
    {
      type: "plain_list",
      items: [
        "Infinitif présent : Je suis heureux de {a}partir{/a} en vacances.",
        "Infinitif passé : auxiliaire {a}être{/a}/{a}avoir{/a} à l'infinitif + participe. → Je suis heureux d'{a}être allé{/a} au Portugal.",
        "Mêmes règles d'auxiliaire et d'accord qu'au passé composé.",
        "Pronoms : Nous sommes contents de {a}vous{/a} revoir bientôt. ; Je suis furieuse de {a}m'{/a}être trompée.",
        "Négation : {a}ne pas{/a} devant l'infinitif. → Il a peur de {a}ne pas{/a} réussir. ; Je regrette de {a}ne pas{/a} avoir participé.",
        "Souvent précédé de {a}de/d'{/a} après un adjectif ou certains verbes. → Je suis contente d'aller… ; Il a peur de perdre.",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "Même sujet → infinitif ; sujets différents → subjonctif.",
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Subjonctif ou infinitif",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je voudrais ___ à la piscine. (même sujet)", choices: ["aller", "que j'aille", "que je vais"], correctIdx: 0 },
        { sentence: "Je voudrais qu'on ___ à la piscine. (sujets différents)", choices: ["aille", "aller", "allons"], correctIdx: 0 },
        { sentence: "Nous sommes contents ___ venus. (même sujet)", choices: ["d'être", "que nous soyons", "que nous sommes"], correctIdx: 0 },
        { sentence: "Nous sommes contents que vous ___ venus.", choices: ["soyez", "êtes", "être"], correctIdx: 0 },
        { sentence: "Je suis heureux de ___ en vacances.", choices: ["partir", "que je parte", "parte"], correctIdx: 0 },
        { sentence: "Je suis heureux d'___ au Portugal.", choices: ["être allé", "aller", "être alléé"], correctIdx: 0 },
        { sentence: "Il a peur de ___ réussir.", choices: ["ne pas", "pas ne", "ne"], correctIdx: 0 },
        { sentence: "Je regrette de ne pas ___ participé.", choices: ["avoir", "être", "avoir été"], correctIdx: 0 },
        { sentence: "Je suis contente ___ au stade.", choices: ["d'aller", "aller", "que j'aille"], correctIdx: 0 },
        { sentence: "Il a peur ___ perdre.", choices: ["de", "à", "que"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez la forme attendue (subjonctif ou infinitif).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je voudrais ___ à la piscine. (aller, même sujet)", hint: "infinitif", answer: "aller" },
        { sentence: "Je voudrais qu'on ___ à la piscine. (aller)", hint: "subjonctif", answer: "aille" },
        { sentence: "Nous sommes contents ___ venus. (même sujet)", hint: "infinitif passé", answer: "d'être" },
        { sentence: "Nous sommes contents que vous ___ venus.", hint: "subjonctif", answer: "soyez" },
        { sentence: "Je suis heureux de ___ . (partir)", hint: "infinitif", answer: "partir" },
        { sentence: "Je suis heureux d'___ . (aller, passé)", hint: "infinitif passé", answer: "être allé" },
        { sentence: "Il a peur de ___ réussir.", hint: "négation", answer: "ne pas" },
        { sentence: "Je regrette de ne pas ___ . (participer, passé)", hint: "infinitif passé", answer: "avoir participé" },
        { sentence: "Je suis contente d'___ au stade. (aller)", hint: "de + infinitif", answer: "aller" },
        { sentence: "Je suis furieuse de ___ trompée. (se)", hint: "pronominal", answer: "m'être" },
      ],
    },
  ],
};
