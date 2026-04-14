# Installation

## Prerequisites

По коду подтверждены следующие зависимости окружения:

- React
- ReactDOM
- Vite для сценария с [dockRushScannerPlugin](./api/functions/dock-rush-scanner-plugin.md)

`engines.node` в пакете не объявлен, поэтому минимальная версия Node.js в репозитории не подтверждена.

## Установка пакета

Используйте фактическое имя пакета из `plugin/package.json`:

```bash
npm install @da_b1rmuda/dock-rush
```

```bash
pnpm add @da_b1rmuda/dock-rush
```

```bash
yarn add @da_b1rmuda/dock-rush
```

## Подключение Vite plugin

```ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { dockRushScannerPlugin } from '@da_b1rmuda/dock-rush/plugin'

export default defineConfig({
  plugins: [
    react(),
    dockRushScannerPlugin(),
  ],
})
```

## Импорт компонента

Компонент [Documentation](./api/components/documentation.md) можно импортировать либо из корневого entry point, либо из `./client`:

```tsx
import { Documentation } from '@da_b1rmuda/dock-rush'
```

```tsx
import { Documentation } from '@da_b1rmuda/dock-rush/client'
```

## Stylesheet

Пакет экспортирует `@da_b1rmuda/dock-rush/style.css`, но Vite plugin также выполняет автоинъекцию stylesheet в своём transform pipeline. В `template/src/App.tsx` явный CSS import не используется.

## Минимальная проверка работоспособности

1. Создайте папку документации, например `public/docs/1.0.0/en/`.
2. Добавьте хотя бы один markdown-файл, например `public/docs/1.0.0/en/intro.md`.
3. Смонтируйте [Documentation](./api/components/documentation.md) с корректным `folderPath`.
4. Запустите Vite dev server.
5. Убедитесь, что sidebar показывает версию и страницу.

