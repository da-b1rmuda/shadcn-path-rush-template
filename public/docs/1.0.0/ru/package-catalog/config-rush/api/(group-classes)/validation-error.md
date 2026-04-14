# ValidationError

Публичный класс ошибки валидации конфигурации.

## Назначение

[`ValidationError`](./validation-error.md) создаётся, когда merged config не проходит Zod validation в [`loadConfig`](../functions/load-config.md).

## Constructor

```ts
new ValidationError(issues: readonly ZodIssue[])
```

## Properties

- `issues: readonly ZodIssue[]`
- `formattedIssues: readonly string[]`

## Usage Notes

- Текст ошибки строится через [`formatZodIssues`](../functions/format-zod-issues.md).
- В CLI этот класс приводит к exit code `1`.

## See also

- [`loadConfig`](../functions/load-config.md)
- [`formatZodIssues`](../functions/format-zod-issues.md)
