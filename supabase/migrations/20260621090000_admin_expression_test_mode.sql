-- Admins can test written-expression submissions while keeping their teacher inbox.

CREATE OR REPLACE FUNCTION public.is_expression_teacher(target_user uuid)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles p
    WHERE p.id = target_user AND p.role IN ('prof', 'admin')
  );
$$;

REVOKE ALL ON FUNCTION public.is_expression_teacher(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_expression_teacher(uuid) TO authenticated;

DROP POLICY IF EXISTS "expression_student_insert" ON public.expression_submissions;
CREATE POLICY "expression_student_insert"
  ON public.expression_submissions FOR INSERT TO authenticated
  WITH CHECK (
    student_id = auth.uid()
    AND public.is_expression_teacher(teacher_id)
  );

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
  correspondent_name text
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
      trim(concat_ws(' ', p.prenom, p.nom))
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
      'received'::text, trim(concat_ws(' ', p.prenom, p.nom))
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
      'sent'::text, trim(concat_ws(' ', p.prenom, p.nom))
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
  IF caller_role = 'admin' THEN
    SELECT count(*) INTO result_count
    FROM public.expression_submissions s
    WHERE (s.teacher_id = auth.uid() AND s.teacher_read_at IS NULL)
       OR (s.student_id = auth.uid() AND s.status = 'reviewed' AND s.student_read_at IS NULL);
  ELSIF caller_role = 'prof' THEN
    SELECT count(*) INTO result_count FROM public.expression_submissions
    WHERE teacher_id = auth.uid() AND teacher_read_at IS NULL;
  ELSE
    SELECT count(*) INTO result_count FROM public.expression_submissions
    WHERE student_id = auth.uid() AND status = 'reviewed' AND student_read_at IS NULL;
  END IF;
  RETURN COALESCE(result_count, 0);
END;
$$;

GRANT EXECUTE ON FUNCTION public.get_expression_inbox() TO authenticated;
GRANT EXECUTE ON FUNCTION public.get_expression_unread_count() TO authenticated;
