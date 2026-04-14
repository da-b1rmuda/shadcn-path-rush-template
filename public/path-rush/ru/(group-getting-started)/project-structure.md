---
title: Структура проекта
order: 2
searchable: true
tags:
  - structure
---

# Структура проекта

Path Rush строит маршруты из `pagesDir`.

```
src/pages/
  page.tsx                 → /
  about/page.tsx           → /about
  blog/[slug]/page.tsx     → /blog/:slug
  docs/[...all]/page.tsx   → /docs/*
  layout.tsx               → глобальный layout
  loading.tsx              → глобальный loading
```

## Правила

- `page.tsx` создаёт маршрут
- `layout.tsx` оборачивает страницы в директории
- Папки и файлы с `_` игнорируются
- Группы `(group)` не попадают в URL
