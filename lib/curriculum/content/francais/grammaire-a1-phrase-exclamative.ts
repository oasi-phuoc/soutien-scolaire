import type { GrammarLesson } from "../../grammar-data";

/** Unité 34 — La phrase exclamative (G4.4) */
export const A1_GR_PHRASE_EXCLAMATIVE: GrammarLesson = {
  slug: "a1-gr-phrase-exclamative",
  code: "G4.4",
  level: "A1",
  title: "La phrase exclamative",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "La phrase exclamative exprime différents sentiments : la surprise, l'admiration, la joie, le découragement, le regret…",
      ],
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Structures",
    },
    {
      type: "plain_list",
      items: [
        "Toute phrase affirmative peut devenir exclamative avec une intonation différente et un point d'exclamation. → C'est beau ! ; Il y a trop de monde !",
        "On peut aussi employer des mots particuliers en début de phrase.",
      ],
      allBullets: true,
    },
    {
      type: "highlight",
      label: "Quel(s) / Quelle(s)",
      items: [
        "Suivi d'un groupe nominal ; s'accorde avec le nom. → Quel beau tableau !",
      ],
    },
    {
      type: "highlight",
      label: "Que / Comme / Qu'est-ce que",
      items: [
        "Avec une phrase complète. → Que ce musée est intéressant ! ; Comme ce musée est intéressant ! ; Qu'est-ce que c'est intéressant !",
      ],
    },
    {
      type: "highlight",
      label: "Qu'est-ce que… comme / Que de",
      items: [
        "Avec un nom pour exprimer une grande quantité. → Qu'est-ce qu'il y a comme monde ! ; Que de monde il y a ! (= Il y a beaucoup de monde !)",
        "{a}Que de{/a} est formel. {a}Qu'est-ce que… comme{/a} est familier.",
      ],
      noBulletItems: [1],
    },
    {
      type: "heading",
      text: "Prononciation",
    },
    {
      type: "plain_list",
      items: [
        "Ne pas confondre affirmation et exclamation. → C'est beau. / C'est beau !",
        "Ne pas confondre question et exclamation. → Quels beaux tableaux ? / Quels beaux tableaux !",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Phrase exclamative",
      instruction: "Choisissez la formulation correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ beau tableau !", choices: ["Quel", "Quelle", "Quels", "Que"], correctIdx: 0 },
        { sentence: "___ cette exposition est belle !", choices: ["Comme", "Quel", "Combien", "Où"], correctIdx: 0 },
        { sentence: "___ ce musée est intéressant !", choices: ["Que", "Quel", "Qui", "Où"], correctIdx: 0 },
        { sentence: "___ c'est intéressant !", choices: ["Qu'est-ce que", "Quel", "Combien", "Qui"], correctIdx: 0 },
        { sentence: "___ il y a comme monde !", choices: ["Qu'est-ce qu'", "Quel", "Que de", "Comme"], correctIdx: 0 },
        { sentence: "___ monde il y a ! (formel)", choices: ["Que de", "Qu'est-ce que comme", "Quel", "Comme"], correctIdx: 0 },
        { sentence: "C'est beau ___", choices: ["!", "?", ".", ","], correctIdx: 0 },
        { sentence: "Quels beaux tableaux ___ (exclamation)", choices: ["!", "?", ".", "…"], correctIdx: 0 },
        { sentence: "« Que de » est ___ .", choices: ["formel", "familier", "interrogatif", "négatif"], correctIdx: 0 },
        { sentence: "« Qu'est-ce que… comme » est ___ .", choices: ["familier", "formel", "écrit seulement", "incorrect"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez quel(le), que, comme, qu'est-ce que ou que de.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ beau tableau !", hint: "ms", answer: "Quel" },
        { sentence: "___ belle exposition !", hint: "fs", answer: "Quelle" },
        { sentence: "___ cette exposition est belle !", hint: "comme/que", answer: "Comme" },
        { sentence: "___ ce musée est intéressant !", hint: "que/comme", answer: "Que" },
        { sentence: "___ c'est intéressant !", hint: "familier", answer: "Qu'est-ce que" },
        { sentence: "___ monde il y a ! (formel)", hint: "quantité", answer: "Que de" },
        { sentence: "Qu'est-ce qu'il y a ___ monde !", hint: "familier", answer: "comme" },
        { sentence: "___ beaux tableaux !", hint: "mp", answer: "Quels" },
        { sentence: "C'est beau___", hint: "ponctuation", answer: "!" },
        { sentence: "___ ce tableau est beau !", hint: "que/comme", answer: "Comme" },
      ],
    },
  ],
};
