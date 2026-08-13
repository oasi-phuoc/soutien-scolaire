import { PageBackButton } from "@/components/ui/PageBackButton";
import { VOWEL_EVALUATION } from "@/lib/curriculum/lecture-data";
import { RevisionMixedGrid } from "@/components/lecture/RevisionMixedGrid";
import { RevisionSoundDiscrim } from "@/components/lecture/RevisionSoundDiscrim";
import { RevisionWordRead } from "@/components/lecture/RevisionWordRead";
import { CompleteButton } from "@/components/lecture/CompleteButton";

export default function EvaluationPage() {
  const ev = VOWEL_EVALUATION;

  return (
    <main className="app-shell flex-1 space-y-8 py-8 pb-32 lg:pb-28">
      <div className="flex items-center gap-3">
        <PageBackButton href="/lecture" ariaLabel="Retour" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-lecture)]">
            Évaluation
          </p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">{ev.title}</h1>
          <p className="text-sm text-[var(--color-text-secondary)]">{ev.subtitle}</p>
        </div>
      </div>

      <section className="space-y-3">
        <h2 className="text-base font-bold text-[var(--color-text-primary)]">Les 6 voyelles</h2>
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

      <CompleteButton type="evaluation" id="voyelles" />
    </main>
  );
}
