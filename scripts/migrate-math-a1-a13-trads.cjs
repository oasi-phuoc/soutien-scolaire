const fs = require("fs");
const path = require("path");
const ts = require("typescript");

const root = process.cwd();
const mathDir = path.join(root, "lib/curriculum/content/math");
const tradDir = path.join(mathDir, "trad");
const langOrder = ["fr", "en", "ar", "fa", "pt", "so", "ti", "tr", "ps", "uk"];
const pivotLangs = new Set(langOrder.filter((lang) => lang !== "fr"));

function propName(prop) {
  const name = prop.name;
  if (!name) return undefined;
  if (ts.isIdentifier(name) || ts.isStringLiteral(name) || ts.isNumericLiteral(name)) return name.text;
  return undefined;
}

function getProp(obj, name) {
  if (!obj || !ts.isObjectLiteralExpression(obj)) return undefined;
  return obj.properties.find((prop) => ts.isPropertyAssignment(prop) && propName(prop) === name);
}

function entriesFromObject(obj, sf, includeFr = true) {
  const entries = new Map();
  if (!obj || !ts.isObjectLiteralExpression(obj)) return entries;
  for (const prop of obj.properties) {
    if (!ts.isPropertyAssignment(prop)) continue;
    const name = propName(prop);
    if (!name || (!includeFr && name === "fr")) continue;
    if (name !== "fr" && !pivotLangs.has(name)) continue;
    if (ts.isStringLiteralLike(prop.initializer) && prop.initializer.text === "") continue;
    if (ts.isArrayLiteralExpression(prop.initializer) && prop.initializer.elements.length === 0) continue;
    entries.set(name, prop.initializer.getText(sf));
  }
  return entries;
}

function mergeEntries(target, entries) {
  for (const [key, value] of entries) target.set(key, value);
}

function mapToTs(map, indent) {
  const keys = langOrder.filter((key) => map.has(key));
  if (!keys.length) return undefined;
  const pad = " ".repeat(indent);
  const inner = " ".repeat(indent + 2);
  const lines = ["{"];
  for (const key of keys) lines.push(`${inner}${key}: ${map.get(key)},`);
  lines.push(`${pad}}`);
  return lines.join("\n");
}

function blockTradFromBlock(block, sf) {
  if (!ts.isObjectLiteralExpression(block)) return undefined;
  const text = new Map();
  const label = new Map();
  const items = new Map();
  const headers = new Map();
  const caption = new Map();

  const frProp = getProp(block, "fr");
  if (frProp) text.set("fr", frProp.initializer.getText(sf));
  const titleFrProp = getProp(block, "titleFr");
  if (titleFrProp) text.set("fr", titleFrProp.initializer.getText(sf));
  const labelFrProp = getProp(block, "labelFr");
  if (labelFrProp && ts.isStringLiteralLike(labelFrProp.initializer) && labelFrProp.initializer.text) {
    label.set("fr", labelFrProp.initializer.getText(sf));
  }
  const itemsFrProp = getProp(block, "itemsFr");
  if (itemsFrProp && ts.isArrayLiteralExpression(itemsFrProp.initializer) && itemsFrProp.initializer.elements.length) {
    items.set("fr", itemsFrProp.initializer.getText(sf));
  }
  const headersFrProp = getProp(block, "headersFr");
  if (headersFrProp && ts.isArrayLiteralExpression(headersFrProp.initializer) && headersFrProp.initializer.elements.length) {
    headers.set("fr", headersFrProp.initializer.getText(sf));
  }
  const captionFrProp = getProp(block, "captionFr");
  if (captionFrProp) caption.set("fr", captionFrProp.initializer.getText(sf));

  const pivotProp = getProp(block, "pivot");
  if (pivotProp && ts.isObjectLiteralExpression(pivotProp.initializer)) {
    for (const langProp of pivotProp.initializer.properties) {
      if (!ts.isPropertyAssignment(langProp)) continue;
      const lang = propName(langProp);
      if (!lang || !pivotLangs.has(lang)) continue;
      const value = langProp.initializer;
      if (ts.isStringLiteralLike(value)) {
        if (value.text) text.set(lang, value.getText(sf));
      } else if (ts.isObjectLiteralExpression(value)) {
        const title = getProp(value, "title");
        if (title) text.set(lang, title.initializer.getText(sf));
        const nestedItems = getProp(value, "items");
        if (nestedItems) items.set(lang, nestedItems.initializer.getText(sf));
      }
    }
  }

  const parts = [];
  const textTs = mapToTs(text, 6);
  const labelTs = mapToTs(label, 6);
  const itemsTs = mapToTs(items, 6);
  const headersTs = mapToTs(headers, 6);
  const captionTs = mapToTs(caption, 6);
  if (textTs) parts.push(`text: ${textTs}`);
  if (labelTs) parts.push(`label: ${labelTs}`);
  if (itemsTs) parts.push(`items: ${itemsTs}`);
  if (headersTs) parts.push(`headers: ${headersTs}`);
  if (captionTs) parts.push(`caption: ${captionTs}`);
  if (!parts.length) return "{}";
  return `{\n      ${parts.join(",\n      ")}\n    }`;
}

