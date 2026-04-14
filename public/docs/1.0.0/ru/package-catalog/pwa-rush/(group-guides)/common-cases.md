# Common Cases

## Кастомная install-кнопка через [useInstallPrompt](../api/hooks/use-install-prompt.md)

```tsx
import { useInstallPrompt } from '@da_b1rmuda/pwa-rush'

export function InstallBanner() {
  const { canInstall, isInstalled, lastError, promptInstall } = useInstallPrompt()

  if (isInstalled) {
    return <p>Приложение уже установлено.</p>
  }

  return (
    <div>
      <button disabled={!canInstall} onClick={() => void promptInstall()} type="button">
        Установить
      </button>
      {lastError ? <p>{lastError.message}</p> : null}
    </div>
  )
}
```

Этот сценарий полезен, если встроенный [InstallPWAButton](../api/components/install-pwa-button.md) не подходит по UI.

## Кастомный update UI через [usePWAUpdate](../api/hooks/use-pwa-update.md)

```tsx
import { usePWAUpdate } from '@da_b1rmuda/pwa-rush'

export function UpdateBanner() {
  const {
    dismissUpdate,
    isOfflineReady,
    isUpdateAvailable,
    isUpdating,
    lastError,
    updateServiceWorker,
  } = usePWAUpdate()

  if (!isOfflineReady && !isUpdateAvailable && !lastError) {
    return null
  }

  return (
    <section>
      {isOfflineReady ? <p>Офлайн-ресурсы готовы.</p> : null}
      {isUpdateAvailable ? (
        <button disabled={isUpdating} onClick={() => void updateServiceWorker(true)} type="button">
          {isUpdating ? 'Обновление...' : 'Применить обновление'}
        </button>
      ) : null}
      <button onClick={dismissUpdate} type="button">
        Скрыть
      </button>
      {lastError ? <p>{lastError.message}</p> : null}
    </section>
  )
}
```

Этот сценарий повторяет логику встроенного [PWAUpdatePrompt](../api/components/pwa-update-prompt.md), но не его разметку.

## Только online/offline состояние через [useOnlineStatus](../api/hooks/use-online-status.md)

```tsx
import { useOnlineStatus } from '@da_b1rmuda/pwa-rush'

export function NetworkBadge() {
  const isOnline = useOnlineStatus()

  return <span>{isOnline ? 'Online' : 'Offline'}</span>
}
```

Если нужен готовый фиксированный индикатор с default styles, используйте [OfflineIndicator](../api/components/offline-indicator.md).

## Полный state и actions через [usePWA](../api/hooks/use-pwa.md)

```tsx
import { usePWA } from '@da_b1rmuda/pwa-rush'

export function PWAStatePanel() {
  const {
    canInstall,
    isInstalled,
    isOfflineReady,
    isOnline,
    isSupported,
    isUpdateAvailable,
    lastError,
    promptInstall,
    registration,
    resetError,
    updateServiceWorker,
  } = usePWA()

  return (
    <pre>
      {JSON.stringify(
        {
          canInstall,
          hasRegistration: Boolean(registration),
          isInstalled,
          isOfflineReady,
          isOnline,
          isSupported,
          isUpdateAvailable,
          lastError: lastError?.message ?? null,
        },
        null,
        2,
      )}
      <button disabled={!canInstall} onClick={() => void promptInstall()} type="button">
        Install
      </button>
      <button onClick={() => void updateServiceWorker(false)} type="button">
        Update without reload flag
      </button>
      <button onClick={resetError} type="button">
        Reset error
      </button>
    </pre>
  )
}
```

Этот сценарий нужен, когда отдельные специализированные hook-и уже недостаточны.
