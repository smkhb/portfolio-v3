# portfolio-v3

Personal portfolio. Astro + TypeScript + Tailwind, published as static files on Cloudflare Pages.

Fixed dark theme (`#141414`). Links keep the text color with a colored underline, randomly picked from green, pink, blue and yellow on each load and on each hover (same behavior as Cassidy's blahg, which served as inspiration). The profile picture spins like a 3D coin on hover and click.

## Commands

| Command | Action |
| --- | --- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Production build to `./dist/` |
| `pnpm preview` | Serve the build locally |

## What to edit where

| What | Where |
| --- | --- |
| Name, email, social links | `src/config/site.ts` |
| Home text (bio) | `src/pages/index.astro` |
| Services text | `src/pages/services.astro` |
| Tools on the Stack page | `src/pages/stack.astro` |
| Projects | `src/content/projects/*.md` |
| Blog posts | `src/content/posts/*.md` |
| Colors and fonts | `src/styles/global.css` (variables in `:root`) |

### Add a project

Create a file in `src/content/projects/`:

```markdown
---
title: "Project name"
description: "One sentence about what it is."
url: "https://project-address"       # optional
repo: "https://github.com/you/repo"  # optional
year: 2026
tags: ["web"]
featured: false
---

Free text about the project.
```

### Publish a post

Create a file in `src/content/posts/` with `title`, `description`, `pubDate` and `tags` in the header. The file name becomes the URL: `my-post.md` -> `/blog/my-post`. Use `draft: true` for drafts.

## Deploy on Cloudflare Pages (recommended)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages -> Create -> Pages -> Connect to Git**, and select the repository.
3. In the build settings:
   - Framework preset: **Astro**
   - Build command: `pnpm build`
   - Build output directory: `dist`
4. Under **Environment variables**, add `NODE_VERSION` with the value `22` (or higher).
5. Deploy. After that, every `git push` to the main branch publishes automatically.

To use your own domain: **Pages -> your project -> Custom domains** and follow the dashboard steps.

### Alternatives

- **GitHub Pages**: add the `@astrojs/github-actions` integration or a workflow that runs `pnpm build` and publishes `dist/` — see https://docs.astro.build/en/guides/deploy/github/
- **Netlify**: connect the repository; the Astro preset detects `pnpm build` and `dist` on its own.
- **Coolify**: create an app pointing at the repository, build command `pnpm build`, static folder `dist`.

## Structure

```
src/
  config/site.ts        identity and links
  content/posts/        blog posts (Markdown)
  content/projects/     projects (Markdown)
  layouts/Base.astro    header, footer, scripts
  lib/dates.ts          date formatting (en-US)
  pages/                one page per section
  styles/global.css     design tokens (colors, fonts, animation)
```
