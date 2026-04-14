# Configuration

## Root config file

The package loader expects a root config file named `module-rush.config.ts`, `module-rush.config.mts`, `module-rush.config.js`, `module-rush.config.mjs`, or `module-rush.config.cjs`. The file should default-export [`defineConfig`](./api/functions/define-config.md)([`ModuleRushConfig`](./api/types/module-rush-config.md)).

```ts
import { defineConfig } from '@da_b1rmuda/module-rush';

export default defineConfig({
  modulesDir: 'src/modules',
  domainsDir: 'src/domains',
  framework: 'react',
  bundler: 'vite',
  routing: {
    provider: 'path-rush',
    emitRegistryFile: 'src/app/module-registry.generated.ts',
  },
});
```

## Root config defaults

Defaults come from [`NormalizedModuleRushConfig`](./api/types/normalized-module-rush-config.md):

- `rootDir`: `'.'`
- `srcDir`: `'src'`
- `modulesDir`: `'src/modules'`
- `domainsDir`: `'src/domains'`
- `aliases.modules`: `'@/modules'`
- `aliases.shared`: `'@/shared'`
- `barrelMode`: `'explicit'`
- `routing.provider`: `'path-rush'`
- `routing.routesDirName`: `'routes'`
- `routing.emitRegistryFile`: `'src/app/module-registry.generated.ts'`
- `rules.forbidDeepImports`: `true`
- `rules.forbidCircularDeps`: `true`
- `rules.requireModuleConfig`: `true`
- `rules.requireModuleAgent`: `true`
- `rules.requirePublicIndex`: `true`
- `rules.requireOwner`: `true`
- `rules.requireDomain`: `true`
- `rules.requireReadme`: `false`
- `reports.json`: `true`
- `reports.html`: `true`
- `analysis.tsconfigPath`: `'./tsconfig.json'`
- `analysis.includeTests`: `false`
- `analysis.followTypeImports`: `false`
- `vite.analyzeDynamicImports`: `true`
- `vite.statsFilePath`: `''`

## Module manifest

Each module can define `module.config.ts` and export [`defineModule`](./api/functions/define-module.md)([`ModuleManifest`](./api/types/module-manifest.md)):

```ts
import { defineModule } from '@da_b1rmuda/module-rush';

export default defineModule({
  name: 'checkout',
  domain: 'commerce',
  owner: 'team-payments',
  dependsOn: ['auth'],
  routing: {
    enabled: true,
    basePath: '/checkout',
    lazy: true,
  },
});
```

Important fields:

- [`ModuleManifest.name`](./api/types/module-manifest.md): module identifier and expected folder match.
- [`ModuleManifest.domain`](./api/types/module-manifest.md): domain ownership used by rules and reports.
- [`ModuleManifest.owner`](./api/types/module-manifest.md): ownership used by rules and reports.
- [`ModuleManifest.dependsOn`](./api/types/module-manifest.md): allowed module or shared dependencies.
- [`ModuleManifest.publicApi`](./api/types/module-public-api-map.md): public sections exported through `index.ts`.
- [`ModuleManifest.rules`](./api/types/module-manifest.md): local dependency policy.
- [`ModuleManifest.ai`](./api/types/module-manifest.md): agent-file settings.

## Domain manifest

Each domain can define `domain.config.ts` and export [`defineDomain`](./api/functions/define-domain.md)([`DomainManifest`](./api/types/domain-manifest.md)):

```ts
import { defineDomain } from '@da_b1rmuda/module-rush';

export default defineDomain({
  name: 'commerce',
  modules: ['checkout'],
  owner: 'team-payments',
});
```

## Route declaration

Route files are loaded from `routes/**/*.route.*` and default-export [`defineModuleRoute`](./api/functions/define-module-route.md)([`ModuleRouteDefinition`](./api/types/module-route-definition.md)):

```ts
import { defineModuleRoute } from '@da_b1rmuda/module-rush/path';

export default defineModuleRoute({
  name: 'checkout.index',
  path: '/checkout',
  lazy: true,
  loader: () => import('./pages/CheckoutPage'),
});
```

## Resolved config

`resolveConfig()` is not a public export, but [`buildProjectContext`](./api/functions/build-project-context.md) and related functions operate on the resolved absolute-path form [`ResolvedModuleRushConfig`](./api/types/resolved-module-rush-config.md).

## See also

- [`ModuleRushConfig`](./api/types/module-rush-config.md)
- [`ModuleManifest`](./api/types/module-manifest.md)
- [`DomainManifest`](./api/types/domain-manifest.md)
- [`ModuleRouteDefinition`](./api/types/module-route-definition.md)
