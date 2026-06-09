"use client";

import { useEffect, useMemo, useState } from "react";
import { CorrectionInput, PoolExercise, makeRng } from "./RevisionCommon";
import type { RevisionExerciseMeta, RevisionExerciseProps, PoolQuestion } from "./RevisionCommon";

// Exercise 1 — Addition (3 pts)
function A2Ex1({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 3 }, () => {
      const a = rng.int(10, 999);
      const b = rng.int(10, 999);
      return { a, b, result: a + b };
    });
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      if ((answers[i] ?? "").trim() === String(q.result)) pts++;
    });
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les additions.</p>
      {data.map((q, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
            {q.a} + {q.b} =
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
            correct={String(q.result)}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 2 — Soustraction (3 pts)
function A2Ex2({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 3 }, () => {
      const b = rng.int(10, 499);
      const a = b + rng.int(10, 499);
      return { a, b, result: a - b };
    });
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      if ((answers[i] ?? "").trim() === String(q.result)) pts++;
    });
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">Effectuez les soustractions.</p>
      {data.map((q, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
            {q.a} − {q.b} =
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
            correct={String(q.result)}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 3 — Estimation et arrondi from A2.3 pool (3 pts)
const A2_3_POOL: PoolQuestion[] = [
  { id: "a2-3-ep01", promptFr: "Arrondissez 347 à la centaine la plus proche.", acceptable: ["300"] },
  { id: "a2-3-ep02", promptFr: "Arrondissez 4 682 à la centaine la plus proche.", acceptable: ["4700"] },
  { id: "a2-3-ep03", promptFr: "Arrondissez 256 à la dizaine la plus proche.", acceptable: ["260"] },
  { id: "a2-3-ep04", promptFr: "Arrondissez 8 945 à la dizaine la plus proche.", acceptable: ["8950"] },
  { id: "a2-3-ep05", promptFr: "Arrondissez 3 149 au millier le plus proche.", acceptable: ["3000"] },
  { id: "a2-3-ep06", promptFr: "Arrondissez 7 500 au millier le plus proche.", acceptable: ["8000"] },
  { id: "a2-3-ep07", promptFr: "Estimez 198 + 305 en arrondissant à la centaine. Quel est le résultat estimé ?", acceptable: ["500"] },
  { id: "a2-3-ep08", promptFr: "Estimez 48 × 51 en arrondissant à la dizaine (50 × 50). Quel est le résultat estimé ?", acceptable: ["2500"] },
  { id: "a2-3-ep09", promptFr: "Arrondissez 6 754 à la centaine la plus proche.", acceptable: ["6800"] },
  { id: "a2-3-ep10", promptFr: "Arrondissez 1 450 au millier le plus proche.", acceptable: ["1000"] },
  { id: "a2-3-ep11", promptFr: "Arrondissez 9 960 à la centaine la plus proche.", acceptable: ["10000"] },
  { id: "a2-3-ep12", promptFr: "Estimez 397 + 612 en arrondissant (400 + 600). Quel est le résultat estimé ?", acceptable: ["1000"] },
];

function A2Ex3(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A2_3_POOL} count={3} />;
}

export const A2_EXERCISES: RevisionExerciseMeta[] = [
  { id: 1, label: "Addition", maxPoints: 3, component: A2Ex1 },
  { id: 2, label: "Soustraction", maxPoints: 3, component: A2Ex2 },
  { id: 3, label: "Estimation et arrondi", maxPoints: 3, component: A2Ex3 },
];
