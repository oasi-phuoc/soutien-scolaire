/**
 * Niveaux A10 : exercice 1 (facile) / exercice 2 (difficile).
 * Générateurs paramétriques fiables — solution choisie d'abord, coefficients recalculés.
 */

import type { EquationQuestion, EquationSolution, SystemEquationQuestion } from "./a10-template-gens";

export type A10ExerciseLevel = 1 | 2;

const ri = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  return b === 0 ? a : gcd(b, a % b);
}

function retry<T>(fn: () => T | null, max = 40): T {
  for (let i = 0; i < max; i++) {
    const r = fn();
    if (r) return r;
  }
  throw new Error("retry exhausted");
}

function pickFrom<T>(arr: Array<() => T>): T {
  return arr[ri(0, arr.length - 1)]!();
}

function safePick<T>(pool: Array<() => T>): T {
  return retry(() => {
    try { return pickFrom(pool); } catch { return null; }
  }, 100);
}

export function pickByLevel<T>(
  easy: Array<() => T>,
  hard: Array<() => T>,
  level: A10ExerciseLevel,
): T {
  return safePick(level === 1 ? easy : hard);
}

function pickIntSolution(): number {
  const v = ri(-10, 10);
  return v === 0 ? 1 : v;
}

function rat(n: number, d: number): EquationSolution {
  if (d === 0) return { kind: "impossible" };
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(Math.abs(n), d);
  n /= g; d /= g;
  if (Math.abs(n) >= 200 || Math.abs(d) >= 200) return { kind: "impossible" };
  return { kind: "rational", num: n, den: d };
}

function fracMarkup(n: number | string, d: number | string): string {
  return `[[frac:${n}/${d}]]`;
}
const f = fracMarkup;

function solText(sol: EquationSolution): string {
  if (sol.kind === "impossible") return "∅";
  if (sol.kind === "infinite") return "infini";
  if (sol.den === 1) return `${sol.num}`;
  return `${sol.num}/${sol.den}`;
}

function acceptPair(x: string, y: string): string[] {
  return [
    `${x};${y}`, `${x},${y}`, `(${x};${y})`, `(${x},${y})`,
    `{(${x};${y})}`, `{(${x},${y})}`, `s={(${x};${y})}`, `s={(${x},${y})}`,
  ];
}

function pairAnswer(x: string, y: string): string {
  return `{(${x} ; ${y})}`;
}

function fmtLin(a: number, b: number, c: number): string {
  const p: string[] = [];
  if (a !== 0) p.push(a === 1 ? "x" : a === -1 ? "-x" : `${a}x`);
  if (b !== 0) p.push(b > 0 ? `+ ${b}y` : `- ${-b}y`);
  return `${p.join(" ").replace(/^\+ /, "")} = ${c}`;
}

const A103_PHASE_ISOLATE = "Isoler une inconnue";
const A103_PHASE_SUBSTITUTE = "Substituer sa valeur";
const A103_PHASE_OTHER = "Chercher l'autre inconnue";
const IR_ACCEPT = ["ir", "s=ir", "infini", "infinité"];
const IMP_ACCEPT = ["impossible", "s=∅", "vide", "∅"];

// ── A10.1 Ex2 — équations développées faciles (30 formes) ─────────────────

type Easy102Shape = {
  kind: "linear" | "paren" | "reverse" | "product" | "both_paren";
  variant: number;
};

const EASY102_SHAPES: Easy102Shape[] = [
  { kind: "linear", variant: 0 }, { kind: "linear", variant: 1 }, { kind: "linear", variant: 2 },
  { kind: "paren", variant: 0 }, { kind: "paren", variant: 1 }, { kind: "paren", variant: 2 },
  { kind: "reverse", variant: 0 }, { kind: "reverse", variant: 1 },
  { kind: "product", variant: 0 }, { kind: "product", variant: 1 },
  { kind: "both_paren", variant: 0 },
  ...Array.from({ length: 19 }, (_, i) => ({ kind: "linear" as const, variant: i + 3 })),
];

function s102(n: number): string {
  return n < 0 ? ` − ${-n}` : ` + ${n}`;
}

