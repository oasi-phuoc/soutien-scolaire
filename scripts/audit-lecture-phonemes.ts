/**
 * Audit phonèmes Lecture — compare annotations manuelles, analyseur graphèmes et leçons.
 * Vérifie aussi que les mots AVEC IMAGE portent les graphèmes L7 corrects.
 * Usage: npx tsx scripts/audit-lecture-phonemes.ts
 */
import { COMPLEX_SOUND_LESSONS, DUAL_SOUND_LETTERS, LECTURE_MODULES } from "../lib/curriculum/lecture-data";
import {
  WORD_ITEMS,
  allWordItems,
  phonemesFromFrenchGraphemes,
  wordHasPhoneme,
  type WordItem,
} from "../lib/curriculum/word-pool";
import { hasLectureWordImage } from "../lib/utils/audio";

const LESSON_PHONEMES: Array<{ id: string; phoneme: string }> = [];

for (const mod of LECTURE_MODULES) {
  for (const lesson of mod.letters ?? []) {
    if ("phoneme" in lesson && typeof lesson.phoneme === "string") {
      LESSON_PHONEMES.push({ id: `${mod.id}/${lesson.letterLower}`, phoneme: lesson.phoneme });
    }
  }
}
for (const c of COMPLEX_SOUND_LESSONS) {
  LESSON_PHONEMES.push({ id: `L7/${c.letterLower}`, phoneme: c.phoneme });
}
for (const [letter, phonemes] of Object.entries(DUAL_SOUND_LETTERS)) {
  for (const p of phonemes) {
    LESSON_PHONEMES.push({ id: `dual/${letter}${p}`, phoneme: p });
  }
}

type Issue = { kind: string; label: string; detail: string };

const issues: Issue[] = [];

function teachingPhonemesOf(item: WordItem): string[] {
  return item.phonemes?.length ? item.phonemes : [...phonemesFromFrenchGraphemes(item.label)];
}

/** Écarts manuels acceptés (pédagogie : h muet sans /∅/, emprunts). */
const ALLOWED_MANUAL_OVERRIDES = new Set([
  "basketball", // ball ≈ /ol/
  "handball",
  "herbe",
  "hibou",
  "hockey",
  "hôpital",
  "huit",
  "cahier", // h muet sans /∅/
]);

for (const item of WORD_ITEMS) {
  const manual = item.phonemes;
  const parsed = [...phonemesFromFrenchGraphemes(item.label)];
  const manualSet = new Set(manual);
  const parsedSet = new Set(parsed);

  const onlyManual = manual.filter((p) => !parsedSet.has(p));
  const onlyParsed = parsed.filter((p) => !manualSet.has(p));

  if ((onlyManual.length || onlyParsed.length) && !ALLOWED_MANUAL_OVERRIDES.has(item.label)) {
    issues.push({
      kind: "manual_vs_parser",
      label: item.label,
      detail: `manuel=[${manual.join(", ")}] parseur=[${parsed.join(", ")}]`,
    });
  }
}

for (const item of allWordItems()) {
  const taught = teachingPhonemesOf(item);
  for (const { id, phoneme } of LESSON_PHONEMES) {
    const hasInData = taught.includes(phoneme);
    const hasInExercise = wordHasPhoneme(item, phoneme);
    if (hasInData !== hasInExercise) {
      issues.push({
        kind: "wordHasPhoneme_mismatch",
        label: item.label,
        detail: `leçon ${id} ${phoneme}: données=${hasInData} exercice=${hasInExercise}`,
      });
    }
  }
}

/** Exemples canoniques L7 (avec image) : phonèmes enseignés obligatoires. */
const CANONICAL: Array<{ label: string; must: string[]; forbid?: string[] }> = [
  { label: "fleur", must: ["/ø/"] },
  { label: "feuille", must: ["/ø/", "/j/"] },
  { label: "baleine", must: ["/ɛ/"] },
  { label: "papillon", must: ["/j/"] },
  { label: "chien", must: ["/jɛ̃/"] },
  { label: "nuit", must: ["/ɥi/"] },
  { label: "maison", must: ["/ɛ/"] },
  { label: "soleil", must: ["/ɛ/", "/j/"] },
  { label: "grenouille", must: ["/u/", "/j/"] },
  { label: "abeille", must: ["/ɛ/", "/j/"] },
  { label: "gorille", must: ["/j/"] },
  { label: "feutre", must: ["/ø/"] },
  { label: "classeur", must: ["/ø/"] },
  { label: "crayon", must: ["/ɛ/", "/j/"] },
  { label: "raisin", must: ["/ɛ/"] },
  { label: "fraise", must: ["/ɛ/"] },
  { label: "shampoing", must: ["/ʃ/", "/wɛ̃/"] },
  { label: "doigt", must: ["/wa/"], forbid: ["/g/"] },
  { label: "guitare", must: ["/g/", "/i/"], forbid: ["/ɥi/"] },
];

