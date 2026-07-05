import type { LessonConjProfile, VerbConj } from "./conj-exercise-builders";

const ER_HINT = "-e / -es / -ons / -ez / -ent";
const IR_HINT = "-is / -it / -issons / -issez / -issent";

function er(inf: string, stem: string): VerbConj {
  return {
    infinitive: inf,
    stem,
    hint: ER_HINT,
    endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
    forms: [`${stem}e`, `${stem}es`, `${stem}e`, `${stem}e`, `${stem}ons`, `${stem}ez`, `${stem}ent`, `${stem}ent`],
    participe: `${stem}é`,
  };
}

function ir(inf: string, stem: string): VerbConj {
  return {
    infinitive: inf,
    stem,
    hint: IR_HINT,
    endings: ["is", "is", "it", "it", "issons", "issez", "issent", "issent"],
    forms: [`${stem}is`, `${stem}is`, `${stem}it`, `${stem}it`, `${stem}issons`, `${stem}issez`, `${stem}issent`, `${stem}issent`],
    participe: `${stem}i`,
  };
}

function imparfait(stem: string, inf: string): VerbConj {
  return {
    infinitive: inf,
    stem,
    hint: "-ais / -ait / -ions / -iez / -aient",
    endings: ["ais", "ais", "ait", "ait", "ions", "iez", "aient", "aient"],
    forms: [`${stem}ais`, `${stem}ais`, `${stem}ait`, `${stem}ait`, `${stem}ions`, `${stem}iez`, `${stem}aient`, `${stem}aient`],
    participe: `${stem}é`,
  };
}

function futur(inf: string): VerbConj {
  const base = inf.endsWith("re") ? inf.slice(0, -1) : inf;
  return {
    infinitive: inf,
    stem: base,
    hint: "-ai / -as / -a / -ons / -ez / -ont",
    endings: ["ai", "as", "a", "a", "ons", "ez", "ont", "ont"],
    forms: [`${base}ai`, `${base}as`, `${base}a`, `${base}a`, `${base}ons`, `${base}ez`, `${base}ont`, `${base}ont`],
    participe: inf.endsWith("er") ? `${inf.slice(0, -2)}é` : inf.endsWith("ir") ? `${inf.slice(0, -2)}i` : `${base}u`,
  };
}

