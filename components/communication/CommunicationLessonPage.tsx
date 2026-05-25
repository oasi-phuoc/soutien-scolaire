"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  COMM_A1_1_SE_PRESENTER,
  type CommLesson,
  type CommTheoryBlock,
} from "@/lib/curriculum/content/communication/comm-a1-1-se-presenter";

const ACCENT = "var(--color-accent-comm)";
const COMM_PROGRESS_KEY = "soutien-comm-progress-v1";

const LESSONS: Record<string, CommLesson> = {
  "A1-1": COMM_A1_1_SE_PRESENTER,
};

type Phase = "theory" | "exercises" | "score";

// ——— Theory block renderers ———

function TheoryBlock({ block }: { block: CommTheoryBlock }) {
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

// ——— MCQ Exercise ———

type MCQState = "idle" | "selected" | "validated";

function MCQExercise({
  question,
  instruction,
  choices,
  answer,
  exNum,
  total,
  onResult,
}: {
  question: string;
  instruction: string;
  choices: string[];
  answer: string;
  exNum: number;
  total: number;
  onResult: (correct: boolean) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [state, setState] = useState<MCQState>("idle");

  function handleValidate() {
    if (!selected) return;
    setState("validated");
    onResult(selected === answer);
  }

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
          if (state === "idle" || state === "selected") {
            if (selected === c) {
              cls += " text-white border-transparent";
            } else {
              cls +=
                " border-[var(--color-border-default)] bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] hover:border-[var(--color-border-emphasis)]";
            }
          } else {
            // validated
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
                if (state === "validated") return;
                setSelected(c);
                setState("selected");
              }}
              className={cls}
              style={
                (state === "idle" || state === "selected") && selected === c
                  ? { background: ACCENT, borderColor: ACCENT }
                  : undefined
              }
            >
              {c}
            </button>
          );
        })}
      </div>

      {state === "validated" && (
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

      <div className="flex-1" />

      <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
        <div className="mx-auto flex max-w-xl gap-3">
          {state !== "validated" ? (
            <button
              type="button"
              onClick={handleValidate}
              disabled={!selected}
              className="flex-1 rounded-[var(--radius-md)] py-3 text-sm font-bold text-white transition-opacity disabled:opacity-40"
              style={{ background: ACCENT }}
            >
              Valider
            </button>
          ) : (
            <button
              type="button"
              onClick={() => onResult(selected === answer)}
              className="flex-1 rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
              style={{ background: ACCENT }}
            >
              Suivant →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ——— Main component ———

export function CommunicationLessonPage({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const lesson = LESSONS[lessonId];

  const [phase, setPhase] = useState<Phase>("theory");
  const [exIndex, setExIndex] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);

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

  function handleExerciseResult(correct: boolean) {
    const newResults = [...results, correct];
    setResults(newResults);
    if (exIndex + 1 >= totalEx) {
      setPhase("score");
    } else {
      setExIndex(exIndex + 1);
    }
  }

  function handleFinish() {
    try {
      const raw = localStorage.getItem(COMM_PROGRESS_KEY);
      const prev: Record<string, boolean> = raw ? JSON.parse(raw) : {};
      prev[lesson.id] = true;
      localStorage.setItem(COMM_PROGRESS_KEY, JSON.stringify(prev));
    } catch {
      /* ignore */
    }
    router.push("/communication");
  }

  const score = results.filter(Boolean).length;

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col px-4 pt-4 pb-32">
      {/* Progress bar */}
      <div className="mb-4 flex items-center gap-3">
        <button
          type="button"
          onClick={() => {
            if (phase === "theory") router.push("/communication");
            else if (phase === "exercises") setPhase("theory");
            else setPhase("exercises");
          }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)] transition-colors"
          aria-label="Retour"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
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
          <div className="fixed bottom-0 left-0 right-0 border-t border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3">
            <div className="mx-auto max-w-xl">
              <button
                type="button"
                onClick={() => setPhase("exercises")}
                className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
                style={{ background: ACCENT }}
              >
                Commencer les exercices →
              </button>
            </div>
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
          onResult={handleExerciseResult}
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
          <div className="w-full space-y-3">
            <button
              type="button"
              onClick={handleFinish}
              className="w-full rounded-[var(--radius-md)] py-3 text-sm font-bold text-white"
              style={{ background: ACCENT }}
            >
              Terminer
            </button>
            <button
              type="button"
              onClick={() => {
                setPhase("exercises");
                setExIndex(0);
                setResults([]);
              }}
              className="w-full rounded-[var(--radius-md)] border-2 py-3 text-sm font-bold transition-colors hover:bg-[var(--color-bg-secondary)]"
              style={{ borderColor: ACCENT, color: ACCENT }}
            >
              Recommencer les exercices
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
