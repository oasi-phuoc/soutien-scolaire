-- Overrides de contenu curriculum (édition en ligne admin)
-- Permet de modifier lecture / vocabulaire / grammaire / maths sans redéploiement immédiat.
-- La synchro Git (fichiers JSON) reste la source de vérité long terme.

create table if not exists public.curriculum_content_overrides (
  key text primary key,
  domain text not null check (domain in (
    'lecture', 'vocab', 'grammar', 'conjugation', 'math', 'apprendre'
  )),
  label text not null default '',
  payload jsonb not null default '{}'::jsonb,
  git_path text,
  git_sha text,
  updated_by uuid references public.profiles (id) on delete set null,
  updated_at timestamptz not null default now()
);

create index if not exists curriculum_content_overrides_domain_idx
  on public.curriculum_content_overrides (domain);

alter table public.curriculum_content_overrides enable row level security;

-- Lecture : tout utilisateur authentifié (contenu pédagogique public de l'app)
drop policy if exists curriculum_overrides_select_authenticated
  on public.curriculum_content_overrides;
create policy curriculum_overrides_select_authenticated
  on public.curriculum_content_overrides
  for select
  to authenticated
  using (true);

-- Écriture : admin uniquement
drop policy if exists curriculum_overrides_write_admin
  on public.curriculum_content_overrides;
create policy curriculum_overrides_write_admin
  on public.curriculum_content_overrides
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

-- Lecture anonyme possible si l'app expose du contenu sans auth (mode local)
drop policy if exists curriculum_overrides_select_anon
  on public.curriculum_content_overrides;
create policy curriculum_overrides_select_anon
  on public.curriculum_content_overrides
  for select
  to anon
  using (true);
