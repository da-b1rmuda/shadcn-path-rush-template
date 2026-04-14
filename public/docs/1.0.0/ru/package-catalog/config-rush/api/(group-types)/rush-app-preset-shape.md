# RushAppPresetShape

Тип shape для [`defineRushAppConfig`](../functions/define-rush-app-config.md).

## Definition

```ts
type RushAppPresetShape = Omit<ConfigShape, "app" | "client" | "server"> & {
  readonly app?: ConfigShape;
  readonly client?: ConfigShape;
  readonly server?: ConfigShape;
};
```

## Notes

- Позволяет передать app/client/server как optional shape blocks.

## See also

- [`defineRushAppConfig`](../functions/define-rush-app-config.md)
- [`ConfigShape`](./config-shape.md)
