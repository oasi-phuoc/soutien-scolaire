/**
 * Extract EVERY image-based question in CE (compréhension écrite) and
 * CO (compréhension orale), with its activity id, question number and the
 * labels of the image options.
 *
 * Sources:
 *  - CO pools (QCM image): each RawQ `img: [a, b, c]` in co-questions-*.ts.
 *  - CO object-pick: 5 image cards per group in co-questions-objet-pick.ts.
 *  - CE image MCQ: choices with an `image:` field in ComprehensionEcritRunner.tsx.
 *
 * Usage:  node scripts/list-ce-co-image-questions.cjs
 * Output: ref/ce-co-image-questions.md
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const commDir = "lib/curriculum/content/communication";
const outFile = path.join(root, "ref/ce-co-image-questions.md");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}
function strings(arrBody) {
  return [...arrBody.matchAll(/"([^"]*)"/g)].map((m) => m[1]);
}

// --------------------------------------------------------------------------
// CO pools — QCM image (img triples)
// --------------------------------------------------------------------------
const CO_POOL_FILES = [
  ["Base — messages", "co-questions-base-messages.ts"],
  ["Base — autres", "co-questions-base-other.ts"],
  ["Moyen", "co-questions-moyen.ts"],
  ["Avancé", "co-questions-avance.ts"],
  ["Avancé — extra", "co-questions-avance-extra.ts"],
];

function extractCoPools() {
  const out = [];
  for (const [levelLabel, file] of CO_POOL_FILES) {
    const src = read(`${commDir}/${file}`);
    const groups = [];
    const startRe = /buildPool\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*,\s*\[/g;
    const starts = [];
    let m;
    while ((m = startRe.exec(src))) starts.push({ slug: m[2], arrStart: m.index + m[0].length });
    for (let gi = 0; gi < starts.length; gi++) {
      const { slug, arrStart } = starts[gi];
      // Bound the group block by the next buildPool start (or end of file).
      const nextStart = gi + 1 < starts.length ? starts[gi + 1].arrStart : src.length;
      const block = src.slice(arrStart, nextStart);
      const items = [];
      // Anchor on real RawQ items (id + textQ + img + imgC).
      const itemRe = /id:\s*"([^"]+)"\s*,\s*textQ:[\s\S]*?\bimg:\s*\[([^\]]*)\][\s\S]*?imgC:\s*(\d+)/g;
      let im;
      while ((im = itemRe.exec(block))) {
        items.push({ id: im[1], labels: strings(im[2]), correct: Number(im[3]) });
      }
      groups.push({ slug, items });
    }
    out.push({ levelLabel, file, groups });
  }
  return out;
}

// --------------------------------------------------------------------------
// CO object-pick — 5 image cards per group
// --------------------------------------------------------------------------
function extractObjectPick() {
  const src = read(`${commDir}/co-questions-objet-pick.ts`);
  const body = src.slice(src.indexOf("CO_OBJET_PICK"));
  const out = [];
  const groupRe = /"([a-z0-9-]+)":\s*\{\s*cards:\s*\[([\s\S]*?)\],\s*\},/g;
  let m;
  while ((m = groupRe.exec(body))) {
    const slug = m[1];
    const cards = [];
    const cardRe = /\{\s*label:\s*"([^"]+)"[\s\S]*?heard:\s*(true|false)\s*\}/g;
    let c;
    while ((c = cardRe.exec(m[2]))) cards.push({ label: c[1], heard: c[2] === "true" });
    if (cards.length) out.push({ slug, cards });
  }
  return out;
}

// --------------------------------------------------------------------------
// CE — image MCQ (choices carrying an image)
// --------------------------------------------------------------------------
function extractCe() {
  const src = read("components/communication/ComprehensionEcritRunner.tsx");
  const out = [];
  // A choices array contains no "]" inside, so [^\]]* captures exactly one array.
  const qRe = /prompt:\s*"([^"]+)"\s*,\s*choices:\s*\[([^\]]*)\]\s*,\s*correct:\s*(\d+)\s*,\s*image:\s*true/g;
  let m;
  while ((m = qRe.exec(src))) {
    const prompt = m[1];
    const labels = [...m[2].matchAll(/label:\s*"([^"]+)"/g)].map((x) => x[1]);
    out.push({ prompt, labels, correct: Number(m[3]) });
  }
  return out;
}

function mark(labels, correct) {
  return labels.map((l, i) => (i === correct ? `${l} ✅` : l)).join(" · ");
}

function main() {
  const coPools = extractCoPools();
  const objectPick = extractObjectPick();
  const ce = extractCe();

  const lines = [];
  lines.push("# Questions à image — CE & CO (liste complète)");
  lines.push("");
  lines.push(`_Généré par \`scripts/list-ce-co-image-questions.cjs\` — ${new Date().toISOString().slice(0, 10)}_`);
  lines.push("");
  lines.push("Pour chaque activité : le numéro de question et les libellés des 3 images (la bonne réponse est marquée ✅).");
  lines.push("");

  // Totals
  let coQ = 0;
  for (const f of coPools) for (const g of f.groups) coQ += g.items.length;
  lines.push("## Totaux");
  lines.push("");
  lines.push(`- CO — QCM image (pools) : **${coQ}** questions dans **${coPools.reduce((a, f) => a + f.groups.length, 0)}** activités`);
  lines.push(`- CO — object-pick (5 images/activité) : **${objectPick.length}** activités`);
  lines.push(`- CE — QCM image : **${ce.length}** questions`);
  lines.push("");
  lines.push("> Note CO : dans les pools, **chaque** question possède une variante « QCM image » (tableau `img`) ; le format présenté (texte / image / saisie) est tiré au hasard à l'exécution.");
  lines.push("");

  // CO pools
  lines.push("## CO — QCM image (pools)");
  lines.push("");
  for (const f of coPools) {
    lines.push(`### ${f.levelLabel}`);
    lines.push("");
    for (const g of f.groups) {
      lines.push(`**${g.slug}**`);
      lines.push("");
      g.items.forEach((it, i) => {
        lines.push(`- question ${i + 1} (${it.id}) : ${mark(it.labels, it.correct)}`);
      });
      lines.push("");
    }
  }

  // CO object-pick
  lines.push("## CO — object-pick (cliquer les objets entendus)");
  lines.push("");
  lines.push("_Chaque activité montre 5 images ; celles à sélectionner (entendues) sont marquées ✅._");
  lines.push("");
  for (const g of objectPick) {
    const cards = g.cards.map((c) => (c.heard ? `${c.label} ✅` : c.label)).join(" · ");
    lines.push(`- **${g.slug}** : ${cards}`);
  }
  lines.push("");

  // CE
  lines.push("## CE — QCM image");
  lines.push("");
  ce.forEach((q, i) => {
    lines.push(`- question ${i + 1} — « ${q.prompt} » : ${mark(q.labels, q.correct)}`);
  });
  lines.push("");

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, lines.join("\n"), "utf8");

  console.log(`CO pool image questions: ${coQ} (in ${coPools.reduce((a, f) => a + f.groups.length, 0)} activities)`);
  console.log(`CO object-pick activities: ${objectPick.length}`);
  console.log(`CE image questions: ${ce.length}`);
  console.log(`Report → ${path.relative(root, outFile)}`);
}

main();
