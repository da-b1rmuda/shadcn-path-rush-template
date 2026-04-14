# OfflineIndicatorProps

Props для [OfflineIndicator](../components/offline-indicator.md).

## Definition

```ts
interface OfflineIndicatorProps {
  className?: string
  style?: CSSProperties
  hideWhenOnline?: boolean
  onlineLabel?: string
  offlineLabel?: string
}
```

## Fields

| Поле | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `className` | `string` | необязательное | не указан | CSS class для корневого `div`. |
| `style` | `CSSProperties` | необязательное | не указан | Inline style overrides поверх встроенных стилей. |
| `hideWhenOnline` | `boolean` | необязательное | `true` | Скрывает компонент, если приложение online. |
| `onlineLabel` | `string` | необязательное | `'Back online'` | Текст для online состояния. |
| `offlineLabel` | `string` | необязательное | `'You are offline'` | Текст для offline состояния. |

## Notes

- Эти props не меняют источник данных; состояние всё равно берётся через [useOnlineStatus](../hooks/use-online-status.md).

## See also

- [OfflineIndicator](../components/offline-indicator.md)
- [useOnlineStatus](../hooks/use-online-status.md)
