# buildModuleRegistry

Builds normalized registry entries from a loaded project context.

## Entrypoints

- `@da_b1rmuda/module-rush`
- `@da_b1rmuda/module-rush/path`

## Purpose

`buildModuleRegistry()` converts context modules with loaded manifests into sorted [`ModuleRegistryEntry`](../types/module-registry-entry.md) objects.

## Signature

```ts
function buildModuleRegistry(context: ProjectContext): ModuleRegistryEntry[]
```

## Parameters

- `context`: [`ProjectContext`](../types/project-context.md). A fully loaded project context.

## Returns

- [`ModuleRegistryEntry`](../types/module-registry-entry.md)`[]`. One entry for each module that has a loaded manifest, sorted by `name`.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- Modules without a loaded manifest are skipped.
- The function copies `routeDefinitions` and `routeFilePaths` from the context.
- The returned `routes` array is empty at this stage. Dynamic import loaders are injected later by [`serializeModuleRegistry`](./serialize-module-registry.md) when format is `'ts'`.

## Example

```ts
import { buildModuleRegistry, buildProjectContext } from '@da_b1rmuda/module-rush';

const context = await buildProjectContext(process.cwd());
const registry = buildModuleRegistry(context);
console.log(registry.map((entry) => entry.name));
```

## See also

- [`ModuleRegistryEntry`](../types/module-registry-entry.md)
- [`serializeModuleRegistry`](./serialize-module-registry.md)
- [`emitModuleRegistryFile`](./emit-module-registry-file.md)
