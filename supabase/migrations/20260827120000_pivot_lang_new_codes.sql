-- Keep the profile constraint aligned with lib/pivot-langs.ts
-- (albanais, amharique, dari, espagnol, italien, russe).

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
      'sq', 'en', 'ar', 'am', 'prs', 'es', 'fr', 'it',
      'fa', 'ps', 'pt', 'ru', 'so', 'ti', 'tr', 'uk'
    )
  );

COMMENT ON COLUMN public.profiles.preferred_pivot_lang IS
  'Langue d’aide: sq, en, ar, am, prs, es, fr, it, fa, ps, pt, ru, so, ti, tr ou uk.';
