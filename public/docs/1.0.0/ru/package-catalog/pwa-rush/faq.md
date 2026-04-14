# FAQ

## Регистрирует ли пакет service worker сам?

Нет. По коду пакет только читает browser events и пользовательские `window`-сигналы. Host-приложение должно регистрировать service worker самостоятельно. Подробности см. в [configuration.md](./configuration.md).

## Можно ли вызывать [usePWA](./api/hooks/use-pwa.md) вне [PWAProvider](./api/components/pwa-provider.md)?

Нет. [usePWA](./api/hooks/use-pwa.md) выбрасывает ошибку, если context отсутствует. Это же ограничение распространяется на [useInstallPrompt](./api/hooks/use-install-prompt.md), [useOnlineStatus](./api/hooks/use-online-status.md), [usePWAUpdate](./api/hooks/use-pwa-update.md) и встроенные UI-компоненты.

## Обязателен ли Vite?

Код пакета напрямую не импортирует Vite APIs. Однако единственный подтверждённый в репозитории end-to-end сценарий интеграции использует `vite-plugin-pwa` и `virtual:pwa-register`. Если вы используете другой стек, вам придётся вручную воспроизвести host-side контракт из [configuration.md](./configuration.md).

## Можно ли использовать пакет без встроенных UI-компонентов?

Да. [OfflineIndicator](./api/components/offline-indicator.md), [InstallPWAButton](./api/components/install-pwa-button.md) и [PWAUpdatePrompt](./api/components/pwa-update-prompt.md) являются необязательными удобными обёртками над [useOnlineStatus](./api/hooks/use-online-status.md), [useInstallPrompt](./api/hooks/use-install-prompt.md), [usePWAUpdate](./api/hooks/use-pwa-update.md) и [usePWA](./api/hooks/use-pwa.md).

## Обновится ли поведение провайдера, если изменить `config` после mount?

Не по текущей реализации. [PWAProvider](./api/components/pwa-provider.md) создаёт внутренний controller только один раз, поэтому `config` фактически читается только на первой инициализации.

## Почему [InstallPWAButton](./api/components/install-pwa-button.md) может оставаться disabled?

Потому что её доступность зависит не только от поля `isSupported` из [PWAState](./api/types/pwa-state.md), но и от `canInstall`. `canInstall` становится `true` только после события `beforeinstallprompt`.

## Где посмотреть полный список сущностей?

Откройте [api/index.md](./api/index.md).
