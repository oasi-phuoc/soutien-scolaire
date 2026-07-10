import type React from "react";
import type { PlacementExerciseProps } from "@/components/math/placement/PlacementExercises1to15";
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise8,
  Exercise9,
  Exercise10,
  Exercise11,
  Exercise12,
  Exercise13,
  Exercise14,
  Exercise15,
} from "@/components/math/placement/PlacementExercises1to15";
import {
  Exercise16,
  Exercise17,
  Exercise18,
  Exercise19,
  Exercise20,
  Exercise21,
  Exercise22,
  ExerciseFracRead,
  Exercise23,
  Exercise24,
  Exercise25,
  Exercise26,
  Exercise27,
} from "@/components/math/placement/PlacementExercises16to27";
import {
  Exercise28,
  Exercise29,
  Exercise30,
  Exercise31,
  Exercise32,
  Exercise33,
  Exercise34,
  Exercise35,
  Exercise36,
  Exercise37,
  Exercise38,
} from "@/components/math/placement/PlacementExercises28to38";

export interface PlacementMathExerciseMeta {
  id: number;
  label: string;
  maxPoints: number;
  component: React.ComponentType<PlacementExerciseProps>;
}

export const PLACEMENT_MATH_EXERCISES: PlacementMathExerciseMeta[] = [
  { id: 1, label: "Compter les formes", maxPoints: 2, component: Exercise1 },
  { id: 2, label: "Comparer (11–99)", maxPoints: 2, component: Exercise2 },
  { id: 3, label: "Suites numériques", maxPoints: 2, component: Exercise3 },
  { id: 4, label: "Additions et soustractions", maxPoints: 2, component: Exercise4 },
  { id: 5, label: "Opérande manquant", maxPoints: 4, component: Exercise5 },
  { id: 6, label: "Calcul en colonnes (99–999)", maxPoints: 2, component: Exercise6 },
  { id: 7, label: "Dizaines et unités", maxPoints: 2, component: Exercise8 },
  { id: 8, label: "Comparer (101–999)", maxPoints: 2, component: Exercise9 },
  { id: 9, label: "Grandes suites", maxPoints: 2, component: Exercise10 },
  { id: 10, label: "Calcul mixte", maxPoints: 3, component: Exercise11 },
  { id: 11, label: "Décomposition", maxPoints: 2, component: Exercise12 },
  { id: 12, label: "Colonnes (1000–9999)", maxPoints: 2, component: Exercise13 },
  { id: 13, label: "Multiplication en colonnes", maxPoints: 2, component: Exercise14 },
  { id: 14, label: "Division en colonnes", maxPoints: 2, component: Exercise15 },
  { id: 15, label: "Rectangle", maxPoints: 2, component: Exercise16 },
  { id: 16, label: "Suites (grands nombres)", maxPoints: 3, component: Exercise17 },
  { id: 17, label: "Trier des nombres", maxPoints: 2, component: Exercise18 },
  { id: 18, label: "Additions et soustrations décimales", maxPoints: 4, component: Exercise19 },
  { id: 19, label: "Multiplication décimale", maxPoints: 4, component: Exercise20 },
  { id: 20, label: "Division décimale", maxPoints: 4, component: Exercise21 },
  { id: 21, label: "Colorier les fractions", maxPoints: 2, component: Exercise22 },
  { id: 22, label: "Lire les fractions", maxPoints: 2, component: ExerciseFracRead },
  { id: 23, label: "Conversions de longueur", maxPoints: 4, component: Exercise23 },
  { id: 24, label: "Calculs décimaux", maxPoints: 4, component: Exercise24 },
  { id: 25, label: "Parallélogramme", maxPoints: 2, component: Exercise25 },
  { id: 26, label: "Triangle rectangle", maxPoints: 2, component: Exercise26 },
  { id: 27, label: "Losange", maxPoints: 2, component: Exercise27 },
  { id: 28, label: "Puissances et racines", maxPoints: 4, component: Exercise28 },
  { id: 29, label: "Priorité des opérations", maxPoints: 2, component: Exercise29 },
  { id: 30, label: "Nombres relatifs", maxPoints: 4, component: Exercise30 },
  { id: 31, label: "Fractions", maxPoints: 4, component: Exercise31 },
  { id: 32, label: "Pourcentages et règle de trois", maxPoints: 2, component: Exercise32 },
  { id: 33, label: "Simplification algébrique", maxPoints: 4, component: Exercise33 },
  { id: 34, label: "Évaluer des expressions", maxPoints: 2, component: Exercise34 },
  { id: 35, label: "Résoudre des équations", maxPoints: 2, component: Exercise35 },
  { id: 36, label: "Conversions d'unités", maxPoints: 4, component: Exercise36 },
  { id: 37, label: "Trapèze", maxPoints: 2, component: Exercise37 },
  { id: 38, label: "Cercle", maxPoints: 2, component: Exercise38 },
];

export const PLACEMENT_MATH_TOTAL_POINTS = PLACEMENT_MATH_EXERCISES.reduce((s, e) => s + e.maxPoints, 0);
