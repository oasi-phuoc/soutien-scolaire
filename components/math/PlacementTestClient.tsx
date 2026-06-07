"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { savePlacementTestResultAction } from "@/app/actions/progress";
import { useTranslation } from "@/components/TranslationProvider";
import { usePivotLang } from "@/components/math/usePivotLang";
import type { PivotCode } from "@/lib/pivot-langs";
import {
  Exercise1,
  Exercise2,
  Exercise3,
  Exercise4,
  Exercise5,
  Exercise6,
  Exercise8,
  Exercise9,
  Exercise10,
  Exercise11,
  Exercise12,
  Exercise13,
  Exercise14,
  Exercise15,
} from "@/components/math/placement/PlacementExercises1to15";
import type { PlacementExerciseProps } from "@/components/math/placement/PlacementExercises1to15";
import {
  Exercise16,
  Exercise17,
  Exercise18,
  Exercise19,
  Exercise20,
  Exercise21,
  Exercise22,
  ExerciseFracRead,
  Exercise23,
  Exercise24,
  Exercise25,
  Exercise26,
  Exercise27,
} from "@/components/math/placement/PlacementExercises16to27";
import {
  Exercise28,
  Exercise29,
  Exercise30,
  Exercise31,
  Exercise32,
  Exercise33,
  Exercise34,
  Exercise35,
  Exercise36,
  Exercise37,
  Exercise38,
} from "@/components/math/placement/PlacementExercises28to38";

// ── Exercise registry ─────────────────────────────────────────────────────────

interface ExerciseMeta {
  id: number;
  label: string;
  maxPoints: number;
  component: React.ComponentType<PlacementExerciseProps>;
}

const EXERCISES: ExerciseMeta[] = [
  { id: 1, label: "Compter les formes", maxPoints: 2, component: Exercise1 },
  { id: 2, label: "Comparer (11–99)", maxPoints: 2, component: Exercise2 },
  { id: 3, label: "Suites numériques", maxPoints: 2, component: Exercise3 },
  { id: 4, label: "Additions et soustractions", maxPoints: 2, component: Exercise4 },
  { id: 5, label: "Opérande manquant", maxPoints: 4, component: Exercise5 },
  { id: 6, label: "Calcul en colonnes (99–999)", maxPoints: 2, component: Exercise6 },
  { id: 7, label: "Dizaines et unités", maxPoints: 2, component: Exercise8 },
  { id: 8, label: "Comparer (101–999)", maxPoints: 2, component: Exercise9 },
  { id: 9, label: "Grandes suites", maxPoints: 2, component: Exercise10 },
  { id: 10, label: "Calcul mixte", maxPoints: 3, component: Exercise11 },
  { id: 11, label: "Décomposition", maxPoints: 2, component: Exercise12 },
  { id: 12, label: "Colonnes (1000–9999)", maxPoints: 2, component: Exercise13 },
  { id: 13, label: "Multiplication en colonnes", maxPoints: 2, component: Exercise14 },
  { id: 14, label: "Division en colonnes", maxPoints: 2, component: Exercise15 },
  { id: 15, label: "Rectangle", maxPoints: 2, component: Exercise16 },
  { id: 16, label: "Suites (grands nombres)", maxPoints: 3, component: Exercise17 },
  { id: 17, label: "Trier des nombres", maxPoints: 2, component: Exercise18 },
  { id: 18, label: "Additions et soustrations décimales", maxPoints: 4, component: Exercise19 },
  { id: 19, label: "Multiplication décimale", maxPoints: 4, component: Exercise20 },
  { id: 20, label: "Division décimale", maxPoints: 4, component: Exercise21 },
  { id: 21, label: "Colorier les fractions", maxPoints: 2, component: Exercise22 },
  { id: 22, label: "Lire les fractions", maxPoints: 2, component: ExerciseFracRead },
  { id: 23, label: "Conversions de longueur", maxPoints: 4, component: Exercise23 },
  { id: 24, label: "Calculs décimaux", maxPoints: 4, component: Exercise24 },
  { id: 25, label: "Parallélogramme", maxPoints: 2, component: Exercise25 },
  { id: 26, label: "Triangle rectangle", maxPoints: 2, component: Exercise26 },
  { id: 27, label: "Losange", maxPoints: 2, component: Exercise27 },
  { id: 28, label: "Puissances et racines", maxPoints: 4, component: Exercise28 },
  { id: 29, label: "Priorité des opérations", maxPoints: 2, component: Exercise29 },
  { id: 30, label: "Nombres relatifs", maxPoints: 4, component: Exercise30 },
  { id: 31, label: "Fractions", maxPoints: 4, component: Exercise31 },
  { id: 32, label: "Pourcentages et règle de trois", maxPoints: 2, component: Exercise32 },
  { id: 33, label: "Simplification algébrique", maxPoints: 4, component: Exercise33 },
  { id: 34, label: "Évaluer des expressions", maxPoints: 2, component: Exercise34 },
  { id: 35, label: "Résoudre des équations", maxPoints: 2, component: Exercise35 },
  { id: 36, label: "Conversions d'unités", maxPoints: 4, component: Exercise36 },
  { id: 37, label: "Trapèze", maxPoints: 2, component: Exercise37 },
  { id: 38, label: "Cercle", maxPoints: 2, component: Exercise38 },
];

