---
title: Base Path
order: 3
searchable: true
tags:
  - basePath
---

# Base Path

`basePath` ограничивает роутинг префиксом. При `basePath: '/admin'` все пути вне `/admin/*` будут 404.

## Пример

```ts
createPathRush({
  basePath: '/admin',
  pagesDir: 'src/pages',
  pagesImportBase: '/src/pages',
})
```

- `/admin/about` → совпадает с `/about`
- `/about` → 404

`Link` автоматически добавляет префикс.
