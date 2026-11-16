# Mudanças: suporte a inglês e português

Registro das alterações feitas para o visitante escolher entre inglês e português. Use este documento para revisitar o que mudou ou para orientar outro agente.

Decisão tomada: inglês fica na raiz (`/...`) e português em `/pt/...` (opção 1 das alternativas avaliadas). Não há redirecionamento automático pelo idioma do navegador.

## Arquivos novos

| Arquivo | Conteúdo |
| --- | --- |
| `src/i18n/ui.ts` | Textos fixos da interface nos objetos `en` e `pt` (skip link, cargo, "Feito com", troca de idioma, itens do menu). Helpers: `stripSlash`, `isPt`, `toPt` (vai para `/pt...`) e `counterpart` (calcula a URL do outro idioma). |
| `src/pages/pt/index.astro` | Home em português: bio, posts recentes de `blogPt`, projetos. |
| `src/pages/pt/projects.astro` | Página de projetos em português. |
| `src/pages/pt/services.astro` | Serviços em português, incluindo "Como começar". |
| `src/pages/pt/stack.astro` | Stack em português. Nomes das ferramentas mantidos. |
| `src/pages/pt/contact.astro` | Contato em português. Botão de copiar com rótulos em `data-copy` e `data-copied`. |
| `docs/DOCUMENTACAO.md` | Documentação geral do projeto. |
| `docs/MUDANCAS-IDIOMAS.md` | Este arquivo. |

## Arquivos alterados

- **`src/layouts/Base.astro`**
  - Importa `ui` e os helpers de `src/i18n/ui.ts`.
  - Novas props: `altHref` (URL da mesma página no outro idioma) e `alternates` sem valor padrão.
  - Calcula `pt`, `t`, `home`, `enPath` e `ptPath`.
  - O menu é gerado a partir do array `nav` com chaves de tradução. Os links em PT usam `toPt`.
  - `isCurrent` compara com a home do idioma atual.
  - Link "PT" / "EN" é o último item do `<nav>`.
  - Hreflang: se `alternates` for array, usa esse array; senão, emite en-US e pt-BR. Com `noindex`, não emite nada.
  - `aria-label` da marca usa `t.role`.
- **`src/components/ProjectCard.astro`**: nova prop `lang` (padrão `en`). O rótulo do link de código vira "código" em PT.
- **`src/pages/contact.astro`**: o botão de copiar lê os rótulos de `data-copy` e `data-copied`, para funcionar nos dois idiomas.
- **`src/pages/blog/[slug].astro`**: passa `altHref` apontando para `/pt/blog/<slug>/` se houver tradução, ou para `/pt/blog/` se não houver.
- **`src/pages/pt/blog/[slug].astro`**: passa `altHref` apontando para `/blog/<slug>/` ou `/blog/`.
- **`src/pages/404.astro`**: passa `altHref="/pt/"`. Continua `noindex`.
- **`astro.config.mjs`**: o objeto `pairs` ganhou os pares de páginas: `/` com `/pt/`, `/projects/`, `/services/`, `/stack/`, `/contact/` e `/blog/`, cada um com seu equivalente `/pt/...`. Os dois pares de posts continuam.

## Mudanças feitas pelo usuário depois da implementação

- Troca de textos do switch PT / EN.
- Alteração no nome do site (não documentada aqui, pois `src/config/site.ts` ainda mostra `Samuel Bernardo` no momento desta escrita; confira onde a mudança foi feita).
- Remoção do item "bio" do menu. Em `src/layouts/Base.astro` o array `nav` começa em `projects`, e em `src/i18n/ui.ts` a chave `bio` foi removida dos dois idiomas.

## Verificações feitas na implementação

- `pnpm build` concluiu com 17 páginas.
- `dist/index.html` contém `hreflang="pt-BR"` apontando para `https://samb.fyi/pt/`.
- `dist/pt/index.html` tem `lang="pt-BR"` e `hreflang="en-US"`.
- `dist/blog/data-mapper/index.html` aponta o link de troca para `/pt/blog/data-mapper/`.
- `dist/404.html` tem `noindex` e nenhum `<link rel="alternate">`.
- `dist/sitemap-0.xml` tem `xhtml:link` de alternates para `/projects/` e `/pt/projects/`.
- Nenhum link `projects</a>` em inglês dentro de `dist/pt`.
- O `aria-label` da marca em `dist/pt/index.html` mostra "Desenvolvedor de software".

Não verificado: abrir as páginas em navegador; o fallback de post sem tradução (todos os posts atuais têm versão PT); as mudanças manuais feitas pelo usuário depois do build.

## Pontos em aberto

- Títulos, descrições e tags dos projetos continuam em inglês nas páginas PT. Para traduzir, seria preciso um campo extra no schema de `projects`.
- Textos em português foram escritos a partir do inglês e precisam de revisão do autor.
- Nada foi commitado. Todas as mudanças estão no working tree.
