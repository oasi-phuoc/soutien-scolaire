/**
 * Propose additional easily-illustrable "lecture" vocabulary across extra
 * themes (métiers, objets, meubles, nature, arbres, école, sport, jouets,
 * insectes, fleurs …) and list the ones that DON'T yet have an image
 * (public/assets/words/vocab + public/assets/words/lecture + public/vocab-temp).
 *
 * Same resolution rules as lib/curriculum/word-image-resolver.ts.
 *
 * Usage:  node scripts/list-lecture-extra.cjs
 * Output: ref/lecture-extra-missing.md + /tmp/missing-lecture-extra.json
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const lectureDir = path.join(root, "public/assets/words/lecture");
const vocabDir = path.join(root, "public/assets/words/vocab");
const tempDir = path.join(root, "public/vocab-temp");
const outMd = path.join(root, "ref/lecture-extra-missing.md");
const outJson = "/tmp/missing-lecture-extra.json";

const IMG_RE = /\.(webp|png|svg|jpe?g)$/i;
function baseSlug(v) {
  return v.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\u0153/g, "oe").replace(/\u0152/g, "oe").replace(/\u00e6/g, "ae").replace(/\u00c6/g, "ae").toLowerCase();
}
function addFrom(dir, index) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    if (!IMG_RE.test(f)) continue;
    index.add(baseSlug(f.replace(IMG_RE, "")));
  }
}
function buildIndex() {
  const index = new Set();
  addFrom(lectureDir, index);
  addFrom(tempDir, index);
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
function primarySlug(label) { return stripDet(tokenize(label)).join("-"); }

const CATEGORIES = {
  "Métiers": ["boulanger","cuisinier","serveur","vendeur","coiffeur","dentiste","jardinier","peintre","plombier","électricien","musicien","acteur","médecin","infirmier","professeur","pompier","avocat","vétérinaire","photographe","danseur","chanteur","boucher","pêcheur","fermier","maçon","charpentier","juge","caissier","serveuse","scientifique"],
  "Objets du quotidien": ["bougie","horloge","réveil","balai","éponge","savon","brosse à dents","peigne","cadenas","marteau","tournevis","clou","échelle","pinceau","pile","briquet","lampe de poche","boussole","jumelles","loupe","valise","portefeuille","panier","boîte","enveloppe","timbre","parasol","tente","arrosoir","pelle","râteau","brouette","balance","entonnoir","clé","allumette"],
  "Meubles": ["commode","tabouret","banc","berceau","buffet","coffre","table de nuit","porte-manteau","hamac","bibliothèque","penderie","vitrine"],
  "Nature et paysages": ["colline","vallée","grotte","falaise","dune","glacier","marais","étang","ruisseau","champ","prairie","canyon","rocher","sentier","chute d'eau","volcan","source","gouffre"],
  "Types d'arbres": ["chêne","sapin","pin","palmier","bouleau","saule pleureur","érable","olivier","peuplier","cyprès","hêtre","marronnier","cerisier","pommier","bambou","séquoia","noisetier","châtaignier"],
  "École": ["pupitre","cartable","taille-crayon","compas","équerre","rapporteur","craie","ardoise","dictionnaire","atlas","stylo plume","porte-mine","encre"],
  "Objets de sport": ["ballon de football","ballon de basket","raquette de tennis","filet","panier de basket","batte de baseball","casque de vélo","patins à roulettes","skateboard","planche de surf","snowboard","corde à sauter","tapis de yoga","sifflet","chronomètre","médaille","trophée","arc","flèche","javelot","cible","volant de badminton","but de football","haltères","raquette de ping-pong"],
  "Jouets": ["poupée","ours en peluche","robot","voiture miniature","train miniature","cube de construction","toupie","yoyo","cerf-volant","puzzle","dé","bille","cheval à bascule","ballon de baudruche","trompette","château de sable","cerceau","kaléidoscope","marionnette"],
  "Insectes et petites bêtes": ["coccinelle","sauterelle","libellule","moustique","mouche","scarabée","chenille","escargot","ver de terre","guêpe","mante religieuse","criquet","luciole","hanneton","papillon","abeille","scorpion","limace"],
  "Fleurs": ["tulipe","marguerite","tournesol","lys","orchidée","jonquille","pâquerette","coquelicot","pissenlit","muguet","violette","œillet","pivoine","jacinthe","iris","lavande","nénuphar","chrysanthème","bleuet","glycine"],
};

function main() {
  const index = buildIndex();
  const missingAll = [];
  const seen = new Set();
  const summary = [];

  for (const [cat, words] of Object.entries(CATEGORIES)) {
    const missing = [];
    for (const label of words) {
      if (candidateSlugs(label).some((c) => index.has(c))) continue;
      const slug = primarySlug(label);
      if (!slug || seen.has(slug)) continue;
      seen.add(slug);
      missing.push({ label, slug });
      missingAll.push({ label, slug, category: cat });
    }
    summary.push({ cat, total: words.length, missing });
  }

  const total = missingAll.length;
  const out = [];
  out.push("# Lecture — nouveaux thèmes : mots sans image (à générer)");
  out.push("");
  out.push(`_Généré par \`scripts/list-lecture-extra.cjs\` — ${new Date().toISOString().slice(0, 10)}_`);
  out.push("");
  out.push("Mots supplémentaires facilement illustrables (thèmes variés) sans image existante (`public/assets/words/vocab` + `public/assets/words/lecture` + `public/vocab-temp`).");
  out.push("");
  out.push(`**Total à générer : ${total} mots.**`);
  out.push("");
  for (const s of summary) {
    out.push(`## ${s.cat} — ${s.missing.length} manquant(s) / ${s.total}`);
    out.push("");
    if (!s.missing.length) { out.push("_Tous présents._", ""); continue; }
    out.push("| Mot | Fichier cible |", "| --- | --- |");
    for (const m of s.missing) out.push(`| ${m.label} | \`public/vocab-temp/${m.slug}.webp\` |`);
    out.push("");
  }

  fs.mkdirSync(path.dirname(outMd), { recursive: true });
  fs.writeFileSync(outMd, out.join("\n"), "utf8");
  fs.writeFileSync(outJson, JSON.stringify(missingAll, null, 2), "utf8");

  console.log(`Candidate words: ${Object.values(CATEGORIES).reduce((a, w) => a + w.length, 0)}`);
  console.log(`Missing (to generate): ${total}`);
  for (const s of summary) console.log(`  ${s.cat}: ${s.missing.length}/${s.total}`);
  console.log(`Report → ${path.relative(root, outMd)}`);
}

main();
