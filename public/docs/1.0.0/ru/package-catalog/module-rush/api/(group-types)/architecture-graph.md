# ArchitectureGraph

Represents the full architecture graph output.

## Definition

```ts
type ArchitectureGraph = {
  nodes: ArchitectureGraphNode[];
  edges: ArchitectureGraphEdge[];
};
```

## Fields

- `nodes`: [`ArchitectureGraphNode`](./architecture-graph-node.md)`[]`.
- `edges`: [`ArchitectureGraphEdge`](./architecture-graph-edge.md)`[]`.

## Notes

- This is the return type of [`buildArchitectureGraph`](../functions/build-architecture-graph.md).

## See also

- [`ArchitectureGraphNode`](./architecture-graph-node.md)
- [`ArchitectureGraphEdge`](./architecture-graph-edge.md)
- [`buildArchitectureGraph`](../functions/build-architecture-graph.md)
