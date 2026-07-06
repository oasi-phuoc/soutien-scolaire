/** Convert a generated PNG/JPG to 800×600 WebP in expression/images/ */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const [src, slug] = process.argv.slice(2);
if (!src || !slug) {
  console.error("Usage: node scripts/finalize-manga-image.cjs <source.png> <slug>");
  process.exit(1);
}

const dst = path.join(process.cwd(), "public/assets/expression/images", `${slug}.webp`);
sharp(src)
  .resize(800, 600, { fit: "cover", position: "center" })
  .webp({ quality: 85 })
  .toFile(dst)
  .then(() => console.log(`→ ${dst}`))
  .catch((e) => { console.error(e); process.exit(1); });
