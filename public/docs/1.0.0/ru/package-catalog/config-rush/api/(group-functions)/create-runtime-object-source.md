# createRuntimeObjectSource

Создаёт runtime `ConfigSource` из in-memory object.

## Назначение

[`createRuntimeObjectSource`](./create-runtime-object-source.md) используется, когда runtime values уже находятся в памяти и не требуют чтения из файла, env или network.

## Signature

```ts
const createRuntimeObjectSource: (
  value: Record<string, unknown>,
  name?: string,
  priority?: number
) => ConfigSource;
```

## Parameters

### `value`

- Type: `Record<string, unknown>`
- Required: yes

### `name`

- Type: `string`
- Required: no
- Default: `"runtime"`

### `priority`

- Type: `number`
- Required: no
- Default: `60`

## Returns

- [`ConfigSource`](../types/config-source.md)

## Example

```ts
const source = createRuntimeObjectSource({
  client: { apiUrl: "https://runtime.example.com" }
});
```

## See also

- [`createWindowRuntimeSource`](./create-window-runtime-source.md)
- [`createFetchRuntimeSource`](./create-fetch-runtime-source.md)
