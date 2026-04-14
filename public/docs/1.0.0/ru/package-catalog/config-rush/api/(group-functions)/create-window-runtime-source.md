# createWindowRuntimeSource

Создаёт runtime `ConfigSource`, который читает объект из `window[key]` или `globalThis[key]`.

## Назначение

[`createWindowRuntimeSource`](./create-window-runtime-source.md) предназначен для browser-style runtime injection, например `window.CONFIG`.

## Signature

```ts
const createWindowRuntimeSource: (
  key?: string,
  priority?: number
) => ConfigSource;
```

## Parameters

### `key`

- Type: `string`
- Required: no
- Default: `"CONFIG"`

### `priority`

- Type: `number`
- Required: no
- Default: `60`

## Returns

- [`ConfigSource`](../types/config-source.md)

## Throws

- `Error`, если runtime value найден, но не является object.

## Example

```ts
const source = createWindowRuntimeSource("CONFIG");
```

## See also

- [`createRuntimeObjectSource`](./create-runtime-object-source.md)
- [`createFetchRuntimeSource`](./create-fetch-runtime-source.md)
