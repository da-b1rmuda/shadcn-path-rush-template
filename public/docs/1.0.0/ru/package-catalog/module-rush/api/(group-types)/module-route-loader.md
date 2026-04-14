# ModuleRouteLoader

Represents a deferred route-import function.

## Definition

```ts
type ModuleRouteLoader = () => Promise<unknown>;
```

## Notes

- This type is used in [`ModuleRegistryEntry`](./module-registry-entry.md)`['routes']`.
- TypeScript registry serialization injects these loaders from `routeFiles`.

## See also

- [`ModuleRegistryEntry`](./module-registry-entry.md)
- [`serializeModuleRegistry`](../functions/serialize-module-registry.md)
