/**
 * Inventaire des clips vocabulaire à générer.
 * Sortie : /tmp/vocab-audio-labels.json
 *
 * Chaque entrée : { folder, slug, text } — text = formes liées concaténées
 * (ex. « la France, le français, la française »).
 *
 * Usage : npx --yes tsx scripts/generate-vocab-audio-list.ts
 */
import { writeFileSync } from "node:fs";
import { VOCAB_THEMES } from "../lib/curriculum/vocabulary-data";
import {
  vocabAudioFolder,
  vocabAudioSlug,
  vocabSpokenText,
} from "../lib/curriculum/vocab-audio";

type Entry = { folder: string; slug: string; text: string; word: string };

const byKey = new Map<string, Entry>();

for (const theme of VOCAB_THEMES) {
  const folder = vocabAudioFolder(theme);
  for (const w of theme.words) {
    const slug = vocabAudioSlug(w);
    const text = vocabSpokenText(w);
    const key = `${folder}/${slug}`;
    const prev = byKey.get(key);
    // Si collision de slug : garder le texte le plus long (plus de formes).
    if (!prev || text.length > prev.text.length) {
      byKey.set(key, { folder, slug, text, word: w.word });
    }
  }
}

const entries = [...byKey.values()].sort((a, b) =>
  `${a.folder}/${a.slug}`.localeCompare(`${b.folder}/${b.slug}`, "fr"),
);

writeFileSync("/tmp/vocab-audio-labels.json", JSON.stringify({ entries }, null, 1));
console.log(`vocab clips: ${entries.length}`);
const sample = entries.filter((e) =>
  ["france", "grand", "etudiant", "étudiant"].includes(e.slug) || e.word === "français" || e.word === "grand",
);
for (const s of sample.slice(0, 8)) {
  console.log(`  ${s.folder}/${s.slug}.mp3 ← « ${s.text} »`);
}
