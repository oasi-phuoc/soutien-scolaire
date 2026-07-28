/**
 * Convertit des PNG/WebP générés vers public/assets/expression/images/temps-2/
 * Format cible : WebP 800×600 qualité 85.
 *
 * Usage:
 *   node scripts/finalize-temps2-images.cjs <srcDir> [globOrList]
 *   node scripts/finalize-temps2-images.cjs /opt/cursor/artifacts
 *   node scripts/finalize-temps2-images.cjs /tmp/gen-batch "1 (1).png"
 */
const fs = require("fs");
const path = require("path");

let sharp;
try {
  sharp = require("sharp");
} catch {
  sharp = require(path.join(process.cwd(), "node_modules/next/node_modules/sharp"));
}

const OUT = path.join(process.cwd(), "public/assets/expression/images/temps-2");
const W = 800;
const H = 600;

const srcDir = process.argv[2];
if (!srcDir) {
  console.error("Usage: node scripts/finalize-temps2-images.cjs <srcDir>");
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });

function stemOf(name) {
  // Accept "1 (1).png", "1_1.png", "scene-001-1-(1).webp" → prefer original naming via map
  return name.replace(/\.(png|jpe?g|webp)$/i, "");
}

async function convertOne(src, destName) {
  const dest = path.join(OUT, destName.endsWith(".webp") ? destName : `${destName}.webp`);
  await sharp(src)
    .resize(W, H, { fit: "cover", position: "centre" })
    .webp({ quality: 85 })
    .toFile(dest);
  return dest;
}

(async () => {
  const filter = process.argv[3];
  let files = fs.readdirSync(srcDir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
  if (filter) files = files.filter((f) => f.includes(filter) || stemOf(f) === filter);
  // Optional mapping file: srcStem -> "N (k).webp"
  const mapPath = path.join(OUT, "_name_map.json");
  const map = fs.existsSync(mapPath) ? JSON.parse(fs.readFileSync(mapPath, "utf8")) : {};

  let n = 0;
  for (const f of files) {
    const stem = stemOf(f);
    const destName = map[stem] || map[f] || `${stem.replace(/_/g, " ")}.webp`;
    // normalize: if already looks like "1 (1).webp" keep
    const finalName = destName.endsWith(".webp") ? destName : `${destName}.webp`;
    const dest = await convertOne(path.join(srcDir, f), finalName);
    console.log("→", path.basename(dest));
    n++;
  }
  console.log(`Done: ${n} → ${OUT}`);
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
