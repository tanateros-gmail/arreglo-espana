create table if not exists public.site_snapshots (
  locale text primary key check (locale in ('es', 'en', 'ru')),
  content jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.site_snapshots enable row level security;

drop policy if exists "Public can read published site snapshots" on public.site_snapshots;
create policy "Public can read published site snapshots"
  on public.site_snapshots
  for select
  to anon, authenticated
  using (true);

-- Writes are performed by the Next.js server with SUPABASE_SERVICE_ROLE_KEY.
-- The service role bypasses RLS, so no broad client-side write policy is needed.
