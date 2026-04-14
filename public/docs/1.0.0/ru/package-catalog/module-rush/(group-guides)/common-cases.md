# Common Cases

## Programmatic project analysis

Use [`buildProjectContext`](../api/functions/build-project-context.md) when you need one in-memory object for modules, domains, route definitions, imports, and load diagnostics. This is the shared input for [`buildArchitectureGraph`](../api/functions/build-architecture-graph.md), [`buildArchitectureReport`](../api/functions/build-architecture-report.md), [`buildModuleRegistry`](../api/functions/build-module-registry.md), and [`analyzeLazyModules`](../api/functions/analyze-lazy-modules.md).

## Registry generation for route tooling

Use [`buildModuleRegistry`](../api/functions/build-module-registry.md) when you need the raw registry array. Use [`serializeModuleRegistry`](../api/functions/serialize-module-registry.md) for in-memory TS or JSON output, or [`emitModuleRegistryFile`](../api/functions/emit-module-registry-file.md) to write the result to disk.

## Dependency-boundary enforcement

Use [`checkProject`](../api/functions/check-project.md) or `module-rush check` to evaluate:

- deep imports
- undeclared dependencies
- local allowlists and blocklists
- domain-level allowlists and blocklists
- global dependency rules
- circular dependencies

## Reporting and observability

- Use [`buildArchitectureReport`](../api/functions/build-architecture-report.md) to collect summary, ownership, domains, route coverage, lazy warnings, and shared sprawl.
- Use [`renderCliReport`](../api/functions/render-cli-report.md), [`renderJsonReport`](../api/functions/render-json-report.md), or [`renderHtmlReport`](../api/functions/render-html-report.md) to render the report.

## Test helpers

Use [`createTestConfig`](../api/functions/create-test-config.md) from `@da_b1rmuda/module-rush/testing` when you need a resolved config-shaped object with defaults already merged for fixtures or unit tests.
