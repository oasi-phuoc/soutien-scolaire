/**
 * Extrait les tags utiles de l'ancien catalogue (commit c55e93c1).
 * Usage: node scripts/extract-legacy-scene-tags.cjs
 */
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const out = path.join(root, "scripts/.scene-tags-legacy.json");
const GENERIC = new Set(["illustration", "manga", "scène", "scene", "animé", "anime"]);

const raw = execFileSync(
  "git",
  ["show", "c55e93c1:lib/curriculum/content/communication/scene-image-catalog.json"],
  { cwd: root, maxBuffer: 80 * 1024 * 1024 },
);

const old = JSON.parse(raw.toString("utf8"));

function clean(tags) {
  const outTags = [];
  const seen = new Set();
  for (const rawTag of tags || []) {
    let t = String(rawTag).replace(/^#/, "").trim();
    if (!t) continue;
    // Ignorer caractères corrompus
    if (t.includes("\uFFFD") || /\?\?/.test(t)) continue;
    const k = t
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
    if (GENERIC.has(k) || seen.has(k)) continue;
    seen.add(k);
    outTags.push(t);
  }
  return outTags;
}

const byKey = {};
for (const f of old.families) {
  byKey[f.key] = { family: clean(f.tags), variants: {} };
  for (const v of f.variants) {
    byKey[f.key].variants[v.file] = clean(v.tags);
  }
}

fs.writeFileSync(out, `${JSON.stringify(byKey, null, 2)}\n`, "utf8");
console.log("families", Object.keys(byKey).length);
console.log("acheter-pain", byKey["acheter-pain"]?.family);
console.log("accepter-invitation", byKey["accepter-invitation"]?.family);
