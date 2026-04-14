# PWAActions

Контракт действий PWA runtime.

## Definition

```ts
interface PWAActions {
  promptInstall: () => Promise<boolean>
  updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  dismissUpdate: () => void
  resetError: () => void
}
```

## Fields

| Поле | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `promptInstall` | `() => Promise<boolean>` | обязательное | нет | Пытается показать install prompt и возвращает `true`, если пользователь принял установку. |
| `updateServiceWorker` | `(reloadPage?: boolean) => Promise<void>` | обязательное | нет | Вызывает host-side update callback из `window.__PWA_RUSH_UPDATE_SW__`. |
| `dismissUpdate` | `() => void` | обязательное | нет | Сбрасывает `isOfflineReady` и `isUpdateAvailable`. |
| `resetError` | `() => void` | обязательное | нет | Сбрасывает `lastError` в `null`. |

## Notes

- `promptInstall` возвращает `false`, если install prompt недоступен или завершился ошибкой.
- `updateServiceWorker` может завершиться без эффекта, если update callback не был выставлен host-приложением.
- На ошибке `updateServiceWorker` записывает `lastError` и повторно выбрасывает нормализованную ошибку.

## See also

- [PWAState](./pwa-state.md)
- [PWAContextValue](./pwa-context-value.md)
- [usePWA](../hooks/use-pwa.md)
- [usePWAUpdate](../hooks/use-pwa-update.md)
