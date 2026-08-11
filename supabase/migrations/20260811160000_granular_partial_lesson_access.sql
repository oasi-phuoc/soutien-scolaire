-- Accès partiel granulaire :
-- FR : grammaire G7.1 / communication E9.1
-- Maths : A3.1 / A8.1 / G3.1

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_partial_french_grammar boolean NOT NULL DEFAULT false;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_partial_french_comm boolean NOT NULL DEFAULT false;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_partial_math_a3 boolean NOT NULL DEFAULT false;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_partial_math_a8 boolean NOT NULL DEFAULT false;

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_partial_math_g3 boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.profiles.can_partial_french_grammar IS
  'Si true, accès progressif grammaire jusqu''à G7.1.';

COMMENT ON COLUMN public.profiles.can_partial_french_comm IS
  'Si true, accès progressif communication jusqu''à E9.1.';

COMMENT ON COLUMN public.profiles.can_partial_math_a3 IS
  'Si true, accès progressif maths algèbre jusqu''à A3.1.';

COMMENT ON COLUMN public.profiles.can_partial_math_a8 IS
  'Si true, accès progressif maths algèbre jusqu''à A8.1.';

COMMENT ON COLUMN public.profiles.can_partial_math_g3 IS
  'Si true, accès progressif maths géométrie jusqu''à G3.1.';

-- Migration depuis les anciens flags binaires.
UPDATE public.profiles
SET
  can_partial_french_grammar = CASE
    WHEN can_partial_french THEN true ELSE can_partial_french_grammar END,
  can_partial_french_comm = CASE
    WHEN can_partial_french THEN true ELSE can_partial_french_comm END,
  can_partial_math_a3 = CASE
    WHEN can_partial_math THEN true ELSE can_partial_math_a3 END
WHERE can_partial_french = true OR can_partial_math = true;

-- Garder les anciens flags synchronisés (OR des nouveaux) pour compat RPC / app.
UPDATE public.profiles
SET
  can_partial_french = (can_partial_french_grammar OR can_partial_french_comm),
  can_partial_math = (can_partial_math_a3 OR can_partial_math_a8 OR can_partial_math_g3);

CREATE INDEX IF NOT EXISTS profiles_can_partial_french_grammar_idx
  ON public.profiles (can_partial_french_grammar)
  WHERE can_partial_french_grammar = true;

CREATE INDEX IF NOT EXISTS profiles_can_partial_french_comm_idx
  ON public.profiles (can_partial_french_comm)
  WHERE can_partial_french_comm = true;

CREATE INDEX IF NOT EXISTS profiles_can_partial_math_a3_idx
  ON public.profiles (can_partial_math_a3)
  WHERE can_partial_math_a3 = true;

CREATE INDEX IF NOT EXISTS profiles_can_partial_math_a8_idx
  ON public.profiles (can_partial_math_a8)
  WHERE can_partial_math_a8 = true;

CREATE INDEX IF NOT EXISTS profiles_can_partial_math_g3_idx
  ON public.profiles (can_partial_math_g3)
  WHERE can_partial_math_g3 = true;

CREATE OR REPLACE FUNCTION public.protect_profiles_partial_access()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.can_partial_french IS DISTINCT FROM OLD.can_partial_french
     OR NEW.can_partial_math IS DISTINCT FROM OLD.can_partial_math
     OR NEW.can_partial_french_grammar IS DISTINCT FROM OLD.can_partial_french_grammar
     OR NEW.can_partial_french_comm IS DISTINCT FROM OLD.can_partial_french_comm
     OR NEW.can_partial_math_a3 IS DISTINCT FROM OLD.can_partial_math_a3
     OR NEW.can_partial_math_a8 IS DISTINCT FROM OLD.can_partial_math_a8
     OR NEW.can_partial_math_g3 IS DISTINCT FROM OLD.can_partial_math_g3 THEN
    IF auth.uid() IS NOT NULL
       AND NOT EXISTS (
         SELECT 1 FROM public.profiles
         WHERE id = auth.uid() AND role = 'admin'
       ) THEN
      RAISE EXCEPTION 'Access denied: cannot modify partial lesson access';
    END IF;
  END IF;
  -- Synchronise les flags legacy
  NEW.can_partial_french := COALESCE(NEW.can_partial_french_grammar, false)
                         OR COALESCE(NEW.can_partial_french_comm, false);
  NEW.can_partial_math := COALESCE(NEW.can_partial_math_a3, false)
                       OR COALESCE(NEW.can_partial_math_a8, false)
                       OR COALESCE(NEW.can_partial_math_g3, false);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profiles_partial_access ON public.profiles;
