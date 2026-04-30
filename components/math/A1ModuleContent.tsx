"use client";

import { useEffect, useState } from "react";
import { AppCard } from "@/components/ui/AppCard";
import { MathExerciseRunner } from "@/components/math/MathExerciseRunner";
import { usePivotLang } from "@/components/math/usePivotLang";
import { MATH_A1_LESSONS } from "@/lib/curriculum/content/math-a1";
import { pickTheoryForPivot } from "@/lib/curriculum/content/math-a1-types";
import { PIVOT_LANGS } from "@/lib/pivot-langs";

export function A1ModuleContent() {
  const pivot = usePivotLang();
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const lesson = MATH_A1_LESSONS[activeIdx];

  useEffect(() => {
    setVideoFailed(false);
  }, [activeIdx]);

  if (!lesson) return null;

  const theory = pickTheoryForPivot(pivot, lesson.theory);
  const pivotMeta = PIVOT_LANGS.find((l) => l.code === pivot);

  return (
    <div className="space-y-6">
      <div
        role="tablist"
        aria-label="Sous-modules A1"
        className="flex flex-wrap gap-2"
      >
        {MATH_A1_LESSONS.map((l, i) => (
          <button
            key={l.submoduleId}
            type="button"
            role="tab"
            aria-selected={i === activeIdx}
            className={`min-h-11 rounded-[var(--radius-pill)] px-3 text-sm font-medium transition-colors ${
              i === activeIdx
                ? "bg-[var(--color-accent-alg)] text-white"
                : "border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/50 text-[var(--color-text-primary)]"
            }`}
            onClick={() => setActiveIdx(i)}
          >
            {l.submoduleCode}
          </button>
        ))}
      </div>

      <p className="text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
        Théorie : langue pivot « {pivotMeta?.labelFr ?? pivot} » (réglage compte / stockage local). Exercices :
        consigne en français + aide dans ta langue lorsqu&apos;elle est disponible.
      </p>

      <AppCard
        variant="default"
        header={
          <div>
            <p className="text-xs font-medium uppercase text-[var(--color-accent-alg)]">Théorie</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">{theory.title}</h2>
          </div>
        }
      >
        <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {theory.paragraphs.map((p, i) => (
            <p key={`${lesson.submoduleId}-p-${i}`}>{p}</p>
          ))}
        </div>
        {lesson.theory.cscRefs?.length ? (
          <div className="mt-4 border-t border-[var(--color-border-default)] pt-3">
            <p className="text-[length:var(--font-size-xs)] font-medium text-[var(--color-text-primary)]">
              Ressources CSC (fichiers sources)
            </p>
            <ul className="mt-1 list-disc space-y-0.5 pl-4 text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
              {lesson.theory.cscRefs.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {lesson.theory.mediaHint?.publicPath && !videoFailed ? (
          <div className="mt-4">
            <p className="mb-2 text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
              {lesson.theory.mediaHint.fr}
            </p>
            <video
              className="max-h-64 w-full rounded-[var(--radius-md)] bg-black/80"
              controls
              preload="metadata"
              src={lesson.theory.mediaHint.publicPath}
              onError={() => setVideoFailed(true)}
            >
              <track kind="captions" />
            </video>
          </div>
        ) : lesson.theory.mediaHint?.publicPath && videoFailed ? (
          <p className="mt-4 text-[length:var(--font-size-xs)] text-[var(--color-warning)]">
            Fichier média introuvable. Copie{" "}
            <code className="rounded bg-[var(--color-bg-secondary)] px-1">MATH_EX_01.02_AUDIO.mp4</code> dans{" "}
            <code className="rounded bg-[var(--color-bg-secondary)] px-1">public/csc/</code> pour l’affichage.
          </p>
        ) : null}
      </AppCard>

      <AppCard
        variant="elevated"
        header={
          <div>
            <p className="text-xs font-medium uppercase text-[var(--color-accent-quiz)]">Exercices</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">
              {lesson.submoduleCode}
            </h2>
          </div>
        }
      >
        <MathExerciseRunner exercises={lesson.exercises} pivot={pivot} />
      </AppCard>
    </div>
  );
}
