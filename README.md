# Wireframes site

A free, static gallery of lo-fi wireframes. No server, no API, no cost beyond
your Claude subscription. The lo-fis are generated in Cowork and hosted here on
GitHub Pages.

## What's in here

```
index.html            The gallery (lists everything in /lofis)
lofis/manifest.json   The list of wireframes the gallery reads
lofis/example.html    A placeholder lo-fi (delete once you add real ones)
README.md             This file
WORKFLOW.md           How to add/update wireframes via Cowork
```

---

## One-time setup (≈10 minutes, all free)

### 1. Create a GitHub account
Go to https://github.com → **Sign up**. Use your email, pick a username
(this becomes part of your site URL), verify the email.

### 2. Create the repository
- Click the **+** (top right) → **New repository**.
- **Repository name:** `wireframes` (anything is fine).
- Visibility: **Public** (required for free Pages; the URL stays unlisted
  unless you share it).
- Do **not** add a README (we already have one).
- Click **Create repository**.

### 3. Upload these files
Easiest way, no command line:
- On the new empty repo page, click **uploading an existing file**.
- Drag in **everything inside the `wireframe-app` folder**: `index.html`,
  `README.md`, `WORKFLOW.md`, and the whole `lofis` folder.
- Scroll down, click **Commit changes**.

### 4. Turn on GitHub Pages
- In the repo, go to **Settings** → **Pages** (left sidebar).
- Under **Source**, choose **Deploy from a branch**.
- Branch: **main**, folder: **/ (root)** → **Save**.
- Wait ~1 minute. The page will show your live URL:
  `https://YOUR-USERNAME.github.io/wireframes/`

That URL is your app. Share it with your ~20 users. Done.

---

## Updating it later
See **WORKFLOW.md**. In short: ask Cowork to make/edit a lo-fi, drop the new
HTML into `/lofis`, add a line to `manifest.json`, commit. The live site updates
automatically.
