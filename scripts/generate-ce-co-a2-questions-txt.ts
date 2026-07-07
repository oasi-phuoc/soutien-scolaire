/**
 * Génère public/assets/expression/ce-co-questions-a2.txt
 * Usage : npx --yes tsx scripts/generate-ce-co-a2-questions-txt.ts
 */
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { CO_CORE_SLOT_LABELS, CE_CORE_SLOT_LABELS } from "../lib/curriculum/content/communication/ce-co-question-formats";
import type { CEMessageItem, CEMultiQuestion } from "../lib/curriculum/content/communication/ce-questions-helpers";
import { ORIENTATION_MOYEN, type OrientationSeriesItem } from "../lib/curriculum/content/communication/ce-orientation-moyen";
import { CE_MESSAGES_MOYEN } from "../lib/curriculum/content/communication/ce-messages-moyen";
import { CE_INSTRUCTIONS_MOYEN } from "../lib/curriculum/content/communication/ce-instructions-moyen";
import { CE_ARTICLES_MOYEN } from "../lib/curriculum/content/communication/ce-articles-moyen";
import { CO_QUESTION_POOLS_MOYEN } from "../lib/curriculum/content/communication/co-questions-moyen";
import { CO_CONVERSATION_MATCH } from "../lib/curriculum/content/communication/co-questions-moyen-conversation-match";
import type { COMultiQuestion } from "../lib/curriculum/content/communication/co-questions-helpers";
import { ceCoImageSource } from "../lib/curriculum/word-image-resolver";

const OUT = resolve(process.cwd(), "public/assets/expression/ce-co-questions-a2.txt");

type MultiQ = CEMultiQuestion | COMultiQuestion;

