# Basic Usage

Этот guide описывает подтверждённый рабочий сценарий подключения пакета к React-приложению.

## 1. Подготовьте host-side PWA wiring

Пакет ожидает, что приложение будет само регистрировать service worker и отправлять window events, перечисленные в [configuration.md](../configuration.md).

Подтверждённый в репозитории пример выглядит так:

```tsx
import { registerSW } from 'virtual:pwa-register'

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
```

Без этого bridge [usePWAUpdate](../api/hooks/use-pwa-update.md) и [PWAUpdatePrompt](../api/components/pwa-update-prompt.md) не смогут завершить update flow.

## 2. Оберните приложение в [PWAProvider](../api/components/pwa-provider.md)

```tsx
import { PWAProvider } from '@da_b1rmuda/pwa-rush'

export function Root() {
  return (
    <PWAProvider config={{ updateBehavior: 'prompt' }}>
      <App />
    </PWAProvider>
  )
}
```

Используйте [PWAProviderConfig](../api/types/pwa-provider-config.md), если нужно переключить режим update handling.

## 3. Добавьте готовые UI-компоненты или hook-и

Минимальный UI на встроенных компонентах:

```tsx
import {
  InstallPWAButton,
  OfflineIndicator,
  PWAUpdatePrompt,
} from '@da_b1rmuda/pwa-rush'

export function PWAChrome() {
  return (
    <>
      <OfflineIndicator />
      <PWAUpdatePrompt />
      <InstallPWAButton />
    </>
  )
}
```

Если готовый UI не подходит, используйте [useInstallPrompt](../api/hooks/use-install-prompt.md), [useOnlineStatus](../api/hooks/use-online-status.md), [usePWAUpdate](../api/hooks/use-pwa-update.md) или [usePWA](../api/hooks/use-pwa.md).

## 4. Что происходит внутри

- [PWAProvider](../api/components/pwa-provider.md) читает browser signals и window events.
- [useInstallPrompt](../api/hooks/use-install-prompt.md) отдаёт install state и действие `promptInstall`.
- [usePWAUpdate](../api/hooks/use-pwa-update.md) отдаёт update/offline-ready state и действие `updateServiceWorker`.
- [useOnlineStatus](../api/hooks/use-online-status.md) отдаёт только online status.
- [usePWA](../api/hooks/use-pwa.md) отдаёт полное значение [PWAContextValue](../api/types/pwa-context-value.md).

## 5. Когда выбирать `'prompt'`, а когда `'auto'`

- Используйте [PWAUpdateBehavior](../api/types/pwa-update-behavior.md) = `'prompt'`, если хотите управлять обновлением через [PWAUpdatePrompt](../api/components/pwa-update-prompt.md) или собственный UI.
- Используйте [PWAUpdateBehavior](../api/types/pwa-update-behavior.md) = `'auto'`, если приложение должно сразу применять update callback при сигнале `__PWA_RUSH_UPDATE_AVAILABLE__`.
