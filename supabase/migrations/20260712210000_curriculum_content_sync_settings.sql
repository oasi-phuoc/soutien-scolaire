-- Réglages de sync contenu (token GitHub optionnel si absent des env Vercel)

create table if not exists public.curriculum_content_sync_settings (
  id text primary key default 'default' check (id = 'default'),
  github_token text,
  github_repo text default 'oasi-phuoc/soutien-scolaire',
  github_branch text default 'main',
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now()
);

alter table public.curriculum_content_sync_settings enable row level security;

-- Lecture / écriture : admin uniquement (via JWT)
drop policy if exists curriculum_sync_settings_admin_all on public.curriculum_content_sync_settings;
create policy curriculum_sync_settings_admin_all
  on public.curriculum_content_sync_settings
  for all
  to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
        and (p.role::text = 'admin' or p.is_admin = true)
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
        and (p.role::text = 'admin' or p.is_admin = true)
    )
  );

insert into public.curriculum_content_sync_settings (id)
values ('default')
on conflict (id) do nothing;