function buildEasy102(shape: Easy102Shape): () => EquationQuestion {
  return () => retry(() => {
    const x0 = pickIntSolution();
    if (shape.kind === "linear") {
      const v = shape.variant;
      const a = ri(2 + (v % 4), 5 + (v % 4));
      let c = ri(1, a - 1);
      if (v % 3 === 1) c = ri(a + 1, a + 5);
      const b = ri(1, 9) * (v % 2 === 0 ? 1 : -1);
      const d = (a - c) * x0 + b;
      const expr = v % 5 === 0
        ? `${c}x${s102(b)} = ${a}x${s102(d)}`
        : `${a}x${s102(b)} = ${c}x${s102(d)}`;
      const coef = a - c;
      const dev = [
        `${a}x${s102(b)} = ${c}x${s102(d)}`,
        `${coef}x${s102(b)} = ${d}`,
        `${coef}x = ${d - b}`,
        `x = ${x0}`,
      ];
      if (v % 5 === 0) dev[0] = expr;
      return {
        expr,
        solution: rat(x0, 1),
        development: dev,
        operations: ["", `- ${c}x`, `- ${b}`, `: ${coef}`, ""],
      };
    }
    if (shape.kind === "paren") {
      const a = ri(2, 5), c = ri(1, a - 1);
      const k = ri(1, 5);
      const b = a * k;
      const d = (a - c) * x0 + b;
      const expr = shape.variant === 1
        ? `${a}(x − ${k}) = ${c}x${s102(d)}`
        : `${a}(x${s102(k)}) = ${c}x${s102(d)}`;
      const dev = [
        `${a}x${s102(a * k * (shape.variant === 1 ? -1 : 1))} = ${c}x${s102(d)}`,
        `${a - c}x${s102(a * k * (shape.variant === 1 ? -1 : 1))} = ${d}`,
        `${a - c}x = ${d - a * k * (shape.variant === 1 ? -1 : 1)}`,
        `x = ${x0}`,
      ];
      return { expr, solution: rat(x0, 1), development: dev, operations: ["effectuer", "réduire", `- ${c}x`, `: ${a - c}`, ""] };
    }
    if (shape.kind === "reverse") {
      const a = ri(2, 6), c = ri(1, 9);
      const b = ri(1, 8);
      const d = a * x0 + b - c;
      const expr = shape.variant === 0 ? `${a * x0 + b} = ${c}x${s102(d)}` : `${c} = ${a}x${s102(b)}`;
      const dev = [`${a}x${s102(b)} = ${c}x${s102(d)}`, `${a - c}x${s102(b)} = ${d}`, `x = ${x0}`];
      return { expr, solution: rat(x0, 1), development: dev, operations: ["", `- ${c}x`, `: ${a - c}`, ""] };
    }
    if (shape.kind === "product") {
      const p = ri(2, 4), q = ri(2, 4);
      const pq = p * q;
      const c = ri(1, 9);
      const r = ri(1, pq - 1);
      const e = (pq - r) * x0 + c;
      const expr = `${p} · ${q}x${s102(c)} = ${r}x${s102(e)}`;
      return {
        expr,
        solution: rat(x0, 1),
        development: [`${pq}x${s102(c)} = ${r}x${s102(e)}`, `${pq - r}x = ${e - c}`, `x = ${x0}`],
        operations: ["effectuer", `- ${r}x`, `: ${pq - r}`, ""],
      };
    }
    // both_paren
    const a = ri(2, 4), c = ri(2, 4);
    const kb = ri(1, 4), kd = ri(1, 4);
    const num = c * kd - a * kb;
    const den = a - c;
    if (den === 0) return null;
    const xn = num, xd = den;
    if (Math.abs(xn) > 30) return null;
    const expr = `${a}(x${s102(kb)}) = ${c}(x${s102(kd)})`;
    return {
      expr,
      solution: rat(xn, xd),
      development: [`${a}x${s102(a * kb)} = ${c}x${s102(c * kd)}`, `${den}x = ${c * kd - a * kb}`, `x = ${solText(rat(xn, xd))}`],
      operations: ["effectuer", `- ${c}x`, `: ${den}`, ""],
    };
  });
}

export const a102EasyGens: Array<() => EquationQuestion> = EASY102_SHAPES.map(buildEasy102);

// ── A10.2 — fractions faciles (20 formes fiables) ───────────────────────────

