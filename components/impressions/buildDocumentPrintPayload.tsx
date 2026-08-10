"use client";

import type { ReactNode } from "react";
import type { PrintExercise } from "@/components/ui/PrintConfigSheet";
import type { ImpressionDocument } from "@/lib/print/document-catalog";
import { getLessonBySubmoduleId } from "@/lib/curriculum/lessons-registry";
import { MathPrintTheory } from "@/components/impressions/MathPrintTheory";
import { getVocabTheme } from "@/lib/curriculum/vocabulary-data";
import { getGrammarLesson, getConjLesson } from "@/lib/curriculum/grammar-data";
import { VocabCards } from "@/components/francais/vocab/VocabCards";
import { ExImageMatch } from "@/components/francais/vocab/ExImageMatch";
import { ExArticle } from "@/components/francais/vocab/ExArticle";
import { ExAnagram } from "@/components/francais/vocab/ExAnagram";
import { ExMissingLetters } from "@/components/francais/vocab/ExMissingLetters";
import { ExDefinitionMatch } from "@/components/francais/vocab/ExDefinitionMatch";
import { ExFillSentences } from "@/components/francais/vocab/ExFillSentences";
import { ExMascFem } from "@/components/francais/vocab/ExMascFem";
import { ExImageWrite } from "@/components/francais/vocab/ExImageWrite";
import { ExDictation } from "@/components/francais/vocab/ExDictation";
import { ExWordOrder } from "@/components/francais/vocab/ExWordOrder";
import { ExSentenceWrite } from "@/components/francais/vocab/ExSentenceWrite";
import { ExQuestionWrite } from "@/components/francais/vocab/ExQuestionWrite";
import {
  PLACEMENT_MATH_EXERCISES,
} from "@/lib/placement/math-exercises";
import {
  getMathExercisesForLevel,
} from "@/lib/placement/math-training-levels";
import type { MathTrainingLevel } from "@/lib/placement/types";
import {
  GrammarExercisePrintView,
  GrammarTheoryPrintView,
} from "@/components/impressions/GrammarPrintViews";
import { A1PrintDocumentParts } from "@/components/math/A1PrintDocument";

export type DocumentPrintPayload = {
  title: string;
  course: "Mathématiques" | "Français";
  accentColor: string;
  theoryPreview?: ReactNode;
  exercises: PrintExercise[];
};

const noop = () => {};

function buildVocabSteps(theme: { words: Array<{ feminine?: string }> }) {
  const hasMF = theme.words.filter((w) => !!w.feminine).length >= 5;
  return [
    "ex1-image-match",
    "ex2-article",
    "ex4-missing-letters",
    "ex3-anagram",
    "ex5-definition-match",
    "ex6-fill-sentences",
    ...(hasMF ? ["ex-masc-fem"] : []),
    "ex7-image-write",
    "ex8-dictation",
    "ex-word-order",
    "ex9-sentence-write",
    "ex10-question-write",
  ];
}

function vocabPreview(theme: NonNullable<ReturnType<typeof getVocabTheme>>, stepKey: string) {
  switch (stepKey) {
    case "ex1-image-match":
      return <ExImageMatch theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex2-article":
      return <ExArticle theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex3-anagram":
      return <ExAnagram theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex4-missing-letters":
      return <ExMissingLetters theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex5-definition-match":
      return <ExDefinitionMatch theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex6-fill-sentences":
      return <ExFillSentences theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex-masc-fem":
      return <ExMascFem theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex7-image-write":
      return <ExImageWrite theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex8-dictation":
      return <ExDictation theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex-word-order":
      return <ExWordOrder theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex9-sentence-write":
      return <ExSentenceWrite theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    case "ex10-question-write":
      return <ExQuestionWrite theme={theme} validateCommand={0} onValidated={noop} onCanValidateChange={noop} exerciseNumber={1} />;
    default:
      return undefined;
  }
}

