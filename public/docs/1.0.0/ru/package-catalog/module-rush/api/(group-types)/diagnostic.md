# Diagnostic

Represents one architecture diagnostic entry.

## Definition

```ts
type Diagnostic = {
  code: string;
  severity: DiagnosticSeverity;
  message: string;
  suggestion?: string;
  file?: string;
  moduleName?: string;
  rule?: string;
  details?: Record<string, unknown>;
};
```

## Fields

- `code`: Diagnostic code string.
- `severity`: [`DiagnosticSeverity`](./diagnostic-severity.md).
- `message`: Human-readable description.
- `suggestion`: Optional remediation hint.
- `file`: Optional related file path.
- `moduleName`: Optional related module name.
- `rule`: Optional originating rule identifier.
- `details`: Optional extra machine-readable metadata.

## Notes

- Diagnostics are returned by [`checkProject`](../functions/check-project.md) and embedded in [`ArchitectureReport`](./architecture-report.md).
- Load failures during context building are also converted into diagnostics.

## See also

- [`DiagnosticSeverity`](./diagnostic-severity.md)
- [`CheckResult`](./check-result.md)
- [`ArchitectureReport`](./architecture-report.md)
