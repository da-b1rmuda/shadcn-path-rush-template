# DiagnosticsReport

Полный diagnostics report для loaded config.

## Definition

```ts
interface DiagnosticsReport {
  readonly mode: string;
  readonly target: ConfigTarget;
  readonly entries: readonly {
    path: string;
    scope: ConfigScope;
    secret: boolean;
    present: boolean;
    source?: string | undefined;
    overrides: readonly string[];
    sources: readonly string[];
    conflict: boolean;
  }[];
  readonly conflicts: readonly DiagnosticsConflict[];
  readonly sources: readonly ResolvedSource[];
  readonly unusedPaths: readonly DiagnosticsUnusedPath[];
  readonly warnings: readonly string[];
}
```

## Notes

- Возвращается из `$diagnostics()`.

## See also

- [`LoadedConfigHelpers`](./loaded-config-helpers.md)
- [`ResolvedSource`](./resolved-source.md)
