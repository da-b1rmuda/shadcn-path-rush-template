# renderHtmlReport

Renders an architecture report as standalone HTML.

## Entrypoints

- `@da_b1rmuda/module-rush/analysis`

## Purpose

`renderHtmlReport()` converts an [`ArchitectureReport`](../types/architecture-report.md) into a static HTML document with summary and table sections.

## Signature

```ts
function renderHtmlReport(report: ArchitectureReport): string
```

## Parameters

- `report`: [`ArchitectureReport`](../types/architecture-report.md). Report object to render.

## Returns

- `string`. A full HTML document string.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- The output includes inline CSS and does not depend on external assets.
- The document contains summary, ownership, domains, violations, and lazy-warnings tables.

## Example

```ts
import { buildArchitectureReport, buildProjectContext } from '@da_b1rmuda/module-rush';
import { renderHtmlReport } from '@da_b1rmuda/module-rush/analysis';

const context = await buildProjectContext(process.cwd());
const report = buildArchitectureReport(context);
const html = renderHtmlReport(report);
console.log(html);
```

## See also

- [`ArchitectureReport`](../types/architecture-report.md)
- [`renderCliReport`](./render-cli-report.md)
- [`renderJsonReport`](./render-json-report.md)
