# Overview

## Purpose

`module-rush` standardizes a feature-module project layout for React + Vite codebases, loads configuration and manifest files from the filesystem, analyzes imports between modules, enforces architecture rules, and produces registries, reports, and graphs.

## Confirmed capabilities

- Runtime-validated contract helpers: [`defineConfig`](./api/functions/define-config.md), [`defineModule`](./api/functions/define-module.md), [`defineDomain`](./api/functions/define-domain.md), and [`defineModuleRoute`](./api/functions/define-module-route.md).
- Project discovery and aggregation through [`buildProjectContext`](./api/functions/build-project-context.md).
- Architecture checking through [`checkProject`](./api/functions/check-project.md) and the diagnostics types [`Diagnostic`](./api/types/diagnostic.md) and [`CheckResult`](./api/types/check-result.md).
- Integration diagnostics through [`doctorProject`](./api/functions/doctor-project.md).
- Registry generation through [`buildModuleRegistry`](./api/functions/build-module-registry.md), [`serializeModuleRegistry`](./api/functions/serialize-module-registry.md), and [`emitModuleRegistryFile`](./api/functions/emit-module-registry-file.md).
- Analysis and reporting through [`analyzeProjectImports`](./api/functions/analyze-project-imports.md), [`analyzeLazyModules`](./api/functions/analyze-lazy-modules.md), [`buildArchitectureGraph`](./api/functions/build-architecture-graph.md), and [`buildArchitectureReport`](./api/functions/build-architecture-report.md).

## Public entrypoints

- `@da_b1rmuda/module-rush`: root helpers, context builders, checks, registry, graph, report, and all public types.
- `@da_b1rmuda/module-rush/analysis`: import-analysis, lazy-analysis, dependency-graph, and report renderers.
- `@da_b1rmuda/module-rush/path`: route-definition and registry helpers.
- `@da_b1rmuda/module-rush/testing`: test configuration helper.

## Project conventions enforced by code

- Modules are discovered as first-level directories under `modulesDir`.
- Domains are discovered as first-level directories under `domainsDir` when a `domain.config.*` file exists.
- Route files are discovered only under `${routing.routesDirName}/**/*.route.{ts,tsx,js,jsx,mts,cts}`.
- By default the root config requires each module to have `module.config.ts`, `index.ts`, `module-rush-agent.md`, `owner`, and `domain`.

## Confirmed package boundary

The code does not expose a runtime router or a Path-rush route composer. It exposes route declarations, registry generation, and analysis surfaces that other tools can consume.

## Where to go next

- [`configuration.md`](./configuration.md) for config and manifest shapes.
- [`quick-start.md`](./quick-start.md) for a minimal confirmed setup.
- [`api/index.md`](./api/index.md) for the complete reference map.
