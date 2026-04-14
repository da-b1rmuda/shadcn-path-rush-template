# SubscriptionCallback

Тип callback для `watchConfig().$subscribe(...)`.

## Definition

```ts
type SubscriptionCallback<TConfig> = (
  payload: SubscriptionPayload<TConfig>
) => void;
```

## See also

- [`SubscriptionPayload`](./subscription-payload.md)
- [`watchConfig`](../functions/watch-config.md)
