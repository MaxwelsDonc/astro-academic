# 扉页 · Feiye

**English** · [简体中文](./README.md)

A one-page academic homepage for people who publish on paper, not on dashboards. Your name, bio, news, papers, and timeline live on a single scroll—typography that breathes with the viewport, like a flyleaf that scales instead of snapping at a breakpoint.

Serif for reading, monospace for dates and structure; warm ivory ground, no cards, no shadows, no blog to feed. Edit config and JSON; GitHub Pages ships the rest.

<p align="center">
  <a href="https://zhouzenghui.site"><strong>Live demo → zhouzenghui.site</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/MaxwelsDonc/astro-academic/generate"><strong>Use this template</strong></a>
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
| Self-hosted fonts | Newsreader, Inter, JetBrains Mono (SIL OFL); no external font CDN in the build |
| Citations (optional) | Off by default; the sample never requests Scholar data |

## Get started

1. **[Use this template](https://github.com/MaxwelsDonc/astro-academic/generate)** → name the repo `your-username.github.io`
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

Field reference, papers, Scholar setup, and custom domains: **[`docs/CONTENT.md`](docs/CONTENT.md)**.

The footer links back to this template by default—set `site.showTemplateCredit` to `false` in `src/config.ts` to remove it.
