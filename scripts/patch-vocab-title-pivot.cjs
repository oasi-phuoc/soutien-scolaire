#!/usr/bin/env node
/** Inject titlePivot (+ theoryPivot for v2-heure) into vocab theme source files. */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "vocab-title-translations.json"), "utf8"));
const dir = path.join(ROOT, "lib/curriculum/content/francais");

const LANGS = ["en", "ar", "fa", "ti", "uk", "pt", "so", "tr", "ps"];

function fmtPivot(obj) {
  const lines = LANGS.map((l) => `    ${l}: ${JSON.stringify(obj[l])},`);
  return `{\n${lines.join("\n")}\n  }`;
}

function fmtTheoryPivot(blocks) {
  const parts = blocks.map((block) => {
    const lines = [`    {`, `      type: ${JSON.stringify(block.type)},`];
    if (block.title) lines.push(`      title: ${fmtPivot(block.title).replace(/\n/g, "\n      ")},`);
    if (block.items) {
      lines.push(`      items: {`);
      for (const l of LANGS) {
        lines.push(`        ${l}: ${JSON.stringify(block.items[l])},`);
      }
      lines.push(`      },`);
    }
    if (block.headers) {
      lines.push(`      headers: {`);
      for (const l of LANGS) {
        lines.push(`        ${l}: ${JSON.stringify(block.headers[l])},`);
      }
      lines.push(`      },`);
    }
    if (block.rows) {
      lines.push(`      rows: {`);
      for (const l of LANGS) {
        lines.push(`        ${l}: ${JSON.stringify(block.rows[l])},`);
      }
      lines.push(`      },`);
    }
    if (block.labels) {
      lines.push(`      labels: {`);
      for (const l of LANGS) {
        lines.push(`        ${l}: ${JSON.stringify(block.labels[l])},`);
      }
      lines.push(`      },`);
    }
    if (block.text) lines.push(`      text: ${fmtPivot(block.text).replace(/\n/g, "\n      ")},`);
    lines.push(`    }`);
    return lines.join("\n");
  });
  return `[\n${parts.join(",\n")}\n  ]`;
}

for (const file of fs.readdirSync(dir).filter((f) => f.startsWith("vocab-v") && f.endsWith(".ts"))) {
  const full = path.join(dir, file);
  let src = fs.readFileSync(full, "utf8");
  const slugM = src.match(/slug:\s*"([^"]+)"/);
  if (!slugM) continue;
  const slug = slugM[1];
  const pivot = data[slug];
  if (!pivot) {
    console.warn("skip (no pivot):", file);
    continue;
  }

  src = src.replace(/\n\s*titlePivot:\s*\{[\s\S]*?\},\n?/g, "\n");
  src = src.replace(/\n\s*theoryPivot:\s*\[[\s\S]*?\],\n(?=\s*sentences:|\s*words:|\s*theory:|\s*cardLayout:|\s*imageFolder:|\s*\};)/g, "\n");

  src = src.replace(
    /(title:\s*"[^"]+",)\n/,
    `$1\n  titlePivot: ${fmtPivot(pivot)},\n`,
  );

  if (slug === "v2-heure" && data["theory-v2-heure"]) {
    src = src.replace(
      /(theory:\s*\[[\s\S]*?\],)\n(\s*sentences:)/,
      `$1\n  theoryPivot: ${fmtTheoryPivot(data["theory-v2-heure"])},\n$2`,
    );
  }

  fs.writeFileSync(full, src);
  console.log("patched", file);
}
