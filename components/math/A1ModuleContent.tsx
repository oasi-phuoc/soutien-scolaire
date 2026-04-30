"use client";

import { useEffect, useState } from "react";
import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { MathExerciseRunner } from "@/components/math/MathExerciseRunner";
import { usePivotLang } from "@/components/math/usePivotLang";
import { MATH_A1_LESSONS } from "@/lib/curriculum/content/math-a1";
import type { LegendTone } from "@/lib/curriculum/content/math-a1-types";
import {
  pickTheoryFrench,
  pickTheoryPivotTranslation,
} from "@/lib/curriculum/content/math-a1-types";
import { mathExerciseUi } from "@/lib/i18n/math-ui";
import { PIVOT_LANGS } from "@/lib/pivot-langs";

function toneClass(t: LegendTone): string {
  if (t === "red") return "text-red-600 dark:text-red-400";
  if (t === "gray") return "text-zinc-500 dark:text-zinc-400";
  return "text-[var(--color-text-primary)]";
}

export function A1ModuleContent() {
  const pivot = usePivotLang();
  const [activeIdx, setActiveIdx] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const [showPivotTranslation, setShowPivotTranslation] = useState(false);
  const lesson = MATH_A1_LESSONS[activeIdx];

  useEffect(() => {
    setVideoFailed(false);
    setShowPivotTranslation(false);
  }, [activeIdx]);

  if (!lesson) return null;

  const theoryFr = pickTheoryFrench(lesson.theory);
  const pivotBody = pickTheoryPivotTranslation(pivot, lesson.theory);
  const introPivotBlock = lesson.theory.readAloud?.introPivot?.[pivot];
  const pivotLines = [...(pivotBody ?? []), ...(introPivotBlock ?? [])];
  const canTranslate = pivotLines.length > 0;
  const pivotMeta = PIVOT_LANGS.find((l) => l.code === pivot);
  const read = lesson.theory.readAloud;
  const [tone1, tone2, tone3] = read?.columnTones ?? ["black", "black", "black"];

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
        Langue principale : <strong className="text-[var(--color-text-primary)]">français</strong>.
        Les consignes d’exercice restent en français ; appuie sur « {mathExerciseUi(pivot, "translateShow")} » pour
        afficher la langue pivot ({pivotMeta?.labelFr ?? pivot}) <strong>sous</strong> le texte français.
      </p>

      <AppCard
        variant="default"
        header={
          <div>
            <p className="text-xs font-medium uppercase text-[var(--color-accent-alg)]">Théorie</p>
            <h2 className="text-base font-semibold text-[var(--color-text-primary)]">
              {theoryFr.title}
            </h2>
          </div>
        }
      >
        <div className="space-y-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {theoryFr.paragraphs.map((p, i) => (
            <p key={`${lesson.submoduleId}-fr-${i}`}>{p}</p>
          ))}
        </div>

        {read ? (
          <div className="mt-6 border-t border-[var(--color-border-default)] pt-4">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)]">
              {read.headingFr}
            </h3>
            {read.introFr?.length ? (
              <div className="mt-2 space-y-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                {read.introFr.map((t, i) => (
                  <p key={`ra-intro-${i}`}>{t}</p>
                ))}
              </div>
            ) : null}
            <ul className="mb-3 mt-3 flex flex-wrap gap-3 text-[length:var(--font-size-xs)]">
              {read.legendFr.map((leg) => (
                <li key={leg.tone} className="flex items-center gap-1.5">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      leg.tone === "red"
                        ? "bg-red-500"
                        : leg.tone === "gray"
                          ? "bg-zinc-400"
                          : "bg-[var(--color-text-primary)]"
                    }`}
                    aria-hidden
                  />
                  <span className={toneClass(leg.tone)}>{leg.labelFr}</span>
                </li>
              ))}
            </ul>
            <div className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
              <table className="w-full min-w-[280px] text-left text-sm">
                <tbody>
                  {read.rows.map((row, ri) => (
                    <tr key={ri} className="border-t border-[var(--color-border-default)] first:border-t-0">
                      <td className={`px-3 py-2 font-medium ${toneClass(tone1)}`}>
                        <span className="tabular-nums">{row.col1.num}</span> {row.col1.word}
                      </td>
                      <td className={`border-l border-[var(--color-border-default)] px-3 py-2 ${toneClass(tone2)}`}>
                        <span className="tabular-nums">{row.col2.num}</span> {row.col2.word}
                      </td>
                      <td className={`border-l border-[var(--color-border-default)] px-3 py-2 ${toneClass(tone3)}`}>
                        <span className="tabular-nums">{row.col3.num}</span> {row.col3.word}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}

        {lesson.theory.mediaHint?.publicPath && lesson.submoduleId === "A1-1" ? (
          !videoFailed ? (
            <div className="mt-6">
              <p className="mb-2 text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
                {lesson.theory.mediaHint.fr}
              </p>
              <video
                className="max-h-72 w-full rounded-[var(--radius-md)] bg-black/80"
                controls
                preload="metadata"
                src={lesson.theory.mediaHint.publicPath}
                onError={() => setVideoFailed(true)}
              >
                <track kind="captions" />
              </video>
            </div>
          ) : (
            <p className="mt-6 text-[length:var(--font-size-xs)] text-[var(--color-warning)]">
              Fichier média introuvable. Copie{" "}
              <code className="rounded bg-[var(--color-bg-secondary)] px-1">MATH_EX_01.02_AUDIO.mp4</code> dans{" "}
              <code className="rounded bg-[var(--color-bg-secondary)] px-1">public/csc/</code> (ouvre le dossier du
              projet).
            </p>
          )
        ) : null}

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

        {canTranslate ? (
          <div className="mt-4 flex flex-wrap gap-2">
            <AppButton
              accent="fr"
              variant={showPivotTranslation ? "secondary" : "primary"}
              size="sm"
              onClick={() => setShowPivotTranslation((v) => !v)}
            >
              {showPivotTranslation
                ? mathExerciseUi(pivot, "translateHide")
                : `${mathExerciseUi(pivot, "translateShow")} (${pivotMeta?.labelFr ?? pivot})`}
            </AppButton>
          </div>
        ) : null}

        {showPivotTranslation && canTranslate ? (
          <div
            className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-accent-fr)]/35 bg-[color-mix(in_oklch,var(--color-accent-fr)_6%,transparent)] p-4"
            lang={pivot === "uk" ? "uk" : pivot === "ar" ? "ar" : pivot === "fa" ? "fa" : "ti"}
            dir={pivot === "ar" || pivot === "fa" ? "rtl" : "ltr"}
          >
            <p className="mb-2 text-[length:var(--font-size-xs)] font-semibold uppercase tracking-wide text-[var(--color-accent-fr)]">
              Traduction — {pivotMeta?.label ?? pivotMeta?.labelFr}
            </p>
            <div className="space-y-2 text-sm leading-relaxed text-[var(--color-text-primary)]">
              {pivotLines.map((p, i) => (
                <p key={`piv-${i}`}>{p}</p>
              ))}
            </div>
          </div>
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
