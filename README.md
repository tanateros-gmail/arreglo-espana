# Arreglo Espana Gothic Atelier

A cinematic dark gothic website inspired by Victorian cathedral architecture,
melancholic poetry, dusty libraries, moonlit cemeteries, and restrained Tim
Burton-like atmosphere.

## Stack

- Next.js App Router
- React 19
- TypeScript
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

## Future CMS / Supabase iteration

The current portfolio and contact content lives in `lib/site-content.ts` as
typed collections. That file is intentionally shaped so the next iteration can
replace local arrays with Supabase-backed tables:

- `portfolio_pieces` for work/photo sets and metadata
- `contact_items` for editable contact information
- `hero_settings` for homepage copy and calls to action
- `site_navigation` for editable navigation labels and ordering

The admin panel can then use Supabase Auth, Storage for images, and RLS-backed
tables for safe editing.
