-- =============================================================================
-- Bundle migrations récentes — à coller dans Supabase SQL Editor
-- Idempotent : safe à rejouer.
-- Couvre :
--   1) Accès TCF / TCM (placement_module_enabled)
--   2) Accès impression (can_print + get_users_for_admin)
--   3) Overrides contenu (grammar + conjugation + catalog/ce/co/…)
--   4) Sync contenu Git (réglages admin)
--   5) Remap données : leçons conjugaison encore en domain "grammar"
-- =============================================================================

-- ─────────────────────────────────────────────────────────────────────────────
-- 1) TCF / TCM — app_settings + RPC
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.app_settings (
  key         text        PRIMARY KEY,
  value       jsonb       NOT NULL,
  updated_at  timestamptz NOT NULL DEFAULT now(),
  updated_by  uuid        REFERENCES auth.users(id) ON DELETE SET NULL
);

INSERT INTO public.app_settings (key, value)
VALUES ('placement_module_enabled', 'true'::jsonb)
ON CONFLICT (key) DO NOTHING;

ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "app_settings_select" ON public.app_settings;
CREATE POLICY "app_settings_select" ON public.app_settings
  FOR SELECT TO authenticated
  USING (true);

DROP POLICY IF EXISTS "app_settings_admin_write" ON public.app_settings;
CREATE POLICY "app_settings_admin_write" ON public.app_settings
  FOR ALL TO authenticated
  USING (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'))
  WITH CHECK (EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin'));

CREATE OR REPLACE FUNCTION public.get_placement_module_enabled()
RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT (s.value #>> '{}')::boolean FROM public.app_settings s WHERE s.key = 'placement_module_enabled'),
    true
  );
$$;

CREATE OR REPLACE FUNCTION public.set_placement_module_enabled(p_enabled boolean)
RETURNS boolean
LANGUAGE plpgsql SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND role = 'admin') THEN
    RAISE EXCEPTION 'Access denied';
  END IF;

  INSERT INTO public.app_settings (key, value, updated_at, updated_by)
  VALUES ('placement_module_enabled', to_jsonb(p_enabled), now(), auth.uid())
  ON CONFLICT (key) DO UPDATE SET
    value = to_jsonb(p_enabled),
    updated_at = now(),
    updated_by = auth.uid();

  RETURN p_enabled;
END;
$$;

REVOKE ALL ON FUNCTION public.get_placement_module_enabled() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_placement_module_enabled(boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.get_placement_module_enabled() TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_placement_module_enabled(boolean) TO authenticated;

-- ─────────────────────────────────────────────────────────────────────────────
-- 2) Accès impression (can_print)
-- ─────────────────────────────────────────────────────────────────────────────

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS can_print boolean NOT NULL DEFAULT false;

COMMENT ON COLUMN public.profiles.can_print IS
  'Si true, l''utilisateur (élève ou prof) peut ouvrir le hub Impression. Les admins y ont toujours accès.';

CREATE INDEX IF NOT EXISTS profiles_can_print_idx
  ON public.profiles (can_print)
  WHERE can_print = true;

CREATE OR REPLACE FUNCTION public.protect_profiles_can_print()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.can_print IS DISTINCT FROM OLD.can_print THEN
    IF auth.uid() IS NOT NULL
       AND NOT EXISTS (
         SELECT 1 FROM public.profiles
         WHERE id = auth.uid() AND role = 'admin'
       ) THEN
      RAISE EXCEPTION 'Access denied: cannot modify can_print';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trg_protect_profiles_can_print ON public.profiles;
CREATE TRIGGER trg_protect_profiles_can_print
  BEFORE UPDATE OF can_print ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.protect_profiles_can_print();

CREATE OR REPLACE FUNCTION public.can_access_print()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (
      SELECT p.role = 'admin' OR p.can_print
      FROM public.profiles p
      WHERE p.id = auth.uid()
    ),
    false
  );
$$;

CREATE OR REPLACE FUNCTION public.set_user_print_access(p_user_id uuid, p_enabled boolean)
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
  SET can_print = COALESCE(p_enabled, false)
  WHERE id = p_user_id;

  RETURN COALESCE(p_enabled, false);
END;
$$;

REVOKE ALL ON FUNCTION public.can_access_print() FROM PUBLIC;
REVOKE ALL ON FUNCTION public.set_user_print_access(uuid, boolean) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.can_access_print() TO authenticated;
GRANT EXECUTE ON FUNCTION public.set_user_print_access(uuid, boolean) TO authenticated;

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

-- ─────────────────────────────────────────────────────────────────────────────
-- 3) Overrides contenu (dont domain conjugation)
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.curriculum_content_overrides (
  key text primary key,
  domain text not null,
  label text not null default '',
  payload jsonb not null default '{}'::jsonb,
  git_path text,
  git_sha text,
  updated_by uuid references public.profiles (id) on delete set null,
  updated_at timestamptz not null default now()
);

CREATE INDEX IF NOT EXISTS curriculum_content_overrides_domain_idx
  ON public.curriculum_content_overrides (domain);

ALTER TABLE public.curriculum_content_overrides ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS curriculum_overrides_select_authenticated
  ON public.curriculum_content_overrides;
CREATE POLICY curriculum_overrides_select_authenticated
  ON public.curriculum_content_overrides
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS curriculum_overrides_write_admin
  ON public.curriculum_content_overrides;
CREATE POLICY curriculum_overrides_write_admin
  ON public.curriculum_content_overrides
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND (p.role::text = 'admin' OR p.is_admin = true)
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND (p.role::text = 'admin' OR p.is_admin = true)
    )
  );