const TOTAL_EXERCISES = EXERCISES.length;
const TOTAL_MAX_POINTS = EXERCISES.reduce((s, e) => s + e.maxPoints, 0);
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
}: PlacementProgressBarProps) {
  const remaining = validated.filter(v => !v).length;
  return (
    <div className="mb-5">
      <div className="mb-1.5 flex items-center justify-between">
        <p className="text-xs font-bold tabular-nums text-amber-600">{totalPoints} / {maxPoints} pts</p>
        <div className="flex items-center gap-3">
          <span className={`rounded-full px-2 py-0.5 text-xs font-bold tabular-nums ${
            timeLeft <= 300
              ? "bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400"
              : "bg-amber-100 text-amber-700 dark:bg-amber-950/20 dark:text-amber-400"
          }`}>
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
            cls += "bg-amber-500";
          } else if (hasTyped) {
            cls += "bg-blue-400";
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

interface ResultsScreenProps {
  scores: Array<{ points: number; maxPoints: number } | null>;
  exercises: ExerciseMeta[];
}

function ResultsScreen({ scores, exercises }: ResultsScreenProps) {
  const totalPoints = scores.reduce((s, sc) => s + (sc?.points ?? 0), 0);
  const maxPoints = exercises.reduce((s, e) => s + e.maxPoints, 0);
  const pct = maxPoints > 0 ? Math.round((totalPoints / maxPoints) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="text-center space-y-1">
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600">Résultats</p>
        <p className="text-3xl font-bold text-[var(--color-text-primary)]">
          {totalPoints} <span className="text-xl text-[var(--color-text-secondary)]">/ {maxPoints}</span>
        </p>
      </div>

      {/* Score bar */}
      <div className="h-3 rounded-full bg-[var(--color-bg-secondary)] overflow-hidden">
        <div
          className="h-full rounded-full bg-amber-500 transition-all duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="text-sm text-[var(--color-text-secondary)]">
        Cliquez sur un exercice dans le détail des points pour afficher l&apos;énoncé, vos réponses et les corrections.
      </p>

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

export function PlacementTestClient() {
  const router = useRouter();
  const pivot = usePivotLang();
  const { showPivot } = useTranslation();
  const introText = (showPivot ? PLACEMENT_INTRO_TEXTS[pivot] : undefined) ?? PLACEMENT_INTRO_TEXTS.fr;
  const introLang = showPivot ? pivot : "fr";
  const introDir = showPivot && (pivot === "ar" || pivot === "fa" || pivot === "ps") ? "rtl" : "ltr";
  const [phase, setPhase] = useState<TestPhase>("idle");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [validated, setValidated] = useState<boolean[]>(() => Array(TOTAL_EXERCISES).fill(false));
  const [scores, setScores] = useState<Array<{ points: number; maxPoints: number } | null>>(() => Array(TOTAL_EXERCISES).fill(null));
  const [validateTriggers, setValidateTriggers] = useState<number[]>(() => Array(TOTAL_EXERCISES).fill(0));
  const [hasInput, _setHasInput] = useState<boolean[]>(() => Array(TOTAL_EXERCISES).fill(false));
  const [sessionKey, setSessionKey] = useState(1);
  const [skipConfirmOpen, setSkipConfirmOpen] = useState(false);
  const [skipAccepted, setSkipAccepted] = useState(false);
  const [skipRequested, setSkipRequested] = useState(false);
  const [savedResult, setSavedResult] = useState(false);
  const [selectedResultIdx, setSelectedResultIdx] = useState(0);
  const exerciseKeys = useMemo(() => EXERCISES.map((_, i) => sessionKey * 100 + i), [sessionKey]);

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
    let idx = (from + direction + TOTAL_EXERCISES) % TOTAL_EXERCISES;
    while (idx !== from) {
      if (!list[idx]) return idx;
      idx = (idx + direction + TOTAL_EXERCISES) % TOTAL_EXERCISES;
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
      return n;
    });
    setScores(prev => { const n = [...prev]; n[exIdx] = { points, maxPoints }; return n; });
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

  // Save result to localStorage history when results screen appears
  useEffect(() => {
    if (phase !== "results") return;
    const pts = scores.reduce((s, sc) => s + (sc?.points ?? 0), 0);
    const maxPts = EXERCISES.reduce((s, e) => s + e.maxPoints, 0);
    const percent = maxPts > 0 ? Math.round((pts / maxPts) * 100) : 0;
    const attempt = {
      date: new Date().toISOString(),
      points: pts,
      maxPoints: maxPts,
      percent,
      scores: EXERCISES.map((ex, i) => ({
        exerciseId: ex.id,
        label: ex.label,
        points: scores[i]?.points ?? 0,
        maxPoints: ex.maxPoints,
      })),
    };
    try {
      const raw = localStorage.getItem("tp-math-history");
      const history: { date: string; points: number; maxPoints: number }[] = raw ? JSON.parse(raw) : [];
      history.push({ date: attempt.date.slice(0, 10), points: pts, maxPoints: maxPts });
      localStorage.setItem("tp-math-history", JSON.stringify(history.slice(-10)));
    } catch {}
    if (!savedResult) {
      setSavedResult(true);
      savePlacementTestResultAction(attempt);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  function startTest() {
    setSessionKey(k => k + 1);
    setValidated(Array(TOTAL_EXERCISES).fill(false));
    setScores(Array(TOTAL_EXERCISES).fill(null));
    setValidateTriggers(Array(TOTAL_EXERCISES).fill(0));
    setCurrentIdx(0);
    setSelectedResultIdx(0);
    setTimeLeft(TIMER_SECONDS);
    setSavedResult(false);
    setPhase("running");
  }

  function confirmSkipAll() {
    setSkipConfirmOpen(false);
    setSkipAccepted(false);
    setSessionKey(k => k + 1);
    setValidated(Array(TOTAL_EXERCISES).fill(false));
    setScores(Array(TOTAL_EXERCISES).fill(null));
    setValidateTriggers(Array(TOTAL_EXERCISES).fill(0));
    setCurrentIdx(0);
    setSelectedResultIdx(0);
    setTimeLeft(TIMER_SECONDS);
    setSavedResult(false);
    setPhase("running");
    setSkipRequested(true);
  }

  // ── Start screen ───────────────────────────────────────────────────────────

  if (phase === "idle") {
    return (
      <div className="placement-test-font mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
        <div className="space-y-6">
          <header className="space-y-2" lang={introLang} dir={introDir}>
            <p className="text-xs font-medium uppercase tracking-wide text-amber-600">{introText.subject}</p>
            <div className="flex items-center gap-2">
              <button
                key="result-row"
                type="button"
                onClick={() => router.back()}
                aria-label="Retour"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-80"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">{introText.title}</h1>
            </div>
          </header>

          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-5 space-y-4" lang={introLang} dir={introDir}>
            <div className="space-y-2">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">{introText.info}</p>
              <ul className="space-y-1.5 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span><strong className="text-[var(--color-text-primary)]">{TOTAL_EXERCISES} {introText.exercisesLabel}</strong> {introText.coverage}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span><strong className="text-[var(--color-text-primary)]">90 minutes</strong> {introText.minutesSuffix}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{introText.validateLine}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{introText.navigateLine}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                  <span>{introText.scoreMax} <strong className="text-[var(--color-text-primary)]">{TOTAL_MAX_POINTS} {introText.points}</strong></span>
                </li>
              </ul>
            </div>
          </div>

          <button
            type="button"
            onClick={startTest}
            className="w-full rounded-[var(--radius-lg)] bg-amber-500 py-3.5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80"
          >
            {introText.start}
          </button>
        </div>
      </div>
    );
  }

  // ── Results screen ─────────────────────────────────────────────────────────

  if (phase === "results" && timerRef.current) clearInterval(timerRef.current);

  // ── Running phase ──────────────────────────────────────────────────────────

  const ex = EXERCISES[currentIdx]!;
  const isCurrentValidated = validated[currentIdx] ?? false;
  const previousOpenIdx = findOpenExercise(currentIdx, -1);
  const nextOpenIdx = findOpenExercise(currentIdx, 1);
  const displayExerciseIdx = phase === "results" ? selectedResultIdx : currentIdx;

  return (
    <div className={`placement-test-font mx-auto w-full max-w-xl flex-1 px-4 ${phase === "results" ? "py-8 pb-32" : "py-6 pb-40"}`}>
      {phase === "results" ? (
        <ResultsScreen
          scores={scores}
          exercises={EXERCISES}
        />
      ) : (
      <>
      {/* Page header */}
      <div className="mb-4 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setPhase("idle")}
          aria-label="Retour"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-alg)] text-white transition-opacity hover:opacity-80"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Test de placement</h1>
        <button
          type="button"
          onClick={() => setSkipConfirmOpen(true)}
          className="ml-auto rounded-[var(--radius-lg)] bg-amber-500 px-3 py-2 text-xs font-bold text-white transition-opacity hover:opacity-90"
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
      <PlacementProgressBar
        current={currentIdx}
        total={TOTAL_EXERCISES}
        timeLeft={timeLeft}
        validated={validated}
        hasInput={hasInput}
        onSegmentClick={handleSegmentClick}
        totalPoints={totalPoints}
        maxPoints={TOTAL_MAX_POINTS}
      />

      {/* Exercise header */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {ex.id}</h2>
        <span className="text-xs text-[var(--color-text-secondary)]">{ex.maxPoints} pt{ex.maxPoints > 1 ? "s" : ""}</span>
      </div>
      </>
      )}

      {phase === "results" && (
        <div className="mt-6 space-y-3">
          <h3 className="text-sm font-bold text-[var(--color-text-primary)]">Détail des points par exercice</h3>
        </div>
      )}

      {/* All exercises stay mounted so the results screen can reuse the original answers. */}
      <div className={phase === "results" ? "mt-2 space-y-2" : ""}>
      {EXERCISES.map((exercise, i) => {
        const Comp = exercise.component;
        const sc = scores[i];
        const pts = sc?.points ?? 0;
        const max = exercise.maxPoints;
        const isSelected = i === selectedResultIdx;
        return (
          <div key={exercise.id} className={phase === "results" ? "space-y-2" : (i !== displayExerciseIdx ? "hidden" : "")}>
            {phase === "results" && (
              <button
                type="button"
                onClick={() => setSelectedResultIdx(i)}
                className={`flex w-full items-center gap-3 rounded-lg border px-3 py-2 text-left transition-colors ${
                  isSelected
                    ? "border-[var(--color-accent-alg)] bg-[var(--color-accent-alg)]/10"
                    : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] hover:border-[var(--color-accent-alg)]/60"
                }`}
              >
                <span className="w-5 text-xs font-bold text-[var(--color-accent-alg)]">{exercise.id}</span>
                <span className="flex-1 truncate text-xs text-[var(--color-text-secondary)]">{exercise.label}</span>
                <span className="text-xs font-bold tabular-nums text-[var(--color-text-primary)]">{pts} / {max}</span>
              </button>
            )}
            <div key="exercise-panel" className={phase === "results" ? (isSelected ? "rounded-lg border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-4" : "hidden") : ""}>
              {phase === "results" && (
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-base font-bold text-[var(--color-accent-alg)]">Exercice {exercise.id}</h2>
                  <span className="text-xs text-[var(--color-text-secondary)]">{pts} / {max} pt{max > 1 ? "s" : ""}</span>
                </div>
              )}
              <Comp
                exerciseKey={exerciseKeys[i]!}
                validated={phase === "results"}
                onValidated={(pts, max) => handleValidated(i, pts, max)}
                validateTrigger={validateTriggers[i] ?? 0}
              />
            </div>
          </div>
        );
      })}
      </div>

      {phase === "results" && (
        <button
          type="button"
          onClick={() => router.push("/mathematiques")}
          className="mt-6 w-full rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
        >
          Retour aux modules
        </button>
      )}

      {/* Navigation bar (fixed bottom) */}
      {phase !== "results" && (
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={previousOpenIdx < 0}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M15 18l-6-6 6-6"/></svg>
              Retour
            </button>

            {!isCurrentValidated && (
              <button
                type="button"
                onClick={triggerValidate}
                aria-label="Valider"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-white transition-opacity hover:opacity-90 active:scale-90"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><path d="M20 6L9 17l-5-5"/></svg>
              </button>
            )}

            <button
              type="button"
              onClick={goNext}
              disabled={nextOpenIdx < 0}
              className="flex h-11 min-w-[5rem] items-center justify-center gap-1.5 rounded-[var(--radius-lg)] bg-[var(--color-accent-alg)] px-5 text-sm font-bold text-white transition-opacity hover:opacity-90 active:opacity-80 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Suivant
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
        <div style={{ height: 68 }} />
      </div>
      )}
    </div>
  );
}
