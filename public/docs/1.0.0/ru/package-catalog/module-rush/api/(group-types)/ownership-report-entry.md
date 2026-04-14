# OwnershipReportEntry

Represents one ownership row in the architecture report.

## Definition

```ts
type OwnershipReportEntry = {
  owner: string;
  modules: string[];
};
```

## Fields

- `owner`: Owner label.
- `modules`: Sorted module names owned by that owner.

## Notes

- This type appears in [`ArchitectureReport`](./architecture-report.md).

## See also

- [`ArchitectureReport`](./architecture-report.md)
- [`DomainReportEntry`](./domain-report-entry.md)
