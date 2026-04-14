# createFileSource

Создаёт `ConfigSource`, который читает JSON/YAML config files.

## Назначение

[`createFileSource`](./create-file-source.md) используется для файловых config fragments, которые нужно мёрджить в заданном порядке.

## Signature

```ts
const createFileSource: (
  options: FileSourceOptions
) => ConfigSource;
```

## Parameters

### `options`

- Type: [`FileSourceOptions`](../types/file-source-options.md)
- Required: yes

## Returns

- [`ConfigSource`](../types/config-source.md)

## Throws

- `Error`, если обязательный файл отсутствует.
- `Error`, если расширение не является `.json`, `.yaml` или `.yml`.
- `Error`, если root payload не является object.

## Usage Notes

- Порядок файлов влияет на итоговый merge.
- TS file support кодом не подтверждён.

## Example

```ts
const source = createFileSource({
  files: ["config/base.json", "config/override.yaml"]
});
```

## See also

- [`FileSourceOptions`](../types/file-source-options.md)
- [`createEnvSource`](./create-env-source.md)
