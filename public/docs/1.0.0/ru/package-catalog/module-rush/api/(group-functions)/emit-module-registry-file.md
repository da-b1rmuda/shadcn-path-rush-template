# emitModuleRegistryFile

Writes a serialized registry file to disk.

## Entrypoints

- `@da_b1rmuda/module-rush`
- `@da_b1rmuda/module-rush/path`

## Purpose

`emitModuleRegistryFile()` serializes registry entries and writes them to an absolute output path.

## Signature

```ts
function emitModuleRegistryFile(
  entries: ModuleRegistryEntry[],
  config: ResolvedModuleRushConfig,
  filePath?: string,
  format?: 'ts' | 'json',
): Promise<string>
```

## Parameters

- `entries`: [`ModuleRegistryEntry`](../types/module-registry-entry.md)`[]`. Registry entries to write.
- `config`: [`ResolvedModuleRushConfig`](../types/resolved-module-rush-config.md). Used for default path resolution.
- `filePath`: `string`. Optional explicit output path.
- `format`: `'ts' | 'json'`. Optional output format. Defaults to `'ts'`.

## Returns

- `Promise<string>`. The absolute path of the written file.

## Throws

- Filesystem errors from directory creation or file writing.

## Usage Notes

- When `filePath` is omitted, the function uses `config.routing.emitRegistryFile`.
- If both are absent, it falls back to `src/app/module-registry.generated.ts`.
- Relative paths resolve from `config.rootDir`.

## Example

```ts
import {
  buildModuleRegistry,
  buildProjectContext,
  emitModuleRegistryFile,
} from '@da_b1rmuda/module-rush';

const context = await buildProjectContext(process.cwd());
const registry = buildModuleRegistry(context);
const outputPath = await emitModuleRegistryFile(registry, context.config);
console.log(outputPath);
```

## See also

- [`serializeModuleRegistry`](./serialize-module-registry.md)
- [`ResolvedModuleRushConfig`](../types/resolved-module-rush-config.md)
- [`ModuleRegistryEntry`](../types/module-registry-entry.md)
