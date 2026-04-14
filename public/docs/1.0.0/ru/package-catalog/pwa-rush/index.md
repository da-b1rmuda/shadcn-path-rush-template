# @da_b1rmuda/pwa-rush

`@da_b1rmuda/pwa-rush` — это React runtime для состояния PWA, hook-ов и встроенных UI-компонентов вокруг install/update/offline сценариев.

Пакет включает:

- [PWAProvider](./api/components/pwa-provider.md) для хранения и публикации состояния
- [usePWA](./api/hooks/use-pwa.md) и специализированные hook-и для чтения состояния
- [OfflineIndicator](./api/components/offline-indicator.md), [InstallPWAButton](./api/components/install-pwa-button.md) и [PWAUpdatePrompt](./api/components/pwa-update-prompt.md) как готовые UI-обёртки
- экспортируемые типы в `api/types/`

## С чего начать

1. Прочитайте [overview.md](./overview.md), чтобы понять границы пакета и его интеграционную модель.
2. Откройте [installation.md](./installation.md), чтобы установить пакет и подключить [PWAProvider](./api/components/pwa-provider.md).
3. Повторите подтверждённый минимальный сценарий из [quick-start.md](./quick-start.md).
4. Перейдите в [guides/basic-usage.md](./guides/basic-usage.md), если нужно ручное wiring host-приложения.

## Что важно знать сразу

- Пакет не регистрирует service worker самостоятельно.
- Host-приложение должно отправлять пользовательские `window`-события и выставлять update callback. Подробности описаны в [configuration.md](./configuration.md).
- Подтверждённый в репозитории интеграционный путь использует Vite, `vite-plugin-pwa` и `virtual:pwa-register`, но сам runtime пакета не импортирует Vite API напрямую.
- В репозитории есть известное расхождение между реальным именем пакета и импортами в шаблоне/CLI. Детали вынесены в [documentation-problems.md](./documentation-problems.md).

## Ключевой API

- [PWAProvider](./api/components/pwa-provider.md)
- [usePWA](./api/hooks/use-pwa.md)
- [useInstallPrompt](./api/hooks/use-install-prompt.md)
- [useOnlineStatus](./api/hooks/use-online-status.md)
- [usePWAUpdate](./api/hooks/use-pwa-update.md)
- [PWAProviderConfig](./api/types/pwa-provider-config.md)
- [PWAState](./api/types/pwa-state.md)

## Далее

- Reference map: [api/index.md](./api/index.md)
- Базовый пример: [examples/basic-example.md](./examples/basic-example.md)
- Пользовательский UI на hook-ах: [examples/advanced-example.md](./examples/advanced-example.md)
