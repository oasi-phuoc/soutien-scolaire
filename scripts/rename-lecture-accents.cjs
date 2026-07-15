/**
 * Renomme les assets lecture + sons avec accents orthographiques,
 * met à jour les références dans le code source.
 *
 * Usage: node scripts/rename-lecture-accents.cjs
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();

/** Ancien slug (sans accents) → nouveau nom de fichier (avec accents). */
const RENAMES = {
  accordeon: "accordéon",
  "activite-mentale": "activité-mentale",
  araignee: "araignée",
  asteroide: "astéroïde",
  bebe: "bébé",
  beret: "béret",
  boite: "boîte",
  "brosse-a-dents": "brosse-à-dents",
  cafe: "café",
  calecon: "caleçon",
  cameleon: "caméléon",
  carre: "carré",
  celeri: "céleri",
  chateau: "château",
  "chateau-de-sable": "château-de-sable",
  chataignier: "châtaignier",
  cheminee: "cheminée",
  chene: "chêne",
  chevre: "chèvre",
  chronometre: "chronomètre",
  chrysantheme: "chrysanthème",
  clementine: "clémentine",
  coeur: "cœur",
  comete: "comète",
  cone: "cône",
  comptoire: "comptoir",
  "corde-a-sauter": "corde-à-sauter",
  crepe: "crêpe",
  cypres: "cyprès",
  de: "dé",
  deodorant: "déodorant",
  desert: "désert",
  echalote: "échalote",
  echarpe: "écharpe",
  echecs: "échecs",
  echelle: "échelle",
  ecouteurs: "écouteurs",
  ecureuil: "écureuil",
  elastique: "élastique",
  elephant: "éléphant",
  epaule: "épaule",
  epinard: "épinard",
  eponge: "éponge",
  equerre: "équerre",
  erable: "érable",
  etang: "étang",
  "etoile-de-mer": "étoile-de-mer",
  fleche: "flèche",
  flute: "flûte",
  foret: "forêt",
  fusee: "fusée",
  gateau: "gâteau",
  guepe: "guêpe",
  haltere: "haltère",
  halteres: "haltères",
  helicoptere: "hélicoptère",
  herisson: "hérisson",
  hetre: "hêtre",
  huitre: "huître",
  hygiene: "hygiène",
  ile: "île",
  kaleidoscope: "kaléidoscope",
  legging: "légging",
  legume: "légume",
  lezard: "lézard",
  macon: "maçon",
  mais: "maïs",
  mecanicien: "mécanicien",
  medaille: "médaille",
  meduse: "méduse",
  mesange: "mésange",
  metro: "métro",
  montgolfiere: "montgolfière",
  mure: "mûre",
  nenuphar: "nénuphar",
  "noeud-papillon": "nœud-papillon",
  oeil: "œil",
  oeillet: "œillet",
  oeuf: "œuf",
  orchidee: "orchidée",
  paquerette: "pâquerette",
  pasteque: "pastèque",
  pates: "pâtes",
  "patins-a-roulettes": "patins-à-roulettes",
  peche: "pêche",
  pecheur: "pêcheur",
  pelican: "pélican",
  planete: "planète",
  "porte-cles": "porte-clés",
  poupee: "poupée",
  randonnee: "randonnée",
  rateau: "râteau",
  refrigerateur: "réfrigérateur",
  regle: "règle",
  reveil: "réveil",
  riviere: "rivière",
  "seche-cheveux": "sèche-cheveux",
  sequoia: "séquoia",
  sphere: "sphère",
  telecommande: "télécommande",
  telepherique: "téléphérique",
  telephone: "téléphone",
  telescope: "télescope",
  television: "télévision",
  tempete: "tempête",
  tete: "tête",
  the: "thé",
  "the-glace": "thé-glacé",
  trophee: "trophée",
  vallee: "vallée",
  velo: "vélo",
  veterinaire: "vétérinaire",
  zebre: "zèbre",
};

