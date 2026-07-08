-- Platform features: classes, lesson links, attachments, control bank, sessions, attempts, proof.

-- ── Structured lesson link on tasks ─────────────────────────────────────────
ALTER TABLE public.tasks
  ADD COLUMN IF NOT EXISTS subject    text,
  ADD COLUMN IF NOT EXISTS module_id  text,
  ADD COLUMN IF NOT EXISTS lesson_id  text;

-- ── Proof fields on assignments ───────────────────────────────────────────────
ALTER TABLE public.task_assignments
  ADD COLUMN IF NOT EXISTS proof_type        text DEFAULT 'manual'
    CHECK (proof_type IN ('manual', 'auto_lesson', 'score')),
  ADD COLUMN IF NOT EXISTS proof_score       numeric,
  ADD COLUMN IF NOT EXISTS proof_grade       numeric,
  ADD COLUMN IF NOT EXISTS proof_data        jsonb,
  ADD COLUMN IF NOT EXISTS auto_completed    boolean NOT NULL DEFAULT false;

-- ── School classes (persistent groups) ────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.school_classes (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  label       text        NOT NULL UNIQUE,
  class_type  text,
  class_num   text,
  school_year text,
  created_by  uuid        REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS public.class_members (
  class_id    uuid NOT NULL REFERENCES public.school_classes(id) ON DELETE CASCADE,
  student_id  uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  joined_at   timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (class_id, student_id)
);

CREATE TABLE IF NOT EXISTS public.class_teachers (
  class_id    uuid NOT NULL REFERENCES public.school_classes(id) ON DELETE CASCADE,
  teacher_id  uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  assigned_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (class_id, teacher_id)
);

-- Backfill classes from existing profiles.classe labels
INSERT INTO public.school_classes (label)
SELECT DISTINCT trim(classe)
FROM public.profiles
WHERE role = 'eleve' AND classe IS NOT NULL AND trim(classe) <> ''
ON CONFLICT (label) DO NOTHING;

INSERT INTO public.class_members (class_id, student_id)
SELECT sc.id, p.id
FROM public.profiles p
JOIN public.school_classes sc ON sc.label = trim(p.classe)
WHERE p.role = 'eleve' AND p.classe IS NOT NULL AND trim(p.classe) <> ''
ON CONFLICT DO NOTHING;

-- ── Task attachments ─────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.task_attachments (
  id            uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  task_id       uuid        NOT NULL REFERENCES public.tasks(id) ON DELETE CASCADE,
  file_name     text        NOT NULL,
  storage_path  text        NOT NULL,
  mime_type     text,
  size_bytes    bigint,
  uploaded_by   uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at    timestamptz NOT NULL DEFAULT now()
);

-- ── Control question bank ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.control_bank_items (
  id          uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  created_by  uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title       text        NOT NULL,
  subject     text        NOT NULL,
  module_id   text,
  lesson_id   text,
  question    jsonb       NOT NULL DEFAULT '{}',
  answer_key  jsonb,
  difficulty  text        CHECK (difficulty IN ('facile', 'moyen', 'difficile')),
  tags        text[]      DEFAULT '{}',
  is_active   boolean     NOT NULL DEFAULT true,
  created_at  timestamptz NOT NULL DEFAULT now(),
  updated_at  timestamptz NOT NULL DEFAULT now()
);

-- ── Learning sessions (time spent) ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.learning_sessions (
  id           uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject      text        NOT NULL,
  module_id    text,
  lesson_id    text,
  lesson_path  text,
  started_at   timestamptz NOT NULL DEFAULT now(),
  ended_at     timestamptz,
  duration_sec integer,
  source       text        NOT NULL DEFAULT 'web'
);

CREATE INDEX IF NOT EXISTS learning_sessions_user_idx ON public.learning_sessions (user_id, started_at DESC);
CREATE INDEX IF NOT EXISTS learning_sessions_class_lookup_idx ON public.learning_sessions (subject, module_id, lesson_id);

-- ── Detailed eval attempts ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.eval_attempts (
  id             uuid        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        uuid        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject        text        NOT NULL,
  module_id      text,
  lesson_id      text,
  lesson_key     text        NOT NULL,
  score          numeric     NOT NULL,
  max_score      numeric     NOT NULL,
  grade          numeric,
  attempt_number integer     NOT NULL DEFAULT 1,
  proof_data     jsonb,
  created_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS eval_attempts_user_idx ON public.eval_attempts (user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS eval_attempts_lesson_idx ON public.eval_attempts (user_id, lesson_key);

-- ── RLS ───────────────────────────────────────────────────────────────────────
ALTER TABLE public.school_classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_teachers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.task_attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.control_bank_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.learning_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.eval_attempts ENABLE ROW LEVEL SECURITY;

-- Classes: prof/admin read; admin manage
CREATE POLICY "school_classes_select" ON public.school_classes FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('prof', 'admin'))
  );

CREATE POLICY "school_classes_manage" ON public.school_classes FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "class_members_select" ON public.class_members FOR SELECT TO authenticated
  USING (
    student_id = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('prof', 'admin'))
  );

