"use client";

import { useMemo, useState } from "react";
import { AppButton } from "@/components/ui/AppButton";
import { AppInput } from "@/components/ui/AppInput";
import type { PivotCode } from "@/lib/pivot-langs";
import { PIVOT_LANGS } from "@/lib/pivot-langs";
import {
  answerMatches,
  type MathExerciseItem,
} from "@/lib/curriculum/content/math-a1-types";
import { mathExerciseFrenchUi } from "@/lib/i18n/math-ui";

type Props = {
  exercises: MathExerciseItem[];
  pivot: PivotCode;
  /** Même logique que la théorie : énoncés en FR, traduction si true. */
  showPivotTranslation: boolean;
};

export function MathExerciseRunner({
  exercises,
  pivot,
  showPivotTranslation,
}: Props) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(exercises.map((e) => [e.id, ""])),
  );
  const [validated, setValidated] = useState(false);
  const [showCorrections, setShowCorrections] = useState(false);

  const filledCount = useMemo(
    () => exercises.filter((e) => values[e.id]?.trim()).length,
    [exercises, values],
  );

  const pivotTranslationHeading = useMemo(() => {
    const m = PIVOT_LANGS.find((l) => l.code === pivot);
    return m === undefined ? pivot : `${m.label} (${m.labelFr})`;
  }, [pivot]);

  return (
    <div className="space-y-5">
      {exercises.map((ex) => {
        const ok = showCorrections ? answerMatches(values[ex.id] ?? "", ex.acceptable) : null;
        const pivotPrompt = ex.promptPivot?.[pivot];
        return (
          <div
            key={ex.id}
            className={`rounded-[var(--radius-md)] border p-3 ${
              showCorrections
                ? ok
                  ? "border-[var(--color-success)]/50 bg-[color-mix(in_oklch,var(--color-success)_8%,transparent)]"
                  : "border-[var(--color-danger)]/45 bg-[color-mix(in_oklch,var(--color-danger)_6%,transparent)]"
                : "border-[var(--color-border-default)]"
            }`}
          >
            <p className="mb-2 text-sm font-medium leading-relaxed text-[var(--color-text-primary)]">
              <span className="text-[var(--color-text-secondary)]">{ex.id}</span> — {ex.promptFr}
            </p>
            {showPivotTranslation && pivotPrompt ? (
              <p
                className="mb-3 border-l-2 border-[var(--color-accent-fr)]/50 pl-3 text-sm italic text-[var(--color-text-primary)]"
                lang={pivot}
                dir={pivot === "ar" || pivot === "fa" ? "rtl" : "ltr"}
              >
                {pivotPrompt}
              </p>
            ) : null}
            <p className="mb-2 text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
              {mathExerciseFrenchUi("yourAnswer")} :
            </p>
            <AppInput
              label=""
              id={`ex-input-${ex.id}`}
              aria-label={ex.promptFr}
              value={values[ex.id] ?? ""}
              onChange={(ev) =>
                setValues((s) => ({ ...s, [ex.id]: ev.target.value }))
              }
              inputMode={ex.type === "number" ? "numeric" : "text"}
              autoComplete="off"
            />
            {showCorrections ? (
              <p className="mt-2 text-sm">
                <span className="font-medium">
                  {ok ? mathExerciseFrenchUi("correct") : mathExerciseFrenchUi("incorrect")}.
                </span>
                {!ok ? (
                  <span className="text-[var(--color-text-secondary)]">
                    {" "}
                    {mathExerciseFrenchUi("expected")} : {ex.acceptable[0]}
                  </span>
                ) : null}
              </p>
            ) : null}
          </div>
        );
      })}

      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
        <AppButton
          accent="alg"
          onClick={() => {
            setValidated(true);
            setShowCorrections(false);
          }}
          disabled={filledCount < exercises.length}
        >
          {mathExerciseFrenchUi("validate")}
        </AppButton>
        <AppButton
          accent="quiz"
          variant="secondary"
          onClick={() => setShowCorrections(true)}
          disabled={filledCount < exercises.length}
        >
          {mathExerciseFrenchUi("checkAnswers")}
        </AppButton>
      </div>
      {validated && !showCorrections ? (
        <p className="text-sm text-[var(--color-text-secondary)]">
          {mathExerciseFrenchUi("answersRecorded")}
        </p>
      ) : null}
    </div>
  );
}
