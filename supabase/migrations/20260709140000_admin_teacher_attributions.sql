-- Admin bulk teacher class attributions (titulariat + secondaires).
-- Fixes: admin cannot UPDATE other profiles via RLS; one titulaire per class.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS primary_class_id uuid REFERENCES public.school_classes(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS profiles_primary_class_idx ON public.profiles (primary_class_id);

-- At most one professeur titulaire per class.
CREATE UNIQUE INDEX IF NOT EXISTS profiles_one_titulaire_per_class_idx
  ON public.profiles (primary_class_id)
  WHERE primary_class_id IS NOT NULL AND role = 'prof';

CREATE OR REPLACE FUNCTION public.admin_save_teacher_attributions(p_updates jsonb)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  item jsonb;
  v_teacher_id uuid;
  v_primary uuid;
  v_secondary uuid[];
  v_all_classes uuid[];
  v_sec jsonb;
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  IF p_updates IS NULL OR jsonb_typeof(p_updates) <> 'array' THEN
    RAISE EXCEPTION 'Invalid payload';
  END IF;

  -- Clear existing titulaires for newly assigned classes (unique titular per class).
  FOR item IN SELECT value FROM jsonb_array_elements(p_updates) AS t(value)
  LOOP
    v_primary := NULLIF(item->>'primary_class_id', '')::uuid;
    IF v_primary IS NOT NULL THEN
      UPDATE public.profiles
      SET primary_class_id = NULL
      WHERE role = 'prof' AND primary_class_id = v_primary;
    END IF;
  END LOOP;

  FOR item IN SELECT value FROM jsonb_array_elements(p_updates) AS t(value)
  LOOP
    v_teacher_id := (item->>'teacher_id')::uuid;
    v_primary := NULLIF(item->>'primary_class_id', '')::uuid;
    v_sec := item->'secondary_class_ids';
    v_secondary := ARRAY(
      SELECT DISTINCT (x)::uuid
      FROM jsonb_array_elements_text(COALESCE(v_sec, '[]'::jsonb)) AS t(x)
      WHERE x <> ''
    );

    IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = v_teacher_id AND role = 'prof') THEN
      RAISE EXCEPTION 'Professeur introuvable: %', v_teacher_id;
    END IF;

    v_all_classes := ARRAY(
      SELECT DISTINCT unnest(
        CASE
          WHEN v_primary IS NULL THEN v_secondary
          ELSE v_secondary || ARRAY[v_primary]
        END
      )
    );

    DELETE FROM public.class_teachers WHERE teacher_id = v_teacher_id;

    IF COALESCE(array_length(v_all_classes, 1), 0) > 0 THEN
      INSERT INTO public.class_teachers (class_id, teacher_id)
      SELECT unnest(v_all_classes), v_teacher_id
      ON CONFLICT (class_id, teacher_id) DO NOTHING;
    END IF;

    UPDATE public.profiles
    SET primary_class_id = v_primary
    WHERE id = v_teacher_id;
  END LOOP;
END;
$$;

REVOKE ALL ON FUNCTION public.admin_save_teacher_attributions(jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.admin_save_teacher_attributions(jsonb) TO authenticated;
