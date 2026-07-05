-- Structured teacher grading (rubric per exercise) for PE/PO submissions.

ALTER TABLE public.expression_submissions
  ADD COLUMN IF NOT EXISTS teacher_grading jsonb;
