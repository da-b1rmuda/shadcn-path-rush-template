# DomainReportEntry

Represents one domain row in the architecture report.

## Definition

```ts
type DomainReportEntry = {
  domain: string;
  modules: string[];
  owners: string[];
  dependsOnDomains: string[];
};
```

## Fields

- `domain`: Domain name.
- `modules`: Sorted module names in the domain.
- `owners`: Sorted owner names used by modules in the domain.
- `dependsOnDomains`: Sorted target domains imported by the domain.

## Notes

- This type appears in [`ArchitectureReport`](./architecture-report.md).

## See also

- [`ArchitectureReport`](./architecture-report.md)
- [`OwnershipReportEntry`](./ownership-report-entry.md)
