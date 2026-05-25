-- Add full progress blob to profiles for cross-device sync
alter table public.profiles
  add column if not exists progress_data jsonb,
  add column if not exists progress_updated_at timestamptz;

-- Update RLS: insert policy for new accounts
create policy if not exists "Insertion du profil (soi)"
  on public.profiles for insert
  with check (auth.uid() = id);
