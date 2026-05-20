import type { ConjLesson, VerbToggleVerb } from "../../conjugation-data";

const g10Verbs: VerbToggleVerb[] = [
  {
    infinitive: "arriver", radical: "arriv",
    meaning: "venir à destination", example: "Il arrive à 8 h.",
    rows: [
      { pronoun: "je",             ending: "e" },
      { pronoun: "tu",             ending: "es" },
      { pronoun: "il / elle / on", ending: "e" },
      { pronoun: "nous",           ending: "ons" },
      { pronoun: "vous",           ending: "ez" },
      { pronoun: "ils / elles",    ending: "ent" },
    ],
  },
  {
    infinitive: "partir", radical: "par",
    meaning: "quitter un endroit", example: "Je pars à midi.",
    rows: [
      { pronoun: "je",             ending: "s" },
      { pronoun: "tu",             ending: "s" },
      { pronoun: "il / elle / on", ending: "t" },
      { pronoun: "nous",           ending: "tons" },
      { pronoun: "vous",           ending: "tez" },
      { pronoun: "ils / elles",    ending: "tent" },
    ],
  },
  {
    infinitive: "entrer", radical: "entr",
    meaning: "aller à l'intérieur", example: "Elle entre dans la salle.",
    rows: [
      { pronoun: "je",             ending: "e" },
      { pronoun: "tu",             ending: "es" },
      { pronoun: "il / elle / on", ending: "e" },
      { pronoun: "nous",           ending: "ons" },
      { pronoun: "vous",           ending: "ez" },
      { pronoun: "ils / elles",    ending: "ent" },
    ],
  },
  {
    infinitive: "sortir", radical: "sor",
    meaning: "aller à l'extérieur", example: "Il sort du bureau.",
    rows: [
      { pronoun: "je",             ending: "s" },
      { pronoun: "tu",             ending: "s" },
      { pronoun: "il / elle / on", ending: "t" },
      { pronoun: "nous",           ending: "tons" },
      { pronoun: "vous",           ending: "tez" },
      { pronoun: "ils / elles",    ending: "tent" },
    ],
  },
  {
    infinitive: "monter", radical: "mont",
    meaning: "aller vers le haut", example: "Tu montes à pied ?",
    rows: [
      { pronoun: "je",             ending: "e" },
      { pronoun: "tu",             ending: "es" },
      { pronoun: "il / elle / on", ending: "e" },
      { pronoun: "nous",           ending: "ons" },
      { pronoun: "vous",           ending: "ez" },
      { pronoun: "ils / elles",    ending: "ent" },
    ],
  },
  {
    infinitive: "descendre", radical: "descend",
    meaning: "aller vers le bas", example: "Je descends du bus.",
    rows: [
      { pronoun: "je",             ending: "s" },
      { pronoun: "tu",             ending: "s" },
      { pronoun: "il / elle / on", ending: "" },
      { pronoun: "nous",           ending: "ons" },
      { pronoun: "vous",           ending: "ez" },
      { pronoun: "ils / elles",    ending: "ent" },
    ],
  },
  {
    infinitive: "retourner", radical: "retourn",
    meaning: "revenir à un endroit", example: "Elle retourne au travail.",
    rows: [
      { pronoun: "je",             ending: "e" },
      { pronoun: "tu",             ending: "es" },
      { pronoun: "il / elle / on", ending: "e" },
      { pronoun: "nous",           ending: "ons" },
      { pronoun: "vous",           ending: "ez" },
      { pronoun: "ils / elles",    ending: "ent" },
    ],
  },
  {
    infinitive: "rester", radical: "rest",
    meaning: "ne pas bouger", example: "Nous restons à la maison.",
    rows: [
      { pronoun: "je",             ending: "e" },
      { pronoun: "tu",             ending: "es" },
      { pronoun: "il / elle / on", ending: "e" },
      { pronoun: "nous",           ending: "ons" },
      { pronoun: "vous",           ending: "ez" },
      { pronoun: "ils / elles",    ending: "ent" },
    ],
  },
];

export const A1_CONJ_L12: ConjLesson = {
  slug: "a1-conj-l12",
  code: "G.11",
  level: "A1",
  title: "Les verbes de mouvement",
  theory: [
    { type: "heading", text: "Les verbes de mouvement" },
    { type: "plain_list", items: ["Ces verbes expriment un déplacement ou un changement de position. Voici les verbes les plus courants :"], noBulletItems: [0] },
    { type: "verb_toggle", verbs: g10Verbs, buttonCols: 4, noArrow: true },
  ],
  exercises: [],
};
