# Configuration

## Публичная конфигурация

Единственный подтверждённый runtime config пакета описан типом [PWAProviderConfig](./api/types/pwa-provider-config.md) и передаётся в [PWAProvider](./api/components/pwa-provider.md).

```ts
interface PWAProviderConfig {
  updateBehavior?: 'prompt' | 'auto'
}
```

### Параметры

| Параметр | Тип | Обязательность | Подтверждённое поведение |
| --- | --- | --- | --- |
| `updateBehavior` | [PWAUpdateBehavior](./api/types/pwa-update-behavior.md) | необязательный | Управляет тем, будет ли update event только выставлять состояние для UI (`'prompt'`) или сразу вызывать update callback (`'auto'`). |

### Поведение при отсутствии `updateBehavior`

В коде нет явного default value в типе [PWAProviderConfig](./api/types/pwa-provider-config.md), но по реализации [PWAProvider](./api/components/pwa-provider.md) и внутреннего controller пакет без `updateBehavior`:

- не инициирует auto-update при событии `__PWA_RUSH_UPDATE_AVAILABLE__`
- вызывает update callback с `reloadPage = false`, если [usePWA](./api/hooks/use-pwa.md) или [usePWAUpdate](./api/hooks/use-pwa-update.md) вызывают `updateServiceWorker()` без аргумента

## Обязательный host-side контракт

Пакет ожидает, что host-приложение отправит следующие сигналы в `window`:

| Сигнал | Тип данных | Для чего используется |
| --- | --- | --- |
| `__PWA_RUSH_REGISTERED__` | `CustomEvent<ServiceWorkerRegistration | null>` | Заполняет `registration` в [PWAState](./api/types/pwa-state.md). |
| `__PWA_RUSH_OFFLINE_READY__` | `CustomEvent<void>` | Переводит `isOfflineReady` в `true`. |
| `__PWA_RUSH_UPDATE_AVAILABLE__` | `CustomEvent<void>` | Переводит `isUpdateAvailable` в `true`, а в режиме `'auto'` сразу запускает update. |
| `__PWA_RUSH_ERROR__` | `CustomEvent<unknown>` | Нормализует ошибку и записывает её в `lastError`. |
| `window.__PWA_RUSH_UPDATE_SW__` | `(reloadPage?: boolean) => Promise<void> | void` | Используется действием `updateServiceWorker`. |

Эти значения не экспортируются из публичного API, но они подтверждённо нужны для ручной интеграции.

## Подтверждённый Vite-oriented wiring

Единственный найденный в репозитории end-to-end wiring использует `registerSW` из `virtual:pwa-register`. Суть wiring:

1. `registerSW(...)` создаёт update callback.
2. callbacks `onNeedRefresh`, `onOfflineReady`, `onRegisteredSW`, `onRegisterError` преобразуются в перечисленные выше `window`-события.
3. update callback сохраняется в `window.__PWA_RUSH_UPDATE_SW__`.
4. React-дерево оборачивается в [PWAProvider](./api/components/pwa-provider.md).

Полный пример см. в [quick-start.md](./quick-start.md) и [examples/basic-example.md](./examples/basic-example.md).

## Ограничения конфигурации

- [PWAProvider](./api/components/pwa-provider.md) создаёт controller только на первом рендере, поэтому изменение `config` после mount не приводит к переинициализации runtime.
- Для install flow одного `serviceWorker` недостаточно: требуется событие `beforeinstallprompt`, иначе [useInstallPrompt](./api/hooks/use-install-prompt.md) и [InstallPWAButton](./api/components/install-pwa-button.md) останутся в состоянии `canInstall = false`.
- Если host-приложение не выставит `window.__PWA_RUSH_UPDATE_SW__`, update action завершится без ошибки и без эффекта.
