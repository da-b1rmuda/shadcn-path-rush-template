# Overview

## Назначение пакета

`@da_b1rmuda/pwa-rush` решает одну конкретную задачу: собрать PWA-состояние браузера и host-интеграции в React context и отдать его через [PWAProvider](./api/components/pwa-provider.md), [usePWA](./api/hooks/use-pwa.md), специализированные hook-и и готовые UI-компоненты.

Пакет подтверждённо покрывает:

- online/offline состояние
- install prompt состояние
- состояние offline-ready и update-availability
- вызов service worker update callback
- небольшой готовый UI поверх этих состояний

## Что пакет не делает

По найденному коду пакет не:

- регистрирует service worker сам
- не создаёт manifest
- не экспортирует Vite plugin config
- не экспортирует event constants как публичный API

Эти обязанности остаются на стороне host-приложения. Подробности перечислены в [configuration.md](./configuration.md).

## Публичная точка входа

Пакет имеет одну публичную точку входа: корневой export `"."` из `package.json`.

Из него экспортируются только:

- компоненты: [PWAProvider](./api/components/pwa-provider.md), [OfflineIndicator](./api/components/offline-indicator.md), [InstallPWAButton](./api/components/install-pwa-button.md), [PWAUpdatePrompt](./api/components/pwa-update-prompt.md)
- hook-и: [usePWA](./api/hooks/use-pwa.md), [useInstallPrompt](./api/hooks/use-install-prompt.md), [useOnlineStatus](./api/hooks/use-online-status.md), [usePWAUpdate](./api/hooks/use-pwa-update.md)
- типы: [BeforeInstallPromptEvent](./api/types/before-install-prompt-event.md), [PWAActions](./api/types/pwa-actions.md), [PWAContextValue](./api/types/pwa-context-value.md), [PWAProviderConfig](./api/types/pwa-provider-config.md), [PWAProviderProps](./api/types/pwa-provider-props.md), [PWAState](./api/types/pwa-state.md), [PWAUpdateBehavior](./api/types/pwa-update-behavior.md), [OfflineIndicatorProps](./api/types/offline-indicator-props.md), [InstallPWAButtonProps](./api/types/install-pwa-button-props.md), [PWAUpdatePromptProps](./api/types/pwa-update-prompt-props.md)

Внутренние сущности вроде `PWAController`, `PWAStore`, browser helpers и constants не входят в публичный API и не документируются как reference-страницы.

## Интеграционная модель

[PWAProvider](./api/components/pwa-provider.md) создаёт внутренний controller и подписывает его на browser events. Кроме стандартных browser signals пакет использует собственный `window`-contract:

- `__PWA_RUSH_REGISTERED__`
- `__PWA_RUSH_OFFLINE_READY__`
- `__PWA_RUSH_UPDATE_AVAILABLE__`
- `__PWA_RUSH_ERROR__`
- `window.__PWA_RUSH_UPDATE_SW__`

По коду runtime именно эти сигналы переводят пакет в состояния `registration`, `isOfflineReady`, `isUpdateAvailable`, `lastError` и дают возможность вызвать update.

## Подтверждённые entry conditions

- [usePWA](./api/hooks/use-pwa.md) и все hook-и/компоненты поверх него должны использоваться внутри [PWAProvider](./api/components/pwa-provider.md).
- Если DOM недоступен, начальное состояние создаётся без поддержки PWA и без регистрации событий.
- Для install flow требуется `beforeinstallprompt`.
- Для update flow требуется host-side registration bridge, который передаст callback обновления в `window.__PWA_RUSH_UPDATE_SW__`.

## Где смотреть дальше

- Стартовый сценарий: [quick-start.md](./quick-start.md)
- Подробное подключение: [guides/basic-usage.md](./guides/basic-usage.md)
- Полный reference map: [api/index.md](./api/index.md)
