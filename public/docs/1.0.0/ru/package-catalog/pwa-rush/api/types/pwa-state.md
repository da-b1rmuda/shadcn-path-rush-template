# PWAState

Полное состояние PWA runtime.

## Definition

```ts
interface PWAState {
  isSupported: boolean
  isOnline: boolean
  isInstalled: boolean
  canInstall: boolean
  isOfflineReady: boolean
  isUpdateAvailable: boolean
  isUpdating: boolean
  registration: ServiceWorkerRegistration | null
  lastError: Error | null
}
```

## Fields

| Поле | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `isSupported` | `boolean` | обязательное | зависит от среды | `true`, если в `navigator` доступен `serviceWorker`; при отсутствии DOM инициализируется как `false`. |
| `isOnline` | `boolean` | обязательное | зависит от среды | Инициализируется из `navigator.onLine`, затем меняется событиями `online` и `offline`. |
| `isInstalled` | `boolean` | обязательное | зависит от среды | Определяется по `display-mode: standalone`, `navigator.standalone`, событию `appinstalled` и изменениям display mode. |
| `canInstall` | `boolean` | обязательное | `false` | Становится `true` после `beforeinstallprompt`, сбрасывается после принятой установки или `appinstalled`. |
| `isOfflineReady` | `boolean` | обязательное | `false` | Становится `true` после `__PWA_RUSH_OFFLINE_READY__`. |
| `isUpdateAvailable` | `boolean` | обязательное | `false` | Становится `true` после `__PWA_RUSH_UPDATE_AVAILABLE__`. |
| `isUpdating` | `boolean` | обязательное | `false` | `true` во время выполнения `updateServiceWorker`. |
| `registration` | `ServiceWorkerRegistration \| null` | обязательное | `null` | Последняя registration из `__PWA_RUSH_REGISTERED__`. |
| `lastError` | `Error \| null` | обязательное | `null` | Последняя нормализованная ошибка install/update/runtime flow. |

## Notes

- Это только состояние. Методы находятся в [PWAActions](./pwa-actions.md).
- Полное значение context описано типом [PWAContextValue](./pwa-context-value.md).

## See also

- [PWAActions](./pwa-actions.md)
- [PWAContextValue](./pwa-context-value.md)
- [usePWA](../hooks/use-pwa.md)
