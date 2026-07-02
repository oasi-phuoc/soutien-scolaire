"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  randomCoGroup,
  type COAudioCategory,
  type COAudioGroup,
  type COLevel as COAudioLevel,
} from "@/lib/curriculum/content/communication/co-audio";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";

type COLevel = "base" | "moyen" | "avance";
type ChoiceTask = { kind: "choice"; prompt: string; choices: string[]; correct: number };
type FillTask = { kind: "fill"; prompt: string; answer: string; accept?: string[] };
type QuestionTask = ChoiceTask | FillTask;
type COPart = {
  id: COAudioCategory;
  title: string;
  points: number;
  context: string;
  audioGroup: COAudioGroup;
  questions: QuestionTask[];
};
type Answers = Record<string, number | string | null>;

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

const MEDIUM_PART_INFO: Array<Omit<COPart, "audioGroup" | "questions">> = [
  { id: "message", title: "Comprendre un message", points: 6, context: "Écoutez un message vocal." },
  { id: "annonce", title: "Comprendre une annonce", points: 6, context: "Écoutez une série d'annonces courtes." },
  { id: "radio", title: "Comprendre des émissions de radio", points: 6, context: "Écoutez une ou plusieurs annonces radio." },
  { id: "conversation", title: "Comprendre des conversations", points: 7, context: "Écoutez plusieurs échanges courts." },
];

function partInfoFor(level: COLevel) {
  return level === "moyen" ? MEDIUM_PART_INFO : BASE_PART_INFO;
}

function audioLevelFor(level: COLevel): COAudioLevel {
  return level === "moyen" ? "moyen" : "base";
}