CREATE POLICY "class_members_manage" ON public.class_members FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE POLICY "class_teachers_select" ON public.class_teachers FOR SELECT TO authenticated
  USING (
    teacher_id = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "class_teachers_manage" ON public.class_teachers FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

-- Attachments: teacher on own tasks; student on assigned tasks
CREATE POLICY "task_attachments_select" ON public.task_attachments FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.tasks t
      WHERE t.id = task_id AND (
        t.created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM public.task_assignments ta WHERE ta.task_id = t.id AND ta.student_id = auth.uid())
        OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
      )
    )
  );

CREATE POLICY "task_attachments_insert" ON public.task_attachments FOR INSERT TO authenticated
  WITH CHECK (
    uploaded_by = auth.uid()
    AND EXISTS (
      SELECT 1 FROM public.tasks t
      WHERE t.id = task_id AND (
        t.created_by = auth.uid()
        OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
      )
    )
  );

CREATE POLICY "task_attachments_delete" ON public.task_attachments FOR DELETE TO authenticated
  USING (
    uploaded_by = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Control bank: prof/admin CRUD own items; admin sees all
CREATE POLICY "control_bank_select" ON public.control_bank_items FOR SELECT TO authenticated
  USING (
    created_by = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "control_bank_insert" ON public.control_bank_items FOR INSERT TO authenticated
  WITH CHECK (
    auth.uid() = created_by
    AND EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('prof', 'admin'))
  );

CREATE POLICY "control_bank_update" ON public.control_bank_items FOR UPDATE TO authenticated
  USING (
    created_by = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

CREATE POLICY "control_bank_delete" ON public.control_bank_items FOR DELETE TO authenticated
  USING (
    created_by = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Sessions: own rows; prof/admin read all
CREATE POLICY "learning_sessions_select" ON public.learning_sessions FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('prof', 'admin'))
  );

CREATE POLICY "learning_sessions_insert" ON public.learning_sessions FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "learning_sessions_update" ON public.learning_sessions FOR UPDATE TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Eval attempts: own rows; prof/admin read all
CREATE POLICY "eval_attempts_select" ON public.eval_attempts FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('prof', 'admin'))
  );

CREATE POLICY "eval_attempts_insert" ON public.eval_attempts FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

-- ── Updated RPCs ──────────────────────────────────────────────────────────────
-- Return types changed vs 20260615000000_add_tasks — must drop before replace.
DROP FUNCTION IF EXISTS public.get_teacher_tasks();
DROP FUNCTION IF EXISTS public.get_my_tasks();
DROP FUNCTION IF EXISTS public.get_class_dashboard(text);
DROP FUNCTION IF EXISTS public.get_school_classes();

