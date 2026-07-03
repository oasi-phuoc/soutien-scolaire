# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15 (App Router, React 19, Turbopack, Tailwind v4) + TypeScript** app — a French school-support learning platform (`soutien-scolaire`). Package manager is **npm**. Node 22 works fine (no version is pinned; `@types/node ^20`).

### Services

- **Next.js dev server** (only service needed): `npm run dev` → http://localhost:3000 (Turbopack). This is all that is required to run and test the core learning experience.

### Running / building / linting / testing

Commands are defined in `package.json`:
- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- There is **no automated test suite** in this repo (no test runner or test scripts).

### Non-obvious caveats

- **Supabase is optional.** All Supabase client factories return `null` when env vars are missing, and the app degrades gracefully. With no `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `middleware.ts` **bypasses auth entirely** and `/` loads the app directly (no login). Progress is stored in `localStorage` (keys like `soutien-learning-progress-v1`). So the full learning app (math, lecture, français, communication) is testable with **just the dev server and no `.env`**.
- To test **accounts/login, cloud sync, messaging, and the admin dashboard** end-to-end you need an external Supabase project (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and server-only `SUPABASE_SERVICE_ROLE_KEY`). **No Supabase migrations/schema exist in this repo**, so those tables must be provisioned separately. When Supabase IS configured, unauthenticated visits to `/` redirect to `/connexion`.
- The **AI conversation** ("Parler"/communication) section uses `OPENAI_API_KEY`; without it, a local canned-reply fallback is used. Optional for testing.
- `npm run lint` currently reports pre-existing errors in the `scripts/*.cjs` / `.js` data/utility scripts (e.g. `no-require-imports`). These are unrelated to the application source under `app/` and `lib/`.
- **No lockfile is committed** (`package-lock.json` is gitignored), so `npm install` resolves fresh versions within the `^` ranges.
- Capacitor (`npm run mobile:*`) is for mobile packaging only and is not needed for web development/testing.