function buildEasyFrac(shape: number): () => EquationQuestion {
  return () => retry(() => {
    const x0 = pickIntSolution();
    switch (shape % 10) {
      case 0: {
        const d1 = 4, d2 = 2, mult = 4, n1 = 3;
        const expr = `${f(n1, d1)} x - ${f("x", d2)} = ${x0}`;
        return {
          expr, solution: rat(x0, 1),
          development: [`${f(n1 + "x", mult)} - ${f("2x", mult)} = ${f(String(x0), mult)}`, `${n1}x - 2x = ${x0}`, `x = ${x0}`],
          operations: ["même dénominateur", "· 4", "réduire", ""],
        };
      }
      case 1: {
        const d1 = 2, d2 = 2;
        const p = ri(1, 3), q = ri(2, 6);
        const n = 2 * (1 - (p * x0 + q) / d1);
        if (!Number.isInteger(n)) return null;
        const expr = `1 - ${f(p + "x + " + q, d1)} = ${f(n, d2)}`;
        return {
          expr, solution: rat(x0, 1),
          development: [`2 - ${p}x - ${q} = ${n}`, `-${p}x = ${n - 2 + q}`, `x = ${x0}`],
          operations: ["même dénominateur", "· 2", "réduire", `+ ${2 + q - n}`, `: (${-p})`, ""],
        };
      }
      case 2: {
        const d1 = 3, d2 = 9, b = ri(1, 5);
        const a = (x0 * (d2 - d1) - d1 * b) / d2;
        if (!Number.isInteger(a) || a < 1) return null;
        const expr = `${f("x - " + a, d1)} = ${f("x + " + b, d2)}`;
        return {
          expr, solution: rat(x0, 1),
          development: [`${d2}x - ${d2 * a} = ${d1}x + ${d1 * b}`, `${d2 - d1}x = ${d1 * b + d2 * a}`, `x = ${x0}`],
          operations: ["même dénominateur", "· 9", "réduire", `- ${d1}x`, `+ ${d2 * a}`, `: ${d2 - d1}`, ""],
        };
      }
      case 3: {
        const d = 3;
        const a = ri(3, 8), b = ri(2, 5), B = ri(15, 30);
        const A = Math.round(B + a - b * x0);
        const expr = `${A} = ${B} + ${f(a + " - " + b + "x", d)}`;
        return {
          expr, solution: rat(x0, 1),
          development: [`${A} = ${B} + ${a} - ${b}x`, `${A - B - a} = -${b}x`, `x = ${x0}`],
          operations: ["même dénominateur", "· 3", "réduire", `- ${B}`, `: (-${b})`, ""],
        };
      }
      case 4: {
        const d1 = 2, d2 = 8, mult = 8;
        const a = ri(8, 12), c = ri(3, 8);
        const bNum = a * x0 * d2 - (x0 + c) * d1;
        if (bNum % d2 !== 0) return null;
        const b = bNum / d2;
        if (b < 1) return null;
        const expr = `${f(a + "x - " + b, d1)} = ${f("x + " + c, d2)}`;
        const coef = a * mult / d1 - 1;
        return {
          expr, solution: rat(x0, 1),
          development: [`${a * mult / d1}x - ${b * mult / d1} = x + ${c}`, `${coef}x = ${c + b * mult / d1}`, `x = ${x0}`],
          operations: ["même dénominateur", "· 8", "réduire", "- x", `+ ${b * mult / d1}`, `: ${coef}`, ""],
        };
      }
      case 5: {
        const d1 = 5, d2 = 2, k = 5, n = 3, p = 2;
        const n2Num = d2 * ((k - p) * x0 * d1 - n);
        if (n2Num % d1 !== 0) return null;
        const n2 = n2Num / d1;
        const expr = `${k}x - ${f(n, d1)} = ${f(n2, d2)} + ${p}x`;
        return {
          expr, solution: rat(x0, 1),
          development: [`${k}x - ${n / d1} = ${n2 / d2} + ${p}x`, `${k - p}x - ${n / d1} = ${n2 / d2}`, `x = ${x0}`],
          operations: ["même dénominateur", "· 10", "réduire", `- ${p}x`, `+ ${n / d1}`, `: ${k - p}`, ""],
        };
      }
      case 6: {
        const d1 = ri(2, 5), d2 = ri(3, 7), mult = lcm(d1, d2);
        const a = ri(2, 8), p = ri(1, 3);
        const qNum = d2 * (x0 - a) - d1 * d2 - p * x0 * d1;
        if (qNum % d1 !== 0) return null;
        const q = qNum / d1;
        const expr = `${f("x - " + a, d1)} - 1 = ${f(p + "x + " + q, d2)}`;
        const coef = d2 - p * d2;
        const lhs = d2 * a + d1;
        return {
          expr, solution: rat(x0, 1),
          development: [`${d2}x - ${lhs} = ${p * d2}x + ${q * d2}`, `${coef}x = ${q * d2 + lhs}`, `x = ${x0}`],
          operations: ["même dénominateur", `· ${mult}`, "réduire", `- ${p * d2}x`, `+ ${lhs}`, `: ${coef}`, ""],
        };
      }
      case 7: {
        const d1 = 7, d2 = 4, mult = 28, k = 5, n = 1, m = 3;
        const c = ((k * mult - n * mult / d1 - m * mult / d2) * x0) / mult;
        if (!Number.isInteger(c)) return null;
        const expr = `${k}x - ${f(n, d1)} x = ${f(m, d2)} x + ${c}`;
        const coef = k * mult - n * mult / d1 - m * mult / d2;
        return {
          expr, solution: rat(x0, 1),
          development: [`${coef}x = ${c}`, `x = ${x0}`],
          operations: ["même dénominateur", "· 28", "réduire", `: ${coef}`, ""],
        };
      }
      case 8: {
        const d1 = 3, d2 = 5, b = 2, cVal = 2;
        const cNum = b * x0 * d1 + (x0 - cVal) * d2 - d1 * d2;
        if (cNum % d1 !== 0) return null;
        const c = cNum / d1;
        const expr = `${f("x - " + cVal, d1)} + ${f(b + "x - " + c, d2)} = 1`;
        return {
          expr, solution: rat(x0, 1),
          development: [`5x - ${5 * cVal} + 3x - ${3 * c} = 15`, `8x - ${5 * cVal + 3 * c} = 15`, `x = ${x0}`],
          operations: ["même dénominateur", "· 15", "réduire", `+ ${5 * cVal + 3 * c}`, ": 8", ""],
        };
      }
      default: {
        const d1 = 4, d2 = 5, mult = 20;
        const p = ri(4, 8), q = ri(2, 6), n = 3;
        const A = Math.round(n * mult / d1 - p * mult / d2 * x0 + q * mult / d2);
        const expr = `${A} = ${f(n, d1)} - ${f(p + "x - " + q, d2)}`;
        return {
          expr, solution: rat(x0, 1),
          development: [`${A} = ${n * mult / d1} - ${p * mult / d2}x + ${q * mult / d2}`, `${A - n * mult / d1 - q * mult / d2} = -${p * mult / d2}x`, `x = ${x0}`],
          operations: ["même dénominateur", "· 20", "réduire", `: (-${p * mult / d2})`, ""],
        };
      }
    }
  });
}

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

