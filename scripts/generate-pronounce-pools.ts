/**
 * Génère lib/curriculum/lecture-pronounce-pools.json (étape 12 « Prononcer les mots »).
 *
 * Règles :
 * 1. La lettre est écrite dans le mot (voyelles : la lettre doit s'entendre —
 *    on ignore les digraphes muets comme « eau » pour A, « ou » pour U, etc.).
 * 2. Exactement 2 syllabes pédagogiques (le e muet final forme la 2e syllabe : tu-be).
 * 3. Découpage standard : une consonne va avec la voyelle suivante (ca-fé) ;
 *    deux consonnes se coupent (bal-lon) SAUF consonne + l/r (ta-ble, ti-gre)
 *    et les digraphes ch/ph/th/gn (bi-che, py-thon, li-gne) qui restent ensemble.
 * 4. Pas de mots anglais (seuls les emprunts lexicalisés à prononciation
 *    française restent : wagon, kiwi, wifi…).
 *
 * Usage : npx --yes tsx scripts/generate-pronounce-pools.ts
 */
import { writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { phonemeLabelForLetter } from "../lib/curriculum/syllabify";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** Dictionnaire curaté : [mot, découpage] — ≤ 6 lettres, 2 syllabes, français. */
const WORDS: [string, string][] = [
  // ── finales -o / -a / -i / -u / -is / -at ──
  ["été", "é-té"], ["bébé", "bé-bé"], ["vélo", "vé-lo"], ["moto", "mo-to"],
  ["dodo", "do-do"], ["coco", "co-co"], ["kilo", "ki-lo"], ["képi", "ké-pi"],
  ["kaki", "ka-ki"], ["moka", "mo-ka"], ["polka", "pol-ka"], ["kendo", "ken-do"],
  ["kayak", "ka-yak"], ["kiwi", "ki-wi"], ["wifi", "wi-fi"], ["judo", "ju-do"],
  ["soda", "so-da"], ["yoga", "yo-ga"], ["yoyo", "yo-yo"], ["lama", "la-ma"],
  ["puma", "pu-ma"], ["panda", "pan-da"], ["midi", "mi-di"], ["mardi", "mar-di"],
  ["lundi", "lun-di"], ["jeudi", "jeu-di"], ["radis", "ra-dis"], ["tapis", "ta-pis"],
  ["souris", "sou-ris"], ["brebis", "bre-bis"], ["cassis", "cas-sis"],
  ["zéro", "zé-ro"], ["héros", "hé-ros"], ["stylo", "sty-lo"], ["photo", "pho-to"],
  ["piano", "pia-no"], ["robot", "ro-bot"], ["sirop", "si-rop"], ["tricot", "tri-cot"],
  ["taxi", "ta-xi"], ["saxo", "sa-xo"], ["maxi", "ma-xi"], ["menu", "me-nu"],
  ["tissu", "tis-su"], ["tribu", "tri-bu"], ["vertu", "ver-tu"], ["abri", "a-bri"],
  ["ami", "a-mi"], ["lilas", "li-las"], ["repas", "re-pas"], ["compas", "com-pas"],
  ["débat", "dé-bat"], ["combat", "com-bat"], ["achat", "a-chat"],
  ["climat", "cli-mat"], ["format", "for-mat"], ["bazar", "ba-zar"], ["zigzag", "zig-zag"],
  // ── finales -é / -ée ──
  ["fusée", "fu-sée"], ["musée", "mu-sée"], ["épée", "é-pée"], ["idée", "i-dée"],
  ["jetée", "je-tée"], ["allée", "al-lée"], ["année", "an-née"], ["armée", "ar-mée"],
  ["poupée", "pou-pée"], ["purée", "pu-rée"], ["marée", "ma-rée"], ["fumée", "fu-mée"],
  ["soirée", "soi-rée"], ["carré", "car-ré"], ["pavé", "pa-vé"], ["curé", "cu-ré"],
  ["café", "ca-fé"], ["lycée", "ly-cée"],
  // ── finales -ie / -ue ──
  ["génie", "gé-nie"], ["bougie", "bou-gie"], ["magie", "ma-gie"], ["chimie", "chi-mie"],
  ["série", "sé-rie"], ["mairie", "mai-rie"], ["laitue", "lai-tue"], ["statue", "sta-tue"],
  ["tortue", "tor-tue"], ["morue", "mo-rue"], ["tenue", "te-nue"], ["venue", "ve-nue"],
  ["fondue", "fon-due"],
  // ── finales -eau / -eu ──
  ["bateau", "ba-teau"], ["gâteau", "gâ-teau"], ["cadeau", "ca-deau"], ["rideau", "ri-deau"],
  ["radeau", "ra-deau"], ["bureau", "bu-reau"], ["anneau", "an-neau"], ["agneau", "a-gneau"],
  ["hameau", "ha-meau"], ["réseau", "ré-seau"], ["naseau", "na-seau"], ["oiseau", "oi-seau"],
  ["niveau", "ni-veau"], ["neveu", "ne-veu"], ["cheveu", "che-veu"],
  // ── finales -ou ──
  ["bambou", "bam-bou"], ["hibou", "hi-bou"], ["bijou", "bi-jou"], ["genou", "ge-nou"],
  ["joujou", "jou-jou"], ["verrou", "ver-rou"], ["coucou", "cou-cou"], ["toutou", "tou-tou"],
  ["doudou", "dou-dou"],
  // ── finales -et ──
  ["paquet", "pa-quet"], ["piquet", "pi-quet"], ["jouet", "jou-et"], ["filet", "fi-let"],
  ["gilet", "gi-let"], ["chalet", "cha-let"], ["valet", "va-let"], ["bonnet", "bon-net"],
  ["carnet", "car-net"], ["cornet", "cor-net"], ["navet", "na-vet"], ["poulet", "pou-let"],
  ["mulet", "mu-let"], ["reflet", "re-flet"], ["trajet", "tra-jet"], ["sujet", "su-jet"],
  ["projet", "pro-jet"], ["objet", "ob-jet"], ["béret", "bé-ret"],
  // ── finales -on ──
  ["jeton", "je-ton"], ["piton", "pi-ton"], ["python", "py-thon"], ["jambon", "jam-bon"],
  ["bidon", "bi-don"], ["dragon", "dra-gon"], ["donjon", "don-jon"], ["pigeon", "pi-geon"],
  ["wagon", "wa-gon"], ["gazon", "ga-zon"], ["bison", "bi-son"], ["poison", "poi-son"],
  ["maison", "mai-son"], ["raison", "rai-son"], ["saison", "sai-son"], ["prison", "pri-son"],
  ["cocon", "co-con"], ["balcon", "bal-con"], ["faucon", "fau-con"], ["flacon", "fla-con"],
  ["glaçon", "gla-çon"], ["flocon", "flo-con"], ["citron", "ci-tron"], ["mouton", "mou-ton"],
  ["bouton", "bou-ton"], ["carton", "car-ton"], ["melon", "me-lon"], ["salon", "sa-lon"],
  ["savon", "sa-von"], ["crayon", "cra-yon"], ["rayon", "ra-yon"], ["canon", "ca-non"],
  ["canyon", "ca-nyon"], ["ballon", "bal-lon"], ["bonbon", "bon-bon"], ["dindon", "din-don"],
  // ── finales -in / -an ──
  ["matin", "ma-tin"], ["lutin", "lu-tin"], ["raisin", "rai-sin"], ["moulin", "mou-lin"],
  ["jardin", "jar-din"], ["lapin", "la-pin"], ["sapin", "sa-pin"], ["marin", "ma-rin"],
  ["ravin", "ra-vin"], ["gratin", "gra-tin"], ["jasmin", "jas-min"], ["chemin", "che-min"],
  ["gamin", "ga-min"], ["patin", "pa-tin"], ["festin", "fes-tin"], ["destin", "des-tin"],
  ["butin", "bu-tin"], ["bassin", "bas-sin"], ["dessin", "des-sin"], ["requin", "re-quin"],
  ["coquin", "co-quin"], ["divan", "di-van"], ["volcan", "vol-can"], ["toucan", "tou-can"],
  ["ruban", "ru-ban"], ["écran", "é-cran"], ["cadran", "ca-dran"], ["tyran", "ty-ran"],
  // ── finales -oir / -our / -or / -ar / -ard / -art ──
  ["tiroir", "ti-roir"], ["miroir", "mi-roir"], ["espoir", "es-poir"], ["devoir", "de-voir"],
  ["savoir", "sa-voir"], ["rasoir", "ra-soir"], ["manoir", "ma-noir"], ["amour", "a-mour"],
  ["retour", "re-tour"], ["détour", "dé-tour"], ["autour", "au-tour"], ["séjour", "sé-jour"],
  ["canard", "ca-nard"], ["renard", "re-nard"], ["lézard", "lé-zard"], ["hasard", "ha-sard"],
  ["homard", "ho-mard"], ["hangar", "han-gar"], ["castor", "cas-tor"], ["trésor", "tré-sor"],
  ["décor", "dé-cor"], ["départ", "dé-part"],
  // ── finales -it / -ir / -ai / -al / -if ──
  ["habit", "ha-bit"], ["tapir", "ta-pir"], ["fakir", "fa-kir"], ["saphir", "sa-phir"],
  ["désir", "dé-sir"], ["loisir", "loi-sir"], ["balai", "ba-lai"], ["délai", "dé-lai"],
  ["essai", "es-sai"], ["bocal", "bo-cal"], ["cheval", "che-val"], ["chacal", "cha-cal"],
  ["narval", "nar-val"], ["métal", "mé-tal"], ["signal", "si-gnal"], ["canif", "ca-nif"],
  ["tarif", "ta-rif"], ["massif", "mas-sif"],
  // ── y semi-consonne ──
  ["noyau", "no-yau"], ["tuyau", "tu-yau"], ["moyen", "mo-yen"],
  // ── mots en consonne + e final ──
  ["robe", "ro-be"], ["tube", "tu-be"], ["cube", "cu-be"], ["jupe", "ju-pe"],
  ["pipe", "pi-pe"], ["loupe", "lou-pe"], ["soupe", "sou-pe"], ["groupe", "grou-pe"],
  ["guêpe", "guê-pe"], ["crêpe", "crê-pe"], ["grappe", "grap-pe"], ["nappe", "nap-pe"],
  ["grippe", "grip-pe"], ["frappe", "frap-pe"], ["lampe", "lam-pe"], ["pompe", "pom-pe"],
  ["rampe", "ram-pe"], ["trompe", "trom-pe"], ["carpe", "car-pe"], ["harpe", "har-pe"],
  ["porte", "por-te"], ["carte", "car-te"], ["tarte", "tar-te"], ["veste", "ves-te"],
  ["piste", "pis-te"], ["poste", "pos-te"], ["liste", "lis-te"], ["geste", "ges-te"],
  ["reste", "res-te"], ["sieste", "sies-te"], ["zeste", "zes-te"], ["buste", "bus-te"],
  ["pâte", "pâ-te"], ["gîte", "gî-te"], ["note", "no-te"], ["botte", "bot-te"],
  ["datte", "dat-te"], ["batte", "bat-te"], ["hutte", "hut-te"], ["lutte", "lut-te"],
  ["natte", "nat-te"], ["patte", "pat-te"], ["motte", "mot-te"], ["goutte", "gout-te"],
  ["flotte", "flot-te"], ["chute", "chu-te"], ["faute", "fau-te"], ["croûte", "croû-te"],
  ["route", "rou-te"], ["doute", "dou-te"], ["boîte", "boî-te"], ["quête", "quê-te"],
  ["tête", "tê-te"], ["fête", "fê-te"], ["bête", "bê-te"], ["pente", "pen-te"],
  ["plante", "plan-te"], ["tente", "ten-te"], ["tante", "tan-te"], ["trente", "tren-te"],
  ["teinte", "tein-te"], ["menthe", "men-the"], ["monde", "mon-de"], ["dinde", "din-de"],
  ["bande", "ban-de"], ["blonde", "blon-de"], ["ronde", "ron-de"], ["onde", "on-de"],
  ["viande", "vian-de"], ["corde", "cor-de"], ["garde", "gar-de"], ["barbe", "bar-be"],
  ["herbe", "her-be"], ["courbe", "cour-be"], ["gerbe", "ger-be"], ["verbe", "ver-be"],
  ["bombe", "bom-be"], ["tombe", "tom-be"], ["jambe", "jam-be"], ["ferme", "fer-me"],
  ["forme", "for-me"], ["larme", "lar-me"], ["arme", "ar-me"], ["plume", "plu-me"],
  ["brume", "bru-me"], ["lame", "la-me"], ["dame", "da-me"], ["rame", "ra-me"],
  ["drame", "dra-me"], ["femme", "fem-me"], ["gamme", "gam-me"], ["gomme", "gom-me"],
  ["pomme", "pom-me"], ["homme", "hom-me"], ["somme", "som-me"], ["flamme", "flam-me"],
  ["crème", "crè-me"], ["thème", "thè-me"], ["lune", "lu-ne"], ["dune", "du-ne"],
  ["prune", "pru-ne"], ["brune", "bru-ne"], ["jaune", "jau-ne"], ["jeune", "jeu-ne"],
  ["chêne", "chê-ne"], ["laine", "lai-ne"], ["plaine", "plai-ne"], ["graine", "grai-ne"],
  ["peine", "pei-ne"], ["reine", "rei-ne"], ["panne", "pan-ne"], ["canne", "can-ne"],
  ["tonne", "ton-ne"], ["bonne", "bon-ne"], ["zone", "zo-ne"], ["cône", "cô-ne"],
  ["trône", "trô-ne"], ["cave", "ca-ve"], ["rive", "ri-ve"], ["cuve", "cu-ve"],
  ["lave", "la-ve"], ["douve", "dou-ve"],
  // ── gn insécable ──
  ["ligne", "li-gne"], ["signe", "si-gne"], ["vigne", "vi-gne"], ["règne", "rè-gne"],
  ["cygne", "cy-gne"],
  // ── ch insécable ──
  ["niche", "ni-che"], ["biche", "bi-che"], ["fiche", "fi-che"], ["riche", "ri-che"],
  ["ruche", "ru-che"], ["vache", "va-che"], ["tache", "ta-che"], ["hache", "ha-che"],
  ["poche", "po-che"], ["roche", "ro-che"], ["cloche", "clo-che"], ["flèche", "flè-che"],
  ["mèche", "mè-che"], ["pêche", "pê-che"], ["bêche", "bê-che"], ["gauche", "gau-che"],
  ["douche", "dou-che"], ["mouche", "mou-che"], ["bouche", "bou-che"], ["couche", "cou-che"],
  ["souche", "sou-che"], ["manche", "man-che"], ["hanche", "han-che"], ["marche", "mar-che"],
  ["arche", "ar-che"], ["porche", "por-che"], ["torche", "tor-che"], ["bûche", "bû-che"],
  ["cruche", "cru-che"], ["quiche", "qui-che"],
  // ── consonne + l insécable ──
  ["aigle", "ai-gle"], ["sigle", "si-gle"], ["angle", "an-gle"], ["ongle", "on-gle"],
  ["jungle", "jun-gle"], ["cercle", "cer-cle"], ["oncle", "on-cle"], ["boucle", "bou-cle"],
  ["socle", "so-cle"], ["cycle", "cy-cle"], ["table", "ta-ble"], ["sable", "sa-ble"],
  ["fable", "fa-ble"], ["câble", "câ-ble"], ["diable", "dia-ble"], ["cible", "ci-ble"],
  ["bible", "bi-ble"], ["meuble", "meu-ble"], ["double", "dou-ble"], ["souple", "sou-ple"],
  ["couple", "cou-ple"], ["peuple", "peu-ple"], ["temple", "tem-ple"], ["simple", "sim-ple"],
  ["ample", "am-ple"], ["gifle", "gi-fle"], ["moufle", "mou-fle"], ["trèfle", "trè-fle"],
  // ── consonne + r insécable ──
  ["tigre", "ti-gre"], ["ogre", "o-gre"], ["maigre", "mai-gre"], ["livre", "li-vre"],
  ["givre", "gi-vre"], ["cuivre", "cui-vre"], ["lièvre", "liè-vre"], ["fièvre", "fiè-vre"],
  ["chèvre", "chè-vre"], ["lèvre", "lè-vre"], ["poudre", "pou-dre"], ["foudre", "fou-dre"],
  ["cadre", "ca-dre"], ["cèdre", "cè-dre"], ["cidre", "ci-dre"], ["ordre", "or-dre"],
  ["sabre", "sa-bre"], ["arbre", "ar-bre"], ["marbre", "mar-bre"], ["zèbre", "zè-bre"],
  ["ombre", "om-bre"], ["nombre", "nom-bre"], ["sombre", "som-bre"], ["timbre", "tim-bre"],
  ["montre", "mon-tre"], ["centre", "cen-tre"], ["ventre", "ven-tre"], ["litre", "li-tre"],
  ["mètre", "mè-tre"], ["titre", "ti-tre"], ["vitre", "vi-tre"], ["huître", "huî-tre"],
  ["plâtre", "plâ-tre"], ["autre", "au-tre"], ["feutre", "feu-tre"], ["poutre", "pou-tre"],
  ["loutre", "lou-tre"], ["hêtre", "hê-tre"], ["gaufre", "gau-fre"], ["coffre", "cof-fre"],
  ["soufre", "sou-fre"],
  // ── consonnes doubles : coupe entre les deux ──
  ["balle", "bal-le"], ["salle", "sal-le"], ["malle", "mal-le"], ["halle", "hal-le"],
  ["colle", "col-le"], ["bulle", "bul-le"], ["selle", "sel-le"], ["pelle", "pel-le"],
  ["belle", "bel-le"], ["beurre", "beur-re"], ["terre", "ter-re"], ["pierre", "pier-re"],
  ["verre", "ver-re"], ["serre", "ser-re"], ["barre", "bar-re"], ["mousse", "mous-se"],
  ["gousse", "gous-se"], ["brosse", "bros-se"], ["bosse", "bos-se"], ["hausse", "haus-se"],
  ["pousse", "pous-se"], ["tasse", "tas-se"], ["chasse", "chas-se"], ["classe", "clas-se"],
  ["caisse", "cais-se"], ["baisse", "bais-se"], ["truffe", "truf-fe"], ["touffe", "touf-fe"],
  ["griffe", "grif-fe"],
  // ── -que ──
  ["casque", "cas-que"], ["masque", "mas-que"], ["disque", "dis-que"], ["risque", "ris-que"],
  ["marque", "mar-que"], ["barque", "bar-que"], ["cirque", "cir-que"], ["coque", "co-que"],
  ["phoque", "pho-que"], ["laque", "la-que"], ["plaque", "pla-que"], ["brique", "bri-que"],
  ["quatre", "qua-tre"], ["quinze", "quin-ze"],
  // ── -se / -ze / -ce / -ge ──
  ["bronze", "bron-ze"], ["douze", "dou-ze"], ["seize", "sei-ze"], ["onze", "on-ze"],
  ["gaze", "ga-ze"], ["bise", "bi-se"], ["buse", "bu-se"], ["ruse", "ru-se"],
  ["rose", "ro-se"], ["chose", "cho-se"], ["pose", "po-se"], ["dose", "do-se"],
  ["vase", "va-se"], ["base", "ba-se"], ["case", "ca-se"], ["phase", "pha-se"],
  ["fraise", "frai-se"], ["chaise", "chai-se"], ["braise", "brai-se"], ["frise", "fri-se"],
  ["brise", "bri-se"], ["danse", "dan-se"], ["bourse", "bour-se"], ["course", "cour-se"],
  ["ourse", "our-se"], ["chance", "chan-ce"], ["lance", "lan-ce"], ["pince", "pin-ce"],
  ["sauce", "sau-ce"], ["puce", "pu-ce"], ["pouce", "pou-ce"], ["glace", "gla-ce"],
  ["place", "pla-ce"], ["trace", "tra-ce"], ["face", "fa-ce"], ["nièce", "niè-ce"],
  ["pièce", "piè-ce"], ["singe", "sin-ge"], ["linge", "lin-ge"], ["songe", "son-ge"],
  ["grange", "gran-ge"], ["frange", "fran-ge"], ["ange", "an-ge"], ["gorge", "gor-ge"],
  ["forge", "for-ge"], ["marge", "mar-ge"], ["neige", "nei-ge"], ["beige", "bei-ge"],
  ["tige", "ti-ge"], ["luge", "lu-ge"], ["juge", "ju-ge"], ["page", "pa-ge"],
  ["cage", "ca-ge"], ["sage", "sa-ge"], ["plage", "pla-ge"], ["nage", "na-ge"],
  ["rage", "ra-ge"],
  // ── -gue / -be ──
  ["figue", "fi-gue"], ["bague", "ba-gue"], ["vague", "va-gue"], ["digue", "di-gue"],
  ["langue", "lan-gue"], ["mangue", "man-gue"], ["fugue", "fu-gue"], ["algue", "al-gue"],
  ["orgue", "or-gue"], ["globe", "glo-be"], ["aube", "au-be"],
  // ── x ──
  ["axe", "a-xe"], ["boxe", "bo-xe"], ["taxe", "ta-xe"], ["fixe", "fi-xe"],
  ["luxe", "lu-xe"], ["mixte", "mix-te"], ["texte", "tex-te"], ["silex", "si-lex"],
  ["index", "in-dex"], ["latex", "la-tex"], ["pixel", "pi-xel"], ["klaxon", "kla-xon"],
  ["duplex", "du-plex"], ["exil", "e-xil"],
  // ── divers ──
  ["hiver", "hi-ver"], ["cahier", "ca-hier"], ["dehors", "de-hors"], ["avion", "a-vion"],
  ["camion", "ca-mion"], ["radio", "ra-dio"], ["wombat", "wom-bat"], ["wallon", "wal-lon"],
  ["banjo", "ban-jo"],
];

const MAX_LEN = 6;
const MIN_POOL = 5;
const LETTERS = "aoiueybcdgkpqtfjlmnrsvzwxh".split("");

function norm(w: string): string {
  return w.normalize("NFD").replace(/[\u0300-\u036f]/gu, "").toLowerCase();
}

function hasAccentedE(word: string): boolean {
  return /[éèêë]/iu.test(word.normalize("NFC"));
}

/** La lettre est écrite ET audible dans le mot. */
function letterInWord(word: string, letter: string): boolean {
  const n = norm(word);
  switch (letter) {
    case "a": // ignore « eau » et « au » (a muet dans /o/)
      return n.replace(/eau|au/g, "").includes("a");
    case "e": { // e accentué partout, ou e non final (hors « eau »)
      if (hasAccentedE(word)) return true;
      const w = n.replace(/eau/g, "");
      return w.slice(0, -1).includes("e");
    }
    case "i": // ignore ai / ei / oi (i muet dans les digraphes)
      return n.replace(/ai|ei|oi/g, "").includes("i");
    case "o": // ignore ou / oi (le o de « eau » reste audible)
      return n.replace(/ou|oi/g, "").includes("o");
    case "u": // ignore eau / au / ou / eu / qu / gu (u muet)
      return n.replace(/eau|au|ou|eu|qu|gu/g, "").includes("u");
    case "c": // c hors « ch »
      return n.replace(/ch/g, "").includes("c");
    case "g": // g dur : devant a / o / u / l / r ou en finale sonore
      return /g([aoulr]|$)/.test(n);
    case "h": // h hors ch / ph / th
      return n.replace(/ch|ph|th/g, "").includes("h");
    default:
      return n.includes(letter);
  }
}

// ── Validation du dictionnaire ────────────────────────────────────────────────
const seen = new Set<string>();
for (const [word, syllable] of WORDS) {
  if (seen.has(word)) throw new Error(`Doublon : ${word}`);
  seen.add(word);
  if (word.length > MAX_LEN) throw new Error(`Trop long (${word.length}) : ${word}`);
  const parts = syllable.split("-");
  if (parts.length !== 2 || parts.some((p) => !p)) {
    throw new Error(`Pas 2 syllabes : ${word} (${syllable})`);
  }
  if (parts.join("") !== word) {
    throw new Error(`Découpage ≠ mot : ${word} vs ${syllable}`);
  }
}

// ── Génération des pools ─────────────────────────────────────────────────────
const pools: Record<string, { phoneme: string; syllable: string; word: string }[]> = {};
const stats: { letter: string; count: number }[] = [];

for (const letter of LETTERS) {
  const phoneme = phonemeLabelForLetter(letter);
  const matches = WORDS.filter(([word]) => letterInWord(word, letter));
  matches.sort((a, b) => {
    const aStarts = norm(a[0]).startsWith(letter) ? 0 : 1;
    const bStarts = norm(b[0]).startsWith(letter) ? 0 : 1;
    if (aStarts !== bStarts) return aStarts - bStarts;
    return a[0].localeCompare(b[0], "fr", { sensitivity: "base" });
  });
  pools[letter] = matches.map(([word, syllable]) => ({ phoneme, syllable, word }));
  stats.push({ letter, count: matches.length });
}

console.table(stats);
const short = stats.filter((s) => s.count < MIN_POOL);
if (short.length) {
  console.error("Lettres sous le minimum :", short.map((s) => `${s.letter}(${s.count})`).join(", "));
  process.exit(1);
}

const outPath = resolve(__dirname, "../lib/curriculum/lecture-pronounce-pools.json");
writeFileSync(outPath, JSON.stringify(pools, null, 2) + "\n", "utf8");
console.log(`\nÉcrit : ${outPath} (${WORDS.length} mots uniques)`);
