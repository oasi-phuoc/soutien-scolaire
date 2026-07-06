/**
 * Migrate word images:
 * 1. vocab-temp → lecture (with -1, -2 suffix on duplicate names)
 * 2. Category vocab images (fruits, légumes, transport, corps, sport, vêtements,
 *    accessoires, couleurs, matières tissu, boulangerie, paysage) → lecture (replace on conflict)
 * 3. Resize all lecture images to 800×600 white background
 * 4. Delete all images from public/vocab/images/V*
 * 5. Move V1–V10 folders to public/assets/words/vocab/
 * 6. Rename public/assets/words/img → public/assets/words/lecture
 * 7. Remove empty vocab-temp and public/vocab/images
 *
 * Usage: node scripts/migrate-lecture-vocab-images.cjs
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const imgDir = path.join(root, "public/assets/words/img");
const lectureDir = path.join(root, "public/assets/words/lecture");
const vocabTempDir = path.join(root, "public/vocab-temp");
const vocabImagesDir = path.join(root, "public/vocab/images");
const vocabDestDir = path.join(root, "public/assets/words/vocab");
const francaisDir = path.join(root, "lib/curriculum/content/francais");

const CATEGORY_THEME_FILES = [
  "vocab-v3-sport.ts",
  "vocab-v6-vetements.ts",
  "vocab-v6-accessoires.ts",
  "vocab-v6-couleurs.ts",
  "vocab-v6-matieres.ts",
  "vocab-v7-fruits.ts",
  "vocab-v7-legumes.ts",
  "vocab-v7-boulangerie.ts",
  "vocab-v8-corps.ts",
  "vocab-v9-transport.ts",
  "vocab-v9-paysage.ts",
];

const IMG_RE = /\.(webp|png|svg|jpe?g)$/i;

let sharp;
try {
  sharp = require("sharp");
} catch {
  sharp = require(path.join(root, "node_modules/next/node_modules/sharp"));
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function basename(file) {
  return file.replace(IMG_RE, "");
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => IMG_RE.test(f));
}

function uniqueDestPath(dir, filename) {
  const ext = path.extname(filename);
  const base = basename(filename);
  let candidate = `${base}${ext}`;
  let n = 1;
  while (fs.existsSync(path.join(dir, candidate))) {
    candidate = `${base}-${n}${ext}`;
    n++;
  }
  return path.join(dir, candidate);
}

/** Copy vocab-temp → img with dedup suffix (keep all versions). */
function moveVocabTemp() {
  if (!fs.existsSync(vocabTempDir)) return 0;
  let n = 0;
  for (const file of listImages(vocabTempDir)) {
    const dest = uniqueDestPath(imgDir, file);
    fs.copyFileSync(path.join(vocabTempDir, file), dest);
    fs.unlinkSync(path.join(vocabTempDir, file));
    n++;
  }
  // remove non-image leftovers except .md/.txt
  for (const f of fs.readdirSync(vocabTempDir)) {
    const p = path.join(vocabTempDir, f);
    if (fs.statSync(p).isFile() && !/\.(md|txt)$/i.test(f)) {
      fs.unlinkSync(p);
    }
  }
  if (fs.readdirSync(vocabTempDir).length === 0) {
    fs.rmdirSync(vocabTempDir);
    console.log("Removed empty vocab-temp/");
  }
  return n;
}

/** Parse category theme files → Set of source file paths to move. */
function collectCategoryImageSources() {
  const sources = new Map(); // absPath → destBasename.webp

  for (const file of CATEGORY_THEME_FILES) {
    const src = fs.readFileSync(path.join(francaisDir, file), "utf8");
    const sectionMatch = src.match(/section:\s*"(V\d+)"/);
    const defaultSection = sectionMatch ? sectionMatch[1] : "V7";

    for (const m of src.matchAll(/image:\s*"([^"]+)"/g)) {
      const ref = m[1];
      let srcPath;
      let destName;

      if (ref.startsWith("/vocab/images/")) {
        const rel = ref.replace("/vocab/images/", "");
        srcPath = path.join(vocabImagesDir, rel);
        destName = path.basename(rel);
      } else if (ref.startsWith("/assets/words/")) {
        continue;
      } else {
        srcPath = path.join(vocabImagesDir, defaultSection, ref);
        destName = ref;
      }

      if (fs.existsSync(srcPath)) {
        sources.set(srcPath, destName);
      }
    }
  }

  return sources;
}

