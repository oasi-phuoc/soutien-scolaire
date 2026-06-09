"use client";

import { useEffect, useMemo, useState } from "react";
import { CorrectionInput, PoolExercise, makeRng } from "./RevisionCommon";
import type { RevisionExerciseMeta, RevisionExerciseProps, PoolQuestion } from "./RevisionCommon";

// Exercise 1 — Tables de multiplication (3 pts) — from A3.1 pool
const A3_1_POOL: PoolQuestion[] = [
  { id: "a3-1-ep01", promptFr: "7 × 8 = ?", acceptable: ["56"] },
  { id: "a3-1-ep02", promptFr: "9 × 6 = ?", acceptable: ["54"] },
  { id: "a3-1-ep03", promptFr: "12 × 11 = ?", acceptable: ["132"] },
  { id: "a3-1-ep04", promptFr: "6 × 9 = ?", acceptable: ["54"] },
  { id: "a3-1-ep05", promptFr: "8 × 8 = ?", acceptable: ["64"] },
  { id: "a3-1-ep06", promptFr: "7 × 7 = ?", acceptable: ["49"] },
  { id: "a3-1-ep07", promptFr: "12 × 12 = ?", acceptable: ["144"] },
  { id: "a3-1-ep08", promptFr: "9 × 9 = ?", acceptable: ["81"] },
  { id: "a3-1-ep09", promptFr: "11 × 8 = ?", acceptable: ["88"] },
  { id: "a3-1-ep10", promptFr: "6 × 12 = ?", acceptable: ["72"] },
  { id: "a3-1-ep11", promptFr: "7 × 9 = ?", acceptable: ["63"] },
  { id: "a3-1-ep12", promptFr: "4 × 11 = ?", acceptable: ["44"] },
  { id: "a3-1-ep13", promptFr: "8 × 12 = ?", acceptable: ["96"] },
  { id: "a3-1-ep14", promptFr: "5 × 7 = ?", acceptable: ["35"] },
  { id: "a3-1-ep15", promptFr: "3 × 9 = ?", acceptable: ["27"] },
];

function A3Ex1(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A3_1_POOL} count={3} />;
}

// Exercise 2 — Multiplication en colonnes (3 pts) — from A3.2 pool
const A3_2_POOL: PoolQuestion[] = [
  { id: "a3-2-ep01", promptFr: "Calculez 24 × 3.", acceptable: ["72"] },
  { id: "a3-2-ep02", promptFr: "Calculez 45 × 6.", acceptable: ["270"] },
  { id: "a3-2-ep03", promptFr: "Calculez 123 × 4.", acceptable: ["492"] },
  { id: "a3-2-ep04", promptFr: "Calculez 36 × 7.", acceptable: ["252"] },
  { id: "a3-2-ep05", promptFr: "Calculez 52 × 8.", acceptable: ["416"] },
  { id: "a3-2-ep06", promptFr: "Calculez 67 × 9.", acceptable: ["603"] },
  { id: "a3-2-ep07", promptFr: "Calculez 21 × 15.", acceptable: ["315"] },
  { id: "a3-2-ep08", promptFr: "Calculez 34 × 12.", acceptable: ["408"] },
  { id: "a3-2-ep09", promptFr: "Calculez 48 × 11.", acceptable: ["528"] },
  { id: "a3-2-ep10", promptFr: "Calculez 75 × 4.", acceptable: ["300"] },
];

function A3Ex2(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A3_2_POOL} count={3} />;
}

// Exercise 3 — Division (3 pts) — from A3.3 pool
const A3_3_POOL: PoolQuestion[] = [
  { id: "a3-3-ep01", promptFr: "56 ÷ 7 = ?", acceptable: ["8"] },
  { id: "a3-3-ep02", promptFr: "54 ÷ 9 = ?", acceptable: ["6"] },
  { id: "a3-3-ep03", promptFr: "72 ÷ 8 = ?", acceptable: ["9"] },
  { id: "a3-3-ep04", promptFr: "48 ÷ 6 = ?", acceptable: ["8"] },
  { id: "a3-3-ep05", promptFr: "36 ÷ 4 = ?", acceptable: ["9"] },
  { id: "a3-3-ep06", promptFr: "63 ÷ 7 = ?", acceptable: ["9"] },
  { id: "a3-3-ep07", promptFr: "44 ÷ 11 = ?", acceptable: ["4"] },
  { id: "a3-3-ep08", promptFr: "84 ÷ 12 = ?", acceptable: ["7"] },
  { id: "a3-3-ep09", promptFr: "35 ÷ 5 = ?", acceptable: ["7"] },
  { id: "a3-3-ep10", promptFr: "66 ÷ 6 = ?", acceptable: ["11"] },
  { id: "a3-3-ep11", promptFr: "108 ÷ 9 = ?", acceptable: ["12"] },
  { id: "a3-3-ep12", promptFr: "132 ÷ 11 = ?", acceptable: ["12"] },
];

function A3Ex3(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A3_3_POOL} count={3} />;
}

