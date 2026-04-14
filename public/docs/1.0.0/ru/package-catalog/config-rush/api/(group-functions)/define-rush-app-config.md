# defineRushAppConfig

Создаёт app-oriented `ConfigDefinition` с нормализованными namespace `app`, `client`, `server`.

## Назначение

[`defineRushAppConfig`](./define-rush-app-config.md) используется как preset для приложений. Он гарантирует наличие `app`, `client`, `server` и добавляет `app.mode` на базе [`rushModeSchema`](../constants/rush-mode-schema.md).

## Signature

```ts
const defineRushAppConfig: <TShape extends RushAppPresetShape>(
  shape: TShape
) => ConfigDefinition<NormalizeRushAppShape<TShape>>;
```

## Parameters

### `shape`

- Type: [`RushAppPresetShape`](../types/rush-app-preset-shape.md)
- Required: yes
- Description: partial app/client/server shape, который будет нормализован preset-ом.

## Returns

- [`ConfigDefinition`](../types/config-definition.md)

## Usage Notes

- `app.mode` всегда присутствует в итоговой definition.
- Допустимые preset mode values перечислены в [`RUSH_MODES`](../constants/rush-modes.md).

## Example

```ts
import { defineRushAppConfig } from "config-rush";
import { z } from "zod";

const definition = defineRushAppConfig({
  app: {
    name: z.string().default("rush-app")
  },
  client: {
    apiUrl: z.string().url()
  },
  server: {
    jwtSecret: z.string().min(32)
  }
});
```

## See also

- [`RushAppPresetShape`](../types/rush-app-preset-shape.md)
- [`rushModeSchema`](../constants/rush-mode-schema.md)
- [`defineConfig`](./define-config.md)
