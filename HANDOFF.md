# PMW Design Ops — Cowork hand-off prompt

Paste everything below into a new Cowork session to continue working.

---

I'm Abdullah (abdullah@250mils.com), **Admin/owner** of **PMW Design Ops** — a static GitHub Pages + Supabase tool for hosting PosterMyWall (PMW) lo-fi mockups and reviewing them with positional comments, branching, diffing, and merging. The repo is the connected folder; read `CLAUDE.md` first — it holds the full governance and architecture rules and overrides defaults.

## Where things stand
- Repo: https://github.com/malik-1995-ab/pmw-design (branch `main`). Live: https://malik-1995-ab.github.io/pmw-design/
- **Prod is in sync.** Push only when explicitly asked (GitHub web upload UI).
- Current cache-buster versions in the shared mockups: **`app.css?v=7`, `app.js?v=26`**. Bump both (in `postermywall-lofi.html` and every active shared branch file) whenever you change the harness.
- Local preview server runs at http://localhost:8000 (open `index.html` for the dashboard). The lo-fi files take a `?thumb=1` mode for dashboard thumbnails.

## Architecture (don't break these)
- **Shared harness:** `app.css` (tokens + PMW component CSS + base64 Figtree font) and `app.js` (comment/diff/merge harness) are loaded by every active mockup file. Each mockup is a thin ~70KB shell containing only `<head>` boilerplate, the `.shell` design markup, an optional `window.PMW_OVERVIEW_MD`, and the `app.css`/`app.js` links. Per-file identity is derived dynamically (`MOCKUP` = filename).
- **File-per-branch.** New branch = copy `postermywall-lofi.html`, edit only the `.shell`, set `window.PMW_OVERVIEW_MD`, register in `iterations.json`. Never re-inline the harness into active branches.
- **Merged branches are self-contained snapshots.** On merge, `app.css`/`app.js`/`auth.js` are *inlined* into the branch file and `window.PMW_FROZEN_CHANGES` is written, so the file is frozen at merge time. **Consequence: harness changes must be hand-applied to the inlined copies in `my-stuff-mockup-update.html` and `update-ai-title.html` too** (use a python replace script via bash, then they need no `?v` bump since assets are inline).
- Design system: **stay with the current PMW look** — Figtree, light only, PMW tokens. No shadcn/Inter/dark-mode/React.

## Governance
- Only **Admin** may request platform/UI/UX changes (dashboard, auth.js, the harness). I'm Admin, so platform changes are allowed.
- Edit seats may only iterate on lo-fi `.shell` content in branches; View seats comment only.
- **Never delete** branches/files/history — archive via `status:"merged"` in `iterations.json`.

## Deploy
- The sandbox git can't write to the mounted `.git`. Deploy via GitHub web upload UI (Add file → Upload files → commit to `main`) using the browser tools. **Only push when I explicitly say so.** GitHub web upload **cannot delete files**.

## Data model / Supabase
- `iterations.json` groups iterations under branches (`main` flag for Main; `branch` + `n` for iterations; `status:"merged"` + `merged_at` for archived).
- Supabase tables: `comments`, `iteration_names`, `summaries` (a DB row beats `OVERVIEW_MD`), `merges` (drives the dashboard "Updates" changelog). Anon JWT key lives in `app.js`/`index.html`.
- After any branch edit, rewrite that branch's brief Summary of updates (analyze the full diff vs Main).

## Active files
- `postermywall-lofi.html` = Main (Production, labeled "Lofi" on dashboard).
- `330-ai-home-marketing.html` = active branch (shared harness). **Display name is now "Add responsive screens"** (renamed in `iterations.json`; file/`branch` key unchanged per the never-rename-files rule). This branch is where the responsive (tablet) build lives.
- `my-stuff-mockup-update.html`, `update-ai-title.html` = merged, self-contained snapshots with frozen change lists. (Harness changes must be hand-applied to these inlined copies — done this session for the "Iterations" label.)

## Recent work (this session)
- **Harness:** renamed the iterations dropdown label from "Iteration N" to just **"Iterations"** (keeps the "current / total" pill). Edited in `app.js`, bumped `app.js?v=22→23` in the thin files, and hand-applied to the two inlined merged snapshots.
- **`iterations.json`:** renamed the active branch's display name `330. AI Home & Marketing` → **`Add responsive screens`**.
- **Tablet build (`330-ai-home-marketing.html`, all inside `.shell-tablet` — no app.css/app.js change, so no further cache bump):** brought the Tablet (768px) My Stuff to parity with the live app. Rail navigates Designs/Events/Social/Emails/My Business/Order history/Trash as in-app pages; AI→AI takeover, Team→Pricing, Content Planner/Audience/Brand Kits→Premium upsell. Added My Stuff tabs + panels (My designs/Shared/Recommended/Favorites), design-card checkbox/hover-toolbar/kebab, folder kebabs + folder-detail breadcrumb. Added tablet topbar popovers (search w/ input + Trending, notifications, Create menu, account menu, hamburger nav) and reused the shared frame-level editor/AI/gallery/pricing/help/upsell overlays + Create-a-design modal. JS is wired inside the existing branch `DOMContentLoaded` closure (reuses openEditor/openAI/openPricing/openUpsell/routeByText etc.) under a `.shell-tablet` guard. Topbar order: logo → notifications → search → Create → avatar → hamburger. Verified flows in Chrome (rail nav, popovers, hamburger, card→editor); `node --check` clean; div balance OK. Updated the branch `PMW_OVERVIEW_MD` summary.
- **Role gates (app.css v7, app.js v26, auth.js):** View/guest seats can no longer switch to tablet or mobile device views, and the user-type dropdown is locked (opacity 0.4, pointer-events none). `applyViewRestrictions(role, doMenuCleanup)` — initial sync call passes `doMenuCleanup=false` (device/user-dd only, menus not yet built); `PMWAuth.require()` callback fires with the real role and does the full menu cleanup. Iterations dropdown hides divider + Add iteration for view; branches dropdown shows only Main + current branch. Hand-applied to inlined merged snapshots. `auth.js` updated: new signups get `role:'view'` on first profile creation; all existing non-Abdullah profiles set to `view` in DB.
- **Known open issue — branches missing from Main dropdown:** If Supabase token refresh causes `guest()` to fire before `onAuthed()`, the `PMWAuth.require` callback fires with `'guest'`, strips branches via DOM removal, and the subsequent `onAuthed()` (with the real admin role) doesn't re-fire `require` callbacks — so branches stay hidden. The reversible CSS-class fix was attempted but broke other behaviour. Needs a clean-room fix in a future session.

## Known loose ends (optional cleanup)
- Orphan files in the repo that GitHub web upload can't delete: `my-stuff.html`, `my-stuff-2.html`.
- A stray debug `thumb.png` exists locally (not committed) — ignore or delete.
- **Tablet build was sourced from the desktop shell** (live PMW renderer kept freezing during exploration). Worth an eyeball pass on tablet-specific spacing, and verifying the deeper destination pages against the real app at 768px when the browser is cooperative.
- If a stale `summaries` DB row exists for `330-ai-home-marketing`, it overrides the new `PMW_OVERVIEW_MD` — clear it if the old summary persists.
- Mobile (`.shell-mobile`) is still the minimal/earlier version — not yet built to parity like tablet.

## What I want to do next
<!-- describe your next task here -->

