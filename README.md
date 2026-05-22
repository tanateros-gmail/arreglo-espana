# Arreglo Espana Gothic Atelier

A cinematic dark gothic website inspired by Victorian cathedral architecture,
melancholic poetry, dusty libraries, moonlit cemeteries, and restrained Tim
Burton-like atmosphere.

## Stack

- Next.js App Router
- React 19
- TypeScript
- Supabase-ready CMS data layer
- CSS-only atmosphere, fog, candlelight, vignette, and ornamental hover effects

## Local development

```bash
npm install
npm run dev
```

Production check:

```bash
npm run lint
npm run build
```

## Locales

The public site is available in:

- `/es` Spanish
- `/en` English
- `/ru` Russian

The root route redirects to `/es`. SEO metadata, OpenGraph metadata, sitemap
entries, and language alternates are generated per locale.

## Admin / CMS

Temporary admin route:

- URL: `/admin`
- Login: `admin`
- Password: `passWord123!`

The admin dashboard edits one localized JSON snapshot at a time. Saving writes to
Supabase when the following env vars are configured:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_USERNAME=admin
ADMIN_PASSWORD=passWord123!
ADMIN_SESSION_SECRET=replace-with-a-long-random-string
```

Create the required table with `supabase/schema.sql`.

## CMS / Supabase model

The site reads from `public.site_snapshots` when Supabase is configured and
falls back to typed local content when it is not. The snapshot includes:

- SEO metadata and OpenGraph copy
- localized hero, atelier, CMS, and contact sections
- work/photo entries with optional image URLs and alt text
- editable contact information

Supabase Storage can be added for uploaded work photos in the next hardening
step; for now image URLs can be pasted into the CMS snapshot.
