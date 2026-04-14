# module-rush

`module-rush` is a feature-module architecture toolkit for React + Vite projects. In this repository the published package is built from `plugin/`, while `template/demo-app/` acts as a verified example consumer layout.

## What the package includes

- Typed helpers for root, module, domain, and route declarations: [`defineConfig`](./api/functions/define-config.md), [`defineModule`](./api/functions/define-module.md), [`defineDomain`](./api/functions/define-domain.md), and [`defineModuleRoute`](./api/functions/define-module-route.md).
- Filesystem discovery, manifest loading, import analysis, and architecture checks through [`buildProjectContext`](./api/functions/build-project-context.md), [`checkProject`](./api/functions/check-project.md), and [`doctorProject`](./api/functions/doctor-project.md).
- Registry, report, and graph generation through [`buildModuleRegistry`](./api/functions/build-module-registry.md), [`buildArchitectureReport`](./api/functions/build-architecture-report.md), and [`buildArchitectureGraph`](./api/functions/build-architecture-graph.md).
- Extra entrypoints for analysis, route integration, and testing documented in [`api/index.md`](./api/index.md).

## Start here

- Read [`overview.md`](./overview.md) for the package boundary and confirmed capabilities.
- Read [`installation.md`](./installation.md) before using the package in a consumer project.
- Follow [`quick-start.md`](./quick-start.md) for the smallest confirmed setup.
- Use [`cli.md`](./cli.md) if you want command-line workflows.

## Key API pages

- [`ModuleRushConfig`](./api/types/module-rush-config.md)
- [`ModuleManifest`](./api/types/module-manifest.md)
- [`DomainManifest`](./api/types/domain-manifest.md)
- [`ModuleRouteDefinition`](./api/types/module-route-definition.md)
- [`ProjectContext`](./api/types/project-context.md)
- [`ArchitectureReport`](./api/types/architecture-report.md)
- [`ModuleRegistryEntry`](./api/types/module-registry-entry.md)

## Important note

The current package metadata and generated template imports are not fully aligned. Installation and manual scoped imports are documented from confirmed behavior in [`installation.md`](./installation.md), while the scaffolding mismatch is tracked in [`problems.md`](./problems.md) and [`guides/troubleshooting.md`](./guides/troubleshooting.md).
