-- Keep the profile constraint aligned with lib/pivot-langs.ts.
-- Idempotent: safe to execute again from the Supabase SQL Editor.

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS preferred_pivot_lang text NOT NULL DEFAULT 'ar';

DO $$
DECLARE
  constraint_name text;
BEGIN
  FOR constraint_name IN
    SELECT c.conname
    FROM pg_constraint c
    WHERE c.conrelid = 'public.profiles'::regclass
      AND c.contype = 'c'
      AND pg_get_constraintdef(c.oid) ILIKE '%preferred_pivot_lang%'
  LOOP
    EXECUTE format(
      'ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS %I',
      constraint_name
    );
  END LOOP;
END
$$;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_preferred_pivot_lang_check
  CHECK (
    preferred_pivot_lang IN (
      'fr', 'en', 'ar', 'fa', 'pt', 'so', 'ti', 'tr', 'ps', 'uk'
    )
  );

COMMENT ON COLUMN public.profiles.preferred_pivot_lang IS
  'Langue d’aide: fr, en, ar, fa, pt, so, ti, tr, ps ou uk.';
