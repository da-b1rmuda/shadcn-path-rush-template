# ConfigShape

Тип shape для schema declaration.

## Definition

```ts
type ConfigShape = {
  readonly [key: string]: ConfigShape | ZodTypeAny;
};
```

## Notes

- Leaves должны быть Zod schemas.
- Вложенные объекты могут быть рекурсивными.

## See also

- [`defineConfig`](../functions/define-config.md)
- [`ConfigDefinition`](./config-definition.md)
