-- Teacher suivi: primary class, scoped class access, enriched dashboard RPCs.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS primary_class_id uuid REFERENCES public.school_classes(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS profiles_primary_class_idx ON public.profiles (primary_class_id);

-- Prof can read own class_teachers rows
DROP POLICY IF EXISTS "class_teachers_select" ON public.class_teachers;
CREATE POLICY "class_teachers_select" ON public.class_teachers FOR SELECT TO authenticated
  USING (
    teacher_id = auth.uid()
    OR EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
  );

-- Classes visible to assigned teacher or admin
DROP POLICY IF EXISTS "school_classes_select" ON public.school_classes;
CREATE POLICY "school_classes_select" ON public.school_classes FOR SELECT TO authenticated
  USING (
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    OR EXISTS (
      SELECT 1 FROM public.class_teachers ct
      WHERE ct.class_id = school_classes.id AND ct.teacher_id = auth.uid()
    )
  );

-- Helper: teacher can access class label
CREATE OR REPLACE FUNCTION public.teacher_can_access_class(p_label text)
RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public STABLE
AS $$
BEGIN
  IF EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin') THEN
    RETURN true;
  END IF;
  RETURN EXISTS (
    SELECT 1
    FROM public.school_classes sc
    JOIN public.class_teachers ct ON ct.class_id = sc.id AND ct.teacher_id = auth.uid()
    WHERE trim(sc.label) = trim(p_label)
  );
END;
$$;

-- Classes for current teacher (admin = all)
CREATE OR REPLACE FUNCTION public.get_my_teacher_classes()
RETURNS TABLE(
  class_id     uuid,
  label        text,
  student_count bigint,
  is_primary   boolean
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
DECLARE
  v_role text;
  v_primary uuid;
BEGIN
  SELECT role, primary_class_id INTO v_role, v_primary
  FROM public.profiles WHERE id = auth.uid();

  IF v_role NOT IN ('prof', 'admin') THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  SELECT
    sc.id,
    sc.label,
    COUNT(DISTINCT cm.student_id)::bigint,
    (sc.id = v_primary) AS is_primary
  FROM public.school_classes sc
  LEFT JOIN public.class_members cm ON cm.class_id = sc.id
  WHERE
    v_role = 'admin'
    OR EXISTS (
      SELECT 1 FROM public.class_teachers ct
      WHERE ct.class_id = sc.id AND ct.teacher_id = auth.uid()
    )
  GROUP BY sc.id, sc.label
  ORDER BY (sc.id = v_primary) DESC, sc.label;
END;
$$;

-- Has suivi access (prof needs >=1 class assignment)
CREATE OR REPLACE FUNCTION public.has_suivi_access()
RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public STABLE
AS $$
DECLARE
  v_role text;
BEGIN
  SELECT role INTO v_role FROM public.profiles WHERE id = auth.uid();
  IF v_role = 'admin' THEN RETURN true; END IF;
  IF v_role = 'prof' THEN
    RETURN EXISTS (SELECT 1 FROM public.class_teachers WHERE teacher_id = auth.uid());
  END IF;
  RETURN false;
END;
$$;

-- Enriched class dashboard
CREATE OR REPLACE FUNCTION public.get_class_dashboard(p_class_label text)
RETURNS TABLE(
  student_count      bigint,
  avg_math_pct       numeric,
  avg_french_pct     numeric,
  avg_lecture_pct    numeric,
  avg_placement      numeric,
  pending_tasks      bigint,
  done_tasks         bigint,
  tasks_on_time_pct  numeric,
  total_time_sec     bigint,
  active_last_7d     bigint
)
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NOT public.teacher_can_access_class(p_class_label) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role IN ('prof', 'admin')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  WITH students AS (
    SELECT p.id, p.progress_data, p.progress_updated_at, p.placement_combined_profile
    FROM public.profiles p
    WHERE p.role = 'eleve' AND trim(p.classe) = trim(p_class_label)
  ),
  task_stats AS (
    SELECT
      COUNT(*) FILTER (WHERE ta.status = 'pending') AS pending,
      COUNT(*) FILTER (WHERE ta.status = 'done') AS done,
      COUNT(*) FILTER (
        WHERE ta.status = 'done'
          AND (t.due_date IS NULL OR ta.done_at::date <= t.due_date)
      ) AS on_time,
      COUNT(*) FILTER (WHERE ta.status = 'done' AND t.due_date IS NOT NULL) AS done_with_due
    FROM public.task_assignments ta
    JOIN public.tasks t ON t.id = ta.task_id
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
    (
      SELECT ROUND(AVG((s.placement_combined_profile->>'total')::numeric), 1)
      FROM students s
      WHERE s.placement_combined_profile IS NOT NULL
    ),
    (SELECT pending FROM task_stats),
    (SELECT done FROM task_stats),
    (
      SELECT CASE
        WHEN (SELECT done_with_due FROM task_stats) > 0
        THEN ROUND(100.0 * (SELECT on_time FROM task_stats) / (SELECT done_with_due FROM task_stats), 0)
        ELSE NULL
      END
    ),
    (SELECT total_sec FROM time_stats),
    (SELECT cnt FROM active);
END;
$$;

-- Replace get_school_classes to respect teacher scope
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
  WHERE
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin')
    OR EXISTS (
      SELECT 1 FROM public.class_teachers ct2
      WHERE ct2.class_id = sc.id AND ct2.teacher_id = auth.uid()
    )
  GROUP BY sc.id, sc.label
  ORDER BY sc.label;
END;
$$;
