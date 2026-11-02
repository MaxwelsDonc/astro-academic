# 扉页

[English](./README.en.md) · **简体中文**

给学者的一页主页。姓名、介绍、动态、论文与经历，都在同一屏里读完——像一张会随窗口伸缩的扉页，而不是后台仪表盘。

衬线承载正文，等宽标注日期与结构；暖象牙纸色，无卡片、无阴影、无博客维护。你改配置与 JSON，GitHub Pages 负责发布。

<p align="center">
  <a href="https://zhouzenghui.site"><strong>查看示例 → zhouzenghui.site</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/MaxwelsDonc/feiye/generate"><strong>Use this template</strong></a>
</p>

<p align="center"><sub>示例站与本模板<strong>版式同源</strong>；站上内容是作者本人履历，不是仓库里的虚构样例。</sub></p>

<p align="center">
  <img src="docs/screenshot.png" alt="扉页在桌面与手机上的预览" width="100%" />
</p>

<p align="center"><sub>同一套排版：宽屏展开，窄屏收束，不在某个断点硬换布局。</sub></p>

## 适合谁

- 需要**正式、克制**的学术形象，又不想维护 WordPress 或整站 CMS
- 希望访客**一次滚动**看完履历要点，而不是在 About / Blog 之间跳转
- 愿意用 **JSON + 一份 `config.ts`** 维护内容，而不是改组件

## 你会得到什么

| 体验 | 说明 |
|------|------|
| 单页、可开关章节 | About、News、Experience、Publications、Education、Projects、Honors… 按需显示 |
| 数据在外 | 日常只动 `src/config.ts` 与 `src/data/`，不必碰 Astro 组件 |
| 流体排版 | 姓名、副标题与头像用 `clamp()` 连续缩放，没有 768px 硬切两套布局 |
| 章节导航 | 顶栏锚点，当前所在节高亮 |
| **GitHub Pages 一键发布** | 推送 `main` 即构建部署，无需自备服务器 |
| **Google Scholar 自动引用** | Action 日更爬取；JSON 写在独立分支 `google-scholar-stats`，**不改 `main`** |
| 自托管字体 | Newsreader / Inter / JetBrains Mono（SIL OFL），不拉外链字体 CDN |
| 可选 Analytics | `analyticsId` 填上即开，留空即关 |
| 邮箱脱敏 | 地址经 Base64，不写进明文 HTML |
| 空字段隐藏 | 社交链接等留空就不渲染 |
| 自定义域名 | 添加 `public/CNAME` 即可 |
| 模板署名可关 | `site.showTemplateCredit = false` |

## 开始

1. **[Use this template](https://github.com/MaxwelsDonc/feiye/generate)** → 新仓库命名为 `你的用户名.github.io`
2. 编辑 **`src/config.ts`**（姓名、`site.url`、邮箱）与 **`astro.config.mjs`** 中的 `site`（同一网址）
3. 替换 **`public/images/profile.jpg`**（仓库内为「扉」字占位，请换成你的照片）
4. 改写 **`src/data/`** 与 **`intro.md`**（叶扉、青澜大学与示例论文均为虚构）
5. 推送 **`main`** → Actions 自动部署到 Pages

本地预览：

```bash
npm install
npm run dev    # http://localhost:4321
npm run build
```

## Google Scholar 引用数

示例默认**关闭**，页面不会请求任何人的 Scholar 数据。

打开后的数据流是：

1. Action 运行仓库里的 crawler  
2. 把 `gs_data.json` **推到独立分支** `google-scholar-stats`（force push；**不会改动 `main` 上的站点源码**）  
3. 浏览器从 jsDelivr 读该分支，在论文旁显示 citations  

开启步骤：

1. 在 Scholar 主页 URL 里找到 user id（`user=…`）
2. 仓库 **Settings → Secrets → Actions** 新增 `GOOGLE_SCHOLAR_ID`
3. 启用 **Actions**；工作流为 `.github/workflows/google_scholar_crawler.yaml`（每天 08:00 UTC，也可手动 `workflow_dispatch`）
4. 在 `src/config.ts` 设 `googleScholar.enabled = true`，`statsUrl` 指向：

```text
https://cdn.jsdelivr.net/gh/USER/REPO@google-scholar-stats/gs_data.json
```

5. 给论文加上 `paperId`（Scholar 的 `author_pub_id`）

字段示例与排错见 **[`docs/CONTENT.md`](docs/CONTENT.md)**。顶栏导航建议控制在约 5～6 项，窄屏更干净。

页脚默认保留「扉页」链回本仓库；不需要时设 `site.showTemplateCredit = false`。
