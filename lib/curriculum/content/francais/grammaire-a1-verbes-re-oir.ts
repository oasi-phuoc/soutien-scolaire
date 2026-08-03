import type { GrammarLesson, VerbToggleVerb } from "../../grammar-data";

const VT_DRE: VerbToggleVerb[] = [
  {
    infinitive: "prendre",
    radical: "",
    rows: [
      { pronoun: "je", ending: "prends" },
      { pronoun: "tu", ending: "prends" },
      { pronoun: "il / elle / on", ending: "prend" },
      { pronoun: "nous", ending: "prenons" },
      { pronoun: "vous", ending: "prenez" },
      { pronoun: "ils / elles", ending: "prennent" },
    ],
  },
  {
    infinitive: "attendre",
    radical: "attend",
    rows: [
      { pronoun: "j'", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "ent" },
    ],
  },
  {
    infinitive: "vendre",
    radical: "vend",
    rows: [
      { pronoun: "je", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "ent" },
    ],
  },
];

const VT_IRE: VerbToggleVerb[] = [
  {
    infinitive: "lire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "lis" },
      { pronoun: "tu", ending: "lis" },
      { pronoun: "il / elle / on", ending: "lit" },
      { pronoun: "nous", ending: "lisons" },
      { pronoun: "vous", ending: "lisez" },
      { pronoun: "ils / elles", ending: "lisent" },
    ],
  },
  {
    infinitive: "écrire",
    radical: "",
    rows: [
      { pronoun: "j'", ending: "écris" },
      { pronoun: "tu", ending: "écris" },
      { pronoun: "il / elle / on", ending: "écrit" },
      { pronoun: "nous", ending: "écrivons" },
      { pronoun: "vous", ending: "écrivez" },
      { pronoun: "ils / elles", ending: "écrivent" },
    ],
  },
  {
    infinitive: "rire",
    radical: "ri",
    rows: [
      { pronoun: "je", ending: "s" },
      { pronoun: "tu", ending: "s" },
      { pronoun: "il / elle / on", ending: "t" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "ent" },
    ],
  },
];

const VT_IRREGULIER: VerbToggleVerb[] = [
  {
    infinitive: "faire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "fais" },
      { pronoun: "tu", ending: "fais" },
      { pronoun: "il / elle / on", ending: "fait" },
      { pronoun: "nous", ending: "faisons" },
      { pronoun: "vous", ending: "faites" },
      { pronoun: "ils / elles", ending: "font" },
    ],
  },
  {
    infinitive: "dire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "dis" },
      { pronoun: "tu", ending: "dis" },
      { pronoun: "il / elle / on", ending: "dit" },
      { pronoun: "nous", ending: "disons" },
      { pronoun: "vous", ending: "dites" },
      { pronoun: "ils / elles", ending: "disent" },
    ],
  },
  {
    infinitive: "mettre",
    radical: "mett",
    rows: [
      { pronoun: "je", ending: "s", radical: "met" },
      { pronoun: "tu", ending: "s", radical: "met" },
      { pronoun: "il / elle / on", ending: "", radical: "met" },
      { pronoun: "nous", ending: "ons" },
      { pronoun: "vous", ending: "ez" },
      { pronoun: "ils / elles", ending: "ent" },
    ],
  },
];

const VT_OIR: VerbToggleVerb[] = [
  {
    infinitive: "voir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "vois" },
      { pronoun: "tu", ending: "vois" },
      { pronoun: "il / elle / on", ending: "voit" },
      { pronoun: "nous", ending: "voyons" },
      { pronoun: "vous", ending: "voyez" },
      { pronoun: "ils / elles", ending: "voient" },
    ],
  },
  {
    infinitive: "recevoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "reçois" },
      { pronoun: "tu", ending: "reçois" },
      { pronoun: "il / elle / on", ending: "reçoit" },
      { pronoun: "nous", ending: "recevons" },
      { pronoun: "vous", ending: "recevez" },
      { pronoun: "ils / elles", ending: "reçoivent" },
    ],
  },
  {
    infinitive: "boire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "bois" },
      { pronoun: "tu", ending: "bois" },
      { pronoun: "il / elle / on", ending: "boit" },
      { pronoun: "nous", ending: "buvons" },
      { pronoun: "vous", ending: "buvez" },
      { pronoun: "ils / elles", ending: "boivent" },
    ],
  },
];

