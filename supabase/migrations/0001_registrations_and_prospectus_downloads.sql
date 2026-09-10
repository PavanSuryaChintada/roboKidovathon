-- RoboKidovation Västerås: registration + prospectus-download capture
-- Run once against the project database. Idempotent (safe to re-run).

create extension if not exists pgcrypto;

create table if not exists registrations (
  id uuid primary key default gen_random_uuid(),
  registration_type text not null check (registration_type in ('student', 'school')),
  team_name text,
  school_name text,
  contact_name text not null,
  email text not null,
  phone text not null,
  category_id text not null,
  student_count text not null,
  confirmation_code text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists prospectus_downloads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  created_at timestamptz not null default now()
);

alter table registrations enable row level security;
alter table prospectus_downloads enable row level security;

drop policy if exists "Public can submit registrations" on registrations;
create policy "Public can submit registrations"
  on registrations for insert
  to anon
  with check (true);

drop policy if exists "Public can log prospectus downloads" on prospectus_downloads;
create policy "Public can log prospectus downloads"
  on prospectus_downloads for insert
  to anon
  with check (true);
