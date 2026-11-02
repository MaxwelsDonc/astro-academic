# Content & Authoring Guide

How to make this sample into your homepage. Edit **data files**, then push to
`main`. GitHub Actions deploys to GitHub Pages.

The site is a **single page** (`src/pages/index.astro`). Header links are
anchors (`/#news`, `/#publications`, ...) and scroll to sections on that page.

Ye Fei, Qinglan University, and the papers in `src/data/` are fictional.
Replace them.

---

## Where everything lives

| What | File | Format |
|------|------|--------|
| Name, social links, site URL, hero copy, section toggles | `src/config.ts` | TypeScript object |
| Intro paragraphs | `src/data/intro.md` | Markdown |
| Education / Experience | `src/data/education.json`, `experience.json` | JSON array |
| News | `src/data/news.json` | JSON array |
| Publications | `src/data/publications.json` | JSON (sections → papers) |
| Projects / Honors / Services / Skills | `src/data/*.json` | JSON |

Also set `site` in `astro.config.mjs` to the same URL as `site.url`.

The portrait is `public/images/profile.jpg`. The file in this repo is a
typographic mark. Replace it with your photo. Favicons live in
`public/images/favicon/`. The manifest name is in
`public/images/site.webmanifest`.

### `src/config.ts` keys

| Field | Purpose |
|------|---------|
| `site.title` | Browser title. Must not stay as `Your Name` |
| `site.url` | Pages URL, no trailing slash, must not contain `yourname` |
| `site.analyticsId` | Google Analytics. `""` disables it |
| `site.showTemplateCredit` | Footer 扉页 link |
| `author.github` | Username, or `owner/repo` |
| `author.email` | Empty string hides it; Base64 in HTML |
| `homePage.sections` | Per-section on/off |
| `googleScholar.enabled` | Citation counts; default `false` |

Empty social fields do not appear under the name.

### Custom domain

Create `public/CNAME` with your domain and point DNS at
`<username>.github.io`. This repository does not ship a CNAME.

### Fonts

Self-hosted under SIL OFL in `public/fonts/` (Newsreader, Inter,
JetBrains Mono, plus a tiny Noto Serif SC subset for 叶 / 扉 / 页 in the
sample name). The MIT license does not relicense the fonts. Full OFL texts
are in `public/fonts/*-OFL.txt`.

---

## Common updates

### News
Entries in `src/data/news.json` are sorted newest-first. The page shows the
**top 5**:

```json
{ "date": "2026.07", "text": "Paper accepted at ", "link": "https://...", "linkText": "CHI 2027", "suffix": "." }
```

`date` is `YYYY.MM` (a bare `YYYY` also works). `link`, `linkText`, `suffix`,
and `detail` are optional.

### Add a publication
In `src/data/publications.json`, add to the right section's `papers` array:

```json
{
  "title": "Paper Title",
  "venue": "CHI 2027",
  "authors": "**Your Name**, Co-Author",
  "paperId": "SCHOLAR_USER_ID:PAPER_ID",
  "link": "https://arxiv.org/abs/0000.00000"
}
```

- `**bold**` in `authors` marks your name.
- `paperId` is the full Google Scholar `author_pub_id`. Optional. Citation
  counts stay hidden until `googleScholar.enabled` is `true` in `src/config.ts`.
- `link` is optional. When present, the title points there instead of Scholar.

### Add an honor / project / service
Match the shape already in the corresponding JSON file. Use plain `&`, not
`&amp;`, in headings.

### Toggle a whole section off
In `src/config.ts`, `homePage.sections` — set any key to `false`. The data
can stay.

### Hero copy
Name, Chinese name, and subtitle live in `homePage`. The portrait is
`author.avatar`.

### Add / remove a hero link
`src/components/Hero.astro` reads `author`. A filled field is shown, an empty
string is hidden. Email is Base64-obfuscated in the built HTML.

`author.github` is a username (`octocat`) or `owner/repo`.

### Footer credit
`site.showTemplateCredit` prints a 扉页 link under the copyright line. Set it
to `false` if you do not want it.

---

## Google Scholar citations

Off by default. The sample has no `paperId` and an empty `statsUrl`, so the
page does not request citation data.

1. Put your Scholar user id in the repository secret `GOOGLE_SCHOLAR_ID`.
2. The workflow `.github/workflows/google_scholar_crawler.yaml` runs
   `google_scholar_crawler/main.py` and pushes JSON to the branch
   `google-scholar-stats`.
3. Set `googleScholar.statsUrl` to
   `https://cdn.jsdelivr.net/gh/USER/REPO@google-scholar-stats/gs_data.json`
   and `googleScholar.enabled` to `true`.
4. Set `author.googleScholarId`, and add `paperId` on each paper.

---

## Design rules (never break)

1. No background colors on content items (except badges).
2. No border-radius or box-shadow on content blocks (there are no cards).
3. Serif (Newsreader) for content; monospace (JetBrains Mono) for metadata
   — dates, badges, sub-headings, nav, tags; sans-serif (Inter) is reserved
   for small UI text.
4. Hover effects are color transitions plus at most a slight scale via the
   `--hover-scale-text` / `--hover-scale-icon` tokens — never shadow or
   background.
5. Left-aligned — never center text.
6. Section dividers are top-borders on headings, not between items.

Palette: warm ivory `#f4f3ec`, ink `#1c1b19`, clay accent `#c15f3c`, hairline
`#e4e1d6`.

---

## Before you push

```bash
npm run build
npm run dev
```

`npm run build` checks that `site.title`, `site.url`, and `author.name` are
filled in. `site.url` must not contain `yourname`. Pushing to `main` triggers
`.github/workflows/deploy.yml`.

This template is meant for a **user site** (`username.github.io`), where the
site is served from `/`. A project site (`username.github.io/repo/`) needs
`base` in `astro.config.mjs`, and the font and image URLs in
`src/styles/global.css` and `src/layouts/BaseLayout.astro` follow that base.
