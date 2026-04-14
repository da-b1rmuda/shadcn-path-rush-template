# Basic Example

Минимальный подтверждённый пример с [dockRushScannerPlugin](../api/functions/dock-rush-scanner-plugin.md) и [Documentation](../api/components/documentation.md).

## `vite.config.ts`

```ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { dockRushScannerPlugin } from '@da_b1rmuda/dock-rush/plugin'

export default defineConfig({
  plugins: [react(), dockRushScannerPlugin()],
})
```

## `src/App.tsx`

```tsx
import { Documentation } from '@da_b1rmuda/dock-rush/client'

export default function App() {
  return <Documentation folderPath='./public/docs' />
}
```

## Структура файлов

```text
public/docs/
  1.0.0/
    en/
      intro.md
```

## `public/docs/1.0.0/en/intro.md`

```md
# Introduction

Basic example page.
```

## Что подтверждает этот пример

- базовый import клиентского entry point;
- обязательность Vite plugin для scan/markdown endpoint'ов;
- минимально допустимую структуру docs с версией и языком.

