-- Mailbox notifications created when a teacher/admin assigns homework.

CREATE TABLE IF NOT EXISTS public.task_messages (
  id            uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id       uuid NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
  assignment_id uuid REFERENCES public.task_assignments(id) ON DELETE CASCADE,
  student_id    uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  sender_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title         text NOT NULL,
  body          text,
  read_at       timestamptz,
  created_at    timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS task_messages_student_idx
  ON public.task_messages (student_id, read_at, created_at DESC);
CREATE INDEX IF NOT EXISTS task_messages_task_idx
  ON public.task_messages (task_id);

ALTER TABLE public.task_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "task_messages_select" ON public.task_messages;
CREATE POLICY "task_messages_select"
  ON public.task_messages FOR SELECT TO authenticated
  USING (
    student_id = auth.uid()
    OR sender_id = auth.uid()
    OR EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role = 'admin'
    )
  );

DROP POLICY IF EXISTS "task_messages_insert" ON public.task_messages;
CREATE POLICY "task_messages_insert"
  ON public.task_messages FOR INSERT TO authenticated
  WITH CHECK (
    sender_id = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid() AND p.role IN ('prof', 'admin')
    )
    AND EXISTS (
      SELECT 1 FROM public.tasks t
      WHERE t.id = task_id
        AND (
          t.created_by = auth.uid()
          OR EXISTS (
            SELECT 1 FROM public.profiles p
            WHERE p.id = auth.uid() AND p.role = 'admin'
          )
        )
    )
  );

DROP POLICY IF EXISTS "task_messages_update_read" ON public.task_messages;
CREATE POLICY "task_messages_update_read"
  ON public.task_messages FOR UPDATE TO authenticated
  USING (student_id = auth.uid())
  WITH CHECK (student_id = auth.uid());
