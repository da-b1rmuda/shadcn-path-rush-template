# usePWAUpdate

Hook для update/offline-ready состояния и связанных действий.

## Назначение

[usePWAUpdate](./use-pwa-update.md) берёт данные из [usePWA](./use-pwa.md) и возвращает только update-related subset состояния и actions.

## Signature

```ts
function usePWAUpdate(): {
  dismissUpdate: () => void
  isOfflineReady: boolean
  isUpdateAvailable: boolean
  isUpdating: boolean
  lastError: Error | null
  registration: ServiceWorkerRegistration | null
  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
}
```

## Parameters

У hook-а нет параметров.

## Returns

| Поле | Тип | Описание |
| --- | --- | --- |
| `dismissUpdate` | `() => void` | Сбрасывает `isOfflineReady` и `isUpdateAvailable`. |
| `isOfflineReady` | `boolean` | Показывает, был ли получен offline-ready сигнал. |
| `isUpdateAvailable` | `boolean` | Показывает, был ли получен update-ready сигнал. |
| `isUpdating` | `boolean` | Показывает, выполняется ли update callback в данный момент. |
| `lastError` | `Error \| null` | Последняя зафиксированная ошибка update/runtime flow. |
| `registration` | `ServiceWorkerRegistration \| null` | Последняя переданная registration из host-side bridge. |
| `updateServiceWorker` | `(reloadPage?: boolean) => Promise<void>` | Вызывает update callback, если он был сохранён в `window.__PWA_RUSH_UPDATE_SW__`. |

## Throws

[usePWAUpdate](./use-pwa-update.md) зависит от [usePWA](./use-pwa.md) и потому требует [PWAProvider](../components/pwa-provider.md) выше по дереву.

## Usage Notes

- Если update callback отсутствует в `window.__PWA_RUSH_UPDATE_SW__`, `updateServiceWorker` завершится без эффекта.
- В режиме [PWAUpdateBehavior](../types/pwa-update-behavior.md) = `'auto'` runtime сам вызывает `updateServiceWorker(true)` при update-ready событии.

## Example

```tsx
import { usePWAUpdate } from '@da_b1rmuda/pwa-rush'

export function UpdateBanner() {
  const { isUpdateAvailable, isUpdating, updateServiceWorker } = usePWAUpdate()

  if (!isUpdateAvailable) {
    return null
  }

  return (
    <button disabled={isUpdating} onClick={() => void updateServiceWorker(true)} type="button">
      {isUpdating ? 'Updating...' : 'Apply update'}
    </button>
  )
}
```

## See also

- [PWAUpdatePrompt](../components/pwa-update-prompt.md)
- [PWAUpdateBehavior](../types/pwa-update-behavior.md)
- [PWAActions](../types/pwa-actions.md)
