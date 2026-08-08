#!/usr/bin/env node
/**
 * Insert missing transInstruction fields into grammaire lesson files.
 * Usage: node scripts/fill-grammaire-trans.cjs [file1.ts file2.ts ...]
 *        node scripts/fill-grammaire-trans.cjs --all
 */
const fs = require("fs");
const path = require("path");

const BASE = path.join(__dirname, "../lib/curriculum/content/francais");
const TRANS_PATH = path.join(__dirname, "grammaire-translations.json");
const LOOKAHEAD = 300;

const DEFAULT_FILES = [
  "grammaire-g1.1-les-pronoms-personnels.ts", "grammaire-g1.2-les-verbes-etre-et-avoir.ts", "grammaire-g4.1.ts", "grammaire-r1.4.ts",
  "grammaire-g1.5-les-verbes-en-er-au-present.ts", "grammaire-g5.1.ts", "grammaire-r1.7.ts", "grammaire-g5.2.ts",
  "grammaire-g1.4.ts", "grammaire-g4.2-les-verbes-de-mouvement.ts", "grammaire-g7.1-les-prepositions-de-lieu.ts", "grammaire-g9.1-le-futur-proche.ts",
  "grammaire-r4.12.ts", "grammaire-g16.8-le-conditionnel-de-politesse.ts", "grammaire-g16.1-l-imperatif.ts", "grammaire-g8.5-les-verbes-reguliers-a-l-imparfait.ts",
  "grammaire-g9.2-les-verbes-reguliers-au-futur-simple.ts", "grammaire-g8.6-passe-recent-et-present-continu.ts", "grammaire-g8.1-passe-compose-avec-avoir.ts", "grammaire-g8.2-passe-compose-avec-etre.ts",
  "grammaire-g8.1-negation-au-passe-compose.ts", "grammaire-g8.3.ts", "grammaire-g8.4.ts",
  "grammaire-g8.5-les-verbes-irreguliers-a-l-imparfait.ts", "grammaire-g16.8-le-conditionnel.ts", "grammaire-g8.7-passe-compose-ou-imparfait.ts",
  "grammaire-g16.3-le-gerondif.ts", "grammaire-g16.4-le-subjonctif.ts", "grammaire-g9.2-les-verbes-irreguliers-au-futur-simple.ts",
  "grammaire-g9.3.ts", "grammaire-g9.4.ts",
];

const translations = JSON.parse(fs.readFileSync(TRANS_PATH, "utf8"));

function escapeForTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function formatTransInstruction(trans) {
  const parts = ["en", "ar", "fa", "ti", "uk"].map(
    (lang) => `${lang}: "${escapeForTs(trans[lang])}"`
  );
  return `      transInstruction: { ${parts.join(", ")} },`;
}

function getIndent(line) {
  const m = line.match(/^(\s*)/);
  return m ? m[1] : "";
}

function processFile(filename) {
  const filePath = path.join(BASE, filename);
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filename);
    return { file: filename, added: 0, missing: [] };
  }

  const content = fs.readFileSync(filePath, "utf8");
  const re = /^(\s*)instruction:\s*"((?:[^"\\]|\\.)*)",?\s*$/gm;
  const inserts = [];
  let m;

  while ((m = re.exec(content)) !== null) {
    const indent = m[1];
    const rawInstr = m[1] + 'instruction: "' + m[2] + '"';
    const instr = m[2].replace(/\\n/g, "\n");
    const after = content.slice(m.index, m.index + LOOKAHEAD);
    if (/transInstruction:/.test(after)) continue;

    const trans = translations[instr];
    if (!trans) {
      inserts.push({ index: m.index + m[0].length, text: null, instr });
      continue;
    }

    const transLine = formatTransInstruction(trans).replace(/^      /, indent);
    inserts.push({ index: m.index + m[0].length, text: "\n" + transLine, instr });
  }

  if (inserts.length === 0) {
    return { file: filename, added: 0, missing: [] };
  }

  // Apply from end to start to preserve indices
  let updated = content;
  const missing = [];
  let added = 0;

  for (const ins of [...inserts].reverse()) {
    if (ins.text === null) {
      missing.push(ins.instr);
      continue;
    }
    updated = updated.slice(0, ins.index) + ins.text + updated.slice(ins.index);
    added++;
  }

  if (added > 0) {
    fs.writeFileSync(filePath, updated);
  }

  return { file: filename, added, missing };
}

const args = process.argv.slice(2);
const files = args.length === 0 || args[0] === "--all"
  ? DEFAULT_FILES
  : args.map((f) => path.basename(f));

let totalAdded = 0;
const allMissing = new Set();
const modified = [];

for (const f of files) {
  const result = processFile(f);
  if (result.added > 0) modified.push({ file: result.file, count: result.added });
  totalAdded += result.added;
  result.missing.forEach((x) => allMissing.add(x));
}

console.log("=== fill-grammaire-trans summary ===");
console.log("Files modified:", modified.length);
for (const { file, count } of modified) {
  console.log(`  ${file}: +${count}`);
}
console.log("Total transInstruction added:", totalAdded);
if (allMissing.size > 0) {
  console.log("Untranslated instructions:", allMissing.size);
  for (const instr of [...allMissing].sort()) {
    console.log("  -", JSON.stringify(instr));
  }
}
