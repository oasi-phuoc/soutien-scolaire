import { getWordAssetSlug, hasLectureWordImage } from "../utils/audio";
import { complexTargets } from "../utils/complex-grapheme";
import { isImageableLabel } from "./word-image-resolver";
import graphemePoolsData from "./grapheme-word-pools-data.json";
import lectureImageWordItemsData from "./lecture-image-word-items.json";
import revisionBisyllablePoolsData from "./lecture-revision-bisyllable-pools.json";
import pronouncePoolsData from "./lecture-pronounce-pools.json";
import { isPedagogicBisyllable, wordToComplexPronStep } from "./syllabify";
import { TRISYLLABLE_WORDS, QUADRISYLLABLE_WORDS, type LongPronounceWord } from "./lecture-long-pronounce";
import type { PronStep } from "./lecture-data";

type GraphemePoolsData = {
  complex: Record<string, string[]>;
  letters: Record<string, string[]>;
};

const GRAPHEME_POOLS = graphemePoolsData as GraphemePoolsData;
const REVISION_BISYLLABLE_POOLS = revisionBisyllablePoolsData as Record<string, string[]>;
const LETTER_PRONOUNCE_POOLS = pronouncePoolsData as Record<string, PronStep[]>;

// Each word carries the list of TEACHING phonemes it actually contains
// (phonetically, not orthographically).
// imagePath → /assets/words/lecture/{label}.webp
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
  { label: "avion",      phonemes: ["/a/", "/v/", "/i/", "/ɔ̃/"] },
  { label: "animal",     phonemes: ["/a/", "/n/", "/i/", "/m/", "/l/"] },
  { label: "araignée",   phonemes: ["/a/", "/r/", "/ɛ/", "/ɲ/", "/e/"] },
  { label: "alphabet",   phonemes: ["/a/", "/l/", "/f/", "/b/", "/e/"] },
  { label: "autobus",    phonemes: ["/o/", "/t/", "/b/", "/y/", "/s/"] },
  { label: "île",        phonemes: ["/i/", "/l/"] },
  { label: "ibis",       phonemes: ["/i/", "/b/", "/s/"] },
  { label: "image",      phonemes: ["/i/", "/m/", "/a/", "/ʒ/"] },
  { label: "usine",      phonemes: ["/y/", "/z/", "/i/", "/n/"] },
  { label: "uniforme",   phonemes: ["/y/", "/n/", "/i/", "/f/", "/o/", "/r/", "/m/"] },
  { label: "école",      phonemes: ["/e/", "/k/", "/o/", "/l/"] },
  { label: "éléphant",   phonemes: ["/e/", "/l/", "/f/", "/ɑ̃/"] },
  { label: "escalier",   phonemes: ["/e/", "/s/", "/k/", "/a/", "/l/", "/j/"] },
  { label: "échecs",     phonemes: ["/e/", "/ʃ/", "/k/"] },
  { label: "épaule",     phonemes: ["/e/", "/p/", "/o/", "/l/"] },          // au=/o/
  { label: "équerre",    phonemes: ["/e/", "/k/", "/r/"] },
  { label: "escalade",   phonemes: ["/e/", "/s/", "/k/", "/a/", "/l/", "/d/"] },
  // ── A (more) ───────────────────────────────────────────────────────────────
  { label: "abeille",    phonemes: ["/a/", "/b/", "/ɛ/", "/j/"] },
  { label: "aigle",      phonemes: ["/ɛ/", "/g/", "/l/"] },
  { label: "armoire",    phonemes: ["/a/", "/r/", "/m/", "/wa/"] },
  { label: "agenda",     phonemes: ["/a/", "/ʒ/", "/ɑ̃/", "/d/"] },
  // ── B ──────────────────────────────────────────────────────────────────────
  { label: "ballon",     phonemes: ["/b/", "/a/", "/l/", "/ɔ̃/"] },
  { label: "banane",     phonemes: ["/b/", "/a/", "/n/"] },
  { label: "bateau",     phonemes: ["/b/", "/a/", "/t/", "/o/"] },
  { label: "bébé",       phonemes: ["/b/", "/e/"] },
  { label: "biberon",    phonemes: ["/b/", "/i/", "/e/", "/r/", "/ɔ̃/"] },
  { label: "bras",       phonemes: ["/b/", "/r/", "/a/"] },
  { label: "bureau",     phonemes: ["/b/", "/y/", "/r/", "/o/"] },
  { label: "balle",      phonemes: ["/b/", "/a/", "/l/"] },
  { label: "baleine",    phonemes: ["/b/", "/a/", "/l/", "/ɛ/", "/n/"] },
  { label: "basketball", phonemes: ["/b/", "/a/", "/s/", "/k/", "/e/", "/t/", "/o/", "/l/"] },
  { label: "billard",    phonemes: ["/b/", "/j/", "/a/", "/r/"] },
  { label: "bouche",     phonemes: ["/b/", "/u/", "/ʃ/"] },
  { label: "bouquet",    phonemes: ["/b/", "/u/", "/k/", "/e/"] },
  // ── K / C ──────────────────────────────────────────────────────────────────
  { label: "café",       phonemes: ["/k/", "/a/", "/f/", "/e/"] },
  { label: "canard",     phonemes: ["/k/", "/a/", "/n/", "/r/"] },
  { label: "carotte",    phonemes: ["/k/", "/a/", "/r/", "/o/", "/t/"] },
  { label: "casque",     phonemes: ["/k/", "/a/", "/s/"] },           // e final muet → pas /e/
  { label: "cube",       phonemes: ["/k/", "/y/", "/b/"] },
  { label: "crayon",     phonemes: ["/k/", "/r/", "/a/", "/i/", "/ɔ̃/"] },
  { label: "crocodile",  phonemes: ["/k/", "/r/", "/o/", "/d/", "/i/", "/l/"] },
  { label: "lac",        phonemes: ["/l/", "/a/", "/k/"] },
  { label: "citron",     phonemes: ["/s/", "/i/", "/t/", "/r/", "/ɔ̃/"] },    // c + i → /s/
  { label: "cerise",     phonemes: ["/s/", "/e/", "/r/", "/i/", "/z/"] },    // c + e → /s/
  { label: "chat",       phonemes: ["/ʃ/", "/a/"] },
  { label: "chaîne",     phonemes: ["/ʃ/", "/ɛ/", "/n/"] },
  { label: "cheval",     phonemes: ["/ʃ/", "/e/", "/v/", "/a/", "/l/"] },
  { label: "chien",      phonemes: ["/ʃ/", "/jɛ̃/"] },
  { label: "cochon",     phonemes: ["/k/", "/o/", "/ʃ/", "/ɔ̃/"] },
  { label: "coq",        phonemes: ["/k/", "/o/"] },
  { label: "cygne",      phonemes: ["/s/", "/i/", "/ɲ/"] },
  { label: "cahier",     phonemes: ["/k/", "/a/", "/∅/", "/j/", "/e/"] },
  { label: "chaud",      phonemes: ["/ʃ/", "/o/"] },                     // au=/o/, ch non enseigné
  { label: "ciseaux",    phonemes: ["/s/", "/i/", "/z/", "/o/"] },
  { label: "classeur",   phonemes: ["/k/", "/l/", "/a/", "/s/", "/ø/", "/r/"] },
  { label: "colle",      phonemes: ["/k/", "/o/", "/l/"] },
  { label: "compas",     phonemes: ["/k/", "/ɔ̃/", "/p/", "/a/"] },
  { label: "cou",        phonemes: ["/k/", "/u/"] },
  { label: "course",     phonemes: ["/k/", "/u/", "/r/", "/s/"] },
  // ── D ──────────────────────────────────────────────────────────────────────
  { label: "dauphin",    phonemes: ["/d/", "/o/", "/f/", "/ɛ̃/"] },           // au=/o/, ph=/f/
  { label: "domino",     phonemes: ["/d/", "/o/", "/m/", "/i/", "/n/"] },
  { label: "dragon",     phonemes: ["/d/", "/r/", "/a/", "/g/", "/ɔ̃/"] },
  { label: "drapeau",    phonemes: ["/d/", "/r/", "/a/", "/p/", "/o/"] },
  { label: "dodo",       phonemes: ["/d/", "/o/"] },
  { label: "danse",      phonemes: ["/d/", "/ɑ̃/", "/s/"] },
  { label: "doigt",      phonemes: ["/d/", "/wa/"] },                           // oi=/wa/, g+t muets
  { label: "dos",        phonemes: ["/d/", "/o/"] },
  { label: "doux",       phonemes: ["/d/", "/u/"] },
  // ── F ──────────────────────────────────────────────────────────────────────
  { label: "farine",     phonemes: ["/f/", "/a/", "/r/", "/i/", "/n/"] },
  { label: "flamme",     phonemes: ["/f/", "/l/", "/a/", "/m/"] },
  { label: "fleur",      phonemes: ["/f/", "/l/", "/ø/", "/r/"] },
  { label: "forêt",      phonemes: ["/f/", "/o/", "/r/", "/ɛ/"] },
  { label: "fraise",     phonemes: ["/f/", "/r/", "/ɛ/", "/z/"] },
  { label: "fromage",    phonemes: ["/f/", "/r/", "/o/", "/m/", "/a/", "/ʒ/"] },
  { label: "fusée",      phonemes: ["/f/", "/y/", "/z/", "/e/"] },
  { label: "flûte",      phonemes: ["/f/", "/l/", "/y/", "/t/"] },
  { label: "feuille",    phonemes: ["/f/", "/ø/", "/j/"] },
  { label: "feutre",     phonemes: ["/f/", "/ø/", "/t/", "/r/"] },
  { label: "football",   phonemes: ["/f/", "/o/", "/t/", "/b/", "/l/"] },
  { label: "frais",      phonemes: ["/f/", "/r/", "/ɛ/"] },
  { label: "froid",      phonemes: ["/f/", "/r/", "/wa/"] },
  // ── G ──────────────────────────────────────────────────────────────────────
  { label: "gâteau",     phonemes: ["/g/", "/a/", "/t/", "/o/"] },
  { label: "girafe",     phonemes: ["/ʒ/", "/i/", "/r/", "/a/", "/f/"] }, // g + i → /ʒ/
  { label: "gorille",    phonemes: ["/g/", "/o/", "/r/", "/j/"] },
  { label: "grenouille", phonemes: ["/g/", "/r/", "/e/", "/n/", "/u/", "/j/"] },
  { label: "guitare",    phonemes: ["/g/", "/i/", "/t/", "/a/", "/r/"] },        // u muet dans "gui"
  { label: "gare",       phonemes: ["/g/", "/a/", "/r/"] },
  { label: "genou",      phonemes: ["/ʒ/", "/e/", "/n/", "/u/"] },
  { label: "gomme",      phonemes: ["/g/", "/o/", "/m/"] },
  { label: "gymnastique", phonemes: ["/ʒ/", "/i/", "/m/", "/n/", "/a/", "/s/", "/t/", "/k/"] },
  // ── H ──────────────────────────────────────────────────────────────────────
  { label: "handball",   phonemes: ["/∅/", "/ɑ̃/", "/d/", "/b/", "/a/", "/l/"] },
  { label: "herbe",      phonemes: ["/∅/", "/e/", "/r/", "/b/"] },
  { label: "hibou",      phonemes: ["/∅/", "/i/", "/b/", "/u/"] },
  { label: "hockey",     phonemes: ["/∅/", "/o/", "/k/", "/e/"] },
  { label: "hôpital",    phonemes: ["/∅/", "/o/", "/p/", "/i/", "/t/", "/a/", "/l/"] },
  // ── I ──────────────────────────────────────────────────────────────────────
  { label: "intercalaire", phonemes: ["/ɛ̃/", "/t/", "/e/", "/r/", "/k/", "/a/", "/l/", "/ɛ/"] },
  // ── J / ʒ ──────────────────────────────────────────────────────────────────
  { label: "jambe",      phonemes: ["/ʒ/", "/ɑ̃/", "/b/"] },
  { label: "jardin",     phonemes: ["/ʒ/", "/a/", "/r/", "/d/", "/ɛ̃/"] },
  { label: "jouet",      phonemes: ["/ʒ/", "/w/", "/e/"] },                  // ou before vowel = /w/
  { label: "judo",       phonemes: ["/ʒ/", "/y/", "/d/", "/o/"] },
  { label: "jus",        phonemes: ["/ʒ/", "/y/"] },
  { label: "bijou",      phonemes: ["/b/", "/i/", "/ʒ/", "/u/"] },
  // ── K ──────────────────────────────────────────────────────────────────────
  { label: "kangourou",  phonemes: ["/k/", "/ɑ̃/", "/g/", "/u/", "/r/"] },
  { label: "kayak",      phonemes: ["/k/", "/a/", "/i/"] },
  { label: "kiwi",       phonemes: ["/k/", "/i/", "/w/"] },
  { label: "koala",      phonemes: ["/k/", "/o/", "/a/", "/l/"] },
  // ── L ──────────────────────────────────────────────────────────────────────
  { label: "lapin",      phonemes: ["/l/", "/a/", "/p/", "/ɛ̃/"] },
  { label: "lion",       phonemes: ["/l/", "/i/", "/ɔ̃/"] },
  { label: "loup",       phonemes: ["/l/", "/u/"] },
  { label: "légume",     phonemes: ["/l/", "/e/", "/g/", "/y/", "/m/"] },
  { label: "livre",      phonemes: ["/l/", "/i/", "/v/", "/r/"] },
  { label: "lune",       phonemes: ["/l/", "/y/", "/n/"] },
  { label: "loto",       phonemes: ["/l/", "/o/", "/t/"] },
  { label: "lime",       phonemes: ["/l/", "/i/", "/m/"] },
  // ── M ──────────────────────────────────────────────────────────────────────
  { label: "maison",     phonemes: ["/m/", "/ɛ/", "/z/", "/ɔ̃/"] },               // ai = /e/ (graphème unique)
  { label: "maman",      phonemes: ["/m/", "/a/", "/ɑ̃/"] },
  { label: "miroir",     phonemes: ["/m/", "/i/", "/r/", "/wa/"] },       // oi = /wa/
  { label: "montagne",   phonemes: ["/m/", "/ɔ̃/", "/t/", "/a/", "/ɲ/"] },
  { label: "moto",       phonemes: ["/m/", "/o/", "/t/"] },
  { label: "mouton",     phonemes: ["/m/", "/u/", "/t/", "/ɔ̃/"] },
  // ── N ──────────────────────────────────────────────────────────────────────
  { label: "nid",        phonemes: ["/n/", "/i/"] },
  { label: "noisette",   phonemes: ["/n/", "/wa/", "/z/", "/e/", "/t/"] },        // oi = /wa/
  { label: "nuage",      phonemes: ["/n/", "/y/", "/a/", "/ʒ/"] },
  { label: "nuit",       phonemes: ["/n/", "/ɥi/"] },
  { label: "navire",     phonemes: ["/n/", "/a/", "/v/", "/i/", "/r/"] },
  // ── O ──────────────────────────────────────────────────────────────────────
  { label: "oiseau",     phonemes: ["/wa/", "/z/", "/o/"] },           // oi=/wa/, eau=/o/
  { label: "orange",     phonemes: ["/o/", "/r/", "/ɑ̃/", "/ʒ/"] },
  // ── P ──────────────────────────────────────────────────────────────────────
  { label: "panda",      phonemes: ["/p/", "/ɑ̃/", "/d/", "/a/"] },
  { label: "papa",       phonemes: ["/p/", "/a/"] },
  { label: "papillon",   phonemes: ["/p/", "/a/", "/j/", "/ɔ̃/"] },
  { label: "piano",      phonemes: ["/p/", "/i/", "/a/", "/n/", "/o/"] },
  { label: "poisson",    phonemes: ["/p/", "/wa/", "/s/", "/ɔ̃/"] },           // oi = /wa/
  { label: "poule",      phonemes: ["/p/", "/u/", "/l/"] },
  { label: "pomme",      phonemes: ["/p/", "/o/", "/m/"] },
  { label: "puzzle",     phonemes: ["/p/", "/y/", "/z/", "/l/"] },
  { label: "piste",      phonemes: ["/p/", "/i/", "/s/", "/t/"] },
  // ── R ──────────────────────────────────────────────────────────────────────
  { label: "radis",      phonemes: ["/r/", "/a/", "/d/", "/i/"] },
  { label: "renard",     phonemes: ["/r/", "/e/", "/n/", "/a/"] },
  { label: "rat",        phonemes: ["/r/", "/a/"] },
  { label: "requin",     phonemes: ["/r/", "/e/", "/k/", "/ɛ̃/"] },
  { label: "rivière",    phonemes: ["/r/", "/i/", "/v/", "/ɛ/"] },
  { label: "robot",      phonemes: ["/r/", "/o/", "/b/"] },
  { label: "rose",       phonemes: ["/r/", "/o/", "/z/"] },
  { label: "rue",        phonemes: ["/r/", "/y/"] },
  // ── S ──────────────────────────────────────────────────────────────────────
  { label: "sapin",      phonemes: ["/s/", "/a/", "/p/", "/ɛ̃/"] },
  { label: "serpent",    phonemes: ["/s/", "/e/", "/r/", "/p/", "/ɑ̃/"] },
  { label: "singe",      phonemes: ["/s/", "/ɛ̃/", "/ʒ/"] },
  { label: "soleil",     phonemes: ["/s/", "/o/", "/l/", "/ɛ/", "/j/"] },
  { label: "souris",     phonemes: ["/s/", "/u/", "/r/", "/i/"] },
  { label: "stylo",      phonemes: ["/s/", "/t/", "/i/", "/l/", "/o/"] },
  { label: "cire",       phonemes: ["/s/", "/i/", "/r/"] },           // c + i → /s/
  // ── T ──────────────────────────────────────────────────────────────────────
  { label: "tapis",      phonemes: ["/t/", "/a/", "/p/", "/i/"] },
  { label: "tigre",      phonemes: ["/t/", "/i/", "/g/", "/r/"] },
  { label: "tomate",     phonemes: ["/t/", "/o/", "/m/", "/a/"] },
  { label: "tortue",     phonemes: ["/t/", "/o/", "/r/", "/y/"] },
  { label: "train",      phonemes: ["/t/", "/r/", "/ɛ̃/"] },
  { label: "treize",     phonemes: ["/t/", "/r/", "/ɛ/", "/z/"] },
  { label: "tulipe",     phonemes: ["/t/", "/y/", "/l/", "/i/", "/p/"] },
  { label: "quatorze",   phonemes: ["/k/", "/a/", "/t/", "/o/", "/r/", "/z/"] },
  // ── V ──────────────────────────────────────────────────────────────────────
  { label: "vache",      phonemes: ["/v/", "/a/", "/ʃ/"] },
  { label: "valise",     phonemes: ["/v/", "/a/", "/l/", "/i/", "/z/"] },
  { label: "vampire",    phonemes: ["/v/", "/ɑ̃/", "/p/", "/i/", "/r/"] },
  { label: "vélo",       phonemes: ["/v/", "/e/", "/l/", "/o/"] },
  { label: "violon",     phonemes: ["/v/", "/i/", "/o/", "/l/", "/ɔ̃/"] },
  // ── W ──────────────────────────────────────────────────────────────────────
  { label: "wagon",      phonemes: ["/v/", "/a/", "/g/", "/ɔ̃/"] },       // w = /v/ en français
  // ── Y ──────────────────────────────────────────────────────────────────────
  { label: "yaourt",     phonemes: ["/i/", "/a/", "/u/", "/r/"] },
  { label: "yoga",       phonemes: ["/i/", "/o/", "/g/", "/a/"] },
  { label: "yoyo",       phonemes: ["/i/", "/o/"] },
  // ── X ──────────────────────────────────────────────────────────────────────
  { label: "saxophone",  phonemes: ["/s/", "/a/", "/ks/", "/o/", "/f/", "/n/"] },
  { label: "xylophone",  phonemes: ["/ks/", "/i/", "/l/", "/o/", "/f/", "/n/"] },
  // ── Z ──────────────────────────────────────────────────────────────────────
  { label: "zèbre",          phonemes: ["/z/", "/ɛ/", "/b/", "/r/"] },
  { label: "zigzag",         phonemes: ["/z/", "/i/", "/g/", "/a/"] },
  { label: "zoo",            phonemes: ["/z/", "/o/"] },
  // ── Légumes & Fruits ───────────────────────────────────────────────────────
  { label: "asperge",        phonemes: ["/a/", "/s/", "/p/", "/e/", "/r/", "/ʒ/"] },
  { label: "aubergine",      phonemes: ["/o/", "/b/", "/e/", "/r/", "/ʒ/", "/i/", "/n/"] },
  { label: "avocat",         phonemes: ["/a/", "/v/", "/o/", "/k/"] },
  { label: "basilic",        phonemes: ["/b/", "/a/", "/z/", "/i/", "/l/", "/k/"] },
  { label: "betterave",      phonemes: ["/b/", "/e/", "/t/", "/r/", "/a/", "/v/"] },
  { label: "brocoli",        phonemes: ["/b/", "/r/", "/o/", "/k/", "/l/", "/i/"] },
  { label: "céleri",         phonemes: ["/s/", "/e/", "/l/", "/r/", "/i/"] },
  { label: "champignon",     phonemes: ["/ʃ/", "/ɑ̃/", "/p/", "/i/", "/ɲ/", "/ɔ̃/"] },
  { label: "chou",           phonemes: ["/ʃ/", "/u/"] },
  { label: "citrouille",     phonemes: ["/s/", "/i/", "/t/", "/r/", "/u/", "/j/"] },
  { label: "concombre",      phonemes: ["/k/", "/ɔ̃/", "/b/", "/r/"] },
  { label: "coriandre",      phonemes: ["/k/", "/o/", "/r/", "/i/", "/ɑ̃/", "/d/"] },
  { label: "courgette",      phonemes: ["/k/", "/u/", "/r/", "/ʒ/", "/e/", "/t/"] },
  { label: "échalote",       phonemes: ["/e/", "/ʃ/", "/a/", "/l/", "/o/", "/t/"] },
  { label: "épinard",        phonemes: ["/e/", "/p/", "/i/", "/n/", "/a/", "/r/"] },
  { label: "framboise",      phonemes: ["/f/", "/r/", "/ɑ̃/", "/b/", "/wa/", "/z/"] },
  { label: "mangue",         phonemes: ["/m/", "/ɑ̃/", "/g/"] },              // u muet dans "gue"
  { label: "melon",          phonemes: ["/m/", "/e/", "/l/", "/ɔ̃/"] },
  { label: "menthe",         phonemes: ["/m/", "/ɑ̃/", "/t/"] },
  { label: "mûre",           phonemes: ["/m/", "/y/", "/r/"] },
  { label: "myrtille",       phonemes: ["/m/", "/i/", "/r/", "/t/", "/j/"] },
  { label: "nectarine",      phonemes: ["/n/", "/e/", "/k/", "/t/", "/a/", "/r/", "/i/"] },
  { label: "oignon",         phonemes: ["/wa/", "/ɲ/", "/ɔ̃/"] },
  { label: "olive",          phonemes: ["/o/", "/l/", "/i/", "/v/"] },
  { label: "pastèque",       phonemes: ["/p/", "/a/", "/s/", "/t/", "/ɛ/", "/k/"] },
  { label: "persil",         phonemes: ["/p/", "/e/", "/r/", "/s/", "/i/", "/l/"] },
  { label: "piment",         phonemes: ["/p/", "/i/", "/m/", "/ɑ̃/"] },
  { label: "poire",          phonemes: ["/p/", "/wa/", "/r/"] },
  { label: "poireau",        phonemes: ["/p/", "/wa/", "/r/", "/o/"] },
  { label: "poivron",        phonemes: ["/p/", "/wa/", "/v/", "/r/", "/ɔ̃/"] },
  { label: "pomme-de-terre", phonemes: ["/p/", "/o/", "/m/", "/e/", "/d/", "/t/", "/r/"] },
  { label: "raisin",         phonemes: ["/r/", "/ɛ/", "/z/", "/ɛ̃/"] },        // ai = /e/ graphème unique
  { label: "romarin",        phonemes: ["/r/", "/o/", "/m/", "/a/", "/ɛ̃/"] },
  { label: "salade",         phonemes: ["/s/", "/a/", "/l/", "/d/"] },
  { label: "thym",           phonemes: ["/t/", "/i/", "/m/"] },
  // ── Sons complexes (L7) — mots concrets, phonèmes via phonemesFromFrenchGraphemes ─
  { label: "natation",       phonemes: ["/n/", "/a/", "/t/", "/sjɔ̃/"] },
  { label: "pharmacie",      phonemes: ["/f/", "/a/", "/r/", "/m/", "/s/", "/i/"] },
  { label: "oreille",        phonemes: ["/o/", "/r/", "/ɛ/", "/j/"] },
  { label: "coin",           phonemes: ["/k/", "/wɛ̃/"] },
  { label: "groin",          phonemes: ["/g/", "/r/", "/wɛ̃/"] },
  { label: "poing",          phonemes: ["/p/", "/wɛ̃/"] },
  { label: "foin",           phonemes: ["/f/", "/wɛ̃/"] },
  { label: "point",          phonemes: ["/p/", "/wɛ̃/"] },
  { label: "pointe",         phonemes: ["/p/", "/wɛ̃/", "/t/"] },
  { label: "joint",          phonemes: ["/ʒ/", "/wɛ̃/"] },
  { label: "shampoing",      phonemes: ["/ʃ/", "/ɑ̃/", "/p/", "/wɛ̃/"] },
  { label: "brun",           phonemes: ["/b/", "/r/", "/œ̃/"] },
  { label: "lundi",          phonemes: ["/l/", "/œ̃/", "/d/", "/i/"] },
  { label: "parfum",         phonemes: ["/p/", "/a/", "/r/", "/f/", "/œ̃/"] },
  { label: "album",          phonemes: ["/a/", "/l/", "/b/", "/œ̃/"] },
  { label: "feu",            phonemes: ["/f/", "/ø/"] },
  { label: "jeu",            phonemes: ["/ʒ/", "/ø/"] },
  { label: "bleu",           phonemes: ["/b/", "/l/", "/ø/"] },
  { label: "fruit",          phonemes: ["/f/", "/r/", "/ɥi/"] },
  { label: "huit",           phonemes: ["/∅/", "/ɥi/"] },
  { label: "lait",           phonemes: ["/l/", "/ɛ/"] },
  { label: "fille",          phonemes: ["/f/", "/j/"] },
  { label: "bille",          phonemes: ["/b/", "/j/"] },
  { label: "vanille",        phonemes: ["/v/", "/a/", "/n/", "/j/"] },
  { label: "chenille",       phonemes: ["/ʃ/", "/e/", "/n/", "/j/"] },
  { label: "pompier",        phonemes: ["/p/", "/ɔ̃/", "/j/", "/e/"] },
  { label: "jardinier",      phonemes: ["/ʒ/", "/a/", "/r/", "/d/", "/i/", "/n/", "/j/", "/e/"] },
  { label: "panier",         phonemes: ["/p/", "/a/", "/n/", "/j/", "/e/"] },
  { label: "soulier",        phonemes: ["/s/", "/u/", "/l/", "/j/", "/e/"] },
  { label: "cerisier",       phonemes: ["/s/", "/e/", "/r/", "/i/", "/z/", "/j/"] },
  { label: "poirier",        phonemes: ["/p/", "/wa/", "/r/", "/j/", "/e/"] },
  { label: "cuisinier",      phonemes: ["/k/", "/ɥi/", "/z/", "/i/", "/n/", "/j/", "/e/"] },
  { label: "photo",          phonemes: ["/f/", "/o/", "/t/"] },
  { label: "phare",          phonemes: ["/f/", "/a/", "/r/"] },
  { label: "phoque",         phonemes: ["/f/", "/o/", "/k/"] },
  { label: "potion",         phonemes: ["/p/", "/o/", "/sjɔ̃/"] },
  { label: "station",        phonemes: ["/s/", "/t/", "/a/", "/sjɔ̃/"] },
  { label: "addition",       phonemes: ["/a/", "/d/", "/i/", "/sjɔ̃/"] },
  { label: "lotion",         phonemes: ["/l/", "/o/", "/sjɔ̃/"] },
];

