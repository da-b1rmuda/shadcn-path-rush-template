# ConfigBeforeValidateHook

Тип before-validate plugin hook.

## Definition

```ts
type ConfigBeforeValidateHook = (
  payload: ConfigBeforeValidatePayload
) => Promise<void> | void;
```

## See also

- [`ConfigBeforeValidatePayload`](./config-before-validate-payload.md)
- [`ConfigPluginContext`](./config-plugin-context.md)
