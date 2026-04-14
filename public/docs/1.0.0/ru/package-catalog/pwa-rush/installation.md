# Installation

## Prerequisites

- `react` версии `^18.0.0 || ^19.0.0`
- `react-dom` версии `^18.0.0 || ^19.0.0`
- браузерное окружение для runtime-части пакета
- host-side PWA wiring, если требуется install/update/offline-ready flow

## Установка

```bash
npm install @da_b1rmuda/pwa-rush
```

Если вы используете `pnpm`:

```bash
pnpm add @da_b1rmuda/pwa-rush
```

Для этого пакета подтверждённое имя импорта — `@da_b1rmuda/pwa-rush`.

> Важно: найденные в репозитории шаблон и CLI пока используют другое имя пакета. Для документации и ручной интеграции используйте именно `@da_b1rmuda/pwa-rush`.

## Минимальный импорт

```tsx
import { PWAProvider } from '@da_b1rmuda/pwa-rush'
```

## Минимальная проверка работоспособности

Ниже показана минимальная проверка, что пакет установлен, импортируется и [PWAProvider](./api/components/pwa-provider.md) корректно оборачивает приложение:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { PWAProvider } from '@da_b1rmuda/pwa-rush'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PWAProvider>
      <App />
    </PWAProvider>
  </React.StrictMode>,
)
```

Этот пример подтверждает базовый runtime mount. Для install/update/offline-ready поведения требуется отдельный host-side bridge, описанный в [configuration.md](./configuration.md) и [quick-start.md](./quick-start.md).
