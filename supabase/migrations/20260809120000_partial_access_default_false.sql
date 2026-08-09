-- Accès partiel maths / français : false par défaut pour tous les comptes.
-- (Annule le backfill qui avait activé le partiel pour les élèves déjà inscrits.)

UPDATE public.profiles
SET
  can_partial_french = false,
  can_partial_math = false
WHERE can_partial_french = true
   OR can_partial_math = true;

INSERT INTO public.app_settings (key, value, updated_at)
VALUES ('partial_access_default_false_v1', 'true'::jsonb, now())
ON CONFLICT (key) DO UPDATE
SET value = EXCLUDED.value, updated_at = EXCLUDED.updated_at;

-- Création de compte : flags explicitement à false (colonnes déjà DEFAULT false).
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (
    id, nom, prenom, classe,
    adresse, npa, localite, telephone, langue, login_id,
    can_partial_french, can_partial_math
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
    new.raw_user_meta_data->>'login_id',
    false,
    false
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
