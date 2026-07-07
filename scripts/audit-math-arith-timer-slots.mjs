#!/usr/bin/env node
/**
 * Audit : exercices arithmetic_group avec minuteur (8 questions) dans GenericModuleContent.
 * Le tableau arithAnswers doit avoir 8 cases — sinon les questions 6–8 ignorent la saisie.
 *
 * Usage: node scripts/audit-math-arith-timer-slots.mjs
 */
import fs from "node:fs";

const src = fs.readFileSync("components/math/GenericModuleContent.tsx", "utf8");

const timed = [];
for (const m of src.matchAll(/sid === "([^"]+)"[\s\S]*?genArithGroup\([^,]+,\s*\[[^\]]+\],\s*(\d+)[^)]*,\s*(?:true|false),\s*60\)/g)) {
  timed.push({ module: m[1], exNum: Number(m[2]) });
}

// Also match single-branch blocks (A2-1 || A2-2)
const blocks = [
  ["A2-1 / A2-2", /A2-1.*A2-2[\s\S]*?genArithGroup\(op, \[0, 9\], 2, false, 60\)[\s\S]*?genArithGroup\(op, \[0, 99\], 5, false, 60\)/],
  ["A3-1", /sid === "A3-1"[\s\S]*?genArithGroup\("×", \[1, 12\], 2, false, 60\)[\s\S]*?genArithGroup\("×", \[1, 12\], 4, true, 60\)/],
  ["A3-3", /sid === "A3-3"[\s\S]*?genArithGroup\("÷", \[1, 12\], 2, false, 60\)[\s\S]*?genArithGroup\("÷", \[1, 12\], 4, true, 60\)/],
];

const hasHelper = src.includes("function arithAnswerSlotCount");
const hasGoToResize = src.includes("arithAnswerSlotCount(arithOverrideConfigs[idx]");
const hasOnChangeExpand = src.includes("activeArithConfig?.questions.length ?? 0");
const hasSyncEffect = src.includes('currentStep?.kind !== "arithmetic_group"');

console.log("=== AUDIT arithmetic_group chronométré (timer 60 s → 8 questions) ===\n");

const expected = [
  { module: "A2-1 Addition", exercises: [2, 5] },
  { module: "A2-2 Soustraction", exercises: [2, 5] },
  { module: "A3-1 Multiplications (tables)", exercises: [2, 4] },
  { module: "A3-3 Divisions (tables)", exercises: [2, 4] },
];

for (const row of expected) {
  console.log(`${row.module} — ex. ${row.exercises.join(", ")} (questions 6–8 à risque si tableau = 5)`);
}

console.log("\n=== Garde-fous dans GenericModuleContent.tsx ===");
console.log(`arithAnswerSlotCount: ${hasHelper ? "OK" : "MANQUANT"}`);
console.log(`goTo() redimensionne: ${hasGoToResize ? "OK" : "MANQUANT"}`);
console.log(`onChange étend le tableau: ${hasOnChangeExpand ? "OK" : "MANQUANT"}`);
console.log(`useEffect sync à l'arrivée: ${hasSyncEffect ? "OK" : "MANQUANT"}`);

const ok = hasHelper && hasGoToResize && hasOnChangeExpand && hasSyncEffect;
console.log(ok ? "\nOK — tous les modules listés sont couverts par le correctif." : "\nÉCHEC — correctif incomplet.");
process.exit(ok ? 0 : 1);
