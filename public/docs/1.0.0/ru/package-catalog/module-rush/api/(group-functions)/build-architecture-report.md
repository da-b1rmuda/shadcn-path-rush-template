# buildArchitectureReport

Builds an aggregate architecture report from project context.

## Entrypoints

- `@da_b1rmuda/module-rush`
- `@da_b1rmuda/module-rush/analysis`

## Purpose

`buildArchitectureReport()` runs the rules, builds route coverage, lazy warnings, shared-sprawl data, and registry summary, then returns an [`ArchitectureReport`](../types/architecture-report.md).

## Signature

```ts
function buildArchitectureReport(context: ProjectContext): ArchitectureReport
```

## Parameters

- `context`: [`ProjectContext`](../types/project-context.md). A loaded project context.

## Returns

- [`ArchitectureReport`](../types/architecture-report.md). The generated report object.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- Violations come from the same rule pipeline used by [`checkProject`](./check-project.md).
- `lazyWarnings` are produced by [`analyzeLazyModules`](./analyze-lazy-modules.md).
- `registrySummary` is derived from [`buildModuleRegistry`](./build-module-registry.md).
- `generatedAt` uses `new Date().toISOString()`.

## Example

```ts
import { buildArchitectureReport, buildProjectContext } from '@da_b1rmuda/module-rush';

const context = await buildProjectContext(process.cwd());
const report = buildArchitectureReport(context);
console.log(report.summary);
```

## See also

- [`ArchitectureReport`](../types/architecture-report.md)
- [`renderJsonReport`](./render-json-report.md)
- [`renderHtmlReport`](./render-html-report.md)