const PARLER = er("parler", "parl");
const FINIR = ir("finir", "fin");
const MANGER = er("manger", "mang");
const TRAVAILLER = er("travailler", "travaill");
const REGARDER = er("regarder", "regard");
const PARTIR: VerbConj = {
  infinitive: "partir",
  stem: "par",
  hint: "-s / -t / -tons / -tez / -tent",
  endings: ["s", "s", "t", "t", "tons", "tez", "tent", "tent"],
  forms: ["pars", "pars", "part", "part", "partons", "partez", "partent", "partent"],
  participe: "parti",
  participeF: "partie",
};
const ALLER: VerbConj = {
  infinitive: "aller",
  stem: "all",
  hint: "formes irrégulières",
  forms: ["vais", "vas", "va", "va", "allons", "allez", "vont", "vont"],
  participe: "allé",
  participeF: "allée",
};
const VENIR: VerbConj = {
  infinitive: "venir",
  stem: "ven",
  hint: "formes irrégulières",
  forms: ["viens", "viens", "vient", "vient", "venons", "venez", "viennent", "viennent"],
  participe: "venu",
  participeF: "venue",
};
/** Profils pour remplacer/générer les exercices R6/R7/R8 (temps de verbe). */
export const TENSE_LESSON_PROFILES: Record<string, LessonConjProfile> = {
  // ── R6 — Le passé ─────────────────────────────────────────────────────────
  "a1-conj-l28": {
    slug: "a1-conj-l28",
    mode: "passe_recent",
    verbs: [MANGER, FINIR, PARTIR, TRAVAILLER, REGARDER],
    verbPool: ["manger", "finir", "partir", "travailler", "regarder", "arriver", "dormir"],
    negationMode: "passe_recent",
    sampleSentences: [
      "Je viens de manger.",
      "Elle vient de partir.",
      "Nous venons de finir.",
      "Ils viennent d'arriver.",
      "Tu viens de travailler.",
    ],
  },
  "a1-conj-l29": {
    slug: "a1-conj-l29",
    mode: "passe_compose_avoir",
    verbs: [MANGER, FINIR, PARLER, REGARDER, TRAVAILLER],
    verbPool: ["manger", "finir", "parler", "regarder", "travailler", "écouter", "préparer"],
    negationMode: "passe_compose_avoir",
    sampleSentences: [
      "J'ai mangé une pomme.",
      "Il a fini ses devoirs.",
      "Nous avons parlé ensemble.",
      "Elles ont regardé la télé.",
      "Tu as travaillé hier.",
    ],
  },
  "a1-conj-l30": {
    slug: "a1-conj-l30",
    mode: "passe_compose_etre",
    verbs: [ALLER, VENIR, PARTIR, { ...MANGER, participe: "monté", participeF: "montée", infinitive: "monter", stem: "mont", forms: ["monte", "montes", "monte", "monte", "montons", "montez", "montent", "montent"] }],
    verbPool: ["aller", "venir", "partir", "arriver", "monter", "descendre", "entrer"],
    negationMode: "passe_compose_etre",
    sampleSentences: [
      "Je suis allé au marché.",
      "Elle est partie tôt.",
      "Nous sommes arrivés en retard.",
      "Ils sont montés à pied.",
      "Tu es venu hier.",
    ],
  },
  "a2-conj-l07": {
    slug: "a2-conj-l07",
    mode: "imparfait",
    verbs: [imparfait("parl", "parler"), imparfait("finiss", "finir"), imparfait("pren", "prendre")],
    verbPool: ["parler", "finir", "prendre", "attendre", "habiter", "travailler"],
    negationMode: "imparfait",
    sampleSentences: [
      "Je parlais français.",
      "Il finissait ses devoirs.",
      "Nous prenions le bus.",
      "Elles habitaient ici.",
      "Tu travaillais beaucoup.",
    ],
  },
  // ── R7 — Le futur ─────────────────────────────────────────────────────────
  "a1-conj-l20": {
    slug: "a1-conj-l20",
    mode: "futur_proche",
    verbs: [MANGER, PARTIR, TRAVAILLER, FINIR, REGARDER],
    verbPool: ["manger", "partir", "travailler", "finir", "regarder", "étudier", "voyager"],
    negationMode: "futur_proche",
    sampleSentences: [
      "Je vais manger.",
      "Elle va partir demain.",
      "Nous allons étudier.",
      "Ils vont voyager.",
      "Tu vas travailler ce soir.",
    ],
  },
  "a2-conj-l08": {
    slug: "a2-conj-l08",
    mode: "futur_simple",
    verbs: [futur("parler"), futur("finir"), futur("vendre")],
    verbPool: ["parler", "finir", "vendre", "travailler", "habiter", "choisir"],
    negationMode: "futur_simple",
    sampleSentences: [
      "Je parlerai français.",
      "Il finira demain.",
      "Nous vendrons notre voiture.",
      "Elles travailleront ici.",
      "Tu habiteras en ville.",
    ],
  },
  // ── R8 — Les autres temps ─────────────────────────────────────────────────
  "a2-conj-l04": {
    slug: "a2-conj-l04",
    mode: "conditionnel",
    verbs: [
      { infinitive: "vouloir", stem: "voudr", hint: "conditionnel", endings: ["ais", "ais", "ait", "ait", "ions", "iez", "aient", "aient"], forms: ["voudrais", "voudrais", "voudrait", "voudrait", "voudrions", "voudriez", "voudraient", "voudraient"] },
      { infinitive: "pouvoir", stem: "pourr", hint: "conditionnel", endings: ["ais", "ais", "ait", "ait", "ions", "iez", "aient", "aient"], forms: ["pourrais", "pourrais", "pourrait", "pourrait", "pourrions", "pourriez", "pourraient", "pourraient"] },
      { infinitive: "aimer", stem: "aimer", hint: "conditionnel", endings: ["ais", "ais", "ait", "ait", "ions", "iez", "aient", "aient"], forms: ["aimerais", "aimerais", "aimerait", "aimerait", "aimerions", "aimeriez", "aimeraient", "aimeraient"] },
    ],
    verbPool: ["vouloir", "pouvoir", "aimer", "souhaiter", "devoir"],
    negationMode: "conditionnel",
    sampleSentences: [
      "Je voudrais un café.",
      "Pourriez-vous m'aider ?",
      "Il aimerait venir.",
      "Nous voudrions réserver.",
      "Elles pourraient partir.",
    ],
  },
  "a2-conj-l05": {
    slug: "a2-conj-l05",
    mode: "imperatif",
    verbs: [
      { infinitive: "parler", stem: "parl", hint: "impératif", forms: ["", "parle", "", "", "parlons", "parlez", "", ""], endings: ["", "e", "", "", "ons", "ez", "", ""] },
      { infinitive: "finir", stem: "fin", hint: "impératif", forms: ["", "finis", "", "", "finissons", "finissez", "", ""], endings: ["", "is", "", "", "issons", "issez", "", ""] },
      { infinitive: "écouter", stem: "écout", hint: "impératif", forms: ["", "écoute", "", "", "écoutons", "écoutez", "", ""], endings: ["", "e", "", "", "ons", "ez", "", ""] },
    ],
    verbPool: ["parler", "finir", "écouter", "manger", "attendre", "venir"],
    negationMode: "imperatif",
    sampleSentences: [
      "Parle plus fort !",
      "Finissons le travail.",
      "Écoutez bien.",
      "Mangeons ensemble.",
      "Attendez ici.",
    ],
  },
  // ── Grammaire — temps de verbe R6/R7/R8 ───────────────────────────────────
  "a2-gr-imparfait-irreguliers": {
    slug: "a2-gr-imparfait-irreguliers",
    mode: "imparfait",
    verbs: [
      { infinitive: "être", stem: "ét", hint: "imparfait", endings: ["ais", "ais", "ait", "ait", "ions", "iez", "aient", "aient"], forms: ["étais", "étais", "était", "était", "étions", "étiez", "étaient", "étaient"] },
      { infinitive: "avoir", stem: "av", hint: "imparfait", endings: ["ais", "ais", "ait", "ait", "ions", "iez", "aient", "aient"], forms: ["avais", "avais", "avait", "avait", "avions", "aviez", "avaient", "avaient"] },
      imparfait("fais", "faire"),
    ],
    verbPool: ["être", "avoir", "faire", "aller", "venir"],
    negationMode: "imparfait",
  },
  "a2-gr-futur-irreguliers": {
    slug: "a2-gr-futur-irreguliers",
    mode: "futur_simple",
    verbs: [
      { infinitive: "être", stem: "ser", hint: "futur", endings: ["ai", "as", "a", "a", "ons", "ez", "ont", "ont"], forms: ["serai", "seras", "sera", "sera", "serons", "serez", "seront", "seront"] },
      { infinitive: "avoir", stem: "aur", hint: "futur", endings: ["ai", "as", "a", "a", "ons", "ez", "ont", "ont"], forms: ["aurai", "auras", "aura", "aura", "aurons", "aurez", "auront", "auront"] },
      { infinitive: "aller", stem: "ir", hint: "futur", endings: ["ai", "as", "a", "a", "ons", "ez", "ont", "ont"], forms: ["irai", "iras", "ira", "ira", "irons", "irez", "iront", "iront"] },
    ],
    verbPool: ["être", "avoir", "aller", "venir", "faire"],
    negationMode: "futur_simple",
  },
  "a2-gr-futur-simple-ou-proche": {
    slug: "a2-gr-futur-simple-ou-proche",
    mode: "futur_proche",
    verbs: [MANGER, TRAVAILLER, PARTIR, FINIR],
    verbPool: ["manger", "travailler", "partir", "finir", "voyager"],
    negationMode: "futur_proche",
  },
  "a2-gr-hypothese-futur": {
    slug: "a2-gr-hypothese-futur",
    mode: "futur_simple",
    verbs: [futur("travailler"), futur("habiter"), futur("réussir")],
    verbPool: ["travailler", "habiter", "réussir", "partir", "venir"],
    negationMode: "futur_simple",
  },
  "a2-gr-conditionnel": {
    slug: "a2-gr-conditionnel",
    mode: "conditionnel",
    verbs: [
      { infinitive: "vouloir", stem: "voudr", hint: "conditionnel", endings: ["ais", "ais", "ait", "ait", "ions", "iez", "aient", "aient"], forms: ["voudrais", "voudrais", "voudrait", "voudrait", "voudrions", "voudriez", "voudraient", "voudraient"] },
      { infinitive: "pouvoir", stem: "pourr", hint: "conditionnel", endings: ["ais", "ais", "ait", "ait", "ions", "iez", "aient", "aient"], forms: ["pourrais", "pourrais", "pourrait", "pourrait", "pourrions", "pourriez", "pourraient", "pourraient"] },
      futur("venir"),
    ],
    verbPool: ["vouloir", "pouvoir", "venir", "faire", "être"],
    negationMode: "conditionnel",
  },
  "a2-gr-passe-compose-ou-imparfait": {
    slug: "a2-gr-passe-compose-ou-imparfait",
    mode: "passe_compose_avoir",
    verbs: [MANGER, FINIR, PARLER],
    verbPool: ["manger", "finir", "parler", "travailler", "habiter"],
    negationMode: "passe_compose_avoir",
  },
  "a2-gr-gerondif": {
    slug: "a2-gr-gerondif",
    mode: "present",
    verbs: [
      { infinitive: "manger", stem: "mang", hint: "en + participe présent", endings: ["eant", "eant", "eant", "eant", "eant", "eant", "eant", "eant"], forms: ["mangeant", "mangeant", "mangeant", "mangeant", "mangeant", "mangeant", "mangeant", "mangeant"], participe: "mangé" },
      { infinitive: "finir", stem: "fin", hint: "en + participe présent", endings: ["issant", "issant", "issant", "issant", "issant", "issant", "issant", "issant"], forms: ["finissant", "finissant", "finissant", "finissant", "finissant", "finissant", "finissant", "finissant"], participe: "fini" },
      { infinitive: "partir", stem: "part", hint: "en + participe présent", endings: ["ant", "ant", "ant", "ant", "ant", "ant", "ant", "ant"], forms: ["partant", "partant", "partant", "partant", "partant", "partant", "partant", "partant"], participe: "parti" },
    ],
    verbPool: ["manger", "finir", "partir", "travailler", "écouter"],
    negationMode: "present",
    sampleSentences: [
      "Il mange en lisant.",
      "Elle travaille en écoutant de la musique.",
      "Nous apprenons en pratiquant.",
      "Ils parlent en marchant.",
      "Je cuisine en chantant.",
    ],
  },
  "a2-gr-subjonctif": {
    slug: "a2-gr-subjonctif",
    mode: "present",
    verbs: [
      { infinitive: "parler", stem: "parl", hint: "subjonctif", endings: ["e", "es", "e", "e", "ions", "iez", "ent", "ent"], forms: ["parle", "parles", "parle", "parle", "parlions", "parliez", "parlent", "parlent"] },
      { infinitive: "finir", stem: "finiss", hint: "subjonctif", endings: ["e", "es", "e", "e", "ions", "iez", "ent", "ent"], forms: ["finisse", "finisses", "finisse", "finisse", "finissions", "finissiez", "finissent", "finissent"] },
      { infinitive: "venir", stem: "ven", hint: "subjonctif", endings: ["e", "es", "e", "e", "ions", "iez", "ent", "ent"], forms: ["vienne", "viennes", "vienne", "vienne", "venions", "veniez", "viennent", "viennent"] },
    ],
    verbPool: ["parler", "finir", "venir", "faire", "être"],
    negationMode: "present",
    sampleSentences: [
      "Il faut que je parle.",
      "Il faut que tu finisses.",
      "Il faut qu'elle vienne.",
      "Il faut que nous partions.",
      "Il faut qu'ils travaillent.",
    ],
  },
};

