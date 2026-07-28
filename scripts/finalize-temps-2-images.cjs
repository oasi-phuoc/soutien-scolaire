/**
 * Convert generated raw images → public/assets/expression/images/temps-2/*.webp
 * Accepts names: "temps2-1-1.webp", "1 (1).png", "1-1.webp"
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const RAW = process.argv[2] || "/opt/cursor/artifacts/assets";
const OUT = path.join(process.cwd(), "public/assets/expression/images/temps-2");
const ONLY = process.argv[3] ? new RegExp(process.argv[3]) : /^temps2-|^(\d+)[-\s_(]/;

function toDestName(name) {
  const base = path.basename(name, path.extname(name));
  let m = base.match(/^temps2-(\d+)-(\d+)$/i);
  if (m) return `${m[1]} (${m[2]}).webp`;
  m = base.match(/^(\d+)[-\s_]+(\d+)$/);
  if (m) return `${m[1]} (${m[2]}).webp`;
  m = base.match(/^(\d+)\s*\((\d+)\)$/);
  if (m) return `${m[1]} (${m[2]}).webp`;
  return null;
}

async function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const files = fs.readdirSync(RAW).filter((f) => /\.(png|jpe?g|webp)$/i.test(f) && ONLY.test(f));
  let n = 0;
  for (const f of files) {
    const destName = toDestName(f);
    if (!destName) continue;
    const dest = path.join(OUT, destName);
    await sharp(path.join(RAW, f))
      .resize(800, 600, { fit: "cover", position: "centre" })
      .webp({ quality: 85 })
      .toFile(dest);
    console.log("→", destName);
    n++;
  }
  console.log(`Done: ${n} → ${OUT}`);
}
main().catch((e) => { console.error(e); process.exit(1); });
