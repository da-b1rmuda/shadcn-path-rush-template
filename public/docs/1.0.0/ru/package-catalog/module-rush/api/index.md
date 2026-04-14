# API Reference

This page maps the public API by entrypoint. Full details live on the linked function and type pages.

## Entrypoints

### `@da_b1rmuda/module-rush`

Functions:

- [`defineConfig`](./functions/define-config.md): validate and return a root config object.
- [`defineDomain`](./functions/define-domain.md): validate and return a domain manifest.
- [`defineModule`](./functions/define-module.md): validate and return a module manifest.
- [`buildProjectContext`](./functions/build-project-context.md): load config, discover modules and domains, load manifests and routes, and analyze imports.
- [`checkProject`](./functions/check-project.md): run the architecture rules and return diagnostic counts.
- [`doctorProject`](./functions/doctor-project.md): inspect integration health.
- [`buildArchitectureGraph`](./functions/build-architecture-graph.md): produce graph nodes and edges.
- [`buildArchitectureReport`](./functions/build-architecture-report.md): produce the aggregate architecture report.
- [`analyzeLazyModules`](./functions/analyze-lazy-modules.md): analyze lazy-route modules.
- [`buildModuleRegistry`](./functions/build-module-registry.md): build `ModuleRegistryEntry[]`.
- [`emitModuleRegistryFile`](./functions/emit-module-registry-file.md): write registry output to disk.
- [`serializeModuleRegistry`](./functions/serialize-module-registry.md): serialize registry output in memory.

### `@da_b1rmuda/module-rush/analysis`

Functions:

- [`analyzeProjectImports`](./functions/analyze-project-imports.md)
- [`analyzeLazyModules`](./functions/analyze-lazy-modules.md)
- [`buildModuleDependencyGraph`](./functions/build-module-dependency-graph.md)
- [`findCircularModuleDependencies`](./functions/find-circular-module-dependencies.md)
- [`buildArchitectureGraph`](./functions/build-architecture-graph.md)
- [`buildArchitectureReport`](./functions/build-architecture-report.md)
- [`renderCliReport`](./functions/render-cli-report.md)
- [`renderHtmlReport`](./functions/render-html-report.md)
- [`renderJsonReport`](./functions/render-json-report.md)

Types:

- [`ProjectImportRecord`](./types/project-import-record.md)

### `@da_b1rmuda/module-rush/path`

Functions:

- [`defineModuleRoute`](./functions/define-module-route.md)
- [`buildModuleRegistry`](./functions/build-module-registry.md)
- [`emitModuleRegistryFile`](./functions/emit-module-registry-file.md)
- [`serializeModuleRegistry`](./functions/serialize-module-registry.md)

Types:

- [`ModuleRegistryEntry`](./types/module-registry-entry.md)
- [`ModuleRouteDefinition`](./types/module-route-definition.md)
- [`ModuleRouteLoader`](./types/module-route-loader.md)

### `@da_b1rmuda/module-rush/testing`

Functions:

- [`createTestConfig`](./functions/create-test-config.md)

## Public type groups

### Config and manifests

- [`DependencyRuleSelector`](./types/dependency-rule-selector.md)
- [`DependencyRule`](./types/dependency-rule.md)
- [`ModuleRushConfig`](./types/module-rush-config.md)
- [`NormalizedModuleRushConfig`](./types/normalized-module-rush-config.md)
- [`ResolvedModuleRushConfig`](./types/resolved-module-rush-config.md)
- [`DomainManifest`](./types/domain-manifest.md)
- [`NormalizedDomainManifest`](./types/normalized-domain-manifest.md)
- [`ModulePublicApiMap`](./types/module-public-api-map.md)
- [`ModuleManifest`](./types/module-manifest.md)
- [`ModuleSectionName`](./types/module-section-name.md)
- [`NormalizedModuleManifest`](./types/normalized-module-manifest.md)

### Project loading and diagnostics

- [`DiagnosticSeverity`](./types/diagnostic-severity.md)
- [`Diagnostic`](./types/diagnostic.md)
- [`CheckResult`](./types/check-result.md)
- [`DoctorCheckStatus`](./types/doctor-check-status.md)
- [`DoctorCheck`](./types/doctor-check.md)
- [`DoctorResult`](./types/doctor-result.md)
- [`DiscoveredModule`](./types/discovered-module.md)
- [`LoadedModule`](./types/loaded-module.md)
- [`DiscoveredDomain`](./types/discovered-domain.md)
- [`ProjectImportRecord`](./types/project-import-record.md)
- [`ProjectContext`](./types/project-context.md)

### Registry, routes, graph, and report

- [`ModuleRegistryEntry`](./types/module-registry-entry.md)
- [`ModuleRouteDefinition`](./types/module-route-definition.md)
- [`ModuleRouteLoader`](./types/module-route-loader.md)
- [`LoadedModuleRouteDefinition`](./types/loaded-module-route-definition.md)
- [`ArchitectureGraphNode`](./types/architecture-graph-node.md)
- [`ArchitectureGraphEdge`](./types/architecture-graph-edge.md)
- [`ArchitectureGraph`](./types/architecture-graph.md)
- [`OwnershipReportEntry`](./types/ownership-report-entry.md)
- [`DomainReportEntry`](./types/domain-report-entry.md)
- [`RouteCoverageEntry`](./types/route-coverage-entry.md)
- [`LazyWarningEntry`](./types/lazy-warning-entry.md)
- [`SharedSprawlEntry`](./types/shared-sprawl-entry.md)
- [`ArchitectureReport`](./types/architecture-report.md)

## No classes

No public classes are confirmed by the export boundary, so `api/classes/` is intentionally omitted.
