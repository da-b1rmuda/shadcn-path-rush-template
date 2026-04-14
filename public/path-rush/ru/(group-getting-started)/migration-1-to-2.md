---
title: Миграция на 2.0
order: 3
searchable: true
tags:
  - migration
---

# Миграция на 2.0

## 1) Имя пакета

```bash
pnpm remove ultra-router
pnpm add @da_b1rmuda/path-rush
```

## 2) Vite плагин

```ts
import { createPathRush } from '@da_b1rmuda/path-rush'
```

## 3) Runtime

```tsx
import { RouterRoot } from '@da_b1rmuda/path-rush/react'
```

`RouterProvider` больше не требует `manifest`.

## 4) basePath

`basePath` стал строгим: вне префикса всегда 404.

## 5) Новые опции

- `pageFileName`
- `layoutFileName`
- `generateTypes`

## 6) Экспорт страницы

`page.tsx` может быть `default` или `export const page`.
