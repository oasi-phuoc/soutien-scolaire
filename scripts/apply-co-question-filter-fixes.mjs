#!/usr/bin/env node
/** Remplace les questions CO exclues par buildPool (noms propres, villes, etc.). */
import fs from "node:fs";

const fixes = JSON.parse(fs.readFileSync("scripts/co-question-filter-fixes.json", "utf8"));

const FILES = [
  "lib/curriculum/content/communication/co-questions-scolaire-moyen-messages.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-moyen-annonces.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-moyen-radios.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-avance-annonces.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-avance-radios.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-avance-conversations.ts",
];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatBlock(id, q) {
  const fillA = q.fillA
    ? `    fillA: [${q.fillA.map((a) => JSON.stringify(a)).join(", ")}],\n`
    : "";
  return `  {
    id: "${id}",
    textQ: "${esc(q.textQ)}",
    text: [${q.text.map((t) => `"${esc(t)}"`).join(", ")}],
    textC: ${q.textC},
    img: [${q.img.map((t) => `"${esc(t)}"`).join(", ")}],
    imgC: ${q.imgC},
    fillQ: "${esc(q.fillQ)}",
    fill: "${esc(q.fill)}",
${fillA}  }`;
}

for (const file of FILES) {
  let content = fs.readFileSync(file, "utf8");
  let patched = 0;
  for (const [id, q] of Object.entries(fixes)) {
    const re = new RegExp(
      `  \\{\\n    id: "${id}",[\\s\\S]*?\\n  \\},?`,
      "m",
    );
    if (!re.test(content)) continue;
    content = content.replace(re, formatBlock(id, q) + ",");
    patched++;
  }
  fs.writeFileSync(file, content);
  console.log(`${file}: ${patched} questions corrigées`);
}
