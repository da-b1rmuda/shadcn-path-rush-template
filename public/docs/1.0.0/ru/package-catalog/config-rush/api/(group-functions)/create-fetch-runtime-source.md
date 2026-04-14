# createFetchRuntimeSource

Создаёт runtime `ConfigSource`, который загружает JSON object через `fetch`.

## Назначение

[`createFetchRuntimeSource`](./create-fetch-runtime-source.md) используется для remote runtime config, если endpoint возвращает JSON object.

## Signature

```ts
const createFetchRuntimeSource: (
  url: string,
  options?: FetchRuntimeSourceOptions
) => ConfigSource;
```

## Parameters

### `url`

- Type: `string`
- Required: yes

### `options`

- Type: [`FetchRuntimeSourceOptions`](../types/fetch-runtime-source-options.md)
- Required: no

## Returns

- [`ConfigSource`](../types/config-source.md)

## Throws

- `Error`, если `response.ok === false`.
- `Error`, если JSON payload не является object.

## Example

```ts
const source = createFetchRuntimeSource("https://example.com/config.json");
```

## See also

- [`FetchRuntimeSourceOptions`](../types/fetch-runtime-source-options.md)
- [`createWindowRuntimeSource`](./create-window-runtime-source.md)
