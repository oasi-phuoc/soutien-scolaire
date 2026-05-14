import Link from "next/link";
import { VOWEL_EVALUATION } from "@/lib/curriculum/lecture-data";
import { RevisionMixedGrid } from "@/components/lecture/RevisionMixedGrid";
import { RevisionSoundDiscrim } from "@/components/lecture/RevisionSoundDiscrim";
import { RevisionWordRead } from "@/components/lecture/RevisionWordRead";

export default function EvaluationPage() {
  const ev = VOWEL_EVALUATION;

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-8 px-4 py-8 pb-32">
      <div className="flex items-center gap-3">
        <Link
          href="/lecture"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          aria-label="Retour"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">
            Évaluation
          </p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">{ev.title}</h1>
          <p className="text-sm text-[var(--color-text-secondary)]">{ev.subtitle}</p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold text-[var(--color-text-primary)]">Les 6 voyelles</h2>
        <div className="grid grid-cols-6 gap-2">
          {ev.letters.map(({ letter, phoneme }) => (
            <div
              key={letter}
              className="flex flex-col items-center justify-center gap-1 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] py-3"
            >
              <span className="text-xl font-bold text-[var(--color-text-primary)]">{letter}</span>
              <span className="text-[10px] text-[var(--color-accent-alg)]">{phoneme}</span>
            </div>
          ))}
        </div>
      </section>

      <RevisionMixedGrid
        letterA="A"
        letterB="O"
        phonemeA="/a/"
        phonemeB="/o/"
        grid={ev.mixedGrid}
      />

      <RevisionSoundDiscrim
        phonemeA="/a/"
        phonemeB="/o/"
        words={ev.soundWords.map((w) => ({ word: w.word, answer: w.answer === "A" ? "A" : "B" }))}
      />

      <RevisionWordRead words={ev.readWords} />
    </main>
  );
}
