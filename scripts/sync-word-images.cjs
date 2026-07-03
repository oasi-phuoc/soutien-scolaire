/**
 * Sync word illustrations into public/assets/words/img/{slug}.webp
 *
 * Source: public/vocab/images/** (copy or convert via sharp)
 *
 * Usage:
 *   node scripts/sync-word-images.cjs
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outDir = path.join(root, "public/assets/words/img");
const vocabDir = path.join(root, "public/vocab/images");

let sharp;
try {
  sharp = require("sharp");
} catch {
  try {
    sharp = require(path.join(root, "node_modules/next/node_modules/sharp"));
  } catch {
    console.error("sharp is required — install via npm or use Next's bundled copy.");
    process.exit(1);
  }
}

function slug(word) {
  return word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\u0153/g, "oe")
    .replace(/\u0152/g, "oe")
    .replace(/\u00e6/g, "ae")
    .replace(/\u00c6/g, "ae")
    .toLowerCase();
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function collectLabels() {
  const pool = read("lib/curriculum/word-pool.ts");
  const labels = [...pool.matchAll(/label:\s*"([^"]+)"/g)].map((m) => m[1]);

  const lecture = read("lib/curriculum/lecture-data.ts");
  const block = lecture.slice(lecture.indexOf("export const COMPLEX_SOUND_LESSONS"));
  for (const m of block.matchAll(/\[\s*"[^"]+",\s*\[([^\]]+)\]/g)) {
    for (const w of m[1].matchAll(/"([^"]+)"/g)) labels.push(w[1]);
  }

  // Example words from complexSoundLesson calls
  for (const m of block.matchAll(/complexSoundLesson\([^)]+,\s*"([^"]+)"\s*\)/g)) {
    labels.push(m[1]);
  }

  return [...new Set(labels)];
}

function buildVocabIndex() {
  const index = new Map();
  if (!fs.existsSync(vocabDir)) return index;
  for (const folder of fs.readdirSync(vocabDir)) {
    const dir = path.join(vocabDir, folder);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!/\.(webp|png|svg|jpe?g)$/i.test(file)) continue;
      const base = file.replace(/\.(webp|png|svg|jpe?g)$/i, "");
      if (!index.has(base)) index.set(base, path.join(dir, file));
    }
  }
  return index;
}

function findVocabSource(word, vocabIndex) {
  const s = slug(word);
  return vocabIndex.get(s) ?? vocabIndex.get(s.replace(/-/g, ""));
}

async function toWebp(src, dest) {
  const ext = path.extname(src).toLowerCase();
  if (ext === ".webp") {
    fs.copyFileSync(src, dest);
    return;
  }
  await sharp(src)
    .resize(512, 512, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(dest);
}

async function syncFromVocab(words, vocabIndex) {
  let created = 0;
  let skipped = 0;
  const stillMissing = [];

  for (const word of words) {
    const s = slug(word);
    const dest = path.join(outDir, `${s}.webp`);
    if (fs.existsSync(dest)) {
      skipped++;
      continue;
    }
    const src = findVocabSource(word, vocabIndex);
    if (!src) {
      stillMissing.push(word);
      continue;
    }
    await toWebp(src, dest);
    created++;
    console.log(`  vocab  ${word} ← ${path.relative(root, src)}`);
  }

  return { created, skipped, stillMissing };
}

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const words = collectLabels();
  const vocabIndex = buildVocabIndex();
  const existingBefore = fs.readdirSync(outDir).filter((f) => f.endsWith(".webp")).length;

  console.log(`Words to check: ${words.length}`);
  console.log(`Existing images: ${existingBefore}`);
  console.log(`Vocab entries indexed: ${vocabIndex.size}`);
  console.log("");

  const { created: vocabCreated, skipped, stillMissing } = await syncFromVocab(words, vocabIndex);
  console.log(`\nVocab sync: +${vocabCreated} created, ${skipped} already present, ${stillMissing.length} still missing`);

  const existingAfter = fs.readdirSync(outDir).filter((f) => f.endsWith(".webp")).length;
  const finalMissing = words.filter((w) => !fs.existsSync(path.join(outDir, `${slug(w)}.webp`)));

  console.log(`\nTotal images: ${existingBefore} → ${existingAfter} (+${existingAfter - existingBefore})`);
  console.log(`Still missing: ${finalMissing.length}`);
  if (finalMissing.length > 0 && finalMissing.length <= 50) {
    console.log(finalMissing.join(", "));
  } else if (finalMissing.length > 50) {
    console.log(finalMissing.slice(0, 50).join(", ") + "…");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
