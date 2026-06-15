-- Task assignment system: teachers assign tasks to students.

CREATE TABLE IF NOT EXISTS public.tasks (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by  uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title       text        NOT NULL,
  description text,
  due_date    date,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.task_assignments (
  id         uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id    uuid        NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
  student_id uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  status     text        NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'done')),
  done_at    timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (task_id, student_id)
);

ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_assignments ENABLE ROW LEVEL SECURITY;

-- Tasks: teacher sees/deletes own; admin sees/deletes all; teacher inserts own.
CREATE POLICY "tasks_select" ON public.tasks FOR SELECT TO authenticated
  USING (
    created_by = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "tasks_insert" ON public.tasks FOR INSERT TO authenticated
  WITH CHECK (
    auth.uid() = created_by
    AND EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('prof', 'admin'))
  );

CREATE POLICY "tasks_delete" ON public.tasks FOR DELETE TO authenticated
  USING (
    created_by = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Assignments: student sees own; teacher sees assignments for their tasks; admin sees all.
CREATE POLICY "task_assignments_select" ON public.task_assignments FOR SELECT TO authenticated
  USING (
    student_id = auth.uid()
    OR EXISTS (SELECT 1 FROM public.tasks WHERE tasks.id = task_id AND tasks.created_by = auth.uid())
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "task_assignments_insert" ON public.task_assignments FOR INSERT TO authenticated
  WITH CHECK (
    EXISTS (SELECT 1 FROM public.tasks WHERE tasks.id = task_id AND tasks.created_by = auth.uid())
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Students can mark their own assignment done.
CREATE POLICY "task_assignments_update" ON public.task_assignments FOR UPDATE TO authenticated
  USING (student_id = auth.uid())
  WITH CHECK (student_id = auth.uid());

CREATE POLICY "task_assignments_delete" ON public.task_assignments FOR DELETE TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.tasks WHERE tasks.id = task_id AND tasks.created_by = auth.uid())
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Teacher view: tasks with completion stats.
CREATE OR REPLACE FUNCTION public.get_teacher_tasks()
RETURNS TABLE(
  task_id        uuid,
  title          text,
  description    text,
  due_date       date,
  created_at     timestamptz,
  total_students bigint,
  done_count     bigint
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('prof', 'admin')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  SELECT
    t.id AS task_id,
    t.title,
    t.description,
    t.due_date,
    t.created_at,
    COUNT(ta.id)::bigint AS total_students,
    COUNT(ta.id) FILTER (WHERE ta.status = 'done')::bigint AS done_count
  FROM public.tasks t
  LEFT JOIN public.task_assignments ta ON ta.task_id = t.id
  WHERE
    t.created_by = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  GROUP BY t.id
  ORDER BY t.created_at DESC;
END;
$$;

-- Student view: their assigned tasks, pending first.
CREATE OR REPLACE FUNCTION public.get_my_tasks()
RETURNS TABLE(
  assignment_id uuid,
  task_id       uuid,
  title         text,
  description   text,
  due_date      date,
  status        text,
  done_at       timestamptz,
  created_at    timestamptz
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ta.id AS assignment_id,
    t.id  AS task_id,
    t.title,
    t.description,
    t.due_date,
    ta.status,
    ta.done_at,
    ta.created_at
  FROM public.task_assignments ta
  JOIN public.tasks t ON t.id = ta.task_id
  WHERE ta.student_id = auth.uid()
  ORDER BY
    CASE ta.status WHEN 'pending' THEN 0 ELSE 1 END,
    t.due_date ASC NULLS LAST,
    t.created_at DESC;
END;
$$;

-- For task creation form: list of students (prof/admin only).
CREATE OR REPLACE FUNCTION public.get_students_for_task()
RETURNS TABLE(id uuid, prenom text, nom text, classe text)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM public.profiles WHERE profiles.id = auth.uid() AND role IN ('prof', 'admin')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  SELECT p.id, p.prenom, p.nom, p.classe
  FROM public.profiles p
  WHERE p.role = 'eleve'
  ORDER BY p.classe NULLS LAST, p.nom, p.prenom;
END;
$$;
