# createTestConfig

Builds a normalized test config by merging overrides onto package defaults.

## Entrypoints

- `@da_b1rmuda/module-rush/testing`

## Purpose

`createTestConfig()` returns a [`NormalizedModuleRushConfig`](../types/normalized-module-rush-config.md) object suitable for fixtures and unit tests.

## Signature

```ts
function createTestConfig(overrides?: Partial<ModuleRushConfig>): NormalizedModuleRushConfig
```

## Parameters

- `overrides`: `Partial<`[`ModuleRushConfig`](../types/module-rush-config.md)`>`. Optional top-level overrides.

## Returns

- [`NormalizedModuleRushConfig`](../types/normalized-module-rush-config.md). A config with defaults merged into `aliases`, `routing`, `rules`, `reports`, `analysis`, and `vite`.

## Throws

- No package-specific throws are implemented.

## Usage Notes

- Nested config sections are merged shallowly by section.
- The helper uses the same defaults documented on [`NormalizedModuleRushConfig`](../types/normalized-module-rush-config.md).

## Example

```ts
import { createTestConfig } from '@da_b1rmuda/module-rush/testing';

const config = createTestConfig({
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
