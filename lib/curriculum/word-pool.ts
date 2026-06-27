// Each word carries the list of TEACHING phonemes it actually contains
// (phonetically, not orthographically).
// imagePath → /assets/words/img/{label}.webp
// audioPath → /assets/words/son/{label}.mp3

export type WordItem = {
  label: string;
  phonemes: string[]; // subset of the 23 teaching phonemes
};

export const WORD_ITEMS: WordItem[] = [
  // ── vowels ─────────────────────────────────────────────────────────────────
  { label: "arbre",      phonemes: ["/a/", "/r/", "/b/"] },
  { label: "ami",        phonemes: ["/a/", "/m/", "/i/"] },
  { label: "ananas",     phonemes: ["/a/", "/n/"] },
  { label: "abricot",    phonemes: ["/a/", "/b/", "/r/", "/i/", "/k/", "/o/"] },
  { label: "avion",      phonemes: ["/a/", "/v/", "/i/", "/ɔ̃/"] },
  { label: "animal",     phonemes: ["/a/", "/n/", "/i/", "/m/", "/l/"] },
  { label: "araignee",   phonemes: ["/a/", "/r/", "/i/", "/ɲ/", "/e/"] },
  { label: "alphabet",   phonemes: ["/a/", "/l/", "/f/", "/b/", "/e/"] },
  { label: "autobus",    phonemes: ["/o/", "/t/", "/b/", "/y/"] },
  { label: "île",        phonemes: ["/i/", "/l/"] },
  { label: "ibis",       phonemes: ["/i/", "/b/"] },
  { label: "image",      phonemes: ["/i/", "/m/", "/a/", "/ʒ/"] },
  { label: "usine",      phonemes: ["/y/", "/z/", "/i/", "/n/"] },
  { label: "uniforme",   phonemes: ["/y/", "/n/", "/i/", "/f/", "/o/", "/r/", "/m/"] },
  { label: "école",      phonemes: ["/e/", "/k/", "/o/", "/l/"] },
  { label: "elephant",   phonemes: ["/e/", "/l/", "/f/", "/ɑ̃/"] },
  { label: "escalier",   phonemes: ["/e/", "/s/", "/k/", "/a/", "/l/", "/i/", "/r/"] },
  { label: "echecs",     phonemes: ["/e/", "/ʃ/", "/k/"] },
  { label: "epaule",     phonemes: ["/e/", "/p/", "/o/", "/l/"] },          // au=/o/
  { label: "equerre",    phonemes: ["/e/", "/k/", "/r/"] },
  { label: "escalade",   phonemes: ["/e/", "/s/", "/k/", "/a/", "/l/", "/d/"] },
  // ── A (more) ───────────────────────────────────────────────────────────────
  { label: "abeille",    phonemes: ["/a/", "/b/", "/e/", "/i/", "/l/"] },
  { label: "aigle",      phonemes: ["/a/", "/i/", "/g/", "/l/"] },
  { label: "armoire",    phonemes: ["/a/", "/r/", "/m/", "/wa/"] },
  { label: "agenda",     phonemes: ["/a/", "/ʒ/", "/ɑ̃/", "/d/"] },
  // ── B ──────────────────────────────────────────────────────────────────────
  { label: "ballon",     phonemes: ["/b/", "/a/", "/l/", "/ɔ̃/"] },
  { label: "banane",     phonemes: ["/b/", "/a/", "/n/"] },
  { label: "bateau",     phonemes: ["/b/", "/a/", "/t/", "/o/"] },
  { label: "bebe",       phonemes: ["/b/", "/e/"] },
  { label: "biberon",    phonemes: ["/b/", "/i/", "/e/", "/r/", "/ɔ̃/"] },
  { label: "bras",       phonemes: ["/b/", "/r/", "/a/"] },
  { label: "bureau",     phonemes: ["/b/", "/y/", "/r/", "/o/"] },
  { label: "balle",      phonemes: ["/b/", "/a/", "/l/"] },
  { label: "baleine",    phonemes: ["/b/", "/a/", "/l/", "/e/", "/i/", "/n/"] },
  { label: "basketball", phonemes: ["/b/", "/a/", "/s/", "/k/", "/e/", "/t/", "/l/"] },
  { label: "billard",    phonemes: ["/b/", "/i/", "/l/", "/a/", "/r/"] },
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
  { label: "cheval",     phonemes: ["/ʃ/", "/e/", "/v/", "/a/", "/l/"] },
  { label: "chien",      phonemes: ["/ʃ/", "/i/", "/ɛ̃/"] },
  { label: "cochon",     phonemes: ["/k/", "/o/", "/ʃ/", "/ɔ̃/"] },
  { label: "coq",        phonemes: ["/k/", "/o/"] },
  { label: "cygne",      phonemes: ["/s/", "/i/", "/ɲ/"] },
  { label: "cahier",     phonemes: ["/k/", "/a/", "/∅/", "/i/", "/e/", "/r/"] },
  { label: "chaud",      phonemes: ["/ʃ/", "/o/"] },                     // au=/o/, ch non enseigné
  { label: "ciseaux",    phonemes: ["/s/", "/i/", "/z/", "/o/"] },
  { label: "classeur",   phonemes: ["/k/", "/l/", "/a/", "/s/", "/e/", "/y/", "/r/"] },
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
  { label: "doigt",      phonemes: ["/d/", "/wa/", "/g/"] },                    // oi=/wa/
  { label: "dos",        phonemes: ["/d/", "/o/"] },
  { label: "doux",       phonemes: ["/d/", "/u/"] },
  // ── F ──────────────────────────────────────────────────────────────────────
  { label: "farine",     phonemes: ["/f/", "/a/", "/r/", "/i/", "/n/"] },
  { label: "flamme",     phonemes: ["/f/", "/l/", "/a/", "/m/"] },
  { label: "fleur",      phonemes: ["/f/", "/l/", "/e/", "/y/", "/r/"] },
  { label: "forêt",      phonemes: ["/f/", "/o/", "/r/", "/e/"] },
  { label: "fraise",     phonemes: ["/f/", "/r/", "/a/", "/i/", "/z/"] },
  { label: "fromage",    phonemes: ["/f/", "/r/", "/o/", "/m/", "/a/", "/ʒ/"] },
  { label: "fusee",      phonemes: ["/f/", "/y/", "/z/", "/e/"] },
  { label: "flûte",      phonemes: ["/f/", "/l/", "/y/", "/t/"] },
  { label: "feuille",    phonemes: ["/f/", "/e/", "/y/", "/i/", "/l/"] },
  { label: "feutre",     phonemes: ["/f/", "/e/", "/y/", "/t/", "/r/"] },
  { label: "football",   phonemes: ["/f/", "/o/", "/t/", "/b/", "/a/", "/l/"] },
  { label: "frais",      phonemes: ["/f/", "/r/", "/a/", "/i/"] },
  { label: "froid",      phonemes: ["/f/", "/r/", "/wa/"] },
  // ── G ──────────────────────────────────────────────────────────────────────
  { label: "gateau",     phonemes: ["/g/", "/a/", "/t/", "/o/"] },
  { label: "girafe",     phonemes: ["/ʒ/", "/i/", "/r/", "/a/", "/f/"] }, // g + i → /ʒ/
  { label: "gorille",    phonemes: ["/g/", "/o/", "/r/", "/i/", "/l/"] },
  { label: "grenouille", phonemes: ["/g/", "/r/", "/e/", "/n/", "/w/", "/i/", "/l/"] },
  { label: "guitare",    phonemes: ["/g/", "/y/", "/i/", "/t/", "/a/", "/r/"] },
  { label: "gare",       phonemes: ["/g/", "/a/", "/r/"] },
  { label: "genou",      phonemes: ["/ʒ/", "/e/", "/n/", "/u/"] },
  { label: "gomme",      phonemes: ["/g/", "/o/", "/m/"] },
  { label: "gymnastique", phonemes: ["/ʒ/", "/i/", "/m/", "/n/", "/a/", "/s/", "/t/", "/k/"] },
  // ── H ──────────────────────────────────────────────────────────────────────
  { label: "handball",   phonemes: ["/∅/", "/ɑ̃/", "/d/", "/b/", "/a/", "/l/"] },
  { label: "herbe",      phonemes: ["/∅/", "/e/", "/r/", "/b/"] },
  { label: "hibou",      phonemes: ["/∅/", "/i/", "/b/", "/u/"] },
  { label: "hockey",     phonemes: ["/∅/", "/o/", "/k/", "/e/", "/i/"] },
  { label: "hôpital",    phonemes: ["/∅/", "/o/", "/p/", "/i/", "/t/", "/a/", "/l/"] },
  // ── I ──────────────────────────────────────────────────────────────────────
  { label: "intercalaire", phonemes: ["/ɛ̃/", "/t/", "/e/", "/r/", "/k/", "/a/", "/l/", "/i/"] },
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
  { label: "maison",     phonemes: ["/m/", "/a/", "/i/", "/z/", "/ɔ̃/"] },           // ai = /e/
  { label: "maman",      phonemes: ["/m/", "/a/", "/ɑ̃/"] },
  { label: "miroir",     phonemes: ["/m/", "/i/", "/r/", "/wa/"] },       // oi = /wa/
  { label: "montagne",   phonemes: ["/m/", "/ɔ̃/", "/t/", "/a/", "/ɲ/"] },
  { label: "moto",       phonemes: ["/m/", "/o/", "/t/"] },
  { label: "mouton",     phonemes: ["/m/", "/u/", "/t/", "/ɔ̃/"] },
  // ── N ──────────────────────────────────────────────────────────────────────
  { label: "nid",        phonemes: ["/n/", "/i/"] },
  { label: "noisette",   phonemes: ["/n/", "/wa/", "/z/", "/e/", "/t/"] },        // oi = /wa/
  { label: "nuage",      phonemes: ["/n/", "/y/", "/a/", "/ʒ/"] },
  { label: "nuit",       phonemes: ["/n/", "/y/", "/i/"] },
  { label: "navire",     phonemes: ["/n/", "/a/", "/v/", "/i/", "/r/"] },
  // ── O ──────────────────────────────────────────────────────────────────────
  { label: "oiseau",     phonemes: ["/wa/", "/z/", "/o/"] },           // oi=/wa/, eau=/o/
  { label: "orange",     phonemes: ["/o/", "/r/", "/ɑ̃/", "/ʒ/"] },
  { label: "ours",       phonemes: ["/u/", "/r/", "/s/"] },
  // ── P ──────────────────────────────────────────────────────────────────────
  { label: "panda",      phonemes: ["/p/", "/ɑ̃/", "/d/", "/a/"] },
  { label: "papa",       phonemes: ["/p/", "/a/"] },
  { label: "papillon",   phonemes: ["/p/", "/a/", "/i/", "/l/", "/ɔ̃/"] },
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
  { label: "rivière",    phonemes: ["/r/", "/i/", "/v/", "/e/"] },
  { label: "robot",      phonemes: ["/r/", "/o/", "/b/"] },
  { label: "rose",       phonemes: ["/r/", "/o/", "/z/"] },
  { label: "rue",        phonemes: ["/r/", "/y/"] },
  // ── S ──────────────────────────────────────────────────────────────────────
  { label: "sapin",      phonemes: ["/s/", "/a/", "/p/", "/ɛ̃/"] },
  { label: "serpent",    phonemes: ["/s/", "/e/", "/r/", "/p/", "/ɑ̃/"] },
  { label: "singe",      phonemes: ["/s/", "/ɛ̃/", "/ʒ/"] },
  { label: "soleil",     phonemes: ["/s/", "/o/", "/l/", "/e/", "/i/"] },
  { label: "souris",     phonemes: ["/s/", "/u/", "/r/", "/i/"] },
  { label: "stylo",      phonemes: ["/s/", "/t/", "/i/", "/l/", "/o/"] },
  { label: "cire",       phonemes: ["/s/", "/i/", "/r/"] },           // c + i → /s/
  // ── T ──────────────────────────────────────────────────────────────────────
  { label: "tapis",      phonemes: ["/t/", "/a/", "/p/", "/i/"] },
  { label: "tigre",      phonemes: ["/t/", "/i/", "/g/", "/r/"] },
  { label: "tomate",     phonemes: ["/t/", "/o/", "/m/", "/a/"] },
  { label: "tortue",     phonemes: ["/t/", "/o/", "/r/", "/y/"] },
  { label: "train",      phonemes: ["/t/", "/r/", "/ɛ̃/"] },
  { label: "tulipe",     phonemes: ["/t/", "/y/", "/l/", "/i/", "/p/"] },
  // ── V ──────────────────────────────────────────────────────────────────────
  { label: "vache",      phonemes: ["/v/", "/a/", "/ʃ/"] },
  { label: "valise",     phonemes: ["/v/", "/a/", "/l/", "/i/", "/z/"] },
  { label: "vampire",    phonemes: ["/v/", "/ɑ̃/", "/p/", "/i/", "/r/"] },
  { label: "vélo",       phonemes: ["/v/", "/e/", "/l/", "/o/"] },
  { label: "violon",     phonemes: ["/v/", "/i/", "/o/", "/l/", "/ɔ̃/"] },
  // ── W ──────────────────────────────────────────────────────────────────────
  { label: "wagon",      phonemes: ["/w/", "/a/", "/g/", "/ɔ̃/"] },
  // ── Y ──────────────────────────────────────────────────────────────────────
  { label: "yaourt",     phonemes: ["/i/", "/a/", "/u/", "/r/"] },
  { label: "yoga",       phonemes: ["/i/", "/o/", "/g/", "/a/"] },
  { label: "yoyo",       phonemes: ["/i/", "/o/"] },
  // ── X ──────────────────────────────────────────────────────────────────────
  { label: "saxophone",  phonemes: ["/s/", "/a/", "/ks/", "/o/", "/f/", "/n/"] },
  { label: "xylophone",  phonemes: ["/ks/", "/i/", "/l/", "/o/", "/f/", "/n/"] },
  // ── Z ──────────────────────────────────────────────────────────────────────
  { label: "zebre",          phonemes: ["/z/", "/e/", "/b/", "/r/"] },
  { label: "zigzag",         phonemes: ["/z/", "/i/", "/g/", "/a/"] },
  { label: "zoo",            phonemes: ["/z/", "/o/"] },
  // ── Légumes & Fruits ───────────────────────────────────────────────────────
  { label: "asperge",        phonemes: ["/a/", "/s/", "/p/", "/e/", "/r/", "/ʒ/"] },
  { label: "aubergine",      phonemes: ["/o/", "/b/", "/e/", "/r/", "/ʒ/", "/i/", "/n/"] },
  { label: "avocat",         phonemes: ["/a/", "/v/", "/o/", "/k/"] },
  { label: "basilic",        phonemes: ["/b/", "/a/", "/z/", "/i/", "/l/", "/k/"] },
  { label: "betterave",      phonemes: ["/b/", "/e/", "/t/", "/r/", "/a/", "/v/"] },
  { label: "brocoli",        phonemes: ["/b/", "/r/", "/o/", "/k/", "/l/", "/i/"] },
  { label: "celeri",         phonemes: ["/s/", "/e/", "/l/", "/r/", "/i/"] },
  { label: "champignon",     phonemes: ["/ʃ/", "/ɑ̃/", "/p/", "/i/", "/ɲ/", "/ɔ̃/"] },
  { label: "chou",           phonemes: ["/ʃ/", "/u/"] },
  { label: "citrouille",     phonemes: ["/s/", "/i/", "/t/", "/r/", "/w/", "/l/"] },
  { label: "concombre",      phonemes: ["/k/", "/ɔ̃/", "/b/", "/r/"] },
  { label: "coriandre",      phonemes: ["/k/", "/o/", "/r/", "/i/", "/ɑ̃/", "/d/"] },
  { label: "courgette",      phonemes: ["/k/", "/u/", "/r/", "/ʒ/", "/e/", "/t/"] },
  { label: "echalote",       phonemes: ["/e/", "/ʃ/", "/a/", "/l/", "/o/", "/t/"] },
  { label: "epinard",        phonemes: ["/e/", "/p/", "/i/", "/n/", "/a/", "/r/"] },
  { label: "framboise",      phonemes: ["/f/", "/r/", "/ɑ̃/", "/b/", "/wa/", "/z/"] },
  { label: "mangue",         phonemes: ["/m/", "/ɑ̃/", "/g/", "/y/"] },
  { label: "melon",          phonemes: ["/m/", "/e/", "/l/", "/ɔ̃/"] },
  { label: "menthe",         phonemes: ["/m/", "/ɑ̃/", "/t/"] },
  { label: "mure",           phonemes: ["/m/", "/y/", "/r/"] },
  { label: "myrtille",       phonemes: ["/m/", "/i/", "/r/", "/t/", "/l/"] },
  { label: "nectarine",      phonemes: ["/n/", "/e/", "/k/", "/t/", "/a/", "/r/", "/i/"] },
  { label: "oignon",         phonemes: ["/wa/", "/ɲ/", "/ɔ̃/"] },
  { label: "olive",          phonemes: ["/o/", "/l/", "/i/", "/v/"] },
  { label: "pasteque",       phonemes: ["/p/", "/a/", "/s/", "/t/", "/e/", "/k/"] },
  { label: "persil",         phonemes: ["/p/", "/e/", "/r/", "/s/", "/i/", "/l/"] },
  { label: "piment",         phonemes: ["/p/", "/i/", "/m/", "/ɑ̃/"] },
  { label: "poire",          phonemes: ["/p/", "/wa/", "/r/"] },
  { label: "poireau",        phonemes: ["/p/", "/wa/", "/r/", "/o/"] },
  { label: "poivron",        phonemes: ["/p/", "/wa/", "/v/", "/r/", "/ɔ̃/"] },
  { label: "pomme-de-terre", phonemes: ["/p/", "/o/", "/m/", "/e/", "/d/", "/t/", "/r/"] },
  { label: "raisin",         phonemes: ["/r/", "/a/", "/i/", "/z/", "/ɛ̃/"] },
  { label: "romarin",        phonemes: ["/r/", "/o/", "/m/", "/a/", "/ɛ̃/"] },
  { label: "salade",         phonemes: ["/s/", "/a/", "/l/", "/d/"] },
  { label: "thym",           phonemes: ["/t/", "/i/", "/m/"] },
];

