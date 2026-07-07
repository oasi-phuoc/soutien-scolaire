#!/usr/bin/env node
/** Restaure les questions q11 et q12 supprimées des pools CO avancé scolaire. */
import { execSync } from "node:child_process";
import fs from "node:fs";

const FILES = [
  "lib/curriculum/content/communication/co-questions-scolaire-avance-annonces.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-avance-radios.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-avance-conversations.ts",
];

const PARENT = "d5cf37ba^";

function extractQ11Q12Blocks(content) {
  const blocks = [];
  const re = /\n(?:  \/\/[^\n]*\n)?  \{\n    id: "sa[a-z]\d+-q1[12]",[\s\S]*?\n  \},?/g;
  let m;
  while ((m = re.exec(content)) !== null) {
    blocks.push(m[0]);
  }
  return blocks;
}

function poolKeys(content) {
  return [...content.matchAll(/buildPool\("avance", "([^"]+)"/g)].map((m) => m[1]);
}

for (const file of FILES) {
  const current = fs.readFileSync(file, "utf8");
  const old = execSync(`git show ${PARENT}:${file}`, { encoding: "utf8" });

  const oldBlocks = extractQ11Q12Blocks(old);
  const keys = poolKeys(current);

  if (oldBlocks.length !== keys.length * 2) {
    console.error(`${file}: attendu ${keys.length * 2} blocs q11/q12, trouvé ${oldBlocks.length}`);
    process.exit(1);
  }

  let blockIdx = 0;
  let updated = current;
  let insertions = 0;

  // Insert q11+q12 before each pool's closing `]);`
  updated = updated.replace(
    /(export const SCOLAIRE_[\s\S]*?buildPool\("avance", "[^"]+", \[[\s\S]*?)(\n\]\);)/g,
    (match, body, close) => {
      const q11 = oldBlocks[blockIdx++];
      const q12 = oldBlocks[blockIdx++];
      insertions++;
      return `${body}${q11}${q12}${close}`;
    },
  );

  const before = (current.match(/id: "/g) ?? []).length;
  const after = (updated.match(/id: "/g) ?? []).length;
  fs.writeFileSync(file, updated);
  console.log(`${file}: ${before} → ${after} questions (+${after - before}, ${insertions} pools)`);
}
