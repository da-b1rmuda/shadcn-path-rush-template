# useInstallPrompt

Hook для install-related состояния и действия установки.

## Назначение

[useInstallPrompt](./use-install-prompt.md) берёт данные из [usePWA](./use-pwa.md) и возвращает только поля, связанные с install flow.

## Signature

```ts
function useInstallPrompt(): {
  canInstall: boolean
  isInstalled: boolean
  isSupported: boolean
  lastError: Error | null
  promptInstall: () => Promise<boolean>
}
```

## Parameters

У hook-а нет параметров.

## Returns

| Поле | Тип | Описание |
| --- | --- | --- |
| `canInstall` | `boolean` | Показывает, был ли получен install prompt и доступна ли установка. |
| `isInstalled` | `boolean` | Показывает, установлено ли приложение. |
| `isSupported` | `boolean` | Показывает, доступен ли `serviceWorker` в `navigator`. |
| `lastError` | `Error \| null` | Последняя зафиксированная ошибка install/update/runtime flow. |
| `promptInstall` | `() => Promise<boolean>` | Пытается показать install prompt и возвращает `true`, если пользователь принял установку. |

## Throws

[useInstallPrompt](./use-install-prompt.md) зависит от [usePWA](./use-pwa.md) и потому требует [PWAProvider](../components/pwa-provider.md) выше по дереву.

## Usage Notes

- `canInstall` становится `true` только после browser event `beforeinstallprompt`.
- `promptInstall()` возвращает `false`, если install prompt отсутствует или завершился ошибкой.

## Example

```tsx
import { useInstallPrompt } from '@da_b1rmuda/pwa-rush'

export function InstallBanner() {
  const { canInstall, isInstalled, promptInstall } = useInstallPrompt()

  if (isInstalled) {
    return null
  }

  return (
    <button disabled={!canInstall} onClick={() => void promptInstall()} type="button">
      Install
    </button>
  )
}
```

## See also

- [InstallPWAButton](../components/install-pwa-button.md)
- [BeforeInstallPromptEvent](../types/before-install-prompt-event.md)
- [PWAState](../types/pwa-state.md)
