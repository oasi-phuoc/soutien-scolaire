-- Add login_id column to profiles
-- Stores the human-readable identifier used to log in (e.g. "jean.dupont")
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS login_id text;

-- Update trigger to also copy login_id from signup metadata
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (
    id, nom, prenom, classe,
    adresse, npa, localite, telephone, langue, login_id
  ) VALUES (
    new.id,
    new.raw_user_meta_data->>'nom',
    new.raw_user_meta_data->>'prenom',
    new.raw_user_meta_data->>'classe',
    new.raw_user_meta_data->>'adresse',
    new.raw_user_meta_data->>'npa',
    new.raw_user_meta_data->>'localite',
    new.raw_user_meta_data->>'telephone',
    COALESCE(new.raw_user_meta_data->>'langue', 'en'),
    new.raw_user_meta_data->>'login_id'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$;

-- Update get_users_for_admin to expose login_id
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
  login_id            text,
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
    p.login_id,
    p.progress_data,
    GREATEST(au.last_sign_in_at, p.progress_updated_at) AS progress_updated_at,
    p.is_admin,
    p.role::text
  FROM public.profiles p
  JOIN auth.users au ON au.id = p.id;
END;
$$;
