# FAQ

## Это один пакет или несколько?

Подтверждён один пакет `config-rush` с subpath exports. Подробности есть в [overview](./overview.md) и [issues](./issues.md).

## Чем отличаются `defineConfig` и `defineRushAppConfig`?

[`defineConfig`](./api/functions/define-config.md) строит definition из произвольного shape. [`defineRushAppConfig`](./api/functions/define-rush-app-config.md) нормализует `app`, `client`, `server` и добавляет `app.mode`.

## Как получить client-safe config?

Использовать [`loadConfig`](./api/functions/load-config.md) с `target: "client"` либо [`configRushPlugin`](./api/functions/config-rush-plugin.md) для Vite.

## Где есть подписки на изменения?

Подписки подтверждены у [`watchConfig`](./api/functions/watch-config.md) и у Vite client runtime, но не у plain результата [`loadConfig`](./api/functions/load-config.md).

## Поддерживаются ли TypeScript config files?

Нет. [`createFileSource`](./api/functions/create-file-source.md) подтверждён только для JSON/YAML.

## Какие ошибки подтверждены?

[`ValidationError`](./api/classes/validation-error.md), [`SourceError`](./api/classes/source-error.md), [`ClientAccessError`](./api/classes/client-access-error.md).

## Есть ли changelog?

Нет подтверждённого changelog. См. [changelog](./changelog.md).