/** Move category vocab images → img, replacing on name conflict. */
function moveCategoryVocab(sources) {
  let moved = 0;
  let replaced = 0;
  for (const [srcPath, destName] of sources) {
    const destPath = path.join(imgDir, destName);
    if (fs.existsSync(destPath)) {
      fs.unlinkSync(destPath);
      replaced++;
    }
    ensureDir(imgDir);
    fs.copyFileSync(srcPath, destPath);
    moved++;
  }
  return { moved, replaced };
}

/** Resize / convert every image in imgDir to 800×600 webp white background. */
async function resizeAllLecture() {
  const files = listImages(imgDir);
  let n = 0;
  for (const file of files) {
    const input = path.join(imgDir, file);
    const outBase = basename(file);
    const tmp = path.join(imgDir, `.tmp-${outBase}.webp`);
    await sharp(input)
      .resize(800, 600, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 1 },
      })
      .webp({ quality: 85 })
      .toFile(tmp);
    fs.renameSync(tmp, path.join(imgDir, `${outBase}.webp`));
    if (file !== `${outBase}.webp`) fs.unlinkSync(input);
    n++;
  }
  return n;
}

/** Delete all image files inside V1–V10. */
function deleteVocabImages() {
  let n = 0;
  if (!fs.existsSync(vocabImagesDir)) return n;
  for (const folder of fs.readdirSync(vocabImagesDir)) {
    const dir = path.join(vocabImagesDir, folder);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const file of listImages(dir)) {
      fs.unlinkSync(path.join(dir, file));
      n++;
    }
  }
  return n;
}

/** Move V1–V10 folders to assets/words/vocab/. */
function copyDirSync(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDirSync(s, d);
    else fs.copyFileSync(s, d);
  }
}

function rmDirSync(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) rmDirSync(p);
    else fs.unlinkSync(p);
  }
  fs.rmdirSync(dir);
}

function moveVocabFolders() {
  ensureDir(vocabDestDir);
  let n = 0;
  if (!fs.existsSync(vocabImagesDir)) return n;
  for (const folder of fs.readdirSync(vocabImagesDir).sort()) {
    if (!/^V\d+$/.test(folder)) continue;
    const src = path.join(vocabImagesDir, folder);
    if (!fs.statSync(src).isDirectory()) continue;
    const dest = path.join(vocabDestDir, folder);
    if (fs.existsSync(dest)) rmDirSync(dest);
    copyDirSync(src, dest);
    rmDirSync(src);
    n++;
  }
  // remove public/vocab/images if empty
  if (fs.existsSync(vocabImagesDir) && fs.readdirSync(vocabImagesDir).length === 0) {
    fs.rmdirSync(vocabImagesDir);
    const vocabRoot = path.join(root, "public/vocab");
    if (fs.existsSync(vocabRoot) && fs.readdirSync(vocabRoot).length === 0) {
      fs.rmdirSync(vocabRoot);
    }
  }
  return n;
}

function renameImgToLecture() {
  if (fs.existsSync(lectureDir)) {
    console.log("lecture/ already exists — skipping rename");
    return;
  }
  copyDirSync(imgDir, lectureDir);
  rmDirSync(imgDir);
}

async function main() {
  ensureDir(imgDir);

  const tempN = moveVocabTemp();
  console.log(`vocab-temp → img: ${tempN} files`);

  const sources = collectCategoryImageSources();
  console.log(`Category image sources found on disk: ${sources.size}`);
  const { moved, replaced } = moveCategoryVocab(sources);
  console.log(`Category vocab → img: ${moved} moved, ${replaced} replaced`);

  const resized = await resizeAllLecture();
  console.log(`Resized to 800×600: ${resized} files`);

  const deleted = deleteVocabImages();
  console.log(`Deleted from vocab/images: ${deleted} files`);

  const folders = moveVocabFolders();
  console.log(`Moved vocab folders: ${folders}`);

  renameImgToLecture();
  console.log("Renamed img/ → lecture/");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
