# Basic Usage

## 1. Define the root contract

Create `module-rush.config.ts` with [`defineConfig`](../api/functions/define-config.md) and the shape [`ModuleRushConfig`](../api/types/module-rush-config.md). The smallest usable config needs `modulesDir`, `framework`, `bundler`, and `routing.provider`.

## 2. Declare domains and modules

- Add domain manifests with [`defineDomain`](../api/functions/define-domain.md) and [`DomainManifest`](../api/types/domain-manifest.md).
- Add module manifests with [`defineModule`](../api/functions/define-module.md) and [`ModuleManifest`](../api/types/module-manifest.md).
- Add route files with [`defineModuleRoute`](../api/functions/define-module-route.md) when `routing.enabled` is true.

## 3. Keep module boundaries explicit

By default the package checks:

- missing module config
- missing public index
- missing module agent file
- missing owner
- missing domain
- deep imports
- undeclared dependencies
- forbidden module or domain dependencies
- circular module dependencies
- route-definition and routing mismatches

Use [`checkProject`](../api/functions/check-project.md) or `module-rush check` to run the rules.

## 4. Build derived artifacts

- Use [`buildProjectContext`](../api/functions/build-project-context.md) to aggregate config, discovered modules, domains, routes, and imports.
- Use [`buildModuleRegistry`](../api/functions/build-module-registry.md) and [`serializeModuleRegistry`](../api/functions/serialize-module-registry.md) to produce registry output.
- Use [`buildArchitectureReport`](../api/functions/build-architecture-report.md) and [`buildArchitectureGraph`](../api/functions/build-architecture-graph.md) for reporting and visualization.

## 5. Verify the integration

Run `module-rush doctor` or call [`doctorProject`](../api/functions/doctor-project.md). This checks config loading, tsconfig presence, Vite config, React/Vite dependencies, alias consistency, registry build, registry output path, and Path-rush readiness.
