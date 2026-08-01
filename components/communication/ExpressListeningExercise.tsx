"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { COTranscriptView } from "@/components/communication/COTranscriptView";
import { SingleAudioPlayer } from "@/components/communication/SingleAudioPlayer";
import { useEvalReveal } from "@/lib/eval-reveal-context";
import { ExerciseConsigne } from "@/components/print/ExerciseConsigne";
import {
  buildExpressListeningTasks,
  scoreExpressListeningTasks,
  type ExpressListeningTask,
} from "@/lib/curriculum/content/communication/express-listening-helpers";
import type { CommunicationExercise } from "@/lib/curriculum/content/communication/express-types";
import { randomIndexOrder } from "@/lib/curriculum/content/communication/shuffle-qcm-choices";
import { ceCoImageSource } from "@/lib/curriculum/word-image-resolver";

const ACCENT = "var(--color-accent-comm)";

function LightbulbIcon({ active }: { active: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10c.6.6 1 1.3 1 2.1V16h6v-.9c0-.8.4-1.5 1-2.1A6 6 0 0 0 12 3z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={active ? "currentColor" : "none"}
        fillOpacity={active ? 0.2 : 0}
      />
    </svg>
  );
}

function ImageChoice({ label, path }: { label: string; path?: string }) {
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
    <div className="flex aspect-[4/3] w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-center text-xs font-semibold text-slate-500">
      {label}
    </div>
  );
}

