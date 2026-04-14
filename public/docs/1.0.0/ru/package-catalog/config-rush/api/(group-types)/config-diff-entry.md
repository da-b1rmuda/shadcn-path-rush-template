# ConfigDiffEntry

Описание одного diff entry из watch mode.

## Definition

```ts
interface ConfigDiffEntry {
  readonly kind: ConfigDiffKind;
  readonly path: string;
  readonly previous: unknown;
  readonly value: unknown;
}
```

## Fields

- `kind` - [`ConfigDiffKind`](./config-diff-kind.md).
- `path` - изменённый path.
- `previous` - предыдущее значение.
- `value` - новое значение.

## See also

- [`watchConfig`](../functions/watch-config.md)
- [`SubscriptionPayload`](./subscription-payload.md)
