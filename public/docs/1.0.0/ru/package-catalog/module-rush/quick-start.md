# Quick Start

## Status

The smallest confirmed consumer workflow today is a manual setup that uses the scoped package name `@da_b1rmuda/module-rush`. The generated `init` and `create` templates still emit unscoped imports and therefore are not the safest first path until the naming conflict is fixed.

## 1. Install the package

```bash
npm install @da_b1rmuda/module-rush
```

## 2. Add root project files

Create `tsconfig.json` with aliases compatible with [`doctorProject`](./api/functions/doctor-project.md):

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/modules/*": ["src/modules/*"],
      "@/shared/*": ["src/shared/*"]
    }
  }
}
```

Create `vite.config.ts`:

```ts
import { defineConfig } from 'vite';

export default defineConfig({});
```

Create `module-rush.config.ts`:

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

## 3. Create one domain and one module

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

Also add:

- `src/modules/checkout/index.ts`
- `src/modules/checkout/module-rush-agent.md`

## 4. Validate the project

```bash
module-rush check
module-rush doctor
```

## 5. Build the registry

```bash
module-rush registry --stdout --json
```

The current implementation returns [`ModuleRegistryEntry`](./api/types/module-registry-entry.md) objects derived from [`ProjectContext`](./api/types/project-context.md).

## See also

- [`guides/basic-usage.md`](./guides/basic-usage.md)
- [`examples/basic-example.md`](./examples/basic-example.md)
- [`guides/troubleshooting.md`](./guides/troubleshooting.md)
