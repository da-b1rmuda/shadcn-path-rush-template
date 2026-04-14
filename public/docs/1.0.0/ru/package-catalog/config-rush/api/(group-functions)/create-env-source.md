# createEnvSource

Создаёт `ConfigSource`, который читает `.env` files и `process.env`.

## Назначение

[`createEnvSource`](./create-env-source.md) используется для mode-aware загрузки env layers и дальнейшего маппинга env keys на schema paths.

## Signature

```ts
const createEnvSource: (
  options?: EnvSourceOptions
) => ConfigSource;
```

## Parameters

### `options`

- Type: [`EnvSourceOptions`](../types/env-source-options.md)
- Required: no

## Returns

- [`ConfigSource`](../types/config-source.md)

## Usage Notes

- Если `files` не переданы, source читает `.env`, `.env.local`, `.env.<mode>`, `.env.<mode>.local`.
- Если `includeProcessEnv !== false`, поверх файлов накладывается `process.env`.
- Для client fields и server fields используются автоматически сгенерированные env aliases на основе schema path и metadata.

## Example

```ts
const source = createEnvSource({
  cwd: process.cwd(),
  mode: "production"
});
```

## See also

- [`EnvSourceOptions`](../types/env-source-options.md)
- [`createFileSource`](./create-file-source.md)
