# ArchitectureGraphEdge

Represents one edge in the architecture graph.

## Definition

```ts
type ArchitectureGraphEdge = {
  from: string;
  to: string;
  kind: 'module-dependency' | 'domain-membership' | 'domain-dependency';
};
```

## Fields

- `from`: Source node ID.
- `to`: Target node ID.
- `kind`: Edge kind.

## Notes

- `module-dependency` connects one module to another.
- `domain-membership` connects a domain to a module.
- `domain-dependency` connects one domain to another when modules cross domain boundaries.

## See also

- [`ArchitectureGraphNode`](./architecture-graph-node.md)
- [`ArchitectureGraph`](./architecture-graph.md)
