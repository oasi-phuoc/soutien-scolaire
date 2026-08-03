import type { GrammarLesson } from "../../grammar-data";

/** Unité 8 — Les verbes en -ir (G1.9) */
export const A1_GR_VERBES_IR: GrammarLesson = {
  slug: "a1-gr-verbes-ir",
  code: "G1.9",
  level: "A1",
  title: "Les verbes en -ir",
  theory: [
    {
      type: "plain_list",
      items: [
        "Les verbes avec un infinitif en {a}-ir{/a} n'ont pas tous la même conjugaison. Il y a quatre modèles de conjugaison.",
      ],
      noBulletItems: [0],
    },

    {
      type: "heading",
      text: "Modèle finir",
    },
    {
      type: "grid",
      headers: ["Pronom", "Finir", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Je", "finis", "le petit-déjeuner."],
        ["Tu", "finis", "le déjeuner."],
        ["Il / Elle / On", "finit", "le dîner."],
        ["Nous", "finissons", "le plat."],
        ["Vous", "finissez", "le fromage."],
        ["Ils / Elles", "finissent", "le dessert."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Ce verbe a deux radicaux : {a}fini-{/a} au singulier et {a}finiss-{/a} au pluriel.",
        "Même modèle : agir, applaudir, atterrir, choisir, grossir, maigrir, obéir, ralentir, réagir, réfléchir, remplir, (se) réunir, réussir, rougir, vieillir…",
      ],
      allBullets: true,
    },
    {
      type: "note",
      text: "On ne prononce pas le s et le t finaux au singulier (finis, finit). Au pluriel, on prononce le ss pour distinguer : il finit / ils finissent.",
    },

    {
      type: "heading",
      text: "Modèle ouvrir",
    },
    {
      type: "grid",
      headers: ["Pronom", "Ouvrir", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Je", "ouvre", "la porte."],
        ["Tu", "ouvres", "les fenêtres."],
        ["Il / Elle / On", "ouvre", "l'appartement."],
        ["Nous", "ouvrons", "le réfrigérateur."],
        ["Vous", "ouvrez", "le lave-vaisselle."],
        ["Ils / Elles", "ouvrent", "la machine à laver."],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Le radical est le même que l'infinitif ({a}ouvr-{/a}).",
        "Les terminaisons sont les mêmes que pour les verbes en {a}-er{/a} (voir Unité 4).",
        "Même modèle : découvrir, offrir, souffrir…",
      ],
      allBullets: true,
    },

    {
      type: "heading",
      text: "Modèle partir, dormir, servir",
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes ont deux radicaux : au singulier {a}par- / dor- / ser-{/a} ; au pluriel comme l'infinitif {a}part- / dorm- / serv-{/a}.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Pronom", "Partir", "Dormir", "Servir"],
      boldFirstCol: true,
      rows: [
        ["Je", "pars", "dors", "sers"],
        ["Tu", "pars", "dors", "sers"],
        ["Il / Elle / On", "part", "dort", "sert"],
        ["Nous", "partons", "dormons", "servons"],
        ["Vous", "partez", "dormez", "servez"],
        ["Ils / Elles", "partent", "dorment", "servent"],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Comme partir : sentir, mentir, sortir…",
        "Comme dormir : s'endormir…",
        "Comme servir : resservir…",
        "On ne prononce pas le s et le t finaux au singulier ; on prononce la consonne du 2e radical au pluriel (il part / ils partent).",
      ],
      allBullets: true,
    },

    {
      type: "heading",
      text: "Modèle venir et tenir",
    },
    {
      type: "plain_list",
      items: [
        "Ces verbes ont trois radicaux, avec des prononciations différentes.",
      ],
      allBullets: true,
    },
    {
      type: "grid",
      headers: ["Pronom", "Venir", "Tenir"],
      boldFirstCol: true,
      rows: [
        ["Je", "viens", "tiens"],
        ["Tu", "viens", "tiens"],
        ["Il / Elle / On", "vient", "tient"],
        ["Nous", "venons", "tenons"],
        ["Vous", "venez", "tenez"],
        ["Ils / Elles", "viennent", "tiennent"],
      ],
    },
    {
      type: "plain_list",
      items: [
        "Comme venir : revenir, prévenir, (se) souvenir…",
        "Comme tenir : obtenir, appartenir, soutenir, retenir…",
      ],
      allBullets: true,
    },

    {
      type: "heading",
      text: "Naître",
    },
    {
      type: "plain_list",
      items: [
        "Le verbe {a}naître{/a} est irrégulier. Au pluriel, le radical devient {a}naiss-{/a} (proche du modèle finir).",
      ],
    },
    {
      type: "verb_toggle",
      buttonCols: 1,
      verbs: [
        {
          infinitive: "naître",
          radical: "",
          rows: [
            { pronoun: "je", ending: "nais" },
            { pronoun: "tu", ending: "nais" },
            { pronoun: "il / elle / on", ending: "naît" },
            { pronoun: "nous", ending: "naissons" },
            { pronoun: "vous", ending: "naissez" },
            { pronoun: "ils / elles", ending: "naissent" },
          ],
        },
      ],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Verbes en -ir",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ le petit-déjeuner.", choices: ["finis", "finit", "finissons", "finissent"], correctIdx: 0 },
        { sentence: "Nous ___ le plat.", choices: ["finissons", "finissez", "finis", "finissent"], correctIdx: 0 },
        { sentence: "Ils ___ le dessert.", choices: ["finissent", "finit", "finis", "finissons"], correctIdx: 0 },
        { sentence: "J'___ la porte.", choices: ["ouvre", "ouvres", "ouvrons", "ouvrez"], correctIdx: 0 },
        { sentence: "Vous ___ le lave-vaisselle.", choices: ["ouvrez", "ouvrons", "ouvre", "ouvrent"], correctIdx: 0 },
        { sentence: "Je ___ en vacances.", choices: ["pars", "part", "partons", "partent"], correctIdx: 0 },
        { sentence: "Nous ___ à l'hôtel.", choices: ["dormons", "dormez", "dors", "dorment"], correctIdx: 0 },
        { sentence: "Il ___ une pizza.", choices: ["sert", "sers", "servons", "servent"], correctIdx: 0 },
        { sentence: "Tu ___ en métro.", choices: ["viens", "vient", "venons", "viennent"], correctIdx: 0 },
        { sentence: "Ils ___ mon sac.", choices: ["tiennent", "tient", "tenons", "tenez"], correctIdx: 0 },
        { sentence: "Vous ___ ensemble.", choices: ["partez", "partons", "pars", "partent"], correctIdx: 0 },
        { sentence: "Elle ___ bien.", choices: ["dort", "dors", "dormons", "dorment"], correctIdx: 0 },
        { sentence: "Nous ___ ensemble.", choices: ["venons", "venez", "viens", "viennent"], correctIdx: 0 },
        { sentence: "Tu ___ ton passeport.", choices: ["tiens", "tient", "tenons", "tenez"], correctIdx: 0 },
        { sentence: "Ils ___ lundi.", choices: ["partent", "part", "pars", "partez"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Conjuguez les verbes en -ir",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ (finir) mon travail.", hint: "finir → je", answer: "finis" },
        { sentence: "Vous ___ (finir) le fromage.", hint: "finir → vous", answer: "finissez" },
        { sentence: "Ils ___ (choisir) un dessert.", hint: "choisir → ils", answer: "choisissent" },
        { sentence: "J'___ (ouvrir) la porte.", hint: "ouvrir → je", answer: "ouvre" },
        { sentence: "Tu ___ (offrir) des fleurs.", hint: "offrir → tu", answer: "offres" },
        { sentence: "Je ___ (partir) en vacances.", hint: "partir → je", answer: "pars" },
        { sentence: "Nous ___ (dormir) à l'hôtel.", hint: "dormir → nous", answer: "dormons" },
        { sentence: "Elle ___ (servir) une pizza.", hint: "servir → elle", answer: "sert" },
        { sentence: "Tu ___ (venir) seul ?", hint: "venir → tu", answer: "viens" },
        { sentence: "Ils ___ (tenir) les bagages.", hint: "tenir → ils", answer: "tiennent" },
        { sentence: "Vous ___ (sortir) ensemble.", hint: "sortir → vous", answer: "sortez" },
        { sentence: "On ___ (revenir) demain.", hint: "revenir → on", answer: "revient" },
        { sentence: "Nous ___ (tenir) les visas.", hint: "tenir → nous", answer: "tenons" },
        { sentence: "Ils ___ (dormir) mal.", hint: "dormir → ils", answer: "dorment" },
        { sentence: "Je ___ (servir) un café.", hint: "servir → je", answer: "sers" },
      ],
    },
  ],
};
