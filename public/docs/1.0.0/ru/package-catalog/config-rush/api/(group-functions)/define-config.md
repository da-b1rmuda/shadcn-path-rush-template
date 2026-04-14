# defineConfig

Создаёт `ConfigDefinition` из вложенного Zod-backed shape.

## Назначение

[`defineConfig`](../functions/define-config.md) превращает объект схемы в definition с `kind`, `shape`, `schema`, `entries` и `defaults`.

## Signature

```ts
const defineConfig: <TShape extends ConfigShape>(
  shape: TShape
) => ConfigDefinition<TShape>;
```

## Parameters

### `shape`

- Type: [`ConfigShape`](../types/config-shape.md)
- Required: yes
- Description: вложенный объект, где leaves являются Zod schemas.

## Returns

- [`ConfigDefinition`](../types/config-definition.md)

## Usage Notes

- Defaults извлекаются из полей схемы, которые успешно `safeParse(undefined)`.
- Metadata полей читаются через [`ConfigFieldMetadata`](../types/config-field-metadata.md).

## Example

```ts
import { defineConfig } from "config-rush";
import { z } from "zod";

const definition = defineConfig({
  client: {
    apiUrl: z.string().url()
  },
  server: {
    jwtSecret: z.string().min(32).meta({ secret: true })
  }
});
```

## See also

- [`ConfigDefinition`](../types/config-definition.md)
- [`ConfigShape`](../types/config-shape.md)
- [`defineRushAppConfig`](./define-rush-app-config.md)