// ── Large word list for WordSpotter (letter recognition only, no phoneme data) ─

export const LETTER_WORDS: string[] = [
  // ── A ──
  "arbre","ami","ananas","abricot","avion","animal","araignee","alphabet","autobus",
  "asperge","aubergine","avocat",
  "ambulance","abeille","aigle","arc","armoire","assiette","artiste","agenda",
  "antilope","astronaute","accordéon","acrobate","alligator","anniversaire",
  "aquarium","arrosoir","aspirateur","araignee","avocado","albatros","araignee",
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
  "épinard","échalote","echecs","equerre",
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
  "nébuleuse","nectarine","nenuphar","névé","nickel","nigelle","niveau","noix",
  "nomade","noyau","numéro","nymphe",
  // ── O ──
  "oiseau","orange","ours","oreille","ordinateur","olive","otarie","ogre",
  "obélisque","océan","oeillet","ombre","omelette","ongle","opossum","oranger",
  "orchidée","orgue","ortie","oscille","oubli","outarde","outre","ovale","ovni",
  "oignon",
  // ── P ──
  "panda","papillon","piano","poisson","pomme","puzzle","piste","perroquet",
  "poney","pieuvre","pirate","pantalon","pelican","phoque","panthère","poire",
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
  "radis","renard","requin","rivière","robot","rose","rue","raisin","regle","robe",
  "rhinocéros","rouleau","raquette","rame","ruban","roseau","ragondin","rainette",
  "rameau","ramier","rasoir","rateau","rayon","récif","réglisse","rémora","rennet",
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
    "bus", "ours", "os", "as", "vis", "lys", "gaz", "quiz", "nez", "riz", "lac", "sac",
  ]);
  return !pronouncedFinals.has(word);
}

