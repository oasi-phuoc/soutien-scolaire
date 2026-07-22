"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { linearSwissGrade } from "@/lib/scoring";
import {
  EvalExerciseResultButton,
  EvalExerciseResultDetail,
  EvalResultsHint,
  EvalResultsSummary,
} from "@/components/ui/EvalResultsUI";
import { savePlacementTestResultAction } from "@/app/actions/progress";
import { savePlacementToCloudAction } from "@/app/actions/placement";
import {
  saveMathAttempt,
  loadFrenchSessions,
  loadMathHistory,
  loadTotalHistory,
  loadMathTrainingDraft,
  saveMathTrainingDraft,
  createMathTrainingSessionId,
} from "@/lib/placement/storage";
import {
  PLACEMENT_MATH_EXERCISES,
  PLACEMENT_MATH_TOTAL_POINTS,
  type PlacementMathExerciseMeta,
} from "@/lib/placement/math-exercises";
import {
  getMathExercisesForLevel,
  MATH_TRAINING_LEVEL_LABELS,
} from "@/lib/placement/math-training-levels";
import type { MathTrainingLevel } from "@/lib/placement/types";
import { PlacementPageHeader, PlacementBackButton } from "@/components/placement/PlacementPageHeader";
import { useRegisterEvalGuard, useGuardedNavigate } from "@/components/EvalNavGuard";
import { useTranslation } from "@/components/TranslationProvider";
import { usePivotLang } from "@/components/math/usePivotLang";
import type { PivotCode } from "@/lib/pivot-langs";

type ExerciseMeta = PlacementMathExerciseMeta;

const TIMER_SECONDS = 90 * 60; // 90 minutes

// ── Timer formatter ───────────────────────────────────────────────────────────

