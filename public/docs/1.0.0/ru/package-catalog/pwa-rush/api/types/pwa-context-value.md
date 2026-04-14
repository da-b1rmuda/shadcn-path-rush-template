# PWAContextValue

Полное значение React context, публикуемое [PWAProvider](../components/pwa-provider.md).

## Definition

```ts
type PWAContextValue = PWAState & PWAActions
```

## Fields

| Поле | Тип | Описание |
| --- | --- | --- |
| `isSupported` | `boolean` | Поле состояния из [PWAState](./pwa-state.md). |
| `isOnline` | `boolean` | Поле состояния из [PWAState](./pwa-state.md). |
| `isInstalled` | `boolean` | Поле состояния из [PWAState](./pwa-state.md). |
| `canInstall` | `boolean` | Поле состояния из [PWAState](./pwa-state.md). |
| `isOfflineReady` | `boolean` | Поле состояния из [PWAState](./pwa-state.md). |
| `isUpdateAvailable` | `boolean` | Поле состояния из [PWAState](./pwa-state.md). |
| `isUpdating` | `boolean` | Поле состояния из [PWAState](./pwa-state.md). |
| `registration` | `ServiceWorkerRegistration \| null` | Поле состояния из [PWAState](./pwa-state.md). |
| `lastError` | `Error \| null` | Поле состояния из [PWAState](./pwa-state.md). |
| `promptInstall` | `() => Promise<boolean>` | Действие из [PWAActions](./pwa-actions.md). |
| `updateServiceWorker` | `(reloadPage?: boolean) => Promise<void>` | Действие из [PWAActions](./pwa-actions.md). |
| `dismissUpdate` | `() => void` | Действие из [PWAActions](./pwa-actions.md). |
| `resetError` | `() => void` | Действие из [PWAActions](./pwa-actions.md). |

## Notes

- Это самый полный публичный runtime contract пакета.
- Именно этот тип возвращает [usePWA](../hooks/use-pwa.md).

## See also

- [PWAState](./pwa-state.md)
- [PWAActions](./pwa-actions.md)
- [usePWA](../hooks/use-pwa.md)
