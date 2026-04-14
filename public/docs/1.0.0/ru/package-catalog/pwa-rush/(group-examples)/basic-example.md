# Basic Example

Этот пример повторяет найденный в репозитории шаблон, но использует подтверждённое имя пакета `@da_b1rmuda/pwa-rush`.

## `src/main.tsx`

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { PWAProvider } from '@da_b1rmuda/pwa-rush'
import { registerSW } from 'virtual:pwa-register'
import PWAExample from './pwa/PWAExample'

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
  <PWAProvider config={{ updateBehavior: 'prompt' }}>
    <>
      <React.StrictMode>
        <App />
      </React.StrictMode>
      <PWAExample />
    </>
  </PWAProvider>,
)
```

## `src/pwa/PWAExample.tsx`

```tsx
import type { CSSProperties } from 'react'
import {
  InstallPWAButton,
  OfflineIndicator,
  PWAUpdatePrompt,
} from '@da_b1rmuda/pwa-rush'

const floatingCardStyle: CSSProperties = {
  alignItems: 'flex-start',
  backdropFilter: 'blur(18px)',
  background: 'rgba(255, 255, 255, 0.92)',
  border: '1px solid rgba(15, 23, 42, 0.12)',
  borderRadius: 18,
  bottom: 20,
  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.12)',
  display: 'grid',
  gap: 10,
  padding: '1rem',
  position: 'fixed',
  right: 20,
  zIndex: 998,
}

const eyebrowStyle: CSSProperties = {
  color: '#475569',
  fontSize: '0.8rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
}

export function PWAExample() {
  return (
    <>
      <OfflineIndicator />
      <PWAUpdatePrompt />
      <div style={floatingCardStyle}>
        <span style={eyebrowStyle}>PWA controls</span>
        <InstallPWAButton />
      </div>
    </>
  )
}

export default PWAExample
```

## Что демонстрирует пример

- [PWAProvider](../api/components/pwa-provider.md) подключён один раз в корне
- [OfflineIndicator](../api/components/offline-indicator.md) строится поверх [useOnlineStatus](../api/hooks/use-online-status.md)
- [PWAUpdatePrompt](../api/components/pwa-update-prompt.md) строится поверх [usePWAUpdate](../api/hooks/use-pwa-update.md)
- [InstallPWAButton](../api/components/install-pwa-button.md) строится поверх [useInstallPrompt](../api/hooks/use-install-prompt.md)

Если нужен пользовательский UI без встроенных компонентов, перейдите в [advanced-example.md](./advanced-example.md).
