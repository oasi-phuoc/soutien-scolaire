-- Grille détaillée + retour des points dans la messagerie.
-- À exécuter après 20260704072000_expression_teacher_grading.sql

ALTER TABLE public.expression_submissions
  ADD COLUMN IF NOT EXISTS teacher_grading jsonb;

COMMENT ON COLUMN public.expression_submissions.teacher_grading IS
  'Grille détaillée : { "exercises": [{ "exerciseId", "criteria": [{ "id", "points" }], "total" }], "totalPoints" }';

CREATE OR REPLACE FUNCTION public.sync_expression_teacher_points()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  rubric_total numeric;
BEGIN
  IF NEW.teacher_grading IS NOT NULL AND (NEW.teacher_grading ? 'totalPoints') THEN
    rubric_total := (NEW.teacher_grading->>'totalPoints')::numeric;
    IF rubric_total IS NOT NULL THEN
      IF rubric_total < 0 OR rubric_total > NEW.teacher_max_points THEN
        RAISE EXCEPTION 'totalPoints hors barème (0–%)', NEW.teacher_max_points;
      END IF;
      NEW.teacher_points := rubric_total;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS expression_submissions_sync_grading ON public.expression_submissions;
CREATE TRIGGER expression_submissions_sync_grading
  BEFORE INSERT OR UPDATE OF teacher_grading, teacher_points, teacher_max_points
  ON public.expression_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.sync_expression_teacher_points();

DROP FUNCTION IF EXISTS public.get_expression_inbox();
CREATE FUNCTION public.get_expression_inbox()
RETURNS TABLE(
  submission_id uuid,
  lesson_code text,
  level text,
  prompt_title text,
  status text,
  created_at timestamptz,
  reviewed_at timestamptz,
  unread boolean,
  direction text,
  correspondent_name text,
  teacher_points numeric,
  teacher_max_points integer,
  final_result text
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE caller_role text;
BEGIN
  SELECT p.role INTO caller_role FROM public.profiles p WHERE p.id = auth.uid();

  IF caller_role = 'admin' THEN
    RETURN QUERY
    SELECT s.id, s.lesson_code, s.level,
      COALESCE(s.prompt->>'title', 'Production écrite'), s.status,
      s.created_at, s.reviewed_at,
      CASE
        WHEN s.teacher_id = auth.uid() THEN s.teacher_read_at IS NULL
        ELSE s.status = 'reviewed' AND s.student_read_at IS NULL
      END,
      CASE WHEN s.teacher_id = auth.uid() THEN 'received' ELSE 'sent' END,
      trim(concat_ws(' ', p.prenom, p.nom)),
      CASE WHEN s.student_id = auth.uid() AND s.status = 'reviewed' THEN s.teacher_points ELSE NULL END,
      CASE WHEN s.student_id = auth.uid() AND s.status = 'reviewed' THEN s.teacher_max_points ELSE NULL END,
      CASE WHEN s.student_id = auth.uid() AND s.status = 'reviewed' THEN s.final_result ELSE NULL END
    FROM public.expression_submissions s
    JOIN public.profiles p
      ON p.id = CASE WHEN s.teacher_id = auth.uid() THEN s.student_id ELSE s.teacher_id END
    WHERE s.teacher_id = auth.uid() OR s.student_id = auth.uid()
    ORDER BY s.created_at DESC;
  ELSIF caller_role = 'prof' THEN
    RETURN QUERY
    SELECT s.id, s.lesson_code, s.level,
      COALESCE(s.prompt->>'title', 'Production écrite'), s.status,
      s.created_at, s.reviewed_at, s.teacher_read_at IS NULL,
      'received'::text, trim(concat_ws(' ', p.prenom, p.nom)),
      NULL::numeric, NULL::integer, NULL::text
    FROM public.expression_submissions s
    JOIN public.profiles p ON p.id = s.student_id
    WHERE s.teacher_id = auth.uid()
    ORDER BY (s.status = 'submitted') DESC, s.created_at DESC;
  ELSE
    RETURN QUERY
    SELECT s.id, s.lesson_code, s.level,
      COALESCE(s.prompt->>'title', 'Production écrite'), s.status,
      s.created_at, s.reviewed_at,
      s.status = 'reviewed' AND s.student_read_at IS NULL,
      'sent'::text, trim(concat_ws(' ', p.prenom, p.nom)),
      CASE WHEN s.status = 'reviewed' THEN s.teacher_points ELSE NULL END,
      CASE WHEN s.status = 'reviewed' THEN s.teacher_max_points ELSE NULL END,
      CASE WHEN s.status = 'reviewed' THEN s.final_result ELSE NULL END
    FROM public.expression_submissions s
    JOIN public.profiles p ON p.id = s.teacher_id
    WHERE s.student_id = auth.uid()
    ORDER BY s.created_at DESC;
  END IF;
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_expression_inbox() TO authenticated;
