# Basic Example (Realistic)

Этот пример показывает практичный, "как в проде" сценарий: конфигурация собирается из файлов `config/*.json|*.yaml|*.yml`, `.env`-слоёв и `process.env`, затем валидируется и используется как типизированный объект.

Основа в репозитории:

- `template/basic/src/example.ts`
- `template/basic/config.rush.ts`

## Реалистичная структура проекта

```text
my-app/
  config/
    base.yaml
    overrides.json
    production.yml
  .env
  .env.local
  .env.production
  .env.production.local
  src/
    config-definition.ts
    config.ts
```

## 1. Definition (schema) как единая точка истины

```ts
import { defineRushAppConfig, type InferConfig } from "config-rush";
import { z } from "zod";

export const definition = defineRushAppConfig({
  app: {
    name: z.string().default("my-app")
  },
  client: {
    apiUrl: z.string().url(),
    flags: {
      liveReload: z.coerce.boolean().default(false)
    }
  },
  server: {
    jwtSecret: z.string().min(32).meta({ secret: true })
  }
});

export type ServerConfig = InferConfig<typeof definition, "server">;
export type ClientConfig = InferConfig<typeof definition, "client">;
```

Notes:

- Env values приходят строками, поэтому для `boolean`/`number` обычно используют `z.coerce.*`.
- Secrets помечайте `meta({ secret: true })`, чтобы они маскировались в `$resolved()` и diagnostics.

## 2. Файловые фрагменты (JSON/YAML/YML)

Поддерживаются расширения `.json`, `.yaml`, `.yml` через [`createFileSource`](../api/functions/create-file-source.md).

`config/base.yaml`:

```yaml
client:
  apiUrl: "https://api.example.com"
  flags:
    liveReload: false
```

`config/overrides.json`:

```json
{
  "client": {
    "flags": {
      "liveReload": true
    }
  }
}
```

`config/production.yml`:

```yaml
client:
  apiUrl: "https://api.prod.example.com"
```

Важно:

- внутри одного `createFileSource({ files: [...] })` файлы мёрджатся в указанном порядке;
- для объектов применяется deep merge, примитивы заменяются, массивы заменяются целиком.

## 3. .env слои, `process.env` и режимы (development/production)

`.env`:

```dotenv
CLIENT_API_URL=https://api.env.example.com
```

`.env.production`:

```dotenv
PUBLIC_API_URL=https://api.prod.env.example.com
```

Пример server secret через `process.env` (или `.env.production.local`, если это допустимо в вашем процессе):

```dotenv
SERVER_JWT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

Что важно про ключи:

- `client.apiUrl` можно задать через `PUBLIC_API_URL` или `CLIENT_API_URL` (оба варианта поддерживаются).
- `server.jwtSecret` задаётся через `SERVER_JWT_SECRET`.
- `.env`-слои выбираются с учётом `mode`: `.env`, `.env.local`, `.env.<mode>`, `.env.<mode>.local`.

## 4. Сборка итогового config (server target)

```ts
import { loadConfig } from "config-rush";
import { createEnvSource, createFileSource } from "config-rush/node";

import { definition } from "./config-definition";

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

Best practices:

- Передавайте `mode` в `loadConfig(...)` (или `NODE_ENV`), чтобы `.env.<mode>` корректно подхватывались.
- Для логов используйте `config.$resolved()` вместо raw `config`, чтобы секреты не утекали.
- На старте приложения можно вывести `config.$diagnostics()` или `config.$explain("client.apiUrl")`, чтобы быстро увидеть, откуда взялись значения.

## 5. Сборка client-safe config

Если конфиг нужен браузеру (например, SSR шаблон или edge runtime), используйте `target: "client"`:

```ts
export const loadClientConfig = async (mode: string) =>
  loadConfig(definition, {
    mode,
    target: "client",
    sources: [createEnvSource()],
    dev: false
  });
```

В non-dev режиме server namespace и server-scoped поля не попадают в client view.
