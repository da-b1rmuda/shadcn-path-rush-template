# DomainManifest

Defines the public shape accepted by [`defineDomain`](../functions/define-domain.md).

## Definition

```ts
type DomainManifest = {
  name: string;
  modules: string[];
  owner?: string;
  rules?: {
    allowDependenciesToDomains?: string[];
    forbidDependenciesToDomains?: string[];
  };
};
```

## Fields

- `name`: Domain identifier.
- `modules`: Module names belonging to the domain.
- `owner`: Optional owning team.
- `rules`: Optional cross-domain allowlist and blocklist.

## Notes

- Rule arrays are normalized later by [`NormalizedDomainManifest`](./normalized-domain-manifest.md).

## See also

- [`NormalizedDomainManifest`](./normalized-domain-manifest.md)
- [`defineDomain`](../functions/define-domain.md)