/** Profils négation seule pour enrichir R2 (présent). */
export const R2_NEGATION_PROFILES: Record<string, LessonConjProfile> = {
  "a1-conj-l08": {
    slug: "a1-conj-l08",
    mode: "present",
    verbs: [ALLER, VENIR, PARTIR, { ...er("marcher", "march") }],
    verbPool: ["aller", "venir", "partir", "marcher", "courir", "arriver"],
    negation: true,
  },
  "a1-conj-l09": {
    slug: "a1-conj-l09",
    mode: "present",
    verbs: [
      { infinitive: "se lever", stem: "lève", hint: "pronominal", reflexive: ["me lève", "te lèves", "se lève", "se lève", "nous levons", "vous levez", "se lèvent", "se lèvent"], forms: ["lève", "lèves", "lève", "lève", "levons", "levez", "lèvent", "lèvent"] },
      { infinitive: "se coucher", stem: "couche", hint: "pronominal", reflexive: ["me couche", "te couches", "se couche", "se couche", "nous couchons", "vous couchez", "se couchent", "se couchent"], forms: ["couche", "couches", "couche", "couche", "couchons", "couchez", "couchent", "couchent"] },
    ],
    verbPool: ["se lever", "se coucher", "s'habiller", "se laver", "se promener"],
    negation: true,
  },
  "a1-conj-l15": {
    slug: "a1-conj-l15",
    mode: "present",
    verbs: [
      { infinitive: "vouloir", stem: "veu", hint: "modal", forms: ["veux", "veux", "veut", "veut", "voulons", "voulez", "veulent", "veulent"] },
      { infinitive: "pouvoir", stem: "peu", hint: "modal", forms: ["peux", "peux", "peut", "peut", "pouvons", "pouvez", "peuvent", "peuvent"] },
      { infinitive: "devoir", stem: "do", hint: "modal", forms: ["dois", "dois", "doit", "doit", "devons", "devez", "doivent", "doivent"] },
    ],
    verbPool: ["vouloir", "pouvoir", "devoir", "savoir", "falloir"],
    negation: true,
  },
  "a2-conj-irreguliers": {
    slug: "a2-conj-irreguliers",
    mode: "present",
    verbs: [
      { infinitive: "faire", stem: "fa", hint: "irrégulier", forms: ["fais", "fais", "fait", "fait", "faisons", "faites", "font", "font"], participe: "fait" },
      { infinitive: "prendre", stem: "pren", hint: "irrégulier", forms: ["prends", "prends", "prend", "prend", "prenons", "prenez", "prennent", "prennent"], participe: "pris" },
      { infinitive: "boire", stem: "bo", hint: "irrégulier", forms: ["bois", "bois", "boit", "boit", "buvons", "buvez", "boivent", "boivent"], participe: "bu" },
    ],
    verbPool: ["faire", "prendre", "boire", "savoir", "connaître"],
    negation: true,
  },
  "a2-conj-l02": {
    slug: "a2-conj-l02",
    mode: "present",
    verbs: [FINIR, ir("choisir", "chois"), PARTIR],
    verbPool: ["finir", "choisir", "partir", "dormir", "ouvrir"],
    negation: true,
  },
};

/** Leçon négation passé composé — enrichir pools à 15. */
export const NEGATION_PASSE_COMPOSE_SLUG = "negation-passe-compose";

export function getProfileForLesson(slug: string): LessonConjProfile | undefined {
  return TENSE_LESSON_PROFILES[slug];
}

export function getR2NegationProfile(slug: string): LessonConjProfile | undefined {
  return R2_NEGATION_PROFILES[slug];
}

/** Slugs R6/R7/R8 recevant le pack R2 complet + négation. */
export const TENSE_LESSON_SLUGS = new Set(Object.keys(TENSE_LESSON_PROFILES));

/** Slugs R2 recevant le bloc négation en plus des exercices existants. */
export const R2_CONJ_SLUGS = new Set(Object.keys(R2_NEGATION_PROFILES));
