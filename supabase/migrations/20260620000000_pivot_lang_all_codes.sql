-- Mise à jour de la contrainte preferred_pivot_lang pour inclure toutes les langues pivot
-- définies dans lib/pivot-langs.ts : fr, en, ar, fa, pt, so, ti, tr, ps, uk

alter table profiles
  drop constraint if exists profiles_preferred_pivot_lang_check;

alter table profiles
  add constraint profiles_preferred_pivot_lang_check
    check (
      preferred_pivot_lang in ('fr', 'en', 'ar', 'fa', 'pt', 'so', 'ti', 'tr', 'ps', 'uk')
    );
