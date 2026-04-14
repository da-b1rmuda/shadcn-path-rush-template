# CLI

## Command list

- `module-rush init`
- `module-rush create <name>`
- `module-rush generate <kind> <name>`
- `module-rush check`
- `module-rush registry`
- `module-rush graph`
- `module-rush report`
- `module-rush doctor`

## init

Creates the base directory layout plus `module-rush.config.ts` and `module-rush-agent.md`.

Options:

- `--cwd <path>`
- `--force`
- `--dry-run`

## create

Creates a module directory, `index.ts`, `module.config.ts`, `module-rush-agent.md`, `README.md`, `__tests__/boundaries.spec.ts`, and optionally an initial route file.

Options:

- `--cwd <path>`
- `--domain <name>`
- `--owner <name>`
- `--route <path>`
- `--lazy`
- `--description <text>`
- `--force`
- `--dry-run`

## generate

Generates one module part. Supported kinds are `component`, `form`, `hook`, `route`, `model`, and `api`.

Options:

- `--cwd <path>`
- `--module <name>`
- `--path <routePath>`
- `--lazy`
- `--force`
- `--dry-run`

## check

Runs [`checkProject`](./api/functions/check-project.md) and prints diagnostics.

Options:

- `--cwd <path>`

Exit behavior:

- exit code `1` when at least one error-level diagnostic is present
- exit code `0` otherwise

## registry

Builds the registry through [`buildModuleRegistry`](./api/functions/build-module-registry.md) and either prints or writes the serialized output.

Options:

- `--cwd <path>`
- `--out <path>`
- `--format <format>` where format is `ts` or `json`
- `--json`
- `--stdout`

## graph

Builds the graph through [`buildArchitectureGraph`](./api/functions/build-architecture-graph.md).

Options:

- `--cwd <path>`
- `--format <format>` where format is `terminal`, `json`, `dot`, or `html`
- `--json`
- `--dot`
- `--html`
- `--out <path>`
- `--stdout`

Default output filenames when writing:

- `module-rush-graph.json`
- `module-rush-graph.dot`
- `module-rush-graph.html`

## report

Builds the report through [`buildArchitectureReport`](./api/functions/build-architecture-report.md).

Options:

- `--cwd <path>`
- `--format <format>` where format is `terminal`, `json`, or `html`
- `--json`
- `--html`
- `--out <path>`
- `--stdout`

Default output filenames when writing:

- `module-rush-report.json`
- `module-rush-report.html`

## doctor

Runs [`doctorProject`](./api/functions/doctor-project.md) and prints pass, warn, and fail checks.

Options:

- `--cwd <path>`

Exit behavior:

- exit code `1` when at least one doctor check fails
- exit code `0` otherwise

## Important note

The CLI binary name is `module-rush`, but the current package name in metadata is `@da_b1rmuda/module-rush`. Generated template files still use unscoped imports and should be checked manually after `init` or `create`.
