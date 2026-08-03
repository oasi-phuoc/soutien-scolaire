import type { Exercise, FillItem, QcmItem } from "../../grammar-data";
import { STANDARD_PRONOUNS, type VerbConj } from "./conj-exercise-builders";

/** Nombre de gabarits (phrases modèles) par exercice. */
export const G1_GABARIT_COUNT = 25;
/** Questions tirées par session. */
export const G1_SESSION_SIZE = 5;
/** Prompts d'écriture affichés. */
export const G1_WRITE_SIZE = 5;

const ER_PAD = ["e", "es", "ons", "ez", "ent", "is", "it", "s", "t", "ons", "ez"];
const SING_PLUR_PAIRS = [
  { s: 0, p: 4 }, // je → nous
  { s: 1, p: 5 }, // tu → vous
  { s: 2, p: 6 }, // il → ils
  { s: 3, p: 7 }, // elle → elles
] as const;

export type G1Style = "ending" | "form";

/** Gabarit = verbe + complément ; le pronom est variable (× 8). */
export type G1Gabarit = {
  verb: VerbConj;
  /** Complément après le verbe, ex. « une pomme. » ou « à Genève. » */
  tail: string;
};

/** Gabarit exercice 6 : un verbe correct + distracteurs sémantiques. */
export type G1VerbChoiceGabarit = {
  verb: VerbConj;
  tail: string;
  distractors: VerbConj[];
};

export type G1LessonProfile = {
  /** ending = radical + __ ; form = blanc pour forme entière. */
  style: G1Style;
  /** 25 gabarits (verbe + complément) pour les ex. 1–5. */
  gabarits: G1Gabarit[];
  /** Prompts « Infinitif / complément : » pour l'exercice 7. */
  writePrompts: string[];
  /** 25 gabarits sémantiques pour l'exercice 6 (sinon dérivés des gabarits). */
  verbChoiceGabarits?: G1VerbChoiceGabarit[];
  /** Présent progressif (être en train de). */
  progressif?: boolean;
};

function startsWithVowel(s: string): boolean {
  return /^[aeiouhâàäáéèêëíìîïóòôöúùûüAEIOUH]/i.test(s.trim());
}

/** Pronom sujet avec élision (J') si besoin. */
function subjectOf(idx: number, nextToken: string): { display: string; sep: string } {
  const p = STANDARD_PRONOUNS[idx % STANDARD_PRONOUNS.length]!;
  if (idx % 8 === 0 && startsWithVowel(nextToken)) {
    return { display: "J'", sep: "" };
  }
  return { display: p.display, sep: p.display.endsWith("'") ? "" : " " };
}

function endingsOf(v: VerbConj): string[] {
  if (v.endings) return [...v.endings];
  return v.forms.map((f) => (f.startsWith(v.stem) ? f.slice(v.stem.length) : f));
}

function pickChoices(correct: string, candidates: string[], pad: string[] = ER_PAD): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const push = (x: string) => {
    const t = x.trim();
    if (!t || seen.has(t)) return;
    seen.add(t);
    out.push(t);
  };
  push(correct);
  for (const c of candidates) push(c);
  for (const c of pad) push(c);
  while (out.length < 4) push(`x${out.length}`);
  return out.slice(0, 4);
}

function conjugatedAnswer(v: VerbConj, idx: number): string {
  const i = idx % 8;
  if (v.reflexive) return `${v.reflexive[i]} ${v.forms[i]}`;
  return v.forms[i]!;
}

function ensureGabarits(gabarits: G1Gabarit[]): G1Gabarit[] {
  if (gabarits.length === 0) return gabarits;
  const out = [...gabarits];
  while (out.length < G1_GABARIT_COUNT) {
    out.push(gabarits[out.length % gabarits.length]!);
  }
  return out.slice(0, G1_GABARIT_COUNT);
}

function normalizeTail(tail: string): string {
  const t = tail.trim();
  if (!t) return ".";
  return t.startsWith(" ") ? t : ` ${t}`;
}

/** Développe un gabarit sur les 8 pronoms. */
function forEachPronoun(gabarit: G1Gabarit, fn: (idx: number, v: VerbConj, tail: string) => void) {
  const tail = normalizeTail(gabarit.tail);
  for (let idx = 0; idx < 8; idx++) {
    fn(idx, gabarit.verb, tail);
  }
}