// ── Large word list for WordSpotter (letter recognition only, no phoneme data) ─

export const LETTER_WORDS: string[] = [
  // ── A ──
  "arbre","ami","ananas","abricot","avion","animal","araignée","alphabet","autobus",
  "asperge","aubergine","avocat",
  "ambulance","abeille","aigle","arc","armoire","assiette","artiste","agenda",
  "antilope","astronaute","accordéon","acrobate","alligator","anniversaire",
  "aquarium","arrosoir","aspirateur","araignée","avocado","albatros","araignée",
  "alouette","agrafeuse","aimant","ampoule","ancre","antenne","armure","atlas",
  "avalanche","azote","arlequin","abricot","anneau","atome","arène","arche",
  // ── B ──
  "ballon","banane","bateau","bébé","biberon","bras","bureau","balle","bus",
  "bouton","bijou","biche","botte","bougie","branche","brosse","boulanger",
  "bouteille","boîte","baleine","bonbon","botte","bosquet","brocoli","baguette",
  "bleuet","biscuit","bobine","bœuf","bombardier","bouclier","bourdon","bouvreuil",
  "brebis","brindille","brochet","bulle","bûcheron","buisson","bulldozer",
  "basilic","betterave","basketball","billard","bouquet",
  // ── C ──
  "café","canard","carotte","casque","cube","crayon","crocodile","citron","cerise",
  "chat","chien","chapeau","château","cheval","cochon","crabe","champignon","camion",
  "coussin","corde","clef","cigogne","clown","cactus","canon","carpe","cloche",
  "couteau","chenille","calcul","calendrier","canari","canif","capuchon","carnaval",
  "castor","cerf","cerf-volant","chameau","château","chimie","chouette","chute",
  "cigare","ciment","ciseaux","cloche","cloison","clôture","cobra","colimaçon",
  "colombe","comète","compas","coquille","corail","corde","corbeau","cornichon",
  "céleri","chou","citrouille","concombre","coriandre","courgette","cahier","classeur","colle",
  // ── D ──
  "dauphin","domino","dragon","drapeau","dodo","danse","dindon","diplôme","dent",
  "doigt","dalmatien","dessert","dinosaure","detective","daim","décoration",
  "déluge","dentiste","désert","diable","dictionnaire","dinde","diplôme","divan",
  "dolmen","donjon","dossier","douve","dromadaire","dunette","durion",
  // ── E ──
  "école","éléphant","escalier","écharpe","écureuil","enfant",
  "enveloppe","éponge","épingle","église","étable","escargot","éventail","érable",
  "étagère","échelle","épaule","éclair","écran","édredon","effrayant","égout",
  "éléphant","émeu","encre","endroit","entonnoir","épice","équipe","erreur",
  "espace","étang","étiquette","étoffe","étudiant","éveil","évier",
  "épinard","échalote","échecs","équerre",
  // ── F ──
  "farine","flamme","fleur","forêt","fraise","fromage","fusée","flûte","fée",
  "fenêtre","fourmi","fanfare","famille","foulard","fantôme","framboise","flaçon",
  "fontaine","falaise","feuille","feutre","football","fauteuil","faucon","fée","fer","ferme","feston",
  "ficelle","filet","flamant","flan","flèche","flore","flotte","foin","fondue",
  "fourche","fourchette","fracture","fragment","frein","frise","frontière","fruit",
  // ── G ──
  "gâteau","girafe","gorille","grenouille","guitare","gare","grue","glace","globe",
  "gomme","grotte","guêpe","géant","glacier","glaçon","géranium","gilet","girouette",
  "glacier","gland","glouton","gobelet","goéland","goémon","gorge","gourde",
  "gousse","gouttière","goyave","grain","grappe","gravier","grenade","grillon",
  "grippe","grizzly","grotte","groupe","guépard","guirlande","guitoune",
  // ── H ──
  "herbe","hibou","hôpital","hockey","hélicoptère","horloge","hamster","harpe","héron",
  "hérisson","haricot","hippopotame","hamac","hangar","harnais","harfang",
  "harmonica","hélice","hermine","hibou","hippocampe","hirondelle","hiver",
  "homard","horizon","houe","houx","huître","hyène",
  // ── I ──
  "île","ibis","image","igloo","iris","insecte","infirmière","imprimante",
  "iguane","index","indien","industrie","infini","instrument","interrupteur","intercalaire",
  "invitation","iode","isotope","ivoire","if",
  // ── J ──
  "jardin","jouet","jus","bijou","jonquille","jungle","journal","jambe","jupe",
  "jument","jeton","jongleur","jetée","javelot","judo","jaguar","jalousie",
  "jambon","japon","jasmin","jet","jeu","jeune","jonc","joue","joujou","joyau",
  // ── K ──
  "kangourou","kayak","kiwi","koala","képi","karaté","kimono","ketchup","klaxon",
  "kermesse","kérosène","kilo","kirsch","krakenite","kremlin","kyste",
  // ── L ──
  "lapin","légume","livre","lune","loto","lime","lion","lézard","lampe","lettre",
  "libellule","locomotive","loup","loutre","lanterne","licorne","lunettes",
  "lac","lama","langouste","lanière","lapin","laque","larme","lavande","levier",
  "liège","lierre","limace","linotte","lionceau","liseron","litchi","litige",
  "loir","lombric","lotte","louche","lucarne","luciole","lutin","lynx",
  // ── M ──
  "maison","maman","miroir","montagne","moto","marteau","mouton","mouche",
  "médecin","melon","moustique","manteau","monstre","musique","miel","mandarine",
  "mappemonde","marguerite","marsouin","martin","martinet","masque","mât",
  "médaille","menhir","merle","mésange","météore","miette","milan","mimosa",
  "moineau","moule","mûre","muret","myrtille","mystère","méduse",
  "mangue","menthe",
  // ── N ──
  "nid","noisette","nuage","nuit","neige","nénuphar","nœud","nounours","nougat",
  "narval","naseau","navet","naïade","nasse","nautile","navette","navet",
  "nébuleuse","nectarine","nénuphar","névé","nickel","nigelle","niveau","noix",
  "nomade","noyau","numéro","nymphe",
  // ── O ──
  "oiseau","orange","oreille","ordinateur","olive","otarie","ogre",
  "obélisque","océan","œillet","ombre","omelette","ongle","opossum","oranger",
  "orchidée","orgue","ortie","oscille","oubli","outarde","outre","ovale","ovni",
  "oignon",
  // ── P ──
  "panda","papillon","piano","poisson","pomme","puzzle","piste","perroquet",
  "poney","pieuvre","pirate","pantalon","pélican","phoque","panthère","poire",
  "pastèque","pinceau","parapluie","patate","poulpe","peigne","pelote","pendule",
  "péniche","perche","perdrix","pétiole","phacochère","pie","pigeon","pilote",
  "piment","pinède","pintade","piscine","pivot","placard","planète","platane",
  "plinthe","plongeon","plume","poireau","polaire","pompon","ponctuation",
  "portail","portique","potager","poulain","poutre","prairie","praire","prisme",
  "propulseur","prunier","puce","puma","punaise","python",
  "persil","pomme-de-terre","poivron",
  // ── Q ──
  "queue","quille","quiche","quartier","quinze","quille","quetzal","quinquet",
  "quinconce","quiproquo","quota",
  // ── R ──
  "radis","renard","requin","rivière","robot","rose","rue","raisin","règle","robe",
  "rhinocéros","rouleau","raquette","rame","ruban","roseau","ragondin","rainette",
  "rameau","ramier","rasoir","râteau","rayon","récif","réglisse","rémora","rennet",
  "reptile","réseau","rhododendron","rigole","ronce","rosier","rouget","rouille",
  "rouleau","roussette","ruche","ruisseau","rutabaga",
  "romarin","raisin",
  // ── S ──
  "sapin","serpent","singe","soleil","souris","surligneur","stylo","cire","sac",
  "sandwich","sanglier","salade","sauterelle","saucisse","saumon","scarabée",
  "sorcière","sirop","seau","sabot","safran","saule","sauterelle","scorpion",
  "seiche","sentier","séquoia","serre","silex","siphon","sittelle","socle",
  "soupe","sous-marin","spatule","sphère","spirale","stalactite","stalagmite",
  "starlette","station","steppe","stimulus","stuc","stylet","submerge","succès",
  "suisse","sultan","superbe","surface","suricate","sycomore",
  // ── T ──
  "tapis","tigre","tomate","tortue","train","tulipe","table","tasse","tambour",
  "tournesol","taupe","théière","tonnerre","télescope","toile","trompette",
  "trottoir","tacot","tamanoir","tamarin","taon","tartan","teckel","termite",
  "terrier","tige","timon","tisserin","toboggan","toucan","trèfle","trident",
  "triton","tronc","troupeau","truffe","trousse","truite","tube","tunnel","turbine","tuyau",
  "thym",
  // ── U ──
  "usine","uniforme","ukulélé","ultrason","urne","urus","utopie",
  // ── V ──
  "vache","valise","vampire","vélo","violon","verre","vêtement","voiture",
  "ville","vitre","violette","vacances","vipère","volleyball","volcan","voisin","vaisseau",
  "vallée","vanille","varech","vautour","végétal","ventouse","verdure","verrou",
  "veste","vinaigre","vinaigrette","vison","vitrail","volaille","volet","volute",
  "vortex","voûte","voyage","vulture",
  // ── W ──
  "wagon","western","wombat","wok","wifi","wapiti","walrus","waterpolo",
  // ── X ──
  "saxophone","xylophone","taxi","boxe","index","luxe","texte","oxygène",
  "exercice","maximum","hexagone","préfixe","silex","sphinx","vexant",
  // ── Y ──
  "yaourt","yoga","yoyo","yeux","yacht","yak","kayak","crayon","stylo","xylophone",
  "pyramide","mystère","système","cycle","gymnase","type","encyclopédie","pyjama",
  "crayons","tuyau","joyau","mayonnaise","voyou","ayant","crayon","yucca",
  // ── Z ──
  "zèbre","zigzag","zoo","zombie","zone","zapper","zénith","zinc","zircon",
  "zombie","zonard","zoologie","zouave","zut","pizza","trapèze","bronze","gazette",
];

