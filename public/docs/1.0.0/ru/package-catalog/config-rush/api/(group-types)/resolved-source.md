# ResolvedSource

Нормализованное описание source после загрузки config.

## Definition

```ts
interface ResolvedSource {
  readonly name: string;
  readonly priority: number;
  readonly watch: readonly string[];
  readonly appliedPaths: readonly string[];
  readonly conflictPaths: readonly string[];
  readonly unusedPaths: readonly string[];
}
```

## Fields

- `name` - имя source.
- `priority` - resolved priority.
- `watch` - watch targets.
- `appliedPaths` - paths, пришедшие из source.
- `conflictPaths` - paths, участвующие в conflicts.
- `unusedPaths` - paths, которых нет в schema.

## See also

- [`LoadedConfigHelpers`](./loaded-config-helpers.md)
- [`DiagnosticsReport`](./diagnostics-report.md)
