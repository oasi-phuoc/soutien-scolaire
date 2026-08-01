"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ceCoImageSource } from "@/lib/curriculum/word-image-resolver";
import { AppSelect } from "@/components/ui/AppSelect";
import {
  pickCoGroup,
  randomCoGroupInRange,
  type COAudioCategory,
  type COAudioGroup,
  type COAudioItem,
  type COLevel as COAudioLevel,
} from "@/lib/curriculum/content/communication/co-audio";
import { getCoPartQuestions, type COQuestionTask } from "@/lib/curriculum/content/communication/co-questions";
import { randomIndexOrder } from "@/lib/curriculum/content/communication/shuffle-qcm-choices";
import { CO_SCOLAIRE_MOYEN_QUESTIONS_PER_AUDIO } from "@/lib/curriculum/content/communication/co-questions-scolaire-moyen";
import { CO_SCOLAIRE_AVANCE_QUESTIONS_PER_AUDIO } from "@/lib/curriculum/content/communication/co-questions-scolaire-avance";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import type { PrintExercise } from "@/components/ui/PrintConfigSheet";
import { ExerciseConsigne } from "@/components/print/ExerciseConsigne";
import {
  PrintAudioQrRow,
  coAudioQrItems,
  type PrintAudioQrItem,
} from "@/components/print/PrintAudioQrRow";
import {
  CommunicationFinishButton,
  CommunicationIntroSection,
  CommunicationResultsExercise,
  CommunicationResultsSummary,
  EXPRESSION_TAB_HREF,
  formatEvalPoints,
  type IntroBullet,
  type IntroRow,
} from "@/components/communication/CommunicationEvalLayout";
import { EvalExerciseResultList, EvalResultsHint } from "@/components/ui/EvalResultsUI";
import { useRegisterEvalGuard, useGuardedNavigate } from "@/components/EvalNavGuard";
import { MediaPlayerBar } from "@/components/communication/MediaPlayerBar";
import { COTranscriptView } from "@/components/communication/COTranscriptView";
import { parseFillStem } from "@/lib/curriculum/content/communication/ce-co-question-filters";
import type { PlacementRunnerProps } from "@/lib/placement/runner-props";
import { pickIndex, PROGRESSIVE_SKILL_LEVELS } from "@/lib/placement/progressive-pick";

type COLevel = "base" | "moyen" | "avance";
type QuestionTask = COQuestionTask;
type COPart = {
  id: string;
  title: string;
  points: number;
  context: string;
  audioGroup: COAudioGroup;
  questions: QuestionTask[];
};

type AdvancedPartSpec = Omit<COPart, "audioGroup" | "questions"> & {
  category: COAudioCategory;
  activityMin: number;
  activityMax: number;
};
type Answers = Record<string, number | string | number[] | boolean[] | null>;

const ACCENT = "var(--color-accent-comm)";
const INVERSE = "var(--color-accent-comm-inverse, #f5a623)";
const TOTAL_SECONDS = 25 * 60;

const BASE_PART_INFO: Array<Omit<COPart, "audioGroup" | "questions">> = [
  { id: "message", title: "Comprendre un message", points: 4, context: "" },
  { id: "annonce", title: "Comprendre une annonce", points: 4, context: "Écoutez une annonce courte." },
  { id: "instruction", title: "Comprendre des instructions", points: 4, context: "Écoutez des consignes ou des informations pratiques." },
  { id: "conversation", title: "Comprendre des conversations", points: 8, context: "Écoutez 4 dialogues et associez chaque image au bon numéro (2 pts par dialogue)." },
  { id: "objet", title: "Identifier des objets", points: 5, context: "Écoutez et repérez les objets ou les informations importantes." },
];

const MEDIUM_PART_INFO: Array<Omit<COPart, "audioGroup" | "questions"> & { category: COAudioCategory }> = [
  { id: "message", category: "message", title: "Comprendre un message", points: 6, context: "" },
  { id: "annonce", category: "annonce", title: "Comprendre une annonce", points: 6, context: "Écoutez une série d'annonces courtes." },
  { id: "radio", category: "radio", title: "Comprendre des émissions de radio", points: 6, context: "Écoutez une ou plusieurs annonces radio." },
  { id: "conversation", category: "conversation", title: "Comprendre des conversations", points: 7, context: "Écoutez plusieurs échanges courts." },
];

const ADVANCED_PART_INFO: AdvancedPartSpec[] = [
  {
    id: "avance-conversation-1",
    category: "conversation",
    activityMin: 1,
    activityMax: 9,
    title: "Comprendre des conversations",
    points: 6,
    context: "Écoutez une conversation.",
  },
  {
    id: "avance-conversation-2",
    category: "conversation",
    activityMin: 10,
    activityMax: 18,
    title: "Comprendre des conversations",
    points: 6,
    context: "Écoutez une conversation.",
  },
  {
    id: "avance-radio-1",
    category: "radio",
    activityMin: 1,
    activityMax: 16,
    title: "Comprendre des émissions de radio",
    points: 6,
    context: "Écoutez une émission de radio.",
  },
  {
    id: "avance-radio-2",
    category: "radio",
    activityMin: 17,
    activityMax: 32,
    title: "Comprendre des émissions de radio",
    points: 7,
    context: "Écoutez une émission de radio.",
  },
];

function partInfoFor(level: COLevel): Array<Omit<COPart, "audioGroup" | "questions">> {
  if (level === "moyen") return MEDIUM_PART_INFO;
  if (level === "avance") return ADVANCED_PART_INFO;
  return BASE_PART_INFO;
}

function audioLevelFor(level: COLevel): COAudioLevel {
  if (level === "moyen") return "moyen";
  if (level === "avance") return "avance";
  return "base";
}

function makeBaseConversationPart(
  part: Omit<COPart, "audioGroup" | "questions">,
  seed: number,
): COPart {
  const audioGroup = pickCoGroup("base", "conversation", `${seed}-conversation`);
  const questions = getCoPartQuestions(audioGroup, 1, `${seed}-conv-${audioGroup.activity}`);
  return {
    ...part,
    audioGroup,
    questions,
  };
}

function partQuestionCount(
  level: COLevel,
  category: COAudioCategory,
  audioGroup: COAudioGroup,
  defaultPoints: number,
): number {
  if (audioGroup.source !== "scolaire") return defaultPoints;
  if (
    level === "moyen" &&
    (category === "message" || category === "annonce" || category === "radio")
  ) {
    return CO_SCOLAIRE_MOYEN_QUESTIONS_PER_AUDIO;
  }
  if (
    level === "avance" &&
    (category === "annonce" || category === "radio" || category === "conversation")
  ) {
    return CO_SCOLAIRE_AVANCE_QUESTIONS_PER_AUDIO;
  }
  return defaultPoints;
}

