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
