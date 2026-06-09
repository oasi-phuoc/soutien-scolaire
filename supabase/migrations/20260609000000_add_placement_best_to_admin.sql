-- Add placement_test_best to get_users_for_admin.
-- Returns the attempt with the highest percent from placement_test_history.
-- DROP required because the return type changes (new column added).

DROP FUNCTION IF EXISTS public.get_users_for_admin();

CREATE FUNCTION public.get_users_for_admin()
RETURNS TABLE (
  id                    uuid,
  email                 text,
  nom                   text,
  prenom                text,
  classe                text,
  adresse               text,
  npa                   text,
  localite              text,
  telephone             text,
  langue                text,
  login_id              text,
  progress_data         jsonb,
  progress_updated_at   timestamptz,
  is_admin              boolean,
  role                  text,
  placement_test_best   jsonb
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
    CASE
      WHEN jsonb_array_length(COALESCE(p.placement_test_history, '[]'::jsonb)) = 0
        THEN NULL::jsonb
      ELSE (
        SELECT elem
        FROM jsonb_array_elements(p.placement_test_history) AS elem
        ORDER BY (elem->>'percent')::float DESC
        LIMIT 1
      )
    END AS placement_test_best
  FROM public.profiles p
  JOIN auth.users au ON au.id = p.id;
END;
$$;
