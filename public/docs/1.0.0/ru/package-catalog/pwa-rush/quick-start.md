# Quick Start

Ниже приведён кратчайший подтверждённый путь интеграции. Он основан на найденном шаблоне Vite-приложения в репозитории, но использует реальное имя пакета `@da_b1rmuda/pwa-rush`.

## 1. Подключите `vite-plugin-pwa`

```ts
import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      injectRegister: null,
      workbox: {
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: false,
        navigateFallback: 'index.html',
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
})
```

## 2. Зарегистрируйте service worker и отправьте window events

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { registerSW } from 'virtual:pwa-register'
import {
  PWAProvider,
  InstallPWAButton,
  OfflineIndicator,
  PWAUpdatePrompt,
} from '@da_b1rmuda/pwa-rush'
import App from './App'

const updateSW = registerSW({
  immediate: true,
  onNeedRefresh() {
    window.dispatchEvent(new CustomEvent('__PWA_RUSH_UPDATE_AVAILABLE__'))
  },
  onOfflineReady() {
    window.dispatchEvent(new CustomEvent('__PWA_RUSH_OFFLINE_READY__'))
  },
  onRegisteredSW(_swUrl, registration) {
    window.dispatchEvent(new CustomEvent('__PWA_RUSH_REGISTERED__', { detail: registration ?? null }))
  },
  onRegisterError(error) {
    window.dispatchEvent(new CustomEvent('__PWA_RUSH_ERROR__', { detail: error }))
  },
})

Object.assign(window, { __PWA_RUSH_UPDATE_SW__: updateSW })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PWAProvider config={{ updateBehavior: 'prompt' }}>
      <App />
      <OfflineIndicator />
      <PWAUpdatePrompt />
      <InstallPWAButton />
    </PWAProvider>
  </React.StrictMode>,
)
```

## 3. Что получится

- [OfflineIndicator](./api/components/offline-indicator.md) покажет offline status.
- [PWAUpdatePrompt](./api/components/pwa-update-prompt.md) отреагирует на offline-ready и update-ready события.
- [InstallPWAButton](./api/components/install-pwa-button.md) станет активной только после `beforeinstallprompt`.

Если нужен более подробный разбор этого wiring, используйте [guides/basic-usage.md](./guides/basic-usage.md). Если нужен полный пример с вынесенным UI-компонентом, откройте [examples/basic-example.md](./examples/basic-example.md).
