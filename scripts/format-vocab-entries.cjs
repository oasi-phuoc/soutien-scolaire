const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const root = process.cwd();
const files = execFileSync("git", ["ls-files", "lib/curriculum/content/francais/vocab-*.ts"], {
  cwd: root,
  encoding: "utf8",
}).trim().split(/\r?\n/).filter(Boolean);

function splitTopLevel(value) {
  const parts = [];
  let start = 0;
  let depth = 0;
  let quote = "";
  let escaped = false;

  for (let i = 0; i < value.length; i += 1) {
    const char = value[i];
    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
      continue;
    }
    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }
    if (char === "{" || char === "[") depth += 1;
    if (char === "}" || char === "]") depth -= 1;
    if (char === "," && depth === 0) {
      parts.push(value.slice(start, i).trim());
      start = i + 1;
    }
  }
  const tail = value.slice(start).trim();
  if (tail) parts.push(tail);
  return parts;
}

function formatPivot(prop, indent) {
  const match = prop.match(/^definitionPivot:\s*\{\s*([\s\S]*)\s*\}$/);
  if (!match) return [`${indent}${prop},`];
  const inner = match[1].trim();
  const lines = [`${indent}definitionPivot: {`];
  for (const part of splitTopLevel(inner)) {
    lines.push(`${indent}  ${part},`);
  }
  lines.push(`${indent}},`);
  return lines;
}

function formatEntryLine(line) {
  const match = line.match(/^(\s*)\{\s*(word:\s*[\s\S]*?),\s*exampleSentences:\s*\{\s*$/);
  const preExampleMatch = line.match(/^(\s*)\{\s*(word:\s*[\s\S]*?),\s*$/);
  const selectedMatch = match ?? preExampleMatch;
  if (!selectedMatch) return null;
  const entryIndent = selectedMatch[1];
  const propIndent = `${entryIndent}  `;
  const lines = [`${entryIndent}{`];
  const props = splitTopLevel(selectedMatch[2]);
  for (const prop of props) {
    if (prop.startsWith("definitionPivot:")) {
      lines.push(...formatPivot(prop, propIndent));
    } else {
      lines.push(`${propIndent}${prop},`);
    }
  }
  if (match) lines.push(`${propIndent}exampleSentences: {`);
  return lines.join("\n");
}

for (const relFile of files) {
  const file = path.join(root, relFile);
  const before = fs.readFileSync(file, "utf8");
  const lines = before.split(/\r?\n/);
  const formatted = lines.map((line) => {
    const entry = formatEntryLine(line);
    if (entry) return entry;
    const closeMatch = line.match(/^(\s{6})\}\s*\},\s*$/);
    if (closeMatch) return `${closeMatch[1]}},\n${closeMatch[1].slice(0, -2)}},`;
    const exampleMatch = line.match(/^(\s*)exampleSentences:\s*\{\s*$/);
    if (exampleMatch) return `${exampleMatch[1]}exampleSentences: {`;
    return line;
  }).join("\n");
  if (formatted !== before) fs.writeFileSync(file, formatted, "utf8");
}
