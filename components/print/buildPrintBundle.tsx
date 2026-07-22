"use client";

import type { ReactNode } from "react";
import type { PrintExercise } from "@/components/ui/PrintConfigSheet";
import {
  getLessonBySubmoduleId,
  getModuleIdForSubmodule,
} from "@/lib/curriculum/lessons-registry";
import { getVocabTheme } from "@/lib/curriculum/vocabulary-data";
import { getGrammarLesson, getConjLesson } from "@/lib/curriculum/grammar-data";
import { MathTheoryPrintView } from "@/components/print/MathTheoryPrintView";
import { buildA1PrintExercises } from "@/components/math/A1ModuleContent";
import {
  buildWorkspacePrintExercises,
  isWorkspaceCustomSubmodule,
} from "@/components/math/MathSubmoduleWorkspace";
import { buildGenericMathPrintExercises } from "@/components/math/GenericModuleContent";
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
  GrammarTheoryView,
  GrammarExerciseView,
} from "@/components/francais/GrammaireRunner";
import { PlacementCePrintPreview } from "@/components/communication/ComprehensionEcritRunner";
import { PlacementCoPrintPreview } from "@/components/communication/ComprehensionOraleRunner";
import { PlacementPePrintPreview } from "@/components/communication/ProductionEcriteRunner";
import { PlacementPoPrintPreview } from "@/components/communication/OralProductionRunner";
import {
  getMathExercisesForLevel,
  MATH_TRAINING_LEVEL_LABELS,
  levelFromMathParam,
} from "@/lib/placement/math-training-levels";
import { PLACEMENT_MATH_EXERCISES } from "@/lib/placement/math-exercises";
import { PLACEMENT_FRENCH_PRINT_PARTS } from "@/lib/print/catalog";
import type { PlacementSkill } from "@/lib/placement/types";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";

export type PrintBundle = {
  lessonTitle: string;
  course: string;
  accentColor: string;
  theoryPreview?: ReactNode;
  exercises: PrintExercise[];
  /** Mode évaluation + barème du test (placement = 100 pts). */
  defaultEvalMode?: boolean;
};

const noop = () => {};

const FRENCH_SKILL_POINTS = 25 as const;

function buildMathBundle(submoduleId: string): PrintBundle | null {
  const lesson = getLessonBySubmoduleId(submoduleId);
  if (!lesson) return null;
  const moduleId = getModuleIdForSubmodule(submoduleId) ?? submoduleId.split("-")[0] ?? "";

  let exercises: PrintExercise[];
  if (submoduleId === "A1-1" || submoduleId === "A1-2") {
    exercises = buildA1PrintExercises(submoduleId);
  } else if (isWorkspaceCustomSubmodule(moduleId, submoduleId)) {
    exercises = buildWorkspacePrintExercises(lesson);
  } else {
    exercises = buildGenericMathPrintExercises(lesson);
  }

  // Fallback si aucun exercice n'a pu être construit
  if (exercises.length === 0) {
    exercises = buildGenericMathPrintExercises(lesson);
  }

  const isGeo = moduleId.startsWith("G");
  return {
    lessonTitle: lesson.theory.title.fr,
    course: "Mathématiques",
    accentColor: isGeo ? "var(--color-accent-geo)" : "var(--color-accent-alg)",
    theoryPreview: <MathTheoryPrintView lesson={lesson} />,
    exercises,
  };
}

function vocabTrainingSteps(theme: VocabTheme): { key: string; label: string }[] {
  const hasMF = theme.words.filter((w) => !!w.feminine).length >= 5;
  const n = (base: number) => (hasMF ? base + 1 : base);
  return [
    { key: "ex1-image-match", label: "Ex. 1" },
    { key: "ex2-article", label: "Ex. 2" },
    { key: "ex4-missing-letters", label: "Ex. 3" },
    { key: "ex3-anagram", label: "Ex. 4" },
    { key: "ex5-definition-match", label: "Ex. 5" },
    { key: "ex6-fill-sentences", label: "Ex. 6" },
    ...(hasMF ? [{ key: "ex-masc-fem", label: "Ex. 7" }] : []),
    { key: "ex7-image-write", label: `Ex. ${n(7)}` },
    { key: "ex8-dictation", label: `Ex. ${n(8)}` },
    { key: "ex-word-order", label: `Ex. ${n(9)}` },
    { key: "ex9-sentence-write", label: `Ex. ${n(10)}` },
    { key: "ex10-question-write", label: `Ex. ${n(11)}` },
  ];
}

