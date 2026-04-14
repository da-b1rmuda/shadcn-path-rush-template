# Basic Example

This example mirrors the smallest confirmed consumer project with one domain and one module.

## Files

`module-rush.config.ts`

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

`src/domains/commerce/domain.config.ts`

```ts
import { defineDomain } from '@da_b1rmuda/module-rush';

export default defineDomain({
  name: 'commerce',
  modules: ['checkout'],
  owner: 'team-payments',
});
```

`src/modules/checkout/module.config.ts`

```ts
import { defineModule } from '@da_b1rmuda/module-rush';

export default defineModule({
  name: 'checkout',
  domain: 'commerce',
  owner: 'team-payments',
  dependsOn: [],
  routing: {
    enabled: true,
    basePath: '/checkout',
    lazy: false,
  },
});
```

`src/modules/checkout/routes/checkout.route.ts`

```ts
import { defineModuleRoute } from '@da_b1rmuda/module-rush/path';

export default defineModuleRoute({
  name: 'checkout.index',
  path: '/checkout',
  lazy: false,
  component: () => null,
});
```

## Commands

```bash
module-rush check
module-rush registry --stdout --json
module-rush doctor
```

## What this proves

- [`defineConfig`](../api/functions/define-config.md), [`defineDomain`](../api/functions/define-domain.md), [`defineModule`](../api/functions/define-module.md), and [`defineModuleRoute`](../api/functions/define-module-route.md) accept the shown shapes.
- [`checkProject`](../api/functions/check-project.md) can pass with a minimal module.
- [`buildModuleRegistry`](../api/functions/build-module-registry.md) can produce a single-entry registry for the project.
