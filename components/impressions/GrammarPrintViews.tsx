"use client";

import type { Exercise, TheoryBlock } from "@/lib/curriculum/grammar-data";
import {
  GrammarExerciseView,
  GrammarTheoryView,
} from "@/components/francais/GrammaireRunner";

export function GrammarTheoryPrintView({ blocks }: { blocks: TheoryBlock[] }) {
  return <GrammarTheoryView blocks={blocks} pivot="en" showTrans={false} />;
}

export function GrammarExercisePrintView({ exercise }: { exercise: Exercise }) {
  return (
    <GrammarExerciseView
      exercise={exercise}
      onValidated={() => {}}
      validateCommand={0}
      onCanValidateChange={() => {}}
    />
  );
}
