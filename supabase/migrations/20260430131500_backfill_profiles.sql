-- Profils pour les comptes auth créés avant le trigger ou si le trigger n’a pas tourné.
insert into public.profiles (id)
select u.id from auth.users u
where not exists (
  select 1 from public.profiles p where p.id = u.id
)
on conflict (id) do nothing;
