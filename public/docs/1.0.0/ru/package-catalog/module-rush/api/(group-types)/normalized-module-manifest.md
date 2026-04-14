# NormalizedModuleManifest

Represents a module manifest after normalization.

## Definition

```ts
type NormalizedModuleManifest = Omit<ModuleManifest, 'tags' | 'publicApi' | 'dependsOn' | 'routing' | 'rules' | 'ai'> & {
  tags: string[];
  publicApi: Required<Pick<ModulePublicApiMap, ModuleSectionName>>;
  dependsOn: string[];
  routing: {
    enabled: boolean;
    basePath?: string;
    lazy: boolean;
  };
  rules: {
    forbidDeepImports: boolean;
    forbidCircularDeps: boolean;
    allowImportsFrom: string[];
    forbidImportsFrom: string[];
  };
  ai: {
    agentFile: string;
    strictPublicApi: boolean;
  };
};
```

## Fields

- `tags`: Sorted tag list.
- `publicApi`: Required public-api map for standard sections.
- `dependsOn`: Sorted dependency IDs.
- `routing.enabled`: Route participation flag with default `false`.
- `routing.basePath`: Optional base path.
- `routing.lazy`: Lazy-route flag with default `false`.
- `rules`: Required local-rule block after defaulting.
- `ai.agentFile`: Agent-file path with default `./module-rush-agent.md`.
- `ai.strictPublicApi`: Public-API validation flag with default `true`.

## Notes

- This type is produced when module manifests are loaded.

## See also

- [`ModuleManifest`](./module-manifest.md)
- [`LoadedModule`](./loaded-module.md)
- [`ModuleRegistryEntry`](./module-registry-entry.md)
