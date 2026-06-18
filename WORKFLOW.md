# Adding & updating wireframes (via Cowork)

There is no automated image→lo-fi pipeline (that would need the paid Claude API).
Instead, **you** run the skill here in Cowork — free under your subscription —
and the output gets added to the site.

## Add a new wireframe

1. In Cowork, upload your PMW screenshot and say:
   *"Make a lo-fi of this."* (uses the `pmw-lofi-creator-v2` skill)
2. I produce a single self-contained `.html` file.
3. Save that file into the `lofis/` folder with a clear name,
   e.g. `lofis/checkout-v1.html`.
4. Add an entry to `lofis/manifest.json`:
   ```json
   {
     "file": "checkout-v1.html",
     "title": "Checkout flow",
     "updated": "2026-06-18"
   }
   ```
5. Upload the new file + updated `manifest.json` to GitHub (drag-and-drop in the
   repo, **Add file → Upload files → Commit**). The gallery updates in ~1 minute.

## Update an existing wireframe

- Ask in Cowork to tweak it, I regenerate the HTML.
- Replace the old file in `lofis/` with the new one (same filename = no manifest
  change needed). Bump the `updated` date if you like.
- Commit. Live site refreshes.

## Tips
- The gallery shows a live mini-preview of each lo-fi as its thumbnail — no need
  to make screenshots.
- Keep filenames lowercase with hyphens, no spaces.
- To remove a wireframe: delete its line from `manifest.json` (and optionally the
  file).
