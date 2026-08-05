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
      type: "highlight",
      label: "Cas général",
      items: [
        "Adjectif pluriel = adjectif singulier + {a}s{/a}.",
        "Ludovic est marié. Marc et Louise sont mariés.",
        "Elle est heureuse. Elles sont heureuses.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "Cas particuliers",
      items: [
        "Si l'adjectif singulier se termine par {a}s{/a} ou {a}x{/a}, le pluriel ne change pas.",
        "Cet homme est mauvais / gros et ennuyeux / jaloux.",
        "Ces hommes sont mauvais / gros et ennuyeux / jaloux.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "highlight",
      label: "Pluriels masculins irréguliers",
      items: [
        "Le féminin pluriel reste régulier (+ {a}s{/a}).",
        "{a}-al → -aux{/a} : Ce pantalon est original. / Cette veste est originale. → Ces pantalons sont originaux. / Ces vestes sont originales.",
        "{a}-eau → -eaux{/a} : Ce pantalon est beau. / Cette veste est belle. → Ces pantalons sont beaux. / Ces vestes sont belles.",
      ],
      noBulletItems: [1, 2],
    },
    {
      type: "note",
      text: "Nom(s) masculin(s) + nom(s) féminin(s) = adjectif au pluriel masculin. → Ce pantalon et cette veste sont élégants.",
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "En général, singulier et pluriel se prononcent de la même façon. → court / courts ; courte / courtes ; nouveau / nouveaux ; nouvelle / nouvelles.",
        "Exception : {a}-al{/a} / {a}-aux{/a} change de prononciation au masculin pluriel. → original / originale / originales ≠ originaux.",
        "Quatre formes identiques à l'oral si le singulier se termine par une voyelle, ou si le masculin se termine par {a}r{/a} / {a}l{/a}. → marié / mariée / mariés / mariées ; noir / noire / noirs / noires.",
      ],
      allBullets: true,
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
