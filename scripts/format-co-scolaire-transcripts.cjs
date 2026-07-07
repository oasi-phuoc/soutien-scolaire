/**
 * Reformate les transcriptions CO scolaire : dialogues avec retours à la ligne et tirets cadratin.
 * Usage : node scripts/format-co-scolaire-transcripts.cjs
 */
const fs = require("fs");
const path = require("path");

const FILES = [
  "lib/curriculum/content/communication/co-transcripts-scolaire-base.json",
  "lib/curriculum/content/communication/co-transcripts-scolaire-moyen.json",
  "lib/curriculum/content/communication/co-transcripts-scolaire-avance.json",
];

const EM = "—";

const SPEAKER =
  "(?:Journaliste|Présentateur|Professeur(?:eure)?|Le serveur|La mère|Le père|Homme|Femme|M\\.\\s+Chary|M\\.\\s+[A-Z][a-z]+|Mme\\.?\\s+[A-Z][a-z]+|[A-ZÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ][a-zàâäéèêëïîôùûüÿç\\-']+(?:\\s+[A-ZÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ][a-zàâäéèêëïîôùûüÿç\\-']+)?)";

function stripBrokenFormatting(text) {
  return text
    .replace(new RegExp(`${EM}\\s*${EM}\\s*`, "g"), `${EM} `)
    .replace(new RegExp(`:\\s*${EM}\\s*${EM}\\s*`, "g"), ` :\n${EM} `)
    .replace(/\n—\s*:\s*\n—\s*/g, "\n")
    .replace(/:\s*\n—\s*:\s*\n—\s*/g, " : ")
  .replace(/\s+/g, " ")
    .trim();
}

function formatSpeakerDialogue(body) {
  const flat = stripBrokenFormatting(body);

  const findRe = new RegExp(`(${SPEAKER})\\s*:\\s+`, "g");
  const matches = [];
  let m;
  while ((m = findRe.exec(flat)) !== null) {
    matches.push({ speaker: m[1].trim(), index: m.index, contentStart: m.index + m[0].length });
  }
  if (matches.length === 0) return flat;

  const lines = [];
  for (let i = 0; i < matches.length; i++) {
    const start = matches[i].contentStart;
    const end = i + 1 < matches.length ? matches[i + 1].index : flat.length;
    let content = flat.slice(start, end).trim();
    content = content.replace(new RegExp(`^${EM}\\s*`, ""), "").trim();
    lines.push(`${matches[i].speaker} :\n${EM} ${content}`);
  }
  return lines.join("\n\n");
}

function formatDialogueBlocks(body) {
  let out = body;
  out = out.replace(/\s*(Dialogue \d+\.)/g, "\n\n$1\n");
  out = out.replace(/\s*(Situation numéro \d+\.)/g, "\n\n$1\n");

  const parts = out.split(/(\n\nDialogue \d+\.\n|\n\nSituation numéro \d+\.\n)/);
  for (let i = 0; i < parts.length; i++) {
    const p = parts[i];
    if (/^Dialogue \d+\.$|^Situation numéro \d+\.$/.test(p?.trim() ?? "")) continue;
    if (!p?.trim()) continue;
    parts[i] = formatSpeakerDialogue(p);
  }
  return parts.join("").replace(/\n{3,}/g, "\n\n").trim();
}

function formatAnnouceParagraphs(body) {
  return body
    .replace(/(?<=[.!?])\s+(?=[A-ZÀÂÄÉÈÊËÏÎÔÙÛÜŸÇ«"])/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function formatMixedDialogueAnnouce(body) {
  // Blocs séparés par double saut (dialogue + voix off)
  if (!body.includes("\n\n")) return formatSpeakerDialogue(body);
  return body
    .split(/\n\n+/)
    .map((block) => {
      const b = block.trim();
      if (new RegExp(`^(${SPEAKER})\\s*:`).test(b) || b.includes(" :")) {
        return formatSpeakerDialogue(b);
      }
      return formatAnnouceParagraphs(b);
    })
    .join("\n\n");
}

function formatEntry(key, text) {
  const exMatch = text.match(/^Exercice (\d+)\.\s*/);
  const prefix = exMatch ? `Exercice ${exMatch[1]}.\n\n` : "";
  let body = exMatch ? text.slice(exMatch[0].length) : text;

  const isConversation =
    key.startsWith("conversation-") || /Dialogue \d+/i.test(body);

  if (isConversation) {
    return prefix + formatDialogueBlocks(body);
  }

  if (key.startsWith("radio-")) {
    return prefix + formatSpeakerDialogue(body);
  }

  if (key === "annonce-31" || key === "annonce-32" || key === "annonce-35") {
    return prefix + formatMixedDialogueAnnouce(body);
  }

  if (key.startsWith("message-") || key.startsWith("annonce-")) {
    return prefix + formatAnnouceParagraphs(body.replace(/\n+/g, " "));
  }

  return prefix + body.trim();
}

for (const rel of FILES) {
  const file = path.join(process.cwd(), rel);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  for (const [key, text] of Object.entries(data)) {
    data[key] = formatEntry(key, text);
  }
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + "\n", "utf8");
  console.log("Formatted:", rel);
}
