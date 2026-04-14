# ResolvedModuleRushConfig

Represents the normalized root config after absolute-path resolution.

## Definition

```ts
type ResolvedModuleRushConfig = Omit<NormalizedModuleRushConfig, 'rootDir' | 'srcDir' | 'modulesDir' | 'domainsDir'> & {
  rootDir: string;
  srcDir: string;
  modulesDir: string;
  domainsDir?: string;
  configFilePath: string;
  configDir: string;
};
```

## Fields

- `rootDir`: Absolute project root path.
- `srcDir`: Absolute source directory path.
- `modulesDir`: Absolute modules directory path.
- `domainsDir`: Optional absolute domains directory path.
- `configFilePath`: Absolute path to the loaded config file.
- `configDir`: Directory containing the config file.

## Notes

- This is the config shape returned internally by root-config loading.
- Programmatic functions such as [`buildProjectContext`](../functions/build-project-context.md) operate on this form.

## See also

- [`ModuleRushConfig`](./module-rush-config.md)
- [`NormalizedModuleRushConfig`](./normalized-module-rush-config.md)
- [`ProjectContext`](./project-context.md)
