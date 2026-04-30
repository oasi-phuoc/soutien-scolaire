/**
 * À exécuter dans Supabase SQL Editor (ou CLI) pour activer progression + quiz cloud.
 * Voir .env.example pour les variables côté app.
 */

-- Profil (ligne créée automatiquement à l’inscription)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  preferred_pivot_lang text not null default 'ar'
    check (preferred_pivot_lang in ('ar', 'fa', 'ti', 'uk')),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Lecture du profil (soi)"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Mise à jour du profil (soi)"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id) values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user ();

-- Progression par module
create table if not exists public.user_module_progress (
  id uuid primary key default gen_random_uuid (),
  user_id uuid not null references auth.users (id) on delete cascade,
  module_slug text not null,
  progress_percent int not null
    check (progress_percent >= 0 and progress_percent <= 100),
  status text not null default 'in_progress'
    check (status in ('not_started', 'in_progress', 'completed')),
  updated_at timestamptz not null default now (),
  unique (user_id, module_slug)
);

create index if not exists user_module_progress_user_id_idx
  on public.user_module_progress (user_id);

alter table public.user_module_progress enable row level security;

create policy "Progression tout (soi)"
  on public.user_module_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Historique quiz
create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid (),
  user_id uuid not null references auth.users (id) on delete cascade,
  module_slug text not null,
  score int not null,
  max_score int not null,
  passed boolean not null default false,
  created_at timestamptz not null default now ()
);

create index if not exists quiz_attempts_user_id_idx on public.quiz_attempts (user_id);
create index if not exists quiz_attempts_module_slug_idx on public.quiz_attempts (module_slug);

alter table public.quiz_attempts enable row level security;

create policy "Tentatives quiz tout (soi)"
  on public.quiz_attempts for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
