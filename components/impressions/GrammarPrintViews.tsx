"use client";

import type { Exercise, TheoryBlock } from "@/lib/curriculum/grammar-data";
import { ExerciseView, TheoryView } from "@/components/francais/GrammaireRunner";

export function GrammarTheoryPrintView({ blocks }: { blocks: TheoryBlock[] }) {
  return <TheoryView blocks={blocks} pivot="en" showTrans={false} />;
}

export function GrammarExercisePrintView({ exercise }: { exercise: Exercise }) {
  return (
    <ExerciseView
      exercise={exercise}
      onValidated={() => {}}
      validateCommand={0}
      onCanValidateChange={() => {}}
    />
  );
}
