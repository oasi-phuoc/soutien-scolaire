/**
 * Generate a static index of every word illustration that exists on disk.
 *
 * Sources (in priority order):
 *   1. public/assets/expression/images-temp       → CO scolaire objets / situations temp
 *   2. public/assets/expression/co/base/scolaire  → CO scolaire conversations
 *   3. public/assets/expression/co/base/public      → CO base conversations
 *   4. public/assets/expression/images/scene        → CE/CO scènes manga
 *   5. public/assets/expression/images/ce           → héros CE messages / orientation
 *   6. public/assets/expression/images/heure        → horloges
 *   7. public/assets/words/lecture                  → pool lecture unifié
 *   8. public/assets/words/vocab/Vn                 → vocabulaire thématique
 *
 * Output:
 *   lib/curriculum/content/communication/word-image-index.ts
 *
 * Re-run whenever images are added/removed:
 *   node scripts/generate-word-image-index.cjs
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const expressionTempDir = path.join(root, "public/assets/expression/images-temp");
const coScolaireDir = path.join(root, "public/assets/expression/co/base/scolaire");
const coPublicDir = path.join(root, "public/assets/expression/co/base/public");
const expressionSceneDir = path.join(root, "public/assets/expression/images/scene");
const sceneCatalogPath = path.join(
  root,
  "lib/curriculum/content/communication/scene-image-catalog.json",
);
const expressionCeDir = path.join(root, "public/assets/expression/images/ce");
const expressionHeureDir = path.join(root, "public/assets/expression/images/heure");
const lectureDir = path.join(root, "public/assets/words/lecture");
const vocabDir = path.join(root, "public/assets/words/vocab");
const outFile = path.join(root, "lib/curriculum/content/communication/word-image-index.ts");

function slug(word) {
  return word.toLowerCase();
}

function baseSlug(word) {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0153/g, "oe")
    .replace(/\u0152/g, "oe")
    .replace(/\u00e6/g, "ae")
    .replace(/\u00c6/g, "ae")
    .toLowerCase();
}

const IMG_RE = /\.(webp|png|svg|jpe?g)$/i;

/** Add an entry only if the slug is not already claimed (priority = call order). */
function addFrom(dir, urlPrefix, index) {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir).sort()) {
    if (!IMG_RE.test(file)) continue;
    const baseName = file.replace(IMG_RE, "");
    const accentKey = slug(baseName);
    const plainKey = baseSlug(baseName);
    if (accentKey.startsWith("prix-")) continue;
    const url = `${urlPrefix}/${file}`;
    if (!index.has(accentKey)) index.set(accentKey, url);
    if (plainKey !== accentKey && !index.has(plainKey)) index.set(plainKey, url);
  }
}

/**
 * Scènes CE/CO : fichiers `N (k).ext` — indexer par clé thématique (slug famille)
 * pour que les lookups `accepter-invitation`, aliases, etc. restent valides.
 */
function addSceneFromCatalog(index) {
  if (!fs.existsSync(sceneCatalogPath)) {
    addFrom(expressionSceneDir, "/assets/expression/images/scene", index);
    return;
  }
  const catalog = JSON.parse(fs.readFileSync(sceneCatalogPath, "utf8"));
  for (const family of catalog.families || []) {
    const main = family.variants?.[0];
    if (!main?.path) continue;
    const url = main.path;
    const accentKey = slug(family.key);
    const plainKey = baseSlug(family.key);
    if (!index.has(accentKey)) index.set(accentKey, url);
    if (plainKey !== accentKey && !index.has(plainKey)) index.set(plainKey, url);

    // Variantes : `slug (2)`… pour compat + noms numériques `N (k)`
    family.variants.forEach((v, idx) => {
      if (!v?.path) return;
      if (idx > 0) {
        const variantKey = `${family.key} (${idx + 1})`;
        if (!index.has(variantKey)) index.set(variantKey, v.path);
        const plainVariant = baseSlug(variantKey);
        if (plainVariant !== variantKey && !index.has(plainVariant)) {
          index.set(plainVariant, v.path);
        }
      }
      const fileBase = String(v.file || "").replace(IMG_RE, "");
      if (fileBase && !index.has(fileBase)) index.set(fileBase, v.path);
    });
  }
}

function main() {
  const index = new Map();
  const lectureOnly = new Map();

  addFrom(expressionTempDir, "/assets/expression/images-temp", index);
  // Sous-dossiers temps (ex. itinéraires CE)
  if (fs.existsSync(expressionTempDir)) {
    for (const folder of fs.readdirSync(expressionTempDir).sort()) {
      const dir = path.join(expressionTempDir, folder);
      if (!fs.statSync(dir).isDirectory()) continue;
      addFrom(dir, `/assets/expression/images-temp/${folder}`, index);
    }
  }
  addFrom(coScolaireDir, "/assets/expression/co/base/scolaire", index);
  addFrom(coPublicDir, "/assets/expression/co/base/public", index);
  addSceneFromCatalog(index);
  addFrom(expressionCeDir, "/assets/expression/images/ce", index);
  addFrom(expressionHeureDir, "/assets/expression/images/heure", index);
  addFrom(lectureDir, "/assets/words/lecture", index);
  addFrom(lectureDir, "/assets/words/lecture", lectureOnly);

  if (fs.existsSync(vocabDir)) {
    for (const folder of fs.readdirSync(vocabDir).sort()) {
      const dir = path.join(vocabDir, folder);
      if (!fs.statSync(dir).isDirectory()) continue;
      addFrom(dir, `/assets/words/vocab/${folder}`, index);
    }
  }

  const sorted = [...index.entries()].sort(([a], [b]) => a.localeCompare(b));
  const body = sorted.map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n");

  const lectureSorted = [...lectureOnly.entries()].sort(([a], [b]) => a.localeCompare(b));
  const lectureBody = lectureSorted.map(([k, v]) => `  ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join("\n");

  const content = `// AUTO-GENERATED by scripts/generate-word-image-index.cjs — do not edit by hand.
// Maps a normalized word slug to an existing image in vocabulaire or lecture.
// Re-run \`node scripts/generate-word-image-index.cjs\` after adding/removing images.

export const WORD_IMAGE_INDEX: Record<string, string> = {
${body}
};

/** Pool lecture seul — fallback CE/CO (jamais vocabulaire). */
export const LECTURE_IMAGE_INDEX: Record<string, string> = {
${lectureBody}
};
`;

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, content, "utf8");
  console.log(`Wrote ${sorted.length} entries + ${lectureSorted.length} lecture → ${path.relative(root, outFile)}`);
}

main();
