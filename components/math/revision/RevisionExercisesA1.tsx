"use client";

import React, { useEffect, useMemo, useState } from "react";
import { OrderingChips, PoolExercise, makeRng, seededShuffle } from "./RevisionCommon";
import type { RevisionExerciseMeta, RevisionExerciseProps, PoolQuestion } from "./RevisionCommon";

const CLS_WRONG = "border-amber-500 bg-amber-50 text-amber-600 dark:bg-amber-950/20";

// ─── Exercise 1 — Écrire les nombres (3 pts) — A1.1 Exercise 5 ───────────────

const A1_1_POOL: PoolQuestion[] = [
  { id: "a1-1-01", promptFr: "Écrivez en chiffres : 4 dizaines et 7 unités", acceptable: ["47"] },
  { id: "a1-1-02", promptFr: "Écrivez en chiffres : 2 dizaines et 5 unités", acceptable: ["25"] },
  { id: "a1-1-03", promptFr: "Écrivez en chiffres : 6 dizaines et 1 unité", acceptable: ["61"] },
  { id: "a1-1-04", promptFr: "Écrivez en chiffres : 8 dizaines et 9 unités", acceptable: ["89"] },
  { id: "a1-1-05", promptFr: "Écrivez en chiffres : 3 dizaines et 4 unités", acceptable: ["34"] },
  { id: "a1-1-06", promptFr: "Écrivez en chiffres : 7 dizaines et 2 unités", acceptable: ["72"] },
  { id: "a1-1-07", promptFr: "Écrivez en chiffres : 5 dizaines et 6 unités", acceptable: ["56"] },
  { id: "a1-1-08", promptFr: "Écrivez en chiffres : 9 dizaines et 3 unités", acceptable: ["93"] },
  { id: "a1-1-09", promptFr: "Écrivez en chiffres : 4 dizaines et 8 unités", acceptable: ["48"] },
  { id: "a1-1-10", promptFr: "Écrivez en chiffres : 7 dizaines et 5 unités", acceptable: ["75"] },
  { id: "a1-1-11", promptFr: "Écrivez en chiffres : 2 dizaines et 3 unités", acceptable: ["23"] },
  { id: "a1-1-12", promptFr: "Écrivez en chiffres : 6 dizaines et 7 unités", acceptable: ["67"] },
  { id: "a1-1-13", promptFr: "Écrivez en chiffres : 1 dizaine et 9 unités", acceptable: ["19"] },
  { id: "a1-1-14", promptFr: "Écrivez en chiffres : 3 dizaines et 8 unités", acceptable: ["38"] },
  { id: "a1-1-15", promptFr: "Écrivez en chiffres : 5 dizaines et 4 unités", acceptable: ["54"] },
];

function A1Ex1(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A1_1_POOL} count={3} />;
}

// ─── Exercise 2 — Décomposition avec blocs (3 pts) — A1.2 Exercise 3 ─────────

