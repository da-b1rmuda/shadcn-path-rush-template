# ConfigBeforeValidatePayload

Payload для before-validate plugin hook.

## Definition

```ts
interface ConfigBeforeValidatePayload {
  readonly context: LoadContext;
  readonly draft: Record<string, unknown>;
  addWarning(warning: string): void;
}
```

## Fields

- `context` - [`LoadContext`](./load-context.md).
- `draft` - merged draft до schema validation.
- `addWarning` - helper для warnings.

## See also

- [`ConfigBeforeValidateHook`](./config-before-validate-hook.md)
- [`ConfigPluginContext`](./config-plugin-context.md)
