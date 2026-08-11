-- Allow teachers assigned to a student's class (and admins) to toggle lesson access.

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
    can_partial_french = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_french END,
    can_partial_math = CASE WHEN COALESCE(p_enabled, false) THEN false ELSE can_partial_math END
  WHERE id = p_user_id;

  RETURN COALESCE(p_enabled, false);
END;
$$;

CREATE OR REPLACE FUNCTION public.set_user_partial_french(p_user_id uuid, p_enabled boolean)
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
  SET can_partial_math = COALESCE(p_enabled, false)
  WHERE id = p_user_id;

  RETURN COALESCE(p_enabled, false);
END;
$$;
