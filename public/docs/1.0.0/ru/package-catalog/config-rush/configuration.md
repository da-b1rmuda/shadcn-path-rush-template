# Configuration

## Schema-first подход

Конфигурация начинается с [`defineConfig`](./api/functions/define-config.md) или [`defineRushAppConfig`](./api/functions/define-rush-app-config.md). Shape описывается типом [`ConfigShape`](./api/types/config-shape.md), а результатом становится [`ConfigDefinition`](./api/types/config-definition.md).

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
    jwtSecret: z.string().min(32).meta({ secret: true })
  }
});
```

[`defineRushAppConfig`](./api/functions/define-rush-app-config.md) добавляет `app.mode` на базе [`rushModeSchema`](./api/constants/rush-mode-schema.md) и [`RUSH_MODES`](./api/constants/rush-modes.md).

## Metadata полей

Подтверждённые metadata описываются типом [`ConfigFieldMetadata`](./api/types/config-field-metadata.md):

- `scope?: "client" | "server" | "shared"`
- `secret?: boolean`
- `env?: string | readonly string[]`
- `description?: string`

Практическое применение:

- `secret: true` маскируется в helper API [`LoadedConfigHelpers`](./api/types/loaded-config-helpers.md).
- `scope` влияет на client/server split.
- `env` добавляет aliases для [`createEnvSource`](./api/functions/create-env-source.md).

## Sources

Источники значений описываются [`ConfigSource`](./api/types/config-source.md). Подтверждённые source factories:

- [`createInlineSource`](./api/functions/create-inline-source.md)
- [`createEnvSource`](./api/functions/create-env-source.md)
- [`createFileSource`](./api/functions/create-file-source.md)
- [`createRuntimeObjectSource`](./api/functions/create-runtime-object-source.md)
- [`createWindowRuntimeSource`](./api/functions/create-window-runtime-source.md)
- [`createFetchRuntimeSource`](./api/functions/create-fetch-runtime-source.md)

[`loadConfig`](./api/functions/load-config.md) автоматически добавляет defaults source из definition и, если передан `overrides`, создаёт поверх них inline source `overrides`.

## Mode и target

Mode резолвится как `options.mode ?? process.env.NODE_ENV ?? "development"`.  
Target задаётся типом [`ConfigTarget`](./api/types/config-target.md):

- `server` используется по умолчанию;
- `client` включает client-safe проекцию.

Для `target: "client"` подтверждены два режима:

- в dev доступ к server paths приводит к [`ClientAccessError`](./api/classes/client-access-error.md);
- в non-dev server namespace и server-scoped fields удаляются.

## `loadConfig(...)` options

Опции описаны типом [`LoadConfigOptions`](./api/types/load-config-options.md). Подтверждены:

- `cwd`
- `dev`
- `env`
- `mode`
- `overrides`
- `plugins`
- `sources`
- `target`
- `validation`
- `onWarning`

Plugins описываются [`ConfigPlugin`](./api/types/config-plugin.md) и [`ConfigPluginContext`](./api/types/config-plugin-context.md). Hook types:

- [`ConfigBeforeValidateHook`](./api/types/config-before-validate-hook.md)
- [`ConfigAfterValidateHook`](./api/types/config-after-validate-hook.md)

## Env и file configuration

[`createEnvSource`](./api/functions/create-env-source.md) читает `.env`, `.env.local`, `.env.<mode>`, `.env.<mode>.local`, а затем `process.env`, если `includeProcessEnv !== false`. Подробности описаны в [`EnvSourceOptions`](./api/types/env-source-options.md).

[`createFileSource`](./api/functions/create-file-source.md) поддерживает только JSON/YAML payloads.
