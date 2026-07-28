/**
 * Aligne WORD_ITEMS sur phonemesFromFrenchGraphemes (sauf overrides explicites).
 * Usage: npx tsx scripts/sync-word-item-phonemes.ts
 */
import fs from "fs";
import path from "path";

import { WORD_ITEMS, phonemesFromFrenchGraphemes } from "../lib/curriculum/word-pool";

/** Intentional manual overrides (parser cannot infer). */
const OVERRIDES: Record<string, string[]> = {
  // "ball" lu à l'anglaise dans le vocabulaire sport
  basketball: ["/b/", "/a/", "/s/", "/k/", "/e/", "/t/", "/o/", "/l/"],
};

const filePath = path.join(process.cwd(), "lib/curriculum/word-pool.ts");
let src = fs.readFileSync(filePath, "utf8");

let changed = 0;
for (const item of WORD_ITEMS) {
  const next = OVERRIDES[item.label] ?? [...phonemesFromFrenchGraphemes(item.label)];
  const same =
    item.phonemes.length === next.length &&
    item.phonemes.every((p, i) => p === next[i]);
  if (same) continue;

  const labelEsc = item.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `(\\{\\s*label:\\s*"${labelEsc}"\\s*,\\s*phonemes:\\s*)\\[[^\\]]*\\]`,
  );
  const newArr = `[${next.map((p) => `"${p}"`).join(", ")}]`;
  if (!re.test(src)) {
    console.log("MISS regex", item.label);
    continue;
  }
  src = src.replace(re, `$1${newArr}`);
  changed += 1;
  console.log("FIX", item.label, "=>", next.join(" "));
}

fs.writeFileSync(filePath, src);
console.log(`\nUpdated ${changed} WORD_ITEMS`);
