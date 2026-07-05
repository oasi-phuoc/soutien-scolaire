/**
 * Audit CE (compréhension écrite) and CO (compréhension orale) word images.
 *
 * For every word/label in CE/CO that is meant to show a picture, this script
 * tries to link it to an existing image in vocabulaire (public/vocab/images)
 * or lecture (public/assets/words/img) using the exact same resolution rules
 * as lib/curriculum/word-image-resolver.ts. It then writes a report of which
 * words are linked and which are still missing an image.
 *
 * Usage:
 *   node scripts/audit-ce-co-images.cjs
 *
 * Output:
 *   ref/ce-co-image-audit.md
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const lectureDir = path.join(root, "public/assets/words/img");
const vocabDir = path.join(root, "public/vocab/images");
const outFile = path.join(root, "ref/ce-co-image-audit.md");

// ---------------------------------------------------------------------------
// Image index (same sources / priority as generate-word-image-index.cjs)
// ---------------------------------------------------------------------------
const IMG_RE = /\.(webp|png|svg|jpe?g)$/i;

function baseSlug(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0153/g, "oe")
    .replace(/\u0152/g, "oe")
    .replace(/\u00e6/g, "ae")
    .replace(/\u00c6/g, "ae")
    .toLowerCase();
}

function addFrom(dir, urlPrefix, index) {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir).sort()) {
    if (!IMG_RE.test(file)) continue;
    const base = baseSlug(file.replace(IMG_RE, ""));
    if (!index.has(base)) index.set(base, `${urlPrefix}/${file}`);
  }
}

function buildIndex() {
  const index = new Map();
  addFrom(lectureDir, "/assets/words/img", index);
  if (fs.existsSync(vocabDir)) {
    for (const folder of fs.readdirSync(vocabDir).sort()) {
      const dir = path.join(vocabDir, folder);
      if (!fs.statSync(dir).isDirectory()) continue;
      addFrom(dir, `/vocab/images/${folder}`, index);
    }
  }
  return index;
}

// ---------------------------------------------------------------------------
// Resolution (mirror of lib/curriculum/word-image-resolver.ts)
// ---------------------------------------------------------------------------
const DETERMINERS = new Set([
  "le", "la", "les", "l", "un", "une", "des", "du", "de", "d", "au", "aux",
  "mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses",
  "ce", "cet", "cette", "ces", "the", "a",
]);

function tokenize(label) {
  return baseSlug(label)
    .replace(/['’]/g, " ")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/[\s-]+/)
    .filter(Boolean);
}

function stripDeterminers(tokens) {
  const out = [...tokens];
  while (out.length > 1 && DETERMINERS.has(out[0])) out.shift();
  return out;
}

function candidateSlugs(label) {
  const tokens = tokenize(label);
  if (!tokens.length) return [];
  const stripped = stripDeterminers(tokens);
  const set = new Set();
  const push = (arr) => {
    if (!arr.length) return;
    set.add(arr.join("-"));
    set.add(arr.join(""));
  };
  push(stripped);
  push(tokens);
  return [...set];
}

function makeResolver(index, aliases) {
  return function resolve(label) {
    for (const candidate of candidateSlugs(label)) {
      if (index.has(candidate)) return index.get(candidate);
      const alias = aliases[candidate];
      if (alias && index.has(alias)) return index.get(alias);
    }
    return null;
  };
}

// ---------------------------------------------------------------------------
// Collect CE/CO labels
// ---------------------------------------------------------------------------
function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

/** { label -> Set(sources) } */
function collectLabels() {
  const labels = new Map();
  const add = (label, source) => {
    const key = label.trim();
    if (!key) return;
    if (!labels.has(key)) labels.set(key, new Set());
    labels.get(key).add(source);
  };

  // CO — object pick cards (each card renders a real picture).
  // NB: the CO multiple-choice "image" pools (RawQ `img: [...]`) are intentionally
  // excluded — their choices are short text answers (times, prices, names, places)
  // that are not illustratable words and are rendered as text placeholders.
  const objetPick = read("lib/curriculum/content/communication/co-questions-objet-pick.ts");
  for (const m of objetPick.matchAll(/label:\s*"([^"]+)"/g)) add(m[1], "CO object_pick");

  // CE — image MCQ choices `{ label: "X", image: "..." }` and reading `imageLabel: "X"`.
  const ce = read("components/communication/ComprehensionEcritRunner.tsx");
  for (const m of ce.matchAll(/label:\s*"([^"]+)"\s*,\s*image:\s*"[^"]*"/g)) add(m[1], "CE image MCQ");
  for (const m of ce.matchAll(/imageLabel:\s*"([^"]+)"/g)) add(m[1], "CE reading image");

  return labels;
}

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
function sourceOf(path) {
  if (!path) return "";
  if (path.startsWith("/assets/words/img/")) return "lecture";
  if (path.startsWith("/vocab/images/")) return "vocabulaire";
  return "autre";
}

