# AGENTS.md

This is 扉页, an Astro 5 static site — a one-page academic homepage. Editorial minimalist design: warm paper background, serif typography, monospace metadata.

The repository name stays `feiye`. The sample person (Ye Fei, Qinglan University) is fictional. Do not replace that sample with a real CV from another project.

## Commands
- `npm run dev` — start dev server at localhost:4321
- `npm run build` — production build to dist/
- `npm install` — install dependencies

## Architecture
- **Astro 5** with static output, deployed to GitHub Pages
- **Single page** `src/pages/index.astro` — the entire site; header nav is anchor links (`/#news`, ...)
- **Single config file** `src/config.ts` — all site settings (identity, hero copy, section toggles)
- **CSS design system** in `src/styles/global.css` — CSS custom properties
- No content collections, no blog, no RSS (do not reintroduce them)

## Key conventions
- **Fonts**: self-hosted OFL files in `public/fonts/` — Newsreader (serif, content), JetBrains Mono (monospace, metadata), Inter (sans-serif, small UI text)
- **Space scale**: 4px base, powers of 2 (--space-xs through --space-2xl)
- **Type scale**: --text-xs (12px) through --text-5xl (72px)
- **Colors**: warm ivory bg (#f4f3ec), text (#1c1b19), secondary (#55524c), muted (#a09a90), clay accent (#c15f3c), border (#e4e1d6)
- **Layout**: max-width 1100px (content), 720px token for body text (`--max-w-text`)
- **Responsive**: no layout breakpoint. Type, portrait, gaps, and nav scale with `clamp()`. A `.row` stays label + body until the line runs out of room, then the body wraps under the label.
- **Weight tiers**: labels/sub-lines 400 muted · entry titles 500 · key phrases (your name, job/degree titles) 600 — never other weights

## Content & authoring
- **Full guide: `docs/CONTENT.md`** — how to update data files. Read it before editing content.
- All content lives in `src/data/*.json` + `src/data/intro.md`.

## Homepage editing
- Edit `src/pages/index.astro` directly
- Sections use `<Section title="..." id="...">` wrapper (id = anchor target); the intro block is a plain `<section>` without heading
- Hero (name, tagline, text links, avatar) is `src/components/Hero.astro`, driven by `homePage` in `src/config.ts`
- Unified row — one entry format for all sections: `<div class="row"><span class="row-label">DATE / VENUE / ROLE</span><div class="row-body"><div class="row-title">TITLE</div><div class="row-sub">SUBLINE</div></div></div>`
- `row-sub`/`row-desc` are optional sub-lines; `.rows-compact` wraps single-line sections (Honors, Services) for tighter rhythm
- Citations render only when `googleScholar.enabled` is true. Leave it false in the sample. `paperId` is optional per paper.

## Design rules (never break these)
1. No background colors on content items (except badges)
2. No border-radius or box-shadow on cards (there are no cards)
3. Serif for content, monospace for metadata (dates, badges, sub-headings, nav, tags), sans-serif only for small UI text
4. Hover effects are color transitions plus at most a slight scale — no shadow, no background change. Scale must use the two `--hover-scale-*` tokens (text 1.02 / icon 1.1), never a raw value
5. Left-aligned — never center text
6. Section dividers are top-borders on headings, not between items
