-- Teacher-assigned grading for written and oral expression submissions.

ALTER TABLE public.expression_submissions
  ADD COLUMN IF NOT EXISTS teacher_points numeric(5,2),
  ADD COLUMN IF NOT EXISTS teacher_max_points integer NOT NULL DEFAULT 25,
  ADD COLUMN IF NOT EXISTS final_result text;

ALTER TABLE public.expression_submissions
  DROP CONSTRAINT IF EXISTS expression_submissions_teacher_points_range,
  ADD CONSTRAINT expression_submissions_teacher_points_range
    CHECK (teacher_points IS NULL OR (teacher_points >= 0 AND teacher_points <= teacher_max_points));

ALTER TABLE public.expression_submissions
  DROP CONSTRAINT IF EXISTS expression_submissions_teacher_max_points_positive,
  ADD CONSTRAINT expression_submissions_teacher_max_points_positive
    CHECK (teacher_max_points > 0);
