# createInlineSource

Создаёт `ConfigSource` из переданного plain object.

## Назначение

[`createInlineSource`](./create-inline-source.md) удобно использовать для тестов, fixture data, preview-override и plugin-added sources.

## Signature

```ts
const createInlineSource: (
  name: string,
  value: Record<string, unknown>,
  priority?: number
) => ConfigSource;
```

## Parameters

### `name`

- Type: `string`
- Required: yes

### `value`

- Type: `Record<string, unknown>`
- Required: yes

### `priority`

- Type: `number`
- Required: no
- Default: `1000`

## Returns

- [`ConfigSource`](../types/config-source.md)

## Example

```ts
const source = createInlineSource("fixture", {
  client: { apiUrl: "https://example.com" }
});
```

## See also

- [`ConfigSource`](../types/config-source.md)
- [`loadConfig`](./load-config.md)
