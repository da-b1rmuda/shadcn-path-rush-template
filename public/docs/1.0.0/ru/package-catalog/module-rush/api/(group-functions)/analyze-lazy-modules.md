# analyzeLazyModules

Builds warning entries for modules marked as lazy.

## Entrypoints

- `@da_b1rmuda/module-rush`
- `@da_b1rmuda/module-rush/analysis`

## Purpose

`analyzeLazyModules()` examines route files and dependency structure for lazy-enabled modules and returns [`LazyWarningEntry`](../types/lazy-warning-entry.md) warnings when the lazy boundary looks suspicious.

## Signature

```ts
function analyzeLazyModules(context: ProjectContext): LazyWarningEntry[]
```

## Parameters

- `context`: [`ProjectContext`](../types/project-context.md). A loaded project context.

## Returns

- [`LazyWarningEntry`](../types/lazy-warning-entry.md)`[]`. Sorted warning entries.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- Only modules with `manifest.routing.enabled === true` and `manifest.routing.lazy === true` are analyzed.
- Warnings are produced when route files have no dynamic imports, contain eager cross-module imports, exceed a transitive dependency threshold of more than three modules, or fail to match configured Vite manifest chunks.
- If `config.vite.statsFilePath` points to a missing or invalid file, Vite-manifest matching quietly becomes unavailable.

## Example

```ts
import { buildProjectContext } from '@da_b1rmuda/module-rush';
import { analyzeLazyModules } from '@da_b1rmuda/module-rush/analysis';

const context = await buildProjectContext(process.cwd());
const warnings = analyzeLazyModules(context);
console.log(warnings);
```

## See also

- [`LazyWarningEntry`](../types/lazy-warning-entry.md)
- [`buildModuleDependencyGraph`](./build-module-dependency-graph.md)
- [`buildArchitectureReport`](./build-architecture-report.md)
