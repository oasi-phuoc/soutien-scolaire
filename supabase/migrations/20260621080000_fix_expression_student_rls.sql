-- Fix expression_student_insert RLS policy.
-- The original policy required student.role = 'eleve', but new profiles have
-- role = NULL (the trigger never sets it), so inserts were always rejected.
-- The student_id = auth.uid() check is sufficient: users can only submit as themselves.

DROP POLICY IF EXISTS "expression_student_insert" ON public.expression_submissions;

CREATE POLICY "expression_student_insert"
  ON public.expression_submissions FOR INSERT TO authenticated
  WITH CHECK (
    student_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = teacher_id AND p.role IN ('prof', 'admin')
    )
  );
