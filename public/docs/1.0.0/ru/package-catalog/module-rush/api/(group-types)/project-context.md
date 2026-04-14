# ProjectContext

Bundles the full loaded state of a module-rush project.

## Definition

```ts
type ProjectContext = {
  config: ResolvedModuleRushConfig;
  modules: LoadedModule[];
  domains: DiscoveredDomain[];
  importRecords: ProjectImportRecord[];
  loadDiagnostics: Diagnostic[];
};
```

## Fields

- `config`: [`ResolvedModuleRushConfig`](./resolved-module-rush-config.md). Loaded root config.
- `modules`: [`LoadedModule`](./loaded-module.md)`[]`. Discovered modules plus loaded data.
- `domains`: [`DiscoveredDomain`](./discovered-domain.md)`[]`. Discovered domains plus loaded data.
- `importRecords`: [`ProjectImportRecord`](./project-import-record.md)`[]`. Analyzed imports.
- `loadDiagnostics`: [`Diagnostic`](./diagnostic.md)`[]`. Manifest and route-loading problems captured during context build.

## Notes

- This is the shared input shape for checks, registry building, graph building, report building, and lazy analysis.

## See also

- [`buildProjectContext`](../functions/build-project-context.md)
- [`CheckResult`](./check-result.md)
- [`ArchitectureReport`](./architecture-report.md)
