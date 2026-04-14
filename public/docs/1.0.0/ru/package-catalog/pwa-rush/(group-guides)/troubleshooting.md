# Troubleshooting

## Hook или UI-компонент падает с ошибкой про provider

Причина: [usePWA](../api/hooks/use-pwa.md) выбрасывает ошибку, если context отсутствует. Поскольку [useInstallPrompt](../api/hooks/use-install-prompt.md), [useOnlineStatus](../api/hooks/use-online-status.md), [usePWAUpdate](../api/hooks/use-pwa-update.md), [OfflineIndicator](../api/components/offline-indicator.md), [InstallPWAButton](../api/components/install-pwa-button.md) и [PWAUpdatePrompt](../api/components/pwa-update-prompt.md) зависят от него, они требуют [PWAProvider](../api/components/pwa-provider.md) выше по дереву.

Что проверить:

- React-дерево обёрнуто в [PWAProvider](../api/components/pwa-provider.md)
- hook или компонент рендерится внутри этого провайдера

## [InstallPWAButton](../api/components/install-pwa-button.md) всегда disabled

Причина: доступность установки определяется `canInstall`, а не только `isSupported`.

Что проверить:

- браузер действительно поддерживает `beforeinstallprompt`
- событие `beforeinstallprompt` вообще было получено
- приложение не находится в уже установленном состоянии

Для ручной диагностики используйте [useInstallPrompt](../api/hooks/use-install-prompt.md) и проверьте `canInstall`, `isInstalled` и `lastError`.

## [PWAUpdatePrompt](../api/components/pwa-update-prompt.md) не появляется

Причина: пакет ждёт `window`-события из [configuration.md](../configuration.md). Без `__PWA_RUSH_OFFLINE_READY__` или `__PWA_RUSH_UPDATE_AVAILABLE__` UI не перейдёт в видимое состояние.

Что проверить:

- host-приложение вызывает `registerSW(...)` или эквивалентный код
- callbacks bridge действительно отправляют `window.dispatchEvent(new CustomEvent(...))`
- [PWAProvider](../api/components/pwa-provider.md) уже смонтирован к моменту отправки событий

## Вызов `updateServiceWorker` ничего не делает

Причина: пакет ищет update callback в `window.__PWA_RUSH_UPDATE_SW__`. Если он отсутствует, действие завершается без эффекта.

Что проверить:

- host-приложение сохранило update callback в `window.__PWA_RUSH_UPDATE_SW__`
- callback действительно возвращается из `registerSW(...)` или другого регистратора
- значение не было перезаписано

Для диагностики удобно использовать [usePWAUpdate](../api/hooks/use-pwa-update.md) и смотреть на `registration`, `isUpdateAvailable`, `isUpdating` и `lastError`.

## Online/offline состояние не меняется

Причина: [useOnlineStatus](../api/hooks/use-online-status.md) и [OfflineIndicator](../api/components/offline-indicator.md) зависят от browser events `online` и `offline`.

Что проверить:

- код выполняется в браузере, а не только на сервере
- браузер действительно переключает `navigator.onLine`
- [PWAProvider](../api/components/pwa-provider.md) смонтирован

## Пример из шаблона или код, сгенерированный CLI, не компилируется из-за package name

Причина: найденные в репозитории шаблон и CLI пока используют `@da_b1rmuda/pwa-react`, а документируемый пакет называется `@da_b1rmuda/pwa-rush`.

Что делать:

- для ручной интеграции импортируйте API из `@da_b1rmuda/pwa-rush`
- при использовании шаблона или CLI учитывайте известное расхождение из [documentation-problems.md](../documentation-problems.md)
