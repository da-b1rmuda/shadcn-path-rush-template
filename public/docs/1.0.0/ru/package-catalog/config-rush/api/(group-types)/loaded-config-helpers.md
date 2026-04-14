# LoadedConfigHelpers

Helper API, которое добавляется к результату [`loadConfig`](../functions/load-config.md).

## Definition

```ts
interface LoadedConfigHelpers {
  readonly $mode: string;
  readonly $target: ConfigTarget;
  $diagnostics(): DiagnosticsReport;
  $explain(path: string): ExplainResult;
  $print(): unknown;
  $resolved(): unknown;
  $sources(): readonly ResolvedSource[];
}
```

## Fields

- `$mode` - resolved mode string.
- `$target` - resolved [`ConfigTarget`](./config-target.md).
- `$diagnostics()` - diagnostics report.
- `$explain(path)` - source tracing для одного path.
- `$print()` - печать masked snapshot в stdout.
- `$resolved()` - masked snapshot.
- `$sources()` - normalized source metadata.

## See also

- [`LoadedConfig`](./loaded-config.md)
- [`DiagnosticsReport`](./diagnostics-report.md)
- [`ExplainResult`](./explain-result.md)
