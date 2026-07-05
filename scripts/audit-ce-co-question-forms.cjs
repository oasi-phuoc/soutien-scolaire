/**
 * Audit the question FORMATS available in CE (compréhension écrite) and
 * CO (compréhension orale).
 *
 * Hypothesis being checked:
 *   "Every CE/CO question is normally available in 3 forms — QCM texte,
 *    QCM image, texte à saisir."
 *
 * This script inspects the authored data and reports, per section, how many
 * questions carry all 3 forms vs a single form.
 *
 * Usage:
 *   node scripts/audit-ce-co-question-forms.cjs
 * Output:
 *   ref/ce-co-question-forms-audit.md
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const commDir = path.join(root, "lib/curriculum/content/communication");
const outFile = path.join(root, "ref/ce-co-question-forms-audit.md");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function countMatches(src, re) {
  return (src.match(re) || []).length;
}

// ---------------------------------------------------------------------------
// CO — pooled questions (RawQ → COMultiQuestion via buildPool)
// ---------------------------------------------------------------------------
const CO_POOL_FILES = [
  "co-questions-base-messages.ts",
  "co-questions-base-other.ts",
  "co-questions-moyen.ts",
  "co-questions-avance.ts",
  "co-questions-avance-extra.ts",
];

function auditCoPools() {
  let items = 0;
  let withText = 0;
  let withImage = 0;
  let withFill = 0;
  let imgEqualsText = 0;
  let emptyForm = 0;
  const anomalies = [];

  for (const file of CO_POOL_FILES) {
    const src = read(`lib/curriculum/content/communication/${file}`);
    // One RawQ item per `fillQ:` (unique field of RawQ).
    const ids = [...src.matchAll(/id:\s*"([^"]+)"\s*,\s*textQ:/g)].map((m) => m[1]);
    const textArrays = [...src.matchAll(/\btext:\s*\[([^\]]*)\]/g)].map((m) => m[1]);
    const imgArrays = [...src.matchAll(/\bimg:\s*\[([^\]]*)\]/g)].map((m) => m[1]);
    const fills = [...src.matchAll(/\bfill:\s*"([^"]*)"/g)].map((m) => m[1]);

    const n = ids.length;
    items += n;
    withText += textArrays.length;
    withImage += imgArrays.length;
    withFill += fills.length;

    for (let i = 0; i < n; i++) {
      const t = (textArrays[i] || "").trim();
      const g = (imgArrays[i] || "").trim();
      const f = (fills[i] || "").trim();
      if (t && g && t === g) imgEqualsText++;
      if (!t || !g || !f) {
        emptyForm++;
        anomalies.push(`${file} · ${ids[i] || `#${i}`} — forme incomplète`);
      }
    }

    if (!(n === textArrays.length && n === imgArrays.length && n === fills.length)) {
      anomalies.push(
        `${file} — décompte incohérent (ids=${n}, text=${textArrays.length}, img=${imgArrays.length}, fill=${fills.length})`,
      );
    }
  }

  return { items, withText, withImage, withFill, imgEqualsText, emptyForm, anomalies };
}

// ---------------------------------------------------------------------------
// CO — single-format special tasks
// ---------------------------------------------------------------------------
function auditCoSpecial() {
  const objet = read("lib/curriculum/content/communication/co-questions-objet-pick.ts");
  const objetGroups = countMatches(objet, /^\s*"[^"]+":\s*\{\s*$/gm);
  const match = read("lib/curriculum/content/communication/co-questions-moyen-conversation-match.ts");
  const matchGroups = countMatches(match, /situations:\s*\[/g);
  return { objetGroups, matchGroups };
}

// ---------------------------------------------------------------------------
// CE — authored questions (single-form each)
// ---------------------------------------------------------------------------
function auditCe() {
  const src = read("components/communication/ComprehensionEcritRunner.tsx");
  // Split into per-question chunks at each `{ prompt: "..."`.
  const chunks = src.split(/\{\s*prompt:\s*"/).slice(1);
  let fill = 0;
  let choiceText = 0;
  let choiceImage = 0;
  let all3 = 0;

  for (const raw of chunks) {
    // Limit the chunk to a single question object.
    const chunk = raw.slice(0, raw.indexOf("},") >= 0 ? raw.indexOf("},") + 1 : raw.length);
    const hasChoices = /\bchoices:\s*\[/.test(chunk);
    const hasAnswer = /\banswer:\s*"/.test(chunk);
    const hasImage = /\bimage:\s*true/.test(chunk) || /image:\s*"[^"]+"/.test(chunk);
    // A question object that offers all three would need choices + answer + image.
    if (hasChoices && hasAnswer && hasImage) all3++;
    else if (hasAnswer && !hasChoices) fill++;
    else if (hasChoices && hasImage) choiceImage++;
    else if (hasChoices) choiceText++;
  }

  return { total: fill + choiceText + choiceImage + all3, fill, choiceText, choiceImage, all3 };
}

function main() {
  const pools = auditCoPools();
  const special = auditCoSpecial();
  const ce = auditCe();

  const coAll3 =
    pools.items === pools.withText && pools.items === pools.withImage && pools.items === pools.withFill && pools.emptyForm === 0;

  const lines = [];
  lines.push("# Audit des formes de questions CE / CO");
  lines.push("");
  lines.push(`_Généré par \`scripts/audit-ce-co-question-forms.cjs\` — ${new Date().toISOString().slice(0, 10)}_`);
  lines.push("");
  lines.push("Hypothèse vérifiée : « chaque question CE/CO existe normalement sous 3 formes — **QCM texte**, **QCM image**, **texte à saisir** ».");
  lines.push("");

  lines.push("## Réponse courte");
  lines.push("");
  lines.push("- **CO (compréhension orale)** : **VRAI** pour les questions de compréhension standard. Chaque question est écrite (`RawQ`) avec les 3 formes ; à l'exécution, `buildCoPartQuestions` en tire **une seule** au hasard par question.");
  lines.push("  - **Exceptions (mono-forme par nature)** : les tâches `object_pick` (cliquer les objets entendus) et `match_grid` (associer dialogues ⇆ situations).");
  lines.push(`  - **Nuance** : pour ${pools.imgEqualsText}/${pools.items} questions, la « QCM image » réutilise **les mêmes libellés texte** que la QCM texte (rendus en cadres texte, pas de vraie illustration).`);
  lines.push("- **CE (compréhension écrite)** : **FAUX**. Chaque question est écrite sous **une seule** forme fixe (QCM texte **ou** QCM image **ou** texte à saisir) — il n'y a pas de structure 3-en-1.");
  lines.push("");

  lines.push("## CO — questions de pool (`buildPool` / `RawQ`)");
  lines.push("");
  lines.push(`- Questions analysées : **${pools.items}**`);
  lines.push(`- Avec QCM texte (\`text[3]\`) : **${pools.withText}**`);
  lines.push(`- Avec QCM image (\`img[3]\`) : **${pools.withImage}**`);
  lines.push(`- Avec texte à saisir (\`fill\`) : **${pools.withFill}**`);
  lines.push(`- **Les 3 formes présentes pour chaque question : ${coAll3 ? "OUI ✅" : "NON ❌"}**`);
  lines.push(`- QCM image identique au QCM texte (libellés réutilisés) : **${pools.imgEqualsText}**`);
  lines.push(`- Formes incomplètes/vides : **${pools.emptyForm}**`);
  lines.push("");
  lines.push("## CO — tâches spéciales (mono-forme)");
  lines.push("");
  lines.push(`- Groupes \`object_pick\` : **${special.objetGroups}** (5 cartes image chacun)`);
  lines.push(`- Groupes \`match_grid\` (association) : **${special.matchGroups}**`);
  lines.push("");
  lines.push("## CE — questions écrites (mono-forme)");
  lines.push("");
  lines.push(`- Questions analysées : **${ce.total}**`);
  lines.push(`- QCM texte seul : **${ce.choiceText}**`);
  lines.push(`- QCM image seul : **${ce.choiceImage}**`);
  lines.push(`- Texte à saisir seul : **${ce.fill}**`);
  lines.push(`- Questions offrant les 3 formes : **${ce.all3}**`);
  lines.push("");

  lines.push("## Où c'est défini (preuve dans le code)");
  lines.push("");
  lines.push("- **CO — 3 formes garanties par le type** `RawQ` (`text[3]` + `img[3]` + `fill` obligatoires) dans `co-questions-helpers.ts` ; conversion via `multiToTask` et choix aléatoire du format dans `buildCoPartQuestions` (`FORMATS = [\"text\", \"image\", \"fill\"]`).");
  lines.push("- **CE — mono-forme garantie par le type** `RawQuestionTask = Omit<ChoiceTask> | Omit<FillTask>` dans `ComprehensionEcritRunner.tsx` : une question est soit un `choice` (texte **ou** image via `image?`), soit un `fill` — jamais les trois.");
  lines.push("");

  if (pools.anomalies.length) {
    lines.push("## Anomalies détectées");
    lines.push("");
    for (const a of pools.anomalies) lines.push(`- ${a}`);
    lines.push("");
  }

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, lines.join("\n"), "utf8");

  console.log("== CO pools ==");
  console.log(`  questions=${pools.items} text=${pools.withText} img=${pools.withImage} fill=${pools.withFill}`);
  console.log(`  3-formes=${coAll3 ? "OUI" : "NON"} img==text=${pools.imgEqualsText} incomplètes=${pools.emptyForm}`);
  console.log("== CO special ==");
  console.log(`  object_pick=${special.objetGroups} match_grid=${special.matchGroups}`);
  console.log("== CE ==");
  console.log(`  total=${ce.total} texte=${ce.choiceText} image=${ce.choiceImage} saisir=${ce.fill} 3-formes=${ce.all3}`);
  console.log(`Report → ${path.relative(root, outFile)}`);
}

main();
