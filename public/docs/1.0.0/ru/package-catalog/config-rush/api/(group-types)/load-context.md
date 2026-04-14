# LoadContext

Контекст, который получает каждый [`ConfigSource`](./config-source.md).

## Definition

```ts
interface LoadContext {
  readonly cwd: string;
  readonly definition: ConfigDefinition;
  readonly env: NodeJS.ProcessEnv;
  readonly mode: string;
  readonly target: ConfigTarget;
}
```

## Fields

- `cwd` - рабочая директория.
- `definition` - текущая schema definition.
- `env` - env object.
- `mode` - resolved mode.
- `target` - [`ConfigTarget`](./config-target.md).

## See also

- [`ConfigSource`](./config-source.md)
- [`loadConfig`](../functions/load-config.md)