function main() {
  const index = buildIndex();
  const aliases = JSON.parse(read("lib/curriculum/content/communication/word-image-aliases.json"));
  delete aliases._comment;
  const resolve = makeResolver(index, aliases);

  const labels = collectLabels();
  const rows = [...labels.entries()]
    .map(([label, sources]) => {
      const image = resolve(label);
      return { label, sources: [...sources].sort().join(", "), image, from: sourceOf(image) };
    })
    .sort((a, b) => a.label.localeCompare(b.label, "fr"));

  const linked = rows.filter((r) => r.image);
  const missing = rows.filter((r) => !r.image);
  const fromVocab = linked.filter((r) => r.from === "vocabulaire").length;
  const fromLecture = linked.filter((r) => r.from === "lecture").length;

  const lines = [];
  lines.push("# Audit des images CE / CO");
  lines.push("");
  lines.push(`_Généré par \`scripts/audit-ce-co-images.cjs\` — ${new Date().toISOString().slice(0, 10)}_`);
  lines.push("");
  lines.push("Chaque mot/étiquette des sections **Compréhension écrite (CE)** et **Compréhension orale (CO)** qui doit afficher une image est relié à une image existante dans **vocabulaire** (`public/vocab/images`) ou **lecture** (`public/assets/words/img`).");
  lines.push("");
  lines.push("## Résumé");
  lines.push("");
  lines.push(`- Mots analysés : **${rows.length}**`);
  lines.push(`- Mots reliés à une image : **${linked.length}** (${fromLecture} depuis lecture, ${fromVocab} depuis vocabulaire)`);
  lines.push(`- Mots **sans image** : **${missing.length}**`);
  lines.push(`- Images indexées : ${index.size}`);
  lines.push("");

  lines.push("## Mots SANS image (à créer / à sourcer)");
  lines.push("");
  if (!missing.length) {
    lines.push("_Aucun — tous les mots CE/CO ont une image._");
  } else {
    lines.push("| Mot | Sections |");
    lines.push("| --- | --- |");
    for (const r of missing) lines.push(`| ${r.label} | ${r.sources} |`);
  }
  lines.push("");

  lines.push("## Mots reliés à une image");
  lines.push("");
  lines.push("| Mot | Sections | Source | Image |");
  lines.push("| --- | --- | --- | --- |");
  for (const r of linked) lines.push(`| ${r.label} | ${r.sources} | ${r.from} | \`${r.image}\` |`);
  lines.push("");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, lines.join("\n"), "utf8");

  console.log(`Analyzed ${rows.length} CE/CO words`);
  console.log(`  linked : ${linked.length} (lecture ${fromLecture}, vocabulaire ${fromVocab})`);
  console.log(`  missing: ${missing.length}`);
  console.log(`Report → ${path.relative(root, outFile)}`);
  if (missing.length) {
    console.log("\nMissing words:");
    console.log("  " + missing.map((r) => r.label).join(", "));
  }
}

main();
