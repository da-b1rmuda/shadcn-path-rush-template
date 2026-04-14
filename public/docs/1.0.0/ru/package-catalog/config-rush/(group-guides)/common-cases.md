# Common Cases

## Mode, .env слои и prod/dev поведение

[`loadConfig`](../api/functions/load-config.md) резолвит `mode` как `options.mode ?? process.env.NODE_ENV ?? "development"`.

[`createEnvSource`](../api/functions/create-env-source.md) по умолчанию читает слои:

1. `.env`
2. `.env.local`
3. `.env.<mode>`
4. `.env.<mode>.local`

Потом, если `includeProcessEnv !== false`, накладывается `process.env`.

Практика:

- В dev обычно используется `.env.local` и `watchConfig(...)` для live reload.
- В prod обычно загружают конфиг один раз на старте процесса.

## Все поддерживаемые типы файлов в `createFileSource`

[`createFileSource`](../api/functions/create-file-source.md) поддерживает только:

- `.json`
- `.yaml`
- `.yml`

Типичный подход: один базовый файл + override файл на окружение (и при необходимости JSON для tooling):

```ts
createFileSource({
  files: ["config/base.yaml", "config/overrides.json", `config/${mode}.yml`],
  optional: true
})
```

## Client-safe config

Когда конфиг нужен браузеру, используйте [`loadConfig`](../api/functions/load-config.md) с `target: "client"`:

```ts
const clientConfig = await loadConfig(definition, {
  mode,
  target: "client",
  sources: [createEnvSource()],
  dev: false
});
```

Подтверждённое поведение:

- В non-dev режиме server namespace и server-scoped поля удаляются из client view.
- В dev режиме чтение blocked server path приводит к [`ClientAccessError`](../api/classes/client-access-error.md).

## Runtime sources (window / fetch / in-memory)

Если значения приходят в рантайме, подтверждены:

- [`createRuntimeObjectSource`](../api/functions/create-runtime-object-source.md)
- [`createWindowRuntimeSource`](../api/functions/create-window-runtime-source.md)
- [`createFetchRuntimeSource`](../api/functions/create-fetch-runtime-source.md)

Практический пример для SPA (runtime injection):

```ts
const config = await loadConfig(definition, {
  mode,
  target: "client",
  sources: [
    createWindowRuntimeSource("CONFIG"),
    createEnvSource()
  ]
});
```

## Watch mode и subscriptions (dev)

Если нужен diff и subscriptions, используйте [`watchConfig`](../api/functions/watch-config.md), а не plain [`loadConfig`](../api/functions/load-config.md).

```ts
const watched = await watchConfig(definition, {
  mode,
  sources: [
    createFileSource({ files: ["config/base.yaml"], optional: true }),
    createEnvSource()
  ]
});

watched.$subscribe("client", ({ changes }) => {
  console.log(changes.map((change) => change.path));
});
```

## React

Подтверждённый React flow:

1. Получить config через [`loadConfig`](../api/functions/load-config.md), [`watchConfig`](../api/functions/watch-config.md) или Vite virtual module.
2. Передать его в [`ConfigProvider`](../api/components/config-provider.md).
3. Читать значения через [`useConfig`](../api/hooks/use-config.md).

Если config поддерживает `$subscribe`, `useConfig(...)` будет обновляться.

## Vite

Для Vite подтверждён [`configRushPlugin`](../api/functions/config-rush-plugin.md):

- virtual module id: [`CONFIG_RUSH_CLIENT_MODULE_ID`](../api/constants/config-rush-client-module-id.md)
- update event: [`CONFIG_RUSH_UPDATE_EVENT`](../api/constants/config-rush-update-event.md)

## CLI

CLI flow строится вокруг:

- [`loadDefinitionModule`](../api/functions/load-definition-module.md)
- [`parseCliArgs`](../api/functions/parse-cli-args.md)
- [`runCli`](../api/functions/run-cli.md)

Подтверждённые команды: `inspect` и `validate`.

## Best practices (подтверждённые и безопасные)

- Держите schema в одном definition module и импортируйте её и в Node, и в Vite/React.
- Отмечайте секреты `meta({ secret: true })` и используйте `$resolved()` для логов.
- Для значений из env используйте `z.coerce.*`, если тип не string.
- Для браузера используйте `target: "client"` или Vite plugin, а не server target.
- Для dev-обновлений используйте `watchConfig(...)` или Vite HMR, а не ручной перезапуск.
