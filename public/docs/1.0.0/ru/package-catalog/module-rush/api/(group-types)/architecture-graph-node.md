# ArchitectureGraphNode

Represents one node in the architecture graph.

## Definition

```ts
type ArchitectureGraphNode = {
  id: string;
  label: string;
  type: 'module' | 'domain';
  domain?: string;
  owner?: string;
  routeEnabled?: boolean;
  lazy?: boolean;
};
```

## Fields

- `id`: Stable node identifier such as `module:checkout` or `domain:commerce`.
- `label`: Display label.
- `type`: `'module'` or `'domain'`.
- `domain`: Optional domain name for module nodes.
- `owner`: Optional owner for module nodes.
- `routeEnabled`: Optional route-enabled flag for module nodes.
- `lazy`: Optional lazy flag for module nodes.

## Notes

- This type is produced by [`buildArchitectureGraph`](../functions/build-architecture-graph.md).

## See also

- [`ArchitectureGraphEdge`](./architecture-graph-edge.md)
- [`ArchitectureGraph`](./architecture-graph.md)
