# checkProject

Runs the full architecture rule set for a project.

## Entrypoints

- `@da_b1rmuda/module-rush`

## Purpose

`checkProject()` builds a [`ProjectContext`](../types/project-context.md), executes the rules pipeline, and returns a [`CheckResult`](../types/check-result.md) with grouped counts.

## Signature

```ts
function checkProject(cwd?: string): Promise<CheckResult>
```

## Parameters

- `cwd`: `string`. Optional working directory. Defaults to `process.cwd()`.

## Returns

- `Promise<`[`CheckResult`](../types/check-result.md)`>`. Diagnostics plus error, warning, and info counts.

## Throws

- Errors propagated from [`buildProjectContext`](./build-project-context.md).

## Usage Notes

- The rule pipeline includes file-presence checks, metadata checks, import-boundary rules, circular-dependency checks, public-API validity, and route checks.
- CLI command `module-rush check` sets exit code `1` only when `errorCount > 0`.

## Example

```ts
import { checkProject } from '@da_b1rmuda/module-rush';

const result = await checkProject(process.cwd());
console.log(result.errorCount, result.warningCount, result.infoCount);
```

## See also

- [`CheckResult`](../types/check-result.md)
- [`Diagnostic`](../types/diagnostic.md)
- [`doctorProject`](./doctor-project.md)
