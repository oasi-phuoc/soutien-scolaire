-- Global toggle: student access to TCF / TCM placement module.

CREATE TABLE IF NOT EXISTS public.app_settings (
  key         text        PRIMARY KEY,
  value       jsonb       NOT NULL,
  updated_at  timestamptz NOT NULL DEFAULT now(),
  updated_by  uuid        REFERENCES auth.users(id) ON DELETE SET NULL
);

INSERT INTO public.app_settings (key, value)
VALUES ('placement_module_enabled', 'true'::jsonb)
ON CONFLICT (key) DO NOTHING;

ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "app_settings_select" ON public.app_settings;
CREATE POLICY "app_settings_select" ON public.app_settings
  FOR SELECT TO authenticated
  USING (true);

DROP POLICY IF EXISTS "app_settings_admin_write" ON public.app_settings;
CREATE POLICY "app_settings_admin_write" ON public.app_settings
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE OR REPLACE FUNCTION public.get_placement_module_enabled()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT (s.value #>> '{}')::boolean FROM public.app_settings s WHERE s.key = 'placement_module_enabled'),
    true
  );
$$;

CREATE OR REPLACE FUNCTION public.set_placement_module_enabled(p_enabled boolean)
RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin') THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  INSERT INTO public.app_settings (key, value, updated_at, updated_by)
  VALUES ('placement_module_enabled', to_jsonb(p_enabled), now(), auth.uid())
  ON CONFLICT (key) DO UPDATE SET
    value = to_jsonb(p_enabled),
    updated_at = now(),
    updated_by = auth.uid();

  RETURN p_enabled;
END;
$$;

REVOKE ALL ON FUNCTION public.get_placement_module_enabled() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_placement_module_enabled(boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_placement_module_enabled() TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_placement_module_enabled(boolean) TO authenticated;
