import type { Exercise, FillItem } from "../../grammar-data";

/** Nombre de modèles par exercice (pronoms variables + accord). */
export const CONJ_POOL_SIZE = 15;

/** Exercices négation 9–10 : 5 questions (3 aff. + 2 nég.). */
export const NEGATION_SHORT_POOL_SIZE = 5;
const NEGATION_QCM_AFF_COUNT = 3;

/** Pronoms utilisés pour générer les 15 phrases (cycle). */
export const STANDARD_PRONOUNS = [
  { display: "Je", elide: true },
  { display: "Tu", elide: false },
  { display: "Il", elide: false },
  { display: "Elle", elide: false },
  { display: "Nous", elide: false },
  { display: "Vous", elide: false },
  { display: "Ils", elide: false },
  { display: "Elles", elide: false },
] as const;

const ALLER_AUX: VerbConj = {
  infinitive: "aller",
  stem: "all",
  hint: "aller : vais / vas / va / allons / allez / vont",
  forms: ["vais", "vas", "va", "va", "allons", "allez", "vont", "vont"],
};

const VENIR_AUX: VerbConj = {
  infinitive: "venir",
  stem: "ven",
  hint: "venir de : viens / vient / venons / venez / viennent",
  endings: ["s de", "s de", "t de", "t de", "ons de", "ez de", "nent de", "nent de"],
  forms: ["viens de", "viens de", "vient de", "vient de", "venons de", "venez de", "viennent de", "viennent de"],
};

const AVOIR_AUX: VerbConj = {
  infinitive: "avoir",
  stem: "av",
  hint: "avoir : ai / as / a / avons / avez / ont",
  endings: ["ai", "as", "a", "a", "ons", "ez", "ont", "ont"],
  forms: ["ai", "as", "a", "a", "avons", "avez", "ont", "ont"],
};

const ETRE_AUX: VerbConj = {
  infinitive: "être",
  stem: "",
  hint: "être : suis / es / est / sommes / êtes / sont",
  forms: ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"],
};

const DEFAULT_TAILS = [
  " à l'école.",
  " le matin.",
  " souvent.",
  " avec des amis.",
  " en ville.",
  " le week-end.",
  " tard.",
  " ensemble.",
  " tous les jours.",
  " ce soir.",
  " demain.",
  " ici.",
  " en famille.",
  " après les cours.",
  " en été.",
];

export type TenseMode =
  | "present"
  | "futur_proche"
  | "passe_recent"
  | "passe_compose_avoir"
  | "passe_compose_etre"
  | "imparfait"
  | "futur_simple"
  | "conditionnel"
  | "imperatif";

export type VerbConj = {
  infinitive: string;
  /** Radical affiché avant ___ (terminaison) ou dans la phrase. */
  stem: string;
  hint: string;
  /** 8 formes : je, tu, il, elle, nous, vous, ils, elles */
  forms: [string, string, string, string, string, string, string, string];
  /** 8 terminaisons seules (exercice 1). Si absent, dérivé des formes. */
  endings?: [string, string, string, string, string, string, string, string];
  /** Participe passé (passé composé). */
  participe?: string;
  /** Participe féminin (passé composé avec être). */
  participeF?: string;
  /** Pronom réfléchi (verbes pronominaux). */
  reflexive?: [string, string, string, string, string, string, string, string];
};

export type LessonConjProfile = {
  slug: string;
  mode: TenseMode;
  verbs: VerbConj[];
  tails?: string[];
  /** Infinitifs proposés à l'exercice d'écriture. */
  verbPool: string[];
  /** Phrases pour word_order / classify (générées si absent). */
  sampleSentences?: string[];
  /** Inclure le bloc négation (défaut true). */
  negation?: boolean;
  negationMode?: TenseMode | "present";
};

function sep(display: string, elide: boolean): string {
  return display.endsWith("'") || elide ? "" : " ";
}

