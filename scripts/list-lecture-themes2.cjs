/**
 * More easily-illustrable "lecture" vocabulary across NEW themes, listing the
 * words that don't yet have an image (public/vocab/images +
 * public/assets/words/img + public/vocab-temp). Same resolution rules as
 * lib/curriculum/word-image-resolver.ts.
 *
 * Usage:  node scripts/list-lecture-themes2.cjs
 * Output: ref/lecture-themes2-missing.md + /tmp/missing-lecture-themes2.json
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const lectureDir = path.join(root, "public/assets/words/img");
const vocabDir = path.join(root, "public/vocab/images");
const tempDir = path.join(root, "public/vocab-temp");
const outMd = path.join(root, "ref/lecture-themes2-missing.md");
const outJson = "/tmp/missing-lecture-themes2.json";

const IMG_RE = /\.(webp|png|svg|jpe?g)$/i;
function baseSlug(v) {
  return v.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\u0153/g, "oe").replace(/\u0152/g, "oe").replace(/\u00e6/g, "ae").replace(/\u00c6/g, "ae").toLowerCase();
}
function addFrom(dir, index) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) { if (IMG_RE.test(f)) index.add(baseSlug(f.replace(IMG_RE, ""))); }
}
function buildIndex() {
  const index = new Set();
  addFrom(lectureDir, index);
  addFrom(tempDir, index);
  if (fs.existsSync(vocabDir)) for (const folder of fs.readdirSync(vocabDir)) { const d = path.join(vocabDir, folder); if (fs.statSync(d).isDirectory()) addFrom(d, index); }
  return index;
}
const DETERMINERS = new Set(["le","la","les","l","un","une","des","du","de","d","au","aux","mon","ma","mes","ton","ta","tes","son","sa","ses","ce","cet","cette","ces"]);
function tokenize(label) { return baseSlug(label).replace(/['’]/g, " ").replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter(Boolean); }
function stripDet(t) { const o = [...t]; while (o.length > 1 && DETERMINERS.has(o[0])) o.shift(); return o; }
function candidateSlugs(label) {
  const t = tokenize(label); if (!t.length) return [];
  const s = stripDet(t); const set = new Set();
  const push = (a) => { if (a.length) { set.add(a.join("-")); set.add(a.join("")); } };
  push(s); push(t); return [...set];
}
function primarySlug(label) { return stripDet(tokenize(label)).join("-"); }

const CATEGORIES = {
  "Instruments de musique": ["guitare","piano","violon","flûte","saxophone","batterie","harpe","accordéon","clarinette","xylophone","harmonica","violoncelle","tambourin","maracas","banjo"],
  "Oiseaux": ["moineau","corbeau","pigeon","mouette","cygne","paon","flamant rose","autruche","colombe","mésange","pie","cigogne","toucan","pélican","faucon","colibri","canari","oie","dinde","hirondelle"],
  "Animaux marins": ["méduse","pieuvre","crabe","homard","crevette","étoile de mer","hippocampe","raie","phoque","otarie","tortue de mer","corail","huître","oursin","morse","méduse"],
  "Reptiles et amphibiens": ["lézard","caméléon","iguane","gecko","crapaud","salamandre","cobra","python","dragon de Komodo"],
  "Desserts et pâtisseries": ["tarte","éclair","muffin","cupcake","donut","brownie","mille-feuille","tiramisu","flan","cookie","gaufre","sucette","beignet","madeleine","meringue"],
  "Boissons": ["soda","limonade","milkshake","chocolat chaud","smoothie","sirop","thé glacé","citronnade","tisane"],
  "Articles de toilette": ["dentifrice","shampoing","serviette","rasoir","coton-tige","papier toilette","brosse à cheveux","gel douche","gant de toilette","déodorant"],
  "Fournitures de bureau": ["trombone","punaise","tampon encreur","post-it","perforatrice","marqueur","chemise cartonnée","élastique de bureau","porte-documents"],
  "Formes géométriques": ["cercle","carré","triangle","rectangle","losange","ovale","étoile","pentagone","hexagone","cube","sphère","cylindre","cône","pyramide"],
  "Espace et astronomie": ["planète","satellite","comète","galaxie","télescope","station spatiale","astéroïde","saturne","soleil","lune","étoile filante"],
  "Bâtiments et lieux": ["hôpital","église","château","pont","phare","moulin","gratte-ciel","grange","igloo","stade","musée","banque","usine","immeuble"],
  "Accessoires": ["bague","collier","bracelet","boucle d'oreille","foulard","nœud papillon","lunettes de soleil","couronne","porte-clés"],
  "Météo et ciel": ["éclair","tornade","brouillard","arc-en-ciel","tempête","grêle","flocon de neige","goutte de pluie"],
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
  out.push("# Lecture — thèmes supplémentaires (2) : mots sans image");
  out.push("");
  out.push(`_Généré par \`scripts/list-lecture-themes2.cjs\` — ${new Date().toISOString().slice(0, 10)}_`);
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
}

main();
