"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { markCommunicationLessonComplete } from "@/lib/progress/communication-progress";
import {
  randomCEText,
  type CEText,
} from "@/lib/curriculum/content/communication/comprehension-ecrite";

type CELevel = "base" | "moyen" | "avance";
type Phase = "intro" | "reading" | "result";

function levelFromId(id: string): CELevel {
  if (id === "CE-2") return "moyen";
  if (id === "CE-3") return "avance";
  return "base";
}

function levelLabel(level: CELevel): string {
  if (level === "moyen") return "Niveau moyen";
  if (level === "avance") return "Niveau avancé";
  return "Niveau base";
}

export function ComprehensionEcritRunner({ lessonId }: { lessonId: string }) {
  const router = useRouter();
  const level = levelFromId(lessonId);
  const submoduleId = lessonId; // CE-1, CE-2, or CE-3

  const [ceText] = useState<CEText>(() => randomCEText(level));
  const [phase, setPhase] = useState<Phase>("intro");
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    Array(ceText.questions.length).fill(null)
  );
  const [results, setResults] = useState<boolean[]>([]);
  const [score, setScore] = useState(0);

  const handleValidate = useCallback(() => {
    const res = ceText.questions.map((q, i) => answers[i] === q.correct);
    const correct = res.filter(Boolean).length;
    setResults(res);
    setScore(correct);
    setPhase("result");
    markCommunicationLessonComplete(submoduleId);
  }, [ceText, answers, submoduleId]);

  const allAnswered = answers.every((a) => a !== null);

  if (phase === "intro") {
    return (
      <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-comm)]">
            Compréhension écrite — {levelLabel(level)}
          </p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            Lire et comprendre
          </h1>
        </div>
        <div className="rounded-xl border border-[var(--color-accent-comm)]/20 bg-[var(--color-accent-comm)]/5 p-5 space-y-3">
          <p className="text-sm text-[var(--color-text-primary)]">
            Tu vas lire un texte en français, puis répondre à des questions de
            compréhension.
          </p>
          <ul className="space-y-2">
            {[
              "Lis le texte attentivement",
              "Réponds aux questions en choisissant la bonne réponse",
              "Valide quand tu as répondu à toutes les questions",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-primary)]">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-comm)] text-[10px] font-bold text-white">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setPhase("reading")}
          className="w-full rounded-full bg-[var(--color-accent-comm)] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Commencer
        </button>
      </div>
    );
  }

  if (phase === "result") {
    const pct = Math.round((score / ceText.questions.length) * 100);
    return (
      <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-comm)]">
            Résultats
          </p>
          <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">
            {score} / {ceText.questions.length} — {pct} %
          </h1>
        </div>

        {/* Corrections */}
        <div className="space-y-4">
          {ceText.questions.map((q, qi) => {
            const ok = results[qi];
            const chosen = answers[qi];
            return (
              <div
                key={qi}
                className={`rounded-xl border p-4 space-y-2 ${ok ? "border-emerald-400/40 bg-emerald-50/40 dark:bg-emerald-950/20" : "border-amber-400/40 bg-amber-50/40 dark:bg-amber-950/20"}`}
              >
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {qi + 1}. {q.question}
                </p>
                <ul className="space-y-1">
                  {q.choices.map((choice, ci) => {
                    const isCorrect = ci === q.correct;
                    const isChosen = ci === chosen;
                    let cls = "text-xs px-3 py-1.5 rounded-lg border ";
                    if (isCorrect)
                      cls += "border-emerald-500 bg-emerald-100 text-emerald-800 font-semibold dark:bg-emerald-900/40 dark:text-emerald-300";
                    else if (isChosen && !isCorrect)
                      cls += "border-amber-500 bg-amber-100 text-amber-800 line-through dark:bg-amber-900/40 dark:text-amber-300";
                    else
                      cls += "border-transparent text-[var(--color-text-secondary)]";
                    return (
                      <li key={ci} className={cls}>
                        {choice}
                        {isCorrect && (
                          <span className="ml-1 text-emerald-600"> ✓</span>
                        )}
                        {isChosen && !isCorrect && (
                          <span className="ml-1 text-amber-600"> ✗</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => router.push("/communication")}
          className="w-full rounded-full bg-[var(--color-accent-comm)] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Retour à l&apos;accueil
        </button>
      </div>
    );
  }

  // Phase reading
  return (
    <div className="mx-auto max-w-xl px-4 py-8 space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-comm)]">
          Compréhension écrite — {levelLabel(level)}
        </p>
        <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
          {ceText.title}
        </h1>
      </div>

      {/* Text block */}
      <div className="rounded-xl border border-[var(--color-accent-comm)]/20 bg-[var(--color-bg-card)] p-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-comm)] mb-3">
          Texte à lire
        </p>
        {ceText.body.split("\n\n").map((para, i) => (
          <p
            key={i}
            className="text-sm leading-relaxed text-[var(--color-text-primary)] mb-3 last:mb-0"
          >
            {para}
          </p>
        ))}
      </div>

      {/* Questions */}
      <div className="space-y-5">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">
          Questions de compréhension
        </p>
        {ceText.questions.map((q, qi) => (
          <div key={qi} className="space-y-2">
            <p className="text-sm font-medium text-[var(--color-text-primary)]">
              {qi + 1}. {q.question}
            </p>
            <div className="space-y-1.5">
              {q.choices.map((choice, ci) => {
                const selected = answers[qi] === ci;
                return (
                  <button
                    key={ci}
                    type="button"
                    onClick={() =>
                      setAnswers((prev) =>
                        prev.map((a, i) => (i === qi ? ci : a))
                      )
                    }
                    className={`w-full rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${
                      selected
                        ? "border-[var(--color-accent-comm)] bg-[var(--color-accent-comm)]/10 font-semibold text-[var(--color-accent-comm)]"
                        : "border-[var(--color-border)] text-[var(--color-text-primary)] hover:border-[var(--color-accent-comm)]/40 hover:bg-[var(--color-accent-comm)]/5"
                    }`}
                  >
                    <span className="mr-2 font-mono text-xs text-[var(--color-text-secondary)]">
                      {String.fromCharCode(65 + ci)}.
                    </span>
                    {choice}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <button
        disabled={!allAnswered}
        onClick={handleValidate}
        className="w-full rounded-full bg-[var(--color-accent-comm)] py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-40"
      >
        Valider mes réponses
      </button>
    </div>
  );
}