function makeParts(level: COLevel, seed: number): COPart[] {
  if (level === "avance") {
    return ADVANCED_PART_INFO.map((part) => {
      const audioGroup = randomCoGroupInRange(
        "avance",
        part.category,
        part.activityMin,
        part.activityMax,
        `${seed}-${part.id}`,
      );
      const questionCount = partQuestionCount("avance", part.category, audioGroup, part.points);
      return {
        id: part.id,
        title: part.title,
        points: questionCount,
        context: part.context,
        audioGroup,
        questions: getCoPartQuestions(audioGroup, questionCount, `${seed}-${part.id}`),
      };
    });
  }

  const audioLevel = audioLevelFor(level);
  return partInfoFor(level).map((part) => {
    if (level === "base" && part.id === "conversation") {
      return makeBaseConversationPart(part, seed);
    }
    const category = ("category" in part ? part.category : part.id) as COAudioCategory;
    const audioGroup = pickCoGroup(audioLevel, category, `${seed}-${part.id}`);
    const questionCount = partQuestionCount(level, category, audioGroup, part.points);
    return {
      ...part,
      points: questionCount,
      audioGroup,
      questions: getCoPartQuestions(audioGroup, questionCount, `${seed}-${part.id}`),
    };
  });
}

function makeProgressiveCoParts(seed: number): COPart[] {
  return PROGRESSIVE_SKILL_LEVELS.map((lvl, i) => {
    const pool = makeParts(lvl, seed + i * 997);
    return pool[pickIndex(pool.length, `${seed}-co-pick-${i}`)]!;
  });
}

function levelFromId(id: string): COLevel {
  if (id === "CO-2" || id === "comprehension-orale-2") return "moyen";
  if (id === "CO-3" || id === "comprehension-orale-3") return "avance";
  return "base";
}

function levelLabel(level: COLevel) {
  if (level === "moyen") return "Moyen";
  if (level === "avance") return "Avancé";
  return "Base";
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[.,!?;:'"()]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function answerOk(task: QuestionTask, answer: number | string | number[] | boolean[] | null) {
  if (task.kind === "conversation_image_grid") {
    return conversationImageGridFullyCorrect(task, answer);
  }
  if (task.kind === "match_grid") {
    if (!Array.isArray(answer) || answer.length !== 4) return false;
    return task.correctByColumn.every((row, col) => answer[col] === row);
  }
  if (task.kind === "object_pick") {
    return objectPickScore(task, answer) === task.cards.length;
  }
  if (task.kind === "image_match") {
    return imageMatchCount(task, answer) === task.dialogues;
  }
  if (task.kind === "choice") return answer === task.correct;
  const value = normalize(String(answer ?? ""));
  if (!value) return false;
  return [task.answer, ...(task.accept ?? [])].map(normalize).some((expected) => value.includes(expected));
}

function objectPickScore(
  task: Extract<QuestionTask, { kind: "object_pick" }>,
  answer: number | string | number[] | boolean[] | null,
) {
  if (!Array.isArray(answer) || answer.length !== task.cards.length) return 0;
  return task.cards.reduce((sum, card, index) => {
    const selected = answer[index] === true;
    return sum + (selected === card.heard ? 1 : 0);
  }, 0);
}

function matchGridScore(task: Extract<QuestionTask, { kind: "match_grid" }>, answer: number | string | number[] | boolean[] | null) {
  if (!Array.isArray(answer) || answer.length !== 4) return 0;
  return task.weights.reduce(
    (sum, weight, col) => sum + (answer[col] === task.correctByColumn[col] ? weight : 0),
    0,
  );
}

function imageMatchCount(
  task: Extract<QuestionTask, { kind: "image_match" }>,
  answer: number | string | number[] | boolean[] | null,
) {
  if (!Array.isArray(answer) || answer.length !== task.cards.length) return 0;
  let count = 0;
  for (let d = 1; d <= task.dialogues; d++) {
    const cardIndex = task.cards.findIndex((c) => c.correct === d);
    if (cardIndex >= 0 && answer[cardIndex] === d) count++;
  }
  return count;
}

function conversationImageGridScorableCorrectCount(
  task: Extract<QuestionTask, { kind: "conversation_image_grid" }>,
  answer: number | string | number[] | boolean[] | null,
) {
  if (!Array.isArray(answer) || answer.length !== 6) return 0;
  return task.correctByCard.reduce(
    (sum, expected, index) => sum + (expected > 0 && answer[index] === expected ? 1 : 0),
    0,
  );
}

function conversationImageGridFullyCorrect(
  task: Extract<QuestionTask, { kind: "conversation_image_grid" }>,
  answer: number | string | number[] | boolean[] | null,
) {
  if (!Array.isArray(answer) || answer.length !== 6) return false;
  return task.correctByCard.every((expected, index) => answer[index] === expected);
}

function conversationImageGridPoints(
  task: Extract<QuestionTask, { kind: "conversation_image_grid" }>,
  answer: number | string | number[] | boolean[] | null,
) {
  return conversationImageGridScorableCorrectCount(task, answer) * 2;
}

function scorePart(part: COPart, answers: Answers) {
  if (!part.questions.length) return 0;
  const isConversationImageGrid = part.questions.every((question) => question.kind === "conversation_image_grid");
  if (isConversationImageGrid) {
    return part.questions.reduce(
      (sum, question, index) =>
        sum +
        (question.kind === "conversation_image_grid"
          ? conversationImageGridPoints(question, answers[`${part.id}-${index}`] ?? null)
          : 0),
      0,
    );
  }
  const single = part.questions[0]!;
  const key = `${part.id}-0`;
  if (part.questions.length === 1 && single.kind === "match_grid") {
    return matchGridScore(single, answers[key] ?? null);
  }
  if (part.questions.length === 1 && single.kind === "object_pick") {
    return objectPickScore(single, answers[key] ?? null);
  }
  if (part.questions.length === 1 && single.kind === "image_match") {
    return (imageMatchCount(single, answers[key] ?? null) / single.dialogues) * part.points;
  }
  const each = part.points / part.questions.length;
  return part.questions.reduce((sum, question, index) => sum + (answerOk(question, answers[`${part.id}-${index}`] ?? null) ? each : 0), 0);
}

function formatPoints(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1).replace(".", ",");
}

function formatTimer(seconds: number) {
  const min = Math.max(0, Math.floor(seconds / 60));
  const sec = Math.max(0, seconds % 60);
  return `${min}:${String(sec).padStart(2, "0")}`;
}

function Header({ level, title, placement = false }: { level: COLevel; title: string; placement?: boolean }) {
  const router = useRouter();
  const guardedNavigate = useGuardedNavigate();
  const accent = placement ? "var(--color-accent-quiz)" : ACCENT;
  const leaveHref = placement ? "/placement" : "/communication";
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        onClick={() => guardedNavigate(() => router.push(leaveHref))}
        aria-label="Quitter la leçon"
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85"
        style={{ background: accent }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: accent }}>
          {placement ? "Test de placement · CO" : "Français · Compréhension orale"} · {levelLabel(level)}
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">{title}</h1>
      </div>
    </div>
  );
}

function HiddenNav({
  onBack,
  onRefresh,
  onValidate,
  onNext,
  backDisabled,
  refreshDisabled,
  validateDisabled,
  nextDisabled,
  nextLabel,
}: {
  onBack?: () => void;
  onRefresh?: () => void;
  onValidate?: () => void;
  onNext?: () => void;
  backDisabled?: boolean;
  refreshDisabled?: boolean;
  validateDisabled?: boolean;
  nextDisabled?: boolean;
  nextLabel?: string;
}) {
  return (
    <div className="hidden fixed bottom-0 left-0 right-0">
      {onBack && <button type="button" data-nav-action="back" disabled={backDisabled} onClick={onBack} aria-label="Précédent">← Précédent</button>}
      {onRefresh && <button type="button" data-nav-action="refresh" disabled={refreshDisabled} onClick={onRefresh}>Refresh</button>}
      {onValidate && <button type="button" data-nav-action="validate" disabled={validateDisabled} onClick={onValidate}>Valider</button>}
      {onNext && (
        <button type="button" data-nav-action="next" data-nav-label={nextLabel} disabled={nextDisabled} onClick={onNext}>
          {nextLabel ?? "Suivant"}
        </button>
      )}
    </div>
  );
}

