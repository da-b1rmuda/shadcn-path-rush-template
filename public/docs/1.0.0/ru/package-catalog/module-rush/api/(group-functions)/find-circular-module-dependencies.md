# findCircularModuleDependencies

Finds cycles in a module dependency graph.

## Entrypoints

- `@da_b1rmuda/module-rush/analysis`

## Purpose

`findCircularModuleDependencies()` performs a depth-first traversal over a module dependency graph and returns unique cycle paths.

## Signature

```ts
function findCircularModuleDependencies(graph: Map<string, string[]>): string[][]
```

## Parameters

- `graph`: `Map<string, string[]>`. A dependency graph such as the output of [`buildModuleDependencyGraph`](./build-module-dependency-graph.md).

## Returns

- `string[][]`. Unique cycles, each represented as an ordered list ending with the starting module.

## Throws

- No package-specific throws are implemented in this function.

## Usage Notes

- Cycle uniqueness is deduplicated by a sorted key, so the same cycle is not returned repeatedly from different traversal paths.
- This function is used by the circular-dependency rule executed through [`checkProject`](./check-project.md).

## Example

```ts
import { findCircularModuleDependencies } from '@da_b1rmuda/module-rush/analysis';

const cycles = findCircularModuleDependencies(
  new Map([
    ['a', ['b']],
    ['b', ['a']],
  ]),
);
console.log(cycles);
```

## See also

- [`buildModuleDependencyGraph`](./build-module-dependency-graph.md)
- [`checkProject`](./check-project.md)
- [`Diagnostic`](../types/diagnostic.md)
