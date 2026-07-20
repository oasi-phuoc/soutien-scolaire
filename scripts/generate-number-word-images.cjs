/**
 * Génère des illustrations 800×600 (4:3, fond blanc) pour les nombres en lettres.
 * Usage: node scripts/generate-number-word-images.cjs onze douze treize ...
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const outDir = path.join(process.cwd(), "public/assets/words/lecture");

const DIGITS = {
  onze: "11",
  douze: "12",
  treize: "13",
  quatorze: "14",
  quinze: "15",
  seize: "16",
};

function numberSvg(word, digit) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
<rect width="800" height="600" fill="#ffffff"/>
<text x="400" y="260" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="180" font-weight="700" fill="#1a1a1a">${digit}</text>
<text x="400" y="390" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="72" font-weight="600" fill="#444444">${word}</text>
</svg>`;
}

async function main() {
  const words = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(DIGITS);
  fs.mkdirSync(outDir, { recursive: true });
  for (const word of words) {
    const digit = DIGITS[word];
    if (!digit) {
      console.warn(`Ignoré (inconnu): ${word}`);
      continue;
    }
    const dest = path.join(outDir, `${word}.webp`);
    await sharp(Buffer.from(numberSvg(word, digit))).webp({ quality: 90 }).toFile(dest);
    console.log(`→ ${path.relative(process.cwd(), dest)}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
