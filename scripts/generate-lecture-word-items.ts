/**
 * Génère les entrées phonèmes pour chaque image dans public/assets/words/lecture/.
 *
 * Usage: npx tsx scripts/generate-lecture-word-items.ts
 * Output: lib/curriculum/lecture-image-word-items.json
 */
import fs from "fs";
import path from "path";

import { WORD_ITEMS, phonemesFromFrenchGraphemes } from "../lib/curriculum/word-pool";
import { getWordAssetSlug } from "../lib/utils/audio";

const root = process.cwd();
const lectureDir = path.join(root, "public/assets/words/lecture");
const outFile = path.join(root, "lib/curriculum/lecture-image-word-items.json");

type WordItemJson = { label: string; phonemes: string[] };

function main() {
  if (!fs.existsSync(lectureDir)) {
    console.error("Dossier introuvable:", lectureDir);
    process.exit(1);
  }

  const manualSlugs = new Set(WORD_ITEMS.map((w) => getWordAssetSlug(w.label)));
  const files = fs
    .readdirSync(lectureDir)
    .filter((f) => f.endsWith(".webp"))
    .map((f) => f.replace(/\.webp$/i, ""))
    .sort((a, b) => a.localeCompare(b, "fr"));

  const items: WordItemJson[] = [];

  for (const slug of files) {
    if (manualSlugs.has(slug)) continue;
    const label = slug;
    items.push({
      label,
      phonemes: [...phonemesFromFrenchGraphemes(label)],
    });
  }

  fs.writeFileSync(outFile, `${JSON.stringify(items, null, 2)}\n`, "utf8");
  console.log(`Écrit ${items.length} entrées → ${path.relative(root, outFile)}`);
  console.log(`(${files.length} images, ${manualSlugs.size} déjà dans WORD_ITEMS)`);
}

main();
