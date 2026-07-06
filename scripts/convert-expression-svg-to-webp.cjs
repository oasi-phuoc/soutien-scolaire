/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const ROOT = path.resolve(__dirname, "..");
const EXPRESSION_DIR = path.join(ROOT, "public", "expression");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full));
    else if (entry.isFile() && entry.name.endsWith(".svg")) files.push(full);
  }
  return files;
}

async function convertOne(svgPath) {
  const webpPath = svgPath.replace(/\.svg$/, ".webp");
  const svg = fs.readFileSync(svgPath);
  await sharp(svg, { density: 150 })
    .resize(800, 600, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 85 })
    .toFile(webpPath);
  fs.unlinkSync(svgPath);
}

async function main() {
  if (!fs.existsSync(EXPRESSION_DIR)) {
    console.log("No public/assets/expression directory found.");
    return;
  }
  const svgs = walk(EXPRESSION_DIR);
  console.log(`Converting ${svgs.length} SVG files to WebP…`);
  let done = 0;
  const batchSize = 50;
  for (let i = 0; i < svgs.length; i += batchSize) {
    const batch = svgs.slice(i, i + batchSize);
    await Promise.all(batch.map(convertOne));
    done += batch.length;
    if (done % 200 === 0 || done === svgs.length) {
      console.log(`  ${done}/${svgs.length}`);
    }
  }
  console.log(`Done — ${svgs.length} WebP files written, SVG removed.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
