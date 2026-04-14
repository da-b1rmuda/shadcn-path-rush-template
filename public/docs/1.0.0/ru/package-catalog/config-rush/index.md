# Config-rush

`config-rush` — schema-first система конфигурации для TypeScript-приложений. Пакет собирает значения из defaults, file/env/runtime sources, валидирует их через Zod и возвращает типизированный config object с диагностикой.

Entry points:

- `config-rush`
- `config-rush/node`
- `config-rush/react`
- `config-rush/plugin`
- `config-rush/cli`

## С чего начать

1. Открыть [overview](./overview.md), чтобы понять назначение пакета и границы подтверждённого API.
2. Прочитать [installation](./installation.md), чтобы установить пакет и peer dependencies.
3. Пройти [quick-start](./quick-start.md) для минимального рабочего сценария.
4. Использовать [API index](./api/index.md) как карту публичного API.

## Ключевые API-сущности

- [`defineConfig`](./api/functions/define-config.md)
- [`defineRushAppConfig`](./api/functions/define-rush-app-config.md)
- [`loadConfig`](./api/functions/load-config.md)
- [`createEnvSource`](./api/functions/create-env-source.md)
- [`createFileSource`](./api/functions/create-file-source.md)
- [`watchConfig`](./api/functions/watch-config.md)
- [`ConfigProvider`](./api/components/config-provider.md)
- [`useConfig`](./api/hooks/use-config.md)
- [`configRushPlugin`](./api/functions/config-rush-plugin.md)
