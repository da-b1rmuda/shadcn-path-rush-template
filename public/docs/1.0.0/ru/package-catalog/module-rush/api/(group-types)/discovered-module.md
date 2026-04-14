# DiscoveredModule

Represents one module found on disk before full manifest loading.

## Definition

```ts
type DiscoveredModule = {
  name: string;
  absolutePath: string;
  relativePath: string;
  configFilePath?: string;
  indexFilePath?: string;
  agentFilePath?: string;
  readmeFilePath?: string;
  routeFilePaths: string[];
  sourceFilePaths: string[];
  sections: Record<ModuleSectionName, boolean>;
};
```

## Fields

- `name`: Module folder name.
- `absolutePath`: Absolute module path.
- `relativePath`: Project-relative module path.
- `configFilePath`: Optional module manifest path.
- `indexFilePath`: Optional public barrel path.
- `agentFilePath`: Optional `module-rush-agent.md` path.
- `readmeFilePath`: Optional `README.md` path.
- `routeFilePaths`: Discovered route-file paths.
- `sourceFilePaths`: Discovered source-file paths.
- `sections`: Presence map for standard module sections.

## Notes

- This shape is produced by discovery before manifests are loaded.
- It is extended by [`LoadedModule`](./loaded-module.md).

## See also

- [`LoadedModule`](./loaded-module.md)
- [`ModuleSectionName`](./module-section-name.md)
- [`ProjectContext`](./project-context.md)
