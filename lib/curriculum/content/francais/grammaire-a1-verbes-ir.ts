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
    },

    {
      type: "heading",
      text: "Modèle finir",
    },
    {
      type: "plain_list",
      items: [
        "Ce verbe a deux radicaux : {a}fini-{/a} au singulier et {a}finiss-{/a} au pluriel.",
      ],
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "finir", radical: "fini",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons", radical: "finiss" },
            { pronoun: "vous", ending: "ez", radical: "finiss" },
            { pronoun: "ils / elles", ending: "ent", radical: "finiss" },
          ],
        },
        {
          infinitive: "choisir", radical: "choisi",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons", radical: "choisiss" },
            { pronoun: "vous", ending: "ez", radical: "choisiss" },
            { pronoun: "ils / elles", ending: "ent", radical: "choisiss" },
          ],
        },
        {
          infinitive: "réfléchir", radical: "réfléchi",
          rows: [
            { pronoun: "je", ending: "s" },
            { pronoun: "tu", ending: "s" },
            { pronoun: "il / elle / on", ending: "t" },
            { pronoun: "nous", ending: "ons", radical: "réfléchiss" },
            { pronoun: "vous", ending: "ez", radical: "réfléchiss" },
            { pronoun: "ils / elles", ending: "ent", radical: "réfléchiss" },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
      accent: true,
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} On ne prononce pas le {a}s{/a} et le {a}t{/a} finaux au singulier (fini{a}s{/a}, fini{a}t{/a}).",
      ],
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} Au pluriel, on prononce le {a}ss{/a} pour distinguer : il finit / ils fini{a}ss{/a}ent.",
      ],
    },

    {
      type: "heading",
      text: "Modèle ouvrir",
    },
    {
      type: "plain_list",
      items: [
        "Le radical est le même que l'infinitif ({a}ouvr-{/a}). Les terminaisons sont les mêmes que pour les verbes en {a}-er{/a}.",
      ],
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "ouvrir", radical: "ouvr",
          rows: [
            { pronoun: "j'", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "offrir", radical: "offr",
          rows: [
            { pronoun: "j'", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "découvrir", radical: "découvr",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
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
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "partir", radical: "part",
          rows: [
            { pronoun: "je", ending: "s", radical: "par" },
            { pronoun: "tu", ending: "s", radical: "par" },
            { pronoun: "il / elle / on", ending: "t", radical: "par" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "dormir", radical: "dorm",
          rows: [
            { pronoun: "je", ending: "s", radical: "dor" },
            { pronoun: "tu", ending: "s", radical: "dor" },
            { pronoun: "il / elle / on", ending: "t", radical: "dor" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "servir", radical: "serv",
          rows: [
            { pronoun: "je", ending: "s", radical: "ser" },
            { pronoun: "tu", ending: "s", radical: "ser" },
            { pronoun: "il / elle / on", ending: "t", radical: "ser" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },
    {
      type: "heading",
      text: "Prononciation",
      accent: true,
    },
    {
      type: "plain_list",
      items: [
        "{a}1.{/a} On ne prononce pas le {a}s{/a} et le {a}t{/a} finaux au singulier.",
      ],
    },
    {
      type: "plain_list",
      items: [
        "{a}2.{/a} On prononce la consonne du 2e radical au pluriel (il part / ils par{a}tent{/a}).",
      ],
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
    },
    {
      type: "verb_toggle",
      buttonCols: 3,
      verbs: [
        {
          infinitive: "venir", radical: "",
          rows: [
            { pronoun: "je", ending: "viens" },
            { pronoun: "tu", ending: "viens" },
            { pronoun: "il / elle / on", ending: "vient" },
            { pronoun: "nous", ending: "venons" },
            { pronoun: "vous", ending: "venez" },
            { pronoun: "ils / elles", ending: "viennent" },
          ],
        },
        {
          infinitive: "tenir", radical: "",
          rows: [
            { pronoun: "je", ending: "tiens" },
            { pronoun: "tu", ending: "tiens" },
            { pronoun: "il / elle / on", ending: "tient" },
            { pronoun: "nous", ending: "tenons" },
            { pronoun: "vous", ending: "tenez" },
            { pronoun: "ils / elles", ending: "tiennent" },
          ],
        },
        {
          infinitive: "obtenir", radical: "",
          rows: [
            { pronoun: "j'", ending: "obtiens" },
            { pronoun: "tu", ending: "obtiens" },
            { pronoun: "il / elle / on", ending: "obtient" },
            { pronoun: "nous", ending: "obtenons" },
            { pronoun: "vous", ending: "obtenez" },
            { pronoun: "ils / elles", ending: "obtiennent" },
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
