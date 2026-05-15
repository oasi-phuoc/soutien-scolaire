// Each word carries the list of TEACHING phonemes it actually contains
// (phonetically, not orthographically).
// imagePath → /assets/words/img/{label}.jpg
// audioPath → /assets/words/son/{label}.mp3

export type WordItem = {
  label: string;
  phonemes: string[]; // subset of the 23 teaching phonemes
};

export const WORD_ITEMS: WordItem[] = [
  // ── vowels ─────────────────────────────────────────────────────────────────
  { label: "arbre",      phonemes: ["/a/", "/r/", "/b/"] },
  { label: "ami",        phonemes: ["/a/", "/m/", "/i/"] },
  { label: "ananas",     phonemes: ["/a/", "/n/", "/s/"] },
  { label: "abricot",    phonemes: ["/a/", "/b/", "/r/", "/i/", "/k/", "/o/"] },
  { label: "avion",      phonemes: ["/a/", "/v/", "/i/"] },
  { label: "animal",     phonemes: ["/a/", "/n/", "/i/", "/m/", "/l/"] },
  { label: "araignée",   phonemes: ["/a/", "/r/", "/e/"] },
  { label: "alphabet",   phonemes: ["/a/", "/l/", "/f/", "/b/", "/t/"] },
  { label: "autobus",    phonemes: ["/o/", "/t/", "/b/", "/y/", "/s/"] },
  { label: "île",        phonemes: ["/i/", "/l/"] },
  { label: "ibis",       phonemes: ["/i/", "/b/", "/s/"] },
  { label: "image",      phonemes: ["/i/", "/m/", "/a/", "/ʒ/"] },
  { label: "usine",      phonemes: ["/y/", "/z/", "/i/", "/n/"] },
  { label: "uniforme",   phonemes: ["/y/", "/n/", "/i/", "/f/", "/r/", "/m/"] },
  { label: "école",      phonemes: ["/e/", "/k/", "/l/"] },
  { label: "étoile",     phonemes: ["/e/", "/t/", "/w/", "/a/", "/l/"] },
  { label: "épée",       phonemes: ["/e/", "/p/"] },
  { label: "éléphant",   phonemes: ["/e/", "/l/", "/f/"] },
  { label: "escalier",   phonemes: ["/e/", "/s/", "/k/", "/a/", "/l/"] },
  // ── B ──────────────────────────────────────────────────────────────────────
  { label: "ballon",     phonemes: ["/b/", "/a/", "/l/"] },
  { label: "banane",     phonemes: ["/b/", "/a/", "/n/"] },
  { label: "bateau",     phonemes: ["/b/", "/a/", "/t/", "/o/"] },
  { label: "bébé",       phonemes: ["/b/", "/e/"] },
  { label: "biberon",    phonemes: ["/b/", "/i/", "/r/"] },
  { label: "bras",       phonemes: ["/b/", "/r/", "/a/"] },
  { label: "bureau",     phonemes: ["/b/", "/y/", "/r/", "/o/"] },
  { label: "balle",      phonemes: ["/b/", "/a/", "/l/"] },
  // ── K / C ──────────────────────────────────────────────────────────────────
  { label: "café",       phonemes: ["/k/", "/a/", "/f/", "/e/"] },
  { label: "canard",     phonemes: ["/k/", "/a/", "/n/", "/r/"] },
  { label: "carotte",    phonemes: ["/k/", "/a/", "/r/", "/t/"] },
  { label: "casque",     phonemes: ["/k/", "/a/", "/s/"] },           // e final muet → pas /e/
  { label: "cube",       phonemes: ["/k/", "/y/", "/b/"] },
  { label: "crayon",     phonemes: ["/k/", "/r/", "/e/"] },
  { label: "crocodile",  phonemes: ["/k/", "/r/", "/d/", "/i/", "/l/"] },
  { label: "lac",        phonemes: ["/l/", "/a/", "/k/"] },
  { label: "citron",     phonemes: ["/s/", "/i/", "/t/", "/r/"] },    // c + i → /s/
  { label: "cerise",     phonemes: ["/s/", "/r/", "/i/", "/z/"] },    // c + e → /s/
  // ── D ──────────────────────────────────────────────────────────────────────
  { label: "dauphin",    phonemes: ["/d/", "/o/", "/f/"] },           // au=/o/, ph=/f/
  { label: "domino",     phonemes: ["/d/", "/o/", "/m/", "/i/", "/n/"] },
  { label: "dragon",     phonemes: ["/d/", "/r/", "/a/", "/g/"] },
  { label: "drapeau",    phonemes: ["/d/", "/r/", "/a/", "/p/", "/o/"] },
  { label: "dodo",       phonemes: ["/d/", "/o/"] },
  { label: "danse",      phonemes: ["/d/", "/a/", "/s/"] },
  // ── F ──────────────────────────────────────────────────────────────────────
  { label: "farine",     phonemes: ["/f/", "/a/", "/r/", "/i/", "/n/"] },
  { label: "flamme",     phonemes: ["/f/", "/l/", "/a/", "/m/"] },
  { label: "fleur",      phonemes: ["/f/", "/l/", "/r/"] },
  { label: "forêt",      phonemes: ["/f/", "/r/"] },
  { label: "fraise",     phonemes: ["/f/", "/r/", "/z/"] },
  { label: "fromage",    phonemes: ["/f/", "/r/", "/m/", "/a/", "/ʒ/"] },
  { label: "fusée",      phonemes: ["/f/", "/y/", "/z/", "/e/"] },
  { label: "flûte",      phonemes: ["/f/", "/l/", "/y/", "/t/"] },
  // ── G ──────────────────────────────────────────────────────────────────────
  { label: "gâteau",     phonemes: ["/g/", "/a/", "/t/", "/o/"] },
  { label: "girafe",     phonemes: ["/ʒ/", "/i/", "/r/", "/a/", "/f/"] }, // g + i → /ʒ/
  { label: "gorille",    phonemes: ["/g/", "/r/", "/i/", "/l/"] },
  { label: "grenouille", phonemes: ["/g/", "/r/", "/n/", "/l/"] },
  { label: "guitare",    phonemes: ["/g/", "/i/", "/t/", "/a/", "/r/"] },
  { label: "gare",       phonemes: ["/g/", "/a/", "/r/"] },
  // ── H ──────────────────────────────────────────────────────────────────────
  { label: "herbe",      phonemes: ["/∅/", "/r/", "/b/"] },
  { label: "hibou",      phonemes: ["/∅/", "/i/", "/b/"] },
  { label: "hôpital",    phonemes: ["/∅/", "/o/", "/p/", "/i/", "/t/", "/a/", "/l/"] },
  // ── J / ʒ ──────────────────────────────────────────────────────────────────
  { label: "jardin",     phonemes: ["/ʒ/", "/a/", "/r/", "/d/"] },
  { label: "jouet",      phonemes: ["/ʒ/", "/w/"] },                  // ou before vowel = /w/
  { label: "jus",        phonemes: ["/ʒ/", "/y/"] },
  { label: "bijou",      phonemes: ["/b/", "/i/", "/ʒ/"] },
  // ── K ──────────────────────────────────────────────────────────────────────
  { label: "kangourou",  phonemes: ["/k/", "/g/", "/r/"] },
  { label: "kayak",      phonemes: ["/k/", "/a/"] },
  { label: "kiwi",       phonemes: ["/k/", "/i/", "/w/"] },
  { label: "koala",      phonemes: ["/k/", "/a/", "/l/"] },
  // ── L ──────────────────────────────────────────────────────────────────────
  { label: "lapin",      phonemes: ["/l/", "/a/", "/p/"] },
  { label: "légume",     phonemes: ["/l/", "/e/", "/g/", "/y/", "/m/"] },
  { label: "livre",      phonemes: ["/l/", "/i/", "/v/", "/r/"] },
  { label: "lune",       phonemes: ["/l/", "/y/", "/n/"] },
  { label: "loto",       phonemes: ["/l/", "/o/", "/t/"] },
  { label: "lime",       phonemes: ["/l/", "/i/", "/m/"] },
  // ── M ──────────────────────────────────────────────────────────────────────
  { label: "maison",     phonemes: ["/m/", "/e/", "/z/"] },           // ai = /e/
  { label: "maman",      phonemes: ["/m/", "/a/"] },
  { label: "miroir",     phonemes: ["/m/", "/i/", "/r/", "/w/", "/a/"] }, // oi = /wa/
  { label: "montagne",   phonemes: ["/m/", "/t/", "/a/"] },
  { label: "moto",       phonemes: ["/m/", "/o/", "/t/"] },
  // ── N ──────────────────────────────────────────────────────────────────────
  { label: "nid",        phonemes: ["/n/", "/i/"] },
  { label: "noisette",   phonemes: ["/n/", "/w/", "/a/", "/z/", "/t/"] }, // oi = /wa/
  { label: "nuage",      phonemes: ["/n/", "/y/", "/a/", "/ʒ/"] },
  { label: "nuit",       phonemes: ["/n/", "/i/"] },
  // ── O ──────────────────────────────────────────────────────────────────────
  { label: "oiseau",     phonemes: ["/w/", "/a/", "/z/", "/o/"] },    // oi=/wa/, eau=/o/
  { label: "orange",     phonemes: ["/o/", "/r/", "/ʒ/"] },
  // ── P ──────────────────────────────────────────────────────────────────────
  { label: "panda",      phonemes: ["/p/", "/a/", "/d/"] },
  { label: "papillon",   phonemes: ["/p/", "/a/", "/i/", "/l/"] },
  { label: "piano",      phonemes: ["/p/", "/a/", "/n/", "/o/"] },
  { label: "poisson",    phonemes: ["/p/", "/w/", "/a/", "/s/"] },    // oi = /wa/
  { label: "pomme",      phonemes: ["/p/", "/m/"] },
  { label: "puzzle",     phonemes: ["/p/", "/y/", "/z/", "/l/"] },
  { label: "piste",      phonemes: ["/p/", "/i/", "/s/", "/t/"] },
  // ── R ──────────────────────────────────────────────────────────────────────
  { label: "radis",      phonemes: ["/r/", "/a/", "/d/", "/i/"] },
  { label: "renard",     phonemes: ["/r/", "/n/", "/a/"] },
  { label: "requin",     phonemes: ["/r/", "/k/"] },
  { label: "rivière",    phonemes: ["/r/", "/i/", "/v/"] },
  { label: "robot",      phonemes: ["/r/", "/b/", "/o/"] },
  { label: "rose",       phonemes: ["/r/", "/o/", "/z/"] },
  { label: "rue",        phonemes: ["/r/", "/y/"] },
  // ── S ──────────────────────────────────────────────────────────────────────
  { label: "sapin",      phonemes: ["/s/", "/a/", "/p/"] },
  { label: "serpent",    phonemes: ["/s/", "/r/", "/p/"] },
  { label: "singe",      phonemes: ["/s/", "/ʒ/"] },
  { label: "soleil",     phonemes: ["/s/", "/l/"] },
  { label: "souris",     phonemes: ["/s/", "/r/", "/i/"] },
  { label: "stylo",      phonemes: ["/s/", "/t/", "/i/", "/l/", "/o/"] },
  { label: "solo",       phonemes: ["/s/", "/o/", "/l/"] },
  { label: "cire",       phonemes: ["/s/", "/i/", "/r/"] },           // c + i → /s/
  // ── T ──────────────────────────────────────────────────────────────────────
  { label: "tapis",      phonemes: ["/t/", "/a/", "/p/", "/i/"] },
  { label: "tigre",      phonemes: ["/t/", "/i/", "/g/", "/r/"] },
  { label: "tomate",     phonemes: ["/t/", "/m/", "/a/"] },
  { label: "tortue",     phonemes: ["/t/", "/r/", "/y/"] },
  { label: "train",      phonemes: ["/t/", "/r/"] },
  { label: "tulipe",     phonemes: ["/t/", "/y/", "/l/", "/i/", "/p/"] },
  // ── V ──────────────────────────────────────────────────────────────────────
  { label: "vache",      phonemes: ["/v/", "/a/"] },
  { label: "valise",     phonemes: ["/v/", "/a/", "/l/", "/i/", "/z/"] },
  { label: "vampire",    phonemes: ["/v/", "/p/", "/i/", "/r/"] },
  { label: "vélo",       phonemes: ["/v/", "/e/", "/l/", "/o/"] },
  { label: "violon",     phonemes: ["/v/", "/i/", "/l/"] },
  // ── W ──────────────────────────────────────────────────────────────────────
  { label: "wagon",      phonemes: ["/w/", "/a/", "/g/"] },
  // ── X ──────────────────────────────────────────────────────────────────────
  { label: "saxophone",  phonemes: ["/s/", "/a/", "/ks/", "/f/"] },
  { label: "xylophone",  phonemes: ["/ks/", "/i/", "/l/", "/f/"] },
  // ── Z ──────────────────────────────────────────────────────────────────────
  { label: "zèbre",      phonemes: ["/z/", "/b/", "/r/"] },
  { label: "zéro",       phonemes: ["/z/", "/e/", "/r/", "/o/"] },
  { label: "zigzag",     phonemes: ["/z/", "/i/", "/g/", "/a/"] },
  { label: "zoo",        phonemes: ["/z/"] },
];

// ── helpers ───────────────────────────────────────────────────────────────────

export function wordHasPhoneme(item: WordItem, phoneme: string): boolean {
  return item.phonemes.includes(phoneme);
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Random labels (for WordSpotter): words whose written form contains the letter. */
export function randomWordsWithLetter(letter: string, n: number): string[] {
  const lc = letter.toLowerCase();
  const pool = WORD_ITEMS.filter((w) => w.label.toLowerCase().includes(lc));
  return shuffle(pool)
    .slice(0, n)
    .map((w) => w.label);
}

/**
 * Random items for SoundPicker image grid.
 * Aims for ~40 % "has phoneme" / ~60 % "doesn't have phoneme".
 */
export function randomSoundItems(phoneme: string, n = 16): WordItem[] {
  const yes = shuffle(WORD_ITEMS.filter((w) => wordHasPhoneme(w, phoneme)));
  const no  = shuffle(WORD_ITEMS.filter((w) => !wordHasPhoneme(w, phoneme)));
  const yCount = Math.min(Math.round(n * 0.4) + 1, yes.length);
  const nCount = Math.min(n - yCount, no.length);
  return shuffle([...yes.slice(0, yCount), ...no.slice(0, nCount)]);
}
