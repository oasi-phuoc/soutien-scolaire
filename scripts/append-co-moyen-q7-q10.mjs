#!/usr/bin/env node
/**
 * Ajoute q7–q10 aux pools CO moyen scolaire.
 * Usage: node scripts/append-co-moyen-q7-q10.mjs
 */
import fs from "node:fs";

const extra = JSON.parse(fs.readFileSync("scripts/co-moyen-extra-questions.json", "utf8"));

const FILE_MAP = {
  message: "lib/curriculum/content/communication/co-questions-scolaire-moyen-messages.ts",
  annonce: "lib/curriculum/content/communication/co-questions-scolaire-moyen-annonces.ts",
  radio: "lib/curriculum/content/communication/co-questions-scolaire-moyen-radios.ts",
};

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatQuestion(q) {
  const fillALine = q.fillA
    ? `    fillA: [${q.fillA.map((a) => JSON.stringify(a)).join(", ")}],\n`
    : "";
  return `  {
    id: "${q.id}",
    textQ: "${esc(q.textQ)}",
    text: [${q.text.map((t) => `"${esc(t)}"`).join(", ")}],
    textC: ${q.textC},
    img: [${q.img.map((t) => `"${esc(t)}"`).join(", ")}],
    imgC: ${q.imgC},
    fillQ: "${esc(q.fillQ)}",
    fill: "${esc(q.fill)}",
${fillALine}  }`;
}

for (const [key, questions] of Object.entries(extra)) {
  const [category, num] = key.split("-");
  const file = FILE_MAP[category];
  if (!file) throw new Error(`Unknown category for ${key}`);

  let content = fs.readFileSync(file, "utf8");
  const constName = `SCOLAIRE_MOYEN_${category.toUpperCase()}_${num}`;

  // Skip if q7 already present
  const prefix = category === "message" ? "smm" : category === "annonce" ? "sma" : "smr";
  if (content.includes(`${prefix}${num}-q7`)) {
    console.log(`Skip ${key}: q7 already exists`);
    continue;
  }

  const block = questions.map(formatQuestion).join(",\n");
  const re = new RegExp(
    `(export const ${constName} = buildPool\\([^\\[]+\\[[\\s\\S]*?)(\\n\\]\\);)`,
  );
  if (!re.test(content)) throw new Error(`Pool ${constName} not found in ${file}`);

  content = content.replace(re, `$1,\n${block}$2`);
  fs.writeFileSync(file, content);
  console.log(`Patched ${key}: +${questions.length} questions`);
}
