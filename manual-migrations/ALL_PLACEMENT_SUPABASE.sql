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
-- =============================================================================