// ── L6 mots-outils (fonctionnels) ─────────────────────────────────────────────

export const TOOL_WORD_POOLS: Record<string, string[]> = {
  articles: ["le", "la", "les", "un", "une", "des", "ce", "cet", "cette", "ces"],
  possessifs: ["mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses", "notre", "nos", "votre", "vos", "leur", "leurs"],
  "pronoms-sujets": ["je", "tu", "il", "elle", "on", "nous", "vous", "ils", "elles"],
  "pronoms-complements": ["me", "te", "lui", "moi", "toi", "eux"],
};

export const ALL_TOOL_WORDS: string[] = [
  ...new Set(Object.values(TOOL_WORD_POOLS).flat()),
];

const TOOL_WORD_SET = new Set(ALL_TOOL_WORDS.map((w) => w.toLowerCase()));

/** Mappe un label de graphème (« OU », « AN / EN ») vers l'id de leçon L7. */
export function complexGraphemeId(label: string): string | null {
  const key = label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  if (key.includes("tion")) return "tion";
  if (key.includes("oin")) return "oin";
  if (key.includes("ien")) return "ien";
  if (key.includes("eu") || key.includes("oeu") || key.includes("œu")) return "eu-oeu";
  if (key.includes("an") || key.includes("en")) return "an-en";
  if (key.includes("in") || key.includes("ain")) return "in-ain";
  if (key.includes("on")) return "on";
  if (key.includes("au") || key.includes("eau")) return "au-eau";
  if (key.includes("ou")) return "ou";
  if (key.includes("oi")) return "oi";
  if (key.includes("ch")) return "ch";
  if (key.includes("ph")) return "ph";
  if (key.includes("gn")) return "gn";
  if (key.includes("ill")) return "ill";
  if (key.includes("ai") || key.includes("ei")) return "ai-ei";
  if (key.includes("ui")) return "ui";
  if (key.includes("un") || key.includes("um")) return "un-um";
  return null;
}