const ASSET_DIRS = [
  "public/assets/words/lecture",
  "public/assets/words/son_f/mots",
  "public/assets/words/son_m/mots",
];

function renameAssets() {
  let renamed = 0;
  let skipped = 0;
  for (const rel of ASSET_DIRS) {
    const dir = path.join(root, rel);
    if (!fs.existsSync(dir)) continue;
    for (const [oldBase, newBase] of Object.entries(RENAMES)) {
      for (const ext of [".webp", ".mp3"]) {
        const oldPath = path.join(dir, oldBase + ext);
        const newPath = path.join(dir, newBase + ext);
        if (!fs.existsSync(oldPath)) {
          if (fs.existsSync(newPath)) skipped++;
          continue;
        }
        if (fs.existsSync(newPath)) {
          fs.unlinkSync(oldPath);
          console.log(`  removed duplicate ${path.relative(root, oldPath)} (${path.relative(root, newPath)} exists)`);
          continue;
        }
        fs.renameSync(oldPath, newPath);
        console.log(`  ${path.relative(root, oldPath)} → ${path.relative(root, newPath)}`);
        renamed++;
      }
    }
  }
  console.log(`Assets: ${renamed} renamed, ${skipped} already accented`);
}

function replaceInFile(filePath, replacements, { labelOnly = false, pathsOnly = false } = {}) {
  if (!fs.existsSync(filePath)) return 0;
  let content = fs.readFileSync(filePath, "utf8");
  let count = 0;
  for (const [oldSlug, newSlug] of replacements) {
    const rules = [];
    if (!labelOnly) {
      rules.push(
        [`/assets/words/lecture/${oldSlug}.webp`, `/assets/words/lecture/${newSlug}.webp`],
        [`/assets/words/son_f/mots/${oldSlug}.mp3`, `/assets/words/son_f/mots/${newSlug}.mp3`],
        [`/assets/words/son_m/mots/${oldSlug}.mp3`, `/assets/words/son_m/mots/${newSlug}.mp3`],
      );
    }
    if (!pathsOnly) {
      rules.push(
        [`"label": "${oldSlug}"`, `"label": "${newSlug}"`],
        [`label: "${oldSlug}"`, `label: "${newSlug}"`],
        [`"${oldSlug}",`, `"${newSlug}",`],
        [`"${oldSlug}"`, `"${newSlug}"`],
      );
    }
    for (const [from, to] of rules) {
      const before = content;
      content = content.split(from).join(to);
      if (content !== before) count++;
    }
  }
  if (count > 0) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`  updated ${path.relative(root, filePath)} (${count} patterns)`);
  }
  return count;
}

function updateSourceFiles() {
  const pairs = Object.entries(RENAMES);
  // « de » → « dé » : fichier seulement, pas les labels/texte (trop ambigu).
  const labelPairs = pairs.filter(([old]) => old !== "de");

  replaceInFile(path.join(root, "lib/curriculum/word-pool.ts"), labelPairs);
  replaceInFile(path.join(root, "lib/curriculum/lecture-image-word-items.json"), labelPairs);
  replaceInFile(path.join(root, "lib/curriculum/grapheme-word-pools-data.json"), labelPairs);
  replaceInFile(path.join(root, "components/communication/ComprehensionEcritRunner.tsx"), pairs, { pathsOnly: true });
  replaceInFile(path.join(root, "lib/curriculum/content/francais/vocab-v9-transport.ts"), pairs, { pathsOnly: true });
  replaceInFile(path.join(root, "ref/manga-generation-manifest.json"), labelPairs);
  replaceInFile(path.join(root, "public/assets/words/lecture-2/_slugs-945.json"), labelPairs);
}

function main() {
  console.log("Renaming asset files…");
  renameAssets();
  console.log("Updating source references…");
  updateSourceFiles();
  console.log("Done. Run: node scripts/generate-word-image-index.cjs && node scripts/generate-offline-manifest.cjs");
}

main();
