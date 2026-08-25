"use client";

import { createContext, useContext, type ReactNode } from "react";
import {
  PRINT_LENGTH_DEFAULT,
  type PrintLengthMode,
  clampPrintLength,
  printLengthFullLines,
  printLengthWidthScale,
} from "@/components/print/printLength";

export type PrintExerciseColumns = 1 | 2 | 3 | 4 | 5;

/** Maximum du sélecteur « Questions » et taille du pool généré à l’impression. */
export const MAX_PRINT_QUESTIONS = 30;

export function clampPrintQuestionCount(value: number): number {
  return Math.max(1, Math.min(MAX_PRINT_QUESTIONS, Math.round(value)));
}

export function clampPrintColumns(value: number): PrintExerciseColumns {
  const n = Math.round(value);
  if (n >= 5) return 5;
  if (n >= 2) return n as PrintExerciseColumns;
  return 1;
}

export type PrintExerciseLayoutValue = {
  /** Nombre de questions (pool size) pour cet exercice. */
  questionCount: number;
  /** Répartition des questions en colonnes (1–5). */
  columns: PrintExerciseColumns;
  /** Longueurs des traits / boutons (−10…+10, défaut 0). */
  length: number;
  /** Mode d’application de Longueurs. */
  lengthMode: PrintLengthMode;
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
  return clampPrintQuestionCount(ctx.questionCount);
}

export function usePrintColumns(fallback: PrintExerciseColumns = 1): PrintExerciseColumns {
  const ctx = useContext(PrintExerciseLayoutContext);
  return clampPrintColumns(ctx?.columns ?? fallback);
}

/** True lorsque le composant est rendu dans un aperçu / document d'impression. */
export function useIsPrintLayout(): boolean {
  return useContext(PrintExerciseLayoutContext) !== null;
}

/** Convenience: count + columns + list class + longueurs for print-aware exercise UIs. */
export function usePrintQuestionLayout(fallbackCount: number) {
  const ctx = useContext(PrintExerciseLayoutContext);
  const questionCount = ctx
    ? clampPrintQuestionCount(ctx.questionCount)
    : fallbackCount;
  const columns = clampPrintColumns(ctx?.columns ?? 1);
  const lengthMode: PrintLengthMode = ctx?.lengthMode ?? "width";
  const length = ctx
    ? clampPrintLength(ctx.length, lengthMode)
    : PRINT_LENGTH_DEFAULT;
  const isPrint = ctx !== null;
  return {
    questionCount,
    columns,
    listClass: printQuestionsListClass(columns),
    isPrint,
    length,
    lengthMode,
    /** Multiplicateur de largeur (1 hors impression ou mode none). */
    lengthScale: isPrint ? printLengthWidthScale(length, lengthMode) : 1,
    /** Nombre de traits pleine largeur à l’impression (mode lines, sinon base 2). */
    fullLineCount: isPrint
      ? printLengthFullLines(lengthMode === "lines" ? length : 0)
      : 1,
  };
}

/** Classes pour la liste de questions (1 colonne = stack, 2–3 = grille). */
export function printQuestionsListClass(columns: PrintExerciseColumns, stacked = "space-y-4"): string {
  if (columns === 2) return "grid grid-cols-2 items-start gap-x-6 gap-y-4";
  if (columns === 3) return "grid grid-cols-3 items-start gap-x-4 gap-y-4";
  if (columns === 4) return "grid grid-cols-4 items-start gap-x-3 gap-y-3";
  if (columns === 5) return "grid grid-cols-5 items-start gap-x-2 gap-y-3";
  return stacked;
}
