# LoadedModuleRouteDefinition

Represents a route definition after it has been loaded and normalized from disk.

## Definition

```ts
type LoadedModuleRouteDefinition = {
  sourceFilePath: string;
  name: string;
  path: string;
  lazy: boolean;
  hasLoader: boolean;
  hasComponent: boolean;
  meta?: Record<string, unknown>;
};
```

## Fields

- `sourceFilePath`: Absolute or project-relative route file path depending on stage.
- `name`: Route name.
- `path`: Route path.
- `lazy`: Final lazy flag.
- `hasLoader`: Whether the source route exported `loader`.
- `hasComponent`: Whether the source route exported `component`.
- `meta`: Optional metadata object.

## Notes

- This type is produced during route-definition loading.
- Registry serialization later rewrites `sourceFilePath` to a project-relative form.

## See also

- [`ModuleRouteDefinition`](./module-route-definition.md)
- [`ModuleRegistryEntry`](./module-registry-entry.md)
- [`buildModuleRegistry`](../functions/build-module-registry.md)
