---
title: Быстрый старт
order: 1
searchable: true
tags:
  - quick-start
---

# Быстрый старт

## 1) Vite конфиг

```ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { createPathRush } from '@da_b1rmuda/path-rush'

export default defineConfig({
  plugins: [
    react(),
    ...createPathRush({
      pagesDir: 'src/pages',
      pagesImportBase: '/src/pages',
    }),
  ],
})
```

## 2) Страницы

```
src/pages/
  page.tsx
  about/page.tsx
```

## 3) Runtime

```tsx
import { RouterRoot } from '@da_b1rmuda/path-rush/react'

export function App() {
  return <RouterRoot />
}
```

## 4) Запуск

```bash
pnpm run dev
```
