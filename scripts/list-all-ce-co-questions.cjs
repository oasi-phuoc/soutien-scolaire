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
// CE — reconstruct questions exactly as the component does
// --------------------------------------------------------------------------
function emailQuestions(from, subject, a, b, c, d) {
  return [
    { prompt: "Quelle information principale est donnée dans ce message ?", choices: [a, "Une information sans rapport", "Une publicité"], correct: 0 },
    { prompt: "Quel autre détail faut-il retenir ?", choices: ["Le document ne le dit pas", b, "Une erreur de date"], correct: 1 },
    { prompt: "Que faut-il apporter ou faire ?", choices: [c, "Ne rien faire", "Téléphoner à la police"], correct: 0 },
    { prompt: "Quel est le dernier détail important ?", choices: ["Le message est annule", d, "La personne doit partir"], correct: 1 },
    { prompt: "Qui envoie le message ?", answer: (from.split("@")[0] ?? from) },
    { prompt: "Quel est l'objet du message ?", answer: subject },
  ];
}
function instructionQuestions(title, body) {
  return [
    { prompt: "Quelle action est demandee ?", choices: [title, "Changer de sujet", "Ignorer le document"], correct: 0 },
    { prompt: "Que faut-il faire selon le texte ?", choices: [body.split(",")[0] ?? body, "Partir sans prevenir", "Ne rien vérifier"], correct: 0 },
  ];
}
function articleQuestions(title, h1, b1, h2, b2, h3, b3) {
  return [
    { prompt: "Quel est le sujet principal du texte ?", choices: [title, "Un voyage touristique", "Une recette de cuisine"], correct: 0 },
    { prompt: `Que dit la partie "${h1}" ?`, choices: [b1, "Elle ne donne aucune information", "Elle parle d'un autre sujet"], correct: 0 },
    { prompt: `Quel mot complete le conseil sur "${h2}" ?`, answer: h2 },
    { prompt: `Que faut-il faire selon la partie "${h3}" ?`, choices: [b3, "Arreter de lire", "Ignorer les conseils"], correct: 0 },
    { prompt: "A quoi sert ce texte ?", choices: ["Donner des conseils", "Vendre une voiture", "Annoncer un concert"], correct: 0 },
    { prompt: "Combien de parties contient l'article ?", answer: "3" },
    { prompt: "Quel titre convient le mieux ?", choices: [title, "Une histoire imaginaire", "Un menu de restaurant"], correct: 0 },
  ];
}

function normQuestion(q) {
  if ("answer" in q && !q.choices) return { type: "saisie", prompt: q.prompt, answer: q.answer };
  const labels = q.choices.map((c) => (typeof c === "string" ? c : c.label));
  return { type: "qcm", prompt: q.prompt, choices: labels, correct: q.correct };
}

function extractCe() {
  const src = read(ceFile);
  const EMAIL_SERIES = evalArrayAfter(src, "const EMAIL_SERIES: EmailSeriesItem[] =");
  const INSTRUCTION_SERIES = evalArrayAfter(src, "const INSTRUCTION_SERIES: InstructionSeriesItem[] =");
  const ARTICLE_SERIES = evalArrayAfter(src, "const ARTICLE_SERIES: ArticleSeriesItem[] =");
  const ORIENTATION_TOPICS = evalArrayAfter(src, "const ORIENTATION_TOPICS: OrientationSeriesItem[] =");
  const ORIENTATION_MOYEN = evalArrayAfter(src, "const ORIENTATION_MOYEN: OrientationSeriesItem[] =");

  // makeEmailPool scenarios (avance branch and moyen/else branch)
  const scenIdx = src.indexOf('const scenarios = level === "avance"');
  const avanceText = sliceArray(src, src.indexOf("? [", scenIdx));
  const afterAvance = src.indexOf("? [", scenIdx) + avanceText.length;
  const moyenText = sliceArray(src, src.indexOf(": [", afterAvance));
  // eslint-disable-next-line no-eval
  const avanceScenarios = eval("(" + avanceText + ")");
  // eslint-disable-next-line no-eval
  const moyenScenarios = eval("(" + moyenText + ")");
  const setsArr = evalArrayAfter(src, "const sets =");
  const topicsArr = evalArrayAfter(src, "const topics =");

  const orientationToItems = (pool) =>
    pool.map((it, i) => ({
      title: `Association — ${it.context}`,
      questions: it.people.map(([statement, docIdx]) => ({
        type: "association",
        prompt: statement,
        answer: it.docs[docIdx][0],
      })),
    }));

  const staticEmails = (pool) => pool.map((it) => ({ title: `Courriel — ${it.subject} (${it.from})`, questions: it.questions.map(normQuestion) }));
  const staticInstructions = (pool) =>
    pool.flatMap((set, si) => set.map((card) => ({ title: `Consigne — ${card.title}`, questions: card.questions.map(normQuestion) })));
  const staticArticles = (pool) => pool.map((it) => ({ title: `Article — ${it.title}`, questions: it.questions.map(normQuestion) }));

  const genEmails = (scenarios) =>
    scenarios.map(([from, subject, body, a, b, c, d]) => ({
      title: `Courriel — ${subject} (${from})`,
      questions: emailQuestions(from, subject, a, b, c, d).map(normQuestion),
    }));
  const genInstructions = (setsA) =>
    setsA.flatMap((set) => set.map(([title, body]) => ({ title: `Consigne — ${title}`, questions: instructionQuestions(title, body).map(normQuestion) })));
  const genArticles = (topics) =>
    topics.map(([title, h1, b1, h2, b2, h3, b3]) => ({ title: `Article — ${title}`, questions: articleQuestions(title, h1, b1, h2, b2, h3, b3).map(normQuestion) }));

  return {
    base: {
      orientation: orientationToItems(ORIENTATION_TOPICS),
      emails: staticEmails(EMAIL_SERIES),
      instructions: staticInstructions(INSTRUCTION_SERIES),
      articles: staticArticles(ARTICLE_SERIES),
    },
    moyen: {
      orientation: orientationToItems(ORIENTATION_MOYEN),
      emails: genEmails(moyenScenarios),
      instructions: genInstructions(setsArr),
      articles: genArticles(topicsArr),
    },
    avance: {
      orientation: orientationToItems(ORIENTATION_MOYEN), // ORIENTATION_AVANCE dérive de MOYEN (mêmes énoncés)
      emails: genEmails(avanceScenarios),
      instructions: genInstructions(setsArr),
      articles: genArticles(topicsArr),
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
