# serializeModuleRegistry

Serializes registry entries as JSON or TypeScript source.

## Entrypoints

- `@da_b1rmuda/module-rush`
- `@da_b1rmuda/module-rush/path`

## Purpose

`serializeModuleRegistry()` takes [`ModuleRegistryEntry`](../types/module-registry-entry.md) data and produces either JSON text or a TypeScript module that exports `moduleRegistry`.

## Signature

```ts
function serializeModuleRegistry(
  entries: ModuleRegistryEntry[],
  config: ResolvedModuleRushConfig,
  format?: 'ts' | 'json',
): string
```

## Parameters

- `entries`: [`ModuleRegistryEntry`](../types/module-registry-entry.md)`[]`. Registry entries to serialize.
- `config`: [`ResolvedModuleRushConfig`](../types/resolved-module-rush-config.md). Used to derive project-relative paths and route import specifiers.
- `format`: `'ts' | 'json'`. Optional output format. Defaults to `'ts'`.

## Returns

- `string`. Serialized registry content.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- JSON output removes the `routes` field.
- TypeScript output keeps `routeFiles` and `routeDefinitions` as project-relative paths and injects `routes` as `() => import(...)` functions derived from `routeFiles`.
- Import specifiers are based on `config.aliases.modules`.

## Example

```ts
import { buildModuleRegistry, buildProjectContext, serializeModuleRegistry } from '@da_b1rmuda/module-rush';

const context = await buildProjectContext(process.cwd());
const registry = buildModuleRegistry(context);
const source = serializeModuleRegistry(registry, context.config, 'json');
console.log(source);
```

## See also

- [`ModuleRegistryEntry`](../types/module-registry-entry.md)
- [`ResolvedModuleRushConfig`](../types/resolved-module-rush-config.md)
- [`emitModuleRegistryFile`](./emit-module-registry-file.md)
