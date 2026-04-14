---
title: File-Based Routing
order: 0
searchable: true
tags:
  - routing
---

# File-Based Routing

Каждый `page.tsx` в `pagesDir` становится маршрутом. Иерархия папок формирует URL.

```
src/pages/
  page.tsx         → /
  about/page.tsx   → /about
```

Правила:

1. Только `page` создаёт маршрут
2. `layout` не создаёт маршрут, только оборачивает
3. `_` сегменты игнорируются
4. `(group)` не попадает в URL
