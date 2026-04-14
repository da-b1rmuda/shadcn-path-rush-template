# defineModule

Validates and returns a module manifest object.

## Entrypoints

- `@da_b1rmuda/module-rush`

## Purpose

`defineModule()` validates input against the module-manifest schema and returns the same [`ModuleManifest`](../types/module-manifest.md) object when validation succeeds.

## Signature

```ts
function defineModule(manifest: ModuleManifest): ModuleManifest
```

## Parameters

- `manifest`: [`ModuleManifest`](../types/module-manifest.md). Required module declaration.

## Returns

- [`ModuleManifest`](../types/module-manifest.md). The validated manifest object.

## Throws

- Validation errors from the internal Zod schema when the manifest shape is invalid.

## Usage Notes

- `name` is required.
- Optional `routing`, `rules`, `ai`, `publicApi`, `tags`, and `dependsOn` fields are normalized later by [`NormalizedModuleManifest`](../types/normalized-module-manifest.md).
- Public API validity checks only happen later through [`checkProject`](./check-project.md).

## Example

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

## See also

- [`ModuleManifest`](../types/module-manifest.md)
- [`NormalizedModuleManifest`](../types/normalized-module-manifest.md)
- [`checkProject`](./check-project.md)