function makeParts(level: COLevel): COPart[] {
  const audioLevel = audioLevelFor(level);
  return partInfoFor(level).map((part) => ({
    ...part,
    audioGroup: randomCoGroup(audioLevel, part.id),
    questions: [],
  }));
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

function answerOk(task: QuestionTask, answer: number | string | null) {
  if (task.kind === "choice") return answer === task.correct;
  const value = normalize(String(answer ?? ""));
  if (!value) return false;
  return [task.answer, ...(task.accept ?? [])].map(normalize).some((expected) => value.includes(expected));
}

function scorePart(part: COPart, answers: Answers) {
  if (!part.questions.length) return 0;
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

function Header({ level, title }: { level: COLevel; title: string }) {
  const router = useRouter();
  return (
    <div className="flex items-start gap-3">
      <button
        type="button"
        onClick={() => router.push("/communication")}
        aria-label="Quitter la leçon"
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-85"
        style={{ background: ACCENT }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
          Français · Compréhension orale · {levelLabel(level)}
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
    <div className="hidden">
      {onBack && <button type="button" data-nav-action="back" disabled={backDisabled} onClick={onBack}>Retour</button>}
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
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm font-semibold" style={{ color: ACCENT }}>
        <span>{formatPoints(points)} / 25 points</span>
        <span className="rounded-full bg-[var(--color-accent-comm)]/10 px-3 py-1">{formatTimer(secondsLeft)}</span>
        <span className="text-[var(--color-text-secondary)]">{remaining.length} exercices restants</span>
      </div>
      <div className="flex gap-1">
        {visibleParts.map((part) => (
          <button
            key={part.id}
            type="button"
            onClick={() => onSelect(part.id)}
            className="h-2 flex-1 rounded-full transition-opacity"
            style={{ background: part.id === currentId ? ACCENT : `${ACCENT}55` }}
            aria-label={part.title}
          />
        ))}
      </div>
    </div>
  );
}

function AudioPlayer({ audio }: { audio: string }) {
  return (
    <audio controls preload="metadata" className="w-full rounded-full" src={audio}>
      Votre navigateur ne peut pas lire cet audio.
    </audio>
  );
}

function QuestionBlock({
  part,
  answers,
  onAnswer,
  readonly,
}: {
  part: COPart;
  answers: Answers;
  onAnswer: (key: string, value: number | string) => void;
  readonly?: boolean;
}) {
  const [showTranscripts, setShowTranscripts] = useState(false);
  const hasTranscript = part.audioGroup.items.some((item) => item.transcript);

  return (
    <div className="space-y-5">
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text-primary)]">{part.title}</h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Écoutez l&apos;enregistrement et répondez aux questions.
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
        <div className="space-y-3">
          {part.audioGroup.items.map((item) => {
            return (
              <div key={item.id} className="space-y-3">
                <AudioPlayer audio={item.audio} />
                {showTranscripts && item.transcript && (
                  <div className="border-l-2 py-1 pl-3 text-sm leading-relaxed text-[var(--color-text-primary)]" style={{ borderColor: ACCENT }}>
                    {item.transcript}
                  </div>
                )}
              </div>
            );
          })}
        </div>
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
            <p className="font-semibold text-[var(--color-text-primary)]">{index + 1}. {question.prompt}</p>
            {question.kind === "choice" ? (
              <div className="mt-3 grid gap-2 sm:grid-cols-3">
                {question.choices.map((choice, choiceIndex) => {
                  const selected = answer === choiceIndex;
                  const correct = readonly && choiceIndex === question.correct;
                  return (
                    <button
                      key={choice}
                      type="button"
                      disabled={readonly}
                      onClick={() => onAnswer(key, choiceIndex)}
                      className="rounded-[var(--radius-sm)] border px-3 py-2 text-left text-sm transition-colors"
                      style={{
                        borderColor: correct ? INVERSE : selected ? ACCENT : "var(--color-border)",
                        color: correct ? INVERSE : selected ? ACCENT : "var(--color-text-primary)",
                        background: selected && !readonly ? `${ACCENT}14` : "white",
                      }}
                    >
                      {choice}
                    </button>
                  );
                })}
              </div>
            ) : (
              <input
                type="text"
                disabled={readonly}
                value={String(answer ?? "")}
                onChange={(event) => onAnswer(key, event.target.value)}
                className="mt-3 w-full border-0 border-b-2 bg-transparent px-1 py-2 text-[var(--color-text-primary)] outline-none focus:border-[var(--color-accent-comm)] disabled:opacity-80"
                style={{ borderColor: readonly && answerOk(question, answer) ? INVERSE : `${ACCENT}80` }}
              />
            )}
            {readonly && (
              <p className="mt-2 text-sm font-semibold" style={{ color: answerOk(question, answer) ? "#16a34a" : INVERSE }}>
                Réponse : {question.kind === "choice" ? question.choices[question.correct] : question.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function ComprehensionOraleRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const lessonCode = level === "base" ? "CO.1" : level === "moyen" ? "CO.2" : "CO.3";
  const parts = useMemo(() => makeParts(level), [level]);
  const [phase, setPhase] = useState<"intro" | "exercise" | "results">("intro");
  const [remaining, setRemaining] = useState<string[]>(() => parts.map((part) => part.id));
  const [currentId, setCurrentId] = useState(parts[0]!.id);
  const [answers, setAnswers] = useState<Answers>({});
  const [validatedAnswers, setValidatedAnswers] = useState<Record<string, Answers>>({});
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [openResult, setOpenResult] = useState<string | null>(null);
  const [showTips, setShowTips] = useState(false);

  const currentPart = parts.find((part) => part.id === currentId) ?? parts[0]!;
  const savedAnswers = { ...answers, ...Object.values(validatedAnswers).reduce((acc, value) => ({ ...acc, ...value }), {}) };
  const totalPoints = parts.reduce((sum, part) => sum + scorePart(part, validatedAnswers[part.id] ?? {}), 0);

  useEffect(() => {
    if (phase !== "exercise") return;
    const timer = window.setInterval(() => setSecondsLeft((value) => Math.max(0, value - 1)), 1000);
    return () => window.clearInterval(timer);
  }, [phase]);

  const selectPart = useCallback((id: string) => {
    if (remaining.includes(id)) setCurrentId(id as COAudioCategory);
  }, [remaining]);

  const move = useCallback((direction: 1 | -1) => {
    if (!remaining.length) return;
    const index = remaining.indexOf(currentId);
    const nextIndex = index === -1 ? 0 : (index + direction + remaining.length) % remaining.length;
    setCurrentId(remaining[nextIndex]! as COAudioCategory);
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
      void markCommunicationLessonComplete(lessonCode);
      setPhase("results");
      return;
    }
    setCurrentId(nextRemaining[0]! as COAudioCategory);
  }, [answers, currentPart, lessonCode, remaining]);

  function resetCurrent() {
    const prefix = `${currentId}-`;
    setAnswers((previous) => Object.fromEntries(Object.entries(previous).filter(([key]) => !key.startsWith(prefix))));
  }

  if (phase === "intro") {
    return (
      <main className="mx-auto w-full max-w-xl space-y-7 px-4 pb-28 pt-6">
        <Header level={level} title="Compréhension orale" />
        <section className="rounded-[var(--radius-lg)] border border-slate-200 bg-white/80 p-5 shadow-none">
          <h2 className="font-bold text-[var(--color-text-primary)]">Informations</h2>
          <ul className="mt-3 space-y-2 text-[var(--color-text-secondary)]">
            <li><span style={{ color: ACCENT }}>•</span> <strong>{partInfoFor(level).length} exercices</strong> d&apos;écoute</li>
            <li><span style={{ color: ACCENT }}>•</span> <strong>25 minutes</strong> pour compléter l&apos;évaluation</li>
            <li><span style={{ color: ACCENT }}>•</span> Les audios restent disponibles pendant tout l&apos;exercice</li>
            <li><span style={{ color: ACCENT }}>•</span> Validez chaque exercice individuellement</li>
            <li><span style={{ color: ACCENT }}>•</span> Score maximum : <strong>25 points</strong></li>
          </ul>
          <div className="mt-5 grid gap-2">
            {partInfoFor(level).map((part, index) => (
              <div key={part.id} className="flex items-center justify-between rounded-[var(--radius-md)] border border-slate-200 bg-white px-4 py-3">
                <span><strong>{index + 1}.</strong> {part.title}</span>
                <span className="font-semibold" style={{ color: ACCENT }}>{part.points} points</span>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowTips((value) => !value)}
            className="mt-5 w-full rounded-[var(--radius-lg)] border border-slate-200 bg-white px-4 py-3 text-left font-semibold text-[var(--color-text-primary)]"
          >
            Conseils pour réussir
          </button>
          {showTips && (
            <div className="mt-3 space-y-2 border-l-2 bg-transparent py-1 pl-3 text-sm leading-relaxed text-[var(--color-text-secondary)]" style={{ borderColor: ACCENT }}>
              <p>Écoutez une première fois pour comprendre la situation générale.</p>
              <p>À la deuxième écoute, repérez les noms, les lieux, les horaires et les actions demandées.</p>
              <p>Ne bloquez pas sur un mot inconnu : utilisez le contexte pour choisir la réponse la plus logique.</p>
            </div>
          )}
        </section>
        <button
          type="button"
          onClick={() => setPhase("exercise")}
          className="w-full rounded-full px-5 py-4 font-bold text-white shadow-sm transition-opacity hover:opacity-90"
          style={{ background: ACCENT }}
        >
          Commencer l&apos;évaluation
        </button>
        <HiddenNav onNext={() => setPhase("exercise")} nextLabel="Commencer" />
      </main>
    );
  }

  if (phase === "results") {
    const note = Math.min(6, Math.max(1, (totalPoints / 25) * 5 + 1));
    const mention = note >= 5 ? "Très bien" : note >= 4 ? "Bien" : note >= 3 ? "À renforcer" : "À améliorer";
    return (
      <main className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
        <Header level={level} title="Résultats" />
        <section className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em]" style={{ color: ACCENT }}>Résultats</p>
          <p className="mt-3 text-4xl font-bold text-[var(--color-text-primary)]">{formatPoints(totalPoints)} / 25</p>
        </section>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4 text-center">
            <p className="text-sm text-[var(--color-text-secondary)]">Points</p>
            <p className="text-2xl font-bold">{formatPoints(totalPoints)}</p>
          </div>
          <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white p-4 text-center">
            <p className="text-sm text-[var(--color-text-secondary)]">Note</p>
            <p className="text-2xl font-bold">{note.toFixed(1).replace(".", ",")} / 6</p>
          </div>
          <div className="rounded-[var(--radius-md)] border bg-white p-4 text-center" style={{ borderColor: ACCENT }}>
            <p className="text-sm text-[var(--color-text-secondary)]">Mention</p>
            <p className="font-bold" style={{ color: ACCENT }}>{mention}</p>
          </div>
        </div>
        <p className="text-center text-sm text-[var(--color-text-secondary)]">Cliquez sur un exercice pour voir la correction.</p>
        <div className="space-y-3">
          {parts.map((part, index) => {
            const partScore = scorePart(part, validatedAnswers[part.id] ?? {});
            const isOpen = openResult === part.id;
            return (
              <section key={part.id} className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white">
                <button
                  type="button"
                  onClick={() => setOpenResult(isOpen ? null : part.id)}
                  className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold"
                >
                  <span><span style={{ color: ACCENT }}>{index + 1}</span> {part.title}</span>
                  <span style={{ color: ACCENT }}>{formatPoints(partScore)} / {part.points} :</span>
                </button>
                {isOpen && (
                  <div className="border-t border-[var(--color-border)] p-4">
                    <QuestionBlock
                      part={part}
                      answers={validatedAnswers[part.id] ?? {}}
                      onAnswer={() => undefined}
                      readonly
                    />
                  </div>
                )}
              </section>
            );
          })}
        </div>
        <HiddenNav onBack={() => router.push("/communication")} onNext={() => router.push("/communication")} nextLabel="Terminer" />
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-xl space-y-6 px-4 pb-28 pt-6">
      <Header level={level} title="Compréhension orale" />
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
        onRefresh={resetCurrent}
        onValidate={validateCurrent}
        onNext={() => move(1)}
        nextLabel="Suivant"
      />
    </main>
  );
}
