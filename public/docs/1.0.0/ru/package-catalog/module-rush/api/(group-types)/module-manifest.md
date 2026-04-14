# ModuleManifest

Defines the public shape accepted by [`defineModule`](../functions/define-module.md).

## Definition

```ts
type ModuleManifest = {
  name: string;
  description?: string;
  domain?: string;
  owner?: string;
  tags?: string[];
  publicApi?: ModulePublicApiMap;
  dependsOn?: string[];
  routing?: {
    enabled?: boolean;
    basePath?: string;
    lazy?: boolean;
  };
  rules?: {
    forbidDeepImports?: boolean;
    forbidCircularDeps?: boolean;
    allowImportsFrom?: string[];
    forbidImportsFrom?: string[];
  };
  ai?: {
    agentFile?: string;
    strictPublicApi?: boolean;
  };
};
```

## Fields

- `name`: Module identifier.
- `description`: Optional module description.
- `domain`: Optional domain name.
- `owner`: Optional owner name.
- `tags`: Optional tag list.
- `publicApi`: Optional [`ModulePublicApiMap`](./module-public-api-map.md).
- `dependsOn`: Optional dependency IDs.
- `routing`: Optional route settings.
- `rules`: Optional local dependency rules.
- `ai`: Optional module-agent settings.

## Notes

- Defaults are applied in [`NormalizedModuleManifest`](./normalized-module-manifest.md).
- Several fields may still be required later by rules, even though they are optional at declaration time.

## See also

- [`ModulePublicApiMap`](./module-public-api-map.md)
- [`NormalizedModuleManifest`](./normalized-module-manifest.md)
- [`defineModule`](../functions/define-module.md)
