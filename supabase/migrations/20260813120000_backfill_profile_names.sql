-- Rattrapage prénom / nom / login_id :
-- 1) trigger handle_new_user copie les metadata Auth (et complète une ligne vide)
-- 2) backfill des profils déjà créés sans nom
-- 3) get_users_for_admin lit aussi raw_user_meta_data si profiles est vide

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
    can_partial_french, can_partial_math,
    can_partial_french_grammar, can_partial_french_comm,
    can_partial_math_a3, can_partial_math_a8, can_partial_math_g3
  ) VALUES (
    new.id,
    NULLIF(btrim(new.raw_user_meta_data->>'nom'), ''),
    NULLIF(btrim(new.raw_user_meta_data->>'prenom'), ''),
    NULLIF(btrim(new.raw_user_meta_data->>'classe'), ''),
    NULLIF(btrim(new.raw_user_meta_data->>'adresse'), ''),
    NULLIF(btrim(new.raw_user_meta_data->>'npa'), ''),
    NULLIF(btrim(new.raw_user_meta_data->>'localite'), ''),
    NULLIF(btrim(new.raw_user_meta_data->>'telephone'), ''),
    COALESCE(NULLIF(btrim(new.raw_user_meta_data->>'langue'), ''), 'en'),
    COALESCE(
      NULLIF(btrim(new.raw_user_meta_data->>'login_id'), ''),
      CASE
        WHEN new.email ILIKE '%@soutien.local'
          THEN split_part(new.email, '@', 1)
        ELSE NULL
      END
    ),
    false,
    false,
    false,
    false,
    false,
    false,
    false
  )
  ON CONFLICT (id) DO UPDATE SET
    nom       = COALESCE(EXCLUDED.nom,       public.profiles.nom),
    prenom    = COALESCE(EXCLUDED.prenom,    public.profiles.prenom),
    classe    = COALESCE(EXCLUDED.classe,    public.profiles.classe),
    adresse   = COALESCE(EXCLUDED.adresse,   public.profiles.adresse),
    npa       = COALESCE(EXCLUDED.npa,       public.profiles.npa),
    localite  = COALESCE(EXCLUDED.localite,  public.profiles.localite),
    telephone = COALESCE(EXCLUDED.telephone, public.profiles.telephone),
    langue    = COALESCE(EXCLUDED.langue,    public.profiles.langue),
    login_id  = COALESCE(EXCLUDED.login_id,  public.profiles.login_id);
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

UPDATE public.profiles p
SET
  nom = COALESCE(NULLIF(btrim(p.nom), ''), NULLIF(btrim(au.raw_user_meta_data->>'nom'), ''), p.nom),
  prenom = COALESCE(NULLIF(btrim(p.prenom), ''), NULLIF(btrim(au.raw_user_meta_data->>'prenom'), ''), p.prenom),
  classe = COALESCE(NULLIF(btrim(p.classe), ''), NULLIF(btrim(au.raw_user_meta_data->>'classe'), ''), p.classe),
  adresse = COALESCE(NULLIF(btrim(p.adresse), ''), NULLIF(btrim(au.raw_user_meta_data->>'adresse'), ''), p.adresse),
  npa = COALESCE(NULLIF(btrim(p.npa), ''), NULLIF(btrim(au.raw_user_meta_data->>'npa'), ''), p.npa),
  localite = COALESCE(NULLIF(btrim(p.localite), ''), NULLIF(btrim(au.raw_user_meta_data->>'localite'), ''), p.localite),
  telephone = COALESCE(NULLIF(btrim(p.telephone), ''), NULLIF(btrim(au.raw_user_meta_data->>'telephone'), ''), p.telephone),
  langue = COALESCE(NULLIF(btrim(p.langue), ''), NULLIF(btrim(au.raw_user_meta_data->>'langue'), ''), p.langue, 'en'),
  login_id = COALESCE(
    NULLIF(btrim(p.login_id), ''),
    NULLIF(btrim(au.raw_user_meta_data->>'login_id'), ''),
    CASE
      WHEN au.email ILIKE '%@soutien.local' THEN split_part(au.email, '@', 1)
      ELSE NULL
    END,
    p.login_id
  )
FROM auth.users au
WHERE p.id = au.id
  AND (
    p.nom IS NULL OR btrim(p.nom) = ''
    OR p.prenom IS NULL OR btrim(p.prenom) = ''
    OR p.login_id IS NULL OR btrim(p.login_id) = ''
    OR p.classe IS NULL OR btrim(p.classe) = ''
  );

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
    COALESCE(
      NULLIF(btrim(p.nom), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'nom'), '')
    ) AS nom,
    COALESCE(
      NULLIF(btrim(p.prenom), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'prenom'), '')
    ) AS prenom,
    COALESCE(
      NULLIF(btrim(p.classe), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'classe'), '')
    ) AS classe,
    COALESCE(
      NULLIF(btrim(p.adresse), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'adresse'), '')
    ) AS adresse,
    COALESCE(
      NULLIF(btrim(p.npa), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'npa'), '')
    ) AS npa,
    COALESCE(
      NULLIF(btrim(p.localite), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'localite'), '')
    ) AS localite,
    COALESCE(
      NULLIF(btrim(p.telephone), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'telephone'), '')
    ) AS telephone,
    COALESCE(
      NULLIF(btrim(p.langue), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'langue'), '')
    ) AS langue,
    COALESCE(
      NULLIF(btrim(p.login_id), ''),
      NULLIF(btrim(au.raw_user_meta_data->>'login_id'), ''),
      CASE
        WHEN au.email ILIKE '%@soutien.local' THEN split_part(au.email, '@', 1)
        ELSE NULL
      END
    ) AS login_id,
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
