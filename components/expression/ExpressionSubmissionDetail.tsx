"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, useTransition } from "react";
import { reviewExpressionAction, type ExpressionSubmission } from "@/app/actions/expression";
import { AppSelect } from "@/components/ui/AppSelect";
import { formatMailboxFullDate } from "@/lib/messagerie/inbox";
import { rubricForPeExercise } from "@/lib/curriculum/content/communication/pe-grading-rubrics";
import {
  flattenBlockAnnotations,
  initBlockReviews,
  joinCorrectedText,
  sumBlockPoints,
} from "@/lib/curriculum/content/communication/pe-block-review";
import { parseSubmissionExercises } from "@/lib/curriculum/content/communication/pe-submission";
import type { ExerciseBlockReview, ExerciseGrading, TeacherGrading } from "@/lib/curriculum/content/communication/expression-submission-types";
import { PeExerciseCorrection } from "@/components/expression/PeExerciseCorrection";
import { PeExerciseFrame } from "@/components/expression/PeExerciseFrame";
import { PeGradingRubric, sumGradingTotal } from "@/components/expression/PeGradingRubric";
import { PeGradingResult } from "@/components/expression/PeGradingResult";
import { hasCorrectedContent } from "@/lib/curriculum/content/communication/sanitize-corrected-html";

