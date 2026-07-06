/**
 * Audit exhaustif : toutes les images CE/CO QCM doivent exister en manga
 * dans public/assets/expression/images/{slug}.webp (800×600).
 *
 * Usage: node scripts/audit-ce-co-manga-images.cjs
 * Output: ref/ce-co-manga-audit.md
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const exprDir = path.join(root, "public/assets/expression/images");
const outFile = path.join(root, "ref/ce-co-manga-audit.md");
const commDir = "lib/curriculum/content/communication";

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function baseSlug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0153/g, "oe")
    .replace(/\u00e6/g, "ae")
    .toLowerCase();
}

function slugify(label) {
  return baseSlug(label)
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const IMG_RE = /\.webp$/i;
const exprSlugs = new Set();
if (fs.existsSync(exprDir)) {
  for (const f of fs.readdirSync(exprDir)) {
    if (IMG_RE.test(f)) exprSlugs.add(baseSlug(f.replace(IMG_RE, "")));
  }
}

const aliases = JSON.parse(read("lib/curriculum/content/communication/word-image-aliases.json"));
delete aliases._comment;

/** @type {Map<string, {slug: string, label: string, sources: Set<string>}>} */
const needed = new Map();

function add(label, source, forcedSlug) {
  const key = (forcedSlug || slugify(label)).trim();
  if (!key) return;
  if (!needed.has(key)) needed.set(key, { slug: key, label: label || key, sources: new Set() });
  needed.get(key).sources.add(source);
}

// ---- CE imageLabel (ComprehensionEcritRunner) ----
const ceRunner = read("components/communication/ComprehensionEcritRunner.tsx");
for (const m of ceRunner.matchAll(/imageLabel:\s*"([^"]+)"/g)) add(m[1], "CE imageLabel");

// ---- CE base messages/orientation scene images ----
for (const m of read(`${commDir}/ce-messages-base.ts`).matchAll(/image:\s*"\/expression\/images\/([^"]+)"/g)) {
  add(m[1].replace(/\.webp$/, "").replace(/-/g, " "), "CE message scene", m[1].replace(/\.webp$/, ""));
}
for (const m of read(`${commDir}/ce-orientation-base.ts`).matchAll(/image:\s*"\/expression\/images\/([^"]+)"/g)) {
  add(m[1].replace(/\.webp$/, "").replace(/-/g, " "), "CE orientation scene", m[1].replace(/\.webp$/, ""));
}

// ---- CE MAP mini-cards ----
for (const m of read(`${commDir}/ce-orientation-base.ts`).matchAll(/MAP\("([^"]+)"\)/g)) {
  const id = m[1];
  for (const suffix of ["a", "b", "c"]) {
    const slug = `${id}-${suffix}`;
    add(`carte orientation ${id} option ${suffix}`, "CE MAP", slug);
  }
}

// ---- CO object-pick ----
const objetPick = read(`${commDir}/co-questions-objet-pick.ts`);
for (const m of objetPick.matchAll(/label:\s*"([^"]+)"/g)) add(m[1], "CO object-pick");

// ---- CO conversation grid ----
const helpers = read(`${commDir}/co-questions-helpers.ts`);
for (const m of helpers.matchAll(/conversation-(\d+)-([a-f])/g)) {
  const slug = `conversation-${m[1]}-${m[2]}`;
  add(`conversation activité ${m[1]} option ${m[2]}`, "CO conversation", slug);
}

// ---- CO QCM img[] (imageable labels only — mirror analyze-image-answers) ----
const DET = new Set(["le","la","les","l","un","une","des","du","de","d","au","aux","mon","ma","mes","ce","cet","cette","ces"]);
function tokens(label) {
  return baseSlug(label).replace(/['']/g, " ").replace(/[^a-z0-9\s-]/g, " ").split(/[\s-]+/).filter(Boolean);
}
function stripDet(t) { const o = [...t]; while (o.length > 1 && DET.has(o[0])) o.shift(); return o; }
function candidates(label) {
  const t = tokens(label); if (!t.length) return [];
  const s = stripDet(t); const set = new Set();
  const p = (a) => { if (a.length) { set.add(a.join("-")); set.add(a.join("")); } };
  p(s); p(t); return [...set];
}

const WIRED = new Set(exprSlugs);
// also vocab + lecture for resolvability check
function addFrom(dir) {
  if (!fs.existsSync(dir)) return;
  for (const f of fs.readdirSync(dir)) {
    if (/\.(webp|png|svg|jpe?g)$/i.test(f)) WIRED.add(baseSlug(f.replace(/\.(webp|png|svg|jpe?g)$/i, "")));
  }
}
addFrom(path.join(root, "public/assets/words/img"));
const vocab = path.join(root, "public/vocab/images");
if (fs.existsSync(vocab)) {
  for (const d of fs.readdirSync(vocab)) {
    const p = path.join(vocab, d);
    if (fs.statSync(p).isDirectory()) addFrom(p);
  }
}

