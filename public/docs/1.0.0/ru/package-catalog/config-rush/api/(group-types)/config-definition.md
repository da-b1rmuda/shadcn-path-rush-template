# ConfigDefinition

Описание скомпилированной config schema.

## Definition

```ts
interface ConfigDefinition<TShape extends ConfigShape = ConfigShape> {
  readonly kind: "config-definition";
  readonly shape: TShape;
  readonly schema: ZodObject<any>;
  readonly entries: readonly ConfigSchemaEntry[];
  readonly defaults: Readonly<Record<string, unknown>>;
}
```

## Fields

- `kind` - маркер definition object.
- `shape` - исходный schema shape.
- `schema` - итоговая Zod object schema.
- `entries` - плоский список leaf schema entries.
- `defaults` - извлечённые default values.

## See also

- [`defineConfig`](../functions/define-config.md)
- [`ConfigSchemaEntry`](./config-schema-entry.md)
