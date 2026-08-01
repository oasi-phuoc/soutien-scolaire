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
import {
  EXPRESS_ORAL_BY_ID,
} from "@/lib/curriculum/content/communication/express-index";
import {
  pickProgressiveExercises,
  type CommunicationTheoryBlock,
} from "@/lib/curriculum/content/communication/express-types";
import { PrintAudioQrRow } from "@/components/print/PrintAudioQrRow";

export type PrintBundle = {
  lessonTitle: string;
  course: string;
  accentColor: string;
  theoryPreview?: ReactNode;
  /** Page d'annonce placement (incluse seulement si l'option théorie/annonce est cochée). */
  announcementPreview?: ReactNode;
  exercises: PrintExercise[];
  /** Mode évaluation + barème du test (placement = 100 pts). */
  defaultEvalMode?: boolean;
  /** Compétence FR séparée : afficher le sélecteur A1/A2/B1. */
  frenchLevelSelectable?: boolean;
};

export type BuildPrintBundleOptions = {
  frenchLevel?: PlacementLevel;
  /** Seed de tirage (refresh à chaque ouverture d'impression). */
  seed?: number;
};

function resolvePrintSeed(seed?: number): number {
  if (typeof seed === "number" && Number.isFinite(seed)) return Math.floor(seed);
  return Date.now() ^ Math.floor(Math.random() * 1_000_000);
}

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

function mathExercisePrintItem(
  ex: (typeof PLACEMENT_MATH_EXERCISES)[number],
  sessionSeed: number,
): PrintExercise {
  const Comp = ex.component;
  return {
    id: String(ex.id),
    label: `${ex.id}. ${ex.label}`,
    defaultPoints: ex.maxPoints,
    preview: <PlacementMathPrintPreview Comp={Comp} exerciseId={ex.id} sessionSeed={sessionSeed} />,
    correctionPreview: (
      <PlacementMathPrintPreview Comp={Comp} exerciseId={ex.id} sessionSeed={sessionSeed} correction />
    ),
  };
}

function buildPlacementMathPartBundle(levelId: string, seed: number): PrintBundle | null {
  if (levelId === "complet") {
    const exercises = PLACEMENT_MATH_EXERCISES.map((ex) => mathExercisePrintItem(ex, seed));
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
    exercises: levelExercises.map((ex) => mathExercisePrintItem(ex, seed)),
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
      return buildPlacementPePrintExercises(level, seed);
    case "po":
      return buildPlacementPoPrintExercises(level ?? "avance", seed);
  }
}

