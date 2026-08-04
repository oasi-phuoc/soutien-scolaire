import { exercisesToOriginalText } from "@/lib/curriculum/content/communication/pe-submission";
import type { SubmissionExercise } from "@/lib/curriculum/content/communication/expression-submission-types";
import type { WritingLevel, WritingPrompt } from "@/lib/curriculum/content/communication/writing-prompts";

export type GrammarEvalWriteMeta = {
  kind: "grammar_eval_write";
  slug: string;
  autoCorrect: number;
  autoTotal: number;
  writeMax: number;
};

/** Une phrase = 1 point pour la correction professeur. */
export function buildGrammarWriteExercises(input: {
  instruction: string;
  prompts: string[];
  texts: string[];
}): SubmissionExercise[] {
  return input.prompts.map((prompt, i) => ({
    id: `phrase-${i + 1}`,
    kind: "sentences" as const,
    title: `Phrase ${i + 1}`,
    maxPoints: 1,
    consigne: `${input.instruction.trim()}\n\nPrompt : ${prompt}`,
    text: (input.texts[i] ?? "").trim(),
  }));
}

export function buildGrammarWritePromptPayload(input: {
  lessonCode: string;
  lessonTitle: string;
  instruction: string;
  prompts: string[];
  texts: string[];
  meta: GrammarEvalWriteMeta;
}): WritingPrompt & { exercises: SubmissionExercise[]; grammarEvalMeta: GrammarEvalWriteMeta } {
  const exercises = buildGrammarWriteExercises(input);
  return {
    id: `${input.lessonCode}-eval-write`,
    title: `${input.lessonCode} — ${input.lessonTitle} (rédaction)`,
    situation: "Évaluation grammaire — phrases à corriger (1 point par phrase).",
    instruction: input.instruction,
    points: input.prompts.map((p, i) => `${i + 1}. ${p}`),
    minWords: 0,
    maxWords: 10000,
    exercises,
    grammarEvalMeta: input.meta,
  };
}

export function grammarWriteOriginalText(exercises: SubmissionExercise[]): string {
  return exercisesToOriginalText(exercises);
}

export function isGrammarEvalWriteMeta(value: unknown): value is GrammarEvalWriteMeta {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  return (
    v.kind === "grammar_eval_write" &&
    typeof v.slug === "string" &&
    typeof v.autoCorrect === "number" &&
    typeof v.autoTotal === "number" &&
    typeof v.writeMax === "number"
  );
}

export type GrammarWriteLevel = WritingLevel;
