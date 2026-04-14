# WatchableConfig

Тип результата [`watchConfig`](../functions/watch-config.md).

## Definition

```ts
type WatchableConfig<TConfig> = TConfig & WatchableConfigHelpers<TConfig>;
```

## Notes

- Соединяет loaded config и [`WatchableConfigHelpers`](./watchable-config-helpers.md).

## See also

- [`watchConfig`](../functions/watch-config.md)
- [`WatchableConfigHelpers`](./watchable-config-helpers.md)
