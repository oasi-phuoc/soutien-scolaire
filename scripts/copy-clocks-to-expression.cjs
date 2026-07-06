/** Copy horloge-* and prix-* from assets/words/img to expression/images/ */
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const srcDir = path.join(root, "public/assets/words/img");
const dstDir = path.join(root, "public/assets/expression/images");

let n = 0;
for (const f of fs.readdirSync(srcDir)) {
  if (!/^(horloge-|prix-).*\.webp$/i.test(f)) continue;
  fs.copyFileSync(path.join(srcDir, f), path.join(dstDir, f));
  n++;
}
console.log(`Copied ${n} clock/price images → expression/images/`);
