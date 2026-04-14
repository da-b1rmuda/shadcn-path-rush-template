# rushModeSchema

Публичная Zod schema для app mode preset.

## Definition

```ts
const rushModeSchema: z.ZodDefault<z.ZodEnum<{
  development: "development";
  staging: "staging";
  production: "production";
  test: "test";
  preview: "preview";
}>>;
```

## Notes

- Default value: `"development"`.
- Используется [`defineRushAppConfig`](../functions/define-rush-app-config.md).

## See also

- [`RUSH_MODES`](./rush-modes.md)
- [`defineRushAppConfig`](../functions/define-rush-app-config.md)
