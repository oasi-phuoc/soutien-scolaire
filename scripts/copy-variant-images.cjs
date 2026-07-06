/**
 * Copy expression/images for slugs that differ only by article/determiner.
 * e.g. un-cafe ← cafe, le-cinema ← cinema, des-lunettes ← des-lunettes (already)
 */
const fs = require("fs");
const path = require("path");

const exprDir = path.join(process.cwd(), "public/assets/expression/images");

const VARIANTS = {
  "un-cafe": "cafe",
  "un-cahier": "cahier",
  "un-crayon": "stylo",
  "un-livre": "livre",
  "un-ordinateur": "ordinateur",
  "un-sac": "sac",
  "un-stylo": "stylo",
  "un-telephone": "le-telephone",
  "un-appareil-photo": "appareil-photo",
  "une-bouteille": "leau",
  "une-montre": "montre",
  "une-robe": "robe",
  "une-serviette": "une-serviette",
  "une-veste": "un-manteau",
  "le-cinema": "cinema",
  "le-musee": "musee",
  "le-jardin": "le-parc",
  "le-parc": "le-parc",
  "le-stylo": "stylo",
  "le-telephone": "le-telephone",
  "la-banque": "la-banque",
  "la-bibliotheque": "bibliotheque",
  "la-boulangerie": "la-boulangerie",
  "la-foret": "la-foret",
  "la-pharmacie": "pharmacie",
  "la-piscine": "piscine",
  "leau": "eau",
  "de-leau": "eau",
  "du-jus": "jus",
  "au-concert": "concert",
  "football": "jouer-au-foot",
};

let n = 0;
for (const [dst, src] of Object.entries(VARIANTS)) {
  const srcPath = path.join(exprDir, `${src}.webp`);
  const dstPath = path.join(exprDir, `${dst}.webp`);
  if (!fs.existsSync(srcPath) || fs.existsSync(dstPath)) continue;
  fs.copyFileSync(srcPath, dstPath);
  console.log(`${dst} ← ${src}`);
  n++;
}
console.log(`Copied ${n} variant images.`);
