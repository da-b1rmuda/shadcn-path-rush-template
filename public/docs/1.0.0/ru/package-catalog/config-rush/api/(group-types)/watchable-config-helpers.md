# WatchableConfigHelpers

Helper API, который добавляется к watchable config facade.

## Definition

```ts
interface WatchableConfigHelpers<TConfig> {
  $close(): Promise<void>;
  $diff(): readonly ConfigDiffEntry[];
  $reload(): Promise<TConfig>;
  $subscribe(path: string, callback: SubscriptionCallback<TConfig>): () => void;
}
```

## Fields

- `$close()` - закрывает watcher.
- `$diff()` - возвращает последний diff.
- `$reload()` - перезагружает config.
- `$subscribe(path, callback)` - подписывает на изменения.

## See also

- [`WatchableConfig`](./watchable-config.md)
- [`watchConfig`](../functions/watch-config.md)
