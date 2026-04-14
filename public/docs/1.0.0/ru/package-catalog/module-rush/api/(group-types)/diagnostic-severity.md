# DiagnosticSeverity

Represents the severity of one architecture diagnostic.

## Definition

```ts
type DiagnosticSeverity = 'error' | 'warning' | 'info';
```

## Values

- `'error'`: failing architecture issue.
- `'warning'`: non-failing but suspicious or incomplete state.
- `'info'`: informational entry.

## Notes

- Severity is stored on [`Diagnostic`](./diagnostic.md).

## See also

- [`Diagnostic`](./diagnostic.md)
- [`CheckResult`](./check-result.md)
