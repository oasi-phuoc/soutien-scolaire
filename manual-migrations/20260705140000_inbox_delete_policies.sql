-- Allow users to delete their own mailbox items (expression submissions + task messages).

DROP POLICY IF EXISTS "expression_participant_delete" ON public.expression_submissions;
CREATE POLICY "expression_participant_delete"
  ON public.expression_submissions FOR DELETE TO authenticated
  USING (student_id = auth.uid() OR teacher_id = auth.uid());

DROP POLICY IF EXISTS "task_messages_delete_student" ON public.task_messages;
CREATE POLICY "task_messages_delete_student"
  ON public.task_messages FOR DELETE TO authenticated
  USING (student_id = auth.uid());
