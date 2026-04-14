# defineModuleRoute

Validates and returns a module route declaration.

## Entrypoints

- `@da_b1rmuda/module-rush/path`

## Purpose

`defineModuleRoute()` validates input against the route schema and returns the same [`ModuleRouteDefinition`](../types/module-route-definition.md) object when validation succeeds.

## Signature

```ts
function defineModuleRoute(route: ModuleRouteDefinition): ModuleRouteDefinition
```

## Parameters

- `route`: [`ModuleRouteDefinition`](../types/module-route-definition.md). Required route declaration.

## Returns

- [`ModuleRouteDefinition`](../types/module-route-definition.md). The validated route object.

## Throws

- Validation errors from the internal Zod schema when the route shape is invalid.

## Usage Notes

- `name` and `path` are required.
- `loader`, `component`, and `meta` are optional.
- Route-path and uniqueness checks happen later through [`checkProject`](./check-project.md), not in this helper.

## Example

```ts
import { defineModuleRoute } from '@da_b1rmuda/module-rush/path';

export default defineModuleRoute({
  name: 'checkout.index',
  path: '/checkout',
  lazy: true,
  loader: () => import('./pages/CheckoutPage'),
});
```

## See also

- [`ModuleRouteDefinition`](../types/module-route-definition.md)
- [`LoadedModuleRouteDefinition`](../types/loaded-module-route-definition.md)
- [`buildModuleRegistry`](./build-module-registry.md)
