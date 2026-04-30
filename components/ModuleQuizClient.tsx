"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { recordRemoteQuizAttempt } from "@/app/actions/progress";
import type { QuizItem } from "@/lib/quiz";
import { readQuizStored, writeQuizStored } from "@/lib/progress-local";

type Props = {
  slug: string;
  passingPercent: number;
  items: QuizItem[];
  moduleTitle: string;
};

export function ModuleQuizClient({
  slug,
  passingPercent,
  items,
  moduleTitle,
}: Props) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const scores = useMemo(() => {
    let ok = 0;
    for (const q of items) {
      if (answers[q.id] === q.correctId) ok += 1;
    }
    return { score: ok, max: items.length };
  }, [answers, items]);

  const pct =
    scores.max > 0 ? Math.round((scores.score / scores.max) * 100) : 0;
  const passedNow = pct >= passingPercent;

  function submit() {
    setSubmitted(true);
    writeQuizStored(slug, scores.score, scores.max, passingPercent);
    const passed =
      scores.max > 0 &&
      Math.round((scores.score / scores.max) * 100) >= passingPercent;
    void recordRemoteQuizAttempt({
      moduleSlug: slug,
      score: scores.score,
      maxScore: scores.max,
      passed,
    });
  }

  const previous = typeof window !== "undefined" ? readQuizStored(slug) : null;

  return (
    <div className="space-y-8">
      {previous && !submitted ? (
        <p className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm dark:border-zinc-800 dark:bg-zinc-900">
          Déjà fait le{" "}
          {previous.at
            ? new Date(previous.at).toLocaleDateString("fr-CH")
            : "—"}
          {" : "}
          <strong>
            {previous.score}/{previous.max}
          </strong>
          {previous.passed ? " — réussi" : " — à améliorer"}
        </p>
      ) : null}

      <ol className="space-y-6">
        {items.map((q, idx) => (
          <li
            key={q.id}
            className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {idx + 1}. {q.question}
            </p>
            <fieldset className="mt-3 space-y-2" disabled={submitted}>
              <legend className="sr-only">{q.question}</legend>
              {q.choices.map((c) => {
                const sel = answers[q.id] === c.id;
                const reveal = submitted;
                const isCorrect = c.id === q.correctId;
                const wrongSel = reveal && sel && !isCorrect;
                const rightSel = reveal && isCorrect && sel;
                return (
                  <label
                    key={c.id}
                    className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-3 py-2 text-sm transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-teal-500 ${
                      rightSel
                        ? "border-emerald-500 bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-950/40"
                        : wrongSel
                          ? "border-red-400 bg-red-50 dark:border-red-600 dark:bg-red-950/30"
                          : sel
                            ? "border-teal-600 bg-teal-50 dark:border-teal-500 dark:bg-teal-950/30"
                            : "border-transparent bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-800/80 dark:hover:bg-zinc-800"
                    }`}
                  >
                    <input
                      type="radio"
                      className="h-5 w-5 shrink-0 accent-teal-700"
                      name={q.id}
                      value={c.id}
                      checked={sel}
                      onChange={() =>
                        setAnswers((a) => ({ ...a, [q.id]: c.id }))
                      }
                    />
                    <span className="leading-snug">{c.text}</span>
                  </label>
                );
              })}
            </fieldset>
            {submitted && answers[q.id] !== q.correctId ? (
              <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-400">
                Bonne réponse : «{" "}
                {q.choices.find((c) => c.id === q.correctId)?.text} ».
              </p>
            ) : null}
          </li>
        ))}
      </ol>

      <div className="sticky bottom-[5.25rem] z-30 flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white/95 p-4 backdrop-blur sm:static dark:border-zinc-800 dark:bg-zinc-900/95 print:hidden">
        {!submitted ? (
          <button
            type="button"
            className="min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white disabled:opacity-50 dark:bg-teal-600"
            disabled={items.some((q) => !answers[q.id])}
            onClick={submit}
          >
            Vérifier mes réponses
          </button>
        ) : (
          <div className="space-y-3">
            <p className="text-center text-lg font-semibold">
              Score : {scores.score}/{scores.max} ({pct}%)
            </p>
            <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
              {passedNow
                ? `Bravo — mini-test réussi (${passingPercent} % ou plus pour valider).`
                : `Objectif pour valider : au moins ${passingPercent} %. Tu peux relire le module puis réessayer.`}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Link
                href={`/modules/${slug}`}
                className="flex min-h-12 flex-1 items-center justify-center rounded-xl border border-zinc-300 text-center font-semibold dark:border-zinc-600"
              >
                Retour au module
              </Link>
              <Link
                href="/bibliotheque"
                className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-teal-700 text-center font-semibold text-white dark:bg-teal-600"
              >
                Bibliothèque
              </Link>
            </div>
          </div>
        )}
      </div>

      <p className="pb-24 text-xs text-zinc-500 print:hidden">{moduleTitle}</p>
    </div>
  );
}