/** Longueur max des mots dans les exercices « repérer la lettre / le graphème ». */
export const LECTURE_WORD_MAX_LENGTH_MOBILE = 10;
export const LECTURE_WORD_MAX_LENGTH_DESKTOP = 11;

/** Pool de mots pour un son complexe (étapes 4-5 L7), sans mots-outils. */
export function wordsForComplexGrapheme(
  graphemeLabel: string,
  maxLength = LECTURE_WORD_MAX_LENGTH_MOBILE,
): string[] {
  const id = complexGraphemeId(graphemeLabel);
  const base = id && GRAPHEME_POOLS.complex[id]?.length
    ? GRAPHEME_POOLS.complex[id]!
    : (maxLength > LECTURE_WORD_MAX_LENGTH_MOBILE
      ? extendedSpotterWordLabels()
      : LETTER_WORDS).filter((w) => wordContainsGrapheme(w, graphemeLabel));
  return base.filter((w) => w.length <= maxLength);
}

/** Pool de mots pour une lettre (étapes 4-5 L1-L4). */
export function wordsForLetter(letter: string, maxLength = LECTURE_WORD_MAX_LENGTH_MOBILE): string[] {
  const lc = letter.toLowerCase();
  if (maxLength <= LECTURE_WORD_MAX_LENGTH_MOBILE && GRAPHEME_POOLS.letters[lc]?.length) {
    return GRAPHEME_POOLS.letters[lc]!.filter((w) => w.length <= maxLength);
  }
  const pool = maxLength > LECTURE_WORD_MAX_LENGTH_MOBILE ? extendedSpotterWordLabels() : LETTER_WORDS;
  return pool.filter((w) => w.toLowerCase().includes(lc) && w.length <= maxLength);
}

