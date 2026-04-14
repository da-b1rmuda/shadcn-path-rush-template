# ConfigScope

Scope поля конфигурации.

## Definition

```ts
type ConfigScope = "client" | "server" | "shared";
```

## Notes

- Может задаваться явно через metadata.
- Если metadata не указана, scope выводится из namespace path.

## See also

- [`ConfigFieldMetadata`](./config-field-metadata.md)
- [`ConfigSchemaEntry`](./config-schema-entry.md)
