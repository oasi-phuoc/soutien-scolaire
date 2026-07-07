#!/usr/bin/env node
/** Réduit les pools CO avancé scolaire de 12 à 10 questions (supprime q11 et q12). */
import fs from "node:fs";

const FILES = [
  "lib/curriculum/content/communication/co-questions-scolaire-avance-annonces.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-avance-radios.ts",
  "lib/curriculum/content/communication/co-questions-scolaire-avance-conversations.ts",
];

for (const file of FILES) {
  let content = fs.readFileSync(file, "utf8");
  const before = (content.match(/id: "/g) ?? []).length;

  // Remove question blocks q11 and q12 (including optional preceding comment lines)
  content = content.replace(
    /\n(?:  \/\/[^\n]*\n)?  \{\n    id: "sa[a-z]\d+-q1[12]",[\s\S]*?\n  \},?/g,
    "",
  );

  const after = (content.match(/id: "/g) ?? []).length;
  fs.writeFileSync(file, content);
  console.log(`${file}: ${before} → ${after} questions`);
}
