# FetchRuntimeSourceOptions

Опции для [`createFetchRuntimeSource`](../functions/create-fetch-runtime-source.md).

## Definition

```ts
interface FetchRuntimeSourceOptions {
  readonly init?: RequestInit;
  readonly name?: string;
  readonly priority?: number;
}
```

## Fields

- `init` - fetch init options.
- `name` - override source name.
- `priority` - override source priority.

## See also

- [`createFetchRuntimeSource`](../functions/create-fetch-runtime-source.md)
