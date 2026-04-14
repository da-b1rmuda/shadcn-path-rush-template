# RouteCoverageEntry

Represents route coverage for one module in the report.

## Definition

```ts
type RouteCoverageEntry = {
  moduleName: string;
  enabled: boolean;
  lazy: boolean;
  basePath?: string;
  routeFileCount: number;
};
```

## Fields

- `moduleName`: Module name.
- `enabled`: Whether module routing is enabled.
- `lazy`: Whether module routing is lazy.
- `basePath`: Optional base path from the module manifest.
- `routeFileCount`: Number of discovered route files.

## Notes

- This type appears in [`ArchitectureReport`](./architecture-report.md).

## See also

- [`ArchitectureReport`](./architecture-report.md)
- [`ModuleManifest`](./module-manifest.md)
