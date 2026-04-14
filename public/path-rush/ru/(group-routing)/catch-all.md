---
title: Catch‑all маршруты
order: 1
searchable: true
tags:
  - catch-all
---

# Catch‑all маршруты

`[...rest]` должен быть последним сегментом:

```
/docs/[...rest]/page.tsx
```

Корневой catch‑all (`/[...all]`) используется как глобальный 404, если нет `not-found.tsx`.
