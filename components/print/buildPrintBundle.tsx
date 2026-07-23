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
import { buildPlacementCePrintExercises } from "@/components/communication/ComprehensionEcritRunner";
import { buildPlacementCoPrintExercises } from "@/components/communication/ComprehensionOraleRunner";
import { buildPlacementPePrintExercises } from "@/components/communication/ProductionEcriteRunner";
import { buildPlacementPoPrintExercises } from "@/components/communication/OralProductionRunner";
import {
  getMathExercisesForLevel,
  MATH_TRAINING_LEVEL_LABELS,
  levelFromMathParam,
} from "@/lib/placement/math-training-levels";
import { PLACEMENT_MATH_EXERCISES, PLACEMENT_MATH_TOTAL_POINTS } from "@/lib/placement/math-exercises";
import { PlacementMathPrintPreview, PlacementPrintSeedRoot } from "@/components/math/placement/PlacementMathPrintPreview";
import {
  FrenchPlacementCompleteAnnounce,
  FrenchPlacementSkillAnnounce,
  MathPlacementCompleteAnnounce,
  MathPlacementLevelAnnounce,
} from "@/components/print/PlacementPrintAnnounce";
import { PLACEMENT_FRENCH_PRINT_PARTS } from "@/lib/print/catalog";
import type { PlacementLevel, PlacementSkill } from "@/lib/placement/types";
import type { VocabTheme } from "@/lib/curriculum/vocabulary-data";

export type PrintBundle = {
  lessonTitle: string;
  course: string;
  accentColor: string;
  theoryPreview?: ReactNode;
  /** Page d'annonce placement (toujours page 1, puis saut avant le 1er exo). */
  announcementPreview?: ReactNode;
  exercises: PrintExercise[];
  /** Mode évaluation + barème du test (placement = 100 pts). */
  defaultEvalMode?: boolean;
  /** Compétence FR séparée : afficher le sélecteur A1/A2/B1. */
  frenchLevelSelectable?: boolean;
};

export type BuildPrintBundleOptions = {
  frenchLevel?: PlacementLevel;
};

const noop = () => {};

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

function vocabExPreview(
  stepKey: string,
  theme: VocabTheme,
  validateCommand = 0,
): ReactNode | undefined {
  const common = {
    theme,
    validateCommand,
    onValidated: noop,
    onCanValidateChange: noop,
    exerciseNumber: 1,
  };
  switch (stepKey) {
    case "ex1-image-match":
      return <ExImageMatch {...common} />;
    case "ex2-article":
      return <ExArticle {...common} />;
    case "ex3-anagram":
      return <ExAnagram {...common} />;
    case "ex4-missing-letters":
      return <ExMissingLetters {...common} />;
    case "ex5-definition-match":
      return <ExDefinitionMatch {...common} />;
    case "ex6-fill-sentences":
      return <ExFillSentences {...common} />;
    case "ex-masc-fem":
      return <ExMascFem {...common} />;
    case "ex7-image-write":
      return <ExImageWrite {...common} />;
    case "ex8-dictation":
      return <ExDictation {...common} />;
    case "ex-word-order":
      return <ExWordOrder {...common} />;
    case "ex9-sentence-write":
      return <ExSentenceWrite {...common} />;
    case "ex10-question-write":
      return <ExQuestionWrite {...common} />;
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
    exercises: steps.map((step, index) => {
      const seed = 6_000_000 + index;
      return {
        id: step.key,
        label: step.label || `Exercice ${index + 1}`,
        preview: (
          <PlacementPrintSeedRoot seed={seed}>
            {vocabExPreview(step.key, theme, 0)}
          </PlacementPrintSeedRoot>
        ),
        correctionPreview: (
          <PlacementPrintSeedRoot seed={seed}>
            {vocabExPreview(step.key, theme, 1)}
          </PlacementPrintSeedRoot>
        ),
      };
    }),
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
      exercises: lesson.exercises.map((ex, i) => {
        const seed = 4_000_000 + i;
        return {
          id: String(i),
          label: ex.title ?? `Exercice ${i + 1}`,
          preview: (
            <PlacementPrintSeedRoot seed={seed}>
              <GrammarExerciseView
                exercise={ex}
                onValidated={noop}
                validateCommand={0}
                onCanValidateChange={noop}
              />
            </PlacementPrintSeedRoot>
          ),
          correctionPreview: (
            <PlacementPrintSeedRoot seed={seed}>
              <GrammarExerciseView
                exercise={ex}
                onValidated={noop}
                validateCommand={1}
                onCanValidateChange={noop}
              />
            </PlacementPrintSeedRoot>
          ),
        };
      }),
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
    exercises: lesson.exercises.map((ex, i) => {
      const seed = 5_000_000 + i;
      return {
        id: String(i),
        label: ex.title ?? `Exercice ${i + 1}`,
        preview: (
          <PlacementPrintSeedRoot seed={seed}>
            <GrammarExerciseView
              exercise={ex}
              onValidated={noop}
              validateCommand={0}
              onCanValidateChange={noop}
            />
          </PlacementPrintSeedRoot>
        ),
        correctionPreview: (
          <PlacementPrintSeedRoot seed={seed}>
            <GrammarExerciseView
              exercise={ex}
              onValidated={noop}
              validateCommand={1}
              onCanValidateChange={noop}
            />
          </PlacementPrintSeedRoot>
        ),
      };
    }),
  };
}

