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
  // ── Y ──────────────────────────────────────────────────────────────────────
  { label: "yaourt",     phonemes: ["/a/", "/r/"] },
  { label: "yoga",       phonemes: ["/o/", "/g/", "/a/"] },
  { label: "yoyo",       phonemes: ["/o/"] },
  // ── X ──────────────────────────────────────────────────────────────────────
  { label: "saxophone",  phonemes: ["/s/", "/a/", "/ks/", "/f/"] },
  { label: "xylophone",  phonemes: ["/ks/", "/i/", "/l/", "/f/"] },
  // ── Z ──────────────────────────────────────────────────────────────────────
  { label: "zèbre",      phonemes: ["/z/", "/b/", "/r/"] },
  { label: "zéro",       phonemes: ["/z/", "/e/", "/r/", "/o/"] },
  { label: "zigzag",     phonemes: ["/z/", "/i/", "/g/", "/a/"] },
  { label: "zoo",        phonemes: ["/z/"] },
];

// ── Large word list for WordSpotter (letter recognition only, no phoneme data) ─

export const LETTER_WORDS: string[] = [
  // ── A ──
  "arbre","ami","ananas","abricot","avion","animal","araignée","alphabet","autobus",
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
  // ── C ──
  "café","canard","carotte","casque","cube","crayon","crocodile","citron","cerise",
  "chat","chien","chapeau","château","cheval","cochon","crabe","champignon","camion",
  "coussin","corde","clef","cigogne","clown","cactus","canon","carpe","cloche",
  "couteau","chenille","calcul","calendrier","canari","canif","capuchon","carnaval",
  "castor","cerf","cerf-volant","chameau","château","chimie","chouette","chute",
  "cigare","ciment","ciseaux","cloche","cloison","clôture","cobra","colimaçon",
  "colombe","comète","compas","coquille","corail","corde","corbeau","cornichon",
  // ── D ──
  "dauphin","domino","dragon","drapeau","dodo","danse","dindon","diplôme","dent",
  "doigt","dalmatien","dessert","dinosaure","detective","daim","décoration",
  "déluge","dentiste","désert","diable","dictionnaire","dinde","diplôme","divan",
  "dolmen","donjon","dossier","douve","dromadaire","dunette","durion",
  // ── E ──
  "école","étoile","épée","éléphant","escalier","écharpe","écureuil","enfant",
  "enveloppe","éponge","épingle","église","étable","escargot","éventail","érable",
  "étagère","échelle","épaule","éclair","écran","édredon","effrayant","égout",
  "éléphant","émeu","encre","endroit","entonnoir","épice","équipe","erreur",
  "espace","étang","étiquette","étoffe","étudiant","éveil","évier",
  // ── F ──
  "farine","flamme","fleur","forêt","fraise","fromage","fusée","flûte","fée",
  "fenêtre","fourmi","fanfare","famille","foulard","fantôme","framboise","flaçon",
  "fontaine","falaise","feuille","fauteuil","faucon","fée","fer","ferme","feston",
  "ficelle","filet","flamant","flan","flèche","flore","flotte","foin","fondue",
  "fourche","fourchette","fracture","fragment","frein","frise","frontière","fruit",
  // ── G ──
  "gâteau","girafe","gorille","grenouille","guitare","gare","grue","glace","globe",
  "gomme","grotte","guêpe","géant","glacier","glaçon","géranium","gilet","girouette",
  "glacier","gland","glouton","gobelet","goéland","goémon","gorge","gourde",
  "gousse","gouttière","goyave","grain","grappe","gravier","grenade","grillon",
  "grippe","grizzly","grotte","groupe","guépard","guirlande","guitoune",
  // ── H ──
  "herbe","hibou","hôpital","hélicoptère","horloge","hamster","harpe","héron",
  "hérisson","haricot","hippopotame","hamac","hangar","harnais","harfang",
  "harmonica","hélice","hermine","hibou","hippocampe","hirondelle","hiver",
  "homard","horizon","houe","houx","huître","hyène",
  // ── I ──
  "île","ibis","image","igloo","iris","insecte","infirmière","imprimante",
  "iguane","index","indien","industrie","infini","instrument","interrupteur",
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
  // ── N ──
  "nid","noisette","nuage","nuit","neige","nénuphar","nœud","nounours","nougat",
  "narval","naseau","navet","naïade","nasse","nautile","navette","navet",
  "nébuleuse","nectarine","nenuphar","névé","nickel","nigelle","niveau","noix",
  "nomade","noyau","numéro","nymphe",
  // ── O ──
  "oiseau","orange","ours","oreille","ordinateur","olive","otarie","ogre",
  "obélisque","océan","oeillet","ombre","omelette","ongle","opossum","oranger",
  "orchidée","orgue","ortie","oscille","oubli","outarde","outre","ovale","ovni",
  // ── P ──
  "panda","papillon","piano","poisson","pomme","puzzle","piste","perroquet",
  "poney","pieuvre","pirate","pantalon","pelican","phoque","panthère","poire",
  "pastèque","pinceau","parapluie","patate","poulpe","peigne","pelote","pendule",
  "péniche","perche","perdrix","pétiole","phacochère","pie","pigeon","pilote",
  "piment","pinède","pintade","piscine","pivot","placard","planète","platane",
  "plinthe","plongeon","plume","poireau","polaire","pompon","ponctuation",
  "portail","portique","potager","poulain","poutre","prairie","praire","prisme",
  "propulseur","prunier","puce","puma","punaise","python",
  // ── Q ──
  "queue","quille","quiche","quartier","quinze","quille","quetzal","quinquet",
  "quinconce","quiproquo","quota",
  // ── R ──
  "radis","renard","requin","rivière","robot","rose","rue","raisin","robe",
  "rhinocéros","rouleau","raquette","rame","ruban","roseau","ragondin","rainette",
  "rameau","ramier","rasoir","rateau","rayon","récif","réglisse","rémora","rennet",
  "reptile","réseau","rhododendron","rigole","ronce","rosier","rouget","rouille",
  "rouleau","roussette","ruche","ruisseau","rutabaga",
  // ── S ──
  "sapin","serpent","singe","soleil","souris","stylo","solo","cire","sac",
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
  "triton","tronc","troupeau","truffe","truite","tube","tunnel","turbine","tuyau",
  // ── U ──
  "usine","uniforme","ukulélé","ultrason","urne","urus","utopie",
  // ── V ──
  "vache","valise","vampire","vélo","violon","verre","vêtement","voiture",
  "ville","vitre","violette","vacances","vipère","volcan","voisin","vaisseau",
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
  "zèbre","zéro","zigzag","zoo","zombie","zone","zapper","zénith","zinc","zircon",
  "zombie","zonard","zoologie","zouave","zut","pizza","trapèze","bronze","gazette",
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
