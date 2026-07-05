/**
 * List common A1/A2/B1 vocabulary words (by category) that DON'T yet have an
 * image in the app (vocabulaire public/vocab/images + lecture
 * public/assets/words/img). Uses the same resolution rules as
 * lib/curriculum/word-image-resolver.ts.
 *
 * Usage:
 *   node scripts/list-missing-vocab.cjs
 * Output:
 *   ref/vocab-a1b1-missing.md   (human report)
 *   /tmp/missing-vocab.json     ({ slug, label, category }[] for the generator)
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const lectureDir = path.join(root, "public/assets/words/img");
const vocabDir = path.join(root, "public/vocab/images");
const tempDir = path.join(root, "public/vocab-temp");
const outMd = path.join(root, "ref/vocab-a1b1-missing.md");
const outJson = "/tmp/missing-vocab.json";

// --- shared slug/index (mirror of resolver + index generator) --------------
const IMG_RE = /\.(webp|png|svg|jpe?g)$/i;
function baseSlug(v) {
  return v.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\u0153/g, "oe").replace(/\u0152/g, "oe").replace(/\u00e6/g, "ae").replace(/\u00c6/g, "ae").toLowerCase();
}
function addFrom(dir, index) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    if (!IMG_RE.test(f)) continue;
    const b = baseSlug(f.replace(IMG_RE, ""));
    index.add(b);
  }
}
function buildIndex() {
  const index = new Set();
  addFrom(lectureDir, index);
  addFrom(tempDir, index); // already-generated temp images count as present
  if (fs.existsSync(vocabDir)) {
    for (const folder of fs.readdirSync(vocabDir)) {
      const d = path.join(vocabDir, folder);
      if (fs.statSync(d).isDirectory()) addFrom(d, index);
    }
  }
  return index;
}
const DETERMINERS = new Set(["le","la","les","l","un","une","des","du","de","d","au","aux","mon","ma","mes","ton","ta","tes","son","sa","ses","ce","cet","cette","ces"]);
function tokenize(label) {
  return baseSlug(label).replace(/['’]/g, " ").replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter(Boolean);
}
function stripDet(t) { const o = [...t]; while (o.length > 1 && DETERMINERS.has(o[0])) o.shift(); return o; }
function candidateSlugs(label) {
  const t = tokenize(label); if (!t.length) return [];
  const s = stripDet(t); const set = new Set();
  const push = (a) => { if (a.length) { set.add(a.join("-")); set.add(a.join("")); } };
  push(s); push(t); return [...set];
}
function primarySlug(label) {
  const s = stripDet(tokenize(label));
  return s.join("-");
}

// --- vocabulary candidate lists (A1/A2/B1, concrete illustratable nouns) ----
const CATEGORIES = {
  "Fruits": ["pomme","banane","orange","poire","fraise","framboise","cerise","raisin","citron","citron vert","pamplemousse","ananas","mangue","kiwi","pastèque","melon","pêche","abricot","prune","myrtille","mûre","groseille","figue","datte","noix de coco","grenade","clémentine","mandarine","nectarine","papaye","litchi","cassis","coing"],
  "Légumes": ["carotte","pomme de terre","tomate","oignon","ail","poivron","courgette","aubergine","concombre","laitue","épinard","brocoli","chou","chou-fleur","haricot vert","petit pois","maïs","champignon","poireau","céleri","radis","betterave","navet","citrouille","courge","asperge","artichaut","fenouil","patate douce","lentille","pois chiche","potiron"],
  "Moyens de transport": ["voiture","bus","train","avion","bateau","vélo","moto","camion","tramway","métro","taxi","trottinette","scooter","hélicoptère","ambulance","camion de pompier","voiture de police","montgolfière","fusée","sous-marin","tracteur","caravane","téléphérique","ferry","paquebot"],
  "Appareils électroniques": ["téléphone","smartphone","ordinateur","ordinateur portable","tablette","télévision","télécommande","appareil photo","casque audio","écouteurs","clavier","souris","imprimante","réfrigérateur","four","micro-ondes","machine à laver","lave-vaisselle","aspirateur","sèche-cheveux","grille-pain","bouilloire","cafetière","ventilateur","climatiseur","radio","enceinte","chargeur","console de jeux","montre connectée"],
  "Animaux": ["chien","chat","cheval","vache","mouton","chèvre","cochon","poule","coq","canard","lapin","souris","éléphant","lion","tigre","girafe","singe","ours","loup","renard","cerf","écureuil","hérisson","serpent","tortue","grenouille","poisson","requin","dauphin","baleine","papillon","abeille","fourmi","araignée","oiseau","aigle","hibou","pingouin","kangourou","zèbre","crocodile","souris grise","perroquet"],
  "Vêtements": ["pantalon","chemise","robe","jupe","pull","veste","manteau","t-shirt","short","chaussures","chaussettes","bottes","écharpe","gants","bonnet","chapeau","casquette","cravate","ceinture","maillot de bain","pyjama","lunettes","sac à dos","baskets","sandales"],
  "Maison et meubles": ["maison","appartement","porte","fenêtre","mur","toit","table","chaise","lit","canapé","fauteuil","armoire","étagère","bureau","lampe","tapis","rideau","miroir","évier","baignoire","douche","toilettes","escalier","garage","balcon","cheminée"],
  "Nourriture": ["pain","fromage","beurre","lait","œuf","viande","riz","pâtes","soupe","gâteau","chocolat","bonbon","glace","yaourt","confiture","miel","sucre","sel","poivre","huile","farine","café","thé","jus d'orange","eau","croissant","baguette","sandwich","hamburger","frites","crêpe","biscuit"],
  "Ustensiles de cuisine": ["assiette","verre","tasse","bol","fourchette","couteau","cuillère","casserole","poêle","marmite","bouteille","bocal","planche à découper","passoire","spatule","louche"],
  "Métiers": ["médecin","infirmier","professeur","policier","pompier","boulanger","cuisinier","serveur","vendeur","facteur","agriculteur","mécanicien","coiffeur","dentiste","avocat","pilote","chauffeur","jardinier","peintre","plombier","électricien","architecte","journaliste","musicien","astronaute"],
  "Nature et météo": ["soleil","lune","étoile","nuage","pluie","neige","vent","orage","arc-en-ciel","montagne","mer","plage","rivière","lac","forêt","arbre","fleur","herbe","feuille","volcan","désert","cascade","île"],
  "Corps humain": ["tête","cheveux","œil","oreille","nez","bouche","dent","langue","cou","épaule","bras","main","doigt","jambe","pied","genou","ventre","dos","cœur","cerveau"],
  "Sports et loisirs": ["football","basketball","tennis","natation","ski","vélo","course","danse","yoga","guitare","piano","violon","tambour","échecs","peinture","photographie","randonnée","pêche","boxe","judo"],
  "École": ["cahier","livre","stylo","crayon","gomme","règle","ciseaux","colle","trousse","tableau","calculatrice","carte","globe","classeur","feutre","surligneur"],
};

function main() {
  const index = buildIndex();
  const report = [];
  const missingAll = [];
  const seenSlug = new Set();

  const summary = [];
  for (const [cat, words] of Object.entries(CATEGORIES)) {
    const present = [];
    const missing = [];
    for (const label of words) {
      const has = candidateSlugs(label).some((c) => index.has(c));
      if (has) { present.push(label); continue; }
      const slug = primarySlug(label);
      if (!slug || seenSlug.has(slug)) continue;
      seenSlug.add(slug);
      missing.push({ label, slug });
      missingAll.push({ label, slug, category: cat });
    }
    summary.push({ cat, total: words.length, present: present.length, missing });
  }

  const totalMissing = missingAll.length;
  report.push("# Vocabulaire A1–A2–B1 : mots sans image (à générer)");
  report.push("");
  report.push(`_Généré par \`scripts/list-missing-vocab.cjs\` — ${new Date().toISOString().slice(0, 10)}_`);
  report.push("");
  report.push("Mots de vocabulaire courants (A1–A2–B1) qui n'ont **pas encore** d'image dans l'app (`public/vocab/images` + `public/assets/words/img` + `public/vocab-temp`).");
  report.push("");
  report.push(`**Total à générer : ${totalMissing} mots.**`);
  report.push("");
  for (const s of summary) {
    report.push(`## ${s.cat} — ${s.missing.length} manquant(s) / ${s.total}`);
    report.push("");
    if (!s.missing.length) { report.push("_Tous présents._"); report.push(""); continue; }
    report.push("| Mot | Fichier cible |");
    report.push("| --- | --- |");
    for (const m of s.missing) report.push(`| ${m.label} | \`public/vocab-temp/${m.slug}.webp\` |`);
    report.push("");
  }

  fs.mkdirSync(path.dirname(outMd), { recursive: true });
  fs.writeFileSync(outMd, report.join("\n"), "utf8");
  fs.writeFileSync(outJson, JSON.stringify(missingAll, null, 2), "utf8");

  console.log(`Total candidate words: ${Object.values(CATEGORIES).reduce((a, w) => a + w.length, 0)}`);
  console.log(`Missing (to generate): ${totalMissing}`);
  for (const s of summary) console.log(`  ${s.cat}: ${s.missing.length} missing / ${s.total}`);
  console.log(`Report → ${path.relative(root, outMd)}`);
  console.log(`JSON   → ${outJson}`);
}

main();
