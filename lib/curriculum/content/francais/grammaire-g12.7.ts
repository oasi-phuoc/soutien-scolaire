import type { GrammarLesson } from "../../grammar-data";

/** Unité 58 — Les pronoms démonstratifs (G4.28) */
export const A1_GR_PRONOMS_DEMONSTRATIFS: GrammarLesson = {
  slug: "a1-gr-pronoms-demonstratifs",
  code: "G4.28",
  level: "A1",
  title: "Les pronoms démonstratifs",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Ils remplacent un nom désignant une personne ou une chose qu'on voit ou qu'on a déjà mentionnée.",
        "Exemple : Celui que vous avez est très bien mais il y a aussi celui-ci.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Celui, celle, ceux, celles",
    },
    {
      type: "grid",
      headers: ["", "Forme", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["ms", "celui", "celui de droite"],
        ["fs", "celle", "celle de Julien"],
        ["mp", "ceux", "ceux que je préfère"],
        ["fp", "celles", "celles qui coûtent moins cher"],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Jamais seuls : toujours suivis d'une précision.",
        "{a}de + nom{/a} : lieu ou possession. → celui de droite ; celui de Stéphanie.",
        "Pronom relatif. → celle qui est en vitrine.",
        "{a}-ci{/a} (plus proche) / {a}-là{/a} (plus éloigné). → Celle-ci ou celle-là ?",
        "{a}en + matière{/a}. → Celui en cuir ?",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Ce, cela (ceci), ça",
    },
    {
      type: "plain_list",
      items: [
        "{a}Ce / C'est{/a} avec {a}être{/a}. → C'est mon ami. ; Ce sont mes amis. ; C'est beau.",
        "{a}Ce + relatif{/a} : la chose / les choses. → J'adore ce que tu as acheté.",
        "{a}Cela{/a} (soutenu) / {a}ça{/a} (familier). → Cela est intéressant ! ; Le chocolat, j'aime ça.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Ne pas confondre {a}ce{/a} et {a}ceux{/a}. → Ce que tu as dit… ≠ Ceux qui ont parlé…",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms démonstratifs",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ que vous avez est très bien.", choices: ["Celui", "Celle", "Ceux"], correctIdx: 0 },
        { sentence: "Il y a aussi ___ ; il est plus léger.", choices: ["celui-ci", "celle-ci", "ceux-ci"], correctIdx: 0 },
        { sentence: "___ de Julien est rouge.", choices: ["Celle", "Celui", "Ceux"], correctIdx: 0 },
        { sentence: "___ que je préfère sont chers.", choices: ["Ceux", "Celui", "Celle"], correctIdx: 0 },
        { sentence: "___ qui coûtent moins cher.", choices: ["Celles", "Ceux", "Celui"], correctIdx: 0 },
        { sentence: "Celle-___ ou celle-là ?", choices: ["ci", "là", "de"], correctIdx: 0 },
        { sentence: "Celui ___ cuir ?", choices: ["en", "de", "à"], correctIdx: 0 },
        { sentence: "___ mon ami.", choices: ["C'est", "Ce sont", "Ça"], correctIdx: 0 },
        { sentence: "J'adore ___ que tu as acheté.", choices: ["ce", "celui", "ça"], correctIdx: 0 },
        { sentence: "Le chocolat, j'aime ___ .", choices: ["ça", "ce", "celui"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez celui, celle, ceux, celles, ce, ça, -ci ou -là.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ de droite est mieux.", hint: "ms", answer: "Celui" },
        { sentence: "___ de Stéphanie est bleue.", hint: "fs", answer: "Celle" },
        { sentence: "___ que je préfère.", hint: "mp", answer: "Ceux" },
        { sentence: "___ qui sont en vitrine.", hint: "fp", answer: "Celles" },
        { sentence: "Celle-___ est plus légère.", hint: "proche", answer: "ci" },
        { sentence: "Celle-___ est trop chère.", hint: "loin", answer: "là" },
        { sentence: "___ sont mes amis.", hint: "être", answer: "Ce" },
        { sentence: "J'aime ___ que tu as dit.", hint: "neutre", answer: "ce" },
        { sentence: "Le ski, j'aime ___ .", hint: "familier", answer: "ça" },
        { sentence: "Celui ___ cuir est beau.", hint: "matière", answer: "en" },
      ],
    },
  ],
};
