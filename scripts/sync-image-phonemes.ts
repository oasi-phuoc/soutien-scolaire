/**
 * Aligne les phonèmes des mots illustrés (WORD_ITEMS) sur le parseur,
 * puis régénère lecture-image-word-items.json.
 *
 * Usage: npx tsx scripts/sync-image-phonemes.ts
 */
import fs from "fs";
import path from "path";
import { WORD_ITEMS, phonemesFromFrenchGraphemes } from "../lib/curriculum/word-pool";
import { getWordAssetSlug } from "../lib/utils/audio";

const root = process.cwd();
const lectureDir = path.join(root, "public/assets/words/lecture");
const poolFile = path.join(root, "lib/curriculum/word-pool.ts");
const outFile = path.join(root, "lib/curriculum/lecture-image-word-items.json");

const imgs = new Set(
  fs
    .readdirSync(lectureDir)
    .filter((f) => f.endsWith(".webp"))
    .map((f) => f.replace(/\.webp$/i, "")),
);

const orderKey = (ph: string[]) => [...ph].sort().join("|");

let src = fs.readFileSync(poolFile, "utf8");
const updates: Array<{ label: string; from: string[]; to: string[] }> = [];

for (const item of WORD_ITEMS) {
  if (!imgs.has(getWordAssetSlug(item.label))) continue;
  const parsed = [...phonemesFromFrenchGraphemes(item.label)];
  if (orderKey(item.phonemes) === orderKey(parsed)) continue;

  const labelEsc = item.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `(\\{\\s*label:\\s*"${labelEsc}"\\s*,\\s*phonemes:\\s*)\\[[^\\]]*\\]`,
    "m",
  );
  const newArr = `[${parsed.map((p) => `"${p}"`).join(", ")}]`;
  if (!re.test(src)) {
    console.warn("SKIP (pattern not found):", item.label);
    continue;
  }
  src = src.replace(re, `$1${newArr}`);
  updates.push({ label: item.label, from: item.phonemes, to: parsed });
}

fs.writeFileSync(poolFile, src);
console.log(`Updated ${updates.length} WORD_ITEMS with images`);
for (const u of updates) {
  console.log(`  ${u.label}: [${u.from.join(", ")}] → [${u.to.join(", ")}]`);
}

// Régénère le JSON des images non manuelles (relit WORD_ITEMS depuis le fichier modifié)
// On régénère via la même logique que generate-lecture-word-items.ts
const manualSlugs = new Set(WORD_ITEMS.map((w) => getWordAssetSlug(w.label)));
// Après update, les labels manuels inchangés en mémoire — recharger les labels depuis le fichier source
const labelMatches = [...src.matchAll(/\{\s*label:\s*"([^"]+)"\s*,\s*phonemes:\s*\[([^\]]*)\]/g)];
const manualFromFile = new Map<string, string[]>();
for (const m of labelMatches) {
  const label = m[1]!;
  const phonemes = [...m[2]!.matchAll(/"([^"]+)"/g)].map((x) => x[1]!);
  manualFromFile.set(getWordAssetSlug(label), phonemes);
}

const files = fs
  .readdirSync(lectureDir)
  .filter((f) => f.endsWith(".webp"))
  .map((f) => f.replace(/\.webp$/i, ""))
  .sort((a, b) => a.localeCompare(b, "fr"));

const items: Array<{ label: string; phonemes: string[] }> = [];
for (const slug of files) {
  if (manualFromFile.has(slug)) continue;
  items.push({
    label: slug,
    phonemes: [...phonemesFromFrenchGraphemes(slug)],
  });
}

fs.writeFileSync(outFile, `${JSON.stringify(items, null, 2)}\n`, "utf8");
console.log(`Wrote ${items.length} auto image entries → ${path.relative(root, outFile)}`);
console.log(`(${files.length} images, ${manualFromFile.size} manual WORD_ITEMS)`);