export const a102FracEasyGens: Array<() => EquationQuestion> = Array.from({ length: 20 }, (_, i) => buildEasyFrac(i));

// ── A10.3 substitution ──────────────────────────────────────────────────────

type A103Cfg = {
  a1: number; b1: number;
  d2: number; e2: number;
  isoVar: "x" | "y";
  isoEq: 1 | 2;
  negXY?: boolean;
};

const A103_EASY_CFG: A103Cfg[] = [
  { a1: 2, b1: 1, d2: 3, e2: 4, isoVar: "y", isoEq: 1 },
  { a1: 3, b1: 1, d2: 4, e2: 2, isoVar: "y", isoEq: 1 },
  { a1: 4, b1: 1, d2: 2, e2: 5, isoVar: "y", isoEq: 1 },
  { a1: 5, b1: 1, d2: 3, e2: 3, isoVar: "y", isoEq: 1 },
  { a1: 2, b1: -1, d2: 3, e2: 4, isoVar: "y", isoEq: 1 },
  { a1: 3, b1: -1, d2: 5, e2: 2, isoVar: "y", isoEq: 1 },
  { a1: 4, b1: -1, d2: 2, e2: 3, isoVar: "y", isoEq: 1 },
  { a1: 1, b1: 2, d2: 3, e2: 4, isoVar: "x", isoEq: 1 },
  { a1: 1, b1: 3, d2: 4, e2: 2, isoVar: "x", isoEq: 1 },
  { a1: 1, b1: 4, d2: 2, e2: 5, isoVar: "x", isoEq: 1 },
  { a1: 1, b1: -2, d2: 3, e2: 4, isoVar: "x", isoEq: 1 },
  { a1: 2, b1: 2, d2: 3, e2: 1, isoVar: "y", isoEq: 1 },
  { a1: 3, b1: 2, d2: 4, e2: 1, isoVar: "y", isoEq: 1 },
  { a1: 2, b1: 1, d2: 1, e2: 3, isoVar: "y", isoEq: 1 },
  { a1: 3, b1: 1, d2: 1, e2: 4, isoVar: "y", isoEq: 1 },
  { a1: 2, b1: 1, d2: 3, e2: -2, isoVar: "y", isoEq: 1 },
  { a1: 3, b1: 1, d2: 2, e2: -3, isoVar: "y", isoEq: 1 },
  { a1: 1, b1: 2, d2: 4, e2: -1, isoVar: "x", isoEq: 1 },
  { a1: 2, b1: 1, d2: 5, e2: 1, isoVar: "x", isoEq: 2 },
  { a1: 3, b1: 1, d2: 4, e2: 2, isoVar: "x", isoEq: 2 },
  { a1: 4, b1: 1, d2: 3, e2: 3, isoVar: "x", isoEq: 2 },
  { a1: 2, b1: -1, d2: 5, e2: 1, isoVar: "x", isoEq: 2 },
  { a1: 1, b1: 3, d2: 2, e2: 2, isoVar: "y", isoEq: 2 },
  { a1: 1, b1: 2, d2: 3, e2: 3, isoVar: "y", isoEq: 2 },
  { a1: 2, b1: 1, d2: 3, e2: 4, isoVar: "y", isoEq: 1, negXY: true },
  { a1: 3, b1: -1, d2: 2, e2: 5, isoVar: "y", isoEq: 1, negXY: true },
  { a1: 1, b1: 2, d2: 4, e2: 3, isoVar: "x", isoEq: 1, negXY: true },
  { a1: 2, b1: 3, d2: 1, e2: 4, isoVar: "x", isoEq: 1 },
  { a1: 3, b1: 2, d2: 1, e2: 5, isoVar: "x", isoEq: 1 },
  { a1: 1, b1: 1, d2: 2, e2: 3, isoVar: "y", isoEq: 1 },
];

