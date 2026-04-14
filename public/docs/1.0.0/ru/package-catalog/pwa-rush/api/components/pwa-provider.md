# PWAProvider

React provider, который публикует PWA state и actions через context.

## Назначение

[PWAProvider](./pwa-provider.md) создаёт внутренний controller, подписывается на browser events и window events, а затем передаёт итоговое значение [PWAContextValue](../types/pwa-context-value.md) всем дочерним компонентам и hook-ам.

## Signature

```ts
function PWAProvider({ children, config }: PWAProviderProps): JSX.Element
```

## Props

| Prop | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | обязательный | нет | React-дерево, внутри которого будут доступны [usePWA](../hooks/use-pwa.md) и специализированные hook-и. |
| `config` | [PWAProviderConfig](../types/pwa-provider-config.md) | необязательный | не указан | Runtime config для update behavior. |

## Returns

Возвращает `JSX.Element`, который рендерит `PWAContext.Provider` вокруг `children`.

## Throws

Подтверждённых исключений у самого [PWAProvider](./pwa-provider.md) нет.

## Usage Notes

- [PWAProvider](./pwa-provider.md) должен стоять выше [usePWA](../hooks/use-pwa.md), [useInstallPrompt](../hooks/use-install-prompt.md), [useOnlineStatus](../hooks/use-online-status.md), [usePWAUpdate](../hooks/use-pwa-update.md) и встроенных UI-компонентов.
- Controller создаётся только один раз. Изменения `config` после первого рендера не переинициализируют runtime.
- Подтверждённая интеграция update flow требует host-side window contract из [configuration.md](../../configuration.md).

## Example

```tsx
import { PWAProvider } from '@da_b1rmuda/pwa-rush'

export function Root() {
  return (
    <PWAProvider config={{ updateBehavior: 'prompt' }}>
      <App />
    </PWAProvider>
  )
}
```

## See also

- [PWAProviderProps](../types/pwa-provider-props.md)
- [PWAProviderConfig](../types/pwa-provider-config.md)
- [usePWA](../hooks/use-pwa.md)
- [guides/basic-usage.md](../../guides/basic-usage.md)
