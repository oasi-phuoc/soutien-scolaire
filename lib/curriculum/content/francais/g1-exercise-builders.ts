import type { Exercise, FillItem, QcmItem } from "../../grammar-data";
import { STANDARD_PRONOUNS, type VerbConj } from "./conj-exercise-builders";

/** Taille du pool stocké (phrases disponibles). */
export const G1_POOL_SIZE = 25;
/** Questions tirées par session. */
export const G1_SESSION_SIZE = 5;
/** Prompts d'écriture affichés. */
export const G1_WRITE_SIZE = 5;

const ER_PAD = ["e", "es", "ons", "ez", "ent", "is", "it", "s", "t", "ons", "ez"];

export type G1Style = "ending" | "form";

export type G1LessonProfile = {
  verbs: VerbConj[];
  /** Compléments A1 (sujet + verbe + complément complet). */
  tails: string[];
  /** ending = radical + __ ; form = blanc pour forme entière (être, avoir, irréguliers). */
  style: G1Style;
  /** Prompts « Infinitif / complément : » pour l'exercice 7. */
  writePrompts: string[];
  /** Pool sémantique exercice 6 (sinon généré automatiquement). */
  verbChoicePool?: QcmItem[];
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

function trimPool<T>(items: T[], size = G1_POOL_SIZE): T[] {
  if (items.length >= size) return items.slice(0, size);
  if (items.length === 0) return items;
  const out = [...items];
  while (out.length < size) out.push(items[out.length % items.length]!);
  return out;
}

function conjugatedAnswer(v: VerbConj, idx: number): string {
  const i = idx % 8;
  if (v.reflexive) return `${v.reflexive[i]} ${v.forms[i]}`;
  return v.forms[i]!;
}

function buildProgressifPools(profile: G1LessonProfile): {
  endingQcm: QcmItem[];
  endingFill: FillItem[];
  conjQcm: QcmItem[];
  conjFill: FillItem[];
  plural: FillItem[];
} {
  const etreForms = ["suis", "es", "est", "est", "sommes", "êtes", "sont", "sont"] as const;
  const tails = profile.tails;
  const verbs = profile.verbs;
  const endingQcm: QcmItem[] = [];
  const endingFill: FillItem[] = [];
  const conjQcm: QcmItem[] = [];
  const conjFill: FillItem[] = [];
  const plural: FillItem[] = [];
  const pairs = [
    { s: 0, p: 4 },
    { s: 1, p: 5 },
    { s: 2, p: 6 },
    { s: 3, p: 7 },
  ];

  for (let i = 0; i < G1_POOL_SIZE; i++) {
    const idx = i % 8;
    const v = verbs[i % verbs.length]!;
    const form = etreForms[idx]!;
    const inf = v.infinitive;
    const de = startsWithVowel(inf) ? "d'" : "de ";
    const tail = tails[i % tails.length]!;
    const subj = subjectOf(idx, form);
    const answerProg = `${form} en train ${de}${inf}`.replace(/d' /, "d'");

    endingQcm.push({
      sentence: `${subj.display}${subj.sep}___ en train ${de}${inf}${tail}`,
      choices: pickChoices(form, [...etreForms]),
      correctIdx: 0,
    });
    endingFill.push({
      sentence: `${subj.display}${subj.sep}___ en train ${de}${inf}${tail}`,
      hint: "être en train de",
      answer: form,
    });
    conjQcm.push({
      sentence: `${subj.display}${subj.sep}___ (${inf})${tail}`,
      choices: pickChoices(answerProg, [
        `${etreForms[(idx + 1) % 8]} en train ${de}${inf}`,
        `${etreForms[(idx + 4) % 8]} en train ${de}${inf}`,
        `${form} en train de ${inf}`,
      ]),
      correctIdx: 0,
    });
    conjFill.push({
      sentence: `${subj.display}${subj.sep}___ (${inf})${tail}`,
      hint: "être en train de + infinitif",
      answer: answerProg.replace(/\s+/g, " ").trim(),
    });
  }

  for (let i = 0; i < G1_POOL_SIZE; i++) {
    const { s, p } = pairs[i % pairs.length]!;
    const v = verbs[i % verbs.length]!;
    const inf = v.infinitive;
    const de = startsWithVowel(inf) ? "d'" : "de ";
    const tail = tails[i % tails.length]!;
    const sp = STANDARD_PRONOUNS[s]!;
    const pp = STANDARD_PRONOUNS[p]!;
    const sForm = etreForms[s]!;
    const pForm = etreForms[p]!;
    plural.push({
      sentence: `${sp.display} ${sForm} en train ${de}${inf}${tail} → ${pp.display} ___${tail}`,
      hint: "pluriel — être en train de",
      answer: `${pForm} en train ${de}${inf}`.replace(/\s+/g, " ").trim(),
    });
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

  const endingQcm: QcmItem[] = [];
  const endingFill: FillItem[] = [];
  const conjQcm: QcmItem[] = [];
  const conjFill: FillItem[] = [];
  const plural: FillItem[] = [];
  const pairs = [
    { s: 0, p: 4 },
    { s: 1, p: 5 },
    { s: 2, p: 6 },
    { s: 3, p: 7 },
  ];

  // Interleave verbes × pronoms pour couvrir tout le paradigme (~25 items).
  const selected: Array<{ v: VerbConj; idx: number; tail: string }> = [];
  for (let i = 0; i < G1_POOL_SIZE; i++) {
    selected.push({
      v: profile.verbs[i % profile.verbs.length]!,
      idx: i % 8,
      tail: profile.tails[i % profile.tails.length]!,
    });
  }

  for (const { v, idx, tail } of selected) {
    const ends = endingsOf(v);
    const ending = ends[idx]!;
    const form = v.forms[idx]!;
    const full = conjugatedAnswer(v, idx);

    if (profile.style === "ending" && v.stem) {
      const next = v.stem;
      const subj = subjectOf(idx, next);
      // Ex1 — QCM terminaison (underscores visibles)
      endingQcm.push({
        sentence: `${subj.display}${subj.sep}${v.stem}__${tail}`,
        choices: pickChoices(ending, ends),
        correctIdx: 0,
      });
      // Ex2 — fill terminaison
      endingFill.push({
        sentence: `${subj.display}${subj.sep}${v.stem}___${tail}`,
        hint: v.hint,
        answer: ending,
      });
    } else {
      const next = full;
      const subj = subjectOf(idx, next);
      endingQcm.push({
        sentence: `${subj.display}${subj.sep}___${tail}`,
        choices: pickChoices(full, [
          conjugatedAnswer(v, (idx + 1) % 8),
          conjugatedAnswer(v, (idx + 4) % 8),
          conjugatedAnswer(v, (idx + 5) % 8),
          ...v.forms,
        ]),
        correctIdx: 0,
      });
      endingFill.push({
        sentence: `${subj.display}${subj.sep}___${tail}`,
        hint: v.hint,
        answer: full,
      });
    }

    const conjNext = full;
    const conjSubj = subjectOf(idx, conjNext);
    const blankAnswer = full;
    conjQcm.push({
      sentence: `${conjSubj.display}${conjSubj.sep}___ (${v.infinitive})${tail}`,
      choices: pickChoices(blankAnswer, [
        conjugatedAnswer(v, (idx + 1) % 8),
        conjugatedAnswer(v, (idx + 4) % 8),
        conjugatedAnswer(v, (idx + 5) % 8),
        ...v.forms,
      ]),
      correctIdx: 0,
    });
    conjFill.push({
      sentence: `${conjSubj.display}${conjSubj.sep}___ (${v.infinitive})${tail}`,
      hint: v.infinitive,
      answer: blankAnswer,
    });
  }

  for (let i = 0; i < G1_POOL_SIZE; i++) {
    const { s, p } = pairs[i % pairs.length]!;
    const v = profile.verbs[i % profile.verbs.length]!;
    const tail = profile.tails[i % profile.tails.length]!;
    const singForm = conjugatedAnswer(v, s);
    const plurForm = conjugatedAnswer(v, p);
    const sp = subjectOf(s, singForm);
    const pp = subjectOf(p, plurForm);
    plural.push({
      sentence: `${sp.display}${sp.sep}${singForm}${tail} → ${pp.display} ___${tail}`,
      hint: "mettre au pluriel",
      answer: plurForm,
    });
  }

  return {
    endingQcm: trimPool(endingQcm),
    endingFill: trimPool(endingFill),
    conjQcm: trimPool(conjQcm),
    conjFill: trimPool(conjFill),
    plural: trimPool(plural),
  };
}

/** Génère un pool « choisissez le verbe correct » à partir des verbes + compléments. */
function buildVerbChoicePool(profile: G1LessonProfile): QcmItem[] {
  if (profile.verbChoicePool?.length) return trimPool(profile.verbChoicePool);

  const items: QcmItem[] = [];
  const verbs = profile.verbs;
  for (let i = 0; i < G1_POOL_SIZE; i++) {
    const v = verbs[i % verbs.length]!;
    const idx = (i % 3) + 2; // il / elle / nous variés — surtout 3e personne
    const person = i % 2 === 0 ? 2 : 3; // il / elle
    const form = conjugatedAnswer(v, person);
    const tail = profile.tails[i % profile.tails.length]!;
    const p = STANDARD_PRONOUNS[person]!;
    const distractors = verbs
      .filter((x) => x.infinitive !== v.infinitive)
      .map((x) => conjugatedAnswer(x, person));
    items.push({
      sentence: `${p.display} ___${tail}`,
      choices: pickChoices(form, distractors),
      correctIdx: 0,
    });
    void idx;
  }
  return trimPool(items);
}

/**
 * Pack harmonisé G1 — 7 exercices :
 * 1 QCM terminaison · 2 fill terminaison · 3 QCM conjugaison · 4 fill conjugaison
 * 5 pluriel · 6 verbe correct · 7 écriture (LanguageTool)
 */
export function buildG1VerbExercises(profile: G1LessonProfile): Exercise[] {
  const pools = buildCorePools(profile);
  const verbChoice = buildVerbChoicePool(profile);
  const writePrompts = trimPool(profile.writePrompts, Math.max(profile.writePrompts.length, G1_WRITE_SIZE));

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
