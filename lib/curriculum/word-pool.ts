// Pool of French words used for WordSpotter and SoundPicker exercises.
// imagePath  → /assets/words/img/{label}.jpg
// audioPath  → /assets/words/son/{label}.mp3

export const WORD_POOL: string[] = [
  // A
  "abricot","abeille","aiguille","album","alphabet","ami","ampoule","ananas","âne","araignée","arbre","arc","armoire","autobus","avion","azur",
  // B
  "baleine","ballon","banane","bateau","bébé","biberon","biche","bonbon","bougie","bouton","bras","brioche","brosse","bureau","bus",
  // C
  "café","canard","carotte","casque","cerise","citron","clef","collier","crayon","crocodile","cube","cuillère",
  // D
  "dauphin","dent","dindon","domino","dragon","dos","drapeau",
  // E
  "eau","école","écureuil","éléphant","épée","escalier","étoile",
  // F
  "farine","feuille","fleur","fontaine","forêt","fraise","fromage","fusée",
  // G
  "gâteau","girafe","gorille","grenouille","guitare",
  // H
  "herbe","hibou","hippopotame","hôpital","huile",
  // I
  "ibis","île","image",
  // J
  "jardin","jouet","journal","jus",
  // K
  "kangourou","kayak","kiwi","koala",
  // L
  "lapin","légume","lion","livre","loup","lune",
  // M
  "maison","maman","miroir","montagne","mouton",
  // N
  "nid","noisette","nuage",
  // O
  "oiseau","orange","oreille","ours",
  // P
  "panda","papillon","piano","poisson","pomme","puzzle",
  // Q / K
  "quatre","quinze",
  // R
  "radis","renard","requin","rivière","robot","rose",
  // S
  "sapin","serpent","singe","soleil","souris","stylo",
  // T
  "tapis","tigre","tomate","tortue","train","tulipe",
  // U
  "uniforme","usine",
  // V
  "vache","valise","vampire","vélo","violon",
  // W
  "wagon",
  // X
  "saxophone","xylophone",
  // Y
  "yoga",
  // Z
  "zèbre","zéro","zigzag","zoo",
  // extra common words
  "ami","balle","bâton","cage","danse","éponge","feu","gare","île","joue",
  "lac","mer","neige","or","pain","quai","rue","sel","tour","urne",
  "vent","wagon","nuit","piste","lime","miel","oeil","gant","flûte","cire",
];

// Maps a teaching phoneme to the regex that detects it in a written word.
const PHONEME_LETTER_MAP: Record<string, RegExp> = {
  "/a/":  /[aàâ]/i,
  "/o/":  /[oô]/i,
  "/i/":  /[iîï]/i,
  "/y/":  /[uùû]/i,
  "/e/":  /[eéèêë]/i,
  "/b/":  /b/i,
  "/k/":  /[ckq]/i,
  "/d/":  /d/i,
  "/f/":  /f/i,
  "/g/":  /g/i,
  "/ʒ/":  /j/i,
  "/l/":  /l/i,
  "/m/":  /m/i,
  "/n/":  /n/i,
  "/p/":  /p/i,
  "/r/":  /r/i,
  "/s/":  /s/i,
  "/t/":  /t/i,
  "/v/":  /v/i,
  "/z/":  /z/i,
  "/w/":  /w/i,
  "/ks/": /x/i,
  "/∅/":  /h/i,
};

export function wordHasPhoneme(word: string, phoneme: string): boolean {
  const re = PHONEME_LETTER_MAP[phoneme];
  return re ? re.test(word) : false;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Pick n random words that contain the given letter (case-insensitive). */
export function randomWordsWithLetter(letter: string, n: number): string[] {
  const lc = letter.toLowerCase();
  const pool = WORD_POOL.filter((w) => w.toLowerCase().includes(lc));
  return shuffle(pool).slice(0, n);
}

/**
 * Pick n items for the SoundPicker image grid.
 * Aims for ~40 % "has phoneme" / ~60 % "doesn't have phoneme".
 */
export function randomSoundItems(phoneme: string, n = 16): string[] {
  const yes = shuffle(WORD_POOL.filter((w) => wordHasPhoneme(w, phoneme)));
  const no  = shuffle(WORD_POOL.filter((w) => !wordHasPhoneme(w, phoneme)));
  const yCount = Math.min(Math.round(n * 0.4) + 1, yes.length);
  const nCount = Math.min(n - yCount, no.length);
  return shuffle([...yes.slice(0, yCount), ...no.slice(0, nCount)]);
}
