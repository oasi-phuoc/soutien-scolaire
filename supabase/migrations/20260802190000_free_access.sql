-- Accès libre aux leçons de grammaire (sans verrouillage séquentiel).
-- Les admins / profs ont déjà un bypass côté app.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_free_access boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.profiles.can_free_access IS
  'Si true, l''élève peut ouvrir n''importe quelle leçon de grammaire sans compléter l''évaluation précédente.';

CREATE INDEX IF NOT EXISTS profiles_can_free_access_idx
  ON public.profiles (can_free_access)
  WHERE can_free_access = true;

CREATE OR REPLACE FUNCTION public.protect_profiles_can_free_access()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.can_free_access IS DISTINCT FROM OLD.can_free_access THEN
    IF auth.uid() IS NOT NULL
       AND NOT EXISTS (
         SELECT 1 FROM public.profiles
         WHERE id = auth.uid() AND role = 'admin'
       ) THEN
      RAISE EXCEPTION 'Access denied: cannot modify can_free_access';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profiles_can_free_access ON public.profiles;
CREATE TRIGGER trg_protect_profiles_can_free_access
  BEFORE UPDATE OF can_free_access ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_can_free_access();

CREATE OR REPLACE FUNCTION public.can_access_free_lessons()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (
      SELECT p.role IN ('admin', 'prof') OR p.can_free_access
      FROM public.profiles p
      WHERE p.id = auth.uid()
    ),
    false
  );
$$;

CREATE OR REPLACE FUNCTION public.set_user_free_access(p_user_id uuid, p_enabled boolean)
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
  SET can_free_access = COALESCE(p_enabled, false)
  WHERE id = p_user_id;

  RETURN COALESCE(p_enabled, false);
END;
$$;

REVOKE ALL ON FUNCTION public.can_access_free_lessons() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_user_free_access(uuid, boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.can_access_free_lessons() TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_user_free_access(uuid, boolean) TO authenticated;

-- Exposer can_free_access dans la liste admin.
DROP FUNCTION IF EXISTS public.get_users_for_admin();

CREATE FUNCTION public.get_users_for_admin()
RETURNS TABLE (
  id                      uuid,
  email                   text,
  nom                     text,
  prenom                  text,
  classe                  text,
  adresse                 text,
  npa                     text,
  localite                text,
  telephone               text,
  langue                  text,
  login_id                text,
  progress_data           jsonb,
  progress_updated_at     timestamptz,
  is_admin                boolean,
  role                    text,
  can_print               boolean,
  can_free_access         boolean,
  placement_test_best     jsonb,
  placement_combined      jsonb
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE profiles.id = auth.uid()
      AND profiles.role IN ('admin', 'prof')
  ) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  RETURN QUERY
  SELECT
    p.id,
    au.email::text,
    p.nom,
    p.prenom,
    p.classe,
    p.adresse,
    p.npa,
    p.localite,
    p.telephone,
    p.langue,
    p.login_id,
    p.progress_data,
    GREATEST(au.last_sign_in_at, p.progress_updated_at) AS progress_updated_at,
    p.is_admin,
    p.role::text,
    p.can_print,
    p.can_free_access,
    CASE
      WHEN jsonb_array_length(COALESCE(p.placement_test_history, '[]'::jsonb)) = 0
        THEN NULL::jsonb
      ELSE (
        SELECT elem
        FROM jsonb_array_elements(p.placement_test_history) AS elem
        ORDER BY (elem->>'percent')::float DESC
        LIMIT 1
      )
    END AS placement_test_best,
    p.placement_combined_profile AS placement_combined
  FROM public.profiles p
  JOIN auth.users au ON au.id = p.id;
END;
$$;

REVOKE ALL ON FUNCTION public.get_users_for_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_users_for_admin() TO authenticated;
