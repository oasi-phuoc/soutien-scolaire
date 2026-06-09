"use client";

import { useEffect, useMemo, useState } from "react";
import { CorrectionInput, PoolExercise, makeRng } from "./RevisionCommon";
import type { RevisionExerciseMeta, RevisionExerciseProps, PoolQuestion } from "./RevisionCommon";

// Exercise 1 — Lire et écrire les décimaux (2 pts)
function A5Ex1({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return [
      {
        promptFr: `Écrivez en chiffres : ${rng.int(1, 9)} unités et ${rng.int(1, 9)} dixièmes`,
        result: (() => {
          const rng2 = makeRng(exerciseKey);
          const u = rng2.int(1, 9);
          const d = rng2.int(1, 9);
          return `${u},${d}`;
        })(),
      },
      {
        promptFr: `Quel est le chiffre des dixièmes dans ${(() => {
          const rng2 = makeRng(exerciseKey + 7);
          const integer = rng2.int(1, 9);
          const tenth = rng2.int(1, 9);
          const hundredth = rng2.int(1, 9);
          return `${integer},${tenth}${hundredth}`;
        })()} ?`,
        result: (() => {
          const rng2 = makeRng(exerciseKey + 7);
          rng2.int(1, 9);
          return String(rng2.int(1, 9));
        })(),
      },
    ];
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      const ans = (answers[i] ?? "").trim().replace(".", ",");
      if (ans === q.result) pts++;
    });
    onValidated(pts, 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      {data.map((q, i) => (
        <div key={i} className="space-y-2">
          <p className="text-sm text-[var(--color-text-primary)]">{q.promptFr}</p>
          <CorrectionInput
            value={answers[i] ?? ""}
            onChange={v =>
              setAnswers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={q.result}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 2 — Suites de décimaux (3 pts) — from A5.2 fixed exercises
const A5_2_POOL: PoolQuestion[] = [
  {
    id: "a5-2-e1",
    promptFr: "Classez du plus petit au plus grand : 2,5 ; 2,15 ; 2,51",
    acceptable: ["2,15 ; 2,5 ; 2,51", "2.15 ; 2.5 ; 2.51"],
  },
  {
    id: "a5-2-e2",
    promptFr: "Donnez le terme manquant : 1,2 ; 1,5 ; ___ ; 2,1",
    acceptable: ["1,8", "1.8"],
  },
  {
    id: "a5-2-e3",
    promptFr: "Classez du plus grand au plus petit : 0,3 ; 0,13 ; 0,31",
    acceptable: ["0,31 ; 0,3 ; 0,13", "0.31 ; 0.3 ; 0.13"],
  },
];

function A5Ex2(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A5_2_POOL} count={3} />;
}

// Exercise 3 — Arrondir les décimaux (3 pts) — from A5.3 exercises
const A5_3_POOL: PoolQuestion[] = [
  { id: "a5-3-e1", promptFr: "Arrondissez 3,47 au dixième.", acceptable: ["3,5", "3.5"] },
  { id: "a5-3-e2", promptFr: "Arrondissez 3,42 au dixième.", acceptable: ["3,4", "3.4"] },
  { id: "a5-3-e3", promptFr: "Arrondissez 5,678 au centième.", acceptable: ["5,68", "5.68"] },
  { id: "a5-3-e4", promptFr: "Arrondissez 12,351 à l'unité.", acceptable: ["12"] },
  { id: "a5-3-e5", promptFr: "Arrondissez 9,95 au dixième.", acceptable: ["10,0", "10"] },
];

function A5Ex3(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A5_3_POOL} count={3} />;
}

// Exercise 4 — Addition et soustraction de décimaux (2 pts)
function A5Ex4({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    const round1 = (n: number) => Math.round(n * 10) / 10;
    const a1 = round1(rng.int(10, 99) + rng.int(1, 9) / 10);
    const b1 = round1(rng.int(10, 99) + rng.int(1, 9) / 10);
    const a2 = round1(rng.int(10, 99) + rng.int(1, 9) / 10);
    const b2 = round1(rng.int(1, Math.floor(a2 * 10) - 1) / 10);
    const r1 = round1(a1 + b1);
    const r2 = round1(a2 - b2);
    const fmt = (n: number) => n.toFixed(1).replace(".", ",");
    return [
      { label: `${fmt(a1)} + ${fmt(b1)} =`, result: fmt(r1), acceptable: [fmt(r1), String(r1).replace(".", ",")] },
      { label: `${fmt(a2)} − ${fmt(b2)} =`, result: fmt(r2), acceptable: [fmt(r2), String(r2).replace(".", ",")] },
    ];
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      const ans = (answers[i] ?? "").trim().replace(".", ",");
      if (q.acceptable.some(a => a.replace(".", ",") === ans)) pts++;
    });
    onValidated(pts, 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les calculs.</p>
      {data.map((q, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
            {q.label}
          </span>
          <CorrectionInput
            value={answers[i] ?? ""}
            onChange={v =>
              setAnswers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={q.result}
            acceptable={q.acceptable}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 5 — Multiplication de décimaux (2 pts)
function A5Ex5({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    const round1 = (n: number) => Math.round(n * 10) / 10;
    const a1 = rng.int(2, 9);
    const b1 = round1(rng.int(11, 99) / 10);
    const a2 = rng.int(2, 9);
    const b2 = round1(rng.int(11, 99) / 10);
    const r1 = Math.round(a1 * b1 * 10) / 10;
    const r2 = Math.round(a2 * b2 * 10) / 10;
    const fmt = (n: number) => n.toFixed(1).replace(".", ",");
    return [
      { label: `${a1} × ${fmt(b1)} =`, result: fmt(r1), acceptable: [fmt(r1)] },
      { label: `${a2} × ${fmt(b2)} =`, result: fmt(r2), acceptable: [fmt(r2)] },
    ];
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      const ans = (answers[i] ?? "").trim().replace(".", ",");
      if (q.acceptable.some(a => a.replace(".", ",") === ans)) pts++;
    });
    onValidated(pts, 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les multiplications.</p>
      {data.map((q, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
            {q.label}
          </span>
          <CorrectionInput
            value={answers[i] ?? ""}
            onChange={v =>
              setAnswers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={q.result}
            acceptable={q.acceptable}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 6 — Division de décimaux (2 pts)
function A5Ex6({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    const fmt = (n: number) => {
      if (Number.isInteger(n)) return String(n);
      return n.toFixed(1).replace(".", ",");
    };
    const divisor1 = rng.int(2, 9);
    const quotient1 = rng.int(2, 9);
    const dividend1 = divisor1 * quotient1;
    const divisor2 = rng.int(2, 5);
    const quotient2frac = rng.int(11, 49);
    const dividend2 = divisor2 * (quotient2frac / 10);
    const quotient2 = quotient2frac / 10;
    return [
      { label: `${dividend1} ÷ ${divisor1} =`, result: String(quotient1), acceptable: [String(quotient1)] },
      { label: `${fmt(dividend2)} ÷ ${divisor2} =`, result: fmt(quotient2), acceptable: [fmt(quotient2)] },
    ];
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      const ans = (answers[i] ?? "").trim().replace(".", ",");
      if (q.acceptable.some(a => a.replace(".", ",") === ans)) pts++;
    });
    onValidated(pts, 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les divisions.</p>
      {data.map((q, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
            {q.label}
          </span>
          <CorrectionInput
            value={answers[i] ?? ""}
            onChange={v =>
              setAnswers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={q.result}
            acceptable={q.acceptable}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

export const A5_EXERCISES: RevisionExerciseMeta[] = [
  { id: 1, label: "Lire et écrire les décimaux", maxPoints: 2, component: A5Ex1 },
  { id: 2, label: "Suites de décimaux", maxPoints: 3, component: A5Ex2 },
  { id: 3, label: "Arrondir les décimaux", maxPoints: 3, component: A5Ex3 },
  { id: 4, label: "Addition et soustraction", maxPoints: 2, component: A5Ex4 },
  { id: 5, label: "Multiplication de décimaux", maxPoints: 2, component: A5Ex5 },
  { id: 6, label: "Division de décimaux", maxPoints: 2, component: A5Ex6 },
];
