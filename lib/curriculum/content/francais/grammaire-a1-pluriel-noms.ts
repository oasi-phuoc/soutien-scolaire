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
                ["un anim{a}al{/a}", "des anim{a}aux{/a}"],
                ["un journ{a}al{/a}", "des journ{a}aux{/a}"],
                ["un chev{a}al{/a}", "des chev{a}aux{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un b{a}al{/a} → des bal{a}s{/a}",
                "un carnav{a}al{/a} → des carnaval{a}s{/a}",
                "un festiv{a}al{/a} → des festival{a}s{/a}",
                "un récit{a}al{/a} → des récital{a}s{/a}",
              ],
              noBulletItems: [0, 1, 2, 3],
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
                ["un déta{a}il{/a}", "des déta{a}ils{/a}"],
                ["un porta{a}il{/a}", "des porta{a}ils{/a}"],
                ["un éventa{a}il{/a}", "des éventa{a}ils{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un trav{a}ail{/a} → des trav{a}aux{/a}",
                "un vitr{a}ail{/a} → des vitr{a}aux{/a}",
                "un cor{a}ail{/a} → des cor{a}aux{/a}",
                "un b{a}ail{/a} → des b{a}aux{/a}",
              ],
              noBulletItems: [0, 1, 2, 3],
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
                ["un bat{a}eau{/a}", "des bat{a}eaux{/a}"],
                ["un gât{a}eau{/a}", "des gât{a}eaux{/a}"],
                ["un chap{a}eau{/a}", "des chap{a}eaux{/a}"],
                ["un cad{a}eau{/a}", "des cad{a}eaux{/a}"],
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
                ["un tuy{a}au{/a}", "des tuy{a}aux{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un land{a}au{/a} → des landau{a}s{/a}",
                "un sarr{a}au{/a} → des sarrau{a}s{/a}",
              ],
              noBulletItems: [0, 1],
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
                ["un f{a}eu{/a}", "des f{a}eux{/a}"],
                ["un j{a}eu{/a}", "des j{a}eux{/a}"],
                ["un li{a}eu{/a}", "des li{a}eux{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un pn{a}eu{/a} → des pneu{a}s{/a}",
                "un bl{a}eu{/a} → des bleu{a}s{/a}",
              ],
              noBulletItems: [0, 1],
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
                ["un tr{a}ou{/a}", "des trou{a}s{/a}"],
                ["un cl{a}ou{/a}", "des clou{a}s{/a}"],
                ["un c{a}ou{/a}", "des cou{a}s{/a}"],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "un bij{a}ou{/a} → des bij{a}oux{/a}",
                "un caill{a}ou{/a} → des caill{a}oux{/a}",
                "un ch{a}ou{/a} → des ch{a}oux{/a}",
                "un gen{a}ou{/a} → des gen{a}oux{/a}",
                "un hib{a}ou{/a} → des hib{a}oux{/a}",
                "un jouj{a}ou{/a} → des jouj{a}oux{/a}",
                "un p{a}ou{/a} → des p{a}oux{/a}",
              ],
              noBulletItems: [0, 1, 2, 3, 4, 5, 6],
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
                ["un {a}œil{/a}", "des {a}yeux{/a}"],
                ["un {a}monsieur{/a}", "des {a}messieurs{/a}"],
                ["{a}madame{/a}", "{a}mesdames{/a}"],
                ["{a}mademoiselle{/a}", "{a}mesdemoiselles{/a}"],
              ],
            },
          ],
        },
      ],
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
