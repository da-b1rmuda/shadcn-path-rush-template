# PWAUpdatePromptProps

Props для [PWAUpdatePrompt](../components/pwa-update-prompt.md).

## Definition

```ts
interface PWAUpdatePromptProps {
  className?: string
  style?: CSSProperties
  title?: string
  updateDescription?: string
  offlineReadyDescription?: string
  confirmLabel?: string
  dismissLabel?: string
  hideWhenIdle?: boolean
}
```

## Fields

| Поле | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `className` | `string` | необязательное | не указан | CSS class для корневого контейнера. |
| `style` | `CSSProperties` | необязательное | не указан | Inline style overrides поверх встроенных стилей. |
| `title` | `string` | необязательное | `'Update available'` | Заголовок, используемый только для update-ready состояния. |
| `updateDescription` | `string` | необязательное | `'A fresh version of the app is ready to install.'` | Описание для update-ready состояния. |
| `offlineReadyDescription` | `string` | необязательное | `'The app is ready for offline use.'` | Описание для offline-ready состояния. |
| `confirmLabel` | `string` | необязательное | `'Reload'` | Текст кнопки подтверждения обновления. |
| `dismissLabel` | `string` | необязательное | `'Dismiss'` | Текст dismiss button. |
| `hideWhenIdle` | `boolean` | необязательное | `true` | Скрывает компонент, когда нет `isUpdateAvailable` и `isOfflineReady`. |

## Notes

- Отдельного prop для заголовка offline-ready состояния нет; при этом сценарии компонент использует жёсткую строку `Offline ready`.

## See also

- [PWAUpdatePrompt](../components/pwa-update-prompt.md)
- [usePWAUpdate](../hooks/use-pwa-update.md)
