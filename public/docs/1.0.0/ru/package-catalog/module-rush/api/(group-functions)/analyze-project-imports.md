# analyzeProjectImports

Parses module source files and records imports between modules and shared sections.

## Entrypoints

- `@da_b1rmuda/module-rush/analysis`

## Purpose

`analyzeProjectImports()` walks the `sourceFilePaths` of loaded modules, extracts static imports, re-exports, dynamic imports, and import-type references, and returns normalized [`ProjectImportRecord`](../types/project-import-record.md) items.

## Signature

```ts
function analyzeProjectImports(
  config: ResolvedModuleRushConfig,
  modules: LoadedModule[],
): Promise<ProjectImportRecord[]>
```

## Parameters

- `config`: [`ResolvedModuleRushConfig`](../types/resolved-module-rush-config.md). Used for alias interpretation and type-import behavior.
- `modules`: [`LoadedModule`](../types/loaded-module.md)`[]`. Modules whose `sourceFilePaths` should be scanned.

## Returns

- `Promise<`[`ProjectImportRecord`](../types/project-import-record.md)`[]>`. Sorted import records.

## Throws

- Filesystem read errors or parser-related failures while scanning source files.

## Usage Notes

- Type-only imports are skipped when `config.analysis.followTypeImports` is `false`.
- Relative imports attempt to resolve a target file path and target module owner.
- Module aliases are recognized through `config.aliases.modules`.
- Shared aliases are recognized through `config.aliases.shared`.

## Example

```ts
import { buildProjectContext } from '@da_b1rmuda/module-rush';
import { analyzeProjectImports } from '@da_b1rmuda/module-rush/analysis';

const context = await buildProjectContext(process.cwd());
const imports = await analyzeProjectImports(context.config, context.modules);
console.log(imports.length);
```

## See also

- [`ProjectImportRecord`](../types/project-import-record.md)
- [`buildModuleDependencyGraph`](./build-module-dependency-graph.md)
- [`buildProjectContext`](./build-project-context.md)
