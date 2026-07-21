/**
 * Convertit les illustrations IA (artifacts) vers public/assets/words/temps/
 * au format habituel lecture : WebP 800×600, fond blanc.
 *
 * Prérequis : images générées (GenerateImage) dans /opt/cursor/artifacts/assets/
 * avec les noms de fichier listés ci-dessous.
 *
 * Usage: node scripts/generate-wxyz-temps-images.cjs
 *
 * Les nombres (six, dix, deux, zéro) sont régénérés en chiffre noir sur fond blanc
 * (même convention que douze/quinze dans words/lecture).
 */
const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch {
  sharp = require(path.join(process.cwd(), "node_modules/next/node_modules/sharp"));
}

const SRC = "/opt/cursor/artifacts/assets";
const OUT = path.join(process.cwd(), "public/assets/words/temps");
const W = 800;
const H = 600;

/** artifact filename → dest filename (accents) */
const RENAME = {
  "hawai.webp": "hawaï.webp",
  "hyene.webp": "hyène.webp",
  "trapeze.webp": "trapèze.webp",
};

const DIGITS = { six: "6", dix: "10", deux: "2", zéro: "0" };

function numberSvg(digit) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
<rect width="${W}" height="${H}" fill="#ffffff"/>
<text x="400" y="300" text-anchor="middle" dominant-baseline="central" font-family="Arial,Helvetica,sans-serif" font-size="280" font-weight="700" fill="#1a1a1a">${digit}</text>
</svg>`;
}

async function toFlashcard(srcPath, destPath) {
  await sharp(srcPath)
    .resize(W, H, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .flatten({ background: "#ffffff" })
    .webp({ quality: 90 })
    .toFile(destPath);
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });

  for (const [word, digit] of Object.entries(DIGITS)) {
    const dest = path.join(OUT, `${word}.webp`);
    await sharp(Buffer.from(numberSvg(digit))).webp({ quality: 90 }).toFile(dest);
    console.log("number →", word);
  }

  if (!fs.existsSync(SRC)) {
    console.warn(`Pas d'artifacts dans ${SRC} — seuls les nombres ont été écrits.`);
    return;
  }

  const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".webp"));
  let n = 0;
  for (const f of files) {
    const destName = RENAME[f] || f;
    await toFlashcard(path.join(SRC, f), path.join(OUT, destName));
    console.log("→", destName);
    n++;
  }
  console.log(`Done: ${n} realistic + ${Object.keys(DIGITS).length} numbers → ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
