# EnvSourceOptions

Опции для [`createEnvSource`](../functions/create-env-source.md).

## Definition

```ts
interface EnvSourceOptions {
  readonly cwd?: string;
  readonly files?: readonly string[];
  readonly includeProcessEnv?: boolean;
  readonly mode?: string;
  readonly priority?: number;
}
```

## Fields

- `cwd` - директория для поиска env files.
- `files` - явный список env files.
- `includeProcessEnv` - включать ли `process.env`.
- `mode` - mode override для выбора `.env.<mode>` layers.
- `priority` - source priority override.

## See also

- [`createEnvSource`](../functions/create-env-source.md)
