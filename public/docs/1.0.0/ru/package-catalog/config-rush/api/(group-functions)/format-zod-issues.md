# formatZodIssues

Преобразует массив `ZodIssue` в массив строк формата `path: message`.

## Назначение

[`formatZodIssues`](./format-zod-issues.md) используется для построения текстового представления validation problems и лежит в основе [`ValidationError`](../classes/validation-error.md).

## Signature

```ts
const formatZodIssues: (issues: readonly ZodIssue[]) => string[];
```

## Parameters

### `issues`

- Type: `readonly ZodIssue[]`
- Required: yes

## Returns

- `string[]`

## Example

```ts
const formatted = formatZodIssues(error.issues);
```

## See also

- [`ValidationError`](../classes/validation-error.md)
