# ConfigRushPluginOptions

Опции для [`configRushPlugin`](../functions/config-rush-plugin.md).

## Definition

```ts
interface ConfigRushPluginOptions<TDefinition extends ConfigDefinition> {
  readonly definition: TDefinition;
  readonly loadOptions?: Omit<LoadConfigOptions<"client">, "target">;
  readonly virtualId?: string;
}
```

## Fields

- `definition` - schema definition.
- `loadOptions` - client-target load options без поля `target`.
- `virtualId` - override virtual module id.

## See also

- [`configRushPlugin`](../functions/config-rush-plugin.md)
- [`LoadConfigOptions`](./load-config-options.md)
