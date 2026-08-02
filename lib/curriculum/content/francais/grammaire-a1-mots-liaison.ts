import type { GrammarLesson } from "../../grammar-data";

/** Unité 66 — Les mots de liaison (G4.36) */
export const A1_GR_MOTS_LIAISON: GrammarLesson = {
  slug: "a1-gr-mots-liaison",
  code: "G4.36",
  level: "A1",
  title: "Les mots de liaison",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
    },
    {
      type: "plain_list",
      items: [
        "Les mots de liaison organisent le discours de façon logique : récit ou argumentation plus clairs.",
        "Exemple : D'abord, on partage un moment avec ses amis. Puis, on apprend à suivre des règles. De plus, on entraîne son cerveau et, pour finir, on se déconnecte des écrans !",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Formes",
    },
    {
      type: "highlight",
      label: "Étapes du discours",
      items: [
        "Début : d'abord, tout d'abord, premièrement, pour commencer.",
        "Milieu : puis, ensuite, deuxièmement.",
        "Fin : enfin.",
      ],
    },
    {
      type: "highlight",
      label: "Expliquer ou ajouter",
      items: [
        "Par ailleurs, mais, de plus, d'autre part, d'un autre côté, en effet, en fait, en réalité.",
        "{a}D'une part / d'autre part{/a} et {a}d'un côté / d'un autre côté{/a} s'emploient généralement ensemble.",
      ],
    },
    {
      type: "highlight",
      label: "Illustrer",
      items: ["Par exemple, ainsi."],
    },
    {
      type: "highlight",
      label: "Reformuler",
      items: ["Autrement dit, en d'autres termes, c'est-à-dire."],
    },
    {
      type: "highlight",
      label: "Conclure",
      items: ["C'est pourquoi, donc, en résumé, en conclusion, pour finir, par conséquent, pour toutes ces raisons."],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Mots de liaison",
      instruction: "Choisissez le mot de liaison qui convient.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ , on partage un moment avec ses amis.", choices: ["D'abord", "Enfin", "Donc", "Ainsi"], correctIdx: 0 },
        { sentence: "___ , on apprend à suivre des règles.", choices: ["Puis", "D'abord", "Donc", "C'est pourquoi"], correctIdx: 0 },
        { sentence: "___ , on entraîne son cerveau.", choices: ["De plus", "D'abord", "Enfin", "Ainsi"], correctIdx: 0 },
        { sentence: "___ , on se déconnecte des écrans.", choices: ["Pour finir", "D'abord", "Puis", "Par exemple"], correctIdx: 0 },
        { sentence: "___ , les jeux entraînent la mémoire.", choices: ["Par exemple", "D'abord", "Donc", "Enfin"], correctIdx: 0 },
        { sentence: "___ , ils sont utiles. (= reformuler)", choices: ["Autrement dit", "Puis", "D'abord", "Par exemple"], correctIdx: 0 },
        { sentence: "___ , je recommande ces jeux.", choices: ["En conclusion", "Puis", "D'abord", "Ainsi"], correctIdx: 0 },
        { sentence: "Il pleut ; ___ , on reste.", choices: ["c'est pourquoi", "d'abord", "puis", "par exemple"], correctIdx: 0 },
        { sentence: "D'une part… ___ …", choices: ["d'autre part", "d'abord", "enfin", "ainsi"], correctIdx: 0 },
        { sentence: "___ (= en réalité)", choices: ["En fait", "Puis", "D'abord", "Ainsi"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Complétez",
      instruction: "Écrivez d'abord, puis, de plus, enfin, par exemple, donc ou autrement dit.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "___ , lisez le texte.", hint: "début", answer: "D'abord" },
        { sentence: "___ , répondez aux questions.", hint: "suite", answer: "Puis" },
        { sentence: "___ , vérifiez vos réponses.", hint: "ajout", answer: "De plus" },
        { sentence: "___ , remettez la copie.", hint: "fin", answer: "Enfin" },
        { sentence: "___ , le Scrabble.", hint: "exemple", answer: "Par exemple" },
        { sentence: "Il est fatigué ; ___ , il se couche.", hint: "conclusion", answer: "donc" },
        { sentence: "___ , il refuse.", hint: "reformuler", answer: "Autrement dit" },
        { sentence: "___ , pour commencer…", hint: "début", answer: "D'abord" },
        { sentence: "___ , deuxièmement…", hint: "milieu", answer: "Puis" },
        { sentence: "___ , pour finir.", hint: "fin", answer: "Enfin" },
      ],
    },
  ],
};
