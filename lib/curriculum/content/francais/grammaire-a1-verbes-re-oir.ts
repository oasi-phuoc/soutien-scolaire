import type { GrammarLesson, VerbToggleVerb } from "../../grammar-data";

const VT_FAIRE: VerbToggleVerb[] = [
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
];

const VT_PRENDRE: VerbToggleVerb[] = [
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

const VT_CROIRE_BOIRE: VerbToggleVerb[] = [
  {
    infinitive: "croire",
    radical: "",
    rows: [
      { pronoun: "je", ending: "crois" },
      { pronoun: "tu", ending: "crois" },
      { pronoun: "il / elle / on", ending: "croit" },
      { pronoun: "nous", ending: "croyons" },
      { pronoun: "vous", ending: "croyez" },
      { pronoun: "ils / elles", ending: "croient" },
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
      noBulletItems: [0],
    },
    {
      type: "heading",
      text: "Verbes en -ire : lire, écrire, rire",
    },
    {
      type: "grid",
      headers: ["Pronom", "Lire", "Écrire", "Rire"],
      boldFirstCol: true,
      rows: [
        ["Je / J'", "lis", "écris", "ris"],
        ["Tu", "lis", "écris", "ris"],
        ["Il / Elle / On", "lit", "écrit", "rit"],
        ["Nous", "lisons", "écrivons", "rions"],
        ["Vous", "lisez", "écrivez", "riez"],
        ["Ils / Elles", "lisent", "écrivent", "rient"],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Comme lire : conduire, construire, élire, produire, traduire…",
        "Comme écrire : décrire, inscrire…",
        "Comme rire : sourire…",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Faire, dire et mettre",
    },
    {
      type: "grid",
      headers: ["Pronom", "Faire", "Dire", "Mettre"],
      boldFirstCol: true,
      rows: [
        ["Je", "fais", "dis", "mets"],
        ["Tu", "fais", "dis", "mets"],
        ["Il / Elle / On", "fait", "dit", "met"],
        ["Nous", "faisons", "disons", "mettons"],
        ["Vous", "faites", "dites", "mettez"],
        ["Ils / Elles", "font", "disent", "mettent"],
      ],
    },
    { type: "verb_toggle", buttonCols: 1, verbs: VT_FAIRE },
    {
      type: "note",
      text: "Attention à la prononciation de faisons. Formes irrégulières : vous faites, vous dites ; ils/elles font.",
    },
    {
      type: "heading",
      text: "Verbes en -dre : prendre et attendre",
    },
    {
      type: "grid",
      headers: ["Pronom", "Prendre", "Attendre"],
      boldFirstCol: true,
      rows: [
        ["Je", "prends", "attends"],
        ["Tu", "prends", "attends"],
        ["Il / Elle / On", "prend", "attend"],
        ["Nous", "prenons", "attendons"],
        ["Vous", "prenez", "attendez"],
        ["Ils / Elles", "prennent", "attendent"],
      ],
    },
    { type: "verb_toggle", buttonCols: 1, verbs: VT_PRENDRE },
    {
      type: "plain_list",
      items: [
        "{a}Prendre{/a}, apprendre et comprendre suivent le même modèle. Au pluriel, le radical devient {a}pren-{/a} ; à la 3e personne du pluriel, le n est doublé : {a}prennent{/a}.",
        "Comme prendre : apprendre, comprendre…",
        "Comme attendre : descendre, entendre, perdre, répondre, vendre…",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Savoir et connaître",
    },
    {
      type: "grid",
      headers: ["Pronom", "Savoir", "Connaître"],
      boldFirstCol: true,
      rows: [
        ["Je", "sais", "connais"],
        ["Tu", "sais", "connais"],
        ["Il / Elle / On", "sait", "connaît"],
        ["Nous", "savons", "connaissons"],
        ["Vous", "savez", "connaissez"],
        ["Ils / Elles", "savent", "connaissent"],
      ],
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
    {
      type: "heading",
      text: "Voir, recevoir et boire",
    },
    {
      type: "grid",
      headers: ["Pronom", "Voir", "Recevoir", "Boire"],
      boldFirstCol: true,
      rows: [
        ["Je", "vois", "reçois", "bois"],
        ["Tu", "vois", "reçois", "bois"],
        ["Il / Elle / On", "voit", "reçoit", "boit"],
        ["Nous", "voyons", "recevons", "buvons"],
        ["Vous", "voyez", "recevez", "buvez"],
        ["Ils / Elles", "voient", "reçoivent", "boivent"],
      ],
    },
    { type: "verb_toggle", buttonCols: 2, verbs: VT_CROIRE_BOIRE },
    {
      type: "plain_list",
      items: [
        "Comme voir : croire, prévoir, revoir…",
        "Comme recevoir : apercevoir…",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Verbes en -indre : peindre",
    },
    {
      type: "grid",
      headers: ["Pronom", "Peindre"],
      boldFirstCol: true,
      rows: [
        ["Je", "peins"],
        ["Tu", "peins"],
        ["Il / Elle / On", "peint"],
        ["Nous", "peignons"],
        ["Vous", "peignez"],
        ["Ils / Elles", "peignent"],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Comme peindre : craindre, éteindre, rejoindre…",
      ],
      allBullets: true,
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
