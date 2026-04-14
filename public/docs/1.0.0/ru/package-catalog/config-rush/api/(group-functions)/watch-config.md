# watchConfig

Создаёт watchable facade поверх config с diff и subscriptions.

## Назначение

[`watchConfig`](./watch-config.md) загружает config через тот же pipeline, что и [`loadConfig`](./load-config.md), но дополнительно предоставляет `$reload()`, `$close()`, `$diff()` и `$subscribe(path, callback)`.

## Signature

```ts
const watchConfig: <
  TDefinition extends ConfigDefinition,
  TTarget extends ConfigTarget = "server"
>(
  definition: TDefinition,
  options?: WatchConfigOptions<TTarget>
) => Promise<WatchableConfig<LoadedConfig<InferConfig<TDefinition, TTarget>>>>;
```

## Parameters

### `definition`

- Type: [`ConfigDefinition`](../types/config-definition.md)
- Required: yes

### `options`

- Type: [`WatchConfigOptions`](../types/watch-config-options.md)
- Required: no

## Returns

- `Promise<`[`WatchableConfig`](../types/watchable-config.md)`<...>>`

## Usage Notes

- Watch targets собираются из `options.watch` и `source.watch`.
- Для file watching используется `chokidar`.
- Ошибки reload выводятся в `console.error`, а не пробрасываются наружу из file watcher callback.

## Example

```ts
const watched = await watchConfig(definition, {
  sources: [createEnvSource()]
});

watched.$subscribe("client", ({ changes }) => {
  console.log(changes);
});
```

## See also

- [`WatchConfigOptions`](../types/watch-config-options.md)
- [`WatchableConfig`](../types/watchable-config.md)
- [`loadConfig`](./load-config.md)
