import type { ConjLesson, VerbToggleVerb } from "../../conjugation-data";

const g9Verbs: VerbToggleVerb[] = [
  {
    infinitive: "se lever", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",           ending: "lève" },
      { pronoun: "tu",           ending: "lèves" },
      { pronoun: "il / elle / on", ending: "lève" },
      { pronoun: "nous",         ending: "levons" },
      { pronoun: "vous",         ending: "levez" },
      { pronoun: "ils / elles",  ending: "lèvent" },
    ],
  },
  {
    infinitive: "se coucher", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",           ending: "couche" },
      { pronoun: "tu",           ending: "couches" },
      { pronoun: "il / elle / on", ending: "couche" },
      { pronoun: "nous",         ending: "couchons" },
      { pronoun: "vous",         ending: "couchez" },
      { pronoun: "ils / elles",  ending: "couchent" },
    ],
  },
  {
    infinitive: "se laver", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",           ending: "lave" },
      { pronoun: "tu",           ending: "laves" },
      { pronoun: "il / elle / on", ending: "lave" },
      { pronoun: "nous",         ending: "lavons" },
      { pronoun: "vous",         ending: "lavez" },
      { pronoun: "ils / elles",  ending: "lavent" },
    ],
  },
  {
    infinitive: "se doucher", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",           ending: "douche" },
      { pronoun: "tu",           ending: "douches" },
      { pronoun: "il / elle / on", ending: "douche" },
      { pronoun: "nous",         ending: "douchons" },
      { pronoun: "vous",         ending: "douchez" },
      { pronoun: "ils / elles",  ending: "douchent" },
    ],
  },
  {
    infinitive: "se brosser", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",           ending: "brosse" },
      { pronoun: "tu",           ending: "brosses" },
      { pronoun: "il / elle / on", ending: "brosse" },
      { pronoun: "nous",         ending: "brossons" },
      { pronoun: "vous",         ending: "brossez" },
      { pronoun: "ils / elles",  ending: "brossent" },
    ],
  },
  {
    infinitive: "se raser", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",           ending: "rase" },
      { pronoun: "tu",           ending: "rases" },
      { pronoun: "il / elle / on", ending: "rase" },
      { pronoun: "nous",         ending: "rasons" },
      { pronoun: "vous",         ending: "rasez" },
      { pronoun: "ils / elles",  ending: "rasent" },
    ],
  },
  {
    infinitive: "se coiffer", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",           ending: "coiffe" },
      { pronoun: "tu",           ending: "coiffes" },
      { pronoun: "il / elle / on", ending: "coiffe" },
      { pronoun: "nous",         ending: "coiffons" },
      { pronoun: "vous",         ending: "coiffez" },
      { pronoun: "ils / elles",  ending: "coiffent" },
    ],
  },
  {
    infinitive: "s'habiller", radical: "",
    reflexivePronouns: ["m'", "t'", "s'", "nous", "vous", "s'"],
    rows: [
      { pronoun: "je",           ending: "habille" },
      { pronoun: "tu",           ending: "habilles" },
      { pronoun: "il / elle / on", ending: "habille" },
      { pronoun: "nous",         ending: "habillons" },
      { pronoun: "vous",         ending: "habillez" },
      { pronoun: "ils / elles",  ending: "habillent" },
    ],
  },
  {
    infinitive: "se reposer", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",           ending: "repose" },
      { pronoun: "tu",           ending: "reposes" },
      { pronoun: "il / elle / on", ending: "repose" },
      { pronoun: "nous",         ending: "reposons" },
      { pronoun: "vous",         ending: "reposez" },
      { pronoun: "ils / elles",  ending: "reposent" },
    ],
  },
];

export const A1_CONJ_L09: ConjLesson = {
  slug: "a1-conj-l09",
  code: "G.10",
  level: "A1",
  title: "Les verbes pronominaux",
  theory: [
    { type: "heading", text: "Les verbes pronominaux" },
    {
      type: "plain_list",
      items: [
        "Un verbe pronominal est toujours accompagné d'un pronom réfléchi.",
        "Le pronom change selon le sujet.",
      ],
    },
    {
      type: "grid",
      headers: ["Sujet", "Pronom réfléchi"],
      rows: [
        ["je", "{a}me (m'){/a}"],
        ["tu", "{a}te (t'){/a}"],
        ["il / elle / on", "{a}se (s'){/a}"],
        ["nous", "{a}nous{/a}"],
        ["vous", "{a}vous{/a}"],
        ["ils / elles", "{a}se (s'){/a}"],
      ],
    },
    { type: "heading", text: "Verbes pronominaux courants" },
    { type: "verb_toggle", verbs: g9Verbs, buttonCols: 3 },
    { type: "heading", text: "La négation" },
    {
      type: "plain_list",
      items: [
        "La négation {a}ne … pas{/a} encadre le pronom réfléchi ET le verbe.",
        "Sujet + {a}ne{/a} + pronom réfléchi + verbe + {a}pas{/a}",
      ],
    },
    { type: "verb_toggle", negation: true, verbs: g9Verbs, buttonCols: 3 },
    {
      type: "highlight",
      label: "Attention",
      inlineArrows: true,
      items: [
        "Quand le verbe commence par une voyelle ou un h, {a}me / te / se{/a} devient {a}m' / t' / s'{/a}.",
        "je m{s}e{/s} appelle → je m'appelle",
        "il s{s}e{/s} habille → il s'habille",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [],
};
