"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AppProgressBar } from "@/components/ui/AppProgressBar";
import { VOWELS, CONSONANTS, VOWEL_REVISIONS, CONSONANT_REVISIONS } from "@/lib/curriculum/lecture-data";
import {
  loadLectureProgress,
  computeLecturePercent,
  getItemState,
  TOTAL_LETTERS,
} from "@/lib/progress/lecture-progress";
import type { LectureProgress, ItemState } from "@/lib/progress/lecture-progress";

// ── State badge ────────────────────────────────────────────────────────────────

function StateBadge({ state }: { state: ItemState }) {
  if (state === "completed")
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500 text-white">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
    );
  if (state === "locked")
    return (
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-border-emphasis)] text-[var(--color-text-secondary)]">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      </span>
    );
  return (
    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[var(--color-accent-lecture)] text-[var(--color-accent-lecture)]">
      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden>
        <circle cx="4" cy="4" r="4" />
      </svg>
    </span>
  );
}

// ── Letter card ────────────────────────────────────────────────────────────────

function LetterCard({
  letter,
  letterLower,
  phoneme,
  state,
}: {
  letter: string;
  letterLower: string;
  phoneme: string;
  state: ItemState;
}) {
  const locked = state === "locked";
  const content = (
    <div
      className={`flex items-center gap-3 rounded-[var(--radius-lg)] border px-4 py-3 transition-colors ${
        state === "completed"
          ? "border-green-500/40 bg-green-50/50 dark:bg-green-900/10"
          : state === "available"
            ? "border-[var(--color-accent-lecture)]/40 bg-[var(--color-bg-primary)] hover:border-[var(--color-accent-lecture)]"
            : "border-[var(--color-border-default)] bg-[var(--color-bg-secondary)] opacity-50"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg font-bold ${
          locked
            ? "bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)]"
            : "bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]"
        }`}
      >
        {letter}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">
          {letter} / {letterLower}
        </p>
        <p className="text-xs text-[var(--color-text-secondary)]">
          {locked ? "Verrouillé" : state === "completed" ? "Terminé" : `Son ${phoneme}`}
        </p>
      </div>
      <StateBadge state={state} />
    </div>
  );

  if (locked) return <li>{content}</li>;
  return (
    <li>
      <Link href={`/lecture/${letterLower}`}>{content}</Link>
    </li>
  );
}

// ── Revision card ──────────────────────────────────────────────────────────────

function RevisionCard({
  title,
  pair,
  state,
}: {
  title: string;
  pair: string;
  state: ItemState;
}) {
  const locked = state === "locked";
  const content = (
    <div
      className={`flex items-center gap-3 rounded-[var(--radius-lg)] border-2 border-dashed px-4 py-3 transition-colors ${
        state === "completed"
          ? "border-green-500/50 bg-green-50/30 dark:bg-green-900/10"
          : state === "available"
            ? "border-[var(--color-accent-lecture)]/50 bg-[var(--color-accent-lecture)]/5 hover:border-[var(--color-accent-lecture)]"
            : "border-[var(--color-border-default)] opacity-40"
      }`}
    >
      <span className="text-[10px] font-bold uppercase tracking-wide text-[var(--color-accent-lecture)]">
        RÉVISION
      </span>
      <p className="flex-1 text-sm font-semibold text-[var(--color-text-primary)]">{title}</p>
      <StateBadge state={state} />
    </div>
  );

  if (locked) return <li>{content}</li>;
  return (
    <li>
      <Link href={`/lecture/revision/${pair}`}>{content}</Link>
    </li>
  );
}

// ── Evaluation card ────────────────────────────────────────────────────────────

