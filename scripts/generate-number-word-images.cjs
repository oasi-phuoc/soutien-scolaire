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

function numberSvg(digit) {
  const width = 800;
  const height = 600;
  const padY = height * 0.1;
  const boxH = height - padY * 2;
  const fontSize = Math.floor(Math.min(boxH * 0.95, width / (digit.length * 0.56)));
  const centerY = height / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
<rect width="${width}" height="${height}" fill="#ffffff"/>
<text x="${width / 2}" y="${centerY}" text-anchor="middle" dominant-baseline="central" font-family="Arial,Helvetica,sans-serif" font-size="${fontSize}" font-weight="700" fill="#1a1a1a">${digit}</text>
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
    await sharp(Buffer.from(numberSvg(digit))).webp({ quality: 90 }).toFile(dest);
    console.log(`→ ${path.relative(process.cwd(), dest)} (${digit})`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
