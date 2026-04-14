# defineConfig

Validates and returns a root module-rush config object.

## Entrypoints

- `@da_b1rmuda/module-rush`

## Purpose

`defineConfig()` runs the runtime schema validator for [`ModuleRushConfig`](../types/module-rush-config.md) and returns the same object when validation succeeds.

## Signature

```ts
function defineConfig(config: ModuleRushConfig): ModuleRushConfig
```

## Parameters

- `config`: [`ModuleRushConfig`](../types/module-rush-config.md). Required root configuration object.

## Returns

- [`ModuleRushConfig`](../types/module-rush-config.md). The validated config object.

## Throws

- Validation errors from the internal Zod schema when required fields or literal values are invalid.

## Usage Notes

- `framework` must be `'react'`.
- `bundler` must be `'vite'`.
- `routing.provider` must be `'path-rush'`.

## Example

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

## See also

- [`ModuleRushConfig`](../types/module-rush-config.md)
- [`NormalizedModuleRushConfig`](../types/normalized-module-rush-config.md)
- [`buildProjectContext`](./build-project-context.md)