function buildItemsFromGabarit(
  style: G1Style,
  gabarit: G1Gabarit,
  idx: number,
  tail: string,
  gabaritId: string,
): {
  endingQcm: QcmItem;
  endingFill: FillItem;
  conjQcm: QcmItem;
  conjFill: FillItem;
} {
  const v = gabarit.verb;
  const ends = endingsOf(v);
  const ending = ends[idx]!;
  const full = conjugatedAnswer(v, idx);

  let endingQcm: QcmItem;
  let endingFill: FillItem;

  if (style === "ending" && v.stem) {
    const subj = subjectOf(idx, v.stem);
    endingQcm = {
      sentence: `${subj.display}${subj.sep}${v.stem}__${tail}`,
      choices: pickChoices(ending, ends),
      correctIdx: 0,
      gabaritId,
    };
    endingFill = {
      sentence: `${subj.display}${subj.sep}${v.stem}___${tail}`,
      hint: v.hint,
      answer: ending,
      gabaritId,
    };
  } else {
    const subj = subjectOf(idx, full);
    endingQcm = {
      sentence: `${subj.display}${subj.sep}___${tail}`,
      choices: pickChoices(full, [
        conjugatedAnswer(v, (idx + 1) % 8),
        conjugatedAnswer(v, (idx + 4) % 8),
        conjugatedAnswer(v, (idx + 5) % 8),
        ...v.forms,
      ]),
      correctIdx: 0,
      gabaritId,
    };
    endingFill = {
      sentence: `${subj.display}${subj.sep}___${tail}`,
      hint: v.hint,
      answer: full,
      gabaritId,
    };
  }

  const conjSubj = subjectOf(idx, full);
  const conjQcm: QcmItem = {
    sentence: `${conjSubj.display}${conjSubj.sep}___ (${v.infinitive})${tail}`,
    choices: pickChoices(full, [
      conjugatedAnswer(v, (idx + 1) % 8),
      conjugatedAnswer(v, (idx + 4) % 8),
      conjugatedAnswer(v, (idx + 5) % 8),
      ...v.forms,
    ]),
    correctIdx: 0,
    gabaritId,
  };
  const conjFill: FillItem = {
    sentence: `${conjSubj.display}${conjSubj.sep}___ (${v.infinitive})${tail}`,
    hint: v.infinitive,
    answer: full,
    gabaritId,
  };

  return { endingQcm, endingFill, conjQcm, conjFill };
}

function buildPluralFromGabarit(gabarit: G1Gabarit, gabaritId: string): FillItem[] {
  const v = gabarit.verb;
  const tail = normalizeTail(gabarit.tail);
  return SING_PLUR_PAIRS.map(({ s, p }) => {
    const singForm = conjugatedAnswer(v, s);
    const plurForm = conjugatedAnswer(v, p);
    const sp = subjectOf(s, singForm);
    const pp = subjectOf(p, plurForm);
    return {
      sentence: `${sp.display}${sp.sep}${singForm}${tail} → ${pp.display} ___${tail}`,
      hint: "mettre au pluriel",
      answer: plurForm,
      gabaritId,
    };
  });
}