function pronounAt(i: number) {
  return STANDARD_PRONOUNS[i % STANDARD_PRONOUNS.length];
}

function tailAt(tails: string[], i: number) {
  return tails[i % tails.length];
}

function buildAuxiliaryPool(
  aux: VerbConj,
  tails: string[],
  sentenceFn: (p: (typeof STANDARD_PRONOUNS)[number], tail: string, form: string) => string,
  answerFn?: (form: string) => string,
): FillItem[] {
  const items: FillItem[] = [];
  for (let i = 0; i < CONJ_POOL_SIZE; i++) {
    const idx = i % STANDARD_PRONOUNS.length;
    const p = pronounAt(i);
    const tail = tailAt(tails, i);
    const form = aux.forms[idx];
    items.push({
      sentence: sentenceFn(p, tail, form),
      hint: aux.hint,
      answer: answerFn ? answerFn(form) : form,
    });
  }
  return items;
}

function endingFromForm(stem: string, form: string): string {
  if (form.startsWith(stem)) return form.slice(stem.length);
  return form;
}

/** Exercice 1 — terminaisons ou forme auxiliaire selon le temps */
export function buildEndingPool(verbs: VerbConj[], tails = DEFAULT_TAILS, mode: TenseMode = "present"): FillItem[] {
  if (mode === "futur_proche") {
    return buildAuxiliaryPool(ALLER_AUX, tails, (p, tail) => `${p.display}${sep(p.display, p.elide)}___ ${tail.replace(/^\s/, "")}`);
  }
  if (mode === "passe_recent") {
    return buildAuxiliaryPool(VENIR_AUX, tails, (p, tail) => `${p.display}${sep(p.display, p.elide)}___ ${tail.replace(/^\s/, "")}`, (form) => form);
  }
  if (mode === "passe_compose_avoir") {
    return buildAuxiliaryPool(AVOIR_AUX, tails, (p, tail) => `${p.display}${sep(p.display, p.elide)}___ ${tail.replace(/^\s/, "")}`);
  }
  if (mode === "passe_compose_etre") {
    return buildAuxiliaryPool(ETRE_AUX, tails, (p, tail) => `${p.display}${sep(p.display, p.elide)}___ ${tail.replace(/^\s/, "")}`);
  }
  const items: FillItem[] = [];
  for (let i = 0; i < CONJ_POOL_SIZE; i++) {
    const v = verbs[Math.floor(i / STANDARD_PRONOUNS.length) % verbs.length];
    const p = pronounAt(i);
    const tail = tailAt(tails, i);
    const idx = i % STANDARD_PRONOUNS.length;
    const endings = v.endings ?? v.forms.map((f) => endingFromForm(v.stem, f)) as VerbConj["endings"];
    const ending = endings![idx];
    items.push({
      sentence: `${p.display}${sep(p.display, p.elide)}${v.stem}___${tail}`,
      hint: v.hint,
      answer: ending,
    });
  }
  return items;
}

/** Exercice 2 — conjugaison complète */
export function buildConjugationPool(
  verbs: VerbConj[],
  mode: TenseMode,
  tails = DEFAULT_TAILS,
): FillItem[] {
  const items: FillItem[] = [];
  for (let i = 0; i < CONJ_POOL_SIZE; i++) {
    const v = verbs[Math.floor(i / STANDARD_PRONOUNS.length) % verbs.length];
    const p = pronounAt(i);
    const tail = tailAt(tails, i);
    const idx = i % STANDARD_PRONOUNS.length;
    const answer = verbOnlyAnswer(v, mode, idx);
    const blank = mode === "futur_proche" || mode === "passe_recent"
      ? "___"
      : "___";
    const parenthetical = `(${v.infinitive})`;
    let sentence: string;
    if (mode === "futur_proche") {
      sentence = `${p.display}${sep(p.display, p.elide)}${blank} ${v.infinitive}${tail}`;
    } else if (mode === "passe_recent") {
      sentence = `${p.display}${sep(p.display, p.elide)}${blank} ${v.infinitive}${tail}`;
    } else if (mode === "passe_compose_avoir" || mode === "passe_compose_etre") {
      sentence = `${p.display}${sep(p.display, p.elide)}${blank} ${v.participe ?? v.stem}${tail}`;
    } else if (mode === "imperatif") {
      const impForms = [1, 4, 5];
      const impIdx = impForms[i % impForms.length];
      const imp = v.forms[impIdx];
      const labels = ["", "Tu", "", "", "Nous", "Vous", "", ""];
      sentence = `${labels[impIdx]} ___ ! ${parenthetical}`;
      items.push({ sentence, hint: v.infinitive, answer: imp });
      continue;
    } else {
      sentence = `${p.display}${sep(p.display, p.elide)}${blank} ${parenthetical}${tail}`;
    }
    items.push({ sentence, hint: v.infinitive, answer });
  }
  return items;
}

