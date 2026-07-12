-- Étendre les domaines d'override pour communication + placement

alter table public.curriculum_content_overrides
  drop constraint if exists curriculum_content_overrides_domain_check;

alter table public.curriculum_content_overrides
  add constraint curriculum_content_overrides_domain_check
  check (domain in (
    'lecture', 'vocab', 'grammar', 'conjugation', 'math', 'apprendre',
    'catalog', 'ce', 'co', 'asset', 'comm', 'placement'
  ));