function ProgressBar({
  parts,
  currentId,
  remaining,
  points,
  secondsLeft,
  onSelect,
}: {
  parts: COPart[];
  currentId: string;
  remaining: string[];
  points: number;
  secondsLeft: number;
  onSelect: (id: string) => void;
}) {
  const visibleParts = parts.filter((part) => remaining.includes(part.id));
  return (
    <div className="mb-5">
      <div className="mb-1.5 flex items-center justify-between">
        <p className="text-xs font-bold tabular-nums" style={{ color: ACCENT }}>{formatPoints(points)} / 25 pts</p>
        <div className="flex items-center gap-3">
          <span className="rounded-full px-2 py-0.5 text-xs font-bold tabular-nums" style={{ background: `color-mix(in srgb, ${ACCENT} 12%, white)`, color: ACCENT }}>
            {formatTimer(secondsLeft)}
          </span>
          <p className="text-xs text-[var(--color-text-secondary)]">{remaining.length} exercice{remaining.length !== 1 ? "s" : ""} restant{remaining.length !== 1 ? "s" : ""}</p>
        </div>
      </div>
      <div className="flex gap-0.5">
        {visibleParts.map((part) => (
          <button
            key={part.id}
            type="button"
            onClick={() => onSelect(part.id)}
            className="h-2 min-w-8 flex-1 rounded-full transition-colors"
            style={{ background: part.id === currentId ? ACCENT : "var(--color-border-default, var(--color-border))" }}
            aria-label={part.title}
          />
        ))}
      </div>
    </div>
  );
}

const AUDIO_GAP_MS = 15_000;

