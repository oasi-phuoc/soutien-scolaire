/**
 * Sync word illustrations into public/assets/words/img/{slug}.webp
 *
 * Sources (in order):
 * 1. public/vocab/images/** (copy or convert via sharp)
 * 2. Optional Wikimedia Commons thumbnails for priority words still missing
 *
 * Usage:
 *   node scripts/sync-word-images.cjs
 *   node scripts/sync-word-images.cjs --wikimedia   # also fetch missing priority words
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

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

function download(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith("https") ? https : http;
    lib
      .get(url, { headers: { "User-Agent": "soutien-scolaire-sync/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          download(res.headers.location).then(resolve, reject);
          return;
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

function wikimediaThumb(search) {
  const q = encodeURIComponent(search);
  const api =
    `https://commons.wikimedia.org/w/api.php?action=query&generator=search` +
    `&gsrsearch=${q}&gsrnamespace=6&gsrlimit=1&prop=imageinfo&iiprop=url` +
    `&iiurlwidth=400&format=json`;
  return new Promise((resolve, reject) => {
    https
      .get(api, { headers: { "User-Agent": "soutien-scolaire-sync/1.0" } }, (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          try {
            const data = JSON.parse(Buffer.concat(chunks).toString());
            const pages = data.query?.pages ?? {};
            const page = Object.values(pages)[0];
            const info = page?.imageinfo?.[0];
            resolve(info?.thumburl ?? info?.url ?? null);
          } catch (e) {
            reject(e);
          }
        });
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

/** Priority words (L7 SoundPicker) — Wikimedia search queries in French/English */
const WIKIMEDIA_QUERIES = {
  coin: "street corner coin",
  groin: "pig snout groin",
  poing: "fist hand poing",
  foin: "hay bale foin",
  point: "dot point marker",
  pointe: "pencil tip pointe",
  joint: "door hinge joint",
  shampoing: "shampoo bottle",
  parfum: "perfume bottle parfum",
  album: "photo album",
  feu: "campfire feu",
  jeu: "board game jeu",
  fruit: "assorted fruits",
  huit: "number 8 digit",
  bille: "marble ball bille",
  vanille: "vanilla pod",
  chenille: "caterpillar chenille",
  pompier: "firefighter pompier",
  jardinier: "gardener jardinier",
  panier: "wicker basket panier",
  soulier: "leather shoe soulier",
  cerisier: "cherry tree cerisier",
  poirier: "pear tree poirier",
  photo: "camera photograph",
  phare: "lighthouse phare",
  phoque: "seal animal phoque",
  potion: "potion bottle",
  station: "train station gare",
  lotion: "lotion bottle",
};

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

async function syncFromWikimedia(words) {
  let created = 0;
  const failed = [];

  for (const word of words) {
    const s = slug(word);
    const dest = path.join(outDir, `${s}.webp`);
    if (fs.existsSync(dest)) continue;

    const query = WIKIMEDIA_QUERIES[s] ?? WIKIMEDIA_QUERIES[word];
    if (!query) continue;

    try {
      const thumbUrl = await wikimediaThumb(query);
      if (!thumbUrl) {
        failed.push(word);
        continue;
      }
      const buf = await download(thumbUrl);
      await sharp(buf)
        .resize(512, 512, { fit: "inside", withoutEnlargement: true })
        .webp({ quality: 85 })
        .toFile(dest);
      created++;
      console.log(`  wiki   ${word} ← ${thumbUrl.slice(0, 80)}…`);
      await new Promise((r) => setTimeout(r, 300));
    } catch (e) {
      failed.push(word);
      console.warn(`  FAIL   ${word}: ${e.message}`);
    }
  }

  return { created, failed };
}

async function main() {
  const useWikimedia = process.argv.includes("--wikimedia");
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

  let wikiCreated = 0;
  let wikiFailed = [];
  if (useWikimedia) {
    const priority = stillMissing.filter((w) => WIKIMEDIA_QUERIES[slug(w)] || WIKIMEDIA_QUERIES[w]);
    console.log(`\nWikimedia fetch for ${priority.length} priority words…`);
    const result = await syncFromWikimedia(priority);
    wikiCreated = result.created;
    wikiFailed = result.failed;
    console.log(`Wikimedia: +${wikiCreated} created, ${wikiFailed.length} failed`);
  }

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
