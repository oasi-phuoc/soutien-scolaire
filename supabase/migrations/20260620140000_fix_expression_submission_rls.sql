-- Allow students to submit to a teacher without exposing teacher profiles.
-- The previous policy queried profiles directly and was blocked by profiles RLS.

CREATE OR REPLACE FUNCTION public.is_expression_teacher(target_user uuid)
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.profiles p
    WHERE p.id = target_user AND p.role IN ('prof', 'admin')
  );
$$;

REVOKE ALL ON FUNCTION public.is_expression_teacher(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_expression_teacher(uuid) TO authenticated;

DROP POLICY IF EXISTS "expression_student_insert"
  ON public.expression_submissions;

CREATE POLICY "expression_student_insert"
  ON public.expression_submissions FOR INSERT TO authenticated
  WITH CHECK (
    student_id = auth.uid()
    AND public.is_expression_teacher(teacher_id)
  );
