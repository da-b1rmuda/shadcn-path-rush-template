# defineDomain

Validates and returns a domain manifest object.

## Entrypoints

- `@da_b1rmuda/module-rush`

## Purpose

`defineDomain()` validates input against the domain-manifest schema and returns the same [`DomainManifest`](../types/domain-manifest.md) object when validation succeeds.

## Signature

```ts
function defineDomain(manifest: DomainManifest): DomainManifest
```

## Parameters

- `manifest`: [`DomainManifest`](../types/domain-manifest.md). Required domain declaration.

## Returns

- [`DomainManifest`](../types/domain-manifest.md). The validated manifest object.

## Throws

- Validation errors from the internal Zod schema when the manifest shape is invalid.

## Usage Notes

- `name` is required.
- `modules` is required and must be an array.
- Optional rule arrays are normalized later by [`NormalizedDomainManifest`](../types/normalized-domain-manifest.md).

## Example

```ts
import { defineDomain } from '@da_b1rmuda/module-rush';

export default defineDomain({
  name: 'commerce',
  modules: ['products', 'checkout'],
  owner: 'team-commerce',
});
```

## See also

- [`DomainManifest`](../types/domain-manifest.md)
- [`NormalizedDomainManifest`](../types/normalized-domain-manifest.md)
- [`buildProjectContext`](./build-project-context.md)