const A103_HARD_CFG: A103Cfg[] = [
  ...A103_EASY_CFG.slice(0, 10).map(c => ({ ...c, negXY: true as const })),
  { a1: 4, b1: 2, d2: 5, e2: 3, isoVar: "y", isoEq: 1 },
  { a1: 5, b1: 2, d2: 3, e2: 4, isoVar: "y", isoEq: 1 },
  { a1: 3, b1: 3, d2: 4, e2: 2, isoVar: "y", isoEq: 1 },
  { a1: 2, b1: 3, d2: 5, e2: 1, isoVar: "x", isoEq: 1 },
  { a1: 1, b1: 5, d2: 3, e2: 2, isoVar: "x", isoEq: 1 },
  { a1: 5, b1: -2, d2: 3, e2: 4, isoVar: "y", isoEq: 1 },
  { a1: 4, b1: -3, d2: 2, e2: 5, isoVar: "x", isoEq: 2 },
  { a1: 2, b1: 4, d2: 3, e2: -2, isoVar: "y", isoEq: 2 },
  { a1: 3, b1: 2, d2: -2, e2: 4, isoVar: "x", isoEq: 2 },
  { a1: 1, b1: 4, d2: 5, e2: -3, isoVar: "y", isoEq: 2 },
  { a1: 6, b1: 1, d2: 4, e2: 3, isoVar: "y", isoEq: 1 },
  { a1: 5, b1: 1, d2: 6, e2: 2, isoVar: "x", isoEq: 2 },
  { a1: 4, b1: 3, d2: 2, e2: 5, isoVar: "y", isoEq: 1 },
  { a1: 3, b1: 4, d2: 5, e2: 1, isoVar: "x", isoEq: 1 },
  { a1: 2, b1: 5, d2: 4, e2: 2, isoVar: "y", isoEq: 2 },
  { a1: 1, b1: 6, d2: 3, e2: 4, isoVar: "x", isoEq: 2 },
  { a1: 7, b1: -1, d2: 2, e2: 5, isoVar: "y", isoEq: 1 },
  { a1: 5, b1: -2, d2: 4, e2: 3, isoVar: "x", isoEq: 2 },
  { a1: 4, b1: 4, d2: 3, e2: 2, isoVar: "y", isoEq: 1 },
  { a1: 3, b1: 5, d2: 2, e2: 4, isoVar: "x", isoEq: 1 },
];

