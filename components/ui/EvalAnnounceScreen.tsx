"use client";

/**
 * Shared evaluation announcement screen (math / français / lecture).
 * Mirrors the français design: a pencil in a soft circle, an "Évaluation"
 * eyebrow, the "Prêt(e) pour l'évaluation ?" title, a short description and a
 * "Commencer" button. The `accent` prop is a CSS color (e.g.
 * "var(--color-accent-fr)") so each section keeps its theme colour.
 */
export function EvalAnnounceScreen({
  accent,
  lessonTitle,
  exerciseCount,
  minutes,
  onStart,
}: {
  accent: string;
  lessonTitle?: string;
  exerciseCount?: number;
  minutes?: number;
  onStart: () => void;
}) {
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-3xl"
        style={{ background: `color-mix(in srgb, ${accent} 15%, transparent)` }}
      >
        ✏️
      </div>
      <p className="mb-1 text-xs font-bold uppercase tracking-wide" style={{ color: accent }}>
        Évaluation
      </p>
      <h2 className="mb-3 text-xl font-bold text-[var(--color-text-primary)]">
        Prêt(e) pour l&apos;évaluation&nbsp;?
      </h2>
      {lessonTitle && (
        <p className="mb-3 max-w-xs text-sm text-[var(--color-text-secondary)]">
          Vous avez terminé la partie entraînement pour{" "}
          <strong className="text-[var(--color-text-primary)]">{lessonTitle}</strong>.
        </p>
      )}
      <p className="mb-8 max-w-xs text-sm text-[var(--color-text-secondary)]">
        {minutes != null ? (
          <>
            {exerciseCount != null ? (
              <>
                L&apos;évaluation comporte{" "}
                <strong className="text-[var(--color-text-primary)]">{exerciseCount} exercices notés</strong>{" "}
                et est chronométrée.{" "}
              </>
            ) : (
              <>L&apos;évaluation est chronométrée. </>
            )}
            <strong className="text-[var(--color-text-primary)]">Vous avez {minutes} minutes</strong>{" "}
            pour compléter l&apos;évaluation.
          </>
        ) : (
          <>Évaluez votre maîtrise pour valider ce module.</>
        )}
      </p>
      <button
        type="button"
        onClick={onStart}
        className="w-full max-w-xs rounded-[var(--radius-lg)] px-6 py-3 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90 active:opacity-80"
        style={{ background: accent }}
      >
        Commencer
      </button>
    </div>
  );
}
