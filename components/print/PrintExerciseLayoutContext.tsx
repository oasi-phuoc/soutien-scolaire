"use client";

import { createContext, useContext, type ReactNode } from "react";

export type PrintExerciseColumns = 1 | 2 | 3;

export type PrintExerciseLayoutValue = {
  /** Nombre de questions (pool size) pour cet exercice. */
  questionCount: number;
  /** Répartition des questions en colonnes (1–3). */
  columns: PrintExerciseColumns;
};

const PrintExerciseLayoutContext = createContext<PrintExerciseLayoutValue | null>(null);

export function PrintExerciseLayoutProvider({
  value,
  children,
}: {
  value: PrintExerciseLayoutValue;
  children: ReactNode;
}) {
  return (
    <PrintExerciseLayoutContext.Provider value={value}>
      {children}
    </PrintExerciseLayoutContext.Provider>
  );
}

/** Pool size à l'impression ; sinon le défaut de l'exercice (entraînement). */
export function usePrintQuestionCount(fallback: number): number {
  const ctx = useContext(PrintExerciseLayoutContext);
  if (!ctx) return fallback;
  return Math.max(1, Math.min(30, ctx.questionCount));
}

export function usePrintColumns(): PrintExerciseColumns {
  const ctx = useContext(PrintExerciseLayoutContext);
  const cols = ctx?.columns ?? 1;
  return cols === 2 || cols === 3 ? cols : 1;
}

/** Convenience: count + columns + list class for print-aware exercise UIs. */
export function usePrintQuestionLayout(fallbackCount: number) {
  const questionCount = usePrintQuestionCount(fallbackCount);
  const columns = usePrintColumns();
  return {
    questionCount,
    columns,
    listClass: printQuestionsListClass(columns),
  };
}

/** Classes pour la liste de questions (1 colonne = stack, 2–3 = grille). */
export function printQuestionsListClass(columns: PrintExerciseColumns, stacked = "space-y-4"): string {
  if (columns === 2) return "grid grid-cols-2 items-start gap-x-6 gap-y-4";
  if (columns === 3) return "grid grid-cols-3 items-start gap-x-4 gap-y-4";
  return stacked;
}
