-- =============================================================================
-- TOUTES LES MIGRATIONS SUPABASE — Test de placement unifié
-- Exécuter dans l'ordre dans l'éditeur SQL Supabase (sans CLI).
-- =============================================================================

-- -----------------------------------------------------------------------------
-- 1. Notation professeur PE/PO (si pas déjà appliqué)
-- Fichier source : 20260704072000_expression_teacher_grading.sql
-- -----------------------------------------------------------------------------

ALTER TABLE public.expression_submissions
  ADD COLUMN IF NOT EXISTS teacher_points numeric(5,2),
  ADD COLUMN IF NOT EXISTS teacher_max_points integer NOT NULL DEFAULT 25,
  ADD COLUMN IF NOT EXISTS final_result text;

ALTER TABLE public.expression_submissions
  DROP CONSTRAINT IF EXISTS expression_submissions_teacher_points_range,
  ADD CONSTRAINT expression_submissions_teacher_points_range
    CHECK (teacher_points IS NULL OR (teacher_points >= 0 AND teacher_points <= teacher_max_points));

ALTER TABLE public.expression_submissions
  DROP CONSTRAINT IF EXISTS expression_submissions_teacher_max_points_positive,
  ADD CONSTRAINT expression_submissions_teacher_max_points_positive
    CHECK (teacher_max_points > 0);

-- -----------------------------------------------------------------------------
-- 1b. Grille détaillée + retour des points (PE moyen A2)
-- Fichier source : 20260705130000_expression_grading_return.sql
-- -----------------------------------------------------------------------------

ALTER TABLE public.expression_submissions
  ADD COLUMN IF NOT EXISTS teacher_grading jsonb;

CREATE OR REPLACE FUNCTION public.sync_expression_teacher_points()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = public
AS $$
DECLARE
  rubric_total numeric;
BEGIN
  IF NEW.teacher_grading IS NOT NULL AND (NEW.teacher_grading ? 'totalPoints') THEN
    rubric_total := (NEW.teacher_grading->>'totalPoints')::numeric;
    IF rubric_total IS NOT NULL THEN
      IF rubric_total < 0 OR rubric_total > NEW.teacher_max_points THEN
        RAISE EXCEPTION 'totalPoints hors barème (0–%)', NEW.teacher_max_points;
      END IF;
      NEW.teacher_points := rubric_total;
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS expression_submissions_sync_grading ON public.expression_submissions;
CREATE TRIGGER expression_submissions_sync_grading
  BEFORE INSERT OR UPDATE OF teacher_grading, teacher_points, teacher_max_points
  ON public.expression_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.sync_expression_teacher_points();

-- (Réappliquer get_expression_inbox depuis 20260705130000_expression_grading_return.sql
--  si la boîte de réception doit afficher la note — voir fichier complet.)

-- -----------------------------------------------------------------------------
-- 2. Test de placement unifié /200
-- Fichier source : 20260704140000_placement_unified.sql
-- -----------------------------------------------------------------------------

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS placement_french_history jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS placement_combined_profile jsonb,
  ADD COLUMN IF NOT EXISTS placement_french_draft jsonb,
  ADD COLUMN IF NOT EXISTS placement_updated_at timestamptz;

ALTER TABLE public.expression_submissions
  ADD COLUMN IF NOT EXISTS placement_session_id uuid;

CREATE INDEX IF NOT EXISTS expression_submissions_placement_session_id_idx
  ON public.expression_submissions (placement_session_id)
  WHERE placement_session_id IS NOT NULL;

-- -----------------------------------------------------------------------------
-- Colonnes math existantes (normalement déjà présentes) :
--   profiles.placement_test_history
--   profiles.placement_test_last
--   profiles.placement_test_updated_at
-- -----------------------------------------------------------------------------

-- -----------------------------------------------------------------------------
-- 3. Admin : colonne Placement /200 dans get_users_for_admin
-- Fichier source : 20260704150000_admin_placement_combined.sql
-- -----------------------------------------------------------------------------

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

-- -----------------------------------------------------------------------------
-- 4. Historique d'évolution /200 (snapshots placement_total_history)
-- Fichier source : 20260704160000_placement_total_history.sql
-- -----------------------------------------------------------------------------

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS placement_total_history jsonb NOT NULL DEFAULT '[]'::jsonb;

COMMENT ON COLUMN public.profiles.placement_total_history IS
  'Last placement /200 total snapshots for evolution chart (max ~10 entries).';

-- -----------------------------------------------------------------------------
-- 5. Fix placement_session_id : text au lieu de uuid
-- Fichier source : 20260704170000_placement_session_id_text.sql
-- Les ids de session placement sont des chaînes "fr-{timestamp}-{random}",
-- pas des UUID PostgreSQL. Sans ce correctif, l'envoi PE/PO échoue silencieusement.
-- -----------------------------------------------------------------------------

ALTER TABLE public.expression_submissions
  ALTER COLUMN placement_session_id TYPE text
  USING placement_session_id::text;

COMMENT ON COLUMN public.expression_submissions.placement_session_id IS
  'Links PE/PO submissions to a French placement session (string id, e.g. fr-...).';

-- =============================================================================
