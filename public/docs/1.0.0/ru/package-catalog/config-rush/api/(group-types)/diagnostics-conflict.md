# DiagnosticsConflict

Описание конфликта source values для одного path.

## Definition

```ts
interface DiagnosticsConflict {
  readonly path: string;
  readonly sources: readonly string[];
  readonly winningSource: string;
}
```

## See also

- [`DiagnosticsReport`](./diagnostics-report.md)
- [`ExplainResult`](./explain-result.md)
