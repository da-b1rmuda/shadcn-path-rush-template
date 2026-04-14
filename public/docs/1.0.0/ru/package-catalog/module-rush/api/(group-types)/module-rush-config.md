# ModuleRushConfig

Defines the public shape accepted by [`defineConfig`](../functions/define-config.md).

## Definition

```ts
type ModuleRushConfig = {
  rootDir?: string;
  srcDir?: string;
  modulesDir: string;
  domainsDir?: string;
  aliases?: {
    modules: string;
    shared: string;
  };
  framework: 'react';
  bundler: 'vite';
  barrelMode?: 'auto' | 'explicit';
  routing: {
    provider: 'path-rush';
    routesDirName?: string;
    emitRegistryFile?: string;
  };
  rules?: {
    forbidDeepImports?: boolean;
    forbidCircularDeps?: boolean;
    requireModuleConfig?: boolean;
    requireModuleAgent?: boolean;
    requirePublicIndex?: boolean;
    requireOwner?: boolean;
    requireDomain?: boolean;
    requireReadme?: boolean;
  };
  dependencyRules?: DependencyRule[];
  reports?: {
    json?: boolean;
    html?: boolean;
  };
  analysis?: {
    tsconfigPath?: string;
    includeTests?: boolean;
    followTypeImports?: boolean;
  };
  vite?: {
    analyzeDynamicImports?: boolean;
    statsFilePath?: string;
  };
};
```

## Fields

- `rootDir`: Optional project root relative to the config file directory.
- `srcDir`: Optional source directory.
- `modulesDir`: Required modules directory.
- `domainsDir`: Optional domains directory.
- `aliases`: Optional module and shared import aliases.
- `framework`: Must be `'react'`.
- `bundler`: Must be `'vite'`.
- `barrelMode`: Optional `'auto'` or `'explicit'`.
- `routing`: Required routing block with `provider: 'path-rush'`.
- `rules`: Optional rule toggles.
- `dependencyRules`: Optional global dependency rules.
- `reports`: Optional report output toggles.
- `analysis`: Optional import-analysis options.
- `vite`: Optional lazy-analysis integration settings.

## Notes

- Defaults are applied in [`NormalizedModuleRushConfig`](./normalized-module-rush-config.md).
- Absolute path resolution is captured by [`ResolvedModuleRushConfig`](./resolved-module-rush-config.md).

## See also

- [`NormalizedModuleRushConfig`](./normalized-module-rush-config.md)
- [`ResolvedModuleRushConfig`](./resolved-module-rush-config.md)
- [`defineConfig`](../functions/define-config.md)
