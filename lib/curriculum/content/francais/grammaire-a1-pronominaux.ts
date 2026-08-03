import type { GrammarLesson, VerbToggleVerb } from "../../grammar-data";

const PRONOMINAUX_VERBS: VerbToggleVerb[] = [
  {
    infinitive: "se lever", radical: "",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e",    radical: "lèv" },
      { pronoun: "tu",              ending: "es",   radical: "lèv" },
      { pronoun: "il / elle / on",  ending: "e",    radical: "lèv" },
      { pronoun: "nous",            ending: "ons",  radical: "lev" },
      { pronoun: "vous",            ending: "ez",   radical: "lev" },
      { pronoun: "ils / elles",     ending: "ent",  radical: "lèv" },
    ],
  },
  {
    infinitive: "se coucher", radical: "couch",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se laver", radical: "lav",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se doucher", radical: "douch",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se brosser", radical: "bross",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se raser", radical: "ras",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se coiffer", radical: "coiff",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "s'habiller", radical: "habill",
    reflexivePronouns: ["m'", "t'", "s'", "nous", "vous", "s'"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
  {
    infinitive: "se reposer", radical: "repos",
    reflexivePronouns: ["me", "te", "se", "nous", "vous", "se"],
    rows: [
      { pronoun: "je",              ending: "e"   },
      { pronoun: "tu",              ending: "es"  },
      { pronoun: "il / elle / on",  ending: "e"   },
      { pronoun: "nous",            ending: "ons" },
      { pronoun: "vous",            ending: "ez"  },
      { pronoun: "ils / elles",     ending: "ent" },
    ],
  },
];

/** Unité 5 — Les verbes pronominaux (G1.6) */
export const A1_GR_PRONOMINAUX: GrammarLesson = {
  slug: "a1-gr-pronominaux",
  code: "G1.6",
  level: "A1",
  title: "Les verbes pronominaux",
  theory: [
    {
      type: "heading",
      text: "Utilisation",
      trans: { en: "Usage", ar: "الاستخدام", fa: "کاربرد", ti: "ኣጠቓቕማ", uk: "Вживання" },
    },
    {
      type: "plain_list",
      items: [
        "Le sujet du verbe fait l'action sur lui-même. Un verbe pronominal est toujours accompagné d'un pronom réfléchi.",
      ],
    },
    {
      type: "highlight",
      label: "",
      items: ["Elle {a}se regarde{/a} dans le miroir."],
      noBulletItems: [0],
    },

    {
      type: "heading",
      text: "Conjugaison",
      trans: { en: "Conjugation", ar: "التصريف", fa: "صرف", ti: "ምጽራይ", uk: "Дієвідміна" },
    },
    {
      type: "plain_list",
      items: [
        "Les verbes pronominaux se conjuguent avec deux pronoms : le pronom sujet + un second pronom de la même personne. À l'infinitif, on utilise le pronom {a}se{/a} : se lever, se doucher.",
      ],
    },
    {
      type: "grid",
      headers: ["Sujet", "Pronom réfléchi"],
      boldFirstCol: true,
      rows: [
        ["je", "me (m')"],
        ["tu", "te (t')"],
        ["il / elle / on", "se (s')"],
        ["nous", "nous"],
        ["vous", "vous"],
        ["ils / elles", "se (s')"],
      ],
    },

    {
      type: "heading",
      text: "Prononciation et orthographe",
      trans: { en: "Pronunciation and spelling", ar: "النطق والإملاء", fa: "تلفظ و املا", ti: "ኣደማምጻን ኣጸሓሕፋን", uk: "Вимова та правопис" },
    },
    {
      type: "plain_list",
      items: [
        "Les pronoms {a}me, te, se{/a} deviennent {a}m', t', s'{/a} devant une voyelle ou un h muet.",
        "Je {s}me{/s} habille → Je {a}m'{/a}habille.",
        "Tu {s}te{/s} amuses → Tu {a}t'{/a}amuses.",
        "Elle {s}se{/s} arrête → Elle {a}s'{/a}arrête.",
        "Ils {s}se{/s} embrassent → Ils {a}s'{/a}embrassent.",
      ],
      allBullets: true,
    },

    {
      type: "heading",
      text: "Verbes pronominaux courants",
      trans: { en: "Common reflexive verbs", ar: "أفعال انعكاسية شائعة", fa: "افعال انعکاسی پرکاربرد", ti: "ልሙዳት ናይ ርእሰ-ግሲታት", uk: "Поширені зворотні дієслова" },
    },
    { type: "verb_toggle", verbs: PRONOMINAUX_VERBS, buttonCols: 3 },

    {
      type: "heading",
      text: "La négation",
      trans: { en: "The negation", ar: "النفي", fa: "نفی", ti: "ኣሉታ", uk: "Заперечення" },
    },
    {
      type: "plain_list",
      items: [
        "La négation {a}ne … pas{/a} encadre le pronom réfléchi ET le verbe.",
        "Sujet + {a}ne{/a} + pronom réfléchi + verbe + {a}pas{/a}",
      ],
      allBullets: true,
    },
    { type: "verb_toggle", negation: true, verbs: PRONOMINAUX_VERBS, buttonCols: 3 },

    {
      type: "heading",
      text: "Réfléchis vs réciproques",
      sub: true,
      accent: true,
      trans: { en: "Reflexive vs reciprocal", ar: "انعكاسي مقابل متبادل", fa: "انعکاسی در برابر متقابل", ti: "ርእሰ-ግሲ ኣንጻር ምልውዋጥ", uk: "Зворотні проти взаємних" },
    },
    {
      type: "grid",
      headers: ["Type", "Sens", "Exemple"],
      boldFirstCol: true,
      rows: [
        ["Réfléchi", "Le sujet agit sur lui-même.", "Je {a}me{/a} regarde dans le miroir."],
        ["Réciproque", "Les sujets agissent l'un sur l'autre.", "Nous {a}nous{/a} regardons. (each other)"],
      ],
    },
    {
      type: "highlight",
      label: "Attention",
      inlineArrows: true,
      items: [
        "Quand le verbe commence par une voyelle ou un h, {a}me / te / se{/a} devient {a}m' / t' / s'{/a}.",
        "je {s}me{/s} appelle → je {a}m'{/a}appelle",
        "il {s}se{/s} habille → il {a}s'{/a}habille",
      ],
      noBulletItems: [0],
    },
  ],
  exercises: [
    {
      type: "qcm",
      title: "Pronoms réfléchis",
      instruction: "Choisissez le bon pronom.",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ réveille à 8 h.", choices: ["me", "te", "se", "nous"], correctIdx: 0 },
        { sentence: "Tu ___ lèves tôt.", choices: ["te", "me", "se", "vous"], correctIdx: 0 },
        { sentence: "Elle ___ douche le soir.", choices: ["se", "me", "te", "nous"], correctIdx: 0 },
        { sentence: "Nous ___ préparons vite.", choices: ["nous", "vous", "se", "me"], correctIdx: 0 },
        { sentence: "Vous ___ coiffez comment ?", choices: ["vous", "nous", "se", "te"], correctIdx: 0 },
        { sentence: "Ils ___ couchent tard.", choices: ["se", "me", "nous", "vous"], correctIdx: 0 },
        { sentence: "On ___ regarde dans le miroir.", choices: ["se", "me", "te", "nous"], correctIdx: 0 },
        { sentence: "Je ___ habille.", choices: ["m'", "t'", "s'", "nous"], correctIdx: 0 },
        { sentence: "Tu ___ amuses.", choices: ["t'", "m'", "s'", "vous"], correctIdx: 0 },
        { sentence: "Elle ___ arrête.", choices: ["s'", "m'", "t'", "se"], correctIdx: 0 },
      ],
    },
    {
      type: "fill",
      title: "Conjuguez les verbes pronominaux",
      instruction: "Complétez avec le pronom et le verbe conjugués (ex. me lève).",
      items: [],
      poolSize: 5,
      pool: [
        { sentence: "Je ___ (se lever) tôt.", hint: "se lever → je", answer: "me lève" },
        { sentence: "Tu ___ (se coucher) tard.", hint: "se coucher → tu", answer: "te couches" },
        { sentence: "Il ___ (se doucher) le soir.", hint: "se doucher → il", answer: "se douche" },
        { sentence: "Nous ___ (se préparer) vite.", hint: "se préparer → nous", answer: "nous préparons" },
        { sentence: "Vous ___ (se lever) à quelle heure ?", hint: "se lever → vous", answer: "vous levez" },
        { sentence: "Ils ___ (se regarder).", hint: "se regarder → ils", answer: "se regardent" },
        { sentence: "Elle ___ (s'habiller).", hint: "s'habiller → elle", answer: "s'habille" },
        { sentence: "Je ___ (s'appeler) Leila.", hint: "s'appeler → je", answer: "m'appelle" },
        { sentence: "On ___ (se coucher) tôt.", hint: "se coucher → on", answer: "se couche" },
        { sentence: "Tu ___ (s'amuser) bien ?", hint: "s'amuser → tu", answer: "t'amuses" },
      ],
    },
  ],
};
