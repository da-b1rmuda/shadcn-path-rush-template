# LoadConfigOptions

Опции для [`loadConfig`](../functions/load-config.md).

## Definition

```ts
interface LoadConfigOptions<TTarget extends ConfigTarget = "server"> {
  readonly cwd?: string;
  readonly dev?: boolean;
  readonly env?: NodeJS.ProcessEnv;
  readonly mode?: string;
  readonly overrides?: Record<string, unknown>;
  readonly plugins?: readonly ConfigPlugin[];
  readonly sources?: readonly ConfigSource[];
  readonly target?: TTarget;
  readonly validation?: ConfigValidationMode;
  readonly onWarning?: (warning: string) => void;
}
```

## Fields

- `cwd` - рабочая директория.
- `dev` - явный dev override.
- `env` - env object вместо `process.env`.
- `mode` - mode override.
- `overrides` - last-write-wins override object.
- `plugins` - config plugins.
- `sources` - список source objects.
- `target` - [`ConfigTarget`](./config-target.md).
- `validation` - [`ConfigValidationMode`](./config-validation-mode.md).
- `onWarning` - callback для warnings.

## See also

- [`loadConfig`](../functions/load-config.md)
- [`ConfigPlugin`](./config-plugin.md)
