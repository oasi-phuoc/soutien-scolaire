-- Evolution snapshots for unified /200 placement total.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS placement_total_history jsonb NOT NULL DEFAULT '[]'::jsonb;

COMMENT ON COLUMN public.profiles.placement_total_history IS
  'Last placement /200 total snapshots for evolution chart (max ~10 entries).';