/** Mots utilisables dans les exercices « entendre le son » (étapes 6-7) : pas de pronoms/articles. */
export function isLectureSoundPoolWord(label: string): boolean {
  const lc = label.toLowerCase();
  if (TOOL_WORD_SET.has(lc)) return false;
  if (hasLectureWordImage(label)) return true;
  return isImageableLabel(label);
}

// ── helpers ───────────────────────────────────────────────────────────────────

function normalizeWordLabel(label: string): string {
  return label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase();
}

function isVowelChar(char: string | undefined): boolean {
  return !!char && "aeiouy".includes(char);
}

function isLikelySilentFinal(word: string, index: number): boolean {
  if (index !== word.length - 1) return false;
  const final = word[index];
  if (!final || !"dtspxz".includes(final)) return false;
  const pronouncedFinals = new Set([
    "bus", "os", "as", "vis", "lys", "gaz", "quiz", "nez", "riz", "lac", "sac",
    "ananas", "autobus", "ibis", "ours", "mars", "oasis", "cas",
  ]);
  return !pronouncedFinals.has(word);
}

function hasNasalEnding(word: string, index: number, size: number): boolean {
  const after = word[index + size];
  return !isVowelChar(after) && after !== "n" && after !== "m";
}

/**
 * Analyse graphémique → phonèmes d'enseignement (alignés sur les leçons L7).
 * Digraphes complexes (ill, ai, eu, ui, tion…) = unités atomiques.
 *
 * Marqueurs ASCII (survivent à NFD) :
 *   1 = é → /e/   2 = èêë → /ɛ/   0 = œ → /ø/
 */
