# Advanced Example

Этот пример показывает пользовательский UI только на hook-ах. Он не добавляет новые API и опирается только на подтверждённые export-ы пакета.

## `src/pwa/PWADashboard.tsx`

```tsx
import {
  useInstallPrompt,
  useOnlineStatus,
  usePWA,
  usePWAUpdate,
} from '@da_b1rmuda/pwa-rush'

export function PWADashboard() {
  const isOnline = useOnlineStatus()
  const { canInstall, isInstalled, lastError: installError, promptInstall } = useInstallPrompt()
  const {
    dismissUpdate,
    isOfflineReady,
    isUpdateAvailable,
    isUpdating,
    lastError: updateError,
    registration,
    updateServiceWorker,
  } = usePWAUpdate()
  const { isSupported, resetError } = usePWA()

  return (
    <section style={{ display: 'grid', gap: 12 }}>
      <h2>PWA status</h2>
      <ul>
        <li>Supported: {String(isSupported)}</li>
        <li>Online: {String(isOnline)}</li>
        <li>Installed: {String(isInstalled)}</li>
        <li>Can install: {String(canInstall)}</li>
        <li>Offline ready: {String(isOfflineReady)}</li>
        <li>Update available: {String(isUpdateAvailable)}</li>
        <li>Has registration: {String(Boolean(registration))}</li>
      </ul>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button disabled={!canInstall || isInstalled} onClick={() => void promptInstall()} type="button">
          Install app
        </button>
        <button disabled={!isUpdateAvailable || isUpdating} onClick={() => void updateServiceWorker(true)} type="button">
          {isUpdating ? 'Updating...' : 'Apply update'}
        </button>
        <button onClick={dismissUpdate} type="button">
          Dismiss status
        </button>
        <button onClick={resetError} type="button">
          Reset error
        </button>
      </div>

      {installError ? <p>Install error: {installError.message}</p> : null}
      {updateError ? <p>Update error: {updateError.message}</p> : null}
    </section>
  )
}
```

## Когда использовать такой подход

- когда встроенные [OfflineIndicator](../api/components/offline-indicator.md), [InstallPWAButton](../api/components/install-pwa-button.md) и [PWAUpdatePrompt](../api/components/pwa-update-prompt.md) не подходят по дизайну
- когда нужен доступ к полному [PWAContextValue](../api/types/pwa-context-value.md) через [usePWA](../api/hooks/use-pwa.md)
- когда важно объединить install/update/network state в одну панель

## Связанные материалы

- Reference для hook-ов: [api/index.md](../api/index.md)
- Пошаговое подключение: [guides/basic-usage.md](../guides/basic-usage.md)
