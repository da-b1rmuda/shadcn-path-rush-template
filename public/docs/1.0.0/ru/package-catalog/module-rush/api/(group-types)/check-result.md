# CheckResult

Represents the result of running project rules.

## Definition

```ts
type CheckResult = {
  diagnostics: Diagnostic[];
  errorCount: number;
  warningCount: number;
  infoCount: number;
};
```

## Fields

- `diagnostics`: [`Diagnostic`](./diagnostic.md)`[]`. All diagnostics returned by the rules pipeline.
- `errorCount`: Number of error-level diagnostics.
- `warningCount`: Number of warning-level diagnostics.
- `infoCount`: Number of info-level diagnostics.

## Notes

- This is the return type of [`checkProject`](../functions/check-project.md).

## See also

- [`Diagnostic`](./diagnostic.md)
- [`checkProject`](../functions/check-project.md)