function ChoiceView({
  task,
  value,
  onChange,
  correction,
  locked = false,
}: {
  task: Extract<ExpressListeningTask, { kind: "choice" }>;
  value: number | string | null;
  onChange: (value: number) => void;
  correction: boolean;
  /** Réponses verrouillées (validé) sans forcément révéler la correction. */
  locked?: boolean;
}) {
  const orderKey = `${task.prompt}|${task.choices.map((c) => c.label).join("|")}|${task.correct}`;
  const [order, setOrder] = useState<number[] | null>(null);
  useEffect(() => {
    setOrder(randomIndexOrder(task.choices.length));
  }, [orderKey, task.choices.length]);

  const gridCls = task.image ? "grid grid-cols-3 gap-2" : "grid grid-cols-1 gap-2";
  if (!order) return <div className={`min-h-[3rem] ${gridCls}`} aria-hidden />;

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
            disabled={correction || locked}
            onClick={() => onChange(origIndex)}
            className={`rounded-xl border text-left text-sm transition ${
              task.image ? "flex flex-col items-stretch overflow-hidden p-0" : "w-full px-2 py-2"
            } ${
              correct
                ? "border-amber-400 bg-amber-50 text-amber-700"
                : selected
                  ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 text-[var(--color-accent-comm)]"
                  : wrong
                    ? "border-red-200 bg-red-50 text-red-600 line-through"
                    : "border-[var(--color-border-default)] text-[var(--color-text-primary)]"
            }`}
          >
            {task.image ? (
              <ImageChoice label={choice.label} path={choice.image} />
            ) : (
              <span className="flex w-full items-start gap-1.5">
                <span className="shrink-0 font-mono">{String.fromCharCode(97 + displayIndex)}.</span>
                <span className="min-w-0 flex-1 leading-snug">{choice.label}</span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function FillView({
  task,
  value,
  onChange,
  correction,
  locked = false,
}: {
  task: Extract<ExpressListeningTask, { kind: "fill" }>;
  value: number | string | null;
  onChange: (value: string) => void;
  correction: boolean;
  /** Réponses verrouillées (validé) sans forcément révéler la correction. */
  locked?: boolean;
}) {
  const inputValue = typeof value === "string" ? value : "";
  const stem = task.stem ?? "_________";
  const parts = stem.split("_________");
  const shown = correction && !inputValue.trim() ? task.answer : inputValue;
  const { results } = scoreExpressListeningTasks([task], { "0": value });
  const ok = results[0];

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-baseline gap-x-1 gap-y-2 text-sm text-[var(--color-text-primary)]">
        <span>{parts[0]}</span>
        {correction ? (
          <span
            className={`min-w-[6rem] border-b-2 px-1 pb-0.5 font-semibold ${
              ok ? "border-amber-400 text-amber-700" : "border-red-300 text-red-600"
            }`}
          >
            {shown || "—"}
          </span>
        ) : (
          <input
            type="text"
            value={inputValue}
            onChange={(e) => onChange(e.target.value)}
            disabled={locked}
            className="min-w-[6rem] border-0 border-b-2 border-[var(--color-accent-comm)]/60 bg-transparent px-1 pb-0.5 text-sm outline-none focus:border-[var(--color-accent-comm)] disabled:opacity-70"
            autoComplete="off"
            spellCheck={false}
          />
        )}
        <span>{parts[1] ?? ""}</span>
      </div>
      {correction && inputValue.trim() && !ok ? (
        <p className="text-xs text-amber-700">Réponse attendue : {task.answer}</p>
      ) : null}
    </div>
  );
}

export function ExpressListeningExercise({
  exercise,
  exNum,
  seed,
  selected,
  setSelected,
  validated,
}: {
  exercise: CommunicationExercise;
  exNum: number;
  seed: string;
  selected: string | null;
  setSelected: (v: string | null) => void;
  validated: boolean;
}) {
  const [showTranscript, setShowTranscript] = useState(false);
  /** En évaluation, la correction n'est révélée que sur la page de résultats. */
  const reveal = useEvalReveal();

  const payload = useMemo(() => {
    if (!selected) return { seed, answers: {} as Record<string, number | string | null> };
    try {
      const parsed = JSON.parse(selected) as {
        seed?: string;
        answers?: Record<string, number | string | null>;
      };
      return {
        seed: parsed.seed ?? seed,
        answers: parsed.answers ?? {},
      };
    } catch {
      return { seed, answers: {} as Record<string, number | string | null> };
    }
  }, [selected, seed]);

  // Tirage sur la seed des réponses enregistrées (stable au remontage —
  // page de résultats) sinon sur la seed active (re-randomisation).
  const drawSeed = payload.seed;
  const tasks = useMemo(() => {
    if (exercise.questionPool?.length) {
      return buildExpressListeningTasks(
        exercise.questionPool,
        exercise.questionCount ?? 5,
        `${exercise.id}-${drawSeed}`,
      );
    }
    return [] as ExpressListeningTask[];
  }, [exercise, drawSeed]);

  function setAnswer(index: number, value: number | string) {
    if (validated) return;
    const next = {
      seed,
      answers: { ...payload.answers, [String(index)]: value },
    };
    setSelected(JSON.stringify(next));
  }

  // Legacy items fallback (old listeningExercise shape)
  if (!exercise.questionPool?.length && exercise.items?.length) {
    return (
      <LegacyListeningItems
        exercise={exercise}
        exNum={exNum}
        selected={selected}
        setSelected={setSelected}
        validated={validated}
      />
    );
  }

  const showCorrection = validated && reveal;
  const score = showCorrection ? scoreExpressListeningTasks(tasks, payload.answers) : null;

  return (
    <div className="flex flex-1 flex-col">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
        {exercise.transcript ? (
          <button
            type="button"
            onClick={() => setShowTranscript((v) => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
            style={{
              borderColor: ACCENT,
              color: ACCENT,
              background: showTranscript ? `color-mix(in srgb, ${ACCENT} 15%, transparent)` : "transparent",
            }}
            aria-label="Afficher ou masquer la transcription"
            title="Aide : transcription"
          >
            <LightbulbIcon active={showTranscript} />
          </button>
        ) : null}
      </div>

      <ExerciseConsigne>{exercise.instruction}</ExerciseConsigne>

      {exercise.audioSrc ? (
        <div className="mt-3">
          <SingleAudioPlayer src={exercise.audioSrc} label={exercise.audioLabel ?? "Audio"} />
        </div>
      ) : null}

      {showTranscript && exercise.transcript ? (
        <div className="mb-4 mt-2">
          <COTranscriptView
            transcript={exercise.transcript}
            accent={ACCENT}
            audioLabel={exercise.audioLabel}
          />
        </div>
      ) : null}

      <div className="mt-4 space-y-6">
        {tasks.map((task, i) => (
          <div key={`${exercise.id}-q-${i}`}>
            <p className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">
              {i + 1}. {task.kind === "fill" ? task.prompt : task.prompt}
            </p>
            {task.kind === "choice" ? (
              <ChoiceView
                task={task}
                value={payload.answers[String(i)] ?? null}
                onChange={(v) => setAnswer(i, v)}
                correction={showCorrection}
                locked={validated}
              />
            ) : (
              <FillView
                task={task}
                value={payload.answers[String(i)] ?? null}
                onChange={(v) => setAnswer(i, v)}
                correction={showCorrection}
                locked={validated}
              />
            )}
          </div>
        ))}
      </div>

      {showCorrection && score ? (
        <div
          className={`mt-4 rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium ${
            score.correct === score.total
              ? "bg-[var(--color-correct-bg)] text-[var(--color-correct-text)]"
              : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-200"
          }`}
        >
          {score.correct === score.total
            ? "✓ Parfait !"
            : `Résultat : ${score.correct} / ${score.total}`}
        </div>
      ) : null}
    </div>
  );
}

/** Ancien format items[] — conservé pour les autres leçons E1.x non migrées. */
function LegacyListeningItems({
  exercise,
  exNum,
  selected,
  setSelected,
  validated,
}: {
  exercise: CommunicationExercise;
  exNum: number;
  selected: string | null;
  setSelected: (v: string | null) => void;
  validated: boolean;
}) {
  const reveal = useEvalReveal();
  const showCorrection = validated && reveal;
  const items = exercise.items ?? [];
  let answersMap: Record<string, string> = {};
  try {
    answersMap = selected ? (JSON.parse(selected) as Record<string, string>) : {};
  } catch {
    answersMap = {};
  }

  function setItemAnswer(itemId: string, value: string) {
    if (validated) return;
    setSelected(JSON.stringify({ ...answersMap, [itemId]: value }));
  }

  return (
    <div className="flex flex-1 flex-col">
      <h2 className="mb-2 text-lg font-bold text-[var(--color-text-primary)]">Exercice {exNum}</h2>
      <ExerciseConsigne>{exercise.instruction}</ExerciseConsigne>
      {exercise.audioSrc ? (
        <div className="mt-3">
          <SingleAudioPlayer src={exercise.audioSrc} label={exercise.audioLabel ?? "Audio"} />
        </div>
      ) : null}
      <div className="mt-4 space-y-5">
        {items.map((item) => {
          const chosen = answersMap[item.id] ?? null;
          return (
            <div key={item.id}>
              <p className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">{item.prompt}</p>
              <div className="space-y-2">
                {item.choices.map((c) => {
                  const selectedChoice = chosen === c;
                  const correct = showCorrection && c === item.answer;
                  const wrong = showCorrection && selectedChoice && !correct;
                  return (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setItemAnswer(item.id, c)}
                      disabled={validated}
                      className={`w-full rounded-[var(--radius-md)] border-2 px-4 py-2.5 text-left text-sm font-medium ${
                        correct
                          ? "border-[var(--color-correct)] bg-[var(--color-correct-bg)] text-[var(--color-correct-text)]"
                          : wrong
                            ? "border-amber-500 bg-amber-50 text-amber-600"
                            : selectedChoice
                              ? "border-transparent text-white"
                              : "border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]"
                      }`}
                      style={
                        !validated && selectedChoice
                          ? { background: ACCENT, borderColor: ACCENT }
                          : undefined
                      }
                    >
                      {c}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
