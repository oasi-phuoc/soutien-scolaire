"use client";

import { PoolExercise } from "./RevisionCommon";
import type { RevisionExerciseMeta, RevisionExerciseProps, PoolQuestion } from "./RevisionCommon";

// Exercise 1 — Notion et représentation (2 pts)
const A4_1_POOL: PoolQuestion[] = [
  { id: "a4-1-ep01", promptFr: "Quel est le numérateur de la fraction 3/7 ?", acceptable: ["3"] },
  { id: "a4-1-ep02", promptFr: "Quel est le dénominateur de la fraction 5/8 ?", acceptable: ["8"] },
  { id: "a4-1-ep03", promptFr: "Quel est le numérateur de la fraction 2/5 ?", acceptable: ["2"] },
  { id: "a4-1-ep04", promptFr: "Quel est le dénominateur de la fraction 9/11 ?", acceptable: ["11"] },
  { id: "a4-1-ep05", promptFr: "Une pizza coupée en 8 parts, vous en mangez 3. Quelle fraction avez-vous mangée ? (ex: 3/8)", acceptable: ["3/8"] },
  { id: "a4-1-ep06", promptFr: "Un gâteau partagé en 4 parts égales. Chaque part représente quelle fraction ? (ex: 1/4)", acceptable: ["1/4"] },
  { id: "a4-1-ep07", promptFr: "3/3 est-il égal à 1 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a4-1-ep08", promptFr: "Quel entier est égal à 6/1 ?", acceptable: ["6"] },
  { id: "a4-1-ep10", promptFr: "Quel est le numérateur de la fraction 7/10 ?", acceptable: ["7"] },
];

function A4Ex1(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A4_1_POOL} count={2} />;
}

// Exercise 2 — Fractions équivalentes (2 pts)
const A4_2_POOL: PoolQuestion[] = [
  { id: "a4-2-ep01", promptFr: "Simplifiez 4/8 en fraction irréductible. (ex: 1/2)", acceptable: ["1/2"] },
  { id: "a4-2-ep02", promptFr: "Simplifiez 6/9 en fraction irréductible. (ex: 2/3)", acceptable: ["2/3"] },
  { id: "a4-2-ep03", promptFr: "Simplifiez 10/15 en fraction irréductible. (ex: 2/3)", acceptable: ["2/3"] },
  { id: "a4-2-ep04", promptFr: "Simplifiez 12/16 en fraction irréductible. (ex: 3/4)", acceptable: ["3/4"] },
  { id: "a4-2-ep05", promptFr: "2/3 et 4/6 sont-elles des fractions équivalentes ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a4-2-ep06", promptFr: "Complétez : 1/2 = ?/6. Quelle est la valeur du numérateur manquant ?", acceptable: ["3"] },
  { id: "a4-2-ep07", promptFr: "Complétez : 3/4 = ?/12. Quelle est la valeur du numérateur manquant ?", acceptable: ["9"] },
  { id: "a4-2-ep08", promptFr: "Simplifiez 8/12 en fraction irréductible. (ex: 2/3)", acceptable: ["2/3"] },
  { id: "a4-2-ep09", promptFr: "Simplifiez 15/25 en fraction irréductible. (ex: 3/5)", acceptable: ["3/5"] },
  { id: "a4-2-ep10", promptFr: "Complétez : 2/5 = ?/10. Quelle est la valeur du numérateur manquant ?", acceptable: ["4"] },
];

function A4Ex2(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A4_2_POOL} count={2} />;
}

