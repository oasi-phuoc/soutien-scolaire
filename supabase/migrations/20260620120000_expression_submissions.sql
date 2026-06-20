-- Written-expression mailbox between students and teachers.

CREATE TABLE IF NOT EXISTS public.expression_submissions (
  id                     uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id             uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  teacher_id             uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_code            text NOT NULL,
  level                   text NOT NULL CHECK (level IN ('base', 'moyen', 'avance')),
  prompt_id               text NOT NULL,
  prompt                  jsonb NOT NULL,
  original_text           text NOT NULL,
  ai_feedback             jsonb NOT NULL DEFAULT '[]'::jsonb,
  corrected_text          text,
  teacher_comment         text,
  annotations             jsonb NOT NULL DEFAULT '[]'::jsonb,
  status                  text NOT NULL DEFAULT 'submitted' CHECK (status IN ('submitted', 'reviewed')),
  teacher_read_at         timestamptz,
  student_read_at         timestamptz,
  created_at              timestamptz NOT NULL DEFAULT now(),
  reviewed_at             timestamptz,
  updated_at              timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS expression_submissions_student_idx
  ON public.expression_submissions (student_id, created_at DESC);
CREATE INDEX IF NOT EXISTS expression_submissions_teacher_idx
  ON public.expression_submissions (teacher_id, status, created_at DESC);

ALTER TABLE public.expression_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "expression_select_participants"
  ON public.expression_submissions FOR SELECT TO authenticated
  USING (student_id = auth.uid() OR teacher_id = auth.uid());

CREATE POLICY "expression_student_insert"
  ON public.expression_submissions FOR INSERT TO authenticated
  WITH CHECK (
    student_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles student
      WHERE student.id = auth.uid() AND student.role = 'eleve'
    )
    AND EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = teacher_id AND p.role IN ('prof', 'admin')
    )
  );

CREATE POLICY "expression_teacher_update"
  ON public.expression_submissions FOR UPDATE TO authenticated
  USING (teacher_id = auth.uid())
  WITH CHECK (teacher_id = auth.uid());

CREATE OR REPLACE FUNCTION public.get_expression_teachers()
RETURNS TABLE(id uuid, prenom text, nom text)
LANGUAGE sql SECURITY DEFINER SET search_path = public
AS $$
  SELECT p.id, p.prenom, p.nom
  FROM public.profiles p
  WHERE p.role IN ('prof', 'admin') AND p.id <> auth.uid()
  ORDER BY p.nom NULLS LAST, p.prenom NULLS LAST;
$$;

CREATE OR REPLACE FUNCTION public.get_expression_inbox()
RETURNS TABLE(
  submission_id uuid,
  lesson_code text,
  level text,
  prompt_title text,
  status text,
  created_at timestamptz,
  reviewed_at timestamptz,
  unread boolean,
  correspondent_name text
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE caller_role text;
BEGIN
  SELECT p.role INTO caller_role FROM public.profiles p WHERE p.id = auth.uid();

  IF caller_role IN ('prof', 'admin') THEN
    RETURN QUERY
    SELECT s.id, s.lesson_code, s.level, COALESCE(s.prompt->>'title', 'Production écrite'),
      s.status, s.created_at, s.reviewed_at, s.teacher_read_at IS NULL,
      trim(concat_ws(' ', p.prenom, p.nom))
    FROM public.expression_submissions s
    JOIN public.profiles p ON p.id = s.student_id
    WHERE s.teacher_id = auth.uid()
    ORDER BY (s.status = 'submitted') DESC, s.created_at DESC;
  ELSE
    RETURN QUERY
    SELECT s.id, s.lesson_code, s.level, COALESCE(s.prompt->>'title', 'Production écrite'),
      s.status, s.created_at, s.reviewed_at,
      s.status = 'reviewed' AND s.student_read_at IS NULL,
      trim(concat_ws(' ', p.prenom, p.nom))
    FROM public.expression_submissions s
    JOIN public.profiles p ON p.id = s.teacher_id
    WHERE s.student_id = auth.uid()
    ORDER BY s.created_at DESC;
  END IF;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_expression_unread_count()
RETURNS bigint
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE caller_role text;
DECLARE result_count bigint;
BEGIN
  SELECT p.role INTO caller_role FROM public.profiles p WHERE p.id = auth.uid();
  IF caller_role IN ('prof', 'admin') THEN
    SELECT count(*) INTO result_count FROM public.expression_submissions
    WHERE teacher_id = auth.uid() AND teacher_read_at IS NULL;
  ELSE
    SELECT count(*) INTO result_count FROM public.expression_submissions
    WHERE student_id = auth.uid() AND status = 'reviewed' AND student_read_at IS NULL;
  END IF;
  RETURN COALESCE(result_count, 0);
END;
$$;

CREATE OR REPLACE FUNCTION public.mark_expression_read(submission uuid)
RETURNS void
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  UPDATE public.expression_submissions
  SET
    teacher_read_at = CASE WHEN teacher_id = auth.uid() THEN now() ELSE teacher_read_at END,
    student_read_at = CASE WHEN student_id = auth.uid() THEN now() ELSE student_read_at END
  WHERE id = submission AND (teacher_id = auth.uid() OR student_id = auth.uid());
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_expression_teachers() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_expression_inbox() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_expression_unread_count() TO authenticated;
GRANT EXECUTE ON FUNCTION public.mark_expression_read(uuid) TO authenticated;
