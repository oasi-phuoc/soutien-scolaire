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
      type: "highlight",
      label: "",
      items: [
        "une pomme — {a}des{/a} pomme{a}s{/a}",
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
        "Un nom s'emploie toujours avec un déterminant, qui indique le nombre.",
        "Dans les dictionnaires, les noms sont au singulier.",
      ],
      noBulletItems: [0, 1],
    },
    {
      type: "grid",
      headers: ["", "Indéfini", "Défini", "Nom"],
      boldFirstCol: true,
      rows: [
        ["Singulier", "{a}une{/a}", "{a}la{/a}", "tasse"],
        ["Pluriel", "{a}des{/a}", "{a}les{/a}", "tasse{a}s{/a}"],
      ],
    },
    {
      type: "heading",
      text: "Cas général",
      accent: true,
    },
    {
      type: "plain_list",
      items: [
        "Nom pluriel = nom singulier + {a}-s{/a}.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "un fruit → des fruit{a}s{/a}",
        "une banane → des banane{a}s{/a}",
      ],
      noBulletItems: [0, 1],
      inlineArrows: true,
    },
    {
      type: "plain_list",
      items: [
        "Si le nom singulier se termine par {a}s{/a}, {a}x{/a} ou {a}z{/a}, le pluriel ne change pas.",
      ],
      noBulletItems: [0],
    },
    {
      type: "highlight",
      label: "",
      items: [
        "le bra{a}s{/a} → les bra{a}s{/a}",
        "une noi{a}x{/a} → des noi{a}x{/a}",
        "un ne{a}z{/a} → des ne{a}z{/a}",
      ],
      noBulletItems: [0, 1, 2],
      inlineArrows: true,
    },
    {
      type: "highlight",
      label: "Certaines exceptions :",
      items: [],
    },
    {
      type: "plain_list",
      items: [
        "Certains noms forment leur pluriel autrement selon leur terminaison. Choisissez une terminaison pour voir les exemples et les exceptions.",
      ],
      noBulletItems: [0],
    },
    {
      type: "selector",
      buttonCols: 4,
      tabs: [
        {
          label: "-al",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un animal", "des animaux"],
                ["un journal", "des journaux"],
                ["un cheval", "des chevaux"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un bal → des bals",
                "un carnaval → des carnavals",
                "un festival → des festivals",
                "un récital → des récitals",
              ],
              noBulletItems: [0, 1, 2, 3],
              inlineArrows: true,
            },
          ],
        },
        {
          label: "-ail",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un détail", "des détails"],
                ["un portail", "des portails"],
                ["un éventail", "des éventails"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un travail → des travaux",
                "un vitrail → des vitraux",
                "un corail → des coraux",
                "un bail → des baux",
              ],
              noBulletItems: [0, 1, 2, 3],
              inlineArrows: true,
            },
          ],
        },
        {
          label: "-eau",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un bateau", "des bateaux"],
                ["un gâteau", "des gâteaux"],
                ["un chapeau", "des chapeaux"],
                ["un cadeau", "des cadeaux"],
              ],
            },
          ],
        },
        {
          label: "-au",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un tuyau", "des tuyaux"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un landau → des landaus",
                "un sarrau → des sarraus",
              ],
              noBulletItems: [0, 1],
              inlineArrows: true,
            },
          ],
        },
        {
          label: "-eu",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un feu", "des feux"],
                ["un jeu", "des jeux"],
                ["un lieu", "des lieux"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un pneu → des pneus",
                "un bleu → des bleus",
              ],
              noBulletItems: [0, 1],
              inlineArrows: true,
            },
          ],
        },
        {
          label: "-ou",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un trou", "des trous"],
                ["un clou", "des clous"],
                ["un cou", "des cous"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un bijou → des bijoux",
                "un caillou → des cailloux",
                "un chou → des choux",
                "un genou → des genoux",
                "un hibou → des hiboux",
                "un joujou → des joujoux",
                "un pou → des poux",
              ],
              noBulletItems: [0, 1, 2, 3, 4, 5, 6],
              inlineArrows: true,
            },
          ],
        },
        {
          label: "Cas particuliers",
          content: [
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              rows: [
                ["un œil", "des yeux"],
                ["un monsieur", "des messieurs"],
                ["madame", "mesdames"],
                ["mademoiselle", "mesdemoiselles"],
              ],
            },
          ],
        },
      ],
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
