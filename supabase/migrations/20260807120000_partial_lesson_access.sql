-- Accès partiel aux leçons (français / maths), sous-catégorie de l'accès complet.
-- Accès complet = can_free_access (déjà existant).
-- Accès partiel français = jusqu'à G7.1 (grammaire) et E9.1 (communication).
-- Accès partiel maths = jusqu'à A3.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_partial_french boolean NOT NULL DEFAULT false;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_partial_math boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.profiles.can_partial_french IS
  'Si true, l''élève a un accès progressif au français jusqu''à G7.1 / E9.1.';

COMMENT ON COLUMN public.profiles.can_partial_math IS
  'Si true, l''élève a un accès progressif aux maths jusqu''à A3.';

-- Élèves déjà inscrits : conserver un accès (partiel) tant que l'admin n'a pas choisi autrement.
UPDATE public.profiles
SET
  can_partial_french = true,
  can_partial_math = true
WHERE role = 'eleve'
  AND can_free_access = false
  AND can_partial_french = false
  AND can_partial_math = false;

CREATE INDEX IF NOT EXISTS profiles_can_partial_french_idx
  ON public.profiles (can_partial_french)
  WHERE can_partial_french = true;

CREATE INDEX IF NOT EXISTS profiles_can_partial_math_idx
  ON public.profiles (can_partial_math)
  WHERE can_partial_math = true;

-- Empêche un non-admin de modifier ces flags via UPDATE direct.
CREATE OR REPLACE FUNCTION public.protect_profiles_partial_access()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.can_partial_french IS DISTINCT FROM OLD.can_partial_french
     OR NEW.can_partial_math IS DISTINCT FROM OLD.can_partial_math THEN
    IF auth.uid() IS NOT NULL
       AND NOT EXISTS (
         SELECT 1 FROM public.profiles
         WHERE id = auth.uid() AND role = 'admin'
       ) THEN
      RAISE EXCEPTION 'Access denied: cannot modify partial lesson access';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profiles_partial_access ON public.profiles;
CREATE TRIGGER trg_protect_profiles_partial_access
  BEFORE UPDATE OF can_partial_french, can_partial_math ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_partial_access();

CREATE OR REPLACE FUNCTION public.get_my_lesson_access()
RETURNS TABLE (
  can_free_access boolean,
  can_partial_french boolean,
  can_partial_math boolean
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COALESCE(p.role IN ('admin', 'prof') OR p.can_free_access, false) AS can_free_access,
    COALESCE(p.role IN ('admin', 'prof') OR p.can_free_access OR p.can_partial_french, false) AS can_partial_french,
    COALESCE(p.role IN ('admin', 'prof') OR p.can_free_access OR p.can_partial_math, false) AS can_partial_math
  FROM public.profiles p
  WHERE p.id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.set_user_partial_french(p_user_id uuid, p_enabled boolean)
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
  SET can_partial_french = COALESCE(p_enabled, false)
  WHERE id = p_user_id;

  RETURN COALESCE(p_enabled, false);
END;
$$;

CREATE OR REPLACE FUNCTION public.set_user_partial_math(p_user_id uuid, p_enabled boolean)
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
  SET can_partial_math = COALESCE(p_enabled, false)
  WHERE id = p_user_id;

  RETURN COALESCE(p_enabled, false);
END;
$$;

REVOKE ALL ON FUNCTION public.get_my_lesson_access() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_user_partial_french(uuid, boolean) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_user_partial_math(uuid, boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_my_lesson_access() TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_user_partial_french(uuid, boolean) TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_user_partial_math(uuid, boolean) TO authenticated;

-- Exposer les nouveaux flags dans la liste admin.
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
  can_partial_french      boolean,
  can_partial_math        boolean,
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
    p.can_partial_french,
    p.can_partial_math,
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
