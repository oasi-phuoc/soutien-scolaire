import type { WritingPrompt } from "@/lib/curriculum/content/communication/writing-prompts";
import type { SubmissionExercise } from "@/lib/curriculum/content/communication/expression-submission-types";

function SourceMessageBlock({ prompt }: { prompt?: WritingPrompt }) {
  if (!prompt?.sourceMessage) return null;
  return (
    <div className="mt-3 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white text-sm leading-relaxed text-[var(--color-text-primary)]">
      <div className="space-y-1 bg-slate-50 px-4 py-3">
        {prompt.sourceMessage.from && <p><span className="font-semibold">De :</span> {prompt.sourceMessage.from}</p>}
        {prompt.sourceMessage.subject && <p><span className="font-semibold">Objet :</span> {prompt.sourceMessage.subject}</p>}
      </div>
      <div className="whitespace-pre-line border-t border-[var(--color-border-default)] px-4 py-3">{prompt.sourceMessage.body}</div>
    </div>
  );
}

export function PeExerciseFrame({
  exercise,
  index,
  children,
}: {
  exercise: SubmissionExercise;
  index: number;
  children?: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white shadow-sm">
      <header className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--color-border-default)] bg-[var(--color-theme-light)]/35 px-4 py-3 sm:px-5">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--color-theme)]">Exercice {index + 1}</p>
          <h3 className="text-base font-bold text-[var(--color-text-primary)] sm:text-lg">{exercise.title}</h3>
        </div>
        {exercise.maxPoints > 0 && (
          <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[var(--color-theme)]">
            {exercise.maxPoints} pts
          </span>
        )}
      </header>

      <div className="space-y-4 px-4 py-4 sm:px-5 sm:py-5">
        <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-theme-light)]/15 p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-theme)]">Consigne / énoncé</p>
          {exercise.prompt?.title && exercise.prompt.title !== exercise.title && (
            <p className="mt-2 text-sm font-semibold text-[var(--color-text-primary)]">{exercise.prompt.title}</p>
          )}
          <div className="mt-2 whitespace-pre-line text-sm leading-relaxed text-[var(--color-text-primary)]">
            {exercise.consigne}
          </div>
          <SourceMessageBlock prompt={exercise.prompt} />
          {exercise.prompt?.points?.length ? (
            <ul className="mt-3 space-y-1">
              {exercise.prompt.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm text-[var(--color-text-primary)]">
                  <span className="text-[var(--color-theme)]">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-4">
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">Production de l&apos;élève</p>
          <div className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">
            {exercise.text || "—"}
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}
