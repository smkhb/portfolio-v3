---
title: "Bem-vindo ao blog"
description: "Como este blog funciona e como publicar um post novo em trinta segundos."
pubDate: 2026-11-07
tags: ["meta"]
---

Este post é um exemplo. Você pode apagá-lo quando publicar o seu primeiro texto.

## Como publicar um post novo

Crie um arquivo `.md` em `src/content/posts/` com este cabeçalho:

```markdown
---
title: "Meu primeiro post"
description: "Uma frase que aparece na listagem."
pubDate: 2026-11-07
tags: ["geral"]
---
```

O nome do arquivo vira o endereço do post: `meu-post.md` vira `/blog/meu-post`. Abaixo do cabeçalho, escreva em Markdown normalmente. Para rascunhos, adicione `draft: true` no cabeçalho — o post fica de fora do site em produção.

## O que mais dá para usar

Listas, citações, imagens e links:

- item de lista
- outro item

> Citações ficam com um traço na lateral esquerda.

E trechos de código:

```ts
const saudacao = (nome: string) => `Olá, ${nome}!`;
```

Bom escrevendo!