/** Réponse attendue dans le blanc : verbe/auxiliaire seul (sans pronom sujet). */
function verbOnlyAnswer(v: VerbConj, mode: TenseMode, idx: number): string {
  if (mode === "passe_compose_avoir") {
    return ["ai", "as", "a", "a", "avons", "avez", "ont", "ont"][idx];
  }
  if (mode === "passe_compose_etre") {
    return ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"][idx];
  }
  if (mode === "futur_proche") {
    return ["vais", "vas", "va", "va", "allons", "allez", "vont", "vont"][idx];
  }
  if (mode === "passe_recent") {
    return ["viens de", "viens de", "vient de", "vient de", "venons de", "venez de", "viennent de", "viennent de"][idx];
  }
  if (v.reflexive) {
    return `${v.reflexive[idx]} ${v.forms[idx]}`;
  }
  return v.forms[idx];
}

/** Exercice 3 — singulier → pluriel */
export function buildPluralPool(verbs: VerbConj[], tails = DEFAULT_TAILS): FillItem[] {
  const pairs: Array<{ sing: number; plur: number }> = [
    { sing: 0, plur: 4 }, { sing: 1, plur: 5 }, { sing: 2, plur: 6 }, { sing: 3, plur: 7 },
    { sing: 0, plur: 4 }, { sing: 1, plur: 5 }, { sing: 2, plur: 6 }, { sing: 3, plur: 7 },
    { sing: 0, plur: 4 }, { sing: 1, plur: 5 }, { sing: 2, plur: 6 }, { sing: 3, plur: 7 },
    { sing: 0, plur: 4 }, { sing: 1, plur: 5 }, { sing: 2, plur: 6 },
  ];
  const items: FillItem[] = [];
  for (let i = 0; i < CONJ_POOL_SIZE; i++) {
    const v = verbs[i % verbs.length];
    const { sing, plur } = pairs[i];
    const tail = tailAt(tails, i);
    const sp = STANDARD_PRONOUNS[sing];
    const pp = STANDARD_PRONOUNS[plur];
    items.push({
      sentence: `${sp.display} ${v.forms[sing]}${tail} → ${pp.display} ___${tail}`,
      hint: "pluraliser la forme",
      answer: v.forms[plur],
    });
  }
  return items;
}

function buildClassifySvc(sentences: string[]) {
  return sentences.flatMap((s) => {
    const words = s.replace(/\.$/, "").split(" ");
    const subj = words[0] === "Est-ce" ? words[2] ?? words[0] : words[0];
    let verbWords = "";
    let compStart = 2;
    if (s.includes(" ne ") && s.includes(" pas ")) {
      const parts = s.replace(/\.$/, "").split(" ");
      const pasIdx = parts.indexOf("pas");
      verbWords = parts.slice(1, pasIdx + 1).join(" ");
      compStart = pasIdx + 1;
    } else {
      verbWords = words[1] ?? "";
      compStart = 2;
    }
    const comp = words.slice(compStart).join(" ").replace(/\.$/, "");
    return [
      { word: `{a}${subj}{/a} ${s.slice(subj.length + 1)}`, categoryIdx: 0 },
      { word: `${subj} {a}${verbWords}{/a}${comp ? " " + comp + "." : "."}`, categoryIdx: 1 },
      { word: `${subj} ${verbWords} {a}${comp}{/a}.`, categoryIdx: 2 },
    ];
  });
}

