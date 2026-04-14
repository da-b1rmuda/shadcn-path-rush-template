# Quick Start

Ниже минимальный сценарий: схема, env source и загрузка config.

```ts
import { defineRushAppConfig, loadConfig } from "config-rush";
import { createEnvSource } from "config-rush/node";
import { z } from "zod";

const definition = defineRushAppConfig({
  client: {
    apiUrl: z.string().url()
  },
  server: {
    jwtSecret: z.string().min(32).meta({ secret: true })
  }
});

const config = await loadConfig(definition, {
  sources: [createEnvSource()]
});

console.log(config.client.apiUrl);
console.log(config.$resolved());
```

## Что происходит

1. [`defineRushAppConfig`](./api/functions/define-rush-app-config.md) создаёт definition.
2. [`createEnvSource`](./api/functions/create-env-source.md) читает env values.
3. [`loadConfig`](./api/functions/load-config.md) валидирует и возвращает config c [`LoadedConfigHelpers`](./api/types/loaded-config-helpers.md).

## Дальше

- file + env merge: [guides/basic-usage](./guides/basic-usage.md)
- client-safe config: [guides/common-cases](./guides/common-cases.md)
- полный reference: [api/index](./api/index.md)
