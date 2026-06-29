// ─── Types ────────────────────────────────────────────────────────────────────

export type SoundItem = { label: string; hasSound: boolean };
export type PronStep = { phoneme: string; syllable: string; word: string };

export type ReadingGrid = {
  key: string;
  label: string;
  items: string[];
};

export type VowelData = {
  type: "vowel";
  letter: string;
  letterLower: string;
  phoneme: string;
  exampleWord: string;
  exampleImagePath?: string;
  exampleAudioPath?: string;
  upperGrid: string[];
  lowerGrid: string[];
  upperWords: string[];
  lowerWords: string[];
  soundItems: SoundItem[];
  pronunciationChain: PronStep[];
};

export type ConsonantData = {
  type: "consonant";
  letter: string;
  letterLower: string;
  phoneme: string;
  exampleWord: string;
  exampleImagePath?: string;
  exampleAudioPath?: string;
  upperGrid: string[];
  lowerGrid: string[];
  upperWordsSet1: string[];
  upperWordsSet2: string[];
  lowerWords: string[];
  soundItems: SoundItem[];
  syllableGrid: string[];
  pronunciationChain: PronStep[];
};

export type SyllableLessonData = {
  type: "syllable";
  letter: string;
  letterLower: string;
  phoneme: string;
  title: string;
  grids: ReadingGrid[];
};

export type MonosyllableLessonData = {
  type: "monosyllable";
  letter: string;
  letterLower: string;
  phoneme: string;
  title: string;
  grids: ReadingGrid[];
};

export type ComplexSoundLessonData = {
  type: "complex-sound";
  letter: string;
  letterLower: string;
  phoneme: string;
  title: string;
  exampleWord: string;
  exampleImagePath?: string;
  upperGrid: string[];
  lowerGrid: string[];
  upperWords: string[];
  lowerWords: string[];
  pronunciationChain: PronStep[];
  grids: ReadingGrid[];
};

export type MultisyllableLessonData = {
  type: "multisyllable";
  letter: string;
  letterLower: string;
  phoneme: string;
  title: string;
  grids: ReadingGrid[];
};

export type LetterData = VowelData | ConsonantData | SyllableLessonData | MonosyllableLessonData | ComplexSoundLessonData | MultisyllableLessonData;

export type RevisionData = {
  pair: string;
  title: string;
  letterA: string;
  letterB: string;
  phonemeA: string;
  phonemeB: string;
  mixedGrid: string[];
  soundWords: { word: string; answer: "A" | "B" | "AB" }[];
  readWords: { letter: string; word: string }[];
};

export type EvaluationData = {
  id: string;
  title: string;
  subtitle: string;
  letters: { letter: string; phoneme: string }[];
  mixedGrid: string[];
  soundWords: { word: string; answer: string }[];
  readWords: { letter: string; word: string }[];
};

export type Story = {
  id: string;
  title: string;
  level: "A1" | "A2" | "B1";
  sentences: string[];
};

export type StorySegment = { text: string; kind?: "complex" | "silent" };

export function parseAnnotated(s: string): StorySegment[] {
  const segments: StorySegment[] = [];
  let i = 0;
  while (i < s.length) {
    if (s[i] === "[") {
      const end = s.indexOf("]", i + 1);
      if (end !== -1) {
        segments.push({ text: s.slice(i + 1, end), kind: "complex" });
        i = end + 1;
        continue;
      }
    }
    if (s[i] === "{") {
      const end = s.indexOf("}", i + 1);
      if (end !== -1) {
        segments.push({ text: s.slice(i + 1, end), kind: "silent" });
        i = end + 1;
        continue;
      }
    }
    let j = i + 1;
    while (j < s.length && s[j] !== "[" && s[j] !== "{") j++;
    segments.push({ text: s.slice(i, j) });
    i = j;
  }
  return segments;
}

export function stripAnnotations(s: string): string {
  return s.replace(/\[([^\]]*)\]/g, "$1").replace(/\{([^}]*)\}/g, "$1");
}

// ─── Helper ────────────────────────────────────────────────────────────────────

function g(
  target: string,
  distractors: string[],
  positions: number[],
  size = 20,
): string[] {
  const out: string[] = [];
  let di = 0;
  for (let i = 0; i < size; i++) {
    out.push(positions.includes(i) ? target : distractors[di++ % distractors.length]);
  }
  return out;
}

// ─── Vowels ───────────────────────────────────────────────────────────────────

export const VOWELS: VowelData[] = [
  {
    type: "vowel",
    letter: "A",
    letterLower: "a",
    phoneme: "/a/",
    exampleWord: "Arbre",
    exampleImagePath: "/assets/letters/img/a-arbre.webp",
    exampleAudioPath: "/assets/letters/son/a-arbre.mp3",
    upperGrid: ["C","A","Q","G","F","T","Z","A","W","H","Z","B","Q","A","C","Y","X","A","A","J"],
    lowerGrid: ["k","a","h","q","a","r","r","a","o","l","c","h","p","g","a","a","d","w","m","b"],
    upperWords: ["ÉLÉPHANT","AUTOBUS","EXAMEN","AMANDE","PLAGE"],
    lowerWords: ["fromage","stade","image","kayak","valise"],
    soundItems: [
      { label: "LIVRE", hasSound: false },
      { label: "ANANAS", hasSound: true },
      { label: "OEUF", hasSound: false },
      { label: "RADIO", hasSound: true },
      { label: "PANDA", hasSound: true },
      { label: "MIROIR", hasSound: false },
    ],
    pronunciationChain: [
      { phoneme: "a", syllable: "a-mi", word: "ami" },
      { phoneme: "a", syllable: "a-li", word: "ali" },
      { phoneme: "a", syllable: "a-na", word: "ana" },
      { phoneme: "a", syllable: "a-ller", word: "aller" },
    ],
  },
  {
    type: "vowel",
    letter: "O",
    letterLower: "o",
    phoneme: "/o/",
    exampleWord: "Orange",
    exampleImagePath: "/assets/letters/img/o-orange.webp",
    upperGrid: g("O", ["A","C","B","G","Q","H","J","F","R","D","K","N","P","L","M"], [1,4,7,11,14,19]),
    lowerGrid: g("o", ["c","k","j","n","d","r","g","a","l","v","p","u","e","m","f"], [1,4,7,11,14,19]),
    upperWords: ["ÉCOLE","ROBOT","PHOTO","DODO","STYLO"],
    lowerWords: ["rose","solo","porte","domino","vélo"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "ROBOT", hasSound: true },
      { label: "LIVRE", hasSound: false },
      { label: "VÉLO", hasSound: true },
      { label: "MOTO", hasSound: true },
      { label: "CHAT", hasSound: false },
    ],
    pronunciationChain: [
      { phoneme: "o", syllable: "ro-se", word: "rose" },
      { phoneme: "o", syllable: "mo-to", word: "moto" },
      { phoneme: "o", syllable: "so-lo", word: "solo" },
      { phoneme: "o", syllable: "o-li", word: "oli" },
    ],
  },
  {
    type: "vowel",
    letter: "I",
    letterLower: "i",
    phoneme: "/i/",
    exampleWord: "Île",
    exampleImagePath: "/assets/letters/img/i-ile.webp",
    upperGrid: g("I", ["T","J","L","F","N","V","K","D","H","B","M","P","Z","R","C"], [1,4,7,11,14,18,19]),
    lowerGrid: g("i", ["j","p","k","n","d","f","g","h","t","l","v","u","c","m","b"], [1,4,7,11,14,18,19]),
    upperWords: ["IBIS","GIRAFE","MIDI","VISITE","TAXI"],
    lowerWords: ["livre","tigre","stylo","midi","nuit"],
    soundItems: [
      { label: "OISEAU", hasSound: false },
      { label: "IBIS", hasSound: true },
      { label: "CHAT", hasSound: false },
      { label: "STYLO", hasSound: true },
      { label: "MIDI", hasSound: true },
      { label: "SOLEIL", hasSound: false },
    ],
    pronunciationChain: [
      { phoneme: "i", syllable: "î-le", word: "île" },
      { phoneme: "i", syllable: "li-re", word: "lire" },
      { phoneme: "i", syllable: "mi-di", word: "midi" },
      { phoneme: "i", syllable: "pi-ste", word: "piste" },
    ],
  },
  {
    type: "vowel",
    letter: "U",
    letterLower: "u",
    phoneme: "/y/",
    exampleWord: "Usine",
    exampleImagePath: "/assets/letters/img/u-usine.webp",
    upperGrid: g("U", ["P","N","R","G","F","J","M","D","K","B","V","H","S","L","T"], [1,4,7,11,14,18,19]),
    lowerGrid: g("u", ["n","h","g","f","j","p","d","k","r","v","l","m","b","s","t"], [1,4,7,11,14,18,19]),
    upperWords: ["USINE","NUAGE","TUBE","FUSÉE","BULLE"],
    lowerWords: ["rue","lune","usine","musée","statue"],
    soundItems: [
      { label: "ÉTOILE", hasSound: false },
      { label: "LUNE", hasSound: true },
      { label: "CHAT", hasSound: false },
      { label: "TUBE", hasSound: true },
      { label: "BULLE", hasSound: true },
      { label: "RADIO", hasSound: false },
    ],
    pronunciationChain: [
      { phoneme: "u", syllable: "u-ne", word: "une" },
      { phoneme: "u", syllable: "lu-ne", word: "lune" },
      { phoneme: "u", syllable: "mu-sée", word: "musée" },
      { phoneme: "u", syllable: "ru-se", word: "ruse" },
    ],
  },
  {
    type: "vowel",
    letter: "E",
    letterLower: "e",
    phoneme: "/e/",
    exampleWord: "École",
    exampleImagePath: "/assets/letters/img/e-ecole.webp",
    upperGrid: g("E", ["A","I","B","T","N","R","H","M","K","V","D","P","L","C","F"], [1,4,7,11,14,18,19]),
    lowerGrid: g("e", ["n","h","k","b","r","p","f","g","l","v","j","c","u","m","d"], [1,4,7,11,14,18,19]),
    upperWords: ["ÉCOLE","BÉBÉ","ÉTÉ","ÉLÈVE","ÉPÉE"],
    lowerWords: ["épée","bébé","été","école","élève"],
    soundItems: [
      { label: "CHAT", hasSound: false },
      { label: "BÉBÉ", hasSound: true },
      { label: "LIVRE", hasSound: false },
      { label: "ÉTÉ", hasSound: true },
      { label: "ÉLÈVE", hasSound: true },
      { label: "SOLEIL", hasSound: false },
    ],
    pronunciationChain: [
      { phoneme: "e", syllable: "é-té", word: "été" },
      { phoneme: "e", syllable: "bé-bé", word: "bébé" },
      { phoneme: "e", syllable: "é-co-le", word: "école" },
      { phoneme: "e", syllable: "fé-e", word: "fée" },
    ],
  },
  {
    type: "vowel",
    letter: "Y",
    letterLower: "y",
    phoneme: "/i/",
    exampleWord: "Yaourt",
    exampleImagePath: "/assets/letters/img/y-yaourt.webp",
    upperGrid: g("Y", ["K","P","J","V","N","F","M","B","H","D","T","R","L","C","S"], [1,4,7,11,14,18,19]),
    lowerGrid: g("y", ["k","p","j","v","n","f","g","h","t","l","d","r","m","b","c"], [1,4,7,11,14,18,19]),
    upperWords: ["YEUX","STYLO","KAYAK","YOGA","PYRAMIDE"],
    lowerWords: ["yacht","style","yoyo","mystère","gym"],
    soundItems: [
      { label: "ANANAS", hasSound: false },
      { label: "STYLO", hasSound: true },
      { label: "CHAT", hasSound: false },
      { label: "YOGA", hasSound: true },
      { label: "PYRAMIDE", hasSound: true },
      { label: "LIVRE", hasSound: false },
    ],
    pronunciationChain: [
      { phoneme: "y", syllable: "sty-lo", word: "stylo" },
      { phoneme: "y", syllable: "yo-ga", word: "yoga" },
      { phoneme: "y", syllable: "ka-yak", word: "kayak" },
      { phoneme: "y", syllable: "gym", word: "gym" },
    ],
  },
];

