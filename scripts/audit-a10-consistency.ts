/**
 * Audit A10 : cohérence solution ↔ développement ↔ énoncé
 * Usage: npx tsx scripts/audit-a10-consistency.ts
 */

import {
  pickA102Question,
  pickA102FracQuestion,
  pickA103SystemQuestion,
  pickA104SystemQuestion,
  type EquationQuestion,
  type EquationSolution,
  type SystemEquationQuestion,
} from "../lib/curriculum/content/math/a10-template-gens";

type Issue = { pool: string; trial: number; kind: string; detail: string; expr?: string };

const issues: Issue[] = [];

function solText(sol: EquationSolution): string {
  if (sol.kind === "impossible") return "impossible";
  if (sol.kind === "infinite") return "infini";
  return sol.den === 1 ? `${sol.num}` : `${sol.num}/${sol.den}`;
}

function solValue(sol: EquationSolution): number | null {
  if (sol.kind !== "rational") return null;
  return sol.num / sol.den;
}

function parseRational(s: string): number | null {
  const t = s.trim().replace(/−/g, "-").replace(/\s+/g, "");
  const frac = t.match(/^(-?\d+)\/(-?\d+)$/);
  if (frac) {
    const den = Number(frac[2]);
    return den === 0 ? null : Number(frac[1]) / den;
  }
  const n = Number(t);
  return Number.isFinite(n) ? n : null;
}

function lastAssignment(dev: string[], varName: "x" | "y"): number | null {
  const re = new RegExp(`^${varName}\\s*=\\s*(-?\\d+(?:/\\d+)?)\\s*$`, "i");
  for (let i = dev.length - 1; i >= 0; i--) {
    const m = dev[i]!.trim().match(re);
    if (m) return parseRational(m[1]!);
  }
  return null;
}

function terminalSpecial(dev: string[]): "infini" | "impossible" | null {
  for (let i = dev.length - 1; i >= 0; i--) {
    const l = dev[i]!.trim().toLowerCase();
    if (l === "infini") return "infini";
    if (l === "impossible !" || l === "impossible") return "impossible";
  }
  return null;
}

function parsePairFromAnswer(answer: string): { x: number; y: number } | null {
  const m = answer.match(/\{\s*\(?\s*(-?\d+)\s*;\s*(-?\d+)\s*\)?\s*\}/);
  if (!m) return null;
  return { x: Number(m[1]), y: Number(m[2]) };
}

function parseLinear2(eq: string): { ax: number; by: number; c: number } | null {
  const norm = eq.replace(/−/g, "-").replace(/\s+/g, " ").trim();
  const m = norm.match(/^(.+?)\s*=\s*(.+)$/);
  if (!m) return null;
  const parseSide = (side: string) => {
    let ax = 0, by = 0, k = 0, sign = 1;
    for (const tok of side.replace(/([+-])/g, " $1 ").trim().split(/\s+/).filter(Boolean)) {
      if (tok === "+") { sign = 1; continue; }
      if (tok === "-") { sign = -1; continue; }
      if (tok.endsWith("x") || tok === "x" || tok === "-x") {
        const body = tok === "x" ? "1" : tok === "-x" ? "-1" : tok.slice(0, -1);
        const coef = body === "" || body === "+" ? 1 : body === "-" ? -1 : Number(body);
        if (!Number.isFinite(coef)) return null;
        ax += sign * coef;
      } else if (tok.endsWith("y") || tok === "y" || tok === "-y") {
        const body = tok === "y" ? "1" : tok === "-y" ? "-1" : tok.slice(0, -1);
        const coef = body === "" || body === "+" ? 1 : body === "-" ? -1 : Number(body);
        if (!Number.isFinite(coef)) return null;
        by += sign * coef;
      } else {
        const n = Number(tok);
        if (!Number.isFinite(n)) return null;
        k += sign * n;
      }
      sign = 1;
    }
    return { ax, by, k };
  };
  const L = parseSide(m[1]!);
  const R = parseSide(m[2]!);
  if (!L || !R) return null;
  return { ax: L.ax - R.ax, by: L.by - R.by, c: R.k - L.k };
}