function buildA103(cfg: A103Cfg): () => SystemEquationQuestion {
  return () => retry(() => {
    const x0 = cfg.negXY ? ri(-8, -1) : pickIntSolution();
    const y0 = cfg.negXY ? ri(-8, -1) : pickIntSolution();
    const c1 = cfg.a1 * x0 + cfg.b1 * y0;
    const f2 = cfg.d2 * x0 + cfg.e2 * y0;
    const xs = `${x0}`, ys = `${y0}`;

    if (cfg.isoVar === "y" && cfg.isoEq === 1 && cfg.b1 === 1) {
      const dev = [
        A103_PHASE_ISOLATE, fmtLin(cfg.a1, 1, c1), `y = ${c1} - ${cfg.a1}x`, A103_PHASE_SUBSTITUTE,
        `${cfg.d2}x + ${cfg.e2}(${c1} - ${cfg.a1}x) = ${f2}`,
        `${cfg.d2}x + ${cfg.e2 * c1} - ${cfg.e2 * cfg.a1}x = ${f2}`,
        `${cfg.d2 - cfg.e2 * cfg.a1}x + ${cfg.e2 * c1} = ${f2}`,
        `${cfg.d2 - cfg.e2 * cfg.a1}x = ${f2 - cfg.e2 * c1}`, `x = ${x0}`,
        A103_PHASE_OTHER, `y = ${c1} - ${cfg.a1}x`, `y = ${c1} - ${cfg.a1} · ${x0} = ${y0}`,
      ];
      return {
        equations: [fmtLin(cfg.a1, 1, c1), fmtLin(cfg.d2, cfg.e2, f2)] as [string, string],
        answer: pairAnswer(xs, ys), acceptable: acceptPair(xs, ys), development: dev,
        operations: ["", `- ${cfg.a1}x`, "", "", "effectuer", "réduire", `- ${cfg.e2 * c1}`, `: ${cfg.d2 - cfg.e2 * cfg.a1}`, "", "", ""],
      };
    }
    if (cfg.isoVar === "y" && cfg.isoEq === 1 && cfg.b1 === -1) {
      const dev = [
        A103_PHASE_ISOLATE, fmtLin(cfg.a1, -1, c1), `-y = ${c1} - ${cfg.a1}x`, `y = ${-c1} + ${cfg.a1}x`,
        A103_PHASE_SUBSTITUTE, `${cfg.d2}x + ${cfg.e2}(${-c1} + ${cfg.a1}x) = ${f2}`,
        `${cfg.d2}x + ${-cfg.e2 * c1} + ${cfg.e2 * cfg.a1}x = ${f2}`,
        `${cfg.d2 + cfg.e2 * cfg.a1}x + ${-cfg.e2 * c1} = ${f2}`,
        `x = ${x0}`, A103_PHASE_OTHER, `y = ${-c1} + ${cfg.a1}x`, `y = ${y0}`,
      ];
      return {
        equations: [fmtLin(cfg.a1, -1, c1), fmtLin(cfg.d2, cfg.e2, f2)] as [string, string],
        answer: pairAnswer(xs, ys), acceptable: acceptPair(xs, ys), development: dev,
        operations: ["", `- ${cfg.a1}x`, "· (-1)", "", "", "effectuer", "réduire", `- ${-cfg.e2 * c1}`, `: ${cfg.d2 + cfg.e2 * cfg.a1}`, "", "", ""],
      };
    }
    if (cfg.isoVar === "x" && cfg.isoEq === 1 && cfg.a1 === 1) {
      const dev = [
        A103_PHASE_ISOLATE, fmtLin(1, cfg.b1, c1), `x = ${c1} - ${cfg.b1}y`, A103_PHASE_SUBSTITUTE,
        `${cfg.d2}(${c1} - ${cfg.b1}y) + ${cfg.e2}y = ${f2}`,
        `${cfg.d2 * c1} - ${cfg.d2 * cfg.b1}y + ${cfg.e2}y = ${f2}`,
        `${cfg.d2 * c1} - ${cfg.d2 * cfg.b1 - cfg.e2}y = ${f2}`,
        `y = ${y0}`, A103_PHASE_OTHER, `x = ${c1} - ${cfg.b1}y`, `x = ${x0}`,
      ];
      return {
        equations: [fmtLin(1, cfg.b1, c1), fmtLin(cfg.d2, cfg.e2, f2)] as [string, string],
        answer: pairAnswer(xs, ys), acceptable: acceptPair(xs, ys), development: dev,
        operations: ["", `- ${cfg.b1}y`, "", "", "effectuer", "réduire", `- ${cfg.d2 * c1}`, `: (${-(cfg.d2 * cfg.b1 - cfg.e2)})`, "", "", ""],
      };
    }
    if (cfg.isoVar === "y" && cfg.isoEq === 1 && cfg.b1 !== 1 && cfg.b1 !== -1) {
      if ((c1 - cfg.a1 * x0) % cfg.b1 !== 0) return null;
      const dev = [
        A103_PHASE_ISOLATE, fmtLin(cfg.a1, cfg.b1, c1), `${cfg.b1}y = ${c1} - ${cfg.a1}x`,
        `y = ${(c1 - cfg.a1 * x0) / cfg.b1}`, A103_PHASE_SUBSTITUTE,
        `${cfg.d2}x + ${cfg.e2}((${c1} - ${cfg.a1}x) / ${cfg.b1}) = ${f2}`, `x = ${x0}`,
        A103_PHASE_OTHER, `y = ${y0}`,
      ];
      return {
        equations: [fmtLin(cfg.a1, cfg.b1, c1), fmtLin(cfg.d2, cfg.e2, f2)] as [string, string],
        answer: pairAnswer(xs, ys), acceptable: acceptPair(xs, ys), development: dev,
        operations: ["", `- ${cfg.a1}x`, `: ${cfg.b1}`, "", "", "effectuer", "", "", "", ""],
      };
    }
    if (cfg.isoVar === "x" && cfg.isoEq === 2 && cfg.d2 === 1) {
      const rhs = -f2;
      const dev = [
        A103_PHASE_ISOLATE, `${cfg.e2}y = ${rhs} - x`, `x = ${rhs} - ${cfg.e2}y`, A103_PHASE_SUBSTITUTE,
        `${cfg.a1}(${rhs} - ${cfg.e2}y) + ${cfg.b1}y = ${c1}`,
        `${cfg.a1 * rhs} - ${cfg.a1 * cfg.e2}y + ${cfg.b1}y = ${c1}`, `y = ${y0}`,
        A103_PHASE_OTHER, `x = ${x0}`,
      ];
      return {
        equations: [fmtLin(cfg.a1, cfg.b1, c1), fmtLin(1, cfg.e2, f2)] as [string, string],
        answer: pairAnswer(xs, ys), acceptable: acceptPair(xs, ys), development: dev,
        operations: ["", "+ x", "", "", "effectuer", "réduire", `- ${cfg.a1 * rhs}`, "", "", ""],
      };
    }
    if (cfg.isoVar === "x" && cfg.isoEq === 2) {
      const dev = [
        A103_PHASE_ISOLATE, fmtLin(cfg.d2, cfg.e2, f2), `${cfg.d2}x = ${f2} - ${cfg.e2}y`, `x = ${(f2 - cfg.e2 * y0) / cfg.d2}`,
        A103_PHASE_SUBSTITUTE, `${cfg.a1}x + ${cfg.b1}y = ${c1}`, `y = ${y0}`, A103_PHASE_OTHER, `x = ${x0}`,
      ];
      if ((f2 - cfg.e2 * y0) % cfg.d2 !== 0) return null;
      return {
        equations: [fmtLin(cfg.a1, cfg.b1, c1), fmtLin(cfg.d2, cfg.e2, f2)] as [string, string],
        answer: pairAnswer(xs, ys), acceptable: acceptPair(xs, ys), development: dev,
        operations: ["", `- ${cfg.e2}y`, `: ${cfg.d2}`, "", "", "", "", "", ""],
      };
    }
    return null;
  });
}