function vocabExPreview(stepKey: string, theme: VocabTheme): ReactNode | undefined {
  switch (stepKey) {
    case "ex1-image-match":
      return (
        <ExImageMatch
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex2-article":
      return (
        <ExArticle
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex3-anagram":
      return (
        <ExAnagram
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex4-missing-letters":
      return (
        <ExMissingLetters
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex5-definition-match":
      return (
        <ExDefinitionMatch
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex6-fill-sentences":
      return (
        <ExFillSentences
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex-masc-fem":
      return (
        <ExMascFem
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex7-image-write":
      return (
        <ExImageWrite
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex8-dictation":
      return (
        <ExDictation
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex-word-order":
      return (
        <ExWordOrder
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex9-sentence-write":
      return (
        <ExSentenceWrite
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    case "ex10-question-write":
      return (
        <ExQuestionWrite
          theme={theme}
          validateCommand={0}
          onValidated={noop}
          onCanValidateChange={noop}
          exerciseNumber={1}
        />
      );
    default:
      return undefined;
  }
}

function buildVocabBundle(slug: string): PrintBundle | null {
  const theme = getVocabTheme(slug);
  if (!theme) return null;
  const steps = vocabTrainingSteps(theme);
  return {
    lessonTitle: theme.title,
    course: "Français",
    accentColor: "var(--color-accent-fr)",
    theoryPreview: <VocabCards theme={theme} onCanValidateChange={noop} />,
    exercises: steps.map((step, index) => ({
      id: step.key,
      label: step.label || `Exercice ${index + 1}`,
      preview: vocabExPreview(step.key, theme),
    })),
  };
}

function buildGrammarBundle(slug: string, kind: "grammar" | "conj"): PrintBundle | null {
  if (kind === "grammar") {
    const lesson = getGrammarLesson(slug);
    if (!lesson) return null;
    return {
      lessonTitle: lesson.title,
      course: "Français",
      accentColor: "var(--color-accent-fr)",
      theoryPreview: (
        <div className="space-y-3 leading-relaxed text-black">
          <GrammarTheoryView blocks={lesson.theory} pivot="fr" showTrans={false} />
        </div>
      ),
      exercises: lesson.exercises.map((ex, i) => ({
        id: String(i),
        label: ex.title ?? `Exercice ${i + 1}`,
        preview: (
          <GrammarExerciseView
            exercise={ex}
            onValidated={noop}
            validateCommand={0}
            onCanValidateChange={noop}
          />
        ),
      })),
    };
  }

  const lesson = getConjLesson(slug);
  if (!lesson) return null;
  return {
    lessonTitle: lesson.title,
    course: "Français",
    accentColor: "var(--color-accent-fr)",
    theoryPreview: (
      <div className="space-y-3 leading-relaxed text-black">
        <GrammarTheoryView blocks={lesson.theory} pivot="fr" showTrans={false} />
        {lesson.theory2 ? (
          <GrammarTheoryView blocks={lesson.theory2} pivot="fr" showTrans={false} />
        ) : null}
      </div>
    ),
    exercises: lesson.exercises.map((ex, i) => ({
      id: String(i),
      label: ex.title ?? `Exercice ${i + 1}`,
      preview: (
        <GrammarExerciseView
          exercise={ex}
          onValidated={noop}
          validateCommand={0}
          onCanValidateChange={noop}
        />
      ),
    })),
  };
}

function mathExercisePrintItem(ex: (typeof PLACEMENT_MATH_EXERCISES)[number]): PrintExercise {
  const Comp = ex.component;
  return {
    id: String(ex.id),
    label: `${ex.id}. ${ex.label}`,
    defaultPoints: ex.maxPoints,
    preview: (
      <Comp
        exerciseKey={1}
        validated={false}
        validateTrigger={0}
        onValidated={noop}
      />
    ),
  };
}

function buildPlacementMathPartBundle(levelId: string): PrintBundle | null {
  if (levelId === "complet") {
    return {
      lessonTitle: "Test de placement — Mathématiques",
      course: "Mathématiques",
      accentColor: "var(--color-accent-quiz)",
      defaultEvalMode: true,
      exercises: PLACEMENT_MATH_EXERCISES.map(mathExercisePrintItem),
    };
  }
  const level = levelFromMathParam(levelId);
  if (!level) return null;
  const exercises = getMathExercisesForLevel(level);
  return {
    lessonTitle: MATH_TRAINING_LEVEL_LABELS[level],
    course: "Mathématiques",
    accentColor: "var(--color-accent-quiz)",
    defaultEvalMode: true,
    exercises: exercises.map(mathExercisePrintItem),
  };
}

function frenchPartPreview(part: PlacementSkill, seed: number) {
  switch (part) {
    case "ce":
      return <PlacementCePrintPreview seed={seed} />;
    case "co":
      return <PlacementCoPrintPreview seed={seed} />;
    case "pe":
      return <PlacementPePrintPreview />;
    case "po":
      return <PlacementPoPrintPreview />;
  }
}

function buildPlacementFrenchPartBundle(partId: string): PrintBundle | null {
  if (partId === "complet") {
    return {
      lessonTitle: "Test de placement — Français",
      course: "Français",
      accentColor: "var(--color-accent-quiz)",
      defaultEvalMode: true,
      exercises: PLACEMENT_FRENCH_PRINT_PARTS.map((part) => ({
        id: part.id,
        label: part.title,
        defaultPoints: FRENCH_SKILL_POINTS,
        preview: frenchPartPreview(part.id, 1),
      })),
    };
  }
  const part = PLACEMENT_FRENCH_PRINT_PARTS.find((p) => p.id === partId);
  if (!part) return null;
  return {
    lessonTitle: `Test de placement — ${part.title}`,
    course: "Français",
    accentColor: "var(--color-accent-quiz)",
    defaultEvalMode: true,
    exercises: [
      {
        id: part.id,
        label: part.title,
        defaultPoints: FRENCH_SKILL_POINTS,
        preview: frenchPartPreview(part.id, 1),
      },
    ],
  };
}

/** Construit le bundle d'aperçu pour une entrée du catalogue d'impression. */
export function buildPrintBundle(catalogId: string): PrintBundle | null {
  if (catalogId.startsWith("placement:math:")) {
    return buildPlacementMathPartBundle(catalogId.slice("placement:math:".length));
  }
  if (catalogId.startsWith("placement:francais:")) {
    return buildPlacementFrenchPartBundle(catalogId.slice("placement:francais:".length));
  }

  if (catalogId.startsWith("math:")) {
    return buildMathBundle(catalogId.slice("math:".length));
  }
  if (catalogId.startsWith("vocab:")) {
    return buildVocabBundle(catalogId.slice("vocab:".length));
  }
  if (catalogId.startsWith("grammar:")) {
    return buildGrammarBundle(catalogId.slice("grammar:".length), "grammar");
  }
  if (catalogId.startsWith("conj:")) {
    return buildGrammarBundle(catalogId.slice("conj:".length), "conj");
  }
  return null;
}
