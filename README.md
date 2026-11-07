# portfolio-v3

Portfólio pessoal de Samuel Bernardo. Astro + TypeScript + Tailwind, publicado como arquivos estáticos no Cloudflare Pages.

Tema escuro (`#141414`) fixo. Os links ficam na cor do texto com sublinhado colorido, sorteado entre verde, rosa, azul e amarelo a cada carregamento e a cada hover (mesmo comportamento do blahg do Cassidy, que serviu de inspiração). A foto de perfil gira como uma moeda em 3D no hover e no clique.

## Comandos

| Comando | Ação |
| --- | --- |
| `pnpm install` | Instalar dependências |
| `pnpm dev` | Servidor de desenvolvimento em `localhost:4321` |
| `pnpm build` | Build de produção em `./dist/` |
| `pnpm preview` | Servir o build localmente |

## Onde editar o quê

| O que | Onde |
| --- | --- |
| Nome, e-mail, redes sociais | `src/config/site.ts` |
| Textos da home (bio) | `src/pages/index.astro` |
| Textos dos serviços | `src/pages/servicos.astro` |
| Ferramentas da página Stack | `src/pages/stack.astro` |
| Projetos | `src/content/projetos/*.md` |
| Posts do blog | `src/content/posts/*.md` |
| Cores e fontes | `src/styles/global.css` (variáveis em `:root` e `[data-theme='light']`) |

### Adicionar um projeto

Crie um arquivo em `src/content/projetos/`:

```markdown
---
title: "Nome do projeto"
description: "Uma frase sobre o que é."
url: "https://endereco-do-projeto"   # opcional
repo: "https://github.com/voce/repo" # opcional
year: 2026
tags: ["web"]
featured: false
---

Texto livre sobre o projeto (aparece se você quiser usar depois).
```

### Publicar um post

Crie um arquivo em `src/content/posts/` com `title`, `description`, `pubDate` e `tags` no cabeçalho. O nome do arquivo vira o endereço: `meu-post.md` → `/blog/meu-post`. Use `draft: true` para rascunhos.

## Deploy no Cloudflare Pages (recomendado)

1. Faça push deste repositório para o GitHub.
2. No painel do Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**, e selecione o repositório.
3. Na configuração de build:
   - Framework preset: **Astro**
   - Build command: `pnpm build`
   - Build output directory: `dist`
4. Em **Environment variables**, adicione `NODE_VERSION` com o valor `22` (ou superior).
5. Deploy. Depois disso, todo `git push` na branch principal publica automaticamente.

Para usar seu domínio próprio: **Pages → seu projeto → Custom domains** e siga o passo a passo do painel (o DNS já está no Cloudflare, então a verificação é imediata).

### Alternativas

- **GitHub Pages**: adicione a integration `@astrojs/github-actions` ou um workflow que rode `pnpm build` e publique `dist/` — instrução em https://docs.astro.build/en/guides/deploy/github/
- **Netlify**: conecte o repositório; preset Astro detecta `pnpm build` e `dist` sozinho.
- **Coolify**: crie um app apontando para o repositório, build command `pnpm build`, pasta estática `dist`.

## Estrutura

```
src/
  config/site.ts        identidade e links
  content/posts/        posts do blog (Markdown)
  content/projetos/     projetos (Markdown)
  layouts/Base.astro    cabeçalho, rodapé, tema claro/escuro
  lib/datas.ts          formatação de datas em pt-BR
  pages/                uma página por seção
  styles/global.css     tokens de design (cores, fontes, animação)
```
