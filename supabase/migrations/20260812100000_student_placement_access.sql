-- Accès individuel au test de placement (override du module global).
-- Par défaut false. Réservé aux admins (comme can_print).

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_placement boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.profiles.can_placement IS
  'Si true, l''élève peut ouvrir /placement même si placement_module_enabled est false. Les admins et profs y ont toujours accès.';

CREATE INDEX IF NOT EXISTS profiles_can_placement_idx
  ON public.profiles (can_placement)
  WHERE can_placement = true;

CREATE OR REPLACE FUNCTION public.protect_profiles_can_placement()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.can_placement IS DISTINCT FROM OLD.can_placement THEN
    IF auth.uid() IS NOT NULL
       AND NOT EXISTS (
         SELECT 1 FROM public.profiles
         WHERE id = auth.uid() AND role = 'admin'
       ) THEN
      RAISE EXCEPTION 'Access denied: cannot modify can_placement';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profiles_can_placement ON public.profiles;
CREATE TRIGGER trg_protect_profiles_can_placement
  BEFORE UPDATE OF can_placement ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_can_placement();

CREATE OR REPLACE FUNCTION public.can_access_placement()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (
      SELECT
        p.role IN ('admin', 'prof')
        OR p.can_placement = true
        OR COALESCE(
          (SELECT (s.value #>> '{}')::boolean
           FROM public.app_settings s
           WHERE s.key = 'placement_module_enabled'),
          true
        )
      FROM public.profiles p
      WHERE p.id = auth.uid()
    ),
    false
  );
$$;

CREATE OR REPLACE FUNCTION public.set_user_placement_access(p_user_id uuid, p_enabled boolean)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = p_user_id) THEN
    RAISE EXCEPTION 'User not found';
  END IF;

  UPDATE public.profiles
  SET can_placement = COALESCE(p_enabled, false)
  WHERE id = p_user_id;

  RETURN COALESCE(p_enabled, false);
END;
$$;

REVOKE ALL ON FUNCTION public.can_access_placement() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_user_placement_access(uuid, boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.can_access_placement() TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_user_placement_access(uuid, boolean) TO authenticated;
