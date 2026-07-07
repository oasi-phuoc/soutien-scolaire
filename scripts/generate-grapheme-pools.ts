/**
 * Génère lib/curriculum/grapheme-word-pools-data.json
 * Usage : npx --yes tsx scripts/generate-grapheme-pools.ts
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { LETTER_WORDS, wordContainsGrapheme, ALL_TOOL_WORDS } from "../lib/curriculum/word-pool";
import { COMPLEX_SOUND_LESSONS } from "../lib/curriculum/lecture-data";

const TOOL_SET = new Set(ALL_TOOL_WORDS.map((w) => w.toLowerCase()));

const EXTRA: Record<string, string[]> = {
  ou: [
    "sou", "tou", "mou", "rou", "lou", "jou", "bou", "nou", "fou", "pou",
    "clou", "flou", "four", "jour", "tour", "pour", "doux", "coude", "soupe", "route",
    "sourd", "coupe", "boule", "houle", "bourse", "course", "source", "douze", "fouet", "gourde",
    "joue", "loupe", "moule", "nouer", "pouce", "roue", "touche", "trou", "jouer", "bouche",
    "couler", "lourd", "amour", "contour", "coucou", "brouette", "brouillon", "brouillard",
    "gourmand", "moulin", "poule", "rouge", "toujours", "foulard",
  ],
  "an-en": [
    "plan", "blanc", "rang", "sang", "vent", "dent", "cent", "banc", "bande", "chant",
    "entrer", "franc", "grand", "jambe", "lent", "manger", "panne", "plante", "sable", "table",
    "tante", "tendre", "tente", "ventre", "blanche", "branche", "chance", "danse", "frange",
    "tambour", "balance", "bandeau", "candide", "cannelle", "canton", "centre", "chantier", "chaperon",
    "dentelle", "enfance", "enfiler", "enlever", "ensemble", "entendre", "entourer", "envoyer", "fanfare",
    "fenêtre", "fendant", "fendre", "gant", "gland", "gramme", "grandir", "guenon", "jambon", "langue",
    "lancement", "manche", "manche", "manche", "manche", "manche", "manche", "manche", "manche", "manche",
  ],
  "in-ain": [
    "fin", "pin", "vin", "bin", "bain", "pain", "main", "gain", "matin", "sapin",
    "chemin", "certain", "demain", "domaine", "farine", "machine", "marine", "racine", "routine", "vitrine",
    "voisin", "cabine", "calin", "capitaine", "chagrin", "chambre", "cinquante", "clin", "copain", "cousin",
    "cuisine", "dessin", "destin", "divin", "finir", "gamin", "graine", "imaginer", "infini", "latin",
    "lentille", "libertin", "malin", "matinée", "mercredi", "musicien", "nain", "navire", "neige", "nougat",
    "nuage", "opinion", "origine", "pantin", "parfum", "patin", "patiner", "ravine", "rein", "reine",
    "ruine", "satin", "sein", "train", "baleine", "magasin", "jardin", "lapin", "sapin", "train",
  ],
  on: [
    "bon", "don", "bonbon", "bonjour", "bonne", "bonnet", "donjon", "entonnoir",
    "froncer", "front", "gondole", "jonction", "long", "longue", "mont", "montre", "montrer", "nom",
    "nombre", "nommer", "oncle", "onduler", "ongle", "onze", "pont", "pondre", "portion", "ronce",
    "rond", "ronde", "ronfler", "ronger", "sonner", "sonnette", "sonore", "tonte", "tonne", "tonneau",
    "tonnerre", "tronc", "tronçon", "citron", "cochon", "coton", "dindon", "frisson", "garçon", "jeton",
    "limon", "limonade", "melon", "mention", "personne", "poisson", "ponton", "prison", "question", "raison",
    "saison", "salon", "savon", "sillon", "syllabe", "tourbillon", "trombone", "viande", "violon", "automne",
    "bouchon", "accordéon",
  ],
  "au-eau": [
    "eau", "haut", "saut", "beau", "chaud", "chauve", "faute", "fauve", "gauche", "gaufre",
    "haute", "jaune", "laurier", "mauve", "pauvre", "sauf", "sauce", "sauter", "sauvage", "taupe",
    "vautour", "beaucoup", "beauté", "cadeau", "caveau", "cerveau", "chaudron", "chauffer", "chauffeur",
    "gâteau", "gobelet", "hameau", "jumeau", "landau", "morceau", "museau", "poteau", "rateau", "roseau",
    "taureau", "tombeau", "trousseau", "veau", "plateau",
  ],
  oi: [
    "roi", "loi", "foi", "moi", "toi", "bois", "noix", "pois", "voix", "trois",
    "croix", "choix", "froid", "mois", "noir", "poire", "soir", "voir", "voile", "avoine",
    "boire", "boite", "boîte", "choisir", "envoi", "envoyer", "étoile", "foin", "foire",
    "groin", "joint", "moisson", "oie", "poignet", "poil", "poing", "point", "pointe", "poireau",
    "poitrine", "proie", "rejoindre", "soie", "soif", "soigner", "soirée", "voilier", "portoir",
  ],
  ch: [
    "chou", "chat", "chien", "chez", "cher", "chaud", "chef", "chic", "choc", "choix",
    "chute", "champ", "chant", "chapeau", "château", "chemin", "cheval", "chiffre", "chimie", "chocolat",
    "chouette", "lâche", "mâche", "mâcher", "marché", "marcher", "mouche", "mouchoir", "pêche", "pêcher",
    "planche", "plancher", "tache", "tacher", "vache", "biche", "branche", "brochet", "chenille", "chèvre",
    "chicorée", "chimpanzé", "chou-fleur", "chuchoter", "cochon", "cracher", "déchets", "déchirer", "échange",
    "échanger", "écharpe", "échelle", "échecs", "écho", "échouer", "fâcher", "fiche", "flèche", "hache",
    "hacher", "lâcher", "marchand", "pêcheur", "avalanche", "arche", "champagne", "champion", "chanceler",
  ],
  ph: [
    "photo", "phare", "phoque", "phrase", "pharmacie", "alphabet", "graphique", "graphisme",
    "nénuphar", "pharaon", "pharmacien", "phénix", "philosophe", "phobie", "phonème", "phonétique",
    "photographe", "physique", "saphir", "strophe", "symphonie", "téléphone", "triomphe", "trophée", "typhon",
    "zéphyr", "amphibie", "biographie", "catastrophe", "éphémère", "graphème", "hypothèse", "métamorphose",
    "morphème", "téléphoner", "téléphonique", "graphiste", "photographie", "photographier",
    "amphithéâtre", "graphologie", "graphologue", "morphologie", "néphrite", "néphrologie", "orphéon",
    "pharmacie", "pharmacien", "pharmacienne", "pharmacologie", "pharmacologue", "pharynx", "phénomène",
    "philanthrope", "philologie", "philologue", "philosophie", "phonographe", "phonologie", "phonologiste",
    "phosphore", "photo", "photocopie", "photocopier", "photocopieur", "photogénique", "photomaton",
    "photos", "photosynthèse", "physicien", "physiologie", "physiologiste", "physionomie", "physique",
    "physiquement", "physiques", "sophisme", "sophiste", "sophistiqué", "sophistiquée", "sophistiquer",
    "sophistiqués", "sophistiquées", "triompher", "triomphant", "triomphante", "triomphants", "triomphantes",
  ],
  gn: [
    "montagne", "campagne", "oignon", "ligne", "signe", "gagner", "chagrin", "agneau", "aligner", "assigner",
    "bagne", "cognac", "digne", "dignité", "espagnol", "étranger", "gagnant", "gagneur", "magnifique",
    "régner", "signer", "designer", "oignons", "lignes", "signes", "montagnes", "campagnes", "agneaux",
    "gagne", "gagnes", "gagnent", "gagnez", "gagnera", "gagnerai", "gagneras", "gagnerez", "gagneront",
    "gagnons", "gagnais", "gagnait", "gagnaient", "gagnèrent", "gagnèrent", "gagnèrent", "gagnèrent",
    "agneau", "agneaux", "aligne", "alignes", "alignent", "alignez", "alignons", "alignait", "alignaient",
    "assigne", "assignes", "assignent", "assignez", "assignons", "assignait", "assignaient", "assignèrent",
    "campagne", "campagnes", "cognacs", "digne", "dignes", "dignité", "dignités", "espagnol", "espagnole",
    "espagnols", "espagnoles", "étranger", "étrangère", "étrangers", "étrangères", "étranglé", "étranglée",
    "étranglés", "étranglées", "étrangler", "étranglement", "étranglements", "gagne", "gagné", "gagnée",
    "gagnés", "gagnées", "gagnant", "gagnante", "gagnants", "gagnantes", "gagneur", "gagneurs", "gagneuse",
    "gagneuses", "gagner", "gagna", "gagnai", "gagnas", "gagnât", "gagnâmes", "gagnâtes", "gagnèrent",
    "ligne", "lignes", "lignée", "lignées", "lignée", "lignées", "magnifique", "magnifiques", "montagne",
    "montagnes", "montagnard", "montagnarde", "montagnards", "montagnardes", "oignon", "oignons", "régner",
    "règne", "règnes", "règnent", "régnons", "régnait", "régnèrent", "signe", "signes", "signé", "signée",
    "signés", "signées", "signer", "signa", "signai", "signas", "signât", "signâmes", "signâtes", "signèrent",
  ],
  ill: [
    "fille", "bille", "vanille", "chenille", "papillon", "mille", "grille", "abeille", "bouteille",
    "brindille", "corbeille", "grillon", "papillote", "griller", "grilles", "grillons",
    "papillons", "abeilles", "bouteilles", "brindilles", "corbeilles", "filles", "billes", "vanilles",
    "chenilles", "grillé", "grillée", "grillés", "grillées", "grille", "grilles", "grillons",
    "papillote", "papillotes", "papillotage", "papillotages", "papilloter", "papillota", "papillotai",
    "papillotas", "papillotât", "papillotâmes", "papillotâtes", "papillotèrent", "papillotant",
    "papillotante", "papillotantes", "papillotants", "papillotement", "papillotements", "papilloté",
    "papillotée", "papillotés", "papillotées", "papillotera", "papilloterai", "papilloteras", "papilloterez",
    "papilloteront", "papillotons", "papillotais", "papillotait", "papillotaient", "papillotèrent",
    "papillotage", "papillotages", "papilloter", "papillota", "papillotai", "papillotas", "papillotât",
    "papillotâmes", "papillotâtes", "papillotèrent", "papillotant", "papillotante", "papillotantes",
    "papillotants", "papillotement", "papillotements", "papilloté", "papillotée", "papillotés", "papillotées",
  ],
  "ai-ei": [
    "lait", "fait", "bain", "pain", "main", "train", "plaine", "craie", "frais", "fraîche",
    "gai", "laid", "mais", "paix", "aigle", "aide", "aimer", "baie", "baigner", "caisse",
    "chair", "chaire", "clair", "daim", "étain", "faire", "faim", "gain", "haine", "maire",
    "quai", "rail", "saisir", "taille", "traire", "vrai", "vraie", "gaine", "graine", "saint",
    "plaire", "baisser", "baisser", "baisser", "baisser", "baisser", "baisser", "baisser",
  ],
  "eu-oeu": [
    "feu", "peu", "jeu", "bleu", "deux", "neuf", "œuf", "oeuf", "beurre", "fleur",
    "creux", "dieu", "feuille", "gueule", "jeune", "meuble", "peur", "pleurer", "seuil", "veuve",
    "cheveu", "cheveux", "feutre", "bleuets", "creuser", "fleurs", "fleuri", "fleurir", "fleuriste",
    "bleuette", "creuse", "creuset", "bleuets", "feutres", "feuilles", "meubles", "peurs", "pleures",
  ],
  ui: [
    "nuit", "bruit", "fruit", "pluie", "fuir", "cuir", "cuire", "cuisine", "cuisinier", "juillet",
    "huit", "construire", "conduire", "détruire", "instruire", "introduire", "luire", "poursuivre", "produire",
    "réduire", "ruine", "ruiner", "suites", "suivi", "suivre", "buis", "cuis", "fuit", "luit",
    "suit", "pluies", "bruire", "inclure", "conclure", "exclure", "fruits", "nuits", "bruits", "pluies",
  ],
  oin: [
    "coin", "groin", "poing", "point", "joint", "foin", "soin", "pointe", "disjoint", "conjoint",
    "appoint", "pointu", "joints", "points", "coins", "groins", "poings", "foins", "soins", "pointes",
    "pointage", "jointure", "coincer", "pointillé", "pointilleux", "pointiller",
  ],
  ien: [
    "chien", "bien", "rien", "mien", "tien", "sien", "gardien", "comédien", "musicien", "parisien",
    "chrétien", "magicien", "technicien", "politicien", "mathématicien", "physicien", "historien", "alien",
    "ancien", "citoyen", "combien", "conscience", "conscient", "provincien", "municipien", "lycien",
    "patriote", "patriote", "patriote", "patriote", "patriote", "patriote", "patriote", "patriote",
  ],
  "un-um": [
    "brun", "chacun", "commun", "défunt", "parfum", "album", "alun", "opportun", "rectum",
    "albums", "brune", "bruns", "commune", "défunte", "parfums", "parfumer", "aluminium",
    "parfumée", "parfumé", "parfumés", "parfumées", "parfumant", "parfumait", "parfumaient",
  ],
  tion: [
    "nation", "station", "attention", "addition", "lotion", "potion", "invitation", "décoration", "natation", "fraction",
    "action", "fiction", "question", "suggestion", "situation", "position", "mention", "dimension", "invention", "convention",
    "attraction", "collection", "connexion", "correction", "direction", "élection", "adoption", "animation", "application",
    "association", "audition", "caution", "certification", "clarification", "combinaison", "communication", "compétition",
    "composition", "concentration", "condition", "confirmation", "conservation", "construction", "consultation", "contestation",
    "contribution", "conversation", "coopération", "coordination", "création", "déclaration", "définition", "délégation",
    "démonstration", "description", "désignation", "destination", "destruction", "détection", "détermination", "dictation",
    "digestion", "discrimination", "discussion", "disposition", "distinction", "distribution", "diversion", "division",
    "domination", "donation", "édition", "éducation", "élévation", "élimination", "émigration", "émotion", "évaluation",
    "évaporation", "exaltation", "examen", "excellence", "exception", "exclamation", "exclusion", "exécution", "exemption",
    "expansion", "expédition", "expérience", "explication", "exploration", "explosion", "exportation", "expression", "extension",
    "fabrication", "facilitation", "fascination", "fédération", "félicitation", "fertilisation", "filiation",
  ],
};

const LETTER_EXTRA: Record<string, string[]> = {
  j: ["joli", "joue", "jouer", "judo", "jupe", "jet", "jetée", "javelot", "jaguar", "jalousie", "jambon", "jasmin", "jeu", "jeune", "jonc", "joujou", "joyau", "jongleur", "jument", "jonquille", "jungle", "journal", "jambe", "bijou", "jardin"],
  k: ["kaki", "kart", "kilo", "kiwi", "koala", "kayak", "ketchup", "kimono", "klaxon", "képi", "karaté", "kermesse", "kérosène", "kirsch", "kangourou", "kyste"],
  w: ["wagon", "western", "wombat", "wok", "wifi", "wapiti", "walrus", "waterpolo", "week-end", "whisky"],
  x: ["axe", "boxe", "fixe", "mixte", "pixel", "relax", "taxe", "texte", "oxygène", "exercice", "maximum", "hexagone", "préfixe", "sphinx", "vexant", "saxophone", "xylophone", "taxi", "fixer", "mixer", "boxer"],
  z: ["zèbre", "zigzag", "zoo", "zombie", "zone", "zapper", "zénith", "zinc", "zircon", "zonard", "zoologie", "zouave", "zut", "pizza", "trapèze", "bronze", "gazette", "gaz", "gaze", "gazouiller", "gazelle", "gazon"],
  y: ["yaourt", "yoga", "yoyo", "yeux", "yacht", "yak", "pyramide", "mystère", "système", "cycle", "gymnase", "type", "pyjama", "mayonnaise", "voyou", "yucca", "rythme", "rythmer", "rythmique"],
};

function norm(w: string): string {
  return w.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function buildPool(graphemeLabel: string, extra: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const add = (w: string) => {
    const lc = norm(w);
    if (seen.has(lc) || lc.length < 1 || lc.length > 10) return;
    if (TOOL_SET.has(lc)) return;
    if (!wordContainsGrapheme(lc, graphemeLabel)) return;
    seen.add(lc);
    out.push(lc);
  };
  for (const w of LETTER_WORDS) add(w);
  for (const w of extra) add(w);
  return out.sort();
}

function buildLetterPool(letter: string, extra: string[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  const lc = letter.toLowerCase();
  const add = (w: string) => {
    const n = norm(w);
    if (seen.has(n) || n.length < 1 || n.length > 10) return;
    if (!n.includes(lc)) return;
    seen.add(n);
    out.push(n);
  };
  for (const w of LETTER_WORDS) add(w);
  for (const w of extra) add(w);
  return out.sort();
}

const complexPools: Record<string, string[]> = {};
for (const lesson of COMPLEX_SOUND_LESSONS) {
  complexPools[lesson.letterLower] = buildPool(lesson.letter, EXTRA[lesson.letterLower] ?? []);
}

const letterPools: Record<string, string[]> = {};
for (const [letter, extra] of Object.entries(LETTER_EXTRA)) {
  letterPools[letter] = buildLetterPool(letter, extra);
}

const outPath = resolve(process.cwd(), "lib/curriculum/grapheme-word-pools-data.json");
writeFileSync(outPath, JSON.stringify({ complex: complexPools, letters: letterPools }, null, 2));

console.log("=== Sons complexes ===");
for (const lesson of COMPLEX_SOUND_LESSONS) {
  const n = complexPools[lesson.letterLower]!.length;
  console.log(`${lesson.letterLower.padEnd(10)} ${String(n).padStart(3)}  (${lesson.letter})`);
}
console.log("\n=== Lettres (extra) ===");
for (const [letter, pool] of Object.entries(letterPools)) {
  console.log(`${letter.padEnd(3)} ${String(pool.length).padStart(3)}`);
}
console.log(`\nÉcrit : ${outPath}`);
