/**
 * Copy existing expression/images files for alias targets to fill missing slugs.
 * Usage: node scripts/copy-alias-images.cjs
 */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const exprDir = path.join(root, "public/assets/expression/images");
const aliases = JSON.parse(
  fs.readFileSync("lib/curriculum/content/communication/word-image-aliases.json", "utf8"),
);
delete aliases._comment;

const manifest = JSON.parse(fs.readFileSync("ref/manga-generation-manifest.json", "utf8"));
let copied = 0;

for (const { slug } of manifest) {
  const target = aliases[slug];
  if (!target) continue;
  const src = path.join(exprDir, `${target}.webp`);
  const dst = path.join(exprDir, `${slug}.webp`);
  if (!fs.existsSync(src) || fs.existsSync(dst)) continue;
  fs.copyFileSync(src, dst);
  copied++;
  console.log(`  ${slug} ← ${target}`);
}
console.log(`Copied ${copied} alias images.`);
