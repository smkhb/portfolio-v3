# Documentação — Portfolio v3

Site pessoal de Samuel Bernardo (https://samb.fyi): estático, tema escuro, feito com Astro 7, TypeScript e Tailwind CSS 4. Idiomas: inglês (padrão, na raiz) e português (em `/pt`).

## Requisitos e comandos

- Node >= 22.23.4 e pnpm.

| Comando | Ação |
| --- | --- |
| `pnpm install` | Instala dependências |
| `pnpm dev` | Servidor de desenvolvimento em `localhost:4321` |
| `pnpm build` | Gera o site estático em `./dist/` |
| `pnpm preview` | Serve o build localmente |

## Estrutura

```
src/
  config/site.ts         nome, título, e-mail e redes sociais
  content.config.ts      coleções (blog, blogPt, projects) e schemas
  content/posts/en|pt/   posts em Markdown
  content/projects/      projetos em Markdown
  components/            ProjectCard.astro
  i18n/ui.ts             textos da interface (en/pt) e helpers de rota
  layouts/Base.astro     header, nav, troca de idioma, footer, SEO
  lib/dates.ts           formatação de datas (en-US / pt-BR)
  pages/                 páginas em inglês (raiz)
  pages/pt/              páginas em português (/pt/...)
  pages/pt/blog/         índice e posts do blog em português
  styles/global.css      tokens de design (cores, fonte, animações)
docs/                    documentação do projeto
public/                  profile.jpeg, robots.txt
astro.config.mjs         site, sitemap e pares de hreflang
wrangler.jsonc           deploy no Cloudflare (assets estáticos)
```

## Idiomas

- Inglês fica nas URLs da raiz: `/`, `/projects`, `/services`, `/stack`, `/contact`, `/blog`, `/blog/<slug>`.
- Português fica em `/pt`: `/pt`, `/pt/projects`, `/pt/services`, `/pt/stack`, `/pt/contact`, `/pt/blog`, `/pt/blog/<slug>`.
- O botão "PT" / "EN" no header leva à mesma página no outro idioma. Em posts sem tradução, leva ao índice do blog do outro idioma.
- Os textos fixos da interface (nav, skip link, cargo no header, "Feito com" no rodapé) ficam em `src/i18n/ui.ts`, nos objetos `en` e `pt`.
- Os itens do menu estão em `Base.astro` (array `nav`), com a chave de tradução em `ui.ts`. Para remover um item do menu, tire-o desse array.
- Cada página tem `lang` no `<html>` (`en` ou `pt-BR`) e o layout monta os `hreflang` (en-US, pt-BR e x-default, que aponta para a versão em inglês).

### Traduzir uma página nova

1. Crie a versão em inglês em `src/pages/`.
2. Crie a versão em português com o mesmo nome em `src/pages/pt/`, com `<Base lang="pt-BR">`.
3. Adicione o par de URLs no objeto `pairs` de `astro.config.mjs`, com barra final, para o sitemap gerar o `hreflang`.
4. Se a página tiver link de troca próprio, passe `altHref` para o `Base`.

## Onde editar

| O quê | Onde |
| --- | --- |
| Nome, e-mail, redes | `src/config/site.ts` |
| Itens e rótulos do menu | `src/layouts/Base.astro` (array `nav`) e `src/i18n/ui.ts` |
| Textos fixos da interface | `src/i18n/ui.ts` |
| Bio da home | `src/pages/index.astro` (EN) e `src/pages/pt/index.astro` (PT) |
| Botão de contato da home | `src/pages/index.astro` (EN) e `src/pages/pt/index.astro` (PT), dentro da seção de introdução |
| Serviços | `src/pages/services.astro` e `src/pages/pt/services.astro` |
| Ferramentas (Stack) | `src/pages/stack.astro` e `src/pages/pt/stack.astro` |
| Cores e fonte | `src/styles/global.css` (variáveis em `:root`) |

## Conteúdo

### Post

Crie `src/content/posts/en/meu-post.md` (o nome do arquivo vira a URL `/blog/meu-post`):

```markdown
---
title: "Título"
description: "Resumo curto."
pubDate: 2026-11-16
tags: ["tag"]
draft: false   # opcional; true esconde o post
---
```

### Versão em português

Crie um arquivo com o **mesmo nome** em `src/content/posts/pt/`. O idioma vem da pasta. Os dois posts passam a mostrar um link de troca de idioma. Posts PT só aparecem em `/pt/blog`, e EN só em `/blog`.

Ao criar um par EN/PT, adicione também a dupla de URLs no objeto `pairs` de `astro.config.mjs`, para o sitemap gerar o `hreflang` correto.

### Projeto

Crie `src/content/projects/nome.md` com `title`, `description`, `year` (obrigatórios) e opcionais `url`, `repo`, `tags`, `featured`. As URLs são validadas como `z.url()`.

Título, descrição e tags dos projetos vêm da coleção compartilhada, então aparecem em inglês também na página `/pt/projects`.

## SEO

- `site` definido em `astro.config.mjs`; sitemap via `@astrojs/sitemap`, com `xhtml:link` de alternates a partir do objeto `pairs`.
- `Base.astro` cuida de canonical, hreflang, Open Graph e Twitter cards. Páginas sem par explícito recebem hreflang en-US, pt-BR e x-default automaticamente.
- A 404 usa `noindex` e não emite hreflang.
- `public/robots.txt` libera a indexação.

## Deploy

O build é 100% estático (`dist/`). O `wrangler.jsonc` publica `./dist` como Workers static assets, com `404-page` para rotas inexistentes. Alternativamente, Cloudflare Pages com `pnpm build`, saída `dist` e `NODE_VERSION=22`.

## Observações

- O `README.md` (em inglês) cita Cloudflare Pages, mas o `wrangler.jsonc` usa Workers static assets.
- Os posts em `pt/` têm um campo `lang: pt` no frontmatter que não existe no schema; ele é ignorado.
- A descrição dos cards de projeto e a bio em português são textos próprios; não há tradução automática.
