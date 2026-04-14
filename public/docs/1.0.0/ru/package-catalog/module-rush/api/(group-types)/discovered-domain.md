# DiscoveredDomain

Represents one domain found on disk.

## Definition

```ts
type DiscoveredDomain = {
  name: string;
  absolutePath: string;
  relativePath: string;
  configFilePath: string;
  manifest?: NormalizedDomainManifest;
};
```

## Fields

- `name`: Domain folder name.
- `absolutePath`: Absolute domain path.
- `relativePath`: Project-relative domain path.
- `configFilePath`: Absolute path to the domain config file.
- `manifest`: Optional [`NormalizedDomainManifest`](./normalized-domain-manifest.md).

## Notes

- Domains are only discovered when `domainsDir` exists and contains a supported `domain.config.*` file.

## See also

- [`NormalizedDomainManifest`](./normalized-domain-manifest.md)
- [`ProjectContext`](./project-context.md)