export function phonemesFromFrenchGraphemes(label: string): Set<string> {
  const word = label
    .toLowerCase()
    .replace(/œ/g, "0")
    .replace(/é/g, "1")
    .replace(/[èêë]/g, "2")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .replace(/[^a-z012-]/gu, "");

  const finalEPronounced = new Set(["b1b1", "caf1", "fus1e"]);
  const phonemes = new Set<string>();

  const isVowel = (c: string | undefined) => !!c && "aeiouy012".includes(c);

  const hasNasalEnd = (index: number, size: number) => {
    const after = word[index + size];
    return !isVowel(after) && after !== "n" && after !== "m";
  };

  const plainForSilent = () =>
    word.replace(/1/g, "e").replace(/2/g, "e").replace(/0/g, "oe");

  const pronouncedFinals = new Set([
    "bus", "os", "as", "vis", "lys", "gaz", "quiz", "nez", "riz", "lac", "sac",
    "ananas", "autobus", "ibis", "ours", "mars", "oasis", "cas",
  ]);

  for (let i = 0; i < word.length; i += 1) {
    const char = word[i]!;
    const next = word[i + 1];
    const next2 = word[i + 2];
    const two = word.slice(i, i + 2);
    const three = word.slice(i, i + 3);
    const four = word.slice(i, i + 4);
    const five = word.slice(i, i + 5);

    if (char === "-") continue;

    if (i === word.length - 1 && "dtspxz".includes(char)) {
      if (!pronouncedFinals.has(plainForSilent())) continue;
    }

    if (three === "eau") { phonemes.add("/o/"); i += 2; continue; }
    if (three === "ien") { phonemes.add("/jɛ̃/"); i += 2; continue; }
    if (four === "tion") { phonemes.add("/sjɔ̃/"); i += 3; continue; }
    if (three === "oin" && hasNasalEnd(i, 3)) { phonemes.add("/wɛ̃/"); i += 2; continue; }
    // ouin (pingouin) → /wɛ̃/
    if (four === "ouin" && hasNasalEnd(i, 4)) { phonemes.add("/wɛ̃/"); i += 3; continue; }

    // œ (0) et œu (0u) : œuf, œil, cœur…
    if (char === "0") {
      phonemes.add("/ø/");
      if (next === "u") {
        // œu / œuf
        if (next2 === "i" && word[i + 3] === "l") { phonemes.add("/j/"); i += 3; continue; }
        i += 1;
        continue;
      }
      if (next === "i" && next2 === "l") { phonemes.add("/j/"); i += 2; continue; }
      continue;
    }
    if (three === "oeu") { phonemes.add("/ø/"); i += 2; continue; }
    if (two === "oe" && (next2 === "f" || (next2 === "i" && word[i + 3] === "l"))) {
      phonemes.add("/ø/");
      if (next2 === "i") { phonemes.add("/j/"); i += 3; continue; }
      i += 1;
      continue;
    }

    if (five === "euill" || four === "euil" || four === "ueil") {
      phonemes.add("/ø/");
      phonemes.add("/j/");
      i += five === "euill" ? 4 : 3;
      continue;
    }
    if (five === "ouill") { phonemes.add("/u/"); phonemes.add("/j/"); i += 4; continue; }
    // fenouil : ouil → /u/ + /j/
    if (four === "ouil") { phonemes.add("/u/"); phonemes.add("/j/"); i += 3; continue; }
    if (four === "aill") { phonemes.add("/a/"); phonemes.add("/j/"); i += 3; continue; }
    if (four === "eill") { phonemes.add("/ɛ/"); phonemes.add("/j/"); i += 3; continue; }
    if (three === "ail" && !isVowel(word[i + 3])) { phonemes.add("/a/"); phonemes.add("/j/"); i += 2; continue; }
    if (three === "eil" && !isVowel(word[i + 3])) { phonemes.add("/ɛ/"); phonemes.add("/j/"); i += 2; continue; }
    // ill / ille (fille, papillon, billard, gorille…) → /j/
    if (three === "ill") { phonemes.add("/j/"); i += 2; continue; }

    if ((two === "an" || two === "en" || two === "am" || two === "em") && hasNasalEnd(i, 2)) {
      phonemes.add("/ɑ̃/"); i += 1; continue;
    }
    if ((three === "ain" || three === "ein" || three === "aim") && hasNasalEnd(i, 3)) {
      phonemes.add("/ɛ̃/"); i += 2; continue;
    }
    if ((two === "in" || two === "im") && hasNasalEnd(i, 2)) {
      phonemes.add("/ɛ̃/"); i += 1; continue;
    }
    if ((two === "on" || two === "om") && hasNasalEnd(i, 2)) {
      phonemes.add("/ɔ̃/"); i += 1; continue;
    }
    if ((two === "un" || two === "um") && hasNasalEnd(i, 2)) {
      phonemes.add("/œ̃/"); i += 1; continue;
    }

    if (two === "sh") { phonemes.add("/ʃ/"); i += 1; continue; }
    if (two === "ch") { phonemes.add("/ʃ/"); i += 1; continue; }
    if (two === "ph") { phonemes.add("/f/"); i += 1; continue; }
    if (two === "gn") { phonemes.add("/ɲ/"); i += 1; continue; }
    if (two === "oi") { phonemes.add("/wa/"); i += 1; continue; }
    if (two === "ou") { phonemes.add(isVowel(next2) ? "/w/" : "/u/"); i += 1; continue; }
    if (two === "au") { phonemes.add("/o/"); i += 1; continue; }
    if (two === "eu") { phonemes.add("/ø/"); i += 1; continue; }

    // gui / gue : u muet
    if (char === "g" && next === "u" && next2 && "e12i".includes(next2)) {
      phonemes.add("/g/");
      i += 1;
      continue;
    }
    if (two === "ui") { phonemes.add("/ɥi/"); i += 1; continue; }
    if (two === "ai" || two === "ei") { phonemes.add("/ɛ/"); i += 1; continue; }
    if (two === "qu") { phonemes.add("/k/"); i += 1; continue; }
    if (two === "th") { phonemes.add("/t/"); i += 1; continue; }
    if (two === "ey") { phonemes.add("/e/"); i += 1; continue; }

    // -ball (basketball/football → /bol/ ; handball → /bal/)
    if (four === "ball") {
      const plain = plainForSilent();
      phonemes.add("/b/");
      phonemes.add(plain.includes("basket") || plain.includes("foot") ? "/o/" : "/a/");
      phonemes.add("/l/");
      i += 3;
      continue;
    }

    // -ier final (pompier, panier, escalier…) → /j/ + /e/, r muet
    if (three === "ier" && (i + 3 === word.length || word[i + 3] === "-")) {
      phonemes.add("/j/");
      phonemes.add("/e/");
      i += 2;
      continue;
    }
    // doigt : g muet devant t final
    if (char === "g" && next === "t" && i + 2 === word.length) {
      continue;
    }
    // g final après nasal (poing, shampoing)
    if (char === "g" && i === word.length - 1) {
      continue;
    }

    if (char === "h") { phonemes.add("/∅/"); continue; }
    if (char === "c") { phonemes.add(next && "eiy12".includes(next) ? "/s/" : "/k/"); continue; }
    if (char === "g") { phonemes.add(next && "eiy12".includes(next) ? "/ʒ/" : "/g/"); continue; }
    if (char === "j") { phonemes.add("/ʒ/"); continue; }
    if (char === "s") {
      phonemes.add(isVowel(word[i - 1]) && isVowel(next) ? "/z/" : "/s/");
      continue;
    }
    if (char === "x") { phonemes.add("/ks/"); continue; }
    if (char === "w") {
      // wagon (et dérivés) → /v/ ; sinon /w/ (kiwi, sandwich…)
      phonemes.add(plainForSilent().startsWith("wagon") ? "/v/" : "/w/");
      continue;
    }
    if (char === "z") { phonemes.add("/z/"); continue; }

    if (char === "a") phonemes.add("/a/");
    else if (char === "1") phonemes.add("/e/");
    else if (char === "2") phonemes.add("/ɛ/");
    else if (char === "e") {
      const silent = i === word.length - 1 && !finalEPronounced.has(word);
      if (!silent) phonemes.add("/e/");
    } else if (char === "i" || char === "y") phonemes.add("/i/");
    else if (char === "o") phonemes.add("/o/");
    else if (char === "u") phonemes.add("/y/");
    else if ("bdfklmnprtv".includes(char)) phonemes.add(`/${char}/`);
  }

  return phonemes;
}

