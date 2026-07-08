#!/usr/bin/env node
/**
 * Audit des traductions pivot — algèbre, géométrie, français.
 * Usage: node scripts/audit-traductions.cjs
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");

function read(p) {
  return fs.readFileSync(path.join(ROOT, p), "utf8");
}

function listFiles(dir, re) {
  const out = [];
  function walk(d) {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const full = path.join(d, e.name);
      if (e.isDirectory()) walk(full);
      else if (re.test(e.name)) out.push(full);
    }
  }
  walk(path.join(ROOT, dir));
  return out.sort();
}

function countBlocksInLesson(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const m = src.match(/blocks:\s*\[/);
  if (!m) return 0;
  let depth = 0;
  let started = false;
  let count = 0;
  for (let i = m.index; i < src.length; i++) {
    const ch = src[i];
    if (ch === "[") {
      depth++;
      if (started && depth === 2) count++;
    } else if (ch === "]") {
      if (started && depth === 2 && src[i - 1] === "{") count++;
      depth--;
      if (started && depth === 1) break;
    } else if (ch === "{" && depth === 1) {
      started = true;
      count++;
    }
  }
  return count;
}

function auditMathTrad(prefix, lessonGlob) {
  const tradDir = path.join(ROOT, "lib/curriculum/content/math/trad");
  const tradFiles = fs.readdirSync(tradDir).filter((f) => f.startsWith(`trad-${prefix}`) && f.endsWith(".ts"));
  const issues = [];

  for (const tf of tradFiles) {
    const src = fs.readFileSync(path.join(tradDir, tf), "utf8");
    const subId = tf.replace("trad-", "").replace(".ts", "").toUpperCase().replace("-", "-");
    const hasBlocks = /blocks:\s*\[/.test(src);
    const hasParagraphs = /paragraphs:\s*\{/.test(src);
    const hasConsignes = /consignes:\s*\{/.test(src);
    const hasEnTitle = /title:\s*[\s\S]*?en:/.test(src) || /title:\s*S\(/.test(src);
    const blockCount = hasBlocks ? (src.match(/\{\s*text:|label:|items:|caption:|^\s*\{\s*\}/gm) || []).length : 0;

    if (!hasEnTitle) issues.push({ file: tf, type: "title_en_missing" });
    if (!hasBlocks && !hasParagraphs) issues.push({ file: tf, type: "no_theory_trad" });
    if (hasBlocks && !/en:/.test(src)) issues.push({ file: tf, type: "blocks_no_en" });
    if (hasParagraphs && !/paragraphs:[\s\S]*?en:/.test(src)) issues.push({ file: tf, type: "paragraphs_no_en" });

    // stale consignes keys (g5-* in g6 files)
    if (/consignes:[\s\S]*g5-/.test(src) && tf.includes("g6-")) {
      issues.push({ file: tf, type: "stale_consignes_keys" });
    }
    if (!hasConsignes) issues.push({ file: tf, type: "no_consignes" });
  }

  return { domain: prefix.toUpperCase(), tradCount: tradFiles.length, issues };
}

function auditGrammaire() {
  const files = listFiles("lib/curriculum/content/francais", /^grammaire-r.*\.ts$/);
  const missing = [];
  for (const f of files) {
    const src = fs.readFileSync(f, "utf8");
    const base = path.basename(f);
    const hasTrans = /trans:|transItems:|transLabel:|transInstruction:/.test(src);
    const isConj = /ConjLesson/.test(src);
    const exCount = (src.match(/instruction:/g) || []).length;
    const transExCount = (src.match(/transInstruction:/g) || []).length;
    if (!hasTrans && !isConj) missing.push({ file: base, issue: "theory_trans_missing" });
    if (isConj && !hasTrans) missing.push({ file: base, issue: "conj_theory_trans_missing" });
    if (exCount > 0 && transExCount < exCount) {
      missing.push({ file: base, issue: `exercises_trans_partial (${transExCount}/${exCount})` });
    }
  }
  return { lessonCount: files.length, issues: missing };
}

function auditVocab() {
  const files = listFiles("lib/curriculum/content/francais", /^vocab-v.*\.ts$/);
  let withPivot = 0;
  let withoutPivot = 0;
  const missing = [];
  for (const f of files) {
    const src = fs.readFileSync(f, "utf8");
    const base = path.basename(f);
    if (/definitionPivot:/.test(src)) withPivot++;
    else {
      withoutPivot++;
      missing.push({ file: base, issue: "no_definitionPivot" });
    }
    if (!/theoryPivot:|titlePivot:/.test(src) && /theory:|title:/.test(src)) {
      const slugM = src.match(/slug:\s*"([^"]+)"/);
      const slug = slugM?.[1];
      const hasCentral = slug && fs.existsSync(path.join(ROOT, "scripts/vocab-title-translations.json"))
        && (() => {
          try {
            const j = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts/vocab-title-translations.json"), "utf8"));
            return !!j[slug];
          } catch { return false; }
        })();
      if (!hasCentral) missing.push({ file: base, issue: "theme_theory_title_not_translated" });
    }
  }
  return { themeCount: files.length, withPivot, withoutPivot, issues: missing };
}

const algebra = auditMathTrad("a");
const geometry = auditMathTrad("g");
const stats = auditMathTrad("s");
const grammaire = auditGrammaire();
const vocab = auditVocab();

const report = {
  generatedAt: new Date().toISOString(),
  math: {
    algebra: algebra,
    geometry: geometry,
    statistics: stats,
    g6_reperer: {
      note: "G6-1/G6-2 trad files should match math-g6-reperer-*.ts blocks (6 and 12)",
      g61_blocks_expected: 6,
      g62_blocks_expected: 12,
    },
    geo_custom_exercises: {
      note: "G1-G6 plan/cartesian exercise components need consignes wiring (done for G6.1/G6.2)",
      status: "G6.1/G6.2 wired via g6Cons() keys",
    },
    renumbering_warning: "trad-g7+ may not match live lessons after G6 reperer insertion — manual review needed",
  },
  francais: { grammaire, vocab },
};

console.log(JSON.stringify(report, null, 2));

const summaryPath = path.join(ROOT, "scripts/audit-traductions-last.json");
fs.writeFileSync(summaryPath, JSON.stringify(report, null, 2));
console.error(`\nRapport écrit dans ${summaryPath}`);
