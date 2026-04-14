# InferConfig

Generic helper type для вывода итогового config type из definition.

## Definition

```ts
type InferConfig<
  TDefinition extends ConfigDefinition<ConfigShape>,
  TTarget extends ConfigTarget = "server"
> = TTarget extends "client"
  ? HideServerNamespace<InferShape<TDefinition["shape"]>>
  : InferShape<TDefinition["shape"]>;
```

## Notes

- Для `client` target type скрывает `server` namespace на уровне типов.

## See also

- [`ConfigDefinition`](./config-definition.md)
- [`ConfigTarget`](./config-target.md)
- [`LoadedConfig`](./loaded-config.md)
