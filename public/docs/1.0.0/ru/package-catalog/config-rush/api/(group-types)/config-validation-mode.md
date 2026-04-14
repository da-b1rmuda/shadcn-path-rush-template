# ConfigValidationMode

Режим обработки validation errors.

## Definition

```ts
type ConfigValidationMode = "error" | "warn";
```

## Notes

- `error` приводит к [`ValidationError`](../classes/validation-error.md).
- `warn` сохраняет formatted issues в warnings.

## See also

- [`LoadConfigOptions`](./load-config-options.md)
- [`ValidationError`](../classes/validation-error.md)