function mathGenericPayload(doc: ImpressionDocument): DocumentPrintPayload | null {
  const lesson = getLessonBySubmoduleId(doc.ref);
  if (!lesson) return null;

  const fromExercises = (lesson.exercises ?? []).map((ex, i) => ({
    id: ex.id || String(i),
    label: `Exercice ${i + 1}`,
    preview: <p>{ex.promptFr}</p>,
  }));

  const fromPool =
    fromExercises.length === 0 && lesson.exercisePool?.length
      ? lesson.exercisePool.slice(0, lesson.poolSize ?? 5).map((ex, i) => ({
          id: ex.id || `pool-${i}`,
          label: `Exercice ${i + 1}`,
          preview: <p>{ex.promptFr}</p>,
        }))
      : [];

  return {
    title: doc.title,
    course: doc.course,
    accentColor: doc.accentColor,
    theoryPreview: <MathPrintTheory lesson={lesson} />,
    exercises: fromExercises.length > 0 ? fromExercises : fromPool,
  };
}

function placementPayload(doc: ImpressionDocument): DocumentPrintPayload {
  const list =
    doc.kind === "placement-math-training"
      ? getMathExercisesForLevel(doc.ref as MathTrainingLevel)
      : PLACEMENT_MATH_EXERCISES;

  return {
    title: doc.title,
    course: doc.course,
    accentColor: doc.accentColor,
    exercises: list.map((ex, i) => {
      const ExComp = ex.component;
      return {
        id: String(ex.id),
        label: `Exercice ${i + 1}`,
        preview: (
          <ExComp
            exerciseKey={1}
            validated={false}
            onValidated={noop}
            validateTrigger={0}
          />
        ),
      };
    }),
  };
}

function vocabPayload(doc: ImpressionDocument): DocumentPrintPayload | null {
  const theme = getVocabTheme(doc.ref);
  if (!theme) return null;
  const steps = buildVocabSteps(theme);
  return {
    title: doc.title,
    course: doc.course,
    accentColor: doc.accentColor,
    theoryPreview: <VocabCards theme={theme} onCanValidateChange={noop} />,
    exercises: steps.map((key, index) => ({
      id: key,
      label: `Exercice ${index + 1}`,
      preview: vocabPreview(theme, key),
    })),
  };
}

function grammarPayload(doc: ImpressionDocument): DocumentPrintPayload | null {
  if (doc.kind === "conjugation") {
    const lesson = getConjLesson(doc.ref);
    if (!lesson) return null;
    return {
      title: doc.title,
      course: doc.course,
      accentColor: doc.accentColor,
      theoryPreview: (
        <div className="space-y-3 leading-relaxed text-black">
          <GrammarTheoryPrintView blocks={lesson.theory} />
          {lesson.theory2 ? <GrammarTheoryPrintView blocks={lesson.theory2} /> : null}
        </div>
      ),
      exercises: lesson.exercises.map((ex, i) => ({
        id: String(i),
        label: `Exercice ${i + 1}`,
        preview: <GrammarExercisePrintView exercise={ex} />,
      })),
    };
  }

  const lesson = getGrammarLesson(doc.ref);
  if (!lesson) return null;
  return {
    title: doc.title,
    course: doc.course,
    accentColor: doc.accentColor,
    theoryPreview: (
      <div className="space-y-3 leading-relaxed text-black">
        <GrammarTheoryPrintView blocks={lesson.theory} />
      </div>
    ),
    exercises: lesson.exercises.map((ex, i) => ({
      id: String(i),
      label: `Exercice ${i + 1}`,
      preview: <GrammarExercisePrintView exercise={ex} />,
    })),
  };
}

/** Construit le contenu imprimable d'un document du catalogue. */
export function buildDocumentPrintPayload(
  doc: ImpressionDocument,
): DocumentPrintPayload | null {
  switch (doc.kind) {
    case "math-a1":
      return A1PrintDocumentParts(doc.ref);
    case "math-generic":
      return mathGenericPayload(doc);
    case "vocab":
      return vocabPayload(doc);
    case "grammar":
    case "conjugation":
      return grammarPayload(doc);
    case "placement-math":
    case "placement-math-training":
      return placementPayload(doc);
    default:
      return null;
  }
}
