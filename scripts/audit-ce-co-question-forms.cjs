/**
 * Audit CE/CO question formats and name-question exclusions.
 *
 * Usage:
 *   node scripts/audit-ce-co-question-forms.cjs
 * Output:
 *   ref/ce-co-question-forms-audit.md
 */

const fs = require("fs");
const path = require("path");

const root = process.cwd();
const outFile = path.join(root, "ref/ce-co-question-forms-audit.md");

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function countMatches(src, re) {
  return (src.match(re) || []).length;
}

const CO_POOL_FILES = [
  "co-questions-base-messages.ts",
  "co-questions-base-other.ts",
  "co-questions-moyen.ts",
  "co-questions-avance.ts",
  "co-questions-avance-extra.ts",
];

function isProperNameAnswer(value) {
  const answer = value.trim();
  if (/^(Le |La |Les |L'|Un |Une |Des |Du |De la )/i.test(answer)) return false;
  if (/^[A-ZÀ-Ü][a-zà-ü]+ [A-ZÀ-Ü][a-zà-ü]/.test(answer)) return true;
  if (/^[A-ZÀ-Ü][a-zà-üéèêëïîôùûüç\-']+$/.test(answer)) {
    const notNames = new Set([
      "Midi", "Jeudi", "Vendredi", "Samedi", "Dimanche", "Lundi", "Mardi", "Mercredi", "Nouveau", "Document",
    ]);
    if (!notNames.has(answer)) return true;
  }
  return false;
}

function isExcludedNameQuestion(item) {
  const textQ = item.textQ;
  const correctChoice = item.choices[item.textC] ?? "";
  const fillAnswer = item.fill;

  if (/^comment s['']appelle/i.test(textQ)) {
    return isProperNameAnswer(fillAnswer) || isProperNameAnswer(correctChoice);
  }
  if (/^quelle ville/i.test(textQ)) return true;
  if (/^d['']où revient/i.test(textQ)) return true;
  if (/^qui (laisse|appelle)\b/i.test(textQ)) return true;
  if (/^qui /i.test(textQ)) {
    if (isProperNameAnswer(correctChoice) || isProperNameAnswer(fillAnswer)) return true;
    if (item.choices.length > 0 && item.choices.every(isProperNameAnswer)) return true;
  }
  return false;
}

function parseCoRawQ(src) {
  const items = [];
  const re =
    /id:\s*"([^"]+)"[^}]*?textQ:\s*"([^"]+)"[^}]*?text:\s*\[([^\]]+)\][^}]*?textC:\s*(\d+)[^}]*?fill:\s*"([^"]+)"/gs;
  let m;
  while ((m = re.exec(src))) {
    const choices = m[3].match(/"([^"]+)"/g).map((s) => s.slice(1, -1));
    items.push({ id: m[1], textQ: m[2], choices, textC: +m[4], fill: m[5] });
  }
  return items;
}

function auditCoPools() {
  let items = 0;
  let excluded = 0;
  const excludedSamples = [];
  let withText = 0;
  let withImage = 0;
  let withFill = 0;
  let imgEqualsText = 0;
  let emptyForm = 0;
  const anomalies = [];

  for (const file of CO_POOL_FILES) {
    const src = read(`lib/curriculum/content/communication/${file}`);
    const parsed = parseCoRawQ(src);
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
      const raw = parsed[i];
      if (raw && isExcludedNameQuestion(raw)) {
        excluded++;
        if (excludedSamples.length < 20) excludedSamples.push(`${file} · ${raw.id} — ${raw.textQ}`);
      }
    }

    if (!(n === textArrays.length && n === imgArrays.length && n === fills.length)) {
      anomalies.push(
        `${file} — décompte incohérent (ids=${n}, text=${textArrays.length}, img=${imgArrays.length}, fill=${fills.length})`,
      );
    }
  }

  return { items, active: items - excluded, excluded, excludedSamples, withText, withImage, withFill, imgEqualsText, emptyForm, anomalies };
}

