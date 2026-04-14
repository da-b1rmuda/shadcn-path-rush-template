# NormalizedDomainManifest

Represents a domain manifest after normalization.

## Definition

```ts
type NormalizedDomainManifest = Omit<DomainManifest, 'modules' | 'rules'> & {
  modules: string[];
  rules: {
    allowDependenciesToDomains: string[];
    forbidDependenciesToDomains: string[];
  };
};
```

## Fields

- `modules`: Sorted module names.
- `rules.allowDependenciesToDomains`: Sorted allowlist of target domains.
- `rules.forbidDependenciesToDomains`: Sorted blocklist of target domains.

## Notes

- This type is produced when domain manifests are loaded.

## See also

- [`DomainManifest`](./domain-manifest.md)
- [`DiscoveredDomain`](./discovered-domain.md)
