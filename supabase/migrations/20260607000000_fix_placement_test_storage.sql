-- Ensure placement test statistics can be saved and read from profiles.
-- Safe to run more than once in Supabase SQL Editor.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade
);

alter table public.profiles
  add column if not exists updated_at timestamptz not null default now(),
  add column if not exists progress_updated_at timestamptz,
  add column if not exists placement_test_last jsonb,
  add column if not exists placement_test_history jsonb,
  add column if not exists placement_test_updated_at timestamptz;

update public.profiles
set placement_test_history = '[]'::jsonb
where placement_test_history is null;

alter table public.profiles
  alter column placement_test_history set default '[]'::jsonb,
  alter column placement_test_history set not null;

alter table public.profiles enable row level security;

insert into public.profiles (id)
select u.id
from auth.users u
where not exists (
  select 1 from public.profiles p where p.id = u.id
);

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'profiles' and policyname = 'Lecture du profil (soi)'
  ) then
    create policy "Lecture du profil (soi)"
      on public.profiles for select
      using (auth.uid() = id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'profiles'
      and policyname in ('Mise a jour du profil (soi)', 'Mise à jour du profil (soi)')
  ) then
    create policy "Mise a jour du profil (soi)"
      on public.profiles for update
      using (auth.uid() = id)
      with check (auth.uid() = id);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'profiles' and policyname = 'Insertion du profil (soi)'
  ) then
    create policy "Insertion du profil (soi)"
      on public.profiles for insert
      with check (auth.uid() = id);
  end if;
end $$;
