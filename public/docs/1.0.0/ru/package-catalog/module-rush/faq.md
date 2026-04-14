# FAQ

## What package name should I install?

Install `@da_b1rmuda/module-rush`. That is the name declared in `plugin/package.json`. Existing templates and older docs still use `module-rush`, and that mismatch is tracked in [`problems.md`](./problems.md).

## Does module-rush build runtime routes?

Not by itself. The confirmed package surface builds route declarations and module registry data through [`defineModuleRoute`](./api/functions/define-module-route.md), [`buildModuleRegistry`](./api/functions/build-module-registry.md), and [`serializeModuleRegistry`](./api/functions/serialize-module-registry.md).

## Are tests included in import analysis?

Not by default. [`NormalizedModuleRushConfig.analysis.includeTests`](./api/types/normalized-module-rush-config.md) defaults to `false`.

## Which files are required for a module by default?

The default rules require `module.config.ts`, `index.ts`, and `module-rush-agent.md`. They also require `owner` and `domain` fields in [`ModuleManifest`](./api/types/module-manifest.md). `README.md` is optional by default because `requireReadme` defaults to `false`.

## Are there public classes?

No public classes are confirmed by the export boundary in `plugin/src/index.ts`, `plugin/src/analysis.ts`, `plugin/src/path.ts`, and `plugin/src/testing.ts`.

## Can I use the package programmatically instead of through the CLI?

Yes. The root entrypoint exports [`buildProjectContext`](./api/functions/build-project-context.md), [`checkProject`](./api/functions/check-project.md), [`doctorProject`](./api/functions/doctor-project.md), [`buildArchitectureGraph`](./api/functions/build-architecture-graph.md), [`buildArchitectureReport`](./api/functions/build-architecture-report.md), and registry helpers.