function hasNasalEnding(word: string, index: number, size: number): boolean {
  const after = word[index + size];
  return !isVowelChar(after) && after !== "n" && after !== "m";
}

export function phonemesFromFrenchGraphemes(label: string): Set<string> {
  const rawWord = label.toLowerCase();
  const word = normalizeWordLabel(label).replace(/[^a-z-]/gu, "");
  const finalEPronounced = new Set(["bebe", "cafe", "fusee"]);
  const phonemes = new Set<string>();

  for (let i = 0; i < word.length; i += 1) {
    const char = word[i];
    const next = word[i + 1];
    const next2 = word[i + 2];
    const two = word.slice(i, i + 2);
    const three = word.slice(i, i + 3);

    if (!char || char === "-") continue;
    if (isLikelySilentFinal(word, i)) continue;

    if (three === "eau") {
      phonemes.add("/o/");
      i += 2;
      continue;
    }
    if (three === "ien" && hasNasalEnding(word, i + 1, 2)) {
      phonemes.add("/i/");
      phonemes.add("/ɛ̃/");
      i += 2;
      continue;
    }

    if ((two === "an" || two === "en" || two === "am" || two === "em") && hasNasalEnding(word, i, 2)) {
      phonemes.add("/ɑ̃/");
      i += 1;
      continue;
    }

    if (
      (two === "in" || two === "im" || three === "ain" || three === "ein" || three === "aim") &&
      hasNasalEnding(word, i, three === "ain" || three === "ein" || three === "aim" ? 3 : 2)
    ) {
      phonemes.add("/ɛ̃/");
      i += three === "ain" || three === "ein" || three === "aim" ? 2 : 1;
      continue;
    }

    if ((two === "on" || two === "om") && hasNasalEnding(word, i, 2)) {
      phonemes.add("/ɔ̃/");
      i += 1;
      continue;
    }

    if (two === "ch") {
      phonemes.add("/ʃ/");
      i += 1;
      continue;
    }
    if (two === "ph") {
      phonemes.add("/f/");
      i += 1;
      continue;
    }
    if (two === "gn") {
      phonemes.add("/ɲ/");
      i += 1;
      continue;
    }
    if (two === "oi") {
      phonemes.add("/wa/");
      i += 1;
      continue;
    }
    if (two === "ou") {
      phonemes.add(isVowelChar(next2) ? "/w/" : "/u/");
      i += 1;
      continue;
    }
    if (two === "au") {
      phonemes.add("/o/");
      i += 1;
      continue;
    }
    if (two === "qu") {
      phonemes.add("/k/");
      i += 1;
      continue;
    }
    if (two === "th") {
      phonemes.add("/t/");
      i += 1;
      continue;
    }

    if (char === "h") {
      phonemes.add("/∅/");
      continue;
    }
    if (char === "c") {
      phonemes.add(next && "eiy".includes(next) ? "/s/" : "/k/");
      continue;
    }
    if (char === "g") {
      phonemes.add(next && "eiy".includes(next) ? "/ʒ/" : "/g/");
      continue;
    }
    if (char === "j") {
      phonemes.add("/ʒ/");
      continue;
    }
    if (char === "s") {
      const previous = word[i - 1];
      phonemes.add(isVowelChar(previous) && isVowelChar(next) ? "/z/" : "/s/");
      continue;
    }
    if (char === "x") {
      phonemes.add("/ks/");
      continue;
    }
    if (char === "w") {
      phonemes.add("/w/");
      continue;
    }
    if (char === "z") {
      phonemes.add("/z/");
      continue;
    }

    if (char === "a") phonemes.add("/a/");
    else if (char === "e") {
      const isFinalSilentE = i === word.length - 1 && !/[éèêë]$/u.test(rawWord) && !finalEPronounced.has(word);
      if (!isFinalSilentE) phonemes.add("/e/");
    }
    else if (char === "i" || char === "y") phonemes.add("/i/");
    else if (char === "o") phonemes.add("/o/");
    else if (char === "u") phonemes.add("/y/");
    else if ("bdfklmnprtv".includes(char)) phonemes.add(`/${char}/`);
  }

  return phonemes;
}

export function wordHasPhoneme(item: WordItem, phoneme: string): boolean {
  return phonemesFromFrenchGraphemes(item.label).has(phoneme);
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
  const pool = LETTER_WORDS.filter((w) => w.toLowerCase().includes(lc));
  return shuffle(pool).slice(0, n);
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
