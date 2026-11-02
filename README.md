# 扉页

[English](./README.en.md) · **简体中文**

给学者的一页主页。姓名、介绍、动态、论文与经历，都在同一屏里读完——像一张会随窗口伸缩的扉页，而不是后台仪表盘。

衬线承载正文，等宽标注日期与结构；暖象牙纸色，无卡片、无阴影、无博客维护。你改配置与 JSON，GitHub Pages 负责发布。

<p align="center">
  <a href="https://zhouzenghui.site"><strong>查看示例 → zhouzenghui.site</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/MaxwelsDonc/astro-academic/generate"><strong>Use this template</strong></a>
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
| 自托管字体 | Newsreader、Inter、JetBrains Mono（SIL OFL），构建结果不拉外链字体 |
| 引用数（可选） | 默认关闭；示例站不请求任何 Scholar 数据 |

## 开始

1. **[Use this template](https://github.com/MaxwelsDonc/astro-academic/generate)** → 新仓库命名为 `你的用户名.github.io`
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

论文字段、新闻格式、Google Scholar、自定义域名等细节见 **[`docs/CONTENT.md`](docs/CONTENT.md)**。

页脚默认保留指向本模板的「扉页」链接；不需要时在 `src/config.ts` 将 `site.showTemplateCredit` 设为 `false`。
