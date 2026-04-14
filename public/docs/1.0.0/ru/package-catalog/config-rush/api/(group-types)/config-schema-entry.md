# ConfigSchemaEntry

Плоское описание одного leaf schema path.

## Definition

```ts
interface ConfigSchemaEntry {
  readonly path: string;
  readonly scope: ConfigScope;
  readonly secret: boolean;
  readonly envKeys: readonly string[];
  readonly schema: ZodTypeAny;
}
```

## Fields

- `path` - dot path поля.
- `scope` - [`ConfigScope`](./config-scope.md).
- `secret` - флаг секрета.
- `envKeys` - сгенерированные и/или пользовательские env aliases.
- `schema` - исходная leaf schema.

## See also

- [`ConfigDefinition`](./config-definition.md)
- [`ConfigFieldMetadata`](./config-field-metadata.md)
