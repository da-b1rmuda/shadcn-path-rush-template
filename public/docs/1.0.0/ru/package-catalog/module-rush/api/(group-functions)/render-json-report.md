# renderJsonReport

Renders an architecture report as formatted JSON.

## Entrypoints

- `@da_b1rmuda/module-rush/analysis`

## Purpose

`renderJsonReport()` stringifies an [`ArchitectureReport`](../types/architecture-report.md) with two-space indentation and a trailing newline.

## Signature

```ts
function renderJsonReport(report: ArchitectureReport): string
```

## Parameters

- `report`: [`ArchitectureReport`](../types/architecture-report.md). Report object to render.

## Returns

- `string`. Formatted JSON text.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- The output is exactly `JSON.stringify(report, null, 2)` plus `\n`.
- This renderer is used by CLI `report --json`.

## Example

```ts
import { buildArchitectureReport, buildProjectContext } from '@da_b1rmuda/module-rush';
import { renderJsonReport } from '@da_b1rmuda/module-rush/analysis';

const context = await buildProjectContext(process.cwd());
const report = buildArchitectureReport(context);
console.log(renderJsonReport(report));
```

## See also

- [`ArchitectureReport`](../types/architecture-report.md)
- [`renderCliReport`](./render-cli-report.md)
- [`renderHtmlReport`](./render-html-report.md)
