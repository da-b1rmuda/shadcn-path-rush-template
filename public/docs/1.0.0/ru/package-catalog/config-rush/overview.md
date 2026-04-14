# Overview

`config-rush` решает задачу централизованной, типизированной и валидируемой конфигурации приложения. Вместо прямого чтения `process.env` или ручной склейки JSON/YAML/runtime payloads пакет предлагает одну схему через [`defineConfig`](./api/functions/define-config.md) или [`defineRushAppConfig`](./api/functions/define-rush-app-config.md), а затем загружает и валидирует итоговый config через [`loadConfig`](./api/functions/load-config.md).

## Что подтверждено

- Пакет строит [`ConfigDefinition`](./api/types/config-definition.md) из [`ConfigShape`](./api/types/config-shape.md), основанного на Zod schema.
- Источники конфигурации описываются типом [`ConfigSource`](./api/types/config-source.md) и могут приходить из inline payloads, env files, JSON/YAML files, global runtime object и fetched JSON.
- Загруженный config поддерживает [`ConfigTarget`](./api/types/config-target.md) `server` и `client`.
- Plain результат [`loadConfig`](./api/functions/load-config.md) всегда содержит [`LoadedConfigHelpers`](./api/types/loaded-config-helpers.md): `$diagnostics()`, `$explain(path)`, `$print()`, `$resolved()`, `$sources()`, плюс `$mode` и `$target`.
- Для live reload и subscriptions есть отдельный API [`watchConfig`](./api/functions/watch-config.md).
- Для React подтверждены [`ConfigProvider`](./api/components/config-provider.md) и [`useConfig`](./api/hooks/use-config.md).
- Для Vite подтверждён [`configRushPlugin`](./api/functions/config-rush-plugin.md).
- Для CLI подтверждены [`loadDefinitionModule`](./api/functions/load-definition-module.md), [`parseCliArgs`](./api/functions/parse-cli-args.md), [`runCli`](./api/functions/run-cli.md).

## Точка входа

Базовый поток:

1. Описать schema через [`defineConfig`](./api/functions/define-config.md) или [`defineRushAppConfig`](./api/functions/define-rush-app-config.md).
2. Создать один или несколько [`ConfigSource`](./api/types/config-source.md), например через [`createFileSource`](./api/functions/create-file-source.md) и [`createEnvSource`](./api/functions/create-env-source.md).
3. Вызвать [`loadConfig`](./api/functions/load-config.md).

## Что намеренно не описывается как факт

Документация не утверждает наличие enterprise registry, policy engine, Webpack integration, TS file source и других возможностей, перечисленных в сыром spec, но не подтверждённых кодом. Эти расхождения перечислены в [issues](./issues.md).
