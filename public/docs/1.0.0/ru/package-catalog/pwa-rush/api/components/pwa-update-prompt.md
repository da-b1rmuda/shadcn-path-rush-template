# PWAUpdatePrompt

Готовый prompt для update-ready и offline-ready состояний.

## Назначение

[PWAUpdatePrompt](./pwa-update-prompt.md) использует [usePWAUpdate](../hooks/use-pwa-update.md) и показывает фиксированную панель в правом нижнем углу, когда приложение либо готово к offline use, либо получило update-ready сигнал.

## Signature

```ts
function PWAUpdatePrompt(props: PWAUpdatePromptProps): JSX.Element | null
```

## Props

| Prop | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `className` | `string` | необязательный | не указан | CSS class для корневого контейнера. |
| `style` | `CSSProperties` | необязательный | не указан | Inline style overrides поверх встроенных стилей. |
| `title` | `string` | необязательный | `'Update available'` | Заголовок для update-ready состояния. |
| `updateDescription` | `string` | необязательный | `'A fresh version of the app is ready to install.'` | Описание для update-ready состояния. |
| `offlineReadyDescription` | `string` | необязательный | `'The app is ready for offline use.'` | Описание для offline-ready состояния. |
| `confirmLabel` | `string` | необязательный | `'Reload'` | Текст кнопки подтверждения обновления. |
| `dismissLabel` | `string` | необязательный | `'Dismiss'` | Текст кнопки закрытия prompt-а. |
| `hideWhenIdle` | `boolean` | необязательный | `true` | Если `true`, компонент скрывается при отсутствии `isUpdateAvailable` и `isOfflineReady`. |

## Returns

Возвращает `JSX.Element` или `null`, если prompt должен быть скрыт.

## Throws

При рендере вне [PWAProvider](./pwa-provider.md) компонент аварийно завершится через зависимый [usePWA](../hooks/use-pwa.md).

## Usage Notes

- При update-ready состоянии confirm button вызывает `updateServiceWorker(true)`.
- При offline-ready состоянии компонент показывает только dismiss action.
- В режиме [PWAUpdateBehavior](../types/pwa-update-behavior.md) = `'auto'` update может быть инициирован до того, как пользователь успеет взаимодействовать с этим UI.

## Example

```tsx
import { PWAUpdatePrompt } from '@da_b1rmuda/pwa-rush'

export function PWAChrome() {
  return <PWAUpdatePrompt title="Доступно обновление" confirmLabel="Перезагрузить" />
}
```

## See also

- [PWAUpdatePromptProps](../types/pwa-update-prompt-props.md)
- [usePWAUpdate](../hooks/use-pwa-update.md)
- [PWAUpdateBehavior](../types/pwa-update-behavior.md)