export const a103EasyGens: Array<() => SystemEquationQuestion> = A103_EASY_CFG.map(buildA103);
export const a103HardGens: Array<() => SystemEquationQuestion> = [
  ...A103_HARD_CFG.map(buildA103),
  // infini / impossible (formes distinctes)
  () => ({
    equations: [`${ri(3, 6)}x + y = ${ri(5, 15)}`, `-4y + 40 = ${-4 * ri(3, 6)}x`] as [string, string],
    answer: "IR", acceptable: IR_ACCEPT,
    development: [A103_PHASE_ISOLATE, A103_PHASE_SUBSTITUTE, "0 = 0", "infini"],
    operations: ["", "", "", ""],
  }),
  () => ({
    equations: [`${ri(3, 5)}y - x = ${ri(5, 12)}`, `${-15}x - 120 = ${-40}y`] as [string, string],
    answer: "impossible", acceptable: IMP_ACCEPT,
    development: [A103_PHASE_ISOLATE, A103_PHASE_SUBSTITUTE, "-5 = 0", "impossible !"],
    operations: ["", "", "", ""],
  }),
];

// ── A10.4 combinaison linéaire ──────────────────────────────────────────────

type A104Cfg = { a: number; b: number; d: number; e: number; m1: number; m2: number; elim: "x" | "y" };

const A104_EASY_CFG: A104Cfg[] = Array.from({ length: 30 }, (_, i) => ({
  a: 2 + (i % 5),
  b: (i % 3 === 0 ? -1 : 1) * (2 + (i % 4)),
  d: 3 + (i % 4),
  e: 2 + ((i + 1) % 5),
  m1: i % 4 === 0 ? 3 : 2,
  m2: 1,
  elim: i % 2 === 0 ? "y" as const : "x" as const,
}));