const VT_INDRE: VerbToggleVerb[] = [
  {
    infinitive: "peindre",
    radical: "",
    rows: [
      { pronoun: "je", ending: "peins" },
      { pronoun: "tu", ending: "peins" },
      { pronoun: "il / elle / on", ending: "peint" },
      { pronoun: "nous", ending: "peignons" },
      { pronoun: "vous", ending: "peignez" },
      { pronoun: "ils / elles", ending: "peignent" },
    ],
  },
  {
    infinitive: "éteindre",
    radical: "",
    rows: [
      { pronoun: "j'", ending: "éteins" },
      { pronoun: "tu", ending: "éteins" },
      { pronoun: "il / elle / on", ending: "éteint" },
      { pronoun: "nous", ending: "éteignons" },
      { pronoun: "vous", ending: "éteignez" },
      { pronoun: "ils / elles", ending: "éteignent" },
    ],
  },
  {
    infinitive: "rejoindre",
    radical: "",
    rows: [
      { pronoun: "je", ending: "rejoins" },
      { pronoun: "tu", ending: "rejoins" },
      { pronoun: "il / elle / on", ending: "rejoint" },
      { pronoun: "nous", ending: "rejoignons" },
      { pronoun: "vous", ending: "rejoignez" },
      { pronoun: "ils / elles", ending: "rejoignent" },
    ],
  },
];

const VT_SAVOIR_CONNAITRE: VerbToggleVerb[] = [
  {
    infinitive: "savoir",
    radical: "",
    rows: [
      { pronoun: "je", ending: "sais" },
      { pronoun: "tu", ending: "sais" },
      { pronoun: "il / elle / on", ending: "sait" },
      { pronoun: "nous", ending: "savons" },
      { pronoun: "vous", ending: "savez" },
      { pronoun: "ils / elles", ending: "savent" },
    ],
  },
  {
    infinitive: "connaître",
    radical: "",
    rows: [
      { pronoun: "je", ending: "connais" },
      { pronoun: "tu", ending: "connais" },
      { pronoun: "il / elle / on", ending: "connaît" },
      { pronoun: "nous", ending: "connaissons" },
      { pronoun: "vous", ending: "connaissez" },
      { pronoun: "ils / elles", ending: "connaissent" },
    ],
  },
];