function defaultSampleSentences(verbs: VerbConj[], mode: TenseMode): string[] {
  const v = verbs[0];
  const samples = [
    `Je ${v.forms[0]} en classe.`,
    `Il ${v.forms[2]} le soir.`,
    `Elle ${v.forms[3]} souvent.`,
    `Nous ${v.forms[4]} ensemble.`,
    `Ils ${v.forms[6]} demain.`,
  ];
  if (mode === "futur_proche") {
    return [`Je vais ${v.infinitive} demain.`, `Elle va ${v.infinitive} ce soir.`, `Nous allons ${v.infinitive} ensemble.`];
  }
  if (mode === "passe_compose_avoir") {
    return [`J'ai ${v.participe ?? v.stem} hier.`, `Il a ${v.participe ?? v.stem} ce matin.`, `Nous avons ${v.participe ?? v.stem} ensemble.`];
  }
  return samples;
}

/** Pack complet des 8 exercices style R2. */
export function buildR2StyleExercises(profile: LessonConjProfile): Exercise[] {
  const tails = profile.tails ?? DEFAULT_TAILS;
  const verbTails = profile.verbs.map((v) =>
    profile.mode === "passe_compose_avoir" || profile.mode === "passe_compose_etre"
      ? ` ${v.participe ?? v.stem}.`
      : ` ${v.infinitive}.`,
  );
  const ex1Tails =
    profile.mode === "futur_proche" ||
    profile.mode === "passe_recent" ||
    profile.mode === "passe_compose_avoir" ||
    profile.mode === "passe_compose_etre"
      ? verbTails
      : tails;
  const samples = profile.sampleSentences ?? defaultSampleSentences(profile.verbs, profile.mode);
  const classifyPool = buildClassifySvc(samples.slice(0, 5));

  const wordOrderItems = samples.map((s) => ({
    sentence: s.endsWith(".") ? s : `${s}.`,
    words: s.replace(/\.$/, "").split(" "),
  }));

  const ex1Instruction =
    profile.mode === "futur_proche"
      ? "Complétez avec la forme correcte du verbe « aller »."
      : profile.mode === "passe_recent"
        ? "Complétez avec la forme correcte de « venir de »."
        : profile.mode === "passe_compose_avoir"
          ? "Complétez avec la forme correcte de l'auxiliaire « avoir »."
          : profile.mode === "passe_compose_etre"
            ? "Complétez avec la forme correcte de l'auxiliaire « être »."
            : "Complétez avec la terminaison correcte.";

  return [
    {
      type: "fill",
      title: "Exercice 1",
      instruction: ex1Instruction,
      items: [],
      pool: buildEndingPool(profile.verbs, ex1Tails, profile.mode),
      poolSize: CONJ_POOL_SIZE,
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Conjuguez le verbe entre parenthèses.",
      items: [],
      pool: buildConjugationPool(profile.verbs, profile.mode, tails),
      poolSize: CONJ_POOL_SIZE,
    },
    {
      type: "fill",
      title: "Exercice 3",
      instruction: "Mettez les phrases au pluriel.",
      items: [],
      pool: buildPluralPool(profile.verbs, tails),
      poolSize: CONJ_POOL_SIZE,
    },
    {
      type: "classify",
      title: "Exercice 4",
      instruction: "Classez chaque élément en gras dans la bonne catégorie.",
      categories: ["Sujet", "Verbe", "Complément"],
      items: [],
      pool: classifyPool,
      poolSize: CONJ_POOL_SIZE,
    },
    {
      type: "classify",
      title: "Exercice 5",
      instruction: "Identifiez le type du complément en gras.",
      categories: ["COD", "CC de lieu", "CC de temps / manière"],
      items: [
        { word: "Elle {a}le pain{/a}.", categoryIdx: 0 },
        { word: "Il travaille {a}à Paris{/a}.", categoryIdx: 1 },
        { word: "Nous partons {a}tôt le matin{/a}.", categoryIdx: 2 },
        { word: "Tu regardes {a}la télé{/a}.", categoryIdx: 0 },
        { word: "Ils marchent {a}dans la rue{/a}.", categoryIdx: 1 },
        { word: "Je cours {a}rapidement{/a}.", categoryIdx: 2 },
        { word: "Elle lit {a}un livre{/a}.", categoryIdx: 0 },
        { word: "Nous habitons {a}en Suisse{/a}.", categoryIdx: 1 },
        { word: "Vous chantez {a}souvent{/a}.", categoryIdx: 2 },
        { word: "Il prend {a}le bus{/a}.", categoryIdx: 0 },
        { word: "Tu vas {a}à l'école{/a}.", categoryIdx: 1 },
        { word: "Elles dansent {a}le samedi{/a}.", categoryIdx: 2 },
        { word: "Je mange {a}une pomme{/a}.", categoryIdx: 0 },
        { word: "Ils restent {a}chez eux{/a}.", categoryIdx: 1 },
        { word: "Nous voyageons {a}en été{/a}.", categoryIdx: 2 },
      ],
    },
    {
      type: "word_order",
      title: "Exercice 6",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase correcte.",
      items: [],
      pool: wordOrderItems,
      poolSize: Math.min(CONJ_POOL_SIZE, wordOrderItems.length),
    },
    {
      type: "color_highlight",
      title: "Exercice 7",
      instruction: "Sélectionnez une couleur, puis identifiez : Sujet (jaune), Verbe (rouge), Complément (vert).",
      colors: ["Sujet", "Verbe", "Complément"],
      items: [
        { words: ["Marie", "parle", "français."], answers: [0, 1, 2] },
        { words: ["Il", "ne", "mange", "pas", "ici."], answers: [0, 1, 1, 1, 2] },
        { words: ["Nous", "allons", "en", "ville."], answers: [0, 1, 2, 2] },
      ],
    },
    {
      type: "write",
      title: "Exercice 8",
      instruction: "Écrivez une phrase avec le verbe proposé.\nLa phrase doit avoir un sujet, un verbe et un complément.\nElle commence par une majuscule et se termine par un point.",
      verbPool: profile.verbPool,
      verbPoolSize: 5,
    },
  ];
}

