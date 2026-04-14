# LazyWarningEntry

Represents one lazy-analysis warning.

## Definition

```ts
type LazyWarningEntry = {
  moduleName: string;
  message: string;
  routeFiles: string[];
  dynamicImportCount?: number;
  eagerCrossModuleImportCount?: number;
  transitiveModuleDependencyCount?: number;
  viteManifestEntries?: string[];
  statsFilePath?: string;
};
```

## Fields

- `moduleName`: Module name.
- `message`: Warning message.
- `routeFiles`: Related route files.
- `dynamicImportCount`: Optional number of dynamic imports seen in route files.
- `eagerCrossModuleImportCount`: Optional number of eager cross-module imports in route files.
- `transitiveModuleDependencyCount`: Optional transitive dependency count.
- `viteManifestEntries`: Optional matched Vite manifest keys.
- `statsFilePath`: Optional configured Vite stats path.

## Notes

- This type is returned by [`analyzeLazyModules`](../functions/analyze-lazy-modules.md).
- It is also embedded in [`ArchitectureReport`](./architecture-report.md).

## See also

- [`analyzeLazyModules`](../functions/analyze-lazy-modules.md)
- [`ArchitectureReport`](./architecture-report.md)