function buildProgressifPools(profile: G1LessonProfile): {
  endingQcm: QcmItem[];
  endingFill: FillItem[];
  conjQcm: QcmItem[];
  conjFill: FillItem[];
  plural: FillItem[];
} {
  const etreForms = ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"] as const;
  const gabarits = ensureGabarits(profile.gabarits);
  const endingQcm: QcmItem[] = [];
  const endingFill: FillItem[] = [];
  const conjQcm: QcmItem[] = [];
  const conjFill: FillItem[] = [];
  const plural: FillItem[] = [];

  for (let gi = 0; gi < gabarits.length; gi++) {
    const g = gabarits[gi]!;
    const gid = `g${gi}`;
    const inf = g.verb.infinitive;
    const de = startsWithVowel(inf) ? "d'" : "de ";
    const tail = normalizeTail(g.tail);
    for (let idx = 0; idx < 8; idx++) {
      const form = etreForms[idx]!;
      const subj = subjectOf(idx, form);
      const answerProg = `${form} en train ${de}${inf}`.replace(/\s+/g, " ").trim();
      endingQcm.push({
        sentence: `${subj.display}${subj.sep}___ en train ${de}${inf}${tail}`,
        choices: pickChoices(form, [...etreForms]),
        correctIdx: 0,
        gabaritId: gid,
      });
      endingFill.push({
        sentence: `${subj.display}${subj.sep}___ en train ${de}${inf}${tail}`,
        hint: "être en train de",
        answer: form,
        gabaritId: gid,
      });
      conjQcm.push({
        sentence: `${subj.display}${subj.sep}___ (${inf})${tail}`,
        choices: pickChoices(answerProg, [
          `${etreForms[(idx + 1) % 8]} en train ${de}${inf}`,
          `${etreForms[(idx + 4) % 8]} en train ${de}${inf}`,
          `${form} en train de ${inf}`,
        ]),
        correctIdx: 0,
        gabaritId: gid,
      });
      conjFill.push({
        sentence: `${subj.display}${subj.sep}___ (${inf})${tail}`,
        hint: "être en train de + infinitif",
        answer: answerProg,
        gabaritId: gid,
      });
    }
    for (const { s, p } of SING_PLUR_PAIRS) {
      const sForm = etreForms[s]!;
      const pForm = etreForms[p]!;
      const sp = STANDARD_PRONOUNS[s]!;
      const pp = STANDARD_PRONOUNS[p]!;
      plural.push({
        sentence: `${sp.display} ${sForm} en train ${de}${inf}${tail} → ${pp.display} ___${tail}`,
        hint: "pluriel — être en train de",
        answer: `${pForm} en train ${de}${inf}`.replace(/\s+/g, " ").trim(),
        gabaritId: gid,
      });
    }
  }

  return { endingQcm, endingFill, conjQcm, conjFill, plural };
}

function buildCorePools(profile: G1LessonProfile): {
  endingQcm: QcmItem[];
  endingFill: FillItem[];
  conjQcm: QcmItem[];
  conjFill: FillItem[];
  plural: FillItem[];
} {
  if (profile.progressif) return buildProgressifPools(profile);

  const gabarits = ensureGabarits(profile.gabarits);
  const endingQcm: QcmItem[] = [];
  const endingFill: FillItem[] = [];
  const conjQcm: QcmItem[] = [];
  const conjFill: FillItem[] = [];
  const plural: FillItem[] = [];

  for (let gi = 0; gi < gabarits.length; gi++) {
    const g = gabarits[gi]!;
    const gid = `g${gi}`;
    forEachPronoun(g, (idx, _v, tail) => {
      const items = buildItemsFromGabarit(profile.style, g, idx, tail, gid);
      endingQcm.push(items.endingQcm);
      endingFill.push(items.endingFill);
      conjQcm.push(items.conjQcm);
      conjFill.push(items.conjFill);
    });
    plural.push(...buildPluralFromGabarit(g, gid));
  }

  return { endingQcm, endingFill, conjQcm, conjFill, plural };
}

function buildVerbChoicePool(profile: G1LessonProfile): QcmItem[] {
  const items: QcmItem[] = [];

  if (profile.verbChoiceGabarits?.length) {
    const list = [...profile.verbChoiceGabarits];
    while (list.length < G1_GABARIT_COUNT) list.push(profile.verbChoiceGabarits[list.length % profile.verbChoiceGabarits.length]!);
    for (let gi = 0; gi < G1_GABARIT_COUNT; gi++) {
      const g = list[gi]!;
      const gid = `vc${gi}`;
      const tail = normalizeTail(g.tail);
      for (let idx = 0; idx < 8; idx++) {
        const form = conjugatedAnswer(g.verb, idx);
        const subj = subjectOf(idx, form);
        const distractors = g.distractors.map((d) => conjugatedAnswer(d, idx));
        items.push({
          sentence: `${subj.display}${subj.sep}___${tail}`,
          choices: pickChoices(form, distractors),
          correctIdx: 0,
          gabaritId: gid,
        });
      }
    }
    return items;
  }

  // Dérivé auto : chaque gabarit × 8 pronoms, distracteurs = autres verbes des gabarits.
  const gabarits = ensureGabarits(profile.gabarits);
  const allVerbs = [...new Map(gabarits.map((g) => [g.verb.infinitive, g.verb])).values()];
  for (let gi = 0; gi < gabarits.length; gi++) {
    const g = gabarits[gi]!;
    const gid = `vc${gi}`;
    const tail = normalizeTail(g.tail);
    const distractors = allVerbs.filter((x) => x.infinitive !== g.verb.infinitive);
    for (let idx = 0; idx < 8; idx++) {
      const form = conjugatedAnswer(g.verb, idx);
      const subj = subjectOf(idx, form);
      items.push({
        sentence: `${subj.display}${subj.sep}___${tail}`,
        choices: pickChoices(
          form,
          distractors.map((d) => conjugatedAnswer(d, idx)),
        ),
        correctIdx: 0,
        gabaritId: gid,
      });
    }
  }
  return items;
}

