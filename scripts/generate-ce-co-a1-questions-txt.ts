/**
 * Génère public/assets/expression/ce-co-questions-a1.txt
 * Usage : npx --yes tsx scripts/generate-ce-co-a1-questions-txt.ts
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { CE_MESSAGES_BASE } from "../lib/curriculum/content/communication/ce-messages-base";
import { CE_ORIENTATION_BASE } from "../lib/curriculum/content/communication/ce-orientation-base";
import { CE_CORE_SLOT_LABELS, CO_CORE_SLOT_LABELS } from "../lib/curriculum/content/communication/ce-co-question-formats";
import type { CEMultiQuestion } from "../lib/curriculum/content/communication/ce-questions-helpers";
import { CO_QUESTION_POOLS_BASE_MESSAGES } from "../lib/curriculum/content/communication/co-questions-base-messages";
import { CO_QUESTION_POOLS_BASE_OTHER } from "../lib/curriculum/content/communication/co-questions-base-other";
import { CO_QUESTION_POOLS_SCOLAIRE_BASE } from "../lib/curriculum/content/communication/co-questions-scolaire-base";
import { CO_OBJET_PICK } from "../lib/curriculum/content/communication/co-questions-objet-pick";
import type { COMultiQuestion } from "../lib/curriculum/content/communication/co-questions-helpers";
import { ceCoImageSource } from "../lib/curriculum/word-image-resolver";

const OUT = resolve(process.cwd(), "public/assets/expression/ce-co-questions-a1.txt");
const CE_RUNNER = resolve(process.cwd(), "components/communication/ComprehensionEcritRunner.tsx");

type MultiQ = CEMultiQuestion | COMultiQuestion;

type RawCeQuestion =
  | { prompt: string; choices: { label: string }[]; correct: number }
  | { prompt: string; answer: string; accept?: string[] };

type InstructionSeriesItem = {
  title: string;
  body: string;
  questions: RawCeQuestion[];
}[];

type ArticleSeriesItem = {
  title: string;
  sections: { heading: string; body: string }[];
  questions: RawCeQuestion[];
};

function sliceArray(src: string, fromIndex: number): string | null {
  const start = src.indexOf("[", fromIndex);
  if (start === -1) return null;
  let depth = 0;
  let inStr = false;
  for (let i = start; i < src.length; i++) {
    const ch = src[i];
    if (inStr) {
      if (ch === "\\") { i++; continue; }
      if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') inStr = true;
    else if (ch === "[") depth++;
    else if (ch === "]") { depth--; if (depth === 0) return src.slice(start, i + 1); }
  }
  return null;
}

function evalArrayAfter(src: string, marker: string): unknown {
  const idx = src.indexOf(marker);
  if (idx === -1) throw new Error(`Marqueur introuvable : ${marker}`);
  const text = sliceArray(src, idx + marker.length);
  if (!text) throw new Error(`Tableau introuvable après : ${marker}`);
  // eslint-disable-next-line no-eval
  return eval(`(${text})`);
}

function loadCeRunnerArrays() {
  const src = readFileSync(CE_RUNNER, "utf8");
  return {
    instructions: evalArrayAfter(src, "const INSTRUCTION_SERIES: InstructionSeriesItem[] =") as InstructionSeriesItem[],
    articles: evalArrayAfter(src, "const ARTICLE_SERIES: ArticleSeriesItem[] =") as ArticleSeriesItem[],
  };
}

function renderStaticQuestion(q: RawCeQuestion, index: number): string[] {
  const lines: string[] = [];
  if ("choices" in q) {
    lines.push(`  • Q${index + 1} — Forme : QCM texte`);
    lines.push(`    Question : ${q.prompt}`);
    lines.push(`    Choix : ${q.choices.map((c, i) => `${String.fromCharCode(97 + i)}) ${c.label}`).join(" | ")}`);
    lines.push(`    Correct : ${String.fromCharCode(97 + q.correct)}`);
  } else {
    lines.push(`  • Q${index + 1} — Forme : saisie`);
    lines.push(`    Question : ${q.prompt}`);
    lines.push(`    Réponse : ${q.answer}${q.accept?.length ? ` (accepté : ${q.accept.join(", ")})` : ""}`);
  }
  return lines;
}

function isImageable(q: MultiQ): boolean {
  if (q.imageChoices.some((c) => /^\d/.test(c.label) && c.label.includes("CHF"))) return false;
  return q.imageChoices.every((c) => !!ceCoImageSource(c.image, c.label));
}

function renderMultiQuestion(q: MultiQ, slotLabels: readonly string[]): string[] {
  const imageable = isImageable(q);
  const lines: string[] = [];
  lines.push(`  • ${q.id}${imageable ? "" : " (non illustrable → QCM image remplacé par QCM texte)"}`);
  lines.push(`    - QCM texte : ${q.textQ}`);
  lines.push(`      Choix : ${q.textChoices.map((c, i) => `${String.fromCharCode(97 + i)}) ${c}`).join(" | ")}`);
  lines.push(`      Correct : ${String.fromCharCode(97 + q.textCorrect)}`);
  lines.push(`    - QCM image : ${q.imageQ}`);
  lines.push(`      Choix : ${q.imageChoices.map((c, i) => `${String.fromCharCode(97 + i)}) ${c.label}`).join(" | ")}`);
  lines.push(`      Correct : ${String.fromCharCode(97 + q.imageCorrect)}`);
  lines.push(`    - Saisie : ${q.fillQ}`);
  lines.push(`      Réponse : ${q.fillAnswer}${q.fillAccept?.length ? ` (accepté : ${q.fillAccept.join(", ")})` : ""}`);
  lines.push(`    - Formes fixes si position 1-4 dans une série : ${slotLabels.map((s, i) => `${i + 1}=${s}`).join(", ")}`);
  lines.push(`    - Au-delà de 4 questions : format aléatoire (saisie / QCM image / QCM texte)`);
  return lines;
}

function renderCeMessageBlock(title: string, item: (typeof CE_ORIENTATION_BASE)[number]): string[] {
  const lines: string[] = [];
  lines.push(`--- ${title} : ${item.id} ---`);
  if (item.from) lines.push(`De : ${item.from}`);
  if (item.subject) lines.push(`Objet : ${item.subject}`);
  lines.push(`Texte :`);
  lines.push(item.body.split("\n").map((l) => `  ${l}`).join("\n"));
  lines.push(`Questions du pool (${item.pool.length}) :`);
  for (const q of item.pool) {
    lines.push(...renderMultiQuestion(q, CE_CORE_SLOT_LABELS));
  }
  lines.push("");
  return lines;
}

function renderCoPoolBlock(poolId: string, pool: COMultiQuestion[]): string[] {
  const lines: string[] = [];
  lines.push(`--- Audio / pool : ${poolId} (${pool.length} questions) ---`);
  for (const q of pool) {
    lines.push(...renderMultiQuestion(q, CO_CORE_SLOT_LABELS));
  }
  lines.push("");
  return lines;
}

function main() {
  const { instructions, articles } = loadCeRunnerArrays();
  const out: string[] = [];

  out.push("QUESTIONS CE ET CO — NIVEAU A1 (base)");
  out.push("Généré automatiquement — ne pas éditer à la main");
  out.push(`Date : ${new Date().toISOString().slice(0, 10)}`);
  out.push("");
  out.push("=".repeat(72));
  out.push("COMPRÉHENSION ÉCRITE (CE)");
  out.push("=".repeat(72));
  out.push("");
  out.push("Règle de format pour les exercices multi-formats (orientation, email) :");
  out.push(`  Positions 1-4 : ${CE_CORE_SLOT_LABELS.join(" → ")}`);
  out.push("  Position 5+ : aléatoire");
  out.push("  Nombre de questions tirées par exercice en session : 6");
  out.push("");
  out.push("### Exercice 1 — Lire pour s'orienter");
  out.push("");
  for (const item of CE_ORIENTATION_BASE) {
    out.push(...renderCeMessageBlock("Orientation", item));
  }
  out.push("### Exercice 2 — Lire un message");
  out.push("");
  for (const item of CE_MESSAGES_BASE) {
    out.push(...renderCeMessageBlock("Message", item));
  }
  out.push("### Exercice 3 — Lire des instructions");
  out.push("");
  out.push("Format : QCM texte uniquement (pas de QCM image ni saisie).");
  out.push(`Nombre de séries : ${instructions.length}`);
  out.push("");
  instructions.forEach((series, seriesIdx) => {
    out.push(`--- Série ${seriesIdx + 1} (${series.length} cartes) ---`);
    series.forEach((card, cardIdx) => {
      out.push(`Carte ${cardIdx + 1} : ${card.title}`);
      out.push(`Texte :`);
      out.push(card.body.split("\n").map((l) => `  ${l}`).join("\n"));
      out.push(`Questions (${card.questions.length}) :`);
      card.questions.forEach((q, qi) => out.push(...renderStaticQuestion(q, qi)));
      out.push("");
    });
  });
  out.push("### Exercice 4 — Lire des informations");
  out.push("");
  out.push("Format : QCM texte ou saisie (pas de QCM image).");
  out.push(`Nombre d'articles : ${articles.length}`);
  out.push("");
  articles.forEach((article, articleIdx) => {
    out.push(`--- Article ${articleIdx + 1} : ${article.title} ---`);
    article.sections.forEach((section) => {
      out.push(`  [${section.heading}] ${section.body}`);
    });
    out.push(`Questions (${article.questions.length}) :`);
    article.questions.forEach((q, qi) => out.push(...renderStaticQuestion(q, qi)));
    out.push("");
  });

  out.push("=".repeat(72));
  out.push("COMPRÉHENSION ORALE (CO)");
  out.push("=".repeat(72));
  out.push("");
  out.push("Règle de format pour message / annonce / instruction (pools multi-formats) :");
  out.push(`  Positions 1-4 : ${CO_CORE_SLOT_LABELS.join(" → ")}`);
  out.push("  Position 5+ : aléatoire");
  out.push("  Nombre de questions par exercice base : 4 (message, annonce, instruction) ou 6 (scolaire)");
  out.push("");

  out.push("### Exercice — Comprendre un message (public)");
  out.push("");
  for (const [id, pool] of Object.entries(CO_QUESTION_POOLS_BASE_MESSAGES)) {
    out.push(...renderCoPoolBlock(id, pool));
  }

  out.push("### Exercice — Comprendre une annonce (public)");
  out.push("");
  for (const [id, pool] of Object.entries(CO_QUESTION_POOLS_BASE_OTHER)) {
    if (!id.includes("annonce")) continue;
    out.push(...renderCoPoolBlock(id, pool));
  }

  out.push("### Exercice — Comprendre des instructions (public)");
  out.push("");
  for (const [id, pool] of Object.entries(CO_QUESTION_POOLS_BASE_OTHER)) {
    if (!id.includes("instruction")) continue;
    out.push(...renderCoPoolBlock(id, pool));
  }

  out.push("### Exercice — Comprendre des conversations (public)");
  out.push("");
  out.push("Format spécial : grille d'images conversation (conversation_image_grid), pas de multi-format.");
  out.push("Pools QCM associés (si utilisés ailleurs) :");
  for (const [id, pool] of Object.entries(CO_QUESTION_POOLS_BASE_OTHER)) {
    if (!id.includes("conversation")) continue;
    out.push(...renderCoPoolBlock(id, pool));
  }

  out.push("### Exercice — Identifier des objets (public)");
  out.push("");
  out.push("Format spécial : object_pick (cliquer sur les objets entendus, 5 cartes).");
  for (const [id, def] of Object.entries(CO_OBJET_PICK)) {
    out.push(`--- ${id} ---`);
    def.cards.forEach((card, i) => {
      out.push(`  Carte ${i + 1} : ${card.label}${card.heard ? " [entendu]" : " [leurre]"}`);
    });
    out.push("");
  }

  out.push("### Contenu scolaire (base scolaire)");
  out.push("");
  for (const [id, pool] of Object.entries(CO_QUESTION_POOLS_SCOLAIRE_BASE)) {
    out.push(...renderCoPoolBlock(id, pool));
  }

  writeFileSync(OUT, out.join("\n"), "utf8");
  console.log(`Écrit : ${OUT} (${out.length} lignes)`);
}

main();
