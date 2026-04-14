# OfflineIndicator

Готовый UI-компонент для отображения online/offline состояния.

## Назначение

[OfflineIndicator](./offline-indicator.md) использует [useOnlineStatus](../hooks/use-online-status.md) и отображает фиксированный status pill в углу экрана. По умолчанию компонент скрывается, когда приложение online.

## Signature

```ts
function OfflineIndicator(props: OfflineIndicatorProps): JSX.Element | null
```

## Props

| Prop | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `className` | `string` | необязательный | не указан | CSS class для корневого `div`. |
| `style` | `CSSProperties` | необязательный | не указан | Inline style overrides поверх встроенных стилей. |
| `hideWhenOnline` | `boolean` | необязательный | `true` | Если `true`, компонент не рендерится при `isOnline = true`. |
| `onlineLabel` | `string` | необязательный | `'Back online'` | Текст для online состояния. |
| `offlineLabel` | `string` | необязательный | `'You are offline'` | Текст для offline состояния. |

## Returns

Возвращает `JSX.Element` или `null`, если `hideWhenOnline = true` и приложение online.

## Throws

При рендере вне [PWAProvider](./pwa-provider.md) компонент аварийно завершится через зависимый [usePWA](../hooks/use-pwa.md).

## Usage Notes

- Компонент фиксируется в левом верхнем углу и уже содержит встроенные inline styles.
- Для пользовательского UI без встроенных стилей используйте [useOnlineStatus](../hooks/use-online-status.md).

## Example

```tsx
import { OfflineIndicator } from '@da_b1rmuda/pwa-rush'

export function PWAChrome() {
  return <OfflineIndicator offlineLabel="Соединение потеряно" onlineLabel="Соединение восстановлено" />
}
```

## See also

- [OfflineIndicatorProps](../types/offline-indicator-props.md)
- [useOnlineStatus](../hooks/use-online-status.md)
- [guides/common-cases.md](../../guides/common-cases.md)
