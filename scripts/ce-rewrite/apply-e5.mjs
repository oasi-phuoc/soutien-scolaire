import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  formatItem,
  formatCeExport,
  formatEmailExport,
  generateSection,
} from "./helpers.mjs";
import { E5_1_CE } from "./e5-1-ce-part1.mjs";
import { E5_1_CE_PART2 } from "./e5-1-ce-part2.mjs";
import { E5_1_CE_PART3 } from "./e5-1-ce-part3.mjs";
import { E5_2_CE } from "./e5-2-ce-part1.mjs";
import { E5_2_CE_PART2 } from "./e5-2-ce-part2.mjs";
import { E5_1_CE_EMAIL_ALL as E5_1_CE_EMAIL } from "./e5-1-ce-email.mjs";
import { E5_2_CE_EMAIL_ALL as E5_2_CE_EMAIL } from "./e5-2-ce-email.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "../../lib/curriculum/content/communication");

function readFromLine(filePath, lineNum) {
  const lines = fs.readFileSync(filePath, "utf8").split("\n");
  return lines.slice(lineNum - 1).join("\n");
}

function readUntilLine(filePath, lineNum) {
  const lines = fs.readFileSync(filePath, "utf8").split("\n");
  return lines.slice(0, lineNum - 1).join("\n");
}

function buildCeBlock(header, prefix, items, exportId) {
  const parts = [header, ""];
  for (let i = 0; i < items.length; i++) {
    parts.push(formatItem(prefix, i + 1, items[i]));
  }
  parts.push(formatCeExport(exportId, prefix, items.length));
  return parts.join("\n");
}

function buildEmailBlock(header, prefix, items, exportId) {
  const parts = [header, ""];
  for (let i = 0; i < items.length; i++) {
    parts.push(formatItem(prefix, i + 1, items[i]));
  }
  parts.push(formatEmailExport(exportId, prefix, items.length));
  return parts.join("\n");
}

function patchCpe(file, header, prefix, items, exportId, poLine) {
  const imports = readUntilLine(path.join(ROOT, file), 14);
  const ce = buildCeBlock(header, prefix, items, exportId);
  const tail = readFromLine(path.join(ROOT, file), poLine);
  fs.writeFileSync(path.join(ROOT, file), imports + "\n\n" + ce + "\n\n" + tail);
}

function patchEmail(file, sections) {
  const header = readUntilLine(path.join(ROOT, file), 15);
  const parts = [header, ""];
  for (const s of sections) {
    parts.push(buildEmailBlock(s.header, s.prefix, s.items, s.exportId));
    parts.push("");
    parts.push(readFromLine(path.join(ROOT, file), s.peLine));
    parts.push("");
  }
  // For multi-section email files, we need different approach
}

// Simpler: patch each section separately by reading PE blocks from original
function patchEmailFile(file, configs) {
  const full = fs.readFileSync(path.join(ROOT, file), "utf8");
  const header = readUntilLine(path.join(ROOT, file), 15);
  let out = header + "\n\n";
  for (const cfg of configs) {
    out += buildEmailBlock(cfg.header, cfg.prefix, cfg.items, cfg.exportId) + "\n\n";
    const peStart = full.indexOf(`export const ${cfg.peExport}`);
    const peEnd = cfg.nextMarker
      ? full.indexOf(cfg.nextMarker)
      : full.length;
    out += full.slice(peStart, peEnd).trimEnd() + "\n\n";
  }
  fs.writeFileSync(path.join(ROOT, file), out.trimEnd() + "\n");
}

const e51ce = [...E5_1_CE, ...E5_1_CE_PART2, ...E5_1_CE_PART3];
const e52ce = [...E5_2_CE, ...E5_2_CE_PART2];

patchCpe(
  "express-e5-1-cpe.ts",
  "/* ── Compréhension écrite — E5.1 Aller chez le médecin ── */",
  "E5_1_CE",
  e51ce,
  "E5_1",
  2165,
);

patchCpe(
  "express-e5-2-cpe.ts",
  "/* ── Compréhension écrite — E5.2 Aller à la pharmacie ── */",
  "E5_2_CE",
  e52ce,
  "E5_2",
  2079,
);

patchEmailFile("express-e5-email.ts", [
  {
    header: `/* ════════════════════════════════════════════════════════════════════════════
   E5.1 — Aller chez le médecin
   ════════════════════════════════════════════════════════════════════════════ */`,
    prefix: "E5_1_CE_EMAIL",
    items: E5_1_CE_EMAIL,
    exportId: "E5_1",
    peExport: "E5_1_PE_EMAIL",
    nextMarker: "/* ════════════════════════════════════════════════════════════════════════════\n   E5.2",
  },
  {
    header: `/* ════════════════════════════════════════════════════════════════════════════
   E5.2 — Aller à la pharmacie
   ════════════════════════════════════════════════════════════════════════════ */`,
    prefix: "E5_2_CE_EMAIL",
    items: E5_2_CE_EMAIL,
    exportId: "E5_2",
    peExport: "E5_2_PE_EMAIL",
    nextMarker: null,
  },
]);

console.log("E5 patched:", e51ce.length, "CE E5.1,", e52ce.length, "CE E5.2,",
  E5_1_CE_EMAIL.length, "emails E5.1,", E5_2_CE_EMAIL.length, "emails E5.2");