function findLessonObject(sf) {
  for (const statement of sf.statements) {
    if (!ts.isVariableStatement(statement)) continue;
    for (const decl of statement.declarationList.declarations) {
      if (ts.isIdentifier(decl.name) && /^MATH_[AGS]\d+_\d+_LESSON$/.test(decl.name.text)) {
        return decl.initializer;
      }
    }
  }
  return undefined;
}

function generatedTradFromLesson(file) {
  const text = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const lesson = findLessonObject(sf);
  if (!lesson || !ts.isObjectLiteralExpression(lesson)) return undefined;

  const submoduleProp = getProp(lesson, "submoduleId");
  if (!submoduleProp || !ts.isStringLiteralLike(submoduleProp.initializer)) return undefined;
  const submoduleId = submoduleProp.initializer.text;
  const theoryProp = getProp(lesson, "theory");
  const theory = theoryProp?.initializer;
  if (!theory || !ts.isObjectLiteralExpression(theory)) return undefined;

  const title = entriesFromObject(getProp(theory, "title")?.initializer, sf, true);
  const paragraphs = entriesFromObject(getProp(theory, "paragraphs")?.initializer, sf, true);
  const blocksNode = getProp(theory, "blocks")?.initializer;
  const blockEntries = [];
  if (blocksNode && ts.isArrayLiteralExpression(blocksNode)) {
    for (const block of blocksNode.elements) blockEntries.push(blockTradFromBlock(block, sf) ?? "{}");
  }

  const hasParagraphs = [...paragraphs.keys()].some((key) => key !== "fr");
  const hasBlocks = blockEntries.some((entry) => entry !== "{}" && !/^\{\s*(text|label|items|headers|caption): \{\s*fr:/.test(entry));
  const hasBlockArray = blockEntries.some((entry) => entry !== "{}");
  return { submoduleId, title, paragraphs, blockEntries, hasParagraphs, hasBlocks, hasBlockArray };
}

function tradConstName(submoduleId) {
  return `TRAD_${submoduleId.replace("-", "_")}`;
}

function writeTrad(generated) {
  const file = path.join(tradDir, `trad-${generated.submoduleId.toLowerCase()}.ts`);
  const existing = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  if (/\n\s*(blocks|readAloud)\s*:/.test(existing)) return false;

  const lines = [
    'import type { SubmoduleTrad } from "./trad-types";',
    "",
    `export const ${tradConstName(generated.submoduleId)}: SubmoduleTrad = {`,
    `  submoduleId: "${generated.submoduleId}",`,
    `  title: ${mapToTs(generated.title, 2) ?? "{}"},`,
  ];
  if (generated.hasParagraphs) lines.push(`  paragraphs: ${mapToTs(generated.paragraphs, 2)},`);
  if (generated.hasBlockArray) {
    lines.push("  blocks: [");
    for (const entry of generated.blockEntries) lines.push(`    ${entry},`);
    lines.push("  ],");
  }
  lines.push("};", "");
  fs.writeFileSync(file, lines.join("\n"), "utf8");
  return true;
}

function deleteRangeForProp(text, prop) {
  let start = prop.getFullStart();
  let end = prop.end;
  while (end < text.length && /\s/.test(text[end])) end++;
  if (text[end] === ",") end++;
  return [start, end];
}

function cleanupMathFile(file) {
  const text = fs.readFileSync(file, "utf8");
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const ranges = [];

  function visit(node) {
    if (ts.isPropertyAssignment(node)) {
      const name = propName(node);
      if (["pivot", "promptPivot", "introPivot", "labelPivot"].includes(name)) {
        ranges.push(deleteRangeForProp(text, node));
        return;
      }
      if (pivotLangs.has(name)) {
        ranges.push(deleteRangeForProp(text, node));
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(sf);

  if (!ranges.length) return false;
  ranges.sort((a, b) => b[0] - a[0]);
  let next = text;
  for (const [start, end] of ranges) next = next.slice(0, start) + next.slice(end);
  fs.writeFileSync(file, next, "utf8");
  return true;
}

const mathFiles = fs.readdirSync(mathDir)
  .filter((name) => /^math-[ags]\d+-\d+\.ts$/.test(name))
  .filter((name) => {
    const match = name.match(/^math-([ags])(\d+)-/);
    if (!match) return false;
    if (match[1] !== "a") return true;
    const level = Number(match[2]);
    return level >= 1 && level <= 13;
  })
  .map((name) => path.join(mathDir, name));

for (const file of mathFiles) {
  const generated = generatedTradFromLesson(file);
  const tradStatus = generated ? (writeTrad(generated) ? "trad updated" : "trad kept") : "no trad";
  const cleaned = cleanupMathFile(file);
  console.log(`${path.basename(file)}: ${tradStatus}, ${cleaned ? "math cleaned" : "math clean"}`);
}