// Exercise 4 — Division en colonnes (2 pts) — generated
function A3Ex4({ exerciseKey, validated, onValidated, validateTrigger }: RevisionExerciseProps) {
  const data = useMemo(() => {
    const rng = makeRng(exerciseKey);
    return Array.from({ length: 2 }, () => {
      const divisor = rng.int(2, 12);
      const quotient = rng.int(10, 99);
      const dividend = divisor * quotient;
      return { dividend, divisor, quotient };
    });
  }, [exerciseKey]);

  const [answers, setAnswers] = useState(["", ""]);

  useEffect(() => {
    if (validateTrigger === 0) return;
    let pts = 0;
    data.forEach((q, i) => {
      if ((answers[i] ?? "").trim() === String(q.quotient)) pts++;
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
            {q.dividend} ÷ {q.divisor} =
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
            correct={String(q.quotient)}
            validated={validated}
            width="w-20"
          />
        </div>
      ))}
    </div>
  );
}

// Exercise 5 — Les multiples (3 pts) — from A3.5 pool (easier questions)
const A3_5_POOL: PoolQuestion[] = [
  { id: "a3-5-ep01", promptFr: "6 est-il un multiple de 3 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a3-5-ep02", promptFr: "10 est-il un multiple de 3 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a3-5-ep03", promptFr: "18 = 3 × ___ : complète le facteur manquant.", acceptable: ["6"] },
  { id: "a3-5-ep04", promptFr: "42 = 7 × ___ : complète le facteur manquant.", acceptable: ["6"] },
  { id: "a3-5-ep05", promptFr: "4 est-il un diviseur de 20 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a3-5-ep06", promptFr: "7 est-il un diviseur de 35 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a3-5-ep07", promptFr: "5 divise-t-il 42 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a3-5-ep09", promptFr: "3 ; 6 ; 9 ; ___ : quel est le terme suivant ?", acceptable: ["12"] },
  { id: "a3-5-ep11", promptFr: "7 ; 14 ; 21 ; ___ : quel est le terme suivant ?", acceptable: ["28"] },
  { id: "a3-5-ep12", promptFr: "5 ; 10 ; ___ ; 20 : quel est le terme manquant ?", acceptable: ["15"] },
  { id: "a3-5-ep13", promptFr: "Quel est le prochain multiple de 4 après 28 ?", acceptable: ["32"] },
  { id: "a3-5-ep22", promptFr: "16 est-il un multiple de 4 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a3-5-ep24", promptFr: "45 est-il un multiple de 5 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a3-5-ep25", promptFr: "12 est-il un multiple de 2 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a3-5-ep26", promptFr: "21 est-il un multiple de 5 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
  { id: "a3-5-ep33", promptFr: "45 est-il divisible par 3 ? (somme des chiffres : 4+5=9) (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a3-5-ep34", promptFr: "120 est-il divisible par 10 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a3-5-ep35", promptFr: "87 est-il divisible par 2 ? (oui/non)", acceptable: ["non", "Non", "NON"] },
];

function A3Ex5(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A3_5_POOL} count={3} />;
}

// Exercise 6 — PGDC et PPMC (3 pts)
const A3_6_POOL: PoolQuestion[] = [
  { id: "g1", promptFr: "PGDC(12, 18) = ?", acceptable: ["6"] },
  { id: "g2", promptFr: "PGDC(8, 12) = ?", acceptable: ["4"] },
  { id: "g3", promptFr: "PGDC(6, 9) = ?", acceptable: ["3"] },
  { id: "g4", promptFr: "PGDC(15, 25) = ?", acceptable: ["5"] },
  { id: "g5", promptFr: "PGDC(10, 15) = ?", acceptable: ["5"] },
  { id: "g6", promptFr: "PPMC(4, 6) = ?", acceptable: ["12"] },
  { id: "g7", promptFr: "PPMC(3, 5) = ?", acceptable: ["15"] },
  { id: "g8", promptFr: "PPMC(2, 7) = ?", acceptable: ["14"] },
  { id: "g9", promptFr: "PPMC(4, 10) = ?", acceptable: ["20"] },
  { id: "g10", promptFr: "PPMC(6, 9) = ?", acceptable: ["18"] },
  { id: "g11", promptFr: "Le plus grand diviseur commun de 12 et 18 est ?", acceptable: ["6"] },
  { id: "g12", promptFr: "Le plus petit multiple commun de 4 et 6 est ?", acceptable: ["12"] },
];

function A3Ex6(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A3_6_POOL} count={3} />;
}

export const A3_EXERCISES: RevisionExerciseMeta[] = [
  { id: 1, label: "Tables de multiplication", maxPoints: 3, component: A3Ex1 },
  { id: 2, label: "Multiplication en colonnes", maxPoints: 3, component: A3Ex2 },
  { id: 3, label: "Division", maxPoints: 3, component: A3Ex3 },
  { id: 4, label: "Division en colonnes", maxPoints: 2, component: A3Ex4 },
  { id: 5, label: "Les multiples", maxPoints: 3, component: A3Ex5 },
  { id: 6, label: "PGDC et PPMC", maxPoints: 3, component: A3Ex6 },
];
