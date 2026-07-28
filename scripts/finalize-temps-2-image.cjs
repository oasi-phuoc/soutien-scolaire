/**
 * Convert generated PNG/JPG to 800×600 WebP in expression/images/temps-2/
 * Usage: node scripts/finalize-temps-2-image.cjs <source.png> "<out name without path>"
 * Example: node scripts/finalize-temps-2-image.cjs /opt/cursor/artifacts/assets/1\ \(1\).png "1 (1).webp"
 */
const fs = require("fs");
const path = require("path");
let sharp;
try {
  sharp = require("sharp");
} catch {
  sharp = require(path.join(process.cwd(), "node_modules/next/node_modules/sharp"));
}

const [src, outName] = process.argv.slice(2);
if (!src || !outName) {
  console.error("Usage: node scripts/finalize-temps-2-image.cjs <source> <outName.webp>");
  process.exit(1);
}
const dst = path.join(process.cwd(), "public/assets/expression/images/temps-2", outName);
fs.mkdirSync(path.dirname(dst), { recursive: true });
sharp(src)
  .resize(800, 600, { fit: "cover", position: "center" })
  .webp({ quality: 85 })
  .toFile(dst)
  .then(() => console.log(`→ ${dst}`))
  .catch((e) => { console.error(e); process.exit(1); });