/** Forme négative au présent (ou temps simple). */
function negativePresentForm(v: VerbConj, idx: number): string {
  const p = STANDARD_PRONOUNS[idx];
  const form = v.forms[idx];
  const startsVowel = /^[aeiouhéèêëàâîïôùûü]/i.test(form);
  const ne = (p.display === "Je" && startsVowel) || (p.elide && startsVowel) ? "n'" : "ne ";
  const subj = p.display === "Je" && startsVowel ? "Je" : p.display;
  if (v.reflexive) {
    const refl = v.reflexive[idx];
    return `${subj} ${ne}${refl} ${form} pas`.replace("ne n'", "n'").replace("Je n'", "Je n'").trim();
  }
  return `${subj} ${ne}${form} pas`.replace("  ", " ").replace("ne n'", "n'");
}

function negativeCompoundForm(v: VerbConj, mode: TenseMode, idx: number): string {
  const p = STANDARD_PRONOUNS[idx];
  const pp = (idx === 3 || idx === 7) && v.participeF ? v.participeF : v.participe ?? v.stem;
  if (mode === "passe_compose_etre") {
    const aux = ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"][idx];
    const elide = (idx === 0 || idx === 2 || idx === 3) && /^[aeiou]/i.test(aux);
    const ne = elide ? "n'" : "ne ";
    return `${p.display} ${ne}${aux} pas ${pp}`;
  }
  const aux = ["ai", "as", "a", "a", "avons", "avez", "ont", "ont"][idx];
  const elide = (idx === 0 || idx === 2 || idx === 3) && /^[aeiou]/i.test(aux);
  const ne = elide ? "n'" : "ne ";
  const subj = idx === 0 ? "Je" : p.display;
  return `${subj} ${ne}${aux} pas ${pp}`;
}

