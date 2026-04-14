# SharedSprawlEntry

Represents one shared-dependency usage summary.

## Definition

```ts
type SharedSprawlEntry = {
  dependencyId: string;
  importerModules: string[];
  importCount: number;
};
```

## Fields

- `dependencyId`: Shared dependency identifier such as `shared/ui`.
- `importerModules`: Sorted modules importing that dependency.
- `importCount`: Total import count across the project.

## Notes

- This type appears in [`ArchitectureReport`](./architecture-report.md).

## See also

- [`ArchitectureReport`](./architecture-report.md)
- [`ProjectImportRecord`](./project-import-record.md)