function auditEq(pool: string, q: EquationQuestion, trial: number) {
  if (!q.development?.length) return;

  if (q.operations && q.operations.length !== q.development.length) {
    issues.push({
      pool, trial, kind: "ops-length",
      detail: `operations(${q.operations.length}) ≠ development(${q.development.length})`,
      expr: q.expr,
    });
  }

  const special = terminalSpecial(q.development);
  if (q.solution.kind === "infinite") {
    if (special !== "infini") issues.push({ pool, trial, kind: "dev-special", detail: "infini attendu", expr: q.expr });
    return;
  }
  if (q.solution.kind === "impossible") {
    if (special !== "impossible") issues.push({ pool, trial, kind: "dev-special", detail: "impossible attendu", expr: q.expr });
    return;
  }

  const devX = lastAssignment(q.development, "x");
  const solVal = solValue(q.solution);
  if (devX !== null && solVal !== null && Math.abs(devX - solVal) > 1e-9) {
    issues.push({
      pool, trial, kind: "dev-solution",
      detail: `dev x=${devX} ≠ solution ${solText(q.solution)} (${solVal})`,
      expr: q.expr,
    });
  }
}

function auditSystem(pool: string, q: SystemEquationQuestion, trial: number) {
  if (q.operations && q.operations.length !== q.development.length) {
    issues.push({
      pool, trial, kind: "ops-length",
      detail: `operations(${q.operations.length}) ≠ development(${q.development.length})`,
      expr: q.equations.join(" ; "),
    });
  }

  if (q.answer === "IR" || q.answer === "impossible") return;

  const fromAns = parsePairFromAnswer(q.answer);
  if (!fromAns) {
    issues.push({ pool, trial, kind: "sys-answer", detail: "answer non parsable", expr: q.answer });
    return;
  }

  const devX = lastAssignment(q.development, "x");
  const devY = lastAssignment(q.development, "y");
  if (devX !== null && Math.abs(devX - fromAns.x) > 1e-9) {
    issues.push({ pool, trial, kind: "dev-answer-x", detail: `dev x=${devX} ≠ ${fromAns.x}`, expr: q.answer });
  }
  if (devY !== null && Math.abs(devY - fromAns.y) > 1e-9) {
    issues.push({ pool, trial, kind: "dev-answer-y", detail: `dev y=${devY} ≠ ${fromAns.y}`, expr: q.answer });
  }

  for (const eq of q.equations) {
    const p = parseLinear2(eq);
    if (!p) continue;
    const val = p.ax * fromAns.x + p.by * fromAns.y;
    if (Math.abs(val - p.c) > 1e-6) {
      issues.push({
        pool, trial, kind: "sys-eq",
        detail: `(${fromAns.x},${fromAns.y}) dans "${eq}": ${val} ≠ ${p.c}`,
        expr: eq,
      });
    }
  }
}

function runPool(name: string, fn: () => EquationQuestion | SystemEquationQuestion, n = 400, isSystem = false) {
  let throws = 0;
  for (let i = 0; i < n; i++) {
    try {
      const q = fn();
      if (isSystem) auditSystem(name, q as SystemEquationQuestion, i);
      else auditEq(name, q as EquationQuestion, i);
    } catch {
      throws++;
    }
  }
  if (throws > 0) {
    issues.push({ pool: name, trial: -1, kind: "throw-count", detail: `${throws}/${n} échecs retry` });
  }
}

console.log("=== Audit A10 cohérence ===\n");

runPool("A10.1 ex2 easy", () => pickA102Question(1));
runPool("A10.1 ex2 hard", () => pickA102Question(2));
runPool("A10.2 easy", () => pickA102FracQuestion(1));
runPool("A10.2 hard", () => pickA102FracQuestion(2));
runPool("A10.3 easy", () => pickA103SystemQuestion(1), 400, true);
runPool("A10.3 hard", () => pickA103SystemQuestion(2), 400, true);
runPool("A10.4 easy", () => pickA104SystemQuestion(1), 400, true);
runPool("A10.4 hard", () => pickA104SystemQuestion(2), 400, true);

const byKind = new Map<string, Issue[]>();
for (const iss of issues) {
  const key = `${iss.pool} :: ${iss.kind}`;
  if (!byKind.has(key)) byKind.set(key, []);
  byKind.get(key)!.push(iss);
}

if (issues.length === 0) {
  console.log("✅ Aucune incohérence détectée (3200 tirages).");
} else {
  console.log(`❌ ${issues.length} problème(s):\n`);
  for (const [key, list] of [...byKind.entries()].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`--- ${key} (${list.length}) ---`);
    for (const ex of list.slice(0, 3)) {
      console.log(`  trial ${ex.trial}: ${ex.detail}`);
      if (ex.expr) console.log(`    → ${ex.expr.slice(0, 100)}`);
    }
    if (list.length > 3) console.log(`  … +${list.length - 3} autres`);
  }
  process.exit(1);
}
