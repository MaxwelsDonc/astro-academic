# 扉页 · Feiye

**English** · [简体中文](./README.md)

A one-page homepage for people who still write for readers. Name, bio, news, and papers—enough to finish in one sitting. Less dashboard, more flyleaf.

Serif for the prose, monospace for the dates; ivory paper, no cards, no blog to feed. Change a config and a handful of JSON files, push to GitHub Pages, and the page is yours.

<p align="center">
  <a href="https://zhouzenghui.site"><strong>See it live → zhouzenghui.site</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/MaxwelsDonc/feiye/generate"><strong>Use this template</strong></a>
</p>

<p align="center"><sub>The live site shares this template’s layout; the CV there is the author’s. Ye Fei and Qinglan University in the repo are fiction.</sub></p>

<p align="center">
  <img src="docs/screenshot.png" alt="Feiye on desktop and mobile" width="100%" />
</p>

<p align="center"><sub>Wide screens open up; narrow ones tighten. Type and space move with the viewport—no sudden costume change at a breakpoint.</sub></p>

## What’s on the page

- **One scroll** — About, news, papers, experience; toggle what you need, skip the blog  
- **Edit the data** — Day to day, only `src/config.ts` and `src/data/`  
- **Fluid type** — Name, subtitle, and portrait scale together; no second layout waiting at 768px  
- **A nav that knows where you are** — Anchors, with the current section lit  
- **Push to publish** — Ship `main`; Actions builds to GitHub Pages  
- **Citations that keep growing** — A daily Scholar crawl writes JSON to branch `google-scholar-stats`, not to your site sources  
- **Fonts in the repo** — Newsreader, Inter, JetBrains Mono under the SIL OFL; no font CDN  
- **The rest stays quiet** — Analytics, custom domain, and the footer credit are optional; email is Base64; empty social fields simply vanish  

## Make it yours

1. **[Use this template](https://github.com/MaxwelsDonc/feiye/generate)** and name the repo `your-username.github.io`  
2. Put your name, `site.url`, and email in `src/config.ts`; mirror the URL in `astro.config.mjs`  
3. Replace `public/images/profile.jpg` with your photo  
4. Rewrite `src/data/` and `intro.md`  
5. Push `main`

```bash
npm install
npm run dev    # http://localhost:4321
npm run build
```

## On citations

Off by default—the sample never asks Scholar for anyone’s numbers.

To turn them on: store your Scholar user id as `GOOGLE_SCHOLAR_ID`, enable Actions. The workflow force-pushes JSON to **`google-scholar-stats`** (not `main`). Then set `googleScholar.enabled`, point `statsUrl` at your jsDelivr URL, and add a `paperId` on each paper.

```text
https://cdn.jsdelivr.net/gh/USER/REPO@google-scholar-stats/gs_data.json
```

Fields and edge cases live in [`docs/CONTENT.md`](docs/CONTENT.md). Keep the header short—five or six links read better on a phone. Drop the footer credit with `site.showTemplateCredit = false` if you prefer silence.
