-- Purge admin : messages messagerie antérieurs au début de l'année scolaire en cours
-- (1er août). Couvre expression_submissions (PE/PO) et task_messages (devoirs).

CREATE OR REPLACE FUNCTION public.admin_purge_messages_before(p_before timestamptz)
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_expr integer := 0;
  v_task integer := 0;
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  IF p_before IS NULL THEN
    RAISE EXCEPTION 'Invalid cutoff date';
  END IF;

  DELETE FROM public.expression_submissions
  WHERE created_at < p_before;
  GET DIAGNOSTICS v_expr = ROW_COUNT;

  DELETE FROM public.task_messages
  WHERE created_at < p_before;
  GET DIAGNOSTICS v_task = ROW_COUNT;

  RETURN jsonb_build_object(
    'expression_deleted', v_expr,
    'task_deleted', v_task,
    'before', p_before
  );
END;
$$;

REVOKE ALL ON FUNCTION public.admin_purge_messages_before(timestamptz) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_purge_messages_before(timestamptz) TO authenticated;
