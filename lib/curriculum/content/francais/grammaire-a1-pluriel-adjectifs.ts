import type { GrammarLesson } from "../../grammar-data";

/** Unité 16 — Le pluriel des adjectifs (G3.2) */
export const A1_GR_PLURIEL_ADJECTIFS: GrammarLesson = {
  slug: "a1-gr-pluriel-adjectifs",
  code: "G3.2",
  level: "A1",
  title: "Le pluriel des adjectifs",
  theory: [
    {
      type: "heading",
      text: "Formation du pluriel",
    },
    {
      type: "plain_list",
      items: ["On ajoute souvent {a}-s{/a} au pluriel."],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Singulier", "Pluriel"],
      equalCols: true,
      rows: [
        ["Le sac est petit.", "Les sacs sont petit{a}s{/a}."],
        ["La voiture est petite.", "Les voitures sont petite{a}s{/a}."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Si l'adjectif singulier se termine par {a}s{/a} ou {a}x{/a}, le pluriel ne change pas.",
      ],
      noBulletItems: [0],
    },
    {
      type: "grid",
      headers: ["Singulier", "Pluriel"],
      equalCols: true,
      rows: [
        ["Cet homme est mauvais.", "Ces hommes sont mauvais."],
        ["Le professeur est ennuyeux.", "Les professeurs sont ennuyeux."],
      ],
    },
    {
      type: "heading",
      text: "Cas particuliers",
    },
    {
      type: "plain_list",
      items: [
        "Le féminin pluriel reste régulier (+ {a}s{/a}).",
      ],
      noBulletItems: [0],
    },
    {
      type: "selector",
      buttonCols: 2,
      tabs: [
        {
          label: "-al",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-al{/a} au singulier changent en {a}-aux{/a} au pluriel.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              equalCols: true,
              rows: [
                ["Ce pantalon est origin{a}al{/a}.", "Ces pantalons sont origin{a}aux{/a}."],
                ["Ce livre est nation{a}al{/a}.", "Ces livres sont nation{a}aux{/a}."],
                ["Ce problème est princip{a}al{/a}.", "Ces problèmes sont princip{a}aux{/a}."],
              ],
            },
            {
              type: "highlight",
              label: "Exceptions",
              items: [
                "fat{a}al{/a} → fatal{a}s{/a}",
                "ban{a}al{/a} → banal{a}s{/a}",
              ],
              noBulletItems: [0, 1],
            },
          ],
        },
        {
          label: "-eau",
          content: [
            {
              type: "plain_list",
              items: [
                "Les mots terminant par {a}-eau{/a} au singulier changent en {a}-eaux{/a} au pluriel.",
              ],
              noBulletItems: [0],
            },
            {
              type: "grid",
              headers: ["Singulier", "Pluriel"],
              equalCols: true,
              rows: [
                ["Ce pantalon est b{a}eau{/a}.", "Ces pantalons sont b{a}eaux{/a}."],
                ["Ce lit est nouv{a}eau{/a}.", "Ces lits sont nouv{a}eaux{/a}."],
                ["Ce frère est jum{a}eau{/a}.", "Ces frères sont jum{a}eaux{/a}."],
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
      title: "Pluriel des adjectifs",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Ils sont ___ .", choices: ["mariés", "marié", "mariées", "marie"], correctIdx: 0 },
        { sentence: "Elles sont ___ .", choices: ["heureuses", "heureuse", "heureux", "heureus"], correctIdx: 0 },
        { sentence: "Ces hommes sont ___ .", choices: ["jaloux", "jalouxes", "jalouse", "jalouses"], correctIdx: 0 },
        { sentence: "Ces pantalons sont ___ .", choices: ["originaux", "original", "originale", "originales"], correctIdx: 0 },
        { sentence: "Ces vestes sont ___ .", choices: ["originales", "originaux", "original", "originale"], correctIdx: 0 },
        { sentence: "Ces pantalons sont ___ .", choices: ["beaux", "beau", "belle", "belles"], correctIdx: 0 },
        { sentence: "Ces vestes sont ___ .", choices: ["belles", "beaux", "beau", "belle"], correctIdx: 0 },
        { sentence: "Ce pantalon et cette veste sont ___ .", choices: ["élégants", "élégantes", "élégant", "élégante"], correctIdx: 0 },
        { sentence: "Elles sont ___ .", choices: ["mariées", "mariés", "marié", "marie"], correctIdx: 0 },
        { sentence: "Ces hommes sont ___ .", choices: ["mauvais", "mauvaiss", "mauvaise", "mauvaises"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Accordez au pluriel",
      instruction: "Écrivez l'adjectif au pluriel correct.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Ils sont ___ (marié).", hint: "+ s", answer: "mariés" },
        { sentence: "Elles sont ___ (heureuse).", hint: "+ s", answer: "heureuses" },
        { sentence: "Ces hommes sont ___ (jaloux).", hint: "inchangé", answer: "jaloux" },
        { sentence: "Ces pantalons sont ___ (original).", hint: "-al → -aux", answer: "originaux" },
        { sentence: "Ces vestes sont ___ (originale).", hint: "+ s", answer: "originales" },
        { sentence: "Ces pantalons sont ___ (beau).", hint: "-eau → -eaux", answer: "beaux" },
        { sentence: "Ces vestes sont ___ (belle).", hint: "+ s", answer: "belles" },
        { sentence: "Ils sont ___ (élégant).", hint: "+ s", answer: "élégants" },
        { sentence: "Ces hommes sont ___ (gros).", hint: "inchangé", answer: "gros" },
        { sentence: "Elles sont ___ (nouvelle).", hint: "+ s", answer: "nouvelles" },
      ],
    },
  ],
};
