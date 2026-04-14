# WatchConfigOptions

Опции для [`watchConfig`](../functions/watch-config.md).

## Definition

```ts
interface WatchConfigOptions<TTarget extends ConfigTarget = "server">
  extends LoadConfigOptions<TTarget> {
  readonly debounceMs?: number;
  readonly watch?: readonly string[];
}
```

## Fields

- все поля [`LoadConfigOptions`](./load-config-options.md);
- `debounceMs` - debounce timeout для file watcher reload;
- `watch` - дополнительные watch targets.

## See also

- [`watchConfig`](../functions/watch-config.md)
- [`LoadConfigOptions`](./load-config-options.md)
