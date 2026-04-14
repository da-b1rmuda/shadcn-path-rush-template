# PWAUpdateBehavior

Union type для режима обработки update-ready события.

## Definition

```ts
type PWAUpdateBehavior = 'prompt' | 'auto'
```

## Fields

| Значение | Описание |
| --- | --- |
| `'prompt'` | Update-ready событие только переводит runtime в состояние `isUpdateAvailable = true`; применение update остаётся на стороне UI или ручного вызова `updateServiceWorker`. |
| `'auto'` | Update-ready событие дополнительно инициирует `updateServiceWorker(true)` автоматически. |

## Notes

- Этот тип используется в [PWAProviderConfig](./pwa-provider-config.md).
- По текущей реализации отсутствие значения ведёт себя ближе к `'prompt'`, но в type surface подтверждены только два литерала: `'prompt'` и `'auto'`.

## See also

- [PWAProviderConfig](./pwa-provider-config.md)
- [usePWAUpdate](../hooks/use-pwa-update.md)
- [PWAUpdatePrompt](../components/pwa-update-prompt.md)
