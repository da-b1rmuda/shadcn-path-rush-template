# ProjectImportRecord

Represents one normalized import discovered in project source files.

## Definition

```ts
type ProjectImportRecord = {
  sourceFilePath: string;
  sourceModuleName: string;
  specifier: string;
  targetFilePath?: string;
  targetModuleName?: string;
  dependencyId?: string;
  isTypeOnly: boolean;
  isDynamic: boolean;
  isDeepImport: boolean;
  isSharedDependency: boolean;
  isRelative: boolean;
};
```

## Fields

- `sourceFilePath`: Importing source file path.
- `sourceModuleName`: Owning module name of the importer.
- `specifier`: Raw import specifier.
- `targetFilePath`: Resolved target file path when available.
- `targetModuleName`: Resolved target module name when available.
- `dependencyId`: Normalized dependency ID used by rules.
- `isTypeOnly`: Whether the import is type-only.
- `isDynamic`: Whether the import comes from `import()`.
- `isDeepImport`: Whether the import reaches into another module beyond its public root.
- `isSharedDependency`: Whether the import resolves to the shared alias space.
- `isRelative`: Whether the specifier is relative.

## Notes

- This type is produced by [`analyzeProjectImports`](../functions/analyze-project-imports.md).

## See also

- [`ProjectContext`](./project-context.md)
- [`buildModuleDependencyGraph`](../functions/build-module-dependency-graph.md)
- [`Diagnostic`](./diagnostic.md)
