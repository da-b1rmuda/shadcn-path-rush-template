# PWAProviderProps

Props для [PWAProvider](../components/pwa-provider.md).

## Definition

```ts
interface PWAProviderProps {
  children: ReactNode
  config?: PWAProviderConfig
}
```

## Fields

| Поле | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | обязательное | нет | React-дерево, которому будет доступен [PWAContextValue](./pwa-context-value.md). |
| `config` | [PWAProviderConfig](./pwa-provider-config.md) | необязательное | не указан | Runtime config для update behavior. |

## Notes

- Это единственные подтверждённые props провайдера.

## See also

- [PWAProvider](../components/pwa-provider.md)
- [PWAProviderConfig](./pwa-provider-config.md)
