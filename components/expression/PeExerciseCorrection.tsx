"use client";

import { useState } from "react";
import type { BlockAnnotation, ExerciseBlockReview, SubmissionExercise } from "@/lib/curriculum/content/communication/expression-submission-types";

function CorrectedText({ original, corrected }: { original: string; corrected: string }) {
  const before = original.split(/(\s+)/u);
  const after = corrected.split(/(\s+)/u);
  return (
    <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--color-text-primary)]">
      {after.map((token, index) => (
        <span key={index} className={token !== before[index] && token.trim() ? "font-semibold text-amber-600" : undefined}>
          {token}
        </span>
      ))}
    </p>
  );
}

export function PeExerciseCorrection({
  exercise,
  review,
  editable,
  hidePoints = false,
  onChange,
}: {
  exercise: SubmissionExercise;
  review: ExerciseBlockReview;
  editable: boolean;
  hidePoints?: boolean;
  onChange?: (review: ExerciseBlockReview) => void;
}) {
  const [labelDraft, setLabelDraft] = useState("");
  const [commentDraft, setCommentDraft] = useState("");

  function update(patch: Partial<ExerciseBlockReview>) {
    onChange?.({ ...review, ...patch });
  }

  function addAnnotation() {
    if (!labelDraft.trim() || !commentDraft.trim()) return;
    const next: BlockAnnotation = {
      label: labelDraft.trim(),
      comment: commentDraft.trim(),
    };
    update({ annotations: [...review.annotations, next] });
    setLabelDraft("");
    setCommentDraft("");
  }

  function removeAnnotation(index: number) {
    update({ annotations: review.annotations.filter((_, i) => i !== index) });
  }

  if (!editable) {
    return (
      <div className="space-y-4 border-t border-[var(--color-border-default)] pt-4">
        {review.annotations.length > 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-amber-600">Annotations</p>
            <ul className="mt-2 space-y-2">
              {review.annotations.map((annotation, index) => (
                <li key={index} className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-[var(--color-text-primary)]">
                  <strong className="text-amber-700">{annotation.label}</strong>
                  {annotation.quotedText ? (
                    <span className="text-[var(--color-text-secondary)]"> — « {annotation.quotedText} »</span>
                  ) : null}
                  <span> : {annotation.comment}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {review.correctedText.trim() && (
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-amber-600">Version corrigée</p>
            <div className="mt-2 rounded-[var(--radius-md)] border-2 border-amber-300 bg-white p-4">
              <CorrectedText original={exercise.text} corrected={review.correctedText} />
            </div>
          </div>
        )}
        {review.points > 0 && !hidePoints && (
          <p className="text-sm font-semibold text-[var(--color-theme)]">
            {review.points.toLocaleString("fr-CH")} / {exercise.maxPoints} pts
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-4 border-t border-[var(--color-border-default)] pt-4">
      <div>
        <p className="text-xs font-bold uppercase tracking-wide text-amber-600">Annotations</p>
        <div className="mt-2 grid gap-2 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_auto]">
          <input
            value={labelDraft}
            onChange={(event) => setLabelDraft(event.target.value)}
            placeholder="Nom de l'annotation"
            className="min-h-10 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 text-sm outline-none focus:border-amber-500"
          />
          <input
            value={commentDraft}
            onChange={(event) => setCommentDraft(event.target.value)}
            placeholder="Commentaire"
            className="min-h-10 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 text-sm outline-none focus:border-amber-500"
          />
          <button
            type="button"
            onClick={addAnnotation}
            disabled={!labelDraft.trim() || !commentDraft.trim()}
            className="rounded-[var(--radius-md)] bg-amber-500 px-4 text-sm font-bold text-white disabled:opacity-35"
          >
            Ajouter
          </button>
        </div>
        {review.annotations.length > 0 && (
          <ul className="mt-3 space-y-2">
            {review.annotations.map((annotation, index) => (
              <li key={index} className="flex items-start justify-between gap-3 rounded-lg bg-amber-50 px-3 py-2 text-xs">
                <span>
                  <strong>{annotation.label}</strong>
                  {annotation.quotedText ? (
                    <span className="text-[var(--color-text-secondary)]"> — « {annotation.quotedText} »</span>
                  ) : null}
                  {" : "}{annotation.comment}
                </span>
                <button
                  type="button"
                  onClick={() => removeAnnotation(index)}
                  className="font-bold text-amber-700"
                  aria-label="Supprimer l'annotation"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <label className="mb-2 block text-xs font-bold uppercase tracking-wide text-amber-600">
          Version corrigée
        </label>
        <textarea
          value={review.correctedText}
          onChange={(event) => update({ correctedText: event.target.value })}
          rows={6}
          className="w-full rounded-[var(--radius-md)] border-2 border-amber-300 bg-white p-4 text-sm leading-relaxed outline-none focus:border-amber-500"
        />
      </div>

      {!hidePoints && (
        <label className="block max-w-xs">
          <span className="mb-1 block text-sm font-semibold text-[var(--color-text-primary)]">
            Points sur {exercise.maxPoints || 25}
          </span>
          <input
            type="text"
            inputMode="decimal"
            value={review.points ? String(review.points) : ""}
            onChange={(event) => {
              const raw = event.target.value.replace(/[^0-9,.]/g, "");
              const parsed = raw ? Number(raw.replace(",", ".")) : 0;
              update({ points: Number.isFinite(parsed) ? parsed : 0 });
            }}
            placeholder="0"
            className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 py-2 text-sm outline-none focus:border-amber-500"
          />
        </label>
      )}
    </div>
  );
}
