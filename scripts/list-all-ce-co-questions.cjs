/**
 * Export EVERY CE (compréhension écrite) and CO (compréhension orale) question,
 * grouped by level (base / moyen / avancé), into a plain-text file.
 *
 * CO: pool questions (textQ + 3 options + réponse à saisir), object-pick,
 *     conversation-match — extracted from co-questions-*.ts.
 * CE: reconstructed exactly like ComprehensionEcritRunner.tsx builds them:
 *     - base  → static ORIENTATION_TOPICS / EMAIL_SERIES / INSTRUCTION_SERIES / ARTICLE_SERIES
 *     - moyen → ORIENTATION_MOYEN + makeEmailPool(moyen) + makeInstructionPool + makeArticlePool
 *     - avancé→ ORIENTATION_AVANCE + makeEmailPool(avance) + makeInstructionPool + makeArticlePool
 *   The real data arrays are read (and eval'd) straight from the component so
 *   this listing stays faithful to the source.
 *
 * Usage:  node scripts/list-all-ce-co-questions.cjs
 * Output: public/vocab-temp/questions-ce-co.txt
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const commDir = "lib/curriculum/content/communication";
const ceFile = "components/communication/ComprehensionEcritRunner.tsx";
const outFile = path.join(root, "public/vocab-temp/questions-ce-co.txt");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

/** From the index of a "[", return the array-literal text up to its match (string-aware). */
function sliceArray(src, fromIndex) {
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

function evalArrayAfter(src, marker) {
  const idx = src.indexOf(marker);
  if (idx === -1) throw new Error("marker not found: " + marker);
  const text = sliceArray(src, idx + marker.length);
  // eslint-disable-next-line no-eval
  return eval("(" + text + ")");
}

// --------------------------------------------------------------------------
// CE — read the authored pools (base / moyen / avancé) straight from the source
// --------------------------------------------------------------------------
function normQuestion(q) {
  if ("answer" in q && !q.choices) return { type: "saisie", prompt: q.prompt, answer: q.answer };
  const labels = q.choices.map((c) => (typeof c === "string" ? c : c.label));
  return { type: "qcm", prompt: q.prompt, choices: labels, correct: q.correct };
}

function normMultiQuestion(q) {
  return {
    type: "pool",
    id: q.id,
    textQ: q.textQ,
    textChoices: q.textChoices,
    textCorrect: q.textCorrect,
    fillQ: q.fillQ,
    fillAnswer: q.fillAnswer,
  };
}

function extractCe() {
  const src = read(ceFile);
  const arr = (marker) => evalArrayAfter(src, marker);
  const arrFile = (rel, marker) => evalArrayAfter(read(`${commDir}/${rel}`), marker);

  const orientationToItems = (pool) =>
    pool.map((it) => ({
      title: `Association — ${it.context}`,
      questions: it.people.map(([statement, docIdx]) => ({ type: "association", prompt: statement, answer: it.docs[docIdx][0] })),
    }));
  const emails = (pool) => pool.map((it) => ({ title: `Courriel — ${it.subject} (${it.from})`, questions: it.questions.map(normQuestion) }));
  const messagesFromPool = (pool) =>
    pool.map((it) => ({
      title: `Message — ${it.subject} (${it.from ?? ""})`,
      questions: it.pool.map(normMultiQuestion),
    }));
  const instructions = (pool) => pool.flatMap((set) => set.map((card) => ({ title: `Consigne — ${card.title}`, questions: card.questions.map(normQuestion) })));
  const instructionsMoyen = (pool) =>
    pool.flatMap((series) =>
      series.cards.map((card) => ({
        title: `Consigne — ${card.title}`,
        questions: card.pool.map(normMultiQuestion),
      })),
    );
  const articles = (pool) => pool.map((it) => ({ title: `Article — ${it.title}`, questions: it.questions.map(normQuestion) }));
  const articlesMoyen = (pool) =>
    pool.map((it) => ({
      title: `Article — ${it.title}`,
      questions: it.pool.map(normMultiQuestion),
    }));

  return {
    base: {
      orientation: orientationToItems(arr("const ORIENTATION_TOPICS: OrientationSeriesItem[] =")),
      emails: emails(arr("const EMAIL_SERIES: EmailSeriesItem[] =")),
      instructions: instructions(arr("const INSTRUCTION_SERIES: InstructionSeriesItem[] =")),
      articles: articles(arr("const ARTICLE_SERIES: ArticleSeriesItem[] =")),
    },
    moyen: {
      orientation: orientationToItems(arrFile("ce-orientation-moyen.ts", "export const ORIENTATION_MOYEN: OrientationSeriesItem[] =")),
      emails: messagesFromPool(arrFile("ce-messages-moyen.ts", "export const CE_MESSAGES_MOYEN: CEMessageItem[] =")),
      instructions: instructionsMoyen(arrFile("ce-instructions-moyen.ts", "export const CE_INSTRUCTIONS_MOYEN: CEInstructionItem[] =")),
      articles: articlesMoyen(arrFile("ce-articles-moyen.ts", "export const CE_ARTICLES_MOYEN: CEArticleItem[] =")),
    },
    avance: {
      orientation: orientationToItems(arr("const ORIENTATION_MOYEN: OrientationSeriesItem[] =")), // ORIENTATION_AVANCE dérive de MOYEN
      emails: emails(arr("const CE_AVANCE_EMAILS: EmailSeriesItem[] =")),
      instructions: instructions(arr("const CE_AVANCE_INSTRUCTIONS: InstructionSeriesItem[] =")),
      articles: articles(arr("const CE_AVANCE_ARTICLES: ArticleSeriesItem[] =")),
    },
  };
}

// --------------------------------------------------------------------------
// CO — pools, object-pick, conversation-match
// --------------------------------------------------------------------------
function strings(body) {
  return [...body.matchAll(/"([^"]*)"/g)].map((m) => m[1]);
}
function extractCoPoolFile(file) {
  const src = read(`${commDir}/${file}`);
  const startRe = /buildPool\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*\[/g;
  const starts = [];
  let m;
  while ((m = startRe.exec(src))) starts.push({ slug: m[2], arrStart: m.index + m[0].length });
  const groups = [];
  for (let i = 0; i < starts.length; i++) {
    const { slug, arrStart } = starts[i];
    const end = i + 1 < starts.length ? starts[i + 1].arrStart : src.length;
    const block = src.slice(arrStart, end);
    const items = [];
    const itemRe = /id:\s*"([^"]+)"\s*,\s*textQ:\s*"([^"]*)"\s*,\s*text:\s*\[([^\]]*)\]\s*,\s*textC:\s*(\d+)[\s\S]*?fill:\s*"([^"]*)"/g;
    let im;
    while ((im = itemRe.exec(block))) {
      items.push({ id: im[1], prompt: im[2], choices: strings(im[3]), correct: Number(im[4]), fill: im[5] });
    }
    groups.push({ slug, items });
  }
  return groups;
}
function extractObjectPick() {
  const src = read(`${commDir}/co-questions-objet-pick.ts`);
  const body = src.slice(src.indexOf("CO_OBJET_PICK"));
  const out = [];
  const groupRe = /"([a-z0-9-]+)":\s*\{\s*cards:\s*\[([\s\S]*?)\],\s*\},/g;
  let m;
  while ((m = groupRe.exec(body))) {
    const cards = [];
    const cardRe = /\{\s*label:\s*"([^"]+)"[\s\S]*?heard:\s*(true|false)\s*\}/g;
    let c;
    while ((c = cardRe.exec(m[2]))) cards.push({ label: c[1], heard: c[2] === "true" });
    if (cards.length) out.push({ slug: m[1], cards });
  }
  return out;
}
function extractMatch() {
  const rel = `${commDir}/co-questions-moyen-conversation-match.ts`;
  const src = read(rel);
  const out = [];
  const re = /"([^"]+)":\s*\{\s*situations:\s*\[([^\]]*)\]\s*,\s*correctByDialogue:\s*\[([^\]]*)\]/g;
  let m;
  while ((m = re.exec(src))) {
    out.push({ id: m[1], situations: strings(m[2]), correct: strings(m[3]) });
  }
  return out;
}

