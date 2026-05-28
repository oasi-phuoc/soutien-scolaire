-- Recreate get_users_for_admin using auth.users.last_sign_in_at as primary
-- source for "last seen", falling back to progress_updated_at.
-- Supabase updates last_sign_in_at automatically on every successful login.

CREATE OR REPLACE FUNCTION public.get_users_for_admin()
RETURNS TABLE (
  id                  uuid,
  email               text,
  nom                 text,
  prenom              text,
  classe              text,
  adresse             text,
  npa                 text,
  localite            text,
  telephone           text,
  langue              text,
  progress_data       jsonb,
  progress_updated_at timestamptz,
  is_admin            boolean,
  role                text
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
    p.progress_data,
    -- Prefer auth.last_sign_in_at (updated automatically by Supabase on every login)
    -- over progress_updated_at (only updated when progress syncs)
    GREATEST(au.last_sign_in_at, p.progress_updated_at) AS progress_updated_at,
    p.is_admin,
    p.role::text
  FROM public.profiles p
  JOIN auth.users au ON au.id = p.id;
END;
$$;
