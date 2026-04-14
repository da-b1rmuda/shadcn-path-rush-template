---
title: Сегменты маршрутов
order: 1
searchable: true
tags:
  - segments
---

# Сегменты маршрутов

Поддерживаемые типы:

| Тип | Пример | URL |
| --- | --- | --- |
| Static | `about` | `/about` |
| Param | `[id]` | `/posts/:id` |
| Optional | `[[slug]]` | `/docs` или `/docs/:slug` |
| Catch‑all | `[...rest]` | `/docs/*` |

## Параметры

Параметры доступны в странице и loader:

```tsx
export default function Page({ params }) {
  return <div>{params.id}</div>
}
```

## Optional сегменты

Optional сегменты совпадают и при наличии, и при отсутствии сегмента. Используйте аккуратно, чтобы избежать неоднозначных маршрутов.

## Catch‑all

Catch‑all собирает остаток пути в одну строку через `/`.
