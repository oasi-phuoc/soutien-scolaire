"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  PRINT_LENGTH_DEFAULT,
  clampPrintLength,
  printLengthFullLines,
  printLengthWidthScale,
} from "@/components/print/printLength";

export type PrintExerciseColumns = 1 | 2 | 3;

export type PrintExerciseLayoutValue = {
  /** Nombre de questions (pool size) pour cet exercice. */
  questionCount: number;
  /** Répartition des questions en colonnes (1–3). */
  columns: PrintExerciseColumns;
  /** Longueurs des traits / boutons (1–5, défaut 3). */
  length: number;
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

/** True lorsque le composant est rendu dans un aperçu / document d'impression. */
export function useIsPrintLayout(): boolean {
  return useContext(PrintExerciseLayoutContext) !== null;
}

/** Convenience: count + columns + list class + longueurs for print-aware exercise UIs. */
export function usePrintQuestionLayout(fallbackCount: number) {
  const ctx = useContext(PrintExerciseLayoutContext);
  const questionCount = ctx
    ? Math.max(1, Math.min(30, ctx.questionCount))
    : fallbackCount;
  const rawCols = ctx?.columns ?? 1;
  const columns: PrintExerciseColumns =
    rawCols === 2 || rawCols === 3 ? rawCols : 1;
  const length = ctx ? clampPrintLength(ctx.length) : PRINT_LENGTH_DEFAULT;
  const isPrint = ctx !== null;
  return {
    questionCount,
    columns,
    listClass: printQuestionsListClass(columns),
    isPrint,
    length,
    /** Multiplicateur de largeur (1 hors impression ou au défaut). */
    lengthScale: isPrint ? printLengthWidthScale(length) : 1,
    /** Nombre de traits pleine largeur à l’impression. */
    fullLineCount: isPrint ? printLengthFullLines(length) : 1,
  };
}

/** Classes pour la liste de questions (1 colonne = stack, 2–3 = grille). */
export function printQuestionsListClass(columns: PrintExerciseColumns, stacked = "space-y-4"): string {
  if (columns === 2) return "grid grid-cols-2 items-start gap-x-6 gap-y-4";
  if (columns === 3) return "grid grid-cols-3 items-start gap-x-4 gap-y-4";
  return stacked;
}