// Exercise 3 — Comparaison de fractions (2 pts)
const A4_3_POOL: PoolQuestion[] = [
  { id: "a4-3-ep01", promptFr: "Comparez 3/5 et 4/5. Laquelle est plus grande ? (3/5 ou 4/5)", acceptable: ["4/5"] },
  { id: "a4-3-ep02", promptFr: "Comparez 1/4 et 1/3. Laquelle est plus grande ? (1/4 ou 1/3)", acceptable: ["1/3"] },
  { id: "a4-3-ep03", promptFr: "1/2 > 1/3 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a4-3-ep04", promptFr: "Comparez 2/3 et 3/4 (produit croisé : 2×4=8, 3×3=9). Laquelle est plus grande ? (2/3 ou 3/4)", acceptable: ["3/4"] },
  { id: "a4-3-ep05", promptFr: "5/8 et 3/8 : quelle est la plus petite ?", acceptable: ["3/8"] },
  { id: "a4-3-ep08", promptFr: "3/4 > 2/4 ? (oui/non)", acceptable: ["oui", "Oui", "OUI"] },
  { id: "a4-3-ep09", promptFr: "1/6 et 1/5 : laquelle est la plus grande ?", acceptable: ["1/5"] },
  { id: "a4-3-ep10", promptFr: "5/6 et 7/8 (produit croisé 5×8=40, 7×6=42). Laquelle est plus grande ?", acceptable: ["7/8"] },
];

function A4Ex3(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A4_3_POOL} count={2} />;
}

// Exercise 4 — Addition et soustraction de fractions (2 pts)
const A4_4_POOL: PoolQuestion[] = [
  { id: "a4-4-ep01", promptFr: "Calculez 1/5 + 2/5.", acceptable: ["3/5"] },
  { id: "a4-4-ep02", promptFr: "Calculez 3/8 + 2/8.", acceptable: ["5/8"] },
  { id: "a4-4-ep03", promptFr: "Calculez 5/7 − 2/7.", acceptable: ["3/7"] },
  { id: "a4-4-ep04", promptFr: "Calculez 1/2 + 1/3. PPCM(2,3)=6 : 3/6 + 2/6 = ?", acceptable: ["5/6"] },
  { id: "a4-4-ep05", promptFr: "Calculez 3/4 − 1/2. PPCM(4,2)=4 : 3/4 − 2/4 = ?", acceptable: ["1/4"] },
  { id: "a4-4-ep06", promptFr: "Calculez 2/3 + 1/6. PPCM(3,6)=6 : 4/6 + 1/6 = ?", acceptable: ["5/6"] },
  { id: "a4-4-ep07", promptFr: "Calculez 7/8 − 3/8. Simplifiez si possible.", acceptable: ["4/8", "1/2"] },
  { id: "a4-4-ep08", promptFr: "Calculez 1/4 + 1/4 + 1/4.", acceptable: ["3/4"] },
  { id: "a4-4-ep09", promptFr: "Calculez 5/6 − 1/3. PPCM(6,3)=6 : 5/6 − 2/6 = ?", acceptable: ["3/6", "1/2"] },
  { id: "a4-4-ep10", promptFr: "Calculez 1/2 + 1/4. PPCM(2,4)=4 : 2/4 + 1/4 = ?", acceptable: ["3/4"] },
];

function A4Ex4(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A4_4_POOL} count={2} />;
}

// Exercise 5 — Multiplication de fractions (2 pts)
const A4_5_POOL: PoolQuestion[] = [
  { id: "a4-5-ep01", promptFr: "Calculez 1/2 × 3/4.", acceptable: ["3/8"] },
  { id: "a4-5-ep02", promptFr: "Calculez 2/3 × 3/5. Simplifiez.", acceptable: ["6/15", "2/5"] },
  { id: "a4-5-ep03", promptFr: "Calculez 4/5 × 5/8. Simplifiez.", acceptable: ["20/40", "1/2"] },
  { id: "a4-5-ep04", promptFr: "Calculez 3/4 × 8/9. Simplifiez.", acceptable: ["24/36", "2/3"] },
  { id: "a4-5-ep05", promptFr: "Calculez 1/3 × 1/3.", acceptable: ["1/9"] },
  { id: "a4-5-ep08", promptFr: "Calculez 2/5 × 5/4. Simplifiez.", acceptable: ["10/20", "1/2"] },
  { id: "a4-5-ep09", promptFr: "Calculez 7/8 × 4/7. Simplifiez.", acceptable: ["28/56", "1/2"] },
];

function A4Ex5(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A4_5_POOL} count={2} />;
}

