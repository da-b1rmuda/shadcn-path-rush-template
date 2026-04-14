# ModuleRegistryEntry

Represents one module entry inside the generated registry.

## Definition

```ts
type ModuleRegistryEntry = {
  name: string;
  description?: string;
  domain?: string;
  owner?: string;
  tags: string[];
  dependsOn: string[];
  publicApi: Required<Pick<ModulePublicApiMap, 'components' | 'forms' | 'hooks' | 'model' | 'routes' | 'types' | 'api' | 'lib'>>;
  routing: {
    enabled: boolean;
    basePath?: string;
    lazy: boolean;
  };
  routeFiles: string[];
  routeDefinitions: LoadedModuleRouteDefinition[];
  routes: ModuleRouteLoader[];
  ai: {
    agentFile: string;
    strictPublicApi: boolean;
  };
};
```

## Fields

- `name`: Module name.
- `description`: Optional module description.
- `domain`: Optional domain name.
- `owner`: Optional owner name.
- `tags`: Normalized tag list.
- `dependsOn`: Normalized dependency list.
- `publicApi`: Required public-section map.
- `routing`: Normalized routing block.
- `routeFiles`: Route file paths.
- `routeDefinitions`: Loaded route-definition summaries.
- `routes`: Deferred route loaders.
- `ai`: Normalized agent settings.

## Notes

- [`buildModuleRegistry`](../functions/build-module-registry.md) returns entries with an empty `routes` array.
- [`serializeModuleRegistry`](../functions/serialize-module-registry.md) injects `routes` only for TypeScript output.
- JSON serialization removes `routes` entirely.

## See also

- [`LoadedModuleRouteDefinition`](./loaded-module-route-definition.md)
- [`ModuleRouteLoader`](./module-route-loader.md)
- [`buildModuleRegistry`](../functions/build-module-registry.md)
