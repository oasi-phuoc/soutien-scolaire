import type { GrammarLesson } from "../../grammar-data";

/** Unité 7 — Les verbes en -er : cas particuliers (G1.8) */
export const A1_GR_VERBES_ER_PART: GrammarLesson = {
  slug: "a1-gr-verbes-er-particuliers",
  code: "G1.8",
  level: "A1",
  title: "Les verbes en -er : cas particuliers",
  theory: [
    {
      type: "heading",
      text: "Le verbe aller",
      trans: { en: "The verb aller", ar: "فعل aller", fa: "فعل aller", ti: "ግሲ aller", uk: "Дієслово aller" },
    },
    {
      type: "heading",
      text: "Utilisation",
      sub: true,
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      label: "Le verbe aller est utilisé pour :",
      items: [
        "indiquer un déplacement. Il est toujours suivi d'un lieu ou d'un infinitif. → Tu vas où ? / Nous allons en Espagne. / Je vais acheter du pain.",
        "prendre et donner des nouvelles. → Tu vas bien ? — Oui, je vais bien.",
      ],
      allBullets: true,
    },
    {
      type: "heading",
      text: "Conjugaison",
      sub: true,
      trans: { en: "Conjugation", ar: "التصريف", fa: "صرف", ti: "ምጽራይ", uk: "Дієвідміна" },
    },
    {
      type: "grid",
      headers: ["Pronom", "Aller", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Je", "vais", "au cinéma."],
        ["Tu", "vas", "à la pharmacie."],
        ["Il / Elle / On", "va", "au théâtre."],
        ["Nous", "allons", "à la médiathèque."],
        ["Vous", "allez", "au gymnase."],
        ["Ils / Elles", "vont", "à la piscine."],
      ],
    },
    {
      type: "note",
      text: "On fait la liaison : nous allons, vous allez.",
    },

    {
      type: "heading",
      text: "Verbes en -ayer, -oyer et -uyer",
      trans: { en: "Verbs in -ayer, -oyer and -uyer", ar: "أفعال -ayer / -oyer / -uyer", fa: "افعال -ayer / -oyer / -uyer", ti: "ግሲያት -ayer / -oyer / -uyer", uk: "Дієслова на -ayer, -oyer і -uyer" },
    },
    {
      type: "plain_list",
      items: [
        "Le {a}y{/a} devient {a}i{/a} devant une terminaison muette (je, tu, il, ils).",
        "Avec {a}je, tu, il/elle/on, ils/elles{/a}, le {a}y{/a} du radical est remplacé par un {a}i{/a}.",
        "Les verbes en {a}-ayer{/a} ont deux orthographes possibles (paie / paye).",
      ],
      allBullets: true,
    },
    {
      type: "verb_toggle",
      verbs: [
        {
          infinitive: "payer", radical: "pay",
          rows: [
            { pronoun: "je", ending: "e", radical: "pai" },
            { pronoun: "tu", ending: "es", radical: "pai" },
            { pronoun: "il / elle / on", ending: "e", radical: "pai" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "pai" },
          ],
        },
        {
          infinitive: "nettoyer", radical: "nettoy",
          rows: [
            { pronoun: "je", ending: "e", radical: "nettoi" },
            { pronoun: "tu", ending: "es", radical: "nettoi" },
            { pronoun: "il / elle / on", ending: "e", radical: "nettoi" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "nettoi" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Pronom", "Payer", "Envoyer", "S'ennuyer"],
      boldFirstCol: true,
      rows: [
        ["Je", "paie / paye", "envoie", "m'ennuie"],
        ["Tu", "paies / payes", "envoies", "t'ennuies"],
        ["Il / Elle / On", "paie / paye", "envoie", "s'ennuie"],
        ["Nous", "payons", "envoyons", "nous ennuyons"],
        ["Vous", "payez", "envoyez", "vous ennuyez"],
        ["Ils / Elles", "paient / payent", "envoient", "s'ennuient"],
      ],
    },

    {
      type: "heading",
      text: "Verbes en -ger et -cer",
      trans: { en: "Verbs in -ger and -cer", ar: "أفعال -ger / -cer", fa: "افعال -ger / -cer", ti: "ግሲያት -ger / -cer", uk: "Дієслова на -ger і -cer" },
    },
    {
      type: "plain_list",
      items: ["On ajoute {a}e{/a} après le {a}g{/a} à la forme {a}nous{/a} pour garder le son [ʒ]."],
    },
    {
      type: "verb_toggle",
      verbs: [
        {
          infinitive: "manger", radical: "mang",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "mange" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "voyager", radical: "voyag",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "voyage" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },
    {
      type: "plain_list",
      items: ["Le {a}c{/a} devient {a}ç{/a} devant {a}o{/a} à la forme {a}nous{/a} pour garder le son [s]."],
    },
    {
      type: "verb_toggle",
      verbs: [
        {
          infinitive: "commencer", radical: "commenc",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "commenç" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
        {
          infinitive: "avancer", radical: "avanc",
          rows: [
            { pronoun: "je", ending: "e" },
            { pronoun: "tu", ending: "es" },
            { pronoun: "il / elle / on", ending: "e" },
            { pronoun: "nous", ending: "ons", radical: "avanç" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Pronom", "Voyager", "Commencer"],
      boldFirstCol: true,
      rows: [
        ["Je", "voyage beaucoup.", "commence demain."],
        ["Tu", "voyages seul(e) ?", "commences tôt."],
        ["Il / Elle / On", "voyage souvent.", "commence à 7 heures."],
        ["Nous", "voyage{a}ons{/a} en groupe.", "commen{a}ç{/a}ons jeudi."],
        ["Vous", "voyagez un peu.", "commencez bientôt."],
        ["Ils / Elles", "voyagent ensemble.", "commencent ce soir."],
      ],
    },
    {
      type: "note",
      text: "Avec nous, tous les verbes en -ger et -cer ont une particularité orthographique : on garde e (voyageons) ou on met ç (commençons).",
    },

    {
      type: "heading",
      text: "Verbes en -eler, -eter et -érer",
      trans: { en: "Verbs in -eler, -eter and -érer", ar: "أفعال -eler / -eter / -érer", fa: "افعال -eler / -eter / -érer", ti: "ግሲያት -eler / -eter / -érer", uk: "Дієслова на -eler, -eter і -érer" },
    },
    {
      type: "plain_list",
      items: [
        "Avec {a}je, tu, il/elle/on, ils/elles{/a}, ces verbes ont une particularité orthographique qui change la prononciation.",
        "Ils ont deux radicaux : le 1er (comme l'infinitif) pour {a}nous{/a} et {a}vous{/a} ; le 2e (modifié) pour les autres personnes.",
        "Les verbes comme {a}jeter{/a} doublent le {a}t{/a} devant une terminaison muette.",
        "Les verbes comme {a}appeler{/a} doublent le {a}l{/a} devant une terminaison muette.",
      ],
      allBullets: true,
    },
    {
      type: "verb_toggle",
      verbs: [
        {
          infinitive: "jeter", radical: "jet",
          rows: [
            { pronoun: "je", ending: "e", radical: "jett" },
            { pronoun: "tu", ending: "es", radical: "jett" },
            { pronoun: "il / elle / on", ending: "e", radical: "jett" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "jett" },
          ],
        },
        {
          infinitive: "appeler", radical: "appel",
          rows: [
            { pronoun: "j'", ending: "e", radical: "appell" },
            { pronoun: "tu", ending: "es", radical: "appell" },
            { pronoun: "il / elle / on", ending: "e", radical: "appell" },
            { pronoun: "nous", ending: "ons" },
            { pronoun: "vous", ending: "ez" },
            { pronoun: "ils / elles", ending: "ent", radical: "appell" },
          ],
        },
      ],
    },
    {
      type: "grid",
      headers: ["Pronom", "Appeler", "Acheter", "Préférer"],
      boldFirstCol: true,
      rows: [
        ["Je", "appelle", "achète", "préfère"],
        ["Tu", "appelles", "achètes", "préfères"],
        ["Il / Elle / On", "appelle", "achète", "préfère"],
        ["Nous", "appelons", "achetons", "préférons"],
        ["Vous", "appelez", "achetez", "préférez"],
        ["Ils / Elles", "appellent", "achètent", "préfèrent"],
      ],
    },
    {
      type: "plain_list",
      label: "Autres verbes du même type :",
      items: [
        "comme appeler : épeler, jeter…",
        "comme acheter : mener, lever, (se) promener…",
        "comme préférer : espérer, régler, répéter, compléter…",
      ],
      allBullets: true,
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Aller et cas particuliers",
      instruction: "Choisissez la forme correcte.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ au cinéma.", choices: ["vais", "vas", "va", "vont"], correctIdx: 0 },
        { sentence: "Nous ___ à la médiathèque.", choices: ["allons", "allez", "vont", "vais"], correctIdx: 0 },
        { sentence: "Ils ___ à la piscine.", choices: ["vont", "va", "allons", "allez"], correctIdx: 0 },
        { sentence: "Tu ___ l'addition ?", choices: ["paies", "payons", "payez", "paient"], correctIdx: 0 },
        { sentence: "J'___ une lettre.", choices: ["envoie", "envoies", "envoyons", "envoyez"], correctIdx: 0 },
        { sentence: "Nous ___ en groupe.", choices: ["voyageons", "voyagons", "voyagez", "voyagent"], correctIdx: 0 },
        { sentence: "Nous ___ jeudi.", choices: ["commençons", "commencons", "commencez", "commencent"], correctIdx: 0 },
        { sentence: "J'___ du pain.", choices: ["achète", "achete", "achetons", "achetez"], correctIdx: 0 },
        { sentence: "Ils ___ des amis.", choices: ["appellent", "apelent", "appelons", "appelez"], correctIdx: 0 },
        { sentence: "Je ___ sortir.", choices: ["préfère", "préfére", "préférons", "préférez"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Conjuguez",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ (aller) au distributeur.", hint: "aller → je", answer: "vais" },
        { sentence: "Vous ___ (aller) au gymnase.", hint: "aller → vous", answer: "allez" },
        { sentence: "Il ___ (envoyer) un mail.", hint: "envoyer → il", answer: "envoie" },
        { sentence: "Nous ___ (voyager) souvent.", hint: "voyager → nous", answer: "voyageons" },
        { sentence: "Nous ___ (commencer) demain.", hint: "commencer → nous", answer: "commençons" },
        { sentence: "Tu ___ (acheter) du beurre.", hint: "acheter → tu", answer: "achètes" },
        { sentence: "Elle ___ (appeler) le médecin.", hint: "appeler → elle", answer: "appelle" },
        { sentence: "Ils ___ (préférer) lire.", hint: "préférer → ils", answer: "préfèrent" },
        { sentence: "Je ___ (s'ennuyer).", hint: "s'ennuyer → je", answer: "m'ennuie" },
        { sentence: "On ___ (aller) en Espagne.", hint: "aller → on", answer: "va" },
      ],
    },
  ],
};
