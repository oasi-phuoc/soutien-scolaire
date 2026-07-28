/* eslint-disable @typescript-eslint/no-require-imports */
/** Convert a generated image to 800×600 WebP in expression/images/temps-2/ */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const [src, outName] = process.argv.slice(2);
if (!src || !outName) {
  console.error("Usage: node scripts/finalize-temps2-image.cjs <source> <outName.webp>");
  process.exit(1);
}

const dstDir = path.join(process.cwd(), "public/assets/expression/images/temps-2");
fs.mkdirSync(dstDir, { recursive: true });
const dst = path.join(dstDir, outName);

sharp(src)
  .resize(800, 600, { fit: "cover", position: "center" })
  .webp({ quality: 85 })
  .toFile(dst)
  .then(() => console.log(`→ ${dst}`))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
