/**
 * Audit phonèmes Lecture — compare annotations manuelles, analyseur graphèmes et leçons.
 * Vérifie aussi que les mots illustrés portent les phonèmes des graphèmes complexes.
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

function teachingPhonemes(item: WordItem): string[] {
  return item.phonemes?.length ? item.phonemes : [...phonemesFromFrenchGraphemes(item.label)];
}

/** Graphèmes complexes attendus sur les mots avec image (régressions pédagogiques). */
const IMAGE_GRAPHEME_CHECKS: Array<{
  name: string;
  phoneme: string;
  test: (label: string) => boolean;
}> = [
  { name: "ill/ille", phoneme: "/j/", test: (l) => /ill/i.test(l) },
  { name: "eil/euil/ouil/œil", phoneme: "/j/", test: (l) => /eil|euil|ouil|œil/i.test(l) },
  { name: "eu/œu (hors eau)", phoneme: "/ø/", test: (l) => {
    const n = l.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase().replace(/œ/g, "oe");
    return /eu|oeu/.test(n) && !/eau/.test(n);
  } },
  { name: "ien", phoneme: "/jɛ̃/", test: (l) => /ien/i.test(l) },
  { name: "oin nasal", phoneme: "/wɛ̃/", test: (l) => /oin(?![aeiouy])/i.test(l) },
  { name: "ouin", phoneme: "/wɛ̃/", test: (l) => /ouin/i.test(l) },
  { name: "tion", phoneme: "/sjɔ̃/", test: (l) => /tion/i.test(l) },
  { name: "ai (hors ain/aim/aill)", phoneme: "/ɛ/", test: (l) => /ai(?![nml])/i.test(l) },
  { name: "ei (hors ein/œil)", phoneme: "/ɛ/", test: (l) => {
    const n = l.toLowerCase().replace(/œ/g, "oe");
    return /ei(?!n)/i.test(n) && !/oeil/i.test(n);
  } },
  { name: "oi (hors oin)", phoneme: "/wa/", test: (l) => /oi(?!n)/i.test(l) },
  { name: "ch", phoneme: "/ʃ/", test: (l) => /ch/i.test(l) },
  { name: "gn", phoneme: "/ɲ/", test: (l) => /gn/i.test(l) },
  { name: "ph", phoneme: "/f/", test: (l) => /ph/i.test(l) },
];

/** Exemples de leçon qui DOIVENT porter le phonème enseigné. */
const LESSON_EXAMPLES: Array<{ label: string; phoneme: string }> = [
  { label: "fleur", phoneme: "/ø/" },
  { label: "chien", phoneme: "/jɛ̃/" },
  { label: "papillon", phoneme: "/j/" },
  { label: "baleine", phoneme: "/ɛ/" },
  { label: "nuit", phoneme: "/ɥi/" },
  { label: "hibou", phoneme: "/∅/" },
  { label: "wagon", phoneme: "/w/" },
  { label: "natation", phoneme: "/sjɔ̃/" },
  { label: "groin", phoneme: "/wɛ̃/" },
];

for (const item of WORD_ITEMS) {
  const manual = item.phonemes;
  const parsed = [...phonemesFromFrenchGraphemes(item.label)];
  const manualSet = new Set(manual);
  const parsedSet = new Set(parsed);

  const onlyManual = manual.filter((p) => !parsedSet.has(p));
  const onlyParsed = parsed.filter((p) => !manualSet.has(p));

  if (onlyManual.length || onlyParsed.length) {
    issues.push({
      kind: "manual_vs_parser",
      label: item.label,
      detail: `manuel=[${manual.join(", ")}] parseur=[${parsed.join(", ")}]`,
    });
  }
}

for (const item of allWordItems()) {
  const taught = teachingPhonemes(item);
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

for (const item of allWordItems()) {
  if (!hasLectureWordImage(item.label)) continue;
  for (const check of IMAGE_GRAPHEME_CHECKS) {
    if (!check.test(item.label)) continue;
    if (!wordHasPhoneme(item, check.phoneme)) {
      issues.push({
        kind: "image_missing_phoneme",
        label: item.label,
        detail: `${check.name} → attendu ${check.phoneme}, trouvé [${item.phonemes.join(", ")}]`,
      });
    }
  }
}

for (const ex of LESSON_EXAMPLES) {
  const item = allWordItems().find((w) => w.label === ex.label);
  if (!item) {
    issues.push({ kind: "lesson_example_missing", label: ex.label, detail: `phonème ${ex.phoneme}` });
    continue;
  }
  if (!wordHasPhoneme(item, ex.phoneme)) {
    issues.push({
      kind: "lesson_example_wrong",
      label: ex.label,
      detail: `attendu ${ex.phoneme}, trouvé [${item.phonemes.join(", ")}]`,
    });
  }
}

const byKind = new Map<string, Issue[]>();
for (const issue of issues) {
  const list = byKind.get(issue.kind) ?? [];
  list.push(issue);
  byKind.set(issue.kind, list);
}

const criticalKinds = new Set([
  "wordHasPhoneme_mismatch",
  "image_missing_phoneme",
  "lesson_example_missing",
  "lesson_example_wrong",
]);
const critical = issues.filter((i) => criticalKinds.has(i.kind));
const informational = issues.filter((i) => !criticalKinds.has(i.kind));
const imagedCount = allWordItems().filter((w) => hasLectureWordImage(w.label)).length;

console.log("=== Audit phonèmes Lecture ===\n");
console.log(`Mots WORD_ITEMS: ${WORD_ITEMS.length}`);
console.log(`Mots allWordItems: ${allWordItems().length}`);
console.log(`Mots avec image: ${imagedCount}`);
console.log(`Phonèmes de leçon testés: ${LESSON_PHONEMES.length}`);
console.log(`Écarts manuel/parseur (informatif): ${informational.length}`);
console.log(`Bugs critiques: ${critical.length}\n`);

for (const [kind, list] of byKind) {
  const tag = criticalKinds.has(kind) ? "CRITIQUE" : "info";
  console.log(`--- [${tag}] ${kind} (${list.length}) ---`);
  for (const row of list.slice(0, 40)) {
    console.log(`  ${row.label}: ${row.detail}`);
  }
  if (list.length > 40) console.log(`  … et ${list.length - 40} autres`);
  console.log();
}

process.exit(critical.length > 0 ? 1 : 0);
