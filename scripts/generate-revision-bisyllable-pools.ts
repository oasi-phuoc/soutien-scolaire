/**
 * Génère lib/curriculum/lecture-revision-bisyllable-pools.json
 * 50 mots bisyllabiques par lettre contenant le son de la lettre.
 * Usage : npx --yes tsx scripts/generate-revision-bisyllable-pools.ts
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { VOWELS, CONSONANTS } from "../lib/curriculum/lecture-data";
import { phonemeLabelForLetter, wordToPronStep } from "../lib/curriculum/syllabify";
import {
  LETTER_WORDS,
  allWordItems,
  countSyllables,
  wordHasPhoneme,
  teachingPhonemes,
  type WordItem,
} from "../lib/curriculum/word-pool";

const TARGET = 50;
const MAX_LEN = 11;

const PRON_2_SYL = new Set<string>();

for (const lesson of [...VOWELS, ...CONSONANTS]) {
  if (!("pronunciationChain" in lesson) || !lesson.pronunciationChain) continue;
  for (const step of lesson.pronunciationChain) {
    if ((step.syllable.match(/-/g) ?? []).length === 1) {
      PRON_2_SYL.add(step.word.toLowerCase());
    }
  }
}

/** Syllabation pédagogique CP (2 syllabes en lecture). */
for (const w of [
  "joueur", "ouest", "douane", "mouette", "chouette", "gouache", "nougat", "louer", "bijou", "genou",
  "herbe", "homme", "joue", "fouet", "houle", "rouille", "brouette", "brownie", "zouave",
]) {
  PRON_2_SYL.add(w);
}

/** Compléments curatés pour les lettres rares (validés par les règles ci-dessous). */
const EXTRA: Record<string, string[]> = {
  j: ["visage", "passage", "barrage", "mirage", "plumage", "volage", "message", "beige", "nuage", "fromage"],
  w: [
    "wagon", "wifi", "kiwi", "western", "bowling", "sandwich", "tramway", "walrus", "wombat", "wapiti",
    "walabi", "webcam", "whisky", "windsurf", "walkman", "snowboard", "jouet", "joueur", "fenouil",
    "ouest", "douane", "mouette", "chouette", "avouer", "douillet", "douanier", "alouette", "citrouille",
    "girouette", "grenouille", "marsouin", "pingouin", "wattman", "show", "clown", "wok", "gouache",
    "nougat", "louer", "bijou", "genou", "joue", "fouet", "houle", "rouille", "brouette", "brownie",
    "zouave", "waffle", "wilson", "waldo", "wasabi", "winter", "wonder", "walter", "warner", "watson", "walnut",
  ],
  x: [
    "taxi", "index", "fixe", "mixte", "boxe", "saxo", "silex", "latex", "préfixe", "klaxon", "vexant",
    "réflexe", "annexe", "complexe", "perplexe", "toxine", "vertex", "vortex", "perdrix", "ciseaux",
    "bordeaux", "cheveux", "phénix", "duplex", "relax", "remix", "maxi", "pixel", "boxer", "flux",
    "lynx", "sphinx", "exil", "axial", "convexe", "affixe", "extrait", "exode", "exige", "expire",
    "hexane", "lexique", "saxon", "inbox", "ajax", "xénon", "xérès", "borax", "unix", "texte",
    "saxophone", "xylophone", "hexagone", "exercice", "maximum", "oxygène", "galaxie",
  ],
  h: [
    "hibou", "herbe", "hiver", "habit", "habile", "halte", "hameau", "hangar", "hasard", "hélice",
    "héron", "homard", "horloge", "hyène", "hygiène", "hamster", "harnais", "hermine", "haltère", "hamac",
    "cahier", "bonheur", "dehors", "hachette", "hachoir", "haleine", "haras", "hareng", "harpe", "hausse",
    "hauteur", "hebdo", "henné", "hisse", "hobby", "hommage", "honnête", "honoré", "honteux", "horaire",
    "horizon", "housse", "hublot",     "humain", "humide", "humour", "hutte", "hybride", "hydrate", "hypnose", "hôtel", "héros", "hutin",
    "houette", "huppe", "halle",
  ],
};

function isSimpleWord(label: string): boolean {
  const normalized = label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .trim();
  return !/[\s-]/.test(normalized) && !/^\d/.test(normalized) && !label.includes("prix-");
}

function isBisyllabic(label: string): boolean {
  return countSyllables(label) === 2 || PRON_2_SYL.has(label.toLowerCase());
}

/** Lettres rares : accepte aussi 3 syllabes pour atteindre 50 mots. */
function isPoolSyllable(label: string, letterLower: string): boolean {
  if (isBisyllabic(label)) return true;
  if (["w", "x"].includes(letterLower) && countSyllables(label) === 3) return true;
  return false;
}

function labelToItem(label: string): WordItem {
  return { label, phonemes: teachingPhonemes(label) };
}

function startsWithLetter(label: string, letter: string): boolean {
  return label.normalize("NFD").replace(/[\u0300-\u036f]/gu, "").toLowerCase().startsWith(letter);
}

