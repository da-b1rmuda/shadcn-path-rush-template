# usePWA

Hook для полного доступа к PWA state и actions.

## Назначение

[usePWA](./use-pwa.md) читает значение React context, опубликованное через [PWAProvider](../components/pwa-provider.md), и возвращает полный [PWAContextValue](../types/pwa-context-value.md).

## Signature

```ts
function usePWA(): PWAContextValue
```

## Parameters

У hook-а нет параметров.

## Returns

Возвращает [PWAContextValue](../types/pwa-context-value.md), который объединяет [PWAState](../types/pwa-state.md) и [PWAActions](../types/pwa-actions.md).

## Throws

```ts
Error('usePWA must be used within a PWAProvider.')
```

Это исключение подтверждённо выбрасывается, если hook используется вне [PWAProvider](../components/pwa-provider.md).

## Usage Notes

- Это самый полный hook пакета.
- Если нужен только узкий срез состояния, используйте [useInstallPrompt](./use-install-prompt.md), [useOnlineStatus](./use-online-status.md) или [usePWAUpdate](./use-pwa-update.md).

## Example

```tsx
import { usePWA } from '@da_b1rmuda/pwa-rush'

export function DebugPanel() {
  const { isOnline, isUpdateAvailable, lastError } = usePWA()

  return <pre>{JSON.stringify({ isOnline, isUpdateAvailable, lastError: lastError?.message ?? null }, null, 2)}</pre>
}
```

## See also

- [PWAProvider](../components/pwa-provider.md)
- [PWAContextValue](../types/pwa-context-value.md)
- [useInstallPrompt](./use-install-prompt.md)
- [usePWAUpdate](./use-pwa-update.md)
