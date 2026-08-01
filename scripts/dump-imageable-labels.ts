/**
 * Dump la liste des labels illustrables pour les QCM image CE/CO/Express.
 * Usage : npx tsx scripts/dump-imageable-labels.ts > /tmp/imageable-labels.txt
 */
import fs from "node:fs";
import path from "node:path";
import { expressChoiceImage } from "../lib/curriculum/content/communication/express-listening-helpers";
import { hasBlockedImageChoices } from "../lib/curriculum/content/communication/ce-co-question-filters";

const commDir = path.join(process.cwd(), "lib/curriculum/content/communication");
const candidates = new Set<string>();

for (const file of fs.readdirSync(commDir)) {
  if (!file.startsWith("co-questions") || !file.endsWith(".ts")) continue;
  const text = fs.readFileSync(path.join(commDir, file), "utf8");
  for (const m of text.matchAll(/img:\s*\[([^\]]+)\]/g)) {
    for (const lm of m[1]!.matchAll(/"([^"]+)"/g)) candidates.add(lm[1]!);
  }
}

// Vocabulaire / lecture : slugs directs des images mots
const wordDirs = [
  "public/assets/words/lecture",
  "public/assets/words/vocab",
];
for (const dir of wordDirs) {
  const abs = path.join(process.cwd(), dir);
  if (!fs.existsSync(abs)) continue;
  for (const f of fs.readdirSync(abs)) {
    const base = f.replace(/\.(webp|png|jpe?g)$/i, "");
    if (!/\.(webp|png|jpe?g)$/i.test(f)) continue;
    candidates.add(base.replace(/-/g, " "));
  }
}

const ok: string[] = [];
for (const label of [...candidates].sort((a, b) => a.localeCompare(b, "fr"))) {
  if (hasBlockedImageChoices([label])) continue;
  if (expressChoiceImage(label)) ok.push(label);
}
console.log(ok.join("\n"));
console.error(`OK: ${ok.length} / ${candidates.size}`);
