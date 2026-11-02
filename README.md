# 扉页

[English](./README.en.md) · [简体中文](./README.md)

一页纸的学术主页。仓库名仍是 [`astro-academic`](https://github.com/MaxwelsDonc/astro-academic)。

衬线写正文，等宽写日期，象牙色的纸面。没有卡片，也没有博客。改一份配置和一组 JSON，推到 GitHub Pages，就是你的主页。

**在线示例：** [zhouzenghui.site](https://zhouzenghui.site)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Astro](https://img.shields.io/badge/Astro-5-BC52EE.svg)](https://astro.build)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222.svg)](https://pages.github.com)

![扉页预览](public/images/social-preview.png)

![示例首页](public/images/homepage.png)

---

## 目录

- [特性](#特性)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [配置](#配置)
- [引用数](#引用数)
- [字体](#字体)
- [定制域名](#定制域名)
- [文档](#文档)
- [许可证](#许可证)

---

## 特性

- **单页学术主页** — About、News、Experience、Publications、Education 等，按需开关
- **流体排版** — 名字、副标题与照片随宽度一起缩放，没有在 768px 突然换一版布局
- **顶栏锚点** — 标出当前所在章节，点击即可跳转
- **引用数可选** — 默认关闭；示例站不会请求任何人的 Scholar 数据
- **自托管字体** — Newsreader、Inter、JetBrains Mono（SIL OFL），不依赖外部字体 CDN
- **数据与版式分离** — 日常改 `src/config.ts` 与 `src/data/` 即可，不必碰组件

## 快速开始

1. 在 GitHub 上点击 **Use this template**。新仓库命名为 `你的用户名.github.io`（用户站，从 `/` 提供，无需改 `base`）。
2. 编辑 `src/config.ts`：填写姓名、`site.url`、邮箱。`analyticsId` 先留空，有自己的统计编号再填。将 `astro.config.mjs` 中的 `site` 设为同一网址。
3. 用你的照片替换 `public/images/profile.jpg`。仓库里这张是「扉」字，不是照片。
4. 改写 `src/data/` 下的 JSON 与 `intro.md`。叶扉、青澜大学和示例论文均为虚构，仅用于撑开版式。
5. 推送到 `main`。GitHub Actions 会部署到 GitHub Pages。

本地开发：

```bash
npm install
npm run dev    # http://localhost:4321
npm run build
```

页脚默认有一条「扉页」链回本仓库。若不需要，将 `site.showTemplateCredit` 设为 `false`。

## 项目结构

```text
├── public/
│   ├── fonts/              # 自托管 OFL 字体
│   └── images/             # 头像、预览图、favicon
├── src/
│   ├── components/         # Header、Hero、Section、Footer 等
│   ├── data/               # 内容：JSON + intro.md
│   ├── pages/index.astro   # 唯一页面
│   ├── styles/global.css   # 设计系统
│   └── config.ts           # 站点与作者配置
├── docs/CONTENT.md         # 字段与内容写法
└── .github/workflows/      # Pages 部署与可选 Scholar 爬虫
```

## 配置

主要选项都在 `src/config.ts`。

| 字段 | 说明 |
|------|------|
| `site.title` | 浏览器标题。不能留成 `Your Name` |
| `site.url` | Pages 地址，不要末尾斜杠，也不能包含 `yourname` |
| `site.analyticsId` | Google Analytics。`""` 表示关闭 |
| `site.showTemplateCredit` | 页脚是否保留「扉页」链接 |
| `author.github` | 用户名，或 `owner/repo` |
| `author.email` | 留空则不显示；页面上的地址经 Base64，不写在明文 HTML 里 |
| `homePage.sections` | 各章节开关 |
| `googleScholar.enabled` | 引用数；默认 `false` |

社交字段若为空字符串，不会出现在姓名下方。

## 引用数

默认关闭。若要启用：

1. 将 Google Scholar 的 user id 存为仓库密钥 `GOOGLE_SCHOLAR_ID`
2. 等待 `.github/workflows/google_scholar_crawler.yaml` 把 JSON 推到 `google-scholar-stats` 分支
3. 在 `src/config.ts` 中打开 `googleScholar.enabled`，并填入你自己的 jsDelivr 地址：

```text
https://cdn.jsdelivr.net/gh/USER/REPO@google-scholar-stats/gs_data.json
```

4. 给论文条目加上 `paperId`

完整步骤见 [`docs/CONTENT.md`](docs/CONTENT.md)。

## 字体

字体文件放在仓库内，构建产物不从外部字体站加载。

| 字体 | 用途 | 版权 |
|------|------|------|
| Newsreader | 正文 | Copyright 2020 The Newsreader Project Authors |
| Inter | 少量界面文字 | Copyright 2016 The Inter Project Authors |
| JetBrains Mono | 日期、导航、标签 | Copyright 2020 The JetBrains Mono Project Authors |
| Noto Serif SC 子集 | 仅含示例中的「叶」「扉」「页」 | Copyright 2017–2024 Adobe |

以上均为 [SIL Open Font License 1.1](https://openfontlicense.org)。OFL **不**并入 MIT：你可以随模板分发这些字体，但不能把字体本身改成其他许可证。全文见 `public/fonts/*-OFL.txt`。

换上你自己的中文名后，页面会改用读者系统中的宋体；示例名里的三个字才走 Noto 子集。

## 定制域名

在 `public/CNAME` 写入你的域名，并将 DNS 指向 `<username>.github.io`。本仓库不附带 CNAME。

## 文档

| 文档 | 内容 |
|------|------|
| [`docs/CONTENT.md`](docs/CONTENT.md) | 新闻、论文、经历等字段说明与示例 |
| [`AGENTS.md`](AGENTS.md) | 给编码代理的架构与设计约定 |
| [`LICENSE`](./LICENSE) | MIT 全文 |

小红书封面图：[`public/images/xiaohongshu.png`](public/images/xiaohongshu.png)

## 许可证

[MIT](./LICENSE)。Copyright (c) 2022 Yi Ren。Copyright (c) 2026 Zhou Zenghui。

原学术主题由 Yi Ren 编写；这一版单页主页由 Zhou Zenghui 重做。再分发时请保留两份版权声明。字体另受 SIL OFL 约束，见上文。