// ─── Consonants ────────────────────────────────────────────────────────────────

export const CONSONANTS: ConsonantData[] = [
  {
    type: "consonant",
    letter: "B",
    letterLower: "b",
    phoneme: "/b/",
    exampleWord: "Ballon",
    exampleImagePath: "/assets/letters/img/b-ballon.webp",
    upperGrid: ["G","B","B","V","R","B","J","B","U","B","F","I","B","H","E","B","N","F","H","B"],
    lowerGrid: ["m","g","b","b","l","b","z","u","q","b","c","a","e","p","u","k","o","y","u","b"],
    upperWordsSet1: ["HIBOU","HABITUDE","BRIOCHE","ALPHABET"],
    upperWordsSet2: ["ENSEMBLE","BONJOUR","HERBE","NOMBRE","BRACELET"],
    lowerWords: ["abricot","brioche","bras","habitude","habit"],
    soundItems: [
      { label: "CHAT", hasSound: false },
      { label: "BALLON", hasSound: true },
      { label: "ROBE", hasSound: true },
      { label: "ÉCOLE", hasSound: false },
      { label: "BÉBÉ", hasSound: true },
      { label: "BANANE", hasSound: true },
    ],
    syllableGrid: ["bibi","beb","Bo","Ba","bY","bebe","bobo","ByB","bi","OB","by","BaB","byb","eb","bu"],
    pronunciationChain: [
      { phoneme: "b", syllable: "ba-lle", word: "balle" },
      { phoneme: "b", syllable: "ro-be", word: "robe" },
      { phoneme: "b", syllable: "ba-na-ne", word: "banane" },
      { phoneme: "b", syllable: "tu-be", word: "tube" },
    ],
  },
  {
    type: "consonant",
    letter: "C",
    letterLower: "c",
    phoneme: "/k/",
    exampleWord: "Carotte",
    exampleImagePath: "/assets/letters/img/c-carotte.webp",
    upperGrid: g("C", ["G","B","V","R","J","U","F","I","H","E","N","K","L","M","D"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("c", ["m","g","b","l","z","u","q","a","e","p","k","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["CAROTTE","CANARD","COULEUR","CRAYON"],
    upperWordsSet2: ["CROCODILE","CAFÉ","ABRICOT","ÉCLAIR","ÉCOLE"],
    lowerWords: ["carotte","canard","crayon","cacao","abricot"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "CAROTTE", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "CANARD", hasSound: true },
      { label: "CRAYON", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["coco","cac","Co","Ca","cU","cece","CaCo","CaC","cu","AC","cy","CaC","cac","ec","ca"],
    pronunciationChain: [
      { phoneme: "c", syllable: "ca-fe", word: "café" },
      { phoneme: "c", syllable: "ca-nard", word: "canard" },
      { phoneme: "c", syllable: "co-co", word: "coco" },
      { phoneme: "c", syllable: "cra-yon", word: "crayon" },
    ],
  },
  {
    type: "consonant",
    letter: "D",
    letterLower: "d",
    phoneme: "/d/",
    exampleWord: "Domino",
    exampleImagePath: "/assets/letters/img/d-domino.webp",
    upperGrid: g("D", ["G","B","V","R","J","U","F","I","H","E","N","K","L","M","C"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("d", ["m","g","b","l","z","u","q","a","e","p","k","o","y","f","c"], [2,3,5,9,15,19]),
    upperWordsSet1: ["DOMINO","DODO","DIMANCHE","DRAGON"],
    upperWordsSet2: ["BANDE","RADIS","SOLDAT","MONDE","CANARD"],
    lowerWords: ["domino","radis","monde","canard","idée"],
    soundItems: [
      { label: "LUNE", hasSound: false },
      { label: "DOMINO", hasSound: true },
      { label: "SOLEIL", hasSound: false },
      { label: "RADIS", hasSound: true },
      { label: "CANARD", hasSound: true },
      { label: "TUBE", hasSound: false },
    ],
    syllableGrid: ["dodo","dad","Do","Da","dU","dede","DoD","DeD","du","AD","dy","DaD","dad","ed","di"],
    pronunciationChain: [
      { phoneme: "d", syllable: "do-do", word: "dodo" },
      { phoneme: "d", syllable: "ra-dis", word: "radis" },
      { phoneme: "d", syllable: "ca-nard", word: "canard" },
      { phoneme: "d", syllable: "dra-gon", word: "dragon" },
    ],
  },
  {
    type: "consonant",
    letter: "G",
    letterLower: "g",
    phoneme: "/g/",
    exampleWord: "Girafe",
    exampleImagePath: "/assets/letters/img/g-girafe.webp",
    upperGrid: g("G", ["B","C","V","R","J","U","F","I","H","E","N","K","L","M","D"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("g", ["m","b","c","l","z","u","q","a","e","p","k","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["GORILLE","GARE","GÂTEAU","DRAGON"],
    upperWordsSet2: ["BAGUE","CIGARE","LÉGUME","FIGURE","GUITARE"],
    lowerWords: ["gorille","gare","gâteau","légume","cigare"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "GARE", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "GÂTEAU", hasSound: true },
      { label: "GORILLE", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["gaga","gag","Go","Ga","gU","gege","GoG","GeG","gu","AG","gy","GaG","gag","eg","gi"],
    pronunciationChain: [
      { phoneme: "g", syllable: "ga-teau", word: "gâteau" },
      { phoneme: "g", syllable: "go-rille", word: "gorille" },
      { phoneme: "g", syllable: "lé-gu-me", word: "légume" },
      { phoneme: "g", syllable: "gui-tare", word: "guitare" },
    ],
  },
  {
    type: "consonant",
    letter: "K",
    letterLower: "k",
    phoneme: "/k/",
    exampleWord: "Kangourou",
    exampleImagePath: "/assets/letters/img/k-kangourou.webp",
    upperGrid: g("K", ["G","B","C","V","R","J","U","F","I","H","E","N","L","M","D"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("k", ["m","g","b","l","z","u","q","a","e","p","c","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["KOALA","KAYAK","KILO","KIOSQUE"],
    upperWordsSet2: ["KAYAK","YOGA","FAKIR","PARKING","WEEK-END"],
    lowerWords: ["koala","kayak","kilo","fakir","parking"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "KAYAK", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "KOALA", hasSound: true },
      { label: "KIOSQUE", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["kaka","kak","Ko","Ka","kU","keke","KoK","KeK","ku","AK","ky","KaK","kak","ek","ki"],
    pronunciationChain: [
      { phoneme: "k", syllable: "ka-yak", word: "kayak" },
      { phoneme: "k", syllable: "ko-a-la", word: "koala" },
      { phoneme: "k", syllable: "ki-lo", word: "kilo" },
      { phoneme: "k", syllable: "ki-osque", word: "kiosque" },
    ],
  },
  {
    type: "consonant",
    letter: "P",
    letterLower: "p",
    phoneme: "/p/",
    exampleWord: "Papillon",
    exampleImagePath: "/assets/letters/img/p-papillon.webp",
    upperGrid: g("P", ["G","B","C","V","R","J","U","F","I","H","E","N","K","L","M"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("p", ["m","g","b","l","z","u","q","a","e","k","c","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["PAPILLON","POMME","PAIN","PLAGE"],
    upperWordsSet2: ["LAMPE","TAPIS","VAMPIRE","CARPE","CHIMPANZÉ"],
    lowerWords: ["papillon","pomme","pain","lampe","tapis"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "PAPILLON", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "POMME", hasSound: true },
      { label: "PLAGE", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["papa","pap","Po","Pa","pU","pepe","PoP","PeP","pu","AP","py","PaP","pap","ep","pi"],
    pronunciationChain: [
      { phoneme: "p", syllable: "pom-me", word: "pomme" },
      { phoneme: "p", syllable: "pa-pain", word: "pain" },
      { phoneme: "p", syllable: "pa-pi-llon", word: "papillon" },
      { phoneme: "p", syllable: "plage", word: "plage" },
    ],
  },
  {
    type: "consonant",
    letter: "Q",
    letterLower: "q",
    phoneme: "/k/",
    exampleWord: "Queue",
    exampleImagePath: "/assets/letters/img/q-queue.webp",
    upperGrid: g("Q", ["G","B","C","V","R","J","U","F","I","H","E","N","K","L","O"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("q", ["m","g","b","l","z","u","p","a","e","k","c","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["QUEUE","QUATRE","QUALITÉ","SQUARE"],
    upperWordsSet2: ["MARQUE","MASQUE","FABRIQUE","LAQUE","CLIQUE"],
    lowerWords: ["queue","quatre","marque","masque","laque"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "QUEUE", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "QUATRE", hasSound: true },
      { label: "MARQUE", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["quoi","qui","Qu","qu","QU","queux","QuQ","qua","qui","AQ","qua","QuA","quoi","eq","que"],
    pronunciationChain: [
      { phoneme: "qu", syllable: "qua-tre", word: "quatre" },
      { phoneme: "qu", syllable: "mar-que", word: "marque" },
      { phoneme: "qu", syllable: "mas-que", word: "masque" },
      { phoneme: "qu", syllable: "queue", word: "queue" },
    ],
  },
  {
    type: "consonant",
    letter: "T",
    letterLower: "t",
    phoneme: "/t/",
    exampleWord: "Tomate",
    exampleImagePath: "/assets/letters/img/t-tomate.webp",
    upperGrid: g("T", ["G","B","C","V","R","J","U","F","I","H","E","N","K","L","M"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("t", ["m","g","b","l","z","u","q","a","e","k","c","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["TOMATE","TRAIN","TABLE","TORTUE"],
    upperWordsSet2: ["BATEAU","CAROTTE","FORÊT","LETTRE","PATATE"],
    lowerWords: ["tomate","train","tortue","bateau","carotte"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "TOMATE", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "TRAIN", hasSound: true },
      { label: "BATEAU", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["tata","tat","To","Ta","tU","tete","ToT","TeT","tu","AT","ty","TaT","tat","et","ti"],
    pronunciationChain: [
      { phoneme: "t", syllable: "to-mate", word: "tomate" },
      { phoneme: "t", syllable: "tor-tue", word: "tortue" },
      { phoneme: "t", syllable: "ba-teau", word: "bateau" },
      { phoneme: "t", syllable: "pa-tate", word: "patate" },
    ],
  },
  {
    type: "consonant",
    letter: "F",
    letterLower: "f",
    phoneme: "/f/",
    exampleWord: "Forêt",
    exampleImagePath: "/assets/letters/img/f-foret.webp",
    upperGrid: g("F", ["G","B","C","V","R","J","U","T","I","H","E","N","K","L","M"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("f", ["m","g","b","l","z","u","q","a","e","k","c","o","y","t","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["FORÊT","FLEUR","FLAMME","FARINE"],
    upperWordsSet2: ["CAFÉ","GIFLE","DAUPHIN","ÉLÉPHANT","CARAFE"],
    lowerWords: ["forêt","fleur","farine","café","carafe"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "FORÊT", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "FLEUR", hasSound: true },
      { label: "CAFÉ", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["fafa","faf","Fo","Fa","fU","fefe","FoF","FeF","fu","AF","fy","FaF","faf","ef","fi"],
    pronunciationChain: [
      { phoneme: "f", syllable: "fo-rêt", word: "forêt" },
      { phoneme: "f", syllable: "fleur", word: "fleur" },
      { phoneme: "f", syllable: "ca-fé", word: "café" },
      { phoneme: "f", syllable: "ca-ra-fe", word: "carafe" },
    ],
  },
  {
    type: "consonant",
    letter: "J",
    letterLower: "j",
    phoneme: "/ʒ/",
    exampleWord: "Jus",
    exampleImagePath: "/assets/letters/img/j-jus.webp",
    upperGrid: g("J", ["G","B","C","V","R","F","U","T","I","H","E","N","K","L","M"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("j", ["m","g","b","l","z","u","q","a","e","k","c","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["JUS","JARDIN","JOUET","JAMBON"],
    upperWordsSet2: ["BIJOU","PYJAMA","DÉJEUNER","PROJET","BONJOUR"],
    lowerWords: ["jus","jardin","jouet","bijou","bonjour"],
    soundItems: [
      { label: "SOLEIL", hasSound: false },
      { label: "JUS", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "JARDIN", hasSound: true },
      { label: "BIJOU", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["jaja","jaj","Jo","Ja","jU","jeje","JoJ","JeJ","ju","AJ","jy","JaJ","jaj","ej","ji"],
    pronunciationChain: [
      { phoneme: "j", syllable: "jar-din", word: "jardin" },
      { phoneme: "j", syllable: "jou-et", word: "jouet" },
      { phoneme: "j", syllable: "bi-jou", word: "bijou" },
      { phoneme: "j", syllable: "bon-jour", word: "bonjour" },
    ],
  },
  {
    type: "consonant",
    letter: "L",
    letterLower: "l",
    phoneme: "/l/",
    exampleWord: "Lune",
    exampleImagePath: "/assets/letters/img/l-lune.webp",
    upperGrid: g("L", ["G","B","C","V","R","J","U","F","I","H","E","N","K","T","M"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("l", ["m","g","b","j","z","u","q","a","e","k","c","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["LUNE","LION","LAPIN","LIVRE"],
    upperWordsSet2: ["SOLEIL","BALLON","FLEUR","PLAGE","BELLE"],
    lowerWords: ["lune","lion","lapin","soleil","ballon"],
    soundItems: [
      { label: "SOLEIL", hasSound: true },
      { label: "BATEAU", hasSound: false },
      { label: "LUNE", hasSound: true },
      { label: "CRAYON", hasSound: false },
      { label: "LAPIN", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["lala","lal","Lo","La","lU","lele","LoL","LeL","lu","AL","ly","LaL","lal","el","li"],
    pronunciationChain: [
      { phoneme: "l", syllable: "lu-ne", word: "lune" },
      { phoneme: "l", syllable: "la-pin", word: "lapin" },
      { phoneme: "l", syllable: "so-leil", word: "soleil" },
      { phoneme: "l", syllable: "bal-lon", word: "ballon" },
    ],
  },
  {
    type: "consonant",
    letter: "M",
    letterLower: "m",
    phoneme: "/m/",
    exampleWord: "Maison",
    exampleImagePath: "/assets/letters/img/m-maison.webp",
    upperGrid: g("M", ["G","B","C","V","R","J","U","F","I","H","E","N","K","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("m", ["g","b","c","l","z","u","q","a","e","k","j","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["MAISON","MOUTON","MAMAN","MONTAGNE"],
    upperWordsSet2: ["POMME","FLAMME","CAMÉRA","DOMINO","COSTUME"],
    lowerWords: ["maison","mouton","maman","pomme","domino"],
    soundItems: [
      { label: "MAISON", hasSound: true },
      { label: "SOLEIL", hasSound: false },
      { label: "MOUTON", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "POMME", hasSound: true },
      { label: "BATEAU", hasSound: false },
    ],
    syllableGrid: ["mama","mam","Mo","Ma","mU","meme","MoM","MeM","mu","AM","my","MaM","mam","em","mi"],
    pronunciationChain: [
      { phoneme: "m", syllable: "mou-ton", word: "mouton" },
      { phoneme: "m", syllable: "ma-man", word: "maman" },
      { phoneme: "m", syllable: "pom-me", word: "pomme" },
      { phoneme: "m", syllable: "do-mi-no", word: "domino" },
    ],
  },
  {
    type: "consonant",
    letter: "N",
    letterLower: "n",
    phoneme: "/n/",
    exampleWord: "Nid",
    exampleImagePath: "/assets/letters/img/n-nid.webp",
    upperGrid: g("N", ["G","B","C","V","R","J","U","F","I","H","E","M","K","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("n", ["g","b","c","l","z","u","q","a","e","k","j","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["NID","NUIT","NUAGE","NOISETTE"],
    upperWordsSet2: ["CANARD","BANANE","LUNE","FONTAINE","ANANAS"],
    lowerWords: ["nid","nuit","nuage","canard","banane"],
    soundItems: [
      { label: "NID", hasSound: true },
      { label: "SOLEIL", hasSound: false },
      { label: "NUAGE", hasSound: true },
      { label: "LUNE", hasSound: true },
      { label: "BANANE", hasSound: true },
      { label: "BATEAU", hasSound: false },
    ],
    syllableGrid: ["nana","nan","No","Na","nU","nene","NoN","NeN","nu","AN","ny","NaN","nan","en","ni"],
    pronunciationChain: [
      { phoneme: "n", syllable: "nu-age", word: "nuage" },
      { phoneme: "n", syllable: "noi-sette", word: "noisette" },
      { phoneme: "n", syllable: "ca-nard", word: "canard" },
      { phoneme: "n", syllable: "ba-na-ne", word: "banane" },
    ],
  },
  {
    type: "consonant",
    letter: "R",
    letterLower: "r",
    phoneme: "/r/",
    exampleWord: "Rivière",
    exampleImagePath: "/assets/letters/img/r-riviere.webp",
    upperGrid: g("R", ["G","B","C","V","N","J","U","F","I","H","E","M","K","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("r", ["g","b","c","l","z","u","q","a","e","k","j","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["RIVIÈRE","ROSE","RENARD","RADIS"],
    upperWordsSet2: ["FORÊT","CAROTTE","CRAYON","FROMAGE","MIROIR"],
    lowerWords: ["rivière","rose","renard","forêt","crayon"],
    soundItems: [
      { label: "ROSE", hasSound: true },
      { label: "SOLEIL", hasSound: false },
      { label: "RENARD", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "CRAYON", hasSound: true },
      { label: "BATEAU", hasSound: false },
    ],
    syllableGrid: ["rara","rar","Ro","Ra","rU","rere","RoR","ReR","ru","AR","ry","RaR","rar","er","ri"],
    pronunciationChain: [
      { phoneme: "r", syllable: "ro-se", word: "rose" },
      { phoneme: "r", syllable: "re-nard", word: "renard" },
      { phoneme: "r", syllable: "cra-yon", word: "crayon" },
      { phoneme: "r", syllable: "mi-roir", word: "miroir" },
    ],
  },
  {
    type: "consonant",
    letter: "S",
    letterLower: "s",
    phoneme: "/s/",
    exampleWord: "Soleil",
    exampleImagePath: "/assets/letters/img/s-soleil.webp",
    upperGrid: g("S", ["G","B","C","V","N","J","U","F","I","H","E","M","K","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("s", ["g","b","c","l","z","u","q","a","e","k","j","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["SOLEIL","SAPIN","SOURIS","SUCRE"],
    upperWordsSet2: ["MAISON","ROSE","USINE","DESSIN","POISSON"],
    lowerWords: ["soleil","sapin","souris","maison","poisson"],
    soundItems: [
      { label: "SOLEIL", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "SOURIS", hasSound: true },
      { label: "BATEAU", hasSound: false },
      { label: "SAPIN", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["sasa","sas","So","Sa","sU","sese","SoS","SeS","su","AS","sy","SaS","sas","es","si"],
    pronunciationChain: [
      { phoneme: "s", syllable: "so-leil", word: "soleil" },
      { phoneme: "s", syllable: "sou-ris", word: "souris" },
      { phoneme: "s", syllable: "sa-pin", word: "sapin" },
      { phoneme: "s", syllable: "mai-son", word: "maison" },
    ],
  },
  {
    type: "consonant",
    letter: "V",
    letterLower: "v",
    phoneme: "/v/",
    exampleWord: "Vélo",
    exampleImagePath: "/assets/letters/img/v-velo.webp",
    upperGrid: g("V", ["G","B","C","N","R","J","U","F","I","H","E","M","K","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("v", ["g","b","c","l","z","u","q","a","e","k","j","o","y","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["VÉLO","VACHE","VIOLON","VALISE"],
    upperWordsSet2: ["AVION","RIVIÈRE","LIVRE","CRAVATE","CAVE"],
    lowerWords: ["vélo","vache","violon","avion","livre"],
    soundItems: [
      { label: "VÉLO", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "VACHE", hasSound: true },
      { label: "BATEAU", hasSound: false },
      { label: "VIOLON", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["vava","vav","Vo","Va","vU","veve","VoV","VeV","vu","AV","vy","VaV","vav","ev","vi"],
    pronunciationChain: [
      { phoneme: "v", syllable: "vé-lo", word: "vélo" },
      { phoneme: "v", syllable: "va-che", word: "vache" },
      { phoneme: "v", syllable: "a-vion", word: "avion" },
      { phoneme: "v", syllable: "vi-o-lon", word: "violon" },
    ],
  },
  {
    type: "consonant",
    letter: "Z",
    letterLower: "z",
    phoneme: "/z/",
    exampleWord: "Zèbre",
    exampleImagePath: "/assets/letters/img/z-zebre.webp",
    upperGrid: g("Z", ["G","B","C","N","R","J","U","F","I","H","E","M","K","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("z", ["g","b","c","l","n","u","q","a","e","k","j","o","m","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["ZÈBRE","ZÉRO","ZONE","PUZZLE"],
    upperWordsSet2: ["GAZELLE","BRONZE","BALZAC","SEIZIÈME","ONZE"],
    lowerWords: ["zèbre","zéro","zone","puzzle","gazelle"],
    soundItems: [
      { label: "ZÈBRE", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "ZÉRO", hasSound: true },
      { label: "BATEAU", hasSound: false },
      { label: "GAZELLE", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["zaza","zaz","Zo","Za","zU","zeze","ZoZ","ZeZ","zu","AZ","zy","ZaZ","zaz","ez","zi"],
    pronunciationChain: [
      { phoneme: "z", syllable: "zé-ro", word: "zéro" },
      { phoneme: "z", syllable: "zè-bre", word: "zèbre" },
      { phoneme: "z", syllable: "ga-zelle", word: "gazelle" },
      { phoneme: "z", syllable: "puz-zle", word: "puzzle" },
    ],
  },
  {
    type: "consonant",
    letter: "W",
    letterLower: "w",
    phoneme: "/w/",
    exampleWord: "Wagon",
    exampleImagePath: "/assets/letters/img/w-wagon.webp",
    upperGrid: g("W", ["G","B","C","N","R","J","U","F","I","H","E","M","K","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("w", ["g","b","c","l","n","u","q","a","e","k","j","o","m","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["WAGON","WEEK-END","WIFI","WESTERN"],
    upperWordsSet2: ["SANDWICH","KIWI","BOWLING","CLOWN","SHOW"],
    lowerWords: ["wagon","week-end","wifi","kiwi","bowling"],
    soundItems: [
      { label: "WAGON", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "KIWI", hasSound: true },
      { label: "BATEAU", hasSound: false },
      { label: "CLOWN", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["wawa","waw","Wo","Wa","wU","wawa","WoW","WeW","wu","AW","wy","WaW","waw","ew","wi"],
    pronunciationChain: [
      { phoneme: "w", syllable: "wa-gon", word: "wagon" },
      { phoneme: "w", syllable: "ki-wi", word: "kiwi" },
      { phoneme: "w", syllable: "clown", word: "clown" },
      { phoneme: "w", syllable: "wi-fi", word: "wifi" },
    ],
  },
  {
    type: "consonant",
    letter: "X",
    letterLower: "x",
    phoneme: "/ks/",
    exampleWord: "Xylophone",
    exampleImagePath: "/assets/letters/img/x-xylophone.webp",
    upperGrid: g("X", ["G","B","C","N","R","J","U","F","I","H","E","M","K","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("x", ["g","b","c","l","n","u","q","a","e","k","j","o","m","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["TAXE","TEXTE","BOXE","LUXE"],
    upperWordsSet2: ["XYLOPHONE","SAXOPHONE","EXEMPLE","EXAMEN","EXPLIQUER"],
    lowerWords: ["taxe","texte","boxe","saxo","examen"],
    soundItems: [
      { label: "TAXE", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "BOXE", hasSound: true },
      { label: "BATEAU", hasSound: false },
      { label: "SAXO", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["xaxa","xax","Xo","Xa","xU","xexe","XoX","XeX","xu","AX","xy","XaX","xax","ex","xi"],
    pronunciationChain: [
      { phoneme: "x", syllable: "ta-xe", word: "taxe" },
      { phoneme: "x", syllable: "tex-te", word: "texte" },
      { phoneme: "x", syllable: "bo-xe", word: "boxe" },
      { phoneme: "x", syllable: "sa-xo", word: "saxo" },
    ],
  },
  {
    type: "consonant",
    letter: "H",
    letterLower: "h",
    phoneme: "/∅/",
    exampleWord: "Hibou",
    exampleImagePath: "/assets/letters/img/h-hibou.webp",
    upperGrid: g("H", ["G","B","C","N","R","J","U","F","I","K","E","M","V","L","T"], [1,2,5,8,11,14,18,19]),
    lowerGrid: g("h", ["g","b","c","l","n","u","q","a","e","k","j","o","m","f","d"], [2,3,5,9,15,19]),
    upperWordsSet1: ["HIBOU","HERBE","HOMME","HÔPITAL"],
    upperWordsSet2: ["CHAT","CAHIER","BONHEUR","DEHORS","THÉÂTRE"],
    lowerWords: ["hibou","herbe","homme","cahier","dehors"],
    soundItems: [
      { label: "HIBOU", hasSound: true },
      { label: "LUNE", hasSound: false },
      { label: "HERBE", hasSound: true },
      { label: "BATEAU", hasSound: false },
      { label: "CAHIER", hasSound: true },
      { label: "BÉBÉ", hasSound: false },
    ],
    syllableGrid: ["haha","hah","Ho","Ha","hU","hehe","HoH","HeH","hu","AH","hy","HaH","hah","eh","hi"],
    pronunciationChain: [
      { phoneme: "h", syllable: "hi-bou", word: "hibou" },
      { phoneme: "h", syllable: "her-be", word: "herbe" },
      { phoneme: "h", syllable: "ca-hier", word: "cahier" },
      { phoneme: "h", syllable: "hô-pi-tal", word: "hôpital" },
    ],
  },
];

// ─── Revisions ─────────────────────────────────────────────────────────────────

export const VOWEL_REVISIONS: RevisionData[] = [
  {
    pair: "a-o",
    title: "RL1 - Révision A & O",
    letterA: "A",
    letterB: "O",
    phonemeA: "/a/",
    phonemeB: "/o/",
    mixedGrid: ["A","B","E","A","M","I","A","O","R","L","A","N","C","T","F","A","X","K","O","B","E","O","M","I","O"],
    soundWords: [
      { word: "avion", answer: "A" },
      { word: "chat", answer: "A" },
      { word: "panda", answer: "A" },
      { word: "orange", answer: "AB" },
    ],
    readWords: [
      { letter: "a", word: "ami" },
      { letter: "a", word: "ali" },
      { letter: "a", word: "ana" },
      { letter: "o", word: "oli" },
    ],
  },
  {
    pair: "i-u",
    title: "RL2 - Révision I & U",
    letterA: "I",
    letterB: "U",
    phonemeA: "/i/",
    phonemeB: "/y/",
    mixedGrid: ["I","B","E","I","M","A","I","U","R","L","I","N","C","T","F","I","X","K","U","B","E","U","M","A","U"],
    soundWords: [
      { word: "île", answer: "A" },
      { word: "usine", answer: "B" },
      { word: "midi", answer: "A" },
      { word: "lune", answer: "B" },
    ],
    readWords: [
      { letter: "i", word: "île" },
      { letter: "i", word: "lire" },
      { letter: "u", word: "une" },
      { letter: "u", word: "lune" },
    ],
  },
  {
    pair: "e-y",
    title: "RL3 - Révision E & Y",
    letterA: "E",
    letterB: "Y",
    phonemeA: "/e/",
    phonemeB: "/i/",
    mixedGrid: ["E","B","A","E","M","I","E","Y","R","L","E","N","C","T","F","E","X","K","Y","B","A","Y","M","I","Y"],
    soundWords: [
      { word: "école", answer: "A" },
      { word: "stylo", answer: "B" },
      { word: "été", answer: "A" },
      { word: "yoga", answer: "B" },
    ],
    readWords: [
      { letter: "e", word: "épée" },
      { letter: "e", word: "bébé" },
      { letter: "y", word: "stylo" },
      { letter: "y", word: "yoga" },
    ],
  },
];

export const CONSONANT_REVISIONS: RevisionData[] = [
  {
    pair: "b-c",
    title: "RL4 - Révision B & C",
    letterA: "B",
    letterB: "C",
    phonemeA: "/b/",
    phonemeB: "/k/",
    mixedGrid: ["B","C","E","B","M","A","B","C","R","L","B","N","C","T","F","B","X","C","B","M","E","C","M","A","C"],
    soundWords: [
      { word: "ballon", answer: "A" },
      { word: "carotte", answer: "B" },
      { word: "banane", answer: "A" },
      { word: "canard", answer: "B" },
    ],
    readWords: [
      { letter: "b", word: "balle" },
      { letter: "b", word: "robe" },
      { letter: "c", word: "café" },
      { letter: "c", word: "coco" },
    ],
  },
  {
    pair: "d-g",
    title: "RL5 - Révision D & G",
    letterA: "D",
    letterB: "G",
    phonemeA: "/d/",
    phonemeB: "/g/",
    mixedGrid: ["D","G","E","D","M","A","D","G","R","L","D","N","G","T","F","D","X","G","D","M","E","G","M","A","G"],
    soundWords: [
      { word: "domino", answer: "A" },
      { word: "gâteau", answer: "B" },
      { word: "radis", answer: "A" },
      { word: "gorille", answer: "B" },
    ],
    readWords: [
      { letter: "d", word: "dodo" },
      { letter: "d", word: "canard" },
      { letter: "g", word: "gâteau" },
      { letter: "g", word: "légume" },
    ],
  },
  {
    pair: "k-p",
    title: "RL6 - Révision K & P",
    letterA: "K",
    letterB: "P",
    phonemeA: "/k/",
    phonemeB: "/p/",
    mixedGrid: ["K","P","E","K","M","A","K","P","R","L","K","N","P","T","F","K","X","P","K","M","E","P","M","A","P"],
    soundWords: [
      { word: "kayak", answer: "A" },
      { word: "pomme", answer: "B" },
      { word: "koala", answer: "A" },
      { word: "pain", answer: "B" },
    ],
    readWords: [
      { letter: "k", word: "kayak" },
      { letter: "k", word: "koala" },
      { letter: "p", word: "pomme" },
      { letter: "p", word: "papillon" },
    ],
  },
  {
    pair: "q-t",
    title: "RL7 - Révision Q & T",
    letterA: "Q",
    letterB: "T",
    phonemeA: "/k/",
    phonemeB: "/t/",
    mixedGrid: ["Q","T","E","Q","M","A","Q","T","R","L","Q","N","T","F","Q","X","T","Q","M","E","T","M","A","Q","T"],
    soundWords: [
      { word: "queue", answer: "A" },
      { word: "tomate", answer: "B" },
      { word: "quatre", answer: "A" },
      { word: "train", answer: "B" },
    ],
    readWords: [
      { letter: "q", word: "queue" },
      { letter: "q", word: "quatre" },
      { letter: "t", word: "tomate" },
      { letter: "t", word: "tortue" },
    ],
  },
  {
    pair: "f-j",
    title: "RL8 - Révision F & J",
    letterA: "F",
    letterB: "J",
    phonemeA: "/f/",
    phonemeB: "/ʒ/",
    mixedGrid: ["F","J","E","F","M","A","F","J","R","L","F","N","J","T","F","X","J","F","M","E","J","M","A","F","J"],
    soundWords: [
      { word: "forêt", answer: "A" },
      { word: "jardin", answer: "B" },
      { word: "fleur", answer: "A" },
      { word: "bijou", answer: "B" },
    ],
    readWords: [
      { letter: "f", word: "forêt" },
      { letter: "f", word: "fleur" },
      { letter: "j", word: "jus" },
      { letter: "j", word: "bijou" },
    ],
  },
  {
    pair: "l-m",
    title: "RL9 - Révision L, M & N",
    letterA: "L",
    letterB: "M",
    phonemeA: "/l/",
    phonemeB: "/m/",
    mixedGrid: ["L","M","E","L","A","L","M","R","L","N","M","T","F","L","X","M","L","A","M","E","L","M","A","L","M"],
    soundWords: [
      { word: "lune", answer: "A" },
      { word: "maison", answer: "B" },
      { word: "lapin", answer: "A" },
      { word: "mouton", answer: "B" },
    ],
    readWords: [
      { letter: "l", word: "lune" },
      { letter: "l", word: "ballon" },
      { letter: "m", word: "maman" },
      { letter: "m", word: "pomme" },
    ],
  },
  {
    pair: "r-s",
    title: "RL10 - Révision R & S",
    letterA: "R",
    letterB: "S",
    phonemeA: "/r/",
    phonemeB: "/s/",
    mixedGrid: ["R","S","E","R","A","R","S","L","R","M","S","T","F","R","X","S","R","A","S","E","R","S","A","R","S"],
    soundWords: [
      { word: "rose", answer: "A" },
      { word: "renard", answer: "A" },
      { word: "soleil", answer: "B" },
      { word: "souris", answer: "B" },
    ],
    readWords: [
      { letter: "r", word: "rose" },
      { letter: "r", word: "crayon" },
      { letter: "s", word: "soleil" },
      { letter: "s", word: "souris" },
    ],
  },
  {
    pair: "v-z",
    title: "RL11 - Révision V & Z",
    letterA: "V",
    letterB: "Z",
    phonemeA: "/v/",
    phonemeB: "/z/",
    mixedGrid: ["V","Z","E","V","A","V","Z","L","V","M","Z","T","F","V","X","Z","V","A","Z","E","V","Z","A","V","Z"],
    soundWords: [
      { word: "vélo", answer: "A" },
      { word: "vache", answer: "A" },
      { word: "zéro", answer: "B" },
      { word: "zèbre", answer: "B" },
    ],
    readWords: [
      { letter: "v", word: "vélo" },
      { letter: "v", word: "avion" },
      { letter: "z", word: "zéro" },
      { letter: "z", word: "gazelle" },
    ],
  },
  {
    pair: "w-x",
    title: "RL12 - Révision W & X",
    letterA: "W",
    letterB: "X",
    phonemeA: "/w/",
    phonemeB: "/ks/",
    mixedGrid: ["W","X","E","W","A","W","X","L","W","M","X","T","F","W","X","W","A","X","E","W","X","A","W","X","W"],
    soundWords: [
      { word: "wagon", answer: "A" },
      { word: "kiwi", answer: "A" },
      { word: "taxe", answer: "B" },
      { word: "boxe", answer: "B" },
    ],
    readWords: [
      { letter: "w", word: "wagon" },
      { letter: "w", word: "kiwi" },
      { letter: "x", word: "taxe" },
      { letter: "x", word: "texte" },
    ],
  },
  {
    pair: "x-h",
    title: "RL13 - Révision X & H",
    letterA: "X",
    letterB: "H",
    phonemeA: "/ks/",
    phonemeB: "/∅/",
    mixedGrid: ["X","H","E","X","A","X","H","L","X","M","H","T","F","X","H","X","A","H","E","X","H","A","X","H","X"],
    soundWords: [
      { word: "taxe", answer: "A" },
      { word: "hibou", answer: "B" },
      { word: "boxe", answer: "A" },
      { word: "herbe", answer: "B" },
    ],
    readWords: [
      { letter: "x", word: "taxe" },
      { letter: "x", word: "texte" },
      { letter: "h", word: "hibou" },
      { letter: "h", word: "herbe" },
    ],
  },
];

// ─── Evaluation (Voyelles) ─────────────────────────────────────────────────────

export const VOWEL_EVALUATION: EvaluationData = {
  id: "voyelles",
  title: "Évaluation — Les Voyelles",
  subtitle: "Test de toutes les voyelles : A, O, I, U, E, Y",
  letters: [
    { letter: "A", phoneme: "/a/" },
    { letter: "O", phoneme: "/o/" },
    { letter: "I", phoneme: "/i/" },
    { letter: "U", phoneme: "/y/" },
    { letter: "E", phoneme: "/e/" },
    { letter: "Y", phoneme: "/i/" },
  ],
  mixedGrid: [
    "A","O","B","A","I","U","E","Y","C","A","O","I","F","U","E","A","Y","O","I","U",
    "N","E","Y","A","O","I","T","U","E","Y",
  ],
  soundWords: [
    { word: "ami", answer: "A" },
    { word: "orange", answer: "O" },
    { word: "île", answer: "I" },
    { word: "usine", answer: "U" },
    { word: "école", answer: "E" },
    { word: "stylo", answer: "Y" },
  ],
  readWords: [
    { letter: "a", word: "chat" },
    { letter: "o", word: "moto" },
    { letter: "i", word: "midi" },
    { letter: "u", word: "lune" },
    { letter: "e", word: "bébé" },
    { letter: "y", word: "yoga" },
  ],
};

// ─── Stories ───────────────────────────────────────────────────────────────────

export const STORIES: Story[] = [
  // ── A1 : Débutant ─────────────────────────────────────────────────────────────
  {
    id: "le-chat",
    title: "Le chat",
    level: "A1",
    sentences: [
      "Le [ch]a{t} e{st} là.",
      "Il e{st} r[ou]{x} et gro{s}.",
      "Il dor{t} sur le tapi{s}.",
      "Il [ai]m{e} le l[ai]{t}.",
      "Le [ch]a{t} e{st} c[on]t[en]{t}.",
    ],
  },
  {
    id: "la-pomme",
    title: "La pomme",
    level: "A1",
    sentences: [
      "V[oi]ci une pomm{e} r[ou]g{e}.",
      "Elle e{st} sur la tabl{e}.",
      "Lila pr[en]{d} la pomm{e}.",
      "Elle m[an][ge] la pomm{e}.",
      "C'e{st} b[on] et sucré.",
    ],
  },
  {
    id: "le-chien",
    title: "Le chien",
    level: "A1",
    sentences: [
      "Le [ch]i[en] s'appell{e} Rex.",
      "Rex e{st} bl[an]c et peti{t}.",
      "Il [ai]m{e} j[ou][er].",
      "Il dor{t} d[an]{s} s[on] p[an]i[er].",
      "Rex e{st} [un] b[on] ami.",
    ],
  },
  {
    id: "le-soleil",
    title: "Le soleil",
    level: "A1",
    sentences: [
      "Le sol[eil] br[ill]{e}.",
      "Il f[ai]{t} [ch][au]{d}.",
      "Tom sor{t} d[an]{s} le jard[in].",
      "Il j[ou]{e} avec s[on] ball[on].",
      "[Qu]ell{e} bell{e} j[ou]rné{e} !",
    ],
  },
  {
    id: "la-maison",
    title: "La maison",
    level: "A1",
    sentences: [
      "Ma m[ai]s[on] e{st} gr[an]d{e}.",
      "Elle e{st} bl[an][ch]{e}.",
      "Il y a [un] jard[in].",
      "N[ou]{s} j[ou][on]{s} ded[an]{s}.",
      "C'e{st} notr{e} m[ai]s[on].",
    ],
  },
  // ── A2 : Moyen ────────────────────────────────────────────────────────────────
  {
    id: "au-marche",
    title: "Au marché",
    level: "A2",
    sentences: [
      "Mama va [au] mar[ch]é.",
      "Elle a[ch]èt{e} des tomat{es} et des carott{es}.",
      "Elle pr[en]{d} [au]ssi du p[ain] et du froma[ge].",
      "Le v[en]d[eu]r e{st} g[en]til.",
      "Mama r[en]tr{e} à la m[ai]s[on] avec s[on] p[an]i[er].",
    ],
  },
  {
    id: "mon-ami-paul",
    title: "Mon ami Paul",
    level: "A2",
    sentences: [
      "Paul e{st} m[on] ami.",
      "Il a {h}ui{t} [an]{s}, comm{e} m[oi].",
      "Il {h}abit{e} d[an]{s} ma ru{e}.",
      "N[ou]{s} all[on]{s} à l'écol{e} [en]sembl{e}.",
      "Après l'écol{e}, n[ou]{s} j[ou][on]{s} d[an]{s} le jard[in].",
      "Paul [ai]m{e} les livr{es} et les ball[on]{s}.",
    ],
  },
  {
    id: "le-jardin",
    title: "Le jardin",
    level: "A2",
    sentences: [
      "Notr{e} jard[in] e{st} b[eau] [au] pr[in]t[em]{ps}.",
      "Papa plant{e} des légum{es}.",
      "Il y a des tomat{es}, des carott{es} et de la salad{e}.",
      "N[ou]{s} arros[on]{s} les plant{es} [ch]a[qu]{e} j[ou]r.",
      "[En] été, n[ou]{s} c[ueil]l[on]{s} les légum{es}.",
    ],
  },
  {
    id: "les-animaux",
    title: "Les animaux",
    level: "A2",
    sentences: [
      "Lé[on] visit{e} une ferm{e}.",
      "Il y a des va[ch]{es} et des m[ou]t[on]{s}.",
      "La va[ch]{e} d[on]n{e} du l[ai]{t}.",
      "Les m[ou]t[on]{s} [on]{t} une l[ai]n{e} d[ou]c{e}.",
      "Lé[on] v[eu]{t} rev[en]ir dem[ain].",
    ],
  },
  {
    id: "ma-journee",
    title: "Ma journée",
    level: "A2",
    sentences: [
      "Le mat[in], je me lèv{e} tôt.",
      "Je m[an][ge] du p[ain] avec de la c[on]fitur{e}.",
      "Je pr[en]{ds} m[on] sac et je v[ai]{s} à l'écol{e}.",
      "J'appr[en]{ds} à lire et à écrire.",
      "Le s[oir], je lis une {h}ist[oir]{e}.",
    ],
  },
  // ── B1 : Avancé ───────────────────────────────────────────────────────────────
  {
    id: "a-l-ecole",
    title: "À l'école",
    level: "B1",
    sentences: [
      "Ce mat[in], Nora arriv{e} à l'écol{e} de b[on]n{e} {h}[eu]r{e}.",
      "Sa m[ai]tr[ess]{e} s'appell{e} Madame Bl[an]c.",
      "[En] cl[ass]{e}, les élèv{es} appr[en]n{ent} les lettr{es} et les [ch]iffr{es}.",
      "Nora [ai]m{e} surt[ou]{t} les {h}ist[oir]{es} [qu]{e} la m[ai]tr[ess]{e} li{t}.",
      "À la récréa[tion], ell{e} j[ou]{e} avec ses ami{es}.",
      "Elle r[en]tr{e} [ch][ez] ell{e} le s[oir], le cartabl{e} pl[ein] de d[ess][in]{s}.",
    ],
  },
  {
    id: "la-famille",
    title: "La famille",
    level: "B1",
    sentences: [
      "D[an]{s} ma fam[ill]{e}, n[ou]{s} s[om]m{es} c[in]q.",
      "Il y a papa, mama, ma gr[an]d{e} sœur et m[on] peti{t} frèr{e}.",
      "Papa trav[ail]l{e} d[an]{s} [un] bur[eau] [en] vill{e}.",
      "Mama prépare de b[on]{s} repa{s} p[ou]r t[ou]t{e} la fam[ill]{e}.",
      "Le s[oir], n[ou]{s} m[an][ge][on]{s} t[ou]{s} [en]sembl{e}.",
      "Le week-[en]{d}, n[ou]{s} all[on]{s} d[an]{s} la forê{t}.",
    ],
  },
  {
    id: "les-saisons",
    title: "Les saisons",
    level: "B1",
    sentences: [
      "[En] Fr[an]c{e}, il y a [qu]atr{e} s[ai]s[on]{s}.",
      "[En] {h}iv[er], il f[ai]{t} fr[oi]{d} et il p[eu]{t} n[ei]g[er].",
      "[Au] pr[in]t[em]{ps}, les fl[eu]r{s} éclos{ent} et les [oi]s[eau]{x} [ch][an]t{ent}.",
      "[En] été, il f[ai]{t} [ch][au]{d} et les [en]f[an]{ts} j[ou]{ent} de{h}or{s}.",
      "[En] [au]tomn{e}, les f[eu][ill]{es} dev[ien]n{ent} r[ou][ge]{s} et j[au]n{es}.",
    ],
  },
  {
    id: "le-voyage",
    title: "Le voyage",
    level: "B1",
    sentences: [
      "La fam[ill]{e} par{t} [en] tr[ain].",
      "Ils v[oy]ag{ent} jus[qu]'à Ly[on].",
      "D[an]{s} le tr[ain], ils regard{ent} le paysa[ge] par la fenêtr{e}.",
      "Ils v[oi]{ent} des rivièr{es} et des m[on]ta[gn]{es}.",
      "Arrivés à Ly[on], ils visit{ent} la vi[eil]l{e} vill{e}.",
      "C'e{st} [un] b[eau] v[oy]age !",
    ],
  },
  {
    id: "la-foret",
    title: "La forêt",
    level: "B1",
    sentences: [
      "La forê{t} e{st} [un] [en]dr[oi]{t} mystéri[eu]{x}.",
      "Les arbr{es} s[on]{t} très gr[an]{ds} et t[ou]ffu{s}.",
      "Des [oi]s[eau]{x} [ch][an]t{ent} d[an]{s} les br[an][ch]{es}.",
      "[Un] écur[euil] s[au]t{e} de br[an][ch]{e} [en] br[an][ch]{e}.",
      "Le sol[eil] filtr{e} à trav[er]{s} les f[eu][ill]{es}.",
      "N[ou]{s} mar[ch][on]{s} d[ou]cement p[ou]r ne pa{s} dér[an]g[er] les anim[au]{x}.",
    ],
  },
];

// ─── Lookup helpers ────────────────────────────────────────────────────────────

export function getLetterData(letter: string): LetterData | undefined {
  const l = letter.toLowerCase();
  return (
    VOWELS.find((v) => v.letterLower === l) ??
    CONSONANTS.find((c) => c.letterLower === l)
  );
}

export function getRevision(pair: string): RevisionData | undefined {
  return (
    VOWEL_REVISIONS.find((r) => r.pair === pair) ??
    CONSONANT_REVISIONS.find((r) => r.pair === pair)
  );
}

export function getStory(id: string): Story | undefined {
  return STORIES.find((s) => s.id === id);
}

export const VOWEL_ORDER = ["a","o","i","u","e","y"] as const;
export const CONSONANT_ORDER = ["b","c","d","g","k","p","q","t","f","j","l","m","n","r","s","v","z","w","x","h"] as const;

const SIMPLE_CONSONANTS = ["b", "c", "d", "f", "g", "j", "l", "m", "n", "p", "r", "s", "t", "v", "z"];
const SIMPLE_VOWELS = ["a", "o", "i", "e", "u", "y"] as const;

function grid25(items: string[]): string[] {
  const out: string[] = [];
  for (let i = 0; i < 25; i++) out.push(items[i % items.length]!);
  return out;
}

function uniqueGrid(items: string[]): string[] {
  return Array.from(new Set(items));
}

function syllableLesson(vowel: (typeof SIMPLE_VOWELS)[number]): SyllableLessonData {
  const upperV = vowel.toUpperCase();
  // CV (consonne + voyelle) : toutes les consonnes.
  // VC (voyelle + consonne) : on exclut n et m, qui forment des sons complexes
  // (nasales : an, am, on, in, en, un…) avec la voyelle.
  const vcConsonants = SIMPLE_CONSONANTS.filter((c) => c !== "n" && c !== "m");
  const cvUpper = SIMPLE_CONSONANTS.map((c) => `${c.toUpperCase()}${upperV}`);
  const cvLower = SIMPLE_CONSONANTS.map((c) => `${c}${vowel}`);
  const vcUpper = vcConsonants.map((c) => `${upperV}${c.toUpperCase()}`);
  const vcLower = vcConsonants.map((c) => `${vowel}${c}`);
  return {
    type: "syllable",
    letter: upperV,
    letterLower: vowel,
    phoneme: `/${vowel}/`,
    title: `Syllabes avec ${upperV}`,
    grids: [
      { key: "cv-upper", label: `Consonne + ${upperV} (majuscules)`, items: cvUpper },
      { key: "cv-lower", label: `Consonne + ${vowel} (minuscules)`, items: cvLower },
      { key: "vc-upper", label: `${upperV} + consonne (majuscules)`, items: vcUpper },
      { key: "vc-lower", label: `${vowel} + consonne (minuscules)`, items: vcLower },
    ],
  };
}

export const SIMPLE_SYLLABLE_LESSONS: SyllableLessonData[] = SIMPLE_VOWELS.map(syllableLesson);

export const TOOL_WORDS_LESSON: MonosyllableLessonData = {
  type: "monosyllable",
  letter: "Mots",
  letterLower: "outils",
  phoneme: "",
  title: "Mots-outils",
  grids: [
    { key: "articles", label: "Articles et déterminants", items: uniqueGrid(["le", "la", "les", "un", "une", "des", "ce", "cet", "cette", "ces"]) },
    { key: "possessifs", label: "Possessifs", items: uniqueGrid(["mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses", "notre", "nos", "votre", "vos", "leur", "leurs"]) },
    { key: "pronoms-sujets", label: "Pronoms sujets", items: grid25(["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"]) },
    { key: "pronoms-complements", label: "Pronoms compléments", items: grid25(["me", "te", "lui", "moi", "toi", "eux"]) },
  ],
};

export const MONOSYLLABLE_LESSON: MonosyllableLessonData = {
  type: "monosyllable",
  letter: "Mots",
  letterLower: "courants",
  phoneme: "",
  title: "Mots courants",
  grids: [
    { key: "existants-1", label: "Mots déjà appris", items: grid25(["sac", "bol", "mur", "fil", "riz", "bus", "sel", "lac", "pot", "vis", "chat", "robe", "pile", "lune", "balle", "porte", "table", "vase", "moto", "tasse", "nez", "dos", "main", "pain", "jour"]) },
    { key: "existants-2", label: "Lecture rapide", items: grid25(["nuit", "fleur", "train", "bois", "roi", "chat", "loup", "bras", "pois", "gris", "fort", "court", "grand", "petit", "rond", "sac", "mur", "bol"]) },
    { key: "personnes", label: "Personnes et famille", items: grid25(["homme", "femme", "fille", "gars", "père", "mère", "frère", "sœur", "fils"]) },
    { key: "lieux-transports", label: "Lieux et transports", items: grid25(["rue", "ville", "bus", "train", "taxi", "tram", "gare", "poste", "parc", "bar", "classe", "salle", "hall", "pont", "coin"]) },
    { key: "maison", label: "Maison et objets", items: grid25(["clé", "lit", "sac", "table", "chaise", "porte", "mur", "sol", "verre", "bol", "plat", "four", "lampe", "douche", "bain", "savon", "livre"]) },
    { key: "aliments", label: "Aliments", items: grid25(["pain", "riz", "lait", "eau", "thé", "jus", "sel", "soupe", "œuf", "fruit", "pomme", "poire", "noix", "miel"]) },
    { key: "corps", label: "Corps", items: grid25(["cour", "tête", "main", "bras", "pied", "dos", "nez", "œil", "yeux", "dent", "bouche", "cou", "peau", "sang"]) },
    { key: "vetements-couleurs", label: "Vêtements et couleurs", items: grid25(["pull", "jean", "robe", "jupe", "short", "gant", "botte", "bleu", "blanc", "noir", "vert", "gris", "brun", "rouge", "jaune", "rose"]) },
    { key: "temps-nature", label: "Temps et nature", items: grid25(["jour", "nuit", "soir", "mois", "an", "heure", "temps", "date", "fin", "fois", "air", "eau", "feu", "terre", "ciel", "mer", "lac", "vent", "pluie", "neige", "fleur", "bois"]) },
    { key: "qualites", label: "Adjectifs", items: grid25(["bon", "beau", "grand", "petit", "gros", "chaud", "froid", "neuf", "vieux", "jeune", "propre", "sale", "plein", "vide", "fort", "doux", "dur", "lourd"]) },
  ],
};

function complexSoundLesson(
  id: string,
  title: string,
  phoneme: string,
  rows: [string, string[]][],
  exampleImageWord?: string,
): ComplexSoundLessonData {
  const baseWords = rows.flatMap(([, items]) => items);
  const upper = title.split(" / ")[0]!.replace("/", "");
  const lower = upper.toLowerCase();
  const distractors = ["la", "ri", "ma", "to", "be", "su", "fe", "po", "di", "ve"];
  const imgWord = exampleImageWord;
  return {
    type: "complex-sound",
    letter: title,
    letterLower: id,
    phoneme,
    title,
    exampleWord: imgWord ?? (baseWords[0] ?? title.toLowerCase()),
    exampleImagePath: imgWord ? `/assets/words/img/${imgWord}.webp` : undefined,
    upperGrid: grid25([upper, ...distractors.map((s) => s.toUpperCase())]),
    lowerGrid: grid25([lower, ...distractors]),
    upperWords: baseWords.map((word) => word.toUpperCase()),
    lowerWords: baseWords.map((word) => word.toLowerCase()),
    pronunciationChain: baseWords.slice(0, 8).map((word) => ({
      phoneme: title,
      syllable: word,
      word,
    })),
    grids: rows.map(([label, items], index) => ({
      key: `ex${index + 1}`,
      label: `Exercice ${index + 1} - ${label}`,
      items: grid25(items),
    })),
  };
}

export const COMPLEX_SOUND_LESSONS: ComplexSoundLessonData[] = [
  complexSoundLesson("ou", "OU", "/u/", [
    ["Lis les mots avec ou", ["roue", "loup", "jour", "four", "cour", "souris", "bouton", "mouton", "poule", "route"]],
    ["Retrouve le son ou", ["sou", "fou", "tout", "nous", "vous", "doux", "cou", "trou", "clou", "rouge"]],
    ["Lecture melangee", ["bonjour", "toujours", "courir", "ouvrir", "soupe", "gouter", "journée", "pousser", "douze", "mouche"]],
  ], "loup"),
  complexSoundLesson("an-en", "AN / EN", "/ɑ̃/", [
    ["Lis an et en", ["sans", "dans", "grand", "blanc", "vent", "temps", "enfant", "maman", "ruban", "avant"]],
    ["Avec m devant b ou p", ["jambe", "lampe", "champ", "camp", "tambour", "tempête", "emporter", "remplir", "ensemble", "emballer"]],
    ["Lecture melangee", ["manger", "orange", "dimanche", "chanson", "lent", "cent", "dent", "pendant", "vendre", "planche"]],
  ], "maman"),
  complexSoundLesson("in-ain", "IN / AIN", "/ɛ̃/", [
    ["Lis in et ain", ["main", "pain", "bain", "train", "lapin", "matin", "jardin", "cousin", "chemin", "vin"]],
    ["Avec m devant b ou p", ["timbre", "simple", "impoli", "impossible", "important", "grimpe", "sympa", "imprimer", "limpide", "imbiber"]],
    ["Lecture melangee", ["demain", "soudain", "plein", "frein", "peint", "ceinture", "vingt", "fin", "linge", "inviter"]],
  ], "lapin"),
  complexSoundLesson("on", "ON", "/ɔ̃/", [
    ["Lis le son on", ["pont", "rond", "son", "bon", "mon", "ton", "don", "lion", "melon", "ballon"]],
    ["Avec m devant b ou p", ["tomber", "ombre", "pompe", "compter", "complet", "nombre", "combat", "comprendre", "trompette", "plomb"]],
    ["Lecture melangee", ["maison", "poisson", "garçon", "cochon", "mouton", "long", "front", "ronde", "réponse", "monde"]],
  ], "ballon"),
  complexSoundLesson("au-eau", "AU / EAU", "/o/", [
    ["Lis au", ["jaune", "chaud", "autre", "aussi", "saut", "haut", "pause", "cause", "gauche", "faute"]],
    ["Lis eau", ["eau", "bateau", "chapeau", "gâteau", "oiseau", "manteau", "cadeau", "rideau", "bureau", "tableau"]],
    ["Lecture melangee", ["beau", "nouveau", "chaussure", "pauvre", "seau", "morceau", "autobus", "anneau", "niveau", "taupe"]],
  ], "bateau"),
  complexSoundLesson("oi", "OI", "/wa/", [
    ["Lis le son oi", ["roi", "toi", "moi", "fois", "bois", "noix", "voix", "doigt", "poire", "soir"]],
    ["Lecture de mots", ["oiseau", "voiture", "boite", "poisson", "histoire", "étoile", "voisin", "couloir", "miroir", "avoir"]],
    ["Lecture melangee", ["trois", "froid", "choix", "loi", "moitié", "ardoise", "boisson", "soirée", "voir", "croire"]],
  ], "oiseau"),
  complexSoundLesson("ch", "CH", "/ʃ/", [
    ["Lis ch", ["chat", "chien", "chou", "cheval", "chambre", "chaise", "chemise", "chapeau", "bouche", "mouche"]],
    ["Lecture de mots", ["chercher", "chanter", "marcher", "acheter", "dimanche", "branche", "rocher", "cacher", "toucher", "fiche"]],
    ["Lecture melangee", ["chaud", "chiffre", "machine", "chocolat", "richesse", "chute", "chemin", "chance", "chariot", "château"]],
  ], "chat"),
  complexSoundLesson("ph", "PH", "/f/", [
    ["Lis ph", ["photo", "phare", "phoque", "phrase", "téléphone", "pharmacie", "dauphin", "alphabet", "graphique", "physique"]],
    ["Lecture de mots", ["photographe", "orthographe", "géographie", "phénomène", "philosophie", "sphère", "microphone", "paragraphe", "éléphant", "phase"]],
    ["Lecture melangee", ["photo", "phare", "dauphin", "éléphant", "téléphone", "phrase", "alphabet", "pharmacie", "graphique", "sphère"]],
  ], "dauphin"),
];

// ─── Pools de mots pour L8 (multisyllabes) ─────────────────────────────────────
// Utilisés par la step 4 (Lecture rapide) et l'évaluation, qui tirent un
// échantillon aléatoire du pool combiné.

export const MS_TWO_SYLLABLE_POOL: string[] = [
  "maison", "bateau", "gâteau", "chapeau", "couteau", "rideau", "château", "oiseau", "cadeau", "morceau",
  "pinceau", "bureau", "marteau", "robot", "vélo", "moto", "panda", "tomate", "carotte", "salade",
  "banane", "orange", "fromage", "valise", "souris", "chemin", "jardin", "lapin", "sapin", "requin",
  "dauphin", "poussin", "raisin", "coussin", "dessin", "matin", "copain", "ballon", "bonbon", "garçon",
  "savon", "citron", "mouton", "bouton", "wagon", "dragon", "melon", "salon", "jambon", "crayon",
  "rayon", "avion", "camion", "cheval", "journal", "canard", "fourmi", "tapis", "radis", "chemise",
  "surprise", "ceinture", "voiture", "peinture", "lecture", "facture", "nature", "figure", "mesure", "chaussure",
  "tortue", "statue", "tableau", "drapeau", "manteau",
];

export const MS_THREE_SYLLABLE_POOL: string[] = [
  "ananas", "animal", "papillon", "domino", "éléphant", "chocolat", "hôpital", "escalier", "parapluie", "téléphone",
  "cinéma", "caméra", "pyjama", "kimono", "numéro", "horizon", "caleçon", "hérisson", "toboggan", "pélican",
  "océan", "capitaine", "magasin", "magazine", "parasol", "parachute", "biberon", "calepin", "médecin", "crocodile",
  "kangourou", "tabouret", "araignée", "cheminée", "dromadaire", "perroquet", "escargot", "koala", "patinage", "jardinage",
  "bricolage", "maquillage", "bavardage", "nettoyage", "ramassage", "arrosage", "décollage", "paysage", "pantalon", "dentifrice",
  "ascenseur", "professeur", "directeur", "inspecteur", "spectateur", "aviateur", "radiateur", "jardinier", "cuisinier", "pâtissier",
  "policier", "infirmier", "boulanger", "charcutier", "ouvrier", "écolier", "chevalier", "calendrier", "saladier", "épervier",
  "balançoire", "trampoline", "mandarine", "clémentine", "aubergine",
];

export const MS_FOUR_PLUS_SYLLABLE_POOL: string[] = [
  "ordinateur", "aspirateur", "calculatrice", "animateur", "illustrateur", "commentateur", "explorateur", "navigateur", "opérateur", "incubateur",
  "congélateur", "ventilateur", "agitateur", "imitateur", "décorateur", "dessinateur", "éducateur", "libérateur", "modérateur", "générateur",
  "réalisateur", "accélérateur", "hélicoptère", "réfrigérateur", "dictionnaire", "température", "bibliothèque", "intercalaire", "anniversaire", "vétérinaire",
  "propriétaire", "imperméable", "automobile", "locomotive", "motocyclette", "aérodrome", "aéroport", "téléviseur", "télévision", "hippopotame",
  "rhinocéros", "information", "opération", "animation", "récréation", "décoration", "fabrication", "multiplication", "explication", "application",
  "imagination", "respiration", "observation", "préparation", "réparation", "célébration", "génération", "population", "éducation", "situation",
  "alimentation", "administration", "communication", "organisation", "présentation", "récupération", "transformation", "décongélation", "climatisation", "vaccination",
  "pâtisserie", "boulangerie", "épicerie", "bijouterie", "charcuterie", "quincaillerie", "parfumerie", "université", "électricité", "curiosité",
  "personnalité", "nationalité", "généralité", "publicité", "activité", "responsabilité", "appartement", "gouvernement", "médicament", "supermarché",
  "chocolatier", "mathématiques", "géographie", "photographie", "biographie", "américain", "dégustation", "exploration", "invitation", "réservation",
  "atterrissage", "déménagement", "développement", "environnement", "remerciement", "rétablissement", "ralentissement", "refroidissement", "agrandissement", "applaudissement",
  "vocabulaire", "itinéraire", "millionnaire", "questionnaire", "extraordinaire", "imaginaire", "abécédaire", "publicitaire", "documentaire", "élémentaire",
  "alimentaire", "supplémentaire", "parlementaire", "réglementaire", "complémentaire", "géographique", "catastrophique", "scientifique", "électronique", "informatique",
  "mathématique", "automatique", "aromatique", "antipathique", "pédagogique", "biologique", "écologique", "technologique", "psychologique", "chronologique",
  "météorologique", "géométrique", "kilométrique", "électricien", "informaticien", "mathématicien", "collectionneur", "ambassadeur", "consommateur", "encyclopédie",
];

export const MULTISYLLABLE_POOL: string[] = Array.from(
  new Set([...MS_TWO_SYLLABLE_POOL, ...MS_THREE_SYLLABLE_POOL, ...MS_FOUR_PLUS_SYLLABLE_POOL]),
);

export const MULTISYLLABLE_LESSON: MultisyllableLessonData = {
  type: "multisyllable",
  letter: "Mots",
  letterLower: "multi",
  phoneme: "",
  title: "Mots avec plusieurs syllabes",
  grids: [
    { key: "two", label: "Exercice 1 - Mots de deux syllabes", items: MS_TWO_SYLLABLE_POOL },
    { key: "three", label: "Exercice 2 - Mots de trois syllabes", items: MS_THREE_SYLLABLE_POOL },
    { key: "four", label: "Exercice 3 - Mots plus longs", items: MS_FOUR_PLUS_SYLLABLE_POOL },
    { key: "review", label: "Exercice 4 - Lecture rapide", items: MULTISYLLABLE_POOL },
  ],
};

// ─── Module structure (L1–L4) ──────────────────────────────────────────────────

export type LectureModule = {
  id: string;
  code: string;
  title: string;
  description: string;
  letters: LetterData[];
};

const L2_IDS = ["b","c","d","g","k","p","q","t"];
const L3_IDS = ["f","j","l","m","n","r","s","v","z"];
const L4_IDS = ["w","x","h"];

export const LECTURE_MODULES: LectureModule[] = [
  {
    id: "l1",
    code: "L1",
    title: "Voyelles",
    description: "A, O, I, U, E, Y",
    letters: VOWELS,
  },
  {
    id: "l2",
    code: "L2",
    title: "Consonnes qui claquent",
    description: "B, C, D, G, K, P, Q, T",
    letters: CONSONANTS.filter((c) => L2_IDS.includes(c.letterLower)),
  },
  {
    id: "l3",
    code: "L3",
    title: "Consonnes qui sifflent",
    description: "F, J, L, M, N, R, S, V, Z",
    letters: CONSONANTS.filter((c) => L3_IDS.includes(c.letterLower)),
  },
  {
    id: "l4",
    code: "L4",
    title: "Consonnes spéciales",
    description: "W, X, H",
    letters: CONSONANTS.filter((c) => L4_IDS.includes(c.letterLower)),
  },
  {
    id: "l5",
    code: "L5",
    title: "Les syllabes simples",
    description: "A, O, I, E, U, Y",
    letters: SIMPLE_SYLLABLE_LESSONS,
  },
  {
    id: "l6",
    code: "L6",
    title: "Les mots",
    description: "Mots-outils et mots courants",
    letters: [TOOL_WORDS_LESSON, MONOSYLLABLE_LESSON],
  },
  {
    id: "l7",
    code: "L7",
    title: "Les sons complexes",
    description: "OU, AN/EN, IN/AIN, ON, AU/EAU, OI, CH, PH",
    letters: COMPLEX_SOUND_LESSONS,
  },
  {
    id: "l8",
    code: "L8",
    title: "Les mots avec plusieurs syllabes",
    description: "Mots de deux syllabes et plus",
    letters: [MULTISYLLABLE_LESSON],
  },
];

export function getLectureModule(id: string): LectureModule | undefined {
  return LECTURE_MODULES.find((m) => m.id === id);
}

export function getLetterInModule(moduleId: string, letterLower: string): LetterData | undefined {
  return getLectureModule(moduleId)?.letters.find((l) => l.letterLower === letterLower);
}

export function getLectureModuleForLetter(letterLower: string): LectureModule | undefined {
  return LECTURE_MODULES.find((m) => m.letters.some((l) => l.letterLower === letterLower));
}