function negativeFuturProche(idx: number): string {
  const aller = ["vais", "vas", "va", "va", "allons", "allez", "vont", "vont"][idx];
  const p = STANDARD_PRONOUNS[idx];
  const elide = idx === 0 || idx === 2 || idx === 3;
  const ne = elide ? "n'" : "ne ";
  return `${p.display} ${ne}${aller} pas`;
}

/** 6 exercices négation (style R1.7), 15 modèles par pool. */
export function buildNegationExercises(profile: LessonConjProfile): Exercise[] {
  const mode = profile.negationMode ?? profile.mode;
  const verbs = profile.verbs;
  const tails = profile.tails ?? DEFAULT_TAILS;

  const qcmPool: Array<{ sentence: string; choices: string[]; correctIdx: number }> = [];
  const fillPool: FillItem[] = [];

  for (let i = 0; i < NEGATION_SHORT_POOL_SIZE; i++) {
    const v = verbs[i % verbs.length];
    const idx = i % STANDARD_PRONOUNS.length;
    const p = STANDARD_PRONOUNS[idx];
    const tail = tailAt(tails, i).replace(/^\s/, "");
    const aff = `${p.display} ${v.forms[idx]} ${tail}`.replace("  ", " ");
    let neg: string;
    if (mode === "futur_proche") {
      neg = `${negativeFuturProche(idx)} ${v.infinitive} ${tail}`;
    } else if (mode === "passe_compose_avoir" || mode === "passe_compose_etre") {
      neg = `${negativeCompoundForm(v, mode, idx)} ${tail}`;
    } else {
      neg = `${negativePresentForm(v, idx)} ${tail}`;
    }
    const isAffirmative = i < NEGATION_QCM_AFF_COUNT;
    qcmPool.push({
      sentence: (isAffirmative ? aff : neg).replace(/\.$/, "") + ".",
      choices: ["Affirmative", "Négative"],
      correctIdx: isAffirmative ? 0 : 1,
    });
    const affShort = aff.replace(/\.$/, "");
    fillPool.push({
      sentence: `${affShort}. → ${p.display} ___ ${tail}`,
      hint: "ne … pas",
      answer: neg.replace(p.display, "").replace(tail, "").trim(),
    });
  }

  return [
    {
      type: "qcm",
      title: "Exercice 9 — Négation",
      instruction: "Sélectionnez la forme de la phrase (affirmative ou négative).",
      toggleChoices: true,
      items: [],
      pool: qcmPool,
      poolSize: NEGATION_SHORT_POOL_SIZE,
    },
    {
      type: "fill",
      title: "Exercice 10 — Négation",
      instruction: "Mettez la phrase à la forme négative.",
      items: [],
      pool: fillPool,
      poolSize: NEGATION_SHORT_POOL_SIZE,
      inputWidth: "w-[10.5rem]",
    },
    {
      type: "classify",
      title: "Exercice 11 — Négation",
      instruction: "Classez chaque élément en gras : Sujet / Verbe (avec ne…pas) / Complément.",
      categories: ["Sujet", "Verbe", "Complément"],
      items: [],
      pool: buildClassifySvc([
        "Marie ne parle pas anglais.",
        "Les enfants ne jouent pas dehors.",
        "Il n'est pas médecin.",
        "Nous n'avons pas faim.",
        "Elle ne mange pas de viande.",
      ]),
      poolSize: CONJ_POOL_SIZE,
    },
    {
      type: "word_order",
      title: "Exercice 12 — Négation",
      instruction: "Remettez les mots dans le bon ordre pour former une phrase négative.",
      items: [],
      pool: [
        { sentence: "Je ne parle pas français.", words: ["Je", "ne", "parle", "pas", "français."] },
        { sentence: "Elle n'est pas contente.", words: ["Elle", "n'est", "pas", "contente."] },
        { sentence: "Nous n'avons pas le temps.", words: ["Nous", "n'avons", "pas", "le", "temps."] },
        { sentence: "Tu ne manges pas ici.", words: ["Tu", "ne", "manges", "pas", "ici."] },
        { sentence: "Ils ne travaillent pas le dimanche.", words: ["Ils", "ne", "travaillent", "pas", "le", "dimanche."] },
        { sentence: "Il ne va pas sortir.", words: ["Il", "ne", "va", "pas", "sortir."] },
        { sentence: "Je n'ai pas compris.", words: ["Je", "n'ai", "pas", "compris."] },
        { sentence: "Elle ne chante pas bien.", words: ["Elle", "ne", "chante", "pas", "bien."] },
        { sentence: "Vous n'êtes pas prêts.", words: ["Vous", "n'êtes", "pas", "prêts."] },
        { sentence: "On ne regarde pas la télé.", words: ["On", "ne", "regarde", "pas", "la", "télé."] },
        { sentence: "Je ne comprends pas encore.", words: ["Je", "ne", "comprends", "pas", "encore."] },
        { sentence: "Elle n'habite pas ici.", words: ["Elle", "n'habite", "pas", "ici."] },
        { sentence: "Nous ne partons pas demain.", words: ["Nous", "ne", "partons", "pas", "demain."] },
        { sentence: "Tu n'aimes pas ça.", words: ["Tu", "n'aimes", "pas", "ça."] },
        { sentence: "Ils ne sont pas arrivés.", words: ["Ils", "ne", "sont", "pas", "arrivés."] },
      ],
      poolSize: CONJ_POOL_SIZE,
    },
    {
      type: "color_highlight",
      title: "Exercice 13 — Négation",
      instruction: "Identifiez Sujet (jaune), Verbe avec négation (rouge), Complément (vert).",
      colors: ["Sujet", "Verbe", "Complément"],
      items: [
        { words: ["Je", "ne", "parle", "pas", "français."], answers: [0, 1, 1, 1, 2] },
        { words: ["Il", "n'est", "pas", "là."], answers: [0, 1, 1, 2] },
        { words: ["Nous", "n'avons", "pas", "faim."], answers: [0, 1, 1, 2] },
      ],
    },
    {
      type: "write",
      title: "Exercice 14 — Négation",
      instruction: "Écrivez une phrase négative avec le verbe proposé (ne … pas).\nSujet + verbe négatif + complément. Majuscule et point.",
      verbPool: profile.verbPool,
      verbPoolSize: 5,
    },
  ];
}

/** Applique poolSize 15 à tous les exercices avec pool. */
export function bumpPoolSizes(exercises: Exercise[]): Exercise[] {
  return exercises.map((ex) => {
    if ("pool" in ex && ex.pool && ex.pool.length > 0 && ex.pool.length < CONJ_POOL_SIZE) {
      const base = ex.pool;
      const extended = [...base];
      while (extended.length < CONJ_POOL_SIZE) {
        extended.push(base[extended.length % base.length]);
      }
      return { ...ex, pool: extended, poolSize: CONJ_POOL_SIZE } as Exercise;
    }
    if ("pool" in ex && ex.pool && ex.pool.length >= CONJ_POOL_SIZE) {
      return { ...ex, poolSize: CONJ_POOL_SIZE };
    }
    return ex;
  });
}

export function applyConjProfile(profile: LessonConjProfile): Exercise[] {
  const main = buildR2StyleExercises(profile);
  if (profile.negation === false) return main;
  return [...main, ...buildNegationExercises(profile)];
}
