-- Better 1% database schema (already applied to the Supabase project).
-- Every row belongs to one account. Row-level security means a signed-in
-- person can only read and write their own rows; logged-out visitors get nothing.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text check (char_length(display_name) <= 60),
  answers jsonb,
  plan jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint profiles_size check (pg_column_size(answers) + pg_column_size(plan) < 200000)
);

create table if not exists public.user_docs (
  user_id uuid not null references auth.users(id) on delete cascade,
  key text not null check (char_length(key) between 1 and 64),
  data jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id, key),
  constraint user_docs_size check (pg_column_size(data) < 200000)
);

create or replace function public.touch_updated_at() returns trigger
language plpgsql as $$ begin new.updated_at = now(); return new; end $$;
create trigger profiles_touch before update on public.profiles for each row execute function public.touch_updated_at();
create trigger user_docs_touch before update on public.user_docs for each row execute function public.touch_updated_at();

alter table public.profiles enable row level security;
alter table public.user_docs enable row level security;
revoke all on public.profiles, public.user_docs from anon;
grant select, insert, update, delete on public.profiles, public.user_docs to authenticated;

create policy "own profile" on public.profiles for all to authenticated
  using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "own docs" on public.user_docs for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- Lets a signed-in person delete their own account (and, by cascade, all their data).
create or replace function public.delete_my_account() returns void
language sql security definer set search_path = '' as $$
  delete from auth.users where id = auth.uid();
$$;
revoke execute on function public.delete_my_account() from public, anon;
grant execute on function public.delete_my_account() to authenticated;

-- Pre-loaded plans: a plan saved here for a username is copied into that person's
-- profile the first time they sign up with that username (claimed once).
create table if not exists public.seed_plans(
  username text primary key,
  answers jsonb,
  plan jsonb not null,
  claimed_at timestamptz
);
alter table public.seed_plans enable row level security;
revoke all on public.seed_plans from anon, authenticated;

create or replace function public.claim_seed_plan() returns boolean
language plpgsql security definer set search_path = '' as $$
declare u text; r public.seed_plans%rowtype;
begin
  if auth.uid() is null then return false; end if;
  select lower(split_part(email, '@', 1)) into u from auth.users where id = auth.uid();
  select * into r from public.seed_plans where username = u and claimed_at is null for update;
  if not found then return false; end if;
  insert into public.profiles(id, display_name, answers, plan)
    values (auth.uid(), coalesce(r.answers->>'name', u), r.answers, r.plan)
    on conflict (id) do update set answers = excluded.answers, plan = excluded.plan;
  update public.seed_plans set claimed_at = now() where username = u;
  return true;
end $$;
revoke execute on function public.claim_seed_plan() from public, anon;
grant execute on function public.claim_seed_plan() to authenticated;

-- First log-in for a pre-loaded username: lets the log-in form know the account
-- is waiting to be set up, and hands over the old on-device data once.
alter table public.seed_plans add column if not exists legacy jsonb;
alter table public.seed_plans add column if not exists legacy_taken_at timestamptz;

create or replace function public.seed_available(u text) returns boolean
language sql stable security definer set search_path = '' as $$
  select exists(select 1 from public.seed_plans where username = lower(trim(u)) and claimed_at is null);
$$;
revoke execute on function public.seed_available(text) from public;
grant execute on function public.seed_available(text) to anon, authenticated;

create or replace function public.take_seed_legacy() returns jsonb
language plpgsql security definer set search_path = '' as $$
declare u text; l jsonb;
begin
  if auth.uid() is null then return null; end if;
  select lower(split_part(email, '@', 1)) into u from auth.users where id = auth.uid();
  update public.seed_plans set legacy_taken_at = now()
    where username = u and claimed_at is not null and legacy is not null and legacy_taken_at is null
    returning legacy into l;
  return l;
end $$;
revoke execute on function public.take_seed_legacy() from public, anon;
grant execute on function public.take_seed_legacy() to authenticated;
