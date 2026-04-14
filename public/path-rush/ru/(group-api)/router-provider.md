---
title: RouterProvider
order: 2
searchable: true
tags:
  - api
---

# RouterProvider

`RouterProvider` поднимает контекст и загружает `virtual:routes` автоматически.

```tsx
<RouterProvider>
  <RouterRenderer />
</RouterProvider>
```

## Props

- `manifest?: RuntimeRoutesManifest` — ручной манифест (редкий кейс)
- `interceptLinks?: boolean` — перехват `<a>` (по умолчанию `true`)
- `children?: React.ReactNode`

## Примечания

- `interceptLinks` отключает полный перезагруз
- Используйте `RouterRoot` для минимального подключения