export function wordHasPhoneme(item: WordItem, phoneme: string): boolean {
  if (item.phonemes?.length) return item.phonemes.includes(phoneme);
  return phonemesFromFrenchGraphemes(item.label).has(phoneme);
}

/** Teaching phonemes for a label — manual entry if present, else grapheme analysis. */
export function teachingPhonemes(label: string): string[] {
  const manual = WORD_ITEMS.find((w) => w.label === label);
  if (manual) return manual.phonemes;
  return [...phonemesFromFrenchGraphemes(label)];
}

/** Word items for mots-outils L6, phonèmes dérivés des graphèmes. */
export const TOOL_WORD_ITEMS: WordItem[] = ALL_TOOL_WORDS.map((label) => ({
  label,
  phonemes: [...phonemesFromFrenchGraphemes(label)],
}));

/** Mots avec image lecture — phonèmes auto-générés (scripts/generate-lecture-word-items.ts). */
export const LECTURE_IMAGE_WORD_ITEMS: WordItem[] = lectureImageWordItemsData as WordItem[];

/** Union WORD_ITEMS + mots-outils + images lecture (sans doublon, manuel prioritaire). */
export function allWordItems(): WordItem[] {
  const byLabel = new Map<string, WordItem>();
  for (const item of WORD_ITEMS) byLabel.set(item.label, item);
  for (const item of TOOL_WORD_ITEMS) {
    if (!byLabel.has(item.label)) byLabel.set(item.label, item);
  }
  for (const item of LECTURE_IMAGE_WORD_ITEMS) {
    const slug = getWordAssetSlug(item.label);
    const duplicate = [...byLabel.values()].some((w) => getWordAssetSlug(w.label) === slug);
    if (!duplicate) byLabel.set(item.label, item);
  }
  return [...byLabel.values()];
}

function isSimpleLectureWordLabel(label: string): boolean {
  const normalized = label
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .trim();
  return !/[\s-]/.test(normalized);
}

/** Labels étendus pour le pool bureau (mots illustrés + liste lecture). */
function extendedSpotterWordLabels(): string[] {
  return [...new Set([...LETTER_WORDS, ...allWordItems().map((w) => w.label)])].filter(isSimpleLectureWordLabel);
}

/** Tous les labels disponibles (LETTER_WORDS + mots-outils + WORD_ITEMS). */
export function allPoolLabels(): string[] {
  return [...new Set([...LETTER_WORDS, ...ALL_TOOL_WORDS, ...WORD_ITEMS.map((w) => w.label)])];
}

/** Nombre de syllabes (heuristique lecture CP). */
export function countSyllables(word: string): number {
  const w = normalizeWordLabel(word).replace(/-/g, "");
  const groups = w.match(/[aeiouyàâäéèêëïîôùûüœæ]+/gi);
  if (!groups) return 1;
  let count = groups.length;
  if (/e$/u.test(w) && count > 1 && !/[éèêë]$/u.test(word.normalize("NFD"))) count -= 1;
  return Math.max(1, count);
}

/** Le mot contient le graphème complexe (ex. « OU », « AN / EN »). */
export function wordContainsGrapheme(word: string, graphemeLabel: string): boolean {
  const norm = normalizeWordLabel(word);
  return complexTargets(graphemeLabel).some((target) => norm.includes(target));
}

export function monosyllablePool(): string[] {
  return LETTER_WORDS.filter((w) => countSyllables(w) === 1 && w.length <= 9);
}

export function multisyllablePool(minSyllables: number, maxSyllables: number | null = null): string[] {
  return LETTER_WORDS.filter((w) => {
    const n = countSyllables(w);
    if (n < minSyllables) return false;
    if (maxSyllables !== null && n > maxSyllables) return false;
    return true;
  });
}

export function toolWordsForCategory(key: string): string[] {
  return TOOL_WORD_POOLS[key] ?? ALL_TOOL_WORDS;
}