DROP POLICY IF EXISTS curriculum_overrides_select_anon
  ON public.curriculum_content_overrides;
CREATE POLICY curriculum_overrides_select_anon
  ON public.curriculum_content_overrides
  FOR SELECT
  TO anon
  USING (true);

-- Domaines finaux (grammar + conjugation + catalog/ce/co/comm/placement/…)
ALTER TABLE public.curriculum_content_overrides
  DROP CONSTRAINT IF EXISTS curriculum_content_overrides_domain_check;

ALTER TABLE public.curriculum_content_overrides
  ADD CONSTRAINT curriculum_content_overrides_domain_check
  CHECK (domain IN (
    'lecture', 'vocab', 'grammar', 'conjugation', 'math', 'apprendre',
    'catalog', 'ce', 'co', 'asset', 'comm', 'placement'
  ));

-- Bucket images curriculum
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'curriculum-images',
  'curriculum-images',
  true,
  5242880,
  ARRAY['image/webp', 'image/png', 'image/jpeg', 'image/gif', 'image/svg+xml']
)
ON CONFLICT (id) DO UPDATE SET
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

DROP POLICY IF EXISTS curriculum_images_public_read ON storage.objects;
CREATE POLICY curriculum_images_public_read
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'curriculum-images');

DROP POLICY IF EXISTS curriculum_images_admin_write ON storage.objects;
CREATE POLICY curriculum_images_admin_write
  ON storage.objects FOR ALL
  TO authenticated
  USING (
    bucket_id = 'curriculum-images'
    AND EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND (p.role::text = 'admin' OR p.is_admin = true)
    )
  )
  WITH CHECK (
    bucket_id = 'curriculum-images'
    AND EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND (p.role::text = 'admin' OR p.is_admin = true)
    )
  );

-- ─────────────────────────────────────────────────────────────────────────────
-- 4) Sync contenu Git (réglages admin)
-- ─────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.curriculum_content_sync_settings (
  id text PRIMARY KEY DEFAULT 'default' CHECK (id = 'default'),
  github_token text,
  github_repo text DEFAULT 'oasi-phuoc/soutien-scolaire',
  github_branch text DEFAULT 'main',
  updated_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.curriculum_content_sync_settings ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS curriculum_sync_settings_admin_all ON public.curriculum_content_sync_settings;
CREATE POLICY curriculum_sync_settings_admin_all
  ON public.curriculum_content_sync_settings
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND (p.role::text = 'admin' OR p.is_admin = true)
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles p
      WHERE p.id = auth.uid()
        AND (p.role::text = 'admin' OR p.is_admin = true)
    )
  );

INSERT INTO public.curriculum_content_sync_settings (id)
VALUES ('default')
ON CONFLICT (id) DO NOTHING;

-- ─────────────────────────────────────────────────────────────────────────────
-- 5) Remap données conjugaison (si encore stockées en domain "grammar")
--    Slugs des leçons désormais sous onglet Conjugaison.
-- ─────────────────────────────────────────────────────────────────────────────

UPDATE public.curriculum_content_overrides o
SET
  key = 'conjugation:lesson:' || substr(o.key, length('grammar:lesson:') + 1),
  domain = 'conjugation',
  label = CASE
    WHEN o.label ILIKE 'Grammaire — %'
      THEN 'Conjugaison — ' || substr(o.label, length('Grammaire — ') + 1)
    ELSE o.label
  END,
  updated_at = now()
WHERE o.key LIKE 'grammar:lesson:%'
  AND substr(o.key, length('grammar:lesson:') + 1) IN (
    'a1-conj-l00',
    'a1-conj-l01',
    'a1-conj-l07',
    'a1-conj-l08',
    'a1-conj-l09',
    'a1-conj-l15',
    'a2-conj-irreguliers',
    'a2-conj-l02',
    'a1-conj-l28',
    'a1-conj-l29',
    'a1-conj-l30',
    'negation-passe-compose',
    'a2-conj-l07',
    'a1-conj-l20',
    'a2-conj-l08',
    'a2-conj-l04',
    'a2-conj-l05'
  )
  AND NOT EXISTS (
    SELECT 1
    FROM public.curriculum_content_overrides x
    WHERE x.key = 'conjugation:lesson:' || substr(o.key, length('grammar:lesson:') + 1)
  );

-- Catalogue français override : forcer tab = conjugaison pour ces slugs
UPDATE public.curriculum_content_overrides
SET
  payload = jsonb_set(
    payload,
    '{themes}',
    (
      SELECT COALESCE(jsonb_agg(
        CASE
          WHEN t->>'slug' IN (
            'a1-conj-l00','a1-conj-l01','a1-conj-l07','a1-conj-l08','a1-conj-l09',
            'a1-conj-l15','a2-conj-irreguliers','a2-conj-l02','a1-conj-l28',
            'a1-conj-l29','a1-conj-l30','negation-passe-compose','a2-conj-l07',
            'a1-conj-l20','a2-conj-l08','a2-conj-l04','a2-conj-l05'
          )
          THEN jsonb_set(t, '{tab}', '"conjugaison"')
          ELSE t
        END
      ), '[]'::jsonb)
      FROM jsonb_array_elements(COALESCE(payload->'themes', '[]'::jsonb)) AS t
    )
  ),
  updated_at = now()
WHERE key = 'catalog:french:themes'
  AND payload ? 'themes';
