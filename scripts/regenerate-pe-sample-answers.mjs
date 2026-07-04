/**
 * Regenerates lib/curriculum/content/communication/pe-sample-answers.ts
 * from structured data in pe-sample-data.mjs.
 *
 * Run: node scripts/regenerate-pe-sample-answers.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import SAMPLES from "./pe-sample-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TARGET = path.join(__dirname, "../lib/curriculum/content/communication/pe-sample-answers.ts");

function joinBlocks(blocks) {
  return blocks.filter((b) => b != null && String(b).trim()).join("\n\n");
}

function formatSample(sample) {
  switch (sample.genre) {
    case "informal_email":
    case "informal_letter":
    case "postcard":
    case "friendly_letter":
      return joinBlocks([
        sample.greeting,
        ...sample.paragraphs,
        sample.closing,
        sample.signature,
      ]);

    case "formal_letter":
    case "argumentative_letter":
      return joinBlocks([
        sample.objet ? `Objet : ${sample.objet}` : null,
        sample.dateLieu,
        sample.salutation,
        ...sample.paragraphs,
        sample.closing,
        sample.signature,
      ]);

    case "article":
      return joinBlocks([sample.title, ...sample.paragraphs]);

    case "report":
      return joinBlocks([
        sample.title,
        sample.meta,
        ...sample.paragraphs,
        sample.signature,
      ]);

    case "narrative":
      return joinBlocks([sample.title, ...sample.paragraphs]);

    case "diary":
      return joinBlocks([sample.greeting, ...sample.paragraphs, sample.signature]);

    case "recipe":
      return joinBlocks([sample.title, ...sample.paragraphs]);

    default:
      throw new Error(`Unknown genre: ${sample.genre}`);
  }
}

function escapeTs(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n");
}

function wordCount(text) {
  return text.trim() ? text.trim().split(/\s+/u).filter(Boolean).length : 0;
}

const EXPECTED_KEYS = [
  "pe1-short-fete", "pe1-short-vacances", "pe1-short-anniversaire", "pe1-short-art", "pe1-short-loisirs", "pe1-short-travail",
  "pe1-long-fete", "pe1-long-carte-postale", "pe1-long-voeux", "pe1-long-anniversaire", "pe1-long-ecole-art", "pe1-long-correspondant", "pe1-long-montreal", "pe1-long-premier-jour",
  "pe2-reply-concert", "pe2-reply-nouvel-an", "pe2-reply-weekend-montagne", "pe2-reply-repas-breton", "pe2-reply-voisin-anniversaire", "pe2-reply-fete-lumieres", "pe2-reply-sortie-enfants", "pe2-reply-fete-retraite", "pe2-reply-anniversaire-mariage", "pe2-reply-match-foot", "pe2-reply-shopping", "pe2-reply-mariage", "pe2-reply-diner-reussite", "pe2-reply-velo", "pe2-reply-spectacle", "pe2-reply-theatre", "pe2-reply-weekend-nora", "pe2-reply-permis", "pe2-reply-logement", "pe2-reply-nouveau-travail", "pe2-reply-voyage-florian", "pe2-reply-cadeau", "pe2-reply-vacances-simon", "pe2-reply-universite",
  "pe2-long-passion", "pe2-long-instrument", "pe2-long-mer", "pe2-long-voyage", "pe2-long-pays-origine", "pe2-long-sport", "pe2-long-musee", "pe2-long-film", "pe2-long-mariage", "pe2-long-salon-livre", "pe2-long-fetes", "pe2-long-technologies", "pe2-long-sportif", "pe2-long-fete-musique", "pe2-long-concert", "pe2-long-fete-travail", "pe2-long-depart", "pe2-long-weekend", "pe2-long-nouveau-travail", "pe2-long-animaux", "pe2-long-sortie-entreprise", "pe2-long-livre", "pe2-long-patron", "pe2-long-film-classe",
  "pe3-short-reclamation-facture", "pe3-short-annonce-logement", "pe3-short-refus-invitation", "pe3-short-proposition-activite", "pe3-short-demande-remboursement", "pe3-short-reagir-information",
  "pe3-cybersecurite-banque", "pe3-abonnement-remboursement", "pe3-trottoir-dangereux", "pe3-recette-message-court", "pe3-refuser-presidence", "pe3-retrouver-nounou", "pe3-rencontre-homonymes", "pe3-jardin-ephemere", "pe3-compte-rendu-voyage", "pe3-soiree-association", "pe3-vente-mangues", "pe3-premiere-journee-travail", "pe3-spectacle-chevaux", "pe3-nettoyage-plage", "pe3-assemblee-immeuble", "pe3-volontariat-formation", "pe3-conflit-classe", "pe3-vente-muguet",
  "pe3-article-galanterie", "pe3-article-retraite", "pe3-article-livre", "pe3-parcours-professionnel", "pe3-poubelles-ville", "pe3-parking-ecriture", "pe3-concours-eloquence", "pe3-repas-transport", "pe3-ceremonies-demesurees", "pe3-memoires-biographie", "pe3-apprentissage-francais", "pe3-job-dating", "pe3-journees-internationales", "pe3-souvenir-enfance", "pe3-dictature-minceur", "pe3-menage-bien-etre", "pe3-cetait-mieux-avant", "pe3-double-culture", "pe3-sel-de-la-vie", "pe3-carnets-velo",
];

const missing = EXPECTED_KEYS.filter((k) => !SAMPLES[k]);
const extra = Object.keys(SAMPLES).filter((k) => !EXPECTED_KEYS.includes(k));
if (missing.length || extra.length) {
  console.error("Key mismatch:", { missing, extra });
  process.exit(1);
}

const answers = {};
for (const key of EXPECTED_KEYS) {
  answers[key] = formatSample(SAMPLES[key]);
}

const sections = [
  ["// ── PE1 short ────────────────────────────────────────────────────────────", (k) => k.startsWith("pe1-short-")],
  ["// ── PE1 long ─────────────────────────────────────────────────────────────", (k) => k.startsWith("pe1-long-")],
  ["// ── PE2 reply ────────────────────────────────────────────────────────────", (k) => k.startsWith("pe2-reply-")],
  ["// ── PE2 long ─────────────────────────────────────────────────────────────", (k) => k.startsWith("pe2-long-")],
  ["// ── PE3 short ────────────────────────────────────────────────────────────", (k) => k.startsWith("pe3-short-")],
  ["// ── PE3 long ─────────────────────────────────────────────────────────────", (k) => k.startsWith("pe3-") && !k.startsWith("pe3-short-")],
];

let writingBlock = "export const WRITING_SAMPLE_ANSWERS: Record<string, string> = {\n";
for (const [comment, filter] of sections) {
  writingBlock += `  ${comment}\n`;
  for (const key of EXPECTED_KEYS.filter(filter)) {
    writingBlock += `  "${key}":\n    "${escapeTs(answers[key])}",\n`;
  }
  writingBlock += "\n";
}
writingBlock += "};\n";

const existing = fs.readFileSync(TARGET, "utf8");
const formStart = existing.indexOf("export const FORM_SAMPLE_ANSWERS");
const tailStart = existing.indexOf("function writingSampleTargetWords");
const formAndTail = tailStart >= 0 ? existing.slice(formStart, tailStart) : existing.slice(formStart);

const newHelpers = `
export function getWritingSampleAnswer(promptId: string): string | undefined {
  const baseId = promptId.replace(/-(?:short|long)$/, "");
  return WRITING_SAMPLE_ANSWERS[baseId];
}

export function getFormSampleAnswer(formId: string): string | undefined {
  return FORM_SAMPLE_ANSWERS[formId];
}
`;

fs.writeFileSync(TARGET, writingBlock + "\n" + formAndTail.trimEnd() + "\n" + newHelpers);

for (const key of EXPECTED_KEYS) {
  console.log(`  ${key}: ${wordCount(answers[key])} mots`);
}
console.log(`\nRegenerated ${EXPECTED_KEYS.length} PE sample answers.`);
