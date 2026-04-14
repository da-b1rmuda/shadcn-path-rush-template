# ConfigFieldMetadata

Metadata интерфейс для leaf schema fields.

## Definition

```ts
interface ConfigFieldMetadata {
  readonly scope?: ConfigScope | undefined;
  readonly secret?: boolean | undefined;
  readonly env?: string | readonly string[] | undefined;
  readonly description?: string | undefined;
}
```

## Fields

- `scope` - optional [`ConfigScope`](./config-scope.md).
- `secret` - пометка секрета.
- `env` - env aliases.
- `description` - текстовое описание.

## See also

- [`ConfigSchemaEntry`](./config-schema-entry.md)
- [`createEnvSource`](../functions/create-env-source.md)
