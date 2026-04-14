# @da_b1rmuda/pwa-rush-cli

`@da_b1rmuda/pwa-rush-cli` is a CLI package for adding PWA support to an existing React + Vite application. The current repository snapshot also exposes one programmatic entry point, [runInit](./api/functions/run-init.md).

This package detects a target React + Vite project, optionally installs dependencies, writes a web app manifest and bundled icons, patches the Vite config, patches the React entry file, and adds a TypeScript PWA type reference when the target entry file is `src/main.tsx`.

## What is included

- one CLI command: `init`
- one public function export: [runInit](./api/functions/run-init.md)
- manifest generation
- icon generation
- Vite config patching
- React entry patching
- optional demo UI generation

## Start here

- Read [overview](./overview.md) for package scope and supported project shape.
- Read [installation](./installation.md) for prerequisites and install/import paths.
- Read [quick-start](./quick-start.md) for the shortest confirmed execution path.
- Read [basic usage](./guides/basic-usage.md) for the full initialization flow.
- Read [API reference](./api/index.md) for the programmatic surface.

## Public API

- [runInit](./api/functions/run-init.md): initializes PWA support inside an existing React + Vite project.

## Repository status

The inspected repository snapshot contains unresolved package-name conflicts between the CLI, the generated imports, and the sibling runtime package. Those conflicts are documented in [troubleshooting](./guides/troubleshooting.md) and in the workflow artifact `problems.md`.
