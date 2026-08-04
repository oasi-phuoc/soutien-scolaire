import type { GrammarLesson } from "../../grammar-data";

/** Unité 13 — Le pluriel des noms (G2.3) */
export const A1_GR_PLURIEL_NOMS: GrammarLesson = {
  slug: "a1-gr-pluriel-noms",
  code: "G2.3",
  level: "A1",
  title: "Le pluriel des noms",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "On utilise le pluriel quand le nom désigne plusieurs éléments. → une pomme — des pommes.",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "plain_list",
      items: [
        "Dans les dictionnaires, les noms sont au singulier.",
        "Un nom s'emploie toujours avec un déterminant, qui indique le nombre : {a}une/la{/a} tasse (singulier), {a}des/les{/a} tasses (pluriel).",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "Formation du pluriel : cas général",
      items: [
        "Nom pluriel = nom singulier + {a}-s{/a}. → un fruit / des fruits ; une banane / des bananes.",
        "Si le nom singulier se termine par {a}s, x{/a} ou {a}z{/a}, le pluriel ne change pas. → le bras / les bras ; une noix / des noix ; un nez / des nez.",
      ],
    },
    {
      type: "highlight",
      label: "Cas particuliers",
      items: [
        "{a}-al{/a} et {a}-ail{/a} → {a}-aux{/a} : un animal / des animaux ; le travail / les travaux.",
        "{a}-eau{/a} et {a}-eu{/a} → {a}-eaux{/a} et {a}-eux{/a} : un gâteau / des gâteaux ; un feu / des feux.",
      ],
    },
    {
      type: "note",
      text: "Exceptions : œil → yeux ; genou → genoux.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "En général, on ne prononce pas les consonnes finales {a}s, x, z{/a} : singulier et pluriel sonnent souvent pareil. → un fruit / des fruits ; une banane / des bananes ; le bras / les bras ; une noix / des noix ; un nez / des nez ; un genou / deux genoux.",
        "Certains noms changent de prononciation au pluriel. → un animal / des animaux ; le travail / les travaux ; l'œil / les yeux ; un œuf / des œufs (le f de œuf se prononce, pas celui de œufs).",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Singulier / pluriel",
      instruction: "Choisissez la forme plurielle correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "une pomme → des ___", choices: ["pommes", "pomme", "pommeses", "pomms"], correctIdx: 0 },
        { sentence: "un fruit → des ___", choices: ["fruits", "fruit", "fruites", "fruix"], correctIdx: 0 },
        { sentence: "le bras → les ___", choices: ["bras", "brases", "braux", "brass"], correctIdx: 0 },
        { sentence: "un nez → des ___", choices: ["nez", "nezes", "neux", "ness"], correctIdx: 0 },
        { sentence: "un animal → des ___", choices: ["animaux", "animals", "animales", "animaus"], correctIdx: 0 },
        { sentence: "le travail → les ___", choices: ["travaux", "travails", "travailes", "travaus"], correctIdx: 0 },
        { sentence: "un gâteau → des ___", choices: ["gâteaux", "gâteaus", "gateaux", "gâteauxs"], correctIdx: 0 },
        { sentence: "un feu → des ___", choices: ["feux", "feus", "feues", "feuxs"], correctIdx: 0 },
        { sentence: "un œil → des ___", choices: ["yeux", "œils", "oeils", "yeuxs"], correctIdx: 0 },
        { sentence: "un genou → des ___", choices: ["genoux", "genous", "genoues", "genousx"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Écrivez le pluriel",
      instruction: "Donnez la forme plurielle du nom.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "une banane → des ___", hint: "+ s", answer: "bananes" },
        { sentence: "une noix → des ___", hint: "inchangé", answer: "noix" },
        { sentence: "un animal → des ___", hint: "-al → -aux", answer: "animaux" },
        { sentence: "un gâteau → des ___", hint: "-eau → -eaux", answer: "gâteaux" },
        { sentence: "un feu → des ___", hint: "-eu → -eux", answer: "feux" },
        { sentence: "un œil → des ___", hint: "irrégulier", answer: "yeux" },
        { sentence: "un genou → des ___", hint: "+ x", answer: "genoux" },
        { sentence: "le travail → les ___", hint: "-ail → -aux", answer: "travaux" },
        { sentence: "un fruit → des ___", hint: "+ s", answer: "fruits" },
        { sentence: "un nez → des ___", hint: "inchangé", answer: "nez" },
      ],
    },
  ],
};
