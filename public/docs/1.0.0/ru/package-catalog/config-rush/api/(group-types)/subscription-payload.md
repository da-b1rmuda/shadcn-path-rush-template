# SubscriptionPayload

Payload, который получает subscription callback в watch mode.

## Definition

```ts
interface SubscriptionPayload<TConfig> {
  readonly change?: ConfigDiffEntry | undefined;
  readonly changes: readonly ConfigDiffEntry[];
  readonly config: TConfig;
  readonly path: string;
  readonly previous: unknown;
  readonly value: unknown;
}
```

## Fields

- `change` - первый relevant diff entry, если есть.
- `changes` - список всех relevant diff entries.
- `config` - текущий config facade.
- `path` - subscribed path.
- `previous` - предыдущее значение path.
- `value` - текущее значение path.

## See also

- [`SubscriptionCallback`](./subscription-callback.md)
- [`ConfigDiffEntry`](./config-diff-entry.md)
