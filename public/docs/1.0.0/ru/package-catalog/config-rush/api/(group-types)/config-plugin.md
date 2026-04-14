# ConfigPlugin

Интерфейс config plugin.

## Definition

```ts
interface ConfigPlugin {
  readonly name: string;
  setup(context: ConfigPluginContext): Promise<void> | void;
}
```

## Fields

- `name` - имя plugin.
- `setup` - точка регистрации sources и hooks.

## See also

- [`ConfigPluginContext`](./config-plugin-context.md)
- [`loadConfig`](../functions/load-config.md)
