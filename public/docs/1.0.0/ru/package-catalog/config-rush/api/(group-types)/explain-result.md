# ExplainResult

Результат helper вызова `$explain(path)`.

## Definition

```ts
interface ExplainResult {
  readonly path: string;
  readonly present: boolean;
  readonly scope: ConfigScope;
  readonly secret: boolean;
  readonly value: unknown;
  readonly source?: string | undefined;
  readonly overrides: readonly string[];
  readonly sources: readonly string[];
  readonly conflict: boolean;
}
```

## Fields

- `path` - запрошенный path.
- `present` - найдено ли значение.
- `scope` - [`ConfigScope`](./config-scope.md).
- `secret` - secret flag.
- `value` - текущее значение либо masked value.
- `source` - winning source.
- `overrides` - предыдущие sources.
- `sources` - полная history sources.
- `conflict` - признак конфликта.

## See also

- [`LoadedConfigHelpers`](./loaded-config-helpers.md)
- [`DiagnosticsConflict`](./diagnostics-conflict.md)
