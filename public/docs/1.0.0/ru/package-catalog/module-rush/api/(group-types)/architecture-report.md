# ArchitectureReport

Represents the aggregate architecture-report output.

## Definition

```ts
type ArchitectureReport = {
  generatedAt: string;
  summary: {
    moduleCount: number;
    domainCount: number;
    routeEnabledModuleCount: number;
    lazyModuleCount: number;
    routeFileCount: number;
    diagnosticCount: number;
    errorCount: number;
    warningCount: number;
    infoCount: number;
  };
  violations: Diagnostic[];
  ownership: OwnershipReportEntry[];
  domains: DomainReportEntry[];
  registrySummary: {
    entries: number;
    routeEnabledModules: number;
    routeFiles: number;
  };
  routeCoverage: RouteCoverageEntry[];
  lazyWarnings: LazyWarningEntry[];
  sharedSprawl: SharedSprawlEntry[];
};
```

## Fields

- `generatedAt`: ISO timestamp string.
- `summary`: Aggregate module, domain, route, and diagnostic counts.
- `violations`: [`Diagnostic`](./diagnostic.md)`[]`.
- `ownership`: [`OwnershipReportEntry`](./ownership-report-entry.md)`[]`.
- `domains`: [`DomainReportEntry`](./domain-report-entry.md)`[]`.
- `registrySummary`: Counts derived from the registry.
- `routeCoverage`: [`RouteCoverageEntry`](./route-coverage-entry.md)`[]`.
- `lazyWarnings`: [`LazyWarningEntry`](./lazy-warning-entry.md)`[]`.
- `sharedSprawl`: [`SharedSprawlEntry`](./shared-sprawl-entry.md)`[]`.

## Notes

- This is the return type of [`buildArchitectureReport`](../functions/build-architecture-report.md).
- It can be rendered with [`renderCliReport`](../functions/render-cli-report.md), [`renderJsonReport`](../functions/render-json-report.md), and [`renderHtmlReport`](../functions/render-html-report.md).

## See also

- [`buildArchitectureReport`](../functions/build-architecture-report.md)
- [`renderJsonReport`](../functions/render-json-report.md)
- [`Diagnostic`](./diagnostic.md)
