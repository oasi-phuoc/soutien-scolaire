"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { CommunicationAiPractice } from "@/components/communication/CommunicationAiPractice";
import {
  COMMUNICATION_P1_1,
  type CommunicationLesson,
  type CommunicationTheoryBlock,
} from "@/lib/curriculum/content/communication/communication-p1-1";

const ACCENT = "var(--color-accent-comm)";
const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";

const LESSONS: Record<string, CommunicationLesson> = {
  "P1-1": COMMUNICATION_P1_1,
  "A1-1": COMMUNICATION_P1_1,
};

type Phase = "theory" | "exercises" | "score";

// ——— Theory block renderers ———

function TheoryBlock({ block }: { block: CommunicationTheoryBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <div className="mb-6">
          <h2
            className="text-xl font-bold"
            style={{ color: ACCENT, borderBottom: `2px solid ${ACCENT}`, paddingBottom: "0.25rem" }}
          >
            {block.text}
          </h2>
        </div>
      );

    case "subheading":
      return (
        <div className="mb-3 mt-5 flex items-center gap-2">
          <span
            className="inline-block h-2 w-2 rounded-full shrink-0"
            style={{ background: ACCENT }}
          />
          <h3 className="text-base font-bold text-[var(--color-text-primary)]">
            {block.text}
          </h3>
        </div>
      );

    case "table":
      return (
        <div className="mb-4 overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: `color-mix(in srgb, ${ACCENT} 12%, transparent)` }}>
                {block.headers.map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide"
                    style={{ color: ACCENT }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-[var(--color-bg-primary)]" : "bg-[var(--color-bg-secondary)]"}
                >
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-3 py-2 text-[var(--color-text-primary)]">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "note":
      return (
        <div className="mb-4 flex gap-2 rounded-[var(--radius-md)] border border-amber-300 bg-amber-50 px-3 py-2.5 dark:border-amber-700 dark:bg-amber-950">
          <span className="shrink-0 text-amber-600 dark:text-amber-400">⚠️</span>
          <p className="text-sm text-amber-800 dark:text-amber-200">{block.text}</p>
        </div>
      );

    case "dialogue":
      return (
        <div className="mb-4 space-y-2">
          {block.lines.map((line, i) => {
            const isA = line.role === "A";
            return (
              <div
                key={i}
                className={`flex ${isA ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
                    isA
                      ? "rounded-tl-sm bg-[var(--color-bg-secondary)] text-[var(--color-text-primary)]"
                      : "rounded-tr-sm text-white"
                  }`}
                  style={!isA ? { background: ACCENT } : undefined}
                >
                  <p className={`mb-0.5 text-[10px] font-semibold uppercase tracking-wide ${isA ? "" : "text-white/80"}`}
                    style={isA ? { color: ACCENT } : undefined}>
                    {isA ? "Personne A" : "Personne B"}
                  </p>
                  <p>{line.text}</p>
                  {line.translation && (
                    <p className={`mt-0.5 text-xs italic ${isA ? "text-[var(--color-text-secondary)]" : "text-white/70"}`}>
                      {line.translation}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      );

    case "vocab":
      return (
        <div className="mb-4 space-y-2">
          {block.items.map((item, i) => (
            <div key={i} className="flex items-start gap-2 rounded-[var(--radius-md)] bg-[var(--color-bg-secondary)] px-3 py-2">
              <span className="shrink-0 text-sm font-bold" style={{ color: ACCENT }}>
                {item.fr}
              </span>
              <span className="text-sm text-[var(--color-text-secondary)]">— {item.example}</span>
            </div>
          ))}
        </div>
      );

    default:
      return null;
  }
}

// ——— MCQ Exercise (no internal nav — parent handles it) ———

function MCQExercise({
  question,
  instruction,
  choices,
  answer,
  exNum,
  total,
  selected,
  setSelected,
  validated,
}: {
  question: string;
  instruction: string;
  choices: string[];
  answer: string;
  exNum: number;
  total: number;
  selected: string | null;
  setSelected: (v: string | null) => void;
  validated: boolean;
}) {
  const isCorrect = selected === answer;

  return (
    <div className="flex flex-1 flex-col">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-secondary)]">
        Exercice {exNum} / {total}
      </p>
      <p className="mb-1 text-xs text-[var(--color-text-secondary)]">{instruction}</p>
      <p className="mb-5 text-base font-bold text-[var(--color-text-primary)]">{question}</p>

      <div className="space-y-2.5">
        {choices.map((c) => {
          let cls =
            "w-full rounded-[var(--radius-md)] border-2 px-4 py-3 text-left text-sm font-medium transition-colors";
          if (!validated) {
            if (selected === c) {
              cls += " text-white border-transparent";
            } else {
              cls +=
                " border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:border-[var(--color-border-emphasis)]";
            }
          } else {
            if (c === answer) {
              cls +=
                " border-[var(--color-correct)] bg-[var(--color-correct-bg)] text-[var(--color-correct-text)]";
            } else if (c === selected && selected !== answer) {
              cls += " border-amber-500 bg-amber-50 text-amber-600";
            } else {
              cls +=
                " border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-secondary)] opacity-50";
            }
          }

          return (
            <button
              key={c}
              type="button"
              onClick={() => {
                if (validated) return;
                setSelected(c);
              }}
              className={cls}
              style={
                !validated && selected === c
                  ? { background: ACCENT, borderColor: ACCENT }
                  : undefined
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      {validated && (
        <div
          className={`mt-4 rounded-[var(--radius-md)] px-3 py-2 text-sm font-medium ${
            isCorrect
              ? "bg-[var(--color-correct-bg)] text-[var(--color-correct-text)]"
              : "bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-200"
          }`}
        >
          {isCorrect ? "✓ Bonne réponse !" : `✗ La bonne réponse est : ${answer}`}
        </div>
      )}
    </div>
  );
}

// ——— Main component ———

export function CommunicationRunner({ lessonId }: { lessonId: string }) {
  if (lessonId === "P1-0" || lessonId === "AI-1") return <CommunicationAiPractice />;
  return <CommunicationLessonRunner lessonId={lessonId} />;
}

function CommunicationLessonRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const lesson = LESSONS[lessonId];

  const [phase, setPhase] = useState<Phase>("theory");
  const [exIndex, setExIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [exerciseValidated, setExerciseValidated] = useState(false);

  if (!lesson) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
        <p className="text-sm text-[var(--color-text-secondary)]">Leçon introuvable.</p>
        <button
          type="button"
          onClick={() => router.push("/communication")}
          className="text-sm font-medium underline"
          style={{ color: ACCENT }}
        >
          Retour
        </button>
      </div>
    );
  }

  const totalEx = lesson.exercises.length;
  const progressPct =
    phase === "theory"
      ? 10
      : phase === "exercises"
        ? 10 + Math.round((exIndex / totalEx) * 80)
        : 100;

  function handleFinish() {
    try {
      const raw = localStorage.getItem(COMM_PROGRESS_KEY);
      const prev: Record<string, boolean> = raw ? JSON.parse(raw) : {};
      prev[lesson.id] = true;
      localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify(prev));
      const MAIN_KEY = "soutien-learning-progress-v1";
      const mainRaw = localStorage.getItem(MAIN_KEY);
      if (mainRaw) {
        const main = JSON.parse(mainRaw) as Record<string, unknown>;
        main.commProgress = prev;
        localStorage.setItem(MAIN_KEY, JSON.stringify(main));
        window.dispatchEvent(new CustomEvent("progress-saved", { detail: main }));
      }
    } catch {
      /* ignore */
    }
    router.push("/francais?tab=communication");
  }

  function goBack() {
    if (phase === "theory") {
      router.push("/communication");
    } else if (phase === "exercises") {
      setPhase("theory");
      setSelected(null);
      setExerciseValidated(false);
    } else {
      setPhase("exercises");
    }
  }

  function handleReset() {
    setSelected(null);
    setExerciseValidated(false);
  }

  function handleValidate() {
    if (!selected || exerciseValidated) return;
    setExerciseValidated(true);
  }

  function goNext() {
    if (phase === "theory") {
      setPhase("exercises");
      setSelected(null);
      setExerciseValidated(false);
    } else if (phase === "exercises") {
      if (!exerciseValidated) return;
      const correct = selected === lesson.exercises[exIndex]!.answer;
      const newResults = [...results, correct];
      setResults(newResults);
      if (exIndex + 1 >= totalEx) {
        setPhase("score");
      } else {
        setExIndex(exIndex + 1);
        setSelected(null);
        setExerciseValidated(false);
      }
    } else {
      handleFinish();
    }
  }

  const isLastStep = phase === "score";
  const showExerciseControls = phase === "exercises";
  const nextDisabled = phase === "exercises" && !exerciseValidated;

  const score = results.filter(Boolean).length;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pt-4 pb-32">
      {/* Progress bar */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex-1 overflow-hidden rounded-full bg-[var(--color-bg-secondary)] h-2">
          <div
            className="h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%`, background: ACCENT }}
          />
        </div>
        <span className="text-xs font-medium tabular-nums text-[var(--color-text-secondary)]">
          {progressPct}%
        </span>
      </div>

      {/* Theory phase */}
      {phase === "theory" && (
        <div className="flex flex-1 flex-col">
          <div className="flex-1">
            {lesson.theory.map((block, i) => (
              <TheoryBlock key={i} block={block} />
            ))}
          </div>
        </div>
      )}

      {/* Exercises phase */}
      {phase === "exercises" && lesson.exercises[exIndex] && (
        <MCQExercise
          key={exIndex}
          question={lesson.exercises[exIndex]!.question}
          instruction={lesson.exercises[exIndex]!.instruction}
          choices={lesson.exercises[exIndex]!.choices}
          answer={lesson.exercises[exIndex]!.answer}
          exNum={exIndex + 1}
          total={totalEx}
          selected={selected}
          setSelected={setSelected}
          validated={exerciseValidated}
        />
      )}

      {/* Score phase */}
      {phase === "score" && (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <div
            className="flex h-24 w-24 items-center justify-center rounded-full text-white text-3xl font-bold"
            style={{ background: ACCENT }}
          >
            {score}/{totalEx}
          </div>
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
              {score === totalEx
                ? "Parfait !"
                : score >= totalEx * 0.75
                  ? "Très bien !"
                  : score >= totalEx * 0.5
                    ? "Bien joué !"
                    : "Continuez à pratiquer !"}
            </h2>
            <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
              Vous avez {score} bonne{score > 1 ? "s" : ""} réponse{score > 1 ? "s" : ""} sur {totalEx}.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              setPhase("exercises");
              setExIndex(0);
              setResults([]);
              setSelected(null);
              setExerciseValidated(false);
            }}
            className="w-full rounded-[var(--radius-md)] border-2 py-3 text-sm font-bold transition-colors hover:bg-[var(--color-bg-secondary)]"
            style={{ borderColor: ACCENT, color: ACCENT }}
          >
            Recommencer les exercices
          </button>
        </div>
      )}

      {/* Fixed bottom nav — same pattern as math modules */}
      <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-bg-primary)]">
        <div className="border-t border-[var(--color-border-default)]">
          <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
            {/* Back button */}
            <button
              type="button"
              onClick={goBack}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl border border-[var(--color-border-default)] px-4 text-sm font-medium text-[var(--color-text-secondary)] transition-opacity"
            >
              ← Retour
            </button>

            {/* Reset + Validate (exercises only) */}
            {showExerciseControls ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={exerciseValidated}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-bg-secondary)] active:scale-90 disabled:opacity-30"
                  aria-label="Réinitialiser"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M1 4v6h6" /><path d="M3.51 15a9 9 0 1 0 .49-4" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={handleValidate}
                  disabled={!selected || exerciseValidated}
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-sm transition-opacity hover:opacity-90 active:scale-90 disabled:opacity-30"
                  style={{ background: ACCENT }}
                  aria-label="Valider"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </button>
              </div>
            ) : (
              <span />
            )}

            {/* Next / Finish button */}
            <button
              type="button"
              onClick={goNext}
              disabled={nextDisabled}
              className="flex h-11 min-w-[90px] items-center justify-center gap-1 rounded-xl px-4 text-sm font-medium text-white transition-opacity disabled:opacity-30"
              style={{ background: ACCENT }}
            >
              {isLastStep ? "Terminer ✓" : "Suivant →"}
            </button>
          </div>
        </div>
        <div style={{ height: 72 }} />
      </div>
    </div>
  );
}
