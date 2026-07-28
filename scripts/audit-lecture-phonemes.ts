/**
 * Audit phonèmes Lecture — focus mots illustrés + cohérence exercices.
 * Usage: npx tsx scripts/audit-lecture-phonemes.ts
 */
import fs from "fs";
import path from "path";
import { COMPLEX_SOUND_LESSONS, DUAL_SOUND_LETTERS, LECTURE_MODULES } from "../lib/curriculum/lecture-data";
import {
  WORD_ITEMS,
  allWordItems,
  phonemesFromFrenchGraphemes,
  wordHasPhoneme,
  type WordItem,
} from "../lib/curriculum/word-pool";
import { getWordAssetSlug } from "../lib/utils/audio";

const lectureDir = path.join(process.cwd(), "public/assets/words/lecture");
const imageSlugs = new Set(
  fs
    .readdirSync(lectureDir)
    .filter((f) => f.endsWith(".webp"))
    .map((f) => f.replace(/\.webp$/i, "")),
);

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

function teachingList(item: WordItem): string[] {
  return item.phonemes?.length ? item.phonemes : [...phonemesFromFrenchGraphemes(item.label)];
}

const orderKey = (ph: string[]) => [...ph].sort().join("|");

const imageItems = allWordItems().filter((w) => imageSlugs.has(getWordAssetSlug(w.label)));
const missingImagePhonemes = [...imageSlugs].filter(
  (slug) => !imageItems.some((w) => getWordAssetSlug(w.label) === slug),
);

for (const slug of missingImagePhonemes) {
  issues.push({ kind: "image_missing_phonemes", label: slug, detail: "image sans entrée phonèmes" });
}

for (const item of imageItems) {
  const parsed = [...phonemesFromFrenchGraphemes(item.label)];
  if (orderKey(item.phonemes) !== orderKey(parsed)) {
    issues.push({
      kind: "image_vs_parser",
      label: item.label,
      detail: `annoté=[${item.phonemes.join(", ")}] parseur=[${parsed.join(", ")}]`,
    });
  }
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
  const taught = teachingList(item);
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

/** Orthographe ⇒ phonème complexe attendu (mots illustrés). */
const COMPLEX_CHECKS: Array<{ phoneme: string; match: (w: string) => boolean }> = [
  { phoneme: "/j/", match: (w) => /ill|ail$|eil$|aill|eill|euil|ueil|ouill|ouil/i.test(w) },
  // ai/ei → /ɛ/ sauf dans ail/aill/eil/eill (→ /a|ɛ/+/j/)
  {
    phoneme: "/ɛ/",
    match: (w) =>
      /[èêë]/i.test(w) ||
      (/(ai|ei)/i.test(w) && !/(ain|ein|aim)/i.test(w) && !/(aill|eill|ail$|eil$|ailler|eiller)/i.test(w)),
  },
  { phoneme: "/jɛ̃/", match: (w) => /ien/i.test(w) },
  { phoneme: "/ø/", match: (w) => /(eu|œu|oeu|œ|euil|ueil)/i.test(w) && !/eau/i.test(w) },
  // ui → /ɥi/ sauf gui/gue, ouil/euil, ouin/qui
  {
    phoneme: "/ɥi/",
    match: (w) =>
      /ui/i.test(w) &&
      !/gu[eiéèêi]/i.test(w) &&
      !/euil|ueil|ouill|euill|ouil|ouin|qui/i.test(w),
  },
  { phoneme: "/wɛ̃/", match: (w) => /oin(?![aeiouy])|ouin/i.test(w) },
  { phoneme: "/sjɔ̃/", match: (w) => /tion/i.test(w) },
  { phoneme: "/wa/", match: (w) => /oi/i.test(w) && !/oin(?![aeiouy])|ouin/i.test(w) },
  { phoneme: "/ʃ/", match: (w) => /ch|sh/i.test(w) },
  { phoneme: "/ɲ/", match: (w) => /gn/i.test(w) },
];

for (const item of imageItems) {
  for (const { phoneme, match } of COMPLEX_CHECKS) {
    if (match(item.label) && !item.phonemes.includes(phoneme)) {
      // Filtres anti faux-positifs orthographiques
      if (phoneme === "/ɛ/" && /ain|ein|aim|ein/i.test(item.label) && !/[èêë]/i.test(item.label) && !/(ai|ei)(?!n|m)/i.test(item.label)) {
        continue;
      }
      if (phoneme === "/ɥi/" && /gu[ei]/i.test(item.label)) continue;
      issues.push({
        kind: "image_missing_complex",
        label: item.label,
        detail: `devrait contenir ${phoneme} — a [${item.phonemes.join(", ")}]`,
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

const criticalKinds = new Set([
  "wordHasPhoneme_mismatch",
  "image_missing_phonemes",
  "image_vs_parser",
  "image_missing_complex",
]);
const critical = issues.filter((i) => criticalKinds.has(i.kind));
const informational = issues.filter((i) => !criticalKinds.has(i.kind));

console.log("=== Audit phonèmes Lecture (mots illustrés) ===\n");
console.log(`Images lecture: ${imageSlugs.size}`);
console.log(`Mots illustrés avec phonèmes: ${imageItems.length}`);
console.log(`Mots WORD_ITEMS: ${WORD_ITEMS.length}`);
console.log(`Mots allWordItems: ${allWordItems().length}`);
console.log(`Phonèmes de leçon testés: ${LESSON_PHONEMES.length}`);
console.log(`Écarts informatifs: ${informational.length}`);
console.log(`Problèmes critiques: ${critical.length}\n`);

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
