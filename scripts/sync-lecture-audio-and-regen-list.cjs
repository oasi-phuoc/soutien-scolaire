/**
 * 1) Génère les MP3 son_f manquants pour les images lecture (edge-tts temporaire).
 * 2) Met à jour son-a-regenerer.txt avec les sons IA à regénérer via ElevenLabs.
 *
 * Usage: node scripts/sync-lecture-audio-and-regen-list.cjs
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const root = process.cwd();
const lectureDir = path.join(root, "public/assets/words/lecture");
const audioDir = path.join(root, "public/assets/words/son_f/mots");
const regenFile = path.join(root, "son-a-regenerer.txt");
const markerFile = path.join(root, "scripts/.ai-generated-son-f.json");

const IMG_RE = /\.webp$/i;

function listLectureWords() {
  return fs
    .readdirSync(lectureDir)
    .filter((f) => IMG_RE.test(f))
    .map((f) => f.replace(IMG_RE, ""))
    .sort((a, b) => a.localeCompare(b, "fr"));
}

function readLines(file) {
  if (!fs.existsSync(file)) return [];
  return fs
    .readFileSync(file, "utf8")
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}

function writeSortedUnique(file, words) {
  const uniq = [...new Set(words)].sort((a, b) => a.localeCompare(b, "fr"));
  fs.writeFileSync(file, `${uniq.join("\n")}\n`, "utf8");
  return uniq;
}

function loadAiMarkers() {
  if (!fs.existsSync(markerFile)) return [];
  try {
    const data = JSON.parse(fs.readFileSync(markerFile, "utf8"));
    return Array.isArray(data) ? data : data.words || [];
  } catch {
    return [];
  }
}

function saveAiMarkers(words) {
  const uniq = [...new Set(words)].sort((a, b) => a.localeCompare(b, "fr"));
  fs.writeFileSync(
    markerFile,
    `${JSON.stringify({ updatedAt: new Date().toISOString(), words: uniq }, null, 2)}\n`,
    "utf8",
  );
  return uniq;
}

/** Métiers générés précédemment dans cette session (edge-tts). */
const SESSION_AI_WORDS = [
  "actrice",
  "agente-entretien",
  "agricultrice",
  "avocate",
  "boulangère",
  "bouchère",
  "caissière",
  "chanteuse",
  "charpentière",
  "chauffeuse",
  "coiffeuse",
  "cuisinière",
  "danseuse",
  "dentiste",
  "docteur",
  "électricienne",
  "épicière",
  "factrice",
  "fermière",
  "infirmière",
  "ingénieure",
  "jardinière",
  "jockey",
  "livreuse",
  "maçonne",
  "mécanicienne",
  "médecin",
  "musicienne",
  "paysan",
  "pêcheuse",
  "peintre",
  "pharmacienne",
  "plombière",
  "policière",
  "pompière",
  "professeure",
  "secrétaire",
  "steward",
  "trapéziste",
  "vendeuse",
];

function main() {
  fs.mkdirSync(audioDir, { recursive: true });
  const lectureWords = listLectureWords();
  const missing = lectureWords.filter((w) => !fs.existsSync(path.join(audioDir, `${w}.mp3`)));

  console.log(`Lecture images: ${lectureWords.length}`);
  console.log(`Audio manquants: ${missing.length}`);

  const newlyGenerated = [];
  if (missing.length > 0) {
    const py = `
import asyncio
from pathlib import Path
import edge_tts

out = Path(${JSON.stringify(audioDir.replace(/\\/g, "/"))})
words = ${JSON.stringify(missing)}
VOICE = "fr-FR-DeniseNeural"

async def main():
    for w in words:
        dest = out / f"{w}.mp3"
        if dest.exists():
            print("skip", w, flush=True)
            continue
        await edge_tts.Communicate(w, VOICE).save(str(dest))
        print("ok", w, flush=True)

asyncio.run(main())
`;
    const tmpPy = path.join(root, "scripts/_gen_missing_son_f.py");
    fs.writeFileSync(tmpPy, py, "utf8");
    const res = spawnSync("python", [tmpPy], { encoding: "utf8", cwd: root });
    process.stdout.write(res.stdout || "");
    process.stderr.write(res.stderr || "");
    if (res.status !== 0) {
      console.error("Échec edge-tts, code", res.status);
      process.exit(res.status || 1);
    }
    for (const w of missing) {
      if (fs.existsSync(path.join(audioDir, `${w}.mp3`))) newlyGenerated.push(w);
    }
    fs.unlinkSync(tmpPy);
  }

  const prevAi = loadAiMarkers();
  const aiWords = saveAiMarkers([...prevAi, ...SESSION_AI_WORDS, ...newlyGenerated]);

  const existingRegen = readLines(regenFile);
  const updated = writeSortedUnique(regenFile, [...existingRegen, ...aiWords]);

  console.log(`Nouveaux sons IA générés: ${newlyGenerated.length}`);
  console.log(`Total marqués IA: ${aiWords.length}`);
  console.log(`son-a-regenerer.txt: ${updated.length} entrées`);
  if (newlyGenerated.length) {
    console.log("Nouveaux:", newlyGenerated.join(", "));
  }
}

main();
