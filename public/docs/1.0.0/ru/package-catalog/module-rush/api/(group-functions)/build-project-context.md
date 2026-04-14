# buildProjectContext

Builds the full in-memory context for a module-rush project.

## Entrypoints

- `@da_b1rmuda/module-rush`

## Purpose

`buildProjectContext()` loads the root config, discovers modules and domains, loads manifests and route definitions, analyzes project imports, and returns a [`ProjectContext`](../types/project-context.md).

## Signature

```ts
function buildProjectContext(cwd?: string): Promise<ProjectContext>
```

## Parameters

- `cwd`: `string`. Optional working directory. Defaults to `process.cwd()`.

## Returns

- `Promise<`[`ProjectContext`](../types/project-context.md)`>`. The resolved project context.

## Throws

- Errors from root-config loading or import analysis when they are not converted into load diagnostics.

## Usage Notes

- Invalid module manifests, domain manifests, and route files are collected into `loadDiagnostics` rather than stopping the whole build.
- The returned `modules` array contains [`LoadedModule`](../types/loaded-module.md) entries.
- The returned `importRecords` array comes from [`analyzeProjectImports`](./analyze-project-imports.md).

## Example

```ts
import { buildProjectContext } from '@da_b1rmuda/module-rush';

const context = await buildProjectContext(process.cwd());
console.log(context.modules.length);
```

## See also

- [`ProjectContext`](../types/project-context.md)
- [`checkProject`](./check-project.md)
- [`buildModuleRegistry`](./build-module-registry.md)
