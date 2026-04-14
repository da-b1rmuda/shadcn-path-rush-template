# PWAProviderConfig

Конфигурация runtime-поведения [PWAProvider](../components/pwa-provider.md).

## Definition

```ts
interface PWAProviderConfig {
  updateBehavior?: PWAUpdateBehavior
}
```

## Fields

| Поле | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `updateBehavior` | [PWAUpdateBehavior](./pwa-update-behavior.md) | необязательное | не указан | Определяет, будет ли update event требовать пользовательского подтверждения или запускать update автоматически. |

## Notes

- По реализации отсутствие `updateBehavior` ведёт себя как ручной prompt-oriented flow.
- Изменение этого объекта после mount не переинициализирует уже созданный внутри [PWAProvider](../components/pwa-provider.md) controller.

## See also

- [PWAProvider](../components/pwa-provider.md)
- [PWAUpdateBehavior](./pwa-update-behavior.md)
- [configuration.md](../../configuration.md)
