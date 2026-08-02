import type { GrammarLesson } from "../../grammar-data";

/** Unité 9 — Les verbes en -re et en -oir (G1.9) */
export const A1_GR_VERBES_RE_OIR: GrammarLesson = {
  slug: "a1-gr-verbes-re-oir",
  code: "G1.9",
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
    {
      type: "plain_list",
      items: [
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
    {
      type: "plain_list",
      items: [
        "{a}connaître{/a} (+ nom) = être familiarisé avec. → Je connais bien la France.",
        "{a}savoir{/a} (+ verbe) = résultat d'un apprentissage. → Je sais conduire.",
      ],
      allBullets: true,
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
        { sentence: "Tu ___ (mettre) une écharpe.", hint: "mettre → tu", answer: "mets" },
        { sentence: "Nous ___ (prendre) le train.", hint: "prendre → nous", answer: "prenons" },
        { sentence: "Elle ___ (attendre) le métro.", hint: "attendre → elle", answer: "attend" },
        { sentence: "Je ___ (savoir) nager.", hint: "savoir → je", answer: "sais" },
        { sentence: "Tu ___ (connaître) ce restaurant ?", hint: "connaître → tu", answer: "connais" },
        { sentence: "Il ___ (voir) une plage.", hint: "voir → il", answer: "voit" },
        { sentence: "Je ___ (recevoir) une lettre.", hint: "recevoir → je", answer: "reçois" },
        { sentence: "Nous ___ (boire) du thé.", hint: "boire → nous", answer: "buvons" },
        { sentence: "Ils ___ (peindre) la cuisine.", hint: "peindre → ils", answer: "peignent" },
        { sentence: "On ___ (comprendre) la question.", hint: "comprendre → on", answer: "comprend" },
      ],
    },
  ],
};
