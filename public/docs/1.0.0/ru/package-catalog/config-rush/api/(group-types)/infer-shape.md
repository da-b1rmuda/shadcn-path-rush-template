# InferShape

Generic helper type для вывода TypeScript shape из schema object.

## Definition

```ts
type InferShape<TShape extends ConfigShape> = {
  [Key in keyof TShape]:
    TShape[Key] extends ZodTypeAny
      ? z.infer<TShape[Key]>
      : TShape[Key] extends ConfigShape
        ? InferShape<TShape[Key]>
        : never;
};
```

## Notes

- Используется как промежуточный шаг для [`InferConfig`](./infer-config.md).

## See also

- [`InferConfig`](./infer-config.md)
- [`ConfigShape`](./config-shape.md)
