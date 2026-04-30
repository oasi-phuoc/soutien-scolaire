-- Ajout de l'anglais comme langue pivot (profiles.preferred_pivot_lang)

alter table public.profiles
  drop constraint if exists profiles_preferred_pivot_lang_check;

alter table public.profiles
  add constraint profiles_preferred_pivot_lang_check
  check (
    preferred_pivot_lang in ('en', 'ar', 'fa', 'ti', 'uk')
  );
