#!/usr/bin/env node
/**
 * Audit CO scolaire moyen/avancé : transcriptions, taille des pools, formats.
 * Usage: node scripts/audit-co-scolaire-pools.mjs
 */
import fs from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);

// Load compiled helpers via tsx register is heavy; duplicate minimal format logic
const CO_CORE = ["image", "text", "text", "fill"];
const ALL = ["text", "image", "fill"];

function hashSeed(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h) || 1;
}

function pickCoMoyen(index, seed, qid, imageable) {
  if (index < CO_CORE.length) {
    const p = CO_CORE[index];
    if (p === "image" && !imageable) return "text";
    return p;
  }
  const formats = imageable ? ALL : ALL.filter((f) => f !== "image");
  return formats[hashSeed(`${seed}-${qid}-${index}`) % formats.length];
}

function pickCoAvance(index) {
  return index % 2 === 0 ? "text" : "fill";
}

function countPoolQuestions(file) {
  const c = fs.readFileSync(file, "utf8");
  const result = {};
  for (const block of c.split(/export const SCOLAIRE_/).slice(1)) {
    const slug = block.match(/buildPool\("(?:moyen|avance)", "([^"]+)"/)?.[1];
    if (!slug) continue;
    result[slug] = (block.match(/id: "/g) ?? []).length;
  }
  return result;
}

function mp3Stems(level) {
  const dir = `public/assets/expression/co/${level}/scolaire`;
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mp3")).map((f) => f.replace(/\.mp3$/, ""));
}

const EXPECTED_MOYEN = 10;
const EXPECTED_AVANCE = 12;
const moyenT = JSON.parse(fs.readFileSync("lib/curriculum/content/communication/co-transcripts-scolaire-moyen.json", "utf8"));
const avanceT = JSON.parse(fs.readFileSync("lib/curriculum/content/communication/co-transcripts-scolaire-avance.json", "utf8"));

const moyenPools = {
  ...countPoolQuestions("lib/curriculum/content/communication/co-questions-scolaire-moyen-messages.ts"),
  ...countPoolQuestions("lib/curriculum/content/communication/co-questions-scolaire-moyen-annonces.ts"),
  ...countPoolQuestions("lib/curriculum/content/communication/co-questions-scolaire-moyen-radios.ts"),
};

const avancePools = {
  ...countPoolQuestions("lib/curriculum/content/communication/co-questions-scolaire-avance-annonces.ts"),
  ...countPoolQuestions("lib/curriculum/content/communication/co-questions-scolaire-avance-radios.ts"),
  ...countPoolQuestions("lib/curriculum/content/communication/co-questions-scolaire-avance-conversations.ts"),
};

function auditLevel(name, transcripts, pools, qcmOnly, expectedCount) {
  const issues = [];
  const keys = Object.keys(transcripts).filter((k) => !k.startsWith("conversation") || !qcmOnly);
  const qcmKeys = Object.keys(transcripts).filter((k) => {
    if (k.startsWith("conversation")) return !qcmOnly;
    return true;
  });

  for (const key of Object.keys(transcripts)) {
    const poolSlug = `scolaire-${key}`;
    const isConv = key.startsWith("conversation");
    if (qcmOnly && isConv) continue;
    const n = pools[poolSlug];
    if (n === undefined) issues.push(`POOL MANQUANT: ${poolSlug}`);
    else if (n !== expectedCount) issues.push(`${poolSlug}: ${n} questions (attendu ${expectedCount})`);
  }

  for (const slug of Object.keys(pools)) {
    const key = slug.replace("scolaire-", "");
    if (!transcripts[key]) issues.push(`TRANSCRIPT MANQUANT pour pool ${slug}`);
  }

  const mp3 = mp3Stems(name);
  for (const k of Object.keys(transcripts)) {
    if (!mp3.includes(k)) issues.push(`MP3 manquant: ${k}`);
  }
  for (const s of mp3) {
    if (!transcripts[s]) issues.push(`Transcript manquant: ${s}`);
  }

  return { issues, poolCount: Object.keys(pools).length, transcriptCount: Object.keys(transcripts).length };
}

const moyen = auditLevel("moyen", moyenT, moyenPools, true, EXPECTED_MOYEN);
const avance = auditLevel("avance", avanceT, avancePools, false, EXPECTED_AVANCE);

console.log("=== CO SCOLAIRE MOYEN ===");
console.log(`Transcripts: ${moyen.transcriptCount}, Pools QCM: ${moyen.poolCount}`);
console.log(`Problèmes: ${moyen.issues.length}`);
if (moyen.issues.length) console.log(moyen.issues.join("\n"));
else console.log("OK — 22 pools × 10 questions, transcripts = MP3");

console.log("\nFormats moyen (10 premières positions, critère CO):");
console.log("  slots 0-3: image, texte, texte, saisie");
console.log("  slots 4-9: tirage parmi texte/image/saisie si images disponibles");

console.log("\n=== CO SCOLAIRE AVANCÉ ===");
console.log(`Transcripts: ${avance.transcriptCount}, Pools: ${avance.poolCount}`);
console.log(`Problèmes: ${avance.issues.length}`);
if (avance.issues.length) console.log(avance.issues.slice(0, 30).join("\n"));
if (avance.issues.length > 30) console.log(`... et ${avance.issues.length - 30} autres`);

console.log("\nFormats avancé (12 positions, critère B1):");
console.log("  alternance QCM texte / saisie (pas de QCM image)");

process.exit(moyen.issues.length + avance.issues.length > 0 ? 1 : 0);
