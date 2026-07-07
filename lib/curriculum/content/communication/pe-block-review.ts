import type { ExpressionAnnotation } from "@/app/actions/expression";
import type {
  BlockAnnotation,
  ExerciseBlockReview,
  SubmissionExercise,
  TeacherGrading,
} from "./expression-submission-types";

export function initBlockReviews(
  exercises: SubmissionExercise[],
  correctedText: string | null,
  teacherGrading: TeacherGrading | null | undefined,
  legacyAnnotations: ExpressionAnnotation[],
): ExerciseBlockReview[] {
  const stored = teacherGrading?.blockReviews;
  if (stored?.length) {
    return exercises.map((exercise) => {
      const match = stored.find((entry) => entry.exerciseId === exercise.id);
      return match ?? emptyBlockReview(exercise);
    });
  }

  const sections = splitCorrectedByExercise(correctedText ?? "", exercises);
  return exercises.map((exercise, index) => ({
    exerciseId: exercise.id,
    correctedText: sections[index] ?? exercise.text,
    annotations: legacyAnnotationsToBlock(legacyAnnotations, exercise.text),
    points: teacherGrading?.exercises.find((entry) => entry.exerciseId === exercise.id)?.total ?? 0,
  }));
}

function emptyBlockReview(exercise: SubmissionExercise): ExerciseBlockReview {
  return {
    exerciseId: exercise.id,
    correctedText: exercise.text,
    annotations: [],
    points: 0,
  };
}

function splitCorrectedByExercise(correctedText: string, exercises: SubmissionExercise[]): string[] {
  if (!correctedText.trim() || exercises.length <= 1) {
    return exercises.length === 1 ? [correctedText || exercises[0]!.text] : [];
  }

  const sections: string[] = [];
  for (const exercise of exercises) {
    const headerPattern = new RegExp(`=== ${escapeRegExp(exercise.title)} \\(\\d+ pts\\) ===\\n\\n`, "u");
    const match = correctedText.match(headerPattern);
    if (!match || match.index === undefined) continue;
    const start = match.index + match[0].length;
    const nextHeader = correctedText.slice(start).search(/\n\n=== .+? \(\d+ pts\) ===\n\n/u);
    const end = nextHeader >= 0 ? start + nextHeader : correctedText.length;
    sections.push(correctedText.slice(start, end).trim());
  }

  if (sections.length === exercises.length) return sections;
  return exercises.map((exercise, index) => sections[index] ?? exercise.text);
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function legacyAnnotationsToBlock(annotations: ExpressionAnnotation[], exerciseText: string): BlockAnnotation[] {
  return annotations.map((annotation) => ({
    label: annotation.text.trim() || "Annotation",
    comment: annotation.comment,
    quotedText: annotation.text,
  })).filter((entry) => exerciseText.includes(entry.quotedText ?? ""));
}

export function joinCorrectedText(exercises: SubmissionExercise[], reviews: ExerciseBlockReview[]): string {
  if (reviews.length <= 1) {
    return reviews[0]?.correctedText.trim() ?? "";
  }
  return reviews
    .map((review, index) => {
      const exercise = exercises[index];
      if (!exercise) return review.correctedText.trim();
      const header = `=== ${exercise.title} (${exercise.maxPoints} pts) ===`;
      return `${header}\n\n${review.correctedText.trim()}`;
    })
    .join("\n\n");
}

export function flattenBlockAnnotations(reviews: ExerciseBlockReview[]): ExpressionAnnotation[] {
  let offset = 0;
  const flat: ExpressionAnnotation[] = [];
  for (const review of reviews) {
    for (const annotation of review.annotations) {
      const text = annotation.quotedText ?? annotation.label;
      flat.push({
        start: offset,
        end: offset + text.length,
        text,
        comment: annotation.comment,
      });
    }
    offset += 1000;
  }
  return flat;
}

export function sumBlockPoints(reviews: ExerciseBlockReview[]): number {
  return reviews.reduce((sum, review) => sum + (Number.isFinite(review.points) ? review.points : 0), 0);
}