function buildPlacementFrenchPartBundle(
  partId: string,
  frenchLevel: PlacementLevel = "base",
  seed = Date.now(),
): PrintBundle | null {
  if (partId === "complet") {
    return {
      lessonTitle: "Test de placement — Français",
      course: "Français",
      accentColor: "var(--color-accent-quiz)",
      defaultEvalMode: true,
      announcementPreview: <FrenchPlacementCompleteAnnounce />,
      exercises: PLACEMENT_FRENCH_PRINT_PARTS.flatMap((part, i) =>
        frenchSkillPrintExercises(part.id, seed + i * 10_007),
      ),
    };
  }
  const part = PLACEMENT_FRENCH_PRINT_PARTS.find((p) => p.id === partId);
  if (!part) return null;
  const exercises = frenchSkillPrintExercises(part.id, seed, frenchLevel);
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

function expressTheoryLines(block: CommunicationTheoryBlock): string[] {
  switch (block.type) {
    case "heading":
    case "subheading":
    case "plain":
    case "note":
      return [block.text];
    case "prerequisites":
      return [
        "Prérequis",
        ...block.items.map((item) => `${item.code} — ${item.title}`),
      ];
    case "highlight":
      return [block.title, ...(block.items ?? [])];
    case "numbered":
    case "bullets":
      return block.items;
    case "section":
      return [
        ...(block.label ? [block.label] : []),
        ...(block.items ?? (block.text ? block.text.split("\n") : [])),
      ];
    case "table":
      return [
        block.headers.join(" · "),
        ...block.rows.map((row) => row.join(" · ")),
      ];
    case "dialogue":
      return [
        ...(block.audioLabel ? [block.audioLabel] : []),
        ...block.lines.map((line) => `${line.role} : ${line.text}`),
      ];
    case "vocab":
      return block.items.map((item) => `${item.fr} — ${item.example}`);
    default:
      return [];
  }
}

function buildExpressBundle(lessonId: string): PrintBundle | null {
  const lesson = EXPRESS_ORAL_BY_ID[lessonId];
  if (!lesson) return null;
  const pool = lesson.exercisePool ?? [];
  const training =
    pool.length > 0
      ? pickProgressiveExercises(pool, lesson.exerciseCount ?? 8, 1)
      : (lesson.exercises ?? []);
  const picked = [...training, ...(lesson.evalExercises ?? [])];

  const dialogueAudio = lesson.theory.find(
    (b): b is Extract<CommunicationTheoryBlock, { type: "dialogue" }> =>
      b.type === "dialogue" && Boolean(b.audioSrc),
  );

  return {
    lessonTitle: lesson.title,
    course: "Français",
    accentColor: "var(--color-accent-comm)",
    theoryPreview: (
      <div className="space-y-2 text-sm leading-relaxed text-black">
        {dialogueAudio?.audioSrc ? (
          <PrintAudioQrRow
            items={[
              {
                id: "dialogue",
                audio: dialogueAudio.audioSrc,
                label: dialogueAudio.audioLabel ?? "Audio",
              },
            ]}
          />
        ) : null}
        {lesson.theory.flatMap((block, bi) =>
          expressTheoryLines(block).map((line, li) => (
            <p key={`${bi}-${li}`} className={block.type === "heading" ? "font-bold" : undefined}>
              {line}
            </p>
          )),
        )}
      </div>
    ),
    exercises: picked.map((ex, i) => {
      const qrItems =
        ex.type === "listening" && ex.audioSrc
          ? [{ id: ex.id, audio: ex.audioSrc, label: ex.audioLabel ?? `Audio ${i + 1}` }]
          : [];
      const poolPreview =
        ex.type === "listening" && ex.questionPool?.length
          ? ex.questionPool.slice(0, ex.questionCount ?? 4).map((q, qi) => {
              const fmt = q.format ?? (["image", "text", "fill", "vf"] as const)[qi % 4];
              if (fmt === "fill") {
                return (
                  <div key={q.id} className="space-y-1">
                    <p className="font-medium">{q.fillQ || q.textQ}</p>
                    <div className="h-6 border-b border-black/40" />
                  </div>
                );
              }
              if (fmt === "vf") {
                return (
                  <div key={q.id} className="space-y-1">
                    <p className="font-medium">{q.vfQ ?? q.textQ}</p>
                    <p>a. Vrai &nbsp; b. Faux</p>
                  </div>
                );
              }
              const choices = fmt === "image" ? q.imageChoices.map((c) => c.label) : q.textChoices;
              return (
                <div key={q.id} className="space-y-1">
                  <p className="font-medium">{fmt === "image" ? q.imageQ : q.textQ}</p>
                  <ul className="space-y-1">
                    {choices.map((choice, ci) => (
                      <li key={`${q.id}-${ci}`} className="flex gap-2">
                        <span className="w-5 shrink-0 font-bold">
                          {String.fromCharCode(97 + ci)}.
                        </span>
                        <span>{typeof choice === "string" ? choice : choice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })
          : null;
      return {
        id: ex.id || String(i),
        label: `Exercice ${i + 1}`,
        preview: (
          <div className="space-y-2 text-sm text-black">
            {qrItems.length > 0 ? <PrintAudioQrRow items={qrItems} /> : null}
            <p className="font-semibold">{ex.instruction}</p>
            {poolPreview ? (
              <div className="space-y-3">{poolPreview}</div>
            ) : ex.type === "listening" && ex.items ? (
              <div className="space-y-3">
                {ex.items.map((item) => (
                  <div key={item.id}>
                    <p className="font-medium">{item.prompt}</p>
                    <ul className="mt-1 space-y-1">
                      {item.choices.map((choice, ci) => (
                        <li key={choice} className="flex gap-2">
                          <span className="w-5 shrink-0 font-bold">
                            {String.fromCharCode(97 + ci)}.
                          </span>
                          <span>{choice}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-2 h-6 border-b border-black/40" />
                  </div>
                ))}
              </div>
            ) : (
              <>
                <p>{ex.question}</p>
                <ul className="space-y-1">
                  {(ex.choices ?? []).map((choice, ci) => (
                    <li key={choice} className="flex gap-2">
                      <span className="w-5 shrink-0 font-bold">{String.fromCharCode(97 + ci)}.</span>
                      <span>{choice}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 h-7 border-b border-black/40" />
              </>
            )}
          </div>
        ),
        correctionLeadPreview:
          qrItems.length > 0 || ex.transcript ? (
            <div className="space-y-2 text-sm text-black">
              {qrItems.length > 0 ? (
                <PrintAudioQrRow items={qrItems} caption="Audio (corrigé)" />
              ) : null}
              {ex.transcript ? (
                <div className="whitespace-pre-line rounded border border-black/15 p-2 text-xs leading-relaxed">
                  {ex.transcript}
                </div>
              ) : null}
            </div>
          ) : undefined,
        correctionPreview: (
          <div className="space-y-2 text-sm text-black">
            <p className="font-semibold">{ex.instruction}</p>
            {ex.type === "listening" && ex.questionPool?.length ? (
              <div className="space-y-2">
                {ex.questionPool.slice(0, ex.questionCount ?? 4).map((q) => {
                  const fmt = q.format ?? "text";
                  if (fmt === "fill") {
                    return (
                      <p key={q.id}>
                        <span className="font-medium">{q.fillQ || q.textQ}</span>{" "}
                        <span className="font-bold text-amber-700">{q.fillAnswer}</span>
                      </p>
                    );
                  }
                  if (fmt === "vf") {
                    return (
                      <p key={q.id}>
                        <span className="font-medium">{q.vfQ ?? q.textQ}</span>{" "}
                        <span className="font-bold text-amber-700">
                          {(q.vfCorrect ?? 0) === 0 ? "Vrai" : "Faux"}
                        </span>
                      </p>
                    );
                  }
                  const ans =
                    fmt === "image"
                      ? q.imageChoices[q.imageCorrect]?.label
                      : q.textChoices[q.textCorrect];
                  return (
                    <p key={q.id}>
                      <span className="font-medium">{fmt === "image" ? q.imageQ : q.textQ}</span>{" "}
                      <span className="font-bold text-amber-700">{ans}</span>
                    </p>
                  );
                })}
              </div>
            ) : ex.type === "listening" && ex.items ? (
              <div className="space-y-2">
                {ex.items.map((item) => (
                  <p key={item.id}>
                    <span className="font-medium">{item.prompt}</span>{" "}
                    <span className="font-bold text-amber-700">{item.answer}</span>
                  </p>
                ))}
              </div>
            ) : (
              <>
                <p>{ex.question}</p>
                <ul className="space-y-1">
                  {(ex.choices ?? []).map((choice, ci) => (
                    <li key={choice} className="flex gap-2">
                      <span className="w-5 shrink-0 font-bold">{String.fromCharCode(97 + ci)}.</span>
                      <span className={choice === ex.answer ? "font-bold text-amber-700" : undefined}>
                        {choice}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-2 font-bold text-amber-700">{ex.answer}</p>
              </>
            )}
          </div>
        ),
      };
    }),
  };
}

/** Construit le bundle d'aperçu pour une entrée du catalogue d'impression. */
export function buildPrintBundle(
  catalogId: string,
  options?: BuildPrintBundleOptions,
): PrintBundle | null {
  const seed = resolvePrintSeed(options?.seed);
  if (catalogId.startsWith("placement:math:")) {
    return buildPlacementMathPartBundle(catalogId.slice("placement:math:".length), seed);
  }
  if (catalogId.startsWith("placement:francais:")) {
    return buildPlacementFrenchPartBundle(
      catalogId.slice("placement:francais:".length),
      options?.frenchLevel ?? "base",
      seed,
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
  if (catalogId.startsWith("express:")) {
    return buildExpressBundle(catalogId.slice("express:".length));
  }
  return null;
}
