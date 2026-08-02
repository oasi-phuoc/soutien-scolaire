/** @typedef {{ textQ: string; choices: string[]; correct: number; img?: string[] | null; imgCorrect?: number; fillQ: string; fill: string; fillA?: string[]; vfQ: string; vfCorrect: 0|1|2 }} QSpec */
/** @typedef {{ text: string; slug: string; questions: QSpec[] }} ItemSpec */

export function esc(s) {
  return JSON.stringify(s);
}

export function formatQuestion(q, idx) {
  const img = q.img && q.img.some((x) => x) ? q.img : ["", "", ""];
  const lines = [
    `  q({`,
    `    id: "ce-q${idx}",`,
    `    textQ: ${esc(q.textQ)},`,
    `    text: ${esc(q.choices)},`,
    `    textC: ${q.correct},`,
    `    img: ${esc(img)},`,
    `    imgC: ${q.imgCorrect ?? q.correct},`,
    `    fillQ: ${esc(q.fillQ)},`,
    `    fill: ${esc(q.fill)},`,
  ];
  if (q.fillA?.length) {
    lines.push(`    fillA: ${esc(q.fillA)},`);
  }
  lines.push(`    vfQ: ${esc(q.vfQ)},`);
  lines.push(`    vfC: ${q.vfCorrect},`);
  lines.push(`  }),`);
  return lines.join("\n");
}

export function formatItem(prefix, n, item, isEmail = false) {
  const textVar = `${prefix}_TEXT_${n}`;
  const poolVar = `${prefix}_POOL_${n}`;
  const qLines = item.questions.map((q, i) => formatQuestion(q, i + 1)).join("\n");
  return [
    `const ${textVar} = \`${item.text}\`;`,
    "",
    `const ${poolVar} = buildExpressPool(${esc(item.slug)}, [`,
    qLines,
    `]);`,
    "",
  ].join("\n");
}

export function formatCeExport(moduleId, prefix, count) {
  const lines = [`export const ${moduleId}_CE: CommunicationExercise[] = [`];
  for (let i = 1; i <= count; i++) {
    lines.push(`  readingPoolExercise({`);
    lines.push(`    id: "${moduleId.toLowerCase().replace(/_/g, "-")}-ce-${i}",`);
    lines.push(`    readingText: ${prefix}_TEXT_${i},`);
    lines.push(`    questionPool: ${prefix}_POOL_${i},`);
    lines.push(`  }),`);
  }
  lines.push(`];`);
  return lines.join("\n");
}

export function formatEmailExport(moduleId, prefix, count) {
  const lines = [`export const ${moduleId}_CE_EMAIL: CommunicationExercise[] = [`];
  for (let i = 1; i <= count; i++) {
    lines.push(`  readingPoolExercise({`);
    lines.push(`    id: "${moduleId.toLowerCase().replace(/_/g, "-")}-ce-email-${i}",`);
    lines.push(`    readingText: ${prefix}_TEXT_${i},`);
    lines.push(`    questionPool: ${prefix}_POOL_${i},`);
    lines.push(`    instruction: "Lisez l'e-mail et répondez aux questions.",`);
    lines.push(`  }),`);
  }
  lines.push(`];`);
  return lines.join("\n");
}

export function generateSection(header, prefix, items, exportConst) {
  const parts = [header, ""];
  for (let i = 0; i < items.length; i++) {
    parts.push(formatItem(prefix, i + 1, items[i]));
  }
  parts.push(exportConst);
  return parts.join("\n");
}
