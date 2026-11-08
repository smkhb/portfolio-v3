---
title: "Welcome to the blog"
description: "How this blog works and how to publish a new post in thirty seconds."
pubDate: 2026-11-07
tags: ["meta"]
---

This post is an example. You can delete it once you publish your first piece.

## How to publish a new post

Create a `.md` file in `src/content/posts/` with this header:

```markdown
---
title: "My first post"
description: "A sentence that shows up in the list."
pubDate: 2026-11-07
tags: ["general"]
---
```

The file name becomes the post URL: `my-post.md` becomes `/blog/my-post`. Below the header, write in regular Markdown. For drafts, add `draft: true` to the header — the post stays out of the production site.

## What else you can use

Lists, quotes, images and links:

- list item
- another item

> Quotes get a bar on the left side.

And code snippets:

```ts
const greeting = (name: string) => `Hello, ${name}!`;
```

Happy writing!