function lessonWords(letterLower: string): string[] {
  const lesson =
    VOWELS.find((v) => v.letterLower === letterLower) ??
    CONSONANTS.find((c) => c.letterLower === letterLower);
  if (!lesson) return [];
  const words = new Set<string>();
  if ("lowerWords" in lesson && lesson.lowerWords) {
    for (const w of lesson.lowerWords) words.add(w);
  }
  if ("lowerWordsSet1" in lesson) {
    for (const w of lesson.lowerWordsSet1 ?? []) words.add(w.toLowerCase());
    for (const w of lesson.lowerWordsSet2 ?? []) words.add(w.toLowerCase());
  }
  if ("upperWords" in lesson && lesson.upperWords) {
    for (const w of lesson.upperWords) words.add(w.toLowerCase());
  }
  if ("pronunciationChain" in lesson && lesson.pronunciationChain) {
    for (const step of lesson.pronunciationChain) words.add(step.word);
  }
  if ("soundItems" in lesson && lesson.soundItems) {
    for (const item of lesson.soundItems) words.add(item.label.toLowerCase());
  }
  return [...words];
}

const LESSON_WORDS_CACHE: Record<string, Set<string>> = {};

function lessonWordSet(letterLower: string): Set<string> {
  if (!LESSON_WORDS_CACHE[letterLower]) {
    LESSON_WORDS_CACHE[letterLower] = new Set(
      lessonWords(letterLower).map((w) => w.toLowerCase()),
    );
  }
  return LESSON_WORDS_CACHE[letterLower]!;
}

function matchesLetterSound(letterLower: string, phoneme: string, label: string): boolean {
  const item = labelToItem(label);
  const lc = label.toLowerCase();

  if (letterLower === "h" && phoneme === "/∅/") {
    if (lessonWordSet(letterLower).has(lc)) return true;
    return startsWithLetter(label, "h");
  }
  if (letterLower === "w" && phoneme === "/w/") {
    return lc.includes("w") || wordHasPhoneme(item, "/w/");
  }
  if (letterLower === "x" && phoneme === "/ks/") {
    return lc.includes("x") || wordHasPhoneme(item, "/ks/");
  }
  return wordHasPhoneme(item, phoneme);
}

function collectCandidates(letterLower: string, phoneme: string): string[] {
  const seen = new Set<string>();
  const out: string[] = [];

  function add(label: string) {
    const lc = label.toLowerCase();
    if (seen.has(lc)) return;
    if (!isSimpleWord(label)) return;
    if (label.length > MAX_LEN) return;
    if (!isPoolSyllable(label, letterLower)) return;
    if (!matchesLetterSound(letterLower, phoneme, label)) return;
    seen.add(lc);
    out.push(label);
  }

  for (const w of lessonWords(letterLower)) add(w);
  for (const item of allWordItems()) add(item.label);
  for (const w of LETTER_WORDS) add(w);
  for (const w of EXTRA[letterLower] ?? []) add(w);

  return out.sort((a, b) => {
    const score = (w: string) => {
      let s = 0;
      if (isBisyllabic(w)) s += 10;
      if (lessonWordSet(letterLower).has(w.toLowerCase())) s += 5;
      return s;
    };
    const diff = score(b) - score(a);
    if (diff !== 0) return diff;
    return a.localeCompare(b, "fr", { sensitivity: "base" });
  });
}

const letters = [
  ...VOWELS.map((v) => ({ letter: v.letterLower, phoneme: v.phoneme })),
  ...CONSONANTS.map((c) => ({ letter: c.letterLower, phoneme: c.phoneme })),
];

const pools: Record<string, string[]> = {};
const stats: { letter: string; found: number; final: number }[] = [];

for (const { letter, phoneme } of letters) {
  const candidates = collectCandidates(letter, phoneme);
  pools[letter] = candidates.slice(0, TARGET);
  stats.push({ letter, found: candidates.length, final: pools[letter]!.length });
}

console.table(stats);
const short = stats.filter((s) => s.final < TARGET);
if (short.length) {
  console.log("\nLettres sous 50 mots :", short.map((s) => `${s.letter}(${s.found})`).join(", "));
  process.exitCode = 1;
}

const outPath = resolve(__dirname, "../lib/curriculum/lecture-revision-bisyllable-pools.json");
writeFileSync(outPath, JSON.stringify(pools, null, 2) + "\n", "utf8");
console.log(`\nÉcrit : ${outPath}`);

const pronouncePools: Record<string, { phoneme: string; syllable: string; word: string }[]> = {};
for (const { letter } of letters) {
  pronouncePools[letter] = pools[letter]!.map((word) => wordToPronStep(word, letter));
}

const pronouncePath = resolve(__dirname, "../lib/curriculum/lecture-pronounce-pools.json");
writeFileSync(pronouncePath, JSON.stringify(pronouncePools, null, 2) + "\n", "utf8");
console.log(`Écrit : ${pronouncePath}`);
