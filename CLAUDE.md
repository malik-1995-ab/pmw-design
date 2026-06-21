# PMW Design Ops — Cowork rules & governance

This repo is **PMW Design Ops**: a static (GitHub Pages) tool for hosting PosterMyWall lo-fi mockups, reviewing them with positional comments, branching, diffing, and merging. Backend is Supabase (auth, comments, branch/iteration names). Deploy = commit to `main`.

## Roles & permissions

- **Admin** — full control. Can change the platform itself and Main directly; can branch, merge, manage members.
- **Edit** — cannot change Main directly. Works by creating a branch ("New Lofi") and merging to Main. Can comment.
- **View** — comment only.

(UI gating for these is enforced in `auth.js` via `PMWAuth.can()` + the `data-role` / `.admin-only` CSS in the mockup files.)

## Cowork governance (IMPORTANT — applies to every Cowork session)

1. **Only Admin-level people may request platform / UI / UX changes to this web app — even via Cowork.**
   "Platform" = anything that isn't the lo-fi design content itself: the dashboard (`index.html`), `auth.js`, and the **harness** inside the mockup files (preview/top bar, comment system, iteration/branch dropdowns, diff/merge, drawers, styling/tokens, scripts). The platform is the product, not the artifact being reviewed.

2. **Edit seats may ONLY iterate on the lo-fi / mockup content within branches** — i.e. the design markup inside a lo-fi's `.shell` (the PosterMyWall UI being mocked up). They cannot change the platform UI/UX.

3. **View seats** — comment only; no Cowork changes.

4. When an **Edit (or View) seat** asks Cowork for a platform/UI/UX change, respond with:

   > "I can't make changes to the platform UI/UX — you can only iterate on a lo-fi."

   Then offer to help with a lo-fi (branch) iteration instead.

5. If the requester's role is unknown, ask which seat they are before making any platform change. Default to refusing platform changes unless the requester is confirmed Admin.

## What counts as "a lo-fi iteration" (allowed for Edit)

- Editing the mockup design inside the `.shell` of a branch's HTML file (layout, text, components of the PosterMyWall screen being designed).
- Creating a new branch ("New Lofi") and adding iterations within it.

## What counts as "platform" (Admin only)

- `index.html` (dashboard), `auth.js`.
- The harness inside any mockup file: preview bar, comment/annotation system, iteration & branch dropdowns, "What changed?" diff, Merge, drawers, design tokens/CSS, and all scripts.

## Shared harness architecture (IMPORTANT — keeps files small/fast)

The comment/diff/merge harness and ALL styles live in TWO shared files loaded by every mockup:
- `app.css` — all styles (tokens, PMW component CSS, anno/iter/diff/merge styles).
- `app.js` — all harness scripts (comments, iteration dropdown, diff drawer, merge). Loaded with `defer`.

Each mockup file (Main and every branch) is therefore a **thin** ~70KB file (was ~285KB) that contains only:
1. `<head>` boilerplate + `<link rel="stylesheet" href="app.css?v=N">` (after `auth.js`).
2. The body markup: the preview-bar/stage/vframe wrapper **and** the unique `.shell` design content.
3. An optional inline `<script>window.PMW_OVERVIEW_MD=...</script>` (per-branch default Summary; a DB `summaries` row still wins).
4. `<script src="app.js?v=N" defer></script>` before `</body>`.

Per-file identity is derived dynamically in `app.js`, NOT hardcoded:
- `MOCKUP` = filename without `.html` (or `window.PMW_MOCKUP` if set). This is the comment/summary namespace.
- `OVERVIEW_MD` = `window.PMW_OVERVIEW_MD` if set, else a generic placeholder.

**Creating a new branch** = copy `postermywall-lofi.html` (already thin) to `<branch>.html`, edit only the `.shell`, set `window.PMW_OVERVIEW_MD`, register in `iterations.json`. Do NOT re-inline the harness — keep referencing `app.css`/`app.js`.

**Editing the harness** (platform, Admin only) = edit `app.css`/`app.js` once, then bump the `?v=N` cache-buster in every mockup file. Never copy harness code back into a mockup file.

## Frozen change record on merge (IMPORTANT)

