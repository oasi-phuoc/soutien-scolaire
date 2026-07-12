-- Étendre les domaines d'override + bucket images curriculum

alter table public.curriculum_content_overrides
  drop constraint if exists curriculum_content_overrides_domain_check;

alter table public.curriculum_content_overrides
  add constraint curriculum_content_overrides_domain_check
  check (domain in (
    'lecture', 'vocab', 'grammar', 'conjugation', 'math', 'apprendre',
    'catalog', 'ce', 'co', 'asset'
  ));

-- Bucket public pour images vocab / lecture / CE / CO
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'curriculum-images',
  'curriculum-images',
  true,
  5242880,
  array['image/webp', 'image/png', 'image/jpeg', 'image/gif', 'image/svg+xml']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

-- Lecture publique des images
drop policy if exists curriculum_images_public_read on storage.objects;
create policy curriculum_images_public_read
  on storage.objects for select
  to public
  using (bucket_id = 'curriculum-images');

-- Upload / update / delete : admin uniquement
drop policy if exists curriculum_images_admin_write on storage.objects;
create policy curriculum_images_admin_write
  on storage.objects for all
  to authenticated
  using (
    bucket_id = 'curriculum-images'
    and exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
        and (p.role::text = 'admin' or p.is_admin = true)
    )
  )
  with check (
    bucket_id = 'curriculum-images'
    and exists (
      select 1 from public.profiles p
      where p.id = auth.uid()
        and (p.role::text = 'admin' or p.is_admin = true)
    )
  );
