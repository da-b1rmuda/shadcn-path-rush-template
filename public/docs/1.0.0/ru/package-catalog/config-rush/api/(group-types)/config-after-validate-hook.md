# ConfigAfterValidateHook

Тип after-validate plugin hook.

## Definition

```ts
type ConfigAfterValidateHook = (
  payload: ConfigAfterValidatePayload
) => Promise<void> | void;
```

## See also

- [`ConfigAfterValidatePayload`](./config-after-validate-payload.md)
- [`ConfigPluginContext`](./config-plugin-context.md)
