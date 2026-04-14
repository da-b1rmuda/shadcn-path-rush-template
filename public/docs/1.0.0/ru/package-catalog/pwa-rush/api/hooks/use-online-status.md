# useOnlineStatus

Hook для чтения только online/offline статуса.

## Назначение

[useOnlineStatus](./use-online-status.md) берёт значение `isOnline` из [usePWA](./use-pwa.md) и возвращает его как `boolean`.

## Signature

```ts
function useOnlineStatus(): boolean
```

## Parameters

У hook-а нет параметров.

## Returns

Возвращает `true`, если приложение считается online, и `false`, если было получено browser event `offline`.

## Throws

[useOnlineStatus](./use-online-status.md) зависит от [usePWA](./use-pwa.md) и потому требует [PWAProvider](../components/pwa-provider.md) выше по дереву.

## Usage Notes

- Значение инициализируется из `navigator.onLine`.
- Дальнейшие изменения приходят через browser events `online` и `offline`.

## Example

```tsx
import { useOnlineStatus } from '@da_b1rmuda/pwa-rush'

export function NetworkBadge() {
  const isOnline = useOnlineStatus()
  return <span>{isOnline ? 'Online' : 'Offline'}</span>
}
```

## See also

- [OfflineIndicator](../components/offline-indicator.md)
- [PWAState](../types/pwa-state.md)
- [guides/common-cases.md](../../guides/common-cases.md)