function A1Ex2({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 3 }, () => {
      const n = rng.int(1001, 9999);
      const m = Math.floor(n / 1000);
      const c = Math.floor((n % 1000) / 100);
      const d = Math.floor((n % 100) / 10);
      const u = n % 10;
      return { n, m, c, d, u };
    });
  }, [exerciseKey]);

  const mkEmpty = () => ({ m: "", c: "", d: "", u: "" });
  const [answers, setAnswers] = useState(() => Array(3).fill(null).map(mkEmpty));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      const a = answers[i] ?? mkEmpty();
      if (
        parseInt(a.m) === q.m * 1000 &&
        parseInt(a.c) === q.c * 100 &&
        parseInt(a.d) === q.d * 10 &&
        parseInt(a.u) === q.u
      ) pts++;
    });
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const setAns = (i: number, patch: Partial<ReturnType<typeof mkEmpty>>) =>
    setAnswers(prev => prev.map((a, j) => j === i ? { ...a, ...patch } : a));

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Décomposez chaque nombre en milliers, centaines, dizaines et unités.</p>
      {data.map((q, i) => {
        const a = answers[i] ?? mkEmpty();
        const inputCls = "w-0 flex-1 rounded border border-[var(--color-border-default)] bg-[var(--color-accent-alg)]/10 px-1 py-1.5 text-center text-sm outline-none focus-visible:border-[var(--color-accent-alg)]";
        const valCls = (ok: boolean) => ok ? "border-[var(--color-border-default)]" : "border-amber-500 bg-amber-50 text-amber-600";
        const mOk = parseInt(a.m) === q.m * 1000;
        const cOk = parseInt(a.c) === q.c * 100;
        const dOk = parseInt(a.d) === q.d * 10;
        const uOk = parseInt(a.u) === q.u;
        return (
          <div key={i} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
            <div className="mb-2 flex justify-center">
              <span className="text-xl font-bold tabular-nums text-[var(--color-text-primary)]">
                {q.n.toLocaleString("fr-CH")}
              </span>
            </div>
            <div className="flex items-start gap-1 text-sm font-medium text-[var(--color-text-primary)]">
              <span className="mt-[7px] shrink-0">=</span>
              {[
                { key: "m" as const, val: q.m * 1000, ok: mOk, label: "millier" },
                { key: "c" as const, val: q.c * 100, ok: cOk, label: "centaine" },
                { key: "d" as const, val: q.d * 10, ok: dOk, label: "dizaine" },
                { key: "u" as const, val: q.u, ok: uOk, label: "unité" },
              ].map((field, fi) => (
                <React.Fragment key={field.key}>
                  {fi > 0 && <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>}
                  <div className="flex flex-1 flex-col items-center gap-0.5">
                    {validated ? (
                      <span className={`w-full rounded border px-1 py-1.5 text-sm text-center ${valCls(field.ok)}`}>
                        {field.ok ? (a[field.key] || String(field.val)) : String(field.val)}
                      </span>
                    ) : (
                      <input className={inputCls} inputMode="numeric" autoComplete="off"
                        value={a[field.key]}
                        onChange={e => setAns(i, { [field.key]: e.target.value.replace(/[^0-9]/g, "") })} />
                    )}
                    <span className="text-xs text-[var(--color-text-secondary)]">{field.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Exercise 3 — Décomposer en M+C+D+U (4 pts) — A1.2 Exercise 6 ─────────────

function A1Ex3({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 2 }, () => {
      const n = rng.int(1101, 9999);
      const m = Math.floor(n / 1000);
      const c = Math.floor((n % 1000) / 100);
      const d = Math.floor((n % 100) / 10);
      const u = n % 10;
      return { n, m, c, d, u };
    });
  }, [exerciseKey]);

  const mkEmpty = () => ({ m: "", c: "", d: "", u: "" });
  const [answers, setAnswers] = useState(() => Array(2).fill(null).map(mkEmpty));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      const a = answers[i] ?? mkEmpty();
      if (parseInt(a.m) === q.m * 1000 && parseInt(a.c) === q.c * 100) pts++;
      if (parseInt(a.d) === q.d * 10 && parseInt(a.u) === q.u) pts++;
    });
    onValidated(pts, 4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const setAns = (i: number, patch: Partial<ReturnType<typeof mkEmpty>>) =>
    setAnswers(prev => prev.map((a, j) => j === i ? { ...a, ...patch } : a));

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Décomposez le nombre en milliers, centaines, dizaines et unités.</p>
      {data.map((q, i) => {
        const a = answers[i] ?? mkEmpty();
        const mOk = validated ? parseInt(a.m) === q.m * 1000 : null;
        const cOk = validated ? parseInt(a.c) === q.c * 100 : null;
        const dOk = validated ? parseInt(a.d) === q.d * 10 : null;
        const uOk = validated ? parseInt(a.u) === q.u : null;
        const fieldBase = "w-full rounded border bg-[var(--color-accent-alg)]/10 px-1 py-1.5 text-center text-sm outline-none focus-visible:border-[var(--color-accent-alg)] border-[var(--color-border-default)]";
        const vCls = (ok: boolean | null) => ok === null ? "" : ok ? "border-[var(--color-border-default)]" : "border-amber-500 bg-amber-50 text-amber-600";
        return (
          <div key={i} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-4">
            <div className="mb-3 flex justify-center">
              <span className="text-2xl font-bold tabular-nums text-[var(--color-text-primary)]">
                {q.n.toLocaleString("fr-CH")}
              </span>
            </div>
            <div className="flex items-start gap-1 text-sm font-medium text-[var(--color-text-primary)]">
              <span className="mt-[7px] shrink-0">=</span>
              {[
                { key: "m" as const, val: q.m * 1000, ok: mOk, label: "millier" },
                { key: "c" as const, val: q.c * 100, ok: cOk, label: "centaine" },
                { key: "d" as const, val: q.d * 10, ok: dOk, label: "dizaine" },
                { key: "u" as const, val: q.u, ok: uOk, label: "unité" },
              ].map((field, fi) => (
                <React.Fragment key={field.key}>
                  {fi > 0 && <span className="mt-[7px] shrink-0 text-[var(--color-text-secondary)]">+</span>}
                  <div className="flex flex-1 flex-col items-center gap-0.5">
                    {validated ? (
                      <span className={`w-full rounded border px-1 py-1.5 text-sm inline-flex items-center justify-center gap-1 ${vCls(field.ok)}`}>
                        {field.ok ? <span>{a[field.key] || String(field.val)}</span> : <><span className="line-through text-xs">{a[field.key] || "—"}</span><span>{String(field.val)}</span></>}
                      </span>
                    ) : (
                      <input className={fieldBase} inputMode="numeric" autoComplete="off"
                        value={a[field.key]}
                        onChange={e => setAns(i, { [field.key]: e.target.value.replace(/[^0-9]/g, "") })} />
                    )}
                    <span className="text-xs text-[var(--color-text-secondary)]">{field.label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Exercise 4 — Comparaison 5 chiffres (3 pts) — A1.3 Exercise 2 ───────────

type CompSym = "<" | ">" | "=";

function A1Ex4({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 3 }, (_, i) => {
      if (i === 0) {
        const a = rng.int(10000, 89999);
        return { a, b: a, correct: "=" as CompSym };
      }
      const a = rng.int(10000, 89999);
      const b = rng.int(10000, 89999);
      const correct: CompSym = a < b ? "<" : a > b ? ">" : "=";
      return { a, b, correct };
    });
  }, [exerciseKey]);

  const [selected, setSelected] = useState<(CompSym | "")[]>(Array(3).fill(""));

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((pair, i) => {
      if (selected[i] === pair.correct) pts++;
    });
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez avec le symbole de comparaison.</p>
      {data.map((pair, i) => {
        const sel = selected[i] ?? "";
        const correct = pair.correct;
        return (
          <div key={i} className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
            <div className="flex items-center justify-center gap-3">
              <span className="font-mono text-lg font-bold tabular-nums text-[var(--color-text-primary)]">
                {pair.a.toLocaleString("fr-CH")}
              </span>
              <div className="flex gap-1">
                {(["<", ">", "="] as CompSym[]).map(sym => {
                  let cls = "w-10 h-9 rounded border text-center text-sm font-bold transition-colors";
                  if (validated) {
                    if (sym === correct && sym !== sel) cls += ` ${CLS_WRONG}`;
                    else if (sym === sel) cls += " border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-[var(--color-text-primary)]";
                    else cls += " border-[var(--color-border-default)] text-[var(--color-text-secondary)]";
                  } else {
                    cls += sel === sym
                      ? " border-teal-500 bg-teal-50 dark:bg-teal-950/30 text-[var(--color-text-primary)]"
                      : " border-zinc-300 dark:border-zinc-600 text-[var(--color-text-primary)] hover:border-teal-400 cursor-pointer";
                  }
                  return (
                    <button key={sym} type="button" className={cls}
                      onClick={() => { if (!validated) setSelected(prev => prev.map((s, j) => j === i ? sym : s)); }}>
                      {sym}
                    </button>
                  );
                })}
              </div>
              <span className="font-mono text-lg font-bold tabular-nums text-[var(--color-text-primary)]">
                {pair.b.toLocaleString("fr-CH")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── Exercise 5 — Aléatoire parmi A1.3 Ex3/4/5 (3 pts) ──────────────────────

const A1_5a_POOL: PoolQuestion[] = [
  { id: "a1-5a-01", promptFr: "Quel symbole convient ? 4 527 ___ 4 572", acceptable: ["<"] },
  { id: "a1-5a-02", promptFr: "Quel symbole convient ? 7 835 ___ 7 853", acceptable: ["<"] },
  { id: "a1-5a-03", promptFr: "Quel symbole convient ? 3 946 ___ 3 946", acceptable: ["="] },
  { id: "a1-5a-04", promptFr: "Quel symbole convient ? 8 134 ___ 8 143", acceptable: ["<"] },
  { id: "a1-5a-05", promptFr: "Quel symbole convient ? 5 621 ___ 5 612", acceptable: [">"] },
  { id: "a1-5a-06", promptFr: "Quel symbole convient ? 2 490 ___ 2 490", acceptable: ["="] },
  { id: "a1-5a-07", promptFr: "Quel symbole convient ? 6 708 ___ 6 780", acceptable: ["<"] },
  { id: "a1-5a-08", promptFr: "Quel symbole convient ? 9 340 ___ 9 304", acceptable: [">"] },
  { id: "a1-5a-09", promptFr: "Quel symbole convient ? 1 255 ___ 1 552", acceptable: ["<"] },
  { id: "a1-5a-10", promptFr: "Quel symbole convient ? 4 100 ___ 4 100", acceptable: ["="] },
  { id: "a1-5a-11", promptFr: "Quel symbole convient ? 3 782 ___ 3 872", acceptable: ["<"] },
  { id: "a1-5a-12", promptFr: "Quel symbole convient ? 9 050 ___ 9 005", acceptable: [">"] },
];

const A1_5b_POOL: PoolQuestion[] = [
  { id: "a1-5b-01", promptFr: "Quel est le plus grand nombre parmi 3 450, 3 540 et 3 405 ?", acceptable: ["3540", "3 540"] },
  { id: "a1-5b-02", promptFr: "Quel est le plus petit nombre parmi 7 621, 7 612 et 7 261 ?", acceptable: ["7261", "7 261"] },
  { id: "a1-5b-03", promptFr: "Quel nombre est compris entre 4 000 et 5 000 parmi 3 899, 4 250 et 5 001 ?", acceptable: ["4250", "4 250"] },
  { id: "a1-5b-04", promptFr: "Quel est le plus grand nombre parmi 2 089, 2 908 et 2 809 ?", acceptable: ["2908", "2 908"] },
  { id: "a1-5b-05", promptFr: "Quel est le plus petit nombre parmi 5 123, 5 132 et 5 213 ?", acceptable: ["5123", "5 123"] },
  { id: "a1-5b-06", promptFr: "Quel nombre est supérieur à 6 000 parmi 5 999, 6 001 et 5 889 ?", acceptable: ["6001", "6 001"] },
  { id: "a1-5b-07", promptFr: "Quel est le plus grand nombre parmi 8 340, 8 304 et 8 043 ?", acceptable: ["8340", "8 340"] },
  { id: "a1-5b-08", promptFr: "Quel nombre est inférieur à 3 000 parmi 3 001, 2 999 et 3 100 ?", acceptable: ["2999", "2 999"] },
  { id: "a1-5b-09", promptFr: "Quel est le plus petit nombre parmi 4 567, 4 657 et 4 576 ?", acceptable: ["4567", "4 567"] },
];

const A1_5c_POOL: PoolQuestion[] = [
  { id: "a1-5c-01", promptFr: "Le nombre 523 est-il compris entre 500 et 600 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-5c-02", promptFr: "Le nombre 723 est-il plus grand que 710 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-5c-03", promptFr: "Le nombre 285 est-il inférieur à 300 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-5c-04", promptFr: "Le nombre 4 250 est-il compris entre 4 000 et 4 500 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-5c-05", promptFr: "Le nombre 6 899 est-il supérieur à 7 000 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a1-5c-06", promptFr: "Le nombre 3 500 est-il entre 3 000 et 4 000 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-5c-07", promptFr: "Le nombre 1 800 est-il inférieur à 2 000 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-5c-08", promptFr: "Le nombre 8 050 est-il supérieur à 8 500 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a1-5c-09", promptFr: "Le nombre 5 999 est-il compris entre 5 000 et 6 000 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-5c-10", promptFr: "Le nombre 7 200 est-il supérieur à 7 500 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
];

function A1Ex5(props: RevisionExerciseProps) {
  const variant = props.exerciseKey % 3;
  if (variant === 0) return <PoolExercise {...props} pool={A1_5a_POOL} count={3} />;
  if (variant === 1) return <PoolExercise {...props} pool={A1_5b_POOL} count={3} />;
  return <PoolExercise {...props} pool={A1_5c_POOL} count={3} />;
}

// ─── Exercise 6 — Nombres dans les intervalles (3 pts) — A1.3 Exercise 6 ─────

const A1_6_POOL: PoolQuestion[] = [
  { id: "a1-6-01", promptFr: "Le nombre 553 est-il compris entre 250 et 700 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-02", promptFr: "Le nombre 710 est-il compris entre 250 et 700 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a1-6-03", promptFr: "Le nombre 199 est-il compris entre 10 et 250 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-04", promptFr: "Le nombre 34 est-il compris entre 10 et 250 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-05", promptFr: "Le nombre 908 est-il compris entre 700 et 920 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-06", promptFr: "Le nombre 587 est-il compris entre 250 et 700 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-07", promptFr: "Le nombre 242 est-il compris entre 10 et 250 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-08", promptFr: "Le nombre 890 est-il compris entre 700 et 920 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-09", promptFr: "Le nombre 200 est-il strictement entre 250 et 700 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a1-6-10", promptFr: "Le nombre 700 est-il strictement entre 250 et 700 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a1-6-11", promptFr: "Le nombre 330 est-il compris entre 10 et 250 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a1-6-12", promptFr: "Le nombre 815 est-il compris entre 700 et 920 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-13", promptFr: "Le nombre 12 est-il compris entre 250 et 700 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a1-6-14", promptFr: "Le nombre 498 est-il compris entre 250 et 700 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a1-6-15", promptFr: "Le nombre 48 est-il compris entre 10 et 250 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
];

function A1Ex6(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A1_6_POOL} count={3} />;
}

// ─── Exercise 7 — Droite numérique + Voisins (5 pts) — A1.4 Ex2 + Ex3 ────────

function A1Ex7({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    const step = 100;
    const widths = [200, 300, 400];
    const width = widths[rng.int(0, 2)]!;
    const min = rng.int(0, Math.floor((9000 - width) / 100)) * 100;
    const max = min + width;
    const candidates: number[] = [];
    for (let v = min + 10; v < max; v += 10) {
      if (v % step !== 0) candidates.push(v);
    }
    const sh = seededShuffle(candidates, exerciseKey + 1);
    const arrows = [Math.min(sh[0]!, sh[1]!), Math.max(sh[0]!, sh[1]!)];
    const voisins: number[] = [];
    const used = new Set<number>();
    const rng2 = makeRng(exerciseKey + 200);
    while (voisins.length < 3) {
      const n = rng2.int(100, 999);
      if (n % 10 !== 0 && !used.has(n)) { voisins.push(n); used.add(n); }
    }
    return { min, max, step, arrows, voisins };
  }, [exerciseKey]);

  const [lineAnswers, setLineAnswers] = useState(["", ""]);
  const [lineResults, setLineResults] = useState<(boolean | null)[]>([null, null]);
  const [voisinsAns, setVoisinsAns] = useState(() =>
    Array(3).fill(null).map(() => ({ lo: "", hi: "" }))
  );

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    const lr = data.arrows.map((v, i) => parseInt(lineAnswers[i] ?? "") === v);
    setLineResults(lr);
    pts += lr.filter(Boolean).length;
    data.voisins.forEach((n, i) => {
      const lo = Math.floor(n / 10) * 10;
      const hi = lo + 10;
      const a = voisinsAns[i] ?? { lo: "", hi: "" };
      if (parseInt(a.lo) === lo && parseInt(a.hi) === hi) pts++;
    });
    onValidated(pts, 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  const ML = 30, lineW = 450;
  const totalUnits = data.max - data.min;
  const pos = (v: number) => ML + ((v - data.min) / totalUnits) * lineW;
  const svgH = 130, lineY = 112, arrowTipY = 108, boxW = 56, boxH = 24;
  const boxYArr = [4, 36];

  const fieldCls = "w-16 rounded border bg-[var(--color-accent-alg)]/10 px-1 py-1 text-center text-sm tabular-nums outline-none border-[var(--color-border-default)] focus-visible:border-[var(--color-accent-alg)]";

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">
          Partie 1 — Écrivez les nombres indiqués par les flèches
        </p>
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] p-3">
          <div className="w-full overflow-x-auto">
            <svg viewBox={`0 0 500 ${svgH}`} width="100%" style={{ display: "block" }}>
              <line x1={ML} y1={lineY} x2={ML + lineW} y2={lineY} stroke="#374151" strokeWidth="2" />
              <polygon points={`${ML + lineW},${lineY} ${ML + lineW - 6},${lineY - 3} ${ML + lineW - 6},${lineY + 3}`} fill="#374151" />
              {Array.from({ length: Math.floor(totalUnits / data.step) + 1 }, (_, i) => {
                const v = data.min + i * data.step;
                const x = pos(v);
                return (
                  <g key={v}>
                    <line x1={x} y1={lineY} x2={x} y2={lineY + 10} stroke="#374151" strokeWidth="1.5" />
                    <text x={x} y={svgH - 4} textAnchor="middle" fontSize="9" fill="#374151" fontWeight="600">{v}</text>
                  </g>
                );
              })}
              {data.arrows.map((v, ai) => {
                const x = pos(v);
                const bY = boxYArr[ai]!;
                const boxX = Math.min(Math.max(x - boxW / 2, ML), ML + lineW - boxW);
                const ans = lineAnswers[ai] ?? "";
                const result = validated ? lineResults[ai] : null;
                const stroke = result === false ? "#F59E0B" : "#9CA3AF";
                const fill = result === false ? "#FEF3C7" : "#DBEAFE";
                return (
                  <g key={ai}>
                    <line x1={x} y1={bY + boxH} x2={x} y2={arrowTipY - 7} stroke="#374151" strokeWidth="1.5" strokeLinecap="butt" />
                    <polygon points={`${x},${arrowTipY} ${x - 4},${arrowTipY - 7} ${x + 4},${arrowTipY - 7}`} fill="#374151" />
                    <rect x={boxX} y={bY} width={boxW} height={boxH} rx="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
                    {validated ? (
                      <text x={boxX + boxW / 2} y={bY + boxH / 2 + 4} textAnchor="middle" fontSize="11" fill="#374151">
                        {result ? ans : String(v)}
                      </text>
                    ) : (
                      <foreignObject x={boxX + 2} y={bY + 2} width={boxW - 4} height={boxH - 4}>
                        <input type="text" inputMode="numeric" value={ans}
                          onChange={e => {
                            const val = e.target.value.replace(/[^0-9]/g, "");
                            setLineAnswers(prev => prev.map((c, ci) => ci === ai ? val : c));
                          }}
                          style={{ width: "100%", height: "100%", textAlign: "center", padding: "0", fontSize: "11px", background: "transparent", border: "none", outline: "none" }}
                        />
                      </foreignObject>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">
          Partie 2 — Trouvez les dizaines encadrantes
        </p>
        <div className="rounded-[var(--radius-md)] bg-orange-50 px-3 py-1.5 text-sm dark:bg-orange-950/20">
          <span className="italic text-[var(--color-text-secondary)]">Exemple : </span>
          <span className="font-medium text-[var(--color-text-primary)]">350 &lt; 354 &lt; 360</span>
        </div>
        <div className="space-y-2">
          {data.voisins.map((n, ni) => {
            const lo = Math.floor(n / 10) * 10;
            const hi = lo + 10;
            const a = voisinsAns[ni] ?? { lo: "", hi: "" };
            const loOk = validated ? parseInt(a.lo) === lo : null;
            const hiOk = validated ? parseInt(a.hi) === hi : null;
            const vCls = (ok: boolean | null) =>
              `w-16 rounded border px-1 py-1 text-sm tabular-nums text-center ${ok === null ? "" : ok ? "border-[var(--color-border-default)] text-[var(--color-text-primary)]" : CLS_WRONG}`;
            return (
              <div key={ni} className="flex items-center gap-2">
                {validated ? (
                  <span className={vCls(loOk)}>{loOk ? (a.lo || String(lo)) : String(lo)}</span>
                ) : (
                  <input type="text" inputMode="numeric" className={fieldCls} value={a.lo}
                    onChange={e => setVoisinsAns(prev => prev.map((q, qi) => qi === ni ? { ...q, lo: e.target.value.replace(/[^0-9]/g, "") } : q))} />
                )}
                <span className="text-sm text-[var(--color-text-secondary)]">&lt;</span>
                <span className="w-14 text-center text-sm font-bold tabular-nums text-[var(--color-text-primary)]">{n}</span>
                <span className="text-sm text-[var(--color-text-secondary)]">&lt;</span>
                {validated ? (
                  <span className={vCls(hiOk)}>{hiOk ? (a.hi || String(hi)) : String(hi)}</span>
                ) : (
                  <input type="text" inputMode="numeric" className={fieldCls} value={a.hi}
                    onChange={e => setVoisinsAns(prev => prev.map((q, qi) => qi === ni ? { ...q, hi: e.target.value.replace(/[^0-9]/g, "") } : q))} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Exercise 8 — Classer les nombres (2 pts) — like placement test Ex17 ──────

function A1Ex8({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);

    const genSeries = (seed: number) => {
      const r = makeRng(seed);
      const f2a = r.int(10, 97);
      const n1 = f2a * 100 + r.int(1, 98);
      let n2 = f2a * 100 + r.int(1, 98);
      while (n2 === n1) n2 = f2a * 100 + r.int(1, 98);
      const l2 = r.int(1, 98);
      let f2b = r.int(10, 97);
      while (f2b === f2a) f2b = r.int(10, 97);
      const n3 = f2b * 100 + l2;
      let f2c = r.int(10, 97);
      while (f2c === f2a || f2c === f2b) f2c = r.int(10, 97);
      const n4 = f2c * 100 + l2;
      return [n1, n2, n3, n4];
    };

    const nums1 = genSeries(exerciseKey);
    const nums2 = genSeries(exerciseKey + 100);
    const ints1 = seededShuffle(nums1, rng.int(1, 9999));
    const ints2 = seededShuffle(nums2, rng.int(1, 9999));
    return {
      ints1,
      sorted1: [...nums1].sort((a, b) => a - b),
      ints2,
      sorted2: [...nums2].sort((a, b) => b - a),
    };
  }, [exerciseKey]);

  const [sel1, setSel1] = useState<number[]>([]);
  const [sel2, setSel2] = useState<number[]>([]);

  const toggle = (setter: React.Dispatch<React.SetStateAction<number[]>>) => (n: number) => {
    setter(prev => prev.includes(n) ? prev.filter(x => x !== n) : [...prev, n]);
  };

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    if (sel1.length === data.sorted1.length && data.sorted1.every((v, i) => sel1[i] === v)) pts++;
    if (sel2.length === data.sorted2.length && data.sorted2.every((v, i) => sel2[i] === v)) pts++;
    onValidated(pts, 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Classez les nombres dans l&apos;ordre demandé.</p>
      <div className="space-y-2">
        <p className="text-sm text-[var(--color-text-secondary)]">Dans l&apos;ordre croissant (plus petit au plus grand)</p>
        <OrderingChips numbers={data.ints1} selected={sel1} onToggle={toggle(setSel1)}
          validated={validated} numberLabel="1." />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-[var(--color-text-secondary)]">Dans l&apos;ordre décroissant (plus grand au plus petit)</p>
        <OrderingChips numbers={data.ints2} selected={sel2} onToggle={toggle(setSel2)}
          validated={validated} desc numberLabel="2." />
      </div>
    </div>
  );
}

export const A1_EXERCISES: RevisionExerciseMeta[] = [
  { id: 1, label: "Écrire les nombres", maxPoints: 3, component: A1Ex1 },
  { id: 2, label: "Décomposition avec blocs", maxPoints: 3, component: A1Ex2 },
  { id: 3, label: "Décomposer en M+C+D+U", maxPoints: 4, component: A1Ex3 },
  { id: 4, label: "Comparaison à 5 chiffres", maxPoints: 3, component: A1Ex4 },
  { id: 5, label: "Comparer et ordonner", maxPoints: 3, component: A1Ex5 },
  { id: 6, label: "Nombres dans les intervalles", maxPoints: 3, component: A1Ex6 },
  { id: 7, label: "Droite numérique et voisins", maxPoints: 5, component: A1Ex7 },
  { id: 8, label: "Classer les nombres", maxPoints: 2, component: A1Ex8 },
];
