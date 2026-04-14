# buildModuleDependencyGraph

Collapses import records into module-to-module dependency edges.

## Entrypoints

- `@da_b1rmuda/module-rush/analysis`

## Purpose

`buildModuleDependencyGraph()` converts [`ProjectImportRecord`](../types/project-import-record.md) data into a `Map<string, string[]>` keyed by source module name.

## Signature

```ts
function buildModuleDependencyGraph(importRecords: ProjectImportRecord[]): Map<string, string[]>
```

## Parameters

- `importRecords`: [`ProjectImportRecord`](../types/project-import-record.md)`[]`. Import records to collapse.

## Returns

- `Map<string, string[]>`. Unique, sorted target module names for each source module.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- Records without `targetModuleName` are ignored.
- Self-dependencies are ignored.
- Shared dependencies are not included because they do not resolve to `targetModuleName`.

## Example

```ts
import { buildProjectContext } from '@da_b1rmuda/module-rush';
import { buildModuleDependencyGraph } from '@da_b1rmuda/module-rush/analysis';

const context = await buildProjectContext(process.cwd());
const graph = buildModuleDependencyGraph(context.importRecords);
console.log(graph.get('checkout'));
```

## See also

- [`ProjectImportRecord`](../types/project-import-record.md)
- [`findCircularModuleDependencies`](./find-circular-module-dependencies.md)
- [`buildArchitectureGraph`](./build-architecture-graph.md)
