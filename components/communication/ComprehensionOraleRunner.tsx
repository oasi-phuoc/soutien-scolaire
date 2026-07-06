"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { imageSourceFor } from "@/lib/curriculum/word-image-resolver";
import {
  coGroupsByLevelCategory,
  pickCoGroup,
  randomCoGroupInRange,
  type COAudioCategory,
  type COAudioGroup,
  type COAudioItem,
  type COLevel as COAudioLevel,
} from "@/lib/curriculum/content/communication/co-audio";
import { getCoPartQuestions, type COQuestionTask } from "@/lib/curriculum/content/communication/co-questions";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
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
import { useRegisterEvalGuard, useGuardedNavigate } from "@/components/EvalNavGuard";
import { MediaPlayerBar } from "@/components/communication/MediaPlayerBar";
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
  { id: "message", title: "Comprendre un message", points: 4, context: "Écoutez un message vocal." },
  { id: "annonce", title: "Comprendre une annonce", points: 4, context: "Écoutez une annonce courte." },
  { id: "instruction", title: "Comprendre des instructions", points: 4, context: "Écoutez des consignes ou des informations pratiques." },
  { id: "conversation", title: "Comprendre des conversations", points: 8, context: "Écoutez plusieurs échanges courts." },
  { id: "objet", title: "Identifier des objets", points: 5, context: "Écoutez et repérez les objets ou les informations importantes." },
];

