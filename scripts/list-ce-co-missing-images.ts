import { writeFileSync, readdirSync, existsSync, readFileSync } from "fs";
import { WORD_IMAGE_INDEX } from "../lib/curriculum/content/communication/word-image-index";
import aliasesJson from "../lib/curriculum/content/communication/word-image-aliases.json";
import { resolveCeCoWordImage, labelToAssetSlug } from "../lib/curriculum/word-image-resolver";

const ALIASES = aliasesJson as Record<string, string>;
const SCENE = "/assets/expression/images/scene/";

function listTs(dir: string): string[] {
  if (!existsSync(dir)) return [];
  const out: string[] = [];
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = `${dir}/${name.name}`;
    if (name.isDirectory()) out.push(...listTs(p));
    else if (name.name.startsWith("co-questions") && name.name.endsWith(".ts")) out.push(p);
  }
  return out;
}

function legacyPathForLabel(label: string): string | null {
  const slug = labelToAssetSlug(label);
  const candidates = [slug, ALIASES[slug]].filter(Boolean) as string[];
  for (const key of candidates) {
    if (key.startsWith("/")) return key;
    const path = WORD_IMAGE_INDEX[key];
    if (path) return path;
  }
  return null;
}

type Row = { label: string; legacy: string; files: Set<string> };
const needsScene = new Map<string, Row>();

function consider(label: string, file: string) {
  const key = label.trim();
  if (!key) return;
  if (resolveCeCoWordImage(key)) return; // déjà OK en scene
  const legacy = legacyPathForLabel(key);
  if (!legacy) return; // pas d'image du tout avant → pas une « mauvaise prise »
  if (legacy.startsWith(SCENE)) return;
  if (!needsScene.has(key)) {
    needsScene.set(key, { label: key, legacy, files: new Set() });
  }
  needsScene.get(key)!.files.add(file);
}

for (const file of listTs("lib/curriculum/content/communication")) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/img:\s*\[([^\]]+)\]/g)) {
    const parts = [...m[1]!.matchAll(/"([^"]+)"/g)].map((x) => x[1]!);
    for (const label of parts) consider(label, file);
  }
  if (file.includes("objet-pick")) {
    for (const m of text.matchAll(/label:\s*"([^"]+)"/g)) {
      consider(m[1]!, file);
    }
  }
}

const convFiles: string[] = [];
function walk(dir: string) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const p = `${dir}/${name.name}`;
    if (name.isDirectory()) walk(p);
    else if (/^conversation-.*\.(webp|png|jpe?g)$/i.test(name.name)) {
      convFiles.push(p.replace(/^public/, ""));
    }
  }
}
walk("public/assets/expression/co");

const sorted = [...needsScene.values()].sort((a, b) => a.label.localeCompare(b.label, "fr"));

const lines: string[] = [];
lines.push("Images manquantes CE/CO");
lines.push("======================");
lines.push("");
lines.push("Règle : CE/CO n'utilisent que :");
lines.push("  - /assets/expression/images/scene/");
lines.push("  - /assets/expression/co/.../conversation-*.webp|png (conservées)");
lines.push("");
lines.push("Les images 1 et 3 du type « dentiste / école » (photos vocab/lecture) sont");
lines.push("refusées ; seuls les équivalents scene (ex. médecin → consultation-medecin) restent.");
lines.push("");
lines.push("--- Labels qui prenaient une image HORS scene (à fournir dans scene/) ---");
lines.push(`Total : ${sorted.length}`);
lines.push("");
for (const row of sorted) {
  lines.push(`- ${row.label}`);
  lines.push(`    ancien: ${row.legacy}`);
  lines.push(`    besoin: /assets/expression/images/scene/<slug>.webp`);
  for (const f of [...row.files].sort()) lines.push(`    ref: ${f}`);
}
lines.push("");
lines.push("--- Liens hors scene retirés du code CE ---");
lines.push("");
lines.push("- /assets/expression/images/ce/ce-message-01.webp … ce-message-08.webp");
lines.push("- /assets/expression/images/ce/ce-orientation-01.webp … ce-orientation-11.webp");
lines.push("- /assets/words/lecture/* dans ComprehensionEcritRunner (hygiène, gare, soleil, …)");
lines.push("");
lines.push(`--- Images conversation CO conservées (${convFiles.length} fichiers) ---`);
lines.push("");
for (const f of convFiles.sort()) lines.push(`- ${f}`);

writeFileSync("images-manquantes-ceco.txt", `${lines.join("\n")}\n`, "utf8");
console.log("wrote images-manquantes-ceco.txt");
console.log("labels needing scene replacement:", sorted.length);
console.log("conversation files kept:", convFiles.length);
console.log("sample:", sorted.slice(0, 15).map((r) => `${r.label} ← ${r.legacy}`).join("\n"));
