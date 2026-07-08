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
  "grammaire-r1.1b.ts", "grammaire-r1.2.ts", "grammaire-r1.3.ts", "grammaire-r1.4.ts",
  "grammaire-r1.5.ts", "grammaire-r1.6.ts", "grammaire-r1.7.ts", "grammaire-r1.8.ts",
  "grammaire-r1.9.ts", "grammaire-r2.1.ts", "grammaire-r2.5.ts", "grammaire-r4.1.ts",
  "grammaire-r4.12.ts", "grammaire-r4.14.ts", "grammaire-r4.15.ts", "grammaire-r4.25.ts",
  "grammaire-r4.26.ts", "grammaire-r4.3.ts", "grammaire-r4.4.ts", "grammaire-r4.5.ts",
  "grammaire-r4.6.ts", "grammaire-r5.5-double-auxiliaire.ts", "grammaire-r5.6-pronominaux.ts",
  "grammaire-r6.2-irreguliers.ts", "grammaire-r6.2.ts", "grammaire-r6.3-passe-imparfait.ts",
  "grammaire-r6.4.ts", "grammaire-r6.5.ts", "grammaire-r7.2-irreguliers.ts",
  "grammaire-r7.3-futurs.ts", "grammaire-r7.5-hypothese.ts",
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
