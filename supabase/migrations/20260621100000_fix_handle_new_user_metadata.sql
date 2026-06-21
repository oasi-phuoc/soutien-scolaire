-- Fix trigger to update profile metadata if row already exists (e.g. created by old trigger)
-- and backfill existing profiles that have null nom/prenom from auth.users metadata.

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
  ON CONFLICT (id) DO UPDATE SET
    nom      = COALESCE(EXCLUDED.nom,      public.profiles.nom),
    prenom   = COALESCE(EXCLUDED.prenom,   public.profiles.prenom),
    classe   = COALESCE(EXCLUDED.classe,   public.profiles.classe),
    adresse  = COALESCE(EXCLUDED.adresse,  public.profiles.adresse),
    npa      = COALESCE(EXCLUDED.npa,      public.profiles.npa),
    localite = COALESCE(EXCLUDED.localite, public.profiles.localite),
    telephone= COALESCE(EXCLUDED.telephone,public.profiles.telephone),
    langue   = COALESCE(EXCLUDED.langue,   public.profiles.langue),
    login_id = COALESCE(EXCLUDED.login_id, public.profiles.login_id);
  RETURN new;
END;
$$;

-- Backfill existing profiles that are missing metadata
UPDATE public.profiles p
SET
  nom       = COALESCE(p.nom,       au.raw_user_meta_data->>'nom'),
  prenom    = COALESCE(p.prenom,    au.raw_user_meta_data->>'prenom'),
  classe    = COALESCE(p.classe,    au.raw_user_meta_data->>'classe'),
  adresse   = COALESCE(p.adresse,   au.raw_user_meta_data->>'adresse'),
  npa       = COALESCE(p.npa,       au.raw_user_meta_data->>'npa'),
  localite  = COALESCE(p.localite,  au.raw_user_meta_data->>'localite'),
  telephone = COALESCE(p.telephone, au.raw_user_meta_data->>'telephone'),
  langue    = COALESCE(p.langue,    au.raw_user_meta_data->>'langue', 'en'),
  login_id  = COALESCE(p.login_id,  au.raw_user_meta_data->>'login_id')
FROM auth.users au
WHERE p.id = au.id
  AND (p.nom IS NULL OR p.prenom IS NULL);
