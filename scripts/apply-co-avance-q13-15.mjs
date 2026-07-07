#!/usr/bin/env node
/** Insère q13–q15 dans les pools CO avancé scolaire depuis co-avance-q13-15.json */
import fs from "node:fs";
import { isExcludedCeCoQuestion } from "../lib/curriculum/content/communication/ce-co-question-filters.ts";

const DATA = JSON.parse(fs.readFileSync("scripts/co-avance-q13-15.json", "utf8"));

const FILE_MAP = {
  annonce: "lib/curriculum/content/communication/co-questions-scolaire-avance-annonces.ts",
  conversation: "lib/curriculum/content/communication/co-questions-scolaire-avance-conversations.ts",
  radio: "lib/curriculum/content/communication/co-questions-scolaire-avance-radios.ts",
};

function poolKind(slug) {
  if (slug.startsWith("scolaire-annonce-")) return "annonce";
  if (slug.startsWith("scolaire-conversation-")) return "conversation";
  if (slug.startsWith("scolaire-radio-")) return "radio";
  throw new Error(`slug inconnu: ${slug}`);
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function formatBlock(q) {
  const fillA = q.fillA?.length
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
${fillA}  }`;
}

let total = 0;
let excluded = 0;

for (const [slug, questions] of Object.entries(DATA)) {
  if (questions.length !== 3) {
    console.error(`${slug}: attendu 3 questions, trouvé ${questions.length}`);
    process.exit(1);
  }
  for (const q of questions) {
    if (isExcludedCeCoQuestion(q)) {
      console.error(`EXCLU: ${q.id} — ${q.textQ}`);
      excluded++;
    }
  }

  const file = FILE_MAP[poolKind(slug)];
  let content = fs.readFileSync(file, "utf8");
  const poolRe = new RegExp(
    `(buildPool\\("avance", "${slug}", \\[[\\s\\S]*?)(\\n\\]\\);)`,
  );
  if (!poolRe.test(content)) {
    console.error(`Pool introuvable: ${slug} dans ${file}`);
    process.exit(1);
  }
  // Skip if q13 already present
  if (content.includes(`${questions[0].id}`)) {
    console.log(`${slug}: déjà présent, ignoré`);
    continue;
  }
  const blocks = questions.map(formatBlock).join(",\n");
  content = content.replace(poolRe, (match, body, close) => {
    const trimmed = body.replace(/,\s*$/, "");
    return `${trimmed},\n${blocks}${close}`;
  });
  fs.writeFileSync(file, content);
  total += questions.length;
  console.log(`${slug}: +3`);
}

if (excluded > 0) {
  console.error(`${excluded} questions exclues par le filtre — corriger le JSON`);
  process.exit(1);
}

console.log(`\nTotal inséré: ${total} questions`);
