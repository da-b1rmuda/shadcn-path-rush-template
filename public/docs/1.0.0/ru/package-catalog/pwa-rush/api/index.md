# API Reference

Все сущности ниже экспортируются из корневого entry point пакета:

```ts
import { ... } from '@da_b1rmuda/pwa-rush'
```

## Components

- [PWAProvider](./components/pwa-provider.md) — публикует PWA state и actions через React context.
- [OfflineIndicator](./components/offline-indicator.md) — готовый индикатор online/offline состояния.
- [InstallPWAButton](./components/install-pwa-button.md) — готовая кнопка для install prompt flow.
- [PWAUpdatePrompt](./components/pwa-update-prompt.md) — готовый prompt для update/offline-ready состояний.

## Hooks

- [usePWA](./hooks/use-pwa.md) — полный доступ к [PWAContextValue](./types/pwa-context-value.md).
- [useInstallPrompt](./hooks/use-install-prompt.md) — install-related subset состояния и action `promptInstall`.
- [useOnlineStatus](./hooks/use-online-status.md) — boolean online status.
- [usePWAUpdate](./hooks/use-pwa-update.md) — update/offline-ready subset состояния и update actions.

## Types

- [BeforeInstallPromptEvent](./types/before-install-prompt-event.md)
- [PWAActions](./types/pwa-actions.md)
- [PWAContextValue](./types/pwa-context-value.md)
- [PWAProviderConfig](./types/pwa-provider-config.md)
- [PWAProviderProps](./types/pwa-provider-props.md)
- [PWAState](./types/pwa-state.md)
- [PWAUpdateBehavior](./types/pwa-update-behavior.md)
- [OfflineIndicatorProps](./types/offline-indicator-props.md)
- [InstallPWAButtonProps](./types/install-pwa-button-props.md)
- [PWAUpdatePromptProps](./types/pwa-update-prompt-props.md)

## Scope

Внутренние сущности вроде `PWAController`, `PWAStore`, browser helpers и event constants не включены в reference, потому что они не экспортируются из публичной границы пакета.
