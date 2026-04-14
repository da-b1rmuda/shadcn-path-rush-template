# Quick Start

Ниже приведён минимальный путь от установки до рабочего экрана документации. Пример использует [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md) и [Documentation](./api/components/documentation.md).

## 1. Установите пакет

```bash
pnpm add @da_b1rmuda/dock-rush
```

## 2. Подключите plugin

```ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { dockRushScannerPlugin } from '@da_b1rmuda/dock-rush/plugin'

export default defineConfig({
  plugins: [react(), dockRushScannerPlugin()],
})
```

## 3. Создайте минимальную структуру docs

```text
public/docs/
  1.0.0/
    en/
      intro.md
```

`public/docs/1.0.0/en/intro.md`:

```md
# Introduction

Hello from Dock Rush.
```

## 4. Смонтируйте компонент

```tsx
import { Documentation } from '@da_b1rmuda/dock-rush/client'

export default function App() {
  return <Documentation folderPath='./public/docs' />
}
```

## 5. Проверьте результат

- Запустите Vite dev server.
- Откройте страницу с компонентом.
- Убедитесь, что появилась версия `1.0.0`.
- Выберите `intro.md` в sidebar и проверьте, что адрес страницы получил hash с путём markdown-файла.