CREATE TRIGGER trg_protect_profiles_partial_access
  BEFORE UPDATE OF
    can_partial_french,
    can_partial_math,
    can_partial_french_grammar,
    can_partial_french_comm,
    can_partial_math_a3,
    can_partial_math_a8,
    can_partial_math_g3
  ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_partial_access();

-- Le type de retour change : DROP obligatoire avant CREATE.
DROP FUNCTION IF EXISTS public.get_my_lesson_access();

CREATE FUNCTION public.get_my_lesson_access()
RETURNS TABLE (
  can_free_access boolean,
  can_partial_french boolean,
  can_partial_math boolean,
  can_partial_french_grammar boolean,
  can_partial_french_comm boolean,
  can_partial_math_a3 boolean,
  can_partial_math_a8 boolean,
  can_partial_math_g3 boolean
)
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT
    COALESCE(p.role IN ('admin', 'prof') OR p.can_free_access, false) AS can_free_access,
    COALESCE(
      p.role IN ('admin', 'prof') OR p.can_free_access
      OR p.can_partial_french OR p.can_partial_french_grammar OR p.can_partial_french_comm,
      false
    ) AS can_partial_french,
    COALESCE(
      p.role IN ('admin', 'prof') OR p.can_free_access
      OR p.can_partial_math OR p.can_partial_math_a3 OR p.can_partial_math_a8 OR p.can_partial_math_g3,
      false
    ) AS can_partial_math,
    COALESCE(
      p.role IN ('admin', 'prof') OR p.can_free_access OR p.can_partial_french_grammar,
      false
    ) AS can_partial_french_grammar,
    COALESCE(
      p.role IN ('admin', 'prof') OR p.can_free_access OR p.can_partial_french_comm,
      false
    ) AS can_partial_french_comm,
    COALESCE(
      p.role IN ('admin', 'prof') OR p.can_free_access OR p.can_partial_math_a3,
      false
    ) AS can_partial_math_a3,
    COALESCE(
      p.role IN ('admin', 'prof') OR p.can_free_access OR p.can_partial_math_a8,
      false
    ) AS can_partial_math_a8,
    COALESCE(
      p.role IN ('admin', 'prof') OR p.can_free_access OR p.can_partial_math_g3,
      false
    ) AS can_partial_math_g3
  FROM public.profiles p
  WHERE p.id = auth.uid();
$$;

CREATE OR REPLACE FUNCTION public.set_user_free_access(p_user_id uuid, p_enabled boolean)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_role text;
  v_classe text;
BEGIN
  SELECT role INTO v_role FROM public.profiles WHERE id = auth.uid();
  IF v_role IS DISTINCT FROM 'admin' AND v_role IS DISTINCT FROM 'prof' THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  SELECT classe INTO v_classe FROM public.profiles WHERE id = p_user_id AND role = 'eleve';
  IF v_classe IS NULL THEN
    RAISE EXCEPTION 'User not found';
  END IF;

  IF v_role = 'prof' AND NOT public.teacher_can_access_class(v_classe) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  UPDATE public.profiles
  SET
    can_free_access = COALESCE(p_enabled, false),
    can_partial_french_grammar = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_french_grammar END,
    can_partial_french_comm = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_french_comm END,
    can_partial_math_a3 = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_math_a3 END,
    can_partial_math_a8 = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_math_a8 END,
    can_partial_math_g3 = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_math_g3 END,
    can_partial_french = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_french END,
    can_partial_math = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_math END
  WHERE id = p_user_id;

  RETURN COALESCE(p_enabled, false);
