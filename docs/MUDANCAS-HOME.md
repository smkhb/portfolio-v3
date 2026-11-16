# Mudanças: nova introdução e botão de contato na home

Registro das alterações na home em inglês (`/`) e em português (`/pt`). Commit: `fd2b7ad` (`feat(home): rewrite intro and add contact call-to-action`).

## Arquivos alterados

- `src/pages/index.astro` (EN)
- `src/pages/pt/index.astro` (PT)

Nenhum outro arquivo foi alterado.

## O que mudou

1. **Tagline do topo.** Trocada por uma frase que diz o que você faz: transformar ideias e problemas em soluções digitais.
   - EN: "Software developer. I turn ideas and problems into digital solutions, from the first line of code to deploy."
   - PT: "Desenvolvedor de software. Transformo ideias e problemas em soluções digitais, do primeiro código ao deploy."

2. **Bloco de introdução.** Antes, eram três parágrafos com "sobre mim" (ficção, filosofia, esportes e animes). Agora são dois parágrafos e um botão, em uma única seção.
   - Primeiro parágrafo: o objetivo, ajudar pessoas e negócios a criar produtos digitais e automatizar processos.
   - Segundo parágrafo: links para projetos, serviços e blog, dentro do texto.
   - O "sobre mim" foi removido nas duas línguas.

3. **Botão de contato.** Link para `/contact` (PT: `/pt/contact`), com o ícone 👷‍♂️.
   - EN: "Have an idea, a project or a problem to solve?"
   - PT: "Tem uma ideia, um projeto ou um problema para resolver?"
   - Ele fica alinhado à esquerda e tem a largura do próprio texto (`w-fit`). Antes ficava entre o título e o texto, o que parecia deslocado.

4. **Espaçamento.** O bloco de introdução usa `space-y-5`, o mesmo ritmo vertical nas duas línguas. Antes, a margem estava em partes diferentes do bloco e os textos ficavam colados.

## Decisões de texto

- A versão EN foi traduzida a partir da PT, com a mesma estrutura. A tradução é uma versão nova, não a original escrita em inglês.
- "Pra" foi trocado por "para" no botão PT.

## Verificações

- `pnpm build` concluiu com exit 0 e 17 páginas, depois de cada alteração.
- O HTML gerado contém o novo texto e o botão nas duas páginas.
- O texto antigo ("Nice to meet you", "Prazer, sou o Sam", "About me", "Sobre mim") não aparece no HTML gerado.

Não verificado: a aparência na tela. O preview foi bloqueado pelo gate de automação, então o espaçamento e o alinhamento do botão ainda precisam de conferência visual (`pnpm dev` e abrir `localhost:4321` e `localhost:4321/pt`).

## Como reverter

Para voltar ao texto anterior, use `git show 2f32002:src/pages/index.astro` e `git show 2f32002:src/pages/pt/index.astro` como referência, ou `git revert fd2b7ad`.