function AudioSequencePlayer({ items }: { items: COAudioItem[] }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const currentIndexRef = useRef<number | null>(null);
  const waitTimerRef = useRef<{ timeoutId: number; endAt: number; nextIndex: number } | null>(null);
  const pauseSnapshotRef = useRef<
    | null
    | { kind: "audio" }
    | { kind: "wait"; nextIndex: number; remainingMs: number }
  >(null);
  const isSeekingRef = useRef(false);
  const itemsRef = useRef(items);
  const itemsKey = items.map((item) => item.audio).join("|");

  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [audioCurrentTime, setAudioCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [errorAudio, setErrorAudio] = useState<string | null>(null);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  itemsRef.current = items;

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  const clearWait = useCallback(() => {
    if (waitTimerRef.current) {
      window.clearTimeout(waitTimerRef.current.timeoutId);
      waitTimerRef.current = null;
    }
  }, []);

  const stop = useCallback(() => {
    clearWait();
    pauseSnapshotRef.current = null;
    const player = audioRef.current;
    if (player) {
      player.pause();
      player.currentTime = 0;
    }
    setPlaying(false);
    setPaused(false);
    setWaiting(false);
    setCurrentIndex(null);
    setProgress(0);
    setAudioCurrentTime(0);
    setAudioDuration(0);
  }, [clearWait]);

  useEffect(() => {
    stop();
    return () => {
      clearWait();
      audioRef.current?.pause();
    };
  }, [itemsKey, stop, clearWait]);

  function ensurePlayer() {
    let player = audioRef.current;
    if (player) return player;

    player = new Audio();
    player.preload = "metadata";
    audioRef.current = player;

    player.addEventListener("loadedmetadata", () => {
      const active = audioRef.current;
      setAudioDuration(active && Number.isFinite(active.duration) ? active.duration : 0);
    });
    player.addEventListener("timeupdate", () => {
      if (isSeekingRef.current) return;
      const active = audioRef.current;
      if (!active || !Number.isFinite(active.duration) || active.duration <= 0) {
        setProgress(0);
        setAudioCurrentTime(0);
        return;
      }
      setAudioCurrentTime(active.currentTime);
      setProgress(Math.min(100, (active.currentTime / active.duration) * 100));
    });
    player.addEventListener("ended", () => {
      setPlaying(false);
      setProgress(100);
      const idx = currentIndexRef.current;
      if (idx === null) return;
      const nextIndex = idx + 1;
      if (nextIndex >= itemsRef.current.length) {
        setCurrentIndex(null);
        currentIndexRef.current = null;
        setProgress(0);
        return;
      }
      startWait(nextIndex);
    });
    player.addEventListener("error", () => {
      setPlaying(false);
      setWaiting(false);
      setPaused(false);
      const idx = currentIndexRef.current;
      setErrorAudio(idx !== null ? itemsRef.current[idx]?.audio ?? null : null);
    });

    return player;
  }

  function startWait(nextIndex: number, delayMs = AUDIO_GAP_MS) {
    clearWait();
    if (nextIndex >= items.length) return;
    setWaiting(true);
    setPlaying(false);
    const endAt = Date.now() + delayMs;
    waitTimerRef.current = {
      timeoutId: window.setTimeout(() => {
        waitTimerRef.current = null;
        setWaiting(false);
        playAt(nextIndex);
      }, delayMs),
      endAt,
      nextIndex,
    };
  }

  function playAt(index: number) {
    const item = items[index];
    if (!item) {
      stop();
      return;
    }

    clearWait();
    pauseSnapshotRef.current = null;
    setWaiting(false);
    setPaused(false);
    setErrorAudio(null);

    const player = ensurePlayer();
    player.src = item.audio;
    player.playbackRate = playbackRate;
    player.currentTime = 0;
    setCurrentIndex(index);
    currentIndexRef.current = index;
    setProgress(0);

    void player.play()
      .then(() => setPlaying(true))
      .catch(() => {
        setPlaying(false);
        setErrorAudio(item.audio);
      });
  }

  function pause() {
    if (waiting && waitTimerRef.current) {
      const remaining = Math.max(0, waitTimerRef.current.endAt - Date.now());
      pauseSnapshotRef.current = {
        kind: "wait",
        nextIndex: waitTimerRef.current.nextIndex,
        remainingMs: remaining,
      };
      clearWait();
      setWaiting(false);
      setPaused(true);
      setPlaying(false);
      return;
    }

    const player = audioRef.current;
    if (player && !player.paused) {
      player.pause();
      pauseSnapshotRef.current = { kind: "audio" };
      setPlaying(false);
      setPaused(true);
    }
  }

  function resume() {
    const snap = pauseSnapshotRef.current;
    pauseSnapshotRef.current = null;
    setPaused(false);

    if (snap?.kind === "wait") {
      startWait(snap.nextIndex, snap.remainingMs);
      return;
    }

    const player = audioRef.current;
    if (snap?.kind === "audio" && player && currentIndexRef.current !== null) {
      player.playbackRate = playbackRate;
      void player.play()
        .then(() => setPlaying(true))
        .catch(() => {
          const idx = currentIndexRef.current;
          setErrorAudio(idx !== null ? itemsRef.current[idx]?.audio ?? null : null);
        });
      return;
    }

    playAt(0);
  }

  function toggle() {
    if (playing || waiting) {
      pause();
      return;
    }
    if (paused) {
      resume();
      return;
    }
    playAt(0);
  }

  function restart() {
    stop();
    playAt(0);
  }

  function seekTo(percent: number) {
    const player = audioRef.current;
    if (!player || !Number.isFinite(player.duration) || player.duration <= 0) return;
    const nextTime = (percent / 100) * player.duration;
    player.currentTime = nextTime;
    setProgress(percent);
    setAudioCurrentTime(nextTime);
  }

  function selectSpeed(rate: number) {
    setPlaybackRate(rate);
    if (audioRef.current) audioRef.current.playbackRate = rate;
  }

  const canSeek = !waiting && currentIndex !== null;

  return (
    <div>
      <MediaPlayerBar
        playing={playing}
        paused={paused}
        waiting={waiting}
        progress={progress}
        currentTimeSec={audioCurrentTime}
        durationSec={audioDuration}
        canSeek={canSeek}
        onToggle={toggle}
        onSeek={seekTo}
        onRestart={restart}
        playbackRate={playbackRate}
        onSpeedChange={selectSpeed}
      />
      {errorAudio && (
        <p className="mt-1 text-xs font-semibold text-red-600">
          Audio indisponible
        </p>
      )}
    </div>
  );
}

function ImagePlaceholder({ label, path, compact }: { label: string; path?: string; compact?: boolean }) {
  const src = ceCoImageSource(path, label);
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white" title={label}>
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 40vw, 160px"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }
  return (
    <div
      className={`flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center font-semibold text-slate-500 ${compact ? "text-xs" : "text-sm"}`}
      data-image-path={path}
      title={path}
    >
      {label}
    </div>
  );
}

function ObjectCardImage({ src, alt, compact }: { src?: string; alt: string; compact?: boolean }) {
  const resolved = ceCoImageSource(src, alt);
  const [failed, setFailed] = useState(false);
  const wrapCls = compact ? "relative mx-auto aspect-[4/3] w-1/2 overflow-hidden rounded-md bg-white" : "relative aspect-[4/3] w-full overflow-hidden rounded-md bg-white";
  if (resolved && !failed) {
    return (
      <div className={wrapCls}>
        <Image
          src={resolved}
          alt={alt}
          fill
          className="object-cover"
          sizes={compact ? "(max-width: 640px) 20vw, 100px" : "(max-width: 640px) 30vw, 160px"}
          onError={() => setFailed(true)}
        />
      </div>
    );
  }
  return (
    <div
      className={`flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 px-2 text-center text-sm font-semibold text-slate-500 ${compact ? "mx-auto w-1/2" : "w-full"}`}
      data-image-path={src}
      title={src}
    >
      {alt}
    </div>
  );
}

function ObjectPickQuestionView({
  task,
  value,
  onChange,
  correction,
}: {
  task: Extract<QuestionTask, { kind: "object_pick" }>;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: boolean[]) => void;
  correction?: boolean;
}) {
  const selected: boolean[] =
    Array.isArray(value) && value.length === task.cards.length
      ? value.map((entry) => entry === true)
      : task.cards.map(() => false);

  function toggle(index: number) {
    if (correction) return;
    const next = [...selected];
    next[index] = !next[index];
    onChange(next);
  }

  function renderCard(card: (typeof task.cards)[number], index: number) {
    const isSelected = selected[index] === true;
    const shouldSelect = card.heard;
    const correct = correction && isSelected === shouldSelect;
    const wrong = correction && isSelected !== shouldSelect;

    return (
      <button
        key={`${card.label}-${index}`}
        type="button"
        disabled={correction}
        onClick={() => toggle(index)}
        aria-label={`${card.label}${isSelected ? " (sélectionné)" : ""}`}
        aria-pressed={isSelected}
        className={`w-full max-w-[9.5rem] overflow-hidden rounded-xl border-2 bg-white p-2 transition ${
          correct
            ? "border-amber-500"
            : wrong
              ? "border-red-400"
              : isSelected
                ? "border-red-900 shadow-sm"
                : "border-slate-200 hover:border-slate-300"
        }`}
      >
        <ObjectCardImage src={card.image} alt={card.label} />
      </button>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 justify-items-center gap-3">
        {task.cards.slice(0, 3).map((card, index) => renderCard(card, index))}
      </div>
      <div className="mx-auto grid max-w-[20rem] grid-cols-2 justify-items-center gap-3">
        {task.cards.slice(3, 5).map((card, index) => renderCard(card, index + 3))}
      </div>
      {correction && (
        <div className="space-y-1 text-xs text-[var(--color-text-secondary)]">
          {task.cards.map((card) => (
            <p key={card.label}>
              <span className="font-semibold text-[var(--color-text-primary)]">{card.label}</span>
              {" : "}
              {card.heard ? (
                <span className="font-semibold text-amber-700">à sélectionner</span>
              ) : (
                <span>ne pas sélectionner</span>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function ChoiceQuestionView({
  task,
  value,
  onChange,
  correction,
  forPrint = false,
}: {
  task: Extract<QuestionTask, { kind: "choice" }>;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: number) => void;
  correction?: boolean;
  forPrint?: boolean;
}) {
  const orderKey = `${task.prompt}|${task.choices.map((c) => c.label).join("¦")}|${task.correct}|${task.image ? 1 : 0}`;
  const [order, setOrder] = useState<number[] | null>(null);

  useEffect(() => {
    setOrder(randomIndexOrder(task.choices.length));
  }, [orderKey, task.choices.length]);

  // QCM image / impression : une ligne. QCM texte à l'écran : une option par ligne.
  const gridCls = task.image || forPrint ? "grid grid-cols-3 gap-2" : "grid grid-cols-1 gap-2";

  if (!order) {
    return <div className={`min-h-[3rem] ${gridCls}`} aria-hidden />;
  }

  return (
    <div className={gridCls}>
      {order.map((origIndex, displayIndex) => {
        const choice = task.choices[origIndex]!;
        const selected = value === origIndex;
        const correct = correction && origIndex === task.correct;
        const wrong = correction && selected && !correct;
        return (
          <button
            key={`${choice.label}-${origIndex}`}
            type="button"
            disabled={correction}
            onClick={() => onChange(origIndex)}
            aria-label={task.image ? `${String.fromCharCode(97 + displayIndex)}. ${choice.label}` : undefined}
            className={`rounded-xl border text-left text-sm transition ${task.image ? "flex flex-col items-stretch overflow-hidden p-0" : "w-full px-2 py-2"} ${correct ? "border-amber-400 bg-amber-50 text-amber-700" : selected ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 text-[var(--color-accent-comm)]" : wrong ? "border-red-200 bg-red-50 text-red-600 line-through" : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"}`}
          >
            {task.image ? (
              <ImagePlaceholder label={choice.label} path={choice.image} compact />
            ) : (
              <span className="flex w-full items-start gap-1.5 text-left">
                <span className="shrink-0 font-mono leading-snug">
                  {String.fromCharCode(97 + displayIndex)}.
                </span>
                <span className="min-w-0 flex-1 leading-snug">{choice.label}</span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function FillQuestionView({
  task,
  value,
  onChange,
  correction,
}: {
  task: Extract<QuestionTask, { kind: "fill" }>;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: string) => void;
  correction?: boolean;
}) {
  const ok = answerOk(task, value);
  const inputValue = typeof value === "string" ? value : "";
  const inputCls =
    "border-0 border-b-2 bg-transparent pb-1 text-sm outline-none disabled:opacity-80";
  const stemParts = task.fillMode === "stem" && task.stem ? parseFillStem(task.stem) : null;
  const shownValue = correction && !inputValue.trim() ? task.answer : inputValue;
  const showExpectedHint = Boolean(correction && inputValue.trim() && !ok);

  if (stemParts) {
    return (
      <div className="space-y-1">
        <div className="flex flex-wrap items-baseline gap-x-1 gap-y-2 text-sm text-[var(--color-text-primary)]">
          <span>{stemParts.before}</span>
          {correction ? (
            <span
              className="inline-block min-w-[5rem] max-w-full border-0 border-b-2 px-1 pb-1 font-semibold"
              style={{ borderColor: INVERSE, color: INVERSE }}
            >
              {shownValue || task.answer}
            </span>
          ) : (
            <input
              type="text"
              value={inputValue}
              onChange={(event) => onChange(event.target.value)}
              className={`inline-block min-w-[5rem] max-w-full px-1 ${inputCls}`}
              style={{ borderColor: ACCENT }}
            />
          )}
          {stemParts.after ? <span>{stemParts.after}</span> : null}
        </div>
        {showExpectedHint && (
          <p className="text-xs font-semibold" style={{ color: INVERSE }}>Réponse attendue : {task.answer}</p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-1">
      {task.fillMode === "full" && (
        <p className="text-xs text-[var(--color-text-secondary)]">Écrivez une phrase complète contenant la réponse.</p>
      )}
      {correction ? (
        <div
          className="w-full border-0 border-b-2 pb-1 text-sm font-semibold"
          style={{ borderColor: INVERSE, color: INVERSE }}
        >
          {shownValue || task.answer}
        </div>
      ) : (
        <input
          type="text"
          value={inputValue}
          onChange={(event) => onChange(event.target.value)}
          className={`w-full ${inputCls}`}
          style={{ borderColor: ACCENT }}
        />
      )}
      {showExpectedHint && (
        <p className="text-xs font-semibold" style={{ color: INVERSE }}>Réponse attendue : {task.answer}</p>
      )}
    </div>
  );
}

function MatchGridQuestionView({
  task,
  value,
  onChange,
  correction,
}: {
  task: Extract<QuestionTask, { kind: "match_grid" }>;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: number[]) => void;
  correction?: boolean;
}) {
  const selected: number[] =
    Array.isArray(value) && value.length === 4 && value.every((entry) => typeof entry === "number")
      ? (value as number[])
      : [-1, -1, -1, -1];

  function toggle(row: number, col: number) {
    if (correction) return;
    const next = [...selected];
    if (next[col] === row) {
      next[col] = -1;
      onChange(next);
      return;
    }
    for (let c = 0; c < 4; c++) {
      if (c !== col && next[c] === row) next[c] = -1;
    }
    next[col] = row;
    onChange(next);
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[28rem] border-collapse text-sm">
        <thead>
          <tr>
            <th className="border border-slate-200 bg-slate-50 px-3 py-2 text-left font-bold text-[var(--color-text-primary)]">
              Situation
            </th>
            {task.columnLabels.map((label) => (
              <th
                key={label}
                className="border border-slate-200 bg-slate-50 px-3 py-2 text-center font-bold"
                style={{ color: ACCENT }}
              >
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {task.situations.map((situation, row) => (
            <tr key={situation}>
              <td className="border border-slate-200 px-3 py-2.5 font-medium text-[var(--color-text-primary)]">
                {situation}
              </td>
              {task.columnLabels.map((label, col) => {
                const checked = selected[col] === row;
                const correct = correction && task.correctByColumn[col] === row;
                const wrong = correction && checked && !correct;
                return (
                  <td key={`${row}-${label}`} className="border border-slate-200 px-3 py-2.5 text-center">
                    <button
                      type="button"
                      disabled={correction}
                      onClick={() => toggle(row, col)}
                      aria-label={`Associer « ${situation} » au dialogue ${label}`}
                      className={`mx-auto flex h-7 w-7 items-center justify-center rounded border transition ${
                        correct
                          ? "border-amber-400 bg-amber-50 text-amber-700"
                          : wrong
                            ? "border-red-300 bg-red-50 text-red-600 line-through"
                            : checked
                              ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 text-[var(--color-accent-comm)]"
                              : "border-slate-300 bg-white text-slate-400 hover:border-[var(--color-accent-comm)]"
                      }`}
                    >
                      {checked || correct ? "✓" : ""}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {correction && (
        <div className="mt-3 space-y-1 text-xs text-[var(--color-text-secondary)]">
          {task.columnLabels.map((label, col) => (
            <p key={label}>
              Dialogue {label} ({formatPoints(task.weights[col]!)} pt) :{" "}
              <span className="font-semibold text-amber-700">{task.situations[task.correctByColumn[col]!]}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

function PrintDialogueNumberLine({
  correction,
  expected,
}: {
  correction?: boolean;
  /** Numéro attendu (0 / null = leurre « — »). */
  expected?: number | null;
}) {
  const shown =
    correction
      ? expected == null || expected === 0
        ? "—"
        : String(expected)
      : "";
  return (
    <div className="mt-1.5 flex items-end gap-1 px-0.5">
      <span className="shrink-0 text-xs font-semibold text-[var(--color-text-primary)]">N° :</span>
      <span className="min-h-[1.1em] min-w-[2.75rem] flex-1 border-b border-black pb-0.5 text-center text-sm font-semibold leading-none">
        {shown || "\u00a0"}
      </span>
    </div>
  );
}

function ImageMatchQuestionView({
  task,
  value,
  onChange,
  correction,
  forPrint = false,
}: {
  task: Extract<QuestionTask, { kind: "image_match" }>;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: number[]) => void;
  correction?: boolean;
  forPrint?: boolean;
}) {
  const selected: number[] =
    Array.isArray(value) && value.length === task.cards.length && value.every((v) => typeof v === "number")
      ? (value as number[])
      : task.cards.map(() => 0);
  const dialogues = Array.from({ length: task.dialogues }, (_, i) => i + 1);

  function setCard(index: number, num: number) {
    if (correction) return;
    const next = [...selected];
    if (num !== 0) {
      for (let i = 0; i < next.length; i++) if (i !== index && next[i] === num) next[i] = 0;
    }
    next[index] = num;
    onChange(next);
  }

  return (
    <div className={`grid grid-cols-2 ${forPrint ? "gap-x-5 gap-y-10" : "gap-3 sm:gap-4"}`}>
      {task.cards.map((card, index) => {
        const chosen = selected[index] ?? 0;
        const isCorrect = correction && card.correct !== null && chosen === card.correct;
        const isWrong = correction && ((chosen !== 0 && chosen !== card.correct) || (card.correct !== null && chosen !== card.correct));
        return (
          <div
            key={index}
            className={
              forPrint
                ? "bg-transparent"
                : `rounded-xl border-2 bg-white ${isCorrect ? "border-amber-400" : isWrong ? "border-red-300" : "border-slate-200"}`
            }
          >
            <ObjectCardImage src={card.image} alt={card.label} compact />
            {forPrint ? (
              <PrintDialogueNumberLine correction={correction} expected={card.correct} />
            ) : (
              <div className="relative z-10 border-t border-slate-200 p-2">
                <AppSelect
                  value={String(chosen)}
                  onChange={(v) => setCard(index, Number(v))}
                  options={dialogues.map((d) => {
                    const takenElsewhere = selected.some((val, i) => i !== index && val === d);
                    return {
                      value: String(d),
                      label: String(d),
                      disabled: takenElsewhere && chosen !== d,
                    };
                  })}
                  placeholder="—"
                  emptyOption={{ value: "0", label: "—" }}
                  disabled={correction}
                  size="sm"
                  placement="top"
                  className="w-full"
                  aria-label={`Numéro du dialogue pour l'image ${index + 1}`}
                />
                {correction && (
                  <p
                    className="mt-1 text-center text-xs font-semibold"
                    style={{ color: card.correct === null ? "#64748b" : INVERSE }}
                  >
                    {card.correct === null ? "Aucun (leurre)" : `Dialogue ${card.correct}`}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function ConversationImageGridQuestionView({
  task,
  value,
  onChange,
  correction,
  forPrint = false,
}: {
  task: Extract<QuestionTask, { kind: "conversation_image_grid" }>;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: number[]) => void;
  correction?: boolean;
  forPrint?: boolean;
}) {
  const selected: number[] =
    Array.isArray(value) && value.length === 6 && value.every((entry) => typeof entry === "number")
      ? (value as number[])
      : [0, 0, 0, 0, 0, 0];

  function setCard(cardIndex: number, raw: string) {
    if (correction) return;
    const nextValue = raw === "" || raw === "0" ? 0 : Number.parseInt(raw, 10);
    const next = [...selected];
    if (nextValue >= 1 && nextValue <= 4) {
      for (let i = 0; i < next.length; i++) {
        if (i !== cardIndex && next[i] === nextValue) next[i] = 0;
      }
    }
    next[cardIndex] = Number.isFinite(nextValue) ? nextValue : 0;
    onChange(next);
  }

  return (
    <div className={`grid grid-cols-2 ${forPrint ? "gap-x-5 gap-y-10" : "gap-4"}`}>
      {task.cards.map((card, index) => {
        const current = selected[index] ?? 0;
        const expected = task.correctByCard[index] ?? 0;
        const correct = correction && current === expected;
        const wrong = correction && current !== expected;
        return (
          <div
            key={`${card.suffix}-${index}`}
            className={
              forPrint
                ? "bg-transparent"
                : `rounded-xl border bg-white ${
                    correct ? "border-amber-500" : wrong ? "border-red-400" : "border-slate-200"
                  }`
            }
          >
            <ObjectCardImage src={card.image} alt={`Situation ${index + 1}`} compact />
            {forPrint ? (
              <PrintDialogueNumberLine correction={correction} expected={expected} />
            ) : (
              <div className="relative z-10 border-t border-slate-100 p-2">
                <AppSelect
                  value={current > 0 ? String(current) : "0"}
                  onChange={(v) => setCard(index, v)}
                  options={[
                    { value: "1", label: "1" },
                    { value: "2", label: "2" },
                    { value: "3", label: "3" },
                    { value: "4", label: "4" },
                  ]}
                  placeholder="—"
                  emptyOption={{ value: "0", label: "—" }}
                  disabled={correction}
                  error={correction && wrong}
                  size="sm"
                  placement="top"
                  className="w-full"
                  aria-label={`Image ${index + 1} — dialogue`}
                />
                {correction && wrong && (
                  <p className="mt-1 text-center text-xs font-semibold text-amber-700">
                    {expected > 0 ? `Dialogue ${expected}` : "Aucun dialogue"}
                  </p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function RenderQuestion({
  task,
  value,
  onChange,
  correction,
  forPrint = false,
}: {
  task: QuestionTask;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: number | string | number[] | boolean[]) => void;
  correction?: boolean;
  forPrint?: boolean;
}) {
  if (task.kind === "conversation_image_grid") {
    return (
      <ConversationImageGridQuestionView
        task={task}
        value={value}
        onChange={(v) => onChange(v)}
        correction={correction}
        forPrint={forPrint}
      />
    );
  }
  if (task.kind === "match_grid") {
    return (
      <MatchGridQuestionView
        task={task}
        value={value}
        onChange={(v) => onChange(v)}
        correction={correction}
      />
    );
  }
  if (task.kind === "object_pick") {
    return (
      <ObjectPickQuestionView
        task={task}
        value={value}
        onChange={(v) => onChange(v)}
        correction={correction}
      />
    );
  }
  if (task.kind === "image_match") {
    return (
      <ImageMatchQuestionView
        task={task}
        value={value}
        onChange={(v) => onChange(v)}
        correction={correction}
        forPrint={forPrint}
      />
    );
  }
  if (task.kind === "fill") {
    return <FillQuestionView task={task} value={value} onChange={(v) => onChange(v)} correction={correction} />;
  }
  return (
    <ChoiceQuestionView
      task={task}
      value={value}
      onChange={(v) => onChange(v)}
      correction={correction}
      forPrint={forPrint}
    />
  );
}

function QuestionBlock({
  part,
  answers,
  onAnswer,
  readonly,
  forceTranscripts = false,
  hideAudioPlayer = false,
  hideQuestions = false,
  hidePoints = false,
  forPrint = false,
  qrItems,
}: {
  part: COPart;
  answers: Answers;
  onAnswer: (key: string, value: number | string | number[] | boolean[]) => void;
  readonly?: boolean;
  /** Mode impression PDF : affiche les scripts sans bouton audio. */
  forceTranscripts?: boolean;
  /** Impression : masquer le lecteur audio (QR à la place). */
  hideAudioPlayer?: boolean;
  /** Impression corrigé (page scripts) : pas de questions. */
  hideQuestions?: boolean;
  /** Impression : masquer le badge « X points » (déjà dans l'en-tête). */
  hidePoints?: boolean;
  /** Impression : réponses manuscrites (N° + trait) à la place des selects. */
  forPrint?: boolean;
  /** Rangée de QR codes au-dessus des questions / scripts. */
  qrItems?: PrintAudioQrItem[];
}) {
  const [showTranscripts, setShowTranscripts] = useState(forceTranscripts);
  const hasTranscript = part.audioGroup.items.some((item) => item.transcript);
  const isMatchGrid = part.questions.length === 1 && part.questions[0]!.kind === "match_grid";
  const isObjectPick = part.questions.length === 1 && part.questions[0]!.kind === "object_pick";
  const isConversationImageGrid =
    part.questions.length === 1 && part.questions[0]!.kind === "conversation_image_grid";
  const isImageMatch = part.questions.length === 1 && part.questions[0]!.kind === "image_match";
  const isSingleTask = isMatchGrid || isObjectPick || isImageMatch;

  const consigne = qrItems?.length
    ? "Scannez le ou les QR codes pour écouter l'audio, puis répondez aux questions."
    : isConversationImageGrid
      ? forPrint
        ? "Écoutez les 4 dialogues, puis écrivez sous chaque image le numéro du dialogue correspondant (laissez vide pour les leurres)."
        : "Écoutez les 4 dialogues, puis associez chaque image (2 pts par bon numéro ; laissez « — » pour les leurres)."
      : isImageMatch
        ? forPrint
          ? "Écoutez les dialogues, puis écrivez sous chaque image le numéro du dialogue correspondant."
          : "Écoutez les dialogues, puis choisissez sous chaque image le numéro du dialogue correspondant."
        : isMatchGrid
          ? "Lisez les situations. Écoutez les dialogues puis répondez."
          : isObjectPick
            ? forPrint
              ? "Écoutez l'enregistrement et cochez / marquez les objets que vous entendez."
              : "Écoutez l'enregistrement et cliquez sur les objets que vous entendez."
            : "Écoutez l'enregistrement et répondez aux questions.";

  const consigneText =
    forceTranscripts && !qrItems?.length
      ? "Lisez le script ci-dessous et répondez aux questions."
      : hideQuestions
        ? "Scannez les QR codes pour réécouter, puis lisez les transcriptions."
        : consigne;

  const contextLine =
    part.context &&
    !forceTranscripts &&
    !hideQuestions &&
    part.context.trim() &&
    !consigneText.toLowerCase().includes(part.context.trim().toLowerCase().slice(0, 24))
      ? part.context
      : null;

  return (
    <div className="space-y-5">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{part.title}</h2>
          <div className="flex shrink-0 items-center gap-2">
            {!hidePoints && (
              <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--color-text-secondary)]">
                {part.points} points
              </span>
            )}
            {hasTranscript && !forceTranscripts && !hideAudioPlayer && (
              <button
                type="button"
                onClick={() => setShowTranscripts((value) => !value)}
                className="flex h-8 w-8 items-center justify-center rounded-full border text-white shadow-sm transition-opacity hover:opacity-85"
                style={{ background: ACCENT, borderColor: ACCENT }}
                aria-label="Afficher ou masquer la transcription"
                title="Aide : transcription"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                  <path d="M8.5 14a6 6 0 1 1 7 0c-.8.7-1.5 1.7-1.5 3h-4c0-1.3-.7-2.3-1.5-3z" />
                </svg>
              </button>
            )}
          </div>
        </div>
        <div className="flex items-start gap-3">
          {qrItems && qrItems.length > 0 ? (
            <div className="shrink-0">
              <PrintAudioQrRow items={qrItems} size={64} />
            </div>
          ) : null}
          <div className="min-w-0 flex-1 space-y-1">
            {contextLine ? <ExerciseConsigne>{contextLine}</ExerciseConsigne> : null}
            <p className="text-sm font-semibold italic leading-relaxed text-[var(--color-text-primary)]">
              {consigneText}
            </p>
          </div>
        </div>
        <div className="space-y-3">
          {!forceTranscripts && !hideAudioPlayer && <AudioSequencePlayer items={part.audioGroup.items} />}
          {(showTranscripts || forceTranscripts) && part.audioGroup.items.map((item) => item.transcript ? (
            <COTranscriptView
              key={item.id}
              transcript={item.transcript}
              accent={ACCENT}
              audioLabel={part.audioGroup.items.length > 1 ? `Audio ${item.activity}` : undefined}
            />
          ) : null)}
        </div>
      </div>

      {!hideQuestions && !part.questions.length && (
        <div className="rounded-[var(--radius-md)] border border-slate-200 bg-white/80 p-4 text-sm text-[var(--color-text-secondary)]">
          Les questions seront ajoutées après la vérification des audios.
        </div>
      )}

      {!hideQuestions && part.questions.map((question, index) => {
        const key = `${part.id}-${index}`;
        const answer = answers[key] ?? null;
        return (
          <div key={key} className={forPrint ? "space-y-2" : "rounded-[var(--radius-md)] border border-slate-200 bg-white/80 p-4"}>
            {!isConversationImageGrid && !isSingleTask && (
              <p className="font-semibold text-[var(--color-text-primary)]">{index + 1}. {question.prompt}</p>
            )}
            {isMatchGrid && question.kind === "match_grid" && (
              <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{question.prompt}</p>
            )}
            {isObjectPick && question.kind === "object_pick" && (
              <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{question.prompt}</p>
            )}
            {isImageMatch && question.kind === "image_match" && (
              <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{question.prompt}</p>
            )}
            <div className={isSingleTask || isConversationImageGrid ? "mt-4" : "mt-3"}>
              <RenderQuestion
                task={question}
                value={answer}
                onChange={(value) => onAnswer(key, value)}
                correction={readonly}
                forPrint={forPrint}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ComprehensionOraleRunner({
  lessonId,
  mode = "module",
  placementSeed,
  placementProgressive,
  onPlacementComplete,
}: { lessonId: string } & PlacementRunnerProps) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const lessonCode = level === "base" ? "CO.1" : level === "moyen" ? "CO.2" : "CO.3";
  const [localSeed, setLocalSeed] = useState(() => Date.now());
  const [runId, setRunId] = useState(0);
  const sessionSeed = placementSeed ?? localSeed;
  /** Change à chaque essai pour remélanger images / situations (conversations). */
  const effectiveSeed = sessionSeed + runId * 1_000_003;
  const parts = useMemo(
    () => (mode === "placement" && placementProgressive ? makeProgressiveCoParts(effectiveSeed) : makeParts(level, effectiveSeed)),
    [effectiveSeed, level, mode, placementProgressive],
  );
  const [phase, setPhase] = useState<"intro" | "exercise" | "results">("intro");
  const [remaining, setRemaining] = useState<string[]>(() => parts.map((part) => part.id));
  const [currentId, setCurrentId] = useState(parts[0]!.id);
  const [answers, setAnswers] = useState<Answers>({});
  const [validatedAnswers, setValidatedAnswers] = useState<Record<string, Answers>>({});
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [openResult, setOpenResult] = useState<string | null>(null);

  const beginEvaluation = useCallback(() => {
    if (placementSeed == null) setLocalSeed(Date.now());
    setRunId((id) => id + 1);
    setPhase("exercise");
  }, [placementSeed]);

  useEffect(() => {
    if (phase !== "exercise" || runId === 0) return;
    setRemaining(parts.map((part) => part.id));
    setCurrentId(parts[0]!.id);
    setAnswers({});
    setValidatedAnswers({});
    setSecondsLeft(TOTAL_SECONDS);
  }, [phase, parts, runId]);

  const currentPart = parts.find((part) => part.id === currentId) ?? parts[0]!;
  const savedAnswers = { ...answers, ...Object.values(validatedAnswers).reduce((acc, value) => ({ ...acc, ...value }), {}) };
  const totalPoints = parts.reduce((sum, part) => sum + scorePart(part, validatedAnswers[part.id] ?? {}), 0);
  const maxModulePoints = useMemo(() => parts.reduce((sum, part) => sum + part.points, 0), [parts]);

  useRegisterEvalGuard(mode === "placement" && phase === "exercise");

  useEffect(() => {
    if (phase !== "exercise") return;
    const timer = window.setInterval(() => setSecondsLeft((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const selectPart = useCallback((id: string) => {
    if (remaining.includes(id)) setCurrentId(id);
  }, [remaining]);

  const move = useCallback((direction: 1 | -1) => {
    if (!remaining.length) return;
    const index = remaining.indexOf(currentId);
    const nextIndex = index === -1 ? 0 : (index + direction + remaining.length) % remaining.length;
    setCurrentId(remaining[nextIndex]!);
  }, [currentId, remaining]);

  const validateCurrent = useCallback(() => {
    const part = currentPart;
    const partAnswers: Answers = {};
    part.questions.forEach((_, index) => {
      const key = `${part.id}-${index}`;
      partAnswers[key] = answers[key] ?? null;
    });
    setValidatedAnswers((previous) => ({ ...previous, [part.id]: partAnswers }));
    const nextRemaining = remaining.filter((id) => id !== part.id);
    setRemaining(nextRemaining);
    if (!nextRemaining.length) {
      if (mode !== "placement") {
        void markCommunicationLessonComplete(lessonCode);
      }
      setPhase("results");
      return;
    }
    setCurrentId(nextRemaining[0]!);
  }, [answers, currentPart, lessonCode, mode, remaining]);

  if (phase === "intro") {
    const info = partInfoFor(level);
    const introBullets: IntroBullet[] = [
      { strong: `${info.length} exercices`, text: " d'écoute" },
      { strong: "25 minutes", text: " pour compléter l'évaluation" },
      { text: "Les audios restent disponibles pendant tout l'exercice" },
      { text: "Validez chaque exercice individuellement" },
      { before: "Score maximum : ", strong: "25 points", text: "" },
    ];
    const introRows: IntroRow[] = info.map((part, index) => ({
      num: String(index + 1),
      title: part.title,
      points: `${part.points} pts`,
    }));

    return (
      <main className="app-shell space-y-7 pb-28 pt-6">
        <Header level={level} title="Compréhension orale" placement={mode === "placement"} />
        <CommunicationIntroSection
          bullets={introBullets}
          rows={introRows}
          tips={(
            <>
              <p>Écoutez une première fois pour comprendre la situation générale.</p>
              <p>À la deuxième écoute, repérez les noms, les lieux, les horaires et les actions demandées.</p>
              <p>Ne bloquez pas sur un mot inconnu : utilisez le contexte pour choisir la réponse la plus logique.</p>
            </>
          )}
          onStart={beginEvaluation}
        />
        <HiddenNav onNext={beginEvaluation} nextLabel="Commencer" />
      </main>
    );
  }

  if (phase === "results") {
    return (
      <main className="app-shell space-y-6 pb-28 pt-6">
        <Header level={level} title="Résultats" placement={mode === "placement"} />
        <CommunicationResultsSummary totalPoints={totalPoints} maxPoints={maxModulePoints} />
        <CommunicationFinishButton
          onClick={() => {
            if (mode === "placement") {
              onPlacementComplete?.({ skill: "co", points: totalPoints, maxPoints: maxModulePoints });
              return;
            }
            router.push(EXPRESSION_TAB_HREF);
          }}
          label={mode === "placement" ? "Continuer" : "Terminer"}
        />
        <EvalResultsHint />
        <EvalExerciseResultList>
          {parts.map((part, index) => {
            const partScore = scorePart(part, validatedAnswers[part.id] ?? {});
            const isOpen = openResult === part.id;
            return (
              <CommunicationResultsExercise
                key={part.id}
                index={index}
                title={part.title}
                correct={partScore}
                total={part.points}
                scoreLabel={`${formatEvalPoints(partScore)} / ${part.points}`}
                open={isOpen}
                onToggle={() => setOpenResult(isOpen ? null : part.id)}
              >
                <QuestionBlock
                  part={part}
                  answers={validatedAnswers[part.id] ?? {}}
                  onAnswer={() => undefined}
                  readonly
                />
              </CommunicationResultsExercise>
            );
          })}
        </EvalExerciseResultList>
        <HiddenNav
          onBack={() => (mode === "placement" ? onPlacementComplete?.({ skill: "co", points: totalPoints, maxPoints: maxModulePoints }) : router.push(EXPRESSION_TAB_HREF))}
          onNext={() => (mode === "placement" ? onPlacementComplete?.({ skill: "co", points: totalPoints, maxPoints: maxModulePoints }) : router.push(EXPRESSION_TAB_HREF))}
          nextLabel={mode === "placement" ? "Continuer" : "Terminer"}
        />
      </main>
    );
  }

  return (
    <main className="app-shell space-y-6 pb-28 pt-6">
      <Header level={level} title="Compréhension orale" placement={mode === "placement"} />
      <ProgressBar
        parts={parts}
        currentId={currentId}
        remaining={remaining}
        points={totalPoints}
        secondsLeft={secondsLeft}
        onSelect={selectPart}
      />
      <section className="space-y-4">
        <QuestionBlock
          part={currentPart}
          answers={savedAnswers}
          onAnswer={(key, value) => setAnswers((previous) => ({ ...previous, [key]: value }))}
        />
      </section>
      <HiddenNav
        onBack={() => move(-1)}
        onValidate={validateCurrent}
        onNext={() => move(1)}
        nextLabel="Suivant"
      />
    </main>
  );
}

function buildCoCorrectAnswers(part: COPart): Answers {
  const answers: Answers = {};
  part.questions.forEach((question, index) => {
    const key = `${part.id}-${index}`;
    if (question.kind === "choice") answers[key] = question.correct;
    else if (question.kind === "fill") answers[key] = question.answer;
    else if (question.kind === "match_grid") answers[key] = [...question.correctByColumn];
    else if (question.kind === "object_pick") answers[key] = question.cards.map((card) => card.heard);
    else if (question.kind === "image_match") {
      answers[key] = question.cards.map((card) => card.correct ?? 0);
    } else if (question.kind === "conversation_image_grid") {
      answers[key] = [...question.correctByCard];
    }
  });
  return answers;
}

/** Aperçu imprimable du CO — progressif (défaut) ou un niveau fixe. */
export function buildPlacementCoPrintExercises(
  seed = 1,
  level?: "base" | "moyen" | "avance",
): PrintExercise[] {
  const parts = level ? makeParts(level, seed) : makeProgressiveCoParts(seed);
  return parts.map((part, index) => {
    const correctAnswers = buildCoCorrectAnswers(part);
    const qrItems = coAudioQrItems(part.audioGroup.items);
    return {
      id: `co-${index}-${part.id}`,
      label: `CO ${index + 1}. ${part.title}`,
      defaultPoints: part.points,
      preview: (
        <QuestionBlock
          part={part}
          answers={{}}
          onAnswer={() => undefined}
          hideAudioPlayer
          hidePoints
          forPrint
          qrItems={qrItems}
        />
      ),
      correctionLeadPreview: (
        <QuestionBlock
          part={part}
          answers={{}}
          onAnswer={() => undefined}
          forceTranscripts
          hideAudioPlayer
          hideQuestions
          hidePoints
          forPrint
          qrItems={qrItems}
        />
      ),
      correctionPreview: (
        <QuestionBlock
          part={part}
          answers={correctAnswers}
          onAnswer={() => undefined}
          hideAudioPlayer
          hidePoints
          forPrint
          readonly
        />
      ),
    };
  });
}

/** @deprecated Préférer buildPlacementCoPrintExercises. */
export function PlacementCoPrintPreview({ seed = 1 }: { seed?: number }) {
  return (
    <div className="space-y-10">
      {buildPlacementCoPrintExercises(seed).map((item) => (
        <div key={item.id}>{item.preview}</div>
      ))}
    </div>
  );
}
