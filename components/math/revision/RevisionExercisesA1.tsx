"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CorrectionInput, makeRng } from "./RevisionCommon";
import type { RevisionExerciseMeta, RevisionExerciseProps } from "./RevisionCommon";

// Exercise 1 — Valeur positionnelle (3 pts)
function A1Ex1({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    const positions = ["unités", "dizaines", "centaines", "milliers"] as const;
    return Array.from({ length: 3 }, () => {
      const n = rng.int(1000, 9999);
      const digits = [
        n % 10,
        Math.floor(n / 10) % 10,
        Math.floor(n / 100) % 10,
        Math.floor(n / 1000),
      ];
      const posIdx = rng.int(0, 3);
      return { n, pos: positions[posIdx]!, digit: String(digits[posIdx]!) };
    });
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      if ((answers[i] ?? "").trim() === q.digit) pts++;
    });
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">
        Quel est le chiffre des ___ dans chaque nombre ?
      </p>
      {data.map((q, i) => (
        <div key={i} className="space-y-1.5">
          <p className="text-sm text-[var(--color-text-primary)]">
            Chiffre des <strong>{q.pos}</strong> de {q.n.toLocaleString("fr-FR")} ?
          </p>
          <CorrectionInput
            value={answers[i] ?? ""}
            onChange={v =>
              setAnswers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={q.digit}
            validated={validated}
            width="w-16"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 2 — Comparer les nombres (4 pts)
type CompOp = "<" | "=" | ">";

function A1Ex2({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    const pairs: { a: number; b: number; correct: CompOp }[] = [];
    const a1 = rng.int(100, 999);
    pairs.push({ a: a1, b: a1, correct: "=" });
    const a2 = rng.int(100, 899);
    pairs.push({ a: a2, b: a2 + rng.int(1, 99), correct: "<" });
    const a3 = rng.int(200, 9999);
    pairs.push({ a: a3, b: a3 - rng.int(1, 99), correct: ">" });
    const a4 = rng.int(1000, 9999);
    const b4 = rng.int(1000, 9999);
    const op4: CompOp = a4 < b4 ? "<" : a4 > b4 ? ">" : "=";
    pairs.push({ a: a4, b: b4, correct: op4 });
    for (let i = pairs.length - 1; i > 0; i--) {
      const j = Math.floor(rng.next() * (i + 1));
      [pairs[i], pairs[j]] = [pairs[j]!, pairs[i]!];
    }
    return pairs;
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", "", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((pair, i) => {
      if ((answers[i] ?? "").trim() === pair.correct) pts++;
    });
    onValidated(pts, 4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez avec &lt;, = ou &gt;.</p>
      {data.map((pair, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-16 text-right font-mono text-sm font-semibold text-[var(--color-text-primary)]">
            {pair.a.toLocaleString("fr-FR")}
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
            correct={pair.correct}
            validated={validated}
            width="w-12"
          />
          <span className="w-16 font-mono text-sm font-semibold text-[var(--color-text-primary)]">
            {pair.b.toLocaleString("fr-FR")}
          </span>
        </div>
      ))}
    </div>
  );
}

// Exercise 3 — Encadrement (3 pts)
function A1Ex3({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 3 }, () => {
      const roundTo = rng.next() < 0.5 ? 10 : 100;
      const n = rng.int(roundTo + 1, roundTo * 9 - 1);
      const lower = Math.floor(n / roundTo) * roundTo;
      const upper = lower + roundTo;
      return { n, lower, upper };
    });
  }, [exerciseKey]);

  const [lowers, setLowers] = useState(["", "", ""]);
  const [uppers, setUppers] = useState(["", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((item, i) => {
      if (
        (lowers[i] ?? "").trim() === String(item.lower) &&
        (uppers[i] ?? "").trim() === String(item.upper)
      )
        pts++;
    });
    onValidated(pts, 3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-5">
      <p className="text-sm text-[var(--color-text-secondary)]">
        Encadrez chaque nombre à la dizaine ou centaine près.
      </p>
      {data.map((item, i) => (
        <div key={i} className="flex flex-wrap items-center gap-2">
          <CorrectionInput
            value={lowers[i] ?? ""}
            onChange={v =>
              setLowers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={String(item.lower)}
            validated={validated}
            width="w-20"
          />
          <span className="text-sm font-semibold text-[var(--color-text-secondary)]">&lt;</span>
          <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
            {item.n}
          </span>
          <span className="text-sm font-semibold text-[var(--color-text-secondary)]">&lt;</span>
          <CorrectionInput
            value={uppers[i] ?? ""}
            onChange={v =>
              setUppers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={String(item.upper)}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 4 — Pair ou impair (4 pts)
function A1Ex4({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 4 }, () => {
      const n = rng.int(11, 999);
      return { n, answer: n % 2 === 0 ? "pair" : "impair" };
    });
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", "", "", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((item, i) => {
      const ans = (answers[i] ?? "").trim().toLowerCase();
      if (ans === item.answer) pts++;
    });
    onValidated(pts, 4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">
        Indiquez si chaque nombre est <strong>pair</strong> ou <strong>impair</strong>.
      </p>
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="w-14 text-right font-mono text-sm font-bold text-[var(--color-text-primary)]">
            {item.n}
          </span>
          <span className="text-sm text-[var(--color-text-secondary)]">→</span>
          <CorrectionInput
            value={answers[i] ?? ""}
            onChange={v =>
              setAnswers(prev => {
                const n = [...prev];
                n[i] = v;
                return n;
              })
            }
            correct={item.answer}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 5 — Suite numérique (2 pts)
function A1Ex5({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    const start = rng.int(5, 200);
    const step = rng.int(2, 20);
    const terms = Array.from({ length: 6 }, (_, k) => start + k * step);
    const gapPositions = [1, 4];
    return { terms, gapPositions };
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.gapPositions.forEach((pos, i) => {
      if ((answers[i] ?? "").trim() === String(data.terms[pos]!)) pts++;
    });
    onValidated(pts, 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateTrigger]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-[var(--color-text-secondary)]">Complétez la suite numérique.</p>
      <div className="flex flex-wrap items-center gap-2">
        {data.terms.map((term, i) => {
          const gapIdx = data.gapPositions.indexOf(i);
          const isGap = gapIdx >= 0;
          return (
            <React.Fragment key={i}>
              {isGap ? (
                <CorrectionInput
                  value={answers[gapIdx] ?? ""}
                  onChange={v =>
                    setAnswers(prev => {
                      const n = [...prev];
                      n[gapIdx] = v;
                      return n;
                    })
                  }
                  correct={String(term)}
                  validated={validated}
                  width="w-16"
                />
              ) : (
                <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
                  {term}
                </span>
              )}
              {i < data.terms.length - 1 && (
                <span className="text-sm text-[var(--color-text-secondary)]">;</span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export const A1_EXERCISES: RevisionExerciseMeta[] = [
  { id: 1, label: "Valeur positionnelle", maxPoints: 3, component: A1Ex1 },
  { id: 2, label: "Comparer les nombres", maxPoints: 4, component: A1Ex2 },
  { id: 3, label: "Encadrement", maxPoints: 3, component: A1Ex3 },
  { id: 4, label: "Pair ou impair", maxPoints: 4, component: A1Ex4 },
  { id: 5, label: "Suite numérique", maxPoints: 2, component: A1Ex5 },
];