After a branch is merged its `.shell` equals Main, so the live diff finds nothing and the "List of exact changes" would read "No changes from Main." To preserve the record, **merging FREEZES the branch's change list**: write an inline `window.PMW_FROZEN_CHANGES = [ ... ]` array (one short string per change) into the branch file. When present:
- The "List of exact changes" renders that frozen list **read-only** (no Revert buttons) with a "Merged — this list is frozen" note, instead of recomputing.
- The Summary becomes **read-only** (Edit hidden) and the empty-diff toast is suppressed.

So the merge prompt must capture the change list into `window.PMW_FROZEN_CHANGES` before applying. Keep these snapshots forever (same spirit as "never delete branches").

## Data model

`iterations.json` groups iterations under branches:
- Main is `{ "main": true, "file": "postermywall-lofi.html" }`.
- Branch iterations carry a `branch` key + per-branch `n`, e.g. `{ "branch": "update-ai-title", "n": 1, "name": "Update AI title", "file": "update-ai-title.html" }`.
- "Is Main?" checks use the `main` flag (not `n===1`). A branch's dropdown lists only entries sharing its `branch` key, renumbered from 1.

## Auto-summary rule (IMPORTANT)

After **any** change to a lo-fi / branch's mockup, analyze ALL the changes in that branch together (the full diff vs Main, not just the latest edit) and write or rewrite a **brief, on-point Summary of updates** for that branch. Keep it tight: a one-line lead, a short "What changed" bullet list, and an optional "Why" line. (No status line.)

- Store it in that branch file's `OVERVIEW_MD` array (the Summary section's default), which renders in the "What changed?" drawer's **Summary**.
- The in-app Summary editor (Edit/Admin) saves overrides to the Supabase `summaries` table (keyed by mockup filename); a DB row, if present, takes precedence over `OVERVIEW_MD`. So when Cowork rewrites the summary after a change, also clear/refresh any stale `summaries` row for that mockup if needed.
- Summaries are per-branch (per mockup file). Don't carry another branch's summary over.

## Never delete branches (IMPORTANT)

NEVER delete a branch, its file, or its history — not on merge, not on cleanup, not ever. We keep a permanent record of everything that happened over time. Merging **archives** a branch: set `status: "merged"` (+ `merged_at`) on its `iterations.json` entry and keep the file. Merged branches still appear (with a "Merged" badge) and stay navigable from the dashboard and Change log. The same goes for iterations and comments — prefer archive/resolve over deletion.

## Change log

The dashboard shows a **Change log** of merges, read from the Supabase `merges` table (`branch`, `file`, `merged_by`, `merged_at`). When a user confirms a Merge, the client logs a row (merged_by = the logged-in profile name). When Cowork executes a merge prompt, ensure the merge is reflected here (the row is normally already written at confirm time).

## Deploy

Static site → push commits to `main` (GitHub Pages). Bundle local changes; push only when the user asks. Push mechanism: the sandbox git can't write to the mounted `.git`, so deploy via GitHub's web upload UI (Add file → Upload files → commit to `main`). Bump `?v=N` on `app.css`/`app.js` in the mockup files whenever the harness changes, so browsers fetch the new version after deploy.

## Decisions & current state (handoff log — updated 2026-06)

Context that lives only in chat history, recorded so a fresh session doesn't repeat it:

- **Architecture = shared harness, file-per-branch.** We considered "branches as DB patches" (a branch = a ~1KB row holding a JSON patch, rendered by one generic viewer) and **rejected it** as too fragile for arbitrary design edits. Instead we extracted the harness into `app.css` + `app.js` so each mockup file is a thin ~70KB shell. If repo size ever becomes a real problem at scale, revisit patches — but don't reach for them lightly.
- **Design system: stay with the current PMW look.** We tried plugging in a shadcn "Neutral" design system (Inter font, neutral palette, light/dark toggle) across the platform chrome. The owner preferred the original UI and we **fully reverted it**. Do NOT reintroduce shadcn/Inter/dark-mode unless explicitly asked. The original look = Figtree, the PMW tokens in `app.css` `:root`, light only.
- **React: deferred.** Considered moving the platform (dashboard + harness) to React/Next. Decided **not worth it now** — it would break the "static HTML mockups that Cowork authors and GitHub Pages serves with no build step" model, which is the app's core strength. Revisit only if the chrome's interactivity grows a lot (then: Next for the platform only, mockups still static in iframes).
- **Dashboard scale:** `index.html` lazy-loads branch thumbnails (IntersectionObserver) and paginates 18 at a time ("Load more") to stay fast at 1000+ branches.
- **Everything through commit `aa2fac9` is pushed to prod.** Repo and the live site are in sync.
