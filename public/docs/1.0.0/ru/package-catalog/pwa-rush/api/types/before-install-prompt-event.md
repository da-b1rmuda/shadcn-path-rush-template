# BeforeInstallPromptEvent

Типизированное представление browser event `beforeinstallprompt`.

## Definition

```ts
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
}
```

## Fields

| Поле | Тип | Обязательность | По умолчанию | Описание |
| --- | --- | --- | --- | --- |
| `prompt` | `() => Promise<void>` | обязательное | нет | Показывает install prompt пользователю. |
| `userChoice` | `Promise<{ outcome: 'accepted' \| 'dismissed'; platform: string }>` | обязательное | нет | Разрешается результатом выбора пользователя после показа install prompt. |

## Notes

- Этот тип используется во внутреннем install flow и экспортируется как часть публичной type surface.
- Источник события — browser event `beforeinstallprompt`, который слушается внутри runtime.

## See also

- [useInstallPrompt](../hooks/use-install-prompt.md)
- [PWAState](./pwa-state.md)