function formatTime(secs: number): string {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

// ── Progress bar ──────────────────────────────────────────────────────────────

interface PlacementProgressBarProps {
  current: number;
  total: number;
  timeLeft: number;
  validated: boolean[];
  hasInput: boolean[];
  onSegmentClick: (idx: number) => void;
  totalPoints: number;
  maxPoints: number;
  placement?: boolean;
}

function PlacementProgressBar({
  current,
  total,
  timeLeft,
  validated,
  hasInput,
  onSegmentClick,
  totalPoints,
  maxPoints,
  placement = false,
}: PlacementProgressBarProps) {
  const hudColor = placement ? "var(--color-accent-quiz)" : "var(--color-correction)";
  const hudSoft = placement ? "color-mix(in oklch, var(--color-accent-quiz) 12%, white)" : "var(--color-correction-soft)";
  const remaining = validated.filter(v => !v).length;
  return (
    <div className="mb-5">
      <div className="mb-1.5 flex items-center justify-between">
        <p className="text-xs font-bold tabular-nums" style={{ color: hudColor }}>{totalPoints} / {maxPoints} pts</p>
        <div className="flex items-center gap-3">
          <span className="rounded-full px-2 py-0.5 text-xs font-bold tabular-nums" style={{ background: hudSoft, color: hudColor }}>
            {formatTime(timeLeft)}
          </span>
          <p className="text-xs text-[var(--color-text-secondary)]">{remaining} exercice{remaining !== 1 ? "s" : ""} restant{remaining !== 1 ? "s" : ""}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {Array.from({ length: total }).map((_, i) => {
          const isValidated = validated[i] ?? false;
          const isCurrent = i === current;
          const hasTyped = hasInput[i] ?? false;

          if (isValidated) return null;

          let cls = "h-2 flex-1 rounded-full transition-colors cursor-pointer ";
          if (isCurrent) {
            cls += placement ? "bg-[var(--color-accent-quiz)]" : "bg-[var(--color-correction)]";
          } else if (hasTyped) {
            cls += placement ? "bg-[var(--color-accent-quiz)]/50" : "bg-blue-400";
          } else {
            cls += "bg-[var(--color-border-default)]";
          }

          return (
            <div
              key={i}
              className={cls}
              onClick={() => onSegmentClick(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && onSegmentClick(i)}
              aria-label={`Exercice ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// ── Results screen ────────────────────────────────────────────────────────────

function ResultsScreen({
  scores,
  exercises,
  accent,
}: {
  scores: Array<{ points: number; maxPoints: number } | null>;
  exercises: ExerciseMeta[];
  accent: string;
}) {
  const totalPoints = scores.reduce((s, sc) => s + (sc?.points ?? 0), 0);
  const maxPoints = exercises.reduce((s, e) => s + e.maxPoints, 0);
  const grade = linearSwissGrade(totalPoints, maxPoints);
  const passed = grade >= 4;

  return (
    <div className="space-y-4">
      <EvalResultsSummary
        accent={accent}
        points={totalPoints}
        maxPoints={maxPoints}
        grade={grade}
        passed={passed}
      />
      <EvalResultsHint />
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

type TestPhase = "idle" | "running" | "results";

type PlacementIntroText = {
  subject: string;
  title: string;
  info: string;
  exercisesLabel: string;
  coverage: string;
  minutesSuffix: string;
  validateLine: string;
  navigateLine: string;
  scoreMax: string;
  points: string;
  start: string;
};

const PLACEMENT_INTRO_TEXTS: Record<"fr", PlacementIntroText> & Partial<Record<PivotCode, PlacementIntroText>> = {
  fr: {
    subject: "Mathématiques",
    title: "Test de placement",
    info: "Informations",
    exercisesLabel: "exercices",
    coverage: "couvrant tous les niveaux de CSC jusqu'à CAP",
    minutesSuffix: "pour compléter le test",
    validateLine: "Validez chaque exercice individuellement",
    navigateLine: "Vous pouvez naviguez librement en cliquant sur la barre de progression en haut.",
    scoreMax: "Score maximum :",
    points: "points",
    start: "Commencer le test",
  },
  en: {
    subject: "Mathematics",
    title: "Placement test",
    info: "Information",
    exercisesLabel: "exercises",
    coverage: "covering all levels from CSC up to CAP",
    minutesSuffix: "to complete the test",
    validateLine: "Submit each exercise individually",
    navigateLine: "You can move freely by clicking the progress bar at the top.",
    scoreMax: "Maximum score:",
    points: "points",
    start: "Start the test",
  },
  ar: {
    subject: "الرياضيات",
    title: "اختبار تحديد المستوى",
    info: "معلومات",
    exercisesLabel: "تمارين",
    coverage: "تغطي كل المستويات من CSC حتى CAP",
    minutesSuffix: "لإكمال الاختبار",
    validateLine: "ثبّت كل تمرين على حدة",
    navigateLine: "يمكنك التنقل بحرية بالضغط على شريط التقدم في الأعلى.",
    scoreMax: "النتيجة القصوى:",
    points: "نقاط",
    start: "بدء الاختبار",
  },
  fa: {
    subject: "ریاضی",
    title: "آزمون تعیین سطح",
    info: "اطلاعات",
    exercisesLabel: "تمرین",
    coverage: "همه سطح‌ها را از CSC تا CAP پوشش می‌دهد",
    minutesSuffix: "برای کامل کردن آزمون",
    validateLine: "هر تمرین را جداگانه ثبت کنید",
    navigateLine: "می‌توانید با کلیک روی نوار پیشرفت در بالا آزادانه جابه‌جا شوید.",
    scoreMax: "حداکثر امتیاز:",
    points: "امتیاز",
    start: "شروع آزمون",
  },
  pt: {
    subject: "Matemática",
    title: "Teste de nível",
    info: "Informações",
    exercisesLabel: "exercícios",
    coverage: "abrangendo todos os níveis de CSC até CAP",
    minutesSuffix: "para completar o teste",
    validateLine: "Valide cada exercício individualmente",
    navigateLine: "Pode navegar livremente clicando na barra de progresso no topo.",
    scoreMax: "Pontuação máxima:",
    points: "pontos",
    start: "Começar o teste",
  },
  so: {
    subject: "Xisaab",
    title: "Imtixaanka heerka",
    info: "Macluumaad",
    exercisesLabel: "layli",
    coverage: "oo daboolaya dhammaan heerarka CSC ilaa CAP",
    minutesSuffix: "si aad u dhammaystirto imtixaanka",
    validateLine: "Layli kasta gooni u xaqiiji",
    navigateLine: "Waxaad si xor ah ugu gudbi kartaa adigoo gujinaya barta horumarka ee kore.",
    scoreMax: "Dhibcaha ugu badan:",
    points: "dhibcood",
    start: "Bilow imtixaanka",
  },
  ti: {
    subject: "ሒሳብ",
    title: "ናይ ደረጃ ፈተና",
    info: "ሓበሬታ",
    exercisesLabel: "ልምምዳት",
    coverage: "ካብ CSC ክሳብ CAP ዘለዉ ኩሎም ደረጃታት ዝሽፍን",
    minutesSuffix: "ነቲ ፈተና ንምዝዛም",
    validateLine: "ነፍሲ ወከፍ ልምምድ በበይኑ ኣረጋግጹ",
    navigateLine: "ኣብ ላዕሊ ዘሎ መስመር ምዕባለ ብምጥዋቕ ብናጽነት ክትንቀሳቐሱ ትኽእሉ።",
    scoreMax: "ዝለዓለ ነጥቢ:",
    points: "ነጥቢ",
    start: "ፈተና ጀምር",
  },
  tr: {
    subject: "Matematik",
    title: "Seviye belirleme testi",
    info: "Bilgiler",
    exercisesLabel: "alıştırma",
    coverage: "CSC'den CAP'a kadar tüm seviyeleri kapsar",
    minutesSuffix: "testi tamamlamak için",
    validateLine: "Her alıştırmayı ayrı ayrı onaylayın",
    navigateLine: "Üstteki ilerleme çubuğuna tıklayarak serbestçe gezinebilirsiniz.",
    scoreMax: "Maksimum puan:",
    points: "puan",
    start: "Teste başla",
  },
  ps: {
    subject: "ریاضي",
    title: "د کچې ټاکلو ازموینه",
    info: "معلومات",
    exercisesLabel: "تمرینونه",
    coverage: "د CSC نه تر CAP پورې ټولې کچې پوښي",
    minutesSuffix: "د ازموینې د بشپړولو لپاره",
    validateLine: "هر تمرین جلا جلا تایید کړئ",
    navigateLine: "تاسو کولی شئ په پورته د پرمختګ پر پټه کلیک کولو سره ازاد حرکت وکړئ.",
    scoreMax: "تر ټولو لوړه نمره:",
    points: "نمرې",
    start: "ازموینه پیل کړئ",
  },
  uk: {
    subject: "Математика",
    title: "Тест визначення рівня",
    info: "Інформація",
    exercisesLabel: "вправ",
    coverage: "охоплює всі рівні від CSC до CAP",
    minutesSuffix: "щоб завершити тест",
    validateLine: "Підтверджуйте кожну вправу окремо",
    navigateLine: "Ви можете вільно переходити, натискаючи на панель прогресу вгорі.",
    scoreMax: "Максимальний бал:",
    points: "балів",
    start: "Почати тест",
  },
};

export function PlacementTestClient({
  mode = "module",
  trainingLevel,
}: {
  mode?: "module" | "placement";
  trainingLevel?: MathTrainingLevel;
}) {
  const router = useRouter();
  const guardedNavigate = useGuardedNavigate();
  const isTraining = Boolean(trainingLevel);
  const exercises = useMemo(
    () => (trainingLevel ? getMathExercisesForLevel(trainingLevel) : PLACEMENT_MATH_EXERCISES),
    [trainingLevel],
  );
  const exerciseCount = exercises.length;
  const maxPointsTotal = useMemo(
    () => exercises.reduce((s, e) => s + e.maxPoints, 0),
    [exercises],
  );

  const initialTrainingDraft = (() => {
    if (!trainingLevel || typeof window === "undefined") return null;
    const draft = loadMathTrainingDraft();
    return draft?.level === trainingLevel && draft.phase === "running" ? draft : null;
  })();

  const accent = mode === "placement" ? "var(--color-accent-quiz)" : "var(--color-accent-alg)";
  const pivot = usePivotLang();
  const { showPivot } = useTranslation();
  const introText = (showPivot ? PLACEMENT_INTRO_TEXTS[pivot] : undefined) ?? PLACEMENT_INTRO_TEXTS.fr;
  const introLang = showPivot ? pivot : "fr";
  const introDir = showPivot && (pivot === "ar" || pivot === "fa" || pivot === "ps") ? "rtl" : "ltr";
  const [phase, setPhase] = useState<TestPhase>(() => (initialTrainingDraft ? "running" : "idle"));
  const [currentIdx, setCurrentIdx] = useState(() => initialTrainingDraft?.currentIdx ?? 0);
  const [timeLeft, setTimeLeft] = useState(() => initialTrainingDraft?.timeLeft ?? TIMER_SECONDS);
  const [validated, setValidated] = useState<boolean[]>(
    () => initialTrainingDraft?.validated ?? Array(exerciseCount).fill(false),
  );
  const [scores, setScores] = useState<Array<{ points: number; maxPoints: number } | null>>(
    () => initialTrainingDraft?.scores ?? Array(exerciseCount).fill(null),
  );
  const [validateTriggers, setValidateTriggers] = useState<number[]>(
    () => initialTrainingDraft?.validateTriggers ?? Array(exerciseCount).fill(0),
  );
  const [hasInput, _setHasInput] = useState<boolean[]>(() => Array(exerciseCount).fill(false));
  const [sessionKey, setSessionKey] = useState(() => initialTrainingDraft?.sessionKey ?? 1);
  const [trainingSessionId] = useState(
    () => initialTrainingDraft?.sessionId ?? createMathTrainingSessionId(),
  );
  const [skipConfirmOpen, setSkipConfirmOpen] = useState(false);
  const [skipAccepted, setSkipAccepted] = useState(false);
  const [skipRequested, setSkipRequested] = useState(false);
  const [savedResult, setSavedResult] = useState(false);
  const [selectedResultIdx, setSelectedResultIdx] = useState(0);
  const exerciseKeys = useMemo(() => exercises.map((_, i) => sessionKey * 100 + i), [exercises, sessionKey]);

  useRegisterEvalGuard(mode === "placement" && phase === "running");

  const persistTrainingDraft = useCallback((patch: {
    currentIdx?: number;
    timeLeft?: number;
    validated?: boolean[];
    scores?: Array<{ points: number; maxPoints: number } | null>;
    validateTriggers?: number[];
    sessionKey?: number;
  }) => {
    if (!isTraining || !trainingLevel) return;
    saveMathTrainingDraft({
      sessionId: trainingSessionId,
      level: trainingLevel,
      phase: "running",
      currentIdx: patch.currentIdx ?? currentIdx,
      timeLeft: patch.timeLeft ?? timeLeft,
      validated: patch.validated ?? validated,
      scores: patch.scores ?? scores,
      validateTriggers: patch.validateTriggers ?? validateTriggers,
      sessionKey: patch.sessionKey ?? sessionKey,
      updatedAt: new Date().toISOString(),
    });
  }, [currentIdx, isTraining, scores, sessionKey, timeLeft, trainingLevel, trainingSessionId, validateTriggers, validated]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Timer ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    if (phase !== "running") return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) return 0;
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [phase]);

  // Auto-validate all when timer hits 0
  useEffect(() => {
    if (phase !== "running" || timeLeft > 0) return;
    // Trigger validation for all non-validated exercises
    setValidateTriggers(prev => prev.map((t, i) => (!validated[i] ? t + 1 : t)));
  }, [timeLeft, phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Navigation helpers ─────────────────────────────────────────────────────

  function findOpenExercise(from: number, direction: 1 | -1, list = validated): number {
    if (list.every(Boolean)) return -1;
    let idx = (from + direction + exerciseCount) % exerciseCount;
    while (idx !== from) {
      if (!list[idx]) return idx;
      idx = (idx + direction + exerciseCount) % exerciseCount;
    }
    if (!list[from]) return from;
    return -1;
  }

  const goTo = useCallback((idx: number) => {
    setCurrentIdx(idx);
  }, []);

  function goNext() {
    const next = findOpenExercise(currentIdx, 1);
    if (next >= 0) goTo(next);
  }

  function goPrev() {
    const prev = findOpenExercise(currentIdx, -1);
    if (prev >= 0) goTo(prev);
  }

  function handleSegmentClick(idx: number) {
    if (validated[idx]) return;
    setCurrentIdx(idx);
  }

  // ── Validation ─────────────────────────────────────────────────────────────

  function triggerValidate() {
    setValidateTriggers(prev => {
      const next = [...prev];
      next[currentIdx] = (next[currentIdx] ?? 0) + 1;
      return next;
    });
  }

  function handleValidated(exIdx: number, points: number, maxPoints: number) {
    setValidated(prev => {
      const n = [...prev];
      n[exIdx] = true;
      const next = findOpenExercise(exIdx, 1, n);
      const prevOpen = findOpenExercise(exIdx, -1, n);
      if (next >= 0) setCurrentIdx(next);
      else if (prevOpen >= 0) setCurrentIdx(prevOpen);
      else setPhase("results");
      persistTrainingDraft({ validated: n, currentIdx: next >= 0 ? next : prevOpen >= 0 ? prevOpen : exIdx });
      return n;
    });
    setScores(prev => {
      const n = [...prev];
      n[exIdx] = { points, maxPoints };
      persistTrainingDraft({ scores: n });
      return n;
    });
  }

  // Check if all exercises validated → show results
  const allValidated = useMemo(() => validated.every(v => v), [validated]);
  const totalPoints = useMemo(() => scores.reduce((s, sc) => s + (sc?.points ?? 0), 0), [scores]);
  useEffect(() => {
    if (phase === "running" && allValidated) {
      setPhase("results");
    }
  }, [allValidated, phase]);

  useEffect(() => {
    if (!skipRequested || phase !== "running") return;
    setValidateTriggers(prev => prev.map((t, i) => (!validated[i] ? t + 1 : t)));
    setSkipRequested(false);
  }, [skipRequested, phase, validated]);

  // Save result to localStorage history when results screen appears (placement test only)
  useEffect(() => {
    if (phase !== "results" || isTraining) {
      if (phase === "results" && isTraining) saveMathTrainingDraft(null);
      return;
    }
    const pts = scores.reduce((s, sc) => s + (sc?.points ?? 0), 0);
    const maxPts = exercises.reduce((s, e) => s + e.maxPoints, 0);
    const percent = maxPts > 0 ? Math.round((pts / maxPts) * 100) : 0;
    const attempt = {
      date: new Date().toISOString(),
      points: pts,
      maxPoints: maxPts,
      percent,
      scores: exercises.map((ex, i) => ({
        exerciseId: ex.id,
        label: ex.label,
        points: scores[i]?.points ?? 0,
        maxPoints: ex.maxPoints,
      })),
    };
    try {
      saveMathAttempt(attempt);
    } catch {}
    if (!savedResult) {
      setSavedResult(true);
      savePlacementTestResultAction(attempt);
      void savePlacementToCloudAction({
        mathHistory: loadMathHistory(),
        frenchSessions: loadFrenchSessions(),
        totalHistory: loadTotalHistory(),
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, isTraining]);

  function startTest() {
    if (isTraining) saveMathTrainingDraft(null);
    const nextSessionKey = sessionKey + 1;
    setSessionKey(nextSessionKey);
    const emptyValidated = Array(exerciseCount).fill(false);
    const emptyScores = Array(exerciseCount).fill(null);
    const emptyTriggers = Array(exerciseCount).fill(0);
    setValidated(emptyValidated);
    setScores(emptyScores);
    setValidateTriggers(emptyTriggers);
    setCurrentIdx(0);
    setSelectedResultIdx(0);
    setTimeLeft(TIMER_SECONDS);
    setSavedResult(false);
    setPhase("running");
    if (isTraining) {
      saveMathTrainingDraft({
        sessionId: trainingSessionId,
        level: trainingLevel!,
        phase: "running",
        currentIdx: 0,
        timeLeft: TIMER_SECONDS,
        validated: emptyValidated,
        scores: emptyScores,
        validateTriggers: emptyTriggers,
        sessionKey: nextSessionKey,
        updatedAt: new Date().toISOString(),
      });
    }
  }

  function confirmSkipAll() {
    setSkipConfirmOpen(false);
    setSkipAccepted(false);
    setSkipRequested(true);
  }

  // ── Start screen ───────────────────────────────────────────────────────────

  if (phase === "idle") {
    return (
      <div className="placement-test-font app-shell flex-1 py-8 pb-32 lg:pb-28">
        <div className="space-y-6">
          {mode === "placement" ? (
            <PlacementPageHeader
              label={introText.subject}
              title={isTraining && trainingLevel ? MATH_TRAINING_LEVEL_LABELS[trainingLevel] : introText.title}
              subtitle={isTraining ? "Les résultats ne comptent pas pour votre score de placement." : undefined}
              backHref="/placement"
            />
          ) : (
          <header className="space-y-2" lang={introLang} dir={introDir}>
            <p className="text-xs font-medium uppercase tracking-wide" style={{ color: accent }}>{introText.subject}</p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => router.back()}
                aria-label="Retour"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white transition-opacity hover:opacity-80"
                style={{ background: accent }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">{introText.title}</h1>
            </div>
          </header>
          )}

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5 space-y-4" lang={introLang} dir={introDir}>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">{introText.info}</p>
              <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                {(isTraining ? [
                  <><strong className="text-[var(--color-text-primary)]">{exerciseCount} {introText.exercisesLabel}</strong> pour ce niveau</>,
                  introText.validateLine,
                  introText.navigateLine,
                  <>{introText.scoreMax} <strong className="text-[var(--color-text-primary)]">{maxPointsTotal} {introText.points}</strong></>,
                  "Cet entraînement ne compte pas pour le total de placement.",
                ] : [
                  <><strong className="text-[var(--color-text-primary)]">{exerciseCount} {introText.exercisesLabel}</strong> {introText.coverage}</>,
                  <><strong className="text-[var(--color-text-primary)]">90 minutes</strong> {introText.minutesSuffix}</>,
                  introText.validateLine,
                  introText.navigateLine,
                  <>{introText.scoreMax} <strong className="text-[var(--color-text-primary)]">{PLACEMENT_MATH_TOTAL_POINTS} {introText.points}</strong></>,
                ]).map((content, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: accent }} />
                  <span>{content}</span>
                </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={startTest}
            className="w-full rounded-[var(--radius-lg)] py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
            style={{ background: accent }}
          >
            {isTraining ? "Commencer l'entraînement" : introText.start}
          </button>

        </div>
      </div>
    );
  }

  // ── Results screen ─────────────────────────────────────────────────────────

  if (phase === "results" && timerRef.current) clearInterval(timerRef.current);

  // ── Running phase ──────────────────────────────────────────────────────────

  const ex = exercises[currentIdx]!;
  const isCurrentValidated = validated[currentIdx] ?? false;
  const previousOpenIdx = findOpenExercise(currentIdx, -1);
  const nextOpenIdx = findOpenExercise(currentIdx, 1);
  const displayExerciseIdx = phase === "results" ? selectedResultIdx : currentIdx;

  return (
    <div className={`placement-test-font app-shell flex-1 ${phase === "results" ? "py-8 pb-32" : "py-6 pb-40"}${mode === "placement" ? " placement-tcm" : ""}`}>
      {phase === "results" ? (
        <ResultsScreen
          scores={scores}
          exercises={exercises}
          accent={accent}
        />
      ) : (
      <>
      {/* Page header */}
      <div className="mb-4 flex items-center gap-2">
        {mode === "placement" ? (
          <PlacementBackButton href="/placement" />
        ) : (
        <button
          type="button"
          onClick={() => guardedNavigate(() => setPhase("idle"))}
          aria-label="Retour"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white transition-opacity hover:opacity-80"
          style={{ background: accent }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        )}
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
          {isTraining && trainingLevel ? MATH_TRAINING_LEVEL_LABELS[trainingLevel] : "Test de placement"}
        </h1>
        <button
          type="button"
          onClick={() => setSkipConfirmOpen(true)}
          className="ml-auto rounded-[var(--radius-lg)] px-3 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: accent }}
        >
          Skip
        </button>
      </div>

      {skipConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-[var(--radius-lg)] bg-[var(--color-bg-primary)] p-5 shadow-xl">
            <h2 className="text-base font-bold text-[var(--color-text-primary)]">Passer directement aux résultats</h2>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              Ce bouton valide tous les exercices immédiatement, sans répondre aux questions, puis affiche la page de résultats.
            </p>
            <label className="mt-4 flex items-start gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" checked={skipAccepted} onChange={e => setSkipAccepted(e.target.checked)} className="mt-1" />
              <span>Je confirme que je veux valider l&apos;entièreté du test maintenant.</span>
            </label>
            <div className="mt-5 flex justify-end gap-2">
              <button type="button" onClick={() => setSkipConfirmOpen(false)} className="rounded-lg border border-[var(--color-border-default)] px-4 py-2 text-sm font-semibold text-[var(--color-text-secondary)]">Annuler</button>
              <button type="button" disabled={!skipAccepted} onClick={confirmSkipAll} className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-bold text-white disabled:opacity-40">Valider tout</button>
            </div>
          </div>
        </div>
      )}

      {/* Progress bar */}
      <div data-no-print>
        <PlacementProgressBar
          current={currentIdx}
          total={exerciseCount}
          timeLeft={timeLeft}
          validated={validated}
          hasInput={hasInput}
          onSegmentClick={handleSegmentClick}
          totalPoints={totalPoints}
          maxPoints={maxPointsTotal}
          placement={mode === "placement"}
        />
      </div>

      {/* Exercise header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold" style={{ color: accent }}>Exercice {ex.id}</h2>
        <span className="text-xs text-[var(--color-text-secondary)]">{ex.maxPoints} pt{ex.maxPoints > 1 ? "s" : ""}</span>
      </div>
      </>
      )}

      <div className={phase === "results" ? "mt-2 space-y-2" : ""}>
      {exercises.map((exercise, i) => {
        const Comp = exercise.component;
        const pts = scores[i]?.points ?? 0;
        const max = exercise.maxPoints;
        const isSelected = i === selectedResultIdx;
        return (
          <div
            key={exercise.id}
            className={phase === "results" ? "space-y-2" : i !== displayExerciseIdx ? "hidden" : ""}
          >
            {phase === "results" && (
              <EvalExerciseResultButton
                index={i}
                correct={pts}
                total={max}
                accent={accent}
                isSelected={isSelected}
                onToggle={() => setSelectedResultIdx(i)}
              />
            )}
        <EvalExerciseResultDetail hidden={phase === "results" && !isSelected} hideTitle={phase === "results"}>
              <Comp
                exerciseKey={exerciseKeys[i]!}
                validated={phase === "results" || (validated[i] ?? false)}
                onValidated={(p, m) => handleValidated(i, p, m)}
                validateTrigger={validateTriggers[i] ?? 0}
              />
            </EvalExerciseResultDetail>
          </div>
        );
      })}
      </div>

      {phase === "results" && (
        <>
        {isTraining && (
          <p className="text-xs text-[var(--color-text-secondary)]">
            Cet entraînement ne compte pas pour votre score de placement.
          </p>
        )}
        <button
          type="button"
          onClick={() => router.push(mode === "placement" ? "/placement" : "/mathematiques")}
          className="mt-6 w-full rounded-[var(--radius-lg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ background: accent }}
        >
          Terminer
        </button>
        </>
      )}

      {/* Navigation bar (fixed bottom) — picked up by MainNav */}
      {phase !== "results" && (
      <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="app-shell-bar flex items-center justify-between py-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={previousOpenIdx < 0}
              data-nav-action="back"
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity disabled:opacity-30"
            >
              ← Précédent
            </button>

            {!isCurrentValidated ? (
              <button
                type="button"
                onClick={triggerValidate}
                data-nav-action="validate"
                aria-label="Valider"
                className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90"
                style={{ background: accent }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5"/></svg>
              </button>
            ) : (
              <span aria-hidden />
            )}

            <button
              type="button"
              onClick={goNext}
              disabled={nextOpenIdx < 0}
              data-nav-action="next"
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
              style={{ background: accent }}
            >
              Suivant →
            </button>
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>
      )}
    </div>
  );
}
