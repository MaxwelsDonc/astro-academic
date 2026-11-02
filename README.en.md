# 扉页 · Feiye

**English** · [简体中文](./README.md)

A one-page academic homepage for people who publish on paper, not on dashboards. Your name, bio, news, papers, and timeline live on a single scroll—typography that breathes with the viewport, like a flyleaf that scales instead of snapping at a breakpoint.

Serif for reading, monospace for dates and structure; warm ivory ground, no cards, no shadows, no blog to feed. Edit config and JSON; GitHub Pages ships the rest.

<p align="center">
  <a href="https://zhouzenghui.site"><strong>Live demo → zhouzenghui.site</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/MaxwelsDonc/feiye/generate"><strong>Use this template</strong></a>
</p>

<p align="center">
  <img src="docs/screenshot.png" alt="Feiye on desktop and mobile" width="100%" />
</p>

<p align="center"><sub>One layout language: wide screens open up, narrow screens tighten—no hard 768px swap.</sub></p>

## Who it’s for

- You want a **formal, quiet** academic presence without running a CMS
- Visitors should **finish the story in one scroll**, not hunt across About and Blog
- You’re happy maintaining **`src/config.ts` + JSON**, not Astro components

## What you get

| Experience | Details |
|------------|---------|
| Single page | About, News, Experience, Publications, Education—toggle sections on or off |
| Fluid type | Name, subtitle, and portrait scale together with the viewport |
| Section nav | Header anchors highlight where you are and jump on click |
| **Auto Google Scholar citations** | A daily GitHub Action refreshes citation counts next to your papers |
| Self-hosted fonts | Newsreader, Inter, JetBrains Mono (SIL OFL); no external font CDN in the build |

## Get started

1. **[Use this template](https://github.com/MaxwelsDonc/feiye/generate)** → name the repo `your-username.github.io`
2. Edit **`src/config.ts`** (name, `site.url`, email) and **`astro.config.mjs`** `site` (same URL)
3. Replace **`public/images/profile.jpg`** (the repo ships a 扉 mark, not a photo)
4. Rewrite **`src/data/`** and **`intro.md`** (Ye Fei, Qinglan University, and the papers are fiction)
5. Push **`main`** → Actions deploys to Pages

Local preview:

```bash
npm install
npm run dev    # http://localhost:4321
npm run build
```

## Google Scholar citations

Off in the sample—nothing fetches Scholar data until you opt in. When enabled, the bundled crawler and Action **refresh citations daily** (or on demand).

1. Copy your Scholar user id from the profile URL (`user=…`)
2. Add repository secret **`GOOGLE_SCHOLAR_ID`** under Settings → Secrets → Actions
3. Enable Actions; `.github/workflows/google_scholar_crawler.yaml` pushes JSON to the `google-scholar-stats` branch (08:00 UTC daily, or `workflow_dispatch`)
4. Set `googleScholar.enabled = true` in `src/config.ts` and point `statsUrl` at your jsDelivr URL:

```text
https://cdn.jsdelivr.net/gh/USER/REPO@google-scholar-stats/gs_data.json
```

5. Add a `paperId` (`author_pub_id`) on each paper

Field examples and troubleshooting: **[`docs/CONTENT.md`](docs/CONTENT.md)**.

The footer links back to this template by default—set `site.showTemplateCredit` to `false` in `src/config.ts` to remove it.