function loadCeMoyenArrays() {
  return {
    emails: CE_MESSAGES_MOYEN,
    instructions: CE_INSTRUCTIONS_MOYEN,
    articles: CE_ARTICLES_MOYEN,
  };
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

function renderOrientationBlock(item: OrientationSeriesItem, index: number): string[] {
  const lines: string[] = [];
  lines.push(`--- Orientation série ${index + 1} ---`);
  lines.push(`Contexte : ${item.context}`);
  lines.push(`Format : tableau d'association (6 documents × 8 personnes, 2 leurres)`);
  lines.push(`Documents (${item.docs.length}) :`);
  item.docs.forEach(([title, subtitle, body], docIdx) => {
    lines.push(`  Doc ${docIdx + 1} — ${title} (${subtitle})`);
    lines.push(`    ${body}`);
  });
  lines.push(`Personnes et réponses attendues :`);
  item.people.forEach(([person, docIdx]) => {
    const ans = docIdx === -1 ? "aucun document (leurre)" : `document ${docIdx + 1}`;
    lines.push(`  • ${person} → ${ans}`);
  });
  lines.push("");
  return lines;
}

function renderMessageBlock(item: CEMessageItem, index: number): string[] {
  const lines: string[] = [];
  lines.push(`--- Message ${index + 1} : ${item.subject} ---`);
  lines.push(`De : ${item.from ?? "—"}`);
  lines.push(`Objet : ${item.subject ?? "—"}`);
  lines.push(`Format : pool multi-format (6 questions tirées à l'éval)`);
  lines.push(`Texte :`);
  lines.push(item.body.split("\n").map((l) => `  ${l}`).join("\n"));
  lines.push(`Pool (${item.pool.length} questions) :`);
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

function renderConversationMatchBlock(poolId: string): string[] {
  const def = CO_CONVERSATION_MATCH[poolId];
  if (!def) return [];
  const lines: string[] = [];
  lines.push(`--- Conversation (grille) : ${poolId} ---`);
  lines.push(`Format : match_grid — associer 4 dialogues aux situations (6 situations, 2 leurres)`);
  lines.push(`Situations :`);
  def.situations.forEach((s, i) => lines.push(`  ${i + 1}. ${s}`));
  lines.push(`Réponses par dialogue :`);
  def.correctByDialogue.forEach((s, i) => lines.push(`  Dialogue ${i + 1} → ${s}`));
  const pool = CO_QUESTION_POOLS_MOYEN[poolId];
  if (pool?.length) {
    lines.push(`Questions détaillées du pool (${pool.length}) :`);
    for (const q of pool) {
      lines.push(...renderMultiQuestion(q, CO_CORE_SLOT_LABELS));
    }
  }
  lines.push("");
  return lines;
}

function main() {
  const { emails, instructions, articles } = loadCeMoyenArrays();
  const out: string[] = [];

  out.push("QUESTIONS CE ET CO — NIVEAU A2 (moyen)");
  out.push("Généré automatiquement — ne pas éditer à la main");
  out.push(`Date : ${new Date().toISOString().slice(0, 10)}`);
  out.push("");
  out.push("=".repeat(72));
  out.push("COMPRÉHENSION ÉCRITE (CE)");
  out.push("=".repeat(72));
  out.push("");
  out.push("### Exercice 1 — Lire pour s'orienter");
  out.push("");
  out.push("Format : tableau d'association documents / personnes (pas de multi-format).");
  out.push(`Nombre de séries : ${ORIENTATION_MOYEN.length}`);
  out.push("");
  ORIENTATION_MOYEN.forEach((item, i) => out.push(...renderOrientationBlock(item, i)));

  out.push("### Exercice 2 — Lire des messages");
  out.push("");
  out.push("Format : pool multi-format (QCM texte / QCM image / saisie), 6 questions tirées à l'éval.");
  out.push(`Nombre de messages : ${emails.length}`);
  out.push("");
  emails.forEach((item, i) => out.push(...renderMessageBlock(item, i)));

  out.push("### Exercice 3 — Lire des instructions");
  out.push("");
  out.push("Format : 3 textes × 2 questions (formats distincts par texte), pool 4 Q par carte.");
  out.push(`Nombre de séries : ${instructions.length}`);
  out.push("");
  instructions.forEach((series, seriesIdx) => {
    out.push(`--- Série ${seriesIdx + 1} (${series.cards.length} cartes) — ${series.id} ---`);
    series.cards.forEach((card, cardIdx) => {
      out.push(`Carte ${cardIdx + 1} : ${card.title}`);
      out.push(`Texte :`);
      out.push(card.body.split("\n").map((l) => `  ${l}`).join("\n"));
      out.push(`Pool (${card.pool.length} questions) :`);
      for (const q of card.pool) {
        out.push(...renderMultiQuestion(q, CE_CORE_SLOT_LABELS));
      }
      out.push("");
    });
  });

  out.push("### Exercice 4 — Lire des informations");
  out.push("");
  out.push("Format : pool multi-format, 7 questions tirées à l'éval.");
  out.push(`Nombre d'articles : ${articles.length}`);
  out.push("");
  articles.forEach((article, articleIdx) => {
    out.push(`--- Article ${articleIdx + 1} : ${article.title} ---`);
    article.sections.forEach((section) => {
      out.push(`  [${section.heading}] ${section.body}`);
    });
    out.push(`Pool (${article.pool.length} questions) :`);
    for (const q of article.pool) {
      out.push(...renderMultiQuestion(q, CE_CORE_SLOT_LABELS));
    }
    out.push("");
  });

  out.push("=".repeat(72));
  out.push("COMPRÉHENSION ORALE (CO)");
  out.push("=".repeat(72));
  out.push("");
  out.push("Règle de format pour message / annonce / radio (pools multi-formats) :");
  out.push(`  Positions 1-4 : ${CO_CORE_SLOT_LABELS.join(" → ")}`);
  out.push("  Position 5+ : aléatoire");
  out.push("  Nombre de questions par exercice moyen : 6 (message, annonce, radio)");
  out.push("");

  out.push("### Exercice — Comprendre un message");
  out.push("");
  for (const [id, pool] of Object.entries(CO_QUESTION_POOLS_MOYEN)) {
    if (!id.includes("message")) continue;
    out.push(...renderCoPoolBlock(id, pool));
  }

  out.push("### Exercice — Comprendre une annonce");
  out.push("");
  for (const [id, pool] of Object.entries(CO_QUESTION_POOLS_MOYEN)) {
    if (!id.includes("annonce")) continue;
    out.push(...renderCoPoolBlock(id, pool));
  }

  out.push("### Exercice — Comprendre des émissions de radio");
  out.push("");
  for (const [id, pool] of Object.entries(CO_QUESTION_POOLS_MOYEN)) {
    if (!id.includes("radio")) continue;
    out.push(...renderCoPoolBlock(id, pool));
  }

  out.push("### Exercice — Comprendre des conversations");
  out.push("");
  out.push("Format principal : match_grid (grille d'association situations / dialogues).");
  out.push("Chaque pool conversation inclut aussi des questions multi-format par dialogue.");
  out.push("");
  for (const id of Object.keys(CO_QUESTION_POOLS_MOYEN).filter((k) => k.includes("conversation"))) {
    out.push(...renderConversationMatchBlock(id));
  }

  writeFileSync(OUT, out.join("\n"), "utf8");
  console.log(`Écrit : ${OUT} (${out.length} lignes)`);
}

main();