CREATE OR REPLACE FUNCTION public.get_teacher_tasks()
RETURNS TABLE(
  task_id        uuid,
  title          text,
  description    text,
  due_date       date,
  module_ref     text,
  lesson_ref     text,
  subject        text,
  module_id      text,
  lesson_id      text,
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
    t.id, t.title, t.description, t.due_date, t.module_ref, t.lesson_ref,
    t.subject, t.module_id, t.lesson_id, t.created_at,
    COUNT(ta.id)::bigint,
    COUNT(ta.id) FILTER (WHERE ta.status = 'done')::bigint
  FROM public.tasks t
  LEFT JOIN public.task_assignments ta ON ta.task_id = t.id
  WHERE t.created_by = auth.uid()
     OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  GROUP BY t.id
  ORDER BY t.created_at DESC;
END;
$$;

CREATE OR REPLACE FUNCTION public.get_my_tasks()
RETURNS TABLE(
  assignment_id uuid,
  task_id       uuid,
  title         text,
  description   text,
  due_date      date,
  module_ref    text,
  lesson_ref    text,
  subject       text,
  module_id     text,
  lesson_id     text,
  status        text,
  done_at       timestamptz,
  proof_type    text,
  proof_grade   numeric,
  auto_completed boolean,
  created_at    timestamptz
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  RETURN QUERY
  SELECT
    ta.id, t.id, t.title, t.description, t.due_date, t.module_ref, t.lesson_ref,
    t.subject, t.module_id, t.lesson_id,
    ta.status, ta.done_at, ta.proof_type, ta.proof_grade, ta.auto_completed, ta.created_at
  FROM public.task_assignments ta
  JOIN public.tasks t ON t.id = ta.task_id
  WHERE ta.student_id = auth.uid()
  ORDER BY
    CASE ta.status WHEN 'pending' THEN 0 ELSE 1 END,
    t.due_date ASC NULLS LAST,
    t.created_at DESC;
END;
$$;

-- Class dashboard aggregates
CREATE OR REPLACE FUNCTION public.get_class_dashboard(p_class_label text)
RETURNS TABLE(
  student_count      bigint,
  avg_math_pct       numeric,
  avg_french_pct     numeric,
  avg_lecture_pct    numeric,
  pending_tasks      bigint,
  done_tasks         bigint,
  total_time_sec     bigint,
  active_last_7d     bigint
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
  WITH students AS (
    SELECT p.id, p.progress_data, p.progress_updated_at
    FROM public.profiles p
    WHERE p.role = 'eleve' AND trim(p.classe) = trim(p_class_label)
  ),
  task_stats AS (
    SELECT
      COUNT(*) FILTER (WHERE ta.status = 'pending') AS pending,
      COUNT(*) FILTER (WHERE ta.status = 'done') AS done
    FROM public.task_assignments ta
    JOIN students s ON s.id = ta.student_id
  ),
  time_stats AS (
    SELECT COALESCE(SUM(ls.duration_sec), 0)::bigint AS total_sec
    FROM public.learning_sessions ls
    JOIN students s ON s.id = ls.user_id
    WHERE ls.duration_sec IS NOT NULL
  ),
  active AS (
    SELECT COUNT(*)::bigint AS cnt
    FROM students s
    WHERE s.progress_updated_at >= now() - interval '7 days'
  )
  SELECT
    (SELECT COUNT(*)::bigint FROM students),
    NULL::numeric,
    NULL::numeric,
    NULL::numeric,
    (SELECT pending FROM task_stats),
    (SELECT done FROM task_stats),
    (SELECT total_sec FROM time_stats),
    (SELECT cnt FROM active);
END;
$$;

-- List school classes
CREATE OR REPLACE FUNCTION public.get_school_classes()
RETURNS TABLE(
  class_id     uuid,
  label        text,
  student_count bigint,
  teacher_count bigint
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
    sc.id,
    sc.label,
    COUNT(DISTINCT cm.student_id)::bigint,
    COUNT(DISTINCT ct.teacher_id)::bigint
  FROM public.school_classes sc
  LEFT JOIN public.class_members cm ON cm.class_id = sc.id
  LEFT JOIN public.class_teachers ct ON ct.class_id = sc.id
  GROUP BY sc.id, sc.label
  ORDER BY sc.label;
END;
$$;