function EvaluationCard({ state }: { state: ItemState }) {
  const locked = state === "locked";
  const content = (
    <div
      className={`flex items-center gap-3 rounded-[var(--radius-lg)] border-2 px-4 py-4 transition-colors ${
        state === "completed"
          ? "border-green-500 bg-green-50 dark:bg-green-900/20"
          : state === "available"
            ? "border-[var(--color-accent-lecture)] bg-[var(--color-accent-lecture)]/10 hover:bg-[var(--color-accent-lecture)]/20"
            : "border-[var(--color-border-default)] opacity-40"
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </span>
      <div className="flex-1">
        <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Évaluation
        </p>
        <p className="text-sm font-semibold text-[var(--color-text-primary)]">Toutes les voyelles</p>
      </div>
      <StateBadge state={state} />
    </div>
  );

  if (locked) return <>{content}</>;
  return <Link href="/lecture/evaluation">{content}</Link>;
}

// ── Main component ─────────────────────────────────────────────────────────────

export function LectureClient() {
  const [progress, setProgress] = useState<LectureProgress>(() => ({
    letters: {},
    revisions: {},
    evaluation: "locked",
  }));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setProgress(loadLectureProgress());
    setHydrated(true);
  }, []);

  const pct = hydrated ? computeLecturePercent(progress) : 0;
  const completedCount = Object.values(progress.letters).filter((s) => s === "completed").length;

  return (
    <div className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Alphabétisation</h1>
        <p className="text-sm text-[var(--color-text-secondary)]">
          Apprenez les lettres et leurs sons dans l&apos;ordre.
        </p>
      </header>

      {hydrated && (
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[var(--color-text-secondary)]">
            <span>Progression globale</span>
            <span>{completedCount} / {TOTAL_LETTERS} lettres · {pct}%</span>
          </div>
          <AppProgressBar value={pct} color="var(--color-accent-lecture)" height={6} />
        </div>
      )}

      {/* ── Voyelles ── */}
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">
          [ I ] Les Voyelles
        </p>
        <ul className="space-y-2">
          {VOWELS.map((v, i) => {
            const letterState = getItemState(progress, "letter", v.letterLower);
            const pairIndex = Math.floor(i / 2);
            const isSecondInPair = i % 2 === 1;
            const revision = isSecondInPair ? VOWEL_REVISIONS[pairIndex] : null;
            const revState = revision ? getItemState(progress, "revision", revision.pair) : "locked";
            return (
              <li key={v.letterLower} className="space-y-2">
                <LetterCard
                  letter={v.letter}
                  letterLower={v.letterLower}
                  phoneme={v.phoneme}
                  state={hydrated ? letterState : "locked"}
                />
                {revision && (
                  <RevisionCard
                    title={revision.title}
                    pair={revision.pair}
                    state={hydrated ? revState : "locked"}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <EvaluationCard state={hydrated ? progress.evaluation : "locked"} />
      </section>

      {/* ── Consonnes ── */}
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">
          [ II ] Les Consonnes
        </p>
        <ul className="space-y-2">
          {CONSONANTS.map((c, i) => {
            const letterState = getItemState(progress, "letter", c.letterLower);
            const pairIndex = Math.floor(i / 2);
            const isSecondInPair = i % 2 === 1;
            const revision = isSecondInPair ? CONSONANT_REVISIONS[pairIndex] : null;
            const revState = revision ? getItemState(progress, "revision", revision.pair) : "locked";
            return (
              <li key={c.letterLower} className="space-y-2">
                <LetterCard
                  letter={c.letter}
                  letterLower={c.letterLower}
                  phoneme={c.phoneme}
                  state={hydrated ? letterState : "locked"}
                />
                {revision && (
                  <RevisionCard
                    title={revision.title}
                    pair={revision.pair}
                    state={hydrated ? revState : "locked"}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* ── Histoires ── */}
      <section className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Histoires à lire
        </p>
        <Link
          href="/lecture/histoires"
          className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-4 transition-colors hover:border-[var(--color-accent-lecture)]/50"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">Histoires à lire</p>
            <p className="text-xs text-[var(--color-text-secondary)]">6 histoires · débutant → avancé</p>
          </div>
          <span className="ml-auto text-[var(--color-accent-lecture)]">→</span>
        </Link>
      </section>
    </div>
  );
}