/** Unité 9 — Les verbes en -re et en -oir (G1.10) */
export const A1_GR_VERBES_RE_OIR: GrammarLesson = {
  slug: "a1-gr-verbes-re-oir",
  code: "G1.10",
  level: "A1",
  title: "Les verbes en -re et en -oir",
  theory: [
    {
      type: "plain_list",
      items: [
        "Les verbes avec un infinitif en {a}-re{/a} ou en {a}-oir{/a} ont des conjugaisons très irrégulières. Ils ont un, deux ou trois radicaux. Il y a plusieurs modèles de conjugaison. Les terminaisons sont généralement : {a}s, s, t/d, ons, ez, ent{/a}.",
      ],
    },

    {
      type: "heading",
      text: "Verbe irrégulier",
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_IRREGULIER },

    {
      type: "heading",
      text: "Verbes en -dre",
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_DRE },

    {
      type: "heading",
      text: "Verbes en -ire",
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_IRE },

    {
      type: "heading",
      text: "Verbes en -oir",
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_OIR },

    {
      type: "heading",
      text: "Verbes en -indre",
    },
    { type: "verb_toggle", buttonCols: 3, verbs: VT_INDRE },

    {
      type: "heading",
      text: "Savoir et connaître",
    },
    { type: "verb_toggle", buttonCols: 2, verbs: VT_SAVOIR_CONNAITRE },
    {
      type: "heading",
      text: "SAVOIR ou CONNAÎTRE ?",
      sub: true,
      accent: true,
    },
    {
      type: "grid",
      headers: ["Verbe", "Utilisation", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["savoir", "+ infinitif (capacité)", "Je sais nager."],
        ["savoir", "+ que / si / où… (fait)", "Je sais qu'il est français."],
        ["savoir", "+ nom (information)", "Tu sais l'heure ?"],
        ["connaître", "+ personne", "Je connais Marco."],
        ["connaître", "+ lieu / chose", "Elle connaît bien Paris."],
        ["connaître", "+ œuvre / domaine", "Tu connais ce film ?"],
      ],
    },
    {
      type: "highlight",
      label: "Règle simple",
      items: [
        "{a}Savoir{/a} = un fait, une information, une capacité.",
        "{a}Connaître{/a} = être familier avec une personne, un lieu ou une chose.",
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      items: [
        "On ne dit pas {s}je sais Paris{/s} mais {a}je connais Paris{/a}.",
        "On ne dit pas {s}je connais nager{/s} mais {a}je sais nager{/a}.",
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Verbes en -re et -oir",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ un magazine.", choices: ["lis", "lit", "lisons", "lisent"], correctIdx: 0 },
        { sentence: "Nous ___ une lettre.", choices: ["écrivons", "écrivez", "écris", "écrivent"], correctIdx: 0 },
        { sentence: "Vous ___ du rugby.", choices: ["faites", "faisons", "font", "fais"], correctIdx: 0 },
        { sentence: "Ils ___ de l'escalade.", choices: ["font", "fait", "faites", "faisons"], correctIdx: 0 },
        { sentence: "Vous ___ « Oui ».", choices: ["dites", "disons", "disent", "dis"], correctIdx: 0 },
        { sentence: "Je ___ le métro.", choices: ["prends", "prend", "prenons", "prennent"], correctIdx: 0 },
        { sentence: "Ils ___ le bateau.", choices: ["prennent", "prend", "prends", "prenez"], correctIdx: 0 },
        { sentence: "Je ___ conduire.", choices: ["sais", "sait", "connais", "savons"], correctIdx: 0 },
        { sentence: "Je ___ mes voisins.", choices: ["connais", "sais", "connaît", "savons"], correctIdx: 0 },
        { sentence: "Nous ___ une ville.", choices: ["voyons", "voyez", "vois", "voient"], correctIdx: 0 },
        { sentence: "Ils ___ une carte.", choices: ["reçoivent", "reçoit", "recevons", "recevez"], correctIdx: 0 },
        { sentence: "Vous ___ de l'eau.", choices: ["buvez", "buvons", "bois", "boivent"], correctIdx: 0 },
        { sentence: "Nous ___ le salon.", choices: ["peignons", "peignez", "peins", "peignent"], correctIdx: 0 },
        { sentence: "Elle ___ un chapeau.", choices: ["met", "mets", "mettez", "mettent"], correctIdx: 0 },
        { sentence: "Tu ___ le journal.", choices: ["lis", "lit", "lisez", "lisent"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Conjuguez",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ (lire) le journal.", hint: "lire → je", answer: "lis" },
        { sentence: "Ils ___ (écrire) mal.", hint: "écrire → ils", answer: "écrivent" },
        { sentence: "Vous ___ (faire) du foot.", hint: "faire → vous", answer: "faites" },
        { sentence: "Ils ___ (faire) du vélo.", hint: "faire → ils", answer: "font" },
        { sentence: "Vous ___ (dire) oui.", hint: "dire → vous", answer: "dites" },
        { sentence: "Je ___ (prendre) le bus.", hint: "prendre → je", answer: "prends" },
        { sentence: "Ils ___ (prendre) le train.", hint: "prendre → ils", answer: "prennent" },
        { sentence: "Je ___ (savoir) nager.", hint: "savoir → je", answer: "sais" },
        { sentence: "Elle ___ (connaître) Paris.", hint: "connaître → elle", answer: "connaît" },
        { sentence: "Nous ___ (boire) de l'eau.", hint: "boire → nous", answer: "buvons" },
      ],
    },
  ],
};
