# useConfig

React hook для чтения config или path-based value из context.

## Назначение

[`useConfig`](./use-config.md) читает либо весь config, либо одно значение по dot path. Если текущий config поддерживает `$subscribe`, hook будет обновляться при изменениях.

## Signature

```ts
function useConfig<TValue = unknown>(): TValue;
function useConfig<TValue = unknown>(path: string): TValue;
```

## Parameters

### `path`

- Type: `string`
- Required: no
- Description: dot path до значения в config object.

## Returns

- `TValue`

## Throws

- `Error`, если hook используется вне [`ConfigProvider`](../components/config-provider.md).

## Example

```tsx
const apiUrl = useConfig<string>("client.apiUrl");
```

## See also

- [`ConfigProvider`](../components/config-provider.md)