// Exercise 6 — Division de fractions (2 pts)
const A4_6_POOL: PoolQuestion[] = [
  { id: "a4-6-ep01", promptFr: "Calculez 1/2 ÷ 1/4. (1/2 × 4/1 = ?)", acceptable: ["2", "2/1", "4/2"] },
  { id: "a4-6-ep02", promptFr: "Calculez 3/4 ÷ 3/8. Simplifiez. (3/4 × 8/3 = ?)", acceptable: ["2", "2/1", "24/12"] },
  { id: "a4-6-ep04", promptFr: "Calculez 5/6 ÷ 5/12. Simplifiez.", acceptable: ["2", "2/1", "60/30"] },
  { id: "a4-6-ep05", promptFr: "Calculez 1/3 ÷ 1/6.", acceptable: ["2", "2/1"] },
  { id: "a4-6-ep06", promptFr: "L'inverse de 3/7 est ?", acceptable: ["7/3"] },
  { id: "a4-6-ep07", promptFr: "L'inverse de 5/8 est ?", acceptable: ["8/5"] },
  { id: "a4-6-ep08", promptFr: "Calculez 4/5 ÷ 2/5. Simplifiez. (4/5 × 5/2 = ?)", acceptable: ["2", "2/1", "20/10"] },
  { id: "a4-6-ep09", promptFr: "Calculez 3/8 ÷ 3/4. Simplifiez.", acceptable: ["1/2", "12/24"] },
];

function A4Ex6(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A4_6_POOL} count={2} />;
}

// Exercise 7 — Fractions et décimaux (2 pts)
const A4_7_POOL: PoolQuestion[] = [
  { id: "a4-7-ep01", promptFr: "Convertissez 1/2 en nombre décimal.", acceptable: ["0.5", "0,5"] },
  { id: "a4-7-ep02", promptFr: "Convertissez 1/4 en nombre décimal.", acceptable: ["0.25", "0,25"] },
  { id: "a4-7-ep03", promptFr: "Convertissez 3/4 en nombre décimal.", acceptable: ["0.75", "0,75"] },
  { id: "a4-7-ep04", promptFr: "Convertissez 3/10 en nombre décimal.", acceptable: ["0.3", "0,3"] },
  { id: "a4-7-ep05", promptFr: "Convertissez 7/100 en nombre décimal.", acceptable: ["0.07", "0,07"] },
  { id: "a4-7-ep06", promptFr: "Convertissez 0,6 en fraction décimale (sur 10).", acceptable: ["6/10", "3/5"] },
  { id: "a4-7-ep07", promptFr: "Convertissez 0,25 en fraction (sur 100, puis simplifiez).", acceptable: ["25/100", "1/4"] },
  { id: "a4-7-ep08", promptFr: "1/5 = ? (décimal)", acceptable: ["0.2", "0,2"] },
  { id: "a4-7-ep09", promptFr: "Convertissez 0,8 en fraction simplifiée.", acceptable: ["8/10", "4/5"] },
  { id: "a4-7-ep10", promptFr: "Convertissez 2/5 en nombre décimal.", acceptable: ["0.4", "0,4"] },
];

function A4Ex7(props: RevisionExerciseProps) {
  return <PoolExercise {...props} pool={A4_7_POOL} count={2} />;
}

export const A4_EXERCISES: RevisionExerciseMeta[] = [
  { id: 1, label: "Notion et représentation", maxPoints: 2, component: A4Ex1 },
  { id: 2, label: "Fractions équivalentes", maxPoints: 2, component: A4Ex2 },
  { id: 3, label: "Comparaison de fractions", maxPoints: 2, component: A4Ex3 },
  { id: 4, label: "Addition et soustraction", maxPoints: 2, component: A4Ex4 },
  { id: 5, label: "Multiplication de fractions", maxPoints: 2, component: A4Ex5 },
  { id: 6, label: "Division de fractions", maxPoints: 2, component: A4Ex6 },
  { id: 7, label: "Fractions et décimaux", maxPoints: 2, component: A4Ex7 },
];
