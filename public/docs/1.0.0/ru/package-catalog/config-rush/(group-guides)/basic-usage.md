# Basic Usage

Этот guide показывает базовый рабочий сценарий: schema -> sources -> [`loadConfig`](../api/functions/load-config.md) -> диагностика.

## 1. Schema

```ts
import { defineConfig } from "config-rush";
import { z } from "zod";

export const definition = defineConfig({
  client: {
    apiUrl: z.string().url(),
    flags: {
      liveReload: z.coerce.boolean().default(false)
    }
  },
  server: {
    jwtSecret: z.string().min(32).meta({ secret: true })
  },
  features: {
    beta: z.coerce.boolean().default(false)
  }
});
```

Notes:

- Env values приходят строками, поэтому `z.coerce.boolean()` полезен для флагов.
- Secrets помечайте `meta({ secret: true })` для маскирования в `$resolved()`.

## 2. Sources: файлы + env

```ts
import { loadConfig } from "config-rush";
import { createEnvSource, createFileSource } from "config-rush/node";

export const loadServerConfig = async (mode: string) =>
  loadConfig(definition, {
    mode,
    target: "server",
    sources: [
      createFileSource({
        files: ["config/base.yaml", "config/overrides.json", `config/${mode}.yml`],
        optional: true
      }),
      createEnvSource()
    ]
  });
```

Подтверждённые источники:

- [`createFileSource`](../api/functions/create-file-source.md): JSON/YAML/YML.
- [`createEnvSource`](../api/functions/create-env-source.md): `.env` layers + `process.env`.

## 3. Проверка результата и диагностика

```ts
const config = await loadServerConfig("production");

console.log(config.client.apiUrl);
console.log(config.features.beta);

console.log(config.$resolved()); // masked view
console.log(config.$explain("client.apiUrl"));
console.log(config.$diagnostics());
```

Helper API описано типом [`LoadedConfigHelpers`](../api/types/loaded-config-helpers.md).

## 4. Типичные ошибки

- Если Zod validation падает, будет [`ValidationError`](../api/classes/validation-error.md).
- Если source вернул не plain object или упал, будет [`SourceError`](../api/classes/source-error.md).
- Если вы загружаете `target: "client"` в dev и читаете server-only path, будет [`ClientAccessError`](../api/classes/client-access-error.md).
