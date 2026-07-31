create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'admin',
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = auth.uid()
  );
$$;

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  category text not null default '',
  path text not null default '/',
  image_url text not null default '',
  image2 jsonb not null default '[]'::jsonb,
  status text not null default 'published' check (status in ('draft', 'published')),
  sort_order integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  tag text not null default '',
  image_url text not null default '',
  event_day text not null default '',
  event_month text not null default '',
  event_year text not null default '',
  title text not null,
  other_event_pics jsonb not null default '[]'::jsonb,
  description text not null default '',
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.startups (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  img_url text not null default '',
  description text not null default '',
  description2 text not null default '',
  images jsonb not null default '[]'::jsonb,
  status text not null default 'published' check (status in ('draft', 'published')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists courses_set_updated_at on public.courses;
create trigger courses_set_updated_at
before update on public.courses
for each row execute function public.set_updated_at();

drop trigger if exists events_set_updated_at on public.events;
create trigger events_set_updated_at
before update on public.events
for each row execute function public.set_updated_at();

drop trigger if exists startups_set_updated_at on public.startups;
create trigger startups_set_updated_at
before update on public.startups
for each row execute function public.set_updated_at();

alter table public.admin_users enable row level security;
alter table public.courses enable row level security;
alter table public.events enable row level security;
alter table public.startups enable row level security;

drop policy if exists "Admins can manage admin users" on public.admin_users;
create policy "Admins can manage admin users"
on public.admin_users
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Published courses are public" on public.courses;
create policy "Published courses are public"
on public.courses
for select
using (status = 'published');

drop policy if exists "Admins can manage courses" on public.courses;
create policy "Admins can manage courses"
on public.courses
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Published events are public" on public.events;
create policy "Published events are public"
on public.events
for select
using (status = 'published');

drop policy if exists "Admins can manage events" on public.events;
create policy "Admins can manage events"
on public.events
for all
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Published startups are public" on public.startups;
create policy "Published startups are public"
on public.startups
for select
using (status = 'published');

drop policy if exists "Admins can manage startups" on public.startups;
create policy "Admins can manage startups"
on public.startups
for all
using (public.is_admin())
with check (public.is_admin());

insert into storage.buckets (id, name, public)
values ('elevateher-media', 'elevateher-media', true)
on conflict (id) do nothing;

drop policy if exists "ElevateHer media is public" on storage.objects;
create policy "ElevateHer media is public"
on storage.objects
for select
using (bucket_id = 'elevateher-media');

drop policy if exists "Admins can upload ElevateHer media" on storage.objects;
create policy "Admins can upload ElevateHer media"
on storage.objects
for insert
with check (bucket_id = 'elevateher-media' and public.is_admin());

drop policy if exists "Admins can update ElevateHer media" on storage.objects;
create policy "Admins can update ElevateHer media"
on storage.objects
for update
using (bucket_id = 'elevateher-media' and public.is_admin())
with check (bucket_id = 'elevateher-media' and public.is_admin());

drop policy if exists "Admins can delete ElevateHer media" on storage.objects;
create policy "Admins can delete ElevateHer media"
on storage.objects
for delete
using (bucket_id = 'elevateher-media' and public.is_admin());