function buildA104(cfg: A104Cfg): () => SystemEquationQuestion {
  return () => retry(() => {
    const x0 = pickIntSolution(), y0 = pickIntSolution();
    const c = cfg.a * x0 + cfg.b * y0;
    const f2 = cfg.d * x0 + cfg.e * y0;
    const xs = `${x0}`, ys = `${y0}`;
    const yCoef = cfg.b * cfg.m1 + cfg.e * cfg.m2;
    const xCoef = cfg.a * cfg.m1 + cfg.d * cfg.m2;
    if (cfg.elim === "y" && yCoef === 0) return null;
    if (cfg.elim === "x" && xCoef === 0) return null;

    if (cfg.elim === "y") {
      const dev = [
        cfg.m1 > 1 ? `I · ${cfg.m1}` : "I", fmtLin(cfg.a * cfg.m1, cfg.b * cfg.m1, c * cfg.m1),
        cfg.m2 > 1 ? `II · ${cfg.m2}` : "II", fmtLin(cfg.d * cfg.m2, cfg.e * cfg.m2, f2 * cfg.m2),
        `${yCoef}y = ${c * cfg.m1 + f2 * cfg.m2 - xCoef * x0}`, `y = ${y0}`, "dans I",
        fmtLin(cfg.a, cfg.b, c), `${cfg.a}x + ${cfg.b} · ${y0} = ${c}`, `${cfg.a}x = ${c - cfg.b * y0}`, `x = ${x0}`,
      ];
      return {
        equations: [fmtLin(cfg.a, cfg.b, c), fmtLin(cfg.d, cfg.e, f2)] as [string, string],
        answer: pairAnswer(xs, ys), acceptable: acceptPair(xs, ys), development: dev,
        operations: [`· ${cfg.m1}`, "", cfg.m2 > 1 ? `· ${cfg.m2}` : "", "", `: ${yCoef}`, "", "", "", `- ${cfg.b * y0}`, `: ${cfg.a}`, "", ""],
      };
    }
    const dev = [
      cfg.m1 > 1 ? `I · ${cfg.m1}` : "I", fmtLin(cfg.a * cfg.m1, cfg.b * cfg.m1, c * cfg.m1),
      cfg.m2 > 1 ? `II · ${cfg.m2}` : "II", fmtLin(cfg.d * cfg.m2, cfg.e * cfg.m2, f2 * cfg.m2),
      `${xCoef}x = ${c * cfg.m1 + f2 * cfg.m2 - yCoef * y0}`, `x = ${x0}`, "dans II",
      fmtLin(cfg.d, cfg.e, f2), `${cfg.d}x + ${cfg.e} · ${y0} = ${f2}`, `y = ${y0}`,
    ];
    return {
      equations: [fmtLin(cfg.a, cfg.b, c), fmtLin(cfg.d, cfg.e, f2)] as [string, string],
      answer: pairAnswer(xs, ys), acceptable: acceptPair(xs, ys), development: dev,
      operations: [`· ${cfg.m1}`, "", cfg.m2 > 1 ? `· ${cfg.m2}` : "", "", `: ${xCoef}`, "", "", "", "", "", ""],
    };
  });
}

export const a104EasyGens: Array<() => SystemEquationQuestion> = A104_EASY_CFG.map(buildA104);
export const a104HardGens: Array<() => SystemEquationQuestion> = [
  ...Array.from({ length: 28 }, (_, i) => buildA104({
    a: [3, -5, 4, -2, 5, 3, -4, 2][i % 8]!,
    b: [-2, 3, -3, 5, 2, -5, 7, -3][i % 8]!,
    d: [8, 3, -2, 5, -5, 7, 3, -5][i % 8]!,
    e: [4, -5, 7, 8, -7, 1, 21, 4][i % 8]!,
    m1: [2, 3, 5, 3, 5, 2, 3, 4][i % 8]!,
    m2: [1, 5, 2, 2, 2, 4, 1, 2][i % 8]!,
    elim: i % 2 === 0 ? "y" : "x",
  })),
  () => ({
    equations: [`7y + -4x = -9`, `-12x + 21y = -27`] as [string, string],
    answer: "IR", acceptable: IR_ACCEPT,
    development: ["mettre dans le même ordre", "I · 3", "0 = 0", "infini"],
    operations: ["", "· 3", "", ""],
  }),
  () => ({
    equations: [`7x + 10y - 1 = 0`, `28x + 40y - 10 = 0`] as [string, string],
    answer: "impossible", acceptable: IMP_ACCEPT,
    development: ["I · 4", "6 = 0", "impossible !"],
    operations: ["· 4", "", ""],
  }),
];
