# doctorProject

Inspects whether a project is wired for module-rush integration.

## Entrypoints

- `@da_b1rmuda/module-rush`

## Purpose

`doctorProject()` checks config loading, tsconfig presence, Vite config, React and Vite dependencies, module directory presence, alias consistency, registry build, registry output path, and Path-rush readiness.

## Signature

```ts
function doctorProject(cwd?: string): Promise<DoctorResult>
```

## Parameters

- `cwd`: `string`. Optional working directory. Defaults to `process.cwd()`.

## Returns

- `Promise<`[`DoctorResult`](../types/doctor-result.md)`>`. A list of pass, warn, and fail checks with aggregate counters.

## Throws

- No package-specific throws are intentionally surfaced; config-load failures are converted into fail checks.

## Usage Notes

- Alias consistency is checked against `tsconfig.json` path keys.
- `registry-output` is a warning when the parent directory does not exist yet but the resolved target still stays inside project root.
- CLI command `module-rush doctor` exits with code `1` only when at least one check fails.

## Example

```ts
import { doctorProject } from '@da_b1rmuda/module-rush';

const result = await doctorProject(process.cwd());
console.log(result.failCount);
```

## See also

- [`DoctorResult`](../types/doctor-result.md)
- [`buildProjectContext`](./build-project-context.md)
- [`buildModuleRegistry`](./build-module-registry.md)