function mathExercisePrintItem(ex: (typeof PLACEMENT_MATH_EXERCISES)[number]): PrintExercise {
  const Comp = ex.component;
  return {
    id: String(ex.id),
    label: `${ex.id}. ${ex.label}`,
    defaultPoints: ex.maxPoints,
    preview: <PlacementMathPrintPreview Comp={Comp} exerciseId={ex.id} />,
    correctionPreview: (
      <PlacementMathPrintPreview Comp={Comp} exerciseId={ex.id} correction />
    ),
  };
}

function buildPlacementMathPartBundle(levelId: string): PrintBundle | null {
  if (levelId === "complet") {
    const exercises = PLACEMENT_MATH_EXERCISES.map(mathExercisePrintItem);
    return {
      lessonTitle: "Test de placement — Mathématiques",
      course: "Mathématiques",
      accentColor: "var(--color-accent-quiz)",
      defaultEvalMode: true,
      announcementPreview: (
        <MathPlacementCompleteAnnounce
          exerciseCount={PLACEMENT_MATH_EXERCISES.length}
          maxPoints={PLACEMENT_MATH_TOTAL_POINTS}
        />
      ),
      exercises,
    };
  }
  const level = levelFromMathParam(levelId);
  if (!level) return null;
  const levelExercises = getMathExercisesForLevel(level);
  const maxPoints = levelExercises.reduce((sum, ex) => sum + ex.maxPoints, 0);
  return {
    lessonTitle: MATH_TRAINING_LEVEL_LABELS[level],
    course: "Mathématiques",
    accentColor: "var(--color-accent-quiz)",
    defaultEvalMode: true,
    announcementPreview: (
      <MathPlacementLevelAnnounce
        level={level}
        exerciseCount={levelExercises.length}
        maxPoints={maxPoints}
      />
    ),
    exercises: levelExercises.map(mathExercisePrintItem),
  };
}

function frenchSkillPrintExercises(
  skill: PlacementSkill,
  seed: number,
  level?: PlacementLevel,
): PrintExercise[] {
  switch (skill) {
    case "ce":
      return buildPlacementCePrintExercises(seed, level);
    case "co":
      return buildPlacementCoPrintExercises(seed, level);
    case "pe":
      return buildPlacementPePrintExercises(level);
    case "po":
      return buildPlacementPoPrintExercises(level ?? "avance");
  }
}

function buildPlacementFrenchPartBundle(
  partId: string,
  frenchLevel: PlacementLevel = "base",
): PrintBundle | null {
  if (partId === "complet") {
    const seed = 1;
    return {
      lessonTitle: "Test de placement — Français",
      course: "Français",
      accentColor: "var(--color-accent-quiz)",
      defaultEvalMode: true,
      announcementPreview: <FrenchPlacementCompleteAnnounce />,
      exercises: PLACEMENT_FRENCH_PRINT_PARTS.flatMap((part) =>
        frenchSkillPrintExercises(part.id, seed),
      ),
    };
  }
  const part = PLACEMENT_FRENCH_PRINT_PARTS.find((p) => p.id === partId);
  if (!part) return null;
  const exercises = frenchSkillPrintExercises(part.id, 1, frenchLevel);
  const maxPoints = exercises.reduce((sum, ex) => sum + (ex.defaultPoints ?? 0), 0);
  return {
    lessonTitle: `Test de placement — ${part.title}`,
    course: "Français",
    accentColor: "var(--color-accent-quiz)",
    defaultEvalMode: true,
    frenchLevelSelectable: true,
    announcementPreview: (
      <FrenchPlacementSkillAnnounce
        skill={part.id}
        level={frenchLevel}
        exerciseCount={exercises.length}
        maxPoints={maxPoints || 25}
      />
    ),
    exercises,
  };
}

/** Construit le bundle d'aperçu pour une entrée du catalogue d'impression. */
export function buildPrintBundle(
  catalogId: string,
  options?: BuildPrintBundleOptions,
): PrintBundle | null {
  if (catalogId.startsWith("placement:math:")) {
    return buildPlacementMathPartBundle(catalogId.slice("placement:math:".length));
  }
  if (catalogId.startsWith("placement:francais:")) {
    return buildPlacementFrenchPartBundle(
      catalogId.slice("placement:francais:".length),
      options?.frenchLevel ?? "base",
    );
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
