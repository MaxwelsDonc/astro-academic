# 扉页

[English](./README.en.md) · **简体中文**

给学者的一页主页。姓名、介绍、动态、论文与经历，都在同一屏里读完——像一张会随窗口伸缩的扉页，而不是后台仪表盘。

衬线承载正文，等宽标注日期与结构；暖象牙纸色，无卡片、无阴影、无博客维护。你改配置与 JSON，GitHub Pages 负责发布。

<p align="center">
  <a href="https://zhouzenghui.site"><strong>查看示例 → zhouzenghui.site</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/MaxwelsDonc/feiye/generate"><strong>Use this template</strong></a>
</p>

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
| 单页结构 | About、News、Experience、Publications、Education 等章节可单独开关 |
| 流体排版 | 姓名、副标题与头像随视口一起缩放 |
| 章节导航 | 顶栏锚点高亮当前段落，点击即跳转 |
| **Google Scholar 自动更新** | GitHub Action 按日抓取引用数，论文旁展示最新 citations |
| 自托管字体 | Newsreader、Inter、JetBrains Mono（SIL OFL），构建结果不拉外链字体 |

## 开始

1. **[Use this template](https://github.com/MaxwelsDonc/feiye/generate)** → 新仓库命名为 `你的用户名.github.io`
2. 编辑 **`src/config.ts`**（姓名、`site.url`、邮箱）与 **`astro.config.mjs`** 中的 `site`（同一网址）
3. 替换 **`public/images/profile.jpg`**（仓库内为「扉」字占位，请换成你的照片）
4. 改写 **`src/data/`** 与 **`intro.md`**（叶扉、青澜大学与示例论文均为虚构）
5. 推送 **`main`** → Actions 自动部署

本地预览：

```bash
npm install
npm run dev    # http://localhost:4321
npm run build
```

## Google Scholar 引用数

示例站默认**关闭**，不会请求任何人的 Scholar 数据。打开后，引用数由仓库自带的 crawler + Action **每天自动更新**（也可手动触发）。

1. 在 Scholar 主页 URL 里找到 user id（`user=…`）
2. 仓库 **Settings → Secrets → Actions** 新增 `GOOGLE_SCHOLAR_ID`
3. 打开 **Actions**，启用 workflows；工作流 `.github/workflows/google_scholar_crawler.yaml` 会把 JSON 推到 `google-scholar-stats` 分支（每天 08:00 UTC，也可 `workflow_dispatch`）
4. 在 `src/config.ts` 设 `googleScholar.enabled = true`，并把 `statsUrl` 指到你的 jsDelivr 地址：

```text
https://cdn.jsdelivr.net/gh/USER/REPO@google-scholar-stats/gs_data.json
```

5. 给论文条目加上 `paperId`（Scholar 的 `author_pub_id`）

字段示例与排错见 **[`docs/CONTENT.md`](docs/CONTENT.md)**。

页脚默认保留指向本模板的「扉页」链接；不需要时在 `src/config.ts` 将 `site.showTemplateCredit` 设为 `false`。