// --------------------------------------------------------------------------
// Render
// --------------------------------------------------------------------------
function fmtQuestion(n, q) {
  if (q.type === "pool") {
    const opts = q.textChoices.map((c, i) => (i === q.textCorrect ? `${c} ✓` : c)).join(" | ");
    return `    ${n}. [${q.id}] QCM : ${q.textQ}\n        ${opts}\n        Saisie : ${q.fillQ} → ${q.fillAnswer}`;
  }
  if (q.type === "saisie") return `    ${n}. ${q.prompt}\n        [réponse à saisir] → ${q.answer}`;
  if (q.type === "association") return `    ${n}. ${q.prompt}\n        [associer] → ${q.answer}`;
  const opts = q.choices.map((c, i) => (i === q.correct ? `${c} ✓` : c)).join(" | ");
  return `    ${n}. ${q.prompt}\n        ${opts}`;
}

function renderCeSection(title, data) {
  const lines = [`### ${title}`, ""];
  const block = (label, items) => {
    lines.push(`  — ${label} (${items.reduce((a, it) => a + it.questions.length, 0)} questions dans ${items.length} activités) —`, "");
    for (const it of items) {
      lines.push(`  • ${it.title}`);
      it.questions.forEach((q, i) => lines.push(fmtQuestion(i + 1, q)));
      lines.push("");
    }
  };
  block("Orientation / association", data.orientation);
  block("Courriels", data.emails);
  block("Consignes", data.instructions);
  block("Articles", data.articles);
  return lines;
}

