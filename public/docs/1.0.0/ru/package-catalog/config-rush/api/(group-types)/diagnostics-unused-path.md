# DiagnosticsUnusedPath

Описание path, который пришёл из source, но не найден в schema.

## Definition

```ts
interface DiagnosticsUnusedPath {
  readonly path: string;
  readonly source: string;
}
```

## See also

- [`DiagnosticsReport`](./diagnostics-report.md)
- [`ResolvedSource`](./resolved-source.md)