function auditCoSpecial() {
  const objet = read("lib/curriculum/content/communication/co-questions-objet-pick.ts");
  const objetGroups = countMatches(objet, /^\s*"[^"]+":\s*\{\s*$/gm);
  const match = read("lib/curriculum/content/communication/co-questions-moyen-conversation-match.ts");
  const matchGroups = countMatches(match, /situations:\s*\[/g);
  return { objetGroups, matchGroups };
}

function auditCe() {
  const src = read("components/communication/ComprehensionEcritRunner.tsx");
  const chunks = src.split(/\{\s*prompt:\s*"/).slice(1);
  let fill = 0;
  let choiceText = 0;
  let choiceImage = 0;
  let all3 = 0;
  let excludedName = 0;
  const excludedSamples = [];

  for (const raw of chunks) {
    const chunk = raw.slice(0, raw.indexOf("},") >= 0 ? raw.indexOf("},") + 1 : raw.length);
    const promptMatch = chunk.match(/^([^"]+)"/);
    const prompt = promptMatch ? promptMatch[1] : "";
    const answerMatch = chunk.match(/\banswer:\s*"([^"]+)"/);
    const answer = answerMatch ? answerMatch[1] : "";
    const choicesMatch = chunk.match(/\bchoices:\s*\[([^\]]*)\]/);
    const choices = choicesMatch
      ? [...choicesMatch[1].matchAll(/label:\s*"([^"]+)"/g)].map((m) => m[1])
      : [];
    const correctMatch = chunk.match(/\bcorrect:\s*(\d+)/);
    const correct = correctMatch ? +correctMatch[1] : 0;

    const pseudo = { textQ: prompt, choices, textC: correct, fill: answer };
    if (isExcludedNameQuestion(pseudo)) {
      excludedName++;
      if (excludedSamples.length < 10) excludedSamples.push(prompt);
    }

    const hasChoices = /\bchoices:\s*\[/.test(chunk);
    const hasAnswer = /\banswer:\s*"/.test(chunk);
    const hasImage = /\bimage:\s*true/.test(chunk) || /image:\s*"[^"]+"/.test(chunk);
    if (hasChoices && hasAnswer && hasImage) all3++;
    else if (hasAnswer && !hasChoices) fill++;
    else if (hasChoices && hasImage) choiceImage++;
    else if (hasChoices) choiceText++;
  }

  return {
    total: fill + choiceText + choiceImage + all3,
    fill,
    choiceText,
    choiceImage,
    all3,
    excludedName,
    excludedSamples,
  };
}

function main() {
  const pools = auditCoPools();
  const special = auditCoSpecial();
  const ce = auditCe();

  const coAll3 =
    pools.items === pools.withText &&
    pools.items === pools.withImage &&
    pools.items === pools.withFill &&
    pools.emptyForm === 0;

  const lines = [];
  lines.push("# Audit des formes de questions CE / CO");
  lines.push("");
  lines.push(`_Généré par \`scripts/audit-ce-co-question-forms.cjs\` — ${new Date().toISOString().slice(0, 10)}_`);
  lines.push("");
  lines.push("## Règles appliquées (juillet 2026)");
  lines.push("");
  lines.push("1. **Questions nom/prénom/ville/commerce supprimées** — ex. « Qui laisse ce message ? », « Comment s'appelle le bar ? », « Quelle ville… »");
  lines.push("2. **Texte à saisir** — la consigne affichée est la **question complète** (`textQ`), pas une phrase à trous (`fillQ`). L'élève répond sur un trait pleine largeur.");
  lines.push("3. **Correction** — le mot attendu doit être **contenu** dans la réponse (`includes` après normalisation).");
  lines.push("");

  lines.push("## CO — questions de pool");
  lines.push("");
  lines.push(`- Questions écrites : **${pools.items}**`);
  lines.push(`- Questions actives (après exclusion noms) : **${pools.active}**`);
  lines.push(`- Questions exclues (noms) : **${pools.excluded}**`);
  lines.push(`- Format saisie : prompt = \`textQ\` (question complète)`);
  lines.push(`- QCM image identique au QCM texte : **${pools.imgEqualsText}**`);
  if (pools.excludedSamples.length) {
    lines.push("");
    lines.push("Exemples exclus :");
    for (const s of pools.excludedSamples) lines.push(`- ${s}`);
  }
  lines.push("");

  lines.push("## CO — tâches spéciales (mono-forme)");
  lines.push("");
  lines.push(`- Groupes \`object_pick\` : **${special.objetGroups}**`);
  lines.push(`- Groupes \`match_grid\` : **${special.matchGroups}**`);
  lines.push("");

  lines.push("## CE — questions écrites");
  lines.push("");
  lines.push(`- Questions analysées : **${ce.total}**`);
  lines.push(`- QCM texte : **${ce.choiceText}**`);
  lines.push(`- QCM image : **${ce.choiceImage}**`);
  lines.push(`- Texte à saisir : **${ce.fill}**`);
  lines.push(`- Questions nom encore présentes (devrait être 0) : **${ce.excludedName}**`);
  if (ce.excludedSamples.length) {
    lines.push("");
    lines.push("À retirer :");
    for (const s of ce.excludedSamples) lines.push(`- ${s}`);
  }
  lines.push("");

  lines.push("## Architecture");
  lines.push("");
  lines.push("- Filtre noms : `isExcludedNameQuestion()` dans `co-questions-helpers.ts`, appliqué dans `buildPool`.");
  lines.push("- Prompt saisie CO : `multiToTask(..., \"fill\")` utilise `textQ`.");
  lines.push("- CE : questions mono-forme dans `ComprehensionEcritRunner.tsx` ; saisie = question + trait `w-full`.");
  lines.push("");

  if (pools.anomalies.length) {
    lines.push("## Anomalies");
    lines.push("");
    for (const a of pools.anomalies) lines.push(`- ${a}`);
    lines.push("");
  }

  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, lines.join("\n"), "utf8");

  console.log("== CO pools ==");
  console.log(`  written=${pools.items} active=${pools.active} excluded=${pools.excluded}`);
  console.log("== CE ==");
  console.log(`  total=${ce.total} name-left=${ce.excludedName}`);
  console.log(`Report → ${path.relative(root, outFile)}`);
}

main();
