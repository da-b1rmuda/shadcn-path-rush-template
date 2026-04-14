# LoadedModule

Represents a discovered module after optional manifest and route loading.

## Definition

```ts
type LoadedModule = DiscoveredModule & {
  manifest?: NormalizedModuleManifest;
  routeDefinitions?: LoadedModuleRouteDefinition[];
};
```

## Fields

- All fields from [`DiscoveredModule`](./discovered-module.md).
- `manifest`: Optional [`NormalizedModuleManifest`](./normalized-module-manifest.md).
- `routeDefinitions`: Optional [`LoadedModuleRouteDefinition`](./loaded-module-route-definition.md)`[]`.

## Notes

- This is the module shape stored in [`ProjectContext`](./project-context.md).
- Modules without a loaded manifest are still kept in context for diagnostics.

## See also

- [`DiscoveredModule`](./discovered-module.md)
- [`NormalizedModuleManifest`](./normalized-module-manifest.md)
- [`ProjectContext`](./project-context.md)
