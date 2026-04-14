# ModuleRouteDefinition

Defines one route declaration inside a module route file.

## Definition

```ts
type ModuleRouteDefinition = {
  name: string;
  path: string;
  lazy?: boolean;
  loader?: () => Promise<unknown>;
  component?: unknown;
  meta?: Record<string, unknown>;
};
```

## Fields

- `name`: Route name.
- `path`: Route path.
- `lazy`: Optional lazy flag.
- `loader`: Optional async route loader.
- `component`: Optional eager component value.
- `meta`: Optional metadata object.

## Notes

- This is the input shape accepted by [`defineModuleRoute`](../functions/define-module-route.md).
- Route-validation rules later check path format and global name uniqueness.

## See also

- [`LoadedModuleRouteDefinition`](./loaded-module-route-definition.md)
- [`ModuleRouteLoader`](./module-route-loader.md)
- [`defineModuleRoute`](../functions/define-module-route.md)
