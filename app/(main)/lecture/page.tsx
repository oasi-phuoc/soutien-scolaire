import Link from "next/link";
import { VOWELS, CONSONANTS, VOWEL_REVISIONS, CONSONANT_REVISIONS } from "@/lib/curriculum/lecture-data";

function LetterCard({ letter, letterLower, href }: { letter: string; letterLower: string; href: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3 transition-colors hover:border-[var(--color-accent-lecture)]/50"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-lecture)]/10 text-lg font-bold text-[var(--color-accent-lecture)]">
        {letter}
      </span>
      <span className="text-sm font-semibold text-[var(--color-text-primary)]">
        Lettre et son – {letter} / {letterLower}
      </span>
      <span className="ml-auto text-[var(--color-accent-lecture)]" aria-hidden>→</span>
    </Link>
  );
}

function RevisionCard({ title, pair, isConsonant = false }: { title: string; pair: string; isConsonant?: boolean }) {
  return (
    <Link
      href={`/lecture/revision/${pair}`}
      className="flex items-center gap-3 rounded-[var(--radius-lg)] border-2 border-dashed border-[var(--color-accent-lecture)]/40 bg-[var(--color-accent-lecture)]/5 px-4 py-3 transition-colors hover:border-[var(--color-accent-lecture)]/70"
    >
      <span className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-lecture)]">
        RÉVISION
      </span>
      <span className="text-sm font-semibold text-[var(--color-text-primary)]">{title}</span>
      <span className="ml-auto text-[var(--color-accent-lecture)]" aria-hidden>→</span>
    </Link>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">
      {label}
    </p>
  );
}

export default function LecturePage() {
  const vowelPairs = [
    ["a", "o"],
    ["i", "u"],
    ["e", "y"],
  ];

  const consonantPairs = CONSONANT_REVISIONS.map((r) => r.pair.split("-"));

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-8 px-4 py-8 pb-32">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-lecture)]">
          Lecture
        </p>
        <h1 className="text-2xl font-bold text-[var(--color-text-primary)]">Alphabétisation</h1>
        <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
          Découvrez les lettres et leurs sons — voyelles puis consonnes.
        </p>
      </header>

      {/* ── Voyelles ── */}
      <section aria-labelledby="voyelles" className="space-y-3">
        <SectionDivider label="[ I ] Les Voyelles" />
        <ul className="space-y-2">
          {VOWELS.map((v, i) => {
            const pairIndex = Math.floor(i / 2);
            const isSecondInPair = i % 2 === 1;
            const revision = isSecondInPair ? VOWEL_REVISIONS[pairIndex] : null;
            return (
              <li key={v.letterLower} className="space-y-2">
                <LetterCard
                  letter={v.letter}
                  letterLower={v.letterLower}
                  href={`/lecture/${v.letterLower}`}
                />
                {revision && (
                  <RevisionCard title={revision.title} pair={revision.pair} />
                )}
              </li>
            );
          })}
        </ul>

        {/* Évaluation voyelles */}
        <Link
          href="/lecture/evaluation"
          className="flex items-center gap-3 rounded-[var(--radius-lg)] border-2 border-[var(--color-accent-lecture)]/50 bg-[var(--color-accent-lecture)]/10 px-4 py-4 transition-colors hover:bg-[var(--color-accent-lecture)]/20"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-lecture)] text-white">
            <StarIcon />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-accent-lecture)]">
              Évaluation
            </p>
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
              Toutes les voyelles
            </p>
          </div>
          <span className="ml-auto text-[var(--color-accent-lecture)]" aria-hidden>→</span>
        </Link>
      </section>

      {/* ── Consonnes ── */}
      <section aria-labelledby="consonnes" className="space-y-3">
        <SectionDivider label="[ II ] Les Consonnes" />
        <ul className="space-y-2">
          {CONSONANTS.map((c, i) => {
            const pairIndex = Math.floor(i / 2);
            const isSecondInPair = i % 2 === 1;
            const revision = isSecondInPair ? CONSONANT_REVISIONS[pairIndex] : null;
            return (
              <li key={c.letterLower} className="space-y-2">
                <LetterCard
                  letter={c.letter}
                  letterLower={c.letterLower}
                  href={`/lecture/${c.letterLower}`}
                />
                {revision && (
                  <RevisionCard title={revision.title} pair={revision.pair} />
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* ── Histoires ── */}
      <section aria-labelledby="histoires" className="space-y-3">
        <SectionDivider label="Histoires à lire" />
        <Link
          href="/lecture/histoires"
          className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-4 transition-colors hover:border-[var(--color-accent-lecture)]/50"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-lecture)]/10 text-[var(--color-accent-lecture)]">
            <BookIcon />
          </span>
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
              Histoires à lire
            </p>
            <p className="text-xs text-[var(--color-text-secondary)]">6 histoires · du plus simple au plus avancé</p>
          </div>
          <span className="ml-auto text-[var(--color-accent-lecture)]" aria-hidden>→</span>
        </Link>
      </section>
    </main>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
