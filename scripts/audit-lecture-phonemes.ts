/**
 * Audit phonèmes Lecture — compare annotations manuelles, analyseur graphèmes et leçons.
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

const byKind = new Map<string, Issue[]>();
for (const issue of issues) {
  const list = byKind.get(issue.kind) ?? [];
  list.push(issue);
  byKind.set(issue.kind, list);
}

const critical = issues.filter((i) => i.kind === "wordHasPhoneme_mismatch");
const informational = issues.filter((i) => i.kind !== "wordHasPhoneme_mismatch");

console.log("=== Audit phonèmes Lecture ===\n");
console.log(`Mots WORD_ITEMS: ${WORD_ITEMS.length}`);
console.log(`Mots allWordItems: ${allWordItems().length}`);
console.log(`Phonèmes de leçon testés: ${LESSON_PHONEMES.length}`);
console.log(`Écarts manuel/parseur (informatif): ${informational.length}`);
console.log(`Bugs exercice (wordHasPhoneme): ${critical.length}\n`);

for (const [kind, list] of byKind) {
  const tag = kind === "wordHasPhoneme_mismatch" ? "CRITIQUE" : "info";
  console.log(`--- [${tag}] ${kind} (${list.length}) ---`);
  for (const row of list.slice(0, 30)) {
    console.log(`  ${row.label}: ${row.detail}`);
  }
  if (list.length > 30) console.log(`  … et ${list.length - 30} autres`);
  console.log();
}

process.exit(critical.length > 0 ? 1 : 0);
