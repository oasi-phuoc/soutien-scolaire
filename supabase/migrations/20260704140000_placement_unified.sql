-- Unified placement test: French sessions + combined profile + PE/PO session links.

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

COMMENT ON COLUMN public.profiles.placement_french_history IS
  'Array of French placement battery sessions (CE+CO+PE+PO).';
COMMENT ON COLUMN public.profiles.placement_combined_profile IS
  'Aggregated /200 placement profile (math latest + french best prorated).';
COMMENT ON COLUMN public.profiles.placement_french_draft IS
  'In-progress French placement battery for resume.';
COMMENT ON COLUMN public.expression_submissions.placement_session_id IS
  'Links PE/PO submissions to a French placement session.';
