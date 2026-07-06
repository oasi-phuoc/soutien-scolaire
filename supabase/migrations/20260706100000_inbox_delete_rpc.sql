-- Suppression de messages boîte de réception via RPC SECURITY DEFINER
-- (contourne l'absence éventuelle des politiques DELETE RLS côté client).

DROP POLICY IF EXISTS "expression_participant_delete" ON public.expression_submissions;
CREATE POLICY "expression_participant_delete"
  ON public.expression_submissions FOR DELETE TO authenticated
  USING (student_id = auth.uid() OR teacher_id = auth.uid());

DROP POLICY IF EXISTS "task_messages_delete_student" ON public.task_messages;
CREATE POLICY "task_messages_delete_student"
  ON public.task_messages FOR DELETE TO authenticated
  USING (student_id = auth.uid());

CREATE OR REPLACE FUNCTION public.delete_inbox_messages(items jsonb)
RETURNS bigint
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  item jsonb;
  deleted_count bigint := 0;
  row_count bigint;
  item_id uuid;
  item_kind text;
BEGIN
  IF auth.uid() IS NULL THEN
    RETURN 0;
  END IF;

  IF items IS NULL OR jsonb_typeof(items) <> 'array' THEN
    RETURN 0;
  END IF;

  FOR item IN SELECT value FROM jsonb_array_elements(items) AS value
  LOOP
    item_id := NULLIF(item->>'id', '')::uuid;
    item_kind := item->>'kind';

    IF item_id IS NULL OR item_kind IS NULL THEN
      CONTINUE;
    END IF;

    IF item_kind = 'task' THEN
      DELETE FROM public.task_messages
      WHERE id = item_id AND student_id = auth.uid();
      GET DIAGNOSTICS row_count = ROW_COUNT;
      deleted_count := deleted_count + row_count;
    ELSIF item_kind = 'expression' THEN
      DELETE FROM public.expression_submissions
      WHERE id = item_id
        AND (student_id = auth.uid() OR teacher_id = auth.uid());
      GET DIAGNOSTICS row_count = ROW_COUNT;
      deleted_count := deleted_count + row_count;
    END IF;
  END LOOP;

  RETURN deleted_count;
END;
$$;

REVOKE ALL ON FUNCTION public.delete_inbox_messages(jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.delete_inbox_messages(jsonb) TO authenticated;