function resolvable(label) {
  for (const c of candidates(label)) {
    if (WIRED.has(c)) return true;
    if (aliases[c] && WIRED.has(aliases[c])) return true;
  }
  return false;
}

function isTime(s) {
  const t = s.trim();
  if (/^(à\s+)?\d{1,2}\s*h(\s*\d{1,2})?$/i.test(t)) return true;
  if (/^\d{1,2}h(\d{2})?$/i.test(t)) return true;
  if (/^(midi|minuit)(\s+(et\s+)?(quart|demie?))?$/i.test(t)) return true;
  return false;
}
function isPrice(s) { return /€|(\bchf\b)|(\bfrancs?\b)|(\beuros?\b)/i.test(s); }
function isPercent(s) { return /%/.test(s); }
function isNumberLike(s) {
  const t = s.trim();
  if (/^[\d\s.,''\-+/²°:]+$/.test(t)) return true;
  if (/^\d/.test(t)) return true;
  return false;
}
function isIllustrable(label) {
  if (!label?.trim()) return false;
  if (isPercent(label) || isNumberLike(label)) return false;
  if (isTime(label) || isPrice(label)) return true;
  return resolvable(label);
}

const CO_FILES = [
  "co-questions-base-messages.ts", "co-questions-base-other.ts",
  "co-questions-moyen.ts", "co-questions-avance.ts", "co-questions-avance-extra.ts",
];
for (const file of CO_FILES) {
  const src = read(`${commDir}/${file}`);
  const itemRe = /id:\s*"([^"]+)"[\s\S]*?img:\s*\[([^\]]*)\]/g;
  let im;
  while ((im = itemRe.exec(src))) {
    const labels = [...im[2].matchAll(/"([^"]*)"/g)].map((x) => x[1]);
    if (!labels.every(isIllustrable)) continue;
    for (const l of labels) {
      if (isTime(l)) {
        const t = l.trim().toLowerCase().replace(/^à\s+/, "");
        let slug;
        if (t === "midi") slug = "horloge-12h00";
        else if (t === "minuit") slug = "horloge-00h00";
        else {
          const m = t.match(/^(\d{1,2})\s*h\s*(\d{1,2})?$/) || t.match(/^(\d{1,2})h(\d{2})?$/);
          if (m) slug = `horloge-${String(parseInt(m[1],10)).padStart(2,"0")}h${String(m[2]?parseInt(m[2],10):0).padStart(2,"0")}`;
        }
        if (slug) add(l, `CO QCM ${file}`, slug);
      } else if (isPrice(l)) {
        const m = l.trim().match(/^(\d+(?:[.,]\d+)?)\s*(€|euros?|francs?|chf)(\s*ht)?$/i);
        if (m) {
          const cur = /€|euro/i.test(m[2]) ? "eur" : /franc/i.test(m[2]) ? "fr" : "chf";
          const slug = `prix-${m[1].replace(/[.,]/g, "-")}-${cur}${m[3] ? "-ht" : ""}`;
          add(l, `CO QCM ${file}`, slug);
        }
      } else {
        add(l, `CO QCM ${file}`);
      }
    }
  }
}

// ---- Report ----
const rows = [...needed.values()].map((r) => ({
  slug: r.slug,
  label: r.label,
  sources: [...r.sources].sort().join(", "),
  hasManga: exprSlugs.has(baseSlug(r.slug)),
})).sort((a, b) => a.slug.localeCompare(b.slug));

const missing = rows.filter((r) => !r.hasManga);
const present = rows.filter((r) => r.hasManga);

const lines = [];
lines.push("# Audit images manga CE/CO — expression/images/");
lines.push("");
lines.push(`_Généré le ${new Date().toISOString().slice(0, 10)}_`);
lines.push("");
lines.push("## Résumé");
lines.push("");
lines.push(`- Slugs uniques requis : **${rows.length}**`);
lines.push(`- Déjà dans expression/images/ : **${present.length}**`);
lines.push(`- **Manquants** (à générer manga 800×600) : **${missing.length}**`);
lines.push("");

lines.push("## Manquants");
lines.push("");
if (!missing.length) {
  lines.push("_Aucun._");
} else {
  lines.push("| Slug | Label | Sources |");
  lines.push("| --- | --- | --- |");
  for (const r of missing) lines.push(`| \`${r.slug}\` | ${r.label} | ${r.sources} |`);
}
lines.push("");

lines.push("## Présents");
lines.push("");
lines.push(`| Slug | Label |`);
lines.push("| --- | --- |");
for (const r of present) lines.push(`| \`${r.slug}\` | ${r.label} |`);
lines.push("");

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, lines.join("\n"), "utf8");

console.log(`Total slugs: ${rows.length}`);
console.log(`Present: ${present.length}`);
console.log(`Missing: ${missing.length}`);
console.log(`Report → ${path.relative(root, outFile)}`);
if (missing.length) {
  console.log("\nMissing slugs:");
  for (const r of missing) console.log(`  ${r.slug}`);
}
