# ConfigAfterValidatePayload

Payload для after-validate plugin hook.

## Definition

```ts
interface ConfigAfterValidatePayload {
  readonly config: Record<string, unknown>;
  readonly context: LoadContext;
  addWarning(warning: string): void;
}
```

## Fields

- `config` - validated config object.
- `context` - [`LoadContext`](./load-context.md).
- `addWarning` - helper для warnings.

## See also

- [`ConfigAfterValidateHook`](./config-after-validate-hook.md)
- [`ConfigPluginContext`](./config-plugin-context.md)
