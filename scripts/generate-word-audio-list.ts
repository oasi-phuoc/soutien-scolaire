/**
 * Énumère tous les mots et syllabes que l'app peut jouer via playWord() /
 * playSyllable() (fichiers /assets/words/son_f/{mots,syllable}/{slug}.mp3),
 * et écrit la liste dans /tmp/lecture-audio-labels.json.
 *
 * Utilisé avec scripts/generate-word-audio.py (Piper TTS) pour générer les
 * MP3 manquants afin que l'app fonctionne hors ligne sans fallback TTS.
 *
 * Usage : npx --yes tsx scripts/generate-word-audio-list.ts
 */
import { writeFileSync } from "node:fs";

import {
  allPoolLabels,
  allWordItems,
  letterPronouncePool,
  wordsForComplexGrapheme,
} from "../lib/curriculum/word-pool";
import {
  COMPLEX_SOUND_LESSONS,
  CONSONANTS,
  CONSONANT_ORDER,
  CONSONANT_REVISIONS,
  VOWELS,
  VOWEL_EVALUATION,
  VOWEL_REVISIONS,
} from "../lib/curriculum/lecture-data";
import { complexTargets, usesGraphemeVowelSyllables } from "../lib/utils/complex-grapheme";
import { TRISYLLABLE_WORDS, QUADRISYLLABLE_WORDS } from "../lib/curriculum/lecture-long-pronounce";
import bisyllablePools from "../lib/curriculum/lecture-revision-bisyllable-pools.json";

const SIMPLE_VOWELS = ["a", "o", "i", "e", "u", "y"];
// L5 (leçons syllabes) : consonnes simples utilisées pour les grilles CV/VC.
const L5_CONSONANTS = ["b", "c", "d", "f", "g", "j", "l", "m", "n", "p", "r", "s", "t", "v", "z"];
const L5_VC_CONSONANTS = L5_CONSONANTS.filter((c) => c !== "n" && c !== "m");

function slug(text: string): string {
  return text.toLowerCase();
}

// ── Mots ──────────────────────────────────────────────────────────────────────

const mots = new Set<string>();
const addWord = (w?: string) => {
  const s = slug((w ?? "").trim());
  if (s) mots.add(s);
};

// Pools généraux (LETTER_WORDS + mots-outils + WORD_ITEMS + images lecture).
for (const label of allPoolLabels()) addWord(label);
for (const item of allWordItems()) addWord(item.label);

// Données de leçons (grilles de mots, sons, exemples, chaînes de prononciation).
for (const v of VOWELS) {
  [...v.upperWords, ...v.lowerWords].forEach(addWord);
  v.soundItems.forEach((s) => addWord(s.label));
  addWord(v.exampleWord);
  v.pronunciationChain.forEach((p) => addWord(p.word));
}
for (const c of CONSONANTS) {
  [...c.upperWordsSet1, ...c.upperWordsSet2, ...c.lowerWords].forEach(addWord);
  c.soundItems.forEach((s) => addWord(s.label));
  addWord(c.exampleWord);
  c.pronunciationChain.forEach((p) => addWord(p.word));
}
for (const l of COMPLEX_SOUND_LESSONS) {
  [...l.upperWords, ...l.lowerWords].forEach(addWord);
  addWord(l.exampleWord);
  l.pronunciationChain.forEach((p) => addWord(p.word));
  wordsForComplexGrapheme(l.letter, 20).forEach(addWord);
}

// Révisions et évaluation voyelles.
for (const r of [...VOWEL_REVISIONS, ...CONSONANT_REVISIONS]) {
  r.soundWords.forEach((s) => addWord(s.word));
  r.readWords.forEach((s) => addWord(s.word));
}
VOWEL_EVALUATION.soundWords.forEach((s) => addWord(s.word));
VOWEL_EVALUATION.readWords.forEach((s) => addWord(s.word));

// Pools « Prononcer » (étape 12 lettres + révisions).
for (const letter of "abcdefghijklmnopqrstuvwxyz") {
  letterPronouncePool(letter).forEach((p) => addWord(p.word));
}
[...TRISYLLABLE_WORDS, ...QUADRISYLLABLE_WORDS].forEach((w) => addWord(w.word));
Object.values(bisyllablePools as Record<string, string[]>).flat().forEach(addWord);

// ── Syllabes ──────────────────────────────────────────────────────────────────

const syllables = new Set<string>();
const addSyl = (s: string) => {
  const v = slug(s.trim());
  if (v) syllables.add(v);
};

// Syllabes simples CV / VC : toutes les consonnes de leçons × voyelles.
for (const c of CONSONANT_ORDER) {
  for (const v of SIMPLE_VOWELS) {
    addSyl(`${c}${v}`);
    addSyl(`${v}${c}`);
  }
}

// L5 : suites de 2 syllabes (cv2/vc2 + lecture rapide) — paires a+b (a ≠ b).
for (const v of SIMPLE_VOWELS) {
  const cv = L5_CONSONANTS.map((c) => `${c}${v}`);
  const vc = L5_VC_CONSONANTS.map((c) => `${v}${c}`);
  for (const pool of [cv, vc]) {
    for (const a of pool) for (const b of pool) if (a !== b) addSyl(a + b);
  }
}

// Leçons consonnes, étape « 2 syllabes » : paires de CV d'une même consonne.
for (const c of CONSONANT_ORDER) {
  const cv = SIMPLE_VOWELS.map((v) => `${c}${v}`);
  for (const a of cv) for (const b of cv) if (a !== b) addSyl(a + b);
}

// L7 sons complexes : consonne + graphème (mode cv) ou graphème + voyelle.
const COMPLEX_SYL_CONSONANTS = ["b", "d", "f", "l", "m", "n", "p", "r", "s", "t", "v"];
for (const lesson of COMPLEX_SOUND_LESSONS) {
  const targets = complexTargets(lesson.letter);
  if (usesGraphemeVowelSyllables(lesson.letterLower)) {
    for (const g of targets) for (const v of SIMPLE_VOWELS) addSyl(`${g}${v}`);
  } else {
    for (const g of targets) for (const c of COMPLEX_SYL_CONSONANTS) addSyl(`${c}${g}`);
  }
}

// ── Sortie ────────────────────────────────────────────────────────────────────

const out = {
  mots: [...mots].sort((a, b) => a.localeCompare(b, "fr")),
  syllables: [...syllables].sort((a, b) => a.localeCompare(b, "fr")),
};
writeFileSync("/tmp/lecture-audio-labels.json", JSON.stringify(out, null, 1));
console.log(`mots: ${out.mots.length}, syllables: ${out.syllables.length}`);