for (const { label, must, forbid } of CANONICAL) {
  const item = allWordItems().find((w) => w.label === label);
  if (!item) {
    issues.push({ kind: "canonical_missing", label, detail: "mot introuvable dans le pool" });
    continue;
  }
  const taught = teachingPhonemesOf(item);
  for (const p of must) {
    if (!taught.includes(p)) {
      issues.push({
        kind: "image_phoneme_wrong",
        label,
        detail: `manque ${p} (a [${taught.join(", ")}])`,
      });
    }
  }
  for (const p of forbid ?? []) {
    if (taught.includes(p)) {
      issues.push({
        kind: "image_phoneme_wrong",
        label,
        detail: `ne doit pas contenir ${p} (a [${taught.join(", ")}])`,
      });
    }
  }
}

// Tous les mots-images : contrôles graphèmes L7 fréquents
for (const item of allWordItems()) {
  if (!hasLectureWordImage(item.label)) continue;
  const taught = teachingPhonemesOf(item);
  const l = item.label.toLowerCase();
  const ascii = l.normalize("NFD").replace(/\p{M}/gu, "").replace(/œ/g, "oe").replace(/æ/g, "ae");

  if (ascii.includes("ouille") && !(taught.includes("/u/") && taught.includes("/j/"))) {
    issues.push({
      kind: "image_phoneme_wrong",
      label: item.label,
      detail: `ouille attendu /u/+/j/, a [${taught.join(", ")}]`,
    });
  }
  if ((ascii.includes("euill") || l === "feuille") && !(taught.includes("/ø/") && taught.includes("/j/"))) {
    issues.push({
      kind: "image_phoneme_wrong",
      label: item.label,
      detail: `euill attendu /ø/+/j/, a [${taught.join(", ")}]`,
    });
  }
  if (/(?:chien|gardien|magicien|indien)$/i.test(l) && !taught.includes("/jɛ̃/")) {
    issues.push({
      kind: "image_phoneme_wrong",
      label: item.label,
      detail: `ien attendu /jɛ̃/, a [${taught.join(", ")}]`,
    });
  }
  if (/tion$/i.test(l) && !taught.includes("/sjɔ̃/")) {
    issues.push({
      kind: "image_phoneme_wrong",
      label: item.label,
      detail: `tion attendu /sjɔ̃/, a [${taught.join(", ")}]`,
    });
  }
  if (/œu|oeu|^œuf$|^bœuf$|cœur|sœur/i.test(l) && !taught.includes("/ø/")) {
    issues.push({
      kind: "image_phoneme_wrong",
      label: item.label,
      detail: `œu attendu /ø/, a [${taught.join(", ")}]`,
    });
  }
  if (/^gui|[^aeiouy]gui/i.test(ascii) && taught.includes("/ɥi/") && !/fruit|biscuit/i.test(l)) {
    issues.push({
      kind: "image_phoneme_wrong",
      label: item.label,
      detail: `gui : u muet, ne doit pas avoir /ɥi/ (a [${taught.join(", ")}])`,
    });
  }
}

const byKind = new Map<string, Issue[]>();
for (const issue of issues) {
  const list = byKind.get(issue.kind) ?? [];
  list.push(issue);
  byKind.set(issue.kind, list);
}

const critical = issues.filter(
  (i) => i.kind === "wordHasPhoneme_mismatch" || i.kind === "image_phoneme_wrong" || i.kind === "canonical_missing",
);
const informational = issues.filter((i) => !critical.includes(i));

const imageWordCount = allWordItems().filter((w) => hasLectureWordImage(w.label)).length;

console.log("=== Audit phonèmes Lecture ===\n");
console.log(`Mots WORD_ITEMS: ${WORD_ITEMS.length}`);
console.log(`Mots allWordItems: ${allWordItems().length}`);
console.log(`Mots avec image lecture: ${imageWordCount}`);
console.log(`Phonèmes de leçon testés: ${LESSON_PHONEMES.length}`);
console.log(`Écarts manuel/parseur (informatif): ${informational.length}`);
console.log(`Bugs (exercice + images): ${critical.length}\n`);

for (const [kind, list] of byKind) {
  const tag = critical.some((c) => c.kind === kind) ? "CRITIQUE" : "info";
  console.log(`--- [${tag}] ${kind} (${list.length}) ---`);
  for (const row of list.slice(0, 40)) {
    console.log(`  ${row.label}: ${row.detail}`);
  }
  if (list.length > 40) console.log(`  … et ${list.length - 40} autres`);
  console.log();
}

process.exit(critical.length > 0 ? 1 : 0);
