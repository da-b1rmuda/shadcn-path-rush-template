# Troubleshooting

## `Config validation failed`

Это [`ValidationError`](../api/classes/validation-error.md). Он возникает, когда merged payload не проходит Zod validation в [`loadConfig`](../api/functions/load-config.md).

Проверьте:

- все required поля заданы;
- env values соответствуют ожидаемому формату;
- file/runtime sources возвращают корректные значения.

## `Config source "<name>" failed`

Это [`SourceError`](../api/classes/source-error.md). Он возникает, если source бросил исключение или вернул не plain object.

Проверьте:

- расширение и содержимое файлов для [`createFileSource`](../api/functions/create-file-source.md);
- структуру payload для [`createFetchRuntimeSource`](../api/functions/create-fetch-runtime-source.md);
- global runtime object для [`createWindowRuntimeSource`](../api/functions/create-window-runtime-source.md).

## Ошибка доступа к server config на client target

Это [`ClientAccessError`](../api/classes/client-access-error.md). Она возникает только при `target: "client"` в dev-режиме.

## Ошибка про отсутствующий provider в React

[`useConfig`](../api/hooks/use-config.md) бросает ошибку, если hook вызывается вне [`ConfigProvider`](../api/components/config-provider.md).

## CLI не может загрузить definition module

Проверьте export shape:

- `export const definition = ...`
- `export default definition`
- `export default { definition, loadOptions }`

Подробности есть у [`loadDefinitionModule`](../api/functions/load-definition-module.md).

## Почему нет `config.$subscribe(...)` после `loadConfig(...)`?

Потому что subscriptions не входят в [`LoadedConfigHelpers`](../api/types/loaded-config-helpers.md). Для subscriptions нужен [`watchConfig`](../api/functions/watch-config.md) или Vite client runtime. Это одно из ключевых расхождений со spec; см. [issues](../issues.md).
