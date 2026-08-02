import type { GrammarLesson } from "../../grammar-data";

/** Unité 8 — Les verbes en -ir (G1.8) */
export const A1_GR_VERBES_IR: GrammarLesson = {
  slug: "a1-gr-verbes-ir",
  code: "G1.8",
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
      trans: { en: "Model: finir", ar: "نموذج finir", fa: "الگوی finir", ti: "ሞዴል finir", uk: "Модель finir" },
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
      trans: { en: "Model: ouvrir", ar: "نموذج ouvrir", fa: "الگوی ouvrir", ti: "ሞዴል ouvrir", uk: "Модель ouvrir" },
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
        { sentence: "Tu ___ le fromage.", choices: ["finis", "finit", "finissez", "finissent"], correctIdx: 0 },
        { sentence: "Elle ___ le dîner.", choices: ["finit", "finis", "finissons", "finissent"], correctIdx: 0 },
        { sentence: "J'___ la porte.", choices: ["ouvre", "ouvres", "ouvrons", "ouvrez"], correctIdx: 0 },
        { sentence: "Vous ___ le lave-vaisselle.", choices: ["ouvrez", "ouvrons", "ouvre", "ouvrent"], correctIdx: 0 },
        { sentence: "Ils ___ la machine à laver.", choices: ["ouvrent", "ouvre", "ouvrons", "ouvrez"], correctIdx: 0 },
        { sentence: "Nous ___ le réfrigérateur.", choices: ["ouvrons", "ouvrez", "ouvre", "ouvrent"], correctIdx: 0 },
        { sentence: "Tu ___ les fenêtres.", choices: ["ouvres", "ouvre", "ouvrez", "ouvrent"], correctIdx: 0 },
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
        { sentence: "Elle ___ (réussir) l'examen.", hint: "réussir → elle", answer: "réussit" },
        { sentence: "Nous ___ (réfléchir) bien.", hint: "réfléchir → nous", answer: "réfléchissons" },
        { sentence: "J'___ (ouvrir) la porte.", hint: "ouvrir → je", answer: "ouvre" },
        { sentence: "Tu ___ (offrir) des fleurs.", hint: "offrir → tu", answer: "offres" },
        { sentence: "Ils ___ (découvrir) la ville.", hint: "découvrir → ils", answer: "découvrent" },
        { sentence: "Vous ___ (ouvrir) les fenêtres.", hint: "ouvrir → vous", answer: "ouvrez" },
        { sentence: "On ___ (finir) le plat.", hint: "finir → on", answer: "finit" },
      ],
    },
  ],
};
