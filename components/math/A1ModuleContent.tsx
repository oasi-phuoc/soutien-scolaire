"use client";

import { useEffect, useState } from "react";
import { AppButton } from "@/components/ui/AppButton";
import { AppCard } from "@/components/ui/AppCard";
import { MathExerciseRunner } from "@/components/math/MathExerciseRunner";
import { usePivotLang } from "@/components/math/usePivotLang";
import { MATH_A1_LESSONS } from "@/lib/curriculum/content/math-a1";
import type {
  ReadAloudCell,
  ReadAloudLegendItem,
  WordPhonemeKind,
} from "@/lib/curriculum/content/math-a1-types";
import {
  pickTheoryFrench,
  pickTheoryPivotTranslation,
} from "@/lib/curriculum/content/math-a1-types";
import { mathExerciseFrenchUi } from "@/lib/i18n/math-ui";
import { PIVOT_LANGS } from "@/lib/pivot-langs";

function partClass(kind: WordPhonemeKind): string {
  if (kind === "vowel") return "text-red-600 dark:text-red-400";
  if (kind === "silent") return "text-zinc-500 dark:text-zinc-400";
  return "text-[var(--color-text-primary)]";
}

function ReadAloudNumberCell({ cell }: { cell: ReadAloudCell }) {
  const { num, parts, wordUnderline } = cell;
  return (
    <span className="inline-flex max-w-full flex-wrap items-baseline">
      <span className="font-medium tabular-nums text-[var(--color-accent-alg)]">{num}</span>
      <span className="select-none px-1" aria-hidden>
        {"\u00a0"}
      </span>
      <span
        className={
          wordUnderline
            ? "border-b-[3px] border-double border-[var(--color-accent-alg)] pb-0.5"
            : undefined
        }
      >
        {parts.map((part, i) => (
          <span key={i} className={partClass(part.kind)}>
            {part.text}
          </span>
        ))}
      </span>
    </span>
  );
}

function legendSwatchClass(swatch: ReadAloudLegendItem["swatch"]): string {
  if (swatch === "accentAlg") return "bg-[var(--color-accent-alg)]";
  if (swatch === "red") return "bg-red-500";
  if (swatch === "gray") return "bg-zinc-400";
  return "bg-[var(--color-text-primary)]";
}

export function A1ModuleContent() {
  const pivot = usePivotLang();
  const [activeIdx, setActiveIdx] = useState(0);
  const [showPivotTranslation, setShowPivotTranslation] = useState(false);
  const lesson = MATH_A1_LESSONS[activeIdx];

  useEffect(() => {
    setShowPivotTranslation(false);
  }, [activeIdx]);

  if (!lesson) return null;

  const theoryFr = pickTheoryFrench(lesson.theory);
  const pivotBody = pickTheoryPivotTranslation(pivot, lesson.theory);
  const introPivotBlock = lesson.theory.readAloud?.introPivot?.[pivot];
  const pivotLines = [...(pivotBody ?? []), ...(introPivotBlock ?? [])];
  const canTranslate = pivotLines.length > 0;
  const canTranslateExercises = lesson.exercises.some(
    (e) => e.promptPivot?.[pivot] != null && String(e.promptPivot[pivot]).trim().length > 0,
  );
  const canTranslateAny = canTranslate || canTranslateExercises;
  const pivotMeta = PIVOT_LANGS.find((l) => l.code === pivot);
  const pivotTranslationHeading =
    pivotMeta === undefined ? pivot : `${pivotMeta.label} (${pivotMeta.labelFr})`;
  const read = lesson.theory.readAloud;

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
        Les consignes d’exercice restent en français ; appuie sur « {mathExerciseFrenchUi("translateShow")} » pour
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
                <li key={leg.labelFr} className="flex items-center gap-1.5">
                  <span
                    className={`h-2.5 w-2.5 shrink-0 rounded-full ${legendSwatchClass(leg.swatch)}`}
                    aria-hidden
                  />
                  <span className="text-[var(--color-text-secondary)]">{leg.labelFr}</span>
                </li>
              ))}
            </ul>
            <div className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border-default)]">
              <table className="w-full min-w-[280px] border-collapse text-left text-sm">
                <tbody>
                  {read.rows.map((row, ri) => (
                    <tr key={ri}>
                      <td className="border border-dashed border-zinc-300 px-3 py-2 dark:border-zinc-600">
                        <ReadAloudNumberCell cell={row.col1} />
                      </td>
                      <td className="border border-dashed border-zinc-300 px-3 py-2 dark:border-zinc-600">
                        <ReadAloudNumberCell cell={row.col2} />
                      </td>
                      <td className="border border-dashed border-zinc-300 px-3 py-2 dark:border-zinc-600">
                        <ReadAloudNumberCell cell={row.col3} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {read.audioSrc ? (
              <div className="mt-4">
                <p className="mb-2 text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
                  Enregistrement : écoute puis répète à voix haute.
                </p>
                <video
                  className="max-h-72 w-full rounded-[var(--radius-md)] bg-black/80"
                  controls
                  preload="metadata"
                  src={read.audioSrc}
                >
                  <track kind="captions" />
                </video>
              </div>
            ) : null}
          </div>
        ) : null}

        {canTranslateAny ? (
          <div className="mt-4 flex flex-wrap gap-2">
            <AppButton
              accent="fr"
              variant={showPivotTranslation ? "secondary" : "primary"}
              size="sm"
              onClick={() => setShowPivotTranslation((v) => !v)}
            >
              {showPivotTranslation
                ? mathExerciseFrenchUi("translateHide")
                : `${mathExerciseFrenchUi("translateShow")} (${pivotMeta?.labelFr ?? pivot})`}
            </AppButton>
          </div>
        ) : null}

        {showPivotTranslation && canTranslate ? (
          <div
            className="mt-4 rounded-[var(--radius-md)] border border-[var(--color-accent-fr)]/35 bg-[color-mix(in_oklch,var(--color-accent-fr)_6%,transparent)] p-4"
            lang={pivot}
            dir={pivot === "ar" || pivot === "fa" ? "rtl" : "ltr"}
          >
            <p className="mb-2 text-[length:var(--font-size-xs)] font-semibold uppercase tracking-wide text-[var(--color-accent-fr)]">
              Traduction — {pivotTranslationHeading}
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
        <MathExerciseRunner
          exercises={lesson.exercises}
          pivot={pivot}
          showPivotTranslation={showPivotTranslation}
        />
      </AppCard>
    </div>
  );
}
