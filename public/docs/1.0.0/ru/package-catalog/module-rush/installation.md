# Installation

## Prerequisites

- Node.js `>=18`, as declared in `plugin/package.json`.
- A React + Vite project, because [`ModuleRushConfig`](./api/types/module-rush-config.md) only accepts `framework: 'react'` and `bundler: 'vite'`.
- A `tsconfig.json` file if you want [`doctorProject`](./api/functions/doctor-project.md) and import analysis to validate aliases cleanly.

## Package installation

The current published package name in metadata is:

```bash
npm install @da_b1rmuda/module-rush
```

## Import entrypoints

Use the scoped package name that matches `plugin/package.json`:

```ts
import { defineConfig, defineModule, defineDomain } from '@da_b1rmuda/module-rush';
import { defineModuleRoute } from '@da_b1rmuda/module-rush/path';
import { analyzeLazyModules } from '@da_b1rmuda/module-rush/analysis';
import { createTestConfig } from '@da_b1rmuda/module-rush/testing';
```

## Minimal verification

This is the smallest confirmed import check for the current packed artifact:

```ts
import { defineConfig } from '@da_b1rmuda/module-rush';

export default defineConfig({
  modulesDir: 'src/modules',
  framework: 'react',
  bundler: 'vite',
  routing: {
    provider: 'path-rush',
  },
});
```

## Important limitation

The current `init` and `create` templates still generate unscoped imports such as `module-rush` and `module-rush/path`. Those generated files do not match the current package name and should be edited to use `@da_b1rmuda/module-rush` and `@da_b1rmuda/module-rush/path` until the package metadata and scaffolding are aligned.

## See also

- [`quick-start.md`](./quick-start.md)
- [`cli.md`](./cli.md)
- [`guides/troubleshooting.md`](./guides/troubleshooting.md)
