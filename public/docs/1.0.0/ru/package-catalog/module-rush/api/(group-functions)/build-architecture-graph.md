# buildArchitectureGraph

Builds a graph of modules, domains, and their dependencies.

## Entrypoints

- `@da_b1rmuda/module-rush`
- `@da_b1rmuda/module-rush/analysis`

## Purpose

`buildArchitectureGraph()` produces [`ArchitectureGraph`](../types/architecture-graph.md) nodes and edges from a [`ProjectContext`](../types/project-context.md).

## Signature

```ts
function buildArchitectureGraph(context: ProjectContext): ArchitectureGraph
```

## Parameters

- `context`: [`ProjectContext`](../types/project-context.md). A loaded project context.

## Returns

- [`ArchitectureGraph`](../types/architecture-graph.md). Graph nodes and edges sorted by identifier.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- Every module becomes a `module:*` node.
- Every encountered domain becomes a `domain:*` node.
- Modules without a declared domain fall back to domain label `'undeclared'`.
- Cross-domain module imports become `domain-dependency` edges.

## Example

```ts
import { buildArchitectureGraph, buildProjectContext } from '@da_b1rmuda/module-rush';

const context = await buildProjectContext(process.cwd());
const graph = buildArchitectureGraph(context);
console.log(graph.nodes.length, graph.edges.length);
```

## See also

- [`ArchitectureGraph`](../types/architecture-graph.md)
- [`buildModuleDependencyGraph`](./build-module-dependency-graph.md)
- [`buildArchitectureReport`](./build-architecture-report.md)