END;
$$;

-- Remplace les setters binaires FR/maths : un flag granulaire à la fois.
CREATE OR REPLACE FUNCTION public.set_user_partial_flag(
  p_user_id uuid,
  p_flag text,
  p_enabled boolean
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_role text;
  v_classe text;
  v_enabled boolean := COALESCE(p_enabled, false);
BEGIN
  SELECT role INTO v_role FROM public.profiles WHERE id = auth.uid();
  IF v_role IS DISTINCT FROM 'admin' AND v_role IS DISTINCT FROM 'prof' THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  SELECT classe INTO v_classe FROM public.profiles WHERE id = p_user_id AND role = 'eleve';
  IF v_classe IS NULL THEN
    RAISE EXCEPTION 'User not found';
  END IF;

  IF v_role = 'prof' AND NOT public.teacher_can_access_class(v_classe) THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  IF p_flag = 'french_grammar' THEN
    UPDATE public.profiles SET can_partial_french_grammar = v_enabled WHERE id = p_user_id;
  ELSIF p_flag = 'french_comm' THEN
    UPDATE public.profiles SET can_partial_french_comm = v_enabled WHERE id = p_user_id;
  ELSIF p_flag = 'math_a3' THEN
    UPDATE public.profiles SET can_partial_math_a3 = v_enabled WHERE id = p_user_id;
  ELSIF p_flag = 'math_a8' THEN
    UPDATE public.profiles SET can_partial_math_a8 = v_enabled WHERE id = p_user_id;
  ELSIF p_flag = 'math_g3' THEN
    UPDATE public.profiles SET can_partial_math_g3 = v_enabled WHERE id = p_user_id;
  ELSE
    RAISE EXCEPTION 'Unknown flag: %', p_flag;
  END IF;

  RETURN v_enabled;
END;
$$;

-- Compat : anciens setters mappent vers les nouveaux flags.
CREATE OR REPLACE FUNCTION public.set_user_partial_french(p_user_id uuid, p_enabled boolean)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  PERFORM public.set_user_partial_flag(p_user_id, 'french_grammar', p_enabled);
  PERFORM public.set_user_partial_flag(p_user_id, 'french_comm', p_enabled);
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
  -- Ancien plafond A3 → A3.1 uniquement
  PERFORM public.set_user_partial_flag(p_user_id, 'math_a3', p_enabled);
  IF NOT COALESCE(p_enabled, false) THEN
    PERFORM public.set_user_partial_flag(p_user_id, 'math_a8', false);
    PERFORM public.set_user_partial_flag(p_user_id, 'math_g3', false);
  END IF;
  RETURN COALESCE(p_enabled, false);
END;
$$;

REVOKE ALL ON FUNCTION public.get_my_lesson_access() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_user_partial_flag(uuid, text, boolean) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_user_partial_french(uuid, boolean) FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_user_partial_math(uuid, boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_my_lesson_access() TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_user_partial_flag(uuid, text, boolean) TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_user_partial_french(uuid, boolean) TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_user_partial_math(uuid, boolean) TO authenticated;

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
  can_partial_french_grammar boolean,
  can_partial_french_comm boolean,
  can_partial_math_a3     boolean,
  can_partial_math_a8     boolean,
  can_partial_math_g3     boolean,
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
    p.can_partial_french_grammar,
    p.can_partial_french_comm,
    p.can_partial_math_a3,
    p.can_partial_math_a8,
    p.can_partial_math_g3,
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
