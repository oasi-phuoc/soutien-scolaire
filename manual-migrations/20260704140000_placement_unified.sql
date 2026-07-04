-- =============================================================================
-- Migration manuelle — Test de placement unifié (/200)
-- À exécuter dans l'éditeur SQL Supabase si vous n'utilisez pas la CLI.
-- =============================================================================

-- 1. Colonnes profil pour sessions françaises et agrégat /200
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS placement_french_history jsonb NOT NULL DEFAULT '[]'::jsonb,
  ADD COLUMN IF NOT EXISTS placement_combined_profile jsonb,
  ADD COLUMN IF NOT EXISTS placement_french_draft jsonb,
  ADD COLUMN IF NOT EXISTS placement_updated_at timestamptz;

-- 2. Lier les envois PE/PO placement à une session
ALTER TABLE public.expression_submissions
  ADD COLUMN IF NOT EXISTS placement_session_id uuid;

CREATE INDEX IF NOT EXISTS expression_submissions_placement_session_id_idx
  ON public.expression_submissions (placement_session_id)
  WHERE placement_session_id IS NOT NULL;

-- =============================================================================
-- Notes :
-- - placement_test_history / placement_test_last : colonnes math existantes (conservées)
-- - placement_french_history : sessions TCF [{ id, level, ce, co, pe, po, ... }]
-- - placement_combined_profile : { mathCounted, frenchCounted, total, zone, ... }
-- - placement_french_draft : reprise batterie en cours (offline)
-- =============================================================================