export function ExpressionSubmissionDetail({
  item,
  isTeacher,
  correspondentName,
}: {
  item: ExpressionSubmission;
  isTeacher: boolean;
  correspondentName?: string;
}) {
  const exercises = useMemo(
    () => parseSubmissionExercises(item.prompt as Record<string, unknown>, item.original_text),
    [item.prompt, item.original_text],
  );
  const isOral = item.lesson_code.startsWith("PO");
  const rubricExercises = exercises.filter((exercise) => rubricForPeExercise(exercise.kind, exercise.maxPoints));
  const hasRubric = isTeacher && !isOral && rubricExercises.length > 0;

  const [blockReviews, setBlockReviews] = useState<ExerciseBlockReview[]>(() =>
    initBlockReviews(exercises, item.corrected_text, item.teacher_grading, item.annotations ?? []),
  );
  const [teacherComment, setTeacherComment] = useState(item.teacher_comment ?? "");
  const [teacherPoints, setTeacherPoints] = useState(item.teacher_points != null ? String(item.teacher_points) : "");
  const [finalResult, setFinalResult] = useState(item.final_result ?? "");
  const [exerciseGrading, setExerciseGrading] = useState<ExerciseGrading[]>(
    () => item.teacher_grading?.exercises ?? [],
  );
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const maxPoints = item.teacher_max_points ?? 25;

  const rubricTotal = sumGradingTotal(exerciseGrading);
  const blockTotal = sumBlockPoints(blockReviews);

  useEffect(() => {
    if (hasRubric && rubricTotal > 0) {
      setTeacherPoints(String(rubricTotal));
      setBlockReviews((current) => current.map((review) => {
        const grading = exerciseGrading.find((entry) => entry.exerciseId === review.exerciseId);
        return grading ? { ...review, points: grading.total } : review;
      }));
      return;
    }
    if (blockTotal > 0) {
      setTeacherPoints(String(blockTotal));
    }
  }, [hasRubric, rubricTotal, blockTotal, exerciseGrading]);

  const kindLabel = isOral ? "Production orale" : "Production écrite";
  const subject = isTeacher
    ? `À corriger : ${item.prompt.title}`
    : item.status === "reviewed"
      ? `Correction : ${item.prompt.title}`
      : `Envoi : ${item.prompt.title}`;
  const from = isTeacher ? (correspondentName || "Élève") : item.status === "reviewed" ? (correspondentName || "Professeur") : "Moi";
  const to = isTeacher ? "Moi" : (correspondentName || "Professeur");

  const storedBlockReviews = item.teacher_grading?.blockReviews;
  const studentBlockReviews = useMemo(
    () => storedBlockReviews?.length
      ? exercises.map((exercise) => {
          const match = storedBlockReviews.find((entry) => entry.exerciseId === exercise.id);
          return match ?? {
            exerciseId: exercise.id,
            correctedText: "",
            annotations: [],
            points: item.teacher_grading?.exercises.find((entry) => entry.exerciseId === exercise.id)?.total ?? 0,
          };
        })
      : initBlockReviews(exercises, item.corrected_text, item.teacher_grading, item.annotations ?? []),
    [storedBlockReviews, exercises, item.corrected_text, item.teacher_grading, item.annotations],
  );

  function updateBlockReview(review: ExerciseBlockReview) {
    setBlockReviews((current) => current.map((entry) => (entry.exerciseId === review.exerciseId ? review : entry)));
  }

  function updateExerciseGrading(grading: ExerciseGrading) {
    setExerciseGrading((current) => {
      const next = current.filter((entry) => entry.exerciseId !== grading.exerciseId);
      return [...next, grading];
    });
  }

  function saveReview() {
    startTransition(async () => {
      const points = hasRubric && rubricTotal > 0 ? rubricTotal : blockTotal;
      const correctedText = joinCorrectedText(exercises, blockReviews);
      const annotations = flattenBlockAnnotations(blockReviews);
      const teacherGrading: TeacherGrading = {
        exercises: exerciseGrading,
        blockReviews,
        totalPoints: points,
      };
      const result = await reviewExpressionAction({
        id: item.id,
        correctedText,
        teacherComment,
        annotations,
        teacherPoints: points,
        finalResult,
        teacherGrading,
      });
      setMessage(result.ok ? "Correction et résultat renvoyés à l'élève." : (result.reason ?? "Enregistrement impossible."));
    });
  }

  const allBlocksCorrected = blockReviews.every((review) => hasCorrectedContent(review.correctedText));
  const hasPoints = hasRubric ? rubricTotal > 0 || blockTotal > 0 : blockTotal > 0 || teacherPoints.trim();

  return (
    <main className="app-shell app-shell--wide flex flex-1 flex-col pb-28 pt-4 sm:pt-6">
      <header className="mb-4 flex items-center gap-3 border-b border-[var(--color-border-default)] pb-4">
        <Link
          href="/messagerie"
          aria-label="Retour à la boîte de réception"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-theme-light)] hover:text-[var(--color-theme)]"
        >
          ‹
        </Link>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-theme)]">{kindLabel}</p>
          <h1 className="truncate text-lg font-bold text-[var(--color-text-primary)] sm:text-xl">{item.prompt.title}</h1>
        </div>
      </header>

      <article className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white shadow-sm">
        <div className="border-b border-[var(--color-border-default)] bg-[var(--color-theme-light)]/25 px-4 py-4 sm:px-6">
          <h2 className="text-lg font-bold text-[var(--color-text-primary)] sm:text-xl">{subject}</h2>
          <dl className="mt-4 grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1 text-sm sm:grid-cols-[5.5rem_1fr]">
            <dt className="font-semibold text-[var(--color-text-secondary)]">De</dt>
            <dd className="text-[var(--color-text-primary)]">{from}</dd>
            <dt className="font-semibold text-[var(--color-text-secondary)]">À</dt>
            <dd className="text-[var(--color-text-primary)]">{to}</dd>
            <dt className="font-semibold text-[var(--color-text-secondary)]">Date</dt>
            <dd className="text-[var(--color-text-primary)]">{formatMailboxFullDate(item.reviewed_at ?? item.created_at)}</dd>
          </dl>
        </div>

        <div className="space-y-6 px-4 py-6 sm:px-6">
          {!isOral && item.prompt.situation && exercises.length <= 1 && (
            <section className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-theme-light)]/15 p-4">
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Consigne générale</p>
              <p className="mt-2 text-sm text-[var(--color-text-primary)]">{item.prompt.situation}</p>
              {item.prompt.instruction && (
                <p className="mt-2 text-sm font-medium text-[var(--color-text-secondary)]">{item.prompt.instruction}</p>
              )}
            </section>
          )}

          {exercises.length > 0 ? (
            <div className="space-y-5">
              {exercises.map((exercise, index) => {
                const review = isTeacher
                  ? blockReviews.find((entry) => entry.exerciseId === exercise.id)
                  : studentBlockReviews.find((entry) => entry.exerciseId === exercise.id);
                return (
                  <PeExerciseFrame key={exercise.id} exercise={exercise} index={index}>
                    {isTeacher && review && (
                      <>
                        {hasRubric && rubricForPeExercise(exercise.kind, exercise.maxPoints) && (
                          <PeGradingRubric
                            exercise={exercise}
                            grading={exerciseGrading.find((entry) => entry.exerciseId === exercise.id)}
                            onChange={updateExerciseGrading}
                          />
                        )}
                        <PeExerciseCorrection
                          exercise={exercise}
                          review={review}
                          editable
                          isOral={isOral}
                          hidePoints={hasRubric && Boolean(rubricForPeExercise(exercise.kind, exercise.maxPoints))}
                          onChange={updateBlockReview}
                        />
                      </>
                    )}
                    {!isTeacher && item.status === "reviewed" && (
                      <>
                        {item.teacher_grading && (
                          <PeGradingResult
                            exercise={exercise}
                            grading={item.teacher_grading.exercises.find((entry) => entry.exerciseId === exercise.id)}
                          />
                        )}
                        {review && (
                          <PeExerciseCorrection
                            exercise={exercise}
                            review={review}
                            editable={false}
                            isOral={isOral}
                          />
                        )}
                      </>
                    )}
                  </PeExerciseFrame>
                );
              })}
            </div>
          ) : null}

          {isTeacher ? (
            <div className="space-y-6 border-t border-[var(--color-border-default)] pt-6">
              <section className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4">
                <h2 className="mb-3 font-bold text-[var(--color-text-primary)]">Notation professeur</h2>
                <p className="mb-3 text-sm text-[var(--color-text-secondary)]">
                  Total des blocs :{" "}
                  <strong className="text-[var(--color-theme)]">
                    {(hasRubric && rubricTotal > 0 ? rubricTotal : blockTotal).toLocaleString("fr-CH")} / {maxPoints} pts
                  </strong>
                  {hasRubric && rubricTotal > 0 && blockTotal !== rubricTotal && (
                    <span> — grille : {rubricTotal.toLocaleString("fr-CH")} pts</span>
                  )}
                </p>
                <div className="grid gap-3 sm:grid-cols-[1fr_2fr]">
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-[var(--color-text-primary)]">Points sur {maxPoints}</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={teacherPoints}
                      onChange={(event) => setTeacherPoints(event.target.value.replace(/[^0-9,.]/g, ""))}
                      placeholder={`0 à ${maxPoints}`}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 py-2 text-sm outline-none focus:border-amber-500"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-[var(--color-text-primary)]">Résultat final de l&apos;élève</span>
                    <AppSelect
                      value={finalResult}
                      onChange={setFinalResult}
                      options={[
                        { value: "Réussi", label: "Réussi" },
                        { value: "À retravailler", label: "À retravailler" },
                        { value: "Non validé", label: "Non validé" },
                      ]}
                      placeholder="Choisir un résultat"
                      emptyOption={{ value: "", label: "Choisir un résultat" }}
                      className="w-full"
                    />
                  </label>
                </div>
                <p className="mt-2 text-xs text-[var(--color-text-secondary)]">
                  Les points de chaque exercice sont additionnés automatiquement. L&apos;élève ne voit le score qu&apos;après l&apos;envoi.
                </p>
              </section>

              <section>
                <label htmlFor="teacher-comment" className="mb-2 block font-bold text-[var(--color-text-primary)]">
                  Commentaire général
                </label>
                <textarea
                  id="teacher-comment"
                  value={teacherComment}
                  onChange={(event) => setTeacherComment(event.target.value)}
                  rows={4}
                  className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-3 text-sm outline-none focus:border-amber-500"
                />
              </section>

              <button
                type="button"
                onClick={saveReview}
                disabled={pending || !allBlocksCorrected || !hasPoints || !finalResult.trim()}
                className="w-full rounded-[var(--radius-md)] bg-[var(--color-theme)] py-3 text-sm font-bold text-white disabled:opacity-40"
              >
                {pending ? "Enregistrement…" : "Renvoyer la correction et le résultat"}
              </button>
              {message && <p className="text-center text-sm font-semibold text-[var(--color-theme)]">{message}</p>}
            </div>
          ) : (
            <div className="space-y-6">
              {item.status === "reviewed" && item.teacher_points != null && item.final_result && (
                <section className="rounded-[var(--radius-md)] border border-[var(--color-theme)]/25 bg-[var(--color-theme-light)]/50 p-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-theme)]">Résultat</h3>
                  <p className="mt-2 text-2xl font-black text-[var(--color-text-primary)]">
                    {Number(item.teacher_points).toLocaleString("fr-CH")} / {maxPoints} pts
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-theme)]">{item.final_result}</p>
                </section>
              )}
              {item.status !== "reviewed" && !isOral && (
                <p className="rounded-[var(--radius-md)] bg-amber-50 p-4 text-sm text-amber-700">
                  Votre professeur n&apos;a pas encore renvoyé sa correction.
                </p>
              )}
              {item.teacher_comment && (
                <section className="rounded-[var(--radius-md)] border-l-4 border-amber-500 bg-white/75 p-4">
                  <h3 className="font-bold text-[var(--color-text-primary)]">Commentaire du professeur</h3>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[var(--color-text-primary)]">{item.teacher_comment}</p>
                </section>
              )}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
