# Advanced Example

This example uses the programmatic API to inspect a configured project.

```ts
import {
  buildArchitectureGraph,
  buildArchitectureReport,
  buildModuleRegistry,
  buildProjectContext,
} from '@da_b1rmuda/module-rush';
import {
  analyzeLazyModules,
  renderJsonReport,
} from '@da_b1rmuda/module-rush/analysis';

const context = await buildProjectContext(process.cwd());
const registry = buildModuleRegistry(context);
const graph = buildArchitectureGraph(context);
const report = buildArchitectureReport(context);
const lazyWarnings = analyzeLazyModules(context);

console.log(registry.length);
console.log(graph.nodes.length, graph.edges.length);
console.log(lazyWarnings.length);
console.log(renderJsonReport(report));
```

## Confirmed outputs

- [`buildProjectContext`](../api/functions/build-project-context.md) returns [`ProjectContext`](../api/types/project-context.md).
- [`buildModuleRegistry`](../api/functions/build-module-registry.md) returns [`ModuleRegistryEntry`](../api/types/module-registry-entry.md) records sorted by module name.
- [`buildArchitectureGraph`](../api/functions/build-architecture-graph.md) returns [`ArchitectureGraph`](../api/types/architecture-graph.md).
- [`buildArchitectureReport`](../api/functions/build-architecture-report.md) returns [`ArchitectureReport`](../api/types/architecture-report.md).
- [`analyzeLazyModules`](../api/functions/analyze-lazy-modules.md) returns [`LazyWarningEntry`](../api/types/lazy-warning-entry.md) items.

## Notes

- Graph renderers are currently exposed through the CLI, not through the public `analysis` entrypoint.
- Report renderers are public through [`renderCliReport`](../api/functions/render-cli-report.md), [`renderJsonReport`](../api/functions/render-json-report.md), and [`renderHtmlReport`](../api/functions/render-html-report.md).
