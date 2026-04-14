# loadConfig

Загружает, мёрджит, валидирует и возвращает config object с helper API.

## Назначение

[`loadConfig`](./load-config.md) является центральной runtime-функцией пакета. Она резолвит mode и target, загружает все sources, выполняет deep merge, валидирует итоговую структуру Zod schema и возвращает [`LoadedConfig`](../types/loaded-config.md).

## Signature

```ts
const loadConfig: <
  TDefinition extends ConfigDefinition,
  TTarget extends ConfigTarget = "server"
>(
  definition: TDefinition,
  options?: LoadConfigOptions<TTarget>
) => Promise<LoadedConfig<InferConfig<TDefinition, TTarget>>>;
```

## Parameters

### `definition`

- Type: [`ConfigDefinition`](../types/config-definition.md)
- Required: yes

### `options`

- Type: [`LoadConfigOptions`](../types/load-config-options.md)
- Required: no

## Returns

- `Promise<`[`LoadedConfig`](../types/loaded-config.md)`<`[`InferConfig`](../types/infer-config.md)`<...>>>`

## Throws

- [`ValidationError`](../classes/validation-error.md), если итоговый payload не проходит schema validation и `validation !== "warn"`.
- [`SourceError`](../classes/source-error.md), если source падает или возвращает не plain object.

## Usage Notes

- `mode` резолвится как `options.mode ?? process.env.NODE_ENV ?? "development"`.
- По умолчанию используется `target: "server"`.
- При `target: "client"` и dev-режиме доступ к server-only paths позже приводит к [`ClientAccessError`](../classes/client-access-error.md).
- Возвращаемый объект всегда содержит [`LoadedConfigHelpers`](../types/loaded-config-helpers.md).

## Example

```ts
const config = await loadConfig(definition, {
  sources: [
    createFileSource({ files: ["config/base.yaml"], optional: true }),
    createEnvSource()
  ],
  target: "server"
});
```

## See also

- [`LoadConfigOptions`](../types/load-config-options.md)
- [`LoadedConfig`](../types/loaded-config.md)
- [`watchConfig`](./watch-config.md)