export function wordsPoolForLessonGrid(
  lessonType: "monosyllable" | "multisyllable",
  letterLower: string,
  gridKey: string,
): string[] {
  if (lessonType === "monosyllable") {
    if (letterLower === "outils") return toolWordsForCategory(gridKey);
    return monosyllablePool();
  }
  if (gridKey === "two") return multisyllablePool(2, 2);
  if (gridKey === "three") return multisyllablePool(3, 3);
  if (gridKey === "four") return multisyllablePool(4, null);
  return multisyllablePool(2, null);
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
export function randomWordsWithLetter(
  letter: string,
  n: number,
  maxLength = LECTURE_WORD_MAX_LENGTH_MOBILE,
): string[] {
  return shuffle(wordsForLetter(letter, maxLength)).slice(0, n);
}

/** Random labels containing a complex grapheme (L7 WordSpotter / prononciation). */
export function randomWordsWithGrapheme(
  graphemeLabel: string,
  n: number,
  maxLength = LECTURE_WORD_MAX_LENGTH_MOBILE,
): string[] {
  return shuffle(wordsForComplexGrapheme(graphemeLabel, maxLength)).slice(0, n);
}

export function randomMonosyllableWords(n: number): string[] {
  return shuffle(monosyllablePool()).slice(0, n);
}

export function randomMultisyllableWords(minSyl: number, maxSyl: number | null, n: number): string[] {
  return shuffle(multisyllablePool(minSyl, maxSyl)).slice(0, n);
}

/**
 * Random items for SoundPicker image grid.
 * Aims for ~40 % "has phoneme" / ~60 % "doesn't have phoneme".
 */
export function randomSoundItems(phoneme: string, n = 16, forImages = false): WordItem[] {
  let pool = allWordItems().filter((w) => isLectureSoundPoolWord(w.label));
  if (forImages) pool = pool.filter((w) => hasLectureWordImage(w.label));
  const yes = shuffle(pool.filter((w) => wordHasPhoneme(w, phoneme)));
  const no = shuffle(pool.filter((w) => !wordHasPhoneme(w, phoneme)));
  const yCount = Math.min(Math.round(n * 0.4) + 1, yes.length);
  const nCount = Math.min(n - yCount, no.length);
  return shuffle([...yes.slice(0, yCount), ...no.slice(0, nCount)]);
}

function lectureRevisionSoundItems(
  phonemeA: string,
  phonemeB: string,
  forImages = false,
  requireExclusive = false,
) {
  let pool = allWordItems().filter((w) => isLectureSoundPoolWord(w.label));
  if (forImages) pool = pool.filter((w) => hasLectureWordImage(w.label));

  const items = pool
    .map((item) => {
      const hasA = wordHasPhoneme(item, phonemeA);
      const hasB = wordHasPhoneme(item, phonemeB);
      if (!hasA && !hasB) return null;
      if (requireExclusive && hasA && hasB) return null;
      return {
        label: item.label,
        answer: hasA && hasB ? "AB" : hasA ? "A" : "B",
      } as { label: string; answer: "A" | "B" | "AB" };
    })
    .filter(Boolean) as { label: string; answer: "A" | "B" | "AB" }[];

  return items.sort((a, b) => a.label.localeCompare(b.label, "fr", { sensitivity: "base" }));
}

export function lectureRevisionSoundWords(
  phonemeA: string,
  phonemeB: string,
  count: number,
  forImages = false,
  offset = 0,
) {
  const items = lectureRevisionSoundItems(phonemeA, phonemeB, forImages, false);
  if (items.length === 0) return [];
  const cycle = [...items, ...items];
  return cycle.slice(offset, offset + count).map(({ label, answer }) => ({ word: label, answer }));
}

/** Pool de 50 mots bisyllabiques par lettre (révisions lecture). */
export function revisionBisyllablePool(letterLower: string): string[] {
  return REVISION_BISYLLABLE_POOLS[letterLower.toLowerCase()] ?? [];
}

/** Pool prononcer lettre : mots bisyllabiques (2 segments affichés) avec syllabation pédagogique. */
export function letterPronouncePool(letterLower: string): PronStep[] {
  return (LETTER_PRONOUNCE_POOLS[letterLower.toLowerCase()] ?? []).filter(
    (step) => step.syllable.split("-").filter(Boolean).length === 2,
  );
}

/** 5 mots aléatoires pour l'étape prononcer (leçon lettre). */
export function randomLetterPronounceSteps(letterLower: string, count = 5): PronStep[] {
  const pool = letterPronouncePool(letterLower);
  if (pool.length === 0) return [];
  return shuffle(pool).slice(0, Math.min(count, pool.length));
}

/** Pool prononcer son complexe : mots bisyllabiques contenant le graphème. */
export function complexGraphemePronouncePool(graphemeLabel: string): PronStep[] {
  return wordsForComplexGrapheme(graphemeLabel)
    .filter(isPedagogicBisyllable)
    .map((word) => wordToComplexPronStep(word, graphemeLabel));
}

/** 5 mots aléatoires pour l'étape prononcer (leçon son complexe L7). */
export function randomComplexGraphemePronounceSteps(graphemeLabel: string, count = 5): PronStep[] {
  const pool = complexGraphemePronouncePool(graphemeLabel);
  if (pool.length === 0) return [];
  return shuffle(pool).slice(0, Math.min(count, pool.length));
}

function longWordContainsLetter(word: string, letterLower: string): boolean {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .includes(letterLower);
}

/**
 * Mots 3–4 syllabes pour l'étape « Prononcer » longue des révisions :
 * mots contenant l'une des deux lettres (tous sons confondus),
 * mélange équilibré de 3 et 4 syllabes.
 */
export function randomRevisionLongPronounceSteps(
  letterA: string,
  letterB: string,
  count = 5,
): PronStep[] {
  const a = letterA.toLowerCase();
  const b = letterB.toLowerCase();
  const matches = (pool: LongPronounceWord[]) =>
    pool.filter((w) => longWordContainsLetter(w.word, a) || longWordContainsLetter(w.word, b));
  const tri = shuffle(matches(TRISYLLABLE_WORDS));
  const quad = shuffle(matches(QUADRISYLLABLE_WORDS));

  const nTri = Math.min(tri.length, Math.ceil(count / 2));
  const nQuad = Math.min(quad.length, count - nTri);
  const picked = [
    ...tri.slice(0, nTri),
    ...quad.slice(0, nQuad),
    // Complément si l'une des listes est trop courte
    ...tri.slice(nTri, nTri + Math.max(0, count - nTri - nQuad)),
  ].slice(0, count);

  return shuffle(picked).map(({ word, syllable }) => ({
    phoneme: longWordContainsLetter(word, a) ? a : b,
    syllable,
    word,
  }));
}

/** 5 mots aléatoires pour révision : 2–3 par lettre. */
export function randomRevisionPronounceSteps(
  letterA: string,
  letterB: string,
  count = 5,
): PronStep[] {
  const poolA = letterPronouncePool(letterA.toLowerCase());
  const poolB = letterPronouncePool(letterB.toLowerCase());
  if (poolA.length === 0 && poolB.length === 0) return [];
  const countA = Math.min(poolA.length, 2 + Math.floor(Math.random() * 2));
  const countB = Math.min(poolB.length, Math.max(0, count - countA));
  return [
    ...shuffle(poolA).slice(0, countA),
    ...shuffle(poolB).slice(0, countB),
  ].slice(0, count);
}

/** Tirage déterministe pour l'évaluation révision (prononcer). */
export function revisionPronounceSteps(
  letterA: string,
  letterB: string,
  count: number,
  offset = 0,
): PronStep[] {
  const merged = [
    ...letterPronouncePool(letterA.toLowerCase()),
    ...letterPronouncePool(letterB.toLowerCase()),
  ];
  merged.sort((a, b) => a.word.localeCompare(b.word, "fr", { sensitivity: "base" }));
  if (merged.length === 0) return [];
  const cycle = [...merged, ...merged];
  return cycle.slice(offset, offset + count);
}

function classifyRevisionSoundAnswer(
  word: string,
  phonemeA: string,
  phonemeB: string,
): "A" | "B" | "AB" | null {
  const item: WordItem = { label: word, phonemes: teachingPhonemes(word) };
  const hasA = wordHasPhoneme(item, phonemeA);
  const hasB = wordHasPhoneme(item, phonemeB);
  if (!hasA && !hasB) return null;
  if (hasA && hasB) return "AB";
  return hasA ? "A" : "B";
}

/** Mots prononcer révision : union des pools des deux lettres. */
export function revisionPronouncePool(
  letterA: string,
  letterB: string,
): { letter: string; word: string }[] {
  const a = letterA.toLowerCase();
  const b = letterB.toLowerCase();
  return [
    ...revisionBisyllablePool(a).map((word) => ({ letter: a, word })),
    ...revisionBisyllablePool(b).map((word) => ({ letter: b, word })),
  ];
}

/** Mots aléatoires pour entendre les sons (révision, pools par lettre). */
export function randomRevisionSoundWords(
  letterA: string,
  phonemeA: string,
  letterB: string,
  phonemeB: string,
  count: number,
  forImages = false,
): { word: string; answer: "A" | "B" | "AB" }[] {
  const byWord = new Map<string, "A" | "B" | "AB">();
  for (const word of [
    ...revisionBisyllablePool(letterA.toLowerCase()),
    ...revisionBisyllablePool(letterB.toLowerCase()),
  ]) {
    const answer = classifyRevisionSoundAnswer(word, phonemeA, phonemeB);
    if (answer) byWord.set(word, answer);
  }

  let items = [...byWord.entries()].map(([word, answer]) => ({ word, answer }));
  if (forImages) {
    items = items.filter(({ word }) => hasLectureWordImage(word));
  }
  if (items.length === 0) return [];
  return shuffle(items).slice(0, Math.min(count, items.length));
}

/** Mots déterministes pour l'évaluation révision (décalage fixe). */
export function revisionSoundWords(
  letterA: string,
  phonemeA: string,
  letterB: string,
  phonemeB: string,
  count: number,
  forImages = false,
  offset = 0,
): { word: string; answer: "A" | "B" | "AB" }[] {
  const byWord = new Map<string, "A" | "B" | "AB">();
  for (const word of [
    ...revisionBisyllablePool(letterA.toLowerCase()),
    ...revisionBisyllablePool(letterB.toLowerCase()),
  ]) {
    const answer = classifyRevisionSoundAnswer(word, phonemeA, phonemeB);
    if (answer) byWord.set(word, answer);
  }
  let items = [...byWord.entries()].map(([word, answer]) => ({ word, answer }));
  if (forImages) {
    items = items.filter(({ word }) => hasLectureWordImage(word));
  }
  items.sort((a, b) => a.word.localeCompare(b.word, "fr", { sensitivity: "base" }));
  if (items.length === 0) return [];
  const cycle = [...items, ...items];
  return cycle.slice(offset, offset + count);
}

/** Mots aléatoires pour l'entraînement révision (étapes audio / images). */
export function randomLectureRevisionSoundWords(
  phonemeA: string,
  phonemeB: string,
  count: number,
  forImages = false,
) {
  const items = lectureRevisionSoundItems(phonemeA, phonemeB, forImages, false);
  if (items.length === 0) return [];
  return shuffle(items)
    .slice(0, Math.min(count, items.length))
    .map(({ label, answer }) => ({ word: label, answer }));
}

/** Mots de prononciation révision : pool de la leçon, 2 syllabes affichées uniquement. */
export function lectureRevisionBisyllableWords(
  readWords: { letter: string; word: string }[],
): { letter: string; word: string }[] {
  return readWords.filter((entry) => isPedagogicBisyllable(entry.word));
}

export function lectureRevisionExclusiveSoundWords(
  phonemeA: string,
  phonemeB: string,
  count: number,
  forImages = false,
  offset = 0,
) {
  const items = lectureRevisionSoundItems(phonemeA, phonemeB, forImages, true);
  if (items.length === 0) return [];
  const cycle = [...items, ...items];
  return cycle.slice(offset, offset + count).map(({ label, answer }) => ({ word: label, answer: answer as "A" | "B" }));
}
