# NormalizedModuleRushConfig

Represents the root config after package defaults have been applied.

## Definition

```ts
type NormalizedModuleRushConfig = Omit<
  ModuleRushConfig,
  'rootDir' | 'srcDir' | 'domainsDir' | 'barrelMode' | 'aliases' | 'rules' | 'reports' | 'analysis' | 'vite'
> & {
  rootDir: string;
  srcDir: string;
  domainsDir?: string;
  barrelMode: 'auto' | 'explicit';
  aliases: {
    modules: string;
    shared: string;
  };
  rules: Required<NonNullable<ModuleRushConfig['rules']>>;
  reports: Required<NonNullable<ModuleRushConfig['reports']>>;
  analysis: Required<NonNullable<ModuleRushConfig['analysis']>>;
  vite: Required<NonNullable<ModuleRushConfig['vite']>>;
};
```

## Fields

- `rootDir`: Defaulted root directory string.
- `srcDir`: Defaulted source directory string.
- `domainsDir`: Optional domains directory string.
- `barrelMode`: Required barrel mode after defaulting.
- `aliases`: Required alias block after defaulting.
- `rules`: Required rule flags after defaulting.
- `reports`: Required report flags after defaulting.
- `analysis`: Required analysis options after defaulting.
- `vite`: Required Vite analysis options after defaulting.

## Notes

- Default values come from `DEFAULT_CONFIG_VALUES`.
- Paths are still relative at this stage.

## See also

- [`ModuleRushConfig`](./module-rush-config.md)
- [`ResolvedModuleRushConfig`](./resolved-module-rush-config.md)
- [`createTestConfig`](../functions/create-test-config.md)