const MEDIUM_PART_INFO: Array<Omit<COPart, "audioGroup" | "questions"> & { category: COAudioCategory }> = [
  { id: "message", category: "message", title: "Comprendre un message", points: 6, context: "Écoutez un message vocal." },
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
  const groups = coGroupsByLevelCategory("base", "conversation").sort(
    (a, b) => Number(a.activity) - Number(b.activity),
  );
  const questions = groups.flatMap((group) => getCoPartQuestions(group, 1, `${seed}-conv-${group.activity}`));
  return {
    ...part,
    audioGroup: groups[0]!,
    questions,
  };
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
      return {
        id: part.id,
        title: part.title,
        points: part.points,
        context: part.context,
        audioGroup,
        questions: getCoPartQuestions(audioGroup, part.points, `${seed}-${part.id}`),
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
    return {
      ...part,
      audioGroup,
      questions: getCoPartQuestions(audioGroup, part.points, `${seed}-${part.id}`),
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
    return conversationImageGridScore(task, answer) === 1;
  }
  if (task.kind === "match_grid") {
    if (!Array.isArray(answer) || answer.length !== 4) return false;
    return task.correctByColumn.every((row, col) => answer[col] === row);
  }
  if (task.kind === "object_pick") {
    return objectPickScore(task, answer) === task.cards.length;
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

function conversationImageGridScore(
  task: Extract<QuestionTask, { kind: "conversation_image_grid" }>,
  answer: number | string | number[] | boolean[] | null,
) {
  if (!Array.isArray(answer) || answer.length !== 6) return 0;
  return task.correctByCard.every((expected, index) => answer[index] === expected) ? 1 : 0;
}

function scorePart(part: COPart, answers: Answers) {
  if (!part.questions.length) return 0;
  const isConversationImageGrid = part.questions.every((question) => question.kind === "conversation_image_grid");
  if (isConversationImageGrid) {
    return part.questions.reduce(
      (sum, question, index) =>
        sum +
        (question.kind === "conversation_image_grid"
          ? conversationImageGridScore(question, answers[`${part.id}-${index}`] ?? null)
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

  useEffect(() => {
    itemsRef.current = items;
    stop();
    return () => {
      clearWait();
      audioRef.current?.pause();
    };
  }, [items]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.playbackRate = playbackRate;
  }, [playbackRate]);

  function clearWait() {
    if (waitTimerRef.current) {
      window.clearTimeout(waitTimerRef.current.timeoutId);
      waitTimerRef.current = null;
    }
  }

  function stop() {
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
  }

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

function choiceLabel(task: Extract<QuestionTask, { kind: "choice" }>, index: number) {
  return task.choices[index]?.label ?? "";
}

function ImagePlaceholder({ label, path, compact }: { label: string; path?: string; compact?: boolean }) {
  const src = imageSourceFor(label, path);
  const [failed, setFailed] = useState(false);
  const heightCls = compact ? "h-20" : "h-24";
  if (src && !failed) {
    return (
      <div className={`relative w-full overflow-hidden rounded-lg bg-white ${heightCls}`} title={label}>
        <Image
          src={src}
          alt={label}
          fill
          className="object-contain p-1"
          sizes="(max-width: 640px) 40vw, 160px"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }
  return (
    <div
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center font-semibold text-slate-500 ${heightCls} ${compact ? "text-xs" : "text-sm"}`}
      data-image-path={path}
      title={path}
    >
      {label}
    </div>
  );
}

function ObjectCardImage({ src, alt }: { src?: string; alt: string }) {
  const [failed, setFailed] = useState(false);
  if (src && !failed) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain p-1"
          sizes="(max-width: 640px) 30vw, 160px"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }
  return (
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-md bg-slate-50 text-center text-sm font-semibold text-slate-500">
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
}: {
  task: Extract<QuestionTask, { kind: "choice" }>;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: number) => void;
  correction?: boolean;
}) {
  return (
    <div className={task.image ? "grid grid-cols-3 gap-2" : "space-y-2"}>
      {task.choices.map((choice, index) => {
        const selected = value === index;
        const correct = correction && index === task.correct;
        const wrong = correction && selected && !correct;
        return (
          <button
            key={`${choice.label}-${index}`}
            type="button"
            disabled={correction}
            onClick={() => onChange(index)}
            className={`rounded-xl border px-3 py-2 text-left text-sm transition ${task.image ? "flex flex-col items-center gap-1 text-center" : "w-full"} ${correct ? "border-amber-400 bg-amber-50 text-amber-700" : selected ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 text-[var(--color-accent-comm)]" : wrong ? "border-red-200 bg-red-50 text-red-600 line-through" : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"}`}
          >
            {task.image && <ImagePlaceholder label={choice.label} path={choice.image} compact />}
            <span><span className="mr-1 font-mono text-xs">{String.fromCharCode(97 + index)}.</span>{choice.label}</span>
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
  return (
    <div className="space-y-1">
      <input
        type="text"
        value={typeof value === "string" ? value : ""}
        onChange={(event) => onChange(event.target.value)}
        disabled={correction}
        className="w-full border-0 border-b-2 bg-transparent pb-1 text-sm outline-none disabled:opacity-80"
        style={{ borderColor: correction && !ok ? INVERSE : ACCENT }}
      />
      {correction && !ok && (
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

function ConversationImageGridQuestionView({
  task,
  value,
  onChange,
  correction,
}: {
  task: Extract<QuestionTask, { kind: "conversation_image_grid" }>;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: number[]) => void;
  correction?: boolean;
}) {
  const selected: number[] =
    Array.isArray(value) && value.length === 6 && value.every((entry) => typeof entry === "number")
      ? (value as number[])
      : [0, 0, 0, 0, 0, 0];

  function setCard(cardIndex: number, raw: string) {
    if (correction) return;
    const nextValue = raw === "" ? 0 : Number.parseInt(raw, 10);
    const next = [...selected];
    if (nextValue >= 1 && nextValue <= 4) {
      for (let i = 0; i < next.length; i++) {
        if (i !== cardIndex && next[i] === nextValue) next[i] = 0;
      }
    }
    next[cardIndex] = nextValue;
    onChange(next);
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {task.cards.map((card, index) => {
        const current = selected[index] ?? 0;
        const expected = task.correctByCard[index] ?? 0;
        const correct = correction && current === expected;
        const wrong = correction && current !== expected;
        return (
          <div
            key={card.suffix}
            className={`overflow-hidden rounded-xl border-2 bg-white ${
              correct ? "border-amber-500" : wrong ? "border-red-400" : "border-slate-200"
            }`}
          >
            <ObjectCardImage src={card.image} alt={`Image ${card.suffix}`} />
            <div className="border-t border-slate-200 p-2">
              <select
                value={current > 0 ? String(current) : ""}
                disabled={correction}
                onChange={(event) => setCard(index, event.target.value)}
                aria-label={`Image ${card.suffix} — dialogue`}
                className={`w-full rounded-md border bg-white px-2 py-1.5 text-sm outline-none transition ${
                  wrong
                    ? "border-red-300 text-red-700"
                    : correct
                      ? "border-amber-400 text-amber-800"
                      : "border-slate-300 focus:border-[var(--color-accent-comm)]"
                }`}
              >
                <option value="">—</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              {correction && wrong && (
                <p className="mt-1 text-center text-xs font-semibold text-amber-700">
                  {expected > 0 ? `Dialogue ${expected}` : "Aucun dialogue"}
                </p>
              )}
            </div>
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
}: {
  task: QuestionTask;
  value: number | string | number[] | boolean[] | null;
  onChange: (value: number | string | number[] | boolean[]) => void;
  correction?: boolean;
}) {
  if (task.kind === "conversation_image_grid") {
    return (
      <ConversationImageGridQuestionView
        task={task}
        value={value}
        onChange={(v) => onChange(v)}
        correction={correction}
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
  if (task.kind === "fill") {
    return <FillQuestionView task={task} value={value} onChange={(v) => onChange(v)} correction={correction} />;
  }
  return <ChoiceQuestionView task={task} value={value} onChange={(v) => onChange(v)} correction={correction} />;
}

function QuestionBlock({
  part,
  answers,
  onAnswer,
  readonly,
}: {
  part: COPart;
  answers: Answers;
  onAnswer: (key: string, value: number | string | number[] | boolean[]) => void;
  readonly?: boolean;
}) {
  const [showTranscripts, setShowTranscripts] = useState(false);
  const hasTranscript = part.audioGroup.items.some((item) => item.transcript);
  const isMatchGrid = part.questions.length === 1 && part.questions[0]!.kind === "match_grid";
  const isObjectPick = part.questions.length === 1 && part.questions[0]!.kind === "object_pick";
  const isConversationImageGrid =
    part.questions.length > 0 && part.questions.every((question) => question.kind === "conversation_image_grid");
  const isSingleTask = isMatchGrid || isObjectPick;

  return (
    <div className="space-y-5">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{part.title}</h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              {isConversationImageGrid
                ? "Écoutez les 4 dialogues de chaque activité, puis associez chaque image au bon numéro."
                : isMatchGrid
                ? "Lisez les situations. Écoutez les dialogues puis répondez."
                : isObjectPick
                  ? "Écoutez l'enregistrement et cliquez sur les objets que vous entendez."
                  : "Écoutez l'enregistrement et répondez aux questions."}
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[var(--color-text-secondary)]">
              {part.points} points
            </span>
            {hasTranscript && (
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
        {!isConversationImageGrid && (
          <div className="space-y-3">
            <AudioSequencePlayer items={part.audioGroup.items} />
            {showTranscripts && part.audioGroup.items.map((item) => item.transcript ? (
              <div key={item.id} className="whitespace-pre-line border-l-2 py-1 pl-3 text-sm leading-relaxed text-[var(--color-text-primary)]" style={{ borderColor: ACCENT }}>
                {part.audioGroup.items.length > 1 && <p className="mb-1 font-bold" style={{ color: ACCENT }}>Audio {item.activity}</p>}
                {item.transcript}
              </div>
            ) : null)}
          </div>
        )}
      </div>

      {!part.questions.length && (
        <div className="rounded-[var(--radius-md)] border border-slate-200 bg-white/80 p-4 text-sm text-[var(--color-text-secondary)]">
          Les questions seront ajoutées après la vérification des audios.
        </div>
      )}

      {part.questions.map((question, index) => {
        const key = `${part.id}-${index}`;
        const answer = answers[key] ?? null;
        return (
          <div key={key} className="rounded-[var(--radius-md)] border border-slate-200 bg-white/80 p-4">
            {isConversationImageGrid && question.kind === "conversation_image_grid" && (
              <div className="space-y-4">
                <h3 className="text-base font-bold" style={{ color: ACCENT }}>
                  Activité {index + 1}
                </h3>
                <AudioSequencePlayer
                  items={[
                    {
                      id: `base-conversation-${question.activity}`,
                      level: "base",
                      category: "conversation",
                      activity: question.activity,
                      audio: question.audio,
                    },
                  ]}
                />
                <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{question.prompt}</p>
              </div>
            )}
            {!isConversationImageGrid && !isSingleTask && (
              <p className="font-semibold text-[var(--color-text-primary)]">{index + 1}. {question.prompt}</p>
            )}
            {isMatchGrid && question.kind === "match_grid" && (
              <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{question.prompt}</p>
            )}
            {isObjectPick && question.kind === "object_pick" && (
              <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">{question.prompt}</p>
            )}
            <div className={isSingleTask || isConversationImageGrid ? "mt-4" : "mt-3"}>
              <RenderQuestion
                task={question}
                value={answer}
                onChange={(value) => onAnswer(key, value)}
                correction={readonly}
              />
            </div>
            {readonly && !isSingleTask && (
              <p className="mt-2 text-sm font-semibold" style={{ color: answerOk(question, answer) ? "#16a34a" : INVERSE }}>
                Réponse : {question.kind === "choice" ? choiceLabel(question, question.correct) : question.kind === "fill" ? question.answer : ""}
              </p>
            )}
            {readonly && isConversationImageGrid && question.kind === "conversation_image_grid" && (
              <p className="mt-2 text-sm font-semibold" style={{ color: answerOk(question, answer) ? "#16a34a" : INVERSE }}>
                Score activité : {formatPoints(conversationImageGridScore(question, answer))} / 1 pt
              </p>
            )}
            {readonly && isMatchGrid && question.kind === "match_grid" && (
              <p className="mt-2 text-sm font-semibold" style={{ color: answerOk(question, answer) ? "#16a34a" : INVERSE }}>
                Score : {formatPoints(matchGridScore(question, answer))} / {formatPoints(part.points)} pts
              </p>
            )}
            {readonly && isObjectPick && question.kind === "object_pick" && (
              <p className="mt-2 text-sm font-semibold" style={{ color: answerOk(question, answer) ? "#16a34a" : INVERSE }}>
                Score : {formatPoints(objectPickScore(question, answer))} / {formatPoints(part.points)} pts
              </p>
            )}
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
  const sessionSeed = placementSeed ?? localSeed;
  const parts = useMemo(
    () => (mode === "placement" && placementProgressive ? makeProgressiveCoParts(sessionSeed) : makeParts(level, sessionSeed)),
    [level, mode, placementProgressive, sessionSeed],
  );
  const [phase, setPhase] = useState<"intro" | "exercise" | "results">("intro");
  const [remaining, setRemaining] = useState<string[]>(() => parts.map((part) => part.id));
  const [currentId, setCurrentId] = useState(parts[0]!.id);
  const [answers, setAnswers] = useState<Answers>({});
  const [validatedAnswers, setValidatedAnswers] = useState<Record<string, Answers>>({});
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [openResult, setOpenResult] = useState<string | null>(null);

  const currentPart = parts.find((part) => part.id === currentId) ?? parts[0]!;
  const savedAnswers = { ...answers, ...Object.values(validatedAnswers).reduce((acc, value) => ({ ...acc, ...value }), {}) };
  const totalPoints = parts.reduce((sum, part) => sum + scorePart(part, validatedAnswers[part.id] ?? {}), 0);

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
      <main className="mx-auto w-full max-w-xl space-y-7 px-4 pb-28 pt-6">
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
          onStart={() => {
            if (placementSeed == null) setLocalSeed(Date.now());
            setPhase("exercise");
          }}
        />
        <HiddenNav onNext={() => setPhase("exercise")} nextLabel="Commencer" />
      </main>
    );
  }

  if (phase === "results") {
    return (
      <main className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
        <Header level={level} title="Résultats" placement={mode === "placement"} />
        <CommunicationResultsSummary totalPoints={totalPoints} />
        <p className="text-center text-sm text-[var(--color-text-secondary)]">Cliquez sur un exercice pour voir la correction.</p>
        <div className="space-y-3">
          {parts.map((part, index) => {
            const partScore = scorePart(part, validatedAnswers[part.id] ?? {});
            const isOpen = openResult === part.id;
            return (
              <CommunicationResultsExercise
                key={part.id}
                index={index}
                title={part.title}
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
        </div>
        <HiddenNav
          onBack={() => (mode === "placement" ? onPlacementComplete?.({ skill: "co", points: totalPoints, maxPoints: 25 }) : router.push(EXPRESSION_TAB_HREF))}
          onNext={() => (mode === "placement" ? onPlacementComplete?.({ skill: "co", points: totalPoints, maxPoints: 25 }) : router.push(EXPRESSION_TAB_HREF))}
          nextLabel={mode === "placement" ? "Étape suivante" : "Terminer"}
        />
        {mode !== "placement" && <CommunicationFinishButton onClick={() => router.push(EXPRESSION_TAB_HREF)} />}
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
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