function renderCoPools(title, files) {
  const lines = [`### ${title}`, ""];
  let total = 0;
  for (const [label, file] of files) {
    const groups = extractCoPoolFile(file);
    for (const g of groups) {
      lines.push(`  • ${g.slug}`);
      g.items.forEach((it, i) => {
        const opts = it.choices.map((c, k) => (k === it.correct ? `${c} ✓` : c)).join(" | ");
        lines.push(`    ${i + 1}. ${it.prompt}`);
        lines.push(`        QCM : ${opts}`);
        lines.push(`        Saisie → ${it.fill}`);
        total++;
      });
      lines.push("");
    }
  }
  lines.push(`  (Total ${title} : ${total} questions)`, "");
  return lines;
}

function main() {
  const ce = extractCe();
  const lines = [];
  lines.push("===============================================================");
  lines.push(" TOUTES LES QUESTIONS — Compréhension écrite (CE) & orale (CO)");
  lines.push(" Par niveau : Base / Moyen / Avancé");
  lines.push(` Généré par scripts/list-all-ce-co-questions.cjs — ${new Date().toISOString().slice(0, 10)}`);
  lines.push(" (✓ = bonne réponse)");
  lines.push("===============================================================");
  lines.push("");

  // ---- CE ----
  lines.push("###############################################################");
  lines.push("# COMPRÉHENSION ÉCRITE (CE)");
  lines.push("###############################################################");
  lines.push("");
  lines.push(...renderCeSection("CE — NIVEAU BASE (CE-1)", ce.base));
  lines.push(...renderCeSection("CE — NIVEAU MOYEN (CE-2)", ce.moyen));
  lines.push(...renderCeSection("CE — NIVEAU AVANCÉ (CE-3)", ce.avance));

  // ---- CO ----
  lines.push("###############################################################");
  lines.push("# COMPRÉHENSION ORALE (CO)");
  lines.push("###############################################################");
  lines.push("");
  lines.push("Note : chaque question de pool possède 3 formes (QCM texte / QCM image / saisie) ;");
  lines.push("le format affiché est tiré au hasard. On liste ici l'énoncé, le QCM texte et la réponse à saisir.");
  lines.push("");
  lines.push(...renderCoPools("CO — NIVEAU BASE", [["messages", "co-questions-base-messages.ts"], ["autres", "co-questions-base-other.ts"]]));
  lines.push(...renderCoPools("CO — NIVEAU MOYEN", [["moyen", "co-questions-moyen.ts"]]));
  lines.push(...renderCoPools("CO — NIVEAU AVANCÉ", [["avancé", "co-questions-avance.ts"], ["avancé extra", "co-questions-avance-extra.ts"]]));

  // object-pick
  const op = extractObjectPick();
  lines.push("### CO — Object-pick (cliquer les objets entendus, 5 images/activité)");
  lines.push("");
  for (const g of op) {
    const cards = g.cards.map((c) => (c.heard ? `${c.label} ✓` : c.label)).join(" | ");
    lines.push(`  • ${g.slug} : ${cards}`);
  }
  lines.push("");

  // conversation-match
  const match = extractMatch();
  lines.push("### CO — Conversation-match (associer 4 dialogues à des situations)");
  lines.push("");
  for (const g of match) {
    lines.push(`  • ${g.id}`);
    lines.push(`      Situations : ${g.situations.join(" | ")}`);
    lines.push(`      Réponses (dialogues 1→4) : ${g.correct.join(" | ")}`);
  }
  lines.push("");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, lines.join("\n"), "utf8");

  // counts
  const ceCount = (d) => ["orientation", "emails", "instructions", "articles"].reduce((a, k) => a + d[k].reduce((s, it) => s + it.questions.length, 0), 0);
  console.log(`CE base=${ceCount(ce.base)} moyen=${ceCount(ce.moyen)} avancé=${ceCount(ce.avance)}`);
  console.log(`Object-pick activities=${op.length}, conversation-match=${match.length}`);
  console.log(`Wrote → ${path.relative(root, outFile)} (${lines.length} lignes)`);
}

main();
