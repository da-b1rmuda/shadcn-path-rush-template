# renderCliReport

Renders an architecture report as terminal-friendly text.

## Entrypoints

- `@da_b1rmuda/module-rush/analysis`

## Purpose

`renderCliReport()` converts an [`ArchitectureReport`](../types/architecture-report.md) into a multi-section plain-text summary.

## Signature

```ts
function renderCliReport(report: ArchitectureReport): string
```

## Parameters

- `report`: [`ArchitectureReport`](../types/architecture-report.md). Report object to render.

## Returns

- `string`. Terminal-oriented report text with summary, ownership, domains, route coverage, lazy warnings, shared sprawl, and violations.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- Shared-sprawl output is truncated to the first ten entries.
- When there are no lazy warnings or no violations, the renderer prints `- none`.

## Example

```ts
import { buildArchitectureReport, buildProjectContext } from '@da_b1rmuda/module-rush';
import { renderCliReport } from '@da_b1rmuda/module-rush/analysis';

const context = await buildProjectContext(process.cwd());
const report = buildArchitectureReport(context);
console.log(renderCliReport(report));
```

## See also

- [`ArchitectureReport`](../types/architecture-report.md)
- [`renderJsonReport`](./render-json-report.md)
- [`renderHtmlReport`](./render-html-report.md)