/**
 * Pack harmonisé G1 — 7 exercices.
 * Banque = 25 gabarits × 8 pronoms (tirage aléatoire via shuffle du pool).
 */
export function buildG1VerbExercises(profile: G1LessonProfile): Exercise[] {
  const pools = buildCorePools(profile);
  const verbChoice = buildVerbChoicePool(profile);
  const writePrompts = [...profile.writePrompts];
  while (writePrompts.length < G1_WRITE_SIZE && profile.writePrompts.length > 0) {
    writePrompts.push(profile.writePrompts[writePrompts.length % profile.writePrompts.length]!);
  }

  return [
    {
      type: "qcm",
      title: "Exercice 1",
      instruction: "Choisissez la bonne terminaison.",
      items: [],
      pool: pools.endingQcm,
      poolSize: G1_SESSION_SIZE,
    },
    {
      type: "fill",
      title: "Exercice 2",
      instruction: "Complétez la terminaison des verbes.",
      items: [],
      pool: pools.endingFill,
      poolSize: G1_SESSION_SIZE,
      inputWidth: "w-16",
    },
    {
      type: "qcm",
      title: "Exercice 3",
      instruction: "Choisissez la bonne conjugaison du verbe entre parenthèses au présent.",
      items: [],
      pool: pools.conjQcm,
      poolSize: G1_SESSION_SIZE,
    },
    {
      type: "fill",
      title: "Exercice 4",
      instruction: "Conjuguez le verbe entre parenthèses au présent.",
      items: [],
      pool: pools.conjFill,
      poolSize: G1_SESSION_SIZE,
    },
    {
      type: "fill",
      title: "Exercice 5",
      instruction: "Mettez les phrases au pluriel.",
      items: [],
      pool: pools.plural,
      poolSize: G1_SESSION_SIZE,
    },
    {
      type: "qcm",
      title: "Exercice 6",
      instruction: "Choisissez le verbe correct.",
      items: [],
      pool: verbChoice,
      poolSize: G1_SESSION_SIZE,
    },
    {
      type: "write",
      title: "Exercice 7",
      instruction:
        "Écrivez des phrases avec les verbes suivants.\nSujet + verbe conjugué + complément. Majuscule et point.",
      promptLayout: "stacked",
      promptPool: writePrompts,
      promptPoolSize: G1_WRITE_SIZE,
    },
  ];
}

// ── Helpers verbes ────────────────────────────────────────────────────────────

const ER_HINT = "-e / -es / -ons / -ez / -ent";
const IR_HINT = "-is / -it / -issons / -issez / -issent";

export function er(inf: string, stem: string): VerbConj {
  return {
    infinitive: inf,
    stem,
    hint: ER_HINT,
    endings: ["e", "es", "e", "e", "ons", "ez", "ent", "ent"],
    forms: [`${stem}e`, `${stem}es`, `${stem}e`, `${stem}e`, `${stem}ons`, `${stem}ez`, `${stem}ent`, `${stem}ent`],
  };
}

export function ir(inf: string, stem: string): VerbConj {
  return {
    infinitive: inf,
    stem,
    hint: IR_HINT,
    endings: ["is", "is", "it", "it", "issons", "issez", "issent", "issent"],
    forms: [`${stem}is`, `${stem}is`, `${stem}it`, `${stem}it`, `${stem}issons`, `${stem}issez`, `${stem}issent`, `${stem}issent`],
  };
}

export function reflEr(inf: string, stem: string): VerbConj {
  return {
    ...er(inf, stem),
    reflexive: ["me", "te", "se", "se", "nous", "vous", "se", "se"],
  };
}

export function reflErVowel(inf: string, stem: string): VerbConj {
  return {
    ...er(inf, stem),
    reflexive: ["m'", "t'", "s'", "s'", "nous", "vous", "s'", "s'"],
  };
}

/** Raccourci : liste de gabarits `{ verb, tails[] }` → gabarits plats. */
export function gabaritsFrom(pairs: Array<{ verb: VerbConj; tails: string[] }>): G1Gabarit[] {
  const out: G1Gabarit[] = [];
  for (const { verb, tails } of pairs) {
    for (const tail of tails) out.push({ verb, tail });
  }
  return out;
}
