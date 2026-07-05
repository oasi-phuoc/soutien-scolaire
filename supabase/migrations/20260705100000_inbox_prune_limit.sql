-- Keep at most 100 mailbox items per user account (oldest removed).

CREATE OR REPLACE FUNCTION public.prune_user_inbox_for(target_user uuid, p_max integer DEFAULT 100)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  caller_role text;
  deleted_count integer := 0;
  overflow integer;
  r record;
BEGIN
  IF target_user IS NULL OR p_max < 1 THEN
    RETURN 0;
  END IF;

  SELECT p.role INTO caller_role FROM public.profiles p WHERE p.id = target_user;
  IF caller_role IS NULL THEN
    RETURN 0;
  END IF;

  CREATE TEMP TABLE inbox_prune_items (
    id uuid NOT NULL,
    kind text NOT NULL,
    created_at timestamptz NOT NULL
  ) ON COMMIT DROP;

  IF caller_role = 'prof' THEN
    INSERT INTO inbox_prune_items (id, kind, created_at)
    SELECT s.id, 'expression', s.created_at
    FROM public.expression_submissions s
    WHERE s.teacher_id = target_user;
  ELSIF caller_role = 'admin' THEN
    INSERT INTO inbox_prune_items (id, kind, created_at)
    SELECT s.id, 'expression', s.created_at
    FROM public.expression_submissions s
    WHERE s.teacher_id = target_user OR s.student_id = target_user;
  ELSE
    INSERT INTO inbox_prune_items (id, kind, created_at)
    SELECT s.id, 'expression', s.created_at
    FROM public.expression_submissions s
    WHERE s.student_id = target_user;

    INSERT INTO inbox_prune_items (id, kind, created_at)
    SELECT tm.id, 'task', tm.created_at
    FROM public.task_messages tm
    WHERE tm.student_id = target_user;
  END IF;

  SELECT GREATEST(COUNT(*) - p_max, 0) INTO overflow FROM inbox_prune_items;
  IF overflow <= 0 THEN
    RETURN 0;
  END IF;

  FOR r IN
    SELECT id, kind FROM inbox_prune_items ORDER BY created_at ASC LIMIT overflow
  LOOP
    IF r.kind = 'task' THEN
      DELETE FROM public.task_messages WHERE id = r.id AND student_id = target_user;
    ELSIF caller_role = 'prof' THEN
      DELETE FROM public.expression_submissions WHERE id = r.id AND teacher_id = target_user;
    ELSIF caller_role = 'admin' THEN
      DELETE FROM public.expression_submissions
      WHERE id = r.id AND (teacher_id = target_user OR student_id = target_user);
    ELSE
      DELETE FROM public.expression_submissions WHERE id = r.id AND student_id = target_user;
    END IF;
    deleted_count := deleted_count + 1;
  END LOOP;

  RETURN deleted_count;
END;
$$;

CREATE OR REPLACE FUNCTION public.prune_user_inbox(p_max integer DEFAULT 100)
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  RETURN public.prune_user_inbox_for(auth.uid(), p_max);
END;
$$;

REVOKE ALL ON FUNCTION public.prune_user_inbox_for(uuid, integer) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.prune_user_inbox(integer) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.prune_user_inbox_for(uuid, integer) TO authenticated;
GRANT EXECUTE ON FUNCTION public.prune_user_inbox(integer) TO authenticated;
